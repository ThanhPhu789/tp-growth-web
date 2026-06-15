import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Phone, Mail, Facebook, Send } from 'lucide-react';
import TPLogo from './TPLogo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border pt-24 pb-12">
      {/* CTA CUỐI */}
      <div className="container mx-auto px-6 mb-20 md:mb-32">
        <div className="bg-brand-section rounded-[32px] md:rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent/[0.03] to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="font-heading text-[32px] md:text-[56px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-8 md:mb-10 tracking-[-0.03em] md:tracking-[-0.04em]">
              Nhiều business không chết vì thiếu cố gắng. <br className="hidden md:block" />
              <span className="text-brand-highlight block mt-2">
                Họ chết vì: không nhìn ra <br className="hidden md:block" /> đúng vấn đề đủ sớm.
              </span>
            </h2>
            <p className="text-[18px] md:text-[24px] text-brand-primary font-bold mb-12 md:mb-16 italic max-w-2xl mx-auto">
              Có thể bạn không cần làm nhiều hơn. <br/>
              Bạn chỉ cần nhìn đúng hơn.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-6">
              <button className="bg-brand-highlight text-white px-10 md:px-12 py-4 md:py-5 rounded-brand-button text-[16px] md:text-[18px] font-bold hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-highlight/25">
                Đặt lịch nói chuyện ngay
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-brand-primary border border-brand-border px-8 md:px-10 py-4 md:py-5 rounded-brand-button text-[16px] md:text-[18px] font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group">
                 <MessageCircle className="w-6 h-6 text-[#0068FF] group-hover:scale-110 transition-transform" />
                 Nhắn Zalo trao đổi
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-16 border-b border-brand-border text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 md:h-14 bg-white border border-brand-border rounded-xl flex items-center justify-center shadow-md px-4 py-1 shrink-0">
  <TPLogo size="custom" className="h-full w-auto object-contain" />
</div>
              <div className="text-[18px] md:text-[20px] font-bold text-brand-primary tracking-tight">Growth Through System</div>
            </div>
            <p className="text-brand-secondary font-medium max-w-[440px] text-[14px] md:text-[15px] opacity-70 leading-relaxed">
              Đồng hành cùng chủ doanh nghiệp xây dựng hệ thống marketing thực chiến và minh bạch.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: <MessageCircle className="w-5 h-5 text-[#0068FF]" />, label: 'Zalo' },
              { icon: <Facebook className="w-5 h-5 text-[#1877F2]" />, label: 'Facebook' },
              { icon: <Mail className="w-5 h-5 text-brand-accent" />, label: 'Email' },
              { icon: <Phone className="w-5 h-5 text-green-500" />, label: '090 000 0000' }
            ].map((link, i) => (
              <a key={i} href="#" className="flex items-center gap-2 text-brand-primary font-bold text-[13px] md:text-[14px] hover:text-brand-accent transition-colors py-2 px-4 rounded-full hover:bg-brand-accent/5">
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-6">
          <div className="text-brand-soft-text text-[12px] md:text-[13px] font-medium opacity-60">© 2026 TP GROWTH MARKETING. Bản quyền thuộc về tác giả.</div>
          <div className="flex items-center gap-6 md:gap-10">
            <a href="#" className="text-brand-soft-text text-[12px] md:text-[13px] font-medium hover:text-brand-primary transition-colors hover:underline">Chính sách bảo mật</a>
            <a href="#" className="text-brand-soft-text text-[12px] md:text-[13px] font-medium hover:text-brand-primary transition-colors hover:underline">Điều khoản dịch vụ</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-black text-brand-highlight uppercase tracking-[0.4em]">Strategic Advisor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
