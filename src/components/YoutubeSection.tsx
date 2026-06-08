import { motion } from 'motion/react';
import { Youtube, ExternalLink, Play } from 'lucide-react';

export default function YoutubeSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-bl from-brand-accent/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-gradient-to-tr from-brand-highlight/[0.03] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 xl:gap-20 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <Youtube className="w-5 h-5 text-red-500 hover:scale-110 transition-transform" />
              <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">CONTENT HUB</span>
            </div>
            <h2 className="font-heading text-[36px] sm:text-[42px] md:text-[48px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-6 md:mb-8 tracking-[-0.03em] md:tracking-[-0.04em]">
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

          {/* YouTube Shorts Grid Mockup */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:ml-10">
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
                className={`relative aspect-[9/16] rounded-2xl md:rounded-[24px] overflow-hidden group bg-slate-100 shadow-brand-soft border border-brand-border/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.15)] transition-all duration-500 ${idx === 2 ? 'hidden md:block' : ''}`}
              >
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={`https://images.unsplash.com/photo-15${idx}5${idx}9${idx}531-1${idx}c${idx}8d${idx}?auto=format&fit=crop&w=600&q=80`} 
                  alt="Video thumbnail placeholder"
                  className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="self-end bg-red-500 text-white rounded-full p-2 lg:p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-3 h-3 lg:w-4 lg:h-4 fill-current ml-0.5" />
                  </div>
                  <div className="text-white font-bold text-[12px] md:text-[14px]">
                    <span className="bg-brand-highlight px-2 py-1 object-cover rounded shadow-lg text-[10px] uppercase tracking-wider">Shorts</span>
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
