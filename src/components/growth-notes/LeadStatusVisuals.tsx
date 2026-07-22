import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CalendarClock,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Flag,
  HelpCircle,
  ListChecks,
  MessageSquare,
  PhoneCall,
  Route,
  Target,
  UserCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type StatusItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const statusPurposes: StatusItem[] = [
  { title: 'Current Step', subtitle: 'Khách đang ở bước nào?', icon: Route },
  { title: 'Owner', subtitle: 'Ai đang phụ trách?', icon: UserCheck },
  { title: 'Next Action', subtitle: 'Cần làm gì tiếp?', icon: ListChecks, action: true },
  { title: 'Follow-up Date', subtitle: 'Khi nào xử lý lại?', icon: CalendarClock },
  { title: 'Quality Signal', subtitle: 'Lead đúng hay lệch?', icon: Target },
  { title: 'Outcome', subtitle: 'Có báo giá, thắng, mất chưa?', icon: Flag, action: true },
];

export function LeadStatusPurposeVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <ListChecks className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-blue-100">Shared pipeline language</p>
          <h3 className="mt-2 font-heading text-[21px] font-extrabold">Lead Status</h3>
        </section>
        <div className="mx-auto h-6 w-px bg-brand-accent/30" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {statusPurposes.map(({ title, subtitle, icon: Icon, action }) => (
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
        Lead status tốt giúp team biết khách đang ở đâu, ai xử lý, cần làm gì tiếp và kết quả đang đi tới đâu.
      </Caption>
    </figure>
  );
}

const calledOnlyItems = [
  'Không biết khách có bắt máy không',
  'Không biết đúng nhu cầu không',
  'Không biết việc tiếp theo là gì',
  'Không biết khi nào follow-up',
  'Founder khó đọc pipeline',
];

const clearStatusItems = [
  'Cannot contact',
  'Wrong fit',
  'Interested',
  'Qualified',
  'Quoted / Follow-up later / Won / Lost',
];

export function CalledVsClearStatusVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <PhoneCall className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Chỉ ghi “đã gọi”</h3>
          </div>
          <div className="mt-5 space-y-3">
            {calledOnlyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft-text" aria-hidden="true" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Status rõ</h3>
          </div>
          <div className="mt-5 space-y-3">
            {clearStatusItems.map((item, index) => {
              const isAction = index === clearStatusItems.length - 1;
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
        “Đã gọi” chỉ nói sales đã làm một hành động. Status rõ mới nói lead đang ở đâu trong quá trình bán hàng.
      </Caption>
    </figure>
  );
}

const primaryStatusFlow: StatusItem[] = [
  { title: 'New', subtitle: 'Lead mới về', icon: FileText },
  { title: 'Assigned', subtitle: 'Đã giao owner', icon: UserCheck },
  { title: 'Contacted', subtitle: 'Đã liên hệ được', icon: PhoneCall },
  { title: 'Qualified', subtitle: 'Có nhu cầu phù hợp', icon: Target },
  { title: 'Need Material', subtitle: 'Cần tài liệu/demo/mẫu', icon: FileCheck2 },
  { title: 'Meeting / Demo', subtitle: 'Hẹn trao đổi sâu hơn', icon: MessageSquare },
  { title: 'Quoted', subtitle: 'Đã gửi báo giá', icon: ClipboardCheck, action: true },
  { title: 'Won / Lost', subtitle: 'Kết quả cuối', icon: Flag, action: true },
  { title: 'Follow-up Later', subtitle: 'Chưa sẵn sàng, hẹn lại', icon: CalendarClock, action: true },
];

export function SimpleLeadStatusFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {primaryStatusFlow.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`relative rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
        <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <span className="rounded-full border border-brand-border bg-brand-bg px-4 py-2 text-[11px] font-bold text-brand-secondary">
            Side branch: Cannot Contact
          </span>
          <ArrowRight className="hidden h-3.5 w-3.5 text-brand-soft-text sm:block" aria-hidden="true" />
          <ArrowDown className="h-3.5 w-3.5 text-brand-soft-text sm:hidden" aria-hidden="true" />
          <span className="rounded-full border border-brand-border bg-brand-bg px-4 py-2 text-[11px] font-bold text-brand-secondary">
            Side branch: Wrong Fit
          </span>
        </div>
      </div>
      <Caption>
        Bộ status tối thiểu giúp team nhìn lead như một dòng chảy, không phải một danh sách đã gọi hay chưa gọi.
      </Caption>
    </figure>
  );
}

const meaningActionRows = [
  ['New', 'Lead mới về', 'Giao owner / liên hệ sớm'],
  ['Cannot contact', 'Chưa bắt máy', 'Thử lại theo lịch'],
  ['Qualified', 'Có nhu cầu phù hợp', 'Tư vấn sâu / gửi giải pháp'],
  ['Need material', 'Cần thêm bằng chứng', 'Gửi case, tài liệu, mẫu'],
  ['Quoted', 'Đã gửi báo giá', 'Follow-up quyết định'],
  ['Follow-up later', 'Chưa sẵn sàng', 'Đặt ngày follow-up tiếp'],
];

export function StatusMeaningActionMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="hidden grid-cols-[0.8fr_1fr_1.3fr] gap-3 border-b border-brand-border pb-3 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text md:grid">
          <span>Status</span>
          <span>Meaning</span>
          <span>Next action</span>
        </div>
        <div className="mt-3 space-y-3">
          {meaningActionRows.map(([status, meaning, action]) => (
            <section key={status} className="grid gap-3 rounded-2xl border border-brand-border bg-brand-bg p-4 md:grid-cols-[0.8fr_1fr_1.3fr] md:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:hidden">Status</p>
                <p className="mt-1 font-heading text-[13px] font-extrabold text-brand-primary md:mt-0">{status}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:hidden">Meaning</p>
                <p className="mt-1 text-[12px] font-semibold text-brand-accent md:mt-0">{meaning}</p>
              </div>
              <div className="rounded-xl border border-brand-highlight/20 bg-brand-highlight-soft px-3 py-2.5">
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-highlight md:hidden">Next action</p>
                <p className="mt-1 text-[12px] font-semibold text-brand-secondary md:mt-0">{action}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Mỗi status nên nói rõ ý nghĩa và việc tiếp theo. Nếu không có next action, CRM rất dễ trở thành nơi lưu dữ liệu chết.
      </Caption>
    </figure>
  );
}

const leadStatusChecklist = [
  'Status có được định nghĩa rõ chưa?',
  'Có phân biệt New và Assigned không?',
  'Có phân biệt Contacted và Cannot contact không?',
  'Có phân biệt Wrong fit và Qualified không?',
  'Có status Need material / Need more info không?',
  'Có status Quoted không?',
  'Có status Won/Lost không?',
  'Có Follow-up later kèm ngày hẹn lại không?',
  'Mỗi status có next action rõ không?',
  'Sales có cập nhật status sau mỗi lần xử lý không?',
  'Có owner cho từng lead không?',
  'Có lost reason khi mất không?',
  'Marketing có đọc được lead quality theo status không?',
  'Founder có dashboard theo status không?',
];

export function LeadStatusChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist lead status trong CRM
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {leadStatusChecklist.map((item, index) => {
            const isAction = [7, 8, 9, 13].includes(index);
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
        Lead status đạt yêu cầu khi sales dùng được, marketing học được và founder nhìn được pipeline thật.
      </Caption>
    </figure>
  );
}
