import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Database,
  FileSearch,
  Gauge,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
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

type SignalStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const signalSteps: SignalStep[] = [
  { title: 'Impression Cost', subtitle: 'CPM / auction', icon: Gauge },
  { title: 'Attention', subtitle: 'Creative, hook, CTR', icon: Megaphone },
  { title: 'Click Cost', subtitle: 'CPC', icon: MousePointerClick },
  { title: 'Landing Page', subtitle: 'Match, trust, speed', icon: LayoutTemplate },
  { title: 'Form / CTA', subtitle: 'Submit rate, friction', icon: ClipboardCheck },
  { title: 'Tracking', subtitle: 'Event đúng hay sai', icon: Database },
  { title: 'Lead Quality', subtitle: 'Contacted, qualified', icon: Users, action: true },
  { title: 'Sales Follow-up', subtitle: 'Speed, next action, lost reason', icon: Target, action: true },
];

export function CPLSignalChainVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {signalSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`relative min-w-0 rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-3 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h3>
              <p className="mt-2 text-[10px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              {index < signalSteps.length - 1 && (index + 1) % 4 !== 0 && (
                <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
              )}
            </section>
          ))}
        </div>
      </div>
      <Caption>CPL là kết quả của media, creative, page, form, tracking, lead quality và sales follow-up.</Caption>
    </figure>
  );
}

const diagnosisRows = [
  {
    metric: 'CPM tăng',
    check: 'Auction, audience size, seasonality, saturation',
    action: 'Review audience, creative, budget pacing',
  },
  {
    metric: 'CTR giảm',
    check: 'Hook, fatigue, message, angle',
    action: 'Creative batch mới, đổi hook, proof hoặc angle',
  },
  {
    metric: 'CPC tăng',
    check: 'Đọc đồng thời CPM và CTR',
    action: 'Không xử lý CPC như một signal độc lập',
  },
  {
    metric: 'Click ổn, submit giảm',
    check: 'Page, form, offer, speed, tracking',
    action: 'Audit page, form và message match',
  },
  {
    metric: 'Lead ổn, qualified giảm',
    check: 'Audience, message, form, sales note',
    action: 'Sửa qualification, offer hoặc promise',
    important: true,
  },
  {
    metric: 'Lead ổn, sales outcome giảm',
    check: 'Speed to lead, follow-up, pricing, close reason',
    action: 'CRM review và sales feedback loop',
    important: true,
  },
];

export function MetricBreakdownDiagnosisVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <FileSearch className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Metric breakdown</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Xấu ở đâu, sửa ở đó</h3>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {diagnosisRows.map(({ metric, check, action, important }) => (
            <section
              key={metric}
              className={`grid min-w-0 gap-3 rounded-2xl border p-4 sm:grid-cols-[0.8fr_1.3fr_1.3fr] sm:items-center ${
                important ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <h4 className="font-heading text-[13px] font-extrabold text-brand-primary">{metric}</h4>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Check</p>
                <p className="mt-1 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{check}</p>
              </div>
              <div>
                <p className={`text-[9px] font-black uppercase tracking-[0.12em] ${important ? 'text-brand-highlight' : 'text-brand-accent'}`}>Possible action</p>
                <p className="mt-1 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{action}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Cùng là CPL tăng, nhưng mỗi nguyên nhân cần một cách sửa khác nhau.</Caption>
    </figure>
  );
}

const fixLeverGroups = [
  { title: 'Media', items: ['Budget pacing', 'Audience', 'Auction', 'Structure'], icon: Gauge },
  { title: 'Creative', items: ['Hook', 'Angle', 'Proof', 'Format'], icon: Megaphone },
  { title: 'Offer', items: ['CTA', 'Risk reversal', 'Qualification', 'Value clarity'], icon: Target },
  { title: 'Landing Page / Form', items: ['Message match', 'Speed / mobile', 'Proof / FAQ', 'Form friction'], icon: LayoutTemplate },
  { title: 'Tracking / Data', items: ['Event timing', 'UTM', 'Dedup', 'CRM source'], icon: Database, action: true },
  { title: 'Sales / CRM', items: ['Speed to lead', 'Owner', 'Status', 'Next action / lost reason'], icon: Users, action: true },
] satisfies Array<{ title: string; items: string[]; icon: LucideIcon; action?: boolean }>;

export function PaidAdsFixLeverMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fixLeverGroups.map(({ title, items, icon: Icon, action }) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-5 ${
                action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="font-heading text-[14px] font-extrabold text-brand-primary">{title}</h3>
              </div>
              <div className="mt-4 space-y-2">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                    <p className="text-[11px] font-semibold leading-[1.5] text-brand-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Khi performance xấu đi, sửa đúng cần gạt quan trọng hơn sửa nhanh.</Caption>
    </figure>
  );
}
