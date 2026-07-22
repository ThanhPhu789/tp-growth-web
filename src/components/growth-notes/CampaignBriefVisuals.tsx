import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Database,
  FileText,
  FormInput,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
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

type BriefNode = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const briefRoles: BriefNode[] = [
  { title: 'Direction', subtitle: 'Campaign đi về đâu?', icon: Route },
  { title: 'Message', subtitle: 'Cần nói điều gì?', icon: Megaphone },
  { title: 'Output', subtitle: 'Post, ads, landing, event', icon: FileText },
  { title: 'Data', subtitle: 'Cần thu và đo gì?', icon: Database, highlight: true },
  { title: 'Sales', subtitle: 'Follow-up theo angle nào?', icon: Users, highlight: true },
  { title: 'Owner', subtitle: 'Ai phụ trách việc gì?', icon: Target, highlight: true },
];

export function CampaignBriefRoleVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white shadow-brand-soft">
          <ClipboardCheck className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">Shared operating map</p>
          <h3 className="mt-2 font-heading text-[20px] font-extrabold">Campaign Brief</h3>
        </section>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {briefRoles.map(({ title, subtitle, icon: Icon, highlight }) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
              <div className="flex items-start gap-3">
                <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <div>
                  <h4 className="font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                  <p className="mt-1 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Campaign brief tốt không phải để lưu trong folder. Nó giúp cả team cùng nhìn một bản đồ trước khi sản xuất output.
      </Caption>
    </figure>
  );
}

const noBriefItems = [
  'Content: post theo angle riêng',
  'Design: visual đẹp nhưng lệch message',
  'Ads: hook kéo click nhưng lệch landing',
  'Landing: thiếu proof / CTA / form logic',
  'Sales: follow-up bằng script cũ',
];

const sharedBriefItems = [
  'Cùng message',
  'Cùng offer',
  'Cùng proof',
  'Cùng CTA',
  'Cùng tracking / follow-up',
];

export function NoBriefMisalignmentVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Không có brief</h3>
          </div>
          <div className="mt-5 space-y-2">
            {noBriefItems.map((item, index) => (
              <div key={item} className={`rounded-xl border border-brand-border bg-brand-surface px-3 py-3 text-[12px] font-medium leading-[1.5] text-brand-secondary ${index % 2 ? 'sm:ml-4' : 'sm:mr-4'}`}>
                {item}
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Có brief chung</h3>
          </div>
          <div className="mt-5 rounded-xl border border-brand-accent/25 bg-brand-surface p-4 text-center">
            <p className="font-heading text-[14px] font-extrabold text-brand-accent">Campaign Direction</p>
          </div>
          <ul className="mt-4 space-y-3">
            {sharedBriefItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index >= 3 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Khi không có brief, mỗi team vẫn làm việc nhưng dễ kéo campaign theo một hướng riêng.
      </Caption>
    </figure>
  );
}

const anatomyBlocks = [
  { title: 'Campaign Name', icon: FileText },
  { title: 'Objective', icon: Target },
  { title: 'Audience', icon: Users },
  { title: 'Problem / Insight', icon: Lightbulb },
  { title: 'Core Message', icon: Megaphone },
  { title: 'Operating Tagline', icon: Route },
  { title: 'Offer / CTA', icon: MousePointerClick, highlight: true },
  { title: 'Proof Assets', icon: ShieldCheck },
  { title: 'Channel Role', icon: Palette },
  { title: 'Landing / Form', icon: FormInput },
  { title: 'Tracking / Measurement', icon: BarChart3, highlight: true },
  { title: 'Owner / Timeline', icon: Clock3, highlight: true },
];

export function CampaignBriefAnatomyVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold text-brand-primary">Campaign Brief Anatomy</h3>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {anatomyBlocks.map(({ title, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'}`}>
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <div className="mt-4 h-px w-full bg-brand-border" />
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một campaign brief tối thiểu nên gom đủ direction, output, data và trách nhiệm triển khai.
      </Caption>
    </figure>
  );
}

const executionSteps: BriefNode[] = [
  { title: 'Brief', subtitle: 'Direction, audience, message', icon: ClipboardCheck },
  { title: 'Content', subtitle: 'Angle, post, story', icon: FileText },
  { title: 'Design', subtitle: 'Visual, proof, hierarchy', icon: Palette },
  { title: 'Ads', subtitle: 'Hook, creative, signal', icon: Megaphone },
  { title: 'Landing / Form', subtitle: 'Page, CTA, data', icon: MonitorSmartphone, highlight: true },
  { title: 'Sales / Follow-up', subtitle: 'Script, status, outcome', icon: Users, highlight: true },
];

export function BriefToExecutionFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {executionSteps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < executionSteps.length - 1 && (
                <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-6">
                  <ArrowDown className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Brief là điểm xuất phát. Output tốt là output biến brief thành post, visual, ads, landing page, form, sales script và follow-up cùng một hướng.
      </Caption>
    </figure>
  );
}

const briefChecklist = [
  'Campaign objective đã rõ chưa?',
  'Audience chính đã rõ chưa?',
  'Problem / insight có đủ cụ thể không?',
  'Core message có dễ hiểu không?',
  'Operating tagline có dùng được để lọc output không?',
  'Offer / CTA đã rõ chưa?',
  'Proof assets có đủ chưa?',
  'Vai trò từng kênh đã rõ chưa?',
  'Landing page / form cần gì đã rõ chưa?',
  'Tracking / data cần thu đã rõ chưa?',
  'Owner / deadline từng phần đã rõ chưa?',
  'Team có biết sau campaign sẽ đo gì không?',
];

export function CampaignBriefChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist campaign brief trước khi team triển khai</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {briefChecklist.map((item, index) => {
            const isAction = index === 5 || index >= 9;
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
        Trước khi team làm post, thiết kế, ads hay landing page, brief nên đủ rõ để mọi người biết mình đang làm phần nào của cùng một campaign.
      </Caption>
    </figure>
  );
}
