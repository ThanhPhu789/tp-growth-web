import {
  ArrowDown,
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Check,
  CircleAlert,
  Database,
  FileSearch,
  GitCompareArrows,
  LayoutTemplate,
  MessageCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type JourneyStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const customerJourney: JourneyStep[] = [
  { title: 'Meta Ad', subtitle: 'Thấy vấn đề', icon: Smartphone },
  { title: 'Landing Page', subtitle: 'Đọc giải pháp', icon: LayoutTemplate },
  { title: 'Blog / Case', subtitle: 'Tăng niềm tin', icon: FileSearch },
  { title: 'Google Search', subtitle: 'Tìm lại brand / category', icon: Search },
  { title: 'Retargeting', subtitle: 'Nhắc proof / offer', icon: RefreshCw },
  { title: 'Zalo / Call', subtitle: 'Hỏi thêm', icon: MessageCircle },
  { title: 'CRM / Sales', subtitle: 'Follow-up, qualify', icon: Database, highlight: true },
  { title: 'Revenue / Outcome', subtitle: 'Won / lost', icon: BadgeDollarSign, highlight: true },
];

export function MultiTouchCustomerJourneyVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Multi-touch journey</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Một khách hàng, nhiều điểm chạm</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {customerJourney.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < customerJourney.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {(index + 1) % 4 !== 0 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Một lead hoặc doanh thu thường không đến từ một điểm chạm duy nhất. Attribution đọc đóng góp trong cả hành trình.</Caption>
    </figure>
  );
}

type SourceCard = {
  title: string;
  useFor: string;
  notAloneFor: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const decisionSources: SourceCard[] = [
  {
    title: 'Ads Platform',
    useFor: 'Media signal, creative, delivery',
    notAloneFor: 'Doanh thu thật',
    icon: BarChart3,
  },
  {
    title: 'GA4',
    useFor: 'Onsite behavior, landing page, traffic path',
    notAloneFor: 'Lead quality',
    icon: GitCompareArrows,
  },
  {
    title: 'CRM',
    useFor: 'Lead status, sales note, qualified',
    notAloneFor: 'Toàn bộ đóng góp media',
    icon: Database,
    highlight: true,
  },
  {
    title: 'Finance / Sales Outcome',
    useFor: 'Revenue, margin, close',
    notAloneFor: 'Kênh tạo demand ban đầu',
    icon: BadgeDollarSign,
    highlight: true,
  },
];

export function SourceOfTruthDecisionMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <GitCompareArrows className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Decision sources</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Source of truth theo loại quyết định</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {decisionSources.map(({ title, useFor, notAloneFor, icon: Icon, highlight }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h4 className="font-heading text-[16px] font-extrabold text-brand-primary">{title}</h4>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Dùng để đọc</p>
                  <p className="mt-1.5 text-[12px] font-semibold leading-[1.55] text-brand-secondary">{useFor}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Không dùng một mình để kết luận</p>
                  <p className="mt-1.5 text-[12px] font-semibold leading-[1.55] text-brand-secondary">{notAloneFor}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Mỗi nguồn dữ liệu có vai trò riêng. Hãy dùng đúng nguồn cho đúng quyết định.</Caption>
    </figure>
  );
}

const attributionGapItems = [
  'Window khác nhau',
  'View / click-through khác nhau',
  'Cross-device',
  'Delay',
  'Multi-touch journey',
  'Chấp nhận được nếu hiểu logic',
];

const trackingErrorItems = [
  'Event bắn sai thời điểm',
  'Đếm trùng',
  'Mất UTM / source',
  'Form lỗi',
  'CRM thiếu status',
  'Phải sửa trước khi scale',
];

function GapColumn({
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
          const isRequiredAction = featured && index === items.length - 1;
          return (
            <div key={item} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isRequiredAction ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
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

export function AttributionGapVsTrackingErrorVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <GapColumn title="Attribution gap" label="Explain the difference" items={attributionGapItems} icon={CircleAlert} />
        <GapColumn title="Tracking error" label="Fix the system" items={trackingErrorItems} icon={ShieldCheck} featured />
      </div>
      <Caption>Report lệch có thể là đặc tính của attribution. Tracking sai là lỗi hệ thống cần sửa trước quyết định lớn.</Caption>
    </figure>
  );
}
