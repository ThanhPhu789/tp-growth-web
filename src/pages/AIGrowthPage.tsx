import { useEffect, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  SearchCheck,
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import pSeoFactoryProof from '../assets/images/AI automation Content Web - Google Search Keywword - Post, Page Số lượng lớn -.jpg';
import marketingIntelligenceProof from '../assets/images/Telegram report google ads search console analytics.jpg';
import { trackAnalyticsEvent } from '../lib/analytics/track';
import { ANALYTICS_EVENT_VERSION, type AnalyticsPlacement } from '../lib/analytics/types';

type ProofVisual = {
  eyebrow: string;
  heading: string;
  body: ReactNode;
  chips: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  caption: string;
};

type CaseDetailProps = {
  id: string;
  number: string;
  category: string;
  title: ReactNode;
  subtitle: string;
  problem: ReactNode;
  workflow: string[];
  workflowLabel: string;
  roles: Array<{ title: string; owner: string; items: string[] }>;
  chips: string[];
  proof?: ProofVisual;
  principle: ReactNode;
  icon: typeof Code2;
};

const primaryLinkClass =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4';

const secondaryLinkClass =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-brand-button border border-brand-border bg-white px-6 py-3.5 text-[15px] font-bold text-brand-primary transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4';

function trackInternalCta(
  ctaName: string,
  destinationPath: string,
  placement: AnalyticsPlacement,
  componentName: string,
) {
  trackAnalyticsEvent({
    event: 'primary_cta_click',
    event_version: ANALYTICS_EVENT_VERSION,
    cta_name: ctaName,
    placement,
    component_name: componentName,
    destination_path: destinationPath,
    destination_type: destinationPath.startsWith('#') ? 'page_anchor' : 'internal_route',
  });
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-accent">
      {children}
    </p>
  );
}

