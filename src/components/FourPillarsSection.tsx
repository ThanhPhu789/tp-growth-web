import { Database, GitBranch, TrendingUp, Workflow } from 'lucide-react';

const pillars = [
  {
    title: 'Traffic',
    question: 'Khách đến có đúng người mua không?',
    status: 'Source clarity',
    insight: 'Traffic sai, sales càng cố càng mệt.',
    icon: GitBranch,
    visual: 'traffic',
  },
  {
    title: 'Tracking',
    question: 'Tiền marketing tạo ra kết quả gì?',
    status: 'Data confidence',
    insight: 'Không đo được thì không thể tối ưu.',
    icon: Database,
    visual: 'tracking',
  },
  {
    title: 'Execution',
    question: 'Founder ngưng đốc thúc, hệ thống còn chạy không?',
    status: 'Team alignment',
    insight: 'Team cần nhịp vận hành, không chỉ người giỏi.',
    icon: Workflow,
    visual: 'execution',
  },
  {
    title: 'Optimization',
    question: 'Scale bằng dữ liệu hay cảm giác?',
    status: 'Bottleneck focus',
    insight: 'Biết tăng gì, giảm gì, giữ gì và bỏ gì.',
    icon: TrendingUp,
    visual: 'optimization',
  },
];

export default function FourPillarsSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
          <div className="mb-5 text-[10px] font-black uppercase tracking-[0.32em] text-[#EA580C] md:text-[11px] md:tracking-[0.4em]">
            SYSTEM AUDIT
          </div>
          <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F172A] sm:text-[40px] md:text-[46px] md:leading-[1.04] md:tracking-[-0.04em]">
            4 trụ cột cần gỡ nghẽn
          </h2>
          <p className="mt-4 text-[16px] font-medium leading-[1.7] text-[#334155] md:text-[18px]">
            Không bắt đầu bằng việc làm nhiều hơn. Bắt đầu bằng việc nhìn đúng hơn.
          </p>
          <p className="mt-4 text-[13px] font-semibold text-[#334155] md:text-[14px]">
            Tôi thường rà hệ thống marketing của SME qua 4 trụ cột chính.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl rounded-[28px] border border-[#E2E8F0] bg-white p-4 shadow-brand-soft sm:p-5 md:p-7">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[55%] -translate-x-1/2 -translate-y-1/2 bg-[#E2E8F0] md:block" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[54%] w-px -translate-x-1/2 -translate-y-1/2 bg-[#E2E8F0] md:block" />
          <div className="pointer-events-none absolute left-[22.5%] top-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#BFDBFE] md:block" />
          <div className="pointer-events-none absolute right-[22.5%] top-1/2 hidden h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#BFDBFE] md:block" />

          <div className="relative z-10 mb-4 flex justify-center md:absolute md:left-1/2 md:top-1/2 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="w-full max-w-[264px] rounded-[20px] border border-[#BFDBFE] bg-white px-5 py-4 text-center shadow-sm md:px-6">
              <div className="text-[10px] font-black tracking-[0.18em] text-[#1D4ED8]">SYSTEM AUDIT CORE</div>
              <p className="mt-1.5 text-[11px] font-semibold leading-[1.45] text-[#334155]">
                Nhìn đúng điểm nghẽn trước khi scale
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-16 md:gap-y-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="group relative rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-brand-soft md:min-h-[248px] md:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] transition-colors duration-300 group-hover:border-[#1D4ED8] group-hover:bg-[#1D4ED8]">
                      <Icon className="h-5 w-5 text-[#1D4ED8] transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                      <span className="text-[10px] font-bold text-[#334155]">{pillar.status}</span>
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-[21px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#0F172A] md:mt-5 md:text-[24px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-semibold leading-[1.55] text-[#334155]">{pillar.question}</p>

                  <div className="mt-3 min-h-[40px] border-y border-[#E2E8F0] py-2 md:mt-4 md:min-h-[44px] md:py-2.5">
                    {pillar.visual === 'traffic' && (
                      <div className="flex items-center gap-1.5 text-[9px] font-bold sm:text-[10px]">
                        <div className="flex min-w-0 flex-1 justify-between gap-1">
                          {['Content', 'Ads', 'Search'].map((chip) => (
                            <span key={chip} className="rounded-md bg-[#F8FAFC] px-1.5 py-1 text-[#334155]">{chip}</span>
                          ))}
                        </div>
                        <span className="h-px w-4 bg-[#E2E8F0]" />
                        <span className="rounded-md bg-[#EFF6FF] px-2 py-1 text-[#1D4ED8]">Lead thật</span>
                      </div>
                    )}
                    {pillar.visual === 'tracking' && (
                      <div className="flex items-center justify-between gap-1 text-[9px] font-bold sm:text-[10px]">
                        {['Spend', 'Lead', 'Sales', 'ROI'].map((chip, index) => (
                          <div key={chip} className="flex items-center gap-1">
                            <span className="rounded-md bg-[#EFF6FF] px-1.5 py-1 text-[#1D4ED8]">{chip}</span>
                            {index < 3 && <span className="h-px w-3 bg-[#E2E8F0]" />}
                          </div>
                        ))}
                      </div>
                    )}
                    {pillar.visual === 'execution' && (
                      <div className="flex items-center justify-between gap-1 text-[9px] font-bold sm:text-[10px]">
                        {['Owner', 'SOP', 'KPI', 'Report'].map((chip, index) => (
                          <div key={chip} className="flex items-center gap-1">
                            <span className="rounded-md bg-[#F8FAFC] px-1.5 py-1 text-[#334155]">{chip}</span>
                            {index < 3 && <span className="text-[#EA580C]">→</span>}
                          </div>
                        ))}
                      </div>
                    )}
                    {pillar.visual === 'optimization' && (
                      <div className="flex items-center justify-center gap-1 text-[9px] font-bold sm:text-[10px]">
                        {['Data', 'Decision', 'Action', 'Result'].map((chip, index) => (
                          <div key={chip} className="flex items-center gap-1">
                            <span className="rounded-md bg-[#EFF6FF] px-1.5 py-1 text-[#1D4ED8]">{chip}</span>
                            <span className="text-[#EA580C]">{index === 3 ? '↻' : '→'}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-[12px] font-semibold leading-[1.5] text-[#334155]">{pillar.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
