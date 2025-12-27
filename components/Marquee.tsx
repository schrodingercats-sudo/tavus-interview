import React from 'react';

export const Marquee: React.FC = () => {
  const content = "AI GENERATED • PERSONALIZED VIDEO • VIBE CODING • GEMINI ENGINE • INSTANT CLONES • ";
  
  return (
    <div className="w-full bg-yellow-300 border-y-2 border-deep-black overflow-hidden py-3 md:py-4">
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
             <li key={i} className="text-xl md:text-3xl font-bold font-mono tracking-widest text-deep-black uppercase">
               {content}
             </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...Array(4)].map((_, i) => (
             <li key={i} className="text-xl md:text-3xl font-bold font-mono tracking-widest text-deep-black uppercase">
               {content}
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
};