function ChipList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-brand-border bg-brand-section px-3 py-1.5 text-[11px] font-bold text-brand-secondary"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-soft-text">
        {label}
      </p>
      <ol className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step} className="relative flex min-w-0 items-center gap-3">
            <span className="flex min-h-12 min-w-0 flex-1 items-center rounded-[12px] border border-brand-border bg-white px-4 py-3 text-[12px] font-bold leading-[1.45] text-brand-primary">
              {step}
            </span>
            {index < steps.length - 1 && (
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-brand-soft-text xl:block" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProofBlock({ proof }: { proof: ProofVisual }) {
  return (
    <article className="grid overflow-hidden rounded-[20px] border border-brand-border bg-white shadow-brand-soft lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,1fr)]">
      <figure className="min-w-0 border-b border-brand-border bg-brand-section p-3 sm:p-4 lg:border-r lg:border-b-0">
        <img
          src={proof.image}
          width={proof.imageWidth}
          height={proof.imageHeight}
          alt={proof.alt}
          className="h-auto w-full rounded-[12px] object-contain"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="px-1 pt-3 text-[12px] leading-[1.6] text-brand-soft-text sm:text-[13px]">
          {proof.caption}
        </figcaption>
      </figure>

      <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7">
        <Eyebrow>{proof.eyebrow}</Eyebrow>
        <h3 className="mt-3 font-heading text-[22px] font-extrabold leading-[1.25] tracking-[-0.025em] text-brand-primary sm:text-[25px]">
          {proof.heading}
        </h3>
        <div className="mt-4 space-y-3 text-[14px] leading-[1.7] text-brand-secondary">
          {proof.body}
        </div>
        <div className="mt-6">
          <ChipList items={proof.chips} />
        </div>
      </div>
    </article>
  );
}

function CaseDetail({
  id,
  number,
  category,
  title,
  subtitle,
  problem,
  workflow,
  workflowLabel,
  roles,
  chips,
  proof,
  principle,
  icon: Icon,
}: CaseDetailProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-brand-border py-20 sm:scroll-mt-28 sm:py-24 lg:py-28">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <header>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-brand-accent/15 bg-brand-accent-soft text-brand-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold tracking-[0.16em] text-brand-highlight">
                  CASE {number}
                </p>
                <Eyebrow>{category}</Eyebrow>
              </div>
            </div>
            <h2 className="mt-6 font-heading text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-brand-primary sm:text-[40px] lg:text-[46px]">
              {title}
            </h2>
            <p className="mt-4 text-[14px] font-bold leading-[1.6] text-brand-accent sm:text-[15px]">
              {subtitle}
            </p>
          </header>

          <div className="min-w-0 space-y-8">
            <div className="rounded-[20px] border border-brand-border bg-brand-section p-5 sm:p-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-soft-text">
                Problem
              </p>
              <div className="mt-3 text-[15px] leading-[1.75] text-brand-secondary sm:text-[16px]">
                {problem}
              </div>
            </div>

            <Flow label={workflowLabel} steps={workflow} />

            <div className={`grid gap-4 ${roles.length > 2 ? 'lg:grid-cols-2' : 'md:grid-cols-2'}`}>
              {roles.map((role) => (
                <article key={`${role.owner}-${role.title}`} className="rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft sm:p-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-soft-text">
                    {role.title}
                  </p>
                  <h3 className="mt-2 font-heading text-[18px] font-extrabold tracking-[-0.02em] text-brand-primary">
                    {role.owner}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {role.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[13px] leading-[1.6] text-brand-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {proof && <ProofBlock proof={proof} />}

            <div>
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-soft-text">
                Real output
              </p>
              <ChipList items={chips} />
            </div>

            <blockquote className="border-l-2 border-brand-highlight pl-5 font-heading text-[19px] font-extrabold leading-[1.55] tracking-[-0.02em] text-brand-primary sm:text-[21px]">
              {principle}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AIGrowthPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = metaDescription?.content;

    document.title = 'AI Growth | Hệ thống Marketing vận hành cùng AI | TP Growth';
    if (metaDescription) {
      metaDescription.content =
        'Cách TP Growth ứng dụng AI vào website, pSEO, technical SEO, tracking và marketing intelligence qua các hệ thống đã triển khai thực tế.';
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== undefined) {
        metaDescription.content = previousDescription;
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-brand-primary">
      <Header />
      <main>
        <section className="border-b border-brand-border bg-brand-section py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-5xl">
              <Eyebrow>AI GROWTH</Eyebrow>
              <h1 className="mt-5 font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em] text-brand-primary sm:text-[52px] lg:text-[68px]">
                AI không thay thế tư duy tăng trưởng.
                <span className="mt-2 block text-brand-accent">
                  Nó biến tư duy đúng thành khả năng triển khai lớn hơn.
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-[1.75] text-brand-secondary sm:text-[19px]">
                Những hệ thống dưới đây không bắt đầu từ câu hỏi “AI làm được gì?”.
                Chúng bắt đầu từ một bài toán thật: cần xây gì, cần scale gì, cần nhìn
                thấy dữ liệu gì — sau đó mới chọn AI và automation phù hợp để triển khai.
              </p>
              <p className="mt-7 border-l-2 border-brand-highlight pl-5 text-[13px] font-extrabold uppercase tracking-[0.12em] text-brand-primary">
                Growth System → AI Execution → Business Learning
              </p>
              <nav className="mt-9 flex flex-wrap gap-3" aria-label="AI Growth systems">
                {['BUILD', 'SCALE', 'OPERATE'].map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    onClick={() => trackInternalCta(`jump_to_${label.toLowerCase()}`, `#${label.toLowerCase()}`, 'hero', 'ai_growth_hero')}
                    className="inline-flex min-h-11 items-center gap-2 rounded-brand-button border border-brand-border bg-white px-4 py-2.5 text-[12px] font-extrabold tracking-[0.12em] text-brand-accent transition-colors hover:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
                  >
                    {label}
                    <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <Eyebrow>OPERATING PRINCIPLE</Eyebrow>
                <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[42px] lg:text-[50px]">
                  AI là đòn bẩy.
                  <span className="block text-brand-accent">
                    Business judgment vẫn là lớp quyết định.
                  </span>
                </h2>
                <p className="mt-6 text-[16px] leading-[1.75] text-brand-secondary">
                  AI có thể đọc dữ liệu, viết code, chuẩn hóa nội dung, kiểm tra tracking
                  và thực hiện những tác vụ lặp lại.
                </p>
              </div>
              <div className="rounded-[20px] border border-brand-border bg-brand-section p-6 sm:p-8">
                <p className="text-[14px] font-bold text-brand-primary">Nhưng nó không tự nhiên biết:</p>
                <ul className="mt-5 space-y-3">
                  {[
                    'Business đang cần tăng traffic hay sửa conversion.',
                    'Hoạt động nào nên tiếp tục hay nên dừng.',
                    'Dữ liệu nào thật sự đáng quan tâm.',
                    'Trải nghiệm nào khiến khách hàng tin tưởng hơn.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-[1.65] text-brand-secondary sm:text-[15px]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-brand-border pt-6 font-heading text-[19px] font-extrabold leading-[1.5] tracking-[-0.02em] text-brand-primary">
                  TP Growth dùng AI để tăng execution capacity,
                  <span className="block text-brand-accent">không giao toàn bộ business judgment cho AI.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <CaseDetail
          id="build"
          number="01"
          category="BUILD"
          title="Từ business thinking đến website production cùng Codex"
          subtitle="Website + Measurement Foundation"
          problem={<>Có positioning, content direction và Growth System rõ, nhưng không cần dựng một team product/dev lớn chỉ để biến ý tưởng thành website production.</>}
          workflow={['Business Positioning', 'Information Architecture', 'Design DNA', 'Codex Implementation', 'Mobile QA', 'SEO Foundation', 'GA4 / GSC / GTM', 'Production']}
          workflowLabel="Workflow"
          roles={[
            { title: 'AI role', owner: 'Codex hỗ trợ', items: ['Đọc codebase', 'Triển khai component/UI', 'Sửa lỗi và responsive refinement', 'SEO và tracking implementation', 'Build/lint validation'] },
            { title: 'Human role', owner: 'Phú giữ', items: ['Positioning và business logic', 'Information architecture và UX judgment', 'Content', 'QA', 'Quyết định publish'] },
          ]}
          chips={['React', 'Vite', 'TypeScript', 'Codex', 'Design System', 'GA4', 'GSC', 'GTM']}
          principle={<>AI không tự thiết kế chiến lược.<span className="block text-brand-accent">Nó giúp người có chiến lược triển khai nhanh hơn.</span></>}
          icon={Code2}
        />

        <CaseDetail
          id="scale"
          number="02"
          category="SCALE"
          title="pSEO Factory: scale search bằng dữ liệu, automation và tài sản thật"
          subtitle="pSEO + Technical SEO + Media Pipeline"
          problem={<>SEO thủ công khiến việc mở rộng page chậm, khó giữ cấu trúc nhất quán và khó ghép đúng content, CTA, hình ảnh, video và internal link.</>}
          workflow={['Search Intent', 'Structured Google Sheet', 'Apps Script Factory', 'WordPress', 'Media Mapping', 'Human QA', 'GSC Monitoring']}
          workflowLabel="System"
          roles={[
            { title: 'AI / tool role', owner: 'Claude Code', items: ['Logic', 'Apps Script', 'Automation', 'Pipeline'] },
            { title: 'AI / tool role', owner: 'Codex', items: ['Asset refinement', 'File/media handling', 'Website integration', 'QA/refinement'] },
            { title: 'System role', owner: 'Production stack', items: ['Google Sheets: structured source of truth', 'Apps Script: publishing / update engine', 'WordPress: production layer'] },
            { title: 'Human role', owner: 'Human', items: ['Intent', 'Claim và message', 'Proof', 'CTA', 'Publish decision'] },
          ]}
          chips={['pSEO Factory', 'Google Sheets', 'Apps Script', 'WordPress', 'Media Pipeline', 'Internal Linking', 'Technical SEO', 'GSC']}
          proof={{
            eyebrow: 'REAL WORKFLOW',
            heading: 'pSEO Factory chạy trên dữ liệu có cấu trúc',
            body: <>
              <p>Google Sheet đóng vai trò source of truth cho nội dung, search intent, media, internal link và trạng thái xuất bản.</p>
              <p>AI và Apps Script hỗ trợ scale phần triển khai, nhưng từng page vẫn được kiểm soát theo intent, proof và CTA trước khi publish.</p>
            </>,
            chips: ['Google Sheets', 'Apps Script', 'WordPress', 'Media Mapping', 'Human QA'],
            image: pSeoFactoryProof,
            imageWidth: 2861,
            imageHeight: 1814,
            alt: 'pSEO Factory trên Google Sheets dùng để quản lý nội dung, media và trạng thái xuất bản',
            caption: 'Ảnh thực tế từ pSEO Factory đang sử dụng trong dự án.',
          }}
          principle={<>Không publish AI raw content hàng loạt.<span className="mt-1 block text-brand-accent">Chỉ scale khi search intent, cấu trúc, proof, CTA và tài sản hỗ trợ đã đủ rõ.</span></>}
          icon={SearchCheck}
        />

        <CaseDetail
          id="operate"
          number="03"
          category="OPERATE"
          title={<>Marketing Intelligence:<span className="block">đưa dữ liệu marketing về một nơi dễ quan sát hơn</span></>}
          subtitle="Automated Reports + Ads Monitoring + Attribution"
          problem={<>GA4, Search Console và Google Ads nằm ở nhiều nơi. Người vận hành phải mở nhiều dashboard để trả lời những câu hỏi rất cơ bản.</>}
          workflow={['GA4 + GSC + Google Ads', 'Apps Script / Google Ads Scripts', 'Google Sheets', 'Telegram', 'Human Decision']}
          workflowLabel="System"
          roles={[
            { title: 'Current capabilities', owner: 'Đang vận hành', items: ['GA4 automated reporting', 'GSC automated reporting', 'Google Ads monitoring', 'Telegram reporting', 'Attribution / gclid tracking repair', 'Centralized data in Sheets'] },
            { title: 'Decision layer', owner: 'Human', items: ['Đọc business context', 'Đánh giá signal', 'Chọn ưu tiên', 'Quyết định hành động tiếp theo'] },
          ]}
          chips={['GA4', 'GSC', 'Google Ads', 'Google Sheets', 'Telegram', 'Attribution']}
          proof={{
            eyebrow: 'REAL OUTPUT',
            heading: 'Dữ liệu được đưa về nơi người vận hành thực sự sử dụng',
            body: <>
              <p>GA4, Search Console và Google Ads được tổng hợp qua script, ghi về hệ thống dữ liệu và gửi báo cáo trực tiếp lên Telegram.</p>
              <p>Mục tiêu không phải tạo thêm dashboard, mà giảm thời gian phải mở nhiều nền tảng để hiểu chuyện gì đang xảy ra.</p>
            </>,
            chips: ['GA4', 'Search Console', 'Google Ads', 'Google Sheets', 'Telegram'],
            image: marketingIntelligenceProof,
            imageWidth: 1408,
            imageHeight: 1639,
            alt: 'Báo cáo Google Ads, Search Console và GA4 được gửi về Telegram',
            caption: 'Ảnh thực tế từ hệ thống Telegram Marketing Report.',
          }}
          principle={<>AI giúp hệ thống quan sát nhanh hơn.<span className="block text-brand-accent">Người vận hành vẫn quyết định nên làm gì tiếp theo.</span></>}
          icon={BarChart3}
        />

        <section className="border-y border-brand-border bg-brand-section py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-[24px] border border-brand-border bg-white p-6 text-center shadow-brand-soft sm:p-10 lg:p-14">
              <Eyebrow>FINAL PHILOSOPHY</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-4xl font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[42px] lg:text-[50px]">
                Dữ liệu giúp nhìn thấy sự thật.
                <span className="block text-brand-accent">Người vận hành phải hiểu sự thật đó có ý nghĩa gì.</span>
              </h2>
              <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[16px] leading-[1.75] text-brand-secondary sm:text-[17px]">
                <p>Tracking tốt có thể cho biết chuyện gì đang xảy ra.</p>
                <p>Nhưng để biết nên tăng, giảm, dừng, thay thông điệp, sửa trải nghiệm hay thay đổi cách team làm việc, vẫn cần business context và judgment.</p>
                <p className="font-bold text-brand-primary">AI Growth tại TP Growth được xây quanh nguyên tắc đó: AI hỗ trợ execution. Con người chịu trách nhiệm về direction.</p>
              </div>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/Growth-System-Framework"
                  className={primaryLinkClass}
                  onClick={() => trackInternalCta('explore_growth_system', '/Growth-System-Framework', 'cta_section', 'ai_growth_final_cta')}
                >
                  Khám phá Growth System
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="/lam-viec-voi-phu"
                  className={secondaryLinkClass}
                  onClick={() => trackInternalCta('work_with_phu', '/lam-viec-voi-phu', 'cta_section', 'ai_growth_final_cta')}
                >
                  Làm việc với Phú
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
