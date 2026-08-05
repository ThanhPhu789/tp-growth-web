import { ArrowRight, ChevronRight, X } from 'lucide-react';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { navCta } from '../config/navigation';
import contentAngles from '../assets/case-studies/blackvue/blackvue-content-angles.jpg';
import customerFeedback from '../assets/case-studies/blackvue/blackvue-customer-feedback.jpg';
import premiumPositioning from '../assets/case-studies/blackvue/blackvue-dr750-premium-positioning.jpg';
import productEducation from '../assets/case-studies/blackvue/blackvue-dr750-product-education.jpg';
import searchInstallation from '../assets/case-studies/blackvue/blackvue-dr750-search-installation.jpg';
import facebookMessengerAds from '../assets/case-studies/blackvue/blackvue-facebook-messenger-ads.jpg';
import facebookMessengerPortfolio from '../assets/case-studies/blackvue/blackvue-facebook-messenger-portfolio.jpg';
import facebookMessengerRemarketing01 from '../assets/case-studies/blackvue/blackvue-facebook-messenger-remarketing-01.jpg';
import facebookMessengerRemarketing02 from '../assets/images/Case campaign camera hành trình blackvue 750 lte 8.jpg';
import facebookMessengerScale01 from '../assets/case-studies/blackvue/blackvue-facebook-messenger-scale-01.jpg';
import facebookMessengerScale02 from '../assets/case-studies/blackvue/blackvue-facebook-messenger-scale-02.jpg';
import facebookRemarketing from '../assets/case-studies/blackvue/blackvue-facebook-remarketing.jpg';
import highViewContent from '../assets/case-studies/blackvue/blackvue-high-view-content.jpg';
import hungLamFacebook from '../assets/case-studies/blackvue/blackvue-hung-lam-facebook-review.jpg';
import hungLamGolfer from '../assets/case-studies/blackvue/blackvue-hung-lam-golfer-review.jpg';
import hungLamYoutube from '../assets/case-studies/blackvue/blackvue-hung-lam-youtube-review.jpg';
import prCoverage from '../assets/case-studies/blackvue/blackvue-pr-coverage.jpg';
import premiumCommunity from '../assets/case-studies/blackvue/blackvue-premium-community.jpg';
import productUseCases from '../assets/case-studies/blackvue/blackvue-product-use-cases.jpg';
import xeCungBrandAwareness from '../assets/case-studies/blackvue/blackvue-xe-cung-brand-awareness.jpg';
import xeCungReview from '../assets/case-studies/blackvue/blackvue-xe-cung-review.jpg';
import youtubeConversion from '../assets/case-studies/blackvue/blackvue-youtube-conversion.jpg';

type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

type ProofScope = 'CAMPAIGN CORE' | 'SYSTEM EVOLUTION';

type EvidenceItem = {
  image: ImageAsset;
  alt: string;
  label: string;
  caption: string;
  scope: ProofScope;
};

const images = {
  hero: { src: premiumPositioning, width: 1207, height: 900 },
  hungLamFacebook: { src: hungLamFacebook, width: 1199, height: 824 },
  hungLamYoutube: { src: hungLamYoutube, width: 1199, height: 824 },
  xeCungReview: { src: xeCungReview, width: 1500, height: 900 },
  contentAngles: { src: contentAngles, width: 1199, height: 883 },
  productEducation: { src: productEducation, width: 1199, height: 844 },
  searchInstallation: { src: searchInstallation, width: 1207, height: 900 },
  productUseCases: { src: productUseCases, width: 1199, height: 824 },
  customerFeedback: { src: customerFeedback, width: 1199, height: 824 },
  premiumCommunity: { src: premiumCommunity, width: 1199, height: 1212 },
  prCoverage: { src: prCoverage, width: 1199, height: 598 },
  facebookMessengerAds: { src: facebookMessengerAds, width: 1199, height: 883 },
  facebookMessengerPortfolio: { src: facebookMessengerPortfolio, width: 1174, height: 900 },
  facebookMessengerRemarketing01: { src: facebookMessengerRemarketing01, width: 1199, height: 900 },
  facebookMessengerRemarketing02: { src: facebookMessengerRemarketing02, width: 1199, height: 900 },
  facebookMessengerScale01: { src: facebookMessengerScale01, width: 1174, height: 900 },
  facebookMessengerScale02: { src: facebookMessengerScale02, width: 1199, height: 883 },
  facebookRemarketing: { src: facebookRemarketing, width: 1199, height: 883 },
  hungLamGolfer: { src: hungLamGolfer, width: 2144, height: 900 },
  xeCungBrandAwareness: { src: xeCungBrandAwareness, width: 1500, height: 900 },
  youtubeConversion: { src: youtubeConversion, width: 1199, height: 883 },
  highViewContent: { src: highViewContent, width: 919, height: 900 },
};

const evolutionCaption = 'Cấu trúc nội dung và phân phối tiếp tục được mở rộng cho các dòng sản phẩm BlackVue ở giai đoạn sau.';

const evidenceLibrary: EvidenceItem[] = [
  {
    image: images.hero,
    alt: 'Campaign BlackVue DR750 LTE với câu hỏi lựa chọn camera hành trình cho xe sang',
    label: 'Campaign Positioning',
    caption: 'Định vị premium được đưa vào một câu hỏi cụ thể mà chủ xe có thể nhận ra ngay.',
    scope: 'CAMPAIGN CORE',
  },
  {
    image: images.searchInstallation,
    alt: 'Kết quả tìm kiếm video hướng dẫn và lắp đặt BlackVue DR750 LTE',
    label: 'Product Education',
    caption: 'Search footprint kết nối hướng dẫn DR750 LTE, xe thật và model tiếp nối trong hành trình tìm hiểu.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.hungLamFacebook,
    alt: 'Nội dung Hùng Lâm XE HAY review BlackVue trên Facebook',
    label: 'Influencer Authority',
    caption: 'Authority content đưa định vị premium vào đúng cuộc trò chuyện của cộng đồng yêu xe.',
    scope: 'CAMPAIGN CORE',
  },
  {
    image: images.hungLamYoutube,
    alt: 'Kênh YouTube XE HAY với nội dung BlackVue DR750 LTE',
    label: 'YouTube Authority',
    caption: 'Video dài tiếp tục giải thích sản phẩm và duy trì khả năng được tìm thấy sau campaign.',
    scope: 'CAMPAIGN CORE',
  },
  {
    image: images.hungLamGolfer,
    alt: 'Video XE HAY về xe sang và camera hành trình BlackVue',
    label: 'Premium Context',
    caption: 'Một góc authority khác đặt BlackVue vào bối cảnh sử dụng xe cao cấp.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.xeCungReview,
    alt: 'Nội dung review BlackVue DR900X từ kênh Xế Cưng',
    label: 'Expert Review',
    caption: 'Expert review cho thấy cấu trúc authority được tiếp tục mở rộng sang model BlackVue về sau.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.xeCungBrandAwareness,
    alt: 'Kết quả tìm kiếm BlackVue trên kênh Xế Cưng',
    label: 'Long-tail Authority',
    caption: 'Một điểm chạm tìm kiếm bổ sung mở rộng độ phủ review ngoài partnership chủ lực.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.prCoverage,
    alt: 'Bài viết XE HAY giới thiệu BlackVue DR750-2CH LTE',
    label: 'PR Coverage',
    caption: 'PR tạo lớp xác thực thông tin và search footprint cho sản phẩm premium.',
    scope: 'CAMPAIGN CORE',
  },
  {
    image: images.premiumCommunity,
    alt: 'BlackVue đồng hành trong hoạt động cộng đồng xe cao cấp',
    label: 'Community Activation',
    caption: 'Bối cảnh cộng đồng giúp thương hiệu được nhìn thấy trong đúng không gian premium.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.customerFeedback,
    alt: 'Video cảm nhận khách hàng sau khi lắp BlackVue DR750 LTE',
    label: 'Customer Proof',
    caption: 'DR750 LTE và các phản hồi giai đoạn sau cho thấy customer proof tiếp tục được tích lũy từ xe thật.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.productUseCases,
    alt: 'Video hướng dẫn lắp đặt và use case BlackVue DR750 LTE',
    label: 'Product Use Case',
    caption: 'Use case và hướng dẫn giúp tính năng kỹ thuật trở thành tình huống sử dụng cụ thể.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.productEducation,
    alt: 'Video hướng dẫn sử dụng BlackVue DR750-2CH LTE',
    label: 'Product Education',
    caption: 'Nội dung hướng dẫn giảm rào cản vận hành của một sản phẩm có nhiều lớp công nghệ.',
    scope: 'CAMPAIGN CORE',
  },
  {
    image: images.contentAngles,
    alt: 'Nhiều góc nội dung về Parking Mode và độ bền BlackVue',
    label: 'Content Angles',
    caption: 'Nhiều góc giải thích giúp thị trường hiểu giá trị sản phẩm vượt ra ngoài độ phân giải.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.youtubeConversion,
    alt: 'Thư viện YouTube BlackVue Cloud và nội dung sản phẩm',
    label: 'YouTube Education',
    caption: 'YouTube kết nối nội dung Cloud, use case và thư viện video ngắn trong cùng hệ thống.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.highViewContent,
    alt: 'Video BlackVue Cloud hiển thị lượt xem công khai nổi bật',
    label: 'High-view Content',
    caption: 'Nội dung Cloud cho thấy tài sản video có thể tiếp tục tích lũy discovery theo thời gian.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.facebookMessengerScale01,
    alt: 'Thư viện Facebook Messenger Ads BlackVue với nhiều creative',
    label: 'Facebook Acquisition',
    caption: 'Creative acquisition được mở rộng theo nhiều hook, người thật và tình huống xe thật.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.facebookMessengerRemarketing01,
    alt: 'Thư viện Facebook Messenger và remarketing BlackVue',
    label: 'Messenger + Remarketing',
    caption: 'Acquisition và remarketing được nối bằng proof sản phẩm, xe và trải nghiệm sử dụng.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.facebookMessengerRemarketing02,
    alt: 'Nhiều creative Facebook remarketing BlackVue',
    label: 'Remarketing Library',
    caption: 'Nhiều creative gần nhau chứng minh độ rộng của thư viện nuôi lại người đã tương tác.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.facebookMessengerScale02,
    alt: 'Facebook Messenger Ads BlackVue với các video xe và ứng dụng',
    label: 'Facebook Acquisition',
    caption: 'Use case, xe thật và nội dung ứng dụng cùng kéo người dùng vào cuộc trò chuyện tư vấn.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.facebookMessengerAds,
    alt: 'Facebook Messenger Ads BlackVue với nhiều content angle',
    label: 'Facebook Content Wall',
    caption: 'Một lớp creative khác mở rộng độ phủ từ product hook tới customer và vehicle context.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.facebookRemarketing,
    alt: 'Hệ thống Facebook remarketing BlackVue',
    label: 'Remarketing',
    caption: 'Remarketing tiếp tục dùng product education, influencer và customer proof qua nhiều model.',
    scope: 'SYSTEM EVOLUTION',
  },
  {
    image: images.facebookMessengerPortfolio,
    alt: 'Portfolio nội dung Facebook Messenger Ads BlackVue',
    label: 'Distribution Proof',
    caption: 'Thư viện phân phối cho thấy nhiều năm tích lũy creative và tình huống sử dụng thực tế.',
    scope: 'SYSTEM EVOLUTION',
  },
];

