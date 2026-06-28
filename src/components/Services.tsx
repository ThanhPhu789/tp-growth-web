import { CheckCircle2 } from 'lucide-react';

const situations = [
  'Marketing vẫn chạy nhưng không chắc đang đúng hướng',
  'Lead lúc có lúc không',
  'Ads có số nhưng sales không tin chất lượng lead',
  'Có team nhưng output rời rạc',
  'Muốn scale nhưng sợ đốt thêm tiền',
  'Đang phân vân đổi agency, tuyển người hoặc build lại team',
  'Doanh thu chưa phản ánh đúng công sức đang bỏ ra',
  'Founder vẫn phải tự ghép mọi thứ lại để ra quyết định',
];

export default function Services() {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[5fr_7fr] lg:gap-12 xl:gap-16">
          <div className="max-w-[560px]">
            <div className="mb-5 text-[10px] font-black uppercase tracking-[0.32em] text-[#EA580C] md:text-[11px] md:tracking-[0.4em]">FIT CHECK</div>
            <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F172A] sm:text-[40px] md:text-[46px] md:leading-[1.04] md:tracking-[-0.04em]">
              Bạn có thể không cần làm nhiều hơn ngay.
            </h2>
            <p className="mt-4 text-[17px] font-semibold leading-[1.55] text-[#1D4ED8] md:text-[19px]">Có thể việc đầu tiên cần làm là nhìn lại cho đúng.</p>
            <p className="mt-5 text-[15px] font-medium leading-[1.7] text-[#334155] md:text-[16px]">
              Sau khi rà qua traffic, tracking, execution và optimization, điều quan trọng không phải là thêm việc cho team. Điều quan trọng là biết điểm nào đang làm hệ thống bị nghẽn.
            </p>
            <p className="mt-6 border-l-2 border-[#1D4ED8] pl-5 text-[15px] font-semibold leading-[1.65] text-[#334155]">
              Tôi không đến để bán thêm việc cho bạn. Tôi giúp bạn nhìn lại hệ thống, xác định điểm nghẽn chính và biết việc nào đáng làm trước.
            </p>
            <p className="mt-5 text-[14px] font-bold text-[#0F172A]">Một cuộc nói chuyện đúng hướng đôi khi giúp tiết kiệm nhiều tháng tự mò.</p>
          </div>

          <aside className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-brand-soft sm:p-6 md:p-8">
            <h3 className="font-heading text-[20px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#0F172A]">
              Cách tôi làm phù hợp nếu bạn đang gặp một trong các tình huống này:
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {situations.map((situation) => (
                <li key={situation} className="flex gap-2.5 text-[15px] font-semibold leading-[1.5] text-[#334155]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" />
                  {situation}
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1.5 text-[11px] font-bold text-[#1D4ED8]">Không thêm việc. Chọn đúng việc.</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
