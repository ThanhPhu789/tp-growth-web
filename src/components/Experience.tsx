import { motion } from 'motion/react';
import { UserCheck } from 'lucide-react';
import SystemArchitectureNode from './SystemAlignmentVisual';

export default function Experience() {
  return (
    <div className="bg-brand-bg">
      {/* MỘT CHÚT VỀ PHÚ */}
      <section className="container mx-auto border-t border-brand-border px-5 py-14 sm:px-6 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group max-w-[400px] lg:max-w-none mx-auto lg:mx-0 w-full"
          >
            <div className="aspect-[4/5] bg-slate-200 rounded-[32px] md:rounded-[48px] overflow-hidden group-hover:shadow-[0_20px_60px_-15px_rgba(29,78,216,0.3)] transition-all duration-700 border-4 md:border-8 border-white relative z-10">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop"
                alt="Marketing Advisor"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-brand-highlight p-5 md:p-8 rounded-full border-8 border-white shadow-xl z-20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hidden md:block">
              <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>

            <div className="absolute -top-10 -right-4 lg:-right-16 z-30 transform scale-75 md:scale-90 lg:scale-100 origin-top-right">
              <SystemArchitectureNode />
            </div>

            <div className="absolute -top-10 -left-10 w-full h-full bg-brand-accent/5 rounded-[32px] md:rounded-[48px] -z-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">
                MỘT CHÚT VỀ PHÚ
              </span>
            </div>

            <h2 className="font-heading text-[36px] sm:text-[42px] md:text-[48px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-8 lg:mb-10 tracking-[-0.03em] md:tracking-[-0.04em]">
              Tôi làm marketing 7 năm.
            </h2>

            <div className="text-[16px] md:text-[18px] lg:text-[20px] text-brand-secondary leading-[1.7] md:leading-[1.8] font-medium space-y-6 md:space-y-8">
              <p className="opacity-90 max-w-[540px]">
                Đi qua đủ thứ: content, ads, team, tracking, growth, vận hành.
                Nên tôi hiểu khoảng cách giữa marketing trên lý thuyết và chuyện
                phải trả lương cuối tháng.
              </p>

              <div className="p-8 md:p-10 bg-white border border-brand-border/60 rounded-[24px] md:rounded-[32px] shadow-brand-soft italic text-brand-primary font-bold text-[17px] md:text-[20px] relative overflow-hidden group hover:border-brand-accent/20 transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-accent opacity-30 group-hover:opacity-100 transition-opacity" />
                “Tôi thích những cuộc nói chuyện thẳng, rõ và thực tế. Nếu hợp,
                có thể bắt đầu bằng một cuộc gọi ngắn hoặc một ly cafe.”
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LƯU Ý */}
      <section className="container mx-auto px-5 pb-14 sm:px-6 md:pb-20 lg:pb-24">
        <div className="relative mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 overflow-hidden rounded-[32px] bg-brand-primary p-6 text-white md:flex-row md:items-center md:gap-10 md:p-10 lg:p-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />

          <div className="space-y-3 relative z-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-highlight opacity-90">
              LƯU Ý QUAN TRỌNG
            </h4>
            <div className="text-[18px] md:text-[22px] font-bold text-white">
              Hiện tại tôi chỉ nhận tư vấn & audit.
            </div>
            <p className="opacity-70 text-[14px] md:text-[15px] max-w-lg text-white">
              Tôi không nhận vận hành thuê đại trà để đảm bảo chất lượng sâu nhất
              cho mỗi trường hợp cụ thể.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10">
            <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 rounded-full border border-white/20 text-[11px] md:text-[13px] font-bold backdrop-blur-sm">
              Tư vấn chiến lược 1:1
            </div>
            <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 rounded-full border border-white/20 text-[11px] md:text-[13px] font-bold backdrop-blur-sm">
              Audit marketing
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
