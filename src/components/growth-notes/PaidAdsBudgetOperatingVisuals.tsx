import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Check,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Filter,
  FlaskConical,
  Gauge,
  Lightbulb,
  NotebookPen,
  Scale,
  ShieldCheck,
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

const testBudgetItems = [
  'Mục tiêu: học tín hiệu',
  'Dùng cho: angle, creative, offer, page, form',
  'Kỳ vọng: biết giữ, sửa hay tắt',
  'Đọc bằng: signal và lead quality',
  'Rủi ro: test quá nhỏ hoặc quá nhiều biến',
];

const scaleBudgetItems = [
  'Mục tiêu: khai thác tín hiệu đã rõ',
  'Dùng cho: campaign, angle, offer đã có proof',
  'Kỳ vọng: volume ổn hơn',
  'Đọc bằng: CPL/CPA, qualified và economics',
  'Rủi ro: scale quá sớm hoặc creative mỏi',
];

function BudgetColumn({
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
          const isOutcome = index === 3;
          return (
            <div key={item} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isOutcome ? 'bg-brand-highlight text-white' : featured ? 'bg-brand-surface text-brand-accent' : 'bg-brand-surface text-brand-secondary'}`}>
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

export function TestBudgetVsScaleBudgetVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <BudgetColumn title="Test Budget" label="Buy learning" items={testBudgetItems} icon={FlaskConical} />
        <BudgetColumn title="Scale Budget" label="Buy volume" items={scaleBudgetItems} icon={TrendingUp} featured />
      </div>
      <Caption>Test budget và scale budget không cùng nhiệm vụ. Một bên mua bài học, một bên khai thác những gì đã học được.</Caption>
    </figure>
  );
}

type TestElement = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const goodTestElements: TestElement[] = [
  { title: 'Hypothesis', subtitle: 'Mình đang muốn học điều gì?', icon: Lightbulb },
  { title: 'Variable', subtitle: 'Chỉ đổi một vài biến chính', icon: Filter },
  { title: 'Budget Cap', subtitle: 'Giới hạn tiền học', icon: CircleDollarSign },
  { title: 'Time Window', subtitle: 'Đủ thời gian đọc tín hiệu', icon: Clock3 },
  { title: 'Signal', subtitle: 'Media + page + lead quality', icon: BarChart3, highlight: true },
  { title: 'Decision Rule', subtitle: 'Giữ, sửa, tắt, tăng', icon: Scale, highlight: true },
  { title: 'Learning Note', subtitle: 'Ghi bài học cho vòng sau', icon: NotebookPen, highlight: true },
];

export function GoodAdsTestAnatomyVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <BookOpenCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Test design</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Anatomy of a good ads test</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {goodTestElements.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              } ${index === goodTestElements.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-3 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-1.5 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Một test ads tốt có giả thuyết, biến cần kiểm, giới hạn ngân sách, tín hiệu đọc và quyết định sau test.</Caption>
    </figure>
  );
}

const signalGate: TestElement[] = [
  { title: 'Hypothesis', subtitle: 'Đặt điều cần học', icon: Lightbulb },
  { title: 'Test Budget', subtitle: 'Chi tiền có giới hạn', icon: FlaskConical },
  { title: 'Media Signal', subtitle: 'CTR, CPC, CPL', icon: Gauge },
  { title: 'Page / Form', subtitle: 'CTA, submit, conversion', icon: FileCheck2 },
  { title: 'Lead Quality', subtitle: 'Contacted, qualified, note', icon: UsersRound },
  { title: 'Decision Gate', subtitle: 'Kill, iterate, hold, scale', icon: ShieldCheck, highlight: true },
  { title: 'Scale Budget', subtitle: 'Tăng có kiểm soát', icon: TrendingUp, highlight: true },
];

export function TestToScaleSignalGateVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Signal gate</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Từ test sang scale</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {signalGate.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative min-w-0">
              <section className={`h-full rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < signalGate.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3">
          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-[12px] font-bold leading-[1.55] text-brand-secondary">Không phải test nào cũng được scale. Quyết định cần đi qua media, page và lead quality.</p>
        </div>
      </div>
      <Caption>Test phải đi qua cổng tín hiệu: media, page, lead quality và decision rule.</Caption>
    </figure>
  );
}
