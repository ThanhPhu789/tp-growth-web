import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  CircleHelp,
  FileCheck2,
  FormInput,
  Image,
  LayoutTemplate,
  MessageSquareText,
  MousePointerClick,
  Palette,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
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

const promiseFlow: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Traffic Source', subtitle: 'Ads, social, search, referral', icon: Route },
  { title: 'Promise', subtitle: 'Người dùng click vì điều gì?', icon: MessageSquareText },
  { title: 'Landing Hero', subtitle: 'Page xác nhận đúng context', icon: LayoutTemplate },
  { title: 'Proof', subtitle: 'Case, bằng chứng, logic', icon: ShieldCheck },
  { title: 'CTA / Form', subtitle: 'Bước tiếp theo rõ', icon: FormInput, action: true },
  { title: 'Sales / CRM', subtitle: 'Context được bàn giao tiếp', icon: Users, action: true },
];

export function MarketingPromiseLandingProofVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Promise to proof</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">
          Lời hứa phải đi xuyên từ nguồn traffic đến sales
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {promiseFlow.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="relative min-w-0">
              <section
                className={`h-full rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < promiseFlow.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {index % 3 !== 2 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Landing page là nơi lời hứa marketing được kiểm chứng bằng context, proof, CTA, form và sales handoff.</Caption>
    </figure>
  );
}

const beautifulPage = [
  { text: 'Layout gọn', icon: LayoutTemplate },
  { text: 'Màu sắc ổn', icon: Palette },
  { text: 'Hình ảnh tốt', icon: Image },
  { text: 'Có CTA', icon: MousePointerClick },
  { text: 'Có form', icon: FormInput },
  { text: 'Có vài case / logo', icon: BadgeCheck },
];

const conversionReadyPage = [
  { text: 'Khớp lời hứa nguồn traffic', icon: Route },
  { text: 'Gọi đúng vấn đề', icon: MessageSquareText },
  { text: 'Proof đúng nỗi lo', icon: ShieldCheck },
  { text: 'CTA đúng stage', icon: MousePointerClick },
  { text: 'Form giữ context', icon: FormInput },
  { text: 'Tracking / CRM / sales rõ', icon: Users, action: true },
];

function ComparisonColumn({
  title,
  items,
  featured,
}: {
  title: string;
  items: Array<{ text: string; icon: LucideIcon; action?: boolean }>;
  featured?: boolean;
}) {
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${featured ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'}`}>
      <div className="flex items-center gap-3">
        {featured ? (
          <SearchCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
        ) : (
          <Sparkles className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
        )}
        <h3 className="font-heading text-[17px] font-extrabold text-brand-primary">{title}</h3>
      </div>
      <div className="mt-5 space-y-3">
        {items.map(({ text, icon: Icon, action }) => (
          <div key={text} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                action
                  ? 'bg-brand-highlight text-white'
                  : featured
                    ? 'bg-brand-surface text-brand-accent'
                    : 'bg-brand-surface text-brand-soft-text'
              }`}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <p className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BeautifulVsConversionReadyPageVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <ComparisonColumn title="Page nhìn đẹp" items={beautifulPage} />
        <ComparisonColumn title="Page sẵn sàng chuyển đổi" items={conversionReadyPage} featured />
      </div>
      <Caption>
        Một page có thể nhìn đẹp nhưng chưa sẵn sàng chuyển đổi nếu nó không nối được traffic, message, proof, form, tracking và sales.
      </Caption>
    </figure>
  );
}

const fiveQuestions: Array<{
  question: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { question: 'Đúng nơi?', subtitle: 'Hero khớp lời hứa', icon: LayoutTemplate },
  { question: 'Đúng vấn đề?', subtitle: 'Pain / context rõ', icon: MessageSquareText },
  { question: 'Đủ tin?', subtitle: 'Proof / case / process', icon: ShieldCheck },
  { question: 'Biết làm gì tiếp?', subtitle: 'CTA đúng stage', icon: MousePointerClick, action: true },
  { question: 'Biết chuyện gì sau đó?', subtitle: 'Form, thank-you, sales follow-up', icon: FileCheck2, action: true },
];

export function LandingPageFiveQuestionCheckVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <CircleHelp className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Five-question check</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold leading-[1.35] text-brand-primary">
              Trước khi hỏi page đẹp chưa, hãy hỏi page trả lời được gì
            </h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {fiveQuestions.map(({ question, subtitle, icon: Icon, action }, index) => (
            <section
              key={question}
              className={`flex min-w-0 items-start gap-3 rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              } ${index === fiveQuestions.length - 1 ? 'sm:col-span-2' : ''}`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  action ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading text-[14px] font-extrabold text-brand-primary">{question}</h4>
                <p className="mt-1 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
              </div>
              <Check className="ml-auto mt-1 h-4 w-4 shrink-0 text-brand-soft-text" aria-hidden="true" />
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Landing page tốt giúp người dùng tự trả lời: tôi đang ở đúng nơi, vấn đề được hiểu, đủ tin, biết làm gì tiếp và biết chuyện gì xảy ra sau đó.
      </Caption>
    </figure>
  );
}

const afterClickFlow: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Traffic Source', subtitle: 'Ads, search, social, email, referral', icon: Route },
  { title: 'User Expectation', subtitle: 'Người dùng click vì kỳ vọng nào?', icon: MessageSquareText },
  { title: 'Hero Message', subtitle: 'Hero xác nhận đúng context', icon: LayoutTemplate, action: true },
  { title: 'Reason to Continue', subtitle: 'Người dùng thấy đáng đọc tiếp', icon: SearchCheck, action: true },
  { title: 'Next Section', subtitle: 'Proof, offer, process hoặc CTA', icon: FileCheck2 },
];

export function AfterClickExpectationMatchVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">After-click match</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold leading-[1.35] text-brand-primary">
          Hero nối kỳ vọng trước click với lý do đọc tiếp sau click
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {afterClickFlow.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="relative min-w-0">
              <section
                className={`h-full rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < afterClickFlow.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Hero là điểm nối giữa kỳ vọng trước click và lý do để người dùng tiếp tục đọc sau click.</Caption>
    </figure>
  );
}

