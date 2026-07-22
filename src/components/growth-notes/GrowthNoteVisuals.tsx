import {
  AlertCircle,
  Activity,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Code2,
  Database,
  Globe2,
  LayoutDashboard,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  Send,
  Tag,
  Users,
  WalletCards,
  Zap,
} from 'lucide-react';

const pipelineSteps = [
  { title: 'Traffic', subtitle: 'Người nhìn thấy thông điệp' },
  { title: 'Lead', subtitle: 'Người để lại tín hiệu' },
  { title: 'Qualified Lead', subtitle: 'Nhu cầu tương đối phù hợp' },
  { title: 'Consultation / Quote', subtitle: 'Đã tư vấn hoặc báo giá' },
  { title: 'Deal / Revenue', subtitle: 'Có outcome kinh doanh', isOutcome: true },
];

export function LeadPipelineVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {pipelineSteps.map((step, index) => (
            <div key={step.title} className="contents">
              <div
                className={`flex min-h-28 flex-1 flex-col justify-between rounded-2xl border p-4 ${
                  step.isOutcome
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">
                  Bước {index + 1}
                </span>
                <div className="mt-5">
                  <p className="font-heading text-[14px] font-extrabold leading-tight text-brand-primary">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.45] text-brand-soft-text">{step.subtitle}</p>
                </div>
              </div>
              {index < pipelineSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-8">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Lead chỉ là một điểm trong pipeline. Muốn biết marketing có tạo tăng trưởng thật không, cần nhìn tiếp các bước
        sau lead.
      </figcaption>
    </figure>
  );
}

const volumeLeadItems = [
  'CPL nhìn có vẻ đẹp',
  'Nhiều người hỏi giá',
  'Sales mất nhiều thời gian lọc',
  'Khó tư vấn sâu',
  'Dễ khiến team tối ưu sai hướng',
];

const qualityLeadItems = [
  'Có nhu cầu rõ hơn',
  'Đúng khu vực/phân khúc',
  'Sales dễ bắt đầu cuộc gọi',
  'Có khả năng bước vào tư vấn/báo giá',
  'Giúp team tối ưu theo outcome',
];

const systemBreakpoints = [
  { title: 'Strategy', subtitle: 'Chưa rõ bán cho ai' },
  { title: 'Content', subtitle: 'Nói chưa cùng một hướng' },
  { title: 'Ads', subtitle: 'Tối ưu theo tín hiệu lệch' },
  { title: 'Landing Page', subtitle: 'Không tiếp nối lời hứa' },
  { title: 'Sales', subtitle: 'Thiếu context khi gọi' },
  { title: 'Tracking', subtitle: 'Không biết rơi ở đâu' },
  { title: 'Weekly Review', subtitle: 'Có số nhưng không chốt hành động' },
];

export function SystemBreakpointsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="grid gap-0 md:grid-cols-4 md:gap-x-8 md:gap-y-6">
          {systemBreakpoints.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex min-h-28 flex-col justify-between rounded-2xl border border-brand-border bg-brand-bg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">
                    Điểm {index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-brand-highlight" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <p className="font-heading text-[14px] font-extrabold leading-tight text-brand-primary">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.45] text-brand-soft-text">{step.subtitle}</p>
                </div>
              </div>
              {index < systemBreakpoints.length - 1 && (
                <div
                  className={`flex h-9 items-center justify-center text-brand-accent md:absolute md:h-6 md:w-8 ${
                    index === 3
                      ? 'md:-bottom-6 md:left-1/2 md:-translate-x-1/2 md:rotate-90'
                      : 'md:-right-8 md:top-1/2 md:-translate-y-1/2'
                  }`}
                >
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một campaign có thể không sai ở một điểm lớn. Nó thường chậm lại vì nhiều đoạn nối nhỏ không ăn khớp với
        nhau.
      </figcaption>
    </figure>
  );
}

const fragmentedCampaignItems = [
  'Strategy mơ hồ',
  'Content nói mỗi bài một hướng',
  'Ads tối ưu theo CPL',
  'Landing page không tiếp nối thông điệp',
  'Sales thiếu context',
  'Báo cáo chỉ ghi nhận số',
];

const continuousCampaignItems = [
  'Rõ tệp khách và vấn đề chính',
  'Content, ads, landing cùng một lời hứa',
  'Ads tối ưu theo chất lượng tín hiệu',
  'Landing page giải thích đúng điều khách vừa quan tâm',
  'Sales biết khách đến từ đâu và cần gì',
  'Báo cáo chốt được việc cần sửa tuần sau',
];

export function CampaignContinuityComparison() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <ComparisonCard title="Campaign rời rạc" items={fragmentedCampaignItems} variant="neutral" />
        <ComparisonCard title="Campaign có direction chung" items={continuousCampaignItems} variant="quality" />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Campaign tốt không chỉ cần một ý tưởng hay. Nó cần sự liên tục từ chiến lược, nội dung, quảng cáo, landing
        page, sales đến báo cáo.
      </figcaption>
    </figure>
  );
}

const diagnosticQuestions = [
  'Khách thấy gì đầu tiên?',
  'Họ hiểu lời hứa gì?',
  'Khi click vào, trang có tiếp nối lời hứa đó không?',
  'Khi để lại thông tin, sales có đủ context không?',
  'Khi review, team có biết điểm nào cần sửa trước không?',
];

export function BreakpointDiagnosticChecklist() {
  return (
    <aside className="my-10 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary md:text-[22px]">
          5 câu hỏi để tìm điểm gãy
        </h3>
      </div>
      <ol className="mt-6 space-y-3">
        {diagnosticQuestions.map((question, index) => (
          <li
            key={question}
            className="flex items-start gap-3 rounded-2xl border border-brand-border bg-brand-bg p-4 text-[15px] font-semibold leading-[1.55] text-brand-secondary"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent-soft text-[11px] font-black text-brand-accent">
              {index + 1}
            </span>
            <span>{question}</span>
          </li>
        ))}
      </ol>
      <p className="mt-6 border-t border-brand-border pt-5 text-[14px] font-semibold leading-[1.65] text-brand-primary">
        Không cần sửa tất cả cùng lúc. Việc quan trọng là biết điểm nào đang làm cả hệ thống chậm lại nhiều nhất.
      </p>
    </aside>
  );
}

export function LeadQualityComparison() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <ComparisonCard title="Lead nhiều" items={volumeLeadItems} variant="neutral" />
        <ComparisonCard title="Lead chất lượng" items={qualityLeadItems} variant="quality" />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Vấn đề không phải lead ít hay nhiều. Vấn đề là lead đó có đưa hệ thống tiến gần hơn đến doanh thu hay không.
      </figcaption>
    </figure>
  );
}

type ComparisonCardProps = {
  title: string;
  items: string[];
  variant: 'neutral' | 'quality';
};

function ComparisonCard({ title, items, variant }: ComparisonCardProps) {
  const isQuality = variant === 'quality';

  return (
    <div
      className={`rounded-2xl border p-5 ${
        isQuality ? 'border-brand-accent/20 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
      }`}
    >
      <p className={`font-heading text-[18px] font-extrabold ${isQuality ? 'text-brand-accent' : 'text-brand-primary'}`}>
        {title}
      </p>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14px] font-medium leading-[1.55] text-brand-secondary">
            {isQuality ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
            ) : (
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft-text" aria-hidden="true" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const dashboardComparison = {
  decorative: [
    'Nhiều chart nhưng không rõ câu hỏi',
    'Chỉ hiển thị số ads',
    'Có CPL nhưng thiếu chất lượng lead',
    'Không nối được sales/revenue',
    'Cuối buổi họp vẫn không biết sửa gì',
  ],
  decisive: [
    'Bắt đầu từ câu hỏi kinh doanh',
    'Nối traffic, lead, sales và outcome',
    'Có tín hiệu chất lượng lead',
    'Biết funnel đang rơi ở đâu',
    'Chốt được 1–3 việc cần sửa tuần sau',
  ],
};

export function DashboardComparisonVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <ComparisonCard title="Dashboard nhìn cho đẹp" items={dashboardComparison.decorative} variant="neutral" />
        <ComparisonCard title="Dashboard để ra quyết định" items={dashboardComparison.decisive} variant="quality" />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Dashboard tốt không phải là dashboard có nhiều số hơn. Dashboard tốt là dashboard giúp cuộc họp kết thúc bằng
        một quyết định rõ hơn.
      </figcaption>
    </figure>
  );
}

const dashboardGroups = [
  {
    title: 'Spend & Budget',
    icon: WalletCards,
    metrics: ['Budget used', 'Weekly pacing'],
  },
  {
    title: 'Lead & Source',
    icon: Users,
    metrics: ['Total leads', 'Top source'],
  },
  {
    title: 'Lead Quality',
    icon: BadgeCheck,
    metrics: ['Qualified rate', 'Invalid leads'],
  },
  {
    title: 'Sales Progress',
    icon: PhoneCall,
    metrics: ['Contacted', 'Quoted'],
  },
  {
    title: 'Revenue / Outcome',
    icon: CircleDollarSign,
    metrics: ['Deals / Opportunities', 'Revenue signal'],
    isOutcome: true,
  },
];

export function FounderDashboardMockup() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-heading text-[18px] font-extrabold tracking-[-0.02em] text-brand-primary">
              Founder dashboard view
            </p>
            <p className="mt-1 text-[13px] font-medium leading-[1.55] text-brand-soft-text">
              Chỉ giữ những nhóm số giúp ra quyết định.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-6">
          {dashboardGroups.map(({ title, icon: Icon, metrics, isOutcome }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 md:col-span-2 ${
                isOutcome
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft md:col-start-4'
                  : `border-brand-border bg-brand-bg ${index === 3 ? 'md:col-start-2' : ''}`
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`h-4 w-4 ${isOutcome ? 'text-brand-highlight' : 'text-brand-accent'}`}
                  aria-hidden="true"
                />
                <h3 className="font-heading text-[14px] font-extrabold text-brand-primary">{title}</h3>
              </div>
              <dl className="mt-5 space-y-3">
                {metrics.map((metric) => (
                  <div key={metric} className="flex items-center justify-between gap-3">
                    <dt className="text-[12px] font-medium text-brand-soft-text">{metric}</dt>
                    <dd className="text-[12px] font-black text-brand-secondary">—</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3 border-t border-brand-border pt-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-soft-text">So với tuần trước</dt>
                  <dd className="text-[11px] font-black text-brand-accent">+/−</dd>
                </div>
              </dl>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một dashboard cho founder nên bắt đầu từ câu hỏi quản trị, không bắt đầu từ việc nhét càng nhiều biểu đồ càng tốt.
      </figcaption>
    </figure>
  );
}

const dashboardDecisionSteps = [
  { title: 'Spend', subtitle: 'Tiền đang đi đâu?' },
  { title: 'Lead', subtitle: 'Có tạo tín hiệu không?' },
  { title: 'Qualified Lead', subtitle: 'Tín hiệu có đúng không?' },
  { title: 'Sales Action', subtitle: 'Team đã xử lý tới đâu?' },
  { title: 'Revenue', subtitle: 'Có outcome thật không?', isOutcome: true },
];

export function DashboardDecisionFlow() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {dashboardDecisionSteps.map((step, index) => (
            <div key={step.title} className="contents">
              <div
                className={`flex min-h-28 flex-1 flex-col justify-between rounded-2xl border p-4 ${
                  step.isOutcome
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <span
                  className={`text-[10px] font-black uppercase tracking-[0.16em] ${
                    step.isOutcome ? 'text-brand-highlight' : 'text-brand-accent'
                  }`}
                >
                  Bước {index + 1}
                </span>
                <div className="mt-5">
                  <p className="font-heading text-[14px] font-extrabold leading-tight text-brand-primary">{step.title}</p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.45] text-brand-secondary">{step.subtitle}</p>
                </div>
              </div>
              {index < dashboardDecisionSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-8">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Đọc dashboard theo thứ tự giúp founder tránh kết luận vội. Doanh thu giảm chưa chắc do ads, lead nhiều chưa chắc
        tốt, CPL rẻ chưa chắc đáng giữ.
      </figcaption>
    </figure>
  );
}

const weeklyKpiGroups = [
  { title: 'Traffic', subtitle: 'Đầu vào của hệ thống', icon: MousePointerClick },
  { title: 'Lead / Contact', subtitle: 'Tín hiệu quan tâm', icon: MessageSquareText },
  { title: 'Lead Quality', subtitle: 'Đúng nhu cầu hay chỉ nhiều số?', icon: BadgeCheck },
  { title: 'Sales Follow-up', subtitle: 'Lead đã được xử lý tới đâu?', icon: PhoneCall },
  { title: 'Outcome', subtitle: 'Cơ hội, đơn hàng, doanh thu', icon: CircleDollarSign, isOutcome: true },
];

export function WeeklyKpiGroupsVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-6 md:p-7">
        {weeklyKpiGroups.map(({ title, subtitle, icon: Icon, isOutcome }, index) => (
          <section
            key={title}
            className={`min-w-0 rounded-2xl border p-5 md:col-span-2 ${
              isOutcome
                ? 'border-brand-highlight/30 bg-brand-highlight-soft md:col-start-4'
                : `border-brand-accent/20 bg-brand-accent-soft ${index === 3 ? 'md:col-start-2' : ''}`
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface ${
                isOutcome ? 'text-brand-highlight' : 'text-brand-accent'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-2 text-[13px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
          </section>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Team nhỏ không cần nhìn quá nhiều số. Họ cần một bộ số đủ gọn để biết tuần này hệ thống đang nghẽn ở đâu.
      </figcaption>
    </figure>
  );
}

const weeklyScorecardRows = [
  { metric: 'Traffic', signal: 'Stable', action: 'Review source' },
  { metric: 'Lead / Contact', signal: '↑ / ↓', action: 'Fix CTA' },
  { metric: 'Lead Quality', signal: 'Check', action: 'Improve quality' },
  { metric: 'Sales Follow-up', signal: 'Review', action: 'Call backlog' },
  { metric: 'Outcome', signal: '↑ / ↓', action: 'Review outcome', isOutcome: true },
];

export function WeeklyKpiScorecardMockup() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <BarChart3 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-[18px] font-extrabold tracking-[-0.02em] text-brand-primary">
              Weekly Marketing KPI Scorecard
            </h3>
            <p className="mt-1 text-[13px] font-medium leading-[1.55] text-brand-soft-text">
              Một mẫu nhìn tuần đủ gọn cho team nhỏ.
            </p>
          </div>
        </div>

        <div className="mt-6 hidden overflow-hidden rounded-2xl border border-brand-border md:block">
          <div className="grid grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr_1.3fr] bg-brand-bg px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-brand-soft-text">
            <span>Metric</span>
            <span>This week</span>
            <span>Last week</span>
            <span>Signal</span>
            <span>Next action</span>
          </div>
          {weeklyScorecardRows.map((row) => (
            <div
              key={row.metric}
              className={`grid grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr_1.3fr] items-center border-t border-brand-border px-5 py-4 text-[13px] ${
                row.isOutcome ? 'bg-brand-highlight-soft' : 'bg-brand-surface'
              }`}
            >
              <span className="font-bold text-brand-primary">{row.metric}</span>
              <span className="font-semibold text-brand-soft-text">—</span>
              <span className="font-semibold text-brand-soft-text">—</span>
              <span className="font-bold text-brand-accent">{row.signal}</span>
              <span>
                <span className="inline-flex rounded-full bg-brand-highlight-soft px-2.5 py-1 text-[11px] font-bold text-brand-highlight">
                  {row.action}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3 md:hidden">
          {weeklyScorecardRows.map((row) => (
            <section
              key={row.metric}
              className={`rounded-2xl border p-4 ${
                row.isOutcome ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-heading text-[14px] font-extrabold text-brand-primary">{row.metric}</h4>
                <span className="text-[12px] font-black text-brand-accent">{row.signal}</span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-soft-text">This week</dt>
                  <dd className="mt-1 font-bold text-brand-secondary">—</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-soft-text">Last week</dt>
                  <dd className="mt-1 font-bold text-brand-secondary">—</dd>
                </div>
              </dl>
              <div className="mt-4 border-t border-brand-border pt-3">
                <span className="inline-flex rounded-full bg-brand-highlight-soft px-2.5 py-1 text-[11px] font-bold text-brand-highlight">
                  {row.action}
                </span>
              </div>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Mẫu KPI tuần không cần phức tạp. Quan trọng là mỗi dòng số phải dẫn đến một hành động rõ hơn cho tuần sau.
      </figcaption>
    </figure>
  );
}

const weeklyReviewSteps = [
  {
    time: '10 phút',
    title: 'Nhìn số tổng',
    subtitle: 'Traffic, lead, quality, sales, outcome',
  },
  {
    time: '15 phút',
    title: 'Tìm điểm bất thường',
    subtitle: 'Cái gì tăng/giảm đáng chú ý?',
  },
  {
    time: '15 phút',
    title: 'Tìm nguyên nhân khả dĩ',
    subtitle: 'Vấn đề nằm ở traffic, message, landing, sales hay tracking?',
  },
  {
    time: '10 phút',
    title: 'Chốt việc tuần sau',
    subtitle: 'Chỉ chọn 1–3 việc cần sửa',
    isAction: true,
  },
];

export function WeeklyReviewRhythmVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Activity className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Nhịp review KPI 50 phút
          </h3>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {weeklyReviewSteps.map((step, index) => (
            <section
              key={step.title}
              className={`relative rounded-2xl border p-5 ${
                step.isAction
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full bg-brand-surface px-3 py-1 text-[11px] font-black ${
                    step.isAction ? 'text-brand-highlight' : 'text-brand-accent'
                  }`}
                >
                  {step.time}
                </span>
                <span className="text-[11px] font-black text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-5 font-heading text-[16px] font-extrabold text-brand-primary">{step.title}</h4>
              <p className="mt-2 text-[13px] font-medium leading-[1.55] text-brand-secondary">{step.subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một cuộc họp KPI tốt không kết thúc bằng “tuần này số vậy đó”, mà kết thúc bằng việc team biết tuần sau sửa gì.
      </figcaption>
    </figure>
  );
}

const websiteActions = ['Page view', 'Form submit', 'Hotline click', 'Zalo click', 'Purchase'];
const signalDestinations = ['GA4', 'Meta Pixel', 'TikTok Pixel', 'Google Ads', 'Dashboard'];

export function GtmSignalRouterVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_0.8fr_auto_1fr]">
          <section className="rounded-2xl border border-brand-border bg-brand-bg p-4">
            <div className="flex items-center gap-2.5">
              <Globe2 className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <h3 className="font-heading text-[15px] font-extrabold text-brand-primary">Website Actions</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {websiteActions.map((action) => (
                <li
                  key={action}
                  className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-3 py-2 text-[12px] font-semibold text-brand-secondary"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {action}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex h-8 items-center justify-center text-brand-accent md:h-auto">
            <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
            <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
          </div>

          <section className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-surface text-brand-accent shadow-brand-soft">
              <Zap className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-4 font-heading text-[22px] font-extrabold text-brand-accent">GTM</p>
            <p className="mt-1 text-[12px] font-bold text-brand-secondary">Signal router</p>
          </section>

          <div className="flex h-8 items-center justify-center text-brand-accent md:h-auto">
            <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
            <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
          </div>

          <section className="rounded-2xl border border-brand-border bg-brand-bg p-4">
            <div className="flex items-center gap-2.5">
              <Database className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <h3 className="font-heading text-[15px] font-extrabold text-brand-primary">Destinations</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {signalDestinations.map((destination) => (
                <li
                  key={destination}
                  className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-3 py-2 text-[12px] font-semibold text-brand-secondary"
                >
                  <Send className="h-3.5 w-3.5 shrink-0 text-brand-accent" aria-hidden="true" />
                  {destination}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Với marketer, cách dễ hiểu nhất là xem GTM như một nơi điều phối tín hiệu: hành động nào trên website cần gửi đi
        đâu và gửi khi nào.
      </figcaption>
    </figure>
  );
}

const fragmentedTrackingItems = [
  'Code gắn nhiều nơi',
  'Khó biết tag nào đang chạy',
  'Dễ đo trùng hoặc thiếu event',
  'Mỗi lần sửa phải nhờ dev nhiều',
  'Báo cáo dễ lệch giữa các nền tảng',
];

const managedTrackingItems = [
  'Tag được quản lý tập trung',
  'Dễ kiểm tra trigger/event',
  'Dễ thêm hoặc tắt tag',
  'Marketing chủ động hơn',
  'Dữ liệu có nền tảng rõ hơn',
];

export function GtmBeforeAfterVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <ComparisonCard title="Tracking rời rạc" items={fragmentedTrackingItems} variant="neutral" />
        <ComparisonCard title="Tracking qua GTM" items={managedTrackingItems} variant="quality" />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        GTM không làm dữ liệu tự nhiên đúng hoàn toàn. Nhưng nó giúp tracking có một nơi quản lý tập trung và dễ kiểm tra
        hơn.
      </figcaption>
    </figure>
  );
}

const marketerGtmChecklistGroups = [
  {
    title: 'Action cần đo',
    icon: MousePointerClick,
    items: ['Form submit', 'Hotline/Zalo click', 'CTA chính'],
  },
  {
    title: 'Event gửi đi',
    icon: Send,
    items: ['GA4 event', 'Ads conversion', 'Pixel event'],
  },
  {
    title: 'Kiểm tra trước khi publish',
    icon: ClipboardCheck,
    items: ['Preview mode', 'Test event', 'So sánh với form/CRM'],
    isAction: true,
  },
  {
    title: 'Ghi chú quản lý',
    icon: Tag,
    items: ['Event name', 'Trigger', 'Ngày publish', 'Người phụ trách'],
  },
];

export function MarketerGtmChecklist() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Code2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            GTM checklist cho marketer
          </h3>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {marketerGtmChecklistGroups.map(({ title, icon: Icon, items, isAction }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                isAction
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`h-4 w-4 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="font-heading text-[15px] font-extrabold text-brand-primary">{title}</h4>
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] font-medium leading-[1.5] text-brand-secondary">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        isAction ? 'text-brand-highlight' : 'text-brand-accent'
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Marketer không cần biết hết kỹ thuật. Nhưng cần biết đủ để đặt đúng câu hỏi, brief đúng event và test trước khi
        tin vào dữ liệu.
      </figcaption>
    </figure>
  );
}

const dataLayerRelationshipSteps = [
  { title: 'Website', subtitle: 'Khách vừa làm gì?', icon: Globe2 },
  {
    title: 'DataLayer',
    subtitle: 'Ghi rõ sự kiện và thông tin đi kèm',
    icon: Database,
    isDataLayer: true,
  },
  { title: 'GTM', subtitle: 'Đọc dữ liệu và kích hoạt tag', icon: Zap },
  { title: 'Platforms', subtitle: 'GA4, Ads, Pixel, Dashboard', icon: Send },
];

export function DataLayerGtmRelationshipVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {dataLayerRelationshipSteps.map(({ title, subtitle, icon: Icon, isDataLayer }, index) => (
            <div key={title} className="contents">
              <section
                className={`flex min-h-32 min-w-0 flex-1 flex-col rounded-2xl border p-4 ${
                  isDataLayer
                    ? 'border-brand-accent/30 bg-brand-accent-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                    isDataLayer ? 'text-brand-accent shadow-brand-soft' : 'text-brand-secondary'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
                  <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
                </div>
              </section>
              {index < dataLayerRelationshipSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-8">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        DataLayer là lớp giúp website nói chuyện rõ ràng với GTM. Khi thông tin đầu vào rõ hơn, tracking phía sau
        cũng dễ kiểm tra hơn.
      </figcaption>
    </figure>
  );
}

const formLeadFlowSteps = [
  { title: 'Khách gửi form', subtitle: 'Form đã báo thành công' },
  { title: 'Website push DataLayer', subtitle: 'Đẩy event và ngữ cảnh' },
  { title: 'GTM bắt event', subtitle: 'Nhận lead_submit' },
  { title: 'Gửi lead event', subtitle: 'GA4, Ads và Pixel' },
];

const formLeadObject = [
  ['event', 'lead_submit'],
  ['form_name', 'consultation_form'],
  ['lead_type', 'consultation'],
  ['page_location', 'current_page'],
];

export function FormLeadDataLayerVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {formLeadFlowSteps.map((step, index) => (
            <div key={step.title} className="contents">
              <section className="min-w-0 flex-1 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-accent">
                  Bước {index + 1}
                </span>
                <h3 className="mt-4 font-heading text-[14px] font-extrabold leading-tight text-brand-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12px] font-medium leading-[1.45] text-brand-secondary">{step.subtitle}</p>
              </section>
              {index < formLeadFlowSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-brand-border bg-brand-bg p-4 sm:p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-soft-text">
            DataLayer object preview
          </p>
          <dl className="mt-4 grid gap-2 font-mono text-[12px] sm:grid-cols-2">
            {formLeadObject.map(([key, value]) => (
              <div key={key} className="min-w-0 rounded-xl border border-brand-border bg-brand-surface px-3 py-2.5">
                <dt className="inline text-brand-accent">{key}: </dt>
                <dd className="inline break-all text-brand-secondary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Với form lead, DataLayer giúp team biết không chỉ có lead, mà còn biết lead đó đến từ form nào và ngữ cảnh
        nào.
      </figcaption>
    </figure>
  );
}

const purchaseFields = [
  { key: 'event', value: 'purchase' },
  { key: 'transaction_id', value: 'mã đơn để đối chiếu', isHighlight: true },
  { key: 'value', value: 'giá trị đơn hàng', isHighlight: true },
  { key: 'currency', value: 'đơn vị tiền' },
  { key: 'items', value: 'sản phẩm trong đơn' },
];

const purchaseBenefits = [
  'Tránh đo trùng đơn hàng',
  'Gửi giá trị chuyển đổi về Ads/GA4',
  'Nối đơn hàng với dashboard',
  'Biết nhóm sản phẩm tạo doanh thu',
];

export function PurchaseDataLayerVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <WalletCards className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Purchase DataLayer
          </h3>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <section className="rounded-2xl border border-brand-border bg-brand-bg p-4 sm:p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-soft-text">Dữ liệu đơn hàng</p>
            <dl className="mt-4 space-y-2 font-mono text-[12px]">
              {purchaseFields.map((field) => (
                <div key={field.key} className="rounded-xl border border-brand-border bg-brand-surface px-3 py-3">
                  <dt className="break-all font-bold text-brand-accent">{field.key}</dt>
                  <dd
                    className={`mt-1 leading-[1.5] ${
                      field.isHighlight ? 'font-bold text-brand-highlight' : 'text-brand-secondary'
                    }`}
                  >
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4 sm:p-5">
            <p className="font-heading text-[16px] font-extrabold text-brand-primary">Dữ liệu này giúp gì?</p>
            <ol className="mt-5 space-y-3">
              {purchaseBenefits.map((benefit, index) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-surface text-[10px] font-black text-brand-accent">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                    {benefit}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Với đơn hàng, DataLayer không chỉ báo rằng có purchase. Nó còn mang theo thông tin để đối chiếu, tối ưu và
        đọc doanh thu.
      </figcaption>
    </figure>
  );
}

const dataLayerBriefItems = [
  { title: 'Event name', text: 'Đặt tên sự kiện rõ, dễ hiểu.' },
  {
    title: 'Success condition',
    text: 'Chỉ bắn khi hành động thành công thật.',
    isAction: true,
  },
  { title: 'Data fields', text: 'Gửi đủ thông tin cần phân tích.' },
  { title: 'Destinations', text: 'Xác định GA4/Ads/Pixel/Dashboard.' },
  {
    title: 'Testing method',
    text: 'Có cách test trước khi tin vào số.',
    isAction: true,
  },
];

export function DataLayerBriefChecklist() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Checklist brief DataLayer cho marketer
          </h3>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {dataLayerBriefItems.map(({ title, text, isAction }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 sm:p-5 ${
                isAction
                  ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              } ${index === dataLayerBriefItems.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className={`mt-0.5 h-5 w-5 shrink-0 ${
                    isAction ? 'text-brand-highlight' : 'text-brand-accent'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
                  <p className="mt-1.5 text-[13px] font-medium leading-[1.55] text-brand-secondary">{text}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Marketer không cần viết DataLayer, nhưng nên biết cách brief DataLayer đủ rõ để tracking không bị đoán mò.
      </figcaption>
    </figure>
  );
}

const wrongTrackingDecisionSteps = [
  { title: 'Website Action', subtitle: 'Khách click, gửi form, gọi hotline', icon: Globe2 },
  {
    title: 'Tracking Signal',
    subtitle: 'Event được ghi nhận đúng hoặc sai',
    icon: Activity,
    isSignal: true,
  },
  { title: 'Report / Dashboard', subtitle: 'Số liệu được tổng hợp', icon: LayoutDashboard },
  { title: 'Team Decision', subtitle: 'Giữ, tắt, tăng ngân sách, đổi content', icon: ClipboardCheck },
  { title: 'Business Outcome', subtitle: 'Kết quả bị ảnh hưởng', icon: CircleDollarSign },
];

export function WrongTrackingDecisionChainVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {wrongTrackingDecisionSteps.map(({ title, subtitle, icon: Icon, isSignal }, index) => (
            <div key={title} className="contents">
              <section
                className={`flex min-h-32 min-w-0 flex-1 flex-col rounded-2xl border p-4 ${
                  isSignal
                    ? 'border-brand-accent/30 bg-brand-accent-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                    isSignal ? 'text-brand-accent shadow-brand-soft' : 'text-brand-secondary'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="font-heading text-[14px] font-extrabold leading-tight text-brand-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
                </div>
              </section>
              {index < wrongTrackingDecisionSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-highlight/30 bg-brand-highlight-soft px-4 py-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-highlight" aria-hidden="true" />
          <p className="text-[12px] font-bold leading-[1.55] text-brand-secondary">
            Sai tín hiệu <span className="text-brand-highlight">→</span> sai cách đọc{' '}
            <span className="text-brand-highlight">→</span> sai quyết định.
          </p>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Tracking sai không dừng lại ở dashboard. Nó đi tiếp vào cách team tối ưu campaign, phân bổ ngân sách và
        đánh giá kết quả.
      </figcaption>
    </figure>
  );
}

const trackingErrors = [
  {
    title: 'Đo nhầm hành động',
    consequence: 'Tưởng có lead nhưng thực tế chưa có lead.',
  },
  {
    title: 'Đo thiếu hành động quan trọng',
    consequence: 'Đánh giá thấp các kênh liên hệ thật.',
  },
  {
    title: 'Đo trùng conversion',
    consequence: 'Tưởng campaign hiệu quả hơn thực tế.',
  },
  {
    title: 'Event name không nhất quán',
    consequence: 'Dashboard khó gom và khó so sánh.',
  },
  {
    title: 'Không nối được revenue',
    consequence: 'Tối ưu theo CPL thay vì outcome.',
  },
];

export function TrackingErrorMapVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        {trackingErrors.map(({ title, consequence }, index) => (
          <section
            key={title}
            className={`rounded-2xl border border-brand-border bg-brand-bg p-5 ${
              index === trackingErrors.length - 1 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-highlight" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-accent">
                  Lỗi {index + 1}
                </p>
                <h3 className="mt-2 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
              </div>
            </div>
            <div className="mt-5 border-t border-brand-border pt-4">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Dễ dẫn tới</p>
              <p className="mt-2 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{consequence}</p>
            </div>
          </section>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Phần nguy hiểm của tracking sai là nhiều lỗi nhìn rất nhỏ, nhưng chúng làm team hiểu sai hành vi thật của
        khách hàng.
      </figcaption>
    </figure>
  );
}

const shiftedTrackingSignals = [
  'Event bắn khi click, chưa chắc thành công',
  'Không biết lead đến từ form nào',
  'Conversion có thể bị trùng',
  'Chỉ biết số lead, không biết chất lượng',
  'Dashboard có số nhưng khó hành động',
];

const reliableTrackingSignals = [
  'Event bắn khi hành động thành công thật',
  'Có form_name, page_location, source nếu cần',
  'Có event_id hoặc cơ chế đối chiếu',
  'Lead được nối tiếp sang sales/CRM',
  'Dashboard giúp chốt việc cần sửa',
];

export function TrackingSignalComparisonVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Tín hiệu tracking lệch</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {shiftedTrackingSignals.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
          <div className="flex items-center gap-2.5">
            <BadgeCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Tín hiệu tracking đáng tin</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {reliableTrackingSignals.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2
                  className={`mt-0.5 h-4 w-4 shrink-0 ${
                    index === 0 || index === 2 ? 'text-brand-highlight' : 'text-brand-accent'
                  }`}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Tracking đáng tin không nhất thiết phải phức tạp. Nó cần đo đúng hành động, đúng điều kiện và đủ thông tin
        để team ra quyết định.
      </figcaption>
    </figure>
  );
}

const trackingDiagnosticItems = [
  'Đúng hành động thành công?',
  'Có bị bắn trùng không?',
  'Đã đo đủ kênh liên hệ chính?',
  'Event name có nhất quán?',
  'Có đối chiếu với nguồn thật?',
  'Đã test Preview/Debug?',
];

export function TrackingDiagnosticChecklist() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Checklist kiểm tra trước khi tin vào số
          </h3>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {trackingDiagnosticItems.map((item, index) => {
            const isAction = index === 4 || index === 5;

            return (
              <section
                key={item}
                className={`rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`h-5 w-5 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`}
                    aria-hidden="true"
                  />
                  <p className="font-heading text-[14px] font-extrabold leading-[1.45] text-brand-primary">
                    {item}
                  </p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Trước khi dùng số liệu để tăng ngân sách hoặc tắt campaign, team nên kiểm tra xem tín hiệu đầu vào có đáng
        tin không.
      </figcaption>
    </figure>
  );
}
