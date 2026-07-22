import {
  CheckCircle2,
  FileText,
  Gauge,
  LayoutTemplate,
  Megaphone,
  Palette,
  Route,
  Target,
  UserRound,
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

const tooEarlyItems = [
  'Direction chưa rõ',
  'Offer chưa chốt',
  'Việc marketing chưa lặp lại',
  'Lead flow còn mù',
  'Founder chưa có nhịp review',
];

const rightTimingItems = [
  'Có việc marketing hằng tuần',
  'Có nhiều điểm chạm cần phối hợp',
  'Có lead/data cần đọc lại',
  'Có sales feedback cần đưa vào marketing',
  'Cần giữ năng lực trong công ty',
];

export function BuildTeamTimingVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Build quá sớm</h3>
          </div>
          <div className="mt-5 space-y-3">
            {tooEarlyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Build đúng thời điểm</h3>
          </div>
          <div className="mt-5 space-y-3">
            {rightTimingItems.map((item, index) => {
              const isAction = index === 2 || index === 3;
              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                    isAction
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft'
                      : 'border-brand-accent/20 bg-brand-surface'
                  }`}
                >
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Caption>
        Thời điểm build team không nằm ở việc công ty đã đủ lớn hay chưa, mà nằm ở việc marketing đã trở thành một dòng việc cần người giữ nhịp mỗi tuần.
      </Caption>
    </figure>
  );
}

type PodRole = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const podRoles: PodRole[] = [
  { title: 'Marketing Lead / Generalist', subtitle: 'Giữ context, brief, review, report', icon: UserRound },
  { title: 'Content', subtitle: 'Angle, post, case, email/script', icon: FileText },
  { title: 'Design / Creative', subtitle: 'Visual, layout, asset', icon: Palette },
  { title: 'Ads / Growth', subtitle: 'Media, test, signal', icon: Megaphone },
  { title: 'Web / Tracking', subtitle: 'Landing, form, event, data', icon: LayoutTemplate, action: true },
  { title: 'Sales feedback', subtitle: 'Lead quality, objection, outcome', icon: Users, action: true },
];

export function FirstMarketingPodVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <Users className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-blue-100">Connected capabilities</p>
          <h3 className="mt-2 font-heading text-[21px] font-extrabold">Small Marketing Pod</h3>
        </section>
        <div className="mx-auto h-6 w-px bg-brand-accent/30" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {podRoles.map(({ title, subtitle, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Team marketing đầu tiên không cần đông. Quan trọng là có người giữ context và các năng lực cần thiết được nối với nhau.
      </Caption>
    </figure>
  );
}

const operatingColumns = [
  {
    title: 'Founder',
    icon: Target,
    items: ['Chốt ưu tiên', 'Chốt offer', 'Gỡ nghẽn nội bộ'],
    tone: 'neutral',
  },
  {
    title: 'In-house Marketing',
    icon: Users,
    items: ['Giữ context', 'Viết brief', 'Theo CRM/dashboard', 'Phối hợp sales'],
    tone: 'blue',
  },
  {
    title: 'Agency / Freelancer',
    icon: Gauge,
    items: ['Ads/SEO/creative/tracking', 'Triển khai theo scope', 'Báo cáo tín hiệu', 'Đề xuất cải thiện'],
    tone: 'orange',
  },
] as const;

export function InhouseExternalOperatingModelVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 lg:grid-cols-3 md:p-8">
        {operatingColumns.map(({ title, icon: Icon, items, tone }) => {
          const sectionClass =
            tone === 'blue'
              ? 'border-brand-accent/25 bg-brand-accent-soft'
              : tone === 'orange'
                ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                : 'border-brand-border bg-brand-bg';
          const iconClass =
            tone === 'blue'
              ? 'text-brand-accent'
              : tone === 'orange'
                ? 'text-brand-highlight'
                : 'text-brand-soft-text';

          return (
            <section key={title} className={`rounded-brand-card border p-5 ${sectionClass}`}>
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${iconClass}`} aria-hidden="true" />
                <h3 className="font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
              </div>
              <div className="mt-5 space-y-3">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 rounded-xl border border-brand-border/80 bg-brand-surface p-3">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${iconClass}`} aria-hidden="true" />
                    <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <Caption>
        Mô hình tốt không phải chọn in-house hoặc agency. Mô hình tốt là biết phần nào cần giữ trong công ty và phần nào nên thuê ngoài để tăng tốc.
      </Caption>
    </figure>
  );
}
