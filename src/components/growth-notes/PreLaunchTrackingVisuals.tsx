import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileCheck2,
  Flag,
  FormInput,
  Gauge,
  Layers3,
  MousePointerClick,
  Route,
  Send,
  Tag,
  TriangleAlert,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type FlowStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

function Flow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      {steps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
        <div key={title} className="contents">
          <section
            className={`flex min-h-32 min-w-0 flex-1 flex-col rounded-2xl border p-4 ${
              highlight
                ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                : 'border-brand-accent/20 bg-brand-accent-soft'
            }`}
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface shadow-brand-soft ${
                highlight ? 'text-brand-highlight' : 'text-brand-accent'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="mt-5">
              <h3 className="font-heading text-[13px] font-extrabold leading-[1.35] text-brand-primary">
                {title}
              </h3>
              <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </div>
          </section>
          {index < steps.length - 1 && (
            <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-6">
              <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
              <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const auditSteps: FlowStep[] = [
  { title: 'Landing Page', subtitle: 'Trang đích, CTA, form, mobile', icon: FormInput },
  { title: 'Event', subtitle: 'PageView, Contact, Lead, Purchase', icon: MousePointerClick },
  { title: 'GTM / DataLayer', subtitle: 'Trigger, variable, event data', icon: Layers3 },
  { title: 'Platforms', subtitle: 'GA4, Pixel, Ads tag', icon: Tag },
  { title: 'CRM / Sheet', subtitle: 'Lead được lưu và xử lý', icon: Database, highlight: true },
  { title: 'Dashboard', subtitle: 'Đối chiếu và ra quyết định', icon: BarChart3, highlight: true },
];

export function PreLaunchTrackingAuditFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Route className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Pre-launch audit</p>
            <h3 className="mt-1 font-heading text-[19px] font-extrabold text-brand-primary">Đường đi cần kiểm tra</h3>
          </div>
        </div>
        <Flow steps={auditSteps} />
      </div>
      <Caption>
        Kiểm tra tracking trước khi chạy ads là kiểm tra cả đường đi của dữ liệu, không chỉ kiểm tra pixel có gắn hay chưa.
      </Caption>
    </figure>
  );
}

const checklistGroups = [
  {
    title: 'Website actions',
    items: ['PageView', 'Main CTA click', 'Hotline/Zalo/Messenger click'],
    icon: MousePointerClick,
  },
  {
    title: 'Lead actions',
    items: ['Form submit success', 'Lead event', 'form_name / page_location'],
    icon: FormInput,
  },
  {
    title: 'Revenue actions',
    items: ['Purchase/order success nếu có', 'transaction_id', 'value / currency'],
    icon: Gauge,
    highlight: true,
  },
  {
    title: 'Quality control',
    items: ['Event bắn đúng điều kiện', 'Không bắn trùng', 'Event name nhất quán'],
    icon: ClipboardCheck,
    highlight: true,
  },
];

export function TrackingPreflightChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <FileCheck2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold text-brand-primary">Tracking pre-flight checklist</h3>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {checklistGroups.map(({ title, items, icon: Icon, highlight }) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                highlight
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">
                    <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Checklist tốt không chỉ hỏi event có bắn không. Nó phải hỏi event bắn đúng hành động, đúng điều kiện và đủ dữ liệu đi kèm chưa.
      </Caption>
    </figure>
  );
}

const testSteps: FlowStep[] = [
  { title: 'Open test URL with UTM', subtitle: 'Giả lập traffic từ campaign', icon: ExternalLink },
  { title: 'Visit landing page', subtitle: 'PageView được ghi nhận', icon: Route },
  { title: 'Click CTA / Contact', subtitle: 'Contact event được test', icon: MousePointerClick },
  { title: 'Submit form', subtitle: 'Lead chỉ bắn khi success', icon: Send, highlight: true },
  { title: 'Check platforms', subtitle: 'GA4, Pixel, Ads tag nhận event', icon: Tag },
  { title: 'Check CRM / Sheet', subtitle: 'Lead lưu đúng source/form/page', icon: Database, highlight: true },
  { title: 'Check dashboard', subtitle: 'Số có đối chiếu được', icon: BarChart3 },
];

