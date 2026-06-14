import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import StrategicVisual from './StrategicVisual';
import { NodeConnections } from './SystemVisuals';
import TPLogo from './TPLogo';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-bg font-sans selection:bg-brand-highlight/10 selection:text-brand-highlight">
      
      {/* Aesthetic Background Elements - Enhanced Blue & Subtle Orange */}
      <div className="absolute top-0 right-0 w-[60%] h-[90%] bg-gradient-to-bl from-brand-accent/[0.08] via-brand-accent/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-brand-accent/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-highlight/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <NodeConnections />
      
      {/* Header / Navigation */}
      <header className="relative z-50 container mx-auto px-6 lg:px-8 py-6 md:py-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
         <div className="h-10 md:h-11 bg-white border border-brand-border rounded-[12px] flex items-center justify-center shadow-md relative group cursor-pointer hover:-translate-y-0.5 transition-all px-4 py-1.5 shrink-0">
  <TPLogo size="custom" className="h-full w-auto object-contain" />
  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-highlight rounded-full border-2 border-white group-hover:scale-110 transition-transform" />
</div>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden xl:flex items-center gap-12"
        >
          {['Tư vấn', 'Dịch vụ', 'Kinh nghiệm', 'Về Phú', 'Zalo'].map((item) => (
            <a key={item} href="#" className="text-[14px] font-bold text-brand-secondary hover:text-brand-accent transition-colors tracking-tight relative group py-2">
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-highlight rounded-full opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </a>
          ))}
        </motion.nav>

        <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-brand-highlight text-white px-5 md:px-8 py-2.5 md:py-3 rounded-brand-button text-[14px] md:text-[15px] font-bold hover:brightness-110 shadow-lg shadow-brand-highlight/20 transition-all active:scale-95 group">
            Đặt lịch ngay
          </button>
        </motion.div>
      </header>

      {/* Hero Section Content */}
      <main className="container mx-auto px-5 md:px-6 lg:px-8 pt-6 md:pt-20 pb-10 md:pb-20 lg:pt-24 lg:pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 lg:gap-24 xl:gap-32 items-center">
          
          {/* Left Column: Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-6 border border-brand-highlight/20 bg-brand-highlight/5 px-4 py-2 rounded-full cursor-pointer hover:bg-brand-highlight/10 transition-colors">
              <span className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse" />
              <span className="text-[11px] md:text-[12px] font-bold text-brand-highlight uppercase tracking-[0.15em] pt-[1px]">Góc nhìn thực chiến</span>
            </div>

            <h1 className="font-heading text-[38px] sm:text-[42px] md:text-[50px] lg:text-[54px] xl:text-[68px] font-black leading-[1.05] md:leading-[1.0] text-brand-primary mb-6 md:mb-10 tracking-[-0.03em] lg:tracking-[-0.04em] [text-wrap:balance]">
              Càng scale, nhiều chủ doanh nghiệp càng mất cảm giác{' '}
              <span className="text-brand-accent relative inline-block mt-0 lg:mt-2">
                mình đang kiểm soát
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-[2px] md:bottom-2 left-0 h-[6px] md:h-[8px] bg-brand-accent/15 -z-10 rounded-sm" 
                />
              </span>{' '}
              business.
            </h1>

            <div className="text-[16px] sm:text-[17px] md:text-[20px] text-brand-secondary leading-[1.6] md:leading-[1.8] max-w-[640px] mb-10 md:mb-14 font-medium opacity-90 space-y-6">
              <p>
                Ads vẫn đang chạy. Team vẫn đang làm. Doanh thu vẫn đang có. <br className="hidden md:block" />
                <span className="block mt-2 md:inline md:mt-0">...nhưng càng vận hành lâu, mọi thứ càng rối.</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-highlight/60 mt-2.5 shrink-0" />
                  <p className="text-[15px] md:text-[16px]">Lead tháng này tốt.<br/>Tháng sau tụt.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-highlight/60 mt-2.5 shrink-0" />
                  <p className="text-[15px] md:text-[16px]">Agency báo cáo đẹp.<br/>Sales than thiếu khách ngon.</p>
                </div>
              </div>
              <div className="relative">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-highlight rounded-full" />
                 <p className="text-brand-primary font-bold pl-5 md:pl-8 py-2 italic bg-gradient-to-r from-brand-highlight/[0.04] to-transparent pr-4 rounded-r-xl">
                   Và điều mệt nhất là: mọi quyết định đều phải đi qua chủ doanh nghiệp.
                 </p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-brand-border/60">
                <p className="mb-3">Tôi giúp SME nhìn ra:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                    <span className="text-[15px] md:text-[16px] font-bold text-brand-primary/80">Điều gì đang thật sự tạo ra tăng trưởng</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                    <span className="text-[15px] md:text-[16px] font-bold text-brand-primary/80">Điều gì đang làm business mất tiền</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                    <span className="text-[15px] md:text-[16px] font-bold text-brand-primary/80">Và nên sửa gì trước khi tiếp tục đốt thêm ngân sách.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-5 pb-8 lg:pb-0 lg:mb-12 xl:mb-20">
              <button className="bg-brand-highlight text-white px-8 lg:px-10 py-4 md:py-[18px] rounded-brand-button text-[16px] md:text-[17px] font-bold hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-highlight/20 group">
                Đặt lịch nói chuyện 60 phút
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-300 transition-transform" />
              </button>
              <button className="bg-white text-brand-primary border border-brand-border px-8 lg:px-10 py-4 md:py-[18px] rounded-brand-button text-[16px] md:text-[17px] font-bold hover:bg-brand-accent/[0.02] hover:border-brand-accent/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-sm group">
                <MessageCircle className="w-5 h-5 text-[#0068FF] group-hover:scale-110 duration-300 transition-transform" />
                Nhắn Zalo nhanh
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Dashboard/System Representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="block relative"
          >
            <StrategicVisual />
            {/* Orange Decorative Accent */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-64 md:h-64 bg-brand-highlight/10 rounded-full blur-2xl md:blur-3xl" />
          </motion.div>
        </div>

      </main>
    </div>
  );
}
