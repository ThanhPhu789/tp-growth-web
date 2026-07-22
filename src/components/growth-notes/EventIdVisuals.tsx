import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  FileKey2,
  GitMerge,
  Monitor,
  ReceiptText,
  Server,
  UserRoundCheck,
} from 'lucide-react';

const duplicateSignals = ['Browser event', 'Server event', 'Thank-you page refresh', 'Duplicate tag'];

export function DuplicateConversionProblemVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="grid items-stretch gap-4 md:grid-cols-[0.85fr_auto_1.2fr_auto_0.9fr]">
          <section className="flex flex-col items-center justify-center rounded-2xl border border-brand-border bg-brand-bg p-5 text-center">
            <UserRoundCheck className="h-6 w-6 text-brand-accent" aria-hidden="true" />
            <p className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">1 khách gửi form</p>
            <p className="mt-2 text-[12px] font-medium text-brand-secondary">Một hành động thật</p>
          </section>
          <FlowArrow />
          <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
            <h3 className="text-center font-heading text-[15px] font-extrabold text-brand-primary">
              Nhiều tín hiệu tracking
            </h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {duplicateSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2.5 rounded-xl bg-brand-surface px-3 py-2.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand-highlight" />
                  <span className="text-[11px] font-semibold text-brand-secondary">{signal}</span>
                </div>
              ))}
            </div>
          </section>
          <FlowArrow />
          <section className="flex flex-col items-center justify-center rounded-2xl border border-brand-highlight/30 bg-brand-highlight-soft p-5 text-center">
            <Copy className="h-6 w-6 text-brand-highlight" aria-hidden="true" />
            <p className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">
              Report ghi nhận 2–3 conversions
            </p>
          </section>
        </div>
        <p className="mt-5 rounded-2xl border border-brand-border bg-brand-bg px-4 py-3 text-center text-[12px] font-bold text-brand-secondary">
          Vấn đề: hệ thống không biết đây là cùng một hành động.
        </p>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Đo trùng xảy ra khi một hành động thật bị nhiều tín hiệu tracking ghi nhận như nhiều conversion khác nhau.
      </figcaption>
    </figure>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-brand-accent">
      <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
      <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
    </div>
  );
}

function EventCard({ source, icon: Icon }: { source: string; icon: typeof Monitor }) {
  return (
    <section className="rounded-2xl border border-brand-border bg-brand-bg p-4">
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
        <h4 className="font-heading text-[14px] font-extrabold text-brand-primary">{source}</h4>
      </div>
      <p className="mt-3 text-[11px] font-bold text-brand-secondary">Lead</p>
      <span className="mt-2 inline-flex rounded-full bg-brand-highlight-soft px-3 py-1.5 font-mono text-[10px] font-bold text-brand-highlight">
        event_id: lead_abc123
      </span>
    </section>
  );
}

export function EventIdDedupFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 text-center">
          <UserRoundCheck className="mx-auto h-5 w-5 text-brand-accent" aria-hidden="true" />
          <h3 className="mt-3 font-heading text-[16px] font-extrabold text-brand-primary">Form submit success</h3>
          <p className="mt-2 text-[12px] font-medium text-brand-secondary">Một hành động thật</p>
        </section>
        <div className="flex h-9 items-center justify-center text-brand-accent">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <EventCard source="Browser event" icon={Monitor} />
          <EventCard source="Server event" icon={Server} />
        </div>
        <div className="flex h-9 items-center justify-center text-brand-accent">
          <GitMerge className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
          <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 text-center">
            <GitMerge className="mx-auto h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="mt-3 font-heading text-[15px] font-extrabold text-brand-primary">Platform dedup</h3>
            <p className="mt-2 text-[12px] font-medium text-brand-secondary">Nhận ra cùng một conversion</p>
          </section>
          <FlowArrow />
          <section className="rounded-2xl border border-brand-highlight/30 bg-brand-highlight-soft p-5 text-center">
            <CheckCircle2 className="mx-auto h-5 w-5 text-brand-highlight" aria-hidden="true" />
            <h3 className="mt-3 font-heading text-[15px] font-extrabold text-brand-primary">Counted once</h3>
            <p className="mt-2 text-[12px] font-medium text-brand-secondary">Ghi nhận một chuyển đổi</p>
          </section>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Khi browser event và server event mang cùng event_id, hệ thống có cơ sở tốt hơn để hiểu đây là cùng một
        chuyển đổi thay vì hai chuyển đổi khác nhau.
      </figcaption>
    </figure>
  );
}

