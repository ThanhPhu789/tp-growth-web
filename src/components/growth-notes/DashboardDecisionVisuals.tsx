import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Database,
  FileQuestion,
  Filter,
  FormInput,
  Gauge,
  Lightbulb,
  MousePointerClick,
  RefreshCw,
  Search,
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

const vanityItems = [
  'Nhiều chart nhưng không rõ câu hỏi',
  'Chỉ xem tổng traffic / tổng lead',
  'Không nối sales status',
  'Không biết đoạn nào đang rơi',
  'Không chốt được hành động tuần sau',
];

const decisionItems = [
  'Mỗi chart trả lời một câu hỏi',
  'Tách nguồn, campaign, landing page',
  'Có quality / status / outcome',
  'Chỉ ra điểm nghẽn rõ hơn',
  'Chốt được 1–3 việc cần làm tiếp',
];

export function VanityVsDecisionDashboardVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Dashboard để nhìn cho đẹp</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {vanityItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Dashboard để ra quyết định</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {decisionItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2
                  className={`mt-0.5 h-4 w-4 shrink-0 ${index === decisionItems.length - 1 ? 'text-brand-highlight' : 'text-brand-accent'}`}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Dashboard tốt không phải dashboard có nhiều biểu đồ hơn. Dashboard tốt là dashboard giúp team biết nên quyết định gì tiếp theo.
      </Caption>
    </figure>
  );
}

const dashboardLayers = [
  { title: 'Traffic', subtitle: 'Source, campaign, landing page', icon: Filter },
  { title: 'Engagement', subtitle: 'CTA, Zalo, hotline, Messenger', icon: MousePointerClick },
  { title: 'Lead', subtitle: 'Form submit, contact, lead type', icon: FormInput },
  { title: 'Sales Status', subtitle: 'contacted, qualified, quoted', icon: Users },
  { title: 'Outcome', subtitle: 'opportunity, won/lost, revenue', icon: CircleDollarSign, highlight: true },
];

export function WeeklyMarketingDashboardMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Weekly dashboard map</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Năm lớp của dòng dữ liệu</h3>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch">
          {dashboardLayers.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section
                className={`flex min-h-32 min-w-0 flex-1 flex-col rounded-2xl border p-4 ${
                  highlight
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface shadow-brand-soft ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h4 className="mt-5 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < dashboardLayers.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Một dashboard marketing tối thiểu nên giúp team nhìn từ traffic đến lead, rồi nối tiếp sang sales status và outcome.
      </Caption>
    </figure>
  );
}

type ActionStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const actionSteps: ActionStep[] = [
  { title: 'Metric changes', subtitle: 'Traffic, lead, CPL, quality thay đổi', icon: Gauge },
  { title: 'Diagnosis question', subtitle: 'Vì sao số thay đổi?', icon: FileQuestion },
  { title: 'Bottleneck', subtitle: 'Traffic, landing, form, sales hay tracking?', icon: Search },
  { title: 'Action', subtitle: 'Sửa 1–3 việc trong tuần', icon: Lightbulb, highlight: true },
];

const actionExamples = [
  ['Traffic tăng, lead không tăng', 'Kiểm tra landing / CTA / form'],
  ['Lead tăng, qualified giảm', 'Kiểm tra targeting / offer / form field'],
  ['CPL đẹp, sales không chốt', 'Kiểm tra lead quality / follow-up'],
];

export function MetricsToActionsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {actionSteps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h3>
                <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < actionSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {actionExamples.map(([signal, action]) => (
            <section key={signal} className="rounded-2xl border border-brand-border bg-brand-bg p-4">
              <p className="text-[12px] font-bold leading-[1.5] text-brand-primary">{signal}</p>
              <div className="my-3 h-px bg-brand-border" />
              <p className="flex items-start gap-2 text-[11px] font-semibold leading-[1.5] text-brand-secondary">
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-highlight" aria-hidden="true" />
                <span>{action}</span>
              </p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Dashboard có giá trị khi nó chuyển số liệu thành câu hỏi chẩn đoán và hành động cụ thể, không dừng ở việc báo số tăng hay giảm.
      </Caption>
    </figure>
  );
}

const decisionLoopSteps: ActionStep[] = [
  { title: 'Collect Data', subtitle: 'Ads, website, CRM, sales', icon: Database },
  { title: 'Read Signals', subtitle: 'Traffic, lead, status, outcome', icon: BarChart3 },
  { title: 'Diagnose', subtitle: 'Tìm điểm nghẽn', icon: Search },
  { title: 'Decide', subtitle: 'Giữ, sửa, tắt, tăng, test', icon: Target, highlight: true },
  { title: 'Review Next Week', subtitle: 'Kiểm tra tác động', icon: RefreshCw },
];

export function DashboardDecisionLoopVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <RefreshCw className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Weekly rhythm</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Dashboard decision loop</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch">
          {decisionLoopSteps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < decisionLoopSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-end">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold text-brand-accent">
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
            Lặp lại với dữ liệu tuần kế tiếp
          </p>
        </div>
      </div>
      <Caption>
        Dashboard nên tạo ra một vòng lặp quản trị hằng tuần: thu dữ liệu, đọc tín hiệu, chẩn đoán, quyết định và kiểm tra lại.
      </Caption>
    </figure>
  );
}

const founderChecklist = [
  'Dashboard trả lời câu hỏi nào?',
  'Có tách source / campaign / landing page?',
  'Có đo contact / lead đúng không?',
  'Có sales status cơ bản?',
  'Có outcome hoặc proxy gần outcome?',
  'Có ghi chú bối cảnh tuần?',
  'Có view cho founder / marketing / sales?',
  'Có người chịu trách nhiệm update?',
  'Sau khi xem có chốt được hành động không?',
];

export function FounderDashboardChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist cho dashboard marketing dùng hằng tuần
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {founderChecklist.map((item, index) => {
            const isAction = index === founderChecklist.length - 1;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft md:col-span-2'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isAction ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'}`}>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="pt-0.5 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>
        Dashboard nên được kiểm tra bằng câu hỏi cuối cùng: sau khi xem xong, team có chốt được hành động rõ hơn không?
      </Caption>
    </figure>
  );
}
