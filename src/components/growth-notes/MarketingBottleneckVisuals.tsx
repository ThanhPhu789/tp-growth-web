import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Database,
  FileQuestion,
  Filter,
  FormInput,
  Gauge,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  RefreshCw,
  Search,
  Target,
  Users,
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

type MapStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const bottleneckMap: MapStep[] = [
  { title: 'Spend', subtitle: 'Ngân sách', icon: WalletCards },
  { title: 'Traffic', subtitle: 'Lượt vào / nguồn', icon: BarChart3 },
  { title: 'Message / Offer', subtitle: 'Thông điệp và đề nghị', icon: Megaphone },
  { title: 'Landing Page', subtitle: 'Trang đích', icon: MousePointerClick },
  { title: 'CTA / Contact / Form', subtitle: 'Điểm hành động', icon: FormInput },
  { title: 'Lead Quality', subtitle: 'Chất lượng lead', icon: Filter },
  { title: 'Sales Follow-up', subtitle: 'Xử lý bán hàng', icon: Users },
  { title: 'Outcome', subtitle: 'Báo giá, đơn hàng, doanh thu', icon: CircleDollarSign, highlight: true },
];

export function MarketingBottleneckMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Marketing system map</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Dòng chảy từ spend đến outcome</h3>
          </div>
          <span className="rounded-full border border-brand-highlight/25 bg-brand-highlight-soft px-3 py-1.5 text-[10px] font-black text-brand-highlight">
            Đều có thể nghẽn
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bottleneckMap.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
              <div className="flex items-start justify-between gap-3">
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Điểm nghẽn có thể nằm ở bất kỳ đoạn nào trong dòng chảy marketing, không chỉ ở ads hay sales.
      </Caption>
    </figure>
  );
}

const diagnosisFlow: MapStep[] = [
  { title: 'Signal changes', subtitle: 'Số nào đang đổi?', icon: Gauge },
  { title: 'Segment', subtitle: 'Đổi ở kênh/campaign/trang nào?', icon: Filter },
  { title: 'Compare layers', subtitle: 'Traffic, lead, quality, sales, outcome', icon: BarChart3 },
  { title: 'Locate bottleneck', subtitle: 'Nghẽn ở đoạn nào?', icon: Search },
  { title: 'Decide fix', subtitle: 'Sửa gì trước?', icon: Lightbulb, highlight: true },
  { title: 'Review next week', subtitle: 'Đo lại sau khi sửa', icon: RefreshCw },
];

