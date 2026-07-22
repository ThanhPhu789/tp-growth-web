import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  FileSearch,
  GitCompareArrows,
  LayoutTemplate,
  MessageSquareText,
  RefreshCw,
  Search,
  Sparkles,
  Target,
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

const searchSignals = [
  'Người dùng chủ động tìm',
  'Nhu cầu đã được gọi tên',
  'Keyword thể hiện vấn đề',
  'Landing page trả lời đúng truy vấn',
  'KPI gần conversion hơn',
];

const socialSignals = [
  'Người dùng đang lướt',
  'Nhu cầu có thể chưa rõ',
  'Creative phải gọi đúng vấn đề',
  'Landing page cần xây niềm tin',
  'KPI đọc cả attention và lead quality',
];

function IntentColumn({
  title,
  label,
  items,
  icon: Icon,
  neutral,
}: {
  title: string;
  label: string;
  items: string[];
  icon: LucideIcon;
  neutral?: boolean;
}) {
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${neutral ? 'border-brand-border bg-brand-bg' : 'border-brand-accent/25 bg-brand-accent-soft'}`}>
      <div className="flex items-center justify-between gap-3">
        <Icon className={`h-5 w-5 ${neutral ? 'text-brand-secondary' : 'text-brand-accent'}`} aria-hidden="true" />
        <span className={`text-[9px] font-black uppercase tracking-[0.12em] ${neutral ? 'text-brand-soft-text' : 'text-brand-accent'}`}>{label}</span>
      </div>
      <h3 className="mt-4 font-heading text-[18px] font-extrabold text-brand-primary">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => {
          const isDecisionSignal = index >= items.length - 2;
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

export function SearchIntentVsSocialIntentVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <IntentColumn title="Search Intent" label="Demand expressed" items={searchSignals} icon={Search} />
        <IntentColumn title="Social Intent" label="Demand shaped" items={socialSignals} icon={Sparkles} neutral />
      </div>
      <Caption>Search thường bắt nhu cầu đã được nói ra. Social thường khơi gợi hoặc định hình nhu cầu trước khi người dùng chủ động tìm.</Caption>
    </figure>
  );
}

type IntentRow = {
  intent: string;
  message: string;
  page: string;
  cta: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const intentRows: IntentRow[] = [
  {
    intent: 'Search high intent',
    message: 'Trả lời keyword',
    page: 'Dịch vụ rõ, proof trực tiếp',
    cta: 'Báo giá, gọi, đặt lịch, tư vấn',
    icon: Search,
  },
  {
    intent: 'Social cold',
    message: 'Problem / insight / hook',
    page: 'Giải thích, proof dễ hiểu',
    cta: 'Xem case, checklist, tư vấn sơ bộ',
    icon: UsersRound,
  },
  {
    intent: 'Social warm / retargeting',
    message: 'Proof / objection / next step',
    page: 'Case, FAQ, comparison',
    cta: 'Audit, demo, báo giá sơ bộ, đặt lịch',
    icon: RefreshCw,
    highlight: true,
  },
];

export function IntentMessagePageCTAVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <GitCompareArrows className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Intent continuity</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Message – Page – CTA theo intent</h3>
          </div>
        </div>
        <div className="mt-5 hidden grid-cols-[1.1fr_1.2fr_1.4fr_1.5fr] gap-3 px-4 text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:grid">
          <span>Intent</span>
          <span>Message</span>
          <span>Landing page</span>
          <span>CTA</span>
        </div>
        <div className="mt-3 space-y-3">
          {intentRows.map(({ intent, message, page, cta, icon: Icon, highlight }) => (
            <section
              key={intent}
              className={`grid gap-4 rounded-2xl border p-4 md:grid-cols-[1.1fr_1.2fr_1.4fr_1.5fr] md:items-center ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`h-4 w-4 shrink-0 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{intent}</h4>
              </div>
              {[
                ['Message', message],
                ['Landing page', page],
                ['CTA', cta],
              ].map(([label, value], index) => (
                <div key={label}>
                  <p className="text-[9px] font-black uppercase tracking-[0.1em] text-brand-soft-text md:hidden">{label}</p>
                  <div className="mt-1 flex items-start gap-2 md:mt-0">
                    <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${highlight && index === 2 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                    <p className="text-[11px] font-semibold leading-[1.5] text-brand-secondary">{value}</p>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
      <Caption>Cùng một offer nhưng intent khác nhau cần message, landing page và CTA khác nhau.</Caption>
    </figure>
  );
}

type DemandStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const demandSystem: DemandStep[] = [
  { title: 'Social Creative', subtitle: 'Gọi vấn đề, tạo nhận biết', icon: Sparkles },
  { title: 'Content / Page', subtitle: 'Giải thích, proof, case', icon: LayoutTemplate },
  { title: 'Warm Audience', subtitle: 'Đã tương tác hoặc xem page', icon: UsersRound },
  { title: 'Search Demand', subtitle: 'Bắt đầu tìm brand / category', icon: FileSearch },
  { title: 'Search Ads', subtitle: 'Bắt nhu cầu đang được gõ ra', icon: Search, highlight: true },
  { title: 'Retargeting', subtitle: 'Proof, objection, next action', icon: Target },
  { title: 'CRM / Sales', subtitle: 'Quality quay lại message / keyword', icon: BadgeCheck, highlight: true },
];

export function DemandCreationCaptureSystemVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Demand system</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Social mở nhu cầu, Search bắt nhu cầu</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {demandSystem.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < demandSystem.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3">
          <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-[12px] font-bold leading-[1.55] text-brand-secondary">CRM feedback quay lại creative, offer, page và keyword để vòng sau đọc intent tốt hơn.</p>
        </div>
      </div>
      <Caption>Social và Search không chỉ cạnh tranh ngân sách. Chúng có thể phối hợp trong một hệ thống tạo, mở, bắt và nuôi nhu cầu.</Caption>
    </figure>
  );
}
