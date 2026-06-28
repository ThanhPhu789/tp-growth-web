import { ArrowRight, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { blogPosts } from '../data/blogPosts';

export default function GrowthNotesPage() {
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
            <div className="mx-auto grid max-w-5xl gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-brand-card border border-brand-border bg-brand-surface p-6 shadow-brand-soft md:p-9"
                >
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold text-brand-soft-text">
                    <span className="rounded-full bg-brand-accent-soft px-3 py-1.5 text-brand-accent">{post.category}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-5 max-w-3xl font-heading text-[28px] font-extrabold leading-[1.2] tracking-[-0.035em] md:text-[36px]">
                    <a href={`/growth-notes/${post.slug}`} className="transition-colors hover:text-brand-accent">
                      {post.title}
                    </a>
                  </h2>
                  <p className="mt-4 max-w-3xl text-[16px] font-medium leading-[1.75] text-brand-secondary">{post.excerpt}</p>
                  <a
                    href={`/growth-notes/${post.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-brand-accent transition-colors hover:text-brand-highlight"
                  >
                    Đọc Growth Note
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
