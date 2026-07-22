import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardList,
  Database,
  FileSearch,
  FormInput,
  HelpCircle,
  Mail,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  Quote,
  SearchCheck,
  Tags,
  Target,
  UserCheck,
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

const handoffFlow: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Traffic Source', subtitle: 'Ads, search, social, referral', icon: Target },
  { title: 'Landing Promise', subtitle: 'Khách click vì kỳ vọng nào?', icon: MessageSquareText },
  { title: 'Offer / CTA', subtitle: 'Khách muốn nhận gì?', icon: MousePointerClick },
  { title: 'Form Context', subtitle: 'Giữ lại vấn đề, nhu cầu, stage', icon: FormInput, action: true },
  { title: 'CRM / Sheet', subtitle: 'Lưu source, angle, answer', icon: Database },
  { title: 'Sales Conversation', subtitle: 'Mở đầu đúng lý do khách submit', icon: PhoneCall, action: true },
];

export function FormSubmitNotFinishLineVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Lead context handoff</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Form submit không phải vạch đích</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {handoffFlow.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="relative min-w-0">
              <section
                className={`h-full rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < handoffFlow.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {index % 3 !== 2 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Form submit không phải vạch đích. Nó là điểm bàn giao context từ landing page sang CRM và sales.</Caption>
    </figure>
  );
}

const weakQuestions = [
  'Bạn cần tư vấn gì?',
  'Ghi chú thêm',
  'Bạn quan tâm dịch vụ nào?',
  'Ngân sách bao nhiêu?',
  'Bạn biết chúng tôi từ đâu?',
];

const contextQuestions = [
  'Vấn đề chính bạn muốn kiểm tra là gì?',
  'Bạn đang gặp tình trạng nào trong funnel?',
  'Bạn muốn nhận audit, báo giá hay checklist?',
  'Bạn dự định xử lý trong thời gian nào?',
  'Bạn đến từ ads, social, search hay referral?',
];

function QuestionColumn({ title, items, featured }: { title: string; items: string[]; featured?: boolean }) {
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'}`}>
      <div className="flex items-center gap-3">
        {featured ? <SearchCheck className="h-5 w-5 text-brand-highlight" aria-hidden="true" /> : <HelpCircle className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />}
        <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">{title}</h3>
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => (
          <div key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                featured ? 'bg-brand-surface text-brand-accent' : 'bg-brand-surface text-brand-soft-text'
              }`}
            >
              {featured ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <span className="text-[10px] font-black">{index + 1}</span>}
            </span>
            <p className="text-[12px] font-semibold leading-[1.6] text-brand-secondary">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function GoodVsBadFormQuestionVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <QuestionColumn title="Câu hỏi yếu" items={weakQuestions} />
        <QuestionColumn title="Câu hỏi giữ context tốt hơn" items={contextQuestions} featured />
      </div>
      <Caption>Câu hỏi form tốt không chỉ thu data. Nó giúp sales hiểu vì sao khách để lại thông tin.</Caption>
    </figure>
  );
}

const leadStages: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Tìm hiểu', subtitle: 'Cần nội dung, guide, case', icon: FileSearch },
  { title: 'So sánh', subtitle: 'Cần proof, khác biệt, điều kiện', icon: SearchCheck },
  { title: 'Có nhu cầu rõ', subtitle: 'Cần tư vấn cụ thể', icon: UserCheck },
  { title: 'Muốn báo giá', subtitle: 'Cần quy mô, điều kiện', icon: Quote, action: true },
  { title: 'Muốn audit', subtitle: 'Cần vấn đề, nguồn, hiện trạng', icon: ClipboardList, action: true },
];

export function LeadStageFromFormVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Lead readiness</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Form có thể giữ lại stage của khách</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {leadStages.map(({ title, subtitle, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Form tốt giúp sales biết khách đang ở stage nào để mở đầu đúng nhịp, không bán quá sớm.</Caption>
    </figure>
  );
}

const contextGroups: Array<{
  title: string;
  items: string[];
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Contact', items: ['Tên', 'SĐT / Email / Zalo'], icon: Mail },
  { title: 'Source', items: ['UTM / source', 'Campaign / angle', 'Landing page / CTA'], icon: Tags },
  { title: 'Need', items: ['Vấn đề chính', 'Stage', 'Offer khách đăng ký'], icon: BadgeCheck },
  { title: 'Sales', items: ['Owner', 'Trạng thái', 'Follow-up note', 'Lost reason'], icon: Users, action: true },
];

export function MinimumViableLeadContextVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Database className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Minimum viable lead context</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold leading-[1.35] text-brand-primary">
              Lead về CRM hoặc Sheet nên có context tối thiểu
            </h3>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contextGroups.map(({ title, items, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h4>
              <div className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                    <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>CRM không cần phức tạp ngay. Nhưng lead phải đủ context để sales tiếp nối và marketing học lại được.</Caption>
    </figure>
  );
}
