import { useEffect, useId, useRef, useState } from 'react';
import { BarChart3, Search, Users, TrendingUp, RefreshCw, ArrowUpRight, Pause, Play } from 'lucide-react';
import './GrowthSystemSection.css';

const sources = ['Facebook', 'Google Ads', 'TikTok', 'YouTube', 'Instagram', 'Nguồn khác'];
const leaks = ['Thoát sớm', 'Không đúng nhu cầu', 'Không để lại thông tin', 'Không được follow up'];
const benefits = [
  { Icon: BarChart3, title: 'Đo lường xuyên suốt', copy: 'Từ quảng cáo đến doanh thu' },
  { Icon: Search, title: 'Phát hiện điểm nghẽn', copy: 'Biết chính xác đang mất ở đâu' },
  { Icon: Users, title: 'Marketing & Sales cùng tối ưu', copy: 'Chung dữ liệu, chung mục tiêu' },
  { Icon: TrendingUp, title: 'Tăng trưởng bền vững', copy: 'Nhiều hơn, tốt hơn, hiệu quả hơn' },
];

function SourceIcon({ index }: { index: number }) {
  return <svg viewBox="0 0 32 32" aria-hidden="true">
    {index === 0 && <><rect width="32" height="32" rx="8" fill="#1877F2" /><path d="M18 29V18h4l.6-5H18v-2c0-1.5.5-2 2-2h3V4h-4c-4 0-6 2.4-6 6v3H9v5h4v11" fill="white" /></>}
    {index === 1 && <><path d="m14 7-8 17" stroke="#FBBC04" strokeWidth="9" strokeLinecap="round" /><path d="m17 7 9 17" stroke="#4285F4" strokeWidth="9" strokeLinecap="round" /><circle cx="6" cy="24" r="4.5" fill="#34A853" /></>}
    {index === 2 && <><path d="M18 5v17a5 5 0 1 1-5-5M18 5c0 5 3 7 7 7" fill="none" stroke="#25F4EE" strokeWidth="5" transform="translate(-1 1)" /><path d="M18 5v17a5 5 0 1 1-5-5M18 5c0 5 3 7 7 7" fill="none" stroke="#111827" strokeWidth="4" /></>}
    {index === 3 && <><rect x="1" y="6" width="30" height="21" rx="7" fill="#FF0033" /><path d="m13 11 9 5-9 6Z" fill="white" /></>}
    {index === 4 && <><rect x="4" y="4" width="24" height="24" rx="7" fill="none" stroke="#C02689" strokeWidth="3" /><circle cx="16" cy="16" r="6" fill="none" stroke="#C02689" strokeWidth="3" /><circle cx="24" cy="8" r="2" fill="#EA580C" /></>}
    {index === 5 && [7, 16, 25].map(x => <circle key={x} cx={x} cy="16" r="2.5" fill="currentColor" />)}
  </svg>;
}