const eventIdItems = [
  'Mã của event tracking',
  'Hỗ trợ dedup tín hiệu',
  'Dùng cho Lead, Contact hoặc Purchase nếu cần',
  'Quan trọng khi browser và server cùng gửi',
];

const transactionIdItems = [
  'Mã của đơn hàng hoặc giao dịch',
  'Hỗ trợ đối chiếu đơn thật',
  'Thường dùng cho Purchase',
  'Quan trọng với revenue, dashboard và order system',
];

function ComparisonItems({ items, action = false }: { items: string[]; action?: boolean }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
          <CheckCircle2
            className={`mt-0.5 h-4 w-4 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function EventIdVsTransactionIdVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
          <div className="flex items-center gap-3">
            <FileKey2 className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">event_id</h3>
          </div>
          <ComparisonItems items={eventIdItems} />
        </section>
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
          <div className="flex items-center gap-3">
            <ReceiptText className="h-5 w-5 text-brand-highlight" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">transaction_id</h3>
          </div>
          <ComparisonItems items={transactionIdItems} action />
        </section>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        event_id giúp đối chiếu event tracking. transaction_id giúp đối chiếu đơn hàng thật. Với purchase, hai mã
        này có thể cùng quan trọng nhưng không nên hiểu là một.
      </figcaption>
    </figure>
  );
}

const withoutDedup = [
  'Browser và server gửi tín hiệu rời rạc',
  'Conversion có thể bị đếm trùng',
  'CPL hoặc CPA nhìn đẹp hơn thật',
  'Dashboard khó đối chiếu',
  'Team dễ tăng ngân sách sai chỗ',
];

const withDedup = [
  'Các tín hiệu cùng hành động có mã đối chiếu',
  'Có cơ sở ghi nhận một conversion',
  'Số liệu gần thực tế hơn',
  'Dễ đối chiếu với CRM hoặc order',
  'Quyết định ngân sách đáng tin hơn',
];

export function DedupBeforeAfterVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Không có event_id rõ</h3>
          </div>
          <ComparisonItems items={withoutDedup} />
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
          <div className="flex items-center gap-2.5">
            <FileKey2 className="h-5 w-5 text-brand-highlight" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Có event_id và dedup rõ</h3>
          </div>
          <ComparisonItems items={withDedup} />
        </section>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        event_id không làm marketing tốt hơn ngay lập tức. Nó giúp số chuyển đổi bớt bị phóng đại, để team ra quyết
        định trên dữ liệu đáng tin hơn.
      </figcaption>
    </figure>
  );
}

const checklistItems = [
  'Event nào cần dedup?',
  'Khi nào event được xem là thành công?',
  'event_id tạo ở đâu?',
  'Browser và server có dùng cùng event_id?',
  'Có transaction_id cho purchase?',
  'Có log, CRM hoặc order để đối chiếu?',
  'Đã test duplicate case?',
];

export function EventIdChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Checklist event_id cho marketer
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklistItems.map((item, index) => {
            const isAction = index === 2 || index === 3 || index === 6;
            return (
              <section
                key={item}
                className={`rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                } ${index === checklistItems.length - 1 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`h-5 w-5 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`}
                    aria-hidden="true"
                  />
                  <p className="font-heading text-[14px] font-extrabold leading-[1.45] text-brand-primary">{item}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        event_id là chi tiết kỹ thuật, nhưng marketer vẫn nên hiểu đủ để brief đúng và test đúng trước khi tin vào
        conversion report.
      </figcaption>
    </figure>
  );
}
