import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardCheck,
  Flame,
  FormInput,
  Gift,
  HelpCircle,
  MailCheck,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  Route,
  SearchCheck,
  Snowflake,
  ThermometerSun,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const offerFlow = [
  { title: 'Traffic expectation', icon: Route },
  { title: 'Offer clarity', icon: Gift },
  { title: 'CTA click', icon: MousePointerClick, action: true },
  { title: 'Form submit', icon: FormInput, action: true },
  { title: 'Sales conversation', icon: Users },
];

export function CtaIsNotOfferVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">CTA ≠ Offer</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Cái nút và lý do để bấm là hai lớp khác nhau</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
            <MousePointerClick className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Layer 01</p>
            <h4 className="mt-2 font-heading text-[17px] font-extrabold text-brand-primary">CTA</h4>
            <p className="mt-2 text-[12px] font-medium leading-[1.6] text-brand-secondary">Nút hoặc hành động người dùng nhìn thấy.</p>
            <p className="mt-4 text-[12px] font-semibold leading-[1.6] text-brand-secondary">Nhận tư vấn · Liên hệ · Đăng ký · Nhận báo giá</p>
          </section>
          <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
            <Gift className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-accent">Layer 02</p>
            <h4 className="mt-2 font-heading text-[17px] font-extrabold text-brand-primary">Offer</h4>
            <p className="mt-2 text-[12px] font-medium leading-[1.6] text-brand-secondary">Giá trị người dùng nhận sau khi hành động.</p>
            <p className="mt-4 text-[12px] font-semibold leading-[1.6] text-brand-secondary">Audit 15 phút · Checklist · Báo giá sơ bộ · Demo</p>
          </section>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {offerFlow.map(({ title, icon: Icon, action }, index) => (
            <div key={title} className="relative min-w-0">
              <div
                className={`flex h-full items-center gap-3 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-surface'
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[11px] font-bold leading-[1.45] text-brand-secondary">{title}</span>
              </div>
              {index < offerFlow.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>CTA là nơi người dùng bấm. Offer là lý do khiến họ thấy đáng để bấm.</Caption>
    </figure>
  );
}

const clarityQuestions: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Nhận được gì?', subtitle: 'Audit, checklist, báo giá, demo, phân tích nhanh', icon: Gift },
  { title: 'Để làm gì?', subtitle: 'Hiểu vấn đề, chọn hướng xử lý, ra quyết định rõ hơn', icon: SearchCheck },
  { title: 'Nhận bằng cách nào?', subtitle: 'Form, đặt lịch, Zalo, email, cuộc gọi', icon: MailCheck },
  { title: 'Chuyện gì xảy ra sau đó?', subtitle: 'Ai liên hệ, khi nào, trao đổi gì, next step ra sao', icon: PhoneCall, action: true },
];

export function OfferClarityFourQuestionVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <HelpCircle className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Offer clarity check</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold leading-[1.35] text-brand-primary">
              Offer rõ khi người dùng trả lời được 4 câu hỏi
            </h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {clarityQuestions.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.6] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Một offer rõ không chỉ nói khách nhận gì, mà còn nói vì sao đáng nhận và chuyện gì xảy ra sau khi họ hành động.</Caption>
    </figure>
  );
}

const readinessColumns: Array<{
  title: string;
  subtitle: string;
  offers: string[];
  icon: LucideIcon;
  tone: 'neutral' | 'blue' | 'orange';
}> = [
  {
    title: 'Khách lạnh',
    subtitle: 'Mới biết · còn đang tìm hiểu',
    offers: ['Checklist', 'Guide ngắn', 'Bài test', 'Case study'],
    icon: Snowflake,
    tone: 'neutral',
  },
  {
    title: 'Khách ấm',
    subtitle: 'Có vấn đề · đang cân nhắc',
    offers: ['Audit nhanh', 'Demo', 'Báo giá sơ bộ', 'Tư vấn 15–30 phút'],
    icon: ThermometerSun,
    tone: 'blue',
  },
  {
    title: 'Khách nóng',
    subtitle: 'Nhu cầu rõ · muốn hành động',
    offers: ['Đặt lịch', 'Gọi nhanh', 'Nhận báo giá', 'Khảo sát'],
    icon: Flame,
    tone: 'orange',
  },
];

export function OfferByReadinessVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Readiness match</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Một stage, một mức cam kết phù hợp</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {readinessColumns.map(({ title, subtitle, offers, icon: Icon, tone }) => {
            const isOrange = tone === 'orange';
            const isBlue = tone === 'blue';
            return (
              <section
                key={title}
                className={`rounded-2xl border p-5 ${
                  isOrange
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : isBlue
                      ? 'border-brand-accent/25 bg-brand-accent-soft'
                      : 'border-brand-border bg-brand-bg'
                }`}
              >
                <Icon className={`h-5 w-5 ${isOrange ? 'text-brand-highlight' : isBlue ? 'text-brand-accent' : 'text-brand-soft-text'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-1 text-[11px] font-semibold text-brand-soft-text">{subtitle}</p>
                <div className="mt-5 space-y-2.5">
                  {offers.map((offer) => (
                    <div key={offer} className="flex items-start gap-2.5">
                      <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isOrange ? 'text-brand-highlight' : isBlue ? 'text-brand-accent' : 'text-brand-soft-text'}`} aria-hidden="true" />
                      <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{offer}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <Caption>Offer tốt phải khớp với mức độ sẵn sàng của khách, không ép mọi người vào cùng một CTA.</Caption>
    </figure>
  );
}

const vagueOffers = [
  'Nhận tư vấn miễn phí',
  'Liên hệ để được hỗ trợ',
  'Nhận giải pháp phù hợp',
  'Đăng ký ngay',
  'Tìm hiểu thêm',
];

const clearOffers = [
  'Audit 15 phút để xác định 1–2 điểm nghẽn',
  'Nhận báo giá sơ bộ trong 24 giờ',
  'Nhận checklist trước khi tăng ngân sách',
  'Đặt lịch demo theo nhu cầu hiện tại',
  'Gửi thông tin để nhận bước xử lý tiếp theo',
];

function OfferColumn({ title, items, featured }: { title: string; items: string[]; featured?: boolean }) {
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'}`}>
      <div className="flex items-center gap-3">
        {featured ? <ClipboardCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" /> : <MessageSquareText className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />}
        <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">{title}</h3>
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => (
          <div key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                featured && index < 3 ? 'bg-brand-highlight text-white' : featured ? 'bg-brand-surface text-brand-accent' : 'bg-brand-surface text-brand-soft-text'
              }`}
            >
              {featured ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <span className="text-[10px] font-black">{index + 1}</span>}
            </span>
            <p className="text-[12px] font-semibold leading-[1.6] text-brand-secondary">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function VagueVsClearOfferVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <OfferColumn title="Offer mờ" items={vagueOffers} />
        <OfferColumn title="Offer rõ hơn" items={clearOffers} featured />
      </div>
      <Caption>Offer rõ giúp người dùng hiểu mình nhận được gì, trong bối cảnh nào và vì sao đáng để hành động.</Caption>
    </figure>
  );
}
