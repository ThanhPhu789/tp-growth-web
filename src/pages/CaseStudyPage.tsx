import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { siteImageData } from '../data/siteImages';
import blackVueFeaturedImage from '../assets/case-studies/blackvue/blackvue-hung-lam-facebook-review.jpg';
import gnetGonxFeaturedImage from '../assets/images/Case campaign camera hành trình GNET G-ON X - KOL Review Sản phẩm.jpg';
import fnbTiktokFeaturedImage from '../assets/images/Case FnB Build kênh Tiktok.jpg';

const featuredImage = siteImageData('Casestyudy sơn lại facebook ads mess + remarrketing.jpg');
const blackVueImage = { src: blackVueFeaturedImage, width: 1199, height: 824 };
const gnetGonxImage = { src: gnetGonxFeaturedImage, width: 1207, height: 900 };
const fnbTiktokImage = { src: fnbTiktokFeaturedImage, width: 1124, height: 900 };

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <section className="py-14 md:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-highlight md:text-[11px] md:tracking-[0.4em]">
                CASE STUDIES
              </div>
              <h1 className="mt-5 max-w-4xl font-heading text-[40px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[48px] md:text-[58px]">
                Những hệ thống đã được xây từ bài toán thật
              </h1>
              <p className="mt-6 max-w-3xl text-[17px] font-medium leading-[1.75] text-brand-secondary md:text-[19px]">
                Không chỉ là danh sách chiến dịch hoặc công việc từng làm. Mỗi case được trình bày theo bối cảnh kinh doanh, điểm nghẽn, hệ thống triển khai, kết quả và những gì còn tiếp tục được hoàn thiện.
              </p>
              <p className="mt-7 text-[12px] font-black uppercase tracking-[0.18em] text-brand-accent">
                Strategy → Execution → Data → Growth
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-white py-14 md:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
              <a
                href="/case-study/paint-and-more-growth-system"
                className="group block rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 sm:p-7 lg:col-span-2"
                aria-label="Xem case study Paint & More / OneCoat"
              >
                <article className="grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                  <div className="overflow-hidden rounded-[18px] border border-brand-border bg-brand-bg">
                    <img
                      src={featuredImage.src}
                      alt="Hệ thống nội dung và quảng cáo của Paint & More / OneCoat"
                      width={featuredImage.width}
                      height={featuredImage.height}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="aspect-[16/10] h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">
                      B2B → RETAIL GROWTH SYSTEM
                    </div>
                    <h2 className="mt-4 font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[38px]">
                      Paint & More / OneCoat
                    </h2>
                    <p className="mt-3 font-heading text-[21px] font-bold leading-[1.25] tracking-[-0.025em] text-brand-secondary md:text-[25px]">
                      Từ doanh nghiệp mạnh về B2B đến hệ thống tăng trưởng bán lẻ đa kênh
                    </p>
                    <p className="mt-5 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                      Kết nối định vị sản phẩm, content, paid media, landing page, tracking, team execution và lớp CRM đang được hoàn thiện thành một dòng tăng trưởng thống nhất.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {['Strategy', 'Content System', 'Paid Media', 'Landing Page', 'Tracking', 'Sales Alignment'].map((tag) => (
                        <span key={tag} className="rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[11px] font-bold text-brand-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 border-l-2 border-brand-accent pl-4 text-[14px] font-bold leading-[1.6] text-brand-primary">
                      Xây được nguồn doanh thu bán lẻ mới, có giai đoạn đạt quy mô vài trăm triệu đồng/tháng — support B2B X tỷ đồng/tháng.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-extrabold text-brand-highlight">
                      Xem cách hệ thống được xây
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </a>

              <a
                href="/case-study/blackvue-dr750-lte-growth-system"
                className="group block rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 sm:p-7 lg:col-span-2"
                aria-label="Xem case study BlackVue DR750 LTE"
              >
                <article className="grid items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
                  <div className="lg:order-2">
                    <div className="overflow-hidden rounded-[18px] border border-brand-border bg-brand-bg">
                      <img
                        src={blackVueImage.src}
                        alt="Hùng Lâm review camera hành trình BlackVue DR750 LTE trong khoang xe sang"
                        width={blackVueImage.width}
                        height={blackVueImage.height}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[1199/824] h-full w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                      />
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">
                      PREMIUM AUTO TECH GROWTH SYSTEM
                    </div>
                    <h2 className="mt-4 font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[38px]">
                      BlackVue DR750 LTE
                    </h2>
                    <p className="mt-3 font-heading text-[21px] font-bold leading-[1.25] tracking-[-0.025em] text-brand-secondary md:text-[25px]">
                      Xây retail demand engine cho phân khúc xe sang
                    </p>
                    <p className="mt-5 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                      Kết nối định vị premium, content education, influencer, PR, paid media, retail TP.HCM và dealer routing thành một hệ thống tạo nhu cầu đa kênh.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {['Positioning', 'Influencer', 'PR', 'Paid Media', 'Retail', 'Dealer Enablement'].map((tag) => (
                        <span key={tag} className="rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[11px] font-bold text-brand-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 border-l-2 border-brand-accent pl-4 text-[14px] font-bold leading-[1.6] text-brand-primary">
                      Retail vận hành ở quy mô hàng trăm triệu đồng/tháng trong nhiều giai đoạn, đồng thời hỗ trợ nhu cầu cho đại lý toàn quốc.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-extrabold text-brand-highlight">
                      Xem cách demand engine được xây
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </a>

              <a
                href="/case-study/gnet-g-on-x-growth-system"
                className="group block rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 sm:p-7 lg:col-span-2"
                aria-label="Xem case study GNET G-ON X trong hệ sinh thái Msport"
              >
                <article className="grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                  <div className="overflow-hidden rounded-[18px] border border-brand-border bg-brand-bg">
                    <img
                      src={gnetGonxImage.src}
                      alt="Campaign ra mắt camera hành trình GNET G-ON X"
                      width={gnetGonxImage.width}
                      height={gnetGonxImage.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[1207/900] h-full w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">
                      AUTOMOTIVE PRODUCT LAUNCH SYSTEM
                    </div>
                    <h2 className="mt-4 font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[38px]">
                      GNET G-ON X × Msport
                    </h2>
                    <p className="mt-3 font-heading text-[21px] font-bold leading-[1.25] tracking-[-0.025em] text-brand-secondary md:text-[25px]">
                      Từ một sản phẩm mới đến hệ thống tạo niềm tin đa kênh
                    </p>
                    <p className="mt-5 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                      Kết nối product content, partner review, PR, Search, community, event SECC và hạ tầng thực thi Msport thành một launch system Online × Offline.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {['Product Launch', 'KOL/KOC', 'PR', 'Search', 'Community', 'Event'].map((tag) => (
                        <span key={tag} className="rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[11px] font-bold text-brand-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 border-l-2 border-brand-accent pl-4 text-[14px] font-bold leading-[1.6] text-brand-primary">
                      Xây khả năng được biết, được tìm lại và được kiểm chứng qua nhiều nguồn trước khi sales tiếp tục cuộc trò chuyện.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-extrabold text-brand-highlight">
                      Xem cách launch system được xây
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </a>

              <a
                href="/case-study/fnb-tiktok-sales-system"
                className="group block rounded-[20px] border border-brand-border bg-white p-5 shadow-brand-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 sm:p-7 lg:col-span-2"
                aria-label="Xem case study F&B TikTok Sales System"
              >
                <article className="grid items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
                  <div className="lg:order-2">
                    <div className="overflow-hidden rounded-[18px] border border-brand-border bg-brand-bg">
                      <img
                        src={fnbTiktokImage.src}
                        alt="Kênh TikTok với nhiều nội dung chân gà sốt Thái"
                        width={fnbTiktokImage.width}
                        height={fnbTiktokImage.height}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[1124/900] h-full w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                      />
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">
                      LEAN F&B GROWTH SYSTEM
                    </div>
                    <h2 className="mt-4 font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[38px]">
                      F&B TikTok Sales System
                    </h2>
                    <p className="mt-3 font-heading text-[21px] font-bold leading-[1.25] tracking-[-0.025em] text-brand-secondary md:text-[25px]">
                      Một kênh thắng có thể đủ cho một business nhỏ
                    </p>
                    <p className="mt-5 text-[15px] font-medium leading-[1.7] text-brand-secondary">
                      Dùng organic content để học thị trường, Paid Media ở mức vừa phải để khuếch đại format có tín hiệu và một flow ngắn từ video đến đơn hàng.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {['TikTok Strategy', 'Organic Testing', 'Content System', 'Light Paid Media', 'Sales Flow'].map((tag) => (
                        <span key={tag} className="rounded-full border border-brand-border bg-brand-bg px-3 py-1.5 text-[11px] font-bold text-brand-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 border-l-2 border-brand-highlight pl-4 text-[14px] font-bold leading-[1.6] text-brand-primary">
                      Có giai đoạn đạt khoảng 75 triệu đồng/tháng doanh thu — không phải lợi nhuận — trước khi mô hình chủ động dừng vì giới hạn vận hành và ưu tiên gia đình thay đổi.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-extrabold text-brand-highlight">
                      Xem cách right-sized system được xây
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </a>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
