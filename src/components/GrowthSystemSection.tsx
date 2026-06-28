import { Compass, Gauge, TrendingUp } from 'lucide-react';

const layers = [
  { title: 'Nhìn đúng nền', text: 'Khách hàng, thông điệp, kênh và tracking có đang khớp nhau?', icon: Compass },
  { title: 'Tạo nhịp vận hành', text: 'Content, sales và dữ liệu có cùng một nhịp làm việc?', icon: Gauge },
  { title: 'Scale có kiểm soát', text: 'Chỉ tăng khi biết điểm nào đang tạo ra tăng trưởng.', icon: TrendingUp },
];

export default function GrowthSystemSection() {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          <div className="max-w-[600px]">
            <div className="mb-5 text-[10px] font-black uppercase tracking-[0.32em] text-[#EA580C] md:text-[11px] md:tracking-[0.4em]">GROWTH SYSTEM</div>
            <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F172A] sm:text-[40px] md:text-[46px] md:leading-[1.04] md:tracking-[-0.04em]">
              Tăng trưởng không bắt đầu từ việc chạy thêm marketing.
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.7] text-[#334155] md:text-[18px]">
              Hệ thống cần một nền đúng, một nhịp vận hành rõ và dữ liệu đủ tin cậy để ra quyết định.
            </p>
            <p className="mt-5 text-[16px] font-bold leading-[1.55] text-[#1D4ED8] md:text-[18px]">Trước khi scale, cần biết hệ thống đang nghẽn ở đâu.</p>
          </div>
          <div className="mx-auto w-full max-w-[620px] space-y-5 lg:space-y-6">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <article key={layer.title} className="flex gap-4 rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-soft md:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC]">
                    <Icon className="h-5 w-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-[0.16em] text-[#EA580C]">0{index + 1}</div>
                    <h3 className="mt-1 font-heading text-[18px] font-extrabold text-[#0F172A]">{layer.title}</h3>
                    <p className="mt-1 text-[14px] font-medium leading-[1.55] text-[#64748B]">{layer.text}</p>
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1D4ED8]">{['Audit alignment', 'Operating rhythm', 'Controlled scale'][index]}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
