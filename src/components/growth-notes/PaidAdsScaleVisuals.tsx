import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  DollarSign,
  Gauge,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
  Route,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

type AdsSystemStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const adsSystemSteps: AdsSystemStep[] = [
  { title: 'Audience / Market', subtitle: 'Tệp và nhu cầu', icon: Users },
  { title: 'Creative', subtitle: 'Hook, angle, proof', icon: Megaphone },
  { title: 'Ads Delivery', subtitle: 'CPM, CTR, CPC, frequency', icon: Gauge },
  { title: 'Landing Page', subtitle: 'Message match, CTA, form', icon: LayoutTemplate },
  { title: 'Tracking', subtitle: 'Event, source, dedup, attribution', icon: Route, action: true },
  { title: 'CRM', subtitle: 'Owner, status, lead quality', icon: Database, action: true },
  { title: 'Sales Follow-up', subtitle: 'Speed, script, next action', icon: Target },
  { title: 'Economics', subtitle: 'CAC, margin, payback, LTV', icon: DollarSign, action: true },
];

export function BigBudgetAdsSystemMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {adsSystemSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Ngân sách lớn buộc người chạy ads phải nhìn ads như một phần của hệ thống: creative, page, tracking, CRM, sales và economics.
      </Caption>
    </figure>
  );
}

const winningAdItems = [
  'Tìm một mẫu thắng',
  'Scale mạnh',
  'Đợi hiệu quả giảm',
  'Vội làm mẫu mới',
  'Dễ rơi vào chữa cháy',
];

const creativePipelineItems = [
  'Có angle bank',
  'Có hook / proof / format bank',
  'Test có nhịp',
  'Đọc signal theo creative',
  'Sản xuất vòng mới trước khi creative mỏi',
];

export function WinningAdVsCreativePipelineVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Sống bằng mẫu thắng</h3>
          </div>
          <div className="mt-5 space-y-3">
            {winningAdItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Megaphone className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Vận hành creative pipeline</h3>
          </div>
          <div className="mt-5 space-y-3">
            {creativePipelineItems.map((item, index) => {
              const isAction = index === 3 || index === 4;
              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                    isAction
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft'
                      : 'border-brand-accent/20 bg-brand-surface'
                  }`}
                >
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Caption>
        Mẫu thắng giúp tài khoản đi được một đoạn. Creative pipeline giúp tài khoản có nhiên liệu cho nhiều vòng test và scale tiếp theo.
      </Caption>
    </figure>
  );
}

type FunnelStep = {
  title: string;
  icon: LucideIcon;
  action?: boolean;
};

const economicsFunnel: FunnelStep[] = [
  { title: 'Spend', icon: DollarSign },
  { title: 'Click', icon: MousePointerClick },
  { title: 'Lead', icon: Users },
  { title: 'Contacted', icon: Route },
  { title: 'Qualified', icon: Target },
  { title: 'Quote / Cart', icon: BarChart3 },
  { title: 'Won / Purchase', icon: TrendingUp },
  { title: 'Margin / Payback', icon: DollarSign, action: true },
];

export function BeyondCPLDecisionVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {economicsFunnel.map(({ title, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 text-center ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`mx-auto h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[11px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
              </section>
              {index < economicsFunnel.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-4">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-brand-highlight/20 bg-brand-highlight-soft p-4 text-center text-[12px] font-semibold leading-[1.6] text-brand-secondary">
          CPL chỉ là một điểm giữa funnel. Quyết định scale cần nhìn qualified rate, close rate, margin và payback.
        </p>
      </div>
      <Caption>
        Người chạy ads ngân sách lớn không chỉ hỏi CPL rẻ hay đắt. Họ hỏi lead đó đi được bao xa trong hệ thống doanh thu.
      </Caption>
    </figure>
  );
}

const creativeBanks = [
  { title: 'Angle Bank', subtitle: 'Nỗi lo, mong muốn, insight', icon: Target },
  { title: 'Hook Bank', subtitle: 'Cách mở đầu', icon: Megaphone },
  { title: 'Proof Bank', subtitle: 'Case, demo, before-after', icon: CheckCircle2, action: true },
  { title: 'Offer Bank', subtitle: 'CTA, sample, audit, tư vấn', icon: DollarSign },
  { title: 'Format Bank', subtitle: 'Image, carousel, video, demo', icon: LayoutTemplate },
  { title: 'Objection Bank', subtitle: 'Lý do khách chưa tin', icon: Route },
  { title: 'Sales Feedback', subtitle: 'Lead quality, câu hỏi, phản đối', icon: Users, action: true },
];

export function CreativePipelineBankVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-3 rounded-2xl border border-brand-accent/25 bg-brand-accent-soft px-5 py-4">
          <Megaphone className="h-5 w-5 text-brand-accent" aria-hidden="true" />
          <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">Creative Pipeline</h3>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {creativeBanks.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-bg'
              } ${index === creativeBanks.length - 1 ? 'lg:col-start-3' : ''}`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Creative pipeline không chỉ là thư viện file thiết kế. Nó là thư viện angle, hook, proof, offer, format, objection và feedback từ thị trường.
      </Caption>
    </figure>
  );
}

const creativeSignalSteps = [
  { title: 'Impression', signal: 'CPM / reach', icon: Users },
  { title: 'Attention', signal: 'Thumbstop / CTR', icon: Gauge },
  { title: 'Click', signal: 'CPC', icon: MousePointerClick },
  { title: 'Landing', signal: 'Scroll / CTA click', icon: LayoutTemplate },
  { title: 'Lead', signal: 'Form submit / CPL', icon: Database },
  { title: 'Sales', signal: 'Contacted / qualified', icon: Target, action: true },
  { title: 'Outcome', signal: 'Quote / won / lost reason', icon: TrendingUp, action: true },
];

export function CreativeSignalReadingMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {creativeSignalSteps.map(({ title, signal, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[11px] font-extrabold text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-medium leading-[1.45] text-brand-secondary">{signal}</p>
              </section>
              {index < creativeSignalSteps.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-4">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-brand-highlight/20 bg-brand-highlight-soft p-4 text-center text-[12px] font-semibold leading-[1.6] text-brand-secondary">
          Đừng gọi một creative là thắng nếu nó chỉ thắng ở click nhưng thua ở lead quality.
        </p>
      </div>
      <Caption>
        Creative signal không dừng ở CTR/CPL. Cần đọc tiếp landing page, lead quality, sales status và outcome.
      </Caption>
    </figure>
  );
}

const cheapCplItems = [
  'Chi phí lead thấp',
  'Form / inbox nhiều',
  'Ads manager nhìn đẹp',
  'Dễ scale nhầm nếu chỉ nhìn số lượng',
  'Chưa biết lead có đi tiếp không',
];

const valuableLeadItems = [
  'Contact được',
  'Đúng nhu cầu',
  'Có ngân sách / phù hợp',
  'Hiểu đúng offer',
  'Có next action rõ',
  'Có khả năng đi tới quote / meeting / won',
];

export function CheapCPLVsValuableLeadVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">CPL rẻ</h3>
          </div>
          <div className="mt-5 space-y-3">
            {cheapCplItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Lead có giá trị</h3>
          </div>
          <div className="mt-5 space-y-3">
            {valuableLeadItems.map((item, index) => {
              const isAction = index >= 4;
              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                    isAction
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft'
                      : 'border-brand-accent/20 bg-brand-surface'
                  }`}
                >
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Caption>
        CPL rẻ là một tín hiệu media. Lead có giá trị là câu chuyện của cả funnel sau khi người đó để lại thông tin.
      </Caption>
    </figure>
  );
}

