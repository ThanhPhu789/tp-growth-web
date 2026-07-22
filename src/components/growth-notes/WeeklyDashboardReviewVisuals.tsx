import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileQuestion,
  Flag,
  FormInput,
  Gauge,
  Lightbulb,
  MousePointerClick,
  Search,
  Target,
  UserRound,
  Users,
  WalletCards,
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

const readingSteps: FlowStep[] = [
  { title: 'Context', subtitle: 'Tuần này có gì thay đổi?', icon: CalendarDays },
  { title: 'Spend', subtitle: 'Tiền đi vào đâu?', icon: WalletCards },
  { title: 'Traffic', subtitle: 'Khách đến từ kênh nào?', icon: MousePointerClick },
  { title: 'Contact / Lead', subtitle: 'Khách để lại tín hiệu gì?', icon: FormInput },
  { title: 'Quality', subtitle: 'Lead có đúng nhu cầu không?', icon: Users },
  { title: 'Outcome', subtitle: 'Có báo giá/cơ hội/doanh thu không?', icon: CircleDollarSign },
  { title: 'Action', subtitle: 'Tuần sau làm gì?', icon: Target, highlight: true },
];

export function WeeklyDashboardReadingFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Weekly reading flow</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Đọc từ bối cảnh đến hành động</h3>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-4 md:gap-3">
          {readingSteps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 rounded-2xl border p-4 ${
                  highlight
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                } ${index >= 4 ? 'md:mt-3' : ''}`}
              >
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < readingSteps.length - 1 && (
                <div className="flex h-9 items-center justify-center text-brand-accent md:hidden">
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Đọc dashboard theo thứ tự giúp team đi từ bối cảnh đến hành động, thay vì phản ứng quá nhanh với một chỉ số riêng lẻ.
      </Caption>
    </figure>
  );
}

const metricRows = [
  {
    metric: 'Spend tăng',
    question: 'Tăng ở kênh nào, có chủ đích không?',
    action: 'Giữ ngân sách hoặc phân bổ lại.',
  },
  {
    metric: 'Traffic tăng, lead không tăng',
    question: 'Landing page, CTA hoặc form có vấn đề không?',
    action: 'Audit landing page và contact point.',
  },
  {
    metric: 'Lead tăng, qualified giảm',
    question: 'Tệp traffic hoặc offer có lệch không?',
    action: 'Sửa targeting, message hoặc form field.',
  },
  {
    metric: 'CPL đẹp, sales khó xử lý',
    question: 'Lead đúng nhu cầu và được follow-up kịp không?',
    action: 'Kiểm tra lead quality và SLA sales.',
  },
  {
    metric: 'Revenue giảm',
    question: 'Rơi ở lead, tư vấn, báo giá hay chốt?',
    action: 'Review sales status theo nguồn.',
  },
];

export function MetricQuestionActionVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-4 shadow-brand-soft sm:p-6 md:p-8">
        <div className="hidden grid-cols-[0.9fr_1.3fr_1.1fr] gap-3 border-b border-brand-border pb-3 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text md:grid">
          <span>Metric</span>
          <span>Câu hỏi cần hỏi</span>
          <span>Hành động có thể chốt</span>
        </div>
        <div className="space-y-3 md:mt-3">
          {metricRows.map(({ metric, question, action }) => (
            <section key={metric} className="grid gap-3 rounded-2xl border border-brand-border bg-brand-bg p-4 md:grid-cols-[0.9fr_1.3fr_1.1fr]">
              <div>
                <p className="mb-1 text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:hidden">Metric</p>
                <p className="text-[12px] font-bold leading-[1.5] text-brand-accent">{metric}</p>
              </div>
              <div>
                <p className="mb-1 text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:hidden">Câu hỏi</p>
                <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{question}</p>
              </div>
              <div className="rounded-xl border border-brand-highlight/20 bg-brand-highlight-soft px-3 py-2.5 md:-my-1">
                <p className="mb-1 text-[9px] font-black uppercase tracking-[0.12em] text-brand-highlight md:hidden">Action</p>
                <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{action}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Mỗi metric nên kéo theo một câu hỏi chẩn đoán. Nếu không có câu hỏi, dashboard rất dễ biến thành nơi chỉ xem số tăng giảm.
      </Caption>
    </figure>
  );
}

const diagnosisCards = [
  {
    title: 'Spend tăng, lead không tăng',
    checks: ['Traffic', 'Landing page', 'Form / contact'],
    icon: WalletCards,
  },
  {
    title: 'Traffic tăng, contact thấp',
    checks: ['Message match', 'CTA', 'Offer'],
    icon: MousePointerClick,
  },
  {
    title: 'Lead tăng, quality giảm',
    checks: ['Targeting', 'Offer', 'Form filter'],
    icon: FormInput,
  },
  {
    title: 'Quality ổn, revenue chưa lên',
    checks: ['Follow-up', 'Quote', 'Sales cycle'],
    icon: CircleDollarSign,
  },
];

export function SignalDiagnosisMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        {diagnosisCards.map(({ title, checks, icon: Icon }, index) => (
          <section key={title} className="rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-surface text-brand-accent shadow-brand-soft">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Tình huống 0{index + 1}</p>
                <h3 className="mt-1 font-heading text-[15px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-brand-highlight/20 bg-brand-highlight-soft p-4">
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-brand-highlight">Check first</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {checks.map((check) => (
                  <span key={check} className="rounded-full bg-brand-surface px-3 py-1.5 text-[10px] font-bold text-brand-secondary">
                    {check}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <Caption>
        Khi số thay đổi, dashboard nên giúp team khoanh vùng đoạn cần kiểm tra trước: traffic, landing page, form, lead quality hay sales follow-up.
      </Caption>
    </figure>
  );
}

const agendaItems = [
  { time: '5 phút', title: 'Bối cảnh tuần', icon: CalendarDays },
  { time: '10 phút', title: 'Snapshot chính', icon: Gauge },
  { time: '15 phút', title: 'Chẩn đoán điểm lệch lớn', icon: Search },
  { time: '10 phút', title: 'Chốt action tuần sau', icon: Lightbulb, highlight: true },
  { time: '5 phút', title: 'Owner, deadline, metric theo dõi', icon: UserRound, highlight: true },
];

export function DashboardReviewMeetingAgendaVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Clock3 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">45-minute review</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Weekly dashboard agenda</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch">
          {agendaItems.map(({ time, title, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <p className={`mt-4 text-[10px] font-black uppercase tracking-[0.12em] ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`}>{time}</p>
                <h4 className="mt-2 font-heading text-[12px] font-extrabold leading-[1.45] text-brand-primary">{title}</h4>
              </section>
              {index < agendaItems.length - 1 && (
                <div className="flex h-8 items-center justify-center text-brand-accent md:h-auto md:w-6">
                  <ArrowDown className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Một buổi weekly review tốt không cần đọc hết mọi biểu đồ. Nó cần giúp team chốt được vấn đề ưu tiên, hành động tiếp theo và cách đo lại.
      </Caption>
    </figure>
  );
}

const actionLogItems = [
  { label: 'Tuần review', icon: CalendarDays },
  { label: 'Vấn đề chính', icon: Flag },
  { label: 'Giả thuyết nguyên nhân', icon: FileQuestion },
  { label: 'Hành động cần làm', icon: Lightbulb, highlight: true },
  { label: 'Người phụ trách', icon: UserRound },
  { label: 'Deadline', icon: Clock3 },
  { label: 'Metric đo lại', icon: BarChart3, highlight: true },
  { label: 'Kết quả tuần sau', icon: ClipboardCheck },
];

export function WeeklyActionLogChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Action log sau khi đọc dashboard</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {actionLogItems.map(({ label, icon: Icon, highlight }) => (
            <div key={label} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'}`}>
              <div className="flex items-center gap-3">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-surface ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="text-[12px] font-bold text-brand-secondary">{label}</p>
                <Check className={`ml-auto h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              </div>
              <div className="mt-3 h-px w-full bg-brand-border" />
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Action log giúp dashboard trở thành một vòng lặp học tập hằng tuần, không phải một màn hình xem số rồi để đó.
      </Caption>
    </figure>
  );
}