const evidenceAspectClasses = [
  'aspect-[1207/900]',
  'aspect-[1207/900]',
  'aspect-[1199/824]',
  'aspect-[1199/824]',
  'aspect-[2144/900]',
  'aspect-[1500/900]',
  'aspect-[1500/900]',
  'aspect-[1199/598]',
  'aspect-[1199/1212]',
  'aspect-[1199/824]',
  'aspect-[1199/824]',
  'aspect-[1199/844]',
  'aspect-[1199/883]',
  'aspect-[1199/883]',
  'aspect-[919/900]',
  'aspect-[1174/900]',
  'aspect-[1199/900]',
  'aspect-[1199/900]',
  'aspect-[1199/883]',
  'aspect-[1199/883]',
  'aspect-[1199/883]',
  'aspect-[1174/900]',
];

const operatorRoles = [
  {
    number: '01',
    title: 'Positioning & Strategy',
    body: 'Xác định phân khúc ưu tiên, campaign backbone và cách chuyển tính năng kỹ thuật thành giá trị phù hợp với chủ xe cao cấp.',
  },
  {
    number: '02',
    title: 'Content & Authority',
    body: 'Định hướng content education, customer proof, influencer review, PR và premium community activation.',
  },
  {
    number: '03',
    title: 'Paid Distribution',
    body: 'Triển khai Facebook Messenger Ads, remarketing, YouTube distribution và các hoạt động kéo khách vào tư vấn.',
  },
  {
    number: '04',
    title: 'Retail & Dealer Flow',
    body: 'Kết nối nhu cầu bán lẻ tại TP.HCM với sales, kỹ thuật lắp đặt và luồng chuyển khách ngoài khu vực về hệ thống đại lý.',
  },
];

const challengePoints = [
  'Mức đầu tư cao hơn thị trường phổ thông.',
  'Hành trình ra quyết định dài.',
  'Sản phẩm kỹ thuật cần được giải thích.',
  'Cần lắp đặt và hỗ trợ sau bán.',
  'Khách cần nhiều lớp bằng chứng.',
  'Phạm vi lắp đặt trực tiếp có giới hạn địa lý.',
];

const centralDemandFlow = [
  'PREMIUM POSITIONING',
  'CONTENT & AUTHORITY',
  'PAID MEDIA',
  'WEBSITE / MESSENGER / HOTLINE',
  'QUALIFY NEED & LOCATION',
  'DIRECT INSTALLATION OR DEALER ROUTING',
  'CUSTOMER EXPERIENCE',
  'NEW PROOF',
];

const contentCompoundingFlow = [
  'INFLUENCER REVIEW',
  'LONG-FORM YOUTUBE',
  'SHORT-FORM CONTENT',
  'PAID DISTRIBUTION',
  'REMARKETING',
  'SALES FOLLOW-UP',
  'SEARCH DISCOVERY',
  'NEW CONVERSION',
];

const conversionFlow = [
  'CONTENT / INFLUENCER / ADS',
  'WEBSITE OR PRODUCT INFORMATION',
  'MESSENGER / HOTLINE',
  'VEHICLE & NEED CONSULTATION',
  'LOCATION QUALIFICATION',
  'DIRECT INSTALLATION OR DEALER ROUTING',
];

const salesSteps = [
  ['01', 'QUALIFY THE VEHICLE', 'Xác định dòng xe, cấu trúc nội thất và yêu cầu lắp đặt.'],
  ['02', 'QUALIFY THE USE CASE', 'Khách cần ghi hành trình, bảo vệ khi đỗ xe, theo dõi từ xa hay quản lý tài xế.'],
  ['03', 'EXPLAIN THE VALUE', 'Tư vấn dựa trên độ ổn định, khả năng bảo vệ xe, Cloud/LTE, thẩm mỹ lắp đặt và dịch vụ sau bán.'],
  ['04', 'ROUTE THE FULFILLMENT', 'TP.HCM được xử lý trực tiếp khi phù hợp. Khách ngoài khu vực được hỗ trợ và chuyển về đại lý.'],
  ['05', 'CREATE CUSTOMER PROOF', 'Sau lắp đặt, xe thật và trải nghiệm thật tiếp tục trở thành bằng chứng cho những vòng sau.'],
];

const customerProofFlow = [
  'CUSTOMER INSTALLATION',
  'REAL VEHICLE',
  'FEEDBACK / REVIEW',
  'NEW VIDEO & IMAGE',
  'ORGANIC CONTENT',
  'PAID MEDIA & REMARKETING',
  'NEW CUSTOMER',
];

const compoundingLoop = [
  'POSITIONING',
  'INFLUENCER / CONTENT',
  'PAID MEDIA',
  'WEBSITE / MESSENGER',
  'SALES',
  'INSTALLATION',
  'CUSTOMER EXPERIENCE',
  'REVIEW / VIDEO',
  'CONTENT & REMARKETING',
];

const compoundingAssets = [
  'KOL content',
  'KOC reviews',
  'PR coverage',
  'Customer videos',
  'Product education',
  'Remarketing audiences',
  'Sales knowledge',
  'Dealer support materials',
];

