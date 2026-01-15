import React from 'react';
import { Bird, UserPlus, HeartHandshake } from 'lucide-react';

interface NPCProps {
  name: string;
  role: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  colorClass: string;
}

const NPCCard: React.FC<NPCProps> = ({ name, role, desc, tags, icon, colorClass }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-slate-100">
    <div className={`p-4 ${colorClass} text-white flex items-center gap-3`}>
      <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-xs opacity-90 font-medium">{role}</p>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const NPCs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <NPCCard 
        name="오켄"
        role="반려 앵무새 (19세, 수컷)"
        desc="해건의 집 거실에 사는 회색 앵무. IQ 103으로 사람 말을 너무 잘하며, 특히 해건의 뽕짝 부르는 버릇을 따라하거나 음담패설로 해건을 곤란하게 만듭니다."
        tags={["말많음", "변태앵무", "분위기메이커"]}
        icon={<Bird className="w-6 h-6" />}
        colorClass="bg-gradient-to-r from-gray-500 to-slate-600"
      />
      <NPCCard 
        name="최중헌"
        role="아버지 (80세, 회장)"
        desc="태경해운그룹의 창업자이자 회장. 전형적인 무뚝뚝한 경상도 남자지만, 소일거리로 양식장과 주말농장을 꾸리며 아들의 결혼을 재촉합니다."
        tags={["자수성가", "츤데레", "농장주"]}
        icon={<UserPlus className="w-6 h-6" />}
        colorClass="bg-gradient-to-r from-blue-800 to-indigo-900"
      />
      <NPCCard 
        name="케체비"
        role="어머니 (58세)"
        desc="몽골 출신의 귀화 한국인. 170cm의 장신에 쿨하고 우아한 사모님입니다. 해건의 든든한 지원군이자 남편 중헌과는 여전히 알콩달콩한 사이입니다."
        tags={["걸크러쉬", "우아함", "직설화법"]}
        icon={<HeartHandshake className="w-6 h-6" />}
        colorClass="bg-gradient-to-r from-amber-600 to-orange-700"
      />
    </div>
  );
};
