import React, { useState, useEffect } from 'react';
import type { PageView } from '../App';
import { 
  Users, Activity, DollarSign, Cpu, Sliders, Database, 
  ShieldAlert, LayoutTemplate, LogOut, Clock, Search, 
  Terminal, Globe, Server, AlertTriangle, CheckCircle, RefreshCw,
  Settings, X, Lock, Zap
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (page: PageView) => void;
}

const StatCard: React.FC<{ title: string; value: string; trend: string; icon: any; alert?: boolean }> = ({ title, value, trend, icon: Icon, alert }) => (
    <div className={`window-border bg-white p-4 ${alert ? 'border-red-500' : ''}`}>
        <div className="flex justify-between items-start mb-4">
             <div className={`p-2 border border-black ${alert ? 'bg-red-100 text-red-600' : 'bg-gray-100'}`}>
                 <Icon size={20} />
             </div>
             <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{trend}</span>
        </div>
        <div className="text-3xl font-serif text-deep-black mb-1">{value}</div>
        <div className="text-[10px] font-mono text-gray-500 uppercase">{title}</div>
    </div>
);

// Simulated Live Logs
const generateLog = () => {
    const actions = ['User_Login', 'API_Request', 'Model_Inference', 'Payment_Success', 'Error_500'];
    const users = ['User_8492', 'User_1102', 'User_3391', 'User_Admin', 'System'];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const user = users[Math.floor(Math.random() * users.length)];
    const time = new Date().toLocaleTimeString();
    return `[${time}] ${user} performed ${action}`;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'ai' | 'finance'>('overview');
  const [logs, setLogs] = useState<string[]>(['[10:00:01] System initialized']);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [debugLevel, setDebugLevel] = useState('INFO');

  // Live Log Simulation
  useEffect(() => {
    const interval = setInterval(() => {
        setLogs(prev => [generateLog(), ...prev].slice(0, 8));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-2 md:p-4 font-sans text-black relative">
      
      {/* Admin Top Bar */}
      <div className="bg-deep-black text-white p-4 flex flex-col md:flex-row justify-between items-center border-b-4 border-tavus-pink mb-6 md:mb-8 shadow-hard gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto justify-between">
              <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-lg md:text-xl tracking-tighter">TAVUS_ADMIN</span>
                  <span className="bg-red-600 text-[10px] px-2 py-0.5 rounded font-bold uppercase animate-pulse">Live</span>
              </div>
              
              {/* Mobile Actions */}
              <div className="flex md:hidden gap-4">
                  <button onClick={() => setShowSettings(true)} className="text-xs font-bold uppercase hover:text-gray-300">
                      <Settings size={16} />
                  </button>
                  <button onClick={() => onNavigate('home')} className="text-xs font-bold uppercase hover:text-gray-300">
                      <LogOut size={16} />
                  </button>
              </div>
          </div>
          
          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex gap-1 bg-gray-900 p-1 rounded-sm">
               {['overview', 'users', 'ai', 'finance'].map((tab) => (
                   <button 
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-4 py-1 text-xs font-bold uppercase rounded-sm transition-colors ${activeTab === tab ? 'bg-tavus-pink text-black' : 'text-gray-400 hover:text-white'}`}
                   >
                       {tab}
                   </button>
               ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 text-xs font-bold uppercase hover:text-tavus-pink transition-colors"
              >
                  <Settings size={14} /> Settings
              </button>
              <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-xs font-bold uppercase hover:text-gray-300">
                  <LogOut size={14} /> Exit Console
              </button>
          </div>
      </div>

      {/* Mobile Tabs */}
      <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-4">
          {['overview', 'users', 'ai', 'finance'].map((tab) => (
               <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-none px-4 py-2 border-2 border-black text-xs font-bold uppercase shadow-hard-sm ${activeTab === tab ? 'bg-tavus-pink text-black' : 'bg-white text-black'}`}
               >
                   {tab}
               </button>
           ))}
      </div>

      <div className="max-w-7xl mx-auto space-y-8">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Stats Row */}
                <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard title="Total Users" value="14,203" trend="+12% this week" icon={Users} />
                    <StatCard title="Active Users" value="8,492" trend="+5% this week" icon={Activity} />
                    <StatCard title="Avg Session" value="24m 12s" trend="-2% this week" icon={Clock} />
                    <StatCard title="AI Cost / User" value="$0.42" trend="+8% (Alert)" icon={DollarSign} alert />
                </div>

                {/* Live Operations Feed */}
                <div className="lg:col-span-3 window-border bg-[#1E1E1E] text-green-400 font-mono text-xs flex flex-col h-[300px]">
                    <div className="window-header bg-[#333] text-gray-200 border-gray-600">
                        <div className="square-icon bg-green-500 animate-pulse"></div> SYSTEM_EVENTS_STREAM
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto space-y-2">
                        {logs.map((log, i) => (
                            <div key={i} className={`opacity-${100 - i * 10}`}>
                                <span className="text-gray-500 mr-2">{'>'}</span>
                                {log}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Server Health */}
                <div className="lg:col-span-1 window-border bg-white">
                    <div className="window-header bg-gray-100">
                        <div className="square-icon bg-blue-500"></div> INFRASTRUCTURE
                    </div>
                    <div className="p-4 space-y-6 text-black">
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <div className="flex items-center gap-1"><Server size={12}/> US-EAST-1</div>
                                <span className="text-green-600">OPERATIONAL</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200"><div className="w-[45%] h-full bg-green-500"></div></div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <div className="flex items-center gap-1"><Server size={12}/> EU-WEST-2</div>
                                <span className="text-green-600">OPERATIONAL</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200"><div className="w-[62%] h-full bg-green-500"></div></div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <div className="flex items-center gap-1"><Database size={12}/> VECTOR_DB</div>
                                <span className="text-yellow-600">HIGH LOAD</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200"><div className="w-[88%] h-full bg-yellow-500 animate-pulse"></div></div>
                        </div>
                    </div>
                </div>

                {/* Issue Log Summary */}
                <div className="lg:col-span-4 window-border bg-white text-black">
                     <div className="window-header bg-[#FFD1D1]">
                         <div className="square-icon bg-red-500"></div> CRITICAL_ALERTS (3)
                     </div>
                     <div className="p-4 overflow-x-auto">
                         <table className="w-full text-left text-sm whitespace-nowrap">
                             <thead>
                                 <tr className="border-b border-black text-xs uppercase text-gray-500">
                                     <th className="pb-2">Time</th>
                                     <th className="pb-2">Severity</th>
                                     <th className="pb-2">Component</th>
                                     <th className="pb-2">Message</th>
                                     <th className="pb-2">Action</th>
                                 </tr>
                             </thead>
                             <tbody className="divide-y divide-gray-100">
                                 <tr>
                                     <td className="py-2">10:42 AM</td>
                                     <td className="py-2"><span className="bg-red-100 text-red-600 px-2 py-0.5 text-xs font-bold rounded">CRITICAL</span></td>
                                     <td className="py-2">Voice_Engine_V2</td>
                                     <td className="py-2">Latency spike > 2000ms detected in AP-SOUTH</td>
                                     <td className="py-2"><button className="underline text-blue-600 font-bold">Investigate</button></td>
                                 </tr>
                                 <tr>
                                     <td className="py-2">09:15 AM</td>
                                     <td className="py-2"><span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 text-xs font-bold rounded">WARN</span></td>
                                     <td className="py-2">Billing_Service</td>
                                     <td className="py-2">Webhook delivery failure (Stripe)</td>
                                     <td className="py-2"><button className="underline text-blue-600 font-bold">Retry</button></td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                </div>
            </div>
        )}

        {/* AI CONFIGURATION TAB */}
        {activeTab === 'ai' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2 window-border bg-white">
                     <div className="window-header bg-[#E0E7FF]">
                         <div className="square-icon bg-indigo-500"></div> GLOBAL_SYSTEM_PROMPT
                     </div>
                     <div className="p-4 text-black">
                         <div className="mb-4 text-sm text-gray-600">
                             This instruction is prepended to all "Interviewer" personas. Changes propagate immediately.
                         </div>
                         <textarea 
                            className="w-full h-64 bg-gray-50 border-2 border-black p-4 font-mono text-xs focus:outline-none focus:bg-white resize-none text-black"
                            defaultValue={`You are an expert technical interviewer.
Your goal is to assess the candidate's proficiency in:
1. System Design
2. Coding capability
3. Communication

Be firm but fair. If the candidate struggles, offer one hint. If they continue to struggle, move on.
Maintain a professional tone. Do not be overly encouraging.`}
                         ></textarea>
                         <div className="flex justify-end gap-4 mt-4">
                             <button className="px-4 py-2 border-2 border-transparent text-gray-500 font-bold uppercase text-xs hover:text-black">Reset to Default</button>
                             <button className="px-6 py-2 bg-black text-white border-2 border-black font-bold uppercase text-xs shadow-hard hover:bg-white hover:text-black hover:shadow-none transition-all">
                                 Deploy Changes
                             </button>
                         </div>
                     </div>
                 </div>

                 <div className="lg:col-span-1 space-y-6">
                      <div className="window-border bg-[#1a1a1a] text-white">
                          <div className="window-header bg-[#333] border-gray-600 text-gray-300">
                              <div className="square-icon bg-green-500"></div> MODEL_ROUTING
                          </div>
                          <div className="p-6 space-y-6">
                              <div>
                                  <label className="text-[10px] uppercase font-mono text-gray-400 mb-2 block">Primary Model</label>
                                  <select className="w-full bg-black border border-gray-600 p-2 text-sm focus:border-green-500 outline-none text-white">
                                      <option>GPT-4o (Current)</option>
                                      <option>Claude 3.5 Sonnet</option>
                                      <option>Gemini 1.5 Pro</option>
                                  </select>
                              </div>
                              <div>
                                  <label className="text-[10px] uppercase font-mono text-gray-400 mb-2 block">Fallback Model</label>
                                  <select className="w-full bg-black border border-gray-600 p-2 text-sm focus:border-green-500 outline-none text-white">
                                      <option>GPT-3.5 Turbo</option>
                                      <option>Claude 3 Haiku</option>
                                      <option selected>Gemini 1.5 Flash</option>
                                  </select>
                              </div>
                              <div className="pt-4 border-t border-gray-700">
                                  <div className="flex items-center justify-between mb-2">
                                      <span className="text-xs text-gray-400">Temp</span>
                                      <span className="text-xs font-mono text-green-400">0.7</span>
                                  </div>
                                  <input type="range" className="w-full h-1 bg-gray-700 accent-green-500" />
                              </div>
                          </div>
                      </div>

                      <div className="window-border bg-white p-4 text-black">
                          <h3 className="font-bold text-sm mb-4">Safety Filters</h3>
                          <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-600">PII Redaction</span>
                                  <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                              </div>
                              <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-600">Profanity Filter</span>
                                  <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                              </div>
                              <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-600">Competitor Mention</span>
                                  <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                              </div>
                          </div>
                      </div>
                 </div>
            </div>
        )}

        {/* USERS TAB */}
        {activeTab === 'users' && (
            <div className="window-border bg-white">
                <div className="window-header">
                    <div className="square-icon bg-orange-500"></div> USER_DATABASE
                </div>
                <div className="p-4 text-black">
                    {/* Toolbar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Search by email, ID, or name..." 
                                className="w-full pl-10 pr-4 py-2 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none text-sm text-black"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2">
                            <select className="border-2 border-black bg-white px-4 py-2 text-sm font-bold text-black">
                                <option>All Plans</option>
                                <option>Free</option>
                                <option>Pro</option>
                                <option>Enterprise</option>
                            </select>
                            <button className="bg-black text-white px-4 py-2 text-sm font-bold uppercase border-2 border-black">
                                Export CSV
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap text-black">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-black">
                                    <th className="p-3 font-mono text-xs uppercase text-gray-500">User ID</th>
                                    <th className="p-3 font-mono text-xs uppercase text-gray-500">Email</th>
                                    <th className="p-3 font-mono text-xs uppercase text-gray-500">Plan</th>
                                    <th className="p-3 font-mono text-xs uppercase text-gray-500">Spent</th>
                                    <th className="p-3 font-mono text-xs uppercase text-gray-500">Status</th>
                                    <th className="p-3 font-mono text-xs uppercase text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[1,2,3,4,5,6,7].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-3 font-mono">U_{1020+i}</td>
                                        <td className="p-3 font-bold">user{i}@example.com</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold border ${i % 3 === 0 ? 'bg-purple-100 text-purple-900 border-purple-200' : 'bg-gray-100 text-gray-900 border-gray-200'}`}>
                                                {i % 3 === 0 ? 'PRO' : 'FREE'}
                                            </span>
                                        </td>
                                        <td className="p-3 font-mono">${(Math.random() * 100).toFixed(2)}</td>
                                        <td className="p-3">
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div> Active
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex gap-2">
                                                <button className="text-xs border border-gray-300 px-2 py-1 hover:bg-gray-100">Reset</button>
                                                <button className="text-xs border border-red-200 text-red-600 px-2 py-1 hover:bg-red-50">Ban</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                        <span>Showing 7 of 14,203 users</span>
                        <div className="flex gap-1">
                            <button className="px-2 py-1 border border-gray-300 bg-white">Prev</button>
                            <button className="px-2 py-1 border border-gray-300 bg-white">1</button>
                            <button className="px-2 py-1 border border-gray-300 bg-white">2</button>
                            <button className="px-2 py-1 border border-gray-300 bg-white">3</button>
                            <button className="px-2 py-1 border border-gray-300 bg-white">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* FINANCE TAB */}
        {activeTab === 'finance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div className="window-border bg-white col-span-1 lg:col-span-2">
                     <div className="window-header bg-[#FFEDD1]">
                         <div className="square-icon bg-yellow-500"></div> REVENUE_OVER_TIME
                     </div>
                     <div className="p-6 text-black">
                         <div className="flex items-end gap-2 h-64 w-full">
                             {[40, 45, 30, 60, 55, 70, 80, 85, 90, 88, 95, 100].map((h, i) => (
                                 <div key={i} className="flex-1 bg-yellow-400 border border-black relative group" style={{ height: `${h}%` }}>
                                     <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1 whitespace-nowrap">
                                         ${h * 1000}
                                     </div>
                                 </div>
                             ))}
                         </div>
                         <div className="flex justify-between mt-2 text-xs font-mono text-gray-500">
                             <span>JAN</span><span>DEC</span>
                         </div>
                     </div>
                 </div>

                 <div className="space-y-6">
                     <div className="window-border bg-white p-6 text-center text-black">
                         <h3 className="text-gray-500 font-mono text-xs uppercase mb-2">Net MRR</h3>
                         <div className="text-4xl font-serif mb-2 text-black">$42,390</div>
                         <div className="text-green-600 text-xs font-bold bg-green-50 inline-block px-2 py-1 rounded">+12.5% vs last month</div>
                     </div>
                     <div className="window-border bg-white p-6 text-center text-black">
                         <h3 className="text-gray-500 font-mono text-xs uppercase mb-2">Churn Rate</h3>
                         <div className="text-4xl font-serif mb-2 text-red-500">2.4%</div>
                         <div className="text-gray-400 text-xs">Industry avg: 5.0%</div>
                     </div>
                 </div>
            </div>
        )}

      </div>

      {/* ADMIN SETTINGS MODAL */}
      {showSettings && (
         <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="window-border bg-white w-full max-w-xl shadow-hard-lg">
                <div className="window-header bg-black text-white border-b-2 border-gray-600 justify-between">
                    <div className="flex items-center gap-2">
                        <div className="square-icon bg-red-500"></div> ADMIN_CONTROL_PANEL
                    </div>
                    <button onClick={() => setShowSettings(false)} className="hover:text-red-400"><X size={14}/></button>
                </div>
                
                <div className="p-6 space-y-8">
                    
                    {/* System Status Section */}
                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-4 border-b pb-2 flex items-center gap-2">
                            <Activity size={16} /> System Status
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-gray-100 border border-gray-300">
                                <div>
                                    <div className="text-sm font-bold">Maintenance Mode</div>
                                    <div className="text-xs text-gray-500">Blocks all non-admin traffic</div>
                                </div>
                                <button 
                                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                                  className={`w-12 h-6 rounded-full relative transition-colors border-2 border-transparent ${maintenanceMode ? 'bg-red-500' : 'bg-gray-300'}`}
                                >
                                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${maintenanceMode ? 'left-7' : 'left-1'}`}></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Debug Config */}
                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-4 border-b pb-2 flex items-center gap-2">
                            <Terminal size={16} /> Debug Configuration
                        </h3>
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-1">Log Level</label>
                                <select 
                                    value={debugLevel}
                                    onChange={(e) => setDebugLevel(e.target.value)}
                                    className="w-full bg-white border-2 border-black p-2 text-sm font-mono"
                                >
                                    <option>INFO</option>
                                    <option>WARN</option>
                                    <option>ERROR</option>
                                    <option>DEBUG</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-1">Retention</label>
                                <select className="w-full bg-white border-2 border-black p-2 text-sm font-mono">
                                    <option>7 Days</option>
                                    <option>30 Days</option>
                                    <option>90 Days</option>
                                </select>
                            </div>
                         </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="border-2 border-red-500 bg-red-50 p-4">
                        <h3 className="font-bold text-red-600 text-xs uppercase mb-2 flex items-center gap-2">
                            <AlertTriangle size={14}/> Danger Zone
                        </h3>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-red-800 font-bold">Flush Redis Cache</span>
                            <button className="bg-white border border-red-300 text-red-600 text-xs px-3 py-1 hover:bg-red-600 hover:text-white transition-colors">
                                Execute
                            </button>
                        </div>
                    </div>

                </div>

                <div className="bg-gray-100 p-4 border-t border-gray-300 flex justify-end gap-2">
                    <button onClick={() => setShowSettings(false)} className="px-4 py-2 text-xs font-bold uppercase text-gray-600 hover:text-black">Cancel</button>
                    <button onClick={() => setShowSettings(false)} className="px-6 py-2 bg-black text-white text-xs font-bold uppercase shadow-hard hover:shadow-none hover:translate-y-0.5 border-2 border-black">Save Configuration</button>
                </div>
            </div>
         </div>
      )}

    </div>
  );
};