import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Gauge,
  LayoutTemplate,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  RefreshCw,
  Route,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const fastAiTasks = [
  'Caption / hook',
  'Outline / draft',
  'Biến thể creative',
  'Tóm tắt tài liệu',
  'Landing page draft',
  'Phân loại data cơ bản',
];

const operatorSkills = [
  'Business context',
  'Customer insight',
  'Offer / positioning',
  'Campaign direction',
  'Quality control',
  'Decision from data',
];

export function AITaskVsOperatorSkillVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <BrainCircuit className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">AI làm rất nhanh</h3>
          </div>
          <div className="mt-5 space-y-3">
            {fastAiTasks.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-accent/20 bg-brand-surface p-3.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Marketer vẫn phải giữ</h3>
          </div>
          <div className="mt-5 space-y-3">
            {operatorSkills.map((item, index) => {
              const isAction = index === operatorSkills.length - 1;
              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                    isAction
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft'
                      : 'border-brand-border bg-brand-surface'
                  }`}
                >
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-soft-text'}`} aria-hidden="true" />
                  <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Caption>
        AI làm output rất nhanh. Nhưng marketer vẫn phải giữ phần context, direction, kiểm chất lượng và quyết định.
      </Caption>
    </figure>
  );
}

type CoordinatorRole = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const coordinatorRoles: CoordinatorRole[] = [
  { title: 'Business Context', subtitle: 'Hiểu sản phẩm, khách, ưu tiên', icon: Target },
  { title: 'Briefing', subtitle: 'Giao việc rõ cho AI / team', icon: ClipboardCheck },
  { title: 'Content & Creative', subtitle: 'Tạo biến thể, kiểm angle', icon: Megaphone },
  { title: 'Landing / Vibe Coding', subtitle: 'Page, section, CTA, form', icon: LayoutTemplate },
  { title: 'Tracking / Dashboard', subtitle: 'Đọc tín hiệu, không đo mù', icon: Gauge, action: true },
  { title: 'CRM / Sales Feedback', subtitle: 'Lead quality, status, follow-up', icon: Database, action: true },
  { title: 'Decision', subtitle: 'Giữ, sửa, tắt, tăng', icon: BarChart3, action: true },
];

export function AIMarketerCoordinatorMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <BrainCircuit className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-blue-100">System coordinator</p>
          <h3 className="mt-2 font-heading text-[20px] font-extrabold">AI-enabled Marketer</h3>
        </section>
        <div className="mx-auto h-6 w-px bg-brand-accent/30" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coordinatorRoles.map(({ title, subtitle, icon: Icon, action }) => (
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
        Marketer thời AI không chỉ làm nội dung. Họ điều phối context, brief, output, data và quyết định.
      </Caption>
    </figure>
  );
}

type LoopStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const operatingLoop: LoopStep[] = [
  { title: 'Diagnose', subtitle: 'Đang nghẽn ở đâu?', icon: Lightbulb },
  { title: 'Brief AI', subtitle: 'Context, goal, constraint', icon: ClipboardCheck },
  { title: 'Produce', subtitle: 'Content, page, ads, script', icon: FileText },
  { title: 'Launch small', subtitle: 'Test có kiểm soát', icon: MousePointerClick },
  { title: 'Read signal', subtitle: 'Data, CRM, sales feedback', icon: BarChart3, action: true },
  { title: 'Improve', subtitle: 'Sửa, giữ, tắt, tăng', icon: RefreshCw, action: true },
];

export function AIMarketingOperatingLoopVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {operatingLoop.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < operatingLoop.length - 1 && (
                <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-6">
                  <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent-soft px-4 py-2 text-brand-accent">
          <Route className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-[10px] font-black uppercase tracking-[0.12em]">Repeat with real signal</span>
        </div>
      </div>
      <Caption>
        Marketer biết điều phối AI dùng AI để rút ngắn vòng lặp học, không chỉ để tạo thêm output.
      </Caption>
    </figure>
  );
}
