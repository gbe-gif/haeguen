import React from 'react';
import { Hero } from './components/Hero';
import { CharacterProfile } from './components/CharacterProfile';
import { NPCs } from './components/NPCs';
import { Business } from './components/Business';
import { Section } from './components/Section';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      
      <Section id="profile" title="PROFILE">
        <CharacterProfile />
      </Section>

      <Section id="relations" title="RELATIONSHIPS" className="bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-500 mb-12">
            해건의 곁을 지키는 든든하고 유쾌한 가족들입니다.<br/>
            가끔은 시끌벅적하지만, 그가 가장 아끼는 사람들(과 새)입니다.
          </p>
          <NPCs />
        </div>
      </Section>

      <Section id="business" title="BUSINESS" dark>
        <div className="max-w-5xl mx-auto text-center mb-12">
           <p className="text-slate-300">
             거제의 바다를 지배하는 태경해운, 그리고 바다를 즐기는 공간 Martini.<br/>
             그의 재력과 능력을 보여주는 두 가지 사업 영역입니다.
           </p>
        </div>
        <Business />
      </Section>

      <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-800 text-center">
        <p className="text-sm">
          © 2026 Taekyoung Shipping Group & Cafe Martini. All rights reserved.<br/>
          Character Design & Concept by User.
        </p>
      </footer>
    </div>
  );
};

export default App;
