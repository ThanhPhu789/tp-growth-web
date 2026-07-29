import paintMoreCase from '../../assets/images/Casestyudy sơn lại facebook ads mess + remarrketing.jpg';
import blackVueCase from '../../assets/case-studies/blackvue/blackvue-hung-lam-facebook-review.jpg';
import gnetGonxCase from '../../assets/images/Case campaign camera hành trình GNET G-ON X - KOL Review Sản phẩm.jpg';
import fnbTiktokCase from '../../assets/images/Case FnB Build kênh Tiktok.jpg';
import googleSearchYoutubeAds from '../../assets/images/Google Ads Search & Youtube Ads.jpg';
import googleAdsTracking from '../../assets/images/Google Ads Tracking chuyên sâu cho ngành dịch vụ.jpg';
import facebookCapiTracking from '../../assets/images/Facebook Ads chuyển đổi Website Tracking CAPI chuyên sâu cho ngành dịch vụ nút Hotline - Zalo - Mess.jpg';
import creativeTrackingOptimization from '../../assets/images/Optimize Craative & Tracking ads rẻ.jpg';

export type EditorialVisual = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  title: string;
  caption: string;
  href?: string;
};

export const START_HERE_GROWTH_NOTE_SLUG = 'toi-khong-tin-vao-mot-cong-thuc-marketing';

export const caseStudyVisuals: EditorialVisual[] = [
  {
    src: paintMoreCase,
    width: 1196,
    height: 911,
    alt: 'Hệ thống tăng trưởng Paint & More kết nối content, paid media, website, tracking và sales',
    label: 'Paint & More',
    title: 'B2B → Retail Growth System',
    caption: 'Tái cấu trúc website, content, paid media, tracking và sales thành một vòng tăng trưởng.',
    href: '/case-study/paint-and-more-growth-system',
  },
  {
    src: blackVueCase,
    width: 1199,
    height: 824,
    alt: 'Campaign BlackVue DR750 LTE định vị camera hành trình cho phân khúc xe sang',
    label: 'BlackVue DR750 LTE',
    title: 'Premium Demand System',
    caption: 'Dùng premium positioning, authority và retail demand để hỗ trợ cả bán trực tiếp lẫn mạng lưới đại lý.',
    href: '/case-study/blackvue-dr750-lte-growth-system',
  },
  {
    src: gnetGonxCase,
    width: 1207,
    height: 900,
    alt: 'Campaign GNET G-ON X kết nối review, PR, Search, Community, Event và Paid Media',
    label: 'GNET G-ON X × Msport',
    title: 'Product Launch System',
    caption: 'Kết nối review, PR, Search, Community, Event và Paid Distribution cho một product launch.',
    href: '/case-study/gnet-g-on-x-growth-system',
  },
  {
    src: fnbTiktokCase,
    width: 1124,
    height: 900,
    alt: 'Kênh TikTok F&B được xây theo chiến lược một kênh tăng trưởng chính',
    label: 'F&B TikTok',
    title: 'One-channel Sales System',
    caption: 'Chọn một kênh có lợi thế tự nhiên, organic-first và paid amplification vừa đủ cho business gia đình.',
    href: '/case-study/fnb-tiktok-sales-system',
  },
];

export const trackingVisuals: EditorialVisual[] = [
  {
    src: googleSearchYoutubeAds,
    width: 1888,
    height: 1203,
    alt: 'Hệ thống Google Search và YouTube Ads theo vai trò trong hành trình mua',
    label: 'Channel Architecture',
    title: 'Google Search × YouTube Ads',
    caption: 'Search bắt nhu cầu đã hình thành. YouTube giải thích, tạo niềm tin và hỗ trợ quá trình research.',
  },
  {
    src: googleAdsTracking,
    width: 1888,
    height: 824,
    alt: 'Thiết kế conversion tracking Google Ads cho các hành động Hotline, Zalo và Messenger',
    label: 'Conversion Design',
    title: 'Phân biệt hành động có giá trị',
    caption: 'Hotline, Zalo, Messenger và Lead Form cần được phân biệt theo hành động kinh doanh, không gom thành một tín hiệu chung.',
  },
  {
    src: facebookCapiTracking,
    width: 1888,
    height: 1436,
    alt: 'Hệ thống Facebook Conversion API và server-side tracking cho ngành dịch vụ',
    label: 'Measurement Infrastructure',
    title: 'Browser × Server-side signal',
    caption: 'Web GTM, server-side và Conversion API giúp giảm phụ thuộc vào browser pixel và phân phối conversion signal tới nền tảng phù hợp.',
  },
  {
    src: creativeTrackingOptimization,
    width: 1888,
    height: 631,
    alt: 'Kết quả tối ưu creative và conversion tracking tại một thời điểm test',
    label: 'Optimization Evidence',
    title: 'Creative × Conversion Signal',
    caption: 'Creative tốt và conversion signal đúng có thể giúp campaign học tốt hơn. Kết quả trong ảnh là snapshot tại thời điểm test, không phải cam kết chi phí cố định.',
  },
];

function MosaicImage({
  visual,
  priority = false,
  className,
}: {
  visual: EditorialVisual;
  priority?: boolean;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[18px] border border-brand-border bg-white ${className}`}>
      <img
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="h-full w-full object-contain"
      />
      <span className="absolute bottom-3 left-3 rounded-lg border border-brand-border bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-brand-primary shadow-sm">
        {visual.label}
      </span>
    </div>
  );
}

export function StartHereGrowthMosaic({
  priority = false,
  compact = false,
}: {
  priority?: boolean;
  compact?: boolean;
}) {
  const [paintMore, blackVue, gnet, fnb] = caseStudyVisuals;

  return (
    <div
      className={`grid h-full gap-3 bg-brand-bg p-3 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr] ${
        compact ? 'min-h-[260px] lg:min-h-[360px]' : 'min-h-[420px] lg:min-h-[560px]'
      }`}
      aria-label="Bốn case study đại diện cho các business model và Growth System khác nhau"
    >
      <MosaicImage
        visual={paintMore}
        priority={priority}
        className="min-h-[260px] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-0"
      />
      <MosaicImage visual={blackVue} className="min-h-[180px] lg:min-h-0" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <MosaicImage visual={gnet} className="min-h-[170px]" />
        <MosaicImage visual={fnb} className="min-h-[170px]" />
      </div>
    </div>
  );
}
