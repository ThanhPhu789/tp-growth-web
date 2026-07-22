import {
  BarChart3,
  CheckCircle2,
  FileText,
  LayoutTemplate,
  Megaphone,
  Route,
  Target,
  UserRound,
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

const tooEarlyItems = [
  'Offer chưa rõ',
  'Tệp khách chưa rõ',
  'Lead không biết về đâu',
  'Founder kỳ vọng doanh thu ngay',
  'Marketer thành người làm việc vặt',
];

const rightTimeItems = [
  'Có sản phẩm/offer tương đối rõ',
  'Có vài kênh bán hàng đang chạy',
  'Lead bắt đầu lặp lại',
  'Founder cần người vận hành hệ thống',
  'Có mục tiêu 60–90 ngày đầu',
];

export function FirstMarketerTimingVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Thuê quá sớm</h3>
          </div>
          <div className="mt-5 space-y-3">
            {tooEarlyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Thuê đúng thời điểm</h3>
          </div>
          <div className="mt-5 space-y-3">
            {rightTimeItems.map((item, index) => {
              const isAction = index === rightTimeItems.length - 1;
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
        Thời điểm thuê marketer đầu tiên không nằm ở cảm giác bận, mà nằm ở việc doanh nghiệp đã có đủ nền để người đó vận hành.
      </Caption>
    </figure>
  );
}

type RoleItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const firstMarketerRoles: RoleItem[] = [
  { title: 'Content', subtitle: 'Viết, angle, lịch nội dung', icon: FileText },
  { title: 'Campaign', subtitle: 'Brief, concept, launch checklist', icon: Megaphone },
  { title: 'Landing / Form', subtitle: 'Phối hợp page, CTA, data', icon: LayoutTemplate },
  { title: 'Ads coordination', subtitle: 'Hook, creative, signal, report', icon: Target },
  { title: 'Sales alignment', subtitle: 'Lead status, follow-up, feedback', icon: Users, action: true },
  { title: 'Reporting', subtitle: 'Dashboard tuần, bài học, việc tiếp theo', icon: BarChart3, action: true },
];

export function FirstMarketerRoleMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <UserRound className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-blue-100">Internal operator</p>
          <h3 className="mt-2 font-heading text-[21px] font-extrabold">First Marketer</h3>
        </section>
        <div className="mx-auto h-6 w-px bg-brand-accent/30" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {firstMarketerRoles.map(({ title, subtitle, icon: Icon, action }) => (
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
        Marketer đầu tiên trong SME không chỉ làm post. Họ là người nối content, campaign, landing page, lead, sales và report thành một nhịp vận hành.
      </Caption>
    </figure>
  );
}

const inHouseReasons = [
  'Cần người giữ context hằng tuần',
  'Cần nối marketing với sales',
  'Cần gom content/campaign/CRM/report',
  'Founder đang là nút cổ chai',
  'Cần xây hệ thống tối thiểu',
];

const agencyReasons = [
  'Direction đã rõ',
  'Cần năng lực chuyên môn sâu',
  'Có người nội bộ brief và kiểm soát',
  'Có ngân sách media/service đủ',
  'Cần tốc độ triển khai một mảng cụ thể',
];

export function FirstMarketerVsAgencyVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <UserRound className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold leading-[1.4] text-brand-primary">Nên thuê marketer đầu tiên khi…</h3>
          </div>
          <div className="mt-5 space-y-3">
            {inHouseReasons.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-accent/20 bg-brand-surface p-3.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-highlight/25 bg-brand-highlight-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Megaphone className="h-5 w-5 text-brand-highlight" aria-hidden="true" />
            <h3 className="font-heading text-[17px] font-extrabold leading-[1.4] text-brand-primary">Nên thuê agency khi…</h3>
          </div>
          <div className="mt-5 space-y-3">
            {agencyReasons.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-highlight/20 bg-brand-surface p-3.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-highlight" aria-hidden="true" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Caption>
        Marketer đầu tiên và agency không thay thế nhau hoàn toàn. Một bên giữ context nội bộ, một bên bổ sung năng lực triển khai chuyên sâu.
      </Caption>
    </figure>
  );
}