const leadQualityFunnelSteps = [
  { title: 'Spend', signal: 'Ngân sách đã tiêu', icon: DollarSign },
  { title: 'Click', signal: 'CPC / CTR', icon: MousePointerClick },
  { title: 'Lead', signal: 'CPL / form submit', icon: Database },
  { title: 'Contacted', signal: 'Gọi / nhắn được không', icon: Users },
  { title: 'Qualified', signal: 'Đúng nhu cầu / tệp / ngân sách', icon: Target, action: true },
  { title: 'Next Action', signal: 'Hẹn lại, báo giá, demo', icon: Route, action: true },
  { title: 'Quote / Meeting', signal: 'Có cơ hội thật', icon: BarChart3, action: true },
  { title: 'Won / Lost', signal: 'Doanh thu hoặc bài học', icon: TrendingUp, action: true },
];

export function LeadQualityFunnelAfterCPLVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {leadQualityFunnelSteps.map(({ title, signal, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h3>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{signal}</p>
            </section>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-brand-highlight/20 bg-brand-highlight-soft p-4 text-center text-[12px] font-semibold leading-[1.6] text-brand-secondary">
          CPL nằm ở bước 3. Quyết định scale nên đọc tiếp ít nhất tới contacted, qualified và next action.
        </p>
      </div>
      <Caption>
        Muốn biết lead có tốt không, phải đọc các bước sau CPL: contact, qualify, next action, quote hoặc meeting và lý do thắng thua.
      </Caption>
    </figure>
  );
}

const salesFeedbackLoopSteps = [
  { title: 'Ads Creative / Keyword', subtitle: 'Kéo kỳ vọng ban đầu', icon: Megaphone },
  { title: 'Landing Page / Form', subtitle: 'Chốt thông điệp và thu data', icon: LayoutTemplate },
  { title: 'CRM', subtitle: 'Source, owner, status', icon: Database },
  { title: 'Sales Contact', subtitle: 'Contacted / not contacted', icon: Users },
  { title: 'Sales Note', subtitle: 'Nhu cầu, objection, fit', icon: Route, action: true },
  { title: 'Lead Quality Review', subtitle: 'Creative / campaign nào tốt', icon: BarChart3 },
  { title: 'Ads Decision', subtitle: 'Giữ, sửa, tắt, tăng', icon: Target, action: true },
];

export function SalesFeedbackToAdsLoopVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {salesFeedbackLoopSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[11px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-medium leading-[1.45] text-brand-secondary">{subtitle}</p>
              </section>
              {index < salesFeedbackLoopSteps.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-4">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-brand-accent/20 bg-brand-bg p-4 text-brand-accent">
          <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
          <p className="text-[11px] font-bold text-brand-secondary">Quyết định mới quay lại vòng creative, keyword, page và form tiếp theo</p>
        </div>
      </div>
      <Caption>
        Lead quality chỉ cải thiện khi feedback từ sales quay lại được ads, creative, form và landing page.
      </Caption>
    </figure>
  );
}

const scalePressureLayers = [
  { title: 'Budget', subtitle: 'Ngân sách tăng', icon: DollarSign },
  { title: 'Creative', subtitle: 'Mỏi nhanh hơn', icon: Megaphone },
  { title: 'Audience', subtitle: 'Frequency và overlap', icon: Users },
  { title: 'Landing Page', subtitle: 'Conversion chịu áp lực', icon: LayoutTemplate },
  { title: 'Tracking', subtitle: 'Signal phải sạch', icon: Route, action: true },
  { title: 'CRM', subtitle: 'Lead có owner / status', icon: Database, action: true },
  { title: 'Sales', subtitle: 'Follow-up phải nhanh', icon: Target, action: true },
  { title: 'Economics', subtitle: 'CAC, margin, payback', icon: BarChart3, action: true },
];

export function AdsScalePressureMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scalePressureLayers.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h3>
              <p className="mt-2 text-[11px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Scale ads không chỉ tăng ngân sách trong ads manager. Nó tăng áp lực lên creative, page, tracking, CRM, sales và economics.
      </Caption>
    </figure>
  );
}

const scaleDecisionCells = [
  {
    signals: 'Media mạnh · Lead quality cao',
    action: 'Có thể tăng có kiểm soát',
    tone: 'positive',
  },
  {
    signals: 'Media mạnh · Lead quality thấp',
    action: 'Sửa creative, form hoặc page; chưa scale',
    tone: 'review',
  },
  {
    signals: 'Media yếu · Lead quality cao',
    action: 'Giữ nhỏ, sửa creative hoặc media để mở rộng',
    tone: 'review',
  },
  {
    signals: 'Media yếu · Lead quality thấp',
    action: 'Tắt hoặc làm lại bài toán',
    tone: 'neutral',
  },
] as const;

export function AdsScaleDecisionMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-border bg-brand-bg px-4 py-3">
          <p className="text-[11px] font-black uppercase tracking-[0.14em] text-brand-accent">Media signal: Yếu → Mạnh</p>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] text-brand-accent">Lead quality: Thấp → Cao</p>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {scaleDecisionCells.map(({ signals, action, tone }) => (
            <section
              key={signals}
              className={`rounded-brand-card border p-5 ${
                tone === 'positive'
                  ? 'border-brand-accent/25 bg-brand-accent-soft'
                  : tone === 'review'
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
              }`}
            >
              <p className={`text-[10px] font-black uppercase tracking-[0.13em] ${
                tone === 'review' ? 'text-brand-highlight' : tone === 'positive' ? 'text-brand-accent' : 'text-brand-soft-text'
              }`}>
                {signals}
              </p>
              <h3 className="mt-4 font-heading text-[16px] font-extrabold leading-[1.45] text-brand-primary">{action}</h3>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Scale không nên dựa vào một chỉ số. Hãy đọc cả media signal và lead quality trước khi quyết định tăng, giữ, sửa hay tắt.
      </Caption>
    </figure>
  );
}

