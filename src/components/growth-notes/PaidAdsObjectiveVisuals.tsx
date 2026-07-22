import {
  BarChart3,
  ClipboardCheck,
  Eye,
  FormInput,
  MessageCircle,
  MousePointerClick,
  Radio,
  SearchCheck,
  ShoppingCart,
  Signal,
  Target,
  TrendingUp,
  UserCheck,
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

type ObjectiveCard = {
  title: string;
  learns: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const objectiveCards: ObjectiveCard[] = [
  { title: 'Reach', learns: 'Ai dễ được tiếp cận với chi phí thấp', icon: Radio },
  { title: 'Traffic', learns: 'Ai dễ click', icon: MousePointerClick },
  { title: 'Engagement', learns: 'Ai dễ tương tác', icon: MessageCircle },
  { title: 'Lead', learns: 'Ai dễ submit', icon: FormInput, highlight: true },
  { title: 'Purchase / Sales', learns: 'Ai dễ mua hoặc tạo conversion sâu', icon: ShoppingCart, highlight: true },
  { title: 'Qualified / Offline', learns: 'Ai giống nhóm cơ hội tốt nếu data sạch', icon: UserCheck, highlight: true },
];

export function ObjectiveAsAlgorithmBriefVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Target className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Algorithm brief</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Bạn chọn gì, platform học theo đó</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {objectiveCards.map(({ title, learns, icon: Icon, highlight }, index) => (
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
              <p className="mt-2 text-[11px] font-semibold leading-[1.55] text-brand-secondary">{learns}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Objective là cách giao việc cho platform. Giao việc càng nông, thuật toán càng học theo tín hiệu nông.</Caption>
    </figure>
  );
}

type SignalLayer = {
  title: string;
  note: string;
  items: string[];
  icon: LucideIcon;
  highlight?: boolean;
};

const signalLayers: SignalLayer[] = [
  {
    title: 'Tầng nông',
    note: 'Dễ có volume, xa business outcome',
    items: ['Impression', 'Click', 'Engagement', 'Form Start'],
    icon: Eye,
  },
  {
    title: 'Tầng giữa',
    note: 'Bắt đầu có intent',
    items: ['Lead Submit', 'Contacted', 'Qualified'],
    icon: Signal,
    highlight: true,
  },
  {
    title: 'Tầng sâu',
    note: 'Gần business hơn, cần data sạch và đủ volume',
    items: ['Opportunity / Quote / Demo', 'Won / Revenue', 'Margin / Payback'],
    icon: TrendingUp,
    highlight: true,
  },
];

export function ShallowObjectiveVsDeepSignalVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Signal depth</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Objective nông và signal sâu</h3>
        <div className="mt-6 space-y-3">
          {signalLayers.map(({ title, note, items, icon: Icon, highlight }, layerIndex) => (
            <section
              key={title}
              className={`grid gap-4 rounded-2xl border p-4 md:grid-cols-[0.8fr_1.2fr_2fr] md:items-center ${
                highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${highlight ? 'bg-brand-highlight text-white' : 'bg-brand-surface text-brand-accent'}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[9px] font-black text-brand-soft-text">0{layerIndex + 1}</p>
                  <h4 className="font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
                </div>
              </div>
              <p className="text-[11px] font-semibold leading-[1.55] text-brand-secondary">{note}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-brand-border bg-brand-surface px-3 py-1.5 text-[10px] font-bold text-brand-secondary">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Signal càng sâu càng gần business outcome, nhưng cần dữ liệu sạch và đủ volume để platform học.</Caption>
    </figure>
  );
}

type ReadinessItem = {
  text: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const readinessItems: ReadinessItem[] = [
  { text: 'Mục tiêu thật của campaign là gì?', icon: Target },
  { text: 'Người dùng đang ở stage nào?', icon: UsersRound },
  { text: 'Hành vi nào gần nhất với mục tiêu?', icon: SearchCheck },
  { text: 'Event có bắn đúng thời điểm không?', icon: Signal, highlight: true },
  { text: 'Landing page và form tạo được signal đó?', icon: FormInput },
  { text: 'CRM đọc được lead quality không?', icon: UserCheck, highlight: true },
  { text: 'Có đủ volume để platform học không?', icon: BarChart3 },
  { text: 'Quyết định sau campaign dựa trên gì?', icon: ClipboardCheck, highlight: true },
];

export function ObjectiveReadinessChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Objective readiness</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">8 câu hỏi trước khi chọn objective</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {readinessItems.map(({ text, icon: Icon, highlight }, index) => (
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
      <Caption>Chọn objective từ mục tiêu, stage, signal, data quality và quyết định cần ra — không từ thói quen.</Caption>
    </figure>
  );
}
