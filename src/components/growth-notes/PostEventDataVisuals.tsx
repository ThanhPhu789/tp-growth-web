import {
  ArrowDown,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Filter,
  Flame,
  MessageCircle,
  Search,
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

const rawData = [
  'Tên và số điện thoại',
  'File check-in rời rạc',
  'Không biết khách quan tâm gì',
  'Sales gọi chung chung',
  'Khó đo outcome sau event',
];

const actionableData = [
  'Có source / event / session / booth',
  'Có tag nhu cầu hoặc case quan tâm',
  'Có ghi chú ngữ cảnh',
  'Có owner và next action',
  'Có status để đo tiếp',
];

export function RawVsActionableEventDataVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Data thô</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {rawData.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Data có thể follow-up</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {actionableData.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index >= actionableData.length - 2 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Data thô chỉ cho biết ai đã để lại thông tin. Data có ngữ cảnh mới giúp team biết nên follow-up ai, bằng nội dung gì và đo tiếp ra sao.
      </Caption>
    </figure>
  );
}

type PipelineStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const pipeline: PipelineStep[] = [
  { title: 'Collect', subtitle: 'Check-in, QR, booth, inbox', icon: Database },
  { title: 'Clean', subtitle: 'Xoá trùng, sửa thiếu, chuẩn hoá', icon: Filter },
  { title: 'Enrich', subtitle: 'Thêm source, role, note, context', icon: Search },
  { title: 'Tag', subtitle: 'Gắn nhu cầu / case', icon: Tags },
  { title: 'Segment', subtitle: 'Hot / warm / nurture', icon: Users },
  { title: 'Assign', subtitle: 'Giao owner follow-up', icon: UserCheck, highlight: true },
  { title: 'Update Status', subtitle: 'Contacted, qualified, meeting, quote', icon: BadgeCheck, highlight: true },
  { title: 'Review', subtitle: 'Đọc dashboard và rút bài học', icon: BarChart3, highlight: true },
];

export function PostEventDataPipelineVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Post-event data pipeline</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Từ data thô đến learning</h3>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-3">
          {pipeline.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index >= 4 ? 'lg:mt-3' : ''}`}>
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < pipeline.length - 1 && (
                <div className="flex h-8 items-center justify-center text-brand-accent lg:hidden">
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Data sau event nên đi qua một pipeline rõ: gom, làm sạch, gắn tag, phân nhóm, giao owner, follow-up, cập nhật status và review.
      </Caption>
    </figure>
  );
}

const segments = [
  { title: 'Hot Intent', subtitle: 'Muốn tư vấn / demo / báo giá', action: 'Sales liên hệ sớm', icon: Flame, highlight: true },
  { title: 'Specific Interest', subtitle: 'Quan tâm một case cụ thể', action: 'Gửi tài liệu đúng nhu cầu', icon: Tags },
  { title: 'Information Seeker', subtitle: 'Muốn tài liệu, chưa sẵn sàng', action: 'Nurture bằng nội dung', icon: MessageCircle },
  { title: 'Partner / Network', subtitle: 'Đối tác, cộng đồng, KOL chuyên môn', action: 'Kết nối dài hạn', icon: Users },
  { title: 'Not-fit / Invalid', subtitle: 'Thiếu thông tin hoặc không phù hợp', action: 'Làm sạch hoặc loại khỏi sales follow-up', icon: Filter },
];

export function EventDataSegmentationVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {segments.map(({ title, subtitle, action, icon: Icon, highlight }, index) => (
          <section key={title} className={`rounded-2xl border p-5 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index === segments.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            <div className="mt-4 rounded-xl border border-brand-border bg-brand-surface px-3 py-2.5">
              <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Action</p>
              <p className="mt-1 text-[11px] font-semibold text-brand-secondary">{action}</p>
            </div>
          </section>
        ))}
      </div>
      <Caption>
        Không phải data event nào cũng nên được follow-up giống nhau. Phân nhóm giúp team giữ đúng ngữ cảnh và ưu tiên đúng nguồn lực.
      </Caption>
    </figure>
  );
}

const priorityGroups = [
  { title: 'Hot', signal: 'Hỏi giá, demo, mẫu, dự án cụ thể', action: 'Sales liên hệ 24–48h', icon: Flame, className: 'border-brand-highlight/30 bg-brand-highlight-soft', iconClass: 'text-brand-highlight' },
  { title: 'Warm', signal: 'Quan tâm case, đã quét QR / form', action: 'Gửi tài liệu đúng nhu cầu', icon: Tags, className: 'border-brand-accent/25 bg-brand-accent-soft', iconClass: 'text-brand-accent' },
  { title: 'Nurture', signal: 'Check-in, nhận recap, chưa rõ nhu cầu', action: 'Nuôi bằng nội dung', icon: MessageCircle, className: 'border-brand-accent/15 bg-brand-accent-soft', iconClass: 'text-brand-accent' },
  { title: 'Not-fit / Invalid', signal: 'Sai tệp, thiếu thông tin, data lỗi', action: 'Làm sạch hoặc loại khỏi pipeline chính', icon: Filter, className: 'border-brand-border bg-brand-bg', iconClass: 'text-brand-soft-text' },
];

export function EventFollowupPriorityMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        {priorityGroups.map(({ title, signal, action, icon: Icon, className, iconClass }) => (
          <section key={title} className={`rounded-2xl border p-5 ${className}`}>
            <Icon className={`h-5 w-5 ${iconClass}`} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-3 text-[11px] font-medium leading-[1.5] text-brand-secondary">{signal}</p>
            <div className="mt-4 rounded-xl bg-brand-surface px-3 py-2.5">
              <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Follow-up</p>
              <p className="mt-1 text-[11px] font-bold text-brand-secondary">{action}</p>
            </div>
          </section>
        ))}
      </div>
      <Caption>
        Ưu tiên follow-up giúp sales không bị chìm trong danh sách thô và giúp khách nhận đúng nội dung theo mức độ quan tâm.
      </Caption>
    </figure>
  );
}

const checklist = [
  'Đã gom data từ check-in, QR, form, booth note, inbox chưa?',
  'Đã đưa về một CRM / Sheet chung chưa?',
  'Đã xoá trùng và chuẩn hoá thông tin chưa?',
  'Đã gắn source / event / booth / session chưa?',
  'Đã gắn tag nhu cầu hoặc case quan tâm chưa?',
  'Đã phân nhóm hot / warm / nurture / not-fit chưa?',
  'Đã giao owner follow-up chưa?',
  'Đã có nội dung follow-up theo từng nhóm chưa?',
  'Đã follow-up nhóm hot trong 24–48h chưa?',
  'Đã cập nhật status sau follow-up chưa?',
  'Dashboard có đọc contacted / qualified / demo / quote không?',
  'Team đã rút bài học cho event / campaign sau chưa?',
];

export function PostEventDataChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist xử lý data sau event</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklist.map((item, index) => {
            const isAction = index >= 8 && index <= 10;
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
        Checklist này giúp data sau event không nằm chết trong file check-in, mà đi tiếp thành follow-up, sales status và bài học campaign.
      </Caption>
    </figure>
  );
}
