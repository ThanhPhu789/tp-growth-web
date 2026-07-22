import {
  ArrowDown,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Layers3,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  Route,
  ShieldCheck,
  Sparkles,
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

const postFirstItems = [
  'Làm nhanh nhưng dễ rời rạc',
  'Mỗi team hiểu một kiểu',
  'Social, ads, landing page khó khớp',
  'Sales script dễ lệch thông điệp',
  'Cuối campaign khó biết sai ở đâu',
];

const directionFirstItems = [
  'Có mục tiêu và tệp rõ',
  'Thông điệp chung nhất quán',
  'Output bám cùng một concept',
  'Sales và follow-up dễ đồng bộ',
  'Dễ đo và rút kinh nghiệm hơn',
];

export function PostFirstVsDirectionFirstVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Bắt đầu từ post</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {postFirstItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Bắt đầu từ direction</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {directionFirstItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index === 0 || index === 4 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Post là phần nhìn thấy. Direction mới là phần giúp các output của campaign đi cùng một hướng.
      </Caption>
    </figure>
  );
}

type DirectionBranch = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const directionBranches: DirectionBranch[] = [
  { title: 'Objective', subtitle: 'Mục tiêu campaign', icon: Target },
  { title: 'Audience', subtitle: 'Tệp khách chính', icon: Users },
  { title: 'Insight', subtitle: 'Vấn đề / bối cảnh', icon: Lightbulb },
  { title: 'Core Message', subtitle: 'Điều muốn thị trường hiểu', icon: Megaphone },
  { title: 'Offer / CTA', subtitle: 'Hành động muốn khách làm', icon: MousePointerClick, highlight: true },
  { title: 'Proof', subtitle: 'Case, demo, dữ liệu, hình ảnh', icon: ShieldCheck },
  { title: 'Channels', subtitle: 'Social, ads, landing, event, sales', icon: Layers3 },
  { title: 'Measurement', subtitle: 'Lead, contact, data, follow-up', icon: BarChart3, highlight: true },
];

export function CampaignDirectionMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.75fr_1fr] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {directionBranches.slice(0, 4).map(({ title, subtitle, icon: Icon }) => (
              <section key={title} className="rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4">
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <div>
                    <h4 className="font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                    <p className="mt-1 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="order-first rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center shadow-brand-soft lg:order-none">
            <Route className="mx-auto h-6 w-6 text-white" aria-hidden="true" />
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">Shared operating axis</p>
            <h3 className="mt-2 font-heading text-[20px] font-extrabold text-white">Campaign Direction</h3>
          </section>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {directionBranches.slice(4).map(({ title, subtitle, icon: Icon, highlight }) => (
              <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-start gap-3">
                  <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <div>
                    <h4 className="font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                    <p className="mt-1 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Caption>
        Direction chung giúp team thống nhất trước khi sản xuất output: nói với ai, nói điều gì, bằng chứng nào, kêu gọi hành động gì và đo bằng tín hiệu nào.
      </Caption>
    </figure>
  );
}

const briefBlocks = [
  { title: 'Objective', icon: Target },
  { title: 'Audience', icon: Users },
  { title: 'Problem / Insight', icon: Lightbulb },
  { title: 'Core Message', icon: Megaphone },
  { title: 'Operating Tagline', icon: Sparkles },
  { title: 'Offer / CTA', icon: MousePointerClick, highlight: true },
  { title: 'Proof Assets', icon: ShieldCheck },
  { title: 'Channel Role', icon: Layers3 },
  { title: 'Measurement', icon: BarChart3, highlight: true },
];

export function CampaignDirectionBriefVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold text-brand-primary">Campaign Direction Brief</h3>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {briefBlocks.map(({ title, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'}`}>
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <div className="mt-4 h-px w-full bg-brand-border" />
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một direction brief tốt không cần dài. Nhưng nó phải đủ để content, design, ads, IT và sales cùng hiểu campaign đang đi về đâu.
      </Caption>
    </figure>
  );
}

const teamRoles = [
  { title: 'Content', role: 'Post, angle, story', icon: FileText },
  { title: 'Design', role: 'Key visual, layout, proof', icon: Palette },
  { title: 'Ads', role: 'Targeting, creative, signal', icon: Megaphone },
  { title: 'Landing / IT', role: 'Page, form, tracking', icon: MonitorSmartphone },
  { title: 'Sales', role: 'Script, follow-up, status', icon: Users, highlight: true },
];

export function CampaignAlignmentFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-2xl border border-brand-accent/30 bg-brand-accent p-5 text-center text-white">
          <Route className="mx-auto h-5 w-5" aria-hidden="true" />
          <h3 className="mt-3 font-heading text-[18px] font-extrabold">Direction chung</h3>
        </section>
        <div className="flex h-10 items-center justify-center text-brand-accent">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {teamRoles.map(({ title, role, icon: Icon, highlight }) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
              <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{role}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Khi có direction chung, mỗi team vẫn làm phần việc riêng, nhưng không còn kéo campaign theo năm hướng khác nhau.
      </Caption>
    </figure>
  );
}

const directionChecklist = [
  'Campaign này phục vụ mục tiêu gì?',
  'Tệp khách chính là ai?',
  'Vấn đề hoặc insight chính là gì?',
  'Core message đã rõ chưa?',
  'Có tagline vận hành hoặc câu neo chưa?',
  'Offer / CTA là gì?',
  'Bằng chứng nào sẽ dùng?',
  'Social, ads, landing page, sales script đóng vai trò gì?',
  'Cần thu data gì?',
  'Sau campaign follow-up bằng gì?',
];

export function CampaignDirectionChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist trước khi bắt đầu làm post</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {directionChecklist.map((item, index) => {
            const isAction = index === 5 || index >= directionChecklist.length - 2;
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
        Trước khi làm post, team nên thống nhất direction. Nếu không, campaign rất dễ có nhiều output nhưng thiếu một trục chung.
      </Caption>
    </figure>
  );
}
