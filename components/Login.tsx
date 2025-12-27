import React, { useState } from 'react';
import type { PageView } from '../App';
import { ArrowRight, Lock, Mail } from 'lucide-react';

interface LoginProps {
  onNavigate: (page: PageView) => void;
}

export const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      // Admin Credential Check
      if (email === 'pratham.solanki30@gmail.com' && password === 'pratham@2008') {
         onNavigate('admin-dashboard');
      } else {
         // Default flow for all other users
         onNavigate('user-dashboard');
      }
    }, 1500);
  };

  return (
    <div className="flex-1 w-full bg-[#B0C4DE] relative flex items-center justify-center p-4 min-h-[70vh]">
       {/* Background noise */}
       <div className="absolute inset-0 z-0 bg-grain opacity-50 mix-blend-multiply pointer-events-none"></div>
       <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-purple-100/30 to-blue-300/20 mix-blend-screen pointer-events-none"></div>

       <div className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
            
            {/* Visual Side (Hidden on mobile) */}
            <div className="hidden md:block window-border h-[400px] relative rotate-1">
                <div className="window-header bg-[#FFD1D1]">
                    <div className="square-icon bg-red-500"></div>
                    SYSTEM_ACCESS
                </div>
                <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1595116982468-b3d9568910b8?q=80&w=1000&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
                        alt="Clouds"
                    />
                    <div className="relative text-center p-6 border-2 border-white/20 bg-black/50 backdrop-blur-sm">
                        <h2 className="text-white font-serif text-4xl mb-2">Welcome Back</h2>
                        <p className="text-white/70 font-mono text-xs">SECURE CONNECTION ESTABLISHED</p>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="window-border bg-white md:-rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="window-header bg-white border-b-2 border-black">
                    <div className="square-icon bg-tavus-green"></div>
                    LOGIN
                </div>
                
                <div className="p-8">
                    <h1 className="font-serif text-4xl mb-2 text-deep-black">Sign in</h1>
                    <p className="text-gray-500 text-sm mb-8 font-sans">
                        Don't have an account?{' '}
                        <button onClick={() => onNavigate('signup')} className="underline font-bold text-black hover:text-tavus-pink transition-colors">
                            Join the queue
                        </button>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-gray-50 border-2 border-black p-3 pl-10 font-mono text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                                    placeholder="human@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                             <div className="flex justify-between items-center">
                                <label className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">Password</label>
                                <a href="#" className="text-xs text-gray-400 hover:text-black hover:underline">Forgot?</a>
                             </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-50 border-2 border-black p-3 pl-10 font-mono text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-deep-black text-white border-2 border-black py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-hard active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {loading ? 'Authenticating...' : 'Enter Platform'}
                            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>
                </div>
            </div>
       </div>
    </div>
  );
};