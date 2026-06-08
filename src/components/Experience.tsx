import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, Target, UserCheck } from 'lucide-react';
import SystemArchitectureNode from './SystemAlignmentVisual';

export default function Experience() {
  const cases = [
    { label: 'B2B ngành sơn', icon: <Target className="w-5 h-5" /> },
    { label: 'Bán lẻ phụ kiện công nghệ', icon: <TrendingUp className="w-5 h-5" /> },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'FnB quy mô nhỏ' },
    { icon: <Users className="w-5 h-5" />, label: 'Lead gen dịch vụ' },
    { icon: <UserCheck className="w-5 h-5" />, label: 'Xây team marketing nội bộ' }
  ];

  const values = [
    'Có góc nhìn bên ngoài nhưng hiểu vận hành thật',
    'Không bị bán thêm dịch vụ chưa cần',
    'Không tốn nhiều tháng mò sai hướng',
    'Có người nói thẳng vấn đề thật',
    'Giúp đội ngũ hiện tại chạy tốt hơn'
  ];

  return (
    <div className="bg-brand-bg">
      {/* KINH NGHIỆM THỰC TẾ */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="bg-white border border-brand-border rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-24 shadow-brand-soft overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">TRACK RECORD</span>
              </div>
              <h2 className="font-heading text-[32px] md:text-[48px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-8 md:mb-10 tracking-[-0.03em] md:tracking-[-0.04em]">
                Kinh nghiệm thực tế
              </h2>
              <p className="text-[17px] md:text-[18px] text-brand-secondary font-medium leading-relaxed mb-10 md:mb-12 border-l-4 border-brand-accent pl-6 md:pl-8 italic bg-brand-accent/[0.02] py-4 rounded-r-2xl">
                “Không phải doanh nghiệp thiếu cố gắng. Họ thường chỉ thiếu một hệ thống rõ ràng.”
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {cases.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-brand-border bg-brand-section font-bold text-brand-primary text-[13px] md:text-[14px] hover:border-brand-accent/20 transition-all hover:bg-white group cursor-default">
                    <div className="text-brand-accent group-hover:scale-110 transition-transform">{c.icon}</div>
                    {c.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-primary p-8 md:p-12 lg:p-14 rounded-[28px] md:rounded-[32px] text-white">
              <h3 className="font-heading text-[22px] md:text-[24px] font-extrabold mb-8 md:mb-10 leading-[1.05] tracking-[-0.03em] text-white">Vì sao nhiều chủ doanh nghiệp thích cách này?</h3>
              <div className="space-y-4 md:space-y-6">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-[15px] md:text-[16px] font-medium opacity-90 leading-snug">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MỘT CHÚT VỀ PHÚ */}
      <section className="py-20 lg:py-32 container mx-auto px-6 border-t border-brand-border">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20 lg:gap-28 items-center">
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

            {/* Strategic Floating Block */}
            <div className="absolute -top-10 -right-4 lg:-right-16 z-30 transform scale-75 md:scale-90 lg:scale-100 origin-top-right">
               <SystemArchitectureNode />
            </div>

            {/* Decorative element behind image */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-brand-accent/5 rounded-[32px] md:rounded-[48px] -z-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
                <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">MỘT CHÚT VỀ PHÚ</span>
              </div>
              <h2 className="font-heading text-[36px] sm:text-[42px] md:text-[48px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-8 lg:mb-10 tracking-[-0.03em] md:tracking-[-0.04em]">
                Tôi làm marketing 7 năm.
              </h2>
              <div className="text-[16px] md:text-[18px] lg:text-[20px] text-brand-secondary leading-[1.7] md:leading-[1.8] font-medium space-y-6 md:space-y-8">
                <p className="opacity-90 max-w-[540px]">
                  Đi qua đủ thứ: content, ads, team, tracking, growth, vận hành. Nên tôi hiểu khoảng cách giữa marketing trên lý thuyết và chuyện phải trả lương cuối tháng.
                </p>
                <div className="p-8 md:p-10 bg-white border border-brand-border/60 rounded-[24px] md:rounded-[32px] shadow-brand-soft italic text-brand-primary font-bold text-[17px] md:text-[20px] relative overflow-hidden group hover:border-brand-accent/20 transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-accent opacity-30 group-hover:opacity-100 transition-opacity" />
                  “Tôi thích những cuộc nói chuyện thẳng, rõ và thực tế. Nếu hợp, có thể bắt đầu bằng một cuộc gọi ngắn hoặc một ly cafe.”
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* LƯU Ý */}
      <section className="pb-20 lg:pb-32 container mx-auto px-6">
        <div className="max-w-5xl mx-auto p-8 md:p-12 lg:p-14 bg-brand-primary rounded-[32px] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
          <div className="space-y-3 relative z-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-highlight opacity-90">LƯU Ý QUAN TRỌNG</h4>
            <div className="text-[18px] md:text-[22px] font-bold text-white">Hiện tại tôi chỉ nhận tư vấn & audit.</div>
            <p className="opacity-70 text-[14px] md:text-[15px] max-w-lg text-white">Tôi không nhận vận hành thuê đại trà để đảm bảo chất lượng sâu nhất cho mỗi trường hợp cụ thể.</p>
          </div>
          <div className="flex flex-wrap gap-3 relative z-10">
             <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 rounded-full border border-white/20 text-[11px] md:text-[13px] font-bold backdrop-blur-sm">Tư vấn chiến lược 1:1</div>
             <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 rounded-full border border-white/20 text-[11px] md:text-[13px] font-bold backdrop-blur-sm">Audit marketing</div>
          </div>
        </div>
      </section>
    </div>
  );
}
