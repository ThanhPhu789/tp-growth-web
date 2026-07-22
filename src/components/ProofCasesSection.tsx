import { CheckCircle2 } from 'lucide-react';
import { siteImageData } from '../data/siteImages';

const cases = [
  {
    title: 'B2B ngành sơn',
    context: 'Từ mô hình thiên về B2B, cần mở thêm hướng bán lẻ và tạo demand trực tiếp.',
    changes: ['Xây lại social/content', 'Chạy ads theo funnel', 'Setup tracking để đọc lead và chi phí'],
    evidence: 'Slot ảnh thật / dashboard / campaign sẽ cập nhật',
    tag: 'B2B → Retail engine',
    image: siteImageData('Camp Sơn Lại Sáng cũ chiều mới youtube ads conversions.jpg'),
  },
  {
    title: 'Phụ kiện công nghệ',
    context: 'Sản phẩm có nhu cầu nhưng social và ads chưa tạo được nhịp bán đều.',
    changes: ['Chuẩn hóa thông điệp', 'Tạo content chuyển đổi', 'Tối ưu ads theo dữ liệu'],
    evidence: 'Slot ảnh thật / video campaign sẽ cập nhật',
    tag: 'Retail growth',
    image: siteImageData('paid-media facebook ads Blachvue dr750 lte.jpg'),
  },
  {
    title: 'F&B quy mô nhỏ',
    context: 'Bài toán ngân sách nhỏ, cần test nhanh nhưng vẫn biết kênh nào tạo đơn.',
    changes: ['Định hình offer', 'Dựng funnel đơn giản', 'Đọc kết quả theo đơn thật'],
    evidence: 'Slot ảnh thật / số liệu sẽ cập nhật',
    tag: 'Small budget test',
    image: siteImageData('Case FnB Build kênh Tiktok.jpg'),
  },
];

export default function ProofCasesSection() {
  return (
    <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="mb-5 text-[10px] font-black uppercase tracking-[0.28em] text-[#EA580C] md:text-[11px] md:tracking-[0.38em]">MỘT VÀI BÀI TOÁN THỰC TẾ</div>
          <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F172A] sm:text-[40px] md:text-[46px] md:leading-[1.04] md:tracking-[-0.04em]">
            Tôi không chỉ nói về hệ thống. Tôi từng trực tiếp tham gia xây nó.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-[1.7] text-[#334155] md:text-[17px]">
            Những ví dụ bên dưới sẽ được thay bằng ảnh thật, video thật và số liệu chi tiết sau. Ở bản MVP, phần này dùng để đặt đúng khung bằng chứng trước khi chốt lịch audit.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 md:gap-6">
          {cases.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-soft md:p-6">
              <div className="aspect-[16/9] overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC]">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full ${item.image.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              <span className="mt-5 inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-bold text-[#1D4ED8]">{item.tag}</span>
              <h3 className="mt-4 font-heading text-[23px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0F172A]">{item.title}</h3>
              <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[#334155]">{item.context}</p>
              <ul className="mt-5 space-y-3 border-t border-[#E2E8F0] pt-5">
                {item.changes.map((change) => (
                  <li key={change} className="flex gap-2.5 text-[13px] font-semibold leading-[1.5] text-[#334155]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" />
                    {change}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-[#1D4ED8] pl-3 text-[12px] font-semibold leading-[1.5] text-[#64748B]">{item.evidence}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-[16px] font-bold leading-[1.6] text-[#0F172A] md:mt-10 md:text-[17px]">
          Điểm chung không phải là làm marketing nhiều hơn. Điểm chung là nhìn ra điểm nghẽn đúng hơn.
        </p>
      </div>
    </section>
  );
}