/** One SVG system; HTML annotations rearrange independently on small screens. */
export default function GrowthSystemSection() {
  const section = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const clock = useRef(0);
  const [entered, setEntered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [activeSource, setActiveSource] = useState<number | null>(null);
  const uid = useId().replace(/:/g, '');
  const running = entered && visible && !reduced && !paused;
  const particleCount = mobile ? 30 : 76;
  const feedbackPath = mobile
    ? 'M1040 245 V513 Q1040 535 1018 535 H158 Q135 535 135 513 V295'
    : 'M1040 240 V350 Q1040 372 1018 372 H158 Q135 372 135 350 V296';

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const size = matchMedia('(max-width: 639px)');
    const update = () => { setReduced(motion.matches); setMobile(size.matches); };
    update();
    motion.addEventListener('change', update);
    size.addEventListener('change', update);
    const target = section.current;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      // A tall mobile section cannot reach a large intersection ratio.
      const needed = Math.min(entry.boundingClientRect.height, window.innerHeight) * 0.22;
      if (entry.intersectionRect.height >= needed) setEntered(true);
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.5] });
    if (target) observer.observe(target);
    return () => { observer.disconnect(); motion.removeEventListener('change', update); size.removeEventListener('change', update); };
  }, []);

  useEffect(() => {
    const nodes = svg.current?.querySelectorAll<SVGGElement>('[data-flow-particle]');
    if (!nodes) return;
    let frame = 0;
    let previous = 0;
    const paint = (time: number) => {
      nodes.forEach((node, i) => {
        const t = ((time / 11000 + i * 0.618034) % 1);
        // Most acquisition particles exit at an early leak; fewer reach Revenue.
        const end = i >= 64 ? 350 : i % 5 === 0 ? 960 : i % 3 === 0 ? 660 : 370;
        const x = 150 + (end - 150) * t;
        const spread = 92 * Math.exp(-(x - 150) / 210) + 4;
        const lane = Math.sin(i * 7.13);
        const y = 175 + lane * spread;
        node.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
        node.setAttribute('fill', `hsl(${345 - 110 * ((x - 150) / 810)} 84% 56%)`);
        node.setAttribute('opacity', String(Math.min(1, t * 14, (1 - t) * 14)));
      });
    };
    paint(clock.current);
    if (!running) return;
    const tick = (now: number) => {
      if (previous) clock.current += Math.min(now - previous, 50);
      previous = now;
      paint(clock.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, particleCount]);

  return <section ref={section} id="revenue-gap" aria-labelledby={`${uid}-heading`}
    className={`growth-system ${entered ? 'gs-entered' : ''} ${running ? 'gs-running' : ''}`}
    data-reduced-motion={reduced} data-running={running}>
    <div className="container mx-auto px-5 sm:px-6 lg:px-8">
      <header className="gs-heading">
        <p className="gs-eyebrow">VÌ SAO GROWTH ĐỨNG YÊN?</p>
        <h2 id={`${uid}-heading`}>Traffic chỉ là điểm bắt đầu.<span>Hệ thống mới tạo ra doanh thu.</span></h2>
        <p className="gs-intro">Khi traffic, lead, sales conversation và feedback loop được kết nối,<br className="gs-desktop-break" /> tăng trưởng mới diễn ra bền vững.</p>
      </header>

      <div className="gs-controls"><span>Dữ liệu minh họa · Không phải kết quả kinh doanh</span>
        <button type="button" onClick={() => setPaused(v => !v)} disabled={reduced} aria-pressed={paused}>
          {paused || reduced ? <Play size={13} /> : <Pause size={13} />}{reduced ? 'Giảm chuyển động' : paused ? 'Chạy mô phỏng' : 'Tạm dừng'}
        </button>
      </div>
      <div className="gs-system" role="group" aria-label="Một hệ thống từ nhiều nguồn traffic, qua Lead và Sales đến doanh thu. Một phần traffic rời hệ thống; dữ liệu quay lại Marketing.">
        <div className="gs-sources" aria-label="Nguồn thu hút khách hàng">
          {sources.map((name, i) => <button key={name} type="button" aria-label={name} title={name}
            onMouseEnter={() => setActiveSource(i)} onMouseLeave={() => setActiveSource(null)}
            onFocus={() => setActiveSource(i)} onBlur={() => setActiveSource(null)}><SourceIcon index={i} /></button>)}
        </div>

        <div className="gs-metrics">
          {[{ label: 'Marketing', value: '10,000', unit: 'Visitors / tháng', rate: 'Traffic đầu vào' },
            { label: 'Lead', value: '320', unit: 'Leads / tháng', rate: 'Chuyển đổi: 3.2%' },
            { label: 'Sales', value: '25', unit: 'Customers / tháng', rate: 'Chốt: 7.8%' }].map((metric, i) =>
            <div key={metric.label} className={`gs-metric gs-metric-${i}`} tabIndex={0}>
              <span className="gs-metric-label">{metric.label}</span><strong>{metric.value}</strong><span className="gs-unit">{metric.unit}</span>
              <div className="gs-bars" aria-hidden="true">{[30, 46, 58, 78, 100].map(h => <i key={h} style={{ height: `${h}%` }} />)}</div>
              <small>{metric.rate}</small>
            </div>)}
        </div>

        <svg ref={svg} className="gs-pipeline" viewBox="0 0 1120 410" preserveAspectRatio={mobile ? 'none' : 'xMidYMid meet'} aria-hidden="true">
          <defs>
            <linearGradient id={`${uid}-glass`} x1="0" x2="1"><stop stopColor="#fb7185" stopOpacity=".3" /><stop offset=".5" stopColor="#c084fc" stopOpacity=".18" /><stop offset="1" stopColor="#2563eb" stopOpacity=".2" /></linearGradient>
            <linearGradient id={`${uid}-shine`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="white" stopOpacity=".9" /><stop offset=".4" stopColor="white" stopOpacity="0" /><stop offset="1" stopColor="#8b5cf6" stopOpacity=".14" /></linearGradient>
            <radialGradient id={`${uid}-sphere`} cx=".3" cy=".2"><stop stopColor="white" stopOpacity=".95" /><stop offset=".38" stopColor="white" stopOpacity=".15" /><stop offset="1" stopColor="#1e1b4b" stopOpacity=".35" /></radialGradient>
            <marker id={`${uid}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="m0 0 10 5-10 5Z" fill="var(--color-brand-accent)" /></marker>
          </defs>
          <g className="gs-source-paths">{sources.map((_, i) => <g key={i} className={activeSource === i ? 'gs-source-active' : ''}>
            <path d={`M42 ${45 + i * 49} C100 ${45 + i * 49} 85 175 170 175`} fill="none" stroke="#fb7185" strokeWidth={activeSource === i ? 3 : 1.4} strokeDasharray="4 6" />
            <path className="gs-source-pulse" style={{ animationDelay: `${i * -0.65}s` }} d={`M42 ${45 + i * 49} C100 ${45 + i * 49} 85 175 170 175`} pathLength="100" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="5 95" />
          </g>)}</g>
          <g className="gs-tube">
            <path d="M255 64 C390 65 438 153 675 156 L992 156 Q1017 175 992 194 L675 194 C438 197 390 285 255 286Z" fill={`url(#${uid}-glass)`} stroke="#c4b5fd" strokeOpacity=".5" />
            <path d="M255 64 C390 65 438 153 675 156 L992 156 Q1017 175 992 194 L675 194 C438 197 390 285 255 286Z" fill={`url(#${uid}-shine)`} />
            <path d="M258 67 C390 68 438 156 675 159 H991" fill="none" stroke="white" strokeWidth="3" strokeOpacity=".9" />
            <path d="M258 282 C390 282 438 194 675 191 H991" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeOpacity=".23" />
            <ellipse cx="255" cy="175" rx="33" ry="111" fill="#fda4af" fillOpacity=".12" stroke="white" strokeWidth="3" />
            <ellipse cx="262" cy="175" rx="26" ry="103" fill="none" stroke="#f9a8d4" strokeWidth="6" strokeOpacity=".45" />
            {[660, 870].map((x, i) => <g key={x} className={`gs-checkpoint gs-checkpoint-${i}`}>
              <ellipse cx={x} cy="175" rx="14" ry={i ? 25 : 33} fill="#c4b5fd" fillOpacity=".16" stroke="#a78bfa" strokeWidth="4" strokeOpacity=".5" />
              <path d={`M${x} ${i ? 150 : 142} V60`} stroke="#a78bfa" strokeDasharray="3 5" strokeOpacity=".6" />
            </g>)}
          </g>
          <g className="gs-particles">{Array.from({ length: particleCount }, (_, i) => <g key={i} data-flow-particle>
            <circle r={i % 5 === 0 ? 6 : 7.5} />
            <circle r={i % 5 === 0 ? 6 : 7.5} fill={`url(#${uid}-sphere)`} />
          </g>)}</g>
          <g className="gs-drops">{[300, 470, 660, 820].map((x, i) => <g key={x} className={`gs-leak-path gs-leak-${i}`}>
            <path d={`M${x} ${i ? 208 : 273} l18 ${i ? 58 : 20}`} fill="none" stroke="#fb7185" strokeDasharray="3 6" />
            <path d={`m${x + 12} ${i ? 258 : 285} 6 10 3-12`} fill="#fb7185" />
            <circle className="gs-drop" cx={x} cy={i ? 207 : 263} r="5" fill="#f43f5e" style={{ animationDelay: `${i * -1.7}s` }} />
          </g>)}</g>
          <path className="gs-feedback-track" d={feedbackPath} fill="none" stroke="var(--color-brand-accent)" strokeWidth="2" strokeOpacity=".45" markerEnd={`url(#${uid}-arrow)`} />
          <path className="gs-feedback-data" d={feedbackPath} fill="none" pathLength="100" stroke="var(--color-brand-accent)" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 96" />
        </svg>

        <div className="gs-revenue"><div className="gs-revenue-icon"><Users aria-hidden="true" /><ArrowUpRight aria-hidden="true" /></div><strong><span>Doanh thu</span><span>tăng trưởng</span></strong></div>
        <div className="gs-leaks">{leaks.map((label, i) => <span key={label} className={`gs-leak-label gs-leak-label-${i}`}><b aria-hidden="true">×</b><span>{i === 1 ? <>Không đúng<span className="gs-pill-break" /> nhu cầu</> : i === 3 ? <>Không được<span className="gs-pill-break" /> follow up</> : label}</span></span>)}</div>
        <div className="gs-loop-label"><RefreshCw aria-hidden="true" /><div><strong>SHARED INSIGHTS &amp; FEEDBACK LOOP</strong><p>Dữ liệu kết nối — Cả hệ thống ngày càng tốt hơn</p></div></div>
      </div>
      <div className="gs-benefits">{benefits.map(({ Icon, title, copy }) => <div key={title} className="gs-benefit"><span><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
    </div>
  </section>;
}
