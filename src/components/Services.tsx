import { motion } from 'motion/react';
import { Search, Zap, ShieldCheck, BarChart3 } from 'lucide-react';
import { AbstractArchitecture } from './SystemVisuals';

export default function Services() {
  const whatIDo = [
    {
      title: "Khi mọi thứ đang rối",
      desc: "Tôi giúp nhìn lại cho rõ",
      icon: <Search className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors duration-500" />
    },
    {
      title: "Khi tăng trưởng chậm",
      desc: "Tôi giúp tìm điểm nghẽn",
      icon: <Zap className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors duration-500" />
    },
    {
      title: "Khi thiếu tin số liệu",
      desc: "Tôi giúp rà lại hệ thống đo lường",
      icon: <BarChart3 className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors duration-500" />
    },
    {
      title: "Khi build/thuê team",
      desc: "Tôi giúp đánh giá năng lực thật",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors duration-500" />
    }
  ];

  return (
    <div className="bg-brand-bg md:bg-white relative border-t border-brand-border/40">
      <AbstractArchitecture />
      {/* SECTION: TÔI LÀM GÌ */}
      <section className="py-16 md:py-32 container mx-auto px-6 relative">
        <div className="absolute top-20 left-0 w-64 h-64 bg-brand-highlight/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-4xl mb-12 md:mb-20 text-center mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-brand-accent" />
            <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">TÔI LÀM GÌ</span>
            <div className="w-8 md:w-12 h-px bg-brand-accent" />
          </div>
          <h2 className="font-heading text-[32px] md:text-[44px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-6 md:mb-8 tracking-[-0.03em] md:tracking-[-0.04em]">
            Tôi không nhận làm marketing thuê đại trà.
          </h2>
          <p className="text-[16px] md:text-[20px] text-brand-secondary leading-[1.7] md:leading-[1.8] font-medium opacity-80">
            Tôi chủ yếu đồng hành với doanh nghiệp ở vai trò người nhìn hệ thống và đưa góc nhìn thực chiến. Nói đơn giản:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {whatIDo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 md:p-10 bg-white border border-brand-border rounded-brand-card hover:shadow-brand-soft hover:border-brand-accent/20 hover:-translate-y-1 transition-all duration-500 text-center flex flex-col items-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/[0.03] rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="w-14 h-14 bg-brand-bg border border-brand-border rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:shadow-brand-accent/20 transition-all duration-500 relative z-10">
                {item.icon}
              </div>
              <h3 className="font-heading text-[17px] md:text-[18px] font-extrabold text-brand-primary mb-3 leading-[1.1] tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-brand-secondary font-medium opacity-80">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
