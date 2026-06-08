import { motion } from 'motion/react';
import { Target, MessageSquare, Briefcase, Zap, GitMerge } from 'lucide-react';

export default function DataFlowVisual() {
  return (
    <div className="w-full flex justify-center py-4 md:py-6 overflow-hidden">
      <div className="relative w-full max-w-[320px] md:max-w-[400px] h-[200px] md:h-[240px]">
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 120 40 C 200 40, 250 120, 320 120" 
            stroke="currentColor" 
            className="text-brand-accent" 
            strokeWidth="2" 
            strokeDasharray="4 4" 
            fill="none" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            d="M 120 120 L 320 120" 
            stroke="currentColor" 
            className="text-brand-accent" 
            strokeWidth="2" 
            strokeDasharray="4 4" 
            fill="none" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            d="M 120 200 C 200 200, 250 120, 320 120" 
            stroke="currentColor" 
            className="text-brand-accent" 
            strokeWidth="2" 
            strokeDasharray="4 4" 
            fill="none" 
          />
        </svg>

        {/* Input Nodes */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-1 md:py-4 z-10 w-[120px] md:w-[140px]">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 md:gap-3 group"
          >
             <div className="flex-1 text-[9px] md:text-[10px] font-bold text-brand-secondary/60 uppercase tracking-widest leading-tight text-right transition-colors group-hover:text-brand-primary">Content & Ads</div>
             <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white border border-brand-border rounded-xl shadow-sm flex items-center justify-center transition-colors group-hover:border-brand-accent/30 relative z-10">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary group-hover:text-brand-accent transition-colors" />
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 md:gap-3 group"
          >
             <div className="flex-1 text-[9px] md:text-[10px] font-bold text-brand-secondary/60 uppercase tracking-widest leading-tight text-right transition-colors group-hover:text-brand-primary">Sales Team</div>
             <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-[#0f172a] border border-[#0f172a] rounded-xl flex items-center justify-center shadow-lg shadow-black/10 relative z-10">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 md:gap-3 group"
          >
             <div className="flex-1 text-[9px] md:text-[10px] font-bold text-brand-secondary/60 uppercase tracking-widest leading-tight text-right transition-colors group-hover:text-brand-primary">Ops</div>
             <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white border border-brand-border rounded-xl shadow-sm flex items-center justify-center transition-colors group-hover:border-brand-accent/30 relative z-10">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary group-hover:text-brand-accent transition-colors" />
             </div>
          </motion.div>
        </div>

        {/* Unified Output Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center z-20"
        >
           <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-brand-primary rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center relative z-20">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-xl md:rounded-2xl animate-pulse" />
              <GitMerge className="w-5 h-5 md:w-6 md:h-6 text-white" />
           </div>
           {/* Label to the right */}
           <div className="ml-2 md:ml-4 flex items-center gap-1.5 md:gap-2 bg-brand-highlight/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-brand-highlight/20 shrink-0">
              <Zap className="w-2.5 h-2.5 md:w-3 md:h-3 text-brand-highlight" fill="currentColor" />
              <span className="text-[9px] md:text-[10px] font-bold text-brand-highlight uppercase tracking-widest">Alignment</span>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
