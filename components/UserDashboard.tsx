import React, { useState } from 'react';
import type { PageView } from '../App';
import { 
  Play, TrendingUp, AlertCircle, FileText, CheckCircle2, 
  Settings, Clock, Mic, Upload, BarChart3, Target, XCircle, LogOut,
  X, User, Bell, Shield, Key
} from 'lucide-react';

interface UserDashboardProps {
  onNavigate: (page: PageView) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ onNavigate }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security'>('profile');

  // Settings State Mock
  const [name, setName] = useState('Alex Chen');
  const [role, setRole] = useState('Software Engineer');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F2F0] p-4 lg:p-8 font-sans relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black pb-6 mb-8 gap-4">
            <div>
                <h1 className="font-serif text-4xl md:text-6xl text-deep-black leading-none mb-2">Hello, {name.split(' ')[0]}</h1>
                <p className="font-mono text-sm text-gray-600 uppercase tracking-widest">{role} • Mid-Level</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setShowSettings(true)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white hover:bg-gray-100 font-bold text-xs uppercase transition-colors"
                >
                    <Settings size={14}/> Settings
                </button>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-black text-white hover:bg-gray-800 font-bold text-xs uppercase"
                >
                   <LogOut size={14} /> Log Out
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
                
                {/* 1. Home Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Readiness Score */}
                    <div className="window-border bg-white p-6 flex flex-col items-center justify-center text-center">
                         <div className="text-xs font-mono font-bold uppercase text-gray-500 mb-2">Readiness Score</div>
                         <div className="text-6xl font-serif text-deep-black mb-1">72<span className="text-2xl text-gray-400">/100</span></div>
                         <div className="text-xs font-bold bg-yellow-200 px-2 py-1 border border-black">IMPROVING</div>
                    </div>
                    
                    {/* Weakest Skills */}
                    <div className="window-border bg-white md:col-span-2 relative">
                        <div className="window-header bg-[#FFD1D1]">
                            <div className="square-icon bg-red-500"></div> WEAKEST SKILLS
                        </div>
                        <div className="p-4 space-y-3">
                             <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-2">
                                 <div className="flex items-center gap-2">
                                     <AlertCircle size={16} className="text-red-500" />
                                     <span>System Design Architecture</span>
                                 </div>
                                 <span className="font-mono text-red-500 font-bold">LOW</span>
                             </div>
                             <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-2">
                                 <div className="flex items-center gap-2">
                                     <AlertCircle size={16} className="text-orange-500" />
                                     <span>Behavioral: Conflict Resolution</span>
                                 </div>
                                 <span className="font-mono text-orange-500 font-bold">MED</span>
                             </div>
                             <div className="flex items-center justify-between text-sm">
                                 <div className="flex items-center gap-2">
                                     <AlertCircle size={16} className="text-orange-500" />
                                     <span>React Hooks Optimization</span>
                                 </div>
                                 <span className="font-mono text-orange-500 font-bold">MED</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* 2. AI Mock Interview (Core Feature) */}
                <div className="window-border bg-deep-black">
                    <div className="window-header bg-gray-800 text-white border-gray-600">
                        <div className="square-icon bg-green-500"></div> AI SIMULATION DECK
                    </div>
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                        <div className="space-y-6 order-2 md:order-1">
                            <h2 className="font-serif text-3xl">Start New Simulation</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Role</label>
                                    <select className="w-full bg-gray-900 border border-gray-700 text-white p-2 font-mono text-sm focus:border-green-500 outline-none">
                                        <option>Frontend Developer</option>
                                        <option>Backend Developer</option>
                                        <option>Product Manager</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Difficulty</label>
                                        <select className="w-full bg-gray-900 border border-gray-700 text-white p-2 font-mono text-sm focus:border-green-500 outline-none">
                                            <option>Hard</option>
                                            <option>Medium</option>
                                            <option>Easy</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Mode</label>
                                        <select className="w-full bg-gray-900 border border-gray-700 text-white p-2 font-mono text-sm focus:border-green-500 outline-none">
                                            <option>Voice + Video</option>
                                            <option>Voice Only</option>
                                            <option>Text Only</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => onNavigate('ai-meeting')}
                                className="w-full bg-tavus-green text-black font-bold uppercase tracking-widest py-3 border-2 border-transparent hover:border-white hover:bg-green-400 transition-all flex items-center justify-center gap-2"
                            >
                                <Play size={16} fill="black" /> Initialize Session
                            </button>
                        </div>
                        
                        <div className="bg-gray-900 border border-gray-700 p-4 font-mono text-xs text-green-400 relative overflow-hidden order-1 md:order-2">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-pulse"></div>
                            <p className="mb-2">> AI: Ready to evaluate.</p>
                            <p className="mb-2">> CHECKS:</p>
                            <ul className="list-disc pl-4 space-y-1 text-gray-400">
                                <li>Content Quality</li>
                                <li>Structure (STAR Method)</li>
                                <li>Confidence Level</li>
                                <li>Filler Words Detection</li>
                            </ul>
                            <p className="mt-4 text-white animate-pulse">_WAITING_FOR_USER_INPUT</p>
                        </div>
                    </div>
                </div>

                {/* 4. Personalized Training Plan */}
                <div className="window-border bg-cream">
                    <div className="window-header bg-[#E0E7FF]">
                        <div className="square-icon bg-blue-500"></div> TRAINING PROTOCOL
                    </div>
                    <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex-1">
                            <div className="text-xs font-mono font-bold uppercase text-blue-600 mb-2">TODAY'S MISSION</div>
                            <h3 className="font-serif text-2xl mb-2">Mastering the "Tell Me About Yourself" Pitch</h3>
                            <p className="text-sm text-gray-600">Your last attempt was 45s too long and lacked a clear conclusion. Refine your closing hook.</p>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="flex flex-col items-center">
                                <span className="font-bold text-lg">15</span>
                                <span className="text-[10px] uppercase font-mono">Min</span>
                            </div>
                            <button 
                                onClick={() => onNavigate('ai-meeting')}
                                className="flex-1 md:flex-none bg-blue-600 text-white px-6 py-3 font-bold uppercase text-xs border-2 border-black hover:bg-blue-700 shadow-hard text-center"
                            >
                                Start Task
                            </button>
                        </div>
                    </div>
                </div>
                
                 {/* 6. Resume & Answer Analyzer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="window-border bg-white">
                        <div className="window-header bg-[#FFEDD1]">
                            <div className="square-icon bg-orange-500"></div> RESUME ANALYZER
                        </div>
                        <div className="p-6 text-center">
                            <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-6 mb-4 hover:bg-white transition-colors cursor-pointer group">
                                <Upload className="w-8 h-8 mx-auto text-gray-400 group-hover:text-black mb-2" />
                                <p className="text-xs font-bold text-gray-500">DROP PDF HERE</p>
                            </div>
                            <div className="flex justify-between items-center text-left">
                                <div>
                                    <div className="text-xs font-mono text-gray-500">LAST ATS SCORE</div>
                                    <div className="text-2xl font-serif">68%</div>
                                </div>
                                <button className="text-xs underline font-bold">View Report</button>
                            </div>
                        </div>
                    </div>

                    <div className="window-border bg-white">
                        <div className="window-header bg-[#D1FFD6]">
                            <div className="square-icon bg-green-500"></div> QUESTION BANK
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                                <span className="px-2 py-1 border border-black text-[10px] font-bold bg-black text-white whitespace-nowrap">Technical</span>
                                <span className="px-2 py-1 border border-black text-[10px] font-bold bg-white whitespace-nowrap">Behavioral</span>
                                <span className="px-2 py-1 border border-black text-[10px] font-bold bg-white whitespace-nowrap">System Design</span>
                            </div>
                            <div className="space-y-3">
                                <div className="text-sm border-b border-gray-100 pb-2 cursor-pointer hover:bg-gray-50 p-1">
                                    Explain the Virtual DOM?
                                </div>
                                <div className="text-sm border-b border-gray-100 pb-2 cursor-pointer hover:bg-gray-50 p-1">
                                    Describe a time you failed?
                                </div>
                                <div className="text-xs text-center pt-2 font-bold underline cursor-pointer">Browse all 1,204 questions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN (4 cols) - Stats & Breakdown */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* 3. Skill Breakdown */}
                <div className="window-border bg-white">
                    <div className="window-header">
                        <div className="square-icon bg-black"></div> SKILL METRICS
                    </div>
                    <div className="p-6 space-y-6">
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <span>COMMUNICATION</span>
                                <span>88%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 border border-black">
                                <div className="h-full bg-tavus-pink w-[88%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <span>TECHNICAL</span>
                                <span>65%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 border border-black">
                                <div className="h-full bg-blue-500 w-[65%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <span>PROBLEM SOLVING</span>
                                <span>74%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 border border-black">
                                <div className="h-full bg-yellow-400 w-[74%]"></div>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                             <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs font-bold">BODY LANGUAGE</span>
                                 <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">GOOD</span>
                             </div>
                             <div className="grid grid-cols-4 gap-1 h-8">
                                 <div className="bg-green-400 h-full w-full"></div>
                                 <div className="bg-green-400 h-full w-full"></div>
                                 <div className="bg-green-400 h-full w-full"></div>
                                 <div className="bg-gray-200 h-full w-full"></div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* 7. Progress & History */}
                <div className="window-border bg-white">
                    <div className="window-header">
                        <div className="square-icon bg-purple-500"></div> ACTIVITY LOG
                    </div>
                    <div className="p-6">
                        <div className="flex items-end justify-between h-32 gap-2 mb-4 border-b border-black pb-2">
                             {[40, 60, 45, 70, 65, 80, 72].map((h, i) => (
                                 <div key={i} className="w-full bg-purple-200 border-t border-x border-purple-800 relative group" style={{ height: `${h}%` }}>
                                     <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1">
                                         {h}
                                     </div>
                                 </div>
                             ))}
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={12} className="text-green-600"/>
                                    <span className="text-gray-600">Mock Interview #4</span>
                                </div>
                                <span className="font-mono">2h ago</span>
                            </div>
                             <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <XCircle size={12} className="text-red-500"/>
                                    <span className="text-gray-600">Failed: System Design</span>
                                </div>
                                <span className="font-mono">Yesterday</span>
                            </div>
                             <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <FileText size={12} className="text-blue-500"/>
                                    <span className="text-gray-600">Resume Uploaded</span>
                                </div>
                                <span className="font-mono">3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 8. Next Action */}
                <div className="bg-yellow-100 border-2 border-black p-4 text-center shadow-hard">
                    <p className="font-serif text-xl mb-2">Keep the streak alive!</p>
                    <p className="text-xs text-gray-600 mb-4">You've practiced 4 days in a row.</p>
                    <button 
                        onClick={() => onNavigate('ai-meeting')}
                        className="w-full bg-black text-white font-bold uppercase text-xs py-2 hover:bg-gray-800"
                    >
                        Practice Now
                    </button>
                </div>

            </div>
        </div>

      {/* SETTINGS MODAL */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="window-border bg-white w-full max-w-2xl shadow-hard-lg">
              
              {/* Modal Header */}
              <div className="window-header bg-gray-200 justify-between">
                  <div className="flex items-center gap-2">
                      <div className="square-icon bg-gray-500"></div> USER_PREFERENCES.CONFIG
                  </div>
                  <button onClick={() => setShowSettings(false)} className="hover:bg-red-500 hover:text-white transition-colors p-1">
                      <X size={14}/>
                  </button>
              </div>
              
              <div className="flex flex-col md:flex-row h-[400px]">
                  
                  {/* Sidebar */}
                  <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50 p-4 flex flex-col gap-2">
                      <button 
                        onClick={() => setActiveTab('profile')}
                        className={`text-left px-3 py-2 text-xs font-bold uppercase flex items-center gap-2 border-2 ${activeTab === 'profile' ? 'bg-white border-black shadow-hard-sm' : 'border-transparent text-gray-500 hover:text-black'}`}
                      >
                         <User size={14} /> Profile
                      </button>
                      <button 
                        onClick={() => setActiveTab('notifications')}
                        className={`text-left px-3 py-2 text-xs font-bold uppercase flex items-center gap-2 border-2 ${activeTab === 'notifications' ? 'bg-white border-black shadow-hard-sm' : 'border-transparent text-gray-500 hover:text-black'}`}
                      >
                         <Bell size={14} /> Notifications
                      </button>
                      <button 
                        onClick={() => setActiveTab('security')}
                        className={`text-left px-3 py-2 text-xs font-bold uppercase flex items-center gap-2 border-2 ${activeTab === 'security' ? 'bg-white border-black shadow-hard-sm' : 'border-transparent text-gray-500 hover:text-black'}`}
                      >
                         <Shield size={14} /> Security
                      </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 overflow-y-auto">
                      
                      {activeTab === 'profile' && (
                          <div className="space-y-6">
                              <h3 className="font-serif text-2xl border-b pb-2">Public Profile</h3>
                              <div className="space-y-4">
                                  <div>
                                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 block mb-1">Display Name</label>
                                      <input 
                                        type="text" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-gray-50 border-2 border-black p-2 font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_#000]" 
                                      />
                                  </div>
                                  <div>
                                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 block mb-1">Job Title</label>
                                      <input 
                                        type="text" 
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-gray-50 border-2 border-black p-2 font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_#000]" 
                                      />
                                  </div>
                              </div>
                          </div>
                      )}

                      {activeTab === 'notifications' && (
                          <div className="space-y-6">
                              <h3 className="font-serif text-2xl border-b pb-2">Alerts</h3>
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between border-2 border-gray-100 p-3 hover:border-black transition-colors bg-white">
                                      <div>
                                          <div className="text-sm font-bold">Email Digest</div>
                                          <div className="text-xs text-gray-500">Weekly summary of your progress</div>
                                      </div>
                                      <button 
                                        onClick={() => setEmailNotifs(!emailNotifs)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${emailNotifs ? 'bg-green-500' : 'bg-gray-300'}`}
                                      >
                                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${emailNotifs ? 'left-6' : 'left-1'}`}></div>
                                      </button>
                                  </div>
                                  <div className="flex items-center justify-between border-2 border-gray-100 p-3 hover:border-black transition-colors bg-white">
                                      <div>
                                          <div className="text-sm font-bold">Push Notifications</div>
                                          <div className="text-xs text-gray-500">Real-time alerts for interview feedback</div>
                                      </div>
                                      <button 
                                        onClick={() => setPushNotifs(!pushNotifs)}
                                        className={`w-10 h-5 rounded-full relative transition-colors ${pushNotifs ? 'bg-green-500' : 'bg-gray-300'}`}
                                      >
                                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${pushNotifs ? 'left-6' : 'left-1'}`}></div>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      )}

                      {activeTab === 'security' && (
                          <div className="space-y-6">
                              <h3 className="font-serif text-2xl border-b pb-2">Credentials</h3>
                              <div className="space-y-4">
                                  <div>
                                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 block mb-1">Email</label>
                                      <div className="flex gap-2">
                                         <input type="email" value="alex@example.com" disabled className="flex-1 bg-gray-100 border border-gray-300 p-2 text-sm text-gray-500 cursor-not-allowed" />
                                      </div>
                                  </div>
                                  <button className="flex items-center gap-2 text-xs font-bold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors w-max">
                                      <Key size={14} /> Change Password
                                  </button>
                              </div>
                          </div>
                      )}

                  </div>
              </div>

              <div className="bg-gray-100 border-t border-gray-300 p-4 flex justify-end gap-2">
                  <button onClick={() => setShowSettings(false)} className="px-4 py-2 text-xs font-bold uppercase text-gray-600 hover:text-black">Cancel</button>
                  <button onClick={() => setShowSettings(false)} className="px-6 py-2 bg-black text-white text-xs font-bold uppercase shadow-hard hover:shadow-none hover:translate-y-0.5 border-2 border-black">Save Changes</button>
              </div>

           </div>
        </div>
      )}
    </div>
  );
};