import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  MessageCircle,
  ShoppingBag,
  UserRoundCheck,
} from 'lucide-react';

const journeySteps = [
  { title: 'PageView', subtitle: 'Khách đã xem trang', icon: Eye },
  { title: 'Contact', subtitle: 'Khách bắt đầu liên hệ', icon: MessageCircle },
  { title: 'Lead', subtitle: 'Khách để lại thông tin hoặc tín hiệu rõ', icon: UserRoundCheck },
  { title: 'Purchase', subtitle: 'Có đơn hàng hoặc doanh thu', icon: ShoppingBag, outcome: true },
];

export function EventTrackingJourneyVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {journeySteps.map(({ title, subtitle, icon: Icon, outcome }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  outcome
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                    outcome ? 'text-brand-highlight shadow-brand-soft' : 'text-brand-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.15em] text-brand-accent">
                  Bước {index + 1}
                </p>
                <h3 className="mt-2 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
                <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < journeySteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Event tracking tốt giúp team nhìn hành trình khách hàng theo từng mức tín hiệu, thay vì gom tất cả thành một
        chữ “conversion” chung chung.
      </figcaption>
    </figure>
  );
}

const valueLevels = [
  { title: 'PageView', label: 'Tín hiệu nhẹ', width: 'md:w-[58%]' },
  { title: 'Contact', label: 'Tín hiệu quan tâm', width: 'md:w-[70%]' },
  { title: 'Lead', label: 'Tín hiệu có khả năng bán hàng', width: 'md:w-[84%]' },
  { title: 'Purchase', label: 'Outcome kinh doanh', width: 'md:w-full', outcome: true },
];

export function EventValueLadderVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col items-center gap-3">
          {valueLevels.map(({ title, label, width, outcome }, index) => (
            <section
              key={title}
              className={`w-full rounded-2xl border px-5 py-4 ${width} ${
                outcome
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-soft-text">
                    Tầng {index + 1}
                  </p>
                  <h3 className="mt-1.5 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
                </div>
                <p className={`text-right text-[12px] font-bold ${outcome ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                  {label}
                </p>
              </div>
            </section>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-brand-border bg-brand-bg px-4 py-3 text-center text-[12px] font-semibold leading-[1.5] text-brand-secondary">
          Càng lên cao, tín hiệu càng gần doanh thu hơn. Nhưng volume thường ít hơn.
        </p>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Event càng gần doanh thu thường càng có giá trị hơn, nhưng không phải lúc nào cũng đủ volume để dùng ngay
        từ đầu.
      </figcaption>
    </figure>
  );
}

const definitions = [
  {
    event: 'PageView',
    trigger: 'Khi trang được xem',
    meaning: 'Có traffic vào',
    use: 'Đọc traffic, nguồn và trang',
    error: 'Tưởng view là chuyển đổi',
  },
  {
    event: 'Contact',
    trigger: 'Khi khách click kênh liên hệ',
    meaning: 'Có ý định tương tác',
    use: 'Đọc intent liên hệ',
    error: 'Tưởng contact là lead chắc chắn',
  },
  {
    event: 'Lead',
    trigger: 'Khi form hoặc đăng ký thành công',
    meaning: 'Có tín hiệu xử lý bán hàng',
    use: 'Tối ưu lead gen, đo chất lượng',
    error: 'Bắn khi chỉ click submit',
  },
  {
    event: 'Purchase',
    trigger: 'Khi đơn hàng hoặc thanh toán thành công',
    meaning: 'Có outcome doanh thu',
    use: 'Đo revenue, tối ưu ROAS',
    error: 'Thiếu transaction_id, value hoặc bị trùng',
    outcome: true,
  },
];

export function EventDefinitionTableVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="hidden grid-cols-[0.7fr_1.2fr_1fr_1.15fr_1.2fr] gap-3 border-b border-brand-border px-4 pb-3 text-[10px] font-black uppercase tracking-[0.13em] text-brand-accent lg:grid">
          <span>Event</span>
          <span>Khi nào bắn?</span>
          <span>Ý nghĩa</span>
          <span>Dùng để làm gì?</span>
          <span>Lỗi thường gặp</span>
        </div>
        <div className="mt-3 space-y-3">
          {definitions.map(({ event, trigger, meaning, use, error, outcome }) => (
            <section
              key={event}
              className={`grid gap-4 rounded-2xl border p-4 lg:grid-cols-[0.7fr_1.2fr_1fr_1.15fr_1.2fr] lg:items-start ${
                outcome
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <h3 className={`font-heading text-[15px] font-extrabold ${outcome ? 'text-brand-highlight' : 'text-brand-primary'}`}>
                {event}
              </h3>
              {[
                ['Khi nào bắn?', trigger],
                ['Ý nghĩa marketing', meaning],
                ['Dùng để làm gì?', use],
                ['Lỗi thường gặp', error],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-soft-text lg:hidden">
                    {label}
                  </p>
                  <p className="mt-1 text-[12px] font-medium leading-[1.55] text-brand-secondary lg:mt-0">{value}</p>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Định nghĩa event càng rõ, team càng ít tranh luận bằng cảm giác khi đọc dashboard.
      </figcaption>
    </figure>
  );
}

const checklistItems = [
  'Event này đại diện cho hành động gì?',
  'Khi nào event được xem là thành công?',
  'Event có gần với outcome kinh doanh không?',
  'Event có đủ volume để tối ưu không?',
  'Có bị bắn trùng không?',
  'Có cần gửi thêm value, transaction_id hoặc form_name không?',
  'Event dùng để đọc dashboard, tối ưu ads hay đối chiếu sales?',
];

export function EventTrackingChecklist() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Checklist định nghĩa event trước khi chạy ads
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklistItems.map((item, index) => {
            const isAction = index === 2 || index === 3 || index === 6;
            return (
              <section
                key={item}
                className={`rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                } ${index === checklistItems.length - 1 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`h-5 w-5 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`}
                    aria-hidden="true"
                  />
                  <p className="font-heading text-[14px] font-extrabold leading-[1.45] text-brand-primary">{item}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Trước khi thêm một event mới, team nên biết rõ event đó dùng để trả lời câu hỏi gì trong marketing.
      </figcaption>
    </figure>
  );
}