export function BottleneckDiagnosisFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {diagnosisFlow.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="contents">
              <section className={`min-w-0 flex-1 rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/30 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
                <Icon className={`h-5 w-5 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < diagnosisFlow.length - 1 && (
                <div className="flex h-8 shrink-0 items-center justify-center text-brand-accent md:h-auto md:w-6">
                  <ArrowDown className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 md:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Đọc dashboard để tìm điểm nghẽn là một quy trình: thấy tín hiệu đổi, tách lớp, khoanh vùng, sửa một việc và đo lại.
      </Caption>
    </figure>
  );
}

const signalRows = [
  ['Spend tăng, traffic không tăng', 'Media delivery / targeting / CPC', 'Campaign, audience, keyword, CPC'],
  ['Traffic tăng, contact không tăng', 'Landing page / CTA / offer', 'Message match, CTA, mobile UX'],
  ['CTA click có, form submit thấp', 'Form friction', 'Form length, error, success state'],
  ['Lead tăng, quality giảm', 'Traffic quality / offer / form filter', 'Source, campaign, lead type, qualified rate'],
  ['Qualified ổn, quote thấp', 'Sales process / follow-up', 'Time to contact, consultation, quote process'],
  ['Platform báo lead, CRM không có', 'Tracking / integration', 'Event trigger, CRM/Sheet, dedup'],
];

export function SignalToBottleneckMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-4 shadow-brand-soft sm:p-6 md:p-8">
        <div className="hidden grid-cols-[1fr_1.05fr_1.2fr] gap-3 border-b border-brand-border pb-3 text-[10px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:grid">
          <span>Tín hiệu</span>
          <span>Possible bottleneck</span>
          <span>First check</span>
        </div>
        <div className="space-y-3 md:mt-3">
          {signalRows.map(([signal, bottleneck, firstCheck]) => (
            <section key={signal} className="grid gap-3 rounded-2xl border border-brand-border bg-brand-bg p-4 md:grid-cols-[1fr_1.05fr_1.2fr] md:items-center">
              <div>
                <p className="mb-1 text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text md:hidden">Tín hiệu</p>
                <p className="text-[12px] font-bold leading-[1.5] text-brand-primary">{signal}</p>
              </div>
              <div className="rounded-xl border border-brand-highlight/20 bg-brand-highlight-soft px-3 py-2.5">
                <p className="mb-1 text-[9px] font-black uppercase tracking-[0.12em] text-brand-highlight md:hidden">Possible bottleneck</p>
                <p className="text-[11px] font-semibold leading-[1.5] text-brand-secondary">{bottleneck}</p>
              </div>
              <div className="rounded-xl border border-brand-accent/20 bg-brand-accent-soft px-3 py-2.5">
                <p className="mb-1 text-[9px] font-black uppercase tracking-[0.12em] text-brand-accent md:hidden">First check</p>
                <p className="text-[11px] font-semibold leading-[1.5] text-brand-secondary">{firstCheck}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một tín hiệu xấu không tự nói nguyên nhân. Dashboard nên giúp team chuyển từ tín hiệu sang điểm cần kiểm tra đầu tiên.
      </Caption>
    </figure>
  );
}

const fixPriorities = [
  {
    title: 'Fix tracking/data trust first',
    subtitle: 'Nếu số không đáng tin, quyết định dễ sai',
    icon: Database,
    urgent: true,
  },
  {
    title: 'Fix broken actions',
    subtitle: 'Form, CTA, contact link bị lỗi',
    icon: FormInput,
    urgent: true,
  },
  {
    title: 'Fix biggest bottleneck',
    subtitle: 'Đoạn rơi nhiều nhất',
    icon: Search,
  },
  {
    title: 'Fix quick wins',
    subtitle: 'Việc nhỏ, tác động nhanh',
    icon: Target,
  },
  {
    title: 'Test deeper changes',
    subtitle: 'Offer, targeting, sales process dài hơn',
    icon: FileQuestion,
  },
];

export function BottleneckFixPriorityVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Fix priority</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Sửa theo mức ảnh hưởng</h3>
        </div>
        <div className="space-y-3">
          {fixPriorities.map(({ title, subtitle, icon: Icon, urgent }, index) => (
            <section
              key={title}
              className={`grid items-center gap-3 rounded-2xl border p-4 sm:grid-cols-[48px_1fr_auto] ${
                urgent ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface ${urgent ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h4 className="font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-1 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </div>
              <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Khi dashboard chỉ ra nhiều điểm nghẽn, team nên ưu tiên sửa theo mức ảnh hưởng và độ tin cậy dữ liệu, không sửa mọi thứ cùng lúc.
      </Caption>
    </figure>
  );
}

const reviewItems = [
  'Số nào đang thay đổi nhiều nhất?',
  'Thay đổi nằm ở kênh / campaign / trang nào?',
  'Spend và traffic có khớp nhau không?',
  'Traffic có tạo CTA / contact không?',
  'Contact / form có tạo lead thật không?',
  'Lead quality có thay đổi không?',
  'Sales follow-up có bị chậm không?',
  'Outcome có độ trễ không?',
  'Tracking / dashboard có lỗi không?',
  'Tuần này chỉ sửa 1–3 điểm nào?',
];

export function BottleneckReviewChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist tìm điểm nghẽn bằng dashboard
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {reviewItems.map((item, index) => {
            const isAction = index === reviewItems.length - 1;
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
        Checklist này giúp team đi từ số lệch đến điểm nghẽn cụ thể, rồi chốt ít việc cần sửa nhất trong tuần.
      </Caption>
    </figure>
  );
}
