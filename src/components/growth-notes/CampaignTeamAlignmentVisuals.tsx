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

const fragmentedRoles = [
  ['Content', 'Tự chọn angle'],
  ['Design', 'Tự chọn điểm nhấn'],
  ['Ads', 'Tự chọn hook'],
  ['IT / Landing', 'Tự hiểu layout / form'],
  ['Sales', 'Dùng script cũ'],
];

const truthItems = ['Direction', 'Concept', 'Offer', 'Proof', 'CTA', 'Tracking', 'Follow-up'];

export function CampaignTeamMisalignmentVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Giao việc rời rạc</h3>
          </div>
          <div className="mt-5 space-y-2">
            {fragmentedRoles.map(([title, subtitle], index) => (
              <div key={title} className={`rounded-xl border border-brand-border bg-brand-surface p-3 ${index % 2 ? 'sm:ml-4' : 'sm:mr-4'}`}>
                <p className="text-[12px] font-bold text-brand-primary">{title}</p>
                <p className="mt-1 text-[10px] font-medium text-brand-secondary">{subtitle}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Có source of truth</h3>
          </div>
          <div className="mt-5 rounded-xl border border-brand-accent/25 bg-brand-surface p-4 text-center">
            <p className="font-heading text-[14px] font-extrabold text-brand-accent">Shared Campaign Direction</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {truthItems.map((item, index) => (
              <span key={item} className={`rounded-full border px-3 py-1.5 text-[10px] font-bold ${index >= 4 ? 'border-brand-highlight/20 bg-brand-highlight-soft text-brand-highlight' : 'border-brand-accent/20 bg-brand-surface text-brand-accent'}`}>
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
      <Caption>
        Team thường không lệch vì không làm việc. Team lệch vì mỗi người phải tự đoán phần direction chưa được viết rõ.
      </Caption>
    </figure>
  );
}

type TruthNode = {
  title: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const truthNodes: TruthNode[] = [
  { title: 'Objective', icon: Target },
  { title: 'Audience', icon: Users },
  { title: 'Insight', icon: Lightbulb },
  { title: 'Core Message', icon: Megaphone },
  { title: 'Operating Tagline', icon: Route },
  { title: 'Offer / CTA', icon: MousePointerClick },
  { title: 'Proof Assets', icon: ShieldCheck },
  { title: 'Channel Role', icon: Palette },
  { title: 'Landing / Form / Tracking', icon: MonitorSmartphone, highlight: true },
  { title: 'Owner / Timeline', icon: Clock3, highlight: true },
];

export function SharedCampaignSourceOfTruthVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-md rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <Database className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">One shared reference</p>
          <h3 className="mt-2 font-heading text-[20px] font-extrabold">Campaign Source of Truth</h3>
        </section>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {truthNodes.map(({ title, icon: Icon, highlight }) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
              <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một source of truth tốt giúp mọi người cùng hiểu campaign trước khi bắt đầu viết, thiết kế, chạy ads, dựng page hoặc gọi sales.
      </Caption>
    </figure>
  );
}

const roleMap = [
  { title: 'Content', needs: 'Insight, message, angle, CTA', icon: FileText },
  { title: 'Design', needs: 'Visual priority, proof, hierarchy', icon: Palette },
  { title: 'Ads', needs: 'Hook, audience, signal, UTM', icon: Megaphone },
  { title: 'IT / Landing', needs: 'Page spec, form, tracking, data destination', icon: MonitorSmartphone, highlight: true },
  { title: 'Sales', needs: 'Lead context, script, follow-up, status', icon: Users, highlight: true },
  { title: 'Founder / Leader', needs: 'Direction, owner, launch criteria, decision', icon: Target },
];

export function CampaignTeamRoleMapVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {roleMap.map(({ title, needs, icon: Icon, highlight }) => (
          <section key={title} className={`rounded-2xl border p-5 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
            <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Needs</p>
            <p className="mt-2 text-[11px] font-medium leading-[1.55] text-brand-secondary">{needs}</p>
          </section>
        ))}
      </div>
      <Caption>
        Mỗi team không cần biết mọi chi tiết như nhau, nhưng phải biết phần thông tin liên quan để không tự hiểu campaign theo cách riêng.
      </Caption>
    </figure>
  );
}

const handoffSteps = [
  { title: 'Brief', subtitle: 'Direction, message, offer', icon: ClipboardCheck },
  { title: 'Content', subtitle: 'Angle, copy, post', icon: FileText },
  { title: 'Design', subtitle: 'Visual, proof, hierarchy', icon: Palette },
  { title: 'Ads', subtitle: 'Hook, creative, UTM', icon: Megaphone },
  { title: 'Landing / IT', subtitle: 'Page, form, tracking', icon: MonitorSmartphone, highlight: true },
  { title: 'Sales', subtitle: 'Script, follow-up, status', icon: Users, highlight: true },
  { title: 'Dashboard', subtitle: 'Read signal, learn, improve', icon: BarChart3, highlight: true },
];

export function CampaignHandoffFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {handoffSteps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < handoffSteps.length - 1 && (
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
        Campaign không chỉ có output. Campaign có nhiều điểm handoff. Mỗi điểm handoff mơ hồ là một điểm dễ lệch.
      </Caption>
    </figure>
  );
}

const checklist = [
  'Campaign có source of truth chung chưa?',
  'Objective đã rõ chưa?',
  'Audience chính đã rõ chưa?',
  'Problem / insight đã đủ cụ thể chưa?',
  'Core message đã rõ chưa?',
  'Operating tagline có dùng được để lọc output không?',
  'Proof assets đã gom một nơi chưa?',
  'Channel role cho content / design / ads / IT / sales đã rõ chưa?',
  'Landing page spec đã rõ chưa?',
  'Form / data fields đã chốt chưa?',
  'Tracking / event cần đo đã chốt chưa?',
  'Sales script / follow-up angle đã rõ chưa?',
  'Owner / deadline từng phần đã rõ chưa?',
  'Pre-launch review đã có checklist chưa?',
];

export function CampaignTeamAlignmentChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist campaign team alignment</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklist.map((item, index) => {
            const isAction = index >= 9 && index <= 11 || index === 13;
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
        Checklist này giúp team kiểm tra campaign đã có đủ bản hiểu chung trước khi chạy vào sản xuất output chưa.
      </Caption>
    </figure>
  );
}
