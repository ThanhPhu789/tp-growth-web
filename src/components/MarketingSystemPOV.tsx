import { motion } from 'motion/react';
import { Target, Activity, Settings, TrendingUp } from 'lucide-react';

export default function MarketingSystemPOV() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />,
      title: "1. Traffic",
      question: "Khách đang tới từ đâu? Có đúng người không?",
      items: ["Content", "Ads đa nền tảng", "Social", "Search", "Referral"]
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />,
      title: "2. Tracking",
      question: (
        <span className="block mt-1">
          Hay mọi thứ vẫn đang kiểu:<br/>
          • Ads thấy ổn<br/>
          • Sales thấy không ổn<br/>
          • Agency báo cáo đẹp<br/>
          • Founder không biết tin ai?
        </span>
      ),
      items: ["GA4", "GTM", "Meta Pixel + CAPI", "TikTok Pixel API", "Dashboard KPI", "Attribution"]
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />,
      title: "3. Execution",
      question: "Nếu founder ngưng đốc thúc vài ngày… mọi thứ có bắt đầu chậm lại không?",
      items: ["SOP", "Checklist", "Workflow", "Phân vai", "KPI", "Reporting"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />,
      title: "4. Optimization",
      question: "Scale bằng data. Không scale bằng cảm tính.",
      items: ["CPL", "CR", "Lead quality", "ROI", "Retention", "Funnel drop-off"]
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.4em] text-[11px] font-black text-brand-highlight">
              GÓC NHÌN CỦA TÔI
            </div>
            <h2 className="font-heading text-[32px] md:text-[44px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-8 tracking-[-0.03em] md:tracking-[-0.04em]">
              Nhiều business <br className="hidden md:block" /> không thiếu hoạt động marketing.
            </h2>
            <p className="text-[18px] md:text-[20px] text-brand-secondary/90 font-medium leading-relaxed">
              Họ thiếu khả năng biết: <span className="text-brand-accent font-bold">hoạt động nào đang thật sự tạo ra tăng trưởng.</span>
            </p>
            <p className="text-[16px] md:text-[18px] text-brand-secondary/70 font-medium leading-relaxed mt-4 max-w-2xl mx-auto border border-brand-border/60 bg-brand-bg rounded-xl p-6">
              Nếu không có system: lead sẽ lúc có lúc không, chi phí sẽ tăng dần, team khó vận hành, business khó scale bền.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative relative z-10">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-border/40 hidden lg:block -translate-y-1/2 z-0" />
          
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white border border-brand-border rounded-[24px] p-8 shadow-brand-soft hover:-translate-y-2 transition-transform duration-500 group relative z-10"
            >
              <div className="w-14 h-14 bg-brand-bg border border-brand-border rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-accent transition-colors duration-500">
                {pillar.icon}
              </div>
              <h3 className="font-heading text-[20px] font-extrabold text-brand-primary mb-3 tracking-[-0.03em] leading-[1.05]">
                {pillar.title}
              </h3>
              <p className="text-[14px] text-brand-secondary font-medium mb-6 min-h-[40px] opacity-80">
                {pillar.question}
              </p>
              
              <ul className="space-y-3 border-t border-brand-border/60 pt-6">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-highlight mt-2 shrink-0 opacity-70" />
                    <span className="text-[13px] font-bold text-brand-primary/80 tracking-wide uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto bg-brand-primary text-white rounded-[24px] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-accent/10 blur-3xl" />
          <h3 className="font-heading text-[24px] md:text-[28px] font-extrabold mb-8 relative z-10 text-white tracking-[-0.03em] leading-[1.05]">Khi system đúng:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {['Lead ổn định hơn', 'Team đỡ rối hơn', 'Quyết định rõ ràng hơn', 'Chi phí giảm dần'].map((text, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm">
                <span className="block text-[14px] md:text-[15px] font-bold text-brand-highlight-soft">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
