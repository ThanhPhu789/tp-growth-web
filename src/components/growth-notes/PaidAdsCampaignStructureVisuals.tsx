import {
  BadgeCheck,
  Check,
  CircleDollarSign,
  FlaskConical,
  GitBranch,
  Goal,
  Layers3,
  Megaphone,
  RefreshCw,
  SearchCheck,
  SlidersHorizontal,
  Tags,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type DecisionCard = {
  title: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const structureQuestions: DecisionCard[] = [
  { title: 'Test gì?', icon: FlaskConical },
  { title: 'Scale gì?', icon: TrendingUp },
  { title: 'Stage nào?', icon: UsersRound },
  { title: 'Offer nào?', icon: Tags },
  { title: 'Creative nào có signal?', icon: Megaphone },
  { title: 'Lead quality ra sao?', icon: BadgeCheck, highlight: true },
  { title: 'Budget đang học hay khai thác?', icon: CircleDollarSign },
  { title: 'Quyết định tiếp theo là gì?', icon: Goal, highlight: true },
];

export function CampaignStructureDecisionMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <GitBranch className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Decision architecture</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Campaign structure nên giúp team trả lời</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {structureQuestions.map(({ title, icon: Icon, highlight }, index) => (
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
              <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.45] text-brand-primary">{title}</h4>
            </section>
          ))}
        </div>
      </div>
      <Caption>Cấu trúc campaign tốt không phải để nhìn nhiều lớp. Nó giúp team đọc tín hiệu và ra quyết định rõ hơn.</Caption>
    </figure>
  );
}

type StructureColumn = {
  title: string;
  label: string;
  items: string[];
  icon: LucideIcon;
  featured?: boolean;
};

const structureBalance: StructureColumn[] = [
  {
    title: 'Quá vụn',
    label: 'Fragmented',
    items: ['Nhiều campaign / ad set nhỏ', 'Budget bị chia mỏng', 'Signal yếu', 'Report rối', 'Khó scale'],
    icon: GitBranch,
  },
  {
    title: 'Gom quá mạnh',
    label: 'Unreadable',
    items: ['Test bị lẫn', 'Stage / offer khó đọc', 'Creative mới khó được đánh giá', 'Decision thiếu chi tiết'],
    icon: Layers3,
  },
  {
    title: 'Operating structure',
    label: 'Decision-ready',
    items: ['Test và scale rõ', 'Stage / offer đủ phân biệt', 'Budget đủ học', 'Report đọc được', 'Decision rõ'],
    icon: SlidersHorizontal,
    featured: true,
  },
];

export function AdsStructureBalanceVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-3 md:p-8">
        {structureBalance.map(({ title, label, items, icon: Icon, featured }) => (
          <section
            key={title}
            className={`rounded-2xl border p-5 ${
              featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <Icon className={`h-5 w-5 ${featured ? 'text-brand-accent' : 'text-brand-secondary'}`} aria-hidden="true" />
              <span className={`text-[9px] font-black uppercase tracking-[0.12em] ${featured ? 'text-brand-accent' : 'text-brand-soft-text'}`}>{label}</span>
            </div>
            <h3 className="mt-4 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
            <div className="mt-4 space-y-3">
              {items.map((item, index) => {
                const isOperatingDecision = featured && index === 0;
                return (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isOperatingDecision ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      <Caption>Campaign structure tốt không chia vụn đến mức mất signal, cũng không gom đến mức mất khả năng đọc.</Caption>
    </figure>
  );
}

type OperatingBlock = {
  title: string;
  label: string;
  items: string[];
  icon: LucideIcon;
  action: string;
  featured?: boolean;
};

const operatingBlocks: OperatingBlock[] = [
  {
    title: 'Test',
    label: 'Learn',
    items: ['Angle / creative / offer / page', 'Budget cap', 'Decision rule'],
    icon: FlaskConical,
    action: 'Giữ logic học rõ',
  },
  {
    title: 'Scale',
    label: 'Exploit',
    items: ['Winner đã có signal', 'Lead quality ổn', 'Economics chịu được'],
    icon: TrendingUp,
    action: 'Tăng có kiểm soát',
    featured: true,
  },
  {
    title: 'Retargeting',
    label: 'Continue',
    items: ['Proof', 'Objection', 'Next action'],
    icon: RefreshCw,
    action: 'Kiểm soát frequency',
  },
];

export function TestScaleRetargetingStructureVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Operating blocks</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Một structure tối thiểu để đọc nhiệm vụ</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {operatingBlocks.map(({ title, label, items, icon: Icon, action, featured }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-5 w-5 ${featured ? 'text-brand-accent' : 'text-brand-secondary'}`} aria-hidden="true" />
                <span className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">{label}</span>
              </div>
              <h4 className="mt-4 font-heading text-[17px] font-extrabold text-brand-primary">{title}</h4>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-accent" aria-hidden="true" />
                    <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-brand-highlight/20 bg-brand-highlight-soft px-3 py-2.5">
                <p className="text-[11px] font-bold text-brand-highlight">{action}</p>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3">
          <SearchCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-[12px] font-bold leading-[1.55] text-brand-secondary">
            Không phải tài khoản nào cũng cần đúng ba khối này. Nhưng mỗi tài khoản nên biết phần nào đang học, khai thác và nuôi lại.
          </p>
        </div>
      </div>
      <Caption>Một cấu trúc vận hành nên giúp phân biệt tiền đang học, tiền đang khai thác và tiền đang retargeting.</Caption>
    </figure>
  );
}
