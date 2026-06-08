import { motion } from 'motion/react';
import { HelpCircle, CheckCircle2, ChevronRight, Calendar, BarChart, UserPlus } from 'lucide-react';
import { FlowLines } from './SystemVisuals';

export default function Method() {
  const scenarios = [
    'Chạy marketing nhưng không chắc đang đúng hướng',
    'Lead lúc có lúc không',
    'Có team nhưng output rời rạc',
    'Muốn scale nhưng sợ đốt thêm tiền',
    'Đang phân vân đổi agency / tuyển người / build team',
    'Doanh thu chưa phản ánh đúng công sức đang bỏ ra',
    'Cảm giác business bị khựng mà chưa biết vì sao'
  ];

  const services = [
    {
      id: 1,
      title: "Tư vấn chiến lược 1:1 — 60 phút",
      subtitle: "Dành cho chủ doanh nghiệp cần clarity nhanh.",
      price: "399K",
      points: [
        "Nhìn ra điểm nghẽn lớn nhất hiện tại",
        "Ưu tiên việc cần làm trước",
        "Trả lời các câu hỏi đang mắc",
        "Gợi ý hướng đi 30 ngày tới",
        "Giúp bạn đỡ mất thời gian thử sai"
      ],
      result: "Kết thúc buổi call, bạn sẽ rõ bước tiếp theo.",
      cta: "Đặt lịch tư vấn",
      icon: <Calendar className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Audit hệ thống marketing",
      subtitle: "Dành cho doanh nghiệp muốn nhìn sâu hơn trước khi chi ngân sách.",
      price: "1499K",
      points: [
        "Traffic hiện tại có đúng người không",
        "Ads đang hiệu quả thật hay chỉ cảm giác",
        "Funnel rơi ở đâu",
        "Website / landing có chuyển đổi không",
        "Data đủ để ra quyết định chưa",
        "Team đang nghẽn ở khâu nào"
      ],
      result: "Sau audit, bạn có roadmap rõ ràng để tối ưu.",
      cta: "Đặt lịch audit",
      icon: <BarChart className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION: KHI NÀO NÊN NÓI CHUYỆN VỚI TÔI */}
      <section className="py-16 lg:py-32 container mx-auto px-6 border-b border-brand-border">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <HelpCircle className="w-4 h-4 text-brand-accent" />
              <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">SITUATION CHECK</span>
            </div>
            <h2 className="font-heading text-[32px] md:text-[44px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-6 md:mb-8 tracking-[-0.03em] md:tracking-[-0.04em]">
              Khi nào nên nói chuyện với tôi?
            </h2>
            <p className="text-[17px] md:text-[18px] text-brand-secondary font-medium leading-relaxed max-w-[480px]">
              Nếu business của bạn đang ở một trong những trạng thái này, có lẽ chúng ta nên bắt đầu một cuộc hội thoại.
            </p>
          </div>

          <div className="grid gap-3 md:gap-4 font-sans">
            {scenarios.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 md:p-5 bg-brand-section rounded-2xl border border-brand-border hover:border-brand-accent/20 transition-all cursor-default group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-brand-border flex items-center justify-center text-[12px] font-bold text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                  {i + 1}
                </div>
                <span className="text-[14px] md:text-[15px] font-semibold text-brand-primary/80">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CÁCH TÔI GIÚP BẠN */}
      <section className="py-16 lg:py-32 bg-white relative overflow-hidden">
        <FlowLines />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-16 md:mb-20 text-center mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[11px] font-black text-brand-highlight uppercase tracking-[0.4em]">HOW I HELP</span>
            </div>
            <h2 className="font-heading text-[36px] md:text-[48px] font-extrabold text-brand-primary leading-[1.05] md:leading-[1.0] mb-8 tracking-[-0.03em] md:tracking-[-0.04em]">
              Cách tôi giúp bạn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
            {services.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[32px] border border-brand-border flex flex-col h-full bg-white transition-all shadow-brand-soft hover:-translate-y-1 hover:border-brand-accent/10 relative overflow-hidden group"
              >
                <div className="w-full h-48 md:h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-8 md:left-12 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/95 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm">
                    {item.icon}
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col flex-grow">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-3">
                    <h3 className="font-heading text-[24px] md:text-[28px] font-extrabold text-brand-primary leading-[1.05] tracking-[-0.03em]">{item.title}</h3>
                    <div className="bg-brand-highlight/10 px-4 py-1.5 rounded-xl border border-brand-highlight/20 shrink-0 inline-flex self-start">
                      <span className="text-[18px] md:text-[20px] font-black text-brand-highlight tracking-tight">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-brand-secondary font-medium mb-10 text-[14px] md:text-[15px] opacity-70 xl:-mt-2">{item.subtitle}</p>

                  <div className="space-y-4 mb-12 flex-grow border-t border-brand-border pt-8 md:pt-10">
                    <div className="text-[10px] font-black text-brand-highlight uppercase tracking-[0.2em] mb-4">Chi tiết buổi làm việc</div>
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent mt-1 flex-shrink-0" />
                        <span className="text-[14px] md:text-[15px] font-medium text-brand-primary/80">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="p-4 md:p-5 bg-brand-accent-soft rounded-2xl mb-8 border border-brand-accent/10">
                      <span className="text-[13px] md:text-[14px] font-bold text-brand-accent block italic tracking-tight opacity-90">👉 {item.result}</span>
                    </div>
                    <button className="w-full bg-brand-highlight text-white py-4 md:py-5 rounded-brand-button font-bold text-[15px] md:text-[16px] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-highlight/15">
                      {item.cta}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
