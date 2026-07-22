import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  Database,
  FileCheck2,
  FormInput,
  Layers3,
  MessageSquareText,
  RefreshCw,
  Send,
  Target,
  TrendingUp,
  UserCheck,
  UsersRound,
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
  highlight?: boolean;
};

const outcomeSignals: SignalStep[] = [
  { title: 'Lead Submit', subtitle: 'Để lại thông tin', icon: FormInput },
  { title: 'Contacted', subtitle: 'Sales liên hệ được', icon: Send },
  { title: 'Qualified', subtitle: 'Đúng nhu cầu / tệp', icon: UserCheck, highlight: true },
  { title: 'Opportunity', subtitle: 'Có cơ hội thật', icon: BriefcaseBusiness },
  { title: 'Quote / Demo / Meeting', subtitle: 'Có bước đi tiếp', icon: FileCheck2 },
  { title: 'Won', subtitle: 'Thành khách', icon: BadgeCheck, highlight: true },
  { title: 'Lost Reason', subtitle: 'Biết vì sao mất', icon: MessageSquareText },
  { title: 'Feedback to Ads', subtitle: 'Quay lại campaign / offer', icon: RefreshCw, highlight: true },
];

export function LeadToBusinessOutcomeSignalVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Outcome signals</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Từ Lead đến Business Outcome</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeSignals.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < outcomeSignals.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {(index + 1) % 4 !== 0 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Form submit chỉ là tầng đầu. Hãy đọc tiếp contacted, qualified, opportunity, won và lost reason.</Caption>
    </figure>
  );
}

const feedbackLoop: SignalStep[] = [
  { title: 'Ads / Creative', subtitle: 'Tạo hoặc bắt demand', icon: Target },
  { title: 'Landing Page / Form', subtitle: 'Thu lead', icon: FormInput },
  { title: 'CRM', subtitle: 'Ghi source, campaign, owner', icon: Database },
  { title: 'Sales Follow-up', subtitle: 'Contacted, qualified, next action', icon: UsersRound },
  { title: 'Outcome', subtitle: 'Won, lost, reason', icon: BadgeCheck, highlight: true },
  { title: 'Learning', subtitle: 'Nguồn nào tạo lead tốt', icon: ClipboardCheck, highlight: true },
  { title: 'Optimization', subtitle: 'Budget, creative, page, signal', icon: TrendingUp, highlight: true },
];

export function OfflineConversionFeedbackLoopVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <RefreshCw className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Feedback loop</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Offline conversion feedback</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {feedbackLoop.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              } ${index === feedbackLoop.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center justify-between gap-2">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-3 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-1.5 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3">
          <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-[12px] font-bold leading-[1.55] text-brand-secondary">Outcome quay lại thành bài học cho campaign, creative, offer, page và platform signal.</p>
        </div>
      </div>
      <Caption>Offline feedback giúp paid ads học tiếp từ sales status và business outcome, không dừng ở form submit.</Caption>
    </figure>
  );
}

const feedbackLayers: SignalStep[] = [
  { title: 'Lead Hygiene', subtitle: 'Lead đủ, không trùng, có source', icon: ClipboardCheck },
  { title: 'Sales Status', subtitle: 'Contacted, qualified, next action', icon: UserCheck },
  { title: 'Opportunity', subtitle: 'Quote, meeting, demo', icon: BriefcaseBusiness },
  { title: 'Outcome', subtitle: 'Won, lost, reason, value', icon: BadgeCheck, highlight: true },
  { title: 'Ads Learning', subtitle: 'Budget, creative, offer, page decision', icon: Layers3, highlight: true },
];

export function FiveLayersAfterLeadSubmitVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Feedback stack</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">5 tầng feedback sau form submit</h3>
        <div className="mt-6 space-y-3">
          {feedbackLayers.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`grid gap-3 rounded-2xl border p-4 sm:grid-cols-[auto_1fr_1.5fr] sm:items-center ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${highlight ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[9px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</p>
                <h4 className="mt-1 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              </div>
              <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Dữ liệu sau submit cần sạch, có status, có opportunity, có outcome và quay lại thành bài học cho ads.</Caption>
    </figure>
  );
}
