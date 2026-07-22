import {
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  HandCoins,
  Home,
  Lightbulb,
  PackageCheck,
  Presentation,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const retailItems = [
  'Người xem thường gần với người mua',
  'Quyết định có thể nhanh hơn',
  'Thông điệp thường đơn giản hơn',
  'Offer, giá, tiện lợi dễ tác động',
  'Đo đơn hàng, lead hoặc contact ngắn hạn',
];

const architectItems = [
  'Người xem thường là người tư vấn / ảnh hưởng',
  'Quyết định gắn với dự án và độ tin cậy',
  'Cần case, proof, sample, tài liệu kỹ thuật',
  'Follow-up theo nhu cầu / case cụ thể',
  'Đo data, demo, meeting, quote và status dài hơn',
];

export function B2BArchitectVsRetailCampaignVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <PackageCheck className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Campaign bán lẻ</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {retailItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Campaign B2B cho KTS</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {architectItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index >= 2 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Campaign B2B cho kiến trúc sư khác bán lẻ không chỉ ở tệp khách. Nó khác ở vai trò ra quyết định, loại proof cần dùng và cách follow-up sau campaign.
      </Caption>
    </figure>
  );
}

const promoItems = [
  'Tập trung vào sản phẩm',
  'Nói nhiều tính năng',
  'CTA: mua / nhận ưu đãi',
  'Proof chung chung',
  'Khó giúp KTS tư vấn lại',
];

const solutionItems = [
  'Tập trung vào case ứng dụng',
  'Nói rõ vấn đề và bề mặt',
  'CTA: tài liệu, mẫu, demo, tư vấn',
  'Proof theo từng case',
  'Giúp KTS có vật liệu để tư vấn',
];

export function SolutionKitVsProductPromoVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-2xl border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <PackageCheck className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Product promo</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {promoItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium leading-[1.55] text-brand-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Solution kit</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {solutionItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.55] text-brand-secondary">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${index === 2 ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Caption>
        Với kiến trúc sư, campaign nên giúp họ hiểu case ứng dụng và có đủ proof để tư vấn, không chỉ biết tên sản phẩm.
      </Caption>
    </figure>
  );
}

type EcosystemNode = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const ecosystem: EcosystemNode[] = [
  { title: 'Chủ nhà / Chủ đầu tư', subtitle: 'Người ra tiền và kỳ vọng', icon: Home },
  { title: 'Nhà thầu / Thi công', subtitle: 'Người triển khai thực tế', icon: Wrench },
  { title: 'Case dự án', subtitle: 'Bề mặt, điều kiện, ràng buộc', icon: Building2 },
  { title: 'Proof / Sample', subtitle: 'Bằng chứng để tin và tư vấn', icon: ShieldCheck, highlight: true },
  { title: 'Tài liệu kỹ thuật', subtitle: 'Thông số, ứng dụng, giới hạn', icon: FileText },
  { title: 'Sales / Technical support', subtitle: 'Người hỗ trợ follow-up', icon: Users, highlight: true },
  { title: 'Timeline / Budget', subtitle: 'Thời điểm và khả năng áp dụng', icon: Clock3 },
];

export function ArchitectDecisionEcosystemVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <section className="mx-auto max-w-sm rounded-brand-card border border-brand-accent/30 bg-brand-accent p-6 text-center text-white">
          <Building2 className="mx-auto h-6 w-6" aria-hidden="true" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">Decision influencer</p>
          <h3 className="mt-2 font-heading text-[20px] font-extrabold">Kiến trúc sư</h3>
        </section>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'} ${index === ecosystem.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Khi làm campaign cho kiến trúc sư, cần nhớ họ không ra quyết định trong một khoảng trống. Họ đang cân nhắc giải pháp trong bối cảnh dự án, chủ nhà, thi công và uy tín nghề nghiệp.
      </Caption>
    </figure>
  );
}

const journey = [
  { title: 'Awareness', subtitle: 'Thấy case / vấn đề', icon: Lightbulb },
  { title: 'Interest', subtitle: 'Quan tâm giải pháp', icon: Target },
  { title: 'Proof', subtitle: 'Xem case, sample, demo', icon: ShieldCheck },
  { title: 'Data Capture', subtitle: 'Chọn case, để lại thông tin', icon: ClipboardCheck },
  { title: 'Technical Follow-up', subtitle: 'Nhận tài liệu / tư vấn', icon: FileText },
  { title: 'Meeting / Demo', subtitle: 'Trao đổi sâu hơn', icon: Presentation, highlight: true },
  { title: 'Project Opportunity', subtitle: 'Có dự án / case cụ thể', icon: BriefcaseBusiness, highlight: true },
  { title: 'Quote / Outcome', subtitle: 'Báo giá, hợp tác, nurture', icon: HandCoins },
];

export function ArchitectCampaignJourneyVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">B2B campaign journey</p>
          <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Từ awareness đến opportunity</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map(({ title, subtitle, icon: Icon, highlight }, index) => (
            <section key={title} className={`rounded-2xl border p-4 ${highlight ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-accent/20 bg-brand-accent-soft'}`}>
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${highlight ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black text-brand-soft-text">0{index + 1}</span>
              </div>
              <h4 className="mt-4 font-heading text-[12px] font-extrabold text-brand-primary">{title}</h4>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Hành trình B2B cho kiến trúc sư thường dài hơn bán lẻ. Campaign cần đo cả proof, sample, demo, technical follow-up và project opportunity, không chỉ đo lead ngay.
      </Caption>
    </figure>
  );
}

const checklist = [
  'Campaign có nói rõ tệp KTS nào không?',
  'Direction có đi theo case / solution không?',
  'Tagline vận hành có đủ rõ để team bám không?',
  'Social có kể được problem / case thực tế không?',
  'Ads có kéo đúng kỳ vọng chuyên môn không?',
  'Landing page có chia theo case / proof / solution không?',
  'Form có hỏi case hoặc nhu cầu quan tâm không?',
  'Có sample / demo / tài liệu kỹ thuật phù hợp không?',
  'Sales script có mở theo case khách chọn không?',
  'Follow-up có phân nhóm theo interest tag không?',
  'Dashboard có đọc sample request / demo / qualified / quote không?',
  'Có nurture list cho nhóm chưa sẵn sàng không?',
];

export function ArchitectCampaignChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold text-brand-primary">Checklist campaign B2B cho kiến trúc sư</h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklist.map((item, index) => {
            const isAction = index === 7 || index === 10;
            return (
              <div key={item} className={`flex items-start gap-3 rounded-2xl border p-4 ${isAction ? 'border-brand-highlight/25 bg-brand-highlight-soft' : 'border-brand-border bg-brand-bg'}`}>
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isAction ? 'bg-brand-highlight text-white' : 'bg-brand-accent-soft text-brand-accent'}`}>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="pt-0.5 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>
        Campaign B2B cho kiến trúc sư nên được kiểm tra bằng câu hỏi: campaign này có giúp họ hiểu case, tin giải pháp và biết bước tiếp theo không?
      </Caption>
    </figure>
  );
}
