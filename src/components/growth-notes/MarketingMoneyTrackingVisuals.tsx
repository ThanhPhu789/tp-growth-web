import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Contact,
  Gauge,
  HandCoins,
  Megaphone,
  MousePointerClick,
  PhoneCall,
  Search,
  Target,
  UserCheck,
} from 'lucide-react';

const decorativeTracking = [
  'Nhiều tag nhưng không rõ mục đích',
  'Dashboard nhiều chart nhưng ít insight',
  'Chỉ biết tổng lead / conversion',
  'Không nối sales / revenue',
  'Cuối buổi họp vẫn không biết sửa gì',
];

const decisionTracking = [
  'Mỗi event trả lời một câu hỏi',
  'Dashboard đọc được dòng tiền marketing',
  'Biết lead / contact đến từ đâu',
  'Nối được với sales status / outcome',
  'Chốt được 1–3 việc cần sửa tuần sau',
];

export function TrackingPurposeComparisonVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <PurposeCard title="Tracking để làm màu" items={decorativeTracking} />
        <PurposeCard title="Tracking để ra quyết định" items={decisionTracking} decision />
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Tracking tốt không phải là tracking có nhiều số hơn. Tracking tốt là tracking giúp team biết nên quyết định gì tiếp theo.
      </figcaption>
    </figure>
  );
}

