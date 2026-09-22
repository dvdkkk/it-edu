import React from 'react';
import {
  Sparkles,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/bootcampData';
import { ScrollReveal } from './ScrollReveal';
import { CONSULTATION_URL, handleSmartPhoneClick } from '../utils/consultation';

interface FastInquirySectionProps {
  onOpenApplication?: () => void;
}

export const FastInquirySection: React.FC<FastInquirySectionProps> = () => {
  const phoneNumber = COMPANY_INFO.phone || '010-4631-2547';

  return (
    <section id="fast-inquiry" className="bg-[#ffcc00] text-black py-16 md:py-24 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
            {/* LEFT COLUMN: Catchy Banner Text & Contact Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/10 border border-black/20 text-black text-xs font-black mb-4 w-fit">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>국비지원 1:1 맞춤 교육상담</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.25] tracking-tight mb-6">
                망설이지 마세요.<br />
                국비교육 전문가가<br />
                친절하게 안내해드립니다.
              </h2>

              <p className="text-base sm:text-lg font-bold text-black/90 leading-relaxed mb-8">
                국비지원 자격 여부부터 취업 및 교육과정까지<br />
                <span className="underline decoration-2 underline-offset-4 decoration-black font-black">
                  무료로 1:1 상담해드립니다.
                </span>
              </p>

              {/* Info Contact List */}
              <div className="space-y-5 mb-8">
                {/* Phone Block: PC opens Naver Form in new tab, Mobile dials directly */}
                <div className="flex items-center gap-4 bg-black/5 p-3.5 sm:p-4 rounded-2xl border border-black/10">
                  <div className="w-12 h-12 rounded-full bg-black text-[#ffcc00] flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6 fill-[#ffcc00]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-black/70">전화 문의</span>
                      
                    </div>
                    <a
                      href={CONSULTATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleSmartPhoneClick(e, phoneNumber)}
                      className="text-2xl sm:text-3xl font-black text-black tracking-tight hover:opacity-80 transition-opacity block cursor-pointer"
                      title={`전화 문의 (${phoneNumber})`}
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Way / Campus Block */}
                <div className="flex items-center gap-4 bg-black/5 p-3.5 sm:p-4 rounded-2xl border border-black/10">
                  <div className="w-12 h-12 rounded-full bg-black text-[#ffcc00] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-black/70 block">교육방식 & 캠퍼스</span>
                    <p className="text-base sm:text-lg font-extrabold text-black tracking-tight">
                      100% 오프라인 (서울 신림)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base font-extrabold text-black/80">
                여러분의 성공적인 IT 취업을 진심으로 응원합니다!
              </p>
            </div>

            {/* RIGHT COLUMN: Consultation CTA Card */}
            <div className="lg:col-span-6">
              <div
                id="fast-inquiry-form"
                className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-black/10 max-w-xl mx-auto relative overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-black via-gray-800 to-black"></div>

                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffcc00]/25 text-black font-black text-xs border border-black/15">
                    <Clock className="w-3.5 h-3.5" />
                    1분 간편 신청
                  </span>
                  <span className="text-xs font-bold text-rose-600 flex items-center gap-1.5 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                    선착순 모집 마감임박
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-3">
                  무료 교육 상담 신청
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mb-6">
                  자바 풀스택 & 생성형 AI 서비스 개발 부트캠프 국비지원 혜택부터 훈련장려금 수령 자격까지 전문가가 1:1로 빠르게 안내해 드립니다.
                </p>

                {/* Benefits Checklist */}
                <div className="space-y-3 mb-8 bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      수강료 95~100% 국비지원 자격 실시간 확인
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      매월 최대 80만원 훈련장려금 수령 대상 여부 안내
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-gray-800">
                      비전공자·전공자 맞춤형 취업 포트폴리오 로드맵 상담
                    </span>
                  </div>
                </div>

                {/* Primary Consultation Button: Opens Naver Form in New Window */}
                <a
                  href={CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-black hover:bg-gray-900 text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-[0.99] group text-center"
                >
                  <span className="tracking-tight">상담신청 바로가기</span>
                  <ExternalLink className="w-5 h-5 text-[#ffcc00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Trust & Safe Notice */}
                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-gray-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>공식폼으로 안전하게 새 창에서 열립니다.</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
