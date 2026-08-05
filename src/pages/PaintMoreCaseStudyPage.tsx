import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Play,
  X,
} from 'lucide-react';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { navCta } from '../config/navigation';
import { siteImageData } from '../data/siteImages';
import capiDebugZaloResult from '../assets/case-studies/paint-and-more/paintandmore-capi-debug-zalo-result.jpg';
import facebookAdsMessages from '../assets/case-studies/paint-and-more/paintandmore-facebook-ads-messages.jpg';
import ga4RealtimeTraffic from '../assets/case-studies/paint-and-more/paintandmore-ga4-realtime-traffic.jpg';
import landingSpeedMessage from '../assets/case-studies/paint-and-more/paintandmore-landing-speed-message.jpg';
import reelsContentSystem from '../assets/case-studies/paint-and-more/paintandmore-reels-content-system.jpg';
import serverGtmTags from '../assets/case-studies/paint-and-more/paintandmore-server-gtm-tags.jpg';
import socialNew from '../assets/case-studies/paint-and-more/paintandmore-social-new.png';
import socialOld from '../assets/case-studies/paint-and-more/paintandmore-social-old.png';
import trackingCheapMessages from '../assets/case-studies/paint-and-more/paintandmore-tracking-cheap-messages.jpg';
import websiteIndustrial from '../assets/case-studies/paint-and-more/paintandmore-website-new-industrial.png';
import websiteOneCoat from '../assets/case-studies/paint-and-more/paintandmore-website-new-onecoat.png';
import websiteProjects from '../assets/case-studies/paint-and-more/paintandmore-website-new-projects.png';
import websiteTechnology from '../assets/case-studies/paint-and-more/paintandmore-website-new-technology.png';
import websiteOld from '../assets/case-studies/paint-and-more/paintandmore-website-old.png';
import youtubeShortsDistribution from '../assets/case-studies/paint-and-more/paintandmore-youtube-shorts-distribution.jpg';

type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

type VideoItem = {
  id: string;
  number: string;
  title: string;
  url: string;
};

const images = {
  hero: { src: socialNew, width: 1223, height: 1235 },
  socialNew: { src: socialNew, width: 1223, height: 1235 },
  socialOld: { src: socialOld, width: 1194, height: 1246 },
  websiteOld: { src: websiteOld, width: 2873, height: 1463 },
  websiteOneCoat: { src: websiteOneCoat, width: 2880, height: 1391 },
  websiteIndustrial: { src: websiteIndustrial, width: 2855, height: 1386 },
  websiteTechnology: { src: websiteTechnology, width: 2855, height: 1387 },
  websiteProjects: { src: websiteProjects, width: 2837, height: 1391 },
  reelsContentSystem: { src: reelsContentSystem, width: 1196, height: 911 },
  facebookAdsMessages: { src: facebookAdsMessages, width: 1196, height: 960 },
  youtubeShortsDistribution: { src: youtubeShortsDistribution, width: 1199, height: 782 },
  landingSpeedMessage: { src: landingSpeedMessage, width: 1888, height: 2198 },
  serverGtmTags: { src: serverGtmTags, width: 1888, height: 1147 },
  capiDebugZaloResult: { src: capiDebugZaloResult, width: 1888, height: 1436 },
  ga4RealtimeTraffic: { src: ga4RealtimeTraffic, width: 1888, height: 1895 },
  trackingCheapMessages: { src: trackingCheapMessages, width: 1888, height: 631 },
  paidMedia: siteImageData('Youtube ads web conversions casestudy Sơn lại.jpg'),
  operations: siteImageData('Hệ thống SOP & quản lý công việc Marketing.jpg'),
};

const operatorRoles = [
  {
    number: '01',
    title: 'Strategy & Positioning',
    body: 'Đánh giá hiện trạng, xác định điểm nghẽn, chuyển lợi thế kỹ thuật của sản phẩm thành thông điệp người mua có thể hiểu.',
  },
  {
    number: '02',
    title: 'Team & Workflow',
    body: 'Tham gia tuyển dụng, phân vai và xây cách phối hợp giữa content, design, video, digital, IT/AI, sales và các đơn vị bên ngoài.',
  },
  {
    number: '03',
    title: 'Channel Execution',
    body: 'Trực tiếp phụ trách paid media, remarketing, landing page direction và phối hợp triển khai website cùng agency.',
  },
  {
    number: '04',
    title: 'Measurement & Optimization',
    body: 'Xây tracking, kiểm tra dữ liệu chuyển đổi và dùng kết quả thực tế để điều chỉnh nội dung, ngân sách và hành trình khách hàng.',
  },
];

const foundationPoints = [
  'Nền tảng sản phẩm và thông tin kỹ thuật đã có.',
  'Website phù hợp với cách tiếp cận B2B truyền thống.',
  'Social đã được thiết lập nhưng chưa có nhịp phát triển nội dung liên tục.',
  'Các kênh chưa kể cùng một câu chuyện xuyên suốt.',
];

const growthReadyPoints = [
  'Đưa lợi ích người mua lên trước thông số.',
  'Biến công nghệ 3H thành giá trị dễ hiểu.',
  'Đồng bộ cách thể hiện giữa website, social, video và quảng cáo.',
  'Tạo CTA rõ cho tư vấn, báo giá, Hotline và Zalo.',
  'Thiết kế trải nghiệm phù hợp cả B2B lẫn B2C.',
];

const bottlenecks = [
  {
    title: 'Sản phẩm tốt nhưng thông điệp còn phức tạp',
    body: 'Lợi thế kỹ thuật cần được chuyển thành những giá trị người mua quan tâm: số lớp, thời gian, độ bền, mùi sơn và chi phí.',
  },
  {
    title: 'Traffic chưa có một thông điệp trung tâm',
    body: 'Nếu social, video và quảng cáo nói theo nhiều hướng, khách hàng khó hình thành lý do rõ ràng để chọn sản phẩm.',
  },
  {
    title: 'Website chưa hoàn thành nhiệm vụ chuyển đổi',
    body: 'Traffic cần một điểm đến tiếp nối đúng lời hứa, giảm do dự và mở ra hành động thuận tiện.',
  },
  {
    title: 'Dữ liệu nằm riêng trong từng nền tảng',
    body: 'Mỗi nền tảng nhìn thấy một phần hành trình, khiến việc nối ngân sách với hành động thực tế còn thiếu rõ ràng.',
  },
  {
    title: 'Marketing chưa nhận đủ phản hồi từ sales',
    body: 'Thiếu vòng phản hồi về tốc độ xử lý, chất lượng lead, trạng thái và kết quả bán hàng làm chậm quá trình tối ưu.',
  },
];

const systemNodes = [
  ['Strategy & Offer', 'Xác định khách hàng, vấn đề và lý do chọn sản phẩm.'],
  ['Content & Traffic', 'Biến lợi ích thành nội dung và phân phối theo từng giai đoạn nhận thức.'],
  ['Landing & Conversion', 'Đưa người quan tâm tới điểm đến rõ ràng và hành động thuận tiện.'],
  ['Tracking & Data', 'Ghi nhận các hành động có giá trị trên nhiều nền tảng.'],
  ['CRM & Sales', 'Theo dõi lead, tiến độ xử lý và kết quả bán hàng.'],
  ['Dashboard & Optimization', 'Dùng dữ liệu thực để điều chỉnh nội dung, ngân sách và quy trình.'],
];

const productTimeline = [
  ['2008', 'Hệ sơn chống nứt 4 lớp được triển khai tại Saigon Pearl.'],
  ['2015', 'Tiếp tục cải tiến hệ sơn và xây dựng nhà máy sản xuất tại Việt Nam.'],
  ['2019', 'Rút hệ thống xuống còn 2 lớp.'],
  ['2022', 'OneCoat ra đời với lời hứa chỉ cần 1 lớp.'],
];

const campaignTouchpoints = [
  {
    number: '01',
    label: 'CONTENT',
    body: 'Giải thích vì sao công nghệ và quy trình có thể giảm bớt công đoạn thi công.',
  },
  {
    number: '02',
    label: 'REELS & VIDEO',
    body: 'Dùng hình ảnh công trình, quá trình thi công và kết quả hoàn thiện để biến lời hứa “nhanh” thành bằng chứng có thể nhìn thấy.',
  },
  {
    number: '03',
    label: 'PAID ADS',
    body: 'Đưa pain point về thời gian, sự bất tiện khi sửa nhà và mong muốn hoàn thiện nhanh thành creative chuyển đổi.',
  },
  {
    number: '04',
    label: 'LANDING PAGE',
    body: 'Tiếp tục đúng thông điệp “Thi công siêu tốc — Sáng cũ, chiều mới”, sau đó giải thích điều kiện, công nghệ, chi phí và bằng chứng.',
  },
  {
    number: '05',
    label: 'SALES',
    body: 'Tiếp tục tư vấn trên trục thời gian hoàn thiện, số công đoạn, hiện trạng bề mặt và khả năng đưa không gian vào sử dụng sớm.',
  },
  {
    number: '06',
    label: 'FOLLOW-UP',
    body: 'Gửi đúng video, hình công trình, báo giá và proof liên quan đến điều khách đang do dự.',
  },
];

