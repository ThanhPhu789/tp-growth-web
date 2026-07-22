import {
  ArrowDown,
  ArrowRight,
  BadgeHelp,
  CheckSquare2,
  ClipboardPenLine,
  FileQuestion,
  FileText,
  FormInput,
  LayoutTemplate,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  Quote,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const messageMatchSteps: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'Creative Hook', subtitle: 'Gọi đúng vấn đề', icon: MessageSquareText },
  { title: 'Caption / Body', subtitle: 'Làm rõ lời hứa', icon: FileText },
  { title: 'CTA', subtitle: 'Bước tiếp theo', icon: MousePointerClick },
  { title: 'Landing Hero', subtitle: 'Nhắc lại context', icon: LayoutTemplate },
  { title: 'Proof / FAQ', subtitle: 'Gỡ nỗi lo', icon: ShieldCheck },
  { title: 'Form', subtitle: 'Thu đúng thông tin', icon: FormInput },
  { title: 'CRM Note', subtitle: 'Lưu source / angle', icon: ClipboardPenLine, action: true },
  { title: 'Sales Opening', subtitle: 'Follow-up đúng context', icon: PhoneCall, action: true },
];

export function MessageMatchChainVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Message match chain</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">
          Một lời hứa, tám điểm chạm
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {messageMatchSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <div key={title} className="relative min-w-0">
              <section
                className={`h-full rounded-2xl border p-4 ${
                  action
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-accent/20 bg-brand-accent-soft'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-soft-text">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-4 font-heading text-[13px] font-extrabold leading-[1.35] text-brand-primary">{title}</h4>
                <p className="mt-2 text-[11px] font-semibold leading-[1.5] text-brand-secondary">{subtitle}</p>
              </section>
              {index < messageMatchSteps.length - 1 && (
                <>
                  <ArrowDown className="absolute -bottom-3.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent sm:hidden" aria-hidden="true" />
                  {index % 4 !== 3 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-brand-surface p-0.5 text-brand-accent lg:block" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Caption>Message match tốt giữ cùng một mạch context từ ads đến landing page, form, CRM và sales follow-up.</Caption>
    </figure>
  );
}

const mismatchSymptoms: Array<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
}> = [
  { title: 'CTR ổn, form submit thấp', subtitle: 'Click có, hành động không có', icon: MousePointerClick },
  { title: 'CPC ổn, CVR page thấp', subtitle: 'Traffic vào nhưng không tin đủ', icon: LayoutTemplate },
  { title: 'Lead hỏi lại điều ads đã nói', subtitle: 'Page / form chưa làm rõ', icon: BadgeHelp },
  { title: 'Sales gọi chung chung', subtitle: 'CRM không giữ context', icon: PhoneCall, action: true },
  { title: 'Lead kỳ vọng sai', subtitle: 'Creative / offer / page lệch nhau', icon: FileQuestion },
  { title: 'Lost reason lặp lại', subtitle: 'Objection chưa được xử lý', icon: Quote, action: true },
];

export function MessageMismatchSymptomsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Post-click diagnosis</p>
        <h3 className="mt-2 font-heading text-[20px] font-extrabold text-brand-primary">Dấu hiệu message match đang yếu</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mismatchSymptoms.map(({ title, subtitle, icon: Icon, action }) => (
            <section
              key={title}
              className={`rounded-2xl border p-5 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
              <h4 className="mt-4 font-heading text-[14px] font-extrabold leading-[1.4] text-brand-primary">{title}</h4>
              <p className="mt-2 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Message mismatch thường hiện ra sau click: page không chuyển đổi, lead kỳ vọng sai hoặc sales không có context để mở cuộc trò chuyện.
      </Caption>
    </figure>
  );
}

const qaRows = [
  {
    touchpoint: 'Creative',
    check: 'Gọi vấn đề gì?',
    mismatch: 'Hook kéo tò mò nhưng không đúng nhu cầu',
  },
  {
    touchpoint: 'CTA',
    check: 'Hứa bước tiếp theo gì?',
    mismatch: 'CTA khác offer trên page',
  },
  {
    touchpoint: 'Landing Hero',
    check: 'Có tiếp tục lời hứa không?',
    mismatch: 'Page nói quá chung',
  },
  {
    touchpoint: 'Proof / FAQ',
    check: 'Có gỡ đúng nỗi lo không?',
    mismatch: 'Proof không liên quan angle',
  },
  {
    touchpoint: 'Form',
    check: 'Có thu đúng context không?',
    mismatch: 'Sales thiếu dữ liệu mở đầu',
  },
  {
    touchpoint: 'Sales Opening',
    check: 'Có bám source / angle không?',
    mismatch: 'Gọi như cold call',
    action: true,
  },
];

export function MessageMatchQAMatrixVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <CheckSquare2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brand-accent">Message match QA</p>
            <h3 className="mt-1 font-heading text-[20px] font-extrabold text-brand-primary">Kiểm lời hứa ở từng điểm chạm</h3>
          </div>
        </div>

        <div className="mt-6 hidden overflow-hidden rounded-2xl border border-brand-border md:block">
          <table className="w-full table-fixed border-collapse text-left">
            <thead className="bg-brand-accent-soft text-brand-accent">
              <tr>
                <th className="w-[22%] px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em]">Touchpoint</th>
                <th className="w-[34%] px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em]">Câu hỏi cần kiểm</th>
                <th className="px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em]">Dấu hiệu lệch</th>
              </tr>
            </thead>
            <tbody>
              {qaRows.map((row) => (
                <tr key={row.touchpoint} className={`border-t border-brand-border ${row.action ? 'bg-brand-highlight-soft' : 'bg-brand-surface'}`}>
                  <td className={`px-4 py-4 text-[13px] font-extrabold ${row.action ? 'text-brand-highlight' : 'text-brand-primary'}`}>
                    {row.touchpoint}
                  </td>
                  <td className="px-4 py-4 text-[13px] font-semibold leading-[1.5] text-brand-secondary">{row.check}</td>
                  <td className="px-4 py-4 text-[13px] font-medium leading-[1.5] text-brand-secondary">{row.mismatch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-3 md:hidden">
          {qaRows.map((row) => (
            <section
              key={row.touchpoint}
              className={`rounded-2xl border p-5 ${
                row.action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-border bg-brand-bg'
              }`}
            >
              <p className={`font-heading text-[14px] font-extrabold ${row.action ? 'text-brand-highlight' : 'text-brand-accent'}`}>
                {row.touchpoint}
              </p>
              <p className="mt-3 text-[12px] font-bold leading-[1.55] text-brand-primary">{row.check}</p>
              <p className="mt-2 text-[12px] font-medium leading-[1.55] text-brand-secondary">{row.mismatch}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>Message match QA giúp team kiểm lời hứa có đi xuyên từ creative đến sales hay bị gãy ở giữa funnel.</Caption>
    </figure>
  );
}
