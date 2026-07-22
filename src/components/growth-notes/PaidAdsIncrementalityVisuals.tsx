import { ArrowDown, ArrowRight, Check, CircleDollarSign, Gauge, Search, Sparkles, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const attributedItems = [
  'Ads được ghi nhận công',
  'Nằm trong attribution window',
  'Có thể là click hoặc view gần conversion',
  'Tốt để đọc platform và report',
  'Chưa chắc là kết quả tăng thêm',
];

const incrementalItems = [
  'Kết quả xảy ra thêm nhờ ads',
  'So với baseline nếu không chạy',
  'Đọc tác động thật lên business',
  'Quan trọng khi scale ngân sách',
  'Cần kiểm bằng dữ liệu hoặc test đơn giản',
];

function ComparisonColumn({
  title,
  label,
  items,
  featured,
}: {
  title: string;
  label: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <section
      className={`min-w-0 rounded-brand-card border p-5 sm:p-6 ${
        featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
      }`}
    >
      <p className={`text-[10px] font-black uppercase tracking-[0.16em] ${featured ? 'text-brand-accent' : 'text-brand-soft-text'}`}>
        {label}
      </p>
      <h3 className="mt-2 font-heading text-[18px] font-extrabold text-brand-primary">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => {
          const isAction = featured && (index === 0 || index === 3);
          return (
            <div
              key={item}
              className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                isAction ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-surface'
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  isAction ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'
                }`}
              >
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function AttributedVsIncrementalConversionVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <ComparisonColumn title="Attributed Conversion" label="Ghi nhận" items={attributedItems} />
        <ComparisonColumn title="Incremental Conversion" label="Tác động tăng thêm" items={incrementalItems} featured />
      </div>
      <Caption>Attribution cho biết ads được nhận công thế nào. Incrementality hỏi ads có tạo thêm kết quả mới hay không.</Caption>
    </figure>
  );
}

type DemandStage = {
  title: string;
  description: string;
  icon: LucideIcon;
  active?: boolean;
};

const demandStages: DemandStage[] = [
  { title: 'Branded Search', description: 'Bắt demand rất gần điểm mua', icon: Search },
  { title: 'Retargeting', description: 'Nhắc lại / xử lý objection', icon: Target },
  { title: 'High-intent Search', description: 'Bắt nhu cầu đã nói ra', icon: Gauge },
  { title: 'Social Prospecting', description: 'Khơi gợi vấn đề / mở demand', icon: Sparkles, active: true },
  { title: 'Content / Video / Education', description: 'Tạo nhận biết và warm audience', icon: CircleDollarSign, active: true },
];

export function DemandCaptureVsDemandCreationVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-soft-text">Capture demand</p>
          <div className="h-px flex-1 bg-brand-accent/25" />
          <p className="text-right text-[10px] font-black uppercase tracking-[0.16em] text-brand-highlight">Create demand</p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-stretch">
          {demandStages.map(({ title, description, icon: Icon, active }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  active ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-semibold leading-[1.5] text-brand-secondary">{description}</p>
              </section>
              {index < demandStages.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-5">
                  <ArrowDown className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4 text-[12px] font-semibold leading-[1.6] text-brand-secondary">
          Campaign gần điểm mua thường dễ nhìn đẹp hơn trong attribution. Campaign tạo demand khó nhận công trực tiếp hơn nhưng có thể tạo tăng trưởng mới.
        </p>
      </div>
      <Caption>Không phải campaign nào cũng làm cùng một việc. Có campaign bắt demand có sẵn, có campaign mở demand mới.</Caption>
    </figure>
  );
}

const incrementalityChecks = [
  'Tổng lead hoặc doanh thu có tăng thật không?',
  'Conversion này là khách mới hay khách cũ?',
  'Nếu giảm hoặc tắt nhẹ, tổng kết quả có rơi không?',
  'Campaign đang bắt demand hay tạo demand?',
  'Có cannibalize organic, direct hoặc branded không?',
  'Margin hoặc profit có tăng không?',
  'Qualified lead có tăng không?',
  'Có bài học nào quay lại creative, offer hoặc page không?',
];

export function SimpleIncrementalityCheckVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Check className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Incrementality check</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Trước khi scale campaign nhìn đẹp, hỏi thêm</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {incrementalityChecks.map((item, index) => {
            const isAction = index === 3 || index === 5 || index === 6;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isAction ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span className={`font-heading text-[11px] font-black ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>SME chưa cần bắt đầu bằng mô hình phức tạp, nhưng cần phân biệt nhận công và tạo thêm giá trị.</Caption>
    </figure>
  );
}
