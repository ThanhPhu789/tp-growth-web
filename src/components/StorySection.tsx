import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import FragmentedSystem from './FragmentedSystem';

export default function StorySection() {
  return (
    <div className="bg-white relative">
      {/* SECTION: TẠI SAO TÔI LÀM THỨ NÀY */}
      <section className="py-12 md:py-24 container mx-auto px-6 relative overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-12"
            >
              <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.4em] text-[11px] font-black text-brand-highlight">
                STORY
              </div>
              <h2 className="font-heading text-[32px] md:text-[44px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] tracking-[-0.03em] md:tracking-[-0.04em]">
                Tại sao tôi làm <br className="hidden md:block" /> thứ này?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg prose-slate text-brand-secondary/90 font-medium leading-relaxed"
            >
              <p>
                Tui từng nghĩ business tăng trưởng chậm…<br/>
                là vì chạy ads chưa đủ giỏi. Chạy nhiều hơn. Test nhiều hơn. Tối ưu nhiều hơn... thì sẽ ra khách.
              </p>
              <p>
                Nhưng sau nhiều năm làm nghề, tui nhận ra: <br/>
                <strong className="text-brand-primary">Nhiều business không thiếu traffic. Không thiếu content. Cũng không thiếu người làm.</strong>
                <br/><strong className="text-brand-accent">Thứ họ thiếu là: một hệ thống đủ rõ để biết điều gì đang thật sự tạo ra doanh thu.</strong>
              </p>
              <div className="bg-brand-bg/50 border border-brand-border/50 rounded-2xl p-6 my-8">
                <p className="mb-4">Tui từng gặp:</p>
                <ul className="space-y-3 mb-0 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0"/> <span className="text-[15px] md:text-[16px]">Doanh nghiệp chạy ads liên tục nhưng không biết lead tốt đến từ đâu</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0"/> <span className="text-[15px] md:text-[16px]">Có team nhưng không ai nhìn cùng một hướng</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0"/> <span className="text-[15px] md:text-[16px]">Sale, content, ads mỗi người nói một kiểu</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0"/> <span className="text-[15px] md:text-[16px]">Chủ doanh nghiệp rất bận… không biết business đang nghẽn ở đâu</span></li>
                </ul>
              </div>
              <p>
                Và càng scale… mọi thứ càng rối hơn.
              </p>
              <p>
                Có những doanh nghiệp doanh thu vẫn có, team vẫn chạy, ads vẫn hoạt động… nhưng bên trong hệ thống thì rất mệt. Cuối cùng, mọi quyết định bắt đầu phụ thuộc vào: <em>người nói lớn nhất trong phòng</em>, <em>kinh nghiệm cũ</em>, hoặc <em>cảm giác</em>.
              </p>
              <p className="text-[18px] md:text-[20px] text-brand-primary font-bold mt-8 italic">
                Tui hiểu cảm giác đó. Vì tui từng ở trong nó.
              </p>
            </motion.div>
          </div>

          {/* Right Visual: Fragmented/Chaos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[380px] xs:h-[430px] sm:h-[500px] lg:h-full lg:min-h-[600px] w-full mt-4 lg:mt-0"
          >
             <div className="absolute inset-0 flex items-center justify-center scale-[0.8] xs:scale-[0.95] sm:scale-[0.85] lg:scale-100 origin-center">
               <FragmentedSystem />
             </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: VÌ SAO DOANH NGHIỆP BỊ KẸT (SME THƯỜNG KHÔNG KẸT Ở ADS) */}
      <section className="py-12 md:py-24 bg-brand-section overflow-hidden relative">
        <div className="absolute right-0 bottom-0 w-[40%] h-[80%] bg-gradient-to-t from-brand-accent/[0.03] to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.4em] text-[11px] font-black text-brand-highlight">
                THE PROBLEM
              </div>
              <h2 className="font-heading text-center text-[32px] md:text-[44px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-12 tracking-[-0.03em] md:tracking-[-0.04em]">
                SME thường không kẹt ở Ads
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[18px] md:text-[20px] text-brand-secondary font-medium mb-8 leading-relaxed italic border-l-4 border-brand-accent pl-6 bg-brand-accent/[0.02] py-4 rounded-r-2xl">
                  “Không ai thật sự sai. <br/> Vấn đề là: mỗi người đang nhìn business từ một mảnh khác nhau.”
                </p>
                
                <div className="space-y-4 md:space-y-5">
                  {[
                    'Người chạy ads nói một kiểu',
                    'Người content làm một kiểu',
                    'Team sale hiểu một kiểu',
                    'Agency báo cáo một kiểu',
                    'Chủ doanh nghiệp nhìn doanh thu lại thấy kiểu khác'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 text-brand-secondary font-medium bg-white/50 p-3 rounded-xl border border-transparent">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-highlight" />
                      <span className="text-[15px]">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[32px] shadow-brand-soft border border-brand-border/60 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/5 rounded-full blur-3xl -mr-10 -mt-10" />
                <h3 className="font-heading text-[22px] font-extrabold text-brand-primary mb-6 tracking-[-0.03em] leading-[1.05]">Hệ quả là...</h3>
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-2 bg-brand-highlight/10 rounded-lg shrink-0">
                    <AlertCircle className="w-6 h-6 text-brand-highlight" />
                  </div>
                  <div>
                    <div className="text-brand-primary font-bold mb-1 text-[16px]">Ai cũng bận.</div>
                    <div className="text-brand-secondary font-medium italic opacity-80 text-[15px]">Nhưng không ai chắc điều gì đang hiệu quả thật.</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-brand-border/60">
                  <p className="text-[16px] text-brand-primary font-bold">
                    Và điều nguy hiểm nhất là: <br/>
                    <span className="text-brand-secondary font-medium mt-2 block">Business vẫn đang chạy… nhưng không biết đang chạy đúng hay sai.</span>
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-border/60 mt-6">
                  <p className="text-[18px] md:text-[20px] text-brand-primary font-bold">
                    Scale không làm business rối hơn. <br/>
                    <span className="text-[20px] md:text-[22px] text-brand-highlight block mt-2">Nó chỉ làm lộ những thứ vốn đã rối từ đầu.</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
