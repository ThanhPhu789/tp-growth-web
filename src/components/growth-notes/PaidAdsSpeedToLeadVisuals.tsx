import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Clock3,
  Database,
  FileCheck2,
  Flame,
  FormInput,
  MessageCircle,
  PhoneCall,
  RefreshCw,
  Send,
  Snowflake,
  UserCheck,
  UserRoundCog,
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

const leadTemperature: FlowStep[] = [
  { title: 'Submit / Inbox', subtitle: 'Intent còn mới', icon: Flame },
  { title: 'Phản hồi nhanh', subtitle: 'Khách nhớ context', icon: PhoneCall },
  { title: 'Phản hồi chậm', subtitle: 'Bắt đầu quên hoặc so sánh', icon: Clock3 },
  { title: 'Không có next action', subtitle: 'Lead trôi trong hệ thống', icon: RefreshCw, highlight: true },
  { title: 'Lost / Cold', subtitle: 'Bị ghi không nghe máy hoặc không nhu cầu', icon: Snowflake, highlight: true },
];

export function LeadTemperatureAfterSubmitVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Lead temperature</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Sau form submit, lead bắt đầu nguội</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {leadTemperature.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < leadTemperature.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent md:hidden" aria-hidden="true" />
                  <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent md:block" aria-hidden="true" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Lead không giữ nguyên nhiệt độ sau khi submit. Phản hồi chậm và thiếu next action làm lead dễ nguội.</Caption>
    </figure>
  );
}

const handoffFlow: FlowStep[] = [
  { title: 'Ads / Creative', subtitle: 'Tạo kỳ vọng', icon: MessageCircle },
  { title: 'Landing Page / Form', subtitle: 'Thu thông tin', icon: FormInput },
  { title: 'CRM / Sheet', subtitle: 'Ghi source, campaign, nhu cầu', icon: Database },
  { title: 'Owner', subtitle: 'Ai xử lý?', icon: UserRoundCog, highlight: true },
  { title: 'First Response', subtitle: 'Gọi hoặc nhắn nhanh', icon: PhoneCall },
  { title: 'Qualification', subtitle: 'Đúng nhu cầu và tệp?', icon: UserCheck },
  { title: 'Next Action', subtitle: 'Hẹn lại, báo giá, demo', icon: Send, highlight: true },
  { title: 'Feedback Loop', subtitle: 'Note quay lại marketing', icon: RefreshCw, highlight: true },
];

export function AdsToSalesLeadHandoffVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Lead handoff</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Từ Ads sang Sales</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {handoffFlow.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < handoffFlow.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {(index + 1) % 4 !== 0 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Lead handoff tốt cho sales biết lead đến từ đâu, quan tâm điều gì, ai xử lý và bước tiếp theo là gì.</Caption>
    </figure>
  );
}

const crmPipeline: FlowStep[] = [
  { title: 'New', subtitle: 'Lead vừa vào', icon: Flame },
  { title: 'Assigned', subtitle: 'Đã có owner', icon: UserRoundCog },
  { title: 'Contacted', subtitle: 'Đã gọi hoặc nhắn', icon: PhoneCall },
  { title: 'Qualified / Unqualified', subtitle: 'Đã xác định fit', icon: UserCheck },
  { title: 'Next Action', subtitle: 'Hẹn bước tiếp theo', icon: Send, highlight: true },
  { title: 'Quote / Meeting / Demo', subtitle: 'Cơ hội đang đi tiếp', icon: FileCheck2 },
  { title: 'Won / Lost Reason', subtitle: 'Outcome và lý do', icon: BadgeCheck, highlight: true },
];

export function MinimalCRMStatusForPaidAdsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">CRM pipeline</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Status tối thiểu cho paid ads lead</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {crmPipeline.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              } ${index === crmPipeline.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center justify-between gap-2">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-3 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-1.5 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3">
          <p className="text-center text-[12px] font-bold leading-[1.55] text-brand-secondary">
            Nên có: owner, source / campaign, first response time, next action, follow-up date và lost reason.
          </p>
        </div>
      </div>
      <Caption>Một CRM tối thiểu phải cho biết lead đang ở đâu, ai xử lý và bước tiếp theo là gì.</Caption>
    </figure>
  );
}
