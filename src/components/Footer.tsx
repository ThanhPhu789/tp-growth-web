import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Facebook } from 'lucide-react';
import TPLogo from './TPLogo';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white pt-14 pb-10 md:pt-20">
      {/* CTA CUỐI */}
      <div className="container mx-auto mb-14 px-5 sm:px-6 md:mb-20 lg:px-8">
        <div className="group relative overflow-hidden rounded-[24px] bg-brand-section p-6 text-center sm:p-8 md:rounded-[32px] md:p-12 lg:px-16 lg:py-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-accent/[0.03] to-transparent pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="mb-8 md:mb-10">
              <h2 className="mx-auto max-w-4xl font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-brand-primary sm:text-[40px] md:text-[52px] md:tracking-[-0.04em] lg:text-[58px]">
                Xây hệ thống tăng trưởng rõ ràng hơn —
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-[18px] font-semibold leading-[1.55] text-brand-primary sm:text-[20px] md:mt-5 md:text-[25px] md:leading-[1.5]">
                từ demand đến revenue.
              </p>
              <p className="mx-auto mt-7 max-w-4xl font-heading text-[26px] font-extrabold leading-[1.2] tracking-[-0.025em] text-brand-highlight sm:text-[30px] md:mt-9 md:text-[40px] md:leading-[1.15] md:tracking-[-0.035em]">
                <span className="block">Nối các lớp đang vận hành</span>
                <span className="block">về cùng một mục tiêu.</span>
              </p>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-[17px] font-bold italic text-brand-primary md:mb-10 md:text-[22px]">
              Không cần mặc định xây lại toàn bộ hệ thống. <br/>
              Bắt đầu từ nơi đang giới hạn kết quả.
            </p>

            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button className="flex min-h-12 items-center justify-center gap-3 rounded-brand-button bg-brand-highlight px-7 py-3.5 text-[16px] font-bold text-white shadow-xl shadow-brand-highlight/25 transition-all hover:brightness-105 active:scale-95 md:px-9 md:py-4 md:text-[17px]">
                Trao đổi về điểm nghẽn
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="group flex min-h-12 items-center justify-center gap-3 rounded-brand-button border border-brand-border bg-white px-7 py-3.5 text-[16px] font-bold text-brand-primary transition-all hover:bg-slate-50 md:px-8 md:py-4 md:text-[17px]">
                 <MessageCircle className="w-6 h-6 text-[#0068FF] group-hover:scale-110 transition-transform" />
                 Nhắn Zalo trao đổi
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* LAYOUT FOOTER CHÍNH */}
        <div className="grid grid-cols-1 items-start gap-10 border-b border-brand-border pb-12 lg:grid-cols-2 lg:gap-16">
          
          {/* CỘT TRÁI: Brand Identity */}
<div className="flex items-center gap-6">
  {/* Khung hình chữ nhật ngang, ôm theo tỉ lệ logo */}
  <div className="h-16 md:h-[72px] bg-white border border-brand-border rounded-xl flex items-center justify-center shadow-sm px-4 py-3 shrink-0">
    <TPLogo size="custom" className="h-full w-auto object-contain" />
  </div>
  
  {/* Text block */}
  <div className="flex flex-col justify-center">
    <h3 className="text-[18px] md:text-[20px] font-black text-brand-primary tracking-tight uppercase leading-tight">
      Growth Through System
    </h3>
    <p className="text-brand-secondary font-medium text-[14px] md:text-[15px] opacity-70 leading-relaxed mt-1">
      Xây hệ thống tăng trưởng rõ ràng hơn — từ demand đến revenue.
    </p>
  </div>
</div>

          {/* CỘT PHẢI: Contact */}
          <div className="flex flex-col items-center lg:items-end gap-3 w-full">
            <span className="text-[12px] font-bold text-brand-primary uppercase tracking-[0.2em] opacity-60">Kết nối với Phú</span>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full">
              {[
                { icon: <MessageCircle className="w-4 h-4" />, label: 'Zalo', url: '#' },
                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', url: '#' },
                { icon: <Mail className="w-4 h-4" />, label: 'Email', url: '#' }
              ].map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-2 text-brand-primary font-bold text-[13px] border border-brand-border hover:border-brand-accent hover:bg-brand-accent/5 transition-all py-2.5 px-4 rounded-full lg:min-h-0"
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
          <div className="text-brand-soft-text text-[12px] font-medium opacity-60">© 2026 TP GROWTH MARKETING. Bản quyền thuộc về tác giả.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="inline-flex min-h-11 items-center text-brand-soft-text text-[12px] hover:text-brand-primary underline underline-offset-4 lg:min-h-0">Bảo mật</a>
            <a href="#" className="inline-flex min-h-11 items-center text-brand-soft-text text-[12px] hover:text-brand-primary underline underline-offset-4 lg:min-h-0">Điều khoản</a>
          </div>
          <div className="flex items-center gap-2 bg-brand-highlight/10 px-4 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse" />
            <span className="text-[10px] font-black text-brand-highlight uppercase tracking-[0.2em]">Strategic Operator</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
