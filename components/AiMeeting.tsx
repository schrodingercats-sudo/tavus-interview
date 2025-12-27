import React, { useState, useEffect, useRef } from 'react';
import type { PageView } from '../App';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { 
  Mic, MicOff, Video as VideoIcon, VideoOff, PhoneOff, 
  MessageSquare, Activity, Wifi, Terminal, User, AlertTriangle
} from 'lucide-react';

interface AiMeetingProps {
  onNavigate: (page: PageView) => void;
}

// --- Audio Helpers ---
function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// --- Component ---
export const AiMeeting: React.FC<AiMeetingProps> = ({ onNavigate }) => {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [connected, setConnected] = useState(false);
  const [status, setStatus] = useState('INITIALIZING');
  const [error, setError] = useState<string | null>(null); // New error state
  const [volume, setVolume] = useState(0); 
  const [logs, setLogs] = useState<string[]>(['> SYSTEM_READY']);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Refs for cleanup
  const sessionRef = useRef<Promise<any> | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioInputContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const intervalRef = useRef<any>(null);

  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Helper to add logs
  const addLog = (msg: string) => setLogs(prev => [msg, ...prev].slice(0, 50));

  // --- Cleanup Function ---
  const cleanupResources = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (processorRef.current) {
          processorRef.current.disconnect();
          processorRef.current = null;
      }
      if (sourceRef.current) {
          sourceRef.current.disconnect();
          sourceRef.current = null;
      }
      if (streamRef.current) {
          streamRef.current.getTracks().forEach(t => t.stop());
          streamRef.current = null;
      }
      if (audioInputContextRef.current) {
          audioInputContextRef.current.close();
          audioInputContextRef.current = null;
      }
      if (audioContextRef.current) {
          audioContextRef.current.close();
          audioContextRef.current = null;
      }
      setConnected(false);
  };

  // --- 1. Audio Output Handling ---
  const playAudioChunk = async (base64Audio: string) => {
    if (!audioContextRef.current) return;
    
    try {
      const arrayBuffer = base64ToUint8Array(base64Audio).buffer;
      const dataInt16 = new Int16Array(arrayBuffer);
      const sampleRate = 24000;
      const numChannels = 1;
      const frameCount = dataInt16.length / numChannels;
      
      const audioBuffer = audioContextRef.current.createBuffer(numChannels, frameCount, sampleRate);
      const channelData = audioBuffer.getChannelData(0);
      
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i] / 32768.0;
      }

      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      
      const currentTime = audioContextRef.current.currentTime;
      const startTime = Math.max(nextStartTimeRef.current, currentTime);
      source.start(startTime);
      
      nextStartTimeRef.current = startTime + audioBuffer.duration;
      
      sourcesRef.current.add(source);
      source.onended = () => sourcesRef.current.delete(source);
      
    } catch (e) {
      console.error("Error playing audio chunk", e);
    }
  };

  // --- 2. Initialize Session ---
  const startSession = async () => {
    // 1. Reset state
    cleanupResources();
    setError(null);
    setStatus('CONNECTING_TO_SATELLITE...');
    setLogs(['> SYSTEM_INIT']);

    // 2. Check API Key
    if (!process.env.API_KEY) {
        setError("Missing API_KEY in environment variables.");
        setStatus("CONFIG_ERROR");
        return;
    }

    try {
      // Audio Contexts
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContext({ sampleRate: 24000 });
      
      // Stream Setup
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true
        }, 
        video: {
            width: 640,
            height: 480
        } 
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      // Initialize Gemini Client
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Connect to Live API
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: {
             parts: [{ text: "You are Tavus, a professional senior software engineering interviewer. You are conducting a system design interview. Be concise, professional, but slightly warm. Start by asking the candidate to introduce themselves briefly." }]
          },
          speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          }
        },
        callbacks: {
          onopen: () => {
            setConnected(true);
            setStatus('SECURE_CONNECTION_ESTABLISHED');
            addLog('> LINK_ESTABLISHED');
          },
          onmessage: async (message: LiveServerMessage) => {
            // Audio
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
               await playAudioChunk(base64Audio);
               setVolume(Math.random() * 0.5 + 0.5); 
               setTimeout(() => setVolume(0), 200);
            }
            // Interrupt
            if (message.serverContent?.interrupted) {
              addLog('> INTERRUPTED');
              sourcesRef.current.forEach(source => source.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
            // Turn Complete
            if (message.serverContent?.turnComplete) {
                addLog('> TURN_COMPLETE');
            }
          },
          onclose: () => {
            setStatus('DISCONNECTED');
            setConnected(false);
          },
          onerror: (err) => {
            console.error("Gemini Live API Error:", err);
            setStatus('ERROR_CONNECTION_LOST');
            setError(err.message || "Network Error: The connection to the AI was lost.");
            cleanupResources();
          }
        }
      });
      
      sessionRef.current = sessionPromise;

      // --- 3. Input Audio Pipeline ---
      audioInputContextRef.current = new AudioContext({ sampleRate: 16000 });
      const source = audioInputContextRef.current.createMediaStreamSource(stream);
      const processor = audioInputContextRef.current.createScriptProcessor(4096, 1, 1);
      
      sourceRef.current = source;
      processorRef.current = processor;
      
      processor.onaudioprocess = async (e) => {
        if (!micOn) return; 
        
        const inputData = e.inputBuffer.getChannelData(0);
        const pcmData = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
            const s = Math.max(-1, Math.min(1, inputData[i]));
            pcmData[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }
        
        const base64 = arrayBufferToBase64(pcmData.buffer);

        if (sessionRef.current) {
            sessionRef.current.then(session => {
                session.sendRealtimeInput({
                    media: {
                        mimeType: 'audio/pcm;rate=16000',
                        data: base64
                    }
                }).catch((e: any) => {
                    // Log silent send errors usually due to closing socket
                    console.debug("Send failed (expected during close):", e);
                });
            });
        }
      };
      
      source.connect(processor);
      processor.connect(audioInputContextRef.current.destination);

      // --- 4. Input Video Pipeline ---
      intervalRef.current = setInterval(async () => {
          if (!cameraOn || !videoRef.current || !canvasRef.current) return;
          
          const ctx = canvasRef.current.getContext('2d');
          if (!ctx) return;
          
          canvasRef.current.width = videoRef.current.videoWidth / 2;
          canvasRef.current.height = videoRef.current.videoHeight / 2;
          ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
          
          const base64Image = canvasRef.current.toDataURL('image/jpeg', 0.6).split(',')[1];
          
          if (sessionRef.current) {
              sessionRef.current.then(session => {
                  session.sendRealtimeInput({
                      media: {
                          mimeType: 'image/jpeg',
                          data: base64Image
                      }
                  }).catch((e: any) => console.debug("Video send failed:", e));
              });
          }

      }, 1000);

    } catch (e: any) {
      console.error("Failed to initialize session", e);
      setStatus('INIT_FAILED');
      setError(e.message || "Failed to access camera/microphone or connect.");
      cleanupResources();
    }
  };

  useEffect(() => {
    return () => {
       cleanupResources();
    };
  }, []);

  const handleEndCall = () => {
    cleanupResources();
    onNavigate('user-dashboard');
  };

  return (
    <div className="fixed inset-0 bg-cream font-sans flex flex-col z-50">
      
      {/* Top HUD */}
      <div className="h-16 bg-white border-b-2 border-black flex items-center justify-between px-6 z-10 shrink-0">
          <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 px-2 py-1 bg-black text-white font-mono text-xs font-bold border-2 border-transparent">
                   <div className={`w-2 h-2 rounded-full ${connected ? 'bg-tavus-green animate-pulse' : error ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                   {status}
               </div>
          </div>
          <div className="font-serif text-2xl tracking-tighter">TAVUS <span className="italic text-gray-400">Interview Protocol</span></div>
          <div className="flex items-center gap-4 text-xs font-mono font-bold">
               <div className="flex items-center gap-1"><Wifi size={14}/> 5ms</div>
               <div className="flex items-center gap-1"><Activity size={14}/> STABLE</div>
          </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 p-6 flex flex-col md:flex-row gap-6 overflow-hidden relative">
          
          {/* OVERLAY MODAL */}
          {!connected && status !== 'CONNECTING_TO_SATELLITE...' && (
              <div className="absolute inset-0 z-50 bg-cream/90 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="window-border bg-white p-8 max-w-md text-center shadow-hard-lg animate-in fade-in zoom-in duration-200">
                      
                      {error ? (
                        <>
                             <div className="w-16 h-16 bg-red-100 mx-auto mb-6 flex items-center justify-center border-2 border-red-500 rounded-full">
                                <AlertTriangle className="text-red-500 w-8 h-8" />
                            </div>
                            <h2 className="font-serif text-3xl mb-2 text-deep-black">Connection Interrupted</h2>
                            <p className="font-sans text-red-600 mb-6 font-bold text-sm bg-red-50 p-2 border border-red-200">
                                {error}
                            </p>
                            <div className="flex flex-col gap-3">
                                <button 
                                    onClick={startSession}
                                    className="w-full bg-black text-white border-2 border-black py-3 font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-hard"
                                >
                                    Retry Connection
                                </button>
                                <button 
                                    onClick={() => onNavigate('user-dashboard')}
                                    className="w-full bg-white text-black border-2 border-black py-3 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all"
                                >
                                    Return to Dashboard
                                </button>
                            </div>
                        </>
                      ) : (
                        <>
                            <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                                <Terminal className="text-tavus-green w-8 h-8" />
                            </div>
                            <h2 className="font-serif text-4xl mb-2">Ready to begin?</h2>
                            <p className="font-sans text-gray-600 mb-8">
                                The AI interviewer will analyze your video and audio in real-time. 
                                Find a quiet space and ensure your camera is enabled.
                            </p>
                            <button 
                                onClick={startSession}
                                className="w-full bg-tavus-pink text-black border-2 border-black py-4 font-bold uppercase tracking-widest hover:translate-y-1 hover:shadow-none shadow-hard transition-all"
                            >
                                Initialize Session
                            </button>
                        </>
                      )}
                  </div>
              </div>
          )}

          {/* Left: Main AI View */}
          <div className="flex-1 flex flex-col gap-4 h-full">
              <div className="flex-1 window-border bg-black relative flex flex-col overflow-hidden">
                   <div className="window-header bg-[#E0E7FF] border-gray-600 justify-between">
                       <div className="flex items-center gap-2">
                           <div className="square-icon bg-blue-500"></div> INTERVIEWER_FEED
                       </div>
                       <div className="text-[10px] opacity-50">720p • 60fps</div>
                   </div>
                   
                   <div className="relative flex-1 bg-gray-900 flex items-center justify-center overflow-hidden">
                       {/* Abstract AI Avatar / Visualizer */}
                       <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none bg-[url('https://media.giphy.com/media/26tn33ai01pFJeC5i/giphy.gif')] bg-cover"></div>
                       
                       <div className="relative z-10 flex flex-col items-center gap-4">
                           <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/20 flex items-center justify-center overflow-hidden transition-all duration-100 ${volume > 0.1 ? 'scale-105 border-tavus-green shadow-[0_0_30px_rgba(74,222,128,0.5)]' : ''}`}>
                                <img 
                                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale contrast-125" 
                                    alt="AI Avatar"
                                />
                           </div>
                           <div className="h-4 flex items-end gap-1">
                               {[...Array(8)].map((_, i) => (
                                   <div 
                                    key={i} 
                                    className="w-2 bg-tavus-green transition-all duration-75"
                                    style={{ height: volume > 0.1 ? `${Math.random() * 24 + 4}px` : '4px' }}
                                   ></div>
                               ))}
                           </div>
                       </div>
                   </div>
                   
                   {/* Transcript Overlay */}
                   <div className="absolute bottom-4 left-4 right-4 h-32 bg-black/80 backdrop-blur border border-gray-700 p-3 font-mono text-xs text-green-400 overflow-y-auto mask-linear-fade">
                        {logs.map((log, i) => (
                            <div key={i} className="mb-1">{log}</div>
                        ))}
                   </div>
              </div>
          </div>

          {/* Right: Sidebar */}
          <div className="w-full md:w-80 flex flex-col gap-6 h-full">
              
              {/* User Camera */}
              <div className="window-border bg-white h-48 relative shrink-0">
                  <div className="window-header bg-[#FFD1D1]">
                      <div className="square-icon bg-red-500"></div> YOUR_FEED
                  </div>
                  <div className="absolute inset-0 top-7 bg-gray-100 flex items-center justify-center overflow-hidden">
                      {cameraOn ? (
                        <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover transform scale-x-[-1]" />
                      ) : (
                        <div className="flex flex-col items-center text-gray-400 gap-2">
                             <User size={32} />
                             <span className="text-[10px] font-mono uppercase">Camera Disabled</span>
                        </div>
                      )}
                      <canvas ref={canvasRef} className="hidden" />
                      {!micOn && (
                          <div className="absolute bottom-2 right-2 bg-red-500 text-white p-1 rounded-sm shadow-sm">
                              <MicOff size={12} />
                          </div>
                      )}
                  </div>
              </div>

              {/* Controls */}
              <div className="window-border bg-white flex-1 flex flex-col">
                   <div className="window-header bg-gray-200">
                       <div className="square-icon bg-gray-500"></div> CONTROLS
                   </div>
                   <div className="p-4 grid grid-cols-2 gap-3 content-start">
                        <button 
                            onClick={() => setMicOn(!micOn)}
                            className={`p-4 border-2 border-black font-bold uppercase text-[10px] flex flex-col items-center gap-2 shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all ${!micOn ? 'bg-red-100 text-red-600' : 'bg-white'}`}
                        >
                            {micOn ? <Mic size={20}/> : <MicOff size={20}/>}
                            {micOn ? 'Mute' : 'Unmute'}
                        </button>

                        <button 
                            onClick={() => setCameraOn(!cameraOn)}
                            className={`p-4 border-2 border-black font-bold uppercase text-[10px] flex flex-col items-center gap-2 shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all ${!cameraOn ? 'bg-red-100 text-red-600' : 'bg-white'}`}
                        >
                            {cameraOn ? <VideoIcon size={20}/> : <VideoOff size={20}/>}
                            {cameraOn ? 'Stop Video' : 'Start Video'}
                        </button>

                        <button 
                            className="col-span-2 p-4 border-2 border-black font-bold uppercase text-[10px] flex flex-col items-center gap-2 shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all bg-white"
                        >
                            <MessageSquare size={20}/> Show Transcript
                        </button>
                   </div>
                   
                   <div className="mt-auto p-4 border-t-2 border-black bg-gray-50">
                        <button 
                            onClick={handleEndCall}
                            className="w-full bg-red-500 text-white border-2 border-black py-3 font-bold uppercase text-xs tracking-widest shadow-hard hover:bg-red-600 hover:shadow-none hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                        >
                            <PhoneOff size={16}/> End Session
                        </button>
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};