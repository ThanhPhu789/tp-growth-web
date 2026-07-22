import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  FormInput,
  MonitorSmartphone,
  MousePointerClick,
  Presentation,
  Route,
  Send,
  ShieldCheck,
  Target,
  TriangleAlert,
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

type ConceptNode = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const alignmentNodes: ConceptNode[] = [
  { title: 'Social', subtitle: 'Tạo bối cảnh', icon: FileText },
  { title: 'Ads', subtitle: 'Kéo đúng kỳ vọng', icon: MousePointerClick },
  { title: 'Landing Page', subtitle: 'Tiếp nối lời hứa', icon: MonitorSmartphone },
  { title: 'Form / Data', subtitle: 'Thu đúng ngữ cảnh', icon: FormInput, highlight: true },
  { title: 'Event / Booth', subtitle: 'Tạo trải nghiệm thật', icon: Presentation },
  { title: 'Sales Script', subtitle: 'Mở đúng câu chuyện', icon: Users, highlight: true },
  { title: 'Follow-up', subtitle: 'Nuôi tiếp nhu cầu', icon: Send, highlight: true },
];

export function ConceptAlignmentSystemVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white shadow-brand-soft">
          <Route className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">Shared operating axis</p>
          <h3 className="mt-2 font-heading text-[20px] font-extrabold">Campaign Concept</h3>
        </section>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {alignmentNodes.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index === alignmentNodes.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-medium text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Concept campaign không chỉ nằm trên key visual. Nó là trục giúp social, ads, landing page, data, sales và follow-up cùng đi một hướng.
      </Caption>
    </figure>
  );
}

const fragmented = [
  'Social nói một hướng',
  'Ads kéo bằng hook khác',
  'Landing page không tiếp nối',
  'Form không hỏi đúng nhu cầu',
  'Sales gọi bằng script cũ',
  'Dashboard khó đọc nguyên nhân',
];

const aligned = [
  'Social tạo đúng bối cảnh',
  'Ads kéo đúng kỳ vọng',
  'Landing page tiếp nối lời hứa',
  'Form thu đúng ngữ cảnh',
  'Sales mở đúng câu chuyện',
  'Dashboard đọc tín hiệu rõ hơn',
];

export function FragmentedVsAlignedCampaignVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <TriangleAlert className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Campaign rời rạc</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {fragmented.map((item) => (
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
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Campaign bám concept</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {aligned.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index >= 3 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Khi campaign rời rạc, mỗi output có thể vẫn ổn riêng lẻ nhưng khách bị rơi ở đoạn chuyển tiếp giữa các điểm chạm.
      </Caption>
    </figure>
  );
}

const touchpoints: ConceptNode[] = [
  { title: 'Social Angle', subtitle: 'Kể vấn đề', icon: FileText },
  { title: 'Ads Hook', subtitle: 'Kéo đúng kỳ vọng', icon: MousePointerClick },
  { title: 'Landing Hero', subtitle: 'Nhắc lại lời hứa', icon: MonitorSmartphone },
  { title: 'Proof Section', subtitle: 'Làm đáng tin', icon: ShieldCheck },
  { title: 'Form Question', subtitle: 'Thu đúng nhu cầu', icon: FormInput, highlight: true },
  { title: 'Sales Opening', subtitle: 'Mở đúng câu chuyện', icon: Users, highlight: true },
  { title: 'Follow-up Message', subtitle: 'Nuôi tiếp ngữ cảnh', icon: Send, highlight: true },
];

export function ConceptToTouchpointsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="rounded-2xl border border-brand-accent/30 bg-brand-accent p-5 text-center text-white">
          <Target className="mx-auto h-5 w-5" aria-hidden="true" />
          <h3 className="mt-3 font-heading text-[19px] font-extrabold">Core Concept</h3>
        </section>
        <div className="flex h-9 items-center justify-center text-brand-accent">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {touchpoints.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index === touchpoints.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[10px] font-medium text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Concept chỉ có giá trị khi được dịch ra từng điểm chạm cụ thể: social, ads, landing page, form, sales và follow-up.
      </Caption>
    </figure>
  );
}

const leakFlow: ConceptNode[] = [
  { title: 'Social', subtitle: 'Bối cảnh', icon: FileText },
  { title: 'Ads', subtitle: 'Lời hứa', icon: MousePointerClick },
  { title: 'Landing Page', subtitle: 'Proof / CTA', icon: MonitorSmartphone },
  { title: 'Form', subtitle: 'Data ngữ cảnh', icon: FormInput },
  { title: 'Sales Script', subtitle: 'Follow-up', icon: Users },
  { title: 'Outcome', subtitle: 'Meeting, quote, revenue', icon: BarChart3 },
];

const leakPoints = ['Hook lệch page', 'Form không hỏi nhu cầu', 'Sales gọi sai angle'];

export function MessageMismatchLeakVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {leakFlow.map(({ title, subtitle, icon: Icon }, index) => (
            <div key={title} className="contents">
              <section className="min-w-0 flex-1 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4">
                <Icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                <h4 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium text-brand-secondary">{subtitle}</p>
              </section>
              {index < leakFlow.length - 1 && (
                <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-6">
                  <ArrowDown className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {leakPoints.map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-brand-highlight/25 bg-brand-highlight-soft px-3 py-3">
              <TriangleAlert className="h-3.5 w-3.5 shrink-0 text-brand-highlight" aria-hidden="true" />
              <span className="text-[10px] font-bold text-brand-secondary">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Khách thường không rơi vì một điểm chạm duy nhất. Họ rơi khi thông điệp bị lệch giữa social, ads, landing page, form và sales.
      </Caption>
    </figure>
  );
}

const checklist = [
  'Campaign concept đã rõ chưa?',
  'Social có mở đúng bối cảnh không?',
  'Ads hook có kéo đúng kỳ vọng không?',
  'Landing page hero có nhắc lại lời hứa không?',
  'Proof có làm concept đáng tin hơn không?',
  'CTA có thống nhất với offer không?',
  'Form có hỏi đúng nhu cầu / case quan tâm không?',
  'Sales script có biết lead đến từ concept nào không?',
  'Follow-up có phân nhóm theo ngữ cảnh không?',
  'UTM / campaign naming có giữ được concept không?',
  'Dashboard có đọc được angle / interest tag không?',
  'Sau campaign, team có biết concept tạo tín hiệu gì không?',
];

export function CampaignConceptAlignmentChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist concept alignment cho campaign</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklist.map((item, index) => {
            const isAction = index === 6 || index === 7 || index === 10;
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
        Checklist này giúp team kiểm tra campaign có đang cùng kể một câu chuyện từ social đến sales follow-up hay không.
      </Caption>
    </figure>
  );
}
