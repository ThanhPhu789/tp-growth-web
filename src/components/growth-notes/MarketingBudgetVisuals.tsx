import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Database,
  FileCheck2,
  Gauge,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
  Route,
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

type BudgetPriority = {
  title: string;
  priority: string;
  icon: LucideIcon;
  action?: boolean;
};

const budgetPriorities: BudgetPriority[] = [
  { title: 'Offer chưa rõ', priority: 'Làm rõ message, proof, CTA', icon: Target },
  { title: 'Landing page yếu', priority: 'Sửa hero, form, proof, mobile', icon: LayoutTemplate },
  { title: 'Tracking mù', priority: 'Gắn event, UTM, dashboard tối thiểu', icon: Gauge, action: true },
  { title: 'Lead bị rơi', priority: 'CRM sheet, status, follow-up owner', icon: Database, action: true },
  { title: 'Nền đã ổn', priority: 'Test ads nhỏ, content angle, campaign', icon: Megaphone },
];

export function BudgetBottleneckPriorityVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <Route className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-blue-100">Choose one bottleneck</p>
          <h3 className="mt-2 font-heading text-[21px] font-extrabold">20tr/tháng</h3>
        </section>
        <div className="mx-auto h-6 w-px bg-brand-accent/30" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {budgetPriorities.map(({ title, priority, icon: Icon, action }) => (
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
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Priority</p>
              <p className="mt-2 text-[11px] font-medium leading-[1.55] text-brand-secondary">{priority}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Cùng là 20tr/tháng, nhưng ngân sách nên đi vào điểm nghẽn khác nhau tuỳ hệ thống đang thiếu gì.
      </Caption>
    </figure>
  );
}

const budgetScenarios = [
  {
    title: 'Chưa có nền rõ',
    focus: 'Offer, landing page, tracking, proof',
    avoid: 'Đổ mạnh vào ads',
    icon: Target,
  },
  {
    title: 'Có page nhưng lead rơi',
    focus: 'CRM, form, status, follow-up, sales script',
    avoid: 'Tăng traffic khi chưa xử lý lead',
    icon: Users,
  },
  {
    title: 'Nền tạm ổn',
    focus: 'Ads test, creative angle, landing iteration, review',
    avoid: 'Test quá nhiều kênh cùng lúc',
    icon: BarChart3,
  },
];

export function TwentyMillionScenarioSplitVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 lg:grid-cols-3 md:p-8">
        {budgetScenarios.map(({ title, focus, avoid, icon: Icon }, index) => (
          <section key={title} className="rounded-brand-card border border-brand-border bg-brand-bg p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-[10px] font-black tracking-[0.14em] text-brand-soft-text">0{index + 1}</span>
            </div>
            <h3 className="mt-5 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
            <div className="mt-4 rounded-xl border border-brand-accent/20 bg-brand-accent-soft p-3.5">
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-accent">Focus</p>
              <p className="mt-2 text-[12px] font-semibold leading-[1.55] text-brand-secondary">{focus}</p>
            </div>
            <div className="mt-3 rounded-xl border border-brand-highlight/20 bg-brand-highlight-soft p-3.5">
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-highlight">Avoid</p>
              <p className="mt-2 text-[12px] font-semibold leading-[1.55] text-brand-secondary">{avoid}</p>
            </div>
          </section>
        ))}
      </div>
      <Caption>
        20tr/tháng nên được dùng theo trạng thái hiện tại của hệ thống, không theo cảm giác kênh nào đang hot.
      </Caption>
    </figure>
  );
}

type WeekItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const learningTimeline: WeekItem[] = [
  { title: 'Week 1 · Setup nền', subtitle: 'Offer, page, form, tracking, CRM', icon: FileCheck2 },
  { title: 'Week 2 · Launch test nhỏ', subtitle: 'Content/ads angle, traffic, CTA', icon: MousePointerClick },
  { title: 'Week 3 · Đọc lead flow', subtitle: 'Source, form, sales contact, status', icon: Database, action: true },
  { title: 'Week 4 · Review quyết định', subtitle: 'Giữ, sửa, tắt, tăng, chuyển hướng', icon: CalendarDays, action: true },
];

export function ThirtyDayBudgetLearningVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {learningTimeline.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-5 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-2 text-[11px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
              </section>
              {index < learningTimeline.length - 1 && (
                <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-6">
                  <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Với ngân sách nhỏ, 30 ngày đầu không chỉ để tạo lead. Nó nên giúp team biết hệ thống đang rơi ở đâu.
      </Caption>
    </figure>
  );
}
