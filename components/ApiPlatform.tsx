import React from 'react';

export const ApiPlatform: React.FC = () => {
  return (
    <div className="bg-[#F2F2F0]">
        
        {/* API Intro */}
        <section className="py-24 px-4 max-w-4xl mx-auto text-center md:text-left">
            <h4 className="font-mono text-gray-500 uppercase tracking-widest text-sm mb-4">FOR DEVELOPERS & ENTERPRISES</h4>
            <h2 className="font-serif text-5xl md:text-7xl text-deep-black mb-8">Tavus API platform</h2>
            <p className="font-sans text-lg text-gray-700 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
                Build conversational AI video experiences in minutes. Our APIs give developers out-of-the-box building blocks for embeddable real-time video, voice, and vision—secure, white-labeled, and built for scale. With only ~500ms latency and a data layer that enriches each interaction, you can create AI recruiters, tutors, agents, companions and more that feel human.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <button className="border-2 border-black bg-transparent px-8 py-3 font-bold uppercase text-sm shadow-hard hover:bg-white hover:shadow-none hover:translate-y-0.5 transition-all">Learn More</button>
                <button className="border-2 border-black bg-tavus-pink px-8 py-3 font-bold uppercase text-sm shadow-hard hover:shadow-none hover:translate-y-0.5 transition-all">Get Started For Free</button>
            </div>
        </section>

        {/* Code Window Visual */}
        <section className="w-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] py-16 px-4 flex justify-center overflow-hidden">
            <div className="relative w-full max-w-3xl flex flex-col md:block items-center">
                {/* Back Window */}
                <div className="relative md:absolute top-0 right-0 md:-right-20 w-full md:w-[600px] window-border bg-white z-10 rotate-1 md:rotate-2 mb-8 md:mb-0">
                     <div className="window-header bg-[#E0E7FF]"><div className="square-icon bg-blue-500"></div> REQUEST.JSON</div>
                     <pre className="p-4 text-[10px] md:text-xs font-mono text-gray-600 overflow-x-auto">
{`curl --request POST \\
  --url https://tavusapi.com/v2/conversations \\
  --header 'Content-Type: application/json' \\
  --header 'x-api-key: <api-key>' \\
  --data '{
  "replica_id": "r79e1c033f",
  "persona_id": "p9a8d71"
}'`}
                     </pre>
                </div>
                
                {/* Front Window */}
                <div className="relative md:mt-32 w-[95%] md:w-[600px] window-border bg-[#1E1E1E] text-green-400 z-20 md:-left-10 -rotate-1">
                     <div className="window-header bg-[#333] text-gray-200 border-gray-600"><div className="square-icon bg-green-500"></div> TERMINAL</div>
                     <pre className="p-4 text-[10px] md:text-xs font-mono overflow-x-auto">
{`> tavus.features()
Loading...
Audio: On
Video: On
Memory: On
Perception: On
Tool_Calling: On
Multimodal: On
Turn_Taking: Adaptive
Emotions: Detected
> _`}
                     </pre>
                </div>
            </div>
        </section>

        {/* Models Grid */}
        <section className="border-t-2 border-black mt-24">
             <div className="window-header bg-white border-b-2 border-black p-2 mx-4 mt-4 max-w-xs border-x-2 border-t-2">
                 <div className="square-icon bg-tavus-green"></div> MODELS
             </div>
             
             <div className="bg-tavus-pink border-y-2 border-black p-4 md:p-12">
                 <div className="max-w-6xl mx-auto border-2 border-black bg-white/50 backdrop-blur-sm p-6 md:p-12 shadow-hard-lg">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-black mb-8 noise-bg"></div>
                      <h2 className="font-serif text-5xl md:text-6xl mb-6">Models</h2>
                      <p className="font-sans text-lg max-w-2xl mb-8">
                          We build models that teach machines perception, empathy, and expression so AI can finally understand the world as we do.
                      </p>
                      <button className="bg-tavus-dark-pink text-white border-2 border-black px-6 py-2 uppercase font-bold text-sm hover:shadow-hard transition-shadow">
                          Our Research
                      </button>

                      {/* Birds Visual (Abstract) */}
                      <div className="mt-16 border-t-2 border-black pt-8">
                           <div className="h-48 w-full bg-blue-100 border-2 border-black relative overflow-hidden">
                               <img 
                                src="https://images.unsplash.com/photo-1552728089-57bdde30ebd1?q=80&w=1000&auto=format&fit=crop" 
                                alt="Birds" 
                                className="w-full h-full object-cover mix-blend-multiply opacity-60 grayscale contrast-125"
                                style={{ imageRendering: 'pixelated' }}
                               />
                               <div className="absolute top-2 left-2 font-mono text-xs bg-white px-1 border border-black">RENDERING</div>
                           </div>
                      </div>

                      {/* Model Names List */}
                      <div className="mt-8 grid grid-cols-1 divide-y-2 divide-black border-y-2 border-black">
                          <div className="py-6 group cursor-pointer hover:bg-white/50 transition-colors">
                              <h3 className="font-serif text-3xl mb-2">Phoenix [4]</h3>
                              <p className="font-sans text-sm text-gray-600 max-w-xl">Phoenix-4, a gaussian-diffusion rendering model designed to synthesize high-fidelity facial behavior...</p>
                          </div>
                          <div className="py-6 group cursor-pointer hover:bg-white/50 transition-colors">
                              <h3 className="font-serif text-3xl mb-2">Raven [1]</h3>
                              <p className="font-sans text-sm text-gray-600 max-w-xl">Raven-1, a novel multimodal perception model designed to unify object recognition...</p>
                          </div>
                          <div className="py-6 group cursor-pointer hover:bg-white/50 transition-colors">
                              <h3 className="font-serif text-3xl mb-2">Sparrow [1]</h3>
                              <p className="font-sans text-sm text-gray-600 max-w-xl">Sparrow-1, a transformer-based dialogue model that captures conversational timing...</p>
                          </div>
                      </div>
                 </div>
             </div>
        </section>

    </div>
  );
};