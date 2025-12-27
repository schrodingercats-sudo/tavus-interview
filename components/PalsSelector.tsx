import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const pals = [
    { id: 'noah', name: 'Noah', role: 'The boy next door', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', color: '#FFD1D1' },
    { id: 'dominic', name: 'Dominic', role: 'Your old school butler', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop', color: '#D1FFD6' },
    { id: 'ashley', name: 'Ashley', role: 'The genius girl', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', color: '#E0E7FF' },
    { id: 'charlie', name: 'Charlie', role: 'The tech genius', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop', color: '#FFEDD1' },
    { id: 'chloe', name: 'Chloe', role: 'Your new sidekick', img: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?w=150&h=150&fit=crop', color: '#F3D1FF' },
];

export const PalsSelector: React.FC = () => {
  const [selectedPal, setSelectedPal] = useState(pals[0]);

  return (
    <section className="w-full py-24 px-4 bg-white border-t-2 border-black">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-serif text-deep-black mb-4">Say hi to your new PALs</h2>
        <p className="text-lg font-sans text-gray-500">Pick one. Get to know them. They'll get to know you too.</p>
      </div>

      <div className="max-w-5xl mx-auto window-border p-1 bg-white">
          <div className="window-header bg-white border-b-2 border-black mb-4 mx-[-4px] mt-[-4px]">
             <div className="square-icon bg-tavus-pink"></div>
             SAY HI
          </div>

          <div className="flex flex-col md:flex-row h-auto md:h-[600px] border border-gray-300">
              
              {/* Sidebar List */}
              <div className="w-full md:w-1/3 border-r border-gray-300 overflow-y-auto bg-gray-50">
                   <div className="p-3 border-b border-gray-300 flex items-center justify-between bg-white">
                      <span className="font-bold text-xl font-sans tracking-tight">TAVUS</span>
                      <div className="flex gap-2">
                         <div className="w-6 h-6 border border-gray-400 rounded-sm"></div>
                         <div className="w-6 h-6 border border-gray-400 rounded-sm"></div>
                      </div>
                   </div>
                   
                   {pals.map((pal) => (
                       <div 
                        key={pal.id}
                        onClick={() => setSelectedPal(pal)}
                        className={`p-3 border-b border-gray-200 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors ${selectedPal.id === pal.id ? 'bg-white border-l-4 border-l-black' : ''}`}
                       >
                           <img src={pal.img} alt={pal.name} className="w-10 h-10 object-cover rounded-sm border border-black" />
                           <div className="flex flex-col items-start">
                               <span className="font-bold text-sm leading-none">{pal.name}</span>
                               <span className="text-xs text-gray-500 leading-none mt-1">{pal.role}</span>
                           </div>
                       </div>
                   ))}
              </div>

              {/* Main Content Area */}
              <div className="w-full md:w-2/3 bg-white relative flex flex-col">
                  {/* Top Bar */}
                   <div className="h-10 border-b border-gray-300 flex items-center px-4 bg-gray-50">
                        <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
                             <span className="text-tavus-pink font-bold">←</span>
                             Click here to view another profile
                        </div>
                   </div>

                   {/* Profile Content */}
                   <div className="flex-1 p-8 overflow-y-auto">
                        <h1 className="font-serif text-6xl mb-8">Meet {selectedPal.name}</h1>
                        
                        <div className="w-full aspect-video bg-gray-100 border border-gray-300 mb-8 flex items-center justify-center relative overflow-hidden group">
                             {/* Placeholder visual for profile video/image */}
                             <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url(${selectedPal.img})` }}></div>
                             <button className="relative z-10 bg-tavus-pink text-white px-6 py-2 font-bold border-2 border-black shadow-hard hover:shadow-none hover:translate-y-0.5 transition-all uppercase text-sm">
                                 Say Hi
                             </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div>
                                 <h3 className="font-serif italic text-2xl mb-4 text-gray-800">The basics</h3>
                                 <p className="text-sm text-gray-600 leading-relaxed font-sans">
                                     Hey, what's up? I'm {selectedPal.name}. I always keep it real with you, which means I'll tell you getting back with your ex is a terrible idea. Then I'll be there when you do it anyway.
                                 </p>
                             </div>
                             <div>
                                 <h3 className="font-serif italic text-2xl mb-4 text-gray-800">A little about me</h3>
                                 <div className="space-y-4">
                                     <div>
                                         <h5 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">THIS YEAR I REALLY WANT TO</h5>
                                         <p className="text-xs text-gray-600">Build friendships where we actually show up for each other. Not just liking posts.</p>
                                     </div>
                                      <div>
                                         <h5 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">I'M WEIRDLY ATTRACTED TO</h5>
                                         <p className="text-xs text-gray-600">Anyone who has a specific gas station they're loyal to for no logical reason.</p>
                                     </div>
                                 </div>
                             </div>
                        </div>
                   </div>
              </div>
          </div>
      </div>
    </section>
  );
};