import { motion } from 'motion/react';
import { ExternalLink, Play, Youtube } from 'lucide-react';

export default function YoutubeSection() {
  return (
    <section className="relative overflow-hidden border-t border-brand-border bg-white py-12 md:py-16 lg:py-20">
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-bl from-brand-accent/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-gradient-to-tr from-brand-highlight/[0.03] to-transparent pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-10 xl:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <Youtube className="w-5 h-5 text-red-500 hover:scale-110 transition-transform" />
              <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">CONTENT HUB</span>
            </div>
            <h2 className="mb-6 font-heading text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-primary sm:text-[40px] md:text-[46px] md:tracking-[-0.04em]">
              Chia sẻ góc nhìn<br className="hidden md:block" /> từ thực chiến
            </h2>
            <p className="text-[16px] md:text-[18px] text-brand-secondary font-medium leading-[1.7] md:leading-[1.8] mb-8 max-w-[480px]">
              Góc nhìn về marketing, xây dựng đội ngũ và gỡ điểm nghẽn cho SME. Mỗi video dưới 60s, đi thẳng vào vấn đề.
            </p>
            <a 
              href="https://www.youtube.com/@thanhphumarketing/shorts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-primary font-bold text-[15px] border-b-2 border-brand-highlight pb-1 hover:text-brand-highlight group transition-all"
            >
              Xem thêm trên YouTube <ExternalLink className="w-4 h-4 text-brand-highlight group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {[1, 2, 3].map((item, idx) => (
              <motion.a 
                href="https://www.youtube.com/@thanhphumarketing/shorts"
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-brand-soft"
              >
                <div className="flex h-full flex-col justify-between rounded-[14px] border border-dashed border-[#CBD5E1] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFF6FF] text-[#1D4ED8]">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#EA580C]">Video thực chiến</span>
                    <p className="mt-2 text-[13px] font-semibold leading-[1.5] text-[#334155]">Khung nội dung sẽ cập nhật từ kênh YouTube.</p>
                    <span className="mt-4 inline-flex text-[11px] font-bold text-[#1D4ED8]">Sẽ cập nhật</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
