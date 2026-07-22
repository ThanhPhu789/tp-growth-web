import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ClipboardList,
  FileCheck2,
  FormInput,
  Gauge,
  LayoutTemplate,
  MessageSquareText,
  MousePointerClick,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type FlowStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const promiseFlow: FlowStep[] = [
  { title: 'Ad Hook', subtitle: 'Kéo chú ý bằng một nỗi đau hoặc nhu cầu', icon: MessageSquareText },
  { title: 'Ad Promise', subtitle: 'Hứa một hướng giải quyết', icon: Sparkles },
  { title: 'Landing Hero', subtitle: 'Xác nhận đúng vấn đề', icon: LayoutTemplate },
  { title: 'Proof', subtitle: 'Case, demo, hình thật, lý do tin', icon: ShieldCheck, highlight: true },
  { title: 'CTA', subtitle: 'Hành động rõ', icon: MousePointerClick },
  { title: 'Form', subtitle: 'Thu đúng dữ liệu', icon: FormInput },
  { title: 'Sales Handoff', subtitle: 'Sales biết cần follow-up thế nào', icon: BriefcaseBusiness, highlight: true },
];

function ResponsiveFlow({ steps, desktopColumns }: { steps: FlowStep[]; desktopColumns: 4 | 7 }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${desktopColumns === 7 ? 'lg:grid-cols-7' : 'lg:grid-cols-4'}`}>
      {steps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
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
              <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
            <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
          </section>
          {index < steps.length - 1 && (
            <>
              <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
              {(index + 1) % desktopColumns !== 0 && (
                <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export function AdPromiseToLandingActionVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Message continuity</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Từ lời hứa trong ads đến hành động</h3>
        <div className="mt-6">
          <ResponsiveFlow steps={promiseFlow} desktopColumns={7} />
        </div>
      </div>
      <Caption>Landing page tốt giữ liền mạch từ hook trong ads đến proof, CTA, form và sales follow-up.</Caption>
    </figure>
  );
}

const beautifulPage = ['Layout ổn', 'Hình ảnh tốt', 'Copy mượt', 'Nhiều section', 'Brand nhìn chỉn chu'];
const adReadyPage = [
  'Message match với creative',
  'Hero rõ trong vài giây đầu',
  'Proof đúng lời hứa',
  'CTA và form rõ',
  'Mobile nhanh, dễ dùng',
  'Tracking được từng bước',
  'Sales nhận đủ context',
];

function ComparisonColumn({
  title,
  items,
  featured,
}: {
  title: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <section
      className={`rounded-2xl border p-5 sm:p-6 ${
        featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
      }`}
    >
      <div className="flex items-center gap-3">
        {featured ? (
          <Gauge className="h-5 w-5 text-brand-accent" aria-hidden="true" />
        ) : (
          <LayoutTemplate className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
        )}
        <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">{title}</h3>
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => {
          const isActionSignal = featured && index >= items.length - 2;
          return (
            <div key={item} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  isActionSignal ? 'bg-brand-highlight text-white' : featured ? 'bg-brand-accent text-white' : 'bg-brand-surface text-brand-soft-text'
                }`}
              >
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

export function BeautifulPageVsAdReadyPageVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <ComparisonColumn title="Page nhìn đẹp" items={beautifulPage} />
        <ComparisonColumn title="Page chịu được ads" items={adReadyPage} featured />
      </div>
      <Caption>
        Page đẹp là chưa đủ. Page chạy ads phải giữ được mạch từ creative, chuyển đổi được hành động và bàn giao được dữ liệu cho sales.
      </Caption>
    </figure>
  );
}

const signalFlow: FlowStep[] = [
  { title: 'Visit', subtitle: 'Sessions / source', icon: SearchCheck },
  { title: 'Engage', subtitle: 'Scroll / time / section view', icon: Gauge },
  { title: 'CTA Click', subtitle: 'Button click', icon: MousePointerClick },
  { title: 'Form Start', subtitle: 'Intent nhẹ', icon: FormInput },
  { title: 'Form Submit', subtitle: 'Lead', icon: FileCheck2 },
  { title: 'Contacted', subtitle: 'Sales liên hệ được', icon: Send, highlight: true },
  { title: 'Qualified', subtitle: 'Đúng nhu cầu / tệp', icon: UserCheck, highlight: true },
  { title: 'Next Action', subtitle: 'Hẹn lại, báo giá, demo', icon: BadgeCheck, highlight: true },
];

export function LandingPageSignalAfterSubmitVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Downstream signals</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Đọc landing page sau form submit</h3>
          </div>
        </div>
        <div className="mt-6">
          <ResponsiveFlow steps={signalFlow} desktopColumns={4} />
        </div>
        <div className="mt-6 rounded-2xl border border-brand-highlight/20 bg-brand-highlight-soft px-4 py-3">
          <p className="text-center text-[12px] font-bold leading-[1.55] text-brand-secondary">
            Đừng đánh giá landing page chỉ bằng form submit. Hãy đọc tiếp contacted, qualified và next action.
          </p>
        </div>
      </div>
      <Caption>Landing page tốt không chỉ tạo submit. Nó tạo lead mà sales có thể hiểu, liên hệ và đẩy tới bước tiếp theo.</Caption>
    </figure>
  );
}
