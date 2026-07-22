import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ClipboardCheck,
  Database,
  FileQuestion,
  FileText,
  FormInput,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  QrCode,
  Send,
  ShieldCheck,
  Tags,
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

type FlowStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const roleFlow: FlowStep[] = [
  { title: 'Social / Ads / Event', subtitle: 'Tạo sự chú ý và lời hứa', icon: MessageCircle },
  { title: 'Campaign Landing Page', subtitle: 'Làm rõ message, proof, offer', icon: MonitorSmartphone },
  { title: 'Form / CTA / QR', subtitle: 'Thu tín hiệu và data', icon: FormInput, highlight: true },
  { title: 'CRM / Sheet', subtitle: 'Lưu và phân nhóm', icon: Database },
  { title: 'Sales / Follow-up', subtitle: 'Tiếp tục cuộc trò chuyện', icon: Send, highlight: true },
  { title: 'Dashboard', subtitle: 'Đọc kết quả và học lại', icon: BarChart3 },
];

function HorizontalFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      {steps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
        <div key={title} className="contents">
          <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
            <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
            <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
            <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
          </section>
          {index < steps.length - 1 && (
            <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-6">
              <ArrowDown className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
              <ArrowRight className="hidden h-3.5 w-3.5 md:block" aria-hidden="true" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function CampaignLandingPageRoleVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Campaign system flow</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Từ traffic đến follow-up</h3>
        </div>
        <HorizontalFlow steps={roleFlow} />
      </div>
      <Caption>
        Landing page campaign là mắt xích giữa traffic và follow-up. Nó không chỉ để giới thiệu, mà để chuyển sự quan tâm thành data có thể xử lý.
      </Caption>
    </figure>
  );
}

const sectionMap = [
  { title: 'Hero / Promise', subtitle: 'Ai, vấn đề gì, CTA gì', icon: MonitorSmartphone },
  { title: 'Problem / Context', subtitle: 'Vì sao khách nên quan tâm', icon: FileQuestion },
  { title: 'Solution / Concept', subtitle: 'Hướng giải pháp campaign', icon: Layers3 },
  { title: 'Offer Detail', subtitle: 'Khách nhận được gì', icon: Tags },
  { title: 'Proof / Trust', subtitle: 'Case, demo, hình thật', icon: ShieldCheck },
  { title: 'How It Works', subtitle: 'Bước tiếp theo sau đăng ký', icon: ArrowRight },
  { title: 'Form / CTA', subtitle: 'Thu data đủ dùng', icon: FormInput, highlight: true },
  { title: 'FAQ / Objections', subtitle: 'Gỡ rào cản', icon: MessageCircle },
  { title: 'Thank-you / Tracking', subtitle: 'Success state và event đo lường', icon: BadgeCheck, highlight: true },
];

export function LandingPageSectionMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <MonitorSmartphone className="h-5 w-5 text-brand-accent" aria-hidden="true" />
          <h3 className="font-heading text-[20px] font-extrabold text-brand-primary">Campaign Landing Page Map</h3>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectionMap.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'}`}>
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một landing page campaign nên đi từ lời hứa, bối cảnh, giải pháp, bằng chứng đến CTA, form và tracking.
      </Caption>
    </figure>
  );
}

const continuityFlow: FlowStep[] = [
  { title: 'Social / Ads Hook', subtitle: 'Lời hứa ban đầu', icon: MessageCircle },
  { title: 'Landing Hero', subtitle: 'Nhắc lại đúng lời hứa', icon: MonitorSmartphone },
  { title: 'Proof Section', subtitle: 'Làm lời hứa đáng tin', icon: ShieldCheck },
  { title: 'CTA / Form', subtitle: 'Chuyển thành hành động', icon: MousePointerClick, highlight: true },
];

export function MessageContinuityToLandingVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <HorizontalFlow steps={continuityFlow} />
        <div className="mt-5 rounded-2xl border border-brand-highlight/20 bg-brand-highlight-soft px-4 py-3">
          <p className="text-center text-[11px] font-bold text-brand-secondary">Mismatch ở bất kỳ bước nào đều làm campaign rơi.</p>
        </div>
      </div>
      <Caption>
        Landing page phải tiếp nối lời hứa từ social, ads hoặc event. Nếu khách click vì một câu chuyện nhưng landing page kể chuyện khác, campaign sẽ rơi ở giữa.
      </Caption>
    </figure>
  );
}

const dataGroups = [
  { title: 'Contact Info', examples: 'Tên, SĐT / email', icon: Users },
  { title: 'Role / Company', examples: 'Vai trò, công ty, lĩnh vực', icon: FileText },
  { title: 'Interest / Need', examples: 'Case, nhu cầu, giải pháp', icon: Tags, highlight: true },
  { title: 'Source / Campaign', examples: 'UTM, campaign, landing page, QR', icon: QrCode },
  { title: 'Follow-up Status', examples: 'New, contacted, qualified, demo, quote', icon: Send, highlight: true },
];

export function CampaignFormDataCaptureVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-3 lg:p-8">
        {dataGroups.map(({ title, examples, icon: Icon, highlight }, index) => (
          <section key={title} className={`rounded-2xl border p-5 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index === dataGroups.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h3>
            <p className="mt-3 text-[11px] font-medium leading-[1.55] text-brand-secondary">{examples}</p>
          </section>
        ))}
      </div>
      <Caption>
        Form campaign nên thu data đủ để follow-up đúng ngữ cảnh, không chỉ đủ để lưu một số điện thoại.
      </Caption>
    </figure>
  );
}

const checklist = [
  'Hero có khớp với social / ads / event không?',
  'Audience và problem có rõ không?',
  'Tagline / câu neo campaign có được thể hiện không?',
  'Offer / CTA có rõ không?',
  'Proof có khớp với lời hứa không?',
  'Section “khách nhận được gì” có đủ rõ không?',
  'Form có thu data đủ để follow-up không?',
  'Thank-you state có rõ không?',
  'CTA click và form submit có tracking không?',
  'Source / campaign / UTM có được lưu không?',
  'Sales có biết follow-up theo angle nào không?',
  'Mobile có dễ đọc và dễ submit không?',
];

export function CampaignLandingPageChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist landing page cho campaign</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklist.map((item, index) => {
            const isAction = index === 3 || index === 6 || index === 8;
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
        Landing page campaign đạt yêu cầu khi nó không chỉ đẹp, mà còn nối được message, proof, CTA, data, tracking và follow-up.
      </Caption>
    </figure>
  );
}
