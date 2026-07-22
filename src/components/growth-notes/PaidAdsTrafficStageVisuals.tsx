import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  Columns3,
  GitCompareArrows,
  Lightbulb,
  MessageCircleQuestion,
  MousePointerClick,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Target,
  UserRoundCheck,
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

type StageCard = {
  title: string;
  label: string;
  items: string[];
  icon: LucideIcon;
  highlight?: boolean;
};

const trafficStages: StageCard[] = [
  {
    title: 'Cold Traffic',
    label: 'Build relevance',
    items: ['Chưa biết brand', 'Cần problem / insight', 'Cần proof dễ hiểu', 'CTA nhẹ hơn'],
    icon: UsersRound,
  },
  {
    title: 'Warm Traffic',
    label: 'Build confidence',
    items: ['Đã tương tác / xem page', 'Cần proof sâu hơn', 'Cần comparison / FAQ', 'CTA rõ hơn'],
    icon: UserRoundCheck,
  },
  {
    title: 'Retargeting',
    label: 'Enable action',
    items: ['Đã có intent', 'Cần xử lý objection', 'Cần case / testimonial', 'Cần next action cụ thể'],
    icon: RefreshCw,
    highlight: true,
  },
];

export function TrafficStageMessageMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Columns3 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Traffic stage map</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Mỗi stage cần một message khác</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trafficStages.map(({ title, label, items, icon: Icon, highlight }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                highlight
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className={`text-[9px] font-black uppercase tracking-[0.12em] ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                  {label}
                </span>
              </div>
              <h4 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h4>
              <div className="mt-4 space-y-3">
                {items.map((item, index) => {
                  const isAction = highlight && index === items.length - 1;
                  return (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${isAction ? 'bg-brand-highlight' : 'bg-brand-accent'}`} />
                      <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Paid ads không chỉ chia audience. Nó phải chia message theo mức độ nhận biết, mức độ tin và mức độ sẵn sàng hành động.</Caption>
    </figure>
  );
}

type LadderStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const retargetingLadder: LadderStep[] = [
  { title: 'Reminder', subtitle: 'Nhắc lại vấn đề / offer', icon: RefreshCw },
  { title: 'Proof', subtitle: 'Case, demo, testimonial', icon: BadgeCheck },
  { title: 'Objection', subtitle: 'Xử lý nghi ngờ phổ biến', icon: MessageCircleQuestion, highlight: true },
  { title: 'Comparison', subtitle: 'Khác gì lựa chọn khác?', icon: GitCompareArrows },
  { title: 'Risk Reversal', subtitle: 'Audit, sample, demo nhẹ rủi ro', icon: ShieldCheck },
  { title: 'Next Action', subtitle: 'Đặt lịch, báo giá, inbox, form', icon: MousePointerClick, highlight: true },
];

export function RetargetingMessageLadderVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Conversation sequence</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Retargeting ladder: đừng chỉ nhắc lại</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {retargetingLadder.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section
                className={`h-full rounded-2xl border p-4 ${
                  highlight
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < retargetingLadder.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {(index + 1) % 3 !== 0 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Retargeting tốt không chỉ bám đuổi. Nó bổ sung proof, xử lý nghi ngờ và đưa bước tiếp theo phù hợp.</Caption>
    </figure>
  );
}

type StageRow = {
  stage: string;
  message: string;
  page: string;
  cta: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const stageRows: StageRow[] = [
  {
    stage: 'Cold',
    message: 'Problem / insight',
    page: 'Giải thích + proof cơ bản',
    cta: 'Nhẹ, ít rủi ro',
    icon: Lightbulb,
  },
  {
    stage: 'Warm',
    message: 'Proof / comparison',
    page: 'Case, FAQ, solution rõ',
    cta: 'Tư vấn, audit, demo, báo giá sơ bộ',
    icon: SearchCheck,
  },
  {
    stage: 'Retargeting',
    message: 'Objection / next step',
    page: 'Proof sâu, risk reversal, action rõ',
    cta: 'Đặt lịch, gửi form, inbox, nhận báo giá',
    icon: Target,
    highlight: true,
  },
];

export function StageMessagePageCTAVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <BookOpenCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Stage continuity</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Message – Page – CTA</h3>
          </div>
        </div>
        <div className="mt-5 hidden grid-cols-[0.8fr_1.2fr_1.5fr_1.5fr] gap-3 px-4 text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:grid">
          <span>Stage</span>
          <span>Message</span>
          <span>Landing page</span>
          <span>CTA</span>
        </div>
        <div className="mt-3 space-y-3">
          {stageRows.map(({ stage, message, page, cta, icon: Icon, highlight }) => (
            <section
              key={stage}
              className={`grid gap-4 rounded-2xl border p-4 md:grid-cols-[0.8fr_1.2fr_1.5fr_1.5fr] md:items-center ${
                highlight
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`h-4 w-4 shrink-0 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="font-heading text-[13px] font-extrabold text-brand-primary">{stage}</h4>
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
      <Caption>Paid ads hiệu quả hơn khi message, landing page và CTA cùng nói đúng stage của người xem.</Caption>
    </figure>
  );
}
