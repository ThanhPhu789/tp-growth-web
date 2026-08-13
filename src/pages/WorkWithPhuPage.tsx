import { ArrowRight, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { navCta } from '../config/navigation';
import { siteImageData } from '../data/siteImages';

const offers = [
  {
    number: '01',
    title: 'Growth System Audit',
    audience:
      'SME đã chạy marketing nhưng không biết điểm nghẽn nằm ở Ads, Offer, Website, Tracking hay Sales.',
    scope: 'Traffic → Content → Conversion → Tracking → Sales handoff.',
    result: 'Bản đồ điểm nghẽn và thứ tự ưu tiên cần xử lý.',
    cta: 'Trao đổi về Audit',
  },
  {
    number: '02',
    title: 'Architecture & Build',
    audience:
      'Doanh nghiệp đã nhìn thấy vấn đề nhưng thiếu người nối các lớp triển khai.',
    scope:
      'Thông điệp, website, tracking, campaign structure hoặc sales handoff tùy bài toán.',
    result:
      'Phạm vi triển khai được thiết kế theo đúng điểm nghẽn, không mặc định phải xây mọi thứ.',
    cta: 'Trao đổi về bài toán cần build',
  },
  {
    number: '03',
    title: 'Operator Partnership',
    audience:
      'Founder đã có team nhưng thiếu một người đứng giữa strategy, data và execution.',
    scope:
      'Đồng hành cùng Founder và đội ngũ để đọc dữ liệu, ưu tiên quyết định và cải thiện hệ thống theo phản hồi thực tế.',
    result: 'Một nhịp vận hành giúp strategy, data và execution cùng học từ thị trường.',
    cta: 'Trao đổi về đồng hành',
  },
];

const workingProcess = [
  {
    number: '01',
    title: 'Trao đổi bối cảnh',
    description:
      'Hiểu mục tiêu, vấn đề hiện tại, dữ liệu sẵn có và năng lực của đội ngũ.',
  },
  {
    number: '02',
    title: 'Xác định điểm nghẽn',
    description:
      'Phân biệt vấn đề nằm ở strategy, traffic, message, conversion, tracking, sales hay execution.',
  },
  {
    number: '03',
    title: 'Thống nhất SOW',
    description:
      'Chốt phạm vi, deliverables, trách nhiệm hai bên, timeline, tiêu chí hoàn thành và chi phí.',
  },
  {
    number: '04',
    title: 'Triển khai và học từ dữ liệu',
    description:
      'Thực hiện theo phạm vi đã chốt, đo phản hồi thực tế và điều chỉnh khi cần.',
  },
];

const phuImage = siteImageData(
  'tp-growth-phu-profile-seated-black-polo-thumbs-up.jpg',
);

const ctaClassName =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-6 py-3.5 text-center text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4 sm:w-auto';

export default function WorkWithPhuPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = metaDescription?.content;

    document.title = 'Làm việc với Phú | TP Growth';
    if (metaDescription) {
      metaDescription.content =
        'Trao đổi với Phú về Growth System Audit, Architecture & Build hoặc Operator Partnership để xác định đúng điểm nghẽn, phạm vi triển khai và bước tiếp theo phù hợp.';
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== undefined) {
        metaDescription.content = previousDescription;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <section className="py-14 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <p className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-brand-highlight md:text-[11px] md:tracking-[0.4em]">
                  WORK WITH PHU
                </p>
                <h1 className="font-heading text-[40px] font-extrabold leading-[1.04] tracking-[-0.04em] text-brand-primary sm:text-[48px] md:text-[58px]">
                  Làm việc với Phú
                </h1>
                <p className="mt-6 max-w-3xl text-[18px] font-semibold leading-[1.7] text-brand-secondary md:text-[21px]">
                  Bắt đầu bằng một cuộc nói chuyện rõ vấn đề.
                </p>
                <p className="mt-5 max-w-3xl text-[16px] font-medium leading-[1.75] text-brand-secondary md:text-[17px]">
                  Không phải doanh nghiệp nào cũng cần làm lại toàn bộ marketing. Phú bắt
                  đầu bằng cách nhìn vào điểm nghẽn, năng lực thực thi hiện tại và thứ tự
                  ưu tiên — rồi mới xác định nên audit, build hay đồng hành.
                </p>
                <div className="mt-8">
                  <a
                    href={navCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="zalo"
                    data-location="work-with-phu-hero"
                    className={ctaClassName}
                  >
                    Nhắn Phú qua Zalo
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="mt-4 max-w-xl text-[13px] font-medium leading-[1.65] text-brand-soft-text sm:text-[14px]">
                    Buổi trao đổi ban đầu dùng để hiểu bối cảnh và xác định hướng phù hợp,
                    chưa mặc định phải bắt đầu một dự án lớn.
                  </p>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-brand-card border border-brand-border bg-white shadow-sm">
                <img
                  src={phuImage.src}
                  alt={phuImage.alt}
                  width={phuImage.width}
                  height={phuImage.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-brand-highlight">
                  Ba hướng làm việc
                </p>
                <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[42px] lg:text-[50px]">
                  Bắt đầu đúng với điểm nghẽn hiện tại.
                </h2>
                <p className="mt-5 text-[16px] font-medium leading-[1.75] text-brand-secondary md:text-[17px]">
                  Mỗi hướng giải quyết một mức độ khác nhau của bài toán — từ chẩn đoán,
                  thiết kế triển khai đến đồng hành cùng đội ngũ.
                </p>
              </div>

              <div className="mt-10 divide-y divide-brand-border border-y border-brand-border md:mt-14">
                {offers.map((offer) => (
                  <article
                    key={offer.number}
                    className="grid gap-6 py-9 md:grid-cols-[80px_minmax(0,1fr)] md:gap-8 md:py-12 lg:grid-cols-[100px_minmax(0,1fr)_auto] lg:gap-10"
                  >
                    <p className="font-heading text-[13px] font-extrabold tracking-[0.18em] text-brand-accent">
                      {offer.number}
                    </p>
                    <div className="min-w-0">
                      <h3 className="font-heading text-[26px] font-extrabold leading-tight tracking-[-0.03em] text-brand-primary sm:text-[30px]">
                        {offer.title}
                      </h3>
                      <dl className="mt-6 grid gap-5 text-[15px] leading-[1.7] text-brand-secondary sm:text-[16px]">
                        <div className="grid gap-1.5 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-5">
                          <dt className="font-bold text-brand-primary">Dành cho</dt>
                          <dd>{offer.audience}</dd>
                        </div>
                        <div className="grid gap-1.5 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-5">
                          <dt className="font-bold text-brand-primary">Phạm vi</dt>
                          <dd>{offer.scope}</dd>
                        </div>
                        <div className="grid gap-1.5 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-5">
                          <dt className="font-bold text-brand-primary">Kết quả</dt>
                          <dd>{offer.result}</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="md:col-start-2 lg:col-start-auto lg:self-end">
                      <a
                        href={navCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cta="zalo"
                        data-location={`work-with-phu-${offer.number}`}
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-brand-button bg-brand-highlight px-5 py-3 text-center text-[14px] font-bold text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-4 sm:w-auto"
                      >
                        {offer.cta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-brand-card border border-brand-border bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                <h2 className="font-heading text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-brand-primary sm:text-[34px]">
                  Phạm vi được xác định theo bài toán thực tế.
                </h2>
                <div className="space-y-4 text-[15px] font-medium leading-[1.75] text-brand-secondary sm:text-[16px]">
                  <p>
                    Mỗi doanh nghiệp có điểm nghẽn, dữ liệu và năng lực thực thi khác
                    nhau. Phạm vi, deliverables, timeline và chi phí sẽ được xác định sau
                    buổi trao đổi ban đầu và thống nhất bằng SOW rõ ràng trước khi bắt đầu.
                  </p>
                  <p className="font-bold text-brand-primary">
                    Không mặc định phải xây lại toàn bộ hệ thống. Chỉ triển khai những lớp
                    thực sự cần thiết để giải quyết điểm nghẽn hiện tại.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-brand-highlight">
                  Cách làm việc
                </p>
                <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-primary sm:text-[42px] lg:text-[50px]">
                  Từ bối cảnh đến một phạm vi rõ ràng.
                </h2>
              </div>
              <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
                {workingProcess.map((step) => (
                  <li
                    key={step.number}
                    className="rounded-brand-card border border-brand-border bg-brand-bg p-6 shadow-sm"
                  >
                    <p className="font-heading text-[12px] font-extrabold tracking-[0.18em] text-brand-accent">
                      {step.number}
                    </p>
                    <h3 className="mt-5 font-heading text-[21px] font-extrabold leading-tight tracking-[-0.025em] text-brand-primary">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[14px] font-medium leading-[1.7] text-brand-secondary">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-brand-card bg-brand-primary px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
                <div className="max-w-3xl">
                  <h2 className="font-heading text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-[40px] lg:text-[48px]">
                    Chưa cần biết mình phù hợp với hướng nào.
                  </h2>
                  <p className="mt-5 text-[16px] font-medium leading-[1.75] text-slate-200 md:text-[17px]">
                    Hãy bắt đầu bằng việc mô tả bài toán hiện tại. Nếu phù hợp, Phú sẽ đề
                    xuất bước tiếp theo; nếu chưa cần một dự án lớn, hai bên cũng không mặc
                    định phải build mọi thứ.
                  </p>
                </div>
                <a
                  href={navCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="zalo"
                  data-location="work-with-phu-final"
                  className={ctaClassName}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Nhắn Phú qua Zalo
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
