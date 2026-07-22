import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  FileWarning,
  Filter,
  Gauge,
  Megaphone,
  RefreshCw,
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

type ContextItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const frequencyContexts: ContextItem[] = [
  { title: 'Campaign stage', subtitle: 'Cold, warm, retargeting', icon: Target },
  { title: 'Audience size', subtitle: 'Rộng hay nhỏ', icon: Users },
  { title: 'Creative signal', subtitle: 'CTR, CPC, engagement', icon: Megaphone },
  { title: 'Funnel signal', subtitle: 'CVR, CPL, CPA', icon: Filter, action: true },
  { title: 'Lead quality', subtitle: 'Contacted, qualified', icon: BarChart3, action: true },
  { title: 'Message role', subtitle: 'Proof, objection, tạo demand', icon: RefreshCw },
];

export function FrequencyContextMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-3 rounded-2xl border border-brand-accent/25 bg-brand-accent-soft px-5 py-4">
          <Gauge className="h-5 w-5 text-brand-accent" aria-hidden="true" />
          <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Frequency</h3>
        </div>
        <p className="mt-3 text-center text-[11px] font-semibold text-brand-soft-text">Tín hiệu về mức độ lặp, chưa phải kết luận fatigue</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {frequencyContexts.map(({ title, subtitle, icon: Icon, action }) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-3 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Cùng một frequency có thể mang ý nghĩa khác nhau giữa cold campaign, retargeting và hành trình cân nhắc dài.</Caption>
    </figure>
  );
}

const diagnosisBranches = [
  {
    title: 'Audience saturation',
    signals: ['Frequency tăng', 'Audience nhỏ', 'Reach mới giảm'],
    icon: Users,
  },
  {
    title: 'Creative fatigue',
    signals: ['CTR giảm', 'Engagement giảm', 'CPC tăng'],
    icon: Megaphone,
  },
  {
    title: 'Offer fatigue',
    signals: ['CTR vẫn ổn', 'CVR / CPL xấu', 'Quan tâm nhưng không hành động'],
    icon: Target,
    action: true,
  },
  {
    title: 'Funnel leakage',
    signals: ['Click vẫn có', 'Page / form CVR giảm', 'Tracking, form, speed issue'],
    icon: Filter,
  },
  {
    title: 'Lead quality / Sales',
    signals: ['Lead vẫn có', 'Contacted / qualified giảm', 'Follow-up, lost reason xấu'],
    icon: BarChart3,
    action: true,
  },
] satisfies Array<{ title: string; signals: string[]; icon: LucideIcon; action?: boolean }>;

export function AdFatigueDiagnosisMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <FileWarning className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Diagnosis map</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Khi performance xấu đi, kiểm theo thứ tự</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {diagnosisBranches.map(({ title, signals, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-3 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
              <div className="mt-4 space-y-2">
                {signals.map((signal) => (
                  <div key={signal} className="flex items-start gap-2">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${action ? 'bg-brand-highlight' : 'bg-brand-accent'}`} />
                    <p className="text-[10px] font-semibold leading-[1.5] text-brand-secondary">{signal}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Performance xấu đi có thể đến từ audience, creative, offer, page/form hoặc chất lượng xử lý lead.</Caption>
    </figure>
  );
}

const refreshSteps = [
  { title: 'Refresh visual', subtitle: 'Hình, video hoặc layout mới', icon: Megaphone },
  { title: 'Refresh hook', subtitle: 'Cách mở vấn đề mới', icon: Gauge },
  { title: 'Refresh proof', subtitle: 'Case, testimonial, before / after', icon: Check },
  { title: 'Refresh angle', subtitle: 'Nỗi đau hoặc bối cảnh khác', icon: Target },
  { title: 'Refresh offer', subtitle: 'CTA, gói, điều kiện, risk reversal', icon: RefreshCw, action: true },
  { title: 'Refresh funnel', subtitle: 'Landing page, form, follow-up', icon: Filter, action: true },
] satisfies ContextItem[];

export function CreativeRefreshLadderVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {refreshSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-3 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < refreshSteps.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-5">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Không phải fatigue nào cũng xử lý bằng thay hình. Có lúc cần đổi hook, proof, angle, offer hoặc cả funnel.</Caption>
    </figure>
  );
}
