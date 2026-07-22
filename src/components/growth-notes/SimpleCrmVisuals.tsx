import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CalendarClock,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Flag,
  Inbox,
  Megaphone,
  MessageSquare,
  PhoneCall,
  Route,
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

type CrmItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const crmPurposes: CrmItem[] = [
  { title: 'Capture', subtitle: 'Ghi nhận lead về một nơi', icon: Inbox },
  { title: 'Assign', subtitle: 'Biết ai phụ trách', icon: UserCheck },
  { title: 'Status', subtitle: 'Biết khách đang ở bước nào', icon: Route },
  { title: 'Follow-up', subtitle: 'Không quên lần liên hệ tiếp theo', icon: CalendarClock, action: true },
  { title: 'Outcome', subtitle: 'Biết kết quả cuối cùng', icon: Flag, action: true },
  { title: 'Learning', subtitle: 'Marketing và sales cùng đọc lại', icon: BarChart3 },
];

export function SimpleCrmPurposeVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <Database className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-blue-100">Minimum operating system</p>
          <h3 className="mt-2 font-heading text-[21px] font-extrabold">Simple CRM</h3>
        </section>
        <div className="mx-auto h-6 w-px bg-brand-accent/30" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {crmPurposes.map(({ title, subtitle, icon: Icon, action }) => (
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
              <p className="mt-2 text-[11px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        CRM tối thiểu không bắt đầu từ phần mềm. Nó bắt đầu từ việc lead được ghi nhận, giao người xử lý, cập nhật trạng thái và không bị quên.
      </Caption>
    </figure>
  );
}

const noCrmItems = [
  'Lead rải rác nhiều nơi',
  'Không rõ ai phụ trách',
  'Gọi xong không có status',
  'Follow-up dựa vào trí nhớ',
  'Marketing và sales tranh luận bằng cảm giác',
];

const simpleCrmItems = [
  'Lead gom về một nơi',
  'Có owner rõ',
  'Có status tối thiểu',
  'Có ngày follow-up tiếp theo',
  'Founder đọc được nguồn, trạng thái, outcome',
];

export function NoCrmVsSimpleCrmVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Inbox className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Không có CRM</h3>
          </div>
          <div className="mt-5 space-y-3">
            {noCrmItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">CRM đơn giản</h3>
          </div>
          <div className="mt-5 space-y-3">
            {simpleCrmItems.map((item, index) => {
              const isAction = index >= 3;
              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                    isAction
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft'
                      : 'border-brand-accent/20 bg-brand-surface'
                  }`}
                >
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Caption>
        CRM đơn giản không làm sales giỏi lên ngay. Nhưng nó giúp team thấy lead đang ở đâu và đoạn nào đang bị rơi.
      </Caption>
    </figure>
  );
}

const leadFlow: CrmItem[] = [
  { title: 'Campaign / Traffic', subtitle: 'Ads, social, event', icon: Megaphone },
  { title: 'Contact Point', subtitle: 'Form, Zalo, hotline, QR', icon: MessageSquare },
  { title: 'CRM / Sheet', subtitle: 'Ghi nhận lead và source', icon: Database, action: true },
  { title: 'Owner', subtitle: 'Giao người xử lý', icon: UserCheck },
  { title: 'Sales Status', subtitle: 'Contacted, qualified, quoted', icon: Route },
  { title: 'Follow-up', subtitle: 'Next action, date, note', icon: CalendarClock, action: true },
  { title: 'Dashboard', subtitle: 'Đọc nguồn, status, outcome', icon: BarChart3, action: true },
];

export function LeadFlowToCrmVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {leadFlow.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < leadFlow.length - 1 && (
                <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-5">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Lead không nên dừng ở form submit. Lead cần đi tiếp vào CRM, được giao owner, cập nhật status và đọc lại trên dashboard.
      </Caption>
    </figure>
  );
}

const crmFieldGroups = [
  {
    title: 'Customer Info',
    fields: ['Tên', 'SĐT/email', 'Công ty/vai trò', 'Nhu cầu'],
    icon: Users,
  },
  {
    title: 'Source',
    fields: ['Lead source', 'Campaign', 'Landing/form/QR', 'Ngày tạo'],
    icon: Target,
  },
  {
    title: 'Sales Process',
    fields: ['Owner', 'Status', 'Lead quality', 'Next action', 'Follow-up date'],
    icon: PhoneCall,
    action: true,
  },
  {
    title: 'Outcome',
    fields: ['Quote', 'Won/lost', 'Lost reason', 'Final note'],
    icon: Flag,
    action: true,
  },
];

export function SimpleCrmFieldsVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-bg p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 md:p-8">
        {crmFieldGroups.map(({ title, fields, icon: Icon, action }) => (
          <section
            key={title}
            className={`rounded-brand-card border bg-brand-surface p-5 ${
              action ? 'border-brand-highlight/25' : 'border-brand-border'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${action ? 'bg-brand-highlight-soft text-brand-highlight' : 'bg-brand-accent-soft text-brand-accent'}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {fields.map((field) => (
                <span
                  key={field}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-bold ${
                    action
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft text-brand-highlight'
                      : 'border-brand-accent/20 bg-brand-accent-soft text-brand-accent'
                  }`}
                >
                  {field}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Caption>
        CRM tối thiểu nên đủ cột để biết lead là ai, đến từ đâu, ai xử lý, đang ở trạng thái nào và kết quả cuối cùng ra sao.
      </Caption>
    </figure>
  );
}

const crmChecklist = [
  'Lead có được gom về một nơi chưa?',
  'Có ghi source/campaign không?',
  'Có thông tin liên hệ tối thiểu không?',
  'Có nhu cầu/case quan tâm không?',
  'Có owner phụ trách không?',
  'Có status rõ không?',
  'Có last contact date không?',
  'Có next follow-up date không?',
  'Có next action không?',
  'Có note ngắn sau mỗi lần xử lý không?',
  'Có lost reason nếu mất không?',
  'Marketing có đọc được lead quality không?',
  'Founder có dashboard tối thiểu không?',
  'Team có review CRM mỗi tuần không?',
];

export function SimpleCrmChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist CRM đơn giản cho SME
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {crmChecklist.map((item, index) => {
            const isAction = [4, 5, 7, 8, 12, 13].includes(index);
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isAction ? 'bg-brand-highlight text-white' : 'bg-brand-accent text-white'}`}>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="pt-0.5 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>
        CRM đơn giản đạt yêu cầu khi team biết lead đến từ đâu, ai phụ trách, trạng thái gì, cần làm gì tiếp và kết quả cuối cùng ra sao.
      </Caption>
    </figure>
  );
}
