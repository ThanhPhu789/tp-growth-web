import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Database,
  FormInput,
  MessageCircle,
  Presentation,
  QrCode,
  ScanLine,
  Send,
  Tags,
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

const checkinOnly = [
  'Đếm số người tham dự',
  'Chụp hình recap',
  'Có danh sách liên hệ thô',
  'Follow-up chung chung',
  'Khó biết event tạo cơ hội gì',
];

const followupDriven = [
  'Biết khách thuộc nhóm nào',
  'Ghi nhận vấn đề họ quan tâm',
  'Phân nhóm data sau event',
  'Follow-up theo ngữ cảnh',
  'Đo được sales status / outcome',
];

export function EventCheckinVsFollowupVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <ScanLine className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Event dừng ở check-in</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {checkinOnly.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <UserCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Event có data follow-up</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {followupDriven.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index >= followupDriven.length - 2 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Check-in chỉ cho biết ai đã đến. Data follow-up mới giúp team biết nên tiếp tục cuộc trò chuyện với ai và bằng nội dung gì.
      </Caption>
    </figure>
  );
}

type EventStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const eventFlow: EventStep[] = [
  { title: 'Pre-event Content', subtitle: 'Lý do tham gia', icon: Presentation },
  { title: 'Registration', subtitle: 'Thông tin và nhu cầu ban đầu', icon: FormInput },
  { title: 'Check-in', subtitle: 'Xác nhận tham dự', icon: ScanLine },
  { title: 'Booth Interaction', subtitle: 'Demo, sample, tư vấn', icon: MessageCircle },
  { title: 'QR / Interest Form', subtitle: 'Chọn case quan tâm', icon: QrCode },
  { title: 'Segmentation', subtitle: 'Phân nhóm data', icon: Tags },
  { title: 'Follow-up', subtitle: 'Gửi đúng ngữ cảnh', icon: Send, highlight: true },
  { title: 'Sales Status', subtitle: 'Contacted, qualified, quoted', icon: UserCheck, highlight: true },
  { title: 'Dashboard Learning', subtitle: 'Rút kinh nghiệm campaign', icon: BarChart3 },
];

export function OfflineEventDataFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Offline event data flow</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Từ lời mời đến campaign learning</h3>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-3">
          {eventFlow.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index >= 5 ? 'lg:mt-3' : ''}`}>
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < eventFlow.length - 1 && (
                <div className="flex h-8 items-center justify-center text-brand-accent lg:hidden">
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Một event offline có giá trị hơn khi dữ liệu đi được từ đăng ký, check-in, tương tác tại booth đến phân nhóm, follow-up và sales status.
      </Caption>
    </figure>
  );
}

const captureGroups = [
  { title: 'Basic Info', examples: 'Tên, SĐT/email, công ty, vai trò', icon: Users },
  { title: 'Source / Context', examples: 'Kênh, booth, QR, form', icon: QrCode },
  { title: 'Interest / Need', examples: 'Case, nhu cầu, sản phẩm/giải pháp', icon: Tags },
  { title: 'Follow-up Preference', examples: 'Tài liệu, kênh liên hệ, thời điểm', icon: Send, highlight: true },
  { title: 'Sales Status', examples: 'Contacted, qualified, meeting, quote, won/lost', icon: BadgeCheck, highlight: true },
];

export function EventDataCaptureMapVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {captureGroups.map(({ title, examples, icon: Icon, highlight }, index) => (
          <section key={title} className={`rounded-2xl border p-5 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index === captureGroups.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-3 text-[11px] font-medium leading-[1.55] text-brand-secondary">{examples}</p>
          </section>
        ))}
      </div>
      <Caption>
        Data event nên đủ để follow-up đúng ngữ cảnh, không chỉ đủ để lưu một danh sách tên và số điện thoại.
      </Caption>
    </figure>
  );
}

const timeline = [
  {
    time: '0–24h',
    actions: 'Clean data, tag interest, gửi tài liệu đã hứa',
    icon: Database,
  },
  {
    time: '24–48h',
    actions: 'Sales liên hệ hot leads, cập nhật status đầu tiên',
    icon: UserCheck,
    highlight: true,
  },
  {
    time: '3–7 days',
    actions: 'Follow-up theo segment, mời demo hoặc meeting',
    icon: Send,
  },
  {
    time: '2–4 weeks',
    actions: 'Nurture, quote/outcome, campaign learning',
    icon: BarChart3,
  },
];

export function PostEventFollowupTimelineVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Clock3 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Post-event rhythm</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Follow-up timeline</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch">
          {timeline.map(({ time, actions, icon: Icon, highlight }, index) => (
            <div key={time} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <p className={`mt-4 text-[11px] font-black uppercase tracking-[0.12em] ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`}>{time}</p>
                <p className="mt-2 text-[11px] font-semibold leading-[1.55] text-brand-secondary">{actions}</p>
              </section>
              {index < timeline.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-7">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Follow-up sau event nên có nhịp. Càng để lâu, ngữ cảnh càng nguội và data càng khó chuyển thành cuộc trò chuyện thật.
      </Caption>
    </figure>
  );
}

const followupChecklist = [
  'Event có objective rõ chưa?',
  'Tệp khách chính là ai?',
  'Tagline / direction có dùng tại booth và landing / form không?',
  'QR / form có hỏi nhu cầu hoặc case quan tâm không?',
  'Data có source / event / session / booth không?',
  'Có người phụ trách gom và làm sạch data không?',
  'Có phân nhóm hot / warm / nurture hoặc theo nhu cầu không?',
  'Follow-up 0–24h có nội dung gì?',
  'Sales có biết angle để gọi không?',
  'Có status sau follow-up không?',
  'Dashboard có đọc QR, form, contacted, qualified, meeting / quote không?',
  'Sau event có rút bài học cho campaign sau không?',
];

export function EventFollowupChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist event offline → data follow-up</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {followupChecklist.map((item, index) => {
            const isAction = index === 7 || index >= 9;
            return (
              <div key={item} className={`flex items-start gap-3 rounded-2xl border p-4 ${isAction ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'}`}>
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isAction ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'}`}>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="pt-0.5 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>
        Checklist này giúp event không dừng ở check-in, mà đi tiếp thành data, follow-up, sales status và bài học campaign.
      </Caption>
    </figure>
  );
}
