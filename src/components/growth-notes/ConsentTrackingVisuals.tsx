import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Cookie,
  Database,
  GitBranch,
  Megaphone,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Tags,
  UserRoundCheck,
  X,
} from 'lucide-react';

const cookieGroups = [
  {
    title: 'Essential',
    subtitle: 'Cần cho website hoạt động cơ bản',
    examples: 'Phiên đăng nhập, bảo mật, form / session nếu cần',
    icon: ShieldCheck,
  },
  {
    title: 'Preference',
    subtitle: 'Ghi nhớ lựa chọn trải nghiệm',
    examples: 'Ngôn ngữ, giao diện, tuỳ chọn hiển thị',
    icon: SlidersHorizontal,
  },
  {
    title: 'Analytics',
    subtitle: 'Hiểu hành vi tổng thể',
    examples: 'GA4, page và event measurement',
    icon: BarChart3,
  },
  {
    title: 'Ads / Conversion',
    subtitle: 'Gửi tín hiệu cho nền tảng quảng cáo',
    examples: 'Pixel và ads conversion tag',
    icon: Megaphone,
    action: true,
  },
];

export function CookieTypesForMarketerVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary md:text-[22px]">
            Các nhóm cookie / tag marketer nên hiểu
          </h3>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cookieGroups.map(({ title, subtitle, examples, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                action ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[15px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              <p className="mt-4 border-t border-brand-border pt-4 text-[11px] font-medium leading-[1.55] text-brand-soft-text">
                {examples}
              </p>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Không phải mọi cookie/tag đều giống nhau. Marketer nên hiểu mục đích từng nhóm để brief tracking và consent rõ hơn.
      </figcaption>
    </figure>
  );
}

const consentSteps = [
  { title: 'User sees banner', subtitle: 'Người dùng nhận thông báo', icon: Cookie },
  { title: 'User choice', subtitle: 'Đồng ý, từ chối hoặc tuỳ chỉnh', icon: UserRoundCheck, action: true },
  { title: 'Consent state', subtitle: 'Lưu trạng thái lựa chọn', icon: Database },
  { title: 'GTM / Tag logic', subtitle: 'Đọc trạng thái trước khi chạy tag', icon: GitBranch },
  { title: 'Analytics / Ads tags', subtitle: 'Chạy hoặc không chạy theo điều kiện', icon: Tags, decision: true },
];

export function ConsentTrackingFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-0 lg:grid-cols-5">
          {consentSteps.map(({ title, subtitle, icon: Icon, action, decision }, index) => (
            <div key={title} className="relative flex flex-col">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                    action ? 'text-brand-highlight' : 'text-brand-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">
                  Bước {index + 1}
                </p>
                <h3 className="mt-1.5 font-heading text-[14px] font-extrabold leading-tight text-brand-primary">{title}</h3>
                <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
                {decision && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-brand-surface px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-brand-accent">
                      Allowed
                    </span>
                    <span className="rounded-full border border-brand-border bg-brand-section px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-brand-soft-text">
                      Blocked
                    </span>
                  </div>
                )}
              </section>
              {index < consentSteps.length - 1 && (
                <div className="flex h-8 items-center justify-center text-brand-accent lg:absolute lg:-right-3 lg:top-1/2 lg:z-10 lg:h-6 lg:w-6 lg:-translate-y-1/2 lg:rounded-full lg:border lg:border-brand-border lg:bg-brand-surface">
                  <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3.5 w-3.5 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Consent banner chỉ là phần người dùng nhìn thấy. Phía sau nó cần có logic để tag chạy đúng theo lựa chọn đã ghi nhận.
      </figcaption>
    </figure>
  );
}

const consentDonts = [
  'Text dài, khó hiểu',
  'Nút từ chối bị giấu',
  'Tag chạy hết dù user chưa chọn',
  'Không lưu hoặc không đọc consent state',
  'Không test accept / decline',
];

const consentDos = [
  'Nội dung ngắn, rõ mục đích',
  'Lựa chọn dễ nhìn',
  'Tag chạy theo điều kiện rõ',
  'Lưu và đọc được consent state',
  'Test từng lựa chọn trước khi publish',
];

export function ConsentBannerDoDontVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <ConsentPracticeCard title="Không nên" items={consentDonts} />
        <ConsentPracticeCard title="Nên" items={consentDos} recommended />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Consent banner tốt không chỉ là câu chữ. Nó cần cả trải nghiệm rõ ràng và logic tracking phía sau chạy đúng.
      </figcaption>
    </figure>
  );
}

function ConsentPracticeCard({
  title,
  items,
  recommended = false,
}: {
  title: string;
  items: string[];
  recommended?: boolean;
}) {
  return (
    <section
      className={`rounded-2xl border p-5 md:p-6 ${
        recommended ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
            recommended ? 'text-brand-accent' : 'text-brand-soft-text'
          }`}
        >
          {recommended ? <Check className="h-4 w-4" aria-hidden="true" /> : <X className="h-4 w-4" aria-hidden="true" />}
        </div>
        <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">{title}</h3>
      </div>
      <ol className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                recommended ? 'bg-brand-accent-soft text-brand-accent' : 'bg-brand-section text-brand-soft-text'
              }`}
            >
              {index + 1}
            </span>
            <span className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

const consentChecklist = [
  'Website đang có những tag nào?',
  'Mỗi tag thuộc nhóm mục đích nào?',
  'Tag nào chạy trước / sau lựa chọn consent?',
  'GTM có đọc được consent state không?',
  'Accept / decline / customize đã test chưa?',
  'Form / lead tracking có logic rõ không?',
  'Chính sách liên quan có link dễ thấy không?',
  'Có người chịu trách nhiệm kiểm tra khi đổi tag không?',
  'Dashboard có ghi chú khi tracking thay đổi không?',
];

export function ConsentTrackingChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Settings2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary md:text-[22px]">
            Checklist consent + tracking cho marketer
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {consentChecklist.map((item, index) => {
            const requiresReview = index === 4 || index === 8;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  requiresReview
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    requiresReview
                      ? 'bg-brand-surface text-brand-highlight'
                      : 'bg-brand-accent-soft text-brand-accent'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Marketer không cần tự xử lý hết phần consent, nhưng nên có checklist để không triển khai tracking trong trạng thái mù.
      </figcaption>
    </figure>
  );
}
