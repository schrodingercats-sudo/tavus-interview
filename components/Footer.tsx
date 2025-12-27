import React from 'react';
import type { PageView } from '../App';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#EBEBE8] pt-24 pb-12 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="font-serif text-5xl md:text-7xl text-deep-black mb-6">
          The human computing company
        </h2>
        
        <p className="font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Tavus is a San Francisco-based AI research lab pioneering human computing, teaching machines the art of being human. We build foundational models that let AI see, hear, and respond like people do. We're turning the promise of science fiction into reality, where computing feels instinctive and truly alive. Because the next intelligence is emotional.
        </p>

        <button 
          onClick={() => onNavigate('signup')}
          className="border-2 border-black bg-transparent px-8 py-3 font-bold uppercase text-sm hover:bg-white transition-all mb-24"
        >
            Join the Team
        </button>

        {/* Big Pixel Image Bottom */}
        <div className="w-full h-64 md:h-96 bg-gray-300 border-2 border-black relative overflow-hidden mb-24">
             <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" 
                alt="Abstract Face" 
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
                style={{ imageRendering: 'pixelated' }}
             />
             <div className="absolute inset-0 bg-blue-500/10 mix-blend-color"></div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mb-24">
             <span className="font-mono text-xs uppercase tracking-widest text-gray-500 block mb-4">PALS</span>
             <h3 className="font-serif text-5xl md:text-6xl mb-8">You've never talked to AI like this before.</h3>
             <button 
                onClick={() => onNavigate('signup')}
                className="bg-tavus-dark-pink text-white text-sm font-bold uppercase tracking-widest px-10 py-4 border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all"
             >
                Meet the PALs
            </button>
        </div>

        {/* Footer Text */}
        <div className="text-center font-mono text-xs text-gray-500 uppercase tracking-widest">
            ENTERPRISE <br/><br/>
            Bring human connection to every AI interaction. <br/><br/>
            <button className="bg-white border-2 border-black px-4 py-2 mt-4 text-black hover:bg-gray-100">Talk to a (Real) Human</button>
        </div>

        {/* Links Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t-2 border-black pt-12">
             <div>
                 <div className="bg-black text-white px-2 py-1 inline-block text-xs font-bold mb-4">COMPANY</div>
                 <ul className="space-y-2 text-sm font-sans cursor-pointer">
                     <li onClick={() => onNavigate('home')} className="hover:underline">Pricing</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Enterprise</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Careers</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Partnerships</li>
                 </ul>
             </div>
             <div>
                 <div className="bg-black text-white px-2 py-1 inline-block text-xs font-bold mb-4">RESOURCES</div>
                 <ul className="space-y-2 text-sm font-sans cursor-pointer">
                     <li onClick={() => onNavigate('home')} className="hover:underline">Blog</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Perspectives</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Brand kit (download)</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Press kit</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Info for AIs</li>
                 </ul>
             </div>
             <div>
                 <div className="bg-black text-white px-2 py-1 inline-block text-xs font-bold mb-4">DEVELOPERS</div>
                 <ul className="space-y-2 text-sm font-sans cursor-pointer">
                     <li onClick={() => onNavigate('home')} className="hover:underline">Docs</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">API reference</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Video Generation</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Quickstart</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">llms.txt</li>
                 </ul>
             </div>
             <div>
                 <div className="bg-black text-white px-2 py-1 inline-block text-xs font-bold mb-4">RESEARCH</div>
                 <ul className="space-y-2 text-sm font-sans cursor-pointer">
                     <li onClick={() => onNavigate('home')} className="hover:underline">Turn Taking</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">Rendering</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">LLM Thinking</li>
                     <li onClick={() => onNavigate('home')} className="hover:underline">See all research</li>
                 </ul>
             </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-300 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
             <div>
                 <div className="bg-black text-white px-2 py-1 inline-block text-xs font-bold mb-4">SOCIALS</div>
                 <ul className="space-y-2 text-sm font-sans cursor-pointer">
                     <li className="hover:underline">LinkedIn</li>
                     <li className="hover:underline">X</li>
                 </ul>
             </div>
             <div>
                 <div className="bg-black text-white px-2 py-1 inline-block text-xs font-bold mb-4">LEGAL</div>
                 <ul className="space-y-2 text-sm font-sans cursor-pointer">
                     <li className="hover:underline">Privacy policy</li>
                     <li className="hover:underline">Terms of service</li>
                     <li className="hover:underline">Website terms of service</li>
                 </ul>
             </div>
             <div>
                 <div className="bg-black text-white px-2 py-1 inline-block text-xs font-bold mb-4">SUPPORT</div>
                 <ul className="space-y-2 text-sm font-sans cursor-pointer">
                     <li className="hover:underline">Discord</li>
                     <li className="hover:underline">Email support@tavus.io</li>
                     <li className="hover:underline">PALs Help</li>
                     <li className="hover:underline">Support center</li>
                     <li className="hover:underline">Trust center</li>
                 </ul>
             </div>
        </div>

      </div>
    </footer>
  );
};