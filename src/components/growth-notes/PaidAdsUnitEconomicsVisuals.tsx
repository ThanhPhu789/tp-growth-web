import {
  ArrowDown,
  ArrowRight,
  BadgeDollarSign,
  BadgeCheck,
  Banknote,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  HandCoins,
  PackageCheck,
  ReceiptText,
  RefreshCcw,
  ShoppingCart,
  TrendingUp,
  UserCheck,
  UsersRound,
  WalletCards,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const mediaWinItems = [
  'CTR / CPC ổn',
  'CPL / CPA đẹp',
  'Conversion platform tăng',
  'ROAS trong Ads Manager sáng',
  'Creative có signal',
  'Dùng để đọc hiệu suất media',
];

const businessWinItems = [
  'Lead, contacted, qualified tốt',
  'Close rate đủ khỏe',
  'AOV hoặc deal size phù hợp',
  'Margin còn lại đủ',
  'Refund / cancel được kiểm soát',
  'Payback / cashflow chấp nhận được',
  'Dùng để quyết định scale dài hạn',
];

function WinColumn({
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
          const isEconomics = featured && (index === 3 || index === 5);
          return (
            <div key={item} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isEconomics ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
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

export function MediaWinVsBusinessWinVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <WinColumn title="Media Win" label="Platform efficiency" items={mediaWinItems} icon={TrendingUp} />
        <WinColumn title="Business Win" label="Economic outcome" items={businessWinItems} icon={BadgeDollarSign} featured />
      </div>
      <Caption>Ads Manager cho thấy media có đang chạy tốt không. P&amp;L cho thấy campaign có làm business khỏe hơn không.</Caption>
    </figure>
  );
}

type EconomicsStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const pnlFlow: EconomicsStep[] = [
  { title: 'Spend', subtitle: 'Tiền media', icon: WalletCards },
  { title: 'Click / Lead / Purchase', subtitle: 'Kết quả platform', icon: ShoppingCart },
  { title: 'Lead Quality', subtitle: 'Contacted / qualified', icon: UserCheck },
  { title: 'Sales Conversion', subtitle: 'Quote / won', icon: UsersRound },
  { title: 'Revenue', subtitle: 'Doanh thu ghi nhận', icon: Banknote },
  { title: 'Gross Margin', subtitle: 'Lợi nhuận gộp', icon: HandCoins, highlight: true },
  { title: 'Operating Cost', subtitle: 'Sales, ops, fulfillment', icon: ReceiptText },
  { title: 'Refund / Cancel', subtitle: 'Rủi ro sau mua', icon: RefreshCcw },
  { title: 'Payback / Cashflow', subtitle: 'Thu hồi vốn và dòng tiền', icon: Clock3, highlight: true },
];

export function AdsManagerToPNLFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Economic flow</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Từ Ads Manager đến P&amp;L</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pnlFlow.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < pnlFlow.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {(index + 1) % 3 !== 0 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Một campaign phải đi tiếp qua lead quality, sales, margin, cost, refund và payback.</Caption>
    </figure>
  );
}

type ChecklistItem = {
  text: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const economicsChecklist: ChecklistItem[] = [
  { text: 'Lead có qualified không?', icon: UserCheck },
  { text: 'Close rate ra sao?', icon: BadgeCheck },
  { text: 'Deal size / AOV có đủ tốt không?', icon: CircleDollarSign },
  { text: 'Margin còn lại bao nhiêu?', icon: HandCoins, highlight: true },
  { text: 'Discount có làm mòn lợi nhuận không?', icon: ReceiptText },
  { text: 'Refund / cancel / no-show có cao không?', icon: RefreshCcw },
  { text: 'Sales / ops có chịu thêm volume không?', icon: PackageCheck },
  { text: 'Payback / cashflow có chấp nhận được không?', icon: Clock3, highlight: true },
];

export function PaidAdsUnitEconomicsChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Scale readiness</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Trước khi scale, hỏi thêm ngoài Ads Manager</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {economicsChecklist.map(({ text, icon: Icon, highlight }, index) => (
            <section
              key={text}
              className={`flex items-start gap-3 rounded-2xl border p-4 ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${highlight ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-1 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{text}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Kiểm lead quality, margin, sales capacity và payback trước khi scale một campaign nhìn đẹp.</Caption>
    </figure>
  );
}
