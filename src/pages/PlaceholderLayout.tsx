import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { contactLinks } from '../config/navigation';
import type { SiteImageData } from '../data/siteImages';

type LinkCard = {
  title: string;
  text: string;
  href?: string;
  status?: string;
  image?: SiteImageData;
};

type PlaceholderLayoutProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  cards?: LinkCard[];
  categories?: string[];
  ctaLabel?: string;
  ctaLocation?: string;
  heroImage?: SiteImageData;
};

export default function PlaceholderLayout({
  eyebrow,
  title,
  subtitle,
  body,
  cards = [],
  categories = [],
  ctaLabel,
  ctaLocation,
  heroImage,
}: PlaceholderLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Header />
      <main>
        <section className="py-14 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className={`mx-auto ${heroImage ? 'grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16' : 'max-w-4xl'}`}>
              <div>
              <div className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-[#EA580C] md:text-[11px] md:tracking-[0.4em]">
                {eyebrow}
              </div>
              <h1 className="font-heading text-[40px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#0F172A] sm:text-[48px] md:text-[58px]">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-[18px] font-semibold leading-[1.7] text-[#334155] md:text-[21px]">
                {subtitle}
              </p>
              <p className="mt-5 max-w-3xl text-[16px] font-medium leading-[1.75] text-[#334155] md:text-[17px]">
                {body}
              </p>
              {ctaLabel && (
                <a
                  href={contactLinks.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="zalo"
                  data-location={ctaLocation}
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-[#EA580C] px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition-all hover:brightness-105"
                >
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              </div>
              {heroImage && (
                <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white shadow-sm">
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[4/5] h-full w-full object-cover object-top"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {(cards.length > 0 || categories.length > 0) && (
          <section className="border-y border-[#E2E8F0] bg-white py-12 md:py-16">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              {cards.length > 0 && (
                <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
                  {cards.map((card) => {
                    const content = (
                      <article className="h-full rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-sm transition-colors hover:border-[#BFDBFE]">
                        {card.image && (
                          <div className="mb-5 aspect-[16/9] overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC]">
                            <img
                              src={card.image.src}
                              alt={card.image.alt}
                              width={card.image.width}
                              height={card.image.height}
                              loading="lazy"
                              decoding="async"
                              className={`h-full w-full ${card.image.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                            />
                          </div>
                        )}
                        <div className="flex items-start justify-between gap-4">
                          <h2 className="font-heading text-[22px] font-extrabold tracking-[-0.03em] text-[#0F172A]">
                            {card.title}
                          </h2>
                          {card.status && (
                            <span className="shrink-0 rounded-full bg-[#EFF6FF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#1D4ED8]">
                              {card.status}
                            </span>
                          )}
                        </div>
                        <p className="mt-4 text-[14px] font-medium leading-[1.65] text-[#334155]">{card.text}</p>
                      </article>
                    );

                    return card.href ? (
                      <a key={card.title} href={card.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={card.title}>{content}</div>
                    );
                  })}
                </div>
              )}

              {categories.length > 0 && (
                <div className="mx-auto max-w-5xl">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                      <div key={category} className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-[15px] font-bold text-[#334155]">
                        {category}
                      </div>
                    ))}
                  </div>
                  <p className="mt-7 rounded-[20px] border border-[#E2E8F0] bg-white p-5 text-[15px] font-semibold leading-[1.65] text-[#334155]">
                    Danh sách bài viết sẽ được cập nhật sau.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
