import { motion } from 'motion/react';
import FragmentedSystem from './FragmentedSystem';

export default function StorySection() {
  return (
    <div className="bg-white relative">
      {/* SECTION 1: SYSTEM THINKING */}
      <section className="container relative mx-auto overflow-hidden px-5 py-14 sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-7 md:mb-10"
            >
              <div className="flex items-center gap-2 mb-5 md:mb-6 uppercase tracking-[0.32em] md:tracking-[0.4em] text-[10px] md:text-[11px] font-black text-brand-highlight">
                SYSTEM THINKING
              </div>

              <h2 className="font-heading text-[34px] sm:text-[38px] md:text-[44px] font-extrabold text-brand-primary leading-[1.08] md:leading-[1.0] tracking-[-0.035em] md:tracking-[-0.04em]">
                Điều làm doanh nghiệp nhỏ chậm lại
                <br className="hidden md:block" />
                thường nằm giữa các phòng ban.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-brand-secondary/90 font-medium leading-[1.7] text-[15.5px] sm:text-[16px] md:text-[18px]"
            >
              <p className="mb-4 md:mb-5">
                Marketing tạo lead. Sales chốt đơn. Vận hành giao giá trị.
              </p>

              <p className="mb-4 md:mb-5">
                Nhưng khi mỗi bộ phận nhìn business theo một cách khác nhau,
                tăng trưởng sẽ dần trở nên khó đoán.
              </p>

              <p className="text-brand-primary font-bold mb-5 leading-[1.65]">
                Vấn đề thường không nằm ở việc ai làm sai.
                <br />
                Vấn đề là không ai đang nhìn cùng một bức tranh.
              </p>

              <div className="bg-brand-bg/50 border border-brand-border/50 rounded-2xl p-5 sm:p-6 my-7 md:my-8">
                <p className="mb-4 text-brand-primary font-bold text-[16px] md:text-[18px] leading-[1.4]">
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
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                      <span className="text-[15px] sm:text-[16px] leading-[1.6]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[17px] sm:text-[18px] md:text-[20px] text-brand-primary font-bold mt-7 md:mt-8 leading-[1.55]">
                Tăng trưởng không bị phá hỏng bởi một quyết định sai.
                <br />
                <span className="text-brand-accent">
                  Nó bị phá hỏng bởi hàng chục điểm đứt gãy nhỏ giữa các bộ phận.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Right Visual: Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
              className="relative mt-2 h-[250px] w-full overflow-hidden sm:h-[320px] md:h-[380px] lg:mt-0 lg:h-full lg:min-h-[520px]"
          >
            <div className="absolute inset-0 flex items-center justify-center scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
              <FragmentedSystem />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
