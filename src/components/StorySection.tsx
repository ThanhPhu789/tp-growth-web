import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import FragmentedSystem from './FragmentedSystem';

export default function StorySection() {
  return (
    <div className="bg-white relative">
      {/* SECTION 1: SYSTEM THINKING */}
      <section className="py-12 md:py-24 container mx-auto px-6 relative overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-10"
            >
              <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.4em] text-[11px] font-black text-brand-highlight">
                SYSTEM THINKING
              </div>

              <h2 className="font-heading text-[32px] md:text-[44px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] tracking-[-0.03em] md:tracking-[-0.04em]">
                Điều làm doanh nghiệp nhỏ chậm lại
                <br className="hidden md:block" />
                thường nằm giữa các phòng ban.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-secondary/90 font-medium leading-relaxed text-[16px] md:text-[18px]"
            >
              <p className="mb-5">
                Marketing tạo lead. Sales chốt đơn. Vận hành giao giá trị.
              </p>

              <p className="mb-5">
                Nhưng khi mỗi bộ phận nhìn business theo một cách khác nhau,
                tăng trưởng sẽ dần trở nên khó đoán.
              </p>

              <p className="text-brand-primary font-bold mb-5">
                Vấn đề thường không nằm ở việc ai làm sai.
                <br />
                Vấn đề là không ai đang nhìn cùng một bức tranh.
              </p>

              <div className="bg-brand-bg/50 border border-brand-border/50 rounded-2xl p-6 my-8">
                <p className="mb-4 text-brand-primary font-bold">
                  Những điểm đứt gãy tôi thường thấy:
                </p>

                <ul className="space-y-3 mb-0 list-none pl-0">
                  {[
                    'Ads tạo lead nhưng sales follow-up chậm',
                    'Lead có nhu cầu nhưng tư vấn không đúng trọng tâm',
                    'Content kéo được chú ý nhưng không dẫn về chuyển đổi',
                    'Dashboard có số liệu nhưng không giúp ra quyết định',
                    'Founder vẫn là người duy nhất phải ghép toàn bộ bức tranh'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                      <span className="text-[15px] md:text-[16px]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[18px] md:text-[20px] text-brand-primary font-bold mt-8">
                Tăng trưởng không bị phá hỏng bởi một quyết định sai.
                <br />
                <span className="text-brand-accent">
                  Nó bị phá hỏng bởi hàng chục điểm đứt gãy nhỏ giữa các bộ phận.
                </span>
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

      {/* SECTION 2: THE PROBLEM */}
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
                SME thường không kẹt ở Ads.
                <br className="hidden md:block" />
                Họ kẹt ở sự lệch nhau giữa các bộ phận.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[18px] md:text-[20px] text-brand-secondary font-medium mb-8 leading-relaxed italic border-l-4 border-brand-accent pl-6 bg-brand-accent/[0.02] py-4 rounded-r-2xl">
                  “Không ai thật sự sai.
                  <br />
                  Vấn đề là: mỗi người đang nhìn business từ một mảnh khác nhau.”
                </p>

                <div className="space-y-4 md:space-y-5">
                  {[
                    'Marketing nhìn traffic',
                    'Sales nhìn chất lượng lead',
                    'Kế toán nhìn doanh thu',
                    'Agency nhìn báo cáo',
                    'Founder nhìn kết quả cuối cùng'
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-brand-secondary font-medium bg-white/50 p-3 rounded-xl border border-transparent"
                    >
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

                <h3 className="font-heading text-[22px] font-extrabold text-brand-primary mb-6 tracking-[-0.03em] leading-[1.05]">
                  Hệ quả là...
                </h3>

                <div className="flex items-start gap-4 mb-8">
                  <div className="p-2 bg-brand-highlight/10 rounded-lg shrink-0">
                    <AlertCircle className="w-6 h-6 text-brand-highlight" />
                  </div>

                  <div>
                    <div className="text-brand-primary font-bold mb-1 text-[16px]">
                      Ai cũng bận.
                    </div>
                    <div className="text-brand-secondary font-medium italic opacity-80 text-[15px]">
                      Nhưng không ai chắc điều gì đang tạo ra kết quả thật.
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-border/60">
                  <p className="text-[16px] text-brand-primary font-bold">
                    Điều nguy hiểm nhất là:
                    <br />
                    <span className="text-brand-secondary font-medium mt-2 block">
                      Business vẫn đang chạy… nhưng không biết đang chạy đúng hay sai.
                    </span>
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-border/60 mt-6">
                  <p className="text-[18px] md:text-[20px] text-brand-primary font-bold">
                    Scale không làm business rối hơn.
                    <br />
                    <span className="text-[20px] md:text-[22px] text-brand-highlight block mt-2">
                      Nó chỉ làm lộ những thứ vốn đã rối từ đầu.
                    </span>
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
