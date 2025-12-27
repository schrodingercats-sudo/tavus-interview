import React from 'react';

export const BirdCard: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-soft-pink flex justify-center border-t-2 border-black">
      <div className="relative w-full max-w-sm bg-hot-pink border-2 border-deep-black p-3 shadow-hard rotate-1 hover:rotate-0 transition-transform duration-300">
        
        {/* Inner Border */}
        <div className="h-full border border-deep-black flex flex-col bg-white">
            
            {/* Image Area */}
            <div className="relative aspect-[3/4] bg-blue-100 overflow-hidden border-b-2 border-deep-black">
                 <img 
                  src="https://picsum.photos/400/600?random=2" 
                  alt="Pixel Art Birds" 
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="absolute top-4 left-4 bg-white px-2 py-1 border border-black text-xs font-mono font-bold">
                    FIG. 003
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col items-center text-center bg-cream flex-grow justify-between">
                <div>
                    <h3 className="font-serif text-2xl font-bold italic mb-2">Pixel Art Birds</h3>
                    <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">Generative Assets</p>
                </div>

                <div className="w-full mt-6 bg-deep-black text-white py-3 px-4 font-mono text-xs border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors cursor-pointer">
                    GENERATE UNIQUE ASSETS INSTANTLY
                </div>
            </div>
        </div>

        {/* Tape Effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200/80 rotate-2 border-l border-r border-white/40 shadow-sm backdrop-blur-sm"></div>
      </div>
    </section>
  );
};