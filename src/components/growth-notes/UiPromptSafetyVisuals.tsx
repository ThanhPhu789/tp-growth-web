import {
  Check,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileCode2,
  LayoutTemplate,
  ListChecks,
  Palette,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function Caption({ children }: { children: string }) {
  return (
    <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
      {children}
    </figcaption>
  );
}

const vaguePromptItems = [
  'Làm đẹp hơn',
  'Modern hơn',
  'Premium hơn',
  'Tự tối ưu cho hợp lý',
  'Không có phạm vi file',
  'Dễ sửa lan',
];

const contractPromptItems = [
  'Mục tiêu rõ',
  'Scope file rõ',
  'Reuse component',
  'Không đổi global / backend',
  'Có acceptance criteria',
  'Có cách test local',
];

export function UIPromptContractComparisonVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Code2 className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Prompt mơ hồ</h3>
          </div>
          <div className="mt-5 space-y-3">
            {vaguePromptItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Prompt có contract</h3>
          </div>
          <div className="mt-5 space-y-3">
            {contractPromptItems.map((item, index) => {
              const isAction = index === 3;
              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 ${
                    isAction
                      ? 'border-brand-highlight/20 bg-brand-highlight-soft'
                      : 'border-brand-accent/20 bg-brand-surface'
                  }`}
                >
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isAction ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                  <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Caption>
        Prompt UI an toàn bắt đầu từ contract. Không có contract, AI rất dễ tự đoán phần không nên đoán.
      </Caption>
    </figure>
  );
}

type PromptLayer = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const promptLayers: PromptLayer[] = [
  { title: 'Layer 1 · Scope', subtitle: 'Page, file, section nào được sửa?', icon: LayoutTemplate },
  { title: 'Layer 2 · Design DNA', subtitle: 'Typography, color, spacing, card, button', icon: Palette },
  { title: 'Layer 3 · Component Logic', subtitle: 'Props, state, validation, form, API', icon: FileCode2, action: true },
  { title: 'Layer 4 · Acceptance', subtitle: 'TS build, mobile, no unused imports, no backend break', icon: ShieldCheck, action: true },
];

export function SafeUIPromptLayersVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {promptLayers.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`rounded-brand-card border p-5 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-5 w-5 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.14em] text-brand-soft-text">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-heading text-[16px] font-extrabold text-brand-primary">{title}</h3>
              <p className="mt-2 text-[12px] font-medium leading-[1.55] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Prompt UI an toàn không chỉ nói giao diện. Nó kiểm cả scope, design DNA, component logic và acceptance criteria.
      </Caption>
    </figure>
  );
}

const safetyChecklist = [
  'Mục tiêu UI đã rõ chưa?',
  'Page / section cần sửa đã rõ chưa?',
  'File được phép sửa đã rõ chưa?',
  'File không được đụng đã rõ chưa?',
  'Có yêu cầu Inventory trước Implement chưa?',
  'Có Design DNA cụ thể chưa?',
  'Có yêu cầu reuse component chưa?',
  'Có liệt kê state / validation / form / API / tracking cần giữ chưa?',
  'Có phần “Không được” chưa?',
  'Có mobile acceptance chưa?',
  'Có TypeScript / no unused imports chưa?',
  'Có yêu cầu không đổi global theme / config chưa?',
  'Có yêu cầu output diff / patch chưa?',
  'Có cách test local chưa?',
];

export function UIPromptSafetyChecklistVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft text-brand-accent">
            <ListChecks className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Checklist prompt UI không làm gãy code
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {safetyChecklist.map((item, index) => {
            const isAction = [7, 9, 11, 13].includes(index);
            const Icon = index === 9 || index === 13 ? Smartphone : index === 7 || index === 11 ? ShieldCheck : Check;
            return (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 ${
                  isAction
                    ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                    : 'border-brand-border bg-brand-bg'
                }`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isAction ? 'bg-brand-highlight text-white' : 'bg-brand-accent text-white'}`}>
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="pt-0.5 text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>
        Trước khi gửi AI sửa UI, hãy kiểm prompt như kiểm brief campaign: rõ mục tiêu, rõ phạm vi, rõ guardrail, rõ tiêu chí hoàn thành.
      </Caption>
    </figure>
  );
}
