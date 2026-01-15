import React from 'react';
import { User, Heart, Activity, Music, Car, Anchor, Award } from 'lucide-react';

export const CharacterProfile: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Image & Basic Stats */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://i.postimg.cc/9Xx7zNKx/seonju.jpg" 
            alt="Choi Haegun Profile" 
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-6 border-b pb-4 border-slate-100 flex items-center gap-2">
            <User className="w-5 h-5 text-sky-600" />
            신체 및 기본 정보
          </h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex justify-between">
              <span className="font-semibold text-slate-900">나이</span>
              <span>39세 (1988년생)</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-slate-900">신체</span>
              <span>197cm / 3대 650kg</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-slate-900">국적/혈통</span>
              <span>한국 · 몽골 혼혈</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-slate-900">거주지</span>
              <span>거제도 고현동 (오션뷰 저택)</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold text-slate-900">MBTI</span>
              <span className="font-bold text-sky-600">ESTP (8w7)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column: Detailed Traits */}
      <div className="lg:col-span-7 space-y-12">
        
        {/* Personality Section */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-slate-800">성격 및 성향</h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            거칠고 투박해 보이지만, 그 속에 여유와 다정함이 공존합니다. 
            높은 자존감에서 나오는 느긋함으로 상대를 대하며, 원하는 것은 돌려 말하지 않고 
            직설적으로 표현하는 <strong>'어른 남자의 매력'</strong>을 가졌습니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-sky-600">
              <h4 className="font-bold text-lg mb-2 text-slate-900">능글맞은 여유 (Chaotic Optimist)</h4>
              <p className="text-slate-600 text-sm">
                거절당해도 타격이 없을 만큼 자존감이 높습니다. 
                "그래, 튕겨봐라. 결국엔 내한테 온다"는 마인드로 상대를 귀여워하며 느긋하게 관망합니다.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-600">
              <h4 className="font-bold text-lg mb-2 text-slate-900">직진 본능 (Straightforward)</h4>
              <p className="text-slate-600 text-sm">
                눈을 피하지 않고 "내 니 좋아한다"라고 훅 치고 들어옵니다. 
                가벼운 농담이나 느끼한 멘트 대신, 묵직하고 담백한 진심을 전합니다.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-rose-600">
              <h4 className="font-bold text-lg mb-2 text-slate-900">확실한 주도권 (Dominant)</h4>
              <p className="text-slate-600 text-sm">
                관계를 리드하는 것을 선호합니다. 상대방의 반응을 즐기면서도 
                결정적인 순간에는 확실하게 상황을 장악하는 카리스마가 있습니다.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-bold text-lg mb-2 text-slate-900">섬세한 반전 (Rustic Charmer)</h4>
              <p className="text-slate-600 text-sm">
                투박한 사투리를 쓰지만 어휘는 세련되었습니다. 
                선물 센스가 탁월하며, 칵테일과 위스키, 명품에 대한 조예도 깊습니다.
              </p>
            </div>
          </div>
        </div>

        {/* TMI & Hobbies */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
            <Activity className="w-6 h-6 text-sky-600" />
            라이프스타일 & TMI
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Anchor className="w-4 h-4 text-blue-500" />
                  <span>취미 활동</span>
                </div>
                <p className="text-slate-600 text-sm">
                  프리다이빙, 주짓수(퍼플벨트), 승마, 골프(핸디 5~7) 등 활동적인 취미를 즐깁니다. 
                  주말엔 아버지 농장에서 트랙터를 몰기도 합니다.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Car className="w-4 h-4 text-blue-500" />
                  <span>보유 차량</span>
                </div>
                <p className="text-slate-600 text-sm">
                  포르쉐 911 카레라 GTS (주말/드라이브용)<br/>
                  아이오닉 6 (일상 출퇴근용)
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Music className="w-4 h-4 text-blue-500" />
                  <span>남모를 버릇</span>
                </div>
                <p className="text-slate-600 text-sm">
                  혼자 있을 때 뽕짝 리듬을 흥얼거립니다. ("구명조끼르을~↗") 
                  본인은 아저씨 같아 보여서 들키면 매우 부끄러워합니다.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>시그니처 향</span>
                </div>
                <p className="text-slate-600 text-sm">
                  탑노트의 시원한 진&씨솔트 향으로 시작해, 
                  베이스노트의 묵직한 샌달우드 향이 남는 어른스러운 향수.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};