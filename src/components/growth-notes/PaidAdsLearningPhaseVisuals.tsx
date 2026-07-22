import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  Database,
  Gauge,
  RefreshCw,
  Settings2,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type LearningStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const learningSteps: LearningStep[] = [
  { title: 'Setup', subtitle: 'Objective, audience, creative, event', icon: Settings2 },
  { title: 'Delivery', subtitle: 'Platform phân phối thử', icon: Gauge },
  { title: 'Signal', subtitle: 'Click, lead, purchase, page behavior', icon: BarChart3 },
  { title: 'Feedback', subtitle: 'CRM, lead quality, sales note', icon: Database, action: true },
  { title: 'Decision', subtitle: 'Giữ, sửa nhẹ, tắt, scale', icon: Target, action: true },
  { title: 'Next Iteration', subtitle: 'Creative, offer, page, budget', icon: RefreshCw },
];

export function CampaignLearningLoopVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {learningSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-3 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < learningSteps.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-5">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-brand-accent">
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          <p className="text-[11px] font-black uppercase tracking-[0.14em]">Lặp lại với bài học rõ hơn</p>
        </div>
      </div>
      <Caption>Campaign cần một vòng học đủ rõ: setup, phân phối, tín hiệu, feedback, quyết định và vòng lặp tiếp theo.</Caption>
    </figure>
  );
}

const smallEdits = [
  'Sửa typo',
  'UTM hoặc tracking label',
  'Thêm creative batch theo plan',
  'Pause ad lỗi rõ ràng',
  'Tối ưu nhỏ không đổi hypothesis',
  'Ít làm nhiễu logic học',
];

const significantEdits = [
  'Đổi objective hoặc event',
  'Đổi audience lớn',
  'Đổi offer',
  'Đổi landing page hoặc form chính',
  'Tăng hoặc giảm budget mạnh',
  'Rebuild structure',
  'Cần log và đọc lại từ đầu',
];

function EditColumn({
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
          const isAction = featured && index === items.length - 1;
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

export function SmallVsSignificantEditsVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <EditColumn title="Small Edits" label="Giữ hypothesis" items={smallEdits} />
        <EditColumn title="Significant Edits" label="Biến mới trong quá trình học" items={significantEdits} featured />
      </div>
      <Caption>Không phải chỉnh sửa nào cũng giống nhau. Thay đổi lớn cần được xem như một biến mới trong quá trình học.</Caption>
    </figure>
  );
}

const changeLogRows = [
  {
    change: 'Add creative batch 02',
    reason: 'Test proof angle',
    signal: 'CTR, CPL, qualified',
    window: 'Theo test plan',
    decision: 'Hold / iterate',
  },
  {
    change: 'Change form question',
    reason: 'Filter lead quality',
    signal: 'Submit rate, qualified',
    window: 'Weekly review',
    decision: 'Keep / revert',
  },
  {
    change: 'Increase budget',
    reason: 'Scale tested signal',
    signal: 'CPL, contacted, economics',
    window: 'Theo scale plan',
    decision: 'Continue / slow',
  },
];

export function CampaignChangeLogVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Campaign change log</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Mỗi thay đổi phải để lại dấu vết</h3>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {changeLogRows.map((row, index) => (
            <section key={row.change} className="rounded-2xl border border-brand-border bg-brand-bg p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-brand-accent">{String(index + 1).padStart(2, '0')}</span>
                <h4 className="font-heading text-[13px] font-extrabold text-brand-primary">{row.change}</h4>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Reason</p>
                  <p className="mt-1 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{row.reason}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Expected signal</p>
                  <p className="mt-1 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{row.signal}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Review window</p>
                  <p className="mt-1 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{row.window}</p>
                </div>
                <div className="rounded-xl border border-brand-highlight/20 bg-brand-highlight-soft p-3">
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-brand-highlight">Decision</p>
                  <p className="mt-1 text-[11px] font-bold leading-[1.5] text-brand-primary">{row.decision}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Không có change log, team khó biết performance đổi vì thị trường, creative, budget hay chính những lần chỉnh sửa.</Caption>
    </figure>
  );
}
