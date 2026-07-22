import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Database,
  Globe2,
  Send,
  Server,
} from 'lucide-react';

const flowSteps = [
  { title: 'Website Action', subtitle: 'Form, Zalo, hotline, purchase', icon: Globe2 },
  { title: 'Web GTM / DataLayer', subtitle: 'Ghi nhận tín hiệu ban đầu', icon: Database },
  { title: 'Server Container', subtitle: 'Xử lý, chuẩn hoá, gửi tiếp', icon: Server, featured: true },
  { title: 'Platforms', subtitle: 'GA4, Meta, TikTok, Google Ads', icon: Send },
];

export function ServerSideTrackingFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {flowSteps.map(({ title, subtitle, icon: Icon, featured }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  featured
                    ? 'border-brand-accent/30 bg-brand-accent-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                      featured ? 'text-brand-accent shadow-brand-soft' : 'text-brand-secondary'
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  {index === 0 && <span className="h-2.5 w-2.5 rounded-full bg-brand-highlight" />}
                </div>
                <p className="mt-5 font-heading text-[14px] font-extrabold leading-tight text-brand-primary">
                  {title}
                </p>
                <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < flowSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Server-side tracking có thể hiểu đơn giản là đưa tín hiệu chuyển đổi qua một lớp server trung gian trước
        khi gửi đến các nền tảng đo lường và quảng cáo.
      </figcaption>
    </figure>
  );
}

const clientItems = [
  'Tín hiệu gửi từ trình duyệt',
  'Dễ bắt đầu hơn',
  'Phù hợp setup cơ bản',
  'Dễ bị ảnh hưởng bởi browser, ad blocker hoặc cookie setting',
  'Cần quản lý tag tốt để tránh rối',
];

const serverItems = [
  'Tín hiệu đi qua server trung gian',
  'Kiểm soát dữ liệu tốt hơn',
  'Có thể chuẩn hoá trước khi gửi',
  'Hỗ trợ conversion API và server events',
  'Cần setup, chi phí và maintenance',
];

function ComparisonList({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
          <CheckCircle2
            className={`mt-0.5 h-4 w-4 shrink-0 ${accent ? 'text-brand-accent' : 'text-brand-soft-text'}`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ClientVsServerTrackingVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
          <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Client-side tracking</h3>
          <ComparisonList items={clientItems} />
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
          <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Server-side tracking</h3>
          <ComparisonList items={serverItems} accent />
        </section>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Client-side không sai. Server-side cũng không phải phép màu. Vấn đề là chọn đúng lớp tracking theo giai
        đoạn và nhu cầu của doanh nghiệp.
      </figcaption>
    </figure>
  );
}

const helps = [
  'Chuẩn hoá tín hiệu',
  'Gửi server events hoặc CAPI',
  'Kiểm soát dữ liệu tốt hơn',
  'Hỗ trợ đối chiếu conversion',
  'Giảm phụ thuộc hoàn toàn vào browser',
];

const doesNotFix = [
  'Traffic sai tệp',
  'Landing page yếu',
  'Sales follow-up chậm',
  'DataLayer sai từ đầu',
  'CRM không cập nhật',
];

export function ServerSideNotMagicVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5">
          <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Server-side có thể giúp</h3>
          <ComparisonList items={helps} accent />
        </section>
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="h-5 w-5 text-brand-highlight" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">
              Server-side không sửa được
            </h3>
          </div>
          <ul className="mt-5 space-y-3">
            {doesNotFix.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-highlight" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Server-side tracking là một lớp kỹ thuật tốt, nhưng nó không thay thế được nền marketing, sales và dữ liệu
        đầu vào.
      </figcaption>
    </figure>
  );
}

const decisionLevels = [
  {
    label: 'Mức 1',
    title: 'Chưa nên làm vội',
    conditions: ['Tracking cơ bản còn rối', 'Chưa đo đúng lead, contact hoặc purchase', 'Chưa có DataLayer rõ'],
    next: 'Làm sạch GTM, event và DataLayer trước',
  },
  {
    label: 'Mức 2',
    title: 'Có thể cân nhắc',
    conditions: ['Ads chạy đều', 'Có lead hoặc order để tối ưu', 'Muốn gửi tín hiệu tốt hơn'],
    next: 'Audit tracking hiện tại trước khi setup',
  },
  {
    label: 'Mức 3',
    title: 'Nên làm nghiêm túc',
    conditions: ['Ads budget đáng kể', 'Ecommerce hoặc lead gen có volume', 'Cần CAPI, API, dedup hoặc dashboard'],
    next: 'Thiết kế setup có quy trình test và maintain',
    featured: true,
  },
];

export function SmeServerSideDecisionMatrix() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-3 md:p-7">
        {decisionLevels.map(({ label, title, conditions, next, featured }) => (
          <section
            key={title}
            className={`flex min-w-0 flex-col rounded-2xl border p-5 ${
              featured
                ? 'border-brand-accent/30 bg-brand-accent-soft'
                : 'border-brand-border bg-brand-bg'
            }`}
          >
            <p className={`text-[10px] font-black uppercase tracking-[0.16em] ${featured ? 'text-brand-highlight' : 'text-brand-accent'}`}>
              {label}
            </p>
            <h3 className="mt-3 font-heading text-[16px] font-extrabold leading-tight text-brand-primary">{title}</h3>
            <p className="mt-5 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">
              Điều kiện phù hợp
            </p>
            <ul className="mt-3 flex-1 space-y-2.5">
              {conditions.map((condition) => (
                <li key={condition} className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.5] text-brand-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-brand-border pt-4">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">Việc tiếp theo</p>
              <p className="mt-2 text-[12px] font-bold leading-[1.5] text-brand-primary">{next}</p>
            </div>
          </section>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Câu hỏi không phải SME có nên làm server-side tracking cho xịn không. Câu hỏi là hệ thống hiện tại đã đủ
        nền để lớp server-side tạo giá trị chưa.
      </figcaption>
    </figure>
  );
}

const readinessItems = [
  'Event quan trọng đã rõ?',
  'DataLayer đủ thông tin?',
  'Có event_id và dedup?',
  'Đối chiếu được với CRM hoặc order?',
  'Có endpoint hoặc server container?',
  'Có quy trình test?',
  'Có người maintain?',
];

export function ServerSideReadinessChecklist() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Server className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Checklist trước khi làm server-side tracking
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {readinessItems.map((item, index) => {
            const isAction = index === 2 || index >= 5;
            return (
              <section
                key={item}
                className={`rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                } ${index === readinessItems.length - 1 ? 'md:col-span-2' : ''}`}
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
        Server-side tracking nên được triển khai sau khi team đã biết mình cần đo gì, gửi đi đâu, đối chiếu thế
        nào và ai sẽ chịu trách nhiệm kiểm tra.
      </figcaption>
    </figure>
  );
}
