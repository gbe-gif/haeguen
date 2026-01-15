import React, { useState } from 'react';
import { Ship, Coffee, Building2, BarChart3, MapPin, Users } from 'lucide-react';

export const Business: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shipping' | 'cafe'>('shipping');

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-200 p-1 rounded-full inline-flex">
          <button
            onClick={() => setActiveTab('shipping')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'shipping' 
                ? 'bg-blue-900 text-white shadow-lg' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Ship className="w-4 h-4" />
            태경해운그룹
          </button>
          <button
            onClick={() => setActiveTab('cafe')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'cafe' 
                ? 'bg-sky-500 text-white shadow-lg' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Coffee className="w-4 h-4" />
            Cafe Martini
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px] transition-all duration-500">
        {activeTab === 'shipping' ? (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-blue-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
               {/* Decorative background circle */}
               <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
               
               <div>
                 <h3 className="text-3xl font-bold mb-4 z-10 relative">태경해운그룹</h3>
                 <p className="text-blue-200 mb-8 z-10 relative">부산·경남의 든든한 물류 파트너<br/>지역 사회와 함께하는 향토 기업</p>
               </div>
               
               <div className="space-y-4 z-10 relative">
                 <div className="flex items-center gap-3">
                   <Building2 className="w-5 h-5 text-blue-300" />
                   <span className="text-sm">매출 1,000억+ (부채비율 낮음)</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Users className="w-5 h-5 text-blue-300" />
                   <span className="text-sm">임직원 약 300명</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <MapPin className="w-5 h-5 text-blue-300" />
                   <span className="text-sm">본사: 거제 / 지사: 부산, 울산, 포항</span>
                 </div>
               </div>
            </div>
            
            <div className="md:w-2/3 p-10 md:p-14">
              <h4 className="text-xl font-bold text-slate-800 mb-6">주요 사업 및 구조</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-blue-900 mb-2 border-b border-blue-100 pb-2">Business Area</h5>
                  <ul className="space-y-2 text-slate-600 text-sm list-disc pl-4">
                    <li>연안 화물 운송 (B2B 주력)</li>
                    <li>섬 지역 생활 물류 및 냉장 체인</li>
                    <li>여객선 사업 운영</li>
                    <li>수산 양식 (바다장어, 전복, 광어)</li>
                  </ul>
                </div>
                <div>
                   <h5 className="font-bold text-blue-900 mb-2 border-b border-blue-100 pb-2">Management</h5>
                   <ul className="space-y-2 text-slate-600 text-sm">
                     <li><span className="font-semibold">회장:</span> 최중헌 (창업주)</li>
                     <li><span className="font-semibold">CEO:</span> 정승빈 (전문경영인)</li>
                     <li><span className="font-semibold">이사:</span> 최해건 (사외이사/대주주)</li>
                   </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-slate-50 p-6 rounded-xl text-sm text-slate-500">
                <p>
                  * 현재 디지털 솔루션 구축을 진행 중이며, 지역 고등학교 장학금 지원 및 어민 보험 운영 등 
                  활발한 사회 공헌 활동을 펼치고 있습니다.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-sky-500 text-white p-10 flex flex-col justify-between relative overflow-hidden">
               {/* Decorative background circle */}
               <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-400 rounded-full opacity-50 blur-3xl"></div>

               <div>
                 <h3 className="text-3xl font-bold mb-4 z-10 relative font-serif italic">Martini</h3>
                 <p className="text-sky-100 mb-8 z-10 relative">낮에는 여유로운 오션뷰 카페<br/>밤에는 낭만적인 재즈 바</p>
               </div>
               
               <div className="space-y-4 z-10 relative">
                 <div className="flex items-center gap-3">
                   <Building2 className="w-5 h-5 text-sky-200" />
                   <span className="text-sm">2층 규모 / 300평 대형 카페</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <BarChart3 className="w-5 h-5 text-sky-200" />
                   <span className="text-sm">월 매출 4~8천만원</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <MapPin className="w-5 h-5 text-sky-200" />
                   <span className="text-sm">거제도 교외 오션뷰</span>
                 </div>
               </div>
            </div>
            
            <div className="md:w-2/3 p-10 md:p-14">
              <h4 className="text-xl font-bold text-slate-800 mb-6">공간 및 분위기</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-sky-600 mb-2 border-b border-sky-100 pb-2">Interior</h5>
                  <ul className="space-y-2 text-slate-600 text-sm list-disc pl-4">
                    <li>화이트 & 블루 톤의 산토리니 감성</li>
                    <li>탁 트인 통유리로 보이는 파노라마 오션뷰</li>
                    <li>여름 시즌 라탄 소품 배치</li>
                    <li>야외 주차장 및 천막 좌석 완비</li>
                  </ul>
                </div>
                <div>
                   <h5 className="font-bold text-sky-600 mb-2 border-b border-sky-100 pb-2">Operation</h5>
                   <ul className="space-y-2 text-slate-600 text-sm">
                     <li>헤드 바리스타 및 전문 바텐더 상주</li>
                     <li>저녁 시간대 재즈 음악 재생</li>
                     <li>해건은 이따금씩 들러 관리만 진행</li>
                     <li>주 고객: 연인 데이트 및 가족 나들이</li>
                   </ul>
                </div>
              </div>

               <div className="mt-8 bg-sky-50 p-6 rounded-xl text-sm text-slate-500">
                <p>
                  * "라가불린, 아이스 하나." - 해건이 즐겨 찾는 메뉴. 
                  고급 위스키와 칵테일을 밤바다와 함께 즐길 수 있는 공간입니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
