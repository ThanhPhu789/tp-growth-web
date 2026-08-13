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
import gonxReviewPrimary from '../assets/images/Case campaign camera hành trình GNET G-ON X - KOL Review Sản phẩm 1.jpg';
import gonxReviewSecondary from '../assets/images/Case campaign camera hành trình GNET G-ON X - KOL Review Sản phẩm 2.jpg';
import gonxCampaignOverview from '../assets/images/Case campaign camera hành trình GNET G-ON X - KOL Review Sản phẩm.jpg';
import gonxPrSearch from '../assets/images/Gnet G-ON X PR Campaign → Search Visibility.jpg';
import gonxCommunity from '../assets/images/Gnet G-ON X review group.jpg';
import gonxCustomerShorts from '../assets/images/case-study-youtube-shorts-customer-testimonial-gonx.jpg';
import gonxPaidContentWall01 from '../assets/case-studies/gnet-gonx/gonx-paid-content-wall-01.jpg';
import gonxPaidContentWall02 from '../assets/case-studies/gnet-gonx/gonx-paid-content-wall-02.jpg';
import gonxPaidContentWall03 from '../assets/case-studies/gnet-gonx/gonx-paid-content-wall-03.jpg';
import gonxPaidContentWall04 from '../assets/case-studies/gnet-gonx/gonx-paid-content-wall-04.jpg';
import msportEventWide from '../assets/images/brand-activation-outdoor-event-team.jpg';
import msportStageTeam from '../assets/images/brand-event-stage-team-photo.jpg';
import msportEventInteraction from '../assets/images/community-workshop-event-operation-team.jpg';
import msportRetail from '../assets/images/electronics-retail-customer-experience-fieldwork.jpg';
import msportContentProduction from '../assets/images/event-production-team-video-operatio.jpg';
import msportEventTeam from '../assets/images/event-operation-team-photo.jpg';
import msportAward from '../assets/images/marketing-industry-awards-event.jpg';
import msportVideoEditing from '../assets/images/marketing-video-team-training.jpg';
import msportPhuEvent from '../assets/images/msport-event-product-presentation.jpg';
import msportBooth from '../assets/images/msport-product-exhibition-booth.jpg';
import msportNight from '../assets/images/night-event-brand-activation.jpg';
import msportSeccBooth from '../assets/images/outdoor-brand-booth-event-operation.jpg';

type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

type EvidenceGroup =
  | 'G-ON X CAMPAIGN CORE'
  | 'MSPORT SECC EVENT'
  | 'MSPORT BUSINESS CONTEXT';

type LightboxItem = {
  image: ImageAsset;
  alt: string;
  label: string;
  caption: string;
};

type EvidenceItem = LightboxItem & {
  group: EvidenceGroup;
};

const images = {
  campaignOverview: { src: gonxCampaignOverview, width: 1207, height: 900 },
  reviewPrimary: { src: gonxReviewPrimary, width: 1207, height: 900 },
  reviewSecondary: { src: gonxReviewSecondary, width: 1199, height: 1170 },
  prSearch: { src: gonxPrSearch, width: 1199, height: 1136 },
  community: { src: gonxCommunity, width: 1199, height: 828 },
  customerShorts: { src: gonxCustomerShorts, width: 1489, height: 900 },
  paidContentWall01: { src: gonxPaidContentWall01, width: 1199, height: 756 },
  paidContentWall02: { src: gonxPaidContentWall02, width: 1199, height: 787 },
  paidContentWall03: { src: gonxPaidContentWall03, width: 1199, height: 864 },
  paidContentWall04: { src: gonxPaidContentWall04, width: 1199, height: 767 },
  eventWide: { src: msportEventWide, width: 1920, height: 1080 },
  stageTeam: { src: msportStageTeam, width: 2048, height: 1366 },
  eventInteraction: { src: msportEventInteraction, width: 2048, height: 1366 },
  retail: { src: msportRetail, width: 1600, height: 1067 },
  contentProduction: { src: msportContentProduction, width: 2048, height: 1366 },
  eventTeam: { src: msportEventTeam, width: 2048, height: 1366 },
  award: { src: msportAward, width: 2048, height: 1366 },
  videoEditing: { src: msportVideoEditing, width: 1536, height: 2048 },
  phuEvent: { src: msportPhuEvent, width: 640, height: 960 },
  booth: { src: msportBooth, width: 2048, height: 1536 },
  night: { src: msportNight, width: 2048, height: 1536 },
  seccBooth: { src: msportSeccBooth, width: 2048, height: 1536 },
};

