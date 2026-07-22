import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  FileCheck2,
  FormInput,
  Goal,
  Handshake,
  HelpCircle,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Timer,
  UserRound,
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

type OfferElement = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const offerElements: OfferElement[] = [
  { title: 'Audience', subtitle: 'Dành cho ai?', icon: UserRound },
  { title: 'Problem', subtitle: 'Đau ở đâu?', icon: SearchCheck },
  { title: 'Promise', subtitle: 'Hứa điều gì?', icon: Goal },
  { title: 'Proof', subtitle: 'Vì sao tin?', icon: BadgeCheck, highlight: true },
  { title: 'Risk Reversal', subtitle: 'Giảm rủi ro thế nào?', icon: ShieldCheck, highlight: true },
  { title: 'CTA', subtitle: 'Bước tiếp theo là gì?', icon: MousePointerClick },
  { title: 'Timing', subtitle: 'Vì sao nên làm lúc này?', icon: Timer },
  { title: 'Sales Handoff', subtitle: 'Sales tiếp nhận gì?', icon: BriefcaseBusiness, highlight: true },
];

export function OfferBeyondDiscountVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft px-5 py-4 text-center">
          <PackageCheck className="mx-auto h-6 w-6 text-brand-accent" aria-hidden="true" />
          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Offer system</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Paid Ads Offer</h3>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {offerElements.map(({ title, subtitle, icon: Icon, highlight }) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                highlight
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-3 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-1.5 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Offer trong paid ads không chỉ là ưu đãi. Nó là toàn bộ lý do khiến khách hiểu, tin và chịu đi tiếp.</Caption>
    </figure>
  );
}

type FunnelStep = OfferElement & { leak: string };

const weakOfferLeaks: FunnelStep[] = [
  { title: 'Creative', subtitle: 'Attention', leak: 'Hook khó sắc, promise mờ', icon: Megaphone },
  { title: 'Click', subtitle: 'Traffic', leak: 'Người tò mò nhiều hơn người có nhu cầu', icon: MousePointerClick },
  { title: 'Landing Page', subtitle: 'Consideration', leak: 'Message khó rõ, proof không đủ lực', icon: FileCheck2 },
  { title: 'Form', subtitle: 'Intent', leak: 'Không biết lọc nhu cầu gì', icon: FormInput },
  { title: 'Lead Quality', subtitle: 'Fit', leak: 'Sai kỳ vọng hoặc chưa đủ intent', icon: UsersRound, highlight: true },
  { title: 'Sales', subtitle: 'Follow-up', leak: 'Phải giải thích lại từ đầu', icon: Handshake },
  { title: 'Economics', subtitle: 'Outcome', leak: 'CAC tăng, close rate thấp', icon: CircleDollarSign, highlight: true },
];

export function WeakOfferLeakFunnelVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Offer leak map</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Offer yếu làm rò tiền qua funnel</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {weakOfferLeaks.map(({ title, subtitle, leak, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section
                className={`h-full rounded-2xl border p-4 ${
                  highlight
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[9px] font-black uppercase tracking-[0.1em] text-brand-soft-text">{subtitle}</span>
                </div>
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-semibold leading-[1.5] text-brand-secondary">{leak}</p>
              </section>
              {index < weakOfferLeaks.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Offer yếu không chỉ làm ads khó chạy. Nó làm rò tiền qua creative, landing page, form, lead quality, sales và economics.</Caption>
    </figure>
  );
}

const readinessQuestions: OfferElement[] = [
  { title: 'Offer này dành cho ai?', subtitle: 'Khoanh đúng người nên quan tâm.', icon: UserRound },
  { title: 'Vấn đề cụ thể là gì?', subtitle: 'Nêu đúng điều campaign cần giải quyết.', icon: HelpCircle },
  { title: 'Lời hứa chính là gì?', subtitle: 'Làm rõ kết quả đáng tìm hiểu tiếp.', icon: Lightbulb },
  { title: 'Proof nào làm khách tin?', subtitle: 'Case, demo, review hoặc quy trình thật.', icon: BadgeCheck, highlight: true },
  { title: 'CTA tiếp theo là gì?', subtitle: 'Cho khách biết họ sẽ nhận được gì.', icon: MousePointerClick, highlight: true },
  { title: 'Rủi ro được giảm thế nào?', subtitle: 'Làm bước đầu đủ nhẹ và minh bạch.', icon: ShieldCheck, highlight: true },
];

export function OfferReadinessSixQuestionsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <PackageCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Pre-flight check</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Offer readiness trước khi chạy ads</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {readinessQuestions.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`flex items-start gap-3 rounded-2xl border p-4 ${
                highlight
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  highlight ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-black text-brand-soft-text">0{index + 1}</p>
                <h4 className="mt-1 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-1.5 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-[12px] font-bold leading-[1.55] text-brand-secondary">
            Nếu offer chưa rõ, campaign sẽ tối ưu trên một nền mơ hồ.
          </p>
        </div>
      </div>
      <Caption>Trước khi tối ưu ads, hãy kiểm offer. Nếu offer chưa rõ, campaign sẽ tối ưu trên một nền mơ hồ.</Caption>
    </figure>
  );
}
