import { ArrowRight, ChevronRight, ExternalLink, X } from 'lucide-react';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { navCta } from '../config/navigation';
import fnbChannelOverview from '../assets/images/Case FnB Build kênh Tiktok 3 ảnh chính.jpg';
import fnbChannelGrid from '../assets/images/Case FnB Build kênh Tiktok 1.jpg';
import fnbProcessAndQuestions from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (1).png';
import fnbCravingPromoted from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (2).png';
import fnbFinishedProduct from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (3).png';
import fnbCleaningProcess from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (4).png';
import fnbPublicFeedback from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (5).png';
import fnbPreparationQuestion from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (6).png';
import fnbCravingBowl from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (7).png';
import fnbHookTesting from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (8).png';
import fnbPackingOrders from '../assets/images/Case FnB Build kênh Tiktok cho Vợ bán chân gà sốt thái (9).png';

type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

type ProofItem = {
  image: ImageAsset;
  alt: string;
  label: string;
  caption: string;
};

const TIKTOK_CHANNEL_URL = 'https://www.tiktok.com/@phulanfoods';

const images = {
  channelOverview: { src: fnbChannelOverview, width: 1125, height: 2436 },
  channelGrid: { src: fnbChannelGrid, width: 1144, height: 900 },
  processAndQuestions: { src: fnbProcessAndQuestions, width: 2420, height: 1457 },
  cravingPromoted: { src: fnbCravingPromoted, width: 2442, height: 1451 },
  finishedProduct: { src: fnbFinishedProduct, width: 2425, height: 1447 },
  cleaningProcess: { src: fnbCleaningProcess, width: 2421, height: 1448 },
  publicFeedback: { src: fnbPublicFeedback, width: 2438, height: 1449 },
  preparationQuestion: { src: fnbPreparationQuestion, width: 2423, height: 1450 },
  cravingBowl: { src: fnbCravingBowl, width: 2425, height: 1446 },
  hookTesting: { src: fnbHookTesting, width: 2451, height: 1460 },
  packingOrders: { src: fnbPackingOrders, width: 2417, height: 1454 },
};

const evidenceLibrary: ProofItem[] = [
  {
    image: images.processAndQuestions,
    alt: 'Quá trình chuẩn bị chân gà sốt Thái và câu hỏi công khai trên TikTok',
    label: 'Cooking Process',
    caption: 'Footage chế biến thật đi cùng câu hỏi công khai về sản phẩm và điểm bán.',
  },
  {
    image: images.publicFeedback,
    alt: 'Nội dung phản hồi khách hàng đã được công khai trên kênh TikTok F&B',
    label: 'Public Social Proof',
    caption: 'Phản hồi đã được chủ kênh công khai; phần hội thoại không hiển thị tên, số điện thoại hoặc địa chỉ.',
  },
  {
    image: images.preparationQuestion,
    alt: 'Video quá trình chuẩn bị món ăn và câu hỏi công khai của người xem',
    label: 'Market Question',
    caption: 'Một câu hỏi về cách làm cho thấy content có thể tạo thêm chủ đề giải thích tiếp theo.',
  },
  {
    image: images.hookTesting,
    alt: 'Video mở đầu quá trình làm món được dùng để thử nghiệm hook TikTok',
    label: 'Hook Variation',
    caption: 'Quá trình làm món cung cấp nhiều điểm mở đầu mà không cần studio hoặc production lớn.',
  },
  {
    image: images.packingOrders,
    alt: 'Nội dung đóng gói món ăn và phản hồi công khai trên TikTok',
    label: 'Operating Evidence',
    caption: 'Đóng gói và chuẩn bị giao biến hoạt động vận hành thật thành nội dung có thể quan sát.',
  },
];

const whyTiktok = [
  ['01', 'Visual Product', 'Đồ ăn có thể tạo cảm giác thèm bằng cận cảnh, texture, nước sốt và quá trình chế biến.'],
  ['02', 'Organic Distribution', 'TikTok tạo cơ hội phân phối nội dung tới người chưa theo dõi kênh.'],
  ['03', 'Low Production Barrier', 'Món ăn và quá trình làm món đã là nguồn footage, không cần studio hoặc production lớn.'],
  ['04', 'Fast Feedback', 'View, comment và câu hỏi giúp business biết nhanh nội dung nào đang tạo quan tâm.'],
  ['05', 'Short Conversion Path', 'Từ video đến profile, inbox hoặc điểm liên hệ chỉ có một vài bước.'],
];

const operatorRoles = [
  ['01', 'Channel Strategy', 'Chọn TikTok làm kênh chính thay vì phân tán nguồn lực qua nhiều nền tảng.'],
  ['02', 'Content System', 'Xây format quay, hook, content angle và nhịp đăng dựa trên món ăn và quá trình vận hành thật.'],
  ['03', 'Organic & Paid', 'Dùng organic để kiểm chứng phản ứng, sau đó dùng TikTok Ads ở mức vừa phải để khuếch đại content phù hợp.'],
  ['04', 'Feedback & Optimization', 'Theo dõi nội dung nào tạo người hỏi, câu hỏi nào xuất hiện nhiều và điểm nào làm hành trình đặt hàng bị nghẽn.'],
];

