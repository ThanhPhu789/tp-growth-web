import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Database,
  FileCheck2,
  FileText,
  Flag,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
  Route,
  ShieldCheck,
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

type VisualItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const readinessItems: VisualItem[] = [
  { title: 'Direction', subtitle: 'Objective, audience, insight', icon: Target },
  { title: 'Concept', subtitle: 'Message, tagline, offer', icon: Route },
  { title: 'Creative', subtitle: 'Content, design, ads', icon: Megaphone },
  { title: 'Landing Page', subtitle: 'Hero, proof, CTA, mobile', icon: LayoutTemplate },
  { title: 'Form / Data', subtitle: 'Field, source, destination', icon: Database, action: true },
  { title: 'Tracking', subtitle: 'Event, UTM, conversion', icon: MousePointerClick, action: true },
  { title: 'Sales / Follow-up', subtitle: 'Script, owner, status', icon: Users, action: true },
  { title: 'Dashboard', subtitle: 'Read signal, learn, improve', icon: BarChart3 },
];

export function CampaignLaunchReadinessMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <ShieldCheck className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-blue-100">System check</p>
          <h3 className="mt-2 font-heading text-[21px] font-extrabold">Launch Readiness</h3>
        </section>
        <div className="mx-auto h-6 w-px bg-brand-accent/30" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {readinessItems.map(({ title, subtitle, icon: Icon, action }) => (
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
        Launch readiness không chỉ là đủ file để chạy. Nó là trạng thái campaign đã đủ rõ, đủ khớp, đủ đo và đủ follow-up.
      </Caption>
    </figure>
  );
}

const launchFlow: VisualItem[] = [
  { title: 'Direction', subtitle: 'Mục tiêu, tệp, insight', icon: Target },
  { title: 'Concept', subtitle: 'Message, tagline, offer', icon: Route },
  { title: 'Content / Design', subtitle: 'Post, visual, proof', icon: FileText },
  { title: 'Ads', subtitle: 'Hook, creative, UTM', icon: Megaphone },
  { title: 'Landing / Form', subtitle: 'CTA, data, mobile', icon: LayoutTemplate, action: true },
  { title: 'Sales / Follow-up', subtitle: 'Script, status, next action', icon: Users, action: true },
  { title: 'Dashboard', subtitle: 'Đọc tín hiệu sau launch', icon: BarChart3, action: true },
];

export function CampaignLaunchFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {launchFlow.map(({ title, subtitle, icon: Icon, action }, index) => (
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
              {index < launchFlow.length - 1 && (
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
        Trước launch, hãy nhìn campaign như một flow. Một đoạn lệch có thể làm khách rơi ở đoạn chuyển tiếp.
      </Caption>
    </figure>
  );
}

const trackingChecks: VisualItem[] = [
  { title: 'Page / CTA', subtitle: 'PageView, CTA click', icon: MousePointerClick },
  { title: 'Form Submit', subtitle: 'Success state, lead event', icon: FileCheck2 },
  { title: 'Source / UTM', subtitle: 'Campaign, medium, content', icon: Route },
  { title: 'Data Destination', subtitle: 'CRM, Sheet, email, webhook', icon: Database, action: true },
  { title: 'Sales Fields', subtitle: 'Need, source, owner, status', icon: Users },
  { title: 'Dashboard', subtitle: 'Read lead, status, outcome', icon: BarChart3, action: true },
];

export function TrackingDataLaunchCheckVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-bg p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 md:p-8">
        {trackingChecks.map(({ title, subtitle, icon: Icon, action }) => (
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
        Tracking tốt không chỉ để báo cáo. Nó giúp team biết campaign có đang tạo đúng tín hiệu và data có đi được đến nơi cần xử lý không.
      </Caption>
    </figure>
  );
}

const launchRisks: VisualItem[] = [
  { title: 'Message Risk', subtitle: 'Social/ads/page có lệch không?', icon: Megaphone },
  { title: 'Landing Risk', subtitle: 'Mobile, CTA, form, thank-you', icon: LayoutTemplate },
  { title: 'Tracking Risk', subtitle: 'Event, UTM, dashboard', icon: MousePointerClick, action: true },
  { title: 'Data Risk', subtitle: 'Field, source, destination', icon: Database, action: true },
  { title: 'Sales Risk', subtitle: 'Script, owner, status', icon: Users, action: true },
  { title: 'Decision Risk', subtitle: 'Ai có quyền sửa/tắt/tăng?', icon: Flag },
];

export function PreLaunchRiskCheckVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 md:p-8">
        {launchRisks.map(({ title, subtitle, icon: Icon, action }, index) => (
          <section
            key={title}
            className={`rounded-2xl border p-5 ${
              action
                ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                : 'border-brand-accent/20 bg-brand-accent-soft'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <span className="text-[10px] font-black tracking-[0.14em] text-brand-soft-text">0{index + 1}</span>
            </div>
            <h3 className="mt-5 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-2 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
          </section>
        ))}
      </div>
      <Caption>
        Pre-launch risk check giúp team thấy trước những lỗi có thể làm campaign rơi sau khi đã bật chạy.
      </Caption>
    </figure>
  );
}

const checklistGroups = [
  {
    title: 'Direction & Concept',
    items: ['Objective rõ', 'Audience rõ', 'Core message rõ', 'Offer/CTA rõ'],
  },
  {
    title: 'Creative & Ads',
    items: ['Content angle bám concept', 'Visual nhấn đúng proof/CTA', 'Ads hook khớp landing page', 'UTM/campaign naming thống nhất'],
  },
  {
    title: 'Landing & Form',
    items: ['Hero khớp lời hứa', 'Mobile dễ đọc/dễ submit', 'Form thu data đủ dùng', 'Thank-you state rõ'],
  },
  {
    title: 'Tracking & Data',
    items: ['CTA click tracking', 'Form submit/lead event tracking', 'Data về đúng CRM/Sheet', 'Dashboard đọc được tín hiệu'],
    action: true,
  },
  {
    title: 'Sales & Follow-up',
    items: ['Sales đã được brief concept', 'Script bám ngữ cảnh', 'Owner follow-up rõ', 'Status cần update rõ'],
    action: true,
  },
  {
    title: 'Owner & Review',
    items: ['Owner từng phần rõ', 'Timeline launch rõ', 'Kịch bản lỗi có người xử lý', 'Mốc review 24h/48h/7 ngày đã chốt'],
    action: true,
  },
];

export function CampaignLaunchChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist trước khi launch campaign
          </h3>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {checklistGroups.map(({ title, items, action }) => (
            <section
              key={title}
              className={`rounded-brand-card border p-5 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <h4 className={`font-heading text-[14px] font-extrabold ${action ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                {title}
              </h4>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${action ? 'bg-brand-highlight text-white' : 'bg-brand-accent text-white'}`}>
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Checklist này không làm campaign nặng hơn. Nó giúp team chạy nhanh nhưng không bỏ sót những điểm dễ làm campaign rơi.
      </Caption>
    </figure>
  );
}
