import { ArrowRight, BarChart3, Calendar, CheckCircle2, Users } from 'lucide-react';

const offers = [
  {
    title: 'Nói chuyện 60 phút',
    bestFor: 'Khi bạn cần clarity nhanh',
    points: ['Nhìn lại tình hình hiện tại', 'Xác định điểm nghẽn lớn nhất', 'Gợi ý hướng đi 30 ngày tới'],
    cta: 'Đặt lịch nói chuyện',
    icon: Calendar,
  },
  {
    title: 'Audit hệ thống marketing',
    bestFor: 'Khi bạn muốn nhìn sâu trước khi chi thêm ngân sách',
    points: ['Rà traffic, tracking, funnel và team execution', 'Chỉ ra điểm nghẽn chính', 'Đưa roadmap ưu tiên việc cần sửa'],
    cta: 'Đặt lịch audit',
    icon: BarChart3,
    featured: true,
  },
  {
    title: 'Đồng hành hệ thống',
    bestFor: 'Khi bạn đã có team nhưng cần người nhìn hệ thống định kỳ',
    points: ['Review chiến lược và dữ liệu', 'Làm việc cùng team hiện có', 'Giúp hệ thống chạy rõ nhịp hơn'],
    cta: 'Trao đổi thêm',
    icon: Users,
  },
];

export default function Method() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="mb-5 text-[10px] font-black uppercase tracking-[0.32em] text-[#EA580C] md:text-[11px] md:tracking-[0.4em]">
            WAYS TO START
          </div>
          <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F172A] sm:text-[40px] md:text-[46px] md:leading-[1.04] md:tracking-[-0.04em]">
            Bắt đầu bằng một bước đủ nhỏ để nhìn rõ vấn đề.
          </h2>
          <p className="mt-4 text-[16px] font-medium leading-[1.7] text-[#334155] md:text-[18px]">
            Nếu phù hợp, có thể đi tiếp. Nếu chưa phù hợp, bạn vẫn có một hướng nhìn rõ hơn để tự xử lý.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-5 md:grid-cols-3 md:gap-6">
          {offers.map((offer) => {
            const Icon = offer.icon;

            return (
              <article
                key={offer.title}
                className={`flex flex-col rounded-[24px] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-soft md:p-7 ${
                  offer.featured ? 'border-[#BFDBFE] ring-1 ring-[#EFF6FF]' : 'border-[#E2E8F0] hover:border-[#BFDBFE]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-[14px] border ${offer.featured ? 'border-[#BFDBFE] bg-[#EFF6FF]' : 'border-[#E2E8F0] bg-[#F8FAFC]'}`}>
                    <Icon className="h-5 w-5 text-[#1D4ED8]" />
                  </div>
                  {offer.featured && <span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#1D4ED8]">Ưu tiên</span>}
                </div>
                <h3 className="mt-5 font-heading text-[22px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F172A] md:text-[24px]">{offer.title}</h3>
                <p className="mt-2 text-[14px] font-semibold leading-[1.55] text-[#64748B]">{offer.bestFor}</p>
                <ul className="mt-5 space-y-3 border-t border-[#E2E8F0] pt-5">
                  {offer.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[13px] font-medium leading-[1.5] text-[#334155]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button className={`mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-brand-button px-4 py-3.5 text-[14px] font-bold transition-all ${offer.featured ? 'bg-[#EA580C] text-white shadow-lg shadow-orange-600/10 hover:brightness-105' : 'border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#BFDBFE] hover:bg-[#EFF6FF]'}`}>
                  {offer.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