const testToScaleSteps = [
  { title: 'Test Angle', subtitle: 'Giả thuyết về nỗi đau / nhu cầu', icon: Megaphone },
  { title: 'Read Media Signal', subtitle: 'CTR, CPC, CPL', icon: Gauge },
  { title: 'Read Lead Quality', subtitle: 'Contacted, qualified, note', icon: Users, action: true },
  { title: 'Check Page / Form', subtitle: 'Conversion, message match', icon: LayoutTemplate },
  { title: 'Check Sales Capacity', subtitle: 'Response time, next action', icon: Target },
  { title: 'Check Economics', subtitle: 'CAC, margin, payback', icon: BarChart3, action: true },
  { title: 'Scale Carefully', subtitle: 'Tăng có nhịp, tiếp tục test', icon: TrendingUp, action: true },
];

export function TestSignalToScaleSystemVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {testToScaleSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[11px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-medium leading-[1.45] text-brand-secondary">{subtitle}</p>
              </section>
              {index < testToScaleSteps.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-4">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>
        Scale tốt bắt đầu từ signal nhỏ, nhưng chỉ nên tăng khi page, form, sales và economics cùng xác nhận được tín hiệu đó.
      </Caption>
    </figure>
  );
}

const paidAdsSignalSteps = [
  { title: 'Ad Impression / Click', subtitle: 'Người dùng thấy và bấm ads', icon: MousePointerClick },
  { title: 'Landing Page', subtitle: 'Message, CTA, form', icon: LayoutTemplate },
  { title: 'User Action', subtitle: 'Click, submit, call, purchase', icon: Users },
  { title: 'Tracking Event', subtitle: 'Pixel, tag, server event', icon: Route, action: true },
  { title: 'Ads Platform', subtitle: 'Nhận signal để học', icon: Gauge },
  { title: 'CRM / Sheet', subtitle: 'Source, owner, status', icon: Database, action: true },
  { title: 'Sales / Outcome', subtitle: 'Contacted, qualified, won / lost', icon: Target },
  { title: 'Decision', subtitle: 'Giữ, sửa, tắt, tăng', icon: BarChart3, action: true },
];

export function PaidAdsSignalChainVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {paidAdsSignalSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`min-w-0 rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 shrink-0 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Paid ads tối ưu theo chuỗi signal. Nếu một mắt xích sai, report và quyết định phía sau đều có thể lệch.
      </Caption>
    </figure>
  );
}

const microSignals = ['Scroll', 'CTA click', 'Form start', 'Video view', 'View pricing', 'Download'];
const mainConversions = [
  'Form submit thành công',
  'Qualified lead',
  'Booking / demo',
  'Quote request',
  'Purchase / order confirmed',
  'Won / revenue nếu nối được',
];

export function MicroSignalVsMainConversionVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <MousePointerClick className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Micro signal</h3>
          </div>
          <div className="mt-5 space-y-3">
            {microSignals.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[11px] font-semibold leading-[1.55] text-brand-soft-text">Dùng để đọc intent và cải thiện UX.</p>
        </section>

        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Main conversion</h3>
          </div>
          <div className="mt-5 space-y-3">
            {mainConversions.map((item, index) => {
              const isAction = index === 1 || index === 4;
              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                    isAction
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft'
                      : 'border-brand-accent/20 bg-brand-surface'
                  }`}
                >
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-[11px] font-semibold leading-[1.55] text-brand-secondary">Dùng để đọc kết quả và ra quyết định ngân sách.</p>
        </section>
      </div>
      <Caption>
        Không phải mọi event đều có giá trị như nhau. Paid ads cần phân biệt signal hành vi và conversion dùng để ra quyết định.
      </Caption>
    </figure>
  );
}

