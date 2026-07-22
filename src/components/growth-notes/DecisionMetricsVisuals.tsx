import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Eye,
  FileQuestion,
  FormInput,
  Gauge,
  Lightbulb,
  MousePointerClick,
  Search,
  Target,
} from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const vanityItems = [
  'Dễ nhìn đẹp trong report',
  'Hữu ích để đọc bối cảnh',
  'Thường nằm ở đầu phễu',
  'Khó kết luận nếu đứng một mình',
  'Reach, impression, click, traffic, like',
];

const decisionItems = [
  'Gần hành động hơn',
  'Gắn với quyết định cụ thể',
  'Nối được với lead / sales / outcome',
  'Giúp chốt giữ, sửa, tắt, tăng, test',
  'Lead quality, quote rate, won/lost, revenue',
];

export function VanityVsDecisionMetricsVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Eye className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Vanity metrics</h3>
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
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Decision metrics</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {decisionItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index === 3 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Vanity metrics không vô dụng. Chúng chỉ nguy hiểm khi team dùng chúng để đưa ra những quyết định mà chúng chưa đủ sức hỗ trợ.
      </Caption>
    </figure>
  );
}

const ladderLevels = [
  {
    title: 'Context metrics',
    subtitle: 'Hiểu bối cảnh',
    examples: 'Reach, impression, traffic',
    icon: Eye,
  },
  {
    title: 'Diagnostic metrics',
    subtitle: 'Tìm đoạn cần kiểm tra',
    examples: 'CTR, CPC, CTA click, form start',
    icon: Search,
  },
  {
    title: 'Conversion metrics',
    subtitle: 'Đo tín hiệu hành động',
    examples: 'Contact, lead, purchase, booking',
    icon: FormInput,
  },
  {
    title: 'Decision metrics',
    subtitle: 'Chốt hành động tuần sau',
    examples: 'Qualified, quote rate, won/lost, revenue',
    icon: Target,
    highlight: true,
  },
];

export function MetricDecisionLadderVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Metric role ladder</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Từ bối cảnh đến quyết định</h3>
        </div>
        <div className="grid gap-3 md:grid-cols-4 md:items-end">
          {ladderLevels.map(({ title, subtitle, examples, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                highlight
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
              style={{ minHeight: `${132 + index * 18}px` }}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-semibold text-brand-secondary">{subtitle}</p>
              <p className="mt-4 border-t border-brand-border pt-3 text-[10px] font-medium leading-[1.5] text-brand-soft-text">{examples}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một dashboard tốt không bỏ qua metric đầu phễu, nhưng phải biết metric đó đang đóng vai trò bối cảnh, chẩn đoán hay quyết định.
      </Caption>
    </figure>
  );
}

const metricTraps = [
  { metric: 'Reach tăng', trap: 'Tưởng brand/campaign tốt hơn', check: 'Có đúng tệp không?', icon: Eye },
  { metric: 'Click nhiều', trap: 'Tưởng ads hiệu quả', check: 'Có contact/lead không?', icon: MousePointerClick },
  { metric: 'CTR cao', trap: 'Tưởng message đúng', check: 'Lead có chất lượng không?', icon: Gauge },
  { metric: 'Traffic tăng', trap: 'Tưởng website tốt hơn', check: 'CTA/form/contact có tăng không?', icon: BarChart3 },
  { metric: 'CPL thấp', trap: 'Tưởng campaign đáng scale', check: 'Qualified/outcome có tốt không?', icon: CircleDollarSign },
];

export function VanityMetricTrapVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {metricTraps.map(({ metric, trap, check, icon: Icon }, index) => (
          <section key={metric} className={`rounded-2xl border border-brand-border bg-brand-bg p-5 ${index === metricTraps.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <div className="flex items-center justify-between gap-3">
              <Icon className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-brand-highlight" />
            </div>
            <h3 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{metric}</h3>
            <p className="mt-3 text-[11px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Bẫy</p>
            <p className="mt-1 text-[12px] font-medium leading-[1.5] text-brand-secondary">{trap}</p>
            <div className="mt-4 rounded-xl border border-brand-accent/20 bg-brand-accent-soft p-3">
              <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-accent">Check</p>
              <p className="mt-1 text-[12px] font-bold leading-[1.5] text-brand-secondary">{check}</p>
            </div>
          </section>
        ))}
      </div>
      <Caption>
        Vanity metric thường gây sai lệch khi team nhảy thẳng từ số đẹp sang kết luận lớn mà chưa kiểm tra tín hiệu phía sau.
      </Caption>
    </figure>
  );
}

const decisionFlow = [
  { title: 'Metric', subtitle: 'Số đang thay đổi', icon: BarChart3 },
  { title: 'Question', subtitle: 'Câu hỏi cần hỏi', icon: FileQuestion },
  { title: 'Diagnosis', subtitle: 'Đoạn nào đang lệch?', icon: Search },
  { title: 'Decision', subtitle: 'Giữ, sửa, tắt, tăng, test', icon: Lightbulb, highlight: true },
];

const decisionExamples = [
  ['Traffic tăng', 'Kiểm tra contact/lead', 'Sửa landing/CTA nếu cần'],
  ['Lead tăng', 'Kiểm tra qualified', 'Chỉnh targeting/offer/form'],
  ['CPL giảm', 'Kiểm tra outcome', 'Không scale nếu quality giảm'],
  ['Revenue giảm', 'Kiểm tra funnel', 'Xác định nghẽn sales/marketing'],
];

export function MetricToDecisionMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {decisionFlow.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h3>
                <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < decisionFlow.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          {decisionExamples.map(([metric, diagnosis, decision]) => (
            <section key={metric} className="grid gap-2 rounded-2xl border border-brand-border bg-brand-bg p-4 text-[11px] md:grid-cols-[0.8fr_1fr_1.2fr] md:items-center">
              <p className="font-bold text-brand-accent">{metric}</p>
              <p className="font-semibold text-brand-secondary">{diagnosis}</p>
              <p className="rounded-xl bg-brand-highlight-soft px-3 py-2 font-semibold text-brand-secondary">{decision}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một metric chỉ có giá trị vận hành khi nó được nối với câu hỏi, chẩn đoán và quyết định cụ thể.
      </Caption>
    </figure>
  );
}

const decisionChecklist = [
  'Metric này trả lời câu hỏi nào?',
  'Metric này phục vụ quyết định gì?',
  'Nó có gần lead / sales / outcome không?',
  'Có thể tách theo source / campaign / landing page không?',
  'Có đối chiếu được với CRM / Sheet không?',
  'Có bị ảnh hưởng bởi tracking lỗi không?',
  'Có đủ ổn định để so sánh theo tuần không?',
  'Ai chịu trách nhiệm đọc metric này?',
  'Sau khi metric thay đổi, team sẽ làm gì?',
];

export function DecisionMetricChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist chọn decision metrics</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {decisionChecklist.map((item, index) => {
            const isAction = index === 1 || index === decisionChecklist.length - 1;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                } ${index === decisionChecklist.length - 1 ? 'md:col-span-2' : ''}`}
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
        Một metric xứng đáng nằm trên dashboard chính khi nó giúp team trả lời câu hỏi và chốt hành động rõ hơn.
      </Caption>
    </figure>
  );
}
