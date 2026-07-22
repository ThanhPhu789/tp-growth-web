import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { siteImageData } from '../data/siteImages';

export default function StrategicVisual() {
  const profileImage = siteImageData('tp-growth-phu-profile-standing-blue-shirt.jpg');

  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-[640px] flex items-center justify-center">
      {/* Background Glow - Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />
      
      {/* Main Image & Visual Container */}
      <div className="relative z-10 w-[85%] sm:w-full max-w-[320px] sm:max-w-[480px] mx-auto">
        {/* Advisor Image with Strategic Cut */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-[60px_16px_60px_16px] md:rounded-[80px_20px_80px_20px] shadow-brand-soft border-[3px] md:border-4 border-white/80"
        >
          <img 
            src={profileImage.src}
            alt={profileImage.alt}
            width={profileImage.width}
            height={profileImage.height}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-top brightness-[1.02] contrast-[1.02]"
          />
          {/* Subtle Color Grading Overlay */}
          <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Floating Dashboard Card - System View */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-6 sm:top-10 -right-[15%] sm:-right-8 md:-right-20 z-20 w-[240px] sm:w-[280px] bg-white/95 backdrop-blur-md border border-brand-border rounded-[20px] sm:rounded-[24px] shadow-brand-soft p-4 sm:p-6 origin-top-right scale-[0.85] sm:scale-100"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-[12px] sm:text-[14px] font-bold text-brand-primary tracking-tight">System view</h3>
            <div className="w-2 h-2 rounded-full bg-brand-highlight" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Revenue Stat */}
            <div className="space-y-2 sm:space-y-3">
              <div className="space-y-1">
                <div className="text-[10px] sm:text-[11px] font-bold text-brand-secondary/60 uppercase tracking-widest">Traffic</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[16px] sm:text-[18px] font-bold text-brand-primary">Audit snapshot</span>
                </div>
              </div>

              {/* Bar Chart Visual */}
              <div className="flex items-end gap-1.5 h-8 sm:h-12 pt-2">
                {[12, 16, 12, 20, 18, 24, 22].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}px` }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    className="flex-1 w-full bg-brand-accent rounded-sm"
                  />
                ))}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.5, delay: 1 + 7 * 0.1 }}
                  className="flex-[1.2] w-full h-full bg-brand-highlight rounded-t-sm shadow-[0_4px_12px_rgba(234,88,12,0.4)]"
                />
              </div>
            </div>

            {/* Content Divider */}
            <div className="h-px w-full bg-brand-border/60" />

            {/* CPC / Lead Stat */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-[11px] font-bold text-brand-secondary/60 uppercase tracking-widest">Lead quality</div>
              <div className="flex items-baseline gap-2">
                <span className="text-[13px] sm:text-[14px] font-bold text-brand-primary">Need verification</span>
              </div>
              <div className="h-1 w-16 sm:w-24 bg-brand-accent rounded-full" />
            </div>

            {/* Content Divider */}
            <div className="h-px w-full bg-brand-border/60" />

            {/* Funnel clarity */}
            <div className="bg-brand-highlight/[0.03] border border-brand-highlight/20 rounded-xl p-3 sm:p-4 relative overflow-hidden">
               <div className="flex items-center justify-between mb-1 sm:mb-2">
                 <span className="text-[10px] sm:text-[11px] font-bold text-brand-highlight uppercase tracking-widest">Funnel clarity</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-highlight" />
               </div>
               <div className="text-[13px] sm:text-[14px] font-bold text-brand-primary mb-1">Cost control</div>
               <div className="text-[9px] sm:text-[10px] font-bold text-brand-highlight/70 uppercase tracking-widest">Review before scale</div>
            </div>
          </div>
        </motion.div>

        {/* Small Data Chip */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="absolute bottom-10 sm:bottom-16 -left-[10%] sm:-left-8 md:-left-12 z-20 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-brand-border shadow-lg flex items-center gap-3 origin-bottom-left scale-[0.85] sm:scale-100"
        >
           <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-brand-accent" />
           </div>
           <div className="flex flex-col">
              <span className="text-[14px] font-bold text-brand-primary leading-none tracking-tight">System Aligned</span>
              <span className="text-[10px] font-bold text-brand-secondary/60 uppercase tracking-widest mt-1">Ready to scale</span>
           </div>
        </motion.div>
      </div>

      {/* Abstract Design Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-accent/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-accent/[0.02] rounded-full pointer-events-none" />
    </div>
  );
}
