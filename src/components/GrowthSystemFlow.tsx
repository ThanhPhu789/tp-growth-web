import { motion } from 'motion/react';
import { Copy, Terminal, Workflow } from 'lucide-react';

export default function GrowthSystemFlow() {
  const steps = [
    { title: 'STRATEGY', hasArrow: false, desc: '' },
    { title: 'Positioning', hasArrow: true, desc: 'VALUE PROP • OFFER • MESSAGE' },
    { title: 'Traffic', hasArrow: true, desc: 'CONTENT • ADS • DISTRIBUTION' },
    { title: 'Tracking', hasArrow: true, desc: 'GA4 • PIXEL • CAPI • DATA' },
    { title: 'Insights', hasArrow: true, desc: 'PATTERNS • BOTTLENECKS • DECISIONS' },
    { title: 'Optimization', hasArrow: true, desc: 'SYSTEMS • ITERATION • ALIGNMENT' },
    { title: 'Growth', hasArrow: true, desc: 'SCALABLE • MEASURABLE • SUSTAINABLE' },
  ];

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-border to-transparent opacity-50" />
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 border border-brand-border bg-brand-bg px-4 py-1.5 md:py-2 rounded-full mb-2">
              <Workflow className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-highlight" />
              <span className="text-[10px] md:text-[11px] font-bold text-brand-primary uppercase tracking-[0.15em] pt-[1px]">The Growth Vector</span>
            </div>

            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-primary tracking-tight leading-[1.25] md:leading-[1.15]">
              Sự tăng trưởng bền vững <br className="hidden sm:block" />
              đến từ <span className="text-brand-accent">hệ thống liên kết</span>.<br />
              Không phải tactic rời rạc.
            </h2>

            <p className="text-base md:text-lg text-brand-secondary font-medium leading-relaxed max-w-md pt-2 md:pt-4">
              Marketing không chỉ là chạy ads. Đó là luồng chảy logic từ cái nhìn chiến lược của founder đến điểm chạm cuối cùng của khách hàng.
            </p>
          </motion.div>

          {/* Right Visual: Monospace / Linear-style Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="absolute inset-0 bg-brand-accent/5 rounded-[32px] blur-3xl transform -rotate-6" />
            
            <div className="relative bg-[#fafafa] border border-brand-border/60 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-brand-soft">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 md:px-6 py-3.5 md:py-4 border-b border-brand-border/40 bg-white">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-secondary/40" />
                  <span className="text-[10px] md:text-[11px] font-bold text-brand-secondary/60 uppercase tracking-widest">growth-flow.ts</span>
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full hover:bg-brand-highlight/10 flex items-center justify-center transition-colors cursor-pointer group">
                  <Copy className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-secondary/40 group-hover:text-brand-highlight transition-colors" />
                </div>
              </div>

              {/* Code/Flow Body */}
              <div className="p-6 sm:p-8 md:p-10 font-mono text-[13px] md:text-[15px] space-y-5 md:space-y-6 overflow-x-auto scrolbar-hide">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 group whitespace-nowrap sm:whitespace-normal ${!step.hasArrow && idx !== 0 ? 'pt-4' : ''}`}
                  >
                    <div className="flex items-center gap-2.5 md:gap-3 sm:w-40 shrink-0">
                      {step.hasArrow ? (
                        <span className="text-brand-highlight/70 group-hover:text-brand-highlight transition-colors font-bold">→</span>
                      ) : null}
                      <span className={`font-mono ${!step.hasArrow ? 'text-brand-primary font-extrabold tracking-wider text-[14px] md:text-[16px]' : 'text-brand-secondary/85 font-medium'}`}>
                        {step.title}
                      </span>
                    </div>
                    {step.desc && (
                      <span className="text-[11px] md:text-[12px] font-sans text-brand-secondary/60 font-medium tracking-wider uppercase group-hover:text-brand-secondary/90 transition-colors pl-6 sm:pl-0">
                        {step.desc}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
