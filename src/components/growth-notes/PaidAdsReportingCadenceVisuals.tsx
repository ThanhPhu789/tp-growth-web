import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Clock3,
  Gauge,
  MessagesSquare,
  SearchCheck,
  ShieldAlert,
  Target,
  TrendingUp,
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

const dailyCheckItems = [
  'Kiểm lỗi phân phối',
  'Kiểm tracking, form, page',
  'Kiểm spend pacing',
  'Kiểm spike bất thường',
  'Kiểm creative bị reject',
  'Mục tiêu: không để hệ thống hỏng',
];

const decisionReviewItems = [
  'Đọc trend nhiều ngày',
  'Đọc creative signal',
  'Đọc lead quality',
  'Đọc sales feedback',
  'Đọc economics',
  'Mục tiêu: giữ, sửa, tắt, tăng',
];

function ReviewColumn({
  title,
  label,
  items,
  icon: Icon,
  featured,
}: {
  title: string;
  label: string;
  items: string[];
  icon: LucideIcon;
  featured?: boolean;
}) {
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'}`}>
      <div className="flex items-center justify-between gap-3">
        <Icon className={`h-5 w-5 ${featured ? 'text-brand-accent' : 'text-brand-secondary'}`} aria-hidden="true" />
        <span className={`text-[9px] font-black uppercase tracking-[0.12em] ${featured ? 'text-brand-accent' : 'text-brand-soft-text'}`}>{label}</span>
      </div>
      <h3 className="mt-4 font-heading text-[18px] font-extrabold text-brand-primary">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => {
          const isDecisionSignal = featured && (index === 2 || index === 4);
          return (
            <div key={item} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isDecisionSignal ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              <p className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function DailyCheckVsDecisionReviewVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <ReviewColumn title="Daily Check" label="Detect anomalies" items={dailyCheckItems} icon={ShieldAlert} />
        <ReviewColumn title="Decision Review" label="Make decisions" items={decisionReviewItems} icon={Target} featured />
      </div>
      <Caption>Daily check giúp phát hiện lỗi. Decision review giúp ra quyết định. Hai việc này không nên bị trộn làm một.</Caption>
    </figure>
  );
}

type TimeSignal = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const timeSignals: TimeSignal[] = [
  { title: 'Same day', subtitle: 'Spend, delivery, click, tracking lỗi', icon: AlertTriangle },
  { title: '1–3 ngày', subtitle: 'Media trend, form submit, lead volume', icon: Gauge },
  { title: '3–7 ngày', subtitle: 'Creative, landing page, form signal', icon: TrendingUp },
  { title: 'Weekly', subtitle: 'Contacted, qualified, sales note', icon: UsersRound, highlight: true },
  { title: 'Monthly / cycle', subtitle: 'CAC, economics, won / lost, learning', icon: BadgeCheck, highlight: true },
];

export function AdsSignalTimeLagVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Signal timeline</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Paid ads signal có nhiều lớp thời gian</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {timeSignals.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < timeSignals.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent md:hidden" aria-hidden="true" />
                  <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent md:block" aria-hidden="true" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Không phải signal nào cũng xuất hiện cùng lúc. Click đến trước, lead quality và business outcome thường đến sau.</Caption>
    </figure>
  );
}

type CadenceCard = {
  title: string;
  purpose: string;
  metrics: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const reportingCadence: CadenceCard[] = [
  {
    title: 'Daily Check',
    purpose: 'Phát hiện lỗi',
    metrics: 'Spend, delivery, tracking, form, spike',
    icon: SearchCheck,
  },
  {
    title: '3–7 Day Read',
    purpose: 'Đọc media / creative trend',
    metrics: 'CTR, CPC, CPL, frequency, page signal',
    icon: BarChart3,
  },
  {
    title: 'Weekly Review',
    purpose: 'Đọc lead quality',
    metrics: 'Contacted, qualified, sales note, lost reason',
    icon: MessagesSquare,
    highlight: true,
  },
  {
    title: 'Monthly Review',
    purpose: 'Đọc economics và bài học',
    metrics: 'CAC, qualified cost, won / lost, budget allocation',
    icon: Clock3,
    highlight: true,
  },
];

export function PaidAdsReportingCadenceVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Operating rhythm</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Reporting cadence cho paid ads</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reportingCadence.map(({ title, purpose, metrics, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Purpose</p>
                  <p className="mt-1.5 text-[12px] font-semibold leading-[1.5] text-brand-secondary">{purpose}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Signals</p>
                  <p className="mt-1.5 text-[12px] font-semibold leading-[1.5] text-brand-secondary">{metrics}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Không phải chỉ số nào cũng nên đọc mỗi ngày. Mỗi nhịp report phục vụ một loại quyết định khác nhau.</Caption>
    </figure>
  );
}
