import React from 'react';
import { MessageSquare, Video, Mic, Paperclip, Send } from 'lucide-react';

export const PalsDemo: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#EBEBE8] border-y-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-deep-black mb-6">Meet the PALs.</h2>
            <p className="text-lg md:text-xl font-sans text-gray-600 max-w-xl mx-auto">
                Your personal AI that remembers, evolves, and never logs off. <br className="hidden md:block"/>
                Call them. Text them. Or talk face-to-face.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Main Face Video - Spans 7 cols */}
            <div className="lg:col-span-7 window-border w-full">
                <div className="window-header bg-[#FFD1D1]">
                    <div className="square-icon bg-red-500"></div>
                    FACE-TO-FACE VIDEO
                </div>
                <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                        alt="AI PAL" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Controls */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        <button className="p-2 md:p-3 bg-white border-2 border-black hover:bg-gray-100">
                            <MessageSquare size={18} />
                        </button>
                        <button className="p-2 md:p-3 bg-white border-2 border-black hover:bg-gray-100">
                            <Video size={18} />
                        </button>
                        <button className="p-2 md:p-3 bg-white border-2 border-black hover:bg-gray-100">
                            <Mic size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Column - Spans 5 cols */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                
                {/* Chat Window */}
                <div className="window-border">
                    <div className="window-header bg-[#D1FFD6]">
                        <div className="square-icon bg-green-500"></div>
                        CHAT
                    </div>
                    <div className="bg-white p-4 font-sans text-sm h-[200px] flex flex-col justify-between">
                        <div className="space-y-3 overflow-hidden">
                            <div className="bg-gray-100 p-2 border border-gray-300 rounded-sm self-end ml-8">
                                I'm thinking of going on a bike trip in patagonia, could you price it out?
                            </div>
                            <div className="bg-transparent p-0 self-start mr-8">
                                <span className="font-bold">PAL:</span> No prob. I did a bunch of research and priced out everything out in <span className="underline text-blue-600 cursor-pointer">this sheet</span>.
                            </div>
                        </div>
                        <div className="mt-2 border-2 border-black p-1 flex items-center justify-between">
                             <span className="text-gray-400 pl-1 uppercase text-xs">WRITE A RESPONSE...</span>
                             <div className="p-1 hover:bg-gray-200 cursor-pointer"><Send size={14}/></div>
                        </div>
                    </div>
                </div>

                {/* Voice Window */}
                <div className="window-border">
                    <div className="window-header bg-[#FFEDD1]">
                         <div className="square-icon bg-orange-500"></div>
                         VOICE
                    </div>
                    <div className="bg-white p-4">
                        <div className="border border-gray-300 p-2 flex items-center gap-2 mb-2">
                            <div className="flex-1 h-1 bg-gray-200">
                                <div className="w-1/4 h-full bg-black"></div>
                            </div>
                            <button className="bg-tavus-green text-xs font-bold px-2 py-1 border border-black flex items-center gap-1">
                                <Mic size={12}/> LISTEN
                            </button>
                        </div>
                        <div className="h-16 bg-black flex items-center justify-center overflow-hidden relative">
                             {/* Fake Waveform */}
                             <div className="flex items-end justify-center gap-[2px] h-full w-full px-4">
                                {[...Array(30)].map((_, i) => (
                                    <div key={i} className="w-1 bg-green-500" style={{ height: `${Math.random() * 100}%` }}></div>
                                ))}
                             </div>
                             {/* Central Orb */}
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-8 h-8 rounded-full bg-black border-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="text-center mt-12 md:mt-20">
             <h3 className="font-serif text-3xl md:text-4xl mb-6">Your new intern, friend, or both.</h3>
             <button className="bg-tavus-dark-pink text-white text-sm font-bold uppercase tracking-widest px-8 py-3 border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
                Join the Queue
            </button>
        </div>

      </div>
    </section>
  );
};