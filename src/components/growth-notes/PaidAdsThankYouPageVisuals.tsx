import {
  ArrowDown,
  ArrowRight,
  BellRing,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  FormInput,
  Gauge,
  Handshake,
  MessageCircleMore,
  PhoneCall,
  Route,
  ShieldCheck,
  Tags,
  Timer,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const postSubmitSteps: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Form Submit', subtitle: 'Khách vừa thể hiện intent', icon: FormInput },
  { title: 'Thank-you Page', subtitle: 'Xác nhận và dẫn tiếp', icon: CheckCircle2 },
  { title: 'Tracking Event', subtitle: 'Lead / CompleteRegistration', icon: Gauge },
  { title: 'CRM Entry', subtitle: 'Source, campaign, angle, form answer', icon: Database, action: true },
  { title: 'Sales Alert', subtitle: 'Ai xử lý, trong bao lâu?', icon: BellRing, action: true },
  { title: 'First Follow-up', subtitle: 'Mở đầu đúng context', icon: PhoneCall },
  { title: 'Next Action', subtitle: 'Call, Zalo, booking, quote, audit', icon: CalendarCheck2 },
];

export function PostSubmitFunnelChainVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Post-submit funnel</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">
          Submit là điểm chuyển giao, không phải điểm kết thúc
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {postSubmitSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
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
              {index < postSubmitSteps.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {index % 4 !== 3 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Form submit là điểm chuyển giao. Sau đó vẫn còn thank-you page, tracking, CRM, sales alert, first follow-up và next action.
      </Caption>
    </figure>
  );
}

const thankYouJobs: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Confirm', subtitle: 'Xác nhận đúng offer', icon: CheckCircle2 },
  { title: 'Set Expectation', subtitle: 'Khi nào, ai liên hệ?', icon: Timer },
  { title: 'Guide Next Step', subtitle: 'Call, Zalo, booking, chuẩn bị gì?', icon: Route },
  { title: 'Keep Context', subtitle: 'Nhắc lại vấn đề vừa đăng ký', icon: Tags },
  { title: 'Support Tracking', subtitle: 'Event, source, campaign rõ', icon: Gauge, action: true },
  { title: 'Warm Sales', subtitle: 'Giúp sales mở đầu đúng', icon: Handshake, action: true },
];

export function ThankYouPageJobMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Post-submit job map</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Thank-you page nên làm 6 việc</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {thankYouJobs.map(({ title, subtitle, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[14px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Thank-you page không phải trang cảm ơn cho có. Nó xác nhận offer, đặt kỳ vọng, dẫn bước tiếp theo và giữ context cho sales.
      </Caption>
    </figure>
  );
}

const trackingChecks: Array<{
  text: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { text: 'Event chỉ bắn sau submit thành công', icon: FileCheck2 },
  { text: 'Không đếm trùng khi refresh', icon: ShieldCheck },
  { text: 'Có event_id / dedup khi dùng server-side', icon: ClipboardCheck, action: true },
  { text: 'UTM / source / campaign không mất', icon: Tags },
  { text: 'Lead vào CRM đúng field', icon: Database, action: true },
  { text: 'Zalo / call / booking click được ghi nhận nếu cần', icon: MessageCircleMore },
  { text: 'Thank-you page không tạo conversion giả', icon: CheckCircle2 },
  { text: 'Sales outcome có đường quay lại report', icon: PhoneCall, action: true },
];

export function PostSubmitTrackingQAVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Post-submit tracking QA</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold leading-[1.35] text-brand-primary">
              Trước khi scale lead campaign, kiểm post-submit tracking
            </h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {trackingChecks.map(({ text, icon: Icon, action }) => (
            <section
              key={text}
              className={`flex min-w-0 items-start gap-3 rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  action
                    ? 'bg-brand-highlight text-white'
                    : 'bg-brand-accent-soft text-brand-accent'
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{text}</p>
              <Check className="ml-auto mt-1 h-3.5 w-3.5 shrink-0 text-brand-soft-text" aria-hidden="true" />
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Post-submit tracking sai làm campaign học sai. Trước khi scale, cần chắc rằng lead event và CRM data phản ánh đúng hành động thật.
      </Caption>
    </figure>
  );
}
