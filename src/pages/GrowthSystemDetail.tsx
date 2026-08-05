import { useEffect, type ReactNode } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Layers3,
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { trackAnalyticsEvent } from '../lib/analytics/track';
import { ANALYTICS_EVENT_VERSION } from '../lib/analytics/types';

type SectionIntroProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
};

type SystemFootprint = {
  number: string;
  name: string;
  context: string;
  flow: string[];
  principle: string;
};

type FieldCase = {
  name: string;
  game: string;
  bottleneck: string;
  layers: string[];
  outcome: string;
  context?: string;
  insight?: string;
  href: string;
};

const primaryLinkClass =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4';

const secondaryLinkClass =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button border border-brand-border bg-white px-6 py-3.5 text-[15px] font-bold text-brand-primary transition-colors hover:border-blue-300 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4';

const revenueGaps = [
  {
    number: '01',
    title: 'Demand không đi tiếp thành Conversion',
    body:
      'Nội dung và quảng cáo tạo được sự chú ý, nhưng offer, website hoặc hành trình hành động chưa đủ rõ để biến nhu cầu thành bước tiếp theo.',
  },
  {
    number: '02',
    title: 'Conversion không tạo ra Signal đáng tin',
    body:
      'Hotline, Zalo, Messenger và Lead Form vẫn phát sinh, nhưng dữ liệu không phản ánh đúng chất lượng hoặc không quay lại nền tảng và đội ngũ để cải thiện quyết định.',
  },
  {
    number: '03',
    title: 'Lead không khép được về Revenue',
    body:
      'Marketing nhìn thấy lead. Sales nhìn thấy cuộc gọi và báo giá. Founder nhìn thấy doanh thu. Nhưng ba lớp này chưa cùng nhìn vào một dòng dữ liệu.',
  },
];

const corePrinciples = [
  {
    number: '01',
    label: 'DIAGNOSE',
    title: 'Tìm đúng điểm nghẽn trước khi thêm giải pháp.',
    body:
      'Không bắt đầu bằng việc chạy thêm Ads, làm thêm Content, tuyển thêm người hoặc đổi Agency.',
    question: 'Dòng chảy từ thị trường đến doanh thu đang đứt ở đâu?',
    support:
      'Sửa đúng điểm nghẽn quan trọng hơn tối ưu mạnh một lớp đang không phải vấn đề chính.',
  },
  {
    number: '02',
    label: 'CONNECT',
    title: 'Nối các lớp đang vận hành rời rạc về cùng một mục tiêu.',
    body:
      'Không tối ưu Media, Website, Tracking hoặc Sales như bốn bài toán riêng.',
    points: [
      'Nó nhận tín hiệu gì từ lớp trước.',
      'Nó tạo ra đầu ra gì cho lớp sau.',
      'Nó đóng góp như thế nào vào conversion và revenue.',
    ],
    support:
      'Một hệ thống không mạnh vì từng phần đều phức tạp. Nó mạnh vì các phần hiểu và phản hồi được lẫn nhau.',
  },
  {
    number: '03',
    label: 'COMPOUND',
    title: 'Chỉ scale thứ đã tạo ra tín hiệu đúng và có thể lặp lại.',
    body:
      'Khi đã biết thông điệp nào tạo nhu cầu, kênh nào đưa đúng khách vào, hành trình nào tạo hành động và quy trình nào khép được về doanh thu, hệ thống mới sẵn sàng tăng đầu vào.',
    support:
      'Scale không phải làm nhiều hơn. Scale là tăng tốc một cấu trúc đã chứng minh được cách nó học.',
  },
];

const systemLayers = [
  {
    number: '01',
    title: 'MARKET & OFFER',
    shortLabel: 'Who · Problem · Positioning · Promise',
    body:
      'Xác định đúng thị trường, nhu cầu, vấn đề, định vị và lời hứa trước khi tăng tốc phân phối.',
    questions: [
      'Đang bán cho ai?',
      'Vấn đề nào đủ quan trọng để khách hành động?',
      'Offer có rõ và đáng tin không?',
      'Thông điệp có phản ánh đúng lý do khách chọn không?',
    ],
  },
  {
    number: '02',
    title: 'DEMAND',
    shortLabel: 'Content · Search · Social · Paid · KOL · Community',
    body:
      'Tạo và phân phối nhu cầu qua những kênh phù hợp với game đang chơi, thay vì mặc định phải xuất hiện ở mọi nơi.',
    questions: [
      'Nhu cầu đang được tạo hay chỉ đang mua traffic?',
      'Kênh nào giúp khách khám phá?',
      'Kênh nào bắt nhu cầu đã tồn tại?',
      'Paid đang khuếch đại thứ gì?',
    ],
  },
  {
    number: '03',
    title: 'CONVERSION',
    shortLabel: 'Website · Landing · CTA · Hotline · Zalo · Lead Form',
    body:
      'Biến sự chú ý và nhu cầu thành hành động kinh doanh có thể tiếp nhận, đo lường và xử lý.',
    questions: [
      'Khách có hiểu bước tiếp theo không?',
      'Website có làm rõ quyết định hay tạo thêm ma sát?',
      'CTA có đúng với mức độ sẵn sàng của khách?',
      'Conversion có được ghi nhận đúng không?',
    ],
  },
  {
    number: '04',
    title: 'REVENUE',
    shortLabel: 'CRM · Qualification · Sales Handoff · Follow-up · Pipeline',
    body:
      'Đưa lead vào một quy trình có ownership, tốc độ xử lý, phân loại, follow-up và phản hồi kết quả rõ ràng.',
    questions: [
      'Ai chịu trách nhiệm sau khi lead vào?',
      'Lead được gọi và follow-up nhanh đến đâu?',
      'Marketing và Sales có cùng định nghĩa lead tốt không?',
      'Nguồn nào tạo doanh thu thật?',
    ],
  },
  {
    number: '05',
    title: 'COMPOUNDING',
    shortLabel: 'Insight · Feedback Loop · SOP · Automation · Team Rhythm · Scale',
    body:
      'Đưa dữ liệu và phản hồi quay lại hệ thống để cải thiện message, media, conversion, sales và cách phân bổ nguồn lực.',
    questions: [
      'Hệ thống đã học được gì sau mỗi vòng?',
      'Insight có thay đổi hành động hay chỉ nằm trong báo cáo?',
      'Quy trình nào có thể chuẩn hóa?',
      'Điều gì đủ ổn định để scale?',
    ],
  },
];

const systemFootprints: SystemFootprint[] = [
  {
    number: '01',
    name: 'LEAN SALES SYSTEM',
    context: 'F&B quy mô nhỏ, nguồn lực và biên lợi nhuận giới hạn.',
    flow: ['TikTok Content', 'Organic Testing', 'Content-to-Order', 'Paid Amplification'],
    principle:
      'Không cần KOL, PR, event hoặc một hạ tầng phức tạp nếu một kênh và một hành trình đặt hàng đã đủ để kiểm chứng nhu cầu.',
  },
  {
    number: '02',
    name: 'LAUNCH SYSTEM',
    context:
      'Sản phẩm mới cần được thị trường biết đến, tin tưởng và có thể tìm lại sau thời điểm ra mắt.',
    flow: ['Positioning', 'Review/KOL/KOC', 'PR & Event', 'Search', 'Paid & Remarketing'],
    principle:
      'Một product launch tốt không kết thúc khi event kết thúc. Tài sản và tín hiệu phải tiếp tục tồn tại để Search và Remarketing tái sử dụng.',
  },
  {
    number: '03',
    name: 'PREMIUM DEMAND SYSTEM',
    context: 'Sản phẩm giá cao cần xây đúng nhận thức trước khi đẩy mạnh chuyển đổi.',
    flow: [
      'Premium Positioning',
      'Authority/KOL',
      'Community',
      'YouTube',
      'Paid Media',
      'Retail & Dealer Demand',
    ],
    principle:
      'Với sản phẩm premium, độ tin cậy và ngữ cảnh sử dụng có thể quan trọng hơn việc tăng volume lead thật nhanh.',
  },
  {
    number: '04',
    name: 'RETAIL GROWTH SYSTEM',
    context:
      'Doanh nghiệp có nền tảng B2B muốn mở thêm demand engine bán lẻ đa kênh.',
    flow: ['Website', 'Content', 'Paid Media', 'Landing', 'Tracking', 'Sales Alignment'],
    principle:
      'Mở B2C không chỉ là chạy Ads. Doanh nghiệp cần thêm trải nghiệm, conversion path, measurement và cách tiếp nhận nhu cầu bán lẻ.',
  },
];

const maturityLevels = [
  {
    level: 'LEVEL 1',
    state: 'INVISIBLE',
    title: 'Chưa nhìn thấy điểm thất thoát.',
    body:
      'Các kênh vẫn chạy nhưng doanh nghiệp không biết chuyển đổi rơi ở đâu, dữ liệu nào đáng tin hoặc vấn đề nằm ở Media, Offer, Website hay Sales.',
  },
  {
    level: 'LEVEL 2',
    state: 'VISIBLE',
    title: 'Đã thấy dữ liệu, nhưng dữ liệu còn rời rạc.',
    body:
      'Doanh nghiệp có Ads report, Analytics, file lead và báo cáo Sales, nhưng chưa thể ghép chúng thành một dòng chảy thống nhất.',
  },
  {
    level: 'LEVEL 3',
    state: 'CONNECTED',
    title: 'Các lớp bắt đầu nối được với nhau.',
    body:
      'Marketing, Conversion, Tracking và Sales có cùng định nghĩa, cùng signal và cùng nhìn được hành trình của lead.',
  },
  {
    level: 'LEVEL 4',
    state: 'REPEATABLE',
    title: 'Hệ thống có thể vận hành lặp lại.',
    body:
      'Ownership, nhịp review, follow-up, feedback và các quyết định tối ưu không còn phụ thuộc hoàn toàn vào một cá nhân.',
  },
  {
    level: 'LEVEL 5',
    state: 'SCALABLE',
    title: 'Có thể tăng đầu vào mà không phóng đại điểm gãy.',
    body:
      'Doanh nghiệp biết lớp nào đang hoạt động, tín hiệu nào đáng tin và điều gì cần được giữ ổn định khi tăng ngân sách, kênh hoặc nhân sự.',
  },
];

const operatingProcess = [
  {
    number: '01',
    name: 'AUDIT',
    body:
      'Audit để nhìn thấy toàn bộ hệ thống, không chỉ một tài khoản quảng cáo hoặc một báo cáo riêng lẻ.',
  },
  {
    number: '02',
    name: 'DIAGNOSE',
    body:
      'Diagnose để xác định điểm nghẽn nào đang giới hạn kết quả và phân biệt nguyên nhân với triệu chứng.',
  },
  {
    number: '03',
    name: 'ARCHITECT',
    body:
      'Architect để xác định cấu trúc vừa đủ cần xây, thứ tự ưu tiên và mối liên kết giữa các lớp.',
  },
  {
    number: '04',
    name: 'BUILD',
    body:
      'Build để biến quyết định thành website, tracking, campaign structure, sales handoff hoặc quy trình có thể sử dụng.',
  },
  {
    number: '05',
    name: 'OPERATE',
    body:
      'Operate để kiểm chứng framework trong dữ liệu, công cụ, hành vi khách hàng và cách đội ngũ đang vận hành thật.',
  },
  {
    number: '06',
    name: 'LEARN',
    body:
      'Learn để phản hồi từ thị trường, conversion và sales quay lại cải thiện vòng tiếp theo.',
  },
];

const fieldCases: FieldCase[] = [
  {
    name: 'PAINT & MORE / ONECOAT',
    game: 'Từ nền tảng B2B sang xây thêm demand engine bán lẻ đa kênh.',
    bottleneck:
      'Doanh nghiệp có năng lực sản phẩm và vận hành, nhưng cần thêm trải nghiệm digital, demand generation, conversion path, tracking và sales alignment cho thị trường bán lẻ.',
    layers: [
      'Website',
      'Content',
      'Paid Media',
      'Landing Page',
      'Tracking',
      'Sales Alignment',
    ],
    outcome:
      'Mở thêm demand engine bán lẻ; doanh thu bán lẻ tích lũy đạt quy mô trên 1 tỷ đồng.',
    context: 'Kết quả đến từ toàn hệ thống, không quy riêng cho Ads.',
    href: '/case-study/paint-and-more-growth-system',
  },
  {
    name: 'BLACKVUE DR750 LTE',
    game: 'Premium positioning cho camera hành trình giá cao.',
    bottleneck:
      'Sản phẩm cần được đặt đúng trong bối cảnh xe sang, độ tin cậy và trải nghiệm cao cấp thay vì cạnh tranh như một thiết bị phổ thông.',
    layers: [
      'Positioning',
      'KOL Hùng Lâm/Xe Hay',
      'Community xe sang',
      'YouTube',
      'Paid Media',
      'Retail Demand',
      'Dealer Support',
    ],
    outcome:
      'Retail có giai đoạn ở quy mô hàng trăm triệu đồng mỗi tháng, đồng thời tạo nhu cầu và cơ hội cho đại lý.',
    href: '/case-study/blackvue-dr750-lte-growth-system',
  },
  {
    name: 'GNET G-ON X × MSPORT',
    game: 'Product launch cho một sản phẩm mới.',
    bottleneck:
      'Launch không chỉ cần reach trong thời điểm diễn ra mà còn phải tạo tài sản có thể tìm lại và tiếp tục tái sử dụng.',
    layers: [
      'Review/KOL/KOC',
      'PR',
      'Search',
      'Community',
      'Event SECC',
      'Paid Ads',
      'Remarketing',
    ],
    outcome:
      'Xây launch system có thể được tìm lại trên Search và tiếp tục tái sử dụng sau event.',
    href: '/case-study/gnet-g-on-x-growth-system',
  },
  {
    name: 'F&B TIKTOK SALES SYSTEM',
    game: 'Business gia đình nhỏ với nguồn lực và lợi nhuận giới hạn.',
    bottleneck:
      'Không phù hợp với một hệ thống lớn, nhiều kênh và chi phí vận hành cao.',
    layers: ['TikTok', 'Organic Testing', 'Content-to-Order', 'Paid Amplification'],
    outcome: 'Có giai đoạn khoảng 75 triệu đồng doanh thu mỗi tháng.',
    context: 'Doanh thu không phải lợi nhuận.',
    insight: 'Không phải game nào cũng cần KOL, PR, event hoặc hệ thống lớn.',
    href: '/case-study/fnb-tiktok-sales-system',
  },
];

const fitChecks = [
  'Ads ngày càng đắt nhưng không biết vấn đề nằm ở Media, Offer hay Sales.',
  'Lead vào nhiều nhưng báo giá xong khách im lặng.',
  'Marketing nói lead tốt, Sales nói lead không chất lượng.',
  'Có nhiều kênh và báo cáo nhưng không biết nguồn nào tạo doanh thu thật.',
  'Founder vẫn phải tự ghép dữ liệu từ nhiều người để ra quyết định.',
  'Muốn scale nhưng sợ tăng ngân sách chỉ làm thất thoát nhanh hơn.',
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-highlight">
      {children}
    </p>
  );
}

function SectionIntro({ label, title, description }: SectionIntroProps) {
  return (
    <header className="max-w-3xl">
      <Eyebrow>{label}</Eyebrow>
      <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[40px] lg:text-[48px]">
        {title}
      </h2>
      {description && (
        <div className="mt-5 text-[16px] leading-[1.75] text-brand-secondary sm:text-[17px]">
          {description}
        </div>
      )}
    </header>
  );
}

export default function GrowthSystemDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = metaDescription?.getAttribute('content') ?? null;

    document.title = 'TP Growth Revenue System | Framework từ Demand đến Revenue';
    metaDescription?.setAttribute(
      'content',
      'Framework chẩn đoán và kết nối Market, Demand, Conversion, Tracking, Sales và Revenue cho SME trước khi tăng ngân sách hoặc scale.',
    );

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== null) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-brand-primary">
      <Header />

      <main>
        {/* 1. Hero */}
        <section className="border-b border-brand-border bg-brand-section py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto grid items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-16 lg:px-8">
            <div className="max-w-3xl">
              <Eyebrow>TP GROWTH REVENUE SYSTEM™</Eyebrow>
              <h1 className="font-heading text-[40px] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-primary sm:text-[48px] lg:text-[58px]">
                Tăng trưởng không thường gãy ở một kênh.
                <span className="mt-2 block text-brand-accent">
                  Nó gãy ở khoảng trống giữa các lớp của hệ thống.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-brand-secondary sm:text-[18px]">
                Đây là framework tôi dùng để đọc dòng chảy từ market và demand đến
                conversion, sales và revenue — rồi xác định điểm nào cần sửa trước khi
                doanh nghiệp tiếp tục tăng ngân sách hoặc mở thêm kênh.
              </p>
              <p className="mt-5 max-w-2xl border-l-2 border-brand-accent pl-5 text-[15px] font-semibold leading-[1.7] text-brand-primary">
                Không phải một playbook áp cho mọi business. Cùng một logic chẩn đoán,
                nhưng cấu trúc triển khai phải vừa với game đang chơi.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#system-map" className={primaryLinkClass}>
                  Xem bản đồ hệ thống
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#framework-in-the-field" className={secondaryLinkClass}>
                  Xem framework trong thực tế
                </a>
              </div>
              <a
                href="/"
                className="mt-5 inline-flex min-h-11 items-center text-[14px] font-bold text-brand-accent underline decoration-blue-200 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
              >
                Về TP Growth
              </a>
            </div>

            <div className="rounded-[24px] border border-brand-border bg-white p-5 shadow-brand-soft sm:p-7">
              <div className="flex items-center justify-between border-b border-brand-border pb-5">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-accent">
                    Revenue flow
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-brand-soft-text">
                    Một dòng chảy · Năm lớp
                  </p>
                </div>
                <Layers3 className="h-6 w-6 text-brand-accent" aria-hidden="true" />
              </div>
              <ol className="mt-5 space-y-3">
                {systemLayers.map((layer, index) => (
                  <li key={layer.title} className="relative">
                    <div className="grid grid-cols-[38px_minmax(0,1fr)] items-start gap-3 rounded-[16px] border border-brand-border bg-brand-section px-4 py-3.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent-soft text-[11px] font-extrabold text-brand-accent">
                        {layer.number}
                      </span>
                      <div>
                        <p className="font-heading text-[15px] font-extrabold tracking-[-0.02em] text-brand-primary">
                          {layer.title}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold leading-[1.45] text-brand-soft-text">
                          {layer.shortLabel}
                        </p>
                      </div>
                    </div>
                    {index < systemLayers.length - 1 && (
                      <span
                        className="mx-auto block h-3 w-px bg-brand-accent/30"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-brand-border pt-5 text-[11px] font-bold text-brand-accent">
                <CircleDot className="h-4 w-4" aria-hidden="true" />
                <span>Signal spine:</span>
                <span className="text-brand-secondary">
                  Tracking · CRM · Sales Feedback · Revenue Data
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Revenue Gap */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="THE REVENUE GAP"
              title={
                <>
                  Lead có thể vào đều.
                  <br />
                  Doanh thu vẫn có thể đứng yên.
                </>
              }
              description="Khi Marketing, Website, Tracking, CRM và Sales vận hành như những phần riêng biệt, từng đội có thể đều bận và từng chỉ số có thể đều đẹp — nhưng chuyển đổi vẫn rơi trong khoảng giao nhau."
            />

            <ol className="mt-12 border-y border-brand-border">
              {revenueGaps.map((gap, index) => (
                <li
                  key={gap.number}
                  className="relative grid gap-4 border-b border-brand-border py-8 last:border-b-0 md:grid-cols-[80px_minmax(220px,0.7fr)_minmax(0,1fr)] md:gap-8 md:py-10"
                >
                  <span className="font-heading text-[30px] font-extrabold tracking-[-0.04em] text-brand-accent">
                    {gap.number}
                  </span>
                  <h3 className="font-heading text-[22px] font-extrabold leading-[1.3] tracking-[-0.025em]">
                    {gap.title}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-brand-secondary">
                    {gap.body}
                  </p>
                  {index < revenueGaps.length - 1 && (
                    <span
                      className="absolute -bottom-2 left-[34px] hidden h-4 w-px bg-white outline outline-4 outline-white md:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-10 max-w-4xl border-l-2 border-brand-highlight pl-5 font-heading text-[20px] font-extrabold leading-[1.55] tracking-[-0.02em] text-brand-primary sm:text-[23px]">
              Điểm nghẽn thường không nằm hoàn toàn trong một bộ phận.
              <span className="block text-brand-highlight">
                Nó nằm ở khoảng trống giữa hai lớp đang không nối được với nhau.
              </span>
            </p>
          </div>
        </section>

        {/* 3. Core Logic */}
        <section className="border-y border-brand-border bg-brand-section py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="THE CORE LOGIC"
              title={
                <>
                  Diagnose.
                  <br />
                  Connect.
                  <br />
                  Compound.
                </>
              }
              description="Ba nguyên tắc này là xương sống của TP Growth Revenue System."
            />

            <div className="mt-12 border-y border-brand-border bg-white">
              {corePrinciples.map((principle) => (
                <article
                  key={principle.label}
                  className="grid gap-6 border-b border-brand-border px-1 py-9 last:border-b-0 md:grid-cols-[150px_minmax(0,1fr)] md:gap-10 md:px-6 md:py-11"
                >
                  <div>
                    <p className="font-heading text-[34px] font-extrabold tracking-[-0.05em] text-brand-accent">
                      {principle.number}
                    </p>
                    <p className="mt-2 text-[11px] font-extrabold tracking-[0.18em] text-brand-highlight">
                      {principle.label}
                    </p>
                  </div>
                  <div className="max-w-4xl">
                    <h3 className="font-heading text-[25px] font-extrabold leading-[1.25] tracking-[-0.03em] sm:text-[29px]">
                      {principle.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.75] text-brand-secondary">
                      {principle.body}
                    </p>
                    {principle.question && (
                      <div className="mt-5 border-l-2 border-brand-accent pl-5">
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.15em] text-brand-accent">
                          Bắt đầu bằng câu hỏi
                        </p>
                        <p className="mt-2 font-heading text-[19px] font-extrabold leading-[1.5]">
                          {principle.question}
                        </p>
                      </div>
                    )}
                    {principle.points && (
                      <div className="mt-5">
                        <p className="text-[14px] font-bold text-brand-primary">
                          Mỗi lớp phải biết:
                        </p>
                        <ul className="mt-3 space-y-2">
                          {principle.points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 text-[15px] leading-[1.65] text-brand-secondary"
                            >
                              <CheckCircle2
                                className="mt-1 h-4 w-4 shrink-0 text-brand-accent"
                                aria-hidden="true"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="mt-6 font-heading text-[17px] font-extrabold leading-[1.55] text-brand-accent">
                      {principle.support}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-[16px] font-semibold leading-[1.75] text-brand-primary">
              Đọc bài toán bằng tư duy chẩn đoán. Thiết kế cấu trúc cần thiết. Đi đủ sâu
              vào triển khai để kiểm chứng trong thực tế.
            </p>
          </div>
        </section>

        {/* 4. Revenue System Map */}
        <section
          id="system-map"
          className="scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="THE SYSTEM MAP"
              title={
                <>
                  Một dòng chảy.
                  <br />
                  Năm lớp.
                  <br />
                  Một xương sống tín hiệu.
                </>
              }
              description="Framework không xem Growth là một collection các kênh. Nó xem Growth là dòng chảy liên tục từ market đến revenue, nơi mỗi lớp phải tạo ra đầu vào có ích cho lớp tiếp theo."
            />

            <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {systemLayers.map((layer, index) => (
                <li
                  key={layer.title}
                  className="relative flex min-w-0 flex-col rounded-[20px] border border-brand-border border-t-4 border-t-brand-accent bg-white p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[28px] font-extrabold tracking-[-0.05em] text-brand-accent">
                      {layer.number}
                    </span>
                    {index < systemLayers.length - 1 && (
                      <ChevronRight
                        className="hidden h-5 w-5 text-brand-accent/50 xl:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 font-heading text-[18px] font-extrabold tracking-[-0.025em]">
                    {layer.title}
                  </h3>
                  <p className="mt-2 min-h-[48px] text-[11px] font-bold leading-[1.5] text-brand-highlight">
                    {layer.shortLabel}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.65] text-brand-secondary">
                    {layer.body}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-brand-border pt-4">
                    {layer.questions.map((question) => (
                      <li
                        key={question}
                        className="flex gap-2 text-[13px] leading-[1.55] text-brand-secondary"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                          aria-hidden="true"
                        />
                        {question}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <aside
              aria-label="Signal Spine"
              className="mt-6 border-y border-brand-accent/20 bg-brand-accent-soft px-5 py-8 sm:px-8 lg:px-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                <div>
                  <div className="flex items-center gap-3">
                    <CircleDot className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                    <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.025em] text-brand-accent">
                      SIGNAL SPINE
                    </h3>
                  </div>
                  <p className="mt-3 text-[13px] font-extrabold leading-[1.6] text-brand-primary">
                    Tracking · Attribution · CRM · Sales Feedback · Revenue Data
                  </p>
                  <p className="mt-5 text-[15px] font-semibold leading-[1.7] text-brand-primary">
                    Tracking và data không phải một chiếc card đứng riêng bên cạnh
                    Marketing.
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.7] text-brand-secondary">
                    Nó là xương sống giúp doanh nghiệp biết:
                  </p>
                </div>
                <div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      'Tiền đang tạo ra hành động nào.',
                      'Tín hiệu nào đáng tin.',
                      'Lead nào đi tiếp.',
                      'Nguồn nào tạo doanh thu.',
                      'Hệ thống cần học lại điều gì.',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[14px] font-semibold leading-[1.6] text-brand-secondary"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 font-heading text-[20px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-highlight">
                    Gửi sai tín hiệu, thuật toán vẫn học rất nhanh —
                    <span className="block">nhưng học sai thứ.</span>
                  </p>
                  <p className="mt-5 text-[13px] leading-[1.65] text-brand-secondary">
                    Data không tự tạo ra doanh thu. Nó giúp đội ngũ nhìn đúng điểm thất
                    thoát và đưa phản hồi trở lại nơi có thể thay đổi kết quả.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* 5. Right-Sized Growth */}
        <section className="border-y border-brand-border bg-brand-section py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="RIGHT-SIZED GROWTH"
              title={
                <>
                  Cùng một logic hệ thống.
                  <br />
                  Mỗi business cần một cấu trúc khác nhau.
                </>
              }
              description={
                <>
                  <p>
                    Hệ thống tốt không phải hệ thống có nhiều kênh, nhiều công cụ hoặc
                    nhiều automation nhất.
                  </p>
                  <p className="mt-3">
                    Hệ thống tốt là hệ thống vừa đủ để thắng game đang chơi — và đủ rõ để
                    biết khi nào cần xây thêm lớp tiếp theo.
                  </p>
                </>
              }
            />

            <div className="mt-12 border-y border-brand-border">
              {systemFootprints.map((footprint) => (
                <article
                  key={footprint.name}
                  className="grid gap-7 border-b border-brand-border py-9 last:border-b-0 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 lg:py-11"
                >
                  <div>
                    <p className="text-[11px] font-extrabold tracking-[0.18em] text-brand-highlight">
                      {footprint.number}
                    </p>
                    <h3 className="mt-3 font-heading text-[23px] font-extrabold tracking-[-0.03em]">
                      {footprint.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-brand-secondary">
                      {footprint.context}
                    </p>
                  </div>
                  <div>
                    <ol
                      aria-label={`${footprint.name} priority flow`}
                      className="flex flex-wrap items-center gap-2"
                    >
                      {footprint.flow.map((step, index) => (
                        <li key={step} className="flex items-center gap-2">
                          <span className="rounded-full border border-brand-accent/20 bg-white px-3 py-2 text-[12px] font-bold text-brand-accent">
                            {step}
                          </span>
                          {index < footprint.flow.length - 1 && (
                            <ArrowRight
                              className="h-3.5 w-3.5 text-brand-soft-text"
                              aria-hidden="true"
                            />
                          )}
                        </li>
                      ))}
                    </ol>
                    <p className="mt-6 border-l-2 border-brand-accent pl-5 text-[14px] font-semibold leading-[1.7] text-brand-primary">
                      {footprint.principle}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 font-heading text-[24px] font-extrabold leading-[1.45] tracking-[-0.03em] text-brand-accent">
              Cùng một logic.
              <span className="block text-brand-primary">Khác cấu trúc triển khai.</span>
            </p>
          </div>
        </section>

        {/* 6. System Maturity */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="SYSTEM MATURITY"
              title="Doanh nghiệp không cần nhảy thẳng tới Scale."
              description="Trước khi tăng ngân sách, thêm kênh hoặc automation, hệ thống cần đi qua các mức trưởng thành rõ ràng."
            />

            <ol className="mt-14 border-l border-brand-border pl-7 xl:grid xl:grid-cols-5 xl:border-l-0 xl:border-t xl:pl-0">
              {maturityLevels.map((item, index) => (
                <li
                  key={item.state}
                  className="relative pb-10 last:pb-0 xl:border-r xl:border-brand-border xl:px-5 xl:pb-0 xl:pt-9 xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0"
                >
                  <span
                    className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-brand-accent bg-white xl:-top-[7px] xl:left-5 xl:h-3.5 xl:w-3.5 xl:first:left-0"
                    aria-hidden="true"
                  />
                  <p className="text-[10px] font-extrabold tracking-[0.16em] text-brand-highlight">
                    {item.level}
                  </p>
                  <h3 className="mt-2 font-heading text-[18px] font-extrabold tracking-[-0.02em] text-brand-accent">
                    {item.state}
                  </h3>
                  <p className="mt-4 text-[15px] font-bold leading-[1.55] text-brand-primary">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[13px] leading-[1.65] text-brand-secondary">
                    {item.body}
                  </p>
                  {index < maturityLevels.length - 1 && (
                    <span className="sr-only">Tiếp theo:</span>
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-12 max-w-4xl border-t border-brand-border pt-8 font-heading text-[20px] font-extrabold leading-[1.55] tracking-[-0.02em] text-brand-primary">
              Scale là kết quả của sự rõ ràng và khả năng lặp lại.
              <span className="block text-brand-accent">
                Không phải một bước có thể bỏ qua các tầng phía trước.
              </span>
            </p>
          </div>
        </section>

        {/* 7. How the Framework Works */}
        <section className="border-y border-brand-border bg-brand-section py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="HOW THE FRAMEWORK WORKS"
              title="Framework chỉ có giá trị khi đi vào một vòng vận hành thật."
            />

            <ol className="mt-12 grid overflow-hidden rounded-[24px] border border-brand-border bg-brand-border md:grid-cols-2 xl:grid-cols-6">
              {operatingProcess.map((step, index) => (
                <li key={step.name} className="relative bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[26px] font-extrabold tracking-[-0.05em] text-brand-accent">
                      {step.number}
                    </span>
                    {index < operatingProcess.length - 1 && (
                      <ChevronRight
                        className="hidden h-4 w-4 text-brand-accent/50 xl:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="mt-5 text-[11px] font-extrabold tracking-[0.16em] text-brand-highlight">
                    {step.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-brand-secondary">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <p className="font-heading text-[24px] font-extrabold leading-[1.45] tracking-[-0.03em] text-brand-primary">
                Không đứng ngoài đưa một bản kế hoạch rồi kết thúc.
              </p>
              <div>
                <p className="text-[15px] font-bold text-brand-primary">
                  Framework phải đi đủ sâu để biết:
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    'Giả thuyết có đúng không.',
                    'Đội ngũ có vận hành được không.',
                    'Signal có đáng tin không.',
                    'Điều gì nên giữ, bỏ hoặc xây tiếp.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] leading-[1.65] text-brand-secondary"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Framework in the Field */}
        <section
          id="framework-in-the-field"
          className="scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="FRAMEWORK IN THE FIELD"
              title={
                <>
                  Bốn game khác nhau.
                  <br />
                  Một logic chẩn đoán.
                </>
              }
              description="Framework này không được viết ra để lấp đầy một trang web. Nó được rút ngược từ những hệ thống đã thực sự triển khai trong các bối cảnh khác nhau."
            />

            <div className="mt-12 border-y border-brand-border">
              {fieldCases.map((caseItem, index) => (
                <article
                  key={caseItem.name}
                  className="grid gap-8 border-b border-brand-border py-10 last:border-b-0 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14"
                >
                  <div>
                    <p className="text-[11px] font-extrabold tracking-[0.16em] text-brand-highlight">
                      CASE {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-heading text-[24px] font-extrabold tracking-[-0.03em]">
                      {caseItem.name}
                    </h3>
                    <p className="mt-4 text-[14px] font-bold leading-[1.65] text-brand-accent">
                      {caseItem.game}
                    </p>
                    <a
                      href={caseItem.href}
                      onClick={() => trackAnalyticsEvent({
                        event: 'content_click',
                        event_version: ANALYTICS_EVENT_VERSION,
                        content_type: 'case_study',
                        content_id: caseItem.href.split('/').pop() ?? caseItem.href,
                        content_title: caseItem.name,
                        placement: 'card',
                        component_name: 'growth_system_case_study',
                      })}
                      aria-label={`Xem Case Study ${caseItem.name}`}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 text-[14px] font-bold text-brand-highlight underline decoration-orange-200 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
                    >
                      Xem Case Study
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-soft-text">
                        Bottleneck
                      </p>
                      <p className="mt-3 text-[14px] leading-[1.7] text-brand-secondary">
                        {caseItem.bottleneck}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-soft-text">
                        Layers connected
                      </p>
                      <p className="mt-3 text-[13px] font-bold leading-[1.75] text-brand-accent">
                        {caseItem.layers.join(' · ')}
                      </p>
                    </div>
                    <div className="border-l-2 border-brand-accent pl-5 md:col-span-2">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-soft-text">
                        Outcome
                      </p>
                      <p className="mt-2 font-heading text-[18px] font-extrabold leading-[1.55] text-brand-primary">
                        {caseItem.outcome}
                      </p>
                      {caseItem.context && (
                        <p className="mt-3 text-[12px] font-semibold leading-[1.6] text-brand-secondary">
                          {caseItem.context}
                        </p>
                      )}
                      {caseItem.insight && (
                        <p className="mt-3 text-[12px] font-bold leading-[1.6] text-brand-highlight">
                          {caseItem.insight}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Diagnostic Fit Check */}
        <section className="border-y border-brand-border bg-brand-section py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionIntro
              label="DIAGNOSTIC FIT CHECK"
              title="Framework hữu ích khi vấn đề không còn nằm riêng ở một chiến dịch."
            />

            <ol className="mt-12 grid gap-x-10 border-y border-brand-border md:grid-cols-2">
              {fitChecks.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[40px_minmax(0,1fr)] gap-4 border-b border-brand-border py-6 last:border-b-0"
                >
                  <span className="font-heading text-[18px] font-extrabold text-brand-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] font-semibold leading-[1.65] text-brand-secondary">
                    {item}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-10 max-w-4xl font-heading text-[20px] font-extrabold leading-[1.55] tracking-[-0.02em] text-brand-primary">
              Nếu doanh nghiệp xuất hiện trong nhiều hơn một tình huống, vấn đề có thể
              không nằm ở một campaign riêng lẻ.
              <span className="mt-2 block text-brand-accent">
                Nó có thể nằm ở cách các lớp của hệ thống đang kết nối.
              </span>
            </p>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="contact" className="scroll-mt-24 bg-brand-primary py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Eyebrow>BEFORE YOU SCALE</Eyebrow>
              <h2 className="font-heading text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-[44px] lg:text-[54px]">
                Trước khi thêm traffic,
                <span className="block text-blue-300">
                  hãy nhìn lại dòng chảy từ demand đến revenue.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-slate-300">
                Nếu một lớp chưa nối được với lớp tiếp theo, tăng đầu vào có thể chỉ làm
                điểm thất thoát lớn nhanh hơn.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/lam-viec-voi-phu"
                  className={primaryLinkClass}
                  onClick={() => trackAnalyticsEvent({
                    event: 'primary_cta_click',
                    event_version: ANALYTICS_EVENT_VERSION,
                    cta_name: 'work_with_phu',
                    placement: 'cta_section',
                    component_name: 'growth_system_final_cta',
                    destination_path: '/lam-viec-voi-phu',
                    destination_type: 'internal_route',
                  })}
                >
                  Trao đổi về điểm nghẽn
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="/case-study"
                  className="inline-flex min-h-12 items-center justify-center rounded-brand-button border border-white/25 px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-primary"
                >
                  Xem các Case Study
                </a>
              </div>
              <p className="mt-7 text-[13px] font-semibold leading-[1.65] text-slate-300">
                Không cần mặc định xây lại toàn bộ hệ thống.
                <span className="block">Bắt đầu từ nơi đang giới hạn kết quả.</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
