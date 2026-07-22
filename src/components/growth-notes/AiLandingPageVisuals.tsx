import {
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Eye,
  FileCode2,
  GitCommitHorizontal,
  GitCompareArrows,
  Link,
  ListChecks,
  Route,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
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

const openPromptItems = [
  'Làm landing page đẹp hơn',
  'Tự tối ưu UI',
  'Sửa toàn bộ cho hợp lý',
  'Không giới hạn file',
  'Dễ đụng global / backend',
];

const guardrailPromptItems = [
  'Mục tiêu page / section rõ',
  'Scope file rõ',
  'Reuse component',
  'Không đổi global',
  'Không đụng backend / form / tracking',
];

export function LandingPagePromptGuardrailVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Code2 className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Prompt mở quyền quá rộng</h3>
          </div>
          <div className="mt-5 space-y-3">
            {openPromptItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-soft-text" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Prompt có guardrail</h3>
          </div>
          <div className="mt-5 space-y-3">
            {guardrailPromptItems.map((item, index) => {
              const isAction = index === guardrailPromptItems.length - 1;
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
        AI không nguy hiểm vì nó biết code. Nó nguy hiểm khi mình cho nó quyền sửa quá rộng trong một project đang chạy ổn.
      </Caption>
    </figure>
  );
}

type BuildStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const safeBuildSteps: BuildStep[] = [
  { title: 'Brief', subtitle: 'Campaign, audience, offer, CTA', icon: ClipboardCheck },
  { title: 'Scope', subtitle: 'Page mới hay section mới?', icon: Route },
  { title: 'Inventory', subtitle: 'Component, route, form, style', icon: Eye },
  { title: 'Contract Prompt', subtitle: 'File được sửa và không được đụng', icon: ShieldCheck },
  { title: 'Implement', subtitle: 'Reuse component, không refactor lan', icon: FileCode2 },
  { title: 'Test Local', subtitle: 'Desktop, mobile, route, CTA', icon: Smartphone },
  { title: 'Check Logic', subtitle: 'Form, tracking, link, data', icon: ListChecks, action: true },
  { title: 'Commit', subtitle: 'Lưu mốc ổn', icon: GitCommitHorizontal, action: true },
];

export function SafeLandingPageBuildFlowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {safeBuildSteps.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`rounded-2xl border p-4 ${
                action
                  ? 'border-brand-highlight/25 bg-brand-highlight-soft'
                  : 'border-brand-accent/20 bg-brand-accent-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className={`h-4 w-4 ${action ? 'text-brand-highlight' : 'text-brand-accent'}`} aria-hidden="true" />
                <span className="text-[10px] font-black tracking-[0.12em] text-brand-soft-text">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-[12px] font-extrabold leading-[1.4] text-brand-primary">{title}</h3>
              <p className="mt-2 text-[10px] font-medium leading-[1.5] text-brand-secondary">{subtitle}</p>
            </section>
          ))}
        </div>
      </div>
      <Caption>
        Một landing page build bằng AI nên đi qua các lớp: brief, scope, inventory, contract, implement, test, check logic và commit.
      </Caption>
    </figure>
  );
}

const diffRedFlags = [
  'Sửa file ngoài scope',
  'Đổi global CSS / theme / config',
  'Đụng Header / Footer không được yêu cầu',
  'Đổi form submit / API endpoint',
  'Đổi tracking event name',
  'Thêm package mới',
  'Refactor component dùng nhiều nơi',
  'Xoá code không giải thích',
  'Tạo quá nhiều component mới',
  'Mobile chưa được test',
];

export function AiLandingPageDiffRedFlagsVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-brand-border pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-highlight-soft text-brand-highlight">
            <ShieldAlert className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-[19px] font-extrabold leading-[1.35] text-brand-primary">
            Red flags khi AI sửa landing page
          </h3>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {diffRedFlags.map((item, index) => {
            const Icon = index === 3 || index === 4 ? Link : index === 9 ? Smartphone : index === 7 ? Wrench : GitCompareArrows;
            return (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-brand-highlight/20 bg-brand-highlight-soft p-4">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-highlight" aria-hidden="true" />
                <p className="text-[13px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Caption>
        Marketer không cần hiểu hết code để đọc diff. Chỉ cần biết AI có chạm vào vùng không được phép hay không.
      </Caption>
    </figure>
  );
}