const badSignalLoopSteps = [
  { title: 'Tracking sai', subtitle: 'Event thiếu, trùng, sai thời điểm', icon: Route, action: true },
  { title: 'Report lệch', subtitle: 'CPL, CPA, conversion không đáng tin', icon: BarChart3 },
  { title: 'Platform học sai', subtitle: 'Tối ưu theo hành vi sai', icon: Gauge },
  { title: 'Team đọc sai', subtitle: 'Creative, page, campaign bị đánh giá lệch', icon: Users },
  { title: 'Budget đi sai', subtitle: 'Giữ, sửa, tắt, tăng sai', icon: DollarSign, action: true },
  { title: 'Hệ thống tệ hơn', subtitle: 'Lead quality và economics xấu đi', icon: TrendingUp },
];

export function BadSignalOptimizationLoopVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {badSignalLoopSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="contents">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[11px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
                <p className="mt-2 text-[10px] font-medium leading-[1.45] text-brand-secondary">{subtitle}</p>
              </section>
              {index < badSignalLoopSteps.length - 1 && (
                <div className="flex h-7 shrink-0 items-center justify-center text-brand-accent lg:h-auto lg:w-4">
                  <ArrowDown className="h-3.5 w-3.5 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-brand-highlight/20 bg-brand-highlight-soft p-4">
          <ArrowRight className="h-4 w-4 rotate-180 text-brand-highlight" aria-hidden="true" />
          <p className="text-[11px] font-bold text-brand-secondary">Ngân sách sai tiếp tục tạo thêm signal sai cho vòng sau</p>
        </div>
      </div>
      <Caption>
        Tracking sai tạo một vòng lặp nguy hiểm: signal sai, report lệch, platform học sai và ngân sách đi sai hướng.
      </Caption>
    </figure>
  );
}
