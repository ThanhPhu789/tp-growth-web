import {
  Check,
  Database,
  FileCheck2,
  FormInput,
  GitMerge,
  Image,
  Layers3,
  MapPin,
  MessageSquareText,
  MousePointerClick,
  SearchCheck,
  ShieldCheck,
  Split,
  Tags,
  Target,
  UserCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type AudienceLayer = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const audienceLayers: AudienceLayer[] = [
  { title: 'Platform Targeting', subtitle: 'Tuổi, khu vực, interest, broad, custom', icon: Target },
  { title: 'Creative', subtitle: 'Ai dừng lại?', icon: Image },
  { title: 'Message / Hook', subtitle: 'Nỗi đau nào được gọi tên?', icon: MessageSquareText },
  { title: 'Offer', subtitle: 'Ai thấy đáng hành động?', icon: Tags, highlight: true },
  { title: 'Landing Page', subtitle: 'Ai đủ tin?', icon: FileCheck2 },
  { title: 'Form', subtitle: 'Ai được lọc thêm?', icon: FormInput },
  { title: 'Sales Follow-up', subtitle: 'Ai được qualify?', icon: UserCheck },
  { title: 'CRM Feedback', subtitle: 'Ai thật sự có giá trị?', icon: Database, highlight: true },
];

export function AudienceBeyondAdsManagerVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Layers3 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Audience layers</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Audience không chỉ nằm trong Ads Manager</h3>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {audienceLayers.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`grid gap-3 rounded-2xl border p-4 sm:grid-cols-[auto_1fr_1.5fr] sm:items-center ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${highlight ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[9px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</p>
                <h4 className="mt-1 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              </div>
              <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Targeting là lớp đầu. Audience thật được lọc tiếp qua creative, offer, page, form, sales và CRM.</Caption>
    </figure>
  );
}

type FilterCard = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const creativeFilters: FilterCard[] = [
  { title: 'Problem', subtitle: 'Nỗi đau nào được gọi tên?', icon: SearchCheck },
  { title: 'Context', subtitle: 'Tình huống nào xuất hiện?', icon: MapPin },
  { title: 'Proof', subtitle: 'Ai tin bằng case nào?', icon: ShieldCheck },
  { title: 'Offer', subtitle: 'Ai thấy đáng hành động?', icon: Tags, highlight: true },
  { title: 'Language', subtitle: 'Cách nói dành cho tệp nào?', icon: MessageSquareText },
  { title: 'CTA', subtitle: 'Bước tiếp theo lọc intent ra sao?', icon: MousePointerClick, highlight: true },
];

export function CreativeFilteringMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Creative filtering</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Creative lọc audience bằng gì?</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {creativeFilters.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-semibold leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Creative giúp hệ thống tự lọc người phù hợp trước khi họ click hoặc submit form.</Caption>
    </figure>
  );
}

const splitItems = [
  'Stage khác nhau',
  'Offer khác nhau',
  'Intent khác nhau',
  'Sales hoặc region thực sự khác',
  'Economics khác nhau',
  'Cần đọc lead quality riêng',
];

const consolidateItems = [
  'Budget quá mỏng',
  'Signal quá ít',
  'Message giống nhau',
  'Creative cần data chung',
  'Audience overlap nhiều',
  'Report quá rối để quyết định',
];

function DecisionColumn({
  title,
  label,
  items,
  icon: Icon,
  featured,
}: {
  title: string;
  label: string;
  items: string[];
  icon: LucideIcon;
  featured?: boolean;
}) {
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'}`}>
      <div className="flex items-center justify-between gap-3">
        <Icon className={`h-5 w-5 ${featured ? 'text-brand-accent' : 'text-brand-secondary'}`} aria-hidden="true" />
        <span className={`text-[9px] font-black uppercase tracking-[0.12em] ${featured ? 'text-brand-accent' : 'text-brand-soft-text'}`}>{label}</span>
      </div>
      <h3 className="mt-4 font-heading text-[18px] font-extrabold text-brand-primary">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => {
          const isDecisionSignal = (!featured && index === items.length - 1) || (featured && index === 1);
          return (
            <div key={item} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isDecisionSignal ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              <p className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function AudienceSplitOrConsolidateVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <DecisionColumn title="Nên tách khi" label="Separate to read" items={splitItems} icon={Split} />
        <DecisionColumn title="Nên gom khi" label="Consolidate to learn" items={consolidateItems} icon={GitMerge} featured />
      </div>
      <Caption>Không phải cứ tách nhiều là chính xác hơn. Tách hay gom phải phục vụ signal và quyết định.</Caption>
    </figure>
  );
}