const contentDistributionFlow = [
  'CONTENT CORE',
  'Facebook Reels',
  'YouTube Shorts',
  'TikTok',
  'Paid Ads',
  'Landing Page',
  'Sales Follow-up',
];

const contentDistributionPrinciples = [
  'Một hướng thông điệp.',
  'Một nguồn footage.',
  'Nhiều format phân phối.',
  'Điều chỉnh hook, caption và CTA theo từng nền tảng.',
  'Không thay đổi lời hứa trung tâm.',
  'Sales có thể tái sử dụng video phù hợp khi follow-up khách.',
];

const conversionVideos: VideoItem[] = [
  {
    id: '42psknixpZ8',
    number: '01',
    title: 'Một lớp — giảm bớt các bước thi công',
    url: 'https://www.youtube.com/shorts/42psknixpZ8',
  },
  {
    id: '9Gl_7uvVrnM',
    number: '02',
    title: 'Tiến độ được chứng minh bằng công trình',
    url: 'https://www.youtube.com/shorts/9Gl_7uvVrnM',
  },
  {
    id: 'N7HB6RX3vCg',
    number: '03',
    title: 'Quy trình hoàn thiện và bàn giao',
    url: 'https://www.youtube.com/shorts/N7HB6RX3vCg',
  },
  {
    id: '6PmZQIQV5ns',
    number: '04',
    title: 'Offer chuyển đổi và CTA rõ ràng',
    url: 'https://www.youtube.com/shorts/6PmZQIQV5ns',
  },
];

const alwaysOnVideos: VideoItem[] = [
  {
    id: 'SgAr0dQPNa0',
    number: '01',
    title: 'Giáo dục vấn đề',
    url: 'https://www.youtube.com/shorts/SgAr0dQPNa0',
  },
  {
    id: '_PJH89ePevQ',
    number: '02',
    title: 'Giải thích sản phẩm',
    url: 'https://www.youtube.com/shorts/_PJH89ePevQ',
  },
  {
    id: 'NtdO51a9ssg',
    number: '03',
    title: 'Chứng minh bằng trải nghiệm thực tế',
    url: 'https://www.youtube.com/shorts/NtdO51a9ssg',
  },
];

const landingFlow = [
  {
    number: '01',
    label: 'CLEAR OFFER',
    body: 'Thông điệp thi công nhanh, sơn một lớp và mức giá tham khảo được đưa lên đầu trang.',
  },
  {
    number: '02',
    label: 'COST ESTIMATOR',
    body: 'Khách có thể chọn loại nhà, nhập diện tích và xem chi phí ước tính trước khi để lại thông tin.',
  },
  {
    number: '03',
    label: 'LEAD QUALIFICATION',
    body: 'Loại nhà, hiện trạng tường và khu vực giúp sales hiểu nhu cầu trước khi liên hệ.',
  },
  {
    number: '04',
    label: 'PROOF STACK',
    body: 'Công nghệ 3H, lợi ích, công trình thực tế, bảng so sánh, báo chí và showroom cùng giảm rủi ro cảm nhận.',
  },
  {
    number: '05',
    label: 'MULTI-CTA',
    body: 'Zalo, Hotline, gửi ảnh tường và khảo sát miễn phí tạo nhiều lựa chọn hành động có mức cam kết khác nhau.',
  },
  {
    number: '06',
    label: 'TRACKING & FOLLOW-UP',
    body: 'Các hành động quan trọng được đo lường để marketing và sales tiếp tục tối ưu.',
  },
];

const buyerQuestions = [
  'Sơn này khác gì hệ sơn truyền thống?',
  'Chi phí nhà của tôi khoảng bao nhiêu?',
  'Nhà cũ, bong tróc hoặc ẩm mốc có xử lý được không?',
  'Bao lâu thì thi công xong?',
  'Có công trình thật để xem không?',
  'Có được khảo sát và báo giá trước không?',
  'Tôi nên gọi, nhắn Zalo hay gửi hình hiện trạng?',
];

const proofChips = [
  'Công nghệ 3 trong 1',
  'Zero VOC',
  'Công trình thực tế',
  'Bảo hành bền màu',
  'Nhiều điểm trải nghiệm',
  'CTA Hotline và Zalo',
];

const trackingLayers = [
  {
    number: '01',
    label: 'CAPTURE',
    items: ['Hotline', 'Zalo', 'Messenger', 'Lead form', 'Landing page conversion'],
  },
  {
    number: '02',
    label: 'TRANSPORT',
    items: ['Web GTM', 'Data layer', 'Server-side GTM'],
  },
  {
    number: '03',
    label: 'DELIVERY',
    items: ['GA4', 'Google Ads Conversion', 'Meta Pixel & Conversions API', 'TikTok Pixel & Events API'],
  },
  {
    number: '04',
    label: 'DATA QUALITY',
    items: ['Event ID', 'Deduplication', 'Advanced Matching', 'Event validation'],
  },
];

const realtimeInsights = [
  {
    number: '01',
    label: 'LIVE ACTIVITY',
    description: 'Xác nhận website đang nhận traffic sau khi campaign được kích hoạt.',
  },
  {
    number: '02',
    label: 'LOCATION CHECK',
    description: 'Kiểm tra traffic có tập trung tại đúng khu vực doanh nghiệp đang phục vụ hay không.',
  },
  {
    number: '03',
    label: 'CAMPAIGN QA',
    description: 'Đối chiếu thời điểm ads, content hoặc landing page bắt đầu chạy với chuyển động thực tế trên website.',
  },
  {
    number: '04',
    label: 'ANOMALY DETECTION',
    description: 'Phát hiện sớm những nguồn hoặc vị trí traffic bất thường để tiếp tục kiểm tra sâu hơn.',
  },
];

const operationalChanges = [
  'Nội dung bám cùng một định vị.',
  'Design hiểu vai trò từng asset.',
  'Video được sản xuất theo từng nhóm mục tiêu.',
  'Ads không tách khỏi landing page.',
  'Tracking được kiểm tra trước khi scale.',
  'Báo cáo có nhận định và hành động tiếp theo.',
  'Dữ liệu dùng để giao việc, không chỉ để báo cáo.',
];

const salesAlignmentFlow = [
  ['CONTENT', 'Giải thích vì sao có thể thi công nhanh.'],
  ['ADS', 'Thu hút bằng pain point thời gian và sự bất tiện khi sửa nhà.'],
  ['LANDING PAGE', 'Chứng minh công nghệ, quy trình, chi phí và công trình thực tế.'],
  ['SALES', 'Xác nhận hiện trạng và tư vấn giải pháp hoàn thiện nhanh trong điều kiện phù hợp.'],
  ['FOLLOW-UP', 'Gửi video, hình công trình, báo giá và proof đúng điều khách đang do dự.'],
];

const salesFeedbackLoop = [
  'Khách hỏi gì',
  'Sales ghi nhận',
  'Marketing tìm pattern',
  'Content giải đáp',
  'Creative mới',
  'Landing page rõ hơn',
  'Lead tốt hơn',
  'Sales tiếp tục phản hồi',
];

const salesFeedbackTypes = [
  'Khách lo vấn đề gì.',
  'Câu hỏi nào xuất hiện nhiều.',
  'Vì sao khách chưa quyết định.',
  'Proof nào giúp khách tin hơn.',
  'Nhóm khách nào có nhu cầu thật.',
  'Nội dung nào khiến khách chủ động liên hệ.',
];

const compoundingLoop = [
  'CÔNG TRÌNH THẬT',
  'HÌNH ẢNH & VIDEO',
  'CONTENT ĐA KÊNH',
  'PAID MEDIA',
  'LANDING PAGE',
  'SALES TƯ VẤN',
  'KHẢO SÁT & THI CÔNG',
  'PROOF MỚI',
];

const compoundingAssets = [
  'Công trình thật',
  'Video',
  'Content angle',
  'Remarketing audience',
  'Landing page',
  'Conversion data',
  'Sales objection library',
  'Proof cho B2B',
];

const impactLayers = [
  {
    number: '01',
    label: 'REVENUE NOW',
    tone: 'text-brand-highlight',
    items: [
      'Xây thêm kênh bán lẻ trực tiếp.',
      'Có giai đoạn doanh thu bán lẻ đạt quy mô vài trăm triệu đồng/tháng.',
      'Doanh thu bán lẻ tích lũy từ hệ thống đã vượt 1 tỷ đồng.',
    ],
  },
  {
    number: '02',
    label: 'BRAND MEMORY',
    tone: 'text-brand-accent',
    items: [
      'Thông điệp “Thi công siêu tốc — Sáng cũ, chiều mới” được lặp lại nhất quán.',
      'Người tiêu dùng hiểu nhanh hơn lợi ích sản phẩm.',
      'Video và paid media vừa tạo lead, vừa tăng độ phủ thương hiệu.',
      'Social, website và công trình thực tế cùng củng cố niềm tin.',
    ],
  },
  {
    number: '03',
    label: 'SALES & B2B ENABLEMENT',
    tone: 'text-brand-accent',
    items: [
      'Sales có thêm video, hình công trình và landing page để hỗ trợ tư vấn.',
      'Đại lý và đối tác có thêm tài sản để giải thích sản phẩm.',
      'Website giúp khách hàng và đối tác dễ kiểm chứng năng lực hơn.',
      'Hoạt động retail tạo thêm độ phủ và hỗ trợ các cuộc trao đổi B2B.',
    ],
  },
  {
    number: '04',
    label: 'COMPOUNDING ASSETS',
    tone: 'text-brand-primary',
    items: [
      'Content library và video library.',
      'Remarketing audiences và landing page.',
      'Tracking infrastructure và conversion data.',
      'Sales feedback và proof từ công trình thực tế.',
    ],
  },
];

