import React from 'react';
import { Phone, Video, MicOff, Accessibility } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center md:pt-16 pt-8 pb-24 px-4 bg-grain bg-cream overflow-hidden border-b-2 border-black">
      
      {/* Text Content */}
      <div className="w-full max-w-5xl mx-auto text-left md:text-center mb-12 md:mb-16 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-deep-black leading-[0.9] mb-6 md:mb-8">
          You’ve never met AI like this
        </h1>
        <p className="text-lg md:text-xl font-serif italic text-gray-700 max-w-lg md:mx-auto mb-8 md:mb-10">
          Meet the PALs. They can see, hear, act, and actually understand us.
        </p>
        <button className="bg-tavus-dark-pink text-white text-sm font-bold uppercase tracking-widest px-6 md:px-8 py-4 border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
          Join the Queue
        </button>
      </div>

      {/* Windows Container - Flex on Mobile, Absolute on Desktop */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col md:block gap-6 md:gap-0 md:h-[600px] mt-4 md:mt-8">
        
        {/* Main Video Window */}
        <div className="relative md:absolute top-0 left-0 md:left-10 right-0 md:right-auto w-full md:w-[70%] z-20 window-border bg-gray-900">
            <div className="window-header bg-white">
                <div className="square-icon bg-red-500"></div>
                FACE-TO-FACE VIDEO
            </div>
            <div className="relative aspect-video bg-gray-800 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop" 
                    alt="AI Person" 
                    className="w-full h-full object-cover opacity-80"
                />
                
                {/* Call Overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-0 w-fit shadow-hard-lg">
                    <button className="bg-tavus-green text-black font-bold uppercase text-xs px-4 md:px-6 py-3 border-2 border-black flex items-center gap-2 hover:bg-green-300 whitespace-nowrap">
                        <div className="w-2 h-2 bg-black animate-pulse"></div>
                        Answer the call
                    </button>
                    <div className="bg-white p-3 border-y-2 border-r-2 border-black">
                         <Phone size={16} />
                    </div>
                </div>
            </div>
        </div>

        {/* Secondary Media Window */}
        <div className="relative md:absolute bottom-10 right-0 md:right-10 w-full md:w-[45%] z-30 window-border ml-auto md:ml-0">
             <div className="window-header">
                <div className="square-icon bg-blue-500"></div>
                MEDIA
            </div>
            <div className="aspect-[4/3] bg-black p-4 relative overflow-hidden flex items-center justify-center group cursor-pointer">
                 <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33ai01pFJeC5i/giphy.gif')] bg-cover opacity-30 mix-blend-screen"></div>
                 <div className="w-16 h-16 border-2 border-tavus-green rounded-full flex items-center justify-center z-10">
                    <div className="w-0 h-0 border-l-[12px] border-l-tavus-green border-y-[8px] border-y-transparent ml-1"></div>
                 </div>
                 
                 {/* Progress Bar */}
                 <div className="absolute bottom-0 left-0 h-1 bg-tavus-green w-1/3"></div>
            </div>
        </div>

        {/* Floating Accessibility Icon - Relative on mobile to sit below */}
         <div className="relative md:absolute md:bottom-20 md:-left-10 w-12 h-12 mt-8 md:mt-0 bg-tavus-pink rounded-full border-2 border-black flex items-center justify-center shadow-hard z-40">
            <Accessibility className="text-black w-6 h-6" />
        </div>

      </div>

      {/* Logos Strip */}
      <div className="w-full mt-12 md:mt-24 border-t border-gray-300 pt-8 flex flex-col items-center">
          <p className="font-serif italic text-gray-500 mb-6 text-center">Top companies are building & employing AI humans</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 opacity-50 grayscale px-4">
              <span className="font-bold text-lg md:text-xl font-serif">Deloitte.</span>
              <span className="font-bold text-lg md:text-xl font-sans tracking-tight">better</span>
              <span className="font-bold text-lg md:text-xl font-mono">MERCOR</span>
              <span className="font-bold text-lg md:text-xl font-serif">amazon</span>
          </div>
      </div>
    </section>
  );
};