import {
  BarChart3,
  Check,
  ClipboardCheck,
  Database,
  FileSearch,
  Flag,
  LayoutTemplate,
  Megaphone,
  MessageSquare,
  Target,
  Users,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const blameItems = [
  'Ai làm sai?',
  'Vì sao không ra lead?',
  'Campaign này fail rồi',
  'Cảm giác nhiều hơn dữ liệu',
  'Kết thúc bằng làm lại từ đầu',
];

const learningItems = [
  'Giả thuyết nào sai hoặc đúng?',
  'Tín hiệu rơi ở lớp nào?',
  'Bài học thuộc creative, offer, page hay sales?',
  'Quyết định vòng sau là gì?',
  'Kết thúc bằng learning note',
];

function ReviewColumn({
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
          const isOutcome = featured && index === items.length - 1;
          return (
            <div
              key={item}
              className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                isOutcome ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-surface'
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  isOutcome ? 'bg-brand-highlight text-white' : featured ? 'bg-brand-accent-soft text-brand-accent' : 'bg-brand-bg text-brand-soft-text'
                }`}
              >
                {featured ? <Check className="h-3 w-3" aria-hidden="true" /> : <X className="h-3 w-3" aria-hidden="true" />}
              </span>
              <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function PostMortemNotBlameMeetingVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <ReviewColumn title="Blame Meeting" label="Tìm người để trách" items={blameItems} />
        <ReviewColumn title="Learning Review" label="Tìm hệ thống để sửa" items={learningItems} featured />
      </div>
      <Caption>Post-mortem tốt biến tiền ads đã tiêu thành bài học cho vòng sau, không thành buổi đổ lỗi.</Caption>
    </figure>
  );
}

const matrixCells = [
  {
    title: 'Burn',
    axes: 'Weak result · Low learning',
    note: 'Tiêu tiền, không biết gì thêm',
  },
  {
    title: 'Useful Loss',
    axes: 'Weak result · High learning',
    note: 'Biết rõ nên sửa gì',
    action: true,
  },
  {
    title: 'Lucky Win',
    axes: 'Strong result · Low learning',
    note: 'Có số tốt nhưng không biết vì sao',
  },
  {
    title: 'Scalable Signal',
    axes: 'Strong result · High learning',
    note: 'Có kết quả và biết điều kiện để scale',
    action: true,
  },
];

export function WinLoseLearnMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {matrixCells.map(({ title, axes, note, action }) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-5 ${
                action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <p className={`text-[9px] font-black uppercase tracking-[0.12em] ${action ? 'text-brand-highlight' : 'text-brand-soft-text'}`}>
                {axes}
              </p>
              <h3 className="mt-3 font-heading text-[17px] font-extrabold text-brand-primary">{title}</h3>
              <p className="mt-2 text-[12px] font-semibold leading-[1.55] text-brand-secondary">{note}</p>
            </section>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4">
          <span className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-accent">Business result: Weak → Strong</span>
          <span className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-accent">Learning quality: Low → High</span>
        </div>
      </div>
      <Caption>Campaign thắng hay thua chưa đủ. Nó có để lại bài học rõ cho vòng sau không?</Caption>
    </figure>
  );
}

type ChecklistGroup = {
  title: string;
  icon: LucideIcon;
  action?: boolean;
};

const checklistGroups: ChecklistGroup[] = [
  { title: 'Hypothesis', icon: FileSearch },
  { title: 'Objective / role', icon: Flag },
  { title: 'Media signal', icon: BarChart3 },
  { title: 'Creative / message', icon: Megaphone },
  { title: 'Offer', icon: Target },
  { title: 'Landing page / form', icon: LayoutTemplate },
  { title: 'Tracking / CRM data', icon: Database, action: true },
  { title: 'Sales feedback / business outcome', icon: Users, action: true },
];

export function CampaignPostMortemChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Post-mortem checklist</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Sau campaign, đừng chỉ hỏi thắng hay thua</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {checklistGroups.map(({ title, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`flex min-w-0 items-center gap-3 rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <span className={`font-heading text-[11px] font-black ${action ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <Icon className={`h-4 w-4 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{title}</p>
            </section>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4">
          <MessageSquare className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-[11px] font-semibold leading-[1.55] text-brand-primary">Kết thúc bằng: giữ gì, sửa gì, bỏ gì và test gì tiếp.</p>
        </div>
      </div>
      <Caption>Một post-mortem tốt đi qua giả thuyết, media, creative, offer, page, tracking, CRM và sales outcome.</Caption>
    </figure>
  );
}
