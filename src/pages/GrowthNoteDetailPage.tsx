import { ArrowLeft, Clock, FileText, Image, Play, Presentation } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { LeadPipelineVisual, LeadQualityComparison } from '../components/growth-notes/GrowthNoteVisuals';
import type { BlogContentBlock, BlogPost } from '../data/blogPosts';

type GrowthNoteDetailPageProps = {
  post: BlogPost;
};

const placeholderIcons = {
  IMAGE_PLACEHOLDER: Image,
  VIDEO_PLACEHOLDER: Play,
  CASE_PLACEHOLDER: Presentation,
  'VIDEO PLACEHOLDER': Play,
  'CASE PLACEHOLDER': Presentation,
};

function ContentBlock({ block }: { block: BlogContentBlock; key?: string }) {
  if (block.type === 'heading') {
    return (
      <h2 className="mt-12 font-heading text-[27px] font-extrabold leading-[1.25] tracking-[-0.03em] text-brand-primary md:text-[32px]">
        {block.text}
      </h2>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="my-7 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[17px] leading-[1.8] text-brand-secondary">
            <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-highlight" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'placeholder') {
    const Icon = placeholderIcons[block.label as keyof typeof placeholderIcons] ?? FileText;
    return (
      <aside className="my-9 rounded-brand-card border border-dashed border-brand-border bg-brand-bg p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-brand-button bg-brand-accent-soft text-brand-accent">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-accent">{block.label}</p>
            <p className="mt-2 text-[15px] font-semibold leading-[1.6] text-brand-secondary">{block.text}</p>
          </div>
        </div>
      </aside>
    );
  }

  if (block.type === 'visual') {
    return block.variant === 'lead-pipeline' ? <LeadPipelineVisual /> : <LeadQualityComparison />;
  }

  return <p className="mt-6 text-[17px] leading-[1.85] text-brand-secondary">{block.text}</p>;
}

export default function GrowthNoteDetailPage({ post }: GrowthNoteDetailPageProps) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <article>
          <header className="border-b border-brand-border bg-brand-surface py-14 md:py-20">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <a
                  href="/growth-notes"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-accent transition-colors hover:text-brand-highlight"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Growth Notes
                </a>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-[12px] font-bold text-brand-soft-text">
                  <span className="rounded-full bg-brand-accent-soft px-3 py-1.5 text-brand-accent">{post.category}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>
                <h1 className="mt-6 max-w-4xl font-heading text-[38px] font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-[48px] md:text-[58px]">
                  {post.title}
                </h1>
                <p className="mt-7 max-w-3xl text-[18px] font-medium leading-[1.75] text-brand-secondary md:text-[20px]">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </header>

          <div className="py-14 md:py-20">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">
                {post.content.map((block, index) => (
                  <ContentBlock key={`${block.type}-${index}`} block={block} />
                ))}

                <aside className="mt-14 rounded-brand-card border border-brand-border bg-brand-surface p-7 shadow-brand-soft md:p-9">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-highlight">Gợi ý để bắt đầu</p>
                  <p className="mt-4 text-[17px] font-semibold leading-[1.75] text-brand-primary">{post.cta}</p>
                </aside>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
