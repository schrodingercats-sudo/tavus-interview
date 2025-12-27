import React from 'react';

export const CoFounder: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#F2F2F0] flex flex-col items-center text-center">
      
      <h2 className="text-5xl md:text-7xl font-serif text-deep-black max-w-4xl mx-auto leading-[0.95] mb-12">
        What if you could talk to your computer like a <span className="italic font-light">co-founder</span>?
      </h2>

      {/* Cloud Window */}
      <div className="window-border max-w-2xl w-full mx-auto mb-16 rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="window-header bg-[#FFDCA8]">
             <div className="square-icon bg-orange-500"></div>
             BRIDGING THE HUMAN-MACHINE DIVIDE
        </div>
        <div className="aspect-[16/9] bg-blue-200 overflow-hidden relative">
            <img 
                src="https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1000&auto=format&fit=crop" 
                alt="Clouds and Hands" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed">
            Our models have powered over <span className="font-bold">2 billion interactions</span> with hyper-realistic, real-time AI that combines the EQ of humans with the reach and reliability of machines.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <button className="bg-tavus-pink text-black text-xs font-bold uppercase tracking-widest px-8 py-3 border-2 border-black shadow-hard hover:shadow-none hover:translate-y-1 transition-all">
                Meet the PALs
            </button>
            <button className="bg-transparent text-black text-xs font-bold uppercase tracking-widest px-8 py-3 border-2 border-black shadow-hard hover:bg-white hover:shadow-none hover:translate-y-1 transition-all">
                Build with our APIs
            </button>
        </div>
      </div>

    </section>
  );
};