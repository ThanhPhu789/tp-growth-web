import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import StrategicVisual from './StrategicVisual';
import { NodeConnections } from './SystemVisuals';
import Header from './Header';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-bg font-sans selection:bg-brand-highlight/10 selection:text-brand-highlight">
      <div className="pointer-events-none absolute right-0 top-0 h-[90%] w-[60%] bg-gradient-to-bl from-brand-accent/[0.08] via-brand-accent/[0.02] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-[50%] bg-gradient-to-tr from-brand-accent/[0.05] to-transparent" />
      <NodeConnections />

      <Header variant="hero" />

      <main className="relative z-10 container mx-auto px-5 pb-14 pt-7 sm:px-6 md:pt-12 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-highlight/20 bg-brand-highlight/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-brand-highlight" />
              <span className="pt-[1px] text-[10px] font-bold uppercase tracking-[0.15em] text-brand-highlight md:text-[11px]">Marketing Advisor for SME</span>
            </div>
            <h1 className="font-heading text-[40px] font-black leading-[1.02] tracking-[-0.035em] text-brand-primary sm:text-[46px] md:text-[54px] lg:text-[60px] xl:text-[64px]">
              Doanh nghiệp không thiếu nỗ lực. Họ thiếu <span className="text-brand-accent">hệ thống</span> để ra khách đều.
            </h1>
            <p className="mt-6 max-w-[620px] text-[16px] font-medium leading-[1.7] text-brand-secondary md:mt-7 md:text-[18px]">
              Tôi giúp SME nhìn lại traffic, tracking, execution và optimization để biết đang nghẽn ở đâu trước khi chi thêm tiền.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-9">
              <button className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-brand-highlight/20 transition-all hover:brightness-105 sm:px-7 sm:text-[16px]">
                Đặt lịch audit hệ thống
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button onClick={() => { window.location.href = '/Growth-System-Framework'; }} className="inline-flex min-h-12 items-center justify-center rounded-brand-button border border-brand-border bg-white px-6 py-3.5 text-[15px] font-bold text-brand-primary shadow-sm transition-all hover:border-brand-accent/30 hover:bg-brand-accent/[0.02] sm:px-7 sm:text-[16px]">
                Xem cách tôi rà hệ thống
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, delay: 0.15 }} className="relative">
            <StrategicVisual />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-brand-highlight/10 blur-2xl md:h-56 md:w-56" />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
