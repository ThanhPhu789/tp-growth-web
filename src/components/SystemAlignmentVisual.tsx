import { motion } from 'motion/react';
import { GitCommit, GitPullRequest, Database, Zap, Layers } from 'lucide-react';

export default function SystemArchitectureNode() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/95 backdrop-blur-md border border-brand-border rounded-brand-floating shadow-brand-soft p-6 w-[320px]"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-brand-accent" />
          <h3 className="text-[13px] font-bold text-brand-primary tracking-tight uppercase">System Alignment</h3>
        </div>
        <div className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse" />
      </div>

      <div className="relative space-y-4">
        {/* Connecting Line */}
        <div className="absolute left-[23px] top-6 bottom-8 w-px bg-gradient-to-b from-brand-accent/30 via-brand-highlight/30 to-brand-accent/10" />

        {/* Node 1: Strategy */}
        <div className="flex items-start gap-4 relative z-10">
          <div className="w-12 h-12 bg-white border border-brand-border rounded-[12px] flex items-center justify-center shadow-sm shrink-0">
             <GitCommit className="w-5 h-5 text-brand-accent" />
          </div>
          <div className="pt-2">
             <div className="text-[12px] font-bold text-brand-primary leading-tight">Clarity & Strategy</div>
             <div className="text-[11px] font-medium text-brand-secondary/70 mt-0.5">Xác định điểm nghẽn</div>
          </div>
        </div>

        {/* Node 2: Operations */}
        <motion.div 
           initial={{ opacity: 0.5 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
           className="flex items-start gap-4 relative z-10"
        >
          <div className="w-12 h-12 bg-brand-accent border border-brand-accent rounded-[12px] flex items-center justify-center shadow-md shadow-brand-accent/20 shrink-0">
             <GitPullRequest className="w-5 h-5 text-white" />
          </div>
          <div className="pt-2">
             <div className="text-[12px] font-bold text-brand-primary leading-tight">System Alignment</div>
             <div className="text-[11px] font-medium text-brand-secondary/70 mt-0.5">Marketing x Sales x Vận hành</div>
          </div>
        </motion.div>

        {/* Node 3: Data */}
        <div className="flex items-start gap-4 relative z-10">
          <div className="w-12 h-12 bg-white border border-brand-border rounded-[12px] flex items-center justify-center shadow-sm shrink-0">
             <Database className="w-5 h-5 text-brand-accent/80" />
          </div>
          <div className="pt-2">
             <div className="text-[12px] font-bold text-brand-primary leading-tight">Data & Tracking</div>
             <div className="text-[11px] font-medium text-brand-secondary/70 mt-0.5">Đo lường & Tối ưu</div>
          </div>
        </div>

        {/* Output Node - Highlight */}
        <motion.div 
           initial={{ scale: 0.98 }}
           animate={{ scale: 1 }}
           transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
           className="mt-6 flex items-center justify-between p-3 bg-brand-highlight-soft border border-brand-highlight/20 rounded-xl"
        >
          <div className="flex items-center gap-3">
             <Zap className="w-4 h-4 text-brand-highlight" fill="currentColor" />
             <span className="text-[11px] font-bold text-brand-highlight uppercase tracking-widest">Sustainable Growth</span>
          </div>
          <span className="text-[11px] font-bold text-brand-highlight/80 tracking-widest">+ ROI</span>
        </motion.div>

      </div>
    </motion.div>
  );
}
