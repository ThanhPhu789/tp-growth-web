import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Braces,
  Check,
  ClipboardCheck,
  Database,
  FileInput,
  GitBranch,
  Megaphone,
  PhoneCall,
  Send,
  UserCheck,
  X,
} from 'lucide-react';

const journeySteps = [
  { title: 'Form Submit', subtitle: 'Khách gửi thông tin thành công', icon: FileInput },
  { title: 'DataLayer', subtitle: 'Ghi nhận event và dữ liệu đi kèm', icon: Braces },
  { title: 'GTM', subtitle: 'Bắt event và kích hoạt tag', icon: GitBranch },
  { title: 'Platforms', subtitle: 'GA4, Ads, Pixel', icon: Megaphone },
  { title: 'CRM / Sheet', subtitle: 'Lưu lead để sales xử lý', icon: Database },
  { title: 'Sales Status', subtitle: 'Cập nhật chất lượng và tiến độ', icon: PhoneCall },
  { title: 'Dashboard', subtitle: 'Gom dữ liệu để ra quyết định', icon: BarChart3, action: true },
];

export function LeadDataJourneyVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-0 lg:grid-cols-7">
          {journeySteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="relative flex flex-col">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/35 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                    action ? 'text-brand-highlight' : 'text-brand-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">
                  Bước {index + 1}
                </p>
                <h3 className="mt-1.5 font-heading text-[14px] font-extrabold leading-tight text-brand-primary">{title}</h3>
                <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < journeySteps.length - 1 && (
                <div className="flex h-8 items-center justify-center text-brand-accent lg:absolute lg:-right-3 lg:top-1/2 lg:z-10 lg:h-6 lg:w-6 lg:-translate-y-1/2 lg:rounded-full lg:border lg:border-brand-border lg:bg-brand-surface">
                  <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một lead đi đến dashboard qua nhiều lớp. Nếu một lớp bị thiếu hoặc sai, số cuối cùng trong report sẽ khó đáng tin.
      </figcaption>
    </figure>
  );
}

const recordGroups = [
  { title: 'Contact info', items: ['name', 'phone / email'], icon: UserCheck },
  {
    title: 'Marketing context',
    items: ['source / medium / campaign', 'page_location', 'form_name', 'lead_type'],
    icon: Megaphone,
  },
  { title: 'Tracking info', items: ['lead_id', 'event_id', 'timestamp'], icon: Braces },
  { title: 'Sales status', items: ['contacted', 'qualified', 'quoted', 'outcome'], icon: PhoneCall, action: true },
];

export function LeadRecordAnatomyVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Database className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary md:text-[22px]">
            Một lead record nên có gì?
          </h3>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {recordGroups.map(({ title, items, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                action ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[12px] font-semibold text-brand-secondary">
                    <span className={`h-1.5 w-1.5 rounded-full ${action ? 'bg-brand-highlight' : 'bg-brand-accent'}`} />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một lead chỉ có số điện thoại thì đủ để gọi, nhưng chưa đủ để tối ưu marketing. Muốn tối ưu, cần biết lead đó đến từ đâu và đi tiếp tới đâu.
      </figcaption>
    </figure>
  );
}

const brokenFlow = [
  'Form có lead nhưng thiếu source',
  'Ads/GA4 có số nhưng sales không đối chiếu',
  'Sheet có data nhưng không cập nhật status',
  'Dashboard chỉ thấy tổng lead',
  'Team không biết sửa đoạn nào',
];

const connectedFlow = [
  'Lead có source/campaign/form',
  'Event gửi về Ads/GA4 đúng',
  'CRM/Sheet có trạng thái sales',
  'Dashboard đọc được quality/outcome',
  'Team biết ưu tiên sửa gì',
];

export function BrokenVsConnectedLeadFlowVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <FlowComparison title="Lead flow bị gãy" items={brokenFlow} />
        <FlowComparison title="Lead flow được nối" items={connectedFlow} connected />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Điểm khác biệt không nằm ở dashboard đẹp hơn, mà nằm ở việc dữ liệu marketing và sales có được nối lại với nhau hay không.
      </figcaption>
    </figure>
  );
}

function FlowComparison({ title, items, connected = false }: { title: string; items: string[]; connected?: boolean }) {
  return (
    <section
      className={`rounded-2xl border p-5 md:p-6 ${
        connected ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${
            connected ? 'bg-brand-surface text-brand-accent' : 'bg-brand-section text-brand-soft-text'
          }`}
        >
          {connected ? <Check className="h-4 w-4" aria-hidden="true" /> : <X className="h-4 w-4" aria-hidden="true" />}
        </div>
        <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">{title}</h3>
      </div>
      <ol className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3 rounded-xl border border-brand-border/80 bg-brand-surface p-3.5">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                connected ? 'bg-brand-accent-soft text-brand-accent' : 'bg-brand-section text-brand-soft-text'
              }`}
            >
              {index + 1}
            </span>
            <span className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

const dashboardChecklist = [
  'Form submit success đã đo đúng?',
  'Lead có source/medium/campaign?',
  'Có form_name và page_location?',
  'Có lead_id hoặc mã đối chiếu?',
  'Event đã gửi về GA4/Ads/Pixel đúng?',
  'Lead được lưu vào CRM/Sheet rõ ràng?',
  'Sales có cập nhật status?',
  'Dashboard có đọc được quality/outcome?',
];

export function DashboardInputChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary md:text-[22px]">
            Checklist trước khi làm dashboard lead
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {dashboardChecklist.map((item, index) => {
            const isOutcome = index >= 6;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isOutcome ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    isOutcome ? 'bg-brand-surface text-brand-highlight' : 'bg-brand-accent-soft text-brand-accent'
                  }`}
                >
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3 text-[12px] font-bold leading-[1.5] text-brand-secondary">
          <Send className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          Kiểm tra từ dữ liệu đầu vào trước khi thêm biểu đồ mới.
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Trước khi hỏi dashboard đẹp hay chưa, nên hỏi dữ liệu đầu vào đã đủ để đọc lead theo nguồn, chất lượng và outcome hay chưa.
      </figcaption>
    </figure>
  );
}
