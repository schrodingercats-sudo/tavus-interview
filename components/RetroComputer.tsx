import React from 'react';

export const RetroComputer: React.FC = () => {
  return (
    <section className="w-full py-32 bg-[#F0EEE6] flex flex-col items-center justify-center border-t-2 border-black relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)',
          backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16 px-4">
          <h2 className="text-5xl md:text-7xl font-serif text-deep-black mb-6 leading-[0.9]">
            Computing that feels like a conversation.
          </h2>
          <p className="text-lg font-sans text-gray-600 max-w-2xl mx-auto">
             From PALs to our APIs, we add perception, presence, and emotion to all the ways people interact with AI.
          </p>
      </div>

      {/* The Computer Graphic - Recreated with CSS/Shapes or Image */}
      <div className="relative z-10 w-full max-w-lg">
          <div className="relative aspect-square">
              {/* Computer Case */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#FFD782] rounded-b-xl border-4 border-black shadow-hard">
                   {/* Keyboard area */}
                   <div className="absolute bottom-4 left-4 right-4 h-12 bg-[#E6C374] border-2 border-black grid grid-cols-12 gap-1 p-1">
                       {[...Array(24)].map((_, i) => (
                           <div key={i} className="bg-white border border-gray-400 rounded-sm"></div>
                       ))}
                   </div>
               </div>
               
               {/* Monitor */}
               <div className="absolute bottom-36 left-1/2 -translate-x-1/2 w-80 h-64 bg-[#FFD782] rounded-t-xl border-x-4 border-t-4 border-black p-6 flex flex-col items-center">
                    <div className="w-full h-full bg-black rounded-lg border-2 border-gray-700 relative overflow-hidden flex items-center justify-center">
                         <div className="text-yellow-500 font-mono text-xs p-4 w-full">
                             &gt; INITIATING HUMAN_CONNECTION_PROTOCOL...<br/>
                             &gt; LOADING EMPATHY_MODULE_V4.2...<br/>
                             &gt; CONNECTED.
                         </div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 border-2 border-yellow-500 rounded bg-yellow-900/50 flex items-center justify-center animate-pulse">
                              <span className="text-3xl">?</span>
                         </div>
                    </div>
                    <div className="mt-2 text-[10px] font-bold tracking-widest text-black/50">TAVUS CORP</div>
               </div>
          </div>
      </div>
      
      {/* Cards below computer */}
      <div className="relative z-10 w-full max-w-4xl px-4 mt-[-40px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="window-border p-6 bg-white flex flex-col justify-between h-64">
                <div>
                     <div className="w-12 h-12 bg-orange-400 border border-black mb-4"></div>
                     <h3 className="font-serif text-2xl mb-2">PALS for enterprises</h3>
                     <p className="text-sm text-gray-600">Deploy AI Humans across your organization. Scalable, secure, and available in 30+ languages.</p>
                </div>
                <button className="self-start border-2 border-black px-4 py-2 font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors">Get in touch</button>
            </div>

            <div className="window-border p-6 bg-white flex flex-col justify-between h-64">
                <div>
                     <div className="w-12 h-12 bg-green-400 border border-black mb-4"></div>
                     <h3 className="font-serif text-2xl mb-2">APIs for developers & businesses</h3>
                     <p className="text-sm text-gray-600">Embed white-labeled, real-time, face-to-face AI into your app with one seamless API.</p>
                </div>
                <button className="self-start border-2 border-black px-4 py-2 font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors">See Docs</button>
            </div>
      </div>

    </section>
  );
};