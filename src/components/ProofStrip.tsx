import { BarChart3, BriefcaseBusiness, Crosshair, Workflow } from 'lucide-react';

const proofItems = [
  { title: '7 năm marketing thực chiến', detail: 'Ads, content, team, tracking, growth', icon: BriefcaseBusiness },
  { title: 'Từng build hệ thống từ 0', detail: 'Từ kênh rời rạc đến doanh thu bán lẻ', icon: Workflow },
  { title: 'Mạnh về ads + tracking', detail: 'Meta, TikTok, GA4, GTM, CAPI', icon: BarChart3 },
  { title: 'Hiểu SME vận hành thật', detail: 'Không chỉ nhìn báo cáo đẹp', icon: Crosshair },
];

export default function ProofStrip() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-7 md:py-8">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {proofItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="flex items-start gap-3 rounded-[16px] border border-[#E2E8F0] bg-white px-4 py-3.5 shadow-sm">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#EFF6FF] text-[#1D4ED8]">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-[13px] font-extrabold leading-[1.35] text-[#0F172A]">{item.title}</h2>
                  <p className="mt-1 text-[12px] font-medium leading-[1.45] text-[#64748B]">{item.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
