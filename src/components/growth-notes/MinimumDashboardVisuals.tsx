import {
  BarChart3,
  Check,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Database,
  Filter,
  Flag,
  FormInput,
  Gauge,
  Megaphone,
  MousePointerClick,
  Target,
  Users,
  WalletCards,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type StructureBlock = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const structureBlocks: StructureBlock[] = [
  { title: 'Spend', subtitle: 'Tuần này chi bao nhiêu?', icon: WalletCards },
  { title: 'Traffic', subtitle: 'Khách đến từ đâu?', icon: MousePointerClick },
  { title: 'Contact / Lead', subtitle: 'Khách để lại tín hiệu gì?', icon: FormInput },
  { title: 'Sales Status', subtitle: 'Lead được xử lý đến đâu?', icon: Users },
  { title: 'Outcome', subtitle: 'Có báo giá, cơ hội, doanh thu không?', icon: CircleDollarSign },
  { title: 'Next Actions', subtitle: 'Tuần sau sửa gì?', icon: Target, highlight: true },
];

export function MinimumMarketingDashboardStructureVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Minimum structure</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Sáu block đủ để bắt đầu</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {structureBlocks.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`relative rounded-2xl border p-4 sm:p-5 ${
                highlight
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface shadow-brand-soft ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-5 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một dashboard tối thiểu nên giúp team đi từ ngân sách đến tín hiệu, lead, sales status, outcome và hành động tuần sau.
      </Caption>
    </figure>
  );
}

const snapshotItems = ['Spend', 'Traffic', 'Leads', 'Qualified', 'Outcome'];
const channelRows = [
  { channel: 'Paid search', status: 'Đối chiếu quality' },
  { channel: 'Paid social', status: 'Kiểm tra CPL' },
  { channel: 'Organic / Direct', status: 'Theo dõi tín hiệu' },
];
const salesStatuses = ['New', 'Contacted', 'Qualified', 'Quoted', 'Won / Lost'];

export function WeeklyDashboardLayoutVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-4 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <BarChart3 className="h-5 w-5 text-brand-accent" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Weekly dashboard</p>
            <h3 className="mt-1 font-heading text-[19px] font-extrabold text-brand-primary">Một layout đủ dùng cho cuộc họp tuần</h3>
          </div>
        </div>

        <section className="mt-5">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Top Snapshot</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {snapshotItems.map((item) => (
              <div key={item} className="rounded-xl border border-brand-accent/15 bg-brand-accent-soft p-3">
                <p className="text-[11px] font-bold text-brand-secondary">{item}</p>
                <div className="mt-3 h-2 w-10 rounded-full bg-brand-accent/20" />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <section className="rounded-2xl border border-brand-border bg-brand-bg p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Channel Table</p>
            <div className="mt-4 hidden sm:block">
              <div className="grid grid-cols-[1.3fr_repeat(5,0.7fr)] gap-2 border-b border-brand-border pb-2 text-[9px] font-black uppercase tracking-[0.08em] text-brand-soft-text">
                {['Channel', 'Spend', 'Traffic', 'Lead', 'CPL', 'Quality'].map((item) => <span key={item}>{item}</span>)}
              </div>
              {channelRows.map((row) => (
                <div key={row.channel} className="grid grid-cols-[1.3fr_repeat(5,0.7fr)] gap-2 border-b border-brand-border py-3 text-[10px] font-semibold text-brand-secondary last:border-0">
                  <span>{row.channel}</span>
                  {Array.from({ length: 4 }).map((_, index) => <span key={index} className="text-brand-soft-text">—</span>)}
                  <span className="text-brand-accent">Review</span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 sm:hidden">
              {channelRows.map((row) => (
                <div key={row.channel} className="rounded-xl border border-brand-border bg-brand-surface p-3">
                  <p className="text-[12px] font-bold text-brand-primary">{row.channel}</p>
                  <p className="mt-1 text-[10px] font-medium text-brand-accent">{row.status}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-brand-border bg-brand-bg p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Lead Quality / Sales Status</p>
            <div className="mt-4 space-y-2">
              {salesStatuses.map((status, index) => (
                <div key={status} className="flex items-center justify-between rounded-xl border border-brand-border bg-brand-surface px-3 py-2.5">
                  <span className="text-[11px] font-semibold text-brand-secondary">{status}</span>
                  <span className={`h-2 w-2 rounded-full ${index >= 2 ? 'bg-brand-accent' : 'bg-brand-border'}`} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-4 rounded-2xl border border-brand-highlight/25 bg-brand-highlight-soft p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-highlight">Action Notes</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {['Keep', 'Fix', 'Test next week'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-brand-surface px-3 py-2.5 text-[11px] font-bold text-brand-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-highlight" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Caption>
        Một dashboard weekly đơn giản có thể bắt đầu bằng snapshot, bảng theo kênh, lead quality và phần action notes cho tuần sau.
      </Caption>
    </figure>
  );
}

const audienceViews = [
  {
    title: 'Founder View',
    focus: ['Spend', 'Lead', 'Qualified', 'Outcome', 'Next decision'],
    icon: Gauge,
    className: 'border-brand-accent/30 bg-brand-accent-soft',
    iconClassName: 'text-brand-accent',
  },
  {
    title: 'Marketing View',
    focus: ['Channel', 'Campaign', 'Landing page', 'CTA', 'CPL / conversion'],
    icon: Megaphone,
    className: 'border-brand-border bg-brand-bg',
    iconClassName: 'text-brand-accent',
  },
  {
    title: 'Sales View',
    focus: ['New lead', 'Contacted', 'Qualified', 'Quoted / won', 'Follow-up'],
    icon: Users,
    className: 'border-brand-highlight/25 bg-brand-highlight-soft',
    iconClassName: 'text-brand-highlight',
  },
];

export function DashboardAudienceViewsVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-3 md:p-8">
        {audienceViews.map(({ title, focus, icon: Icon, className, iconClassName }) => (
          <section key={title} className={`rounded-2xl border p-5 ${className}`}>
            <Icon className={`h-5 w-5 ${iconClassName}`} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Focus</p>
            <ul className="mt-4 space-y-3">
              {focus.map((item, index) => (
                <li key={item} className="flex items-start gap-2.5 text-[12px] font-semibold leading-[1.5] text-brand-secondary">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${index >= focus.length - 2 && title === 'Sales View' ? 'bg-brand-highlight' : 'bg-brand-accent'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Caption>
        Dashboard tối thiểu không nhất thiết chỉ có một màn hình cho tất cả. Founder, marketing và sales cần nhìn cùng dữ liệu nhưng ở các góc khác nhau.
      </Caption>
    </figure>
  );
}

const metricPriorities = [
  {
    title: 'Nên có trước',
    items: ['Spend và traffic', 'Contact / Lead', 'CPL / cost per contact', 'Source / campaign', 'Sales status', 'Qualified / action notes'],
    icon: Flag,
    className: 'border-brand-accent/30 bg-brand-accent-soft',
    iconClassName: 'text-brand-accent',
  },
  {
    title: 'Khi dữ liệu ổn hơn',
    items: ['Landing conversion rate', 'CTA / contact type', 'Quality theo source', 'Quote rate', 'Won / lost theo kênh', 'Revenue nếu đủ ổn'],
    icon: BarChart3,
    className: 'border-brand-accent/15 bg-brand-accent-soft/60',
    iconClassName: 'text-brand-accent',
  },
  {
    title: 'Làm sau',
    items: ['Attribution phức tạp', 'Cohort / LTV', 'Multi-touch journey', 'Predictive scoring', 'Advanced segmentation', 'Full CRM automation'],
    icon: Database,
    className: 'border-brand-border bg-brand-bg',
    iconClassName: 'text-brand-soft-text',
  },
];

export function DashboardMetricPriorityVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-3 md:p-8">
        {metricPriorities.map(({ title, items, icon: Icon, className, iconClassName }, index) => (
          <section key={title} className={`rounded-2xl border p-5 ${className}`}>
            <div className="flex items-center justify-between gap-3">
              <Icon className={`h-5 w-5 ${iconClassName}`} aria-hidden="true" />
              <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
            </div>
            <h3 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.5] text-brand-secondary">
                  <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${index < 2 ? 'text-brand-accent' : 'text-brand-soft-text'}`} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Caption>
        Dashboard nên phát triển theo tầng. Đừng bắt đầu bằng attribution phức tạp nếu spend, lead, source và sales status còn chưa rõ.
      </Caption>
    </figure>
  );
}

const minimumChecklist = [
  'Có snapshot tuần không?',
  'Có spend và traffic không?',
  'Có contact / lead không?',
  'Có source / campaign / landing page không?',
  'Có contact type hoặc form_name không?',
  'Có sales status cơ bản không?',
  'Có qualified / outcome / proxy gần doanh thu không?',
  'Có ghi chú bối cảnh tuần không?',
  'Có action notes không?',
  'Sau khi xem, team có chốt được việc cần làm không?',
];

export function MinimumDashboardChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist dashboard marketing tối thiểu
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {minimumChecklist.map((item, index) => {
            const isAction = index >= minimumChecklist.length - 2;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isAction ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
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
        Một dashboard tối thiểu nên được kiểm tra bằng câu hỏi cuối cùng: sau khi xem xong, team có biết tuần sau cần làm gì không?
      </Caption>
    </figure>
  );
}
