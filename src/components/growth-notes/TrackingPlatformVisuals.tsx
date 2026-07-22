import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Database,
  GitBranch,
  Megaphone,
  MousePointerClick,
  Send,
  Tag,
} from 'lucide-react';

const actions = ['PageView', 'Form submit', 'Hotline / Zalo click', 'Purchase'];
const destinations = ['GA4', 'Meta Pixel', 'TikTok Pixel', 'Google Ads Tag'];

export function TrackingDestinationsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_0.85fr_auto_1fr]">
          <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
            <div className="flex items-center gap-2.5">
              <MousePointerClick className="h-5 w-5 text-brand-accent" aria-hidden="true" />
              <h3 className="font-heading text-[16px] font-extrabold text-brand-primary">Website Action</h3>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
              {actions.map((action) => (
                <li key={action} className="rounded-xl border border-brand-border bg-brand-surface px-3 py-2.5 text-[12px] font-semibold text-brand-secondary">
                  {action}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex items-center justify-center text-brand-accent">
            <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
            <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
          </div>

          <section className="flex flex-col items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-accent-soft p-5 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface text-brand-accent shadow-brand-soft">
              <GitBranch className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-[18px] font-extrabold text-brand-primary">GTM</h3>
            <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">
              Quản lý và điều phối tag
            </p>
          </section>

          <div className="flex items-center justify-center text-brand-accent">
            <ArrowDown className="h-4 w-4 md:hidden" aria-hidden="true" />
            <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
          </div>

          <section className="rounded-2xl border border-brand-border bg-brand-bg p-5">
            <div className="flex items-center gap-2.5">
              <Send className="h-5 w-5 text-brand-accent" aria-hidden="true" />
              <h3 className="font-heading text-[16px] font-extrabold text-brand-primary">Destinations</h3>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
              {destinations.map((destination) => (
                <li key={destination} className="rounded-xl border border-brand-border bg-brand-surface px-3 py-2.5 text-[12px] font-semibold text-brand-secondary">
                  {destination}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="mt-5 rounded-2xl border border-brand-highlight/25 bg-brand-highlight-soft px-4 py-3 text-center text-[12px] font-bold leading-[1.5] text-brand-secondary">
          Một action có thể gửi đến nhiều nền tảng nếu có lý do rõ.
        </p>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Cùng một hành động trên website có thể được gửi về nhiều nền tảng. Mỗi nơi nhận tín hiệu để phục vụ một mục
        đích khác nhau.
      </figcaption>
    </figure>
  );
}

const platformRows = [
  {
    name: 'GA4',
    role: 'Phân tích hành vi tổng thể',
    question: 'Người dùng làm gì trên website?',
    icon: BarChart3,
  },
  {
    name: 'Meta Pixel',
    role: 'Gửi tín hiệu cho Meta Ads',
    question: 'Meta Ads tạo event gì?',
    icon: Megaphone,
  },
  {
    name: 'TikTok Pixel',
    role: 'Gửi tín hiệu cho TikTok Ads',
    question: 'TikTok Ads tạo event gì?',
    icon: Megaphone,
  },
  {
    name: 'Google Ads Tag',
    role: 'Ghi nhận conversion cho Google Ads',
    question: 'Google campaign nào tạo conversion?',
    icon: Tag,
    action: true,
  },
  {
    name: 'GTM',
    role: 'Quản lý và điều phối tag',
    question: 'Event nào sẽ bắn, khi nào, gửi đi đâu?',
    icon: GitBranch,
  },
];

export function TrackingPlatformComparisonVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-7">
        <div className="hidden grid-cols-[0.8fr_1.1fr_1.4fr] gap-3 border-b border-brand-border px-4 pb-3 text-[10px] font-black uppercase tracking-[0.15em] text-brand-soft-text md:grid">
          <span>Công cụ</span>
          <span>Vai trò</span>
          <span>Câu hỏi giúp trả lời</span>
        </div>
        <div className="mt-3 space-y-3">
          {platformRows.map(({ name, role, question, icon: Icon, action }) => (
            <section
              key={name}
              className={`grid gap-4 rounded-2xl border p-4 md:grid-cols-[0.8fr_1.1fr_1.4fr] md:items-center ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : name === 'GTM'
                    ? 'border-brand-accent/25 bg-brand-accent-soft'
                    : 'border-brand-border bg-brand-bg'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-surface text-brand-accent">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-[14px] font-extrabold text-brand-primary">{name}</h3>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.13em] text-brand-soft-text md:hidden">Vai trò</p>
                <p className="mt-1 text-[13px] font-semibold leading-[1.5] text-brand-secondary md:mt-0">{role}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.13em] text-brand-soft-text md:hidden">Giúp trả lời</p>
                <p className="mt-1 text-[13px] font-medium leading-[1.5] text-brand-secondary md:mt-0">{question}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Khác biệt lớn nhất không nằm ở tên công cụ, mà nằm ở câu hỏi mỗi công cụ giúp team trả lời.
      </figcaption>
    </figure>
  );
}

const eventDestinations = [
  { title: 'GA4', text: 'Phân tích funnel', icon: BarChart3 },
  { title: 'Meta Pixel', text: 'Tối ưu Meta Ads', icon: Megaphone },
  { title: 'TikTok Pixel', text: 'Tối ưu TikTok Ads', icon: Megaphone },
  { title: 'Google Ads Tag', text: 'Ghi nhận Google conversion', icon: Tag },
  { title: 'Dashboard / CRM', text: 'Đối chiếu lead thật', icon: Database },
];

export function SameEventDifferentPlatformsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mx-auto max-w-sm rounded-2xl border border-brand-accent/30 bg-brand-accent-soft p-5 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface text-brand-accent shadow-brand-soft">
            <Send className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.15em] text-brand-accent">Event thành công</p>
          <h3 className="mt-2 font-heading text-[18px] font-extrabold text-brand-primary">Form Submit Success</h3>
        </div>
        <div className="flex h-10 items-center justify-center text-brand-accent">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {eventDestinations.map(({ title, text, icon: Icon }) => (
            <section key={title} className="min-w-0 rounded-2xl border border-brand-border bg-brand-bg p-4">
              <Icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[13px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{text}</p>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một lead thật có thể cần được gửi về nhiều hệ thống. Nhưng mỗi nơi nhận tín hiệu vì một mục đích khác nhau.
      </figcaption>
    </figure>
  );
}

const stackItems = [
  'GA4 để đọc hành vi tổng thể',
  'GTM để quản lý tag và event',
  'Pixel hoặc tag theo kênh ads đang chạy',
  'Event map: PageView, Contact, Lead, Purchase',
  'Preview và Debug trước khi publish',
  'Dashboard hoặc CRM để đối chiếu lead, order thật',
];

export function TrackingStackChecklist() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary">
            Tracking stack tối thiểu cho website marketing
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {stackItems.map((item, index) => {
            const isAction = index === 3 || index === 4;
            return (
              <section
                key={item}
                className={`rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`h-5 w-5 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`}
                    aria-hidden="true"
                  />
                  <p className="font-heading text-[14px] font-extrabold leading-[1.45] text-brand-primary">{item}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Một tracking stack tốt không cần phức tạp ngay từ đầu. Nhưng nó cần rõ: đo gì, gửi về đâu, test thế nào và
        đối chiếu với nguồn thật ra sao.
      </figcaption>
    </figure>
  );
}