const evidenceLibrary: EvidenceItem[] = [
  {
    image: images.campaignOverview,
    alt: 'Campaign ra mắt camera hành trình GNET G-ON X với nhiều nội dung review',
    label: 'Product Launch',
    caption: 'Nội dung sản phẩm và partner review tạo những điểm chạm đầu tiên để thị trường nhận biết G-ON X.',
    group: 'G-ON X CAMPAIGN CORE',
  },
  {
    image: images.reviewPrimary,
    alt: 'Kết quả tìm kiếm nhiều nội dung review GNET G-ON X trên YouTube',
    label: 'Primary Review',
    caption: 'Các kênh ô tô giúp sản phẩm xuất hiện trong nhiều hành trình tìm kiếm và mức độ quan tâm.',
    group: 'G-ON X CAMPAIGN CORE',
  },
  {
    image: images.reviewSecondary,
    alt: 'Hệ thống creator và reviewer giới thiệu GNET G-ON X',
    label: 'Creator Review',
    caption: 'Nhiều creator mở rộng cách giải thích sản phẩm thay vì phụ thuộc vào một tiếng nói duy nhất.',
    group: 'G-ON X CAMPAIGN CORE',
  },
  {
    image: images.prSearch,
    alt: 'Kết quả tìm kiếm Google sau hoạt động PR cho GNET G-ON X',
    label: 'Search Visibility',
    caption: 'PR tạo nguồn index để người mua có thể tìm lại và kiểm chứng sản phẩm qua nhiều kết quả.',
    group: 'G-ON X CAMPAIGN CORE',
  },
  {
    image: images.community,
    alt: 'Nội dung admin group review camera hành trình GNET G-ON X',
    label: 'Community Validation',
    caption: 'Nội dung từ admin và group đưa sản phẩm vào cuộc trò chuyện nơi người dùng chủ động hỏi ý kiến.',
    group: 'G-ON X CAMPAIGN CORE',
  },
  {
    image: images.customerShorts,
    alt: 'Các video ngắn về trải nghiệm thực tế với camera hành trình GNET G-ON X',
    label: 'Customer Proof',
    caption: 'Video tình huống thật bổ sung lớp bằng chứng sau nội dung giới thiệu và review.',
    group: 'G-ON X CAMPAIGN CORE',
  },
  {
    image: images.seccBooth,
    alt: 'Gian hàng Msport tại khu vực sự kiện ở SECC',
    label: 'Msport at SECC',
    caption: 'Không gian booth kết nối nhận biết digital với sản phẩm, đội ngũ và trải nghiệm trực tiếp.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.phuEvent,
    alt: 'Phú tham gia hoạt động Msport tại sự kiện ở SECC',
    label: 'Operator Presence',
    caption: 'Sự hiện diện của người phụ trách chứng minh campaign được triển khai trực tiếp, không chỉ điều phối từ xa.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.booth,
    alt: 'Gian hàng Msport với khách tham quan và sản phẩm trưng bày',
    label: 'Product Display',
    caption: 'Booth tạo điều kiện để khách nhìn thấy hệ sinh thái sản phẩm trong bối cảnh thực tế.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.eventWide,
    alt: 'Toàn cảnh hoạt động thương hiệu Msport tại sự kiện ô tô',
    label: 'Market Exposure',
    caption: 'Không gian đông người mở rộng hiện diện thương hiệu ngoài các điểm chạm online.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.stageTeam,
    alt: 'Đội ngũ Msport tại sân khấu sự kiện ngành ô tô',
    label: 'Team Execution',
    caption: 'Đội ngũ thật là lớp hạ tầng biến kế hoạch truyền thông thành hoạt động ngoài thị trường.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.eventInteraction,
    alt: 'Hoạt động tương tác với khách tham quan tại khu vực Msport',
    label: 'Community Interaction',
    caption: 'Các cuộc trao đổi trực tiếp tạo thêm câu hỏi, phản hồi và insight cho content lẫn sales.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.eventTeam,
    alt: 'Đội ngũ Msport vận hành gian hàng tại sự kiện',
    label: 'Event Operation',
    caption: 'Vận hành tại chỗ nối product display, con người và trải nghiệm thành một điểm chạm thống nhất.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.night,
    alt: 'Nhận diện Msport trong hoạt động sự kiện buổi tối',
    label: 'Brand Activation',
    caption: 'Hoạt động tiếp tục tạo footage và nhận diện có thể tái sử dụng trong các vòng nội dung sau.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.award,
    alt: 'Đội ngũ Msport tại hoạt động ghi nhận trong sự kiện ngành ô tô',
    label: 'Event Proof',
    caption: 'Hình ảnh đội ngũ và hoạt động ngành bổ sung bằng chứng về sự hiện diện ngoài đời thật.',
    group: 'MSPORT SECC EVENT',
  },
  {
    image: images.retail,
    alt: 'Không gian bán hàng phụ kiện ô tô trong hệ sinh thái triển khai Msport',
    label: 'Distribution Context',
    caption: 'Hạ tầng bán hàng là nơi tài sản review, Search và product content tiếp tục hỗ trợ tư vấn.',
    group: 'MSPORT BUSINESS CONTEXT',
  },
  {
    image: images.contentProduction,
    alt: 'Phú và đội ngũ thực hiện nội dung video trong bối cảnh ô tô',
    label: 'Content Production',
    caption: 'Khả năng sản xuất nội dung giúp campaign liên tục chuyển sản phẩm và trải nghiệm thành asset.',
    group: 'MSPORT BUSINESS CONTEXT',
  },
  {
    image: images.videoEditing,
    alt: 'Đội ngũ Msport biên tập nội dung video và website',
    label: 'Execution Layer',
    caption: 'Đội ngũ nội dung và hạ tầng owned media giữ cho tài sản launch tiếp tục được phân phối.',
    group: 'MSPORT BUSINESS CONTEXT',
  },
];

const launchSteps = [
  'Product Story',
  'KOL / Creator Review',
  'PR Coverage',
  'Google Search',
  'Community Validation',
  'Event Experience',
  'Paid Acquisition',
  'Remarketing',
  'Sales / Distribution',
  'Customer Proof',
  'New Content',
];

const eventSteps = [
  { title: 'Event Presence', image: images.seccBooth },
  { title: 'Photos & Videos', image: images.contentProduction },
  { title: 'Social Content', image: images.eventWide },
  { title: 'Paid Creative', image: images.stageTeam },
  { title: 'Remarketing', image: images.booth },
  { title: 'Sales Follow-up', image: images.phuEvent },
  { title: 'Community Proof', image: images.eventInteraction },
  { title: 'Next Campaign', image: images.night },
];

const paidMediaAssets: LightboxItem[] = [
  {
    image: images.paidContentWall01,
    alt: 'Hệ thống Facebook Ads và remarketing cho campaign GNET G-ON X',
    label: 'Creative System 01',
    caption: 'Thư viện video cho thấy nhiều product angle, người thật, xe thật và tình huống sử dụng được chuẩn bị cho phân phối.',
  },
  {
    image: images.paidContentWall02,
    alt: 'Thư viện creative quảng cáo gồm sản phẩm, người dùng và tình huống thực tế của GNET G-ON X',
    label: 'Creative System 02',
    caption: 'Nhiều định dạng nội dung giúp campaign không phụ thuộc vào một mẫu quảng cáo duy nhất.',
  },
  {
    image: images.paidContentWall03,
    alt: 'Nội dung reviewer và người thật được tái sử dụng trong Facebook Ads cho GNET G-ON X',
    label: 'Creative System 03',
    caption: 'Reviewer, nhân vật thật và bối cảnh trong xe bổ sung các lớp giải thích và bằng chứng khác nhau.',
  },
  {
    image: images.paidContentWall04,
    alt: 'Hệ thống creative remarketing cho sản phẩm camera hành trình GNET G-ON X',
    label: 'Creative System 04',
    caption: 'Product content, người dùng và tình huống thực tế tạo thành một proof library có thể tiếp tục phân phối.',
  },
];

const paidMediaLayouts = [
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
];

const paidMediaAspectRatios = [
  'aspect-[1199/756]',
  'aspect-[1199/787]',
  'aspect-[1199/864]',
  'aspect-[1199/767]',
];

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[10px] font-black uppercase tracking-[0.28em] md:text-[11px] ${dark ? 'text-orange-400' : 'text-brand-accent'}`}>
      {children}
    </p>
  );
}

function SectionHeading({
  label,
  title,
  children,
  dark = false,
}: {
  label: string;
  title: string;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <Eyebrow dark={dark}>{label}</Eyebrow>
      <h2 className={`mt-5 font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[38px] md:text-[48px] ${dark ? 'text-white' : 'text-brand-primary'}`}>
        {title}
      </h2>
      {children ? (
        <div className={`mt-6 max-w-3xl space-y-4 text-[16px] font-medium leading-[1.8] md:text-[18px] ${dark ? 'text-slate-300' : 'text-brand-secondary'}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

