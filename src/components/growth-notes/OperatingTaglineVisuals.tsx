import {
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Lightbulb,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
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

const sloganItems = [
  'Ưu tiên dễ nhớ, dễ truyền thông',
  'Có thể dùng dài hạn',
  'Thường hướng ra thị trường',
  'Cần cảm xúc và nhận diện',
  'Không phải lúc nào cũng đủ để vận hành campaign',
];

const operatingItems = [
  'Ưu tiên rõ hướng campaign',
  'Dùng cho một campaign cụ thể',
  'Giúp team cùng hiểu thông điệp',
  'Làm tiêu chuẩn lọc output',
  'Kết nối content, ads, landing, sales, follow-up',
];

export function TaglineVsSloganVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Slogan quảng cáo</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {sloganItems.map((item) => (
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
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Tagline vận hành</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {operatingItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index >= operatingItems.length - 2 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Tagline vận hành không cần trở thành slogan thương hiệu. Nó cần giúp campaign không bị mỗi kênh nói một kiểu.
      </Caption>
    </figure>
  );
}

type RoleBranch = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const roleBranches: RoleBranch[] = [
  { title: 'Direction', subtitle: 'Nén hướng campaign', icon: Route },
  { title: 'Content', subtitle: 'Giữ angle nhất quán', icon: FileText },
  { title: 'Design', subtitle: 'Làm rõ thông điệp chính', icon: Palette },
  { title: 'Ads', subtitle: 'Chọn creative và signal', icon: Megaphone },
  { title: 'Landing / Event', subtitle: 'Tiếp nối lời hứa', icon: MonitorSmartphone },
  { title: 'Sales / Follow-up', subtitle: 'Mở đúng câu chuyện', icon: Users, highlight: true },
];

export function OperatingTaglineRoleVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white shadow-brand-soft">
          <MessageCircle className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">Shared language anchor</p>
          <h3 className="mt-2 font-heading text-[20px] font-extrabold">Operating Tagline</h3>
        </section>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roleBranches.map(({ title, subtitle, icon: Icon, highlight }) => (
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
        Một tagline vận hành tốt giúp direction đi vào từng đầu việc: content, design, ads, landing page, event, sales và follow-up.
      </Caption>
    </figure>
  );
}

const weakItems = [
  'Quá chung',
  'Nghe hay nhưng khó triển khai',
  'Không rõ vấn đề',
  'Không hỗ trợ sales / follow-up',
  'Không giúp lọc output',
];

const strongItems = [
  'Rõ vấn đề và tệp khách',
  'Có hướng giải pháp',
  'Dễ bám vào content / ads / page',
  'Sales có thể dùng để mở câu chuyện',
  'Có thể đo bằng tín hiệu cụ thể',
];

export function WeakVsStrongTaglineVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Tagline yếu</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {weakItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Tagline vận hành tốt</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {strongItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index === strongItems.length - 1 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Tagline vận hành tốt không chỉ nghe ổn. Nó phải giúp team triển khai và kiểm tra output dễ hơn.
      </Caption>
    </figure>
  );
}

const touchpoints: RoleBranch[] = [
  { title: 'Social Post', subtitle: 'Kể câu chuyện', icon: FileText },
  { title: 'Ads', subtitle: 'Kéo đúng kỳ vọng', icon: Megaphone },
  { title: 'Landing Page', subtitle: 'Tiếp nối lời hứa', icon: MonitorSmartphone },
  { title: 'Event / Booth', subtitle: 'Làm khách nhớ concept', icon: Target },
  { title: 'Sales Script', subtitle: 'Mở đúng câu chuyện', icon: Users },
  { title: 'Follow-up', subtitle: 'Nuôi tiếp nhu cầu', icon: MessageCircle, highlight: true },
];

export function TaglineAlignmentMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-2xl border border-brand-accent/30 bg-brand-accent p-5 text-center text-white">
          <Route className="mx-auto h-5 w-5" aria-hidden="true" />
          <h3 className="mt-3 font-heading text-[19px] font-extrabold">Tagline vận hành</h3>
        </section>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {touchpoints.map(({ title, subtitle, icon: Icon, highlight }) => (
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
        Tagline vận hành giúp các điểm chạm không bị tách rời: khách thấy social, click ads, vào landing page, gặp sales và nhận follow-up trong cùng một câu chuyện.
      </Caption>
    </figure>
  );
}

const checklistItems = [
  'Tagline có bám campaign objective không?',
  'Có rõ tệp khách chính không?',
  'Có chạm đúng vấn đề / insight không?',
  'Có gợi được hướng giải pháp không?',
  'Có đủ ngắn để team nhớ không?',
  'Content có thể viết nhiều angle từ câu này không?',
  'Ads có thể dùng để kéo đúng kỳ vọng không?',
  'Landing page có thể tiếp nối câu này không?',
  'Sales / follow-up có thể dùng để mở chuyện không?',
  'Có thể đo bằng tín hiệu cụ thể không?',
];

export function OperatingTaglineChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist kiểm tra tagline vận hành</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklistItems.map((item, index) => {
            const isAction = index === checklistItems.length - 1;
            return (
              <div key={item} className={`flex items-start gap-3 rounded-2xl border p-4 ${isAction ? 'border-brand-highlight/25 bg-brand-highlight-soft md:col-span-2' : 'border-brand-border bg-brand-bg'}`}>
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
        Một tagline vận hành đạt yêu cầu khi nó không chỉ nghe ổn, mà còn giúp team triển khai và đo campaign rõ hơn.
      </Caption>
    </figure>
  );
}
