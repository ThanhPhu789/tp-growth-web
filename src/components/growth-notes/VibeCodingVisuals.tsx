import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCode2,
  GitCommitHorizontal,
  GitCompareArrows,
  LockKeyhole,
  MousePointerClick,
  Paintbrush,
  Play,
  Route,
  ShieldCheck,
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

const safeStartItems = [
  'Copy / content',
  'Blog / Growth Notes',
  'Landing page section',
  'UI card / button / layout nhỏ',
  'Form field đơn giản',
  'Tracking checklist',
];

const laterItems = [
  'Backend logic',
  'Database schema',
  'Auth / login',
  'Payment',
  'Global theme / config',
  'Deployment setting',
];

export function MarketerVibeCodingSafeStartVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-accent/25 bg-brand-accent-soft p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <MousePointerClick className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Nên bắt đầu</h3>
          </div>
          <div className="mt-5 space-y-3">
            {safeStartItems.map((item, index) => {
              const isAction = index >= 4;
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
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
            <h3 className="font-heading text-[18px] font-extrabold text-brand-primary">Chưa nên tự đụng sớm</h3>
          </div>
          <div className="mt-5 space-y-3">
            {laterItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-surface p-3.5">
                <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft-text" aria-hidden="true" />
                <p className="text-[12px] font-semibold leading-[1.55] text-brand-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Caption>
        Marketer nên bắt đầu vibe coding ở vùng gần marketing nhất: content, UI, landing page, form và tracking checklist. Đừng bắt đầu bằng backend.
      </Caption>
    </figure>
  );
}

const vaguePromptItems = [
  'Làm đẹp hơn',
  'Modern hơn',
  'Tự sửa cho hợp lý',
  'Không giới hạn file',
  'Dễ đổi lan',
];

const contractPromptItems = [
  'Mục tiêu rõ',
  'Phạm vi file rõ',
  'Reuse component',
  'Không đổi global / backend',
  'Có acceptance criteria',
];

export function ContractPromptVsVaguePromptVisual() {
  return (
    <figure className="my-10">
      <div className="grid gap-4 rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:grid-cols-2 md:p-8">
        <section className="rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Paintbrush className="h-5 w-5 text-brand-soft-text" aria-hidden="true" />
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
        Vibe coding an toàn bắt đầu từ prompt có contract. Prompt càng mơ hồ, AI càng dễ sửa lan.
      </Caption>
    </figure>
  );
}

type WorkflowStep = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  action?: boolean;
};

const safeWorkflow: WorkflowStep[] = [
  { title: 'Save current state', subtitle: 'git status + commit bản ổn', icon: GitCommitHorizontal, action: true },
  { title: 'Inventory', subtitle: 'AI scan page / component', icon: Route },
  { title: 'Contract prompt', subtitle: 'Mục tiêu + phạm vi + guardrail', icon: ClipboardCheck },
  { title: 'Implement small change', subtitle: 'Sửa nhỏ, đúng file', icon: FileCode2 },
  { title: 'Test local', subtitle: 'Desktop / mobile / build', icon: Play },
  { title: 'Read diff', subtitle: 'Xem file đã đổi', icon: GitCompareArrows },
  { title: 'Fix errors', subtitle: 'Lỗi TS / layout / import', icon: Wrench },
  { title: 'Commit', subtitle: 'Lưu mốc mới', icon: GitCommitHorizontal, action: true },
];

export function SafeVibeCodingWorkflowVisual() {
  return (
    <figure className="my-10">
      <div className="rounded-brand-card border border-brand-border bg-brand-surface p-5 shadow-brand-soft sm:p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {safeWorkflow.map(({ title, subtitle, icon: Icon, action }, index) => (
            <section
              key={title}
              className={`relative rounded-2xl border p-4 ${
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
        <div className="mt-4 flex items-center justify-center text-brand-accent" aria-hidden="true">
          <ArrowDown className="h-4 w-4 lg:hidden" />
          <ArrowRight className="hidden h-4 w-4 lg:block" />
        </div>
        <p className="text-center text-[11px] font-bold text-brand-secondary">Small change → visible test → safe checkpoint</p>
      </div>
      <Caption>
        Workflow an toàn giúp marketer dùng AI coding như một quá trình có kiểm soát, không phải một lần bấm may rủi.
      </Caption>
    </figure>
  );
}
