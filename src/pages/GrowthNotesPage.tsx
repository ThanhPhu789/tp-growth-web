import { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  START_HERE_GROWTH_NOTE_SLUG,
  StartHereGrowthMosaic,
} from '../components/growth-notes/StartHereGrowthNoteVisuals';
import { blogPosts, type BlogPost } from '../data/blogPosts';

const INITIAL_REMAINING_POSTS = 11;
const POSTS_PER_LOAD = 12;

type GrowthNoteCardProps = {
  post: BlogPost;
  featured?: boolean;
  key?: string;
};

function GrowthNoteCover({ post, featured = false }: GrowthNoteCardProps) {
  const cover = post.media?.coverImage;
  const imageHeight = featured ? 'h-full min-h-[260px] lg:min-h-[360px]' : 'h-48 sm:h-52';
  const fitClass = cover?.fit === 'contain' ? 'object-contain bg-brand-bg' : 'object-cover';

  return (
    <a
      href={`/growth-notes/${post.slug}`}
      className={`block overflow-hidden rounded-[18px] border border-brand-border bg-brand-bg ${imageHeight}`}
      aria-label={post.title}
    >
      {post.slug === START_HERE_GROWTH_NOTE_SLUG ? (
        <StartHereGrowthMosaic priority={featured} compact />
      ) : cover ? (
        <img
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          loading={featured ? 'eager' : 'lazy'}
          fetchPriority={featured ? 'high' : 'auto'}
          decoding="async"
          className={`h-full w-full transition-transform duration-500 hover:scale-[1.02] ${fitClass}`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center px-6 text-center text-[12px] font-black uppercase tracking-[0.18em] text-brand-soft-text">
          Growth Note
        </div>
      )}
    </a>
  );
}

function GrowthNoteCard({ post, featured = false }: GrowthNoteCardProps) {
  if (featured) {
    return (
      <article className="grid overflow-hidden rounded-brand-card border border-brand-border bg-brand-surface p-4 shadow-brand-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-5">
        <GrowthNoteCover post={post} featured />
        <div className="flex flex-col justify-center p-3 sm:p-5 lg:p-8">
          <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold text-brand-soft-text">
            <span className={`rounded-full px-3 py-1.5 ${post.badge ? 'bg-brand-highlight-soft text-brand-highlight' : 'bg-brand-accent-soft text-brand-accent'}`}>
              {post.badge ?? post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>
          <h2 className="mt-5 font-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.035em] text-brand-primary md:text-[42px]">
            <a href={`/growth-notes/${post.slug}`} className="transition-colors hover:text-brand-accent">
              {post.title}
            </a>
          </h2>
          <p className="mt-5 text-[16px] font-medium leading-[1.75] text-brand-secondary md:text-[18px]">{post.excerpt}</p>
          <a
            href={`/growth-notes/${post.slug}`}
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-brand-button bg-brand-highlight px-5 py-3 text-[14px] font-bold text-white shadow-brand-soft transition-colors hover:bg-brand-accent"
          >
            Đọc Growth Note
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col rounded-brand-card border border-brand-border bg-brand-surface p-4 shadow-brand-soft">
      <GrowthNoteCover post={post} />
      <div className="flex flex-1 flex-col px-1 pb-2 pt-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-brand-soft-text">
          <span className="rounded-full bg-brand-accent-soft px-3 py-1.5 text-brand-accent">{post.category}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
        <h3 className="mt-4 font-heading text-[21px] font-extrabold leading-[1.22] tracking-[-0.025em] text-brand-primary">
          <a
            href={`/growth-notes/${post.slug}`}
            className="transition-colors hover:text-brand-accent [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
          >
            {post.title}
          </a>
        </h3>
        <p className="mt-3 text-[14px] font-medium leading-[1.7] text-brand-secondary [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
          {post.excerpt}
        </p>
        <a
          href={`/growth-notes/${post.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[13px] font-bold text-brand-accent transition-colors hover:text-brand-highlight"
        >
          Đọc Growth Note
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function GrowthNotesPage() {
  const [visibleRemainingPosts, setVisibleRemainingPosts] = useState(INITIAL_REMAINING_POSTS);
  const [featuredPost, ...remainingPosts] = blogPosts;
  const visiblePosts = remainingPosts.slice(0, visibleRemainingPosts);
  const hasMorePosts = visibleRemainingPosts < remainingPosts.length;

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-brand-highlight">Field notes</p>
              <h1 className="mt-5 font-heading text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[52px] md:text-[64px]">
                Growth Notes
              </h1>
              <p className="mt-6 max-w-3xl text-[18px] font-medium leading-[1.75] text-brand-secondary md:text-[20px]">
                Ghi chép thực chiến về marketing, tracking, dashboard, campaign, AI và cách vận hành tăng trưởng cho SME.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-surface py-14 md:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {featuredPost ? <GrowthNoteCard post={featuredPost} featured /> : null}

              {visiblePosts.length ? (
                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {visiblePosts.map((post) => (
                    <GrowthNoteCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : null}

              {hasMorePosts ? (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleRemainingPosts((count) => Math.min(count + POSTS_PER_LOAD, remainingPosts.length))}
                    className="inline-flex min-h-12 items-center justify-center rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[15px] font-bold text-white shadow-brand-soft transition-colors hover:bg-brand-accent"
                  >
                    Xem thêm Growth Notes
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
