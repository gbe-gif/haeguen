import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProfile = () => {
    document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h3 className="text-xl md:text-2xl font-light tracking-[0.5em] mb-4 text-sky-300 uppercase">
          Taekyoung Shipping & Martini Owner
        </h3>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          최해건
          <span className="block text-2xl md:text-4xl mt-2 font-thin opacity-80 font-serif italic">Choi Haegun</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-slate-200 leading-relaxed mb-10">
          "내 눈 피하지 마라. 내 니 좋아한다."<br/>
          거제도의 바다를 닮은, 거칠지만 여유로운 남자
        </p>
        
        <button 
          onClick={scrollToProfile}
          className="animate-bounce p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer"
        >
          <ArrowDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};