const heroQuestions: Array<{
  question: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { question: 'Đúng vấn đề?', subtitle: 'Pain, use case hoặc tình huống rõ', icon: MessageSquareText },
  { question: 'Đúng context?', subtitle: 'Hiểu trạng thái hiện tại của khách', icon: ShieldCheck },
  { question: 'Đúng bước tiếp?', subtitle: 'CTA hoặc next step hợp stage', icon: MousePointerClick, action: true },
];

export function HeroThreeQuestionCheckVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <CircleHelp className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Hero check</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold leading-[1.35] text-brand-primary">
              Hero tốt phải trả lời nhanh 3 câu
            </h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {heroQuestions.map(({ question, subtitle, icon: Icon, action }, index) => (
            <section
              key={question}
              className={`min-w-0 rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  action ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="mt-4 text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</p>
              <h4 className="mt-1 font-heading text-[15px] font-extrabold text-brand-primary">{question}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Hero không cần nói hết mọi thứ. Nó chỉ cần giúp người dùng thấy đúng vấn đề, đúng context và biết bước tiếp theo.</Caption>
    </figure>
  );
}

const heroTrafficTemperature = [
  {
    title: 'Cold Traffic',
    subtitle: 'Mới biết / chưa tin',
    needs: ['Pain rõ', 'Context rõ', 'CTA mềm'],
    variant: 'neutral',
  },
  {
    title: 'Search / Intent',
    subtitle: 'Đang tìm giải pháp cụ thể',
    needs: ['Match nhu cầu', 'Phạm vi rõ', 'CTA trực tiếp'],
    variant: 'blue',
  },
  {
    title: 'Warm / Remarketing',
    subtitle: 'Đã biết một phần',
    needs: ['Proof mạnh hơn', 'Offer rõ hơn', 'CTA cụ thể'],
    variant: 'orange',
  },
] as const;

export function HeroByTrafficTemperatureVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-3 md:p-8">
        {heroTrafficTemperature.map((item) => (
          <section
            key={item.title}
            className={`rounded-2xl border p-5 ${
              item.variant === 'orange'
                ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                : item.variant === 'blue'
                  ? 'border-brand-accent/25 bg-brand-accent-soft'
                  : 'border-brand-border bg-brand-bg'
            }`}
          >
            <p
              className={`text-[10px] font-black uppercase tracking-[0.16em] ${
                item.variant === 'orange' ? 'text-brand-highlight' : 'text-brand-accent'
              }`}
            >
              {item.title}
            </p>
            <h3 className="mt-2 font-heading text-[17px] font-extrabold leading-[1.35] text-brand-primary">{item.subtitle}</h3>
            <ul className="mt-5 space-y-3">
              {item.needs.map((need) => (
                <li key={need} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${item.variant === 'orange' ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Caption>Hero tốt phải khớp nhiệt độ và ý định của traffic, không nên dùng một câu mở đầu cho mọi nguồn.</Caption>
    </figure>
  );
}

const heroAnatomy = [
  { title: 'Context label', subtitle: 'Ai / vấn đề nào / nguồn traffic nào', icon: BadgeCheck },
  { title: 'Headline', subtitle: 'Lời hứa chính hoặc pain chính', icon: MessageSquareText },
  { title: 'Subheadline', subtitle: 'Làm rõ cách tiếp cận và phạm vi', icon: FileCheck2 },
  { title: 'CTA / next step', subtitle: 'Bước tiếp theo hợp stage', icon: MousePointerClick, action: true },
  { title: 'Micro-proof', subtitle: 'Case, logo, số liệu, ảnh thật, testimonial ngắn', icon: ShieldCheck },
];

export function HeroAnatomyConversionContextVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Hero anatomy</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold leading-[1.35] text-brand-primary">
          Hero không chỉ có headline
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {heroAnatomy.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`flex min-w-0 items-start gap-3 rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              } ${index === heroAnatomy.length - 1 ? 'sm:col-span-2' : ''}`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  action ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
                <p className="mt-1 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Caption>Hero không chỉ là một câu headline. Nó là cụm xác nhận context, lời hứa, niềm tin ban đầu và bước tiếp theo.</Caption>
    </figure>
  );
}
