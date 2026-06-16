import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Facebook } from 'lucide-react';
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
        {/* LAYOUT MỚI: Cân bằng tỉ lệ 6/6 để đạt độ "Wow" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-16 border-b border-brand-border items-center">
          
          {/* CỘT TRÁI: Brand Identity (Hợp nhất Logo & Slogan) */}
          <div className="flex items-start gap-5">
            <div className="h-16 w-16 md:h-20 md:w-20 bg-white border border-brand-border rounded-2xl flex items-center justify-center shadow-md p-2 shrink-0">
              <TPLogo size="custom" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col justify-center h-16 md:h-20">
              <h3 className="text-[18px] md:text-[20px] font-black text-brand-primary tracking-tight uppercase leading-tight">
                Growth Through System
              </h3>
              <p className="text-brand-secondary font-medium text-[14px] md:text-[15px] opacity-70 leading-relaxed mt-1">
                Đồng hành cùng chủ doanh nghiệp xây dựng hệ thống marketing thực chiến, minh bạch và sinh lời.
              </p>
            </div>
          </div>

          {/* CỘT PHẢI: Contact (Tối giản hóa để không làm loãng thương hiệu) */}
          <div className="flex flex-col items-center lg:items-end gap-3 w-full">
            <span className="text-[12px] font-bold text-brand-primary uppercase tracking-[0.2em] opacity-60">Kết nối với Phú</span>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full">
              {[
                { icon: <MessageCircle className="w-4 h-4" />, label: 'Zalo', url: 'https://zalo.me/0766911958' },
                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', url: 'https://www.facebook.com/your.phanthanhphu' },
                { icon: <Mail className="w-4 h-4" />, label: 'Email', url: 'mailto:phanthanhphu789@gmail.com' }
              ].map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-primary font-bold text-[13px] border border-brand-border hover:border-brand-accent hover:bg-brand-accent/5 transition-all py-2.5 px-4 rounded-full"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* HÀNG DƯỚI: Footer Base */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-6">
          <div className="text-brand-soft-text text-[12px] font-medium opacity-60">© 2026 ThanhPhu Growth With Marketing.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-soft-text text-[12px] hover:text-brand-primary underline underline-offset-4">Bảo mật</a>
            <a href="#" className="text-brand-soft-text text-[12px] hover:text-brand-primary underline underline-offset-4">Điều khoản</a>
          </div>
          <div className="flex items-center gap-2 bg-brand-highlight/10 px-4 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse" />
            <span className="text-[10px] font-black text-brand-highlight uppercase tracking-[0.2em]">Strategic Advisor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
