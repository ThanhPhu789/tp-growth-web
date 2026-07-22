import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  MessageCircle,
  MousePointerClick,
  PhoneCall,
  ReceiptText,
  Send,
  ShoppingBag,
  Tags,
} from 'lucide-react';

const trackingJourney = [
  { title: 'Traffic Source', subtitle: 'Khách đến từ đâu?', icon: Globe2 },
  { title: 'PageView', subtitle: 'Khách xem trang nào?', icon: FileText },
  { title: 'CTA Click', subtitle: 'Khách bấm hành động gì?', icon: MousePointerClick },
  { title: 'Contact / Form', subtitle: 'Khách liên hệ hoặc gửi thông tin', icon: Send },
  { title: 'Lead / Order', subtitle: 'Có tín hiệu bán hàng rõ hơn', icon: ShoppingBag },
  { title: 'Dashboard / CRM', subtitle: 'Đối chiếu với dữ liệu thật', icon: BarChart3, outcome: true },
];

function FlowArrow() {
  return (
    <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-6">
      <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
      <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
    </div>
  );
}

export function MinimumTrackingMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {trackingJourney.map(({ title, subtitle, icon: Icon, outcome }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  outcome
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <Icon className={`h-4 w-4 ${outcome ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <p className="mt-4 font-heading text-[13px] font-extrabold leading-tight text-brand-primary">{title}</p>
                <p className="mt-2 text-[11px] font-medium leading-[1.45] text-brand-secondary">{subtitle}</p>
              </section>
              {index < trackingJourney.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Tracking tối thiểu nên giúp team nhìn được đường đi cơ bản: khách đến từ đâu, làm gì trên website và có tạo
        ra tín hiệu bán hàng thật hay không.
      </figcaption>
    </figure>
  );
}

const contactPoints = [
  { title: 'Hotline click', subtitle: 'Tín hiệu cần nói chuyện nhanh', icon: PhoneCall },
  { title: 'Zalo click', subtitle: 'Kênh phổ biến với SME Việt Nam', icon: MessageCircle },
  { title: 'Messenger click', subtitle: 'Tín hiệu social và contact', icon: MessageCircle },
  { title: 'Main CTA click', subtitle: 'Ý định hành động chính', icon: MousePointerClick, action: true },
  { title: 'Quote / Pricing click', subtitle: 'Quan tâm giá hoặc báo giá', icon: ReceiptText, action: true },
  { title: 'Booking click', subtitle: 'Muốn hẹn tư vấn', icon: CalendarCheck, action: true },
];

export function ContactTrackingVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Các contact point không nên bỏ sót
          </h3>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactPoints.map(({ title, subtitle, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Với SME, khách không phải lúc nào cũng đi theo form. Nhiều tín hiệu thật nằm ở các nút liên hệ như hotline,
        Zalo, Messenger hoặc báo giá.
      </figcaption>
    </figure>
  );
}

const trackingGroups = [
  {
    title: 'Traffic & Page',
    icon: Globe2,
    items: ['PageView', 'source / medium / campaign', 'landing page'],
  },
  {
    title: 'Contact & CTA',
    icon: MousePointerClick,
    items: ['hotline_click', 'zalo_click', 'messenger_click', 'main_cta_click'],
  },
  {
    title: 'Lead & Form',
    icon: Send,
    items: ['form_submit_success', 'form_name', 'lead_type', 'lead_id nếu có'],
  },
  {
    title: 'Order / Outcome',
    icon: ShoppingBag,
    items: ['purchase / order_success nếu có', 'transaction_id', 'value / currency', 'event_id nếu cần dedup'],
    outcome: true,
  },
];

export function WebsiteTrackingChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Tracking tối thiểu nên có gì?
          </h3>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trackingGroups.map(({ title, icon: Icon, items, outcome }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                outcome
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-5 w-5 ${outcome ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[11px] font-medium leading-[1.5] text-brand-secondary">
                    <CheckCircle2
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${outcome ? 'text-brand-highlight' : 'text-brand-accent'}`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một website marketing không cần đo mọi micro action ngay từ đầu. Nhưng các điểm chạm chính giữa traffic,
        contact, lead và outcome nên được định nghĩa rõ.
      </figcaption>
    </figure>
  );
}

const priorities = [
  {
    label: 'Mức 1',
    title: 'Nên có trước',
    items: ['GA4 PageView', 'GTM quản lý tag', 'Form submit success', 'Contact và main CTA click', 'UTM / source cơ bản', 'Đối chiếu lead hoặc order'],
    featured: true,
  },
  {
    label: 'Mức 2',
    title: 'Khi chạy ads đều',
    items: ['Ads conversion events', 'event_id cho event quan trọng', 'DataLayer cho form / purchase', 'Dashboard theo nguồn', 'Event map rõ ràng'],
  },
  {
    label: 'Mức 3',
    title: 'Khi nền đã ổn',
    items: ['Scroll depth', 'Form start / error', 'Engagement sâu hơn', 'Server-side tracking', 'CRM / offline conversion', 'Advanced audience logic'],
    later: true,
  },
];

export function TrackingPriorityMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-3 md:p-7">
        {priorities.map(({ label, title, items, featured, later }) => (
          <section
            key={title}
            className={`rounded-2xl border p-5 ${
              featured
                ? 'border-brand-accent/35 bg-brand-accent-soft'
                : later
                  ? 'border-brand-border bg-brand-bg'
                  : 'border-brand-accent/20 bg-brand-surface'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-accent">{label}</span>
              <Tags className="h-4 w-4 text-brand-soft-text" aria-hidden="true" />
            </div>
            <h3 className="mt-3 font-heading text-[17px] font-extrabold text-brand-primary">{title}</h3>
            <ul className="mt-5 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.5] text-brand-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Tracking tốt nên đi theo thứ tự. Đừng bắt đầu từ phần phức tạp nếu các event cơ bản như form, contact và
        lead vẫn chưa đo đúng.
      </figcaption>
    </figure>
  );
}
