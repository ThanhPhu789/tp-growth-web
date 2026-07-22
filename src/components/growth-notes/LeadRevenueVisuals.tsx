import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Database,
  Filter,
  FormInput,
  Gauge,
  HandCoins,
  MessageCircle,
  MousePointerClick,
  Search,
  Target,
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

const gapNodes = ['Lead quality', 'Contact rate', 'Sales follow-up', 'Quote rate', 'Close rate / sales cycle'];

export function LeadRevenueGapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid items-stretch gap-4 lg:grid-cols-[0.8fr_1.6fr_0.8fr]">
          <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
            <BarChart3 className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-accent">Tín hiệu đầu vào</p>
            <h3 className="mt-2 font-heading text-[18px] font-extrabold text-brand-primary">Lead volume tăng</h3>
          </section>

          <section className="rounded-2xl border border-brand-highlight/25 bg-brand-highlight-soft p-5">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-brand-highlight" aria-hidden="true" />
              <h3 className="font-heading text-[16px] font-extrabold text-brand-primary">Khoảng cần chẩn đoán</h3>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {gapNodes.map((node, index) => (
                <div key={node} className={`rounded-xl border border-brand-border bg-brand-surface px-3 py-2.5 text-[11px] font-semibold text-brand-secondary ${index === gapNodes.length - 1 ? 'sm:col-span-2' : ''}`}>
                  {node}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
            <CircleDollarSign className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Outcome hiện tại</p>
            <h3 className="mt-2 font-heading text-[18px] font-extrabold text-brand-primary">Revenue chưa tăng</h3>
          </section>
        </div>
      </div>
      <Caption>
        Khi lead tăng nhưng doanh thu chưa tăng, đoạn cần đọc không nằm ở tổng lead. Nó nằm ở các bước giữa lead và revenue.
      </Caption>
    </figure>
  );
}

type FunnelStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const funnelSteps: FunnelStep[] = [
  { title: 'Lead Created', subtitle: 'Form, Zalo, hotline, Messenger', icon: FormInput },
  { title: 'Source Known', subtitle: 'Channel, campaign, landing page', icon: Filter },
  { title: 'Contacted', subtitle: 'Sales đã xử lý', icon: MessageCircle },
  { title: 'Qualified', subtitle: 'Đúng nhu cầu', icon: BadgeCheck },
  { title: 'Consulted / Quoted', subtitle: 'Tư vấn hoặc báo giá', icon: HandCoins },
  { title: 'Won / Lost', subtitle: 'Kết quả bán hàng', icon: Target },
  { title: 'Revenue / Outcome', subtitle: 'Doanh thu hoặc proxy', icon: CircleDollarSign, highlight: true },
];

export function LeadToRevenueFunnelVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Lead-to-revenue flow</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Đọc hết hành trình, không dừng ở lead</h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {funnelSteps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < funnelSteps.length - 1 && (
                <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-5">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Dashboard cần nối lead với sales status và outcome. Nếu không, team chỉ thấy phần đầu của hành trình.
      </Caption>
    </figure>
  );
}

const diagnosisItems = [
  { title: 'Sai tệp', check: 'Source / campaign / lead profile', icon: Users },
  { title: 'Offer quá rộng', check: 'Message / landing / form intent', icon: MousePointerClick },
  { title: 'Form quá dễ', check: 'Form field / lead type', icon: FormInput },
  { title: 'Follow-up chậm', check: 'Time to contact', icon: Clock3 },
  { title: 'Status thiếu', check: 'CRM / Sheet update', icon: Database },
  { title: 'Sales cycle dài', check: 'Cohort theo tuần tạo lead', icon: Gauge },
  { title: 'Tracking lệch', check: 'Duplicate / source / event logic', icon: Search },
];

export function LeadRevenueDiagnosisMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {diagnosisItems.map(({ title, check, icon: Icon }, index) => (
          <section key={title} className={`rounded-2xl border border-brand-border bg-brand-bg p-5 ${index === diagnosisItems.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
            <div className="flex items-center justify-between gap-3">
              <Icon className="h-5 w-5 text-brand-accent" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-brand-highlight" />
            </div>
            <h3 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
            <div className="mt-4 rounded-xl border border-brand-accent/20 bg-brand-accent-soft p-3">
              <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-accent">Check</p>
              <p className="mt-1 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{check}</p>
            </div>
          </section>
        ))}
      </div>
      <Caption>
        Lead tăng nhưng revenue chưa tăng có thể đến từ traffic, offer, form, sales follow-up, chu kỳ bán hàng hoặc tracking. Dashboard cần giúp khoanh vùng trước khi kết luận.
      </Caption>
    </figure>
  );
}

const quantityItems = [
  'Tổng lead',
  'CPL',
  'Lead theo campaign',
  'Dễ ưu tiên kênh tạo nhiều lead',
  'Chưa biết lead có xử lý được không',
];

const qualityItems = [
  'Contacted rate',
  'Qualified rate',
  'Quote rate',
  'Won / Lost',
  'Biết kênh nào tạo cơ hội thật hơn',
];

export function QuantityVsQualityDashboardVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Chỉ nhìn số lượng lead</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {quantityItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Nhìn thêm chất lượng lead</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {qualityItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index >= 2 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Lead volume cho biết số lượng. Lead quality mới giúp team hiểu kênh nào đang tạo cơ hội bán hàng thật hơn.
      </Caption>
    </figure>
  );
}

const reviewChecklist = [
  'Lead có bị đo trùng không?',
  'Form submit có bắn đúng success không?',
  'Lead tăng từ kênh / campaign nào?',
  'Lead có đủ thông tin liên hệ không?',
  'Sales có liên hệ trong thời gian phù hợp không?',
  'Qualified rate có giảm không?',
  'Quote / consultation rate có tăng theo không?',
  'Có nhìn theo cohort / độ trễ bán hàng không?',
  'Revenue / outcome có nối được về source không?',
  'Tuần sau cần sửa traffic, offer, form, follow-up hay tracking?',
];

export function LeadRevenueReviewChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist review khi lead tăng nhưng doanh thu chưa tăng
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {reviewChecklist.map((item, index) => {
            const isAction = index === reviewChecklist.length - 1;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft md:col-span-2'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isAction ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'}`}>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="pt-0.5 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>
        Checklist này giúp team đọc khoảng cách giữa lead và doanh thu trước khi đổ lỗi hoặc tăng ngân sách.
      </Caption>
    </figure>
  );
}
