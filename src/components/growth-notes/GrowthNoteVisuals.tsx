import { AlertCircle, ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react';

const pipelineSteps = [
  { title: 'Traffic', subtitle: 'Người nhìn thấy thông điệp' },
  { title: 'Lead', subtitle: 'Người để lại tín hiệu' },
  { title: 'Qualified Lead', subtitle: 'Nhu cầu tương đối phù hợp' },
  { title: 'Consultation / Quote', subtitle: 'Đã tư vấn hoặc báo giá' },
  { title: 'Deal / Revenue', subtitle: 'Có outcome kinh doanh', isOutcome: true },
];

export function LeadPipelineVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {pipelineSteps.map((step, index) => (
            <div key={step.title} className="contents">
              <div
                className={`flex min-h-28 flex-1 flex-col justify-between rounded-2xl border p-4 ${
                  step.isOutcome
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">
                  Bước {index + 1}
                </span>
                <div className="mt-5">
                  <p className="font-heading text-[14px] font-extrabold leading-tight text-brand-primary">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.45] text-brand-soft-text">{step.subtitle}</p>
                </div>
              </div>
              {index < pipelineSteps.length - 1 && (
                <div className="flex h-9 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-8">
                  <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Lead chỉ là một điểm trong pipeline. Muốn biết marketing có tạo tăng trưởng thật không, cần nhìn tiếp các bước
        sau lead.
      </figcaption>
    </figure>
  );
}

const volumeLeadItems = [
  'CPL nhìn có vẻ đẹp',
  'Nhiều người hỏi giá',
  'Sales mất nhiều thời gian lọc',
  'Khó tư vấn sâu',
  'Dễ khiến team tối ưu sai hướng',
];

const qualityLeadItems = [
  'Có nhu cầu rõ hơn',
  'Đúng khu vực/phân khúc',
  'Sales dễ bắt đầu cuộc gọi',
  'Có khả năng bước vào tư vấn/báo giá',
  'Giúp team tối ưu theo outcome',
];

export function LeadQualityComparison() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-7">
        <ComparisonCard title="Lead nhiều" items={volumeLeadItems} variant="neutral" />
        <ComparisonCard title="Lead chất lượng" items={qualityLeadItems} variant="quality" />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Vấn đề không phải lead ít hay nhiều. Vấn đề là lead đó có đưa hệ thống tiến gần hơn đến doanh thu hay không.
      </figcaption>
    </figure>
  );
}

type ComparisonCardProps = {
  title: string;
  items: string[];
  variant: 'neutral' | 'quality';
};

function ComparisonCard({ title, items, variant }: ComparisonCardProps) {
  const isQuality = variant === 'quality';

  return (
    <div
      className={`rounded-2xl border p-5 ${
        isQuality ? 'border-brand-accent/20 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
      }`}
    >
      <p className={`font-heading text-[18px] font-extrabold ${isQuality ? 'text-brand-accent' : 'text-brand-primary'}`}>
        {title}
      </p>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14px] font-medium leading-[1.55] text-brand-secondary">
            {isQuality ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
            ) : (
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft-text" aria-hidden="true" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