function Eyebrow({
  children,
  highlight = false,
  dark = false,
}: {
  children: ReactNode;
  highlight?: boolean;
  dark?: boolean;
}) {
  return (
    <p className={`text-[10px] font-black uppercase tracking-[0.28em] md:text-[11px] ${dark ? 'text-orange-400' : highlight ? 'text-brand-highlight' : 'text-brand-accent'}`}>
      {children}
    </p>
  );
}

function SectionHeading({
  label,
  title,
  children,
  highlight = false,
  dark = false,
}: {
  label: string;
  title: string;
  children?: ReactNode;
  highlight?: boolean;
  dark?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <Eyebrow highlight={highlight} dark={dark}>{label}</Eyebrow>
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
  item,
  className = '',
  imageClassName = '',
  priority = false,
  onOpen,
}: {
  item: ProofItem;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  onOpen?: () => void;
}) {
  const image = (
    <img
      src={item.image.src}
      alt={item.alt}
      width={item.image.width}
      height={item.image.height}
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
            aria-label={`Mở ảnh lớn: ${item.alt}`}
          >
            {image}
          </button>
        ) : image}
      </div>
      <figcaption className="mt-3 text-[14px] font-medium leading-[1.65] text-brand-soft-text">
        <span className="font-extrabold text-brand-primary">{item.label}</span>
        {' — '}
        {item.caption}
      </figcaption>
    </figure>
  );
}

