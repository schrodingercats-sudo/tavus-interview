import React from 'react';

const FeatureItem: React.FC<{
  title: string;
  subtitle: string;
  desc: string;
  imgUrl: string;
}> = ({ title, subtitle, desc, imgUrl }) => (
  <div className="flex flex-col items-start text-left group">
    <div className="w-16 h-16 mb-6 relative overflow-hidden bg-gray-200">
       <img 
        src={imgUrl} 
        alt={title} 
        className="w-full h-full object-cover grayscale contrast-[2.5] brightness-110 group-hover:contrast-100 group-hover:grayscale-0 transition-all duration-500" 
        style={{ imageRendering: 'pixelated' }} 
       />
       {/* Noise overlay for dither effect */}
       <div className="absolute inset-0 bg-black/10 mix-blend-screen pointer-events-none"></div>
    </div>
    <h3 className="font-serif text-4xl mb-3 leading-[0.9] text-deep-black tracking-tight">{title}</h3>
    <h4 className="font-sans font-bold text-sm mb-3 text-deep-black leading-tight">{subtitle}</h4>
    <p className="font-sans text-deep-black text-sm leading-relaxed max-w-[200px] opacity-80">{desc}</p>
  </div>
);

export const FeatureList: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#F2F2F0] border-t-2 border-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
            <FeatureItem 
                title="Multimodal" 
                subtitle="Everywhere you are" 
                desc="Text, call, or face-time. It’s all one seamless conversation."
                imgUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80" // Face
            />
            <FeatureItem 
                title="Proactive" 
                subtitle="Thinks ahead for you" 
                desc="Always ready to talk. Checks in when you forget to. Remembers what you said you'd do."
                imgUrl="https://images.unsplash.com/photo-1533158673752-ce373d42fb59?w=200&h=200&fit=crop&q=80" // Hand
            />
            <FeatureItem 
                title="Adaptive" 
                subtitle="Learns you" 
                desc="Remembers the emotion behind the moment. They remember, learn, and grow with you."
                imgUrl="https://images.unsplash.com/photo-1502014822147-1aed80613797?w=200&h=200&fit=crop&q=80" // Figures/Movement
            />
            <FeatureItem 
                title="Agentic" 
                subtitle="Acts for you" 
                desc="Sends that email. Moves your meeting. Integrates with your G-Suite to help run your life."
                imgUrl="https://images.unsplash.com/photo-1589254065878-42c9da997008?w=200&h=200&fit=crop&q=80" // Cursor/Tech
            />
            <FeatureItem 
                title="Perceptive" 
                subtitle="Understands what it sees" 
                desc="Reads your tone and body language. Understands what you mean, not just what you say."
                imgUrl="https://images.unsplash.com/photo-1525439775364-7936a282f9d6?w=200&h=200&fit=crop&q=80" // Eye
            />
        </div>
      </div>
    </section>
  );
};