import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  ExternalLink,
  Layers3,
  MessageCircle,
  SearchCheck,
  MonitorCheck,
  Play,
  Quote,
} from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import Header from '../Header';
import TPLogo from '../TPLogo';
import paintMoreImage from '../../assets/case-studies/paint-and-more/paintandmore-website-new-onecoat.png';
import blackVueImage from '../../assets/case-studies/blackvue/blackvue-hung-lam-facebook-review.jpg';
import gnetPaidImage from '../../assets/case-studies/gnet-gonx/gonx-paid-content-wall-01.jpg';
import gnetPrVisibilityImage from '../../assets/images/Gnet G-ON X PR Campaign → Search Visibility.jpg';
import measurementImage from '../../assets/case-studies/paint-and-more/paintandmore-server-gtm-tags.jpg';
import fnbImage from '../../assets/images/Case FnB Build kênh Tiktok 3 ảnh chính.jpg';
import phuPortrait from '../../assets/images/tp-growth-phu-profile-standing-blue-shirt.jpg';
import phuFactory from '../../assets/images/warehouse-operation-field-visit-factory.jpg';
import phuInteractiveScreen from '../../assets/images/interactive-screen-business-presentation.jpg';
import shortCover01 from '../../assets/homepage-v2/phu-marketing-short-01.jpg';
import shortCover02 from '../../assets/homepage-v2/phu-marketing-short-02.jpg';
import shortCover03 from '../../assets/homepage-v2/phu-marketing-short-03.jpg';
import shortCover04 from '../../assets/homepage-v2/phu-marketing-short-04.jpg';
import metaAdsEvidence from '../../assets/images/meta-ads-multi-campaign-performance-management.jpg';
import googleAdsEvidence from '../../assets/images/Google Ads Search & Youtube Ads.jpg';
import tikTokAdsEvidence from '../../assets/images/TikTok-Ads-multi-campaign-conversion-management.jpg';
import { trackAnalyticsEvent } from '../../lib/analytics/track';
import {
  ANALYTICS_EVENT_VERSION,
  type AnalyticsEventInput,
  type AnalyticsPlacement,
} from '../../lib/analytics/types';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

const cases = [
  {
    index: '01',
    name: 'Paint & More / OneCoat',
    context: 'Từ nền tảng B2B đến hệ thống bán lẻ đa kênh.',
    system:
      'Website, content, paid media, landing page, tracking và sales cùng bám một campaign backbone.',
    outcome:
      'Mở thêm demand engine bán lẻ cho doanh nghiệp vốn mạnh B2B; doanh thu bán lẻ tích lũy đạt quy mô trên 1 tỷ đồng.',
    disclaimer:
      'Kết quả đến từ toàn hệ thống, không quy cho riêng một kênh quảng cáo.',
    href: '/case-study/paint-and-more-growth-system',
    image: paintMoreImage,
    imageClass: 'object-contain object-top',
    frameClass: 'aspect-[16/10]',
    featured: true,
    alt: 'Website OneCoat trong hệ thống tăng trưởng Paint & More',
  },
  {
    index: '02',
    name: 'BlackVue DR750 LTE',
    context: 'Premium positioning cho một sản phẩm camera hành trình giá cao.',
    system:
      'Positioning, KOL, community, YouTube, paid media và retail demand hỗ trợ cả khách trực tiếp lẫn mạng lưới đại lý.',
    outcome:
      'Retail có giai đoạn vận hành ở quy mô hàng trăm triệu đồng mỗi tháng, đồng thời liên tục tạo nhu cầu và cơ hội cho đại lý.',
    disclaimer: '',
    href: '/case-study/blackvue-dr750-lte-growth-system',
    image: blackVueImage,
    imageClass: 'object-contain object-center',
    frameClass: 'aspect-[1200/824]',
    featured: false,
    alt: 'Nội dung review BlackVue DR750 LTE trong case study',
  },
  {
    index: '03',
    name: 'GNET G-ON X × Msport',
    context:
      'Product launch cho một sản phẩm mới cần vượt qua ba rào cản: chưa biết, chưa hiểu, chưa tin.',
    system: 'Review, PR, Search, Community, Event SECC, Paid Ads và remarketing.',
    outcome:
      'Xây được một launch system có thể được tìm lại trên Search và tiếp tục tái sử dụng sau event.',
    disclaimer: '',
    href: '/case-study/gnet-g-on-x-growth-system',
    image: gnetPrVisibilityImage,
    imageClass: 'object-contain object-center',
    frameClass: 'aspect-[1199/1136]',
    featured: false,
    alt: 'Kết quả tìm kiếm Google từ hoạt động PR cho GNET G-ON X',
  },
  {
    index: '04',
    name: 'F&B TikTok Sales System',
    context: 'Một business gia đình có biên lợi nhuận và nguồn lực vận hành giới hạn.',
    system:
      'Một kênh TikTok, organic testing, content-to-order flow và paid amplification vừa đủ.',
    outcome: 'Có giai đoạn đạt khoảng 75 triệu đồng doanh thu mỗi tháng bằng một kênh chính.',
    disclaimer: 'Doanh thu không phải lợi nhuận. Biết dừng cũng là một quyết định Growth.',
    href: '/case-study/fnb-tiktok-sales-system',
    image: fnbImage,
    imageClass: 'object-contain object-top',
    frameClass: 'mx-auto aspect-[9/16] w-full max-w-[440px]',
    featured: false,
    alt: 'Toàn bộ profile và thư viện video của kênh TikTok F&B',
  },
];

const shorts = [
  {
    title: 'Marketing không chỉ là chạy quảng cáo',
    url: 'https://www.youtube.com/shorts/Vp9NvhvAMOg',
    cover: shortCover01,
    objectPosition: '50% 50%',
  },
  {
    title: 'Brand Audit: Định vị, brand voice và kênh đang dùng',
    url: 'https://www.youtube.com/shorts/XZA4UX9vU6I',
    cover: shortCover02,
    objectPosition: '50% 50%',
  },
  {
    title: 'Leader Marketing sống 5 cuộc đời',
    url: 'https://www.youtube.com/shorts/t7XE0Fdu7ic',
    cover: shortCover03,
    objectPosition: '50% 50%',
  },
  {
    title: 'Tracking phải dẫn đến quyết định',
    url: 'https://www.youtube.com/shorts/xEaBXrgAUWE',
    cover: shortCover04,
    objectPosition: '58% 50%',
  },
];

const paidMediaEvidence = [
  {
    title: 'Meta Ads',
    description:
      'Vận hành nhiều lớp chiến dịch từ chuyển đổi website, tương tác và tin nhắn đến remarketing.',
    image: metaAdsEvidence,
    alt: 'Giao diện quản lý nhiều chiến dịch Meta Ads',
  },
  {
    title: 'Google Ads',
    description:
      'Kết hợp Search để bắt nhu cầu chủ động và YouTube để mở rộng độ phủ thị trường.',
    image: googleAdsEvidence,
    alt: 'Giao diện vận hành Google Search Ads và YouTube Ads',
  },
  {
    title: 'TikTok Ads',
    description:
      'Vận hành nhiều chiến dịch phân phối và chuyển đổi trên cùng một hệ thống quảng cáo.',
    image: tikTokAdsEvidence,
    alt: 'Giao diện quản lý nhiều chiến dịch TikTok Ads',
  },
];

const architectureLayers = [
  {
    number: '01',
    title: 'Business model & unit economics',
    description: 'Hiểu doanh thu đến từ đâu, biên độ nào có thể chi và điều gì thực sự tạo giá trị.',
  },
  {
    number: '02',
    title: 'Positioning, market & offer',
    description: 'Làm rõ khách hàng ưu tiên, lý do tin và lời đề nghị đủ phù hợp để hành động.',
  },
  {
    number: '03',
    title: 'Content & demand creation',
    description: 'Biến năng lực thật, use case thật và bằng chứng thật thành nhu cầu có chủ đích.',
  },
  {
    number: '04',
    title: 'Distribution & paid media',
    description: 'Đưa đúng thông điệp đến đúng bối cảnh, rồi học từ phản hồi thay vì chỉ mua reach.',
  },
  {
    number: '05',
    title: 'Website, tracking & handoff',
    description: 'Giữ message match, ghi nhận tín hiệu và chuyển lead sang sales với đủ ngữ cảnh.',
  },
  {
    number: '06',
    title: 'Sales, revenue & learning loop',
    description: 'Đưa outcome quay lại marketing để hệ thống biết điều gì cần giữ, sửa hoặc dừng.',
  },
];

const aiGrowthSystems = [
  {
    number: '01',
    label: 'BUILD',
    title: 'Website + Nền tảng đo lường',
    description: 'Xây digital property và measurement foundation ngay từ đầu.',
    chips: ['Website', 'Design System', 'GA4 / GSC', 'GTM'],
    icon: Code2,
  },
  {
    number: '02',
    label: 'SCALE',
    title: 'pSEO + Technical SEO',
    description:
      'Dùng AI + structured data + automation để scale search/content có kiểm soát.',
    chips: ['pSEO Factory', 'Media Pipeline', 'Internal Linking', 'Technical SEO'],
    icon: SearchCheck,
  },
  {
    number: '03',
    label: 'OPERATE',
    title: 'Marketing Intelligence',
    description:
      'Thu thập → tổng hợp → quan sát → hỗ trợ người vận hành ra quyết định.',
    chips: ['Automated Reports', 'Google Ads Monitor', 'Telegram', 'Attribution'],
    icon: MonitorCheck,
  },
];

const trustSignals = [
  {
    title: '7 năm marketing thực chiến',
    description: 'Ads · Content · Website · Tracking · Team',
  },
  {
    title: 'B2B · Retail · Automotive · F&B',
    description: 'Nhiều business model, không dùng một playbook',
  },
  {
    title: 'Content × Ads × Tracking × Sales',
    description: 'Nối các điểm chạm về cùng một mục tiêu',
  },
  {
    title: '4 case study có thể kiểm chứng',
    description: 'Hình ảnh, video và tài sản public còn tồn tại',
  },
];

const operatingPrinciples = [
  {
    number: '01',
    label: 'Diagnose',
    title: 'Nhìn ra điểm nghẽn thật',
    description:
      'Không mặc định vấn đề nằm ở Ads. Điểm nghẽn có thể nằm ở định vị, offer, website, tracking, sales hoặc khả năng vận hành.',
  },
  {
    number: '02',
    label: 'Connect',
    title: 'Đưa các mắt xích về cùng một mục tiêu',
    description:
      'Content, Paid Media, Website, Tracking và Sales phải tiếp tục cùng một lời hứa và cùng phục vụ một kết quả kinh doanh.',
  },
  {
    number: '03',
    label: 'Compound',
    title: 'Để mỗi vòng tạo thêm tài sản',
    description:
      'Một campaign tốt phải để lại content, proof, data, search footprint và operating knowledge cho vòng tiếp theo.',
  },
];

const fitSignals = [
  'Ads ngày càng đắt nhưng không biết vấn đề nằm ở Media, Offer hay Sales.',
  'Lead vào nhiều nhưng báo giá xong khách im lặng.',
  'Marketing nói lead tốt, Sales nói lead không chất lượng.',
  'Có nhiều kênh và nhiều báo cáo nhưng không biết nguồn nào tạo doanh thu thật.',
  'Founder vẫn phải tự ghép dữ liệu từ nhiều người để đưa ra quyết định.',
  'Muốn scale nhưng sợ tăng ngân sách chỉ làm thất thoát nhanh hơn.',
];

const waysToWork = [
  {
    number: '01',
    title: 'Growth System Audit',
    audience:
      'SME đã chạy Marketing nhưng không biết điểm nghẽn nằm ở Ads, Offer, Website, Tracking hay Sales.',
    scope: 'Traffic → Content → Conversion → Tracking → Sales handoff.',
    result: 'Bản đồ điểm nghẽn và thứ tự ưu tiên cần xử lý.',
    cta: 'Trao đổi về Audit',
  },
  {
    number: '02',
    title: 'Architecture & Build',
    audience:
      'Doanh nghiệp đã nhìn thấy vấn đề nhưng thiếu người nối các lớp triển khai.',
    scope:
      'Thông điệp, website, tracking, campaign structure hoặc sales handoff tùy bài toán.',
    result:
      'Phạm vi triển khai được thiết kế theo đúng điểm nghẽn, không mặc định phải xây mọi thứ.',
    cta: 'Trao đổi về bài toán cần build',
  },
  {
    number: '03',
    title: 'Operator Partnership',
    audience:
      'Founder đã có team nhưng thiếu một người đứng giữa strategy, data và execution.',
    scope:
      'Đồng hành cùng Founder và đội ngũ để đọc dữ liệu, ưu tiên quyết định và cải thiện hệ thống theo phản hồi thực tế.',
    result: 'Một nhịp vận hành giúp strategy, data và execution cùng học từ thị trường.',
    cta: 'Trao đổi về đồng hành',
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-brand-accent">
        {eyebrow}
      </p>
      <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[42px] lg:text-[52px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[17px] leading-[1.75] text-brand-secondary sm:text-[18px]">
          {description}
        </p>
      )}
    </div>
  );
}

function ArrowLink({
  href,
  children,
  tone = 'blue',
  analyticsEvent,
}: {
  href: string;
  children: ReactNode;
  tone?: 'blue' | 'orange';
  analyticsEvent?: AnalyticsEventInput;
}) {
  return (
    <a
      href={href}
      onClick={analyticsEvent ? () => trackAnalyticsEvent(analyticsEvent) : undefined}
      className={`group inline-flex min-h-11 items-center gap-2 rounded-sm text-[14px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 ${
        tone === 'orange'
          ? 'text-brand-highlight hover:text-orange-700'
          : 'text-brand-accent hover:text-blue-700'
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function homepageContentEvent(
  contentType: 'growth_note' | 'case_study' | 'growth_system_framework' | 'content_hub',
  contentId: string,
  contentTitle: string,
  placement: AnalyticsPlacement,
  componentName: string,
): AnalyticsEventInput {
  return {
    event: 'content_click',
    event_version: ANALYTICS_EVENT_VERSION,
    content_type: contentType,
    content_id: contentId,
    content_title: contentTitle,
    placement,
    component_name: componentName,
  };
}

function homepageCtaEvent(
  ctaName: string,
  placement: AnalyticsPlacement,
  componentName: string,
): AnalyticsEventInput {
  return {
    event: 'primary_cta_click',
    event_version: ANALYTICS_EVENT_VERSION,
    cta_name: ctaName,
    placement,
    component_name: componentName,
    destination_path: '/lam-viec-voi-phu',
    destination_type: 'internal_route',
  };
}

export default function HomepageV2() {
  const [showMobileActions, setShowMobileActions] = useState(false);

  useEffect(() => {
    const updateMobileActions = () => {
      setShowMobileActions(window.scrollY > Math.max(560, window.innerHeight * 0.85));
    };

    updateMobileActions();
    window.addEventListener('scroll', updateMobileActions, { passive: true });
    window.addEventListener('resize', updateMobileActions);

    return () => {
      window.removeEventListener('scroll', updateMobileActions);
      window.removeEventListener('resize', updateMobileActions);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg pb-[calc(72px+env(safe-area-inset-bottom))] text-brand-primary md:pb-0">
      <Header variant="hero" />

      <main>
        {/* 1. Hero — The Revenue Gap */}
        <section
          id="hero"
          className="relative scroll-mt-24 overflow-hidden border-b border-brand-border bg-white"
        >
          <div className="container mx-auto grid min-h-[700px] items-center gap-12 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-7 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                <span className="h-2 w-2 rounded-full bg-brand-highlight" />
                Growth System Operator for SME
              </p>
              <h1 className="text-balance font-heading text-[42px] font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-primary sm:text-[54px] lg:text-[66px]">
                Traffic có thể tăng. Lead có thể nhiều.
                <span className="mt-2 block text-brand-accent">
                  Tăng trưởng vẫn đứng yên nếu cả hệ thống không cùng tạo ra chuyển đổi.
                </span>
              </h1>
              <div className="mt-9 border-l-4 border-brand-highlight pl-5 sm:pl-7">
                <p className="font-heading text-[21px] font-extrabold leading-[1.45] tracking-[-0.02em] text-brand-primary sm:text-[24px]">
                  Lead nhiều không chứng minh marketing đang tốt.
                  <span className="block text-brand-highlight">
                    Nó chỉ chứng minh đầu phễu đang hoạt động.
                  </span>
                </p>
              </div>
              <p className="mt-6 max-w-3xl text-[15px] leading-[1.75] text-brand-secondary sm:text-[16px]">
                Nếu Ads ngày càng đắt, lead vẫn vào nhưng báo giá xong khách im lặng,
                vấn đề thường không nằm riêng ở một kênh.
              </p>
              <p className="mt-5 max-w-3xl text-[17px] leading-[1.8] text-brand-secondary sm:text-[18px]">
                Tôi giúp SME tìm và gỡ các điểm đứt gãy từ market, content và paid
                media đến website, tracking và sales — trước khi tiếp tục tăng ngân
                sách hoặc scale.
              </p>

              <div className="mt-7 inline-flex max-w-full items-center gap-3 rounded-full border border-brand-border bg-brand-section py-2 pl-2 pr-4">
                <img
                  src={phuPortrait}
                  alt="Phan Thành Phú"
                  width="1707"
                  height="2560"
                  className="h-12 w-12 shrink-0 rounded-full object-cover object-[50%_18%]"
                  loading="eager"
                  decoding="async"
                />
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-bold text-brand-primary">
                    Phan Thành Phú
                  </p>
                  <p className="text-[12px] leading-[1.5] text-brand-soft-text">
                    Growth System Operator · 7 năm thực chiến
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  href="/case-study"
                  onClick={() => trackAnalyticsEvent(homepageContentEvent('content_hub', 'case-study', 'Case Study', 'hero', 'homepage_hero'))}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
                >
                  Xem các hệ thống tôi đã xây
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/lam-viec-voi-phu"
                  onClick={() => trackAnalyticsEvent(homepageCtaEvent('discuss_growth_bottleneck', 'hero', 'homepage_hero'))}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button border border-brand-border bg-white px-7 py-3.5 text-[15px] font-bold text-brand-primary transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
                >
                  Trao đổi về điểm nghẽn
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <a
                href="/Growth-System-Framework"
                onClick={() => trackAnalyticsEvent(homepageContentEvent('growth_system_framework', 'growth-system-framework', 'Growth System Framework', 'hero', 'homepage_hero'))}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm text-[14px] font-bold text-brand-accent underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
              >
                Khám phá Growth System
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <aside className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:justify-self-end">
              <div className="rounded-[20px] border border-brand-border bg-brand-section p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="flex items-center justify-between border-b border-brand-border pb-5">
                  <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-soft-text">
                    The revenue gap
                  </span>
                  <CircleDot className="h-5 w-5 text-brand-highlight" />
                </div>
                <div className="space-y-0 py-4">
                  {['Traffic', 'Lead', 'Sales conversation', 'Revenue'].map(
                    (stage, index) => (
                      <div key={stage} className="flex items-center gap-4">
                        <div className="flex w-8 flex-col items-center self-stretch">
                          <span
                            className={`mt-5 h-3 w-3 rounded-full border-2 ${
                              index === 2
                                ? 'border-brand-highlight bg-brand-highlight-soft'
                                : 'border-brand-accent bg-white'
                            }`}
                          />
                          {index < 3 && <span className="mt-1 w-px flex-1 bg-brand-border" />}
                        </div>
                        <div className="flex-1 border-b border-brand-border py-5 last:border-0">
                          <p className="font-heading text-[18px] font-extrabold text-brand-primary">
                            {stage}
                          </p>
                          {index === 2 && (
                            <p className="mt-1 text-[13px] font-semibold text-brand-highlight">
                              Điểm đứt gãy thường không nằm ở media
                            </p>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <p className="border-t border-brand-border pt-5 text-[15px] leading-[1.7] text-brand-secondary">
                  Tối ưu một mắt xích không thể bù cho một hệ thống đang truyền sai
                  tín hiệu.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="trust-signals"
          aria-label="Bằng chứng nền tảng"
          className="scroll-mt-24 border-b border-brand-border bg-brand-section"
        >
          <div className="container mx-auto grid px-5 py-8 sm:grid-cols-2 sm:px-6 md:py-10 lg:grid-cols-4 lg:px-8">
            {trustSignals.map((signal, index) => (
              <div
                key={signal.title}
                className={`py-5 sm:px-6 lg:py-2 ${
                  index % 2 === 0 ? 'sm:border-r sm:border-brand-border' : ''
                } ${index > 1 ? 'border-t border-brand-border lg:border-t-0' : ''} ${
                  index > 0 ? 'lg:border-l lg:border-brand-border' : ''
                } lg:border-r-0`}
              >
                <h2 className="font-heading text-[16px] font-extrabold leading-[1.35] tracking-[-0.02em] text-brand-primary">
                  {signal.title}
                </h2>
                <p className="mt-2 text-[14px] leading-[1.6] text-brand-soft-text">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Revenue Gap */}
        <section
          id="revenue-gap"
          className="scroll-mt-24 bg-brand-section py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="02 · The Revenue Gap"
              title="Đầu phễu có thể đang thắng. Nhưng điểm nghẽn thường nằm ở đoạn sau."
              description="Ads có thể hoạt động. Content có thể viral. Lead có thể nhiều. Nhưng cơ hội vẫn có thể dừng lại ở Offer, Price, Proof, Sales hoặc Delivery."
            />

            <div className="mt-12 rounded-[20px] border border-brand-border bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
                {[
                  'Traffic',
                  'Lead',
                  'Offer',
                  'Báo giá',
                  'Sales follow-up',
                  'Giao giá trị',
                  'Doanh thu',
                  'Khách quay lại',
                ].map((stage, index, stages) => (
                  <div key={stage} className="flex items-center gap-2">
                    <span
                      className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-[13px] font-bold ${
                        ['Offer', 'Báo giá', 'Sales follow-up'].includes(stage)
                          ? 'border-orange-200 bg-brand-highlight-soft text-brand-highlight'
                          : 'border-blue-200 bg-brand-accent-soft text-brand-accent'
                      }`}
                    >
                      {stage}
                    </span>
                    {index < stages.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-brand-soft-text" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-6 border-t border-brand-border pt-7 md:grid-cols-2 md:gap-10">
                <p className="text-[16px] leading-[1.75] text-brand-secondary">
                  Không mặc định một bộ phận đang làm sai. Mục tiêu là xác định mắt
                  xích nào đang giới hạn toàn bộ dòng chảy và phản hồi nào chưa quay
                  lại đúng nơi.
                </p>
                <blockquote className="border-l-4 border-brand-highlight pl-5 font-heading text-[20px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                  Marketing tạo cơ hội. Cả hệ thống quyết định cơ hội có biến thành
                  doanh thu hay không.
                </blockquote>
              </div>
            </div>

            <p className="mt-10 max-w-4xl font-heading text-[26px] font-extrabold leading-[1.35] tracking-[-0.03em] text-brand-primary sm:text-[32px]">
              Một mắt xích có thể thắng.{' '}
              <span className="text-brand-accent">
                Chỉ cả hệ thống mới tạo ra tăng trưởng.
              </span>
            </p>
          </div>
        </section>

        {/* 3. Four Games · Four Growth Systems */}
        <section
          id="case-studies"
          className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="03 · Four Games · Four Growth Systems"
                title="Bốn bài toán. Bốn cấu trúc tăng trưởng khác nhau."
                description="Không ép mọi doanh nghiệp vào một playbook. Mỗi hệ thống được thiết kế quanh market, offer, customer journey và năng lực vận hành thật."
              />
              <ArrowLink
                href="/case-study"
                analyticsEvent={homepageContentEvent('content_hub', 'case-study', 'Case Study', 'body', 'homepage_case_studies')}
              >
                Xem toàn bộ Case Study
              </ArrowLink>
            </div>

            <div className="mt-14 divide-y divide-brand-border border-y border-brand-border">
              {cases.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => trackAnalyticsEvent(homepageContentEvent('case_study', item.href.split('/').pop() ?? item.href, item.name, 'card', 'homepage_case_study_list'))}
                  className={`group grid gap-6 transition-colors hover:bg-brand-section sm:px-5 lg:items-center lg:gap-10 ${
                    item.featured
                      ? 'py-11 lg:grid-cols-[56px_minmax(0,1fr)_minmax(400px,480px)]'
                      : 'py-9 lg:grid-cols-[56px_minmax(0,1fr)_minmax(360px,420px)]'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent`}
                >
                  <span className="text-[12px] font-bold tracking-[0.18em] text-brand-accent">
                    {item.index}
                  </span>
                  <div className="max-w-3xl">
                    <h3 className="font-heading text-[26px] font-extrabold tracking-[-0.025em] text-brand-primary transition-colors group-hover:text-brand-accent sm:text-[32px]">
                      {item.name}
                    </h3>
                    <dl className="mt-5 space-y-4">
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-soft-text">
                          Context
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-[1.7] text-brand-secondary">
                          {item.context}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                          System
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-[1.7] text-brand-secondary">
                          {item.system}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-highlight">
                          Outcome
                        </dt>
                        <dd className="mt-1.5 font-heading text-[17px] font-extrabold leading-[1.55] tracking-[-0.015em] text-brand-primary">
                          {item.outcome}
                        </dd>
                      </div>
                    </dl>
                    {item.disclaimer && (
                      <p className="mt-4 text-[12px] leading-[1.65] text-brand-soft-text">
                        {item.disclaimer}
                      </p>
                    )}
                  </div>
                  <div
                    className={`relative overflow-hidden rounded-[20px] border border-brand-border bg-brand-section shadow-[0_12px_30px_rgba(15,23,42,0.06)] ${item.frameClass}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none ${item.imageClass}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-accent shadow-lg">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Right-Sized Growth */}
        <section
          id="right-sized-growth"
          className="scroll-mt-24 bg-brand-primary py-20 text-white sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-orange-300">
                04 · Right-Sized Growth
              </p>
              <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px] lg:text-[52px]">
                Không làm nhiều nhất.
                <span className="block text-blue-300">
                  Chỉ làm đúng thứ hệ thống đang cần.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid border-y border-slate-700 md:grid-cols-3">
              {operatingPrinciples.map((principle) => (
                <article
                  key={principle.number}
                  className="border-b border-slate-700 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-300">
                    {principle.number} · {principle.label}
                  </p>
                  <h3 className="mt-5 font-heading text-[22px] font-extrabold leading-[1.35] tracking-[-0.02em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.75] text-slate-300">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>

            <blockquote className="mt-12 max-w-5xl border-l-4 border-brand-highlight pl-6 font-heading text-[26px] font-extrabold leading-[1.4] tracking-[-0.03em] text-white sm:text-[34px]">
              Hệ thống tốt không phải hệ thống lớn nhất.
              <span className="block text-blue-300">
                Nó là hệ thống vừa đủ để thắng game đang chơi.
              </span>
            </blockquote>
          </div>
        </section>

        {/* 5. Growth Architecture */}
        <section
          id="growth-architecture"
          className="scroll-mt-24 bg-brand-section py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionHeading
                  eyebrow="05 · Growth Architecture"
                  title="Một kiến trúc đi từ business model đến revenue."
                  description="Mỗi lớp tạo điều kiện cho lớp tiếp theo. Khi kết quả chững lại, hệ thống cho biết nên quay lại đâu để chẩn đoán."
                />
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-brand-border bg-white px-4 py-2 text-[13px] font-bold text-brand-accent">
                  <Layers3 className="h-4 w-4" />
                  Growth System Framework
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-soft-text">
                  {['Tracking', 'CRM', 'Sales', 'Revenue', 'Feedback'].map(
                    (node, index, nodes) => (
                      <div key={node} className="flex items-center gap-2">
                        <span>{node}</span>
                        {index < nodes.length - 1 && (
                          <ArrowRight className="h-3.5 w-3.5 text-brand-accent" />
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[20px] border border-brand-border bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8">
                {architectureLayers.map((layer, index) => (
                  <div
                    key={layer.number}
                    className="grid gap-4 border-b border-brand-border py-6 first:pt-2 last:border-0 last:pb-2 sm:grid-cols-[60px_1fr]"
                  >
                    <div className="relative">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent-soft text-[12px] font-extrabold text-brand-accent">
                        {layer.number}
                      </span>
                      {index < architectureLayers.length - 1 && (
                        <span className="absolute left-5 top-12 hidden h-[calc(100%-32px)] w-px bg-brand-border sm:block" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em] text-brand-primary sm:text-[22px]">
                        {layer.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.75] text-brand-secondary">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-7">
                  <ArrowLink
                    href="/Growth-System-Framework"
                    analyticsEvent={homepageContentEvent('growth_system_framework', 'growth-system-framework', 'Growth System Framework', 'body', 'homepage_system_map')}
                  >
                    Đi sâu vào Growth System Framework
                  </ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Growth execution layer */}
        <section className="border-y border-brand-border bg-white py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                  AI GROWTH
                </p>
                <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[42px] lg:text-[52px]">
                  AI không thay thế
                  <span className="block">tư duy tăng trưởng.</span>
                  <span className="mt-2 block text-brand-accent">
                    Nó mở rộng khả năng triển khai.
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-brand-secondary sm:text-[17px]">
                  AI tại TP Growth không phải một kho prompt. Đây là lớp triển khai giúp
                  build tài sản số, scale nội dung và vận hành marketing với dữ liệu rõ
                  hơn, nhanh hơn và đều hơn.
                </p>
                <p className="mt-6 border-l-2 border-brand-accent pl-4 text-[14px] font-bold leading-[1.6] text-brand-primary">
                  3 lớp ứng dụng AI trong hệ thống
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-brand-soft-text">
                    Build • Scale • Operate
                  </span>
                </p>
                <a
                  href="/ai-growth"
                  onClick={() => trackAnalyticsEvent({
                    event: 'primary_cta_click',
                    event_version: ANALYTICS_EVENT_VERSION,
                    cta_name: 'view_ai_growth',
                    placement: 'body',
                    component_name: 'homepage_ai_growth',
                    destination_path: '/ai-growth',
                    destination_type: 'internal_route',
                  })}
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
                >
                  Xem AI Growth
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <ol className="relative grid gap-4 before:absolute before:bottom-10 before:left-5 before:top-10 before:w-px before:bg-brand-border sm:before:left-6">
                {aiGrowthSystems.map((system) => {
                  const SystemIcon = system.icon;
                  return (
                    <li
                      key={system.number}
                      className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-5 sm:p-6"
                    >
                      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent-soft text-[11px] font-extrabold text-brand-accent sm:h-12 sm:w-12">
                        {system.number}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[11px] font-extrabold tracking-[0.16em] text-brand-highlight">
                            {system.label}
                          </span>
                          <SystemIcon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                        </div>
                        <h3 className="mt-2 font-heading text-[20px] font-extrabold tracking-[-0.025em] text-brand-primary sm:text-[22px]">
                          {system.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.7] text-brand-secondary sm:text-[15px]">
                          {system.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {system.chips.map((chip) => (
                            <span
                              key={chip}
                              className="rounded-full border border-brand-border bg-brand-section px-3 py-1.5 text-[11px] font-bold text-brand-secondary"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* 6. Evidence, Not Claims */}
        <section
          id="evidence"
          className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="06 · Evidence, Not Claims"
              title="Không dựng dashboard để trông có vẻ chuyên nghiệp. Dùng những gì đã thật sự được triển khai."
              description="Proof nằm trong website, landing page, KOL, Search, event, paid distribution và hạ tầng measurement đã được vận hành."
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-12">
              <a
                href="/case-study/paint-and-more-growth-system"
                onClick={() => trackAnalyticsEvent(homepageContentEvent('case_study', 'paint-and-more-growth-system', 'Paint & More / OneCoat', 'card', 'homepage_proof_grid'))}
                className="group overflow-hidden rounded-[20px] border border-brand-border bg-brand-section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 lg:col-span-7"
              >
                <div className="aspect-[2048/989] overflow-hidden bg-white">
                  <img
                    src={paintMoreImage}
                    alt="Website OneCoat, một phần bằng chứng hệ thống Paint & More"
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="border-t border-brand-border bg-white p-6 sm:p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                    01 · Build evidence
                  </p>
                  <h3 className="mt-2 font-heading text-[24px] font-extrabold text-brand-primary">
                    Website · Landing Page · Conversion Infrastructure
                  </h3>
                </div>
              </a>
              <div className="grid gap-5 lg:col-span-5">
                <a
                  href="/case-study/blackvue-dr750-lte-growth-system"
                  onClick={() => trackAnalyticsEvent(homepageContentEvent('case_study', 'blackvue-dr750-lte-growth-system', 'BlackVue DR750 LTE', 'card', 'homepage_proof_grid'))}
                  className="group overflow-hidden rounded-[20px] border border-brand-border bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 sm:grid sm:min-h-[220px] sm:grid-cols-[0.95fr_1.05fr]"
                >
                  <img
                    src={blackVueImage}
                    alt="Review authority trong hệ thống BlackVue"
                    className="aspect-[1200/824] w-full bg-slate-950 object-contain sm:aspect-auto sm:h-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex flex-col justify-end p-5 text-white sm:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300">
                      02 · Market evidence
                    </p>
                    <h3 className="mt-2 font-heading text-[20px] font-extrabold leading-[1.3]">
                      KOL · Review · PR · Search · Event
                    </h3>
                  </div>
                </a>
                <a
                  href="/case-study/gnet-g-on-x-growth-system"
                  onClick={() => trackAnalyticsEvent(homepageContentEvent('case_study', 'gnet-g-on-x-growth-system', 'GNET G-ON X', 'card', 'homepage_proof_grid'))}
                  className="group overflow-hidden rounded-[20px] border border-brand-border bg-brand-highlight-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4 sm:grid sm:min-h-[220px] sm:grid-cols-[1.05fr_0.95fr]"
                >
                  <div className="flex flex-col justify-end p-5 sm:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-highlight">
                      03 · Distribution evidence
                    </p>
                    <h3 className="mt-2 font-heading text-[20px] font-extrabold leading-[1.3] text-brand-primary">
                      Content · Paid Media · Remarketing
                    </h3>
                  </div>
                  <img
                    src={gnetPaidImage}
                    alt="Paid content trong hệ thống GNET G-ON X"
                    className="aspect-[1199/756] w-full bg-white object-contain object-center sm:aspect-auto sm:h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>

              <div className="lg:col-span-12">
                <p className="max-w-4xl text-[15px] leading-[1.75] text-brand-secondary">
                  Không chỉ xây nội dung và cấu trúc chiến dịch. Tôi trực tiếp vận hành
                  ngân sách trên các nền tảng phân phối chính và theo dõi tín hiệu chuyển
                  đổi xuyên suốt hệ thống.
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {paidMediaEvidence.map((item) => (
                    <article
                      key={item.title}
                      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-colors hover:border-blue-300"
                    >
                      <div className="aspect-[1920/1209] overflow-hidden border-b border-brand-border bg-brand-primary">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="h-full w-full object-contain object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <h3 className="font-heading text-[20px] font-extrabold leading-[1.3] text-brand-primary">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-[1.75] text-brand-secondary">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <article className="overflow-hidden rounded-[20px] border border-brand-border bg-brand-section lg:col-span-12">
                <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="min-w-0 border-b border-brand-border bg-brand-primary p-3 sm:p-5 lg:border-b-0 lg:border-r">
                    <div className="overflow-hidden rounded-[14px] bg-white">
                      <img
                        src={measurementImage}
                        alt="Hệ thống Server-side GTM ghi nhận Hotline, Zalo, Messenger và conversion signals"
                        width="1888"
                        height="1147"
                        className="h-auto w-full object-contain"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 52vw, 100vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                      04 · Measurement evidence
                    </p>
                    <h3 className="mt-3 font-heading text-[25px] font-extrabold leading-[1.25] tracking-[-0.025em] text-brand-primary sm:text-[30px]">
                      GTM Web · Server-side GTM · CAPI · GA4 · Conversion Signals
                    </h3>
                    <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-brand-secondary">
                      <p>
                        Tracking không chỉ để làm báo cáo. Mục tiêu là biết ngân sách
                        đang tạo ra Hotline, Zalo, Messenger, Lead Form hay hành động
                        kinh doanh nào — và đưa tín hiệu phù hợp về nền tảng.
                      </p>
                      <p className="font-heading text-[19px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-highlight">
                        Gửi sai tín hiệu, thuật toán vẫn học rất nhanh — nhưng học sai
                        thứ.
                      </p>
                    </div>
                    <div className="mt-7 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-soft-text">
                      {[
                        'Customer Action',
                        'Web GTM',
                        'Server-side',
                        'Meta / Google / TikTok / GA4',
                        'Optimization',
                      ].map((node, index, nodes) => (
                        <div key={node} className="flex items-center gap-2">
                          <span>{node}</span>
                          {index < nodes.length - 1 && (
                            <ArrowRight className="h-3.5 w-3.5 text-brand-accent" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 7. Field Notes */}
        <section
          id="field-notes"
          className="scroll-mt-24 bg-brand-section py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="07 · Field Notes"
                title="Những góc nhìn ngắn từ bên trong hệ thống."
                description="Bốn video được hiển thị bằng cover tĩnh. Video chỉ mở trên YouTube sau khi bạn chủ động chọn xem."
              />
              <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-brand-soft-text">
                <Play className="h-4 w-4 text-brand-highlight" />
                No autoplay
              </span>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {shorts.map((video, index) => (
                <a
                  key={video.url}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-colors hover:border-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
                  aria-label={`Mở YouTube Shorts: ${video.title}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-brand-primary">
                    <img
                      src={video.cover}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
                      style={{ objectPosition: video.objectPosition }}
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-brand-primary/10" />
                    <span className="absolute inset-3 rounded-[14px] border border-white/25" />
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-primary shadow-[0_8px_20px_rgba(15,23,42,0.16)] transition-colors group-hover:bg-brand-highlight group-hover:text-white">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </span>
                    <span className="absolute bottom-4 left-4 rounded-full bg-brand-primary/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      Video note
                    </span>
                  </div>
                  <div className="min-h-[138px] p-5">
                    <div className="flex items-center justify-between border-b border-brand-border pb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-soft-text">
                        0{index + 1} · YouTube Short
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-brand-accent" />
                    </div>
                    <h3 className="mt-4 font-heading text-[17px] font-extrabold leading-[1.4] tracking-[-0.015em] text-brand-primary transition-colors group-hover:text-brand-accent">
                      {video.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 8. How I Operate */}
        <section
          id="how-i-operate"
          className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto grid gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:px-8">
            <div>
              <SectionHeading
                eyebrow="08 · How I Operate"
                title="Công việc phía sau một hệ thống có vẻ đơn giản."
                description="Sáu bước giữ cho strategy không dừng ở slide và execution không chạy rời khỏi mục tiêu kinh doanh."
              />

              <ol className="mt-10 divide-y divide-brand-border border-y border-brand-border">
                {[
                  ['Audit', 'Audit để nhìn thấy hệ thống.'],
                  ['Diagnose', 'Diagnose để tìm đúng điểm nghẽn.'],
                  ['Architect', 'Architect để xác định cấu trúc cần thiết.'],
                  ['Build', 'Build để biến quyết định thành thứ có thể vận hành.'],
                  ['Operate', 'Operate để kiểm chứng trong thực tế.'],
                  [
                    'Learn',
                    'Learn để dữ liệu và phản hồi quay lại cải thiện vòng tiếp theo.',
                  ],
                ].map(([title, description], index) => (
                  <li
                    key={title}
                    className="grid gap-3 py-5 sm:grid-cols-[44px_120px_1fr] sm:items-start"
                  >
                    <span className="text-[11px] font-bold tracking-[0.16em] text-brand-accent">
                      0{index + 1}
                    </span>
                    <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">
                      {title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-brand-secondary">
                      {description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[20px] border border-brand-border bg-brand-section shadow-[0_20px_50px_rgba(15,23,42,0.07)]">
                <img
                  src={phuInteractiveScreen}
                  alt="Phan Thành Phú thao tác trực tiếp trên màn hình tương tác trong quá trình làm việc"
                  width="1386"
                  height="2048"
                  className="aspect-[1386/2048] w-full bg-brand-section object-contain object-center"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
              <figcaption className="mt-4 text-[14px] leading-[1.65] text-brand-soft-text">
                Không chỉ nhìn báo cáo. Trực tiếp đi vào công cụ, quy trình và cách
                đội ngũ đang vận hành.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 9. Featured Growth Note */}
        <section
          id="featured-growth-note"
          className="scroll-mt-24 bg-brand-accent-soft py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <article className="grid overflow-hidden rounded-[20px] border border-blue-200 bg-white shadow-[0_24px_60px_rgba(29,78,216,0.08)] lg:grid-cols-[0.72fr_1.28fr]">
              <div className="flex min-h-[300px] flex-col justify-between bg-brand-accent p-7 text-white sm:p-10 lg:min-h-[520px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-200">
                  09 · Featured Growth Note
                </p>
                <div>
                  <Quote className="mb-7 h-10 w-10 text-brand-highlight" />
                  <p className="font-heading text-[26px] font-extrabold leading-[1.35] tracking-[-0.02em] sm:text-[32px]">
                    “Một công thức chỉ có giá trị khi nó giải đúng bài toán của hệ
                    thống đang vận hành.”
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-16">
                <p className="text-[12px] font-bold uppercase tracking-[0.17em] text-brand-highlight">
                  Bắt đầu từ đây
                </p>
                <h2 className="mt-5 font-heading text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] text-brand-primary sm:text-[44px]">
                  Tôi không tin vào một công thức marketing cho mọi doanh nghiệp
                </h2>
                <p className="mt-6 text-[17px] leading-[1.75] text-brand-secondary">
                  Cùng một triệu chứng có thể đến từ những nguyên nhân hoàn toàn
                  khác nhau. Growth Note này giải thích cách tôi nhìn bốn doanh
                  nghiệp như bốn trò chơi tăng trưởng riêng biệt.
                </p>
                <div className="mt-8">
                  <ArrowLink
                    href="/growth-notes/toi-khong-tin-vao-mot-cong-thuc-marketing"
                    tone="orange"
                    analyticsEvent={homepageContentEvent('growth_note', 'toi-khong-tin-vao-mot-cong-thuc-marketing', 'Tôi không tin vào một công thức marketing cho mọi doanh nghiệp', 'card', 'homepage_featured_growth_note')}
                  >
                    Đọc bài trụ cột
                  </ArrowLink>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 10. Fit Check */}
        <section
          id="fit-check"
          className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="10 · Fit Check"
              title="Có thể vấn đề của bạn không nằm ở việc thiếu thêm một kênh."
              description="Những dấu hiệu dưới đây thường trông giống các lỗi riêng lẻ. Nhưng nhiều khi chúng liên quan với nhau trong cùng một hệ thống."
            />
            <div className="mt-12 grid border-y border-brand-border lg:grid-cols-2">
              {fitSignals.map((signal, index) => (
                <div
                  key={signal}
                  className={`grid grid-cols-[42px_1fr] gap-4 border-b border-brand-border py-6 last:border-b-0 ${
                    index % 2 === 0
                      ? 'lg:border-r lg:pl-0 lg:pr-8'
                      : 'lg:pl-8 lg:pr-0'
                  } ${
                    index > 3 ? 'lg:border-b-0' : ''
                  }`}
                >
                  <span className="text-[11px] font-bold tracking-[0.16em] text-brand-highlight">
                    0{index + 1}
                  </span>
                  <p className="text-[16px] leading-[1.75] text-brand-secondary">
                    {signal}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-9 max-w-4xl">
              <p className="font-heading text-[20px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                Nếu bạn nhìn thấy doanh nghiệp mình trong nhiều hơn một tình huống,
                có thể vấn đề không nằm ở một chiến dịch riêng lẻ.
              </p>
              <div className="mt-5">
                <ArrowLink
                  href="/Growth-System-Framework"
                  analyticsEvent={homepageContentEvent('growth_system_framework', 'growth-system-framework', 'Growth System Framework', 'body', 'homepage_fit_check')}
                >
                  Xem cách tôi rà một Growth System
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>

        {/* 11. About Phú */}
        <section
          id="about-phu"
          className="scroll-mt-24 bg-brand-section py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto grid items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
            <div className="overflow-hidden rounded-[20px] border border-brand-border bg-brand-primary shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <img
                src={phuFactory}
                alt="Phan Thành Phú tại khu vực vận hành nhà máy Paint & More"
                width="1133"
                height="1492"
                className="aspect-[1133/1492] w-full bg-brand-section object-contain object-center"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 43vw, 100vw"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="11 · About Phú"
                title="Một operator đứng giữa chiến lược và triển khai"
              />
              <div className="mt-7 space-y-5 text-[16px] leading-[1.8] text-brand-secondary">
                <p>
                  Tôi đi lên từ execution: content, ads, website, tracking, team và
                  campaign.
                </p>
                <p>
                  Sau nhiều năm làm việc với nhiều business model, tôi nhận ra giá
                  trị lớn nhất không nằm ở việc dùng thêm công cụ — mà ở khả năng
                  nhìn được các mắt xích đang tác động lẫn nhau.
                </p>
                <p>
                  Hiện tôi xây TP Growth như một hệ thống kiến thức, case study và
                  công cụ thực hành cho SME: bắt đầu từ Marketing, mở rộng sang
                  Sales, Revenue và Growth Operations.
                </p>
              </div>
              <div className="mt-8 grid gap-x-6 gap-y-4 border-y border-brand-border py-6 sm:grid-cols-2">
                {[
                  '7 năm marketing thực chiến.',
                  'B2B · Retail · Automotive · Dịch vụ · F&B.',
                  'Strategy đi cùng execution.',
                  'Trực tiếp tham gia campaign, video, event và technical setup.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent-soft text-brand-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-[14px] leading-[1.65] text-brand-secondary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <ArrowLink
                  href="/lam-viec-voi-phu"
                  analyticsEvent={homepageCtaEvent('learn_how_to_work_with_phu', 'body', 'homepage_about_phu')}
                >
                  Tìm hiểu cách làm việc cùng Phú
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Ways to Work */}
        <section
          id="ways-to-work"
          className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <SectionHeading
                eyebrow="12 · Ways to Work"
                title="Bắt đầu từ mức can thiệp phù hợp."
                description="Không phải doanh nghiệp nào cũng cần một dự án lớn. Phạm vi nên đi theo điểm nghẽn và năng lực thực thi hiện tại."
              />
              <div className="divide-y divide-brand-border border-y border-brand-border">
                {waysToWork.map((way) => (
                  <article
                    key={way.number}
                    className="grid gap-5 py-8 sm:grid-cols-[50px_1fr]"
                  >
                    <span className="text-[12px] font-bold tracking-[0.16em] text-brand-accent">
                      {way.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-[22px] font-extrabold tracking-[-0.02em] text-brand-primary transition-colors group-hover:text-brand-accent">
                        {way.title}
                      </h3>
                      <dl className="mt-5 space-y-4">
                        <div>
                          <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-soft-text">
                            Dành cho
                          </dt>
                          <dd className="mt-1.5 text-[15px] leading-[1.7] text-brand-secondary">
                            {way.audience}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                            Phạm vi
                          </dt>
                          <dd className="mt-1.5 text-[15px] leading-[1.7] text-brand-secondary">
                            {way.scope}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-highlight">
                            Kết quả
                          </dt>
                          <dd className="mt-1.5 text-[15px] font-semibold leading-[1.7] text-brand-primary">
                            {way.result}
                          </dd>
                        </div>
                      </dl>
                      <a
                        href="/lam-viec-voi-phu"
                        onClick={() => trackAnalyticsEvent(homepageCtaEvent(`work_with_phu_${way.number}`, 'card', 'homepage_ways_to_work'))}
                        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-[14px] font-bold text-brand-accent transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
                      >
                        {way.cta}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 13. Final CTA */}
        <section
          id="final-cta"
          className="scroll-mt-24 border-t border-brand-border bg-brand-section py-20 sm:py-24 lg:py-28"
        >
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="rounded-[24px] border border-brand-border bg-white px-6 py-12 text-center shadow-[0_20px_50px_rgba(15,23,42,0.05)] sm:px-10 md:py-16 lg:px-16">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-highlight">
                Từ lead đến revenue
              </p>
              <h2 className="mx-auto mt-5 max-w-5xl font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[42px] lg:text-[54px]">
                Bạn có thể không cần thêm traffic.
                <span className="block text-brand-accent">
                  Bạn có thể chỉ cần biết hệ thống đang mất chuyển đổi ở đâu.
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-[1.75] text-brand-secondary">
                Trước khi đổi agency, tuyển thêm người hoặc tăng ngân sách, hãy nhìn
                lại toàn bộ dòng chảy từ lead đến revenue.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/Growth-System-Framework"
                  onClick={() => trackAnalyticsEvent(homepageContentEvent('growth_system_framework', 'growth-system-framework', 'Growth System Framework', 'cta_section', 'homepage_final_cta'))}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
                >
                  Xem Growth System Framework
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/lam-viec-voi-phu"
                  onClick={() => trackAnalyticsEvent(homepageCtaEvent('work_with_phu', 'cta_section', 'homepage_final_cta'))}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button border border-brand-border bg-white px-7 py-3.5 text-[15px] font-bold text-brand-primary transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
                >
                  <MessageCircle className="h-5 w-5 text-brand-accent" />
                  Nhắn Zalo trao đổi với Phú
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-border bg-white">
        <div className="container mx-auto px-5 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 border-b border-brand-border pb-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-14 shrink-0 items-center rounded-xl border border-brand-border bg-white px-3 py-2 shadow-sm">
                <TPLogo size="custom" className="h-full w-auto object-contain" />
              </div>
              <div>
                <p className="font-heading text-[17px] font-extrabold uppercase tracking-[-0.02em] text-brand-primary">
                  Growth Through System
                </p>
                <p className="mt-1 text-[14px] leading-[1.6] text-brand-secondary">
                  Xây hệ thống tăng trưởng rõ ràng hơn — từ demand đến revenue.
                </p>
              </div>
            </div>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-bold text-brand-secondary"
            >
              <a className="hover:text-brand-accent" href="/Growth-System-Framework">
                Growth System
              </a>
              <a className="hover:text-brand-accent" href="/case-study">
                Case Study
              </a>
              <a className="hover:text-brand-accent" href="/growth-notes">
                Growth Notes
              </a>
              <a className="hover:text-brand-accent" href="/lam-viec-voi-phu">
                Làm việc với Phú
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-[12px] text-brand-soft-text sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 TP GROWTH MARKETING. Bản quyền thuộc về tác giả.</p>
            <p className="font-bold uppercase tracking-[0.16em] text-brand-highlight">
              Strategic Operator
            </p>
          </div>
        </div>
      </footer>

      {showMobileActions && (
        <div
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-brand-border bg-white/95 px-4 pt-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden"
          style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}
          role="region"
          aria-label="Liên hệ nhanh"
        >
          <div className="mx-auto grid max-w-md grid-cols-[1fr_auto] gap-2">
            <a
              href="/lam-viec-voi-phu"
              onClick={() => trackAnalyticsEvent(homepageCtaEvent('growth_system_audit', 'mobile_sticky', 'homepage_mobile_actions'))}
              className="inline-flex min-h-11 items-center justify-center rounded-brand-button bg-brand-highlight px-5 py-2.5 text-[14px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
              aria-label="Trao đổi về Growth System Audit"
            >
              Trao đổi Audit
            </a>
            <a
              href="/lam-viec-voi-phu"
              onClick={() => trackAnalyticsEvent(homepageCtaEvent('work_with_phu', 'mobile_sticky', 'homepage_mobile_actions'))}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-brand-button border border-brand-border bg-white px-4 py-2.5 text-[14px] font-bold text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              aria-label="Nhắn Zalo với Phú"
            >
              <MessageCircle className="h-4 w-4 text-brand-accent" />
              Zalo
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
