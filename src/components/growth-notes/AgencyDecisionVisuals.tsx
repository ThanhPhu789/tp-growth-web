import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  FileText,
  Gauge,
  Image,
  LayoutTemplate,
  Megaphone,
  Route,
  Search,
  Target,
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

const unclearHireItems = [
  'Tệp khách chưa rõ',
  'Offer chưa chốt',
  'Website/landing page chưa sẵn sàng',
  'Lead không có CRM/status',
  'Founder kỳ vọng agency tự kéo tăng trưởng',
];

const rightHireItems = [
  'Bài toán đã rõ',
  'Có người nội bộ brief',
  'Có asset/proof cơ bản',
  'Có tracking/dashboard tối thiểu',
  'Cần chuyên môn sâu để triển khai nhanh hơn',
];

export function AgencyTimingFitVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Thuê để che sự mơ hồ</h3>
          </div>
          <div className="mt-5 space-y-3">
            {unclearHireItems.map((item) => (
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
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Thuê đúng lúc</h3>
          </div>
          <div className="mt-5 space-y-3">
            {rightHireItems.map((item, index) => {
              const isAction = index === 3;
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
        Agency phát huy tốt hơn khi doanh nghiệp thuê họ để giải một bài toán rõ, không phải để thay doanh nghiệp định nghĩa toàn bộ bài toán.
      </Caption>
    </figure>
  );
}

type ProblemFitItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const problemFits: ProblemFitItem[] = [
  { title: 'Paid Ads', subtitle: 'Media, creative test, conversion signal', icon: Megaphone },
  { title: 'SEO', subtitle: 'Technical, content, search roadmap', icon: Search },
  { title: 'Landing Page', subtitle: 'Campaign page, CRO, form, CTA', icon: LayoutTemplate, action: true },
  { title: 'Tracking', subtitle: 'GTM, pixel, event, dashboard', icon: Gauge, action: true },
  { title: 'Creative Production', subtitle: 'Hình, video, content package', icon: Image },
  { title: 'Campaign Execution', subtitle: 'Direction rõ, cần triển khai nhanh', icon: Target },
];

export function AgencyProblemFitVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-bg p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 md:p-8">
        {problemFits.map(({ title, subtitle, icon: Icon, action }) => (
          <section
            key={title}
            className={`rounded-brand-card border bg-brand-surface p-5 ${
              action ? 'border-brand-highlight/25' : 'border-brand-border'
            }`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${action ? 'bg-brand-highlight-soft text-brand-highlight' : 'bg-brand-accent-soft text-brand-accent'}`}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-2 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
          </section>
        ))}
      </div>
      <Caption>
        Agency không phải một đáp án chung cho mọi vấn đề. Hãy thuê agency theo loại bài toán cụ thể cần giải.
      </Caption>
    </figure>
  );
}

const briefBlocks = [
  { title: 'Business context', icon: FileSearch },
  { title: 'Objective', icon: Target },
  { title: 'Audience', icon: Users },
  { title: 'Offer', icon: Megaphone },
  { title: 'Proof assets', icon: Image },
  { title: 'Existing system', icon: LayoutTemplate },
  { title: 'Scope', icon: ClipboardCheck, action: true },
  { title: 'KPI / signal', icon: BarChart3, action: true },
  { title: 'Working rhythm', icon: Route, action: true },
  { title: 'Constraints', icon: FileText },
];

export function AgencyBriefMinimumVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Agency Brief Minimum</h3>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {briefBlocks.map(({ title, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một brief tối thiểu giúp agency hiểu bài toán, phạm vi, cách đo và cách phối hợp trước khi bắt đầu làm.
      </Caption>
    </figure>
  );
}