function PurposeCard({ title, items, decision = false }: { title: string; items: string[]; decision?: boolean }) {
  return (
    <section
      className={`rounded-2xl border p-5 md:p-6 ${
        decision ? 'border-brand-accent/25 bg-brand-accent-soft' : 'border-brand-border bg-brand-bg'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface ${
            decision ? 'text-brand-highlight' : 'text-brand-soft-text'
          }`}
        >
          {decision ? <Target className="h-5 w-5" aria-hidden="true" /> : <BarChart3 className="h-5 w-5" aria-hidden="true" />}
        </div>
        <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">{title}</h3>
      </div>
      <ol className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                decision ? 'bg-brand-accent-soft text-brand-accent' : 'bg-brand-section text-brand-soft-text'
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

const moneyFlowSteps = [
  { title: 'Budget', subtitle: 'Tiền marketing được phân bổ', icon: CircleDollarSign, highlight: true },
  { title: 'Traffic', subtitle: 'Khách vào website / kênh bán', icon: Megaphone },
  { title: 'CTA / Contact', subtitle: 'Khách bắt đầu tương tác', icon: MousePointerClick },
  { title: 'Lead', subtitle: 'Có tín hiệu xử lý bán hàng', icon: Contact },
  { title: 'Sales Follow-up', subtitle: 'Gọi, tư vấn, báo giá', icon: PhoneCall },
  { title: 'Outcome', subtitle: 'Cơ hội, đơn hàng, doanh thu', icon: HandCoins, highlight: true },
];

export function MarketingMoneyFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-0 lg:grid-cols-6">
          {moneyFlowSteps.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <div key={title} className="relative flex flex-col">
              <section
                className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                  highlight
                    ? 'border-brand-highlight/30 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                    highlight ? 'text-brand-highlight' : 'text-brand-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">
                  Bước {index + 1}
                </p>
                <h3 className="mt-1.5 font-heading text-[14px] font-extrabold leading-tight text-brand-primary">{title}</h3>
                <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < moneyFlowSteps.length - 1 && (
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
        Tracking tốt giúp team nhìn được tiền marketing đi qua từng đoạn: từ ngân sách đến traffic, lead, sales và outcome thật.
      </figcaption>
    </figure>
  );
}

const leakPoints = [
  { title: 'Wrong Traffic', subtitle: 'Khách vào không đúng tệp', icon: Megaphone },
  { title: 'Weak Landing', subtitle: 'Trang không tiếp nối thông điệp', icon: Gauge },
  { title: 'Unclear CTA', subtitle: 'Khách không biết làm gì tiếp', icon: MousePointerClick },
  { title: 'Form / Contact Friction', subtitle: 'Form lỗi, nút liên hệ khó dùng', icon: Contact },
  { title: 'Low Lead Quality', subtitle: 'Lead nhiều nhưng không phù hợp', icon: UserCheck },
  { title: 'Slow Follow-up', subtitle: 'Sales xử lý chậm hoặc thiếu ghi chú', icon: PhoneCall },
  { title: 'No Revenue Link', subtitle: 'Không nối được với outcome', icon: CircleDollarSign },
];

export function BudgetLeakMapVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <Search className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary md:text-[22px]">
            Bản đồ điểm rò ngân sách
          </h3>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {leakPoints.map(({ title, subtitle, icon: Icon }, index) => (
            <section key={title} className="relative rounded-2xl border border-brand-border bg-brand-bg p-4">
              <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-brand-highlight" aria-hidden="true" />
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">
                Điểm {index + 1}
              </p>
              <h4 className="mt-1.5 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Ngân sách marketing không chỉ thất thoát ở ads. Nó có thể rò ở landing page, CTA, form, chất lượng lead, sales follow-up hoặc đoạn nối revenue.
      </figcaption>
    </figure>
  );
}

const decisionLoop = [
  { title: 'Spend', question: 'Tiền đi vào kênh nào?', icon: CircleDollarSign },
  { title: 'Signal', question: 'Kênh tạo tín hiệu gì?', icon: Megaphone },
  { title: 'Quality', question: 'Tín hiệu có đúng không?', icon: UserCheck },
  { title: 'Action', question: 'Sales / team đã xử lý chưa?', icon: PhoneCall, action: true },
  { title: 'Outcome', question: 'Có cơ hội / doanh thu thật không?', icon: HandCoins, action: true },
];

export function SpendToDecisionLoopVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 md:grid-cols-5">
          {decisionLoop.map(({ title, question, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`relative rounded-2xl border p-4 ${
                action ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface ${
                  action ? 'text-brand-highlight' : 'text-brand-accent'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">0{index + 1}</p>
              <h3 className="mt-1 font-heading text-[14px] font-extrabold text-brand-primary">{title}</h3>
              <p className="mt-2 text-[12px] font-semibold leading-[1.5] text-brand-secondary">{question}</p>
            </section>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft px-4 py-3 text-center text-[12px] font-bold text-brand-secondary">
          <ArrowRight className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          Outcome quay lại thành dữ liệu cho quyết định ngân sách tiếp theo.
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Tracking tốt giúp team đi từ câu hỏi “đã tiêu bao nhiêu?” đến câu hỏi quan trọng hơn: “tiền đó tạo ra điều gì và nên sửa gì tiếp?”
      </figcaption>
    </figure>
  );
}

const spendChecklist = [
  'UTM / source / medium / campaign rõ?',
  'Biết landing page đầu vào?',
  'Đo main CTA click?',
  'Đo hotline / Zalo / Messenger click?',
  'Form submit success đo đúng?',
  'Lead có source / form / page?',
  'Có lead_id / event_id nếu cần đối chiếu?',
  'Sales có cập nhật status?',
  'Có outcome như quoted / won / revenue?',
  'Dashboard / Sheet có review hằng tuần?',
];

export function MarketingSpendChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary md:text-[22px]">
            Checklist tracking để biết tiền marketing đi đâu
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {spendChecklist.map((item, index) => {
            const isOutcome = index >= 8;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isOutcome ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    isOutcome ? 'bg-brand-surface text-brand-highlight' : 'bg-brand-accent-soft text-brand-accent'
                  }`}
                >
                  {isOutcome ? <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> : <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                </span>
                <span className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
        Không cần tracking mọi thứ. Nhưng nếu muốn biết tiền marketing đi đâu, team phải nối được từ nguồn traffic đến lead, sales status và outcome.
      </figcaption>
    </figure>
  );
}
