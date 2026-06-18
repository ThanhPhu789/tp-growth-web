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
          <span className="text-[15px] md:text-[16px]">{text}</span>
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