function Flow({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item} className="relative border-l-2 border-blue-200 px-5 py-5 md:border-l-0 md:border-t-2">
          <span className="text-[10px] font-black tracking-[0.18em] text-brand-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="mt-2 text-[13px] font-extrabold uppercase leading-[1.45] tracking-[0.07em] text-brand-primary">
            {item}
          </p>
          {index < items.length - 1 ? (
            <ChevronRight className="absolute -right-2 top-5 hidden h-4 w-4 text-brand-accent lg:block" aria-hidden="true" />
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
  item: ProofItem | null;
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
            decoding="async"
            className="mx-auto max-h-[76vh] w-auto max-w-full object-contain"
          />
        </div>
        <p className="mt-4 text-center text-[14px] font-medium leading-[1.6] text-slate-200">
          <span className="font-extrabold text-white">{item.label}</span>
          {' — '}
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function FnbTiktokCaseStudyPage() {
  const [lightboxItem, setLightboxItem] = useState<ProofItem | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const description = 'Case study xây kênh TikTok bán chân gà sốt Thái: organic content, paid amplification, content-to-order flow, doanh thu khoảng 75 triệu đồng/tháng và bài học về right-sized growth system.';
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = metaDescription?.content;

    document.title = 'F&B TikTok Sales System Case Study | TP Growth';
    if (metaDescription) metaDescription.content = description;

    const ogEntries = [
      ['og:title', 'F&B TikTok Sales System Case Study | TP Growth'],
      ['og:description', description],
      ['og:image', new URL(images.channelOverview.src, window.location.href).href],
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

  const channelOverviewItem: ProofItem = {
    image: images.channelOverview,
    alt: 'Toàn bộ profile và thư viện video của kênh TikTok F&B',
    label: 'Channel Overview',
    caption: 'Ảnh chụp trực tiếp toàn bộ profile TikTok: thông tin kênh, tín hiệu công khai và thư viện nội dung đã được vận hành.',
  };

  const channelGridItem: ProofItem = {
    image: images.channelGrid,
    alt: 'Thư viện nhiều format content được xây cho kênh TikTok bán đồ ăn',
    label: 'Content Library',
    caption: 'Nhiều giai đoạn nội dung cho thấy kênh được xây bằng một thư viện format, không phải một video đơn lẻ.',
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <section className="border-b border-brand-border bg-white py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
              <div>
                <Eyebrow highlight>CASE STUDY 04 · LEAN F&B GROWTH SYSTEM</Eyebrow>
                <p className="mt-5 text-[14px] font-extrabold tracking-[0.08em] text-brand-accent">
                  F&B TIKTOK SALES SYSTEM
                </p>
                <h1 className="mt-4 font-heading text-[41px] font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-[50px] md:text-[60px] lg:text-[66px]">
                  Một kênh thắng có thể đủ cho một business nhỏ
                </h1>
                <p className="mt-6 max-w-2xl text-[16px] font-medium leading-[1.78] text-brand-secondary md:text-[18px]">
                  Không triển khai KOL lớn, PR, event hay hệ thống đa kênh phức tạp. Mô hình chọn TikTok làm chiến trường chính: xây content organic bằng món thật và quy trình thật, sau đó dùng paid media ở mức vừa phải để khuếch đại những format đã có tín hiệu bán hàng.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['One-channel Strategy', 'Organic-first', 'Light Paid Media', 'Content → Order'].map((tag) => (
                    <span key={tag} className="rounded-full border border-brand-border bg-brand-bg px-3 py-2 text-[11px] font-extrabold text-brand-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <VisualTile
                item={channelOverviewItem}
                className="mx-auto w-full max-w-[360px] lg:max-w-[390px]"
                priority
                imageClassName="aspect-[1125/2436]"
                onOpen={() => setLightboxItem(channelOverviewItem)}
              />
            </div>

            <dl className="mx-auto mt-12 grid max-w-7xl gap-px overflow-hidden rounded-[20px] border border-brand-border bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['MÔ HÌNH', 'F&B gia đình'],
                ['SẢN PHẨM', 'Chân gà sốt Thái'],
                ['VAI TRÒ', 'Growth Operator / Content & Paid Media'],
                ['PHẠM VI', 'TikTok Strategy · Organic Testing · Paid Amplification · Sales Flow'],
              ].map(([term, value]) => (
                <div key={term} className="bg-brand-bg px-5 py-5">
                  <dt className="text-[9px] font-black uppercase tracking-[0.18em] text-brand-soft-text">{term}</dt>
                  <dd className="mt-2 text-[13px] font-extrabold leading-[1.5]">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mx-auto mt-6 max-w-7xl border-l-2 border-brand-highlight pl-5">
              <p className="font-heading text-[24px] font-extrabold tracking-[-0.03em] md:text-[30px]">
                Có giai đoạn đạt khoảng 75 triệu đồng/tháng doanh thu.
              </p>
              <p className="mt-3 max-w-5xl text-[13px] font-medium leading-[1.7] text-brand-soft-text md:text-[14px]">
                Đây là doanh thu, không phải lợi nhuận. Mô hình phụ thuộc đáng kể vào nguyên liệu, chế biến, đóng gói, giao hàng và sức lao động trực tiếp.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE STRATEGIC CHOICE" title="Mỗi business model là một game khác nhau">
                <p>Paint & More cần website, tracking, paid media và sales alignment. BlackVue cần premium positioning, authority và hệ thống đại lý. GNET G-ON X cần review, PR, Search, Community, Event và Paid Distribution.</p>
                <p>Nhưng một business F&B gia đình không cần mang toàn bộ những lớp đó vào vận hành.</p>
                <p>Với game nhỏ, biên lợi nhuận không cao và nguồn lực hạn chế, lựa chọn đúng không phải làm nhiều kênh hơn. Lựa chọn đúng là tìm một sân chơi nơi sản phẩm có lợi thế tự nhiên và làm đủ sâu để thắng trên sân chơi đó.</p>
              </SectionHeading>
              <blockquote className="mt-10 max-w-5xl border-l-4 border-brand-highlight py-2 pl-6 font-heading text-[27px] font-extrabold leading-[1.4] tracking-[-0.03em] md:text-[38px]">
                “Không dùng hệ thống quá lớn cho một bài toán nhỏ.”
              </blockquote>
              <p className="mt-5 pl-7 text-[13px] font-semibold italic text-brand-soft-text">Nói tự nhiên hơn: không dùng dao mổ trâu để giết gà.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="RIGHT-SIZED GROWTH SYSTEM" title="Hệ thống tốt nhất không phải hệ thống lớn nhất. Nó là hệ thống vừa với game đang chơi." />
              <div className="mt-12 grid border-y border-brand-border lg:grid-cols-2">
                <div className="py-8 lg:pr-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-soft-text">OVERBUILT SYSTEM</p>
                  <ul className="mt-5 space-y-3 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                    {['Nhiều kênh và nhiều chi phí.', 'Nhiều điểm vận hành.', 'Khó duy trì với một mô hình gia đình.', 'Không phù hợp biên lợi nhuận nhỏ.'].map((item) => <li key={item}>— {item}</li>)}
                  </ul>
                </div>
                <div className="border-t border-brand-border py-8 lg:border-l lg:border-t-0 lg:pl-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">RIGHT-SIZED SYSTEM</p>
                  <ul className="mt-5 space-y-3 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                    {['Một sản phẩm chủ lực.', 'Một kênh tăng trưởng chính.', 'Một content engine.', 'Một flow nhận đơn ngắn.', 'Một vòng phản hồi nhanh.', 'Paid Media ở mức vừa đủ.'].map((item) => <li key={item}>— {item}</li>)}
                  </ul>
                </div>
              </div>
              <p className="mt-9 max-w-5xl font-heading text-[23px] font-extrabold leading-[1.45] tracking-[-0.03em] md:text-[30px]">
                Giảm số kênh không có nghĩa giảm tư duy hệ thống. Nó có nghĩa loại bỏ những thứ business chưa cần.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading label="THE BUSINESS CONTEXT" title="Không có team lớn. Không có studio. Không có nhiều cơ hội để làm sai.">
                <p>Đây là một mô hình F&B gia đình với sản phẩm chủ lực là chân gà sốt Thái.</p>
                <p>Người bán đồng thời tham gia chuẩn bị món, đóng gói, xử lý đơn và chăm sóc gia đình. Vì vậy, marketing không thể trở thành một hệ thống phức tạp tách rời khỏi vận hành.</p>
                <p>Content phải được tạo từ chính những gì business đang làm mỗi ngày.</p>
              </SectionHeading>
              <div className="border-y border-brand-border py-8">
                <p className="font-heading text-[27px] font-extrabold leading-[1.4] tracking-[-0.03em] md:text-[36px]">
                  Khi nguồn lực ít, content không được phép chỉ đẹp. Nó phải tạo ra hành động.
                </p>
                <p className="mt-5 text-[14px] font-medium leading-[1.7] text-brand-soft-text">Bối cảnh được mô tả an toàn ở mức “mô hình F&B gia đình”; page không suy đoán mô hình cửa hàng.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-accent-soft py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="WHY TIKTOK" title="Chọn sân chơi nơi sản phẩm có lợi thế tự nhiên" />
              <div className="mt-12 grid gap-x-9 md:grid-cols-2 lg:grid-cols-3">
                {whyTiktok.map(([number, title, copy]) => (
                  <article key={number} className="border-t border-blue-200 py-7">
                    <span className="text-[10px] font-black tracking-[0.18em] text-brand-accent">{number}</span>
                    <h3 className="mt-3 font-heading text-[21px] font-extrabold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary">{copy}</p>
                  </article>
                ))}
              </div>
              <p className="mt-8 max-w-5xl border-l-2 border-brand-accent pl-5 font-heading text-[22px] font-extrabold leading-[1.5] tracking-[-0.025em]">
                TikTok không được chọn vì đang thịnh hành. Nó được chọn vì phù hợp với sản phẩm, nguồn lực và tốc độ học mà business cần.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE OPERATOR ROLE" title="Vai trò không phải trở thành food creator. Vai trò là xây một flow đủ đơn giản để bán được hàng." />
              <div className="mt-12 grid gap-x-10 lg:grid-cols-2">
                {operatorRoles.map(([number, title, copy]) => (
                  <article key={number} className="grid grid-cols-[42px_1fr] gap-4 border-t border-brand-border py-7">
                    <span className="text-[10px] font-black tracking-[0.18em] text-brand-accent">{number}</span>
                    <div>
                      <h3 className="font-heading text-[21px] font-extrabold tracking-[-0.03em]">{title}</h3>
                      <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary">{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-8 max-w-5xl rounded-[20px] border border-brand-border bg-brand-bg p-6 text-[14px] font-semibold leading-[1.75] text-brand-secondary">
                Phú phụ trách định hướng kênh, content system, Paid Media và tối ưu. Người bán trực tiếp đảm nhận sản phẩm, trải nghiệm người dùng và quá trình xử lý đơn.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="CONTENT BACKBONE" title="Món thật. Quá trình thật. Người bán thật. Phản hồi thật.">
                <p>Business không cố quay như một thương hiệu F&B lớn.</p>
                <p>Sức mạnh của content nằm ở việc người xem có thể nhìn thấy món thật, cách món được chuẩn bị, người đang bán và phản ứng của khách. Sự gần gũi giúp rút ngắn khoảng cách giữa một video trên màn hình và quyết định nhắn hỏi.</p>
              </SectionHeading>
              <div className="mt-10 rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft md:p-8">
                <Flow items={['Real Product', 'Real Process', 'Real Seller', 'Real Feedback', 'Real Order']} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="CONTENT ENGINE" title="Một sản phẩm. Nhiều lý do để người xem dừng lại, tin và đặt hàng.">
                <p>Không tạo năm nhóm content như năm silo. Page xen kẽ món, quy trình và phản hồi để giữ đúng cách người xem trải nghiệm một kênh TikTok thật.</p>
              </SectionHeading>

              <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                <VisualTile
                  item={{
                    image: images.cravingBowl,
                    alt: 'Video cận cảnh chân gà sốt Thái được sử dụng để tạo cảm giác thèm',
                    label: 'Craving Content',
                    caption: 'Thành phẩm, nước sốt, trứng non và texture giúp video hoàn thành nhiệm vụ đầu tiên: khiến người xem dừng lại.',
                  }}
                  imageClassName="aspect-[2425/1446]"
                />
                <div>
                  <Eyebrow>CRAVING CONTENT</Eyebrow>
                  <h3 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.2] tracking-[-0.035em] md:text-[36px]">Cho người xem thấy món trước khi giải thích món</h3>
                  <p className="mt-5 text-[15px] font-medium leading-[1.75] text-brand-secondary">Cận cảnh thành phẩm tạo cảm giác thèm. Comment công khai về giá và cách liên hệ cho thấy visual có thể mở một cuộc trò chuyện thật.</p>
                </div>
              </div>

              <div className="mt-14 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <div className="lg:order-2">
                  <VisualTile
                    item={{
                      image: images.cleaningProcess,
                      alt: 'Quá trình sơ chế chân gà được sử dụng làm nội dung TikTok',
                      label: 'Process Content',
                      caption: 'Sơ chế và làm sạch biến hậu trường vận hành thành một lớp giải thích có thể quan sát.',
                    }}
                    imageClassName="aspect-[2421/1448]"
                  />
                </div>
                <div className="lg:order-1">
                  <Eyebrow>PROCESS & TRUST</Eyebrow>
                  <h3 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.2] tracking-[-0.035em] md:text-[36px]">Quy trình thật tạo thêm lý do để tin</h3>
                  <p className="mt-5 text-[15px] font-medium leading-[1.75] text-brand-secondary">Sơ chế, chế biến và đóng gói giúp giảm khoảng cách niềm tin của một sản phẩm đồ ăn online. Page chỉ mô tả những gì nhìn thấy trực tiếp trong asset.</p>
                </div>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-2">
                <VisualTile
                  item={{
                    image: images.finishedProduct,
                    alt: 'Thành phẩm chân gà sốt Thái và phản hồi công khai trên TikTok',
                    label: 'Product Education',
                    caption: 'Thành phẩm và phần sốt được trình bày trong ngữ cảnh sản phẩm thật, không thêm claim về khẩu phần hoặc bảo quản.',
                  }}
                  imageClassName="aspect-[2425/1447]"
                />
                <VisualTile
                  item={{
                    image: images.hookTesting,
                    alt: 'Quá trình chế biến món ăn được sử dụng để thử nhiều cách mở đầu video TikTok',
                    label: 'Content Variation',
                    caption: 'Một hành động đơn giản trong bếp có thể trở thành hook, footage quá trình và lời giải thích cho video mới.',
                  }}
                  imageClassName="aspect-[2451/1460]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-bg py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="ORGANIC TESTING" title="Không đoán khách thích gì. Đăng, quan sát và tìm pattern.">
                <p>Không cần tuyên bố đã test bao nhiêu hook. Điều cần giữ là nhịp học: một sản phẩm, nhiều cách mở đầu, tín hiệu thị trường và biến thể tiếp theo.</p>
              </SectionHeading>
              <div className="mt-10 rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft md:p-8">
                <Flow items={['One Product', 'Multiple Hooks', 'Organic Distribution', 'View & Engagement Signals', 'Customer Questions', 'Winning Format', 'New Variations']} />
              </div>
              <div className="mt-9 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                {['Cận cảnh thành phẩm.', 'Trộn sốt và quá trình làm.', 'Một câu hỏi đời thường.', 'Cảnh đóng gói hoặc chuẩn bị giao.'].map((hook) => (
                  <p key={hook} className="border-t border-brand-border py-5 text-[14px] font-semibold text-brand-secondary">{hook}</p>
                ))}
              </div>
              <p className="mt-7 max-w-5xl border-l-2 border-brand-accent pl-5 font-heading text-[22px] font-extrabold leading-[1.5] tracking-[-0.025em]">
                Organic không chỉ tạo reach. Nó là lớp nghiên cứu thị trường rẻ và nhanh nhất của mô hình.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="CHANNEL SYSTEM" title="Một video có thể tạo view. Một thư viện content mới tạo được kênh bán hàng.">
                <p>Profile TikTok trở thành một thư viện bằng chứng: khách có thể xem nhiều format và nhiều giai đoạn nội dung trước khi nhắn hỏi.</p>
              </SectionHeading>
              <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                <VisualTile item={channelGridItem} imageClassName="aspect-[1144/900]" />
                <div className="grid gap-5">
                  <VisualTile
                    item={{
                      image: images.processAndQuestions,
                      alt: 'Video quy trình và câu hỏi công khai trong thư viện content TikTok F&B',
                      label: 'Process + Questions',
                      caption: 'Một video vừa giải thích quá trình vừa thu thập câu hỏi thật từ người xem.',
                    }}
                    imageClassName="aspect-[2420/1457]"
                  />
                  <VisualTile
                    item={{
                      image: images.cravingPromoted,
                      alt: 'Nội dung sản phẩm có nhãn promotional content trên kênh TikTok F&B',
                      label: 'Organic + Paid Layer',
                      caption: 'Asset hiển thị công khai nhãn promotional content, hỗ trợ vai trò paid amplification ở mức bằng chứng.',
                    }}
                    imageClassName="aspect-[2442/1451]"
                  />
                </div>
              </div>
              <p className="mt-8 text-[14px] font-semibold leading-[1.75] text-brand-secondary">
                Kênh được xây như một thư viện content-to-order, không phải một chuỗi video rời rạc.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <a
                  href={TIKTOK_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-highlight px-5 py-3 text-[14px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 motion-reduce:transform-none"
                >
                  Xem kênh TikTok thực tế
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="text-[13px] font-medium leading-[1.65] text-brand-soft-text">
                  Kênh được giữ công khai như bằng chứng của giai đoạn thử nghiệm. Hoạt động bán hàng hiện đã dừng.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-highlight-soft py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <SectionHeading label="LIGHT PAID AMPLIFICATION" title="Không dùng quảng cáo để cứu content yếu" highlight>
                <p>TikTok Ads không được dùng để thay thế content foundation.</p>
                <p>Organic giúp tìm ra video, hook và cách thể hiện mà thị trường đang phản hồi. Paid Media sau đó chỉ khuếch đại những nội dung đã có tín hiệu phù hợp.</p>
              </SectionHeading>
              <div>
                <div className="rounded-[20px] border border-orange-200 bg-white p-5 md:p-8">
                  <Flow items={['Organic Content', 'Market Signal', 'Winning Format', 'Light Paid Amplification', 'More Traffic', 'Customer Questions', 'New Content']} />
                </div>
                <blockquote className="mt-8 border-l-4 border-brand-highlight pl-6 font-heading text-[23px] font-extrabold leading-[1.45] tracking-[-0.03em] md:text-[30px]">
                  “Organic tìm ra điều thị trường thích. Paid Media đẩy nhanh thứ đã chứng minh được sức hút.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="CONTENT → ORDER" title="View chỉ có giá trị khi khách biết bước tiếp theo là gì.">
                <p>Case này không được đo bằng view riêng lẻ. Giá trị nằm ở việc video có thể tạo cuộc trò chuyện và cuộc trò chuyện có thể đi tiếp thành đơn hàng.</p>
              </SectionHeading>
              <div className="mt-10 rounded-[20px] border border-brand-border bg-brand-bg p-5 md:p-8">
                <Flow items={['TikTok Video', 'Profile / Comment / Inbox', 'Product Question', 'Order Confirmation', 'Food Preparation', 'Delivery', 'Feedback', 'Next Content']} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="MINIMUM VIABLE TRACKING" title="Business nhỏ không cần dashboard phức tạp. Nhưng vẫn phải biết nội dung nào đang tạo đơn.">
                <p>Không cần đo mọi thứ. Chỉ cần đo đủ để biết nên quay nội dung gì, nên bỏ tiền vào đâu và bottleneck đang nằm ở content, chốt đơn hay vận hành.</p>
              </SectionHeading>
              <div className="mt-12 grid gap-x-9 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['01', 'Content Signals', 'Video đã đăng, view và engagement.'],
                  ['02', 'Conversation Signals', 'Số người hỏi và nhóm câu hỏi lặp lại.'],
                  ['03', 'Order Signals', 'Số đơn và doanh thu theo giai đoạn.'],
                  ['04', 'Operating Signals', 'Nội dung phản hồi tốt và điểm nghẽn vận hành.'],
                ].map(([number, title, copy]) => (
                  <article key={number} className="border-t border-brand-border py-7">
                    <span className="text-[10px] font-black tracking-[0.18em] text-brand-accent">{number}</span>
                    <h3 className="mt-3 font-heading text-[20px] font-extrabold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary">{copy}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-[13px] font-medium leading-[1.7] text-brand-soft-text">Page không claim CRM, attribution nâng cao, ngân sách hoặc chỉ số Paid Media chưa được công khai.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <SectionHeading label="MARKET FEEDBACK LOOP" title="Khách hỏi gì hôm nay là content của ngày mai.">
                  <p>Vòng phản hồi ngắn giúp content bám sát điều khách đang cần biết, thay vì sản xuất theo cảm tính.</p>
                </SectionHeading>
                <div className="mt-8 rounded-[20px] border border-brand-border bg-brand-bg p-5">
                  <Flow items={['Video', 'Comment / Inbox', 'Repeated Question', 'Content Answer', 'Faster Understanding', 'Easier Sales Conversation', 'New Order']} />
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Hương vị', 'Độ cay', 'Khẩu phần', 'Cách bảo quản', 'Khu vực giao', 'Cách đặt hàng'].map((topic) => (
                    <span key={topic} className="rounded-full border border-brand-border bg-white px-3 py-2 text-[11px] font-bold text-brand-secondary">{topic}</span>
                  ))}
                </div>
              </div>
              <VisualTile
                item={{
                  image: images.preparationQuestion,
                  alt: 'Quá trình chuẩn bị món ăn và câu hỏi công khai về cách làm trên TikTok',
                  label: 'Question → Content',
                  caption: 'Asset cho thấy một câu hỏi công khai về nước sốt; page không bịa thêm nội dung comment cụ thể.',
                }}
                imageClassName="aspect-[2423/1450]"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-bg py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <VisualTile
                item={{
                  image: images.publicFeedback,
                  alt: 'Phản hồi khách hàng đã được chủ kênh công khai trên TikTok F&B',
                  label: 'Customer Proof',
                  caption: 'Hội thoại được công khai trong post và không hiển thị tên, avatar, số điện thoại hoặc địa chỉ của khách.',
                }}
                imageClassName="aspect-[2438/1449]"
              />
              <div>
                <SectionHeading label="CUSTOMER PROOF LOOP" title="Mỗi đơn hàng vừa tạo doanh thu, vừa tạo bằng chứng cho đơn hàng tiếp theo.">
                  <p>Không claim referral hoặc repeat rate. Giá trị được kể ở mức có thể xác minh: chuẩn bị món, feedback đã được công khai và nội dung mới.</p>
                </SectionHeading>
                <div className="mt-8 rounded-[20px] border border-brand-border bg-white p-5">
                  <Flow items={['Order', 'Preparation', 'Photo / Video', 'Customer Feedback', 'Social Proof', 'New Content', 'New Customer']} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="LEAN OPERATIONS" title="Hệ thống phải đủ đơn giản để một gia đình có thể vận hành">
                <p>Danh sách content angle, quay trong lúc chuẩn bị món, đăng, theo dõi phản hồi, tiếp nhận câu hỏi, làm món theo năng lực vận hành, giao hàng và học cho batch sau.</p>
              </SectionHeading>
              <div className="mt-10 rounded-[20px] border border-brand-border bg-brand-bg p-5 md:p-8">
                <Flow items={['Make', 'Film', 'Post', 'Sell', 'Deliver', 'Learn', 'Make Again']} />
              </div>
              <div className="mt-10 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                <p className="font-heading text-[27px] font-extrabold leading-[1.42] tracking-[-0.03em] md:text-[36px]">
                  Quy trình càng ngắn, phản hồi từ thị trường quay lại càng nhanh.
                </p>
                <VisualTile
                  item={{
                    image: images.packingOrders,
                    alt: 'Nội dung đóng gói và chuẩn bị giao chân gà sốt Thái',
                    label: 'Pack + Deliver',
                    caption: 'Đóng gói là một phần vận hành thật và đồng thời là chất liệu cho content tiếp theo.',
                  }}
                  imageClassName="aspect-[2417/1454]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-primary py-16 text-white md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="OPERATING RESULT" title="Kênh không chỉ tạo view. Nó tạo doanh thu thật." dark>
                <p>Kết quả cho thấy TikTok có thể trở thành một kênh bán hàng thực tế cho mô hình F&B gia đình khi sản phẩm, content và flow nhận đơn được nối liền với nhau.</p>
              </SectionHeading>
              <p className="mt-12 max-w-5xl font-heading text-[42px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-[52px] md:text-[66px]">
                Có giai đoạn doanh thu đạt khoảng 75 triệu đồng/tháng.
              </p>
              <p className="mt-7 max-w-5xl border-l-2 border-orange-400 pl-5 text-[14px] font-medium leading-[1.75] text-slate-300">
                Đây là doanh thu, không phải lợi nhuận. Mô hình F&B có chi phí nguyên liệu, chế biến, đóng gói, giao hàng và phụ thuộc đáng kể vào sức lao động trực tiếp.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE OPERATING CEILING" title="Doanh thu tăng nhưng khối lượng lao động cũng tăng gần như trực tiếp">
                <p>Content có thể được phân phối tới nhiều người mà không tăng nhiều chi phí.</p>
                <p>Nhưng mỗi đơn đồ ăn vẫn cần nguyên liệu, chế biến, đóng gói, giao hàng và con người trực tiếp xử lý. Vì vậy, bottleneck dần chuyển từ acquisition sang vận hành.</p>
              </SectionHeading>
              <div className="mt-12 grid border-y border-brand-border lg:grid-cols-2">
                <div className="py-8 lg:pr-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">DIGITAL SCALE</p>
                  <ul className="mt-5 space-y-3 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                    {['Video có thể tiếp cận thêm nhiều người.', 'Paid Media có thể tăng traffic.', 'Content có thể được tái sử dụng.'].map((item) => <li key={item}>— {item}</li>)}
                  </ul>
                </div>
                <div className="border-t border-brand-border py-8 lg:border-l lg:border-t-0 lg:pl-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-highlight">PHYSICAL CAPACITY</p>
                  <ul className="mt-5 space-y-3 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                    {['Mỗi đơn vẫn cần được làm.', 'Chất lượng cần được giữ.', 'Giao hàng có giới hạn.', 'Thời gian gia đình là nguồn lực hữu hạn.'].map((item) => <li key={item}>— {item}</li>)}
                  </ul>
                </div>
              </div>
              <p className="mt-9 font-heading text-[25px] font-extrabold tracking-[-0.03em] md:text-[34px]">Không phải cứ có thêm đơn là business đã scale tốt.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-highlight-soft py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="THE STRATEGIC EXIT" title="Không phải mọi thứ bán được đều đáng để tiếp tục scale" highlight>
                <p>Kênh đã chứng minh khả năng tạo reach, khách hỏi và doanh thu.</p>
                <p>Tuy nhiên, sau khi ưu tiên gia đình thay đổi vì có con nhỏ, thời gian và sức lao động trở thành nguồn lực quan trọng hơn. Với biên lợi nhuận không cao và quá trình chế biến phụ thuộc trực tiếp vào người bán, tiếp tục tăng đơn không còn là lựa chọn phù hợp với hoàn cảnh gia đình.</p>
              </SectionHeading>
              <p className="mt-10 max-w-5xl border-l-4 border-brand-highlight pl-6 font-heading text-[24px] font-extrabold leading-[1.45] tracking-[-0.03em] md:text-[34px]">
                Đây là một quyết định về unit economics, năng lực vận hành và ưu tiên cuộc sống — không phải vì kênh không hoạt động.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="SYSTEM IMPACT" title="Một thử nghiệm nhỏ vẫn có thể tạo ra bài học lớn" />
              <div className="mt-12 grid gap-x-10 md:grid-cols-2">
                {[
                  ['01', 'Channel Validation', ['TikTok tạo được organic reach.', 'Kênh đưa sản phẩm đến người chưa theo dõi.', 'Profile trở thành thư viện nội dung công khai.']],
                  ['02', 'Content-to-Order Validation', ['Content tạo người hỏi thật.', 'Flow bán hàng đủ ngắn để sự quan tâm đi tiếp thành đơn.', 'Paid Media nhẹ khuếch đại format phù hợp.']],
                  ['03', 'Operating Knowledge', ['Hiểu loại content nào tạo cảm giác thèm.', 'Hiểu câu hỏi khách thường đặt.', 'Biết bottleneck chuyển từ marketing sang vận hành khi đơn tăng.']],
                  ['04', 'Strategic Discipline', ['Không overbuild.', 'Không chạy đa kênh chỉ để trông lớn.', 'Không tiếp tục scale chỉ vì doanh thu tăng.', 'Biết dừng khi mô hình không còn phù hợp với nguồn lực và ưu tiên.']],
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

        <section className="border-y border-brand-border py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading label="THE LESSON" title="Growth System tốt không phải hệ thống lớn nhất" />
              <blockquote className="mt-10 border-l-4 border-brand-accent pl-6 font-heading text-[27px] font-extrabold leading-[1.4] tracking-[-0.03em] md:text-[38px]">
                “Một kênh thắng còn tốt hơn năm kênh làm nửa vời.”
              </blockquote>
              <div className="mt-8 space-y-4 text-[16px] font-medium leading-[1.8] text-brand-secondary md:text-[18px]">
                <p>Với một business nhỏ, sức mạnh không đến từ số lượng công cụ.</p>
                <p>Nó đến từ việc chọn đúng sân chơi, xây content phù hợp với sản phẩm, rút ngắn khoảng cách từ nội dung đến đơn hàng và đánh giá trung thực khả năng scale.</p>
                <p>Một growth experiment có thể thành công về acquisition nhưng vẫn không đáng tiếp tục nếu biên lợi nhuận, sức lao động và hoàn cảnh vận hành không phù hợp.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading label="CONTENT EVIDENCE" title="Một phần nội dung được tạo trong quá trình vận hành kênh">
                <p>Các asset mạnh đã được đặt đúng chapter trong narrative. Library này tập hợp lại những proof còn hữu ích để xem lớn, không đưa ảnh profile có trẻ nhỏ vào page.</p>
              </SectionHeading>
              <div className="mt-12 columns-1 gap-5 md:columns-2 xl:columns-3">
                {evidenceLibrary.map((item) => (
                  <article key={item.label} className="mb-5 break-inside-avoid">
                    <VisualTile
                      item={item}
                      imageClassName="aspect-[2420/1457]"
                      onOpen={() => setLightboxItem(item)}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-primary py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow highlight>BUILD A RIGHT-SIZED SYSTEM</Eyebrow>
                <h2 className="mt-5 font-heading text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[50px]">
                  Business nhỏ không thiếu cơ hội
                </h2>
                <p className="mt-5 text-[17px] font-medium leading-[1.7] text-slate-300 md:text-[19px]">
                  Thường chỉ thiếu một flow đủ rõ từ content đến doanh thu.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/#growth-framework"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-highlight px-5 py-3 text-[14px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary motion-reduce:transform-none"
                  >
                    Xem Growth System Framework
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={navCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-location="fnb-tiktok-case-study"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/25 px-5 py-3 text-[14px] font-extrabold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary motion-reduce:transform-none"
                  >
                    Nhắn Zalo trao đổi với Phú
                  </a>
                </div>
                <a
                  href={TIKTOK_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-orange-400/60 px-5 py-3 text-[14px] font-extrabold text-orange-300 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 motion-reduce:transform-none"
                >
                  Xem kênh TikTok thực tế
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
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