export function TrackingTestFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">End-to-end test</p>
          <h3 className="mt-1 font-heading text-[19px] font-extrabold text-brand-primary">Một lượt test từ click đến dashboard</h3>
        </div>
        <Flow steps={testSteps} />
      </div>
      <Caption>
        Một bài test tracking tốt nên đi hết hành trình giả lập: từ URL có UTM đến event, CRM và dashboard.
      </Caption>
    </figure>
  );
}

const priorities = [
  {
    title: 'Must fix before launch',
    items: ['Form hoặc CTA không hoạt động', 'Lead/Purchase bắn sai', 'Platform không nhận conversion', 'CRM không lưu lead', 'Không biết nguồn lead'],
    icon: TriangleAlert,
    className: 'border-brand-highlight/35 bg-brand-accent-soft',
    iconClassName: 'text-brand-highlight',
  },
  {
    title: 'Launch small, monitor closely',
    items: ['Thiếu field phụ', 'Dashboard còn thủ công', 'Event phụ chưa đủ', 'UTM chưa hoàn hảo', 'Consent logic cần audit thêm'],
    icon: Gauge,
    className: 'border-brand-accent/20 bg-brand-accent-soft',
    iconClassName: 'text-brand-accent',
  },
  {
    title: 'Improve later',
    items: ['Scroll depth', 'Heatmap', 'Advanced audience', 'Server-side nâng cao', 'CRM automation phức tạp'],
    icon: Flag,
    className: 'border-brand-border bg-brand-bg',
    iconClassName: 'text-brand-soft-text',
  },
];

export function TrackingIssuePriorityVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-3 md:p-7">
        {priorities.map(({ title, items, icon: Icon, className, iconClassName }, index) => (
          <section key={title} className={`rounded-2xl border p-5 ${className}`}>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface shadow-brand-soft">
                <Icon className={`h-4 w-4 ${iconClassName}`} aria-hidden="true" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Mức {index + 1}</span>
            </div>
            <h3 className="mt-5 font-heading text-[16px] font-extrabold leading-[1.35] text-brand-primary">{title}</h3>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.5] text-brand-secondary">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${index === 0 ? 'bg-brand-highlight' : index === 1 ? 'bg-brand-accent' : 'bg-brand-soft-text'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Caption>
        Không phải lỗi tracking nào cũng có mức độ như nhau. Trước khi chạy ads, cần phân biệt lỗi phải sửa ngay và phần có thể cải thiện sau.
      </Caption>
    </figure>
  );
}

const goItems = [
  'Form/contact hoạt động',
  'Event chính bắn đúng',
  'Platform nhận conversion',
  'Lead lưu vào CRM/Sheet',
  'Source/campaign đọc được',
  'Có người review data sớm',
];

const noGoItems = [
  'Form/contact chưa chắc hoạt động',
  'Conversion bắn sai hoặc chưa rõ điều kiện',
  'Pixel/tag chưa test được',
  'Lead không về nơi sales dùng',
  'Không biết nguồn lead',
  'Không có cách đối chiếu khi số lệch',
];

export function AdsTrackingGoNoGoVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Go</h3>
          </div>
          <ol className="mt-5 space-y-3">
            {goItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-surface text-[10px] font-black text-brand-accent">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <TriangleAlert className="h-5 w-5 text-brand-highlight" aria-hidden="true" />
            <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">No-Go / Test nhỏ</h3>
          </div>
          <ol className="mt-5 space-y-3">
            {noGoItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-highlight" />
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
      <Caption>
        Trước khi chạy ads, tracking không cần hoàn hảo tuyệt đối. Nhưng các điểm sống còn phải đủ rõ để team không tiêu tiền trong trạng thái mù.
      </Caption>
    </figure>
  );
}
