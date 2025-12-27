import React from 'react';
import { Mic } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif text-deep-black text-center mb-24">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative items-center">
          
          {/* Card 1: Input */}
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-md aspect-square bg-white border-2 border-deep-black p-4 flex flex-col shadow-[8px_8px_0px_0px_#FFE4E6]">
              <div className="flex-1 bg-gray-100 border border-gray-200 relative overflow-hidden">
                 <img 
                  src="https://picsum.photos/600/600?random=1" 
                  alt="Hand Reaching" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
                <div className="absolute inset-0 bg-noise opacity-10"></div>
              </div>
              <div className="mt-4 font-mono text-sm border-t border-black pt-2 flex justify-between">
                <span>INPUT.RAW</span>
                <span>00:01:24</span>
              </div>
            </div>
            <p className="mt-6 text-xl font-serif italic">1. Capture your essence</p>
          </div>

          {/* SVG Arrow (Hidden on mobile, visible on MD+) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 z-10 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 25 C 20 25, 30 0, 50 0 S 80 25, 100 25" stroke="black" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                <path d="M95 20 L100 25 L95 30" stroke="black" strokeWidth="2" fill="none" />
             </svg>
          </div>

          {/* Card 2: Output */}
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-md aspect-square bg-white border-2 border-deep-black p-6 flex flex-col items-center justify-center shadow-hard relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 border-b-2 border-deep-black flex items-center px-2 gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                </div>
                
                <div className="w-24 h-24 rounded-full bg-hot-pink/20 flex items-center justify-center border border-hot-pink mb-4 animate-pulse">
                    <Mic className="w-10 h-10 text-hot-pink" />
                </div>
                <div className="w-3/4 h-2 bg-gray-200 rounded mb-2 overflow-hidden">
                    <div className="h-full bg-electric-blue w-2/3"></div>
                </div>
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>

                <div className="absolute bottom-0 w-full py-2 bg-electric-blue text-white text-center font-mono text-xs">
                    PROCESSING AUDIO...
                </div>
            </div>
             <p className="mt-6 text-xl font-serif italic">2. Generate infinity</p>
          </div>
        </div>
      </div>
    </section>
  );
};