import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  FlaskConical,
  Megaphone,
  RefreshCw,
  Search,
  ShieldCheck,
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

type BudgetRole = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const budgetRoles: BudgetRole[] = [
  { title: 'Create Demand', subtitle: 'Mở vấn đề, tạo nhận biết', icon: Megaphone, action: true },
  { title: 'Capture Demand', subtitle: 'Bắt nhu cầu đã rõ', icon: Search },
  { title: 'Convert', subtitle: 'Đẩy hành động gần mua / lead', icon: Target },
  { title: 'Retarget / Nurture', subtitle: 'Nhắc proof, xử lý objection', icon: RefreshCw },
  { title: 'Test / Learn', subtitle: 'Creative, offer, page, signal', icon: FlaskConical, action: true },
  { title: 'Protect / Defend', subtitle: 'Brand, competitor, branded intent nếu cần', icon: ShieldCheck },
];

export function PaidAdsBudgetPortfolioVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Budget portfolio</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Ngân sách paid ads nên có vai trò</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {budgetRoles.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="mt-4 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-semibold leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Một tài khoản ads khỏe không chỉ có campaign CPA đẹp. Nó có ngân sách cho nhiều vai trò khác nhau trong hệ thống tăng trưởng.</Caption>
    </figure>
  );
}

const cpaTrapSteps = ['Dồn tiền cuối phễu', 'Cắt prospecting / test', 'Report ngắn hạn đẹp', 'Tệp warm cạn dần', 'Pipeline yếu'];
const portfolioSteps = ['Giữ create demand', 'Giữ capture demand', 'Giữ retargeting hợp lý', 'Giữ test / learn', 'Pipeline có nguồn mới'];

function AllocationFlow({
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
      <div className="mt-5 space-y-2">
        {items.map((item, index) => {
          const isOutcome = featured && index === items.length - 1;
          return (
            <div key={item}>
              <div
                className={`flex items-center gap-3 rounded-xl border p-3.5 ${
                  isOutcome ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-border bg-brand-surface'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    isOutcome ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'
                  }`}
                >
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                <p className="text-[12px] font-semibold leading-[1.5] text-brand-secondary">{item}</p>
              </div>
              {index < items.length - 1 && <ArrowDown className="mx-auto my-1 h-3.5 w-3.5 text-brand-accent" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CpaTrapBudgetAllocationVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <AllocationFlow title="Chạy theo CPA thấp" label="Tối ưu một điểm" items={cpaTrapSteps} />
        <AllocationFlow title="Phân bổ theo vai trò" label="Nuôi cả hệ thống" items={portfolioSteps} featured />
      </div>
      <Caption>Campaign CPA thấp có thể rất đáng giữ, nhưng dồn toàn bộ ngân sách vào đó có thể làm yếu nguồn demand cho tương lai.</Caption>
    </figure>
  );
}

type FunnelRole = {
  title: string;
  readBy: string;
  icon: LucideIcon;
  action?: boolean;
};

const funnelRoles: FunnelRole[] = [
  { title: 'Awareness / Create Demand', readBy: 'Reach quality, message signal, warm audience', icon: Megaphone },
  { title: 'Consideration / Educate', readBy: 'Content, page engagement, return visit, objection', icon: BookOpen },
  { title: 'Capture Intent', readBy: 'Search intent, lead hoặc purchase quality', icon: Search },
  { title: 'Convert', readBy: 'CPL / CPA, qualified, opportunity', icon: Target, action: true },
  { title: 'Retain / Retarget', readBy: 'Proof response, frequency, incremental lift', icon: RefreshCw, action: true },
];

export function FunnelBudgetRoleMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {funnelRoles.map(({ title, readBy, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action ? 'border-brand-highlight/20 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-3 text-[9px] font-black uppercase tracking-[0.12em] text-brand-soft-text">Read by</p>
                <p className="mt-1.5 text-[10px] font-semibold leading-[1.5] text-brand-secondary">{readBy}</p>
              </section>
              {index < funnelRoles.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-5">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-4 text-center text-[12px] font-semibold leading-[1.6] text-brand-primary">
          Không đọc mọi tầng bằng cùng một CPA.
        </p>
      </div>
      <Caption>Mỗi tầng funnel làm một việc khác nhau, nên ngân sách và KPI cũng phải được đọc khác nhau.</Caption>
    </figure>
  );
}