function VisualTile({
  image,
  alt,
  caption,
  className = '',
  imageClassName = '',
  priority = false,
  onOpen,
}: {
  image: ImageAsset;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  onOpen?: () => void;
}) {
  const imageElement = (
    <img
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={`h-full w-full object-contain ${imageClassName}`}
    />
  );

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-brand-soft">
        {onOpen ? (
          <button
            type="button"
            onClick={onOpen}
            className="block h-full w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent"
            aria-label={`Mở ảnh lớn: ${alt}`}
          >
            {imageElement}
          </button>
        ) : imageElement}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[14px] font-medium leading-[1.65] text-brand-soft-text">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Flow({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ol className="grid gap-0 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item, index) => (
        <li
          key={item}
          className={`relative border-l-2 px-5 py-5 md:border-l-0 md:border-t-2 ${dark ? 'border-blue-500/60' : 'border-blue-200'}`}
        >
          <span className={`text-[10px] font-black tracking-[0.18em] ${dark ? 'text-blue-300' : 'text-brand-accent'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className={`mt-2 text-[13px] font-extrabold uppercase leading-[1.45] tracking-[0.08em] ${dark ? 'text-white' : 'text-brand-primary'}`}>
            {item}
          </p>
          {index < items.length - 1 ? (
            <ChevronRight
              className={`absolute -right-2 top-5 hidden h-4 w-4 md:block ${dark ? 'text-blue-300' : 'text-brand-highlight'}`}
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function ImageLightbox({
  item,
  onClose,
}: {
  item: LightboxItem | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Xem ảnh: ${item.label}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-full w-full max-w-6xl flex-col">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="mb-3 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          aria-label="Đóng ảnh lớn"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="min-h-0 overflow-auto rounded-[20px] bg-white p-2 shadow-2xl md:p-4">
          <img
            src={item.image.src}
            alt={item.alt}
            width={item.image.width}
            height={item.image.height}
            className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>
        <div className="mt-4 text-center text-[14px] font-medium leading-[1.6] text-slate-200">
          <span className="font-extrabold text-white">{item.label}</span>
          {' — '}
          {item.caption}
        </div>
      </div>
    </div>
  );
}

export default function GnetGonxCaseStudyPage() {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const description = 'Case study ra mắt GNET G-ON X trong hệ sinh thái Msport: KOL review, PR, Search Visibility, Community Validation, event SECC, Paid Media và hệ thống Online × Offline.';
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = metaDescription?.content;

    document.title = 'GNET G-ON X Case Study | TP Growth';
    if (metaDescription) metaDescription.content = description;

    const ogEntries = [
      ['og:title', 'GNET G-ON X Case Study | TP Growth'],
      ['og:description', description],
      ['og:image', new URL(images.campaignOverview.src, window.location.href).href],
    ] as const;
    const created: HTMLMetaElement[] = [];
    const previousOg = new Map<HTMLMetaElement, string>();

    ogEntries.forEach(([property, content]) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
        created.push(element);
      } else {
        previousOg.set(element, element.content);
      }
      element.content = content;
    });

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== undefined) metaDescription.content = previousDescription;
      previousOg.forEach((content, element) => {
        element.content = content;
      });
      created.forEach((element) => element.remove());
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <section className="border-b border-brand-border bg-white py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
              <div>
                <Eyebrow>CASE STUDY 03 · AUTOMOTIVE PRODUCT LAUNCH SYSTEM</Eyebrow>
                <p className="mt-5 text-[14px] font-extrabold tracking-[0.08em] text-brand-highlight">
                  GNET G-ON X × MSPORT
                </p>
                <h1 className="mt-4 font-heading text-[39px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[48px] md:text-[58px] lg:text-[64px]">
                  Từ một sản phẩm mới đến hệ thống tạo niềm tin đa kênh trong thị trường camera hành trình
                </h1>
                <p className="mt-6 max-w-2xl text-[16px] font-medium leading-[1.78] text-brand-secondary md:text-[18px]">
                  GNET G-ON X không chỉ cần được thị trường biết đến. Sản phẩm cần đủ nội dung để khách hiểu, đủ review để khách tin, đủ hiện diện trên Search và cộng đồng để khách có thể tự kiểm chứng — cùng một hệ thống offline giúp thương hiệu xuất hiện bằng sản phẩm và trải nghiệm thật.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Product Launch', 'Search Visibility', 'Community Proof', 'Online × Offline', 'Paid Media'].map((tag) => (
                    <span key={tag} className="rounded-full border border-brand-border bg-brand-bg px-3 py-2 text-[11px] font-extrabold text-brand-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <VisualTile
                  image={images.campaignOverview}
                  alt="Campaign ra mắt camera hành trình GNET G-ON X"
                  priority
                  className="sm:col-span-2"
                  imageClassName="aspect-[1207/900]"
                />
                <VisualTile
                  image={images.reviewPrimary}
                  alt="Nội dung KOL review sản phẩm GNET G-ON X"
                  imageClassName="aspect-[1207/900]"
                />
                <VisualTile
                  image={images.seccBooth}
                  alt="Gian hàng Msport tại sự kiện ở SECC"
                  imageClassName="aspect-[4/3]"
                />
              </div>
            </div>

            <dl className="mx-auto mt-12 grid max-w-7xl gap-px overflow-hidden rounded-[20px] border border-brand-border bg-brand-border sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['DOANH NGHIỆP', 'Msport'],
                ['SẢN PHẨM', 'GNET G-ON X'],
                ['LĨNH VỰC', 'Automotive Technology / Dashcam'],
                ['VAI TRÒ', 'Marketing Lead / Growth Operator'],
                ['PHẠM VI', 'Launch · Review · PR · Search · Community · Event'],
              ].map(([term, description]) => (
                <div key={term} className="bg-brand-bg px-5 py-5">
                  <dt className="text-[9px] font-black uppercase tracking-[0.18em] text-brand-soft-text">{term}</dt>
                  <dd className="mt-2 text-[13px] font-extrabold leading-[1.5] text-brand-primary">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <SectionHeading label="THE BUSINESS CONTEXT" title="G-ON X không được launch trong chân không.">
                <p>Msport đã có nền tảng trong ngành phụ kiện và công nghệ ô tô.</p>
                <p>Điều đó mang lại hạ tầng quan trọng cho một sản phẩm mới: hiểu thị trường, khả năng sản xuất nội dung, kết nối reviewer, sales, hoạt động bán hàng và những điểm chạm trực tiếp với cộng đồng người dùng xe.</p>
                <p className="border-l-2 border-brand-accent pl-5 font-extrabold text-brand-primary">Sản phẩm mới không chỉ cần traffic. Nó cần một hệ thống bằng chứng.</p>
              </SectionHeading>
              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <VisualTile
                  image={images.retail}
                  alt="Hạ tầng bán hàng phụ kiện ô tô trong hệ sinh thái Msport"
                  caption="Ảnh thể hiện business context và hạ tầng bán hàng Msport; không được dùng để nhận diện model G-ON X."
                  imageClassName="aspect-[3/2]"
                />
                <VisualTile
                  image={images.contentProduction}
                  alt="Đội ngũ thực hiện nội dung video trong bối cảnh ô tô"
                  caption="Khả năng content production giúp launch system tiếp tục tạo tài sản mới."
                  imageClassName="aspect-[3/2]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE MARKET-ENTRY CHALLENGE" title="Một sản phẩm mới phải vượt qua ba rào cản: chưa biết, chưa hiểu và chưa tin." />
              <div className="mt-12 grid border-y border-brand-border md:grid-cols-2 lg:grid-cols-4">
                {[
                  ['01', 'Awareness gap', 'Khách hàng chưa chủ động tìm kiếm hoặc chưa ghi nhớ tên sản phẩm.'],
                  ['02', 'Information gap', 'Khách thiếu nội dung đủ rõ để hiểu sản phẩm, cách sử dụng và lựa chọn.'],
                  ['03', 'Trust gap', 'Khách cần review, cộng đồng, báo chí và trải nghiệm thật trước khi ra quyết định.'],
                  ['04', 'Distribution gap', 'Sales và hệ thống phân phối cần đủ tài sản để tiếp tục giải thích sau khi campaign tạo nhận biết.'],
                ].map(([number, title, copy]) => (
                  <article key={number} className="border-b border-brand-border px-0 py-7 md:px-6 lg:border-b-0 lg:border-l first:lg:border-l-0">
                    <span className="text-[11px] font-black tracking-[0.18em] text-brand-highlight">{number}</span>
                    <h3 className="mt-3 font-heading text-[21px] font-extrabold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary">{copy}</p>
                  </article>
                ))}
              </div>
              <p className="mt-10 max-w-4xl font-heading text-[24px] font-extrabold leading-[1.4] tracking-[-0.03em] md:text-[30px]">
                Launch không kết thúc khi sản phẩm được đăng bài. Launch kết thúc khi thị trường có đủ lý do để tự tìm hiểu và tin tưởng.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE OPERATOR ROLE" title="Vai trò không dừng ở việc book review">
                <p>Campaign cần một người giữ dòng chảy từ sản phẩm đến thị trường: xác định câu chuyện, phân vai từng kênh và biến mỗi hoạt động thành tài sản cho điểm chạm tiếp theo.</p>
              </SectionHeading>
              <div className="mt-12 grid gap-x-10 gap-y-0 lg:grid-cols-2">
                {[
                  ['01', 'Launch Strategy', 'Xác định các rào cản thị trường và kiến trúc launch phù hợp cho một sản phẩm camera hành trình mới.'],
                  ['02', 'Content & Review System', 'Phối hợp xây nội dung sản phẩm, KOL/KOC review, community review và các góc giải thích khác nhau.'],
                  ['03', 'PR & Search Visibility', 'Dùng PR và nội dung index được để khách tìm lại sản phẩm qua nhiều nguồn tham khảo.'],
                  ['04', 'Online × Offline Execution', 'Kết nối digital với sự hiện diện thực tế tại event Msport ở SECC, sales và hệ thống phân phối.'],
                ].map(([number, title, copy]) => (
                  <article key={number} className="grid grid-cols-[42px_1fr] gap-4 border-t border-brand-border py-7">
                    <span className="text-[11px] font-black tracking-[0.18em] text-brand-accent">{number}</span>
                    <div>
                      <h3 className="font-heading text-[22px] font-extrabold tracking-[-0.03em]">{title}</h3>
                      <p className="mt-3 text-[15px] font-medium leading-[1.7] text-brand-secondary">{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-7 max-w-4xl rounded-[20px] border border-brand-border bg-white p-6 text-[14px] font-semibold leading-[1.75] text-brand-secondary shadow-brand-soft">
                Phú không thực hiện mọi đầu việc một mình. Vai trò là giữ trục chiến lược, trực tiếp tham gia các lớp quan trọng và phối hợp nhiều nguồn lực cùng vận hành.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-primary py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                label="THE LAUNCH ARCHITECTURE"
                title="Không trông chờ một video viral. Xây nhiều lớp để thị trường tự kiểm chứng."
                dark
              >
                <p>KOL, PR, Search, Community và Event tạo ra những lý do để tin.</p>
                <p>Paid Media giúp chủ động đưa các nội dung và bằng chứng đó đến nhiều người phù hợp hơn. Remarketing tiếp tục cuộc trò chuyện với nhóm đã xem, tương tác hoặc tìm hiểu sản phẩm.</p>
              </SectionHeading>
              <div className="mt-12 rounded-[20px] border border-white/10 bg-white/[0.04] p-5 md:p-8">
                <Flow items={launchSteps} dark />
                <p className="mt-8 text-[12px] font-extrabold uppercase tracking-[0.16em] text-orange-400">
                  Customer proof quay lại tạo New Content
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="PRODUCT EDUCATION" title="Camera hành trình là sản phẩm kỹ thuật. Content phải giúp khách hiểu trước khi yêu cầu họ mua.">
                <p>Những asset được xác minh cho thấy content tập trung vào tổng quan sản phẩm, tình huống sử dụng, trải nghiệm thực tế và các góc giải thích từ reviewer.</p>
              </SectionHeading>
              <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <VisualTile
                  image={images.campaignOverview}
                  alt="Nội dung tổng quan và review sản phẩm GNET G-ON X"
                  caption="Product overview được nối với nhiều nguồn review để khách có thể đi từ nhận biết đến tìm hiểu sâu."
                  imageClassName="aspect-[1207/900]"
                />
                <div className="space-y-7">
                  {[
                    ['Product overview', 'Giúp khách nhận diện tên sản phẩm và có điểm bắt đầu để tìm hiểu.'],
                    ['Use-case education', 'Các tình huống sử dụng và nội dung Parking Mode biến thông tin kỹ thuật thành ngữ cảnh thực tế.'],
                    ['Review & choice', 'Nhiều reviewer cung cấp các cách trình bày khác nhau cho cùng một quyết định mua.'],
                    ['Customer experience', 'Video ngắn từ tình huống thật bổ sung proof sau lớp product content.'],
                  ].map(([title, copy]) => (
                    <div key={title} className="border-t border-brand-border pt-5">
                      <h3 className="font-heading text-[20px] font-extrabold tracking-[-0.02em]">{title}</h3>
                      <p className="mt-2 text-[14px] font-medium leading-[1.7] text-brand-secondary">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <VisualTile
                  image={images.community}
                  alt="Nội dung GNET G-ON X giải thích tình huống Parking Mode và review trong group"
                  caption="Community content vừa giải thích use case vừa đặt sản phẩm trong ngữ cảnh hỏi đáp thật."
                  imageClassName="aspect-[1199/828]"
                />
                <VisualTile
                  image={images.customerShorts}
                  alt="Video ngắn về tình huống sử dụng và trải nghiệm thực tế GNET G-ON X"
                  caption="Một thư viện video ngắn mở rộng product education sang các tình huống có thể quan sát."
                  imageClassName="aspect-[1489/900]"
                />
              </div>
              <p className="mt-9 border-l-2 border-brand-accent pl-5 font-heading text-[22px] font-extrabold leading-[1.45] tracking-[-0.025em]">
                Một sản phẩm kỹ thuật không thể chỉ có một creative bán hàng. Nó cần một thư viện nội dung trả lời nhiều câu hỏi khác nhau.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-primary py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="REVIEW ECOSYSTEM" title="Một review tạo chú ý. Nhiều góc nhìn tạo độ tin cậy." dark>
                <p>Campaign không phụ thuộc vào một tiếng nói duy nhất. Partner review và creator content giúp sản phẩm xuất hiện trong nhiều hành trình tìm kiếm, nhiều nhóm người xem và nhiều mức độ quan tâm.</p>
              </SectionHeading>
              <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <VisualTile
                  image={images.reviewPrimary}
                  alt="Kết quả tìm kiếm các partner review GNET G-ON X"
                  caption="Primary review: nội dung có độ nhận diện cao đặt G-ON X vào đúng mạch tìm hiểu của người quan tâm ô tô."
                  imageClassName="aspect-[1207/900]"
                />
                <div className="grid gap-5">
                  <VisualTile
                    image={images.reviewSecondary}
                    alt="Nhiều creator và reviewer giới thiệu GNET G-ON X"
                    caption="Long-tail review: nhiều góc nhìn mở rộng footprint thay vì phụ thuộc một kênh."
                    imageClassName="aspect-[1199/1170]"
                  />
                  <VisualTile
                    image={images.campaignOverview}
                    alt="Nội dung Msport và reviewer giải thích GNET G-ON X"
                    caption="Product explanation: owned content và creator content hỗ trợ nhau trong hành trình research."
                    imageClassName="aspect-[1207/900]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-brand-border bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <SectionHeading label="PR × SEARCH VISIBILITY" title="PR không kết thúc khi bài được đăng. Nó tiếp tục làm việc mỗi lần khách tìm kiếm lại sản phẩm.">
                <p>Với sản phẩm mới, khách thường không tin ngay quảng cáo đầu tiên. Họ tìm lại tên sản phẩm, đọc thêm và kiểm tra xem thị trường đã có đủ thông tin hay chưa.</p>
                <p>PR và nội dung index được giúp G-ON X không xuất hiện như một sản phẩm chỉ tồn tại trong quảng cáo.</p>
                <p className="text-[14px] italic text-brand-soft-text">Search visibility không tự động đồng nghĩa với doanh thu. Nó là một lớp giúp khách có đủ nguồn tham khảo trước khi liên hệ.</p>
              </SectionHeading>
              <VisualTile
                image={images.prSearch}
                alt="Kết quả tìm kiếm Google sau hoạt động PR cho GNET G-ON X"
                caption="PR Content → Indexed Results → Search Discovery → Multiple Sources → Lower Perceived Risk → Sales Conversation"
                imageClassName="aspect-[1199/1136]"
              />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <VisualTile
                image={images.community}
                alt="Nội dung admin group review camera hành trình GNET G-ON X"
                caption="Asset cho thấy nội dung từ Msport và admin group; không được diễn giải như bảo chứng chính thức hoặc review hoàn toàn organic."
                imageClassName="aspect-[1199/828]"
              />
              <SectionHeading label="COMMUNITY VALIDATION" title="Khách nghe thương hiệu. Nhưng họ thường tin cộng đồng trước khi ra quyết định.">
                <p>Camera hành trình là nhóm sản phẩm mà người dùng thường hỏi cộng đồng trước khi mua.</p>
                <p>Sự xuất hiện trong các group và nội dung từ admin/reviewer giúp thương hiệu bước vào cuộc trò chuyện mà khách hàng đang chủ động quan tâm.</p>
              </SectionHeading>
            </div>
          </div>
        </section>

        <section className="bg-brand-primary py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="OFFLINE EXPERIENCE · SECC" title="Online tạo nhận biết. Event biến thương hiệu thành một trải nghiệm có thật." dark>
                <p>Nội dung online giúp khách biết và tìm hiểu sản phẩm. Sự hiện diện của Msport tại khu vực event ở SECC bổ sung một lớp khác: sản phẩm thật, con người thật, không gian thật và những cuộc trao đổi diễn ra trực tiếp.</p>
              </SectionHeading>

              <div className="mt-12 grid gap-5 lg:grid-cols-[1.55fr_0.45fr]">
                <VisualTile
                  image={images.seccBooth}
                  alt="Gian hàng Msport tại sự kiện ở SECC"
                  caption="Msport tại SECC: nơi digital campaign được nối với sản phẩm thật, đội ngũ thật và trải nghiệm trực tiếp."
                  imageClassName="aspect-[4/3]"
                />
                <VisualTile
                  image={images.phuEvent}
                  alt="Phú tham gia hoạt động Msport tại sự kiện ở SECC"
                  caption="Operator trực tiếp tham gia triển khai, không chỉ điều phối từ xa."
                  imageClassName="aspect-[2/3]"
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  [images.booth, 'Gian hàng Msport với sản phẩm và khách tham quan', 'Product presence'],
                  [images.eventWide, 'Toàn cảnh hoạt động thương hiệu Msport tại sự kiện ô tô', 'Market exposure'],
                  [images.eventInteraction, 'Hoạt động tương tác với khách tại khu vực Msport', 'Community interaction'],
                  [images.eventTeam, 'Đội ngũ Msport vận hành tại sự kiện', 'Team execution'],
                  [images.stageTeam, 'Đội ngũ Msport trên sân khấu sự kiện ngành ô tô', 'Industry presence'],
                  [images.night, 'Hoạt động nhận diện Msport tại sự kiện buổi tối', 'Content capture'],
                  [images.award, 'Đội ngũ Msport tại hoạt động ghi nhận trong sự kiện', 'Event proof'],
                ].map(([image, alt, caption]) => (
                  <div key={caption as string} className={caption === 'Community interaction' ? 'sm:col-span-2' : ''}>
                    <VisualTile
                      image={image as ImageAsset}
                      alt={alt as string}
                      caption={caption as string}
                      imageClassName="aspect-[3/2]"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-12 grid gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-4">
                {[
                  ['01', 'Product Presence', 'Khách có thể nhìn thấy và tiếp cận hệ sinh thái sản phẩm trong bối cảnh thật.'],
                  ['02', 'Human Trust', 'Đội ngũ và người phụ trách trực tiếp giúp thương hiệu không còn là một quảng cáo vô danh.'],
                  ['03', 'Content Capture', 'Sự kiện tạo thêm hình ảnh, video và chất liệu cho những vòng nội dung tiếp theo.'],
                  ['04', 'Sales & Community Feedback', 'Trao đổi trực tiếp cung cấp câu hỏi, phản hồi và insight cho content lẫn sales.'],
                ].map(([number, title, copy]) => (
                  <article key={number} className="border-t border-white/15 py-6">
                    <span className="text-[10px] font-black tracking-[0.18em] text-orange-400">{number}</span>
                    <h3 className="mt-3 font-heading text-[19px] font-extrabold text-white">{title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-slate-300">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-brand-border bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="EVENT COMPOUNDING" title="Một event tốt không kết thúc khi gian hàng đóng cửa.">
                <p>Hình ảnh, video và những cuộc trao đổi tại SECC tiếp tục được sử dụng trong social, Paid Media, remarketing và hỗ trợ sales sau sự kiện.</p>
              </SectionHeading>
              <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {eventSteps.map((step, index) => (
                  <li key={step.title} className="group overflow-hidden rounded-[20px] border border-brand-border bg-brand-bg">
                    <img
                      src={step.image.src}
                      alt=""
                      width={step.image.width}
                      height={step.image.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition duration-300 motion-reduce:transition-none group-hover:translate-y-[-2px]"
                    />
                    <div className="flex items-center gap-3 p-4">
                      <span className="text-[10px] font-black text-brand-highlight">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-[12px] font-extrabold uppercase tracking-[0.08em]">{step.title}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="ONLINE × OFFLINE" title="Search giúp khách tìm thấy. Community giúp khách tin. Event giúp khách cảm nhận.">
                <p>Event tạo trải nghiệm và bằng chứng thật.</p>
                <p>Paid Media tiếp tục phân phối những bằng chứng đó sau sự kiện. Sales và phản hồi khách hàng lại tạo thêm insight cho content và campaign tiếp theo.</p>
              </SectionHeading>
              <div className="mt-12 rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft md:p-8">
                <Flow items={['KOL / Review', 'PR', 'Google Search', 'Community', 'Event SECC', 'Paid Ads', 'Remarketing', 'Sales / Distribution', 'Customer Experience', 'New Content', 'Quay lại KOL / Review']} />
              </div>
            </div>
          </div>
        </section>

        <section id="paid-amplification" className="border-y border-brand-border bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-brand-highlight md:text-[11px]">
                  PAID AMPLIFICATION
                </p>
                <h2 className="mt-5 font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-primary sm:text-[38px] md:text-[48px]">
                  KOL, PR và Event tạo bằng chứng. Paid Media đưa những bằng chứng đó đến đúng người.
                </h2>
                <div className="mt-6 max-w-3xl space-y-4 text-[16px] font-medium leading-[1.8] text-brand-secondary md:text-[18px]">
                  <p>Campaign không chỉ sản xuất nội dung rồi chờ khách tự nhìn thấy.</p>
                  <p>Facebook Ads được dùng để chủ động mở rộng phạm vi phân phối của nhiều content angle: sản phẩm, tình huống sử dụng, reviewer, người thật, xe thật và hoạt động cộng đồng.</p>
                  <p>Khi người dùng đã xem hoặc tương tác, remarketing tiếp tục bổ sung thêm những lớp bằng chứng để họ hiểu sản phẩm sâu hơn trước khi liên hệ.</p>
                </div>
              </div>

              <blockquote className="mt-10 max-w-5xl border-l-4 border-brand-highlight py-2 pl-6 font-heading text-[25px] font-extrabold leading-[1.42] tracking-[-0.03em] text-brand-primary md:text-[34px]">
                “Paid Media không thay thế niềm tin. Nó khuếch đại những tài sản đã có khả năng tạo niềm tin.”
              </blockquote>

              <div className="mt-14 grid border-y border-brand-border lg:grid-cols-3">
                {[
                  ['01', 'ACQUISITION CREATIVE', 'Thu hút bằng nhiều góc tiếp cận', 'Campaign không phụ thuộc vào một mẫu quảng cáo duy nhất. Các creative angle khác nhau giúp sản phẩm xuất hiện trong nhiều ngữ cảnh: tính năng, tình huống trên đường, người dùng thật, reviewer, lắp đặt và trải nghiệm xe.'],
                  ['02', 'PROOF DISTRIBUTION', 'Biến nội dung và hoạt động thương hiệu thành tài sản phân phối', 'KOL, Community và Event không kết thúc sau một bài đăng hoặc một ngày tổ chức. Những tài sản này tiếp tục được sử dụng để làm social proof trong content và quảng cáo.'],
                  ['03', 'REMARKETING', 'Tiếp tục cuộc trò chuyện với người đã quan tâm', 'Remarketing không chỉ lặp lại cùng một thông điệp. Nó đưa thêm product education, reviewer content, use case và bằng chứng thương hiệu đến nhóm người cần thêm thông tin trước khi quyết định.'],
                ].map(([number, label, title, copy]) => (
                  <article key={number} className="border-b border-brand-border py-8 last:border-b-0 lg:border-b-0 lg:border-l lg:px-8 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0">
                    <span className="text-[11px] font-black tracking-[0.18em] text-brand-accent">{number}</span>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-brand-soft-text">{label}</p>
                    <h3 className="mt-4 font-heading text-[22px] font-extrabold leading-[1.25] tracking-[-0.03em]">{title}</h3>
                    <p className="mt-4 text-[14px] font-medium leading-[1.75] text-brand-secondary">{copy}</p>
                  </article>
                ))}
              </div>

              <div className="mt-16">
                <div className="max-w-3xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-accent">FOUR-ASSET CONTENT WALL</p>
                  <h3 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.2] tracking-[-0.035em] md:text-[36px]">
                    Một thư viện creative, nhiều lý do để tiếp tục tìm hiểu.
                  </h3>
                </div>
                <div className="mt-9 grid gap-x-5 gap-y-8 lg:grid-cols-5">
                  {paidMediaAssets.map((item, index) => (
                    <article key={item.label} className={paidMediaLayouts[index]}>
                      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">{item.label}</p>
                      <VisualTile
                        image={item.image}
                        alt={item.alt}
                        caption={item.caption}
                        imageClassName={paidMediaAspectRatios[index]}
                        onOpen={() => setLightboxItem(item)}
                      />
                    </article>
                  ))}
                </div>
                <p className="mt-8 max-w-5xl text-[14px] font-semibold leading-[1.75] text-brand-secondary md:text-[15px]">
                  Facebook Ads và remarketing được vận hành bằng nhiều nhóm creative: product education, reviewer content, real-world use cases, community proof và trải nghiệm thương hiệu.
                </p>
              </div>

              <div className="mt-16 border-t border-brand-border pt-14">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-accent">PAID MEDIA FLOW</p>
                <h3 className="mt-4 max-w-3xl font-heading text-[28px] font-extrabold leading-[1.2] tracking-[-0.035em] md:text-[36px]">
                  Phân phối tạo tín hiệu. Hệ thống biến tín hiệu thành cuộc trò chuyện.
                </h3>
                <div className="mt-9 rounded-[20px] border border-brand-border bg-brand-bg p-5 md:p-8">
                  <Flow items={['Content & Proof', 'Facebook Ads', 'View / Engagement', 'Remarketing', 'Điểm liên hệ & tư vấn', 'Customer Questions', 'New Creative']} />
                </div>
                <div className="mt-7 max-w-4xl space-y-3 text-[15px] font-medium leading-[1.75] text-brand-secondary md:text-[16px]">
                  <p>Paid Media tạo thêm traffic và tín hiệu quan tâm.</p>
                  <p>Giá trị chỉ hoàn chỉnh khi các tín hiệu đó đi vào cuộc tư vấn, câu hỏi từ khách hàng được ghi nhận và creative tiếp tục được cải thiện.</p>
                </div>
              </div>

              <div className="mt-16 border-t border-brand-border pt-14">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-accent">CREATIVE FEEDBACK LOOP</p>
                <h3 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.2] tracking-[-0.035em] md:text-[36px]">
                  Creative được học từ phản hồi của thị trường
                </h3>
                <div className="mt-9 rounded-[20px] border border-brand-border bg-brand-bg p-5 md:p-8">
                  <Flow items={['Creative Angle', 'Paid Distribution', 'Comments & Questions', 'Sales Conversations', 'Objection Patterns', 'New Content', 'New Remarketing Proof']} />
                </div>
                <div className="mt-9 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                  <p className="border-l-2 border-brand-highlight pl-5 font-heading text-[20px] font-extrabold leading-[1.5] tracking-[-0.025em]">
                    Đây là lúc Paid Media không chỉ mua traffic mà còn trở thành một lớp học từ thị trường.
                  </p>
                <ul className="grid gap-x-8 sm:grid-cols-2">
                  {[
                    'Khách quan tâm tính năng nào.',
                    'Khách chưa hiểu điểm nào.',
                    'Khách thường so sánh với lựa chọn nào.',
                    'Loại review nào giúp khách tin hơn.',
                    'Use case nào tạo nhiều cuộc trò chuyện.',
                    'Câu hỏi nào sales phải giải thích lặp lại.',
                  ].map((point) => (
                    <li key={point} className="border-t border-brand-border py-5 text-[14px] font-semibold leading-[1.65] text-brand-secondary">
                      {point}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <SectionHeading label="SALES & DISTRIBUTION" title="Paid Media tạo sự quan tâm. Sales tiếp tục biến sự quan tâm thành một quyết định có cơ sở.">
                <p>Ads đưa khách vào hành trình.</p>
                <p>Review giúp khách hiểu. PR và Search giúp khách tự kiểm chứng. Community giảm cảm giác thương hiệu chỉ tự nói về mình. Event chứng minh sản phẩm và đội ngũ có hiện diện thực tế.</p>
                <p>Sales tiếp tục giải thích sản phẩm, xác định nhu cầu và hỗ trợ quá trình phân phối.</p>
              </SectionHeading>
              <VisualTile
                image={images.retail}
                alt="Hạ tầng bán hàng phụ kiện ô tô hỗ trợ quá trình tư vấn và phân phối"
                caption="Business context của Msport. Sản phẩm xuất hiện trong ảnh thuộc danh mục tại điểm bán và không được dùng để nhận diện model G-ON X."
                imageClassName="aspect-[3/2]"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE EXECUTION LAYER" title="G-ON X là campaign hero. Msport là hệ thống giúp campaign được triển khai ngoài đời thật.">
                <p>GNET G-ON X được đưa vào thị trường trong hệ sinh thái nội dung, bán hàng và phân phối của Msport. Campaign sử dụng kinh nghiệm thị trường, đội ngũ, owned media, hoạt động offline và hạ tầng bán hàng đã có.</p>
              </SectionHeading>
              <div className="mt-12 grid gap-5 md:grid-cols-[0.82fr_1.18fr]">
                <VisualTile
                  image={images.videoEditing}
                  alt="Đội ngũ Msport biên tập nội dung video và website"
                  caption="Owned media và content operation giữ cho asset launch tiếp tục được phân phối."
                  imageClassName="aspect-[3/4]"
                />
                <VisualTile
                  image={images.contentProduction}
                  alt="Phú và đội ngũ thực hiện nội dung video trong bối cảnh ô tô"
                  caption="Content production chuyển sản phẩm, con người và trải nghiệm thành tài sản có thể tái sử dụng."
                  imageClassName="aspect-[3/2]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-primary py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE COMPOUNDING LOOP" title="Mỗi điểm chạm để lại thêm tài sản cho vòng tăng trưởng tiếp theo." dark>
                <p>Campaign không quay lại số 0.</p>
                <p>Mỗi vòng để lại thêm content, tệp người đã tương tác, search footprint, customer insight và proof cho vòng phân phối tiếp theo.</p>
              </SectionHeading>
              <div className="mt-12 rounded-[20px] border border-white/10 bg-white/[0.04] p-5 md:p-8">
                <Flow items={['Product', 'KOL / Review', 'PR / Search', 'Community', 'Event', 'Paid Acquisition', 'Remarketing', 'Sales / Distribution', 'Customer Experience', 'New Proof', 'New Creative', 'Quay lại Paid Acquisition']} dark />
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {['Product education', 'Review library', 'PR coverage', 'Search visibility', 'Community proof', 'Event photography', 'Paid creative library', 'Remarketing proof library', 'Market-response insights', 'Sales objection patterns'].map((asset) => (
                  <span key={asset} className="rounded-full border border-white/15 px-3 py-2 text-[11px] font-bold text-slate-300">{asset}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="SYSTEM IMPACT" title="Campaign không chỉ tạo độ phủ. Nó xây khả năng được tìm thấy, được tin và được bán." />
              <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
                {[
                  ['01', 'Market Awareness', ['G-ON X xuất hiện qua nhiều reviewer và nội dung sản phẩm.', 'Sản phẩm có nhiều điểm chạm thay vì chỉ một bài launch.', 'Campaign mở rộng khả năng được thị trường ghi nhớ.']],
                  ['02', 'Search & Trust', ['PR tạo nội dung index được.', 'Search result giúp khách có nhiều nguồn tham khảo.', 'Community và admin review tạo thêm social validation.']],
                  ['03', 'Online × Offline Presence', ['Digital giúp khách biết và tìm hiểu.', 'Event SECC chứng minh doanh nghiệp có đội ngũ và hoạt động thực tế.', 'Event tiếp tục tạo nội dung cho các vòng digital sau.']],
                  ['04', 'Traffic & Conversation', ['Paid Ads chủ động đưa nội dung đến nhiều người phù hợp hơn.', 'Nhiều creative angle giúp campaign tiếp cận nhiều nhóm quan tâm.', 'Remarketing tiếp tục nuôi dưỡng nhóm đã có tín hiệu tương tác.', 'Campaign tạo thêm cơ hội để sales bắt đầu cuộc trò chuyện.']],
                  ['05', 'Compounding Assets', ['KOL/KOC reviews, PR coverage và Search footprint.', 'Community review, event photos và product education.', 'Paid creative library và remarketing proof library.', 'Market-response insights và sales objection patterns.']],
                ].map(([number, title, bullets]) => (
                  <article key={number as string} className="border-t border-brand-border py-7">
                    <span className="text-[10px] font-black tracking-[0.18em] text-brand-accent">{number as string}</span>
                    <h3 className="mt-3 font-heading text-[24px] font-extrabold tracking-[-0.03em]">{title as string}</h3>
                    <ul className="mt-4 space-y-2 text-[14px] font-medium leading-[1.7] text-brand-secondary">
                      {(bullets as string[]).map((bullet) => <li key={bullet}>— {bullet}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading label="THE LESSON" title="Ra mắt sản phẩm không phải là đăng một bài giới thiệu." />
              <blockquote className="mt-10 border-l-4 border-brand-accent pl-6 font-heading text-[26px] font-extrabold leading-[1.4] tracking-[-0.03em] md:text-[36px]">
                “Một sản phẩm mới chỉ thật sự bước vào thị trường khi khách hàng có thể biết đến, tìm lại, kiểm chứng và tin tưởng nó qua nhiều nguồn khác nhau.”
              </blockquote>
              <div className="mt-8 max-w-4xl space-y-4 text-[16px] font-medium leading-[1.8] text-brand-secondary md:text-[18px]">
                <p>G-ON X được kể không chỉ bằng tiếng nói của thương hiệu.</p>
                <p>Review tạo góc nhìn. PR tạo nguồn tham khảo. Search giúp khách tìm lại. Community tạo xác nhận xã hội. Event giúp sản phẩm trở nên hữu hình. Msport cung cấp lớp thực thi để những hoạt động đó không dừng ở truyền thông.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="CAMPAIGN EVIDENCE LIBRARY" title="Một phần tài sản được tích lũy trong quá trình triển khai.">
                <p>Tất cả asset G-ON X và Msport/SECC hợp lệ đã được phân loại theo vai trò. Chọn ảnh để mở bản lớn và đọc đầy đủ nội dung.</p>
                <p>Paid Media là một chapter chính với content wall riêng ở phần <a href="#paid-amplification" className="font-extrabold text-brand-highlight underline decoration-orange-200 underline-offset-4">Paid Amplification</a>; bốn ảnh không được lặp lại tại đây.</p>
              </SectionHeading>
              <div className="mt-12 columns-1 gap-5 md:columns-2 xl:columns-3">
                {evidenceLibrary.map((item, index) => (
                  <article
                    key={`${item.label}-${index}`}
                    className="mb-5 break-inside-avoid overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-brand-soft"
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxItem(item)}
                      className="block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent"
                      aria-label={`Mở ảnh lớn: ${item.alt}`}
                    >
                      <img
                        src={item.image.src}
                        alt={item.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full object-contain"
                      />
                    </button>
                    <div className="p-5">
                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-brand-accent">{item.group}</p>
                      <h3 className="mt-2 font-heading text-[19px] font-extrabold tracking-[-0.02em]">{item.label}</h3>
                      <p className="mt-2 text-[13px] font-medium leading-[1.65] text-brand-secondary">{item.caption}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-primary py-20 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow dark>BUILD THE NEXT GROWTH SYSTEM</Eyebrow>
                <h2 className="mt-5 font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[48px]">
                  Sản phẩm mới có thể không thiếu chất lượng.
                </h2>
                <p className="mt-5 text-[17px] font-medium leading-[1.7] text-slate-300 md:text-[19px]">
                  Thị trường có thể chưa có đủ điểm chạm để hiểu và tin nó.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="/#growth-framework"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-[14px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary motion-reduce:transform-none"
                >
                  Xem Growth System Framework
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={navCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="zalo"
                  data-location="gnet-gonx-case-study"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/25 px-5 py-3 text-[14px] font-extrabold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary motion-reduce:transform-none"
                >
                  Nhắn Zalo trao đổi với Phú
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}