const statusColumns = [
  {
    label: 'ĐÃ TRIỂN KHAI',
    tone: 'border-blue-200 bg-brand-accent-soft',
    labelTone: 'text-brand-accent',
    items: [
      'Định vị và hệ thống thông điệp.',
      'Social content và video assets.',
      'Paid media và landing page.',
      'Tracking nền tảng và server-side.',
      'Quy trình phối hợp team.',
    ],
  },
  {
    label: 'ĐANG HOÀN THIỆN',
    tone: 'border-orange-200 bg-brand-highlight-soft',
    labelTone: 'text-brand-highlight',
    items: [
      'Chuẩn hóa dữ liệu lead.',
      'Quy trình phân lead cho sales.',
      'Trạng thái xử lý khách hàng.',
      'Automation nhắc gọi và follow-up.',
    ],
  },
  {
    label: 'LỚP TIẾP THEO',
    tone: 'border-brand-border bg-slate-100',
    labelTone: 'text-brand-secondary',
    items: [
      'CRM và sales pipeline.',
      'Sales feedback quay lại marketing.',
      'Dashboard Looker Studio.',
      'Đánh giá lead quality theo nguồn.',
      'Đối chiếu ngân sách, pipeline và doanh thu.',
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
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} mb-10 max-w-3xl md:mb-14`}>
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

function BulletList({
  items,
  columns = false,
}: {
  items: string[];
  columns?: boolean;
}) {
  return (
    <ul className={`grid gap-3 ${columns ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] font-medium leading-[1.65] text-brand-secondary">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProofImage({
  image,
  alt,
  caption,
  eager = false,
  className = 'aspect-[16/10]',
}: {
  image: ImageAsset;
  alt: string;
  caption: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-brand-soft">
        <img
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          className={`${className} h-full w-full object-contain`}
        />
      </div>
      <figcaption className="mt-3 text-[12px] font-medium leading-[1.6] text-brand-soft-text">
        {caption}
      </figcaption>
    </figure>
  );
}

function ExternalTextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-2 rounded-md text-[14px] font-extrabold text-brand-accent underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
    >
      {children}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function VideoCard({
  video,
  onOpen,
}: {
  video: VideoItem;
  onOpen: (video: VideoItem) => void;
}) {
  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onOpen(video)}
        className="relative block aspect-[9/16] w-full overflow-hidden rounded-[20px] border border-brand-border bg-slate-900 text-left shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
        aria-label={`Phát video: ${video.title}`}
      >
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-85 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-75"
        />
        <span className="absolute inset-0 bg-slate-950/15" aria-hidden="true" />
        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-slate-950/75 px-2.5 py-1 text-[10px] font-black tracking-[0.16em] text-white">
          {video.number}
        </span>
        <span className="absolute inset-x-4 bottom-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-highlight text-white shadow-lg">
            <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <span className="mt-4 block font-heading text-[18px] font-extrabold leading-[1.25] tracking-[-0.025em] text-white">
            {video.title}
          </span>
        </span>
      </button>
    </article>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paint-video-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-[430px] flex-col overflow-hidden rounded-[20px] border border-white/20 bg-slate-950 shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/15 px-4 py-3">
          <h3 id="paint-video-title" className="font-heading text-[15px] font-bold leading-[1.35] text-white">
            {video.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Đóng video"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mx-auto aspect-[9/16] min-h-0 w-full flex-1 bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 border-t border-white/15 px-4 py-3 text-[13px] font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
        >
          Xem trên YouTube
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default function PaintMoreCaseStudyPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nextTitle = 'Paint & More / OneCoat — B2B to Retail Growth System | TP Growth';
    const nextDescription = 'Case study xây hệ thống tăng trưởng bán lẻ cho Paint & More / OneCoat từ định vị, content, ads, landing page và tracking đến CRM, sales và dashboard.';
    const previousTitle = document.title;
    const existingMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = existingMeta?.content;
    const meta = existingMeta ?? document.createElement('meta');

    document.title = nextTitle;
    meta.name = 'description';
    meta.content = nextDescription;

    if (!existingMeta) {
      document.head.appendChild(meta);
    }

    return () => {
      document.title = previousTitle;
      if (existingMeta && previousDescription !== undefined) {
        existingMeta.content = previousDescription;
      } else if (!existingMeta) {
        meta.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    lastFocusedElement.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocusedElement.current?.focus();
    };
  }, [activeVideo]);

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
                <span aria-current="page">Paint & More / OneCoat</span>
              </nav>

              <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
                <div>
                  <Eyebrow>CASE STUDY 01 · B2B → RETAIL GROWTH SYSTEM</Eyebrow>
                  <p className="text-[15px] font-extrabold text-brand-accent">Paint & More / OneCoat</p>
                  <h1 className="mt-4 font-heading text-[40px] font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-[48px] md:text-[56px] lg:text-[62px]">
                    Từ doanh nghiệp mạnh về B2B đến hệ thống tăng trưởng bán lẻ đa kênh
                  </h1>
                  <p className="mt-6 max-w-3xl text-[17px] font-medium leading-[1.75] text-brand-secondary md:text-[19px]">
                    Paint & More đã có nền tảng sản phẩm, kỹ thuật và hệ thống khách hàng B2B. Bài toán không phải chạy thêm một chiến dịch quảng cáo đơn lẻ, mà là kết nối website, social, nội dung, paid media, tracking và đội ngũ thành một hệ thống có thể mở thêm kênh bán lẻ và tiếp tục tối ưu bằng dữ liệu.
                  </p>
                </div>

                <figure className="rounded-[24px] border border-brand-border bg-white p-4 shadow-brand-soft sm:p-5">
                  <div className="border-b border-brand-border pb-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">
                      Digital Growth System in Practice
                    </div>
                    <p className="mt-2 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                      Website, content, paid media và tracking cùng vận hành trên một logic tăng trưởng.
                    </p>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-[16px] border border-brand-border bg-brand-bg">
                    <img
                      src={images.hero.src}
                      alt="Hệ thống nội dung social Paint & More sau khi được phát triển thêm"
                      width={images.hero.width}
                      height={images.hero.height}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="aspect-square h-full w-full object-contain"
                    />
                  </div>
                </figure>
              </div>

              <dl className="mt-12 grid overflow-hidden rounded-[20px] border border-brand-border bg-white sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['Doanh nghiệp', 'Paint & More / OneCoat'],
                  ['Lĩnh vực', 'Sơn và giải pháp bảo vệ bề mặt'],
                  ['Vai trò', 'Marketing Lead / Growth Operator'],
                  ['Phạm vi', 'Strategy, Content Direction, Paid Media, Website, Tracking, Team & Sales Alignment'],
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

              <div className="mt-6 rounded-[20px] border border-blue-200 bg-brand-accent-soft p-6 md:flex md:items-end md:justify-between md:gap-8 md:p-8">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">System result</div>
                  <p className="mt-3 max-w-4xl font-heading text-[24px] font-extrabold leading-[1.25] tracking-[-0.025em] text-brand-primary md:text-[30px]">
                    Một kênh bán lẻ mới được hình thành, đồng thời tạo thêm độ phủ và hỗ trợ nền tảng B2B.
                  </p>
                </div>
                <p className="mt-5 max-w-xs shrink-0 text-[11px] font-medium leading-[1.6] text-brand-soft-text md:mt-0">
                  Có giai đoạn doanh thu bán lẻ đạt quy mô vài trăm triệu đồng/tháng.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
            <div>
              <Eyebrow>THE CONTEXT</Eyebrow>
              <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[46px]">
                Sản phẩm và nền tảng đã có. Điều còn thiếu là một dòng tăng trưởng kết nối.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] font-medium leading-[1.8] text-brand-secondary">
              <p className="font-bold text-brand-primary">Paint & More không bắt đầu từ con số 0.</p>
              <p>Doanh nghiệp đã có nền tảng sản phẩm, công nghệ, kinh nghiệm triển khai công trình, hệ thống đại lý và nhiều giải pháp dành cho những bề mặt khác nhau.</p>
              <p>Khi mở rộng sang bán lẻ, những lợi thế đó chưa tự động chuyển thành tăng trưởng. Người tiêu dùng chưa dễ dàng hiểu sự khác biệt của sản phẩm. Nội dung, quảng cáo, website và dữ liệu đang tồn tại như nhiều mảnh riêng biệt.</p>
              <p>Bài toán không phải tạo thêm thật nhiều hoạt động marketing. Bài toán là kết nối những gì doanh nghiệp đã có thành một hành trình mà khách hàng có thể hiểu, tin và hành động.</p>
              <blockquote className="mt-8 border-l-2 border-brand-accent pl-5 font-heading text-[21px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                “Vấn đề không phải doanh nghiệp thiếu hoạt động marketing. Vấn đề là các hoạt động đó chưa được kết nối thành một hệ thống.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="THE OPERATOR ROLE"
                title="Vai trò không dừng ở chạy quảng cáo"
                intro="Đây không phải dự án của một media buyer làm việc tách rời. Vai trò của Phú là nhìn toàn bộ dòng chảy, trực tiếp phụ trách những lớp cốt lõi và phối hợp các nguồn lực để hệ thống vận hành cùng một hướng."
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
              <p className="mt-6 max-w-4xl text-[13px] font-semibold leading-[1.7] text-brand-soft-text">
                Phú không thực hiện tất cả đầu việc một mình. Giá trị nằm ở việc định hướng, trực tiếp xử lý các lớp quan trọng và giúp nhiều vai trò cùng vận hành theo một logic.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="DIGITAL TRANSFORMATION"
                title="Không phủ định nền tảng cũ. Thiết kế lại trải nghiệm cho giai đoạn tăng trưởng mới."
                intro="Website và social trước đó đã hoàn thành vai trò giới thiệu doanh nghiệp, danh mục sản phẩm và hoạt động B2B. Khi Paint & More mở rộng tiếp cận người tiêu dùng cuối, hệ thống cần một cách kể mới: dễ hiểu hơn, giàu bằng chứng hơn và dẫn người xem tới hành động rõ hơn."
              />

              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
                <div>
                  <div className="mb-4 inline-flex rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-brand-secondary">
                    EXISTING FOUNDATION
                  </div>
                  <ProofImage
                    image={images.websiteOld}
                    alt="Giao diện website Paint & More ở giai đoạn trước khi tái cấu trúc"
                    caption="Website tập trung vào danh mục, thông tin kỹ thuật và nền tảng sản phẩm."
                    className="aspect-[2873/1463]"
                  />
                  <div className="mt-6">
                    <BulletList items={foundationPoints} />
                  </div>
                  <div className="mt-5">
                    <ExternalTextLink href="https://onecoat.vn/">
                      Xem website nền tảng trước đây
                    </ExternalTextLink>
                  </div>
                </div>

                <div>
                  <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-brand-accent-soft px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-brand-accent">
                    GROWTH-READY EXPERIENCE
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <ProofImage
                      image={images.websiteOneCoat}
                      alt="Giao diện website Paint & More mới giới thiệu công nghệ sơn một lớp"
                      caption="OneCoat và lời hứa sơn một lớp."
                      className="aspect-[2880/1391]"
                    />
                    <ProofImage
                      image={images.websiteIndustrial}
                      alt="Giao diện website Paint & More mới giới thiệu nhóm sơn công nghiệp"
                      caption="Nhóm giải pháp sơn công nghiệp."
                      className="aspect-[2855/1386]"
                    />
                    <ProofImage
                      image={images.websiteTechnology}
                      alt="Giao diện website Paint & More mới trình bày công nghệ và lợi ích sản phẩm"
                      caption="Công nghệ 3H được chuyển thành lợi ích."
                      className="aspect-[2855/1387]"
                    />
                    <ProofImage
                      image={images.websiteProjects}
                      alt="Giao diện website Paint & More mới giới thiệu dự án thực tế"
                      caption="Công trình trở thành lớp bằng chứng."
                      className="aspect-[2837/1391]"
                    />
                  </div>
                  <p className="mt-5 text-[13px] font-semibold leading-[1.65] text-brand-secondary">
                    Trải nghiệm mới đưa công nghệ, lợi ích, nhóm sản phẩm và công trình vào cùng một câu chuyện thương hiệu.
                  </p>
                  <div className="mt-6">
                    <BulletList items={growthReadyPoints} />
                  </div>
                  <div className="mt-5">
                    <ExternalTextLink href="https://paintandmore.vn/">
                      Xem website hiện tại
                    </ExternalTextLink>
                  </div>
                </div>
              </div>

              <div className="mt-14 grid gap-8 border-t border-brand-border pt-10 md:grid-cols-2">
                <div>
                  <div className="mb-4 text-[11px] font-black uppercase tracking-[0.16em] text-brand-secondary">Kênh đã có</div>
                  <ProofImage
                    image={images.socialOld}
                    alt="Kênh social Paint & More trước khi tái cấu trúc nội dung"
                    caption="Social đã được thiết lập và phục vụ giai đoạn phát triển trước đó."
                    className="aspect-square"
                  />
                </div>
                <div>
                  <div className="mb-4 text-[11px] font-black uppercase tracking-[0.16em] text-brand-accent">Hệ thống nội dung được tái cấu trúc</div>
                  <ProofImage
                    image={images.socialNew}
                    alt="Hệ thống nội dung social Paint & More sau khi được phát triển thêm"
                    caption="Nội dung được mở rộng theo nhóm vấn đề, bề mặt, bằng chứng và mục tiêu truyền thông."
                    className="aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="SYSTEM DIAGNOSIS"
              title="Quảng cáo không phải điểm nghẽn duy nhất"
              intro="Nhìn toàn bộ hành trình cho thấy năm điểm nghẽn có liên quan trực tiếp với nhau."
            />
            <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
              {bottlenecks.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="font-heading text-[32px] font-extrabold tracking-[-0.05em] text-brand-accent">0{index + 1}</div>
                  <h3 className="mt-5 font-heading text-[18px] font-extrabold leading-[1.2] tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-4 text-[13px] font-medium leading-[1.7] text-brand-secondary">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="THE GROWTH SYSTEM"
              title="Không sửa từng kênh. Xây lại dòng chảy giữa các kênh."
            />
            <ol className="mx-auto max-w-7xl border-l border-blue-200 pl-5 lg:grid lg:grid-cols-6 lg:border-l-0 lg:pl-0">
              {systemNodes.map(([title, body], index) => (
                <li
                  key={title}
                  className="relative border-b border-brand-border py-6 last:border-b-0 lg:border-b-0 lg:border-l lg:border-blue-200 lg:px-5 lg:first:border-l-0"
                >
                  <span className="absolute -left-[27px] top-8 h-3 w-3 rounded-full border-2 border-white bg-brand-accent lg:static lg:block lg:h-auto lg:w-auto lg:rounded-none lg:border-0 lg:bg-transparent lg:text-[10px] lg:font-black lg:tracking-[0.16em] lg:text-brand-accent">
                    <span className="sr-only lg:not-sr-only">0{index + 1}</span>
                  </span>
                  <h3 className="font-heading text-[18px] font-extrabold leading-[1.15] tracking-[-0.025em] lg:mt-5">{title}</h3>
                  <p className="mt-3 text-[13px] font-medium leading-[1.65] text-brand-secondary">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="PRODUCT STORY"
                title="Từ nhiều năm kỹ thuật thành một lời hứa người mua hiểu trong vài giây."
                intro="Timeline này không thay thế lịch sử doanh nghiệp. Nó là bằng chứng cho cách định vị sản phẩm được hình thành từ quá trình cải tiến thật."
              />
              <ol className="relative grid gap-0 border-l-2 border-blue-200 pl-7 md:grid-cols-4 md:border-l-0 md:border-t-2 md:pl-0">
                {productTimeline.map(([year, body]) => (
                  <li key={year} className="relative pb-9 last:pb-0 md:px-5 md:pb-0 md:pt-8">
                    <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-accent md:-top-[9px] md:left-5" aria-hidden="true" />
                    <div className="font-heading text-[26px] font-extrabold tracking-[-0.04em] text-brand-accent">{year}</div>
                    <p className="mt-3 text-[14px] font-semibold leading-[1.65] text-brand-secondary">{body}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-12 grid items-center gap-8 rounded-[20px] border border-blue-200 bg-brand-accent-soft p-6 md:grid-cols-[1.25fr_0.75fr] md:p-8">
                <p className="text-[15px] font-medium leading-[1.75] text-brand-secondary">
                  Marketing không tạo ra khác biệt kỹ thuật này. Nhiệm vụ của marketing là chuyển hành trình nghiên cứu và kinh nghiệm công trường thành một thông điệp rõ: ít bước hơn, nhanh hơn, dễ thi công hơn và dễ ra quyết định hơn.
                </p>
                <p className="font-heading text-[25px] font-extrabold leading-[1.25] tracking-[-0.035em] text-brand-accent md:text-[31px]">
                  “Sơn công nghệ Mỹ — Chỉ cần một lớp.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
                <div>
                  <Eyebrow>THE CAMPAIGN BACKBONE</Eyebrow>
                  <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[46px]">
                    Một lời hứa trung tâm. Mọi điểm chạm cùng nói một ngôn ngữ.
                  </h2>
                  <div className="mt-6 space-y-4 text-[15px] font-medium leading-[1.75] text-brand-secondary">
                    <p>Khách hàng không trải nghiệm content, quảng cáo, website và sales như những bộ phận riêng biệt. Họ trải nghiệm toàn bộ doanh nghiệp.</p>
                    <p>Vì vậy, campaign không thể để mỗi kênh tự chọn một thông điệp khác nhau. Xương sống được giữ nhất quán là tốc độ hoàn thiện: giảm bớt công đoạn, rút ngắn thời gian thi công và giúp khách sớm đưa không gian trở lại sử dụng.</p>
                  </div>
                </div>
                <div className="rounded-[20px] border border-orange-200 bg-brand-highlight-soft p-6 md:p-9">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-highlight">MESSAGE CORE</div>
                  <p className="mt-5 font-heading text-[34px] font-extrabold leading-[1.02] tracking-[-0.045em] text-brand-primary sm:text-[42px] md:text-[52px]">
                    THI CÔNG SIÊU TỐC
                    <span className="mt-3 block text-brand-highlight">SÁNG CŨ, CHIỀU MỚI.</span>
                  </p>
                  <p className="mt-6 border-t border-orange-200 pt-5 text-[13px] font-semibold leading-[1.7] text-brand-secondary">
                    Các lợi ích như sạch sẽ, ít mùi, an toàn, thẩm mỹ và tối ưu tổng chi phí đóng vai trò củng cố cho lời hứa chính — không thay thế lời hứa chính.
                  </p>
                </div>
              </div>

              <ol className="mt-12 grid border-y border-brand-border md:grid-cols-2 lg:grid-cols-3">
                {campaignTouchpoints.map((touchpoint, index) => (
                  <li
                    key={touchpoint.number}
                    className={`py-6 md:p-7 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t' : ''} ${index % 3 !== 0 ? 'lg:border-l' : 'lg:border-l-0'} ${index > 2 ? 'lg:border-t' : 'lg:border-t-0'}`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-[21px] font-extrabold text-brand-highlight">{touchpoint.number}</span>
                      <h3 className="text-[11px] font-black tracking-[0.16em] text-brand-primary">{touchpoint.label}</h3>
                    </div>
                    <p className="mt-4 text-[14px] font-medium leading-[1.7] text-brand-secondary">{touchpoint.body}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-7 max-w-5xl border-l-2 border-brand-highlight pl-5 text-[15px] font-bold leading-[1.7] text-brand-primary">
                Nếu quảng cáo nói nhanh nhưng sales chỉ nói tiết kiệm, hành trình bị gãy. Khi tất cả cùng bám một xương sống, mỗi điểm chạm củng cố cho điểm chạm trước đó.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="CONTENT DISTRIBUTION SYSTEM"
                title="Một nội dung lõi. Nhiều điểm phân phối."
                intro="Thay vì mỗi nền tảng tự sản xuất một câu chuyện khác nhau, hệ thống bắt đầu từ một content core chung. Cùng một lợi ích sản phẩm có thể được triển khai thành Facebook Reel, YouTube Short, TikTok video, quảng cáo chuyển đổi, visual trên landing page và tài liệu hỗ trợ sales."
                align="left"
              />

              <div className="grid items-start gap-9 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12">
                <ProofImage
                  image={images.reelsContentSystem}
                  alt="Fanpage Reels Paint & More với tuyến nội dung sơn lại nhà"
                  caption="Content được xây theo tuyến rõ ràng để một insight có thể tiếp tục sống trên nhiều điểm chạm."
                  className="aspect-[1196/911]"
                />
                <div>
                  <p className="text-[16px] font-bold leading-[1.7] text-brand-primary">
                    Giữ chung content core, nhưng điều chỉnh cách đóng gói theo hành vi từng nền tảng.
                  </p>
                  <div className="mt-6">
                    <BulletList items={contentDistributionPrinciples} />
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-2.5 border-y border-brand-border py-5">
                {contentDistributionFlow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2.5">
                    <span className={`rounded-full px-3 py-2 text-[11px] font-extrabold ${index === 0 ? 'bg-brand-highlight text-white' : 'border border-blue-200 bg-brand-accent-soft text-brand-accent'}`}>
                      {step}
                    </span>
                    {index < contentDistributionFlow.length - 1 && <ArrowRight className="h-4 w-4 text-brand-soft-text" aria-hidden="true" />}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-7 md:grid-cols-[0.88fr_1.12fr]">
                <ProofImage
                  image={images.facebookAdsMessages}
                  alt="Hệ thống Facebook Ads Messages và remarketing cho Paint & More"
                  caption="Những creative đã chứng minh được khả năng thu hút có thể tiếp tục dùng cho quảng cáo chuyển đổi và remarketing."
                  className="aspect-[1196/960]"
                />
                <ProofImage
                  image={images.youtubeShortsDistribution}
                  alt="Kênh YouTube Shorts Paint & More với các video từ cùng tuyến nội dung sơn lại"
                  caption="Cùng content core được đóng gói lại cho YouTube Shorts, với hook và nhịp xem phù hợp nền tảng."
                  className="aspect-[1199/782]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div>
                <Eyebrow>CONTENT SYSTEM</Eyebrow>
                <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[44px]">
                  Content không chỉ để đăng đều. Mỗi nội dung phải đảm nhận một vai trò.
                </h2>
              </div>
              <div className="mt-8 grid border-y border-brand-border md:grid-cols-2 lg:grid-cols-4">
                {[
                  ['01', 'Giáo dục thị trường'],
                  ['02', 'Tạo nhu cầu'],
                  ['03', 'Chứng minh bằng công trình và trải nghiệm thật'],
                  ['04', 'Chuyển đổi qua chương trình, báo giá, Hotline và Zalo'],
                ].map(([number, role], index) => (
                  <div key={number} className={`py-5 md:p-6 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''}`}>
                    <span className="font-heading text-[20px] font-extrabold text-brand-accent">{number}</span>
                    <p className="mt-3 text-[14px] font-semibold leading-[1.65] text-brand-secondary">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="VIDEO SYSTEM"
                title="Video không chỉ để có lượt xem. Mỗi format phải đưa khách hàng tiến thêm một bước trong funnel."
                intro="Một nhóm video tạo nhu cầu và kéo hành động. Một nhóm khác giải thích vấn đề, nuôi niềm tin và giúp thương hiệu được ghi nhớ. Khi được phân vai rõ, video trở thành tài sản dùng cho social, paid media, remarketing và sales."
              />

              <div>
                <div className="mb-7 max-w-3xl">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-highlight">CONVERSION VIDEO ADS</h3>
                  <p className="mt-3 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                    Video ngắn được phát triển quanh pain point, lợi ích sản phẩm, bằng chứng và CTA.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {conversionVideos.map((video) => (
                    <div key={video.id}>
                      <VideoCard video={video} onOpen={setActiveVideo} />
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-l-2 border-brand-highlight pl-4 text-[13px] font-extrabold leading-[1.6] text-brand-primary">
                  Pain point → Product benefit → Proof → Offer → Hotline / Zalo / Landing page
                </p>
              </div>

              <div className="mt-16 border-t border-brand-border pt-12">
                <div className="mb-7 max-w-3xl">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-accent">ALWAYS-ON CONTENT</h3>
                  <p className="mt-3 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                    Nhóm nội dung duy trì khả năng giải thích, giáo dục thị trường và chứng minh trải nghiệm thực tế.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {alwaysOnVideos.map((video) => (
                    <div key={video.id}>
                      <VideoCard video={video} onOpen={setActiveVideo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <Eyebrow>5.3 · PAID MEDIA</Eyebrow>
                <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[44px]">
                  Mỗi nền tảng đảm nhận một nhiệm vụ trong cùng một funnel
                </h2>
                <div className="mt-8 divide-y divide-brand-border border-y border-brand-border">
                  {[
                    ['Meta Ads', 'Pain point, demand generation, lead, Hotline/Zalo và remarketing.'],
                    ['TikTok Ads', 'Video ngắn, mở rộng tệp mới và kiểm tra content angle.'],
                    ['Google Ads', 'Tiếp cận nhu cầu chủ động và đo conversion.'],
                    ['YouTube Ads', 'Phân phối video, xây nhận biết và remarketing.'],
                  ].map(([platform, role]) => (
                    <div key={platform} className="grid gap-2 py-4 sm:grid-cols-[120px_1fr] sm:gap-5">
                      <h3 className="font-heading text-[16px] font-extrabold text-brand-accent">{platform}</h3>
                      <p className="text-[14px] font-medium leading-[1.65] text-brand-secondary">{role}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[12px] font-semibold leading-[1.6] text-brand-soft-text">
                  Các nền tảng được phân vai theo nhu cầu từng thời điểm, không mặc định chạy đồng thời.
                </p>
              </div>
              <ProofImage
                image={images.paidMedia}
                alt="Nội dung video Paint & More được phân phối cho chiến dịch YouTube Ads"
                caption="Một lát cắt nội dung video dùng cho phân phối và chuyển đổi; cấu hình nền tảng thay đổi theo từng giai đoạn."
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="5.4 · WEBSITE & CONVERSION ENGINE"
                title="Landing page không chỉ đẹp hơn. Nó được xây để giảm do dự và tạo hành động."
                intro="Trang báo giá sơn nhà trọn gói gom toàn bộ lời hứa của campaign vào một hành trình rõ ràng: định vị sơn 1 lớp, đưa offer lên sớm, giúp khách tự ước tính chi phí, giải thích công nghệ, chứng minh bằng công trình và mở nhiều điểm chuyển đổi qua Zalo, Hotline và khảo sát miễn phí."
              />
              <div className="flex justify-center">
                <ExternalTextLink href="https://paintandmore.vn/bao-gia-son-nha-tron-goi/">
                  Xem landing page thực tế
                </ExternalTextLink>
              </div>

              <div className="mt-12 border-y border-brand-border py-10">
                <div className="grid items-start gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-highlight">MESSAGE MATCH</div>
                    <h3 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] md:text-[36px]">
                      Landing page phải tiếp tục đúng câu chuyện mà quảng cáo vừa bắt đầu.
                    </h3>
                    <div className="mt-5 space-y-4 text-[15px] font-medium leading-[1.75] text-brand-secondary">
                      <p>Khách click vào quảng cáo vì lời hứa về tốc độ. Vì vậy landing page không được đổi sang một câu chuyện khác.</p>
                      <p>Trang tiếp tục đưa lợi ích hoàn thiện nhanh lên đầu, sau đó mới mở rộng sang an toàn, sạch sẽ, thẩm mỹ, chi phí, công nghệ, công trình thực tế và khảo sát.</p>
                    </div>
                  </div>
                  <figure>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-brand-soft">
                      <img
                        src={images.landingSpeedMessage.src}
                        alt="Landing page Paint & More với thông điệp thi công siêu tốc"
                        width={images.landingSpeedMessage.width}
                        height={images.landingSpeedMessage.height}
                        loading="lazy"
                        decoding="async"
                        className="absolute left-0 top-0 h-auto w-full max-w-none origin-[67%_26%] scale-[5] sm:scale-[4] lg:scale-[3.2]"
                      />
                    </div>
                    <figcaption className="mt-3 text-[12px] font-medium leading-[1.6] text-brand-soft-text">
                      Chi tiết headline “Thi công siêu tốc — Sơn nhanh trong ngày — Sáng cũ chiều mới” trong screenshot landing page tại thời điểm đo hiệu năng.
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-9 grid border-y border-brand-border md:grid-cols-2 lg:grid-cols-4">
                  {[
                    ['ADS', 'Thi công siêu tốc'],
                    ['LANDING PAGE', 'Sơn nhanh trong ngày — Sáng cũ chiều mới'],
                    ['SALES', 'Tư vấn theo thời gian hoàn thiện và điều kiện thực tế của công trình'],
                    ['FOLLOW-UP', 'Gửi proof, báo giá và video công trình phù hợp'],
                  ].map(([label, message], index) => (
                    <div key={label} className={`py-5 md:p-6 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''}`}>
                      <div className="text-[10px] font-black tracking-[0.15em] text-brand-highlight">{label}</div>
                      <p className="mt-3 text-[14px] font-semibold leading-[1.65] text-brand-secondary">{message}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-7 max-w-5xl font-heading text-[20px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                  Conversion không đến từ một headline đơn lẻ. Nó đến từ việc khách không phải học lại một câu chuyện mới ở mỗi điểm chạm.
                </p>
              </div>

              <ol className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
                {landingFlow.map((step) => (
                  <li key={step.number} className="border-t border-brand-border py-7">
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-[25px] font-extrabold tracking-[-0.04em] text-brand-accent">{step.number}</span>
                      <h3 className="text-[11px] font-black tracking-[0.15em] text-brand-primary">{step.label}</h3>
                    </div>
                    <p className="mt-4 text-[14px] font-medium leading-[1.7] text-brand-secondary">{step.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-12 grid gap-8 rounded-[20px] border border-brand-border bg-white p-6 shadow-brand-soft md:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-highlight">WHY IT CONVERTED</div>
                  <h3 className="mt-4 font-heading text-[27px] font-extrabold leading-[1.15] tracking-[-0.035em]">
                    Trang không ép khách mua ngay. Nó giúp khách trả lời lần lượt những câu hỏi đang khiến họ do dự.
                  </h3>
                </div>
                <ul className="grid gap-x-8 divide-y divide-brand-border sm:grid-cols-2 sm:divide-y-0">
                  {buyerQuestions.map((question) => (
                    <li key={question} className="border-b border-brand-border py-3 text-[14px] font-semibold leading-[1.6] text-brand-secondary">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Các lớp bằng chứng trên landing page">
                {proofChips.map((chip) => (
                  <span key={chip} className="rounded-full border border-blue-200 bg-brand-accent-soft px-3.5 py-2 text-[12px] font-bold text-brand-accent">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 rounded-[20px] border border-orange-200 bg-brand-highlight-soft p-6 md:p-8">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-highlight">INTERNAL OPERATING RESULT</div>
                <p className="mt-4 max-w-5xl font-heading text-[25px] font-extrabold leading-[1.3] tracking-[-0.03em] text-brand-primary md:text-[32px]">
                  Landing page cùng paid media và sales follow-up đã góp phần tạo ra doanh thu bán lẻ tích lũy ở quy mô trên 1 tỷ đồng.
                </p>
                <p className="mt-5 max-w-5xl text-[12px] font-semibold leading-[1.65] text-brand-secondary">
                  Doanh thu bán lẻ tích lũy trên 1 tỷ đồng đến từ toàn bộ hệ thống gồm offer, content, paid media, landing page, tracking và sales follow-up; không quy toàn bộ kết quả cho riêng một kênh hoặc một giao diện.
                </p>
                <p className="mt-3 text-[12px] font-medium leading-[1.65] text-brand-soft-text">
                  Offer được điều chỉnh theo từng giai đoạn campaign; hình ảnh được giữ nguyên theo thời điểm triển khai.
                </p>
              </div>

              <div className="mt-14 grid items-center gap-10 border-t border-brand-border pt-12 lg:grid-cols-[1fr_0.8fr] lg:gap-14">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">PERFORMANCE & CONVERSION HYGIENE</div>
                  <h3 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] md:text-[36px]">
                    Một trang nhiều ảnh và video vẫn phải đủ nhẹ để không làm mất khách trước khi họ kịp hiểu offer.
                  </h3>
                  <div className="mt-7">
                    <BulletList
                      items={[
                        'Tái cấu trúc thứ tự thông tin',
                        'Đưa USP lên sớm',
                        'Tối ưu mobile',
                        'Giảm tải ảnh, video và thành phần nặng',
                        'Làm rõ CTA Hotline và Zalo',
                        'Theo dõi click tại các điểm liên hệ',
                      ]}
                      columns
                    />
                  </div>
                </div>
                <ProofImage
                  image={images.landingSpeedMessage}
                  alt="Kiểm tra hiệu năng mobile cho landing page nhiều ảnh và video"
                  caption="Kết quả đo hiệu năng là ảnh chụp tại một thời điểm, được dùng để kiểm tra và tiếp tục tối ưu."
                  className="aspect-[6/7]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
                <Eyebrow>5.5 · TRACKING INFRASTRUCTURE</Eyebrow>
                <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[38px] md:text-[46px]">
                  Tracking không chỉ để báo cáo.
                  <span className="mt-2 block text-brand-accent">Nó giúp nền tảng quảng cáo học từ đúng hành động kinh doanh.</span>
                </h2>
                <p className="mt-5 text-[16px] font-medium leading-[1.75] text-brand-secondary md:text-[17px]">
                  Mục tiêu là giảm thất thoát tín hiệu, kiểm soát chất lượng sự kiện và biết ngân sách đang tạo ra Hotline, Zalo, Messenger hay Lead.
                </p>
              </div>

              <div className="grid items-start gap-9 lg:grid-cols-[1.45fr_0.75fr] lg:gap-12">
                <ProofImage
                  image={images.serverGtmTags}
                  alt="Server-side GTM phân phối sự kiện Hotline, Zalo và Messenger"
                  caption="Server-side GTM phân phối sự kiện cho GA4, Google Ads, Meta Conversions API và TikTok Events API theo từng loại hành động."
                  className="aspect-[1888/1147]"
                />
                <div className="lg:pt-2">
                  <h3 className="font-heading text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em]">Không chỉ ghi PageView.</h3>
                  <p className="mt-4 text-[15px] font-medium leading-[1.75] text-brand-secondary">
                    Hệ thống được cấu hình để ghi nhận những hành động có giá trị với doanh nghiệp dịch vụ:
                  </p>
                  <div className="mt-6">
                    <BulletList items={['Hotline click', 'Zalo click', 'Messenger click', 'Lead submit', 'Purchase hoặc qualified conversion khi có dữ liệu phù hợp']} />
                  </div>
                </div>
              </div>

              <div className="mt-14 grid items-start gap-9 border-t border-brand-border pt-12 lg:grid-cols-[0.75fr_1.45fr] lg:gap-12">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">EVENT VERIFICATION</div>
                  <h3 className="mt-4 font-heading text-[27px] font-extrabold leading-[1.15] tracking-[-0.03em]">
                    Đúng hành động phải kích hoạt đúng event, đúng nền tảng và không ghi trùng.
                  </h3>
                  <div className="mt-5 space-y-4 text-[15px] font-medium leading-[1.75] text-brand-secondary">
                    <p>Conversion phải được test từ hành động thực tế, qua GTM, tới từng nền tảng nhận dữ liệu.</p>
                    <p>Event ID và deduplication giúp hạn chế việc browser và server ghi trùng một conversion. Advanced Matching giúp nền tảng đối chiếu tín hiệu tốt hơn khi có dữ liệu hợp lệ và consent phù hợp.</p>
                  </div>
                </div>
                <ProofImage
                  image={images.capiDebugZaloResult}
                  alt="GTM debug xác minh sự kiện được gửi đến Meta, Google và TikTok"
                  caption="GTM debug cho thấy sự kiện click_mess kích hoạt các tag tương ứng; phần Ads Manager bên dưới là một proof kết quả tại thời điểm test."
                  className="aspect-[1888/1436]"
                />
              </div>

              <div className="mt-14 border-t border-brand-border pt-12">
                <SectionHeading
                  eyebrow="FOUR-LAYER ARCHITECTURE"
                  title="Từ hành động của khách tới tín hiệu mà campaign có thể học."
                  align="left"
                />
                <ol className="grid border-y border-brand-border md:grid-cols-2 lg:grid-cols-4">
                  {trackingLayers.map((layer, index) => (
                    <li key={layer.number} className={`py-6 md:p-7 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''}`}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-heading text-[22px] font-extrabold text-brand-accent">{layer.number}</span>
                        <h3 className="text-[11px] font-black tracking-[0.16em] text-brand-primary">{layer.label}</h3>
                      </div>
                      <ul className="mt-5 space-y-2">
                        {layer.items.map((item) => (
                          <li key={item} className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap items-center gap-2.5 rounded-[20px] border border-blue-200 bg-brand-accent-soft p-5 md:p-6">
                  {['CUSTOMER ACTION', 'WEB GTM', 'SERVER-SIDE GTM', 'META / GOOGLE / TIKTOK / GA4', 'CAMPAIGN OPTIMIZATION'].map((step, index, flow) => (
                    <div key={step} className="flex items-center gap-2.5">
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-2 text-[10px] font-black tracking-[0.08em] text-brand-accent">{step}</span>
                      {index < flow.length - 1 && <ArrowRight className="h-4 w-4 text-brand-accent" aria-hidden="true" />}
                    </div>
                  ))}
                </div>

                <p className="mt-7 max-w-5xl text-[14px] font-medium leading-[1.75] text-brand-secondary">
                  Web tracking vẫn có thể chịu ảnh hưởng từ trình duyệt, iOS, privacy restrictions và các công cụ chặn theo dõi. Server-side GTM và Conversion API không loại bỏ hoàn toàn các giới hạn đó. Giá trị của hệ thống là giảm bớt sự phụ thuộc vào pixel phía trình duyệt, kiểm soát dữ liệu tốt hơn và duy trì tín hiệu conversion ổn định hơn khi cấu hình, consent và dữ liệu đầu vào phù hợp.
                </p>
              </div>

              <div className="mt-16 border-t border-brand-border pt-12">
                <SectionHeading
                  eyebrow="REALTIME VISIBILITY"
                  title="Tracking tốt không chỉ cho biết đã gắn tag. Nó cho team biết hệ thống đang thực sự có chuyển động."
                  intro="GA4 Realtime cung cấp một lớp quan sát vận hành ngay sau khi content, quảng cáo hoặc landing page được đưa vào chạy. Team có thể kiểm tra website đang có người dùng hoạt động hay không, traffic đang xuất hiện tại những khu vực nào và liệu dòng truy cập có phù hợp với phạm vi campaign đang triển khai."
                  align="left"
                />

                <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,1fr)] lg:gap-12">
                  <div className="[&_figcaption]:text-[14px]">
                    <ProofImage
                      image={images.ga4RealtimeTraffic}
                      alt="Báo cáo GA4 Realtime hiển thị người dùng đang hoạt động và phân bố traffic theo thành phố"
                      caption="GA4 Realtime được dùng để kiểm tra nhanh lượng người dùng đang hoạt động và phân bố traffic theo khu vực tại thời điểm quan sát."
                      className="aspect-[1888/1895]"
                    />
                  </div>

                  <ol className="border-y border-brand-border">
                    {realtimeInsights.map((insight, index) => (
                      <li
                        key={insight.number}
                        className={`grid grid-cols-[42px_1fr] gap-3 py-5 ${index < realtimeInsights.length - 1 ? 'border-b border-brand-border' : ''}`}
                      >
                        <span className="font-heading text-[18px] font-extrabold text-brand-accent">
                          {insight.number}
                        </span>
                        <div>
                          <h3 className="text-[11px] font-black tracking-[0.14em] text-brand-primary">
                            {insight.label}
                          </h3>
                          <p className="mt-2 text-[14px] font-medium leading-[1.65] text-brand-secondary">
                            {insight.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <p className="mt-5 text-[12px] font-semibold leading-[1.7] text-brand-soft-text">
                  Tại thời điểm ảnh được ghi nhận, GA4 hiển thị 41 người dùng hoạt động trong 30 phút gần nhất. Dữ liệu Realtime là ảnh chụp tại một thời điểm và có thể thay đổi liên tục; số người dùng hoạt động không đồng nghĩa với số lead hoặc khách hàng.
                </p>

                <div className="mt-8 rounded-[20px] border border-blue-200 bg-brand-accent-soft p-5 md:p-7">
                  <p className="font-heading text-[18px] font-extrabold leading-[1.55] tracking-[-0.02em] text-brand-primary md:text-[20px]">
                    <span className="block">Realtime trả lời câu hỏi: website có đang nhận traffic và traffic đến từ đâu.</span>
                    <span className="mt-2 block text-brand-accent">Conversion tracking trả lời câu hỏi: traffic đó đã tạo ra Hotline, Zalo, Messenger, Lead hay hành động kinh doanh nào.</span>
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5">
                    {['TRAFFIC APPEARS', 'GA4 REALTIME', 'USER ACTION', 'GTM / SERVER-SIDE', 'CONVERSION PLATFORM', 'CAMPAIGN OPTIMIZATION'].map((step, index, flow) => (
                      <div key={step} className="flex items-center gap-2.5">
                        <span className="rounded-full border border-blue-200 bg-white px-3 py-2 text-[10px] font-black tracking-[0.08em] text-brand-accent">
                          {step}
                        </span>
                        {index < flow.length - 1 && <ArrowRight className="h-4 w-4 text-brand-accent" aria-hidden="true" />}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-7 max-w-5xl text-[14px] font-medium leading-[1.75] text-brand-secondary">
                  GA4 Realtime giúp kiểm tra chuyển động ban đầu, nhưng không được dùng riêng lẻ để đánh giá hiệu quả kinh doanh. Giá trị chỉ đầy đủ khi dữ liệu traffic được nối tiếp bằng conversion event, chất lượng lead và phản hồi từ sales.
                </p>
                <p className="mt-5 max-w-5xl border-l-2 border-brand-accent pl-5 text-[14px] font-bold leading-[1.75] text-brand-primary">
                  Biết website đang có người dùng mới chỉ là lớp đầu tiên. Bước tiếp theo là đảm bảo những hành động có giá trị như Zalo, Messenger, Hotline và Lead được ghi nhận đúng để nền tảng quảng cáo có tín hiệu tối ưu tốt hơn.
                </p>
              </div>

              <div className="mt-16 border-t border-brand-border pt-12">
                <SectionHeading
                  eyebrow="OPTIMIZATION EVIDENCE"
                  title="Khi creative và conversion signal cùng được tối ưu, ngân sách có thể học nhanh hơn."
                  intro="Tracking không tự làm quảng cáo rẻ. Kết quả tốt đến từ sự phối hợp giữa message, creative, targeting, landing page, conversion signal và khả năng follow-up của sales."
                />
                <div className="grid gap-6 lg:grid-cols-2">
                  <article className="rounded-[20px] border border-brand-border bg-brand-bg p-5 shadow-brand-soft md:p-6">
                    <ProofImage
                      image={images.trackingCheapMessages}
                      alt="Kết quả thử nghiệm quảng cáo Messages sau khi tối ưu creative và tracking"
                      caption="Ads Manager ghi nhận kết quả tại thời điểm test creative và tracking."
                      className="aspect-[1888/631]"
                    />
                    <div className="mt-6 border-t border-brand-border pt-5">
                      <div className="font-heading text-[31px] font-extrabold tracking-[-0.04em] text-brand-highlight">Khoảng 2.180đ / kết quả</div>
                      <p className="mt-2 text-[14px] font-semibold leading-[1.65] text-brand-secondary">Một test ghi nhận khoảng 21 kết quả từ mức chi tiêu khoảng 50.141 đồng.</p>
                    </div>
                  </article>
                  <article className="rounded-[20px] border border-brand-border bg-brand-bg p-5 shadow-brand-soft md:p-6">
                    <ProofImage
                      image={images.capiDebugZaloResult}
                      alt="Kết quả thử nghiệm quảng cáo website tối ưu theo click Zalo"
                      caption="Ảnh ghép giữ nguyên phần xác minh event và kết quả click Zalo trong Ads Manager."
                      className="aspect-[1888/1436]"
                    />
                    <div className="mt-6 border-t border-brand-border pt-5">
                      <div className="font-heading text-[31px] font-extrabold tracking-[-0.04em] text-brand-accent">Khoảng 18.313đ / click Zalo</div>
                      <p className="mt-2 text-[14px] font-semibold leading-[1.65] text-brand-secondary">Một test website conversion ghi nhận 7 click Zalo từ mức chi tiêu khoảng 128.190 đồng.</p>
                    </div>
                  </article>
                </div>
                <p className="mt-6 text-[12px] font-semibold leading-[1.65] text-brand-soft-text">
                  Các chỉ số quảng cáo được ghi nhận tại từng thời điểm test cụ thể, không phải cam kết chi phí cố định cho mọi campaign.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="MARKETING × SALES ALIGNMENT"
                title="Chuyển đổi không dừng ở nút Zalo."
                intro="Marketing có thể đưa đúng khách vào đúng landing page. Nhưng nếu cuộc tư vấn tiếp theo đổi sang một thông điệp khác, toàn bộ lợi thế trước đó bị giảm đi. Với campaign này, sales cần tiếp tục bám chắc lời hứa về tốc độ: ít công đoạn hơn, rút ngắn thời gian hoàn thiện và giúp khách sớm đưa không gian trở lại sử dụng."
              />

              <ol className="border-l-2 border-orange-200 pl-6 lg:grid lg:grid-cols-5 lg:border-l-0 lg:border-t-2 lg:pl-0">
                {salesAlignmentFlow.map(([label, body]) => (
                  <li key={label} className="relative pb-8 last:pb-0 lg:px-5 lg:pb-0 lg:pt-8">
                    <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-brand-highlight lg:-top-[8px] lg:left-5" aria-hidden="true" />
                    <div className="text-[10px] font-black tracking-[0.16em] text-brand-highlight">{label}</div>
                    <p className="mt-3 text-[14px] font-semibold leading-[1.65] text-brand-secondary">{body}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-5xl border-l-2 border-brand-highlight pl-5 text-[14px] font-bold leading-[1.7] text-brand-primary">
                Tiết kiệm vẫn là lợi ích quan trọng, nhưng không được làm mất xương sống “Thi công siêu tốc — Sáng cũ, chiều mới”.
              </p>

              <div className="mt-14 rounded-[20px] border border-brand-border bg-white p-6 shadow-brand-soft md:p-8">
                <h3 className="font-heading text-[27px] font-extrabold leading-[1.15] tracking-[-0.03em] md:text-[34px]">
                  Sales không chỉ nhận lead. Sales còn trả dữ liệu về cho marketing.
                </h3>
                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                  {salesFeedbackLoop.map((step, index) => (
                    <div key={step} className="flex items-center gap-2.5">
                      <span className="rounded-full border border-blue-200 bg-brand-accent-soft px-3 py-2 text-[11px] font-bold text-brand-accent">{step}</span>
                      {index < salesFeedbackLoop.length - 1 && <ArrowRight className="h-4 w-4 text-brand-soft-text" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <BulletList items={salesFeedbackTypes} columns />
                </div>
                <p className="mt-7 font-heading text-[19px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                  Đây là lúc marketing ngừng đo mỗi số lượng lead và bắt đầu học từ chất lượng cuộc trò chuyện.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <Eyebrow>5.6 · TEAM EXECUTION</Eyebrow>
                <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[44px]">
                  Hệ thống chỉ có giá trị khi đội ngũ có thể vận hành nó.
                </h2>
                <p className="mt-5 text-[15px] font-medium leading-[1.75] text-brand-secondary">
                  Phú không thực hiện tất cả đầu việc một mình. Vai trò là định hướng hệ thống, trực tiếp phụ trách strategy, paid media, tracking và optimization; đồng thời phối hợp cùng content, design, media, IT/AI, sales, agency và các bộ phận liên quan.
                </p>
                <div className="mt-7">
                  <BulletList items={operationalChanges} />
                </div>
              </div>
              <ProofImage
                image={images.operations}
                alt="Hệ thống SOP và quản lý công việc cho các vai trò trong team marketing"
                caption="SOP, tasklist, workflow và nhịp báo cáo giúp các vai trò cùng vận hành trên một logic."
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="THE COMPOUNDING LOOP"
                title="Online hỗ trợ Offline. Offline lại tạo nhiên liệu mới cho Online."
                intro="Mỗi công trình hoàn thiện không chỉ tạo doanh thu. Nó còn tạo hình ảnh, video, kinh nghiệm xử lý bề mặt, câu hỏi thực tế của khách và bằng chứng cho campaign tiếp theo."
              />

              <ol className="border-l-2 border-blue-200 pl-6 xl:grid xl:grid-cols-8 xl:border-l-0 xl:border-t-2 xl:pl-0">
                {compoundingLoop.map((step, index) => (
                  <li key={step} className="relative pb-7 last:pb-0 xl:px-3 xl:pb-0 xl:pt-7">
                    <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-brand-bg bg-brand-accent xl:-top-[8px] xl:left-3" aria-hidden="true" />
                    <div className="text-[11px] font-black leading-[1.5] tracking-[0.08em] text-brand-accent">{step}</div>
                    {index < compoundingLoop.length - 1 && <ArrowRight className="absolute -right-2 top-7 hidden h-4 w-4 text-blue-300 xl:block" aria-hidden="true" />}
                  </li>
                ))}
              </ol>

              <div className="mt-10 grid gap-8 border-t border-brand-border pt-9 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-4 text-[15px] font-medium leading-[1.75] text-brand-secondary">
                  <p>Proof mới quay lại làm rõ công trình thật, khép vòng và mở đầu cho chu kỳ tiếp theo.</p>
                  <p>Hệ thống vì thế không quay lại điểm xuất phát sau mỗi chiến dịch. Nó tích lũy thêm tài sản sau mỗi vòng vận hành.</p>
                </div>
                <div className="flex flex-wrap content-start gap-2.5" aria-label="Tài sản tích lũy sau mỗi vòng vận hành">
                  {compoundingAssets.map((asset) => (
                    <span key={asset} className="rounded-full border border-blue-200 bg-brand-accent-soft px-3.5 py-2 text-[12px] font-bold text-brand-accent">
                      {asset}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-8 border-l-2 border-brand-highlight pl-5 font-heading text-[21px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                Một campaign tốt không chỉ tạo kết quả hôm nay. Nó để lại tài sản giúp vòng tăng trưởng tiếp theo dễ hơn.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
                <Eyebrow>SYSTEM IMPACT</Eyebrow>
                <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[38px] md:text-[46px]">
                  Marketing không chỉ tiêu tiền.
                  <span className="mt-2 block">Nó tạo doanh thu, thương hiệu và năng lực bán hàng.</span>
                </h2>
              </div>

              <div className="grid border-y border-brand-border md:grid-cols-2">
                {impactLayers.map((layer, index) => (
                  <article key={layer.number} className={`py-7 md:p-8 ${index > 0 ? 'border-t border-brand-border md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} ${index > 1 ? 'md:border-t' : ''}`}>
                    <div className={`font-heading text-[25px] font-extrabold tracking-[-0.04em] ${layer.tone}`}>{layer.number}</div>
                    <h3 className={`mt-3 text-[11px] font-black tracking-[0.17em] ${layer.tone}`}>{layer.label}</h3>
                    <div className="mt-6">
                      <BulletList items={layer.items} />
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-7 max-w-6xl text-[12px] font-semibold leading-[1.7] text-brand-secondary">
                Doanh thu bán lẻ tích lũy trên 1 tỷ đồng đến từ toàn bộ hệ thống gồm offer, content, paid media, landing page, tracking và sales follow-up; không quy toàn bộ kết quả cho riêng một kênh hoặc một giao diện.
              </p>
              <p className="mt-5 border-l-2 border-brand-accent pl-5 font-heading text-[20px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                Ngân sách không chỉ mua một lần hiển thị. Nó góp phần xây một hệ thống tài sản có thể tiếp tục được sử dụng và tối ưu ở những vòng sau.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="THE NEXT LAYER"
              title="Hệ thống vẫn đang tiếp tục được hoàn thiện."
              intro="Case này không được trình bày như một dự án đã hoàn hảo. Một hệ thống tăng trưởng cần tiếp tục được nối sâu hơn với CRM, sales pipeline và dashboard."
            />
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
              {statusColumns.map((column) => (
                <article key={column.label} className={`rounded-[20px] border p-6 ${column.tone}`}>
                  <h3 className={`text-[11px] font-black uppercase tracking-[0.18em] ${column.labelTone}`}>{column.label}</h3>
                  <ul className="mt-6 space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] font-semibold leading-[1.55] text-brand-secondary">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Eyebrow>THE LESSON</Eyebrow>
              <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[38px] md:text-[48px]">
                Tăng trưởng không được tạo ra bởi một chiến dịch đơn lẻ
              </h2>
              <blockquote className="my-10 border-y border-blue-200 py-8 font-heading text-[25px] font-extrabold leading-[1.35] tracking-[-0.025em] text-brand-primary md:text-[34px]">
                “Không phải làm nhiều hơn. Mà là làm cho những phần đang có phối hợp tốt hơn.”
              </blockquote>
              <p className="mx-auto max-w-3xl text-[16px] font-medium leading-[1.75] text-brand-secondary">
                Điều khó nhất không phải mở thêm một kênh quảng cáo. Điều khó nhất là giúp sản phẩm, content, paid media, website, data và sales cùng vận hành trên một dòng chảy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[24px] border border-brand-border bg-white p-6 text-center shadow-brand-soft sm:p-8 md:p-12">
              <h2 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[48px]">
                Doanh nghiệp của bạn có thể không thiếu traffic
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-[18px] font-bold leading-[1.6] text-brand-secondary md:text-[21px]">
                Hệ thống có thể đang thất thoát ở một điểm mà chưa ai nhìn thấy.
              </p>
              <p className="mt-7 font-heading text-[18px] font-extrabold tracking-[-0.02em] text-brand-accent md:text-[22px]">
                Traffic → Conversion → Tracking → Sales → Revenue
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
                  data-location="case-study-detail"
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
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </div>
  );
}
