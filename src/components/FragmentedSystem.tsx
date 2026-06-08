import { motion } from 'motion/react';
import { Megaphone, PenTool, Users, LineChart, AlertTriangle, Blocks } from 'lucide-react';

export default function FragmentedSystem() {
  return (
    <div className="relative w-full h-full min-h-[380px] xs:min-h-[440px] sm:min-h-[550px] md:min-h-[600px] flex items-center justify-center">
      {/* Abstract Background Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-highlight/5 rounded-full blur-[60px]" />

      {/* Center Mess (The "Business") */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border border-brand-border rounded-[24px] shadow-xl flex items-center justify-center relative">
          <div className="absolute inset-0 bg-brand-highlight/5 rounded-[24px] animate-pulse" />
          <Blocks className="w-8 h-8 sm:w-10 sm:h-10 text-brand-secondary opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Slashed line across */}
            <div className="w-12 sm:w-16 h-[2px] bg-brand-highlight/40 rotate-[35deg]" />
            <div className="absolute w-12 sm:w-16 h-[2px] bg-brand-highlight/40 -rotate-[35deg]" />
          </div>
        </div>
        <div className="mt-4 sm:mt-5 bg-white border border-brand-highlight/20 text-brand-primary text-[10px] sm:text-[11px] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-highlight rounded-full animate-pulse"></span>
          System Missing
        </div>
      </motion.div>

      {/* Fragment 1: Ads */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          rotate: [-2, -5, -2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[2%] left-0 xs:left-[2%] sm:top-[10%] sm:left-[10%] bg-white border border-brand-border p-3 xs:p-3.5 sm:p-5 rounded-[20px] shadow-brand-soft flex flex-col gap-2 sm:gap-4 w-[130px] xs:w-[150px] sm:w-52 z-10"
      >
        <div className="flex items-center gap-2 sm:gap-3 border-b border-brand-border/60 pb-2.5 sm:pb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F0F5FF] flex items-center justify-center shrink-0">
            <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent" />
          </div>
          <div>
            <div className="text-[11px] sm:text-[12px] font-bold text-brand-primary uppercase tracking-widest leading-none mb-1 sm:mb-1.5">Ads Team</div>
            <div className="text-[10px] sm:text-[11px] text-brand-secondary font-medium leading-tight">"Ra nhiều leads"</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="text-[10px] sm:text-[11px] font-mono text-brand-secondary/80">KPI: Reached</div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <span className="text-brand-accent text-[9px] sm:text-[10px] font-bold">✓</span>
            </div>
        </div>
      </motion.div>

      {/* Fragment 2: Content */}
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          rotate: [4, 1, 4]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[14%] right-0 xs:right-[2%] sm:top-[18%] sm:right-[10%] bg-white border border-brand-border p-3 xs:p-3.5 sm:p-5 rounded-[20px] shadow-brand-soft flex flex-col gap-2 sm:gap-4 w-[130px] xs:w-[150px] sm:w-52 z-10"
      >
         <div className="flex items-center gap-2 sm:gap-3 border-b border-brand-border/60 pb-2.5 sm:pb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-bg flex items-center justify-center shrink-0">
            <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
          </div>
          <div>
            <div className="text-[11px] sm:text-[12px] font-bold text-brand-primary uppercase tracking-widest leading-none mb-1 sm:mb-1.5">Content</div>
            <div className="text-[10px] sm:text-[11px] text-brand-secondary font-medium leading-tight">"Câu view ngon"</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="text-[10px] sm:text-[11px] font-mono text-brand-secondary/80">Viral: High</div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-bg flex items-center justify-center border border-brand-border">
              <span className="text-brand-primary text-[9px] sm:text-[10px] font-bold">~</span>
            </div>
        </div>
      </motion.div>

      {/* Fragment 3: Sales */}
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotate: [-1, 3, -1]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[18%] left-0 xs:left-[2%] sm:bottom-[18%] sm:left-[8%] bg-white border border-brand-highlight/20 p-3 xs:p-3.5 sm:p-5 rounded-[20px] shadow-brand-soft flex flex-col gap-2 sm:gap-4 w-[140px] xs:w-[165px] sm:w-[230px] z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-brand-highlight/[0.02]" />
        <div className="flex items-center gap-2 sm:gap-3 border-b border-brand-highlight/10 pb-2.5 sm:pb-4 relative z-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-highlight/10 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-brand-highlight" />
          </div>
          <div>
            <div className="text-[11px] sm:text-[12px] font-bold text-brand-primary uppercase tracking-widest leading-none mb-1 sm:mb-1.5">Sales Team</div>
            <div className="text-[10px] sm:text-[11px] text-brand-highlight font-bold leading-tight">"Khách không có nhu cầu"</div>
          </div>
        </div>
        <div className="text-[10px] sm:text-[11px] font-mono text-brand-highlight flex items-center gap-2 bg-brand-highlight/10 p-2 sm:p-2.5 rounded-lg border border-brand-highlight/20 relative z-10">
          <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="font-sans font-bold uppercase tracking-[0.05em] text-[9px] xs:text-[10px] sm:text-[11px]">Low Conversion</span>
        </div>
      </motion.div>

      {/* Fragment 4: Report */}
      <motion.div 
        animate={{ 
          y: [0, 10, 0],
          rotate: [-8, -4, -8]
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[2%] right-0 xs:right-[2%] sm:bottom-[2%] sm:right-[10%] bg-[#0F172A] border border-[#1E293B] p-3 xs:p-3.5 sm:p-5 rounded-[20px] shadow-2xl flex flex-col gap-2 sm:gap-4 w-[130px] xs:w-[150px] sm:w-52 z-10"
      >
        <div className="flex items-center gap-2 sm:gap-3 border-b border-white/10 pb-2.5 sm:pb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <LineChart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="text-[11px] sm:text-[12px] font-bold text-white uppercase tracking-widest leading-none mb-1 sm:mb-1.5">Reporting</div>
            <div className="text-[10px] sm:text-[11px] text-white/60 font-medium leading-tight">"Số liệu lệch"</div>
          </div>
        </div>
        <div className="flex gap-1.5 sm:gap-2 items-end h-[32px] sm:h-10 pt-1">
          <div className="w-2.5 sm:w-3 h-full bg-white/10 rounded-[2px]" />
          <div className="w-2.5 sm:w-3 h-2/3 bg-white/10 rounded-[2px]" />
          <div className="w-2.5 sm:w-3 h-1/3 bg-brand-highlight rounded-[2px] relative">
            <div className="absolute -top-[22px] sm:-top-7 -left-8 sm:-left-10 bg-brand-highlight text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap">Mismatch</div>
          </div>
          <div className="w-2.5 sm:w-3 h-4/5 bg-white/10 rounded-[2px]" />
        </div>
      </motion.div>

      {/* Scatter dots linking visual layout faintly */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
        <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-brand-border rounded-full" />
        <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-brand-border rounded-full" />
        <div className="absolute top-[60%] left-[35%] w-1.5 h-1.5 bg-brand-highlight/50 rounded-full animate-pulse" />
        
        <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-brand-border rounded-full" />
        <div className="absolute top-[45%] right-[30%] w-2 h-2 bg-brand-border rounded-full" />
        
        <div className="absolute bottom-[35%] left-[45%] w-1.5 h-1.5 bg-brand-highlight/30 rounded-full" />
        <div className="absolute bottom-[40%] right-[35%] w-2 h-2 bg-brand-border rounded-full" />
      </div>

    </div>
  );
}
