import React, { useState } from 'react';
import type { PageView } from '../App';
import { ArrowRight, User, Mail, Building, Lock } from 'lucide-react';

interface SignUpProps {
  onNavigate: (page: PageView) => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onNavigate }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onNavigate('user-dashboard');
    }, 1500);
  };

  return (
    <div className="flex-1 w-full bg-[#EBEBE8] relative flex items-center justify-center p-4 py-12 min-h-[70vh]">
       {/* Background elements */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-40 pointer-events-none"></div>
       
       <div className="relative z-10 w-full max-w-md">
            <div className="window-border bg-white shadow-[12px_12px_0px_0px_#FF6B8B]">
                <div className="window-header bg-[#FF6B8B] text-black border-b-2 border-black">
                    <div className="square-icon bg-white"></div>
                    APPLICATION_FORM_V1
                </div>
                
                <div className="p-8">
                    <div className="mb-8 text-center">
                         <h1 className="font-serif text-4xl mb-2 text-deep-black">Join the Queue</h1>
                         <p className="text-gray-500 text-sm font-sans">
                            Create your Tavus ID to start building. <br/>
                            Already have an account? {' '}
                            <button onClick={() => onNavigate('login')} className="underline font-bold text-black hover:text-tavus-pink transition-colors">
                                Log in
                            </button>
                         </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">First Name</label>
                                <input type="text" className="w-full bg-gray-50 border-2 border-black p-2 font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_#000] transition-shadow" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                                <input type="text" className="w-full bg-gray-50 border-2 border-black p-2 font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_#000] transition-shadow" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="email" 
                                    required
                                    className="w-full bg-gray-50 border-2 border-black p-2 pl-9 font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_#000] transition-shadow" 
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">Company Name</label>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    className="w-full bg-gray-50 border-2 border-black p-2 pl-9 font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_#000] transition-shadow" 
                                    placeholder="Acme Inc."
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="password" 
                                    required
                                    className="w-full bg-gray-50 border-2 border-black p-2 pl-9 font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_#000] transition-shadow" 
                                    placeholder="Min. 8 characters"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                             <div className="flex items-start gap-2 mb-6">
                                 <input type="checkbox" className="mt-1 border-2 border-black rounded-none w-4 h-4 accent-black" id="terms" required />
                                 <label htmlFor="terms" className="text-xs text-gray-600 leading-tight">
                                     I agree to the <a href="#" className="underline font-bold">Terms of Service</a> and <a href="#" className="underline font-bold">Privacy Policy</a>. I understand that AI generated content can be unpredictable.
                                 </label>
                             </div>

                            <button 
                                type="submit"
                                disabled={loading}
                                className="w-full bg-tavus-pink text-black border-2 border-black py-3 font-bold uppercase tracking-widest hover:bg-tavus-dark-pink hover:text-white transition-all shadow-hard active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Creating Account...' : 'Create Account'}
                                {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            <p className="text-center mt-6 font-mono text-xs text-gray-500 uppercase">
                Secure 256-bit Encryption • SOC2 Compliant
            </p>
       </div>
    </div>
  );
};