const impactLayers = [
  {
    number: '01',
    label: 'RETAIL REVENUE',
    items: [
      'Hệ thống bán lẻ vận hành ở quy mô hàng trăm triệu đồng/tháng trong nhiều giai đoạn.',
      'Doanh thu bán lẻ tích lũy đạt quy mô hàng tỷ đồng.',
      'Paid media và content tạo một dòng nhu cầu có thể được sales xử lý liên tục.',
    ],
  },
  {
    number: '02',
    label: 'DEALER ENABLEMENT',
    items: [
      'Lead ngoài phạm vi lắp đặt trực tiếp được chuyển tiếp về đại lý phù hợp.',
      'Content và authority giúp đại lý có thêm tài sản để giải thích sản phẩm.',
      'Nhu cầu từ marketing trung tâm hỗ trợ hoạt động đại lý toàn quốc ở quy mô hàng tỷ đồng.',
    ],
  },
  {
    number: '03',
    label: 'BRAND MEMORY',
    items: [
      'BlackVue được gắn mạnh hơn với phân khúc camera hành trình premium.',
      'Influencer, PR và cộng đồng xe tạo nhiều lớp authority.',
      'YouTube và nội dung dài tạo search footprint lâu dài.',
      'Customer proof giúp thương hiệu tiếp tục được kiểm chứng bằng xe thật.',
    ],
  },
  {
    number: '04',
    label: 'COMPOUNDING ASSETS',
    items: [
      'Influencer content, KOC reviews và PR coverage.',
      'Customer feedback, YouTube library và product education library.',
      'Remarketing audiences và dealer-support materials.',
      'Sales and installation knowledge.',
    ],
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 text-[10px] font-black uppercase tracking-[0.26em] text-brand-highlight md:text-[11px] md:tracking-[0.34em]">
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} mb-10 max-w-4xl md:mb-14`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[38px] md:text-[46px] md:tracking-[-0.04em]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-[16px] font-medium leading-[1.75] text-brand-secondary md:text-[17px]">
          {intro}
        </p>
      )}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] font-medium leading-[1.65] text-brand-secondary">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function VisualTile({
  item,
  onOpen,
  eager = false,
  className = 'aspect-[16/10]',
  dark = false,
  showCaption = false,
}: {
  item: EvidenceItem;
  onOpen: (item: EvidenceItem) => void;
  eager?: boolean;
  className?: string;
  dark?: boolean;
  showCaption?: boolean;
}) {
  return (
    <figure>
      <button
        type="button"
        onClick={() => onOpen(item)}
        className={`group relative block w-full overflow-hidden rounded-[18px] border bg-white text-left shadow-brand-soft transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4 motion-reduce:transform-none ${
          dark ? 'border-white/15 focus-visible:ring-offset-slate-950' : 'border-brand-border'
        }`}
        aria-label={`Mở ảnh lớn: ${item.alt}`}
      >
        <img
          src={item.image.src}
          alt={item.alt}
          width={item.image.width}
          height={item.image.height}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          className={`${className} h-full w-full object-contain`}
        />
        <span className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] shadow-sm ${
          dark ? 'border-white/20 bg-slate-950/85 text-white' : 'border-white/70 bg-white/90 text-brand-primary'
        }`}>
          {item.label}
        </span>
      </button>
      {showCaption && (
        <figcaption className={`mt-3 text-[13px] font-medium leading-[1.6] ${dark ? 'text-slate-300' : 'text-brand-soft-text'}`}>
          <span className={`mb-1 block text-[10px] font-black tracking-[0.15em] ${dark ? 'text-orange-300' : 'text-brand-blue'}`}>
            {item.scope}
          </span>
          {item.caption} {item.scope === 'SYSTEM EVOLUTION' ? evolutionCaption : 'Asset trực tiếp thuộc campaign DR750 LTE.'}
        </figcaption>
      )}
    </figure>
  );
}

function ImageLightbox({
  item,
  onClose,
}: {
  item: EvidenceItem;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blackvue-lightbox-title"
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          event.preventDefault();
          closeButtonRef.current?.focus();
        }
      }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[20px] border border-white/20 bg-slate-950 shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/15 px-4 py-3 sm:px-5">
          <div>
            <div className="text-[9px] font-black tracking-[0.14em] text-orange-400">{item.scope}</div>
            <h3 id="blackvue-lightbox-title" className="mt-1 font-heading text-[15px] font-bold leading-[1.35] text-white sm:text-[17px]">
              {item.label}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            autoFocus
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Đóng ảnh lớn"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto bg-black p-2 sm:p-4">
          <img
            src={item.image.src}
            alt={item.alt}
            width={item.image.width}
            height={item.image.height}
            className="mx-auto h-auto max-h-[calc(100dvh-10rem)] w-auto max-w-full object-contain"
          />
        </div>
        <div className="border-t border-white/15 px-4 py-3 sm:px-5">
          <p className="text-[13px] font-medium leading-[1.6] text-slate-300">{item.caption}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            {item.scope === 'SYSTEM EVOLUTION' ? evolutionCaption : 'Asset trực tiếp thuộc campaign DR750 LTE.'}
          </p>
        </div>
      </div>
    </div>
  );
}

function FlowTimeline({ steps }: { steps: string[] }) {
  return (
    <ol className="border-l-2 border-blue-200 pl-6 md:grid md:grid-cols-2 md:border-l-0 md:pl-0 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step}
          className={`relative pb-7 last:pb-0 md:border-t md:border-blue-200 md:px-5 md:pb-7 md:pt-7 ${
            index % 2 === 1 ? 'md:border-l md:border-brand-border' : ''
          } ${index % 4 !== 0 ? 'lg:border-l lg:border-brand-border' : 'lg:border-l-0'}`}
        >
          <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-brand-bg bg-brand-accent md:-top-[8px] md:left-5" aria-hidden="true" />
          <span className="text-[9px] font-black tracking-[0.14em] text-brand-soft-text">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="mt-2 text-[11px] font-black leading-[1.45] tracking-[0.08em] text-brand-accent">{step}</div>
        </li>
      ))}
    </ol>
  );
}

export default function BlackVueCaseStudyPage() {
  const [activeImage, setActiveImage] = useState<EvidenceItem | null>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const nextTitle = 'BlackVue DR750 LTE Case Study | TP Growth';
    const nextDescription = 'Case study xây retail demand engine cho BlackVue DR750 LTE: định vị phân khúc xe sang, influencer, PR, paid media, retail TP.HCM và hỗ trợ hệ thống đại lý toàn quốc.';
    const metaDefinitions = [
      { selector: 'meta[name="description"]', attribute: 'name', key: 'description', content: nextDescription },
      { selector: 'meta[property="og:title"]', attribute: 'property', key: 'og:title', content: nextTitle },
      { selector: 'meta[property="og:description"]', attribute: 'property', key: 'og:description', content: nextDescription },
      {
        selector: 'meta[property="og:image"]',
        attribute: 'property',
        key: 'og:image',
        content: new URL(images.hero.src, window.location.origin).href,
      },
    ];
    const records = metaDefinitions.map((definition) => {
      const existing = document.querySelector<HTMLMetaElement>(definition.selector);
      const meta = existing ?? document.createElement('meta');
      const previousContent = existing?.content;

      meta.setAttribute(definition.attribute, definition.key);
      meta.content = definition.content;
      if (!existing) {
        document.head.appendChild(meta);
      }

      return { existing, meta, previousContent };
    });

    document.title = nextTitle;

    return () => {
      document.title = previousTitle;
      records.forEach(({ existing, meta, previousContent }) => {
        if (existing && previousContent !== undefined) {
          existing.content = previousContent;
        } else if (!existing) {
          meta.remove();
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    lastFocusedElement.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocusedElement.current?.focus();
    };
  }, [activeImage]);

  return (
    <div className="min-h-screen overflow-x-clip bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <section className="py-12 md:py-18 lg:py-22">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-bold text-brand-soft-text">
                <a
                  href="/case-study"
                  className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent lg:min-h-0"
                >
                  Case Study
                </a>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span aria-current="page">BlackVue DR750 LTE</span>
              </nav>

              <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
                <div>
                  <Eyebrow>CASE STUDY 02 · PREMIUM AUTO TECH GROWTH SYSTEM</Eyebrow>
                  <p className="text-[15px] font-extrabold text-brand-accent">BlackVue DR750 LTE</p>
                  <h1 className="mt-4 font-heading text-[40px] font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-[48px] md:text-[56px] lg:text-[62px]">
                    Từ thương hiệu mạnh trong kênh đại lý đến hệ thống tạo nhu cầu trực tiếp cho phân khúc xe sang
                  </h1>
                  <p className="mt-6 max-w-3xl text-[17px] font-medium leading-[1.75] text-brand-secondary md:text-[19px]">
                    BlackVue đã có uy tín quốc tế, sản phẩm cao cấp và mạng lưới đại lý tại Việt Nam. Bài toán không phải thay thế hệ thống phân phối, mà là xây thêm một retail demand engine có thể giáo dục thị trường, tạo chuyển đổi trực tiếp tại TP.HCM và tiếp tục phân phối nhu cầu về đại lý trên toàn quốc.
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="col-span-2">
                      <VisualTile
                        item={evidenceLibrary[0]}
                        onOpen={setActiveImage}
                        eager
                        className="aspect-[1207/900]"
                      />
                    </div>
                    <VisualTile
                      item={evidenceLibrary[13]}
                      onOpen={setActiveImage}
                      className="aspect-[1199/883]"
                    />
                    <VisualTile
                      item={evidenceLibrary[11]}
                      onOpen={setActiveImage}
                      className="aspect-[1199/844]"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2" aria-label="Các lớp bằng chứng của case study">
                    {['Premium Positioning', 'Influencer Authority', 'Nationwide Demand', 'Retail + Dealer Network'].map((tag) => (
                      <span key={tag} className="rounded-full border border-brand-border bg-white px-3 py-1.5 text-[10px] font-extrabold text-brand-secondary shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[13px] font-medium leading-[1.65] text-brand-soft-text">
                    Positioning, product education và nền tảng nội dung video cùng xuất hiện ngay từ phần mở đầu của demand engine.
                  </p>
                </div>
              </div>

              <dl className="mt-12 grid overflow-hidden rounded-[20px] border border-brand-border bg-white sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['Doanh nghiệp', 'BlackVue Việt Nam'],
                  ['Lĩnh vực', 'Premium Automotive Technology'],
                  ['Vai trò', 'Marketing Lead / Growth Operator'],
                  ['Phạm vi', 'Positioning · Content · Influencer · PR · Paid Media · Retail · Dealer Enablement'],
                ].map(([term, detail], index) => (
                  <div
                    key={term}
                    className={`p-5 md:p-6 ${index > 0 ? 'border-t border-brand-border sm:border-t-0 sm:border-l' : ''} ${index === 2 ? 'sm:border-l-0 lg:border-l' : ''}`}
                  >
                    <dt className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-soft-text">{term}</dt>
                    <dd className="mt-3 text-[14px] font-bold leading-[1.55] text-brand-primary">{detail}</dd>
                  </div>
                ))}
              </dl>

              <dl className="mt-6 grid overflow-hidden rounded-[20px] border border-blue-200 bg-brand-accent-soft md:grid-cols-3">
                {[
                  ['RETAIL SCALE', 'Hàng trăm triệu đồng/tháng'],
                  ['CUMULATIVE RETAIL', 'Quy mô hàng tỷ đồng'],
                  ['SYSTEM REACH', 'Retail TP.HCM + đại lý toàn quốc'],
                ].map(([term, detail], index) => (
                  <div key={term} className={`p-6 md:p-8 ${index > 0 ? 'border-t border-blue-200 md:border-l md:border-t-0' : ''}`}>
                    <dt className="text-[10px] font-black tracking-[0.16em] text-brand-accent">{term}</dt>
                    <dd className="mt-3 font-heading text-[22px] font-extrabold leading-[1.25] tracking-[-0.025em]">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
            <div>
              <Eyebrow>THE CONTEXT</Eyebrow>
              <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[46px]">
                Thương hiệu đã có uy tín. Kênh phân phối đã có. Nhưng nhu cầu vẫn chủ yếu phụ thuộc vào đại lý.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] font-medium leading-[1.8] text-brand-secondary">
              <p className="font-bold text-brand-primary">BlackVue không bắt đầu từ con số 0.</p>
              <p>Thương hiệu camera hành trình cao cấp đến từ Hàn Quốc đã có nền tảng công nghệ, uy tín quốc tế, người dùng và hệ thống phân phối tại Việt Nam. Đại lý đảm nhận vai trò quan trọng trong tư vấn, lắp đặt và hỗ trợ kỹ thuật.</p>
              <p>Điểm còn thiếu là khả năng chủ động tiếp cận người dùng cuối, giải thích giá trị của một sản phẩm premium và tạo một dòng nhu cầu có thể được xử lý trực tiếp hoặc chuyển tiếp về mạng lưới phân phối.</p>
              <blockquote className="mt-8 border-l-2 border-brand-accent pl-5 font-heading text-[21px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                “Bài toán không phải mở thêm một kênh bán hàng. Bài toán là giúp thương hiệu chủ động tạo nhu cầu cho toàn hệ thống.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="THE MARKET CHALLENGE"
                title="Một sản phẩm premium không thể được bán như một camera hành trình phổ thông."
                intro="BlackVue nằm ở nhóm giá cao và yêu cầu lắp đặt kỹ thuật trên xe. Khách hàng không chỉ so sánh độ phân giải, mà còn cân nhắc độ ổn định, khả năng giám sát xe, chất lượng lắp đặt, tính thẩm mỹ, dịch vụ sau bán và mức độ an tâm khi bảo vệ một tài sản có giá trị lớn."
                align="left"
              />
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
                <div className="space-y-5 text-[16px] font-medium leading-[1.8] text-brand-secondary">
                  <p>Nếu chỉ truyền thông bằng một danh sách tính năng, sản phẩm rất dễ bị kéo vào cuộc cạnh tranh giá với những dòng camera phổ thông.</p>
                  <p className="border-l-2 border-brand-highlight pl-5 font-heading text-[22px] font-extrabold leading-[1.45] tracking-[-0.02em] text-brand-primary">
                    Thương hiệu cần thay đổi tiêu chí mà khách hàng dùng để so sánh.
                  </p>
                </div>
                <div className="grid gap-x-8 border-y border-brand-border sm:grid-cols-2">
                  {challengePoints.map((point) => (
                    <div key={point} className="border-b border-brand-border py-5 text-[14px] font-semibold leading-[1.6] text-brand-secondary last:border-b-0 sm:last:border-b">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="THE POSITIONING DECISION"
                title="Sản phẩm có thể lắp trên nhiều dòng xe. Nhưng marketing không thể nói với tất cả mọi người theo cùng một cách."
                align="left"
              />

              <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
                <div className="rounded-[20px] border border-orange-200 bg-brand-highlight-soft p-6 sm:p-8 md:p-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-highlight">CAMPAIGN BACKBONE</div>
                  <p className="mt-6 font-heading text-[38px] font-extrabold leading-[1.02] tracking-[-0.045em] text-brand-primary sm:text-[48px] md:text-[58px]">
                    CAMERA HÀNH TRÌNH
                    <span className="mt-3 block text-brand-highlight">CHUYÊN DÀNH CHO XE SANG.</span>
                  </p>
                </div>
                <div className="space-y-5 text-[16px] font-medium leading-[1.8] text-brand-secondary">
                  <p className="font-bold text-brand-primary">Đây không phải giới hạn kỹ thuật của sản phẩm.</p>
                  <p>BlackVue có thể được sử dụng trên nhiều dòng xe. Tuy nhiên, campaign cần một phân khúc ưu tiên đủ rõ để thị trường hiểu thương hiệu thuộc nhóm sản phẩm nào và vì sao mức đầu tư của sản phẩm là hợp lý.</p>
                  <p>“Chuyên dành cho xe sang” xác lập ngữ cảnh ưu tiên phù hợp với mức giá premium, công nghệ, độ ổn định, giá trị bảo vệ xe, thẩm mỹ lắp đặt và trải nghiệm tư vấn, hậu mãi.</p>
                </div>
              </div>

              <div className="mt-12 grid items-start gap-4 lg:grid-cols-[1.45fr_0.55fr]">
                <VisualTile
                  item={evidenceLibrary[0]}
                  onOpen={setActiveImage}
                  className="aspect-[1207/900]"
                  showCaption
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <VisualTile
                    item={evidenceLibrary[1]}
                    onOpen={setActiveImage}
                    className="aspect-[1207/900]"
                  />
                  <VisualTile
                    item={evidenceLibrary[2]}
                    onOpen={setActiveImage}
                    className="aspect-[1199/824]"
                  />
                </div>
              </div>
              <div className="mt-7 flex flex-col gap-2 border-y border-orange-200 py-5 sm:flex-row sm:flex-wrap sm:items-center">
                {['PRODUCT PRICE & TECHNOLOGY', 'PREMIUM VEHICLE CONTEXT', 'AUTHORITY REVIEW', 'MARKET POSITIONING'].map((step, index, flow) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-[0.1em] text-brand-highlight">{step}</span>
                    {index < flow.length - 1 && <ArrowRight className="hidden h-4 w-4 text-orange-300 sm:block" aria-hidden="true" />}
                  </div>
                ))}
              </div>

              <div className="mt-12 grid border-y border-brand-border md:grid-cols-2">
                <div className="py-8 md:pr-10">
                  <h3 className="text-[11px] font-black tracking-[0.18em] text-brand-soft-text">KHÔNG ĐỊNH VỊ RÕ</h3>
                  <div className="mt-6">
                    <BulletList items={['Camera nhiều tính năng.', 'Phù hợp mọi dòng xe.', 'Dễ bị so sánh trực tiếp theo giá.', 'Khách phải tự tìm lý do để trả thêm.']} />
                  </div>
                </div>
                <div className="border-t border-brand-border py-8 md:border-l md:border-t-0 md:pl-10">
                  <h3 className="text-[11px] font-black tracking-[0.18em] text-brand-accent">ĐỊNH VỊ PREMIUM</h3>
                  <div className="mt-6">
                    <BulletList items={['Thiết bị tương xứng với xe giá trị cao.', 'Tập trung vào bảo vệ tài sản và sự an tâm.', 'Nhấn mạnh chất lượng, ổn định và lắp đặt.', 'Thay đổi tiêu chí so sánh từ giá sang giá trị.']} />
                  </div>
                </div>
              </div>
              <p className="mt-8 border-l-2 border-brand-highlight pl-5 font-heading text-[21px] font-extrabold leading-[1.5] tracking-[-0.02em]">
                Định vị không phải mô tả tất cả những ai có thể mua. Định vị là chọn nhóm khách hàng giúp thị trường hiểu giá trị sản phẩm nhanh nhất.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="THE OPERATOR ROLE"
                title="Vai trò không dừng ở việc mua media"
                intro="Campaign cần một người giữ trục định vị và kết nối nhiều nguồn lực: content, influencer, báo chí, cộng đồng xe, paid media, sales, kỹ thuật lắp đặt và mạng lưới đại lý."
                align="left"
              />
              <div className="grid border-y border-brand-border md:grid-cols-2">
                {operatorRoles.map((role, index) => (
                  <article
                    key={role.number}
                    className={`py-7 md:p-8 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t' : ''}`}
                  >
                    <div className="font-heading text-[15px] font-extrabold text-brand-accent">{role.number}</div>
                    <h3 className="mt-4 font-heading text-[22px] font-extrabold tracking-[-0.03em]">{role.title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary">{role.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-6 max-w-5xl text-[13px] font-semibold leading-[1.7] text-brand-soft-text">
                Phú không thực hiện tất cả đầu việc một mình. Vai trò là giữ chiến lược, trực tiếp phụ trách các lớp tăng trưởng quan trọng và phối hợp nhiều bộ phận cùng vận hành trên một logic.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="THE GROWTH MODEL"
                title="Tạo nhu cầu tập trung. Phục vụ bằng mạng lưới phân phối."
                intro="Retail không được xây để thay thế đại lý. Nó giúp thương hiệu chủ động giáo dục thị trường và tạo nhu cầu."
              />
              <div className="rounded-[20px] border border-blue-200 bg-brand-accent-soft p-6 md:p-8">
                <h3 className="text-center text-[11px] font-black tracking-[0.2em] text-brand-accent">
                  CENTRAL DEMAND — DISTRIBUTED FULFILLMENT
                </h3>
                <div className="mt-9">
                  <FlowTimeline steps={centralDemandFlow} />
                </div>
                <div className="mt-8 grid gap-4 border-t border-blue-200 pt-7 md:grid-cols-2">
                  <div className="rounded-[16px] border border-blue-200 bg-white p-5">
                    <div className="text-[10px] font-black tracking-[0.16em] text-brand-accent">TP.HCM</div>
                    <p className="mt-3 text-[14px] font-semibold leading-[1.65] text-brand-secondary">Cơ hội phù hợp được sales và kỹ thuật xử lý trực tiếp, từ tư vấn đến lắp đặt.</p>
                  </div>
                  <div className="rounded-[16px] border border-blue-200 bg-white p-5">
                    <div className="text-[10px] font-black tracking-[0.16em] text-brand-accent">NATIONWIDE</div>
                    <p className="mt-3 text-[14px] font-semibold leading-[1.65] text-brand-secondary">Nhu cầu ngoài khu vực được hỗ trợ và chuyển tiếp về đại lý phù hợp trong mạng lưới.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="CAMPAIGN ECOSYSTEM"
                title="Không phải một vài bài quảng cáo. Đây là một hệ thống truyền thông nhiều lớp."
                intro="Mỗi lớp giải quyết một rào cản khác nhau trong hành trình mua sản phẩm premium: nhận biết, hiểu sản phẩm, tin tưởng, liên hệ, lắp đặt và xác thực bằng trải nghiệm thật."
              />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <VisualTile item={evidenceLibrary[0]} onOpen={setActiveImage} className="aspect-[1207/900]" showCaption />
                </div>
                <div className="lg:col-span-5">
                  <VisualTile item={evidenceLibrary[3]} onOpen={setActiveImage} className="aspect-[1199/824]" showCaption />
                </div>
                {[15, 17, 7, 8, 9, 11].map((itemIndex) => (
                  <div key={evidenceLibrary[itemIndex].label + itemIndex} className="lg:col-span-4">
                    <VisualTile
                      item={evidenceLibrary[itemIndex]}
                      onOpen={setActiveImage}
                      className={`${
                        itemIndex === 8
                          ? 'aspect-[1199/1212]'
                          : itemIndex === 7
                            ? 'aspect-[1199/598]'
                            : 'aspect-[16/10]'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {['POSITIONING', 'AUTHORITY', 'EDUCATION', 'DISTRIBUTION', 'CONVERSION', 'CUSTOMER PROOF'].map((label) => (
                  <span key={label} className="rounded-full border border-blue-200 bg-brand-accent-soft px-3.5 py-2 text-[10px] font-black tracking-[0.12em] text-brand-accent">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="CONTENT UNIVERSE"
                title="Một sản phẩm kỹ thuật cần nhiều góc nội dung để thị trường hiểu đầy đủ giá trị."
                intro="Khách không chỉ mua một chiếc camera. Họ mua khả năng bảo vệ, kiểm soát chiếc xe và sự an tâm tốt hơn trong nhiều tình huống thực tế."
                align="left"
              />
              <div className="grid items-start gap-9 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
                <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <VisualTile item={evidenceLibrary[13]} onOpen={setActiveImage} className="aspect-[1199/883]" />
                  <VisualTile item={evidenceLibrary[14]} onOpen={setActiveImage} className="aspect-[919/900]" />
                </div>
                <div className="divide-y divide-brand-border border-y border-brand-border">
                  <article className="py-6">
                    <h3 className="text-[10px] font-black tracking-[0.15em] text-brand-accent">REMOTE MONITORING</h3>
                    <p className="mt-3 text-[15px] font-medium leading-[1.75] text-brand-secondary">BlackVue Cloud và LTE giúp người dùng theo dõi, quản lý và tiếp cận thông tin từ xa; video biến khả năng kỹ thuật này thành một tình huống có thể hình dung.</p>
                  </article>
                  <article className="py-6">
                    <h3 className="text-[10px] font-black tracking-[0.15em] text-brand-accent">PARKING PROTECTION</h3>
                    <p className="mt-3 text-[15px] font-medium leading-[1.75] text-brand-secondary">Nội dung Parking Mode giải thích cách camera tiếp tục bảo vệ xe khi chủ xe không có mặt.</p>
                  </article>
                </div>
              </div>

              <div className="mt-14 grid items-center gap-9 border-t border-brand-border pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                <div className="divide-y divide-brand-border border-y border-brand-border lg:order-1">
                  <article className="py-6">
                    <h3 className="text-[10px] font-black tracking-[0.15em] text-brand-accent">DRIVING EVIDENCE</h3>
                    <p className="mt-3 text-[15px] font-medium leading-[1.75] text-brand-secondary">Va chạm, hit-and-run và hành trình thực tế chuyển chất lượng ghi hình thành một lớp bằng chứng có giá trị.</p>
                  </article>
                  <article className="py-6">
                    <h3 className="text-[10px] font-black tracking-[0.15em] text-brand-accent">INSTALLATION</h3>
                    <p className="mt-3 text-[15px] font-medium leading-[1.75] text-brand-secondary">Tư vấn theo dòng xe, thẩm mỹ nội thất và điều kiện lắp đặt giúp giảm rủi ro cảm nhận trước khi khách ra quyết định.</p>
                  </article>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:order-2">
                  <VisualTile item={evidenceLibrary[17]} onOpen={setActiveImage} className="aspect-[1199/900]" />
                  <VisualTile item={evidenceLibrary[1]} onOpen={setActiveImage} className="aspect-[1207/900]" />
                </div>
              </div>

              <div className="mt-14 grid gap-8 border-t border-brand-border pt-12 md:grid-cols-2">
                <article>
                  <VisualTile item={evidenceLibrary[11]} onOpen={setActiveImage} className="aspect-[1199/844]" showCaption />
                  <h3 className="mt-6 text-[10px] font-black tracking-[0.15em] text-brand-accent">PRODUCT EDUCATION</h3>
                  <p className="mt-3 text-[15px] font-medium leading-[1.75] text-brand-secondary">Hướng dẫn sử dụng DR750 LTE và giải thích SIM/Cloud giảm rào cản của một sản phẩm nhiều lớp công nghệ.</p>
                </article>
                <article>
                  <VisualTile item={evidenceLibrary[12]} onOpen={setActiveImage} className="aspect-[1199/883]" showCaption />
                  <h3 className="mt-6 text-[10px] font-black tracking-[0.15em] text-brand-accent">MULTIPLE CONTENT ANGLES</h3>
                  <p className="mt-3 text-[15px] font-medium leading-[1.75] text-brand-secondary">Parking Mode, độ bền và review model tiếp nối cho thấy content system không phụ thuộc vào một hook duy nhất.</p>
                </article>
              </div>

              <div className="mt-14 grid items-center gap-9 border-t border-brand-border pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
                <VisualTile item={evidenceLibrary[10]} onOpen={setActiveImage} className="aspect-[1199/824]" showCaption />
                <div>
                  <h3 className="text-[10px] font-black tracking-[0.15em] text-brand-accent">CUSTOMER EXPERIENCE</h3>
                  <p className="mt-4 text-[17px] font-medium leading-[1.8] text-brand-secondary">Hướng dẫn lắp đặt, xe thật và model nâng cấp giúp thị trường nhìn thấy toàn bộ vòng đời trải nghiệm — từ tìm hiểu đến sử dụng sau lắp.</p>
                  <p className="mt-5 border-l-2 border-brand-highlight pl-5 font-heading text-[20px] font-extrabold leading-[1.5] tracking-[-0.02em]">
                    Tính năng trở nên có giá trị khi được đặt vào đúng tình huống của chủ xe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-brand-primary py-16 text-white md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
                <Eyebrow>INFLUENCE & TRUST STACK</Eyebrow>
                <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[38px] md:text-[48px]">
                  Uy tín không được tạo ra bởi một logo KOL.
                  <span className="mt-2 block text-slate-300">Nó được tích lũy qua nhiều lớp bằng chứng.</span>
                </h2>
              </div>

              <article className="border-y border-white/15 py-10">
                <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:gap-12">
                  <div>
                    <div className="font-heading text-[22px] font-extrabold text-orange-400">01</div>
                    <h3 className="mt-3 font-heading text-[28px] font-extrabold tracking-[-0.03em]">Hùng Lâm / XE HAY</h3>
                    <p className="mt-4 text-[15px] font-medium leading-[1.75] text-slate-300">
                      Một partnership influencer quy mô lớn được triển khai để đưa BlackVue vào đúng cuộc trò chuyện của người sở hữu và quan tâm xe cao cấp.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <VisualTile item={evidenceLibrary[2]} onOpen={setActiveImage} className="aspect-[1199/824]" dark showCaption />
                    </div>
                    <VisualTile item={evidenceLibrary[3]} onOpen={setActiveImage} className="aspect-[1199/824]" dark />
                    <VisualTile item={evidenceLibrary[4]} onOpen={setActiveImage} className="aspect-[2144/900]" dark />
                  </div>
                </div>
              </article>

              <article className="grid gap-8 border-b border-white/15 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
                <div className="grid gap-4 sm:grid-cols-2">
                  <VisualTile item={evidenceLibrary[5]} onOpen={setActiveImage} className="aspect-[5/3]" dark />
                  <VisualTile item={evidenceLibrary[6]} onOpen={setActiveImage} className="aspect-[5/3]" dark />
                  <div className="sm:col-span-2">
                    <VisualTile item={evidenceLibrary[11]} onOpen={setActiveImage} className="aspect-[1199/844]" dark />
                  </div>
                </div>
                <div>
                  <div className="font-heading text-[22px] font-extrabold text-orange-400">02</div>
                  <h3 className="mt-3 font-heading text-[28px] font-extrabold tracking-[-0.03em]">Expert & KOC Reviews</h3>
                  <p className="mt-4 text-[15px] font-medium leading-[1.75] text-slate-300">
                    Xế Cưng, Auto Sài Gòn và các review tìm kiếm mở rộng nhiều góc nhìn, nhiều model và nhiều hành trình discovery. Các asset DR900X và model về sau được trình bày như sự tiếp nối của hệ thống, không phải cùng đợt launch DR750 LTE.
                  </p>
                </div>
              </article>

              <article className="grid items-center gap-8 border-b border-white/15 py-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12">
                <div>
                  <div className="font-heading text-[22px] font-extrabold text-orange-400">03</div>
                  <h3 className="mt-3 font-heading text-[28px] font-extrabold tracking-[-0.03em]">PR Coverage</h3>
                  <p className="mt-4 text-[15px] font-medium leading-[1.75] text-slate-300">Báo chí củng cố thông tin, tạo search footprint và giảm cảm giác rủi ro khi khách tìm hiểu một sản phẩm giá trị cao.</p>
                </div>
                <VisualTile item={evidenceLibrary[7]} onOpen={setActiveImage} className="aspect-[1199/598]" dark showCaption />
              </article>

              <article className="grid items-start gap-8 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                <div>
                  <div className="font-heading text-[22px] font-extrabold text-orange-400">04</div>
                  <h3 className="mt-3 font-heading text-[28px] font-extrabold tracking-[-0.03em]">Customer Proof</h3>
                  <p className="mt-4 text-[15px] font-medium leading-[1.75] text-slate-300">Khách hàng, xe thật và tình huống lắp đặt chuyển lời hứa thương hiệu thành bằng chứng khó sao chép.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <VisualTile item={evidenceLibrary[9]} onOpen={setActiveImage} className="aspect-[1199/824]" dark />
                  <VisualTile item={evidenceLibrary[1]} onOpen={setActiveImage} className="aspect-[1207/900]" dark />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-end gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
                <div>
                  <Eyebrow>PREMIUM COMMUNITY</Eyebrow>
                  <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[46px]">
                    Định vị premium mạnh nhất khi sản phẩm xuất hiện trong đúng bối cảnh.
                  </h2>
                </div>
                <div className="space-y-4 text-[16px] font-medium leading-[1.75] text-brand-secondary">
                  <p>BlackVue được đưa vào những hoạt động và cộng đồng phù hợp với nhóm khách hàng mục tiêu.</p>
                  <p>Sự xuất hiện trong bối cảnh xe cao cấp giúp người xem cảm nhận được vị trí của thương hiệu trước cả khi đọc toàn bộ thông số kỹ thuật.</p>
                  <p className="font-semibold text-brand-primary">BlackVue đồng hành trong một hoạt động cộng đồng xe cao cấp; không hàm ý một hãng xe chính thức bảo chứng sản phẩm.</p>
                </div>
              </div>

              <div className="mx-auto mt-12 max-w-5xl">
                <VisualTile item={evidenceLibrary[8]} onOpen={setActiveImage} className="aspect-[1199/1212]" showCaption />
              </div>
              <p className="mx-auto mt-8 max-w-4xl border-y border-orange-200 py-6 text-center font-heading text-[22px] font-extrabold leading-[1.5] tracking-[-0.02em] md:text-[28px]">
                Premium Product → Premium Context → Higher Perceived Trust
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <VisualTile item={evidenceLibrary[0]} onOpen={setActiveImage} className="aspect-[1207/900]" />
                <VisualTile item={evidenceLibrary[1]} onOpen={setActiveImage} className="aspect-[1207/900]" />
                <VisualTile item={evidenceLibrary[21]} onOpen={setActiveImage} className="aspect-[1174/900]" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="PAID DISTRIBUTION"
                title="Một vài creative tạo chuyển đổi. Một hệ thống creative mới giúp campaign vận hành liên tục."
                intro="Facebook được tổ chức thành nhiều lớp acquisition, education và remarketing; mỗi lớp giải quyết một nhiệm vụ khác nhau trong cùng hành trình mua."
              />
              <div className="grid border-y border-brand-border md:grid-cols-3">
                {[
                  ['A', 'ACQUISITION CREATIVE', 'Messenger Ads, product hooks và premium vehicle context đưa người dùng từ nhận biết vào cuộc trò chuyện tư vấn.'],
                  ['B', 'EDUCATION & PROOF', 'Product demo, influencer, customer và use case tiếp tục giải thích vì sao mức đầu tư premium là hợp lý.'],
                  ['C', 'REMARKETING LIBRARY', 'Người đã xem, tương tác hoặc tìm hiểu được tiếp cận lại bằng nhiều lớp proof khác nhau.'],
                ].map(([number, title, body], index) => (
                  <article key={number} className={`py-7 md:p-8 ${index > 0 ? 'border-t border-brand-border md:border-l md:border-t-0' : ''}`}>
                    <span className="font-heading text-[20px] font-extrabold text-brand-accent">{number}</span>
                    <h3 className="mt-4 text-[10px] font-black tracking-[0.14em] text-brand-primary">{title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary">{body}</p>
                  </article>
                ))}
              </div>

              <div className="-mx-5 mt-12 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-12 lg:overflow-visible lg:px-0 lg:pb-0">
                {[15, 16, 17, 18, 19, 20, 21].map((itemIndex, index) => (
                  <div
                    key={itemIndex}
                    className={`min-w-[88%] snap-start sm:min-w-[70%] lg:min-w-0 ${
                      index < 3 ? 'lg:col-span-4' : 'lg:col-span-3'
                    }`}
                  >
                    <VisualTile
                      item={evidenceLibrary[itemIndex]}
                      onOpen={setActiveImage}
                      className={`${
                        itemIndex === 16 || itemIndex === 17
                          ? 'aspect-[1199/900]'
                          : itemIndex === 15 || itemIndex === 21
                            ? 'aspect-[1174/900]'
                            : 'aspect-[1199/883]'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[13px] font-semibold leading-[1.7] text-brand-soft-text">
                Các ảnh phản ánh nhiều lớp creative và remarketing được triển khai qua các giai đoạn khác nhau của hệ thống BlackVue. {evolutionCaption}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="YOUTUBE ENGINE"
                title="Search bắt nhu cầu. Video dài giúp khách đủ tin để liên hệ."
                intro="YouTube không chỉ là một kênh view. Nó là lớp discovery, education, trust và conversion support có thể tiếp tục sống sau từng đợt paid media."
              />
              <div className="grid border-y border-brand-border md:grid-cols-2 lg:grid-cols-4">
                {[
                  ['DISCOVERY', 'Search query, high-view content và influencer giúp khách chủ động gặp thương hiệu.'],
                  ['EDUCATION', 'Cloud, LTE, Parking Mode, độ bền và hướng dẫn sử dụng giải thích sản phẩm kỹ thuật.'],
                  ['TRUST', 'KOL, expert review và customer feedback tạo nhiều lớp kiểm chứng.'],
                  ['CONVERSION SUPPORT', 'Video tiếp tục được dùng trong ads, remarketing và sales follow-up.'],
                ].map(([title, body], index) => (
                  <article key={title} className={`py-6 md:p-7 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''}`}>
                    <h3 className="text-[10px] font-black tracking-[0.14em] text-brand-accent">{title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary">{body}</p>
                  </article>
                ))}
              </div>

              <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                <VisualTile item={evidenceLibrary[14]} onOpen={setActiveImage} className="aspect-[919/900]" showCaption />
                <div className="grid gap-4 sm:grid-cols-2">
                  <VisualTile item={evidenceLibrary[13]} onOpen={setActiveImage} className="aspect-[1199/883]" />
                  <VisualTile item={evidenceLibrary[3]} onOpen={setActiveImage} className="aspect-[1199/824]" />
                  <VisualTile item={evidenceLibrary[5]} onOpen={setActiveImage} className="aspect-[5/3]" />
                  <VisualTile item={evidenceLibrary[6]} onOpen={setActiveImage} className="aspect-[5/3]" />
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {[12, 10, 9, 1, 11].map((itemIndex) => (
                  <div key={itemIndex}>
                    <VisualTile
                      item={evidenceLibrary[itemIndex]}
                      onOpen={setActiveImage}
                      className="aspect-[16/10]"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[12px] font-semibold leading-[1.65] text-brand-soft-text">
                Lượt xem được ghi nhận công khai tại từng thời điểm chụp và có thể tiếp tục thay đổi. Lượt xem không đồng nghĩa với conversion và không được quy toàn bộ cho paid media.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="CONTENT COMPOUNDING"
                title="Một asset tốt không chỉ chạy một lần."
                intro="Hợp tác influencer không chỉ tạo một bài đăng. Một nội dung authority có thể tiếp tục được cắt ngắn, phân phối bằng paid media, dùng trong remarketing, gửi lại trong quá trình sales tư vấn và tiếp tục xuất hiện khi khách chủ động tìm kiếm."
              />
              <ol className="border-l-2 border-orange-200 pl-6 md:grid md:grid-cols-2 md:border-l-0 md:pl-0 lg:grid-cols-4">
                {contentCompoundingFlow.map((step, index) => {
                  const item = evidenceLibrary[[2, 3, 4, 15, 19, 17, 1, 14][index]];
                  return (
                    <li
                      key={step}
                      className={`relative pb-9 md:border-t md:border-orange-200 md:p-5 ${
                        index % 2 === 1 ? 'md:border-l md:border-brand-border' : ''
                      } ${index % 4 !== 0 ? 'lg:border-l lg:border-brand-border' : 'lg:border-l-0'}`}
                    >
                      <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-brand-bg bg-brand-highlight md:-top-[8px] md:left-5" aria-hidden="true" />
                      <VisualTile item={item} onOpen={setActiveImage} className="aspect-[16/10]" />
                      <div className="mt-4 text-[10px] font-black leading-[1.45] tracking-[0.1em] text-brand-highlight">{step}</div>
                      {index < contentCompoundingFlow.length - 1 && (
                        <ArrowRight className="absolute -right-2 top-1/2 hidden h-4 w-4 text-orange-300 lg:block" aria-hidden="true" />
                      )}
                    </li>
                  );
                })}
              </ol>
              <p className="mt-8 text-[15px] font-medium leading-[1.75] text-brand-secondary">
                Cùng một khoản đầu tư nội dung có thể tiếp tục tạo giá trị qua nhiều năm nếu được phân phối, cắt lại và đưa vào đúng điểm chạm.
              </p>
              <p className="mt-8 border-l-2 border-brand-highlight pl-5 font-heading text-[21px] font-extrabold leading-[1.5] tracking-[-0.02em]">
                Ngân sách không chỉ mua một lần xuất hiện. Nó xây một tài sản có thể tiếp tục sống qua nhiều điểm chạm.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="CONVERSION PATH"
                title="Content tạo niềm tin. Cuộc tư vấn và trải nghiệm lắp đặt giúp khách ra quyết định."
                intro="Với một sản phẩm kỹ thuật, conversion không kết thúc ở việc khách click hoặc gửi tin nhắn."
              />
              <FlowTimeline steps={conversionFlow} />
              <p className="mx-auto mt-9 max-w-4xl text-center text-[15px] font-medium leading-[1.75] text-brand-secondary">
                Sales cần hiểu dòng xe, nhu cầu giám sát, parking mode, Cloud/LTE, yêu cầu thẩm mỹ và phạm vi hỗ trợ trước khi đề xuất giải pháp phù hợp.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="SALES × INSTALLATION"
                title="Chuyển đổi không dừng ở nút Messenger."
                align="left"
              />
              <ol className="grid border-y border-brand-border md:grid-cols-2 lg:grid-cols-5">
                {salesSteps.map(([number, title, body], index) => (
                  <li
                    key={number}
                    className={`py-6 md:p-7 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''}`}
                  >
                    <span className="font-heading text-[22px] font-extrabold text-brand-accent">{number}</span>
                    <h3 className="mt-4 text-[10px] font-black tracking-[0.14em] text-brand-primary">{title}</h3>
                    <p className="mt-3 text-[13px] font-medium leading-[1.7] text-brand-secondary">{body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="CUSTOMER PROOF LOOP"
                title="Xe thật, khách thật và lắp đặt thật là lớp bằng chứng khó sao chép nhất."
                intro="Với ngành phụ kiện ô tô, mỗi chiếc xe đã lắp đặt là một use case thực tế. Nó tạo thêm hình ảnh, video, kinh nghiệm kỹ thuật và bằng chứng giúp khách hàng tiếp theo giảm do dự."
              />
              <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
                <VisualTile item={evidenceLibrary[9]} onOpen={setActiveImage} className="aspect-[1199/824]" showCaption />
                <FlowTimeline steps={customerProofFlow} />
              </div>
              <div className="mt-12 grid gap-4 border-t border-brand-border pt-10 sm:grid-cols-2">
                <VisualTile item={evidenceLibrary[1]} onOpen={setActiveImage} className="aspect-[1207/900]" />
                <VisualTile item={evidenceLibrary[10]} onOpen={setActiveImage} className="aspect-[1199/824]" />
                <VisualTile item={evidenceLibrary[16]} onOpen={setActiveImage} className="aspect-[1199/900]" />
                <VisualTile item={evidenceLibrary[18]} onOpen={setActiveImage} className="aspect-[1199/900]" />
              </div>
              <div className="mt-10 grid items-center gap-8 border-t border-brand-border pt-10 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <h3 className="font-heading text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em]">Proof quay lại nuôi acquisition và remarketing.</h3>
                  <p className="mt-4 text-[15px] font-medium leading-[1.75] text-brand-secondary">Xe Mercedes, khách cũ, lắp đặt và use case thực tế tạo thêm nội dung cho organic, paid media, sales follow-up và những vòng khách hàng tiếp theo.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <VisualTile item={evidenceLibrary[11]} onOpen={setActiveImage} className="aspect-[1199/844]" />
                  <VisualTile item={evidenceLibrary[21]} onOpen={setActiveImage} className="aspect-[1174/900]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="THE COMPOUNDING LOOP"
                title="Online tạo nhu cầu. Offline tạo proof. Proof lại quay về nuôi Online."
                intro="Hệ thống không quay lại điểm xuất phát sau mỗi campaign. Mỗi vòng vận hành để lại thêm nội dung, customer proof, search footprint, audience, kinh nghiệm tư vấn và tài sản hỗ trợ đại lý."
              />
              <FlowTimeline steps={compoundingLoop} />
              <div className="mt-10 grid gap-7 border-t border-brand-border pt-9 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <h3 className="text-[10px] font-black tracking-[0.16em] text-brand-accent">DEALER BRANCH</h3>
                  <p className="mt-3 font-heading text-[19px] font-extrabold leading-[1.5] tracking-[-0.02em]">
                    LEAD OUTSIDE HCMC → LOCAL DEALER → INSTALLATION → MARKET COVERAGE
                  </p>
                </div>
                <div className="flex flex-wrap content-start gap-2.5" aria-label="Tài sản tích lũy sau mỗi vòng vận hành">
                  {compoundingAssets.map((asset) => (
                    <span key={asset} className="rounded-full border border-blue-200 bg-brand-accent-soft px-3.5 py-2 text-[12px] font-bold text-brand-accent">
                      {asset}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="SYSTEM IMPACT"
                title="Marketing không chỉ tạo đơn bán lẻ. Nó tạo lực kéo cho toàn hệ thống."
              />
              <div className="grid border-y border-brand-border md:grid-cols-2">
                {impactLayers.map((layer, index) => (
                  <article
                    key={layer.number}
                    className={`py-7 md:p-8 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t' : ''}`}
                  >
                    <div className="font-heading text-[25px] font-extrabold tracking-[-0.04em] text-brand-accent">{layer.number}</div>
                    <h3 className="mt-3 text-[11px] font-black tracking-[0.17em] text-brand-accent">{layer.label}</h3>
                    <div className="mt-6">
                      <BulletList items={layer.items} />
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8 rounded-[20px] border border-brand-border bg-brand-bg p-6 md:p-8">
                <p className="text-[13px] font-semibold leading-[1.7] text-brand-secondary">
                  Các kết quả được trình bày theo khoảng quy mô nhằm bảo vệ dữ liệu thương mại và thông tin vận hành của doanh nghiệp.
                </p>
                <p className="mt-4 text-[13px] font-semibold leading-[1.7] text-brand-secondary">
                  Kết quả đến từ toàn bộ hệ thống gồm định vị, content, influencer, PR, paid media, website, sales, lắp đặt và mạng lưới đại lý; không quy toàn bộ doanh thu cho riêng một KOL, một video hoặc một nền tảng quảng cáo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="CAMPAIGN EVIDENCE LIBRARY"
                title="Một phần tài sản được tích lũy trong quá trình vận hành campaign."
                intro="Thư viện dưới đây giữ toàn bộ bằng chứng BlackVue hợp lệ trong repository ở trạng thái hiển thị và có thể mở lớn. Mỗi asset được phân loại theo vai trò trực tiếp trong DR750 LTE hoặc sự tiếp nối của hệ thống ở các dòng sản phẩm sau."
              />
              <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
                {evidenceLibrary.map((item, itemIndex) => (
                  <div
                    key={item.image.src}
                    className={`mb-7 break-inside-avoid ${itemIndex % 7 === 0 ? 'lg:mb-10' : ''}`}
                  >
                    <VisualTile
                      item={item}
                      onOpen={setActiveImage}
                      className={evidenceAspectClasses[itemIndex]}
                      showCaption
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Eyebrow>THE LESSON</Eyebrow>
              <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[38px] md:text-[48px]">
                Định vị không phải mô tả tất cả những ai có thể mua sản phẩm.
              </h2>
              <blockquote className="my-10 border-y border-blue-200 py-8 font-heading text-[25px] font-extrabold leading-[1.35] tracking-[-0.025em] text-brand-primary md:text-[34px]">
                “Định vị là chọn nhóm khách hàng giúp thị trường hiểu giá trị sản phẩm nhanh nhất.”
              </blockquote>
              <div className="space-y-5 text-left text-[16px] font-medium leading-[1.75] text-brand-secondary">
                <p>BlackVue có thể được lắp trên nhiều dòng xe.</p>
                <p>Nhưng bằng cách bắt đầu từ phân khúc xe sang, campaign tạo được một ngữ cảnh đủ mạnh để mức giá, công nghệ, trải nghiệm lắp đặt và giá trị bảo vệ phương tiện trở nên hợp lý.</p>
                <p>Điểm khác biệt không nằm ở một quảng cáo riêng lẻ. Nó nằm ở việc toàn bộ content, influencer, paid media, sales, kỹ thuật và đại lý cùng vận hành trên một định vị rõ ràng.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[24px] border border-brand-border bg-brand-bg p-6 text-center shadow-brand-soft sm:p-8 md:p-12">
              <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[48px]">
                Sản phẩm premium có thể không thiếu khách.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-[18px] font-bold leading-[1.6] text-brand-secondary md:text-[21px]">
                Thị trường có thể chưa được đặt vào đúng ngữ cảnh để hiểu giá trị.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/Growth-System-Framework"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4 motion-reduce:transform-none"
                >
                  Xem Growth System Framework
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={navCta.href}
                  data-cta="zalo-placeholder"
                  data-location="blackvue-case-study-detail"
                  className="inline-flex min-h-12 items-center justify-center rounded-brand-button border border-brand-border bg-white px-6 py-3.5 text-[15px] font-bold text-brand-primary transition hover:border-blue-300 hover:bg-brand-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
                >
                  Nhắn Zalo trao đổi với Phú
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {activeImage && <ImageLightbox item={activeImage} onClose={() => setActiveImage(null)} />}
    </div>
  );
}
