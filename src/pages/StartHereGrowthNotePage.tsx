import { ArrowLeft, ArrowRight, ChevronRight, X } from 'lucide-react';
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  StartHereGrowthMosaic,
  caseStudyVisuals,
  trackingVisuals,
  type EditorialVisual,
} from '../components/growth-notes/StartHereGrowthNoteVisuals';
import {
  growthSystemFlow,
  openingPrinciples,
  rightSizedQuestions,
  startHereSections,
  type StartHereSection,
} from '../content/growth-notes/startHereGrowthNote';
import { navCta } from '../config/navigation';

function Eyebrow({ children, blue = false }: { children: ReactNode; blue?: boolean }) {
  return (
    <p className={`text-[10px] font-black uppercase tracking-[0.22em] md:text-[11px] ${blue ? 'text-brand-accent' : 'text-brand-highlight'}`}>
      {children}
    </p>
  );
}

function PullQuote({ children }: { children: ReactNode; key?: string }) {
  return (
    <blockquote className="my-9 border-l-2 border-brand-highlight pl-5 font-heading text-[21px] font-extrabold leading-[1.5] tracking-[-0.025em] text-brand-primary md:pl-7 md:text-[25px]">
      “{children}”
    </blockquote>
  );
}

function EditorialFlow({
  items,
  label = 'SYSTEM FLOW',
}: {
  items: string[];
  label?: string;
}) {
  return (
    <div className="my-10">
      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">{label}</p>
      <ol className="border-y border-brand-border md:grid md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex min-h-16 items-center justify-between gap-3 border-b border-brand-border py-4 last:border-b-0 md:border-b-0 md:border-r md:px-4 md:last:border-r-0"
          >
            <span className="text-[12px] font-black uppercase leading-[1.45] tracking-[0.08em] text-brand-primary">
              {item}
            </span>
            {index < items.length - 1 ? (
              <ChevronRight className="h-4 w-4 shrink-0 rotate-90 text-brand-accent md:rotate-0" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function CompactCaseLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-brand-highlight pb-1 text-[14px] font-extrabold text-brand-highlight transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function ArticleSection({ section }: { section: StartHereSection }) {
  return (
    <section id={section.id} className="border-b border-brand-border bg-white py-12 md:py-16">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-[30px] font-extrabold leading-[1.14] tracking-[-0.035em] text-brand-primary md:text-[38px]">
            {section.title}
          </h2>

          <div className="mt-7 space-y-6">
            {section.intro.map((paragraph) => (
              <p key={paragraph} className="text-[16px] font-medium leading-[1.9] text-brand-secondary md:text-[17px]">
                {paragraph}
              </p>
            ))}
          </div>

          {section.quotes?.map((quote) => <PullQuote key={quote}>{quote}</PullQuote>)}

          {section.bullets ? (
            <ul className={`my-8 grid gap-x-8 gap-y-3 ${section.bullets.length > 6 ? 'md:grid-cols-2' : ''}`}>
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.7] text-brand-secondary md:text-[16px]">
                  <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-highlight" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {section.flow ? <EditorialFlow items={section.flow} /> : null}

          {section.closing ? (
            <div className="mt-7 space-y-6">
              {section.closing.map((paragraph) => (
                <p key={paragraph} className="text-[16px] font-medium leading-[1.9] text-brand-secondary md:text-[17px]">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {section.closingQuotes?.map((quote) => <PullQuote key={quote}>{quote}</PullQuote>)}
          {section.link ? <CompactCaseLink {...section.link} /> : null}
        </div>
      </div>
    </section>
  );
}

function CaseStudyVisual({
  visual,
  lead = false,
}: {
  visual: EditorialVisual;
  lead?: boolean;
  key?: string;
}) {
  return (
    <article>
      <a
        href={visual.href}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
      >
        <div className={`overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-brand-soft ${lead ? 'lg:min-h-[590px]' : ''}`}>
          <img
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            loading="lazy"
            decoding="async"
            className={`w-full object-contain transition-transform duration-300 motion-reduce:transform-none group-hover:scale-[1.015] ${
              lead ? 'h-full min-h-[360px] lg:min-h-[590px]' : 'aspect-[16/10]'
            }`}
          />
        </div>
        <div className="mt-5 border-t border-brand-border pt-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-highlight">{visual.label}</p>
          <h3 className="mt-2 font-heading text-[23px] font-extrabold tracking-[-0.03em] text-brand-primary">{visual.title}</h3>
          <p className="mt-3 max-w-2xl text-[15px] font-medium leading-[1.7] text-brand-secondary">{visual.caption}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold text-brand-accent">
            Xem case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}

function FourGamesChapter() {
  const [leadCase, ...supportingCases] = caseStudyVisuals;

  return (
    <section className="border-b border-brand-border bg-brand-bg py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <Eyebrow>FOUR GAMES · FOUR WAYS TO PLAY</Eyebrow>
            <h2 className="mt-5 font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-primary md:text-[48px]">
              Cùng là Growth. Nhưng mỗi business cần một cách chơi khác nhau.
            </h2>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <CaseStudyVisual visual={leadCase} lead />
            <div className="grid gap-10">
              {supportingCases.map((visual) => (
                <CaseStudyVisual key={visual.label} visual={visual} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackingProof({
  visual,
  onOpen,
  wide = false,
}: {
  visual: EditorialVisual;
  onOpen: (visual: EditorialVisual) => void;
  wide?: boolean;
}) {
  return (
    <figure className={wide ? 'lg:col-span-2' : ''}>
      <button
        type="button"
        onClick={() => onOpen(visual)}
        className="group block w-full overflow-hidden rounded-[20px] border border-white/15 bg-white text-left shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-primary"
        aria-label={`Mở ảnh lớn: ${visual.title}`}
      >
        <img
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          loading="lazy"
          decoding="async"
          className={`w-full object-contain transition-transform duration-300 motion-reduce:transform-none group-hover:scale-[1.01] ${
            wide ? 'max-h-[620px]' : 'max-h-[540px]'
          }`}
        />
      </button>
      <figcaption className="mt-5">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-300">{visual.label}</p>
        <h3 className="mt-2 font-heading text-[22px] font-extrabold tracking-[-0.025em] text-white">{visual.title}</h3>
        <p className="mt-3 text-[14px] font-medium leading-[1.75] text-slate-300 md:text-[15px]">{visual.caption}</p>
      </figcaption>
    </figure>
  );
}

function AdsTrackingChapter({ onOpen }: { onOpen: (visual: EditorialVisual) => void }) {
  const [channel, conversion, infrastructure, optimization] = trackingVisuals;

  return (
    <section className="bg-brand-primary py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-300 md:text-[11px]">
              CONTENT × ADS × TRACKING × SALES
            </p>
            <h2 className="mt-5 font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[48px]">
              Ads chỉ khuếch đại thứ hệ thống đang có
            </h2>
            <p className="mt-6 max-w-3xl text-[17px] font-medium leading-[1.75] text-slate-300 md:text-[19px]">
              Creative tạo giả thuyết. Paid Media phân phối giả thuyết. Tracking trả tín hiệu về. Sales cho biết tín hiệu đó có tạo ra business hay không.
            </p>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 lg:grid-cols-2">
            <TrackingProof visual={channel} onOpen={onOpen} wide />
            <TrackingProof visual={conversion} onOpen={onOpen} />
            <TrackingProof visual={infrastructure} onOpen={onOpen} />
            <TrackingProof visual={optimization} onOpen={onOpen} wide />
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreSystemChapter() {
  return (
    <section className="border-b border-brand-border bg-brand-accent-soft py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <Eyebrow blue>CORE GROWTH SYSTEM</Eyebrow>
            <h2 className="mt-5 font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-primary md:text-[48px]">
              Điều tôi thật sự nhìn khi làm Growth
            </h2>
            <p className="mt-5 max-w-3xl text-[17px] font-medium leading-[1.75] text-brand-secondary">
              Mục tiêu không phải thêm nhiều công cụ hơn. Mục tiêu là xác định mắt xích nào đang làm toàn hệ thống chậm lại.
            </p>
          </div>
          <EditorialFlow items={growthSystemFlow} label="BUSINESS → DECISION SYSTEM" />
        </div>
      </div>
    </section>
  );
}

function RightSizedQuestions() {
  return (
    <section className="border-b border-brand-border bg-white py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>RIGHT-SIZED GROWTH SYSTEM</Eyebrow>
          <h2 className="mt-5 max-w-4xl font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-primary md:text-[48px]">
            Trước khi chọn kênh, hãy trả lời tám câu hỏi
          </h2>

          <ol className="mt-12 grid border-t border-brand-border md:grid-cols-2">
            {rightSizedQuestions.map((question, index) => (
              <li
                key={question}
                className={`grid grid-cols-[44px_1fr] gap-4 border-b border-brand-border py-6 md:px-5 ${
                  index % 2 === 0 ? 'md:border-r' : ''
                }`}
              >
                <span className="font-heading text-[22px] font-extrabold tracking-[-0.04em] text-brand-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[16px] font-bold leading-[1.65] text-brand-primary">{question}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ImageLightbox({
  visual,
  onClose,
}: {
  visual: EditorialVisual | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!visual) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visual, onClose]);

  if (!visual) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={visual.title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-slate-950 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 md:right-8 md:top-8"
        aria-label="Đóng ảnh"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <figure className="max-h-[92vh] max-w-[94vw] overflow-auto rounded-[20px] bg-white p-2 shadow-2xl md:p-4">
        <img
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          decoding="async"
          className="h-auto max-h-[78vh] w-auto max-w-full object-contain"
        />
        <figcaption className="max-w-4xl px-3 py-4 text-[14px] font-medium leading-[1.65] text-brand-secondary">
          <span className="font-extrabold text-brand-primary">{visual.title}.</span> {visual.caption}
        </figcaption>
      </figure>
    </div>
  );
}

export default function StartHereGrowthNotePage() {
  const [lightboxVisual, setLightboxVisual] = useState<EditorialVisual | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const description = 'Từ F&B một kênh TikTok đến hệ thống đa kênh cho ngành ô tô và vật liệu xây dựng: cách chọn đúng game, nối Content, Ads, Tracking, Sales và Revenue thành một Growth System.';
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = metaDescription?.content;

    document.title = 'Tôi không tin vào một công thức marketing cho mọi doanh nghiệp | TP Growth';
    if (metaDescription) metaDescription.content = description;

    const ogEntries = [
      ['og:title', document.title],
      ['og:description', description],
      ['og:image', new URL(caseStudyVisuals[0].src, window.location.href).href],
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
        <article>
          <header className="border-b border-brand-border bg-white py-14 md:py-20 lg:py-24">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <a
                  href="/growth-notes"
                  className="inline-flex min-h-11 items-center gap-2 text-[13px] font-bold text-brand-accent transition-colors hover:text-brand-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Growth Notes
                </a>

                <div className="mt-8 max-w-5xl">
                  <Eyebrow>GROWTH NOTE · START HERE</Eyebrow>
                  <h1 className="mt-5 font-heading text-[40px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[50px] md:text-[64px] lg:text-[72px]">
                    Tôi không tin vào một công thức marketing cho mọi doanh nghiệp
                  </h1>
                  <p className="mt-7 max-w-4xl text-[19px] font-semibold leading-[1.65] text-brand-secondary md:text-[22px]">
                    Growth không đến từ việc làm nhiều hơn. Nó đến từ việc chọn đúng game, đúng đòn bẩy và nối các điểm chạm tới kết quả kinh doanh.
                  </p>
                  <div className="mt-7 max-w-3xl space-y-4 text-[16px] font-medium leading-[1.8] text-brand-secondary md:text-[17px]">
                    <p>Tôi từng làm những campaign cần website, KOL, báo chí, cộng đồng, event, paid media và tracking server-side.</p>
                    <p>Tôi cũng từng xây một kênh TikTok nhỏ để vợ bán chân gà sốt Thái.</p>
                    <p className="font-extrabold text-brand-primary">Cả hai cách đều có thể đúng. Bởi vì mỗi business model là một game khác nhau.</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {['Strategy', 'Content', 'Ads', 'Tracking', 'Sales'].map((tag) => (
                      <span key={tag} className="rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[11px] font-bold text-brand-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12 overflow-hidden rounded-[24px] border border-brand-border bg-brand-bg shadow-brand-soft">
                  <StartHereGrowthMosaic priority />
                </div>
              </div>
            </div>
          </header>

          <section className="border-b border-brand-border bg-brand-bg py-16 md:py-24">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <Eyebrow>THE OPENING PRINCIPLE</Eyebrow>
                <h2 className="mt-5 max-w-4xl font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[50px]">
                  Mỗi business model là một game khác nhau
                </h2>
                <blockquote className="mt-9 max-w-5xl border-y border-brand-border py-8 font-heading text-[24px] font-extrabold leading-[1.5] tracking-[-0.03em] text-brand-primary md:text-[32px]">
                  “Growth System tốt không phải hệ thống lớn nhất.
                  <br />
                  Đó là hệ thống phù hợp nhất với quy mô, biên lợi nhuận, nguồn lực, điểm nghẽn và giai đoạn hiện tại của doanh nghiệp.”
                </blockquote>

                <ol className="mt-10 border-t border-brand-border">
                  {openingPrinciples.map(([number, title, body]) => (
                    <li key={number} className="grid gap-3 border-b border-brand-border py-6 md:grid-cols-[72px_220px_1fr] md:items-baseline">
                      <span className="font-heading text-[26px] font-extrabold tracking-[-0.04em] text-brand-accent">{number}</span>
                      <span className="text-[11px] font-black uppercase tracking-[0.14em] text-brand-primary">{title}</span>
                      <span className="text-[15px] font-medium leading-[1.7] text-brand-secondary md:text-[16px]">{body}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {startHereSections.map((section) => (
            <Fragment key={section.id}>
              <ArticleSection section={section} />
              {section.id === 'fnb-tiktok' ? <FourGamesChapter /> : null}
              {section.id === 'creative-va-tracking' ? <AdsTrackingChapter onOpen={setLightboxVisual} /> : null}
              {section.id === 'dieu-toi-that-su-lam' ? <CoreSystemChapter /> : null}
            </Fragment>
          ))}

          <RightSizedQuestions />

          <section className="bg-brand-highlight-soft py-16 md:py-24">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <Eyebrow>GROWTH THROUGH SYSTEMS</Eyebrow>
                  <h2 className="mt-5 font-heading text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-primary md:text-[50px]">
                    Mỗi business model là một game khác nhau
                  </h2>
                  <p className="mt-5 text-[17px] font-medium leading-[1.75] text-brand-secondary md:text-[19px]">
                    Một hệ thống tốt không bắt đầu bằng công cụ. Nó bắt đầu bằng việc nhìn đúng điểm nghẽn.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto">
                  <a
                    href="/Growth-System-Framework"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[14px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4 motion-reduce:transform-none"
                  >
                    Xem Growth System Framework
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="/case-study"
                    className="inline-flex min-h-12 items-center justify-center rounded-brand-button border border-brand-border bg-white px-6 py-3.5 text-[14px] font-extrabold text-brand-primary transition hover:-translate-y-0.5 hover:border-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 motion-reduce:transform-none"
                  >
                    Xem các Case Study thực tế
                  </a>
                  <a
                    href={navCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="zalo"
                    data-location="start-here-growth-note"
                    className="inline-flex min-h-11 items-center justify-center text-[14px] font-extrabold text-brand-highlight underline decoration-orange-300 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4"
                  >
                    Nhắn Zalo trao đổi với Phú
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <ImageLightbox visual={lightboxVisual} onClose={() => setLightboxVisual(null)} />
    </div>
  );
}
