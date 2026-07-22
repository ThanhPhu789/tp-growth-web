export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  fit?: 'cover' | 'contain';
  afterHeading?: string;
};

export type BlogPostMedia = {
  coverImage?: BlogImage;
  inlineImages?: BlogImage[];
};

export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; code: string }
  | {
      type: 'visual';
      variant:
        | 'lead-pipeline'
        | 'lead-quality-comparison'
        | 'system-breakpoints'
        | 'campaign-continuity-comparison'
        | 'breakpoint-diagnostic-checklist'
        | 'dashboard-comparison'
        | 'founder-dashboard-mockup'
        | 'dashboard-decision-flow'
        | 'weekly-kpi-groups'
        | 'weekly-kpi-scorecard'
        | 'weekly-review-rhythm'
        | 'gtm-signal-router'
        | 'gtm-before-after'
        | 'marketer-gtm-checklist'
        | 'datalayer-gtm-relationship'
        | 'form-lead-datalayer'
        | 'purchase-datalayer'
        | 'datalayer-brief-checklist'
        | 'wrong-tracking-decision-chain'
        | 'tracking-error-map'
        | 'tracking-signal-comparison'
        | 'tracking-diagnostic-checklist'
        | 'server-side-tracking-flow'
        | 'client-vs-server-tracking'
        | 'server-side-not-magic'
        | 'sme-server-side-decision-matrix'
        | 'server-side-readiness-checklist'
        | 'tracking-destinations'
        | 'tracking-platform-comparison'
        | 'same-event-different-platforms'
        | 'tracking-stack-checklist'
        | 'event-tracking-journey'
        | 'event-value-ladder'
        | 'event-definition-table'
        | 'event-tracking-checklist'
        | 'duplicate-conversion-problem'
        | 'event-id-dedup-flow'
        | 'event-id-vs-transaction-id'
        | 'dedup-before-after'
        | 'event-id-checklist'
        | 'minimum-tracking-map'
        | 'contact-tracking'
        | 'website-tracking-checklist'
        | 'tracking-priority-matrix'
        | 'lead-data-journey'
        | 'lead-record-anatomy'
        | 'broken-vs-connected-lead-flow'
        | 'dashboard-input-checklist'
        | 'tracking-purpose-comparison'
        | 'marketing-money-flow'
        | 'budget-leak-map'
        | 'spend-to-decision-loop'
        | 'marketing-spend-checklist'
        | 'cookie-types-for-marketer'
        | 'consent-tracking-flow'
        | 'consent-banner-do-dont'
        | 'consent-tracking-checklist'
        | 'prelaunch-tracking-audit-flow'
        | 'tracking-preflight-checklist'
        | 'tracking-test-flow'
        | 'tracking-issue-priority'
        | 'ads-tracking-go-no-go'
        | 'vanity-vs-decision-dashboard'
        | 'weekly-marketing-dashboard-map'
        | 'metrics-to-actions'
        | 'dashboard-decision-loop'
        | 'founder-dashboard-checklist'
        | 'minimum-marketing-dashboard-structure'
        | 'weekly-dashboard-layout'
        | 'dashboard-audience-views'
        | 'dashboard-metric-priority'
        | 'minimum-dashboard-checklist'
        | 'weekly-dashboard-reading-flow'
        | 'metric-question-action'
        | 'signal-diagnosis-matrix'
        | 'dashboard-review-meeting-agenda'
        | 'weekly-action-log-checklist'
        | 'vanity-vs-decision-metrics'
        | 'metric-decision-ladder'
        | 'vanity-metric-trap'
        | 'metric-to-decision-map'
        | 'decision-metric-checklist'
        | 'lead-revenue-gap'
        | 'lead-to-revenue-funnel'
        | 'lead-revenue-diagnosis-matrix'
        | 'quantity-vs-quality-dashboard'
        | 'lead-revenue-review-checklist'
        | 'marketing-bottleneck-map'
        | 'bottleneck-diagnosis-flow'
        | 'signal-to-bottleneck-matrix'
        | 'bottleneck-fix-priority'
        | 'bottleneck-review-checklist'
        | 'post-first-vs-direction-first'
        | 'campaign-direction-map'
        | 'campaign-direction-brief'
        | 'campaign-alignment-flow'
        | 'campaign-direction-checklist'
        | 'tagline-vs-slogan'
        | 'operating-tagline-role'
        | 'weak-vs-strong-tagline'
        | 'tagline-alignment-map'
        | 'operating-tagline-checklist'
        | 'event-checkin-vs-followup'
        | 'offline-event-data-flow'
        | 'event-data-capture-map'
        | 'post-event-followup-timeline'
        | 'event-followup-checklist'
        | 'campaign-brief-role'
        | 'no-brief-misalignment'
        | 'campaign-brief-anatomy'
        | 'brief-to-execution-flow'
        | 'campaign-brief-checklist'
        | 'campaign-landing-page-role'
        | 'landing-page-section-map'
        | 'message-continuity-to-landing'
        | 'campaign-form-data-capture'
        | 'campaign-landing-page-checklist'
        | 'raw-vs-actionable-event-data'
        | 'post-event-data-pipeline'
        | 'event-data-segmentation'
        | 'event-followup-priority-matrix'
        | 'post-event-data-checklist'
        | 'concept-alignment-system'
        | 'fragmented-vs-aligned-campaign'
        | 'concept-to-touchpoints'
        | 'message-mismatch-leak'
        | 'campaign-concept-alignment-checklist'
        | 'b2b-architect-vs-retail-campaign'
        | 'solution-kit-vs-product-promo'
        | 'architect-decision-ecosystem'
        | 'architect-campaign-journey'
        | 'architect-campaign-checklist'
        | 'campaign-team-misalignment'
        | 'shared-campaign-source-of-truth'
        | 'campaign-team-role-map'
        | 'campaign-handoff-flow'
        | 'campaign-team-alignment-checklist'
        | 'campaign-launch-readiness-map'
        | 'campaign-launch-flow'
        | 'tracking-data-launch-check'
        | 'pre-launch-risk-check'
        | 'campaign-launch-checklist'
        | 'simple-crm-purpose'
        | 'no-crm-vs-simple-crm'
        | 'lead-flow-to-crm'
        | 'simple-crm-fields'
        | 'simple-crm-checklist'
        | 'lead-status-purpose'
        | 'called-vs-clear-status'
        | 'simple-lead-status-flow'
        | 'status-meaning-action-map'
        | 'lead-status-checklist'
        | 'first-marketer-timing'
        | 'first-marketer-role-map'
        | 'first-marketer-vs-agency'
        | 'agency-timing-fit'
        | 'agency-problem-fit'
        | 'agency-brief-minimum'
        | 'build-team-timing'
        | 'first-marketing-pod'
        | 'inhouse-external-operating-model'
        | 'budget-bottleneck-priority'
        | 'twenty-million-scenario-split'
        | 'thirty-day-budget-learning'
        | 'marketer-vibe-coding-safe-start'
        | 'contract-prompt-vs-vague-prompt'
        | 'safe-vibe-coding-workflow'
        | 'landing-page-prompt-guardrail'
        | 'safe-landing-page-build-flow'
        | 'ai-landing-page-diff-red-flags'
        | 'ai-task-vs-operator-skill'
        | 'ai-marketer-coordinator-map'
        | 'ai-marketing-operating-loop'
        | 'ui-prompt-contract-comparison'
        | 'safe-ui-prompt-layers'
        | 'ui-prompt-safety-checklist'
        | 'big-budget-ads-system-map'
        | 'winning-ad-vs-creative-pipeline'
        | 'beyond-cpl-decision'
        | 'creative-pipeline-banks'
        | 'creative-signal-reading-map'
        | 'cheap-cpl-vs-valuable-lead'
        | 'lead-quality-funnel-after-cpl'
        | 'sales-feedback-to-ads-loop'
        | 'ads-scale-pressure-map'
        | 'ads-scale-decision-matrix'
        | 'test-signal-to-scale-system'
        | 'paid-ads-signal-chain'
        | 'micro-signal-vs-main-conversion'
        | 'bad-signal-optimization-loop'
        | 'ad-promise-to-landing-action'
        | 'beautiful-page-vs-ad-ready-page'
        | 'landing-page-signal-after-submit'
        | 'offer-beyond-discount'
        | 'weak-offer-leak-funnel'
        | 'offer-readiness-six-questions'
        | 'traffic-stage-message-map'
        | 'retargeting-message-ladder'
        | 'stage-message-page-cta'
        | 'search-intent-vs-social-intent'
        | 'intent-message-page-cta'
        | 'demand-creation-capture-system'
        | 'test-budget-vs-scale-budget'
        | 'good-ads-test-anatomy'
        | 'test-to-scale-signal-gate'
        | 'campaign-structure-decision-map'
        | 'ads-structure-balance'
        | 'test-scale-retargeting-structure'
        | 'daily-check-vs-decision-review'
        | 'ads-signal-time-lag'
        | 'paid-ads-reporting-cadence'
        | 'multi-touch-customer-journey'
        | 'source-of-truth-decision-map'
        | 'attribution-gap-vs-tracking-error'
        | 'media-win-vs-business-win'
        | 'ads-manager-to-pnl-flow'
        | 'paid-ads-unit-economics-checklist'
        | 'lead-temperature-after-submit'
        | 'ads-to-sales-lead-handoff'
        | 'minimal-crm-status-for-paid-ads'
        | 'lead-to-business-outcome-signal'
        | 'offline-conversion-feedback-loop'
        | 'five-layers-after-lead-submit'
        | 'objective-as-algorithm-brief'
        | 'shallow-objective-vs-deep-signal'
        | 'objective-readiness-checklist'
        | 'audience-beyond-ads-manager'
        | 'creative-filtering-map'
        | 'audience-split-or-consolidate'
        | 'attributed-vs-incremental-conversion'
        | 'demand-capture-vs-demand-creation'
        | 'simple-incrementality-check'
        | 'paid-ads-budget-portfolio'
        | 'cpa-trap-budget-allocation'
        | 'funnel-budget-role-map'
        | 'frequency-context-map'
        | 'ad-fatigue-diagnosis-map'
        | 'creative-refresh-ladder'
        | 'campaign-learning-loop'
        | 'small-vs-significant-edits'
        | 'campaign-change-log'
        | 'cpl-signal-chain'
        | 'metric-breakdown-diagnosis'
        | 'paid-ads-fix-lever-matrix'
        | 'postmortem-not-blame-meeting'
        | 'win-lose-learn-matrix'
        | 'campaign-postmortem-checklist'
        | 'message-match-chain'
        | 'message-mismatch-symptoms'
        | 'message-match-qa-matrix'
        | 'post-submit-funnel-chain'
        | 'thank-you-page-job-map'
        | 'post-submit-tracking-qa'
        | 'marketing-promise-landing-proof'
        | 'beautiful-vs-conversion-ready-page'
        | 'landing-page-five-question-check'
        | 'after-click-expectation-match'
        | 'hero-three-question-check'
        | 'hero-by-traffic-temperature'
        | 'hero-anatomy-conversion-context'
        | 'cta-is-not-offer'
        | 'offer-clarity-four-question-check'
        | 'offer-by-customer-readiness'
        | 'vague-vs-clear-offer'
        | 'form-submit-not-finish-line'
        | 'good-vs-bad-form-question'
        | 'lead-stage-from-form'
        | 'minimum-viable-lead-context';
    }
  | { type: 'placeholder'; label: string; text: string };

export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  readingTime: string;
  excerpt: string;
  media?: BlogPostMedia;
  content: BlogContentBlock[];
  cta: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Doanh nghiá»‡p khÃ´ng thiáº¿u ads, há» thiáº¿u há»‡ thá»‘ng',
    slug: 'doanh-nghiep-khong-thieu-ads-ho-thieu-he-thong',
    category: 'Marketing System',
    readingTime: '6â€“8 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-result-01.jpg",
                "alt": "PageSpeed performance report screenshot",
                "caption": "PageSpeed performance result",
                "width": 2048,
                "height": 1189,
                "fit": "contain"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-diagnostics-01.jpg",
                      "alt": "PageSpeed Insights diagnostics screenshot",
                      "caption": "PageSpeed diagnostics",
                      "width": 2880,
                      "height": 1466,
                      "fit": "contain",
                      "afterHeading": "Nhá»¯ng dáº¥u hiá»‡u doanh nghiá»‡p khÃ´ng thiáº¿u ads mÃ  thiáº¿u há»‡ thá»‘ng"
                }
          ]
    },
    excerpt:
      'Nhiá»u doanh nghiá»‡p SME khÃ´ng chá»¯ng láº¡i vÃ¬ thiáº¿u quáº£ng cÃ¡o. Há» chá»¯ng láº¡i vÃ¬ ads, content, website, sales vÃ  data chÆ°a Ä‘Æ°á»£c ná»‘i thÃ nh má»™t há»‡ thá»‘ng Ä‘á»§ rÃµ Ä‘á»ƒ ra quyáº¿t Ä‘á»‹nh.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t giai Ä‘oáº¡n tÃ´i cÅ©ng tá»«ng nghÄ© marketing lÃ  tá»‘i Æ°u ads cho tá»‘t hÆ¡n. Khi káº¿t quáº£ chÆ°a Ä‘áº¡t, pháº£n xáº¡ Ä‘áº§u tiÃªn cá»§a tÃ´i lÃ  xem láº¡i target, Ä‘á»•i creative, Ä‘iá»u chá»‰nh ngÃ¢n sÃ¡ch hoáº·c kÃ©o CPL xuá»‘ng. CÃ¡c chá»‰ sá»‘ quáº£ng cÃ¡o gáº§n nhÆ° trá»Ÿ thÃ nh trung tÃ¢m cá»§a má»i cuá»™c trao Ä‘á»•i.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡ch nghÄ© Ä‘Ã³ khÃ´ng háº³n sai. Ads váº«n quan trá»ng khi doanh nghiá»‡p cáº§n chá»§ Ä‘á»™ng tiáº¿p cáº­n khÃ¡ch má»›i. NhÆ°ng cÃ ng lÃ m vá»›i SME vÃ  team nhá», tÃ´i cÃ ng tháº¥y nhiá»u váº¥n Ä‘á» khÃ´ng thá»ƒ giáº£i quyáº¿t bÃªn trong Ads Manager.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ campaign mang lead vá» Ä‘á»u nhÆ°ng sales nÃ³i pháº§n lá»›n khÃ´ng Ä‘Ãºng nhu cáº§u. CÃ³ website nháº­n traffic nhÆ°ng ngÆ°á»i xem chÆ°a hiá»ƒu doanh nghiá»‡p lÃ m gÃ¬, cÃ³ Ä‘Ã¡ng tin khÃ´ng. CÃ³ team cháº¡y nhiá»u kÃªnh nhÆ°ng cuá»‘i thÃ¡ng váº«n pháº£i ghÃ©p sá»‘ thá»§ cÃ´ng Ä‘á»ƒ tÃ¬m nguá»“n táº¡o ra khÃ¡ch tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Tiáº¿p tá»¥c chá»‰nh quáº£ng cÃ¡o lÃºc Ä‘Ã³ giá»‘ng nhÆ° tÄƒng Ã¡p lá»±c nÆ°á»›c vÃ o má»™t Ä‘Æ°á»ng á»‘ng Ä‘ang há»Ÿ. Ads lÃ  pháº§n dá»… nhÃ¬n tháº¥y nháº¥t, nhÆ°ng khÃ´ng pháº£i lÃºc nÃ o cÅ©ng lÃ  Ä‘iá»ƒm ngháº½n lá»›n nháº¥t.',
      },
      { type: 'heading', text: 'Ads chá»‰ lÃ  pháº§n ná»•i cá»§a há»‡ thá»‘ng' },
      {
        type: 'paragraph',
        text: 'Quáº£ng cÃ¡o lÃ m tá»‘t má»™t viá»‡c: Ä‘Æ°a má»™t nhÃ³m ngÆ°á»i Ä‘áº¿n gáº§n doanh nghiá»‡p. Tá»« lÃºc há» nhÃ¬n tháº¥y quáº£ng cÃ¡o Ä‘áº¿n khi trá»Ÿ thÃ nh khÃ¡ch hÃ ng cÃ²n lÃ  má»™t dÃ²ng cháº£y dÃ i. Cháº¥t lÆ°á»£ng cá»§a dÃ²ng cháº£y Ä‘Ã³ má»›i quyáº¿t Ä‘á»‹nh káº¿t quáº£ kinh doanh.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t máº«u quáº£ng cÃ¡o cÃ³ thá»ƒ táº¡o nhiá»u lÆ°á»£t nháº¥p, nhÆ°ng ngÆ°á»i nháº¥p cÃ³ Ä‘Ãºng tá»‡p khÃ´ng? ThÃ´ng Ä‘iá»‡p cÃ³ rÃµ khÃ´ng? Landing page cÃ³ Ä‘á»§ thÃ´ng tin Ä‘á»ƒ há» tin khÃ´ng? Form, cuá»™c gá»i hoáº·c Zalo cÃ³ dá»… thao tÃ¡c trÃªn Ä‘iá»‡n thoáº¡i khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Sau khi cÃ³ lead, sales cÃ³ nháº­n thÃ´ng tin Ä‘á»§ nhanh vÃ  biáº¿t cáº§n há»i gÃ¬ khÃ´ng? Náº¿u khÃ¡ch chÆ°a mua ngay, team cÃ³ cÃ¡ch follow-up nháº¥t quÃ¡n khÃ´ng? Tracking cÃ³ ghi Ä‘Ãºng nguá»“n hay má»—i ná»n táº£ng Ä‘ang bÃ¡o má»™t kiá»ƒu? Founder cÃ³ biáº¿t kÃªnh nÃ o táº¡o ra khÃ¡ch hÃ ng tháº­t khÃ´ng?',
      },
      {
        type: 'placeholder',
        label: 'IMAGE_PLACEHOLDER',
        text: 'SÆ¡ Ä‘á»“ Ä‘Æ¡n giáº£n Ads â†’ Landing Page â†’ Lead â†’ Sales â†’ Dashboard',
      },
      {
        type: 'paragraph',
        text: 'Chá»‰ cáº§n má»™t máº¯t xÃ­ch thiáº¿u rÃµ rÃ ng, hiá»‡u quáº£ cá»§a nhá»¯ng máº¯t xÃ­ch cÃ²n láº¡i cÅ©ng bá»‹ giáº£m. Ads cÃ³ thá»ƒ hoÃ n thÃ nh nhiá»‡m vá»¥ cá»§a nÃ³, nhÆ°ng doanh nghiá»‡p váº«n cáº£m tháº¥y marketing khÃ´ng hiá»‡u quáº£ vÃ¬ pháº§n phÃ­a sau chÆ°a sáºµn sÃ ng.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO_PLACEHOLDER',
        text: 'Video ngáº¯n giáº£i thÃ­ch vÃ¬ sao ads chá»‰ lÃ  má»™t pháº§n cá»§a há»‡ thá»‘ng',
      },
      { type: 'heading', text: 'Nhá»¯ng dáº¥u hiá»‡u doanh nghiá»‡p khÃ´ng thiáº¿u ads mÃ  thiáº¿u há»‡ thá»‘ng' },
      {
        type: 'paragraph',
        text: 'á»ž SME, váº¥n Ä‘á» nÃ y thÆ°á»ng khÃ´ng xuáº¥t hiá»‡n dÆ°á»›i má»™t tÃªn gá»i rÃµ rÃ ng. NÃ³ lá»™ ra qua nhá»¯ng tÃ¬nh huá»‘ng quen thuá»™c trong cÃ´ng viá»‡c háº±ng tuáº§n:',
      },
      {
        type: 'list',
        items: [
          'Ads váº«n tiÃªu tiá»n, nhÆ°ng doanh thu khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng.',
          'Lead váº«n vá», trong khi sales liÃªn tá»¥c pháº£n há»“i ráº±ng lead khÃ´ng cháº¥t lÆ°á»£ng.',
          'Content Ä‘Äƒng Ä‘á»u, nhÆ°ng team khÃ´ng biáº¿t bÃ i nÃ o kÃ©o Ä‘Ãºng khÃ¡ch.',
          'Website cÃ³ form, nÃºt gá»i vÃ  Zalo, nhÆ°ng khÃ´ng xÃ¡c Ä‘á»‹nh Ä‘Æ°á»£c nguá»“n lead.',
          'Founder pháº£i há»i tá»«ng ngÆ°á»i má»›i biáº¿t marketing vÃ  sales Ä‘ang lÃ m gÃ¬.',
          'BÃ¡o cÃ¡o cÃ³ nhiá»u sá»‘ nhÆ°ng khÃ´ng chá»‰ ra tuáº§n tá»›i cáº§n sá»­a viá»‡c gÃ¬.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Má»™t team nhá» cÃ³ thá»ƒ gáº·p nhiá»u dáº¥u hiá»‡u cÃ¹ng lÃºc. Marketer tháº¥y CPL tÄƒng nÃªn Ä‘á»•i quáº£ng cÃ¡o. Sales tháº¥y khÃ¡ch há»i sai sáº£n pháº©m nÃªn cho ráº±ng target sai. Founder tháº¥y doanh thu chÆ°a Ä‘á»•i vÃ  muá»‘n tÄƒng ngÃ¢n sÃ¡ch. Má»—i ngÆ°á»i pháº£n á»©ng vá»›i má»™t Ä‘oáº¡n riÃªng, nhÆ°ng chÆ°a ai nhÃ¬n toÃ n bá»™ hÃ nh trÃ¬nh.',
      },
      { type: 'heading', text: 'Má»™t há»‡ thá»‘ng marketing tá»‘i thiá»ƒu gá»“m nhá»¯ng gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Há»‡ thá»‘ng khÃ´ng nháº¥t thiáº¿t pháº£i báº¯t Ä‘áº§u báº±ng pháº§n má»m Ä‘áº¯t tiá»n hay má»™t dashboard phá»©c táº¡p. Vá»›i má»™t SME, tÃ´i thÆ°á»ng nhÃ¬n vÃ o cÃ¡c lá»›p cÆ¡ báº£n sau:',
      },
      {
        type: 'list',
        items: [
          'Strategy: Biáº¿t mÃ¬nh bÃ¡n cho ai, giáº£i quyáº¿t váº¥n Ä‘á» nÃ o vÃ  vÃ¬ sao khÃ¡ch nÃªn cÃ¢n nháº¯c mÃ¬nh.',
          'Traffic: Chá»n kÃªnh cÃ³ kháº£ nÄƒng Ä‘Æ°a Ä‘Ãºng ngÆ°á»i vÃ o, thay vÃ¬ cá»‘ cÃ³ máº·t á»Ÿ má»i nÆ¡i.',
          'Message: NÃ³i Ä‘Ãºng Ä‘iá»u khÃ¡ch quan tÃ¢m vÃ  giá»¯ thÃ´ng Ä‘iá»‡p nháº¥t quÃ¡n tá»« quáº£ng cÃ¡o Ä‘áº¿n landing page.',
          'Tracking: Ghi nháº­n nguá»“n truy cáº­p, hÃ nh Ä‘á»™ng Ä‘á»ƒ láº¡i thÃ´ng tin vÃ  tráº¡ng thÃ¡i lead, thay vÃ¬ gom má»i chá»‰ sá»‘.',
          'Sales vÃ  follow-up: Thá»‘ng nháº¥t ai nháº­n lead, pháº£n há»“i khi nÃ o, há»i gÃ¬ vÃ  chÄƒm sÃ³c tiáº¿p ra sao.',
          'Dashboard vÃ  review: NhÃ¬n láº¡i theo tuáº§n Ä‘á»ƒ hiá»ƒu Ä‘iá»ƒm ngháº½n vÃ  viá»‡c cáº§n Æ°u tiÃªn sá»­a trÆ°á»›c.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c lá»›p nÃ y khÃ´ng hoáº¡t Ä‘á»™ng riÃªng. Strategy chÆ°a rÃµ thÃ¬ traffic dá»… kÃ©o sai ngÆ°á»i. Message chÆ°a Ä‘Ãºng thÃ¬ landing page khÃ³ thuyáº¿t phá»¥c. Tracking thiáº¿u thÃ¬ marketing vÃ  sales khÃ´ng thá»ƒ Ä‘á»‘i chiáº¿u. Thiáº¿u nhá»‹p review, dashboard chá»‰ cÃ²n nhiá»u biá»ƒu Ä‘á»“ nhÆ°ng Ã­t quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'placeholder',
        label: 'CASE_PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ thá»±c táº¿ tá»« má»™t campaign SME Ä‘Ã£ Ä‘Æ°á»£c áº©n danh',
      },
      { type: 'heading', text: 'BÃ i há»c tÃ´i dáº§n nháº­n ra' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra ráº±ng nhiá»u lÃºc tÄƒng ngÃ¢n sÃ¡ch hay Ä‘á»•i creative khÃ´ng giáº£i quyáº¿t váº¥n Ä‘á». Náº¿u quáº£ng cÃ¡o thu hÃºt nháº§m ká»³ vá»ng, Ä‘Æ°a khÃ¡ch Ä‘áº¿n má»™t trang thiáº¿u thÃ´ng tin rá»“i chuyá»ƒn lead sang quy trÃ¬nh follow-up rá»i ráº¡c, thÃªm ngÃ¢n sÃ¡ch chá»‰ lÃ m váº¥n Ä‘á» xáº£y ra nhanh hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Viá»‡c cáº§n lÃ m trÆ°á»›c lÃ  nhÃ¬n toÃ n bá»™ dÃ²ng cháº£y tá»« ngÆ°á»i láº¡ Ä‘áº¿n khÃ¡ch hÃ ng. Há» nhÃ¬n tháº¥y gÃ¬? VÃ¬ sao há» Ä‘á»ƒ láº¡i thÃ´ng tin? Lead Ä‘Æ°á»£c chuyá»ƒn cho ai? Káº¿t quáº£ cuá»‘i cÃ³ quay láº¡i Ä‘á»ƒ marketer biáº¿t nguá»“n vÃ  thÃ´ng Ä‘iá»‡p nÃ o hiá»‡u quáº£ khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Trong má»™t team nhá», cáº£i thiá»‡n quan trá»ng Ä‘Ã´i khi chá»‰ lÃ  thá»‘ng nháº¥t cÃ¡ch Ä‘áº·t tÃªn campaign, thÃªm trÆ°á»ng nguá»“n lead, viáº¿t rÃµ tiÃªu chÃ­ lead phÃ¹ há»£p, hoáº·c dÃ nh má»™t buá»•i má»—i tuáº§n Ä‘á»ƒ marketing vÃ  sales xem láº¡i cÃ¡c cuá»™c há»™i thoáº¡i. Nhá»¯ng viá»‡c nÃ y khÃ´ng hÃ o nhoÃ¡ng, nhÆ°ng giÃºp team bá»›t Ä‘oÃ¡n.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u tá»« nhá»¯ng cÃ¢u há»i cÄƒn báº£n' },
      {
        type: 'paragraph',
        text: 'Má»™t há»‡ thá»‘ng marketing tá»‘t khÃ´ng cáº§n phá»©c táº¡p ngay tá»« Ä‘áº§u. NÃ³ chá»‰ cáº§n giÃºp doanh nghiá»‡p tráº£ lá»i Ä‘Æ°á»£c vÃ i cÃ¢u há»i cÄƒn báº£n: khÃ¡ch Ä‘áº¿n tá»« Ä‘Ã¢u, há» cÃ³ Ä‘Ãºng tá»‡p khÃ´ng, vÃ¬ sao há» Ä‘á»ƒ láº¡i thÃ´ng tin, sales xá»­ lÃ½ ra sao, vÃ  tuáº§n sau nÃªn sá»­a Ä‘iá»ƒm nÃ o trÆ°á»›c.',
      },
      {
        type: 'paragraph',
        text: 'Khi cÃ¡c cÃ¢u há»i chÆ°a cÃ³ lá»i Ä‘Ã¡p rÃµ, campaign má»›i thÆ°á»ng chá»‰ táº¡o thÃªm dá»¯ liá»‡u vÃ  thÃªm viá»‡c. Khi cÃ¡c máº¯t xÃ­ch Ä‘Ã£ ná»‘i láº¡i, ads má»›i lÃ m Ä‘Ãºng vai trÃ²: Ä‘Æ°a Ä‘Ãºng ngÆ°á»i vÃ o má»™t há»‡ thá»‘ng cÃ³ kháº£ nÄƒng biáº¿n sá»± chÃº Ã½ thÃ nh cÆ¡ há»™i kinh doanh.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang cháº¡y marketing Ä‘á»u nhÆ°ng váº«n khÃ´ng cháº¯c Ä‘iá»ƒm ngháº½n náº±m á»Ÿ Ä‘Ã¢u, cÃ³ thá»ƒ báº¯t Ä‘áº§u báº±ng viá»‡c nhÃ¬n láº¡i toÃ n bá»™ há»‡ thá»‘ng trÆ°á»›c khi cháº¡y thÃªm campaign má»›i.',
  },
  {
    title: 'VÃ¬ sao lead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?',
    slug: 'vi-sao-lead-nhieu-nhung-doanh-thu-khong-tang',
    category: 'Marketing System',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-mobile-result-01.jpg",
                "alt": "PageSpeed Insights mobile performance screenshot",
                "caption": "PageSpeed mobile performance result",
                "width": 2880,
                "height": 1458,
                "fit": "contain"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-performance-summary-01.jpg",
                      "alt": "PageSpeed Insights performance summary screenshot",
                      "caption": "PageSpeed performance summary",
                      "width": 2880,
                      "height": 1450,
                      "fit": "contain",
                      "afterHeading": "5 lÃ½ do lead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng"
                }
          ]
    },
    excerpt:
      'Lead nhiá»u khÃ´ng Ä‘á»“ng nghÄ©a vá»›i tÄƒng trÆ°á»Ÿng. Náº¿u traffic sai, thÃ´ng Ä‘iá»‡p lá»‡ch, sales follow-up cháº­m hoáº·c tracking khÃ´ng ná»‘i Ä‘Æ°á»£c vá»›i doanh thu, doanh nghiá»‡p ráº¥t dá»… tÆ°á»Ÿng mÃ¬nh Ä‘ang lÃ m marketing tá»‘t trong khi há»‡ thá»‘ng váº«n bá»‹ ngháº½n.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t tÃ¬nh huá»‘ng ráº¥t hay gáº·p trong SME: marketing bÃ¡o lead váº«n vá» Ä‘á»u, tháº­m chÃ­ CPL cÃ²n Ä‘áº¹p. NhÆ°ng cuá»‘i thÃ¡ng doanh thu khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng. Trong buá»•i review, marketing nÃ³i ads váº«n á»•n vÃ¬ chi phÃ­ vÃ  sá»‘ lÆ°á»£ng Ä‘á»u Ä‘áº¡t. Sales láº¡i nÃ³i pháº§n lá»›n lead khÃ´ng cháº¥t lÆ°á»£ng, gá»i khÃ³ báº¯t mÃ¡y hoáº·c chá»‰ há»i giÃ¡. Founder ngá»“i giá»¯a, nhÃ¬n doanh thu vÃ  biáº¿t cháº¯c cÃ³ Ä‘iá»u gÃ¬ Ä‘Ã³ chÆ°a á»•n.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»™c trao Ä‘á»•i ráº¥t dá»… trÆ°á»£t thÃ nh cÃ¢u há»i ai lÃ m chÆ°a tá»‘t. NhÆ°ng thÆ°á»ng váº¥n Ä‘á» khÃ´ng náº±m hoÃ n toÃ n á»Ÿ má»™t phÃ­a. Marketing, sales vÃ  founder Ä‘ang nhÃ¬n ba Ä‘oáº¡n khÃ¡c nhau cá»§a cÃ¹ng má»™t Ä‘Æ°á»ng Ä‘i, trong khi cáº£ há»‡ thá»‘ng chÆ°a thá»‘ng nháº¥t tháº¿ nÃ o lÃ  má»™t â€œlead tá»‘tâ€.',
      },
      { type: 'heading', text: 'Lead nhiá»u chÆ°a cháº¯c lÃ  tÃ­n hiá»‡u tá»‘t' },
      {
        type: 'paragraph',
        text: 'Lead lÃ  má»™t hÃ nh Ä‘á»™ng quan tÃ¢m, khÃ´ng pháº£i doanh thu. Má»™t form submit, má»™t inbox, má»™t cuá»™c gá»i hay má»™t click Zalo má»›i chá»‰ cho tháº¥y khÃ¡ch Ä‘Ã£ phÃ¡t tÃ­n hiá»‡u. NÃ³ chÆ°a nÃ³i ngÆ°á»i Ä‘Ã³ cÃ³ Ä‘Ãºng nhu cáº§u, Ä‘Ãºng ngÃ¢n sÃ¡ch, Ä‘Ãºng thá»i Ä‘iá»ƒm, Ä‘Ãºng khu vá»±c hoáº·c Ä‘á»§ kháº£ nÄƒng mua hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'VÃ¬ váº­y, tÄƒng sá»‘ lead cÃ³ thá»ƒ giÃºp má»Ÿ rá»™ng cÆ¡ há»™i, nhÆ°ng cÅ©ng cÃ³ thá»ƒ chá»‰ lÃ m tÄƒng khá»‘i lÆ°á»£ng cáº§n xá»­ lÃ½. Náº¿u pháº§n lá»›n tÃ­n hiá»‡u Ä‘áº¿n tá»« ngÆ°á»i tÃ² mÃ² hoáº·c ká»³ vá»ng sai, sales sáº½ báº­n hÆ¡n mÃ  pipeline khÃ´ng tiáº¿n thÃªm.',
      },
      { type: 'visual', variant: 'lead-pipeline' },
      { type: 'heading', text: '5 lÃ½ do lead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng' },
      {
        type: 'paragraph',
        text: '1. Traffic sai tá»‡p. Quáº£ng cÃ¡o cÃ³ thá»ƒ kÃ©o ráº¥t nhiá»u ngÆ°á»i tÃ² mÃ², thÃ­ch xem Æ°u Ä‘Ã£i hoáº·c muá»‘n há»i giÃ¡ Ä‘á»ƒ tham kháº£o. Há» táº¡o ra tÆ°Æ¡ng tÃ¡c tháº­t, nhÆ°ng khÃ´ng thuá»™c nhÃ³m cÃ³ kháº£ nÄƒng mua tháº­t. TiÃªu chÃ­ thu hÃºt chÆ°a Ä‘á»§ gáº§n vá»›i khÃ¡ch hÃ ng mÃ  doanh nghiá»‡p cáº§n.',
      },
      {
        type: 'paragraph',
        text: '2. ThÃ´ng Ä‘iá»‡p táº¡o lead dá»… nhÆ°ng khÃ´ng táº¡o khÃ¡ch Ä‘Ãºng. Má»™t thÃ´ng Ä‘iá»‡p quÃ¡ táº­p trung vÃ o giÃ¡ ráº», quÃ  táº·ng hoáº·c lá»i há»©a tháº­t rá»™ng thÆ°á»ng lÃ m sá»‘ Ä‘Äƒng kÃ½ tÄƒng nhanh. Äá»•i láº¡i, sales gáº·p nhiá»u ngÆ°á»i chá»‰ quan tÃ¢m Ä‘áº¿n pháº§n háº¥p dáº«n nháº¥t cá»§a quáº£ng cÃ¡o, khÃ´ng quan tÃ¢m Ä‘áº§y Ä‘á»§ Ä‘áº¿n giáº£i phÃ¡p.',
      },
      {
        type: 'paragraph',
        text: '3. Landing page hoáº·c form táº¡o ká»³ vá»ng chÆ°a Ä‘Ãºng. KhÃ¡ch Ä‘á»ƒ láº¡i thÃ´ng tin vÃ¬ hiá»ƒu má»™t Æ°u Ä‘Ã£i theo cÃ¡ch nÃ y, nhÆ°ng khi sales gá»i thÃ¬ Ä‘iá»u kiá»‡n thá»±c táº¿ láº¡i khÃ¡c. Khoáº£ng cÃ¡ch giá»¯a lá»i há»©a trÃªn trang vÃ  tráº£i nghiá»‡m trong cuá»™c gá»i khiáº¿n lead há»¥t háº«ng, cÃ²n sales pháº£i báº¯t Ä‘áº§u báº±ng viá»‡c giáº£i thÃ­ch láº¡i.',
      },
      {
        type: 'paragraph',
        text: '4. Sales follow-up cháº­m hoáº·c thiáº¿u quy trÃ¬nh. Lead nÃ³ng thÆ°á»ng cÃ³ thá»i gian sá»‘ng ngáº¯n. Náº¿u thÃ´ng tin chuyá»ƒn cháº­m, khÃ´ng cÃ³ ngÆ°á»i phá»¥ trÃ¡ch rÃµ, cuá»™c gá»i khÃ´ng Ä‘Æ°á»£c ghi chÃº hoáº·c lead chÆ°a mua khÃ´ng Ä‘Æ°á»£c follow-up láº¡i, má»™t Ä‘áº§u vÃ o tá»‘t váº«n cÃ³ thá»ƒ nguá»™i Ä‘i. Khi Ä‘Ã³ marketing bá»‹ Ä‘Ã¡nh giÃ¡ báº±ng káº¿t quáº£ cá»§a má»™t quy trÃ¬nh xá»­ lÃ½ chÆ°a hoÃ n chá»‰nh.',
      },
      {
        type: 'paragraph',
        text: '5. Tracking khÃ´ng ná»‘i Ä‘Æ°á»£c lead vá»›i doanh thu. Nhiá»u team biáº¿t campaign nÃ o táº¡o form nhÆ°ng khÃ´ng biáº¿t form nÃ o trá»Ÿ thÃ nh cuá»™c tÆ° váº¥n, bÃ¡o giÃ¡ hay Ä‘Æ¡n hÃ ng. KhÃ´ng cÃ³ dá»¯ liá»‡u pháº£n há»“i tá»« sales, marketing buá»™c pháº£i tá»‘i Æ°u theo CPL vÃ  sá»‘ lÆ°á»£ng. Há»‡ thá»‘ng sáº½ tiáº¿p tá»¥c mua thÃªm loáº¡i lead ráº» nháº¥t, dÃ¹ Ä‘Ã³ chÆ°a cháº¯c lÃ  loáº¡i lead cÃ³ giÃ¡ trá»‹ nháº¥t.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh tá»« má»™t campaign cÃ³ lead nhiá»u nhÆ°ng tá»· lá»‡ chá»‘t tháº¥p.',
      },
      { type: 'heading', text: 'Cáº§n nhÃ¬n lead theo pipeline, khÃ´ng nhÃ¬n riÃªng CPL' },
      {
        type: 'paragraph',
        text: 'Má»™t cÃ¡ch Ä‘Æ¡n giáº£n Ä‘á»ƒ Ä‘Æ°a cuá»™c trao Ä‘á»•i vá» cÃ¹ng má»™t máº·t pháº³ng lÃ  nhÃ¬n theo chuá»—i: Traffic â†’ Lead â†’ Qualified Lead â†’ Consultation/Quote â†’ Deal/Revenue. CÃ¡ch nhÃ¬n nÃ y buá»™c team theo dÃµi tÃ­n hiá»‡u Ä‘i qua tá»«ng bÆ°á»›c, thay vÃ¬ dá»«ng láº¡i ngay khi cÃ³ thÃ´ng tin liÃªn há»‡.',
      },
      {
        type: 'list',
        items: [
          'Traffic: nhá»¯ng ngÆ°á»i Ä‘Æ°á»£c kÃ©o vÃ o há»‡ thá»‘ng vÃ  nhÃ¬n tháº¥y thÃ´ng Ä‘iá»‡p.',
          'Lead: nhá»¯ng ngÆ°á»i Ä‘á»ƒ láº¡i má»™t tÃ­n hiá»‡u quan tÃ¢m.',
          'Qualified Lead: nhá»¯ng ngÆ°á»i cÃ³ nhu cáº§u tÆ°Æ¡ng Ä‘á»‘i phÃ¹ há»£p vá»›i tiÃªu chÃ­ Ä‘Ã£ thá»‘ng nháº¥t.',
          'Consultation/Quote: nhá»¯ng ngÆ°á»i thá»±c sá»± bÆ°á»›c vÃ o tÆ° váº¥n hoáº·c nháº­n bÃ¡o giÃ¡.',
          'Deal/Revenue: cÆ¡ há»™i Ä‘Ã£ táº¡o ra doanh thu hoáº·c outcome kinh doanh rÃµ rÃ ng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CPL tháº¥p chá»‰ cho biáº¿t chi phÃ­ Ä‘á»ƒ táº¡o má»™t tÃ­n hiá»‡u. NÃ³ khÃ´ng tá»± nÃ³i tÃ­n hiá»‡u Ä‘Ã³ cÃ³ Ä‘Ã¡ng giÃ¡ hay khÃ´ng. Khi nhÃ¬n thÃªm tá»· lá»‡ chuyá»ƒn Ä‘á»•i giá»¯a cÃ¡c bÆ°á»›c, team má»›i tháº¥y Ä‘iá»ƒm ngháº½n náº±m á»Ÿ nguá»“n traffic, thÃ´ng Ä‘iá»‡p, tá»‘c Ä‘á»™ xá»­ lÃ½ hay kháº£ nÄƒng tÆ° váº¥n.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video ngáº¯n giáº£i thÃ­ch vÃ¬ sao CPL ráº» chÆ°a cháº¯c lÃ  tá»‘t.',
      },
      { type: 'heading', text: 'Lead nhiá»u vÃ  lead cháº¥t lÆ°á»£ng khÃ¡c nhau á»Ÿ Ä‘Ã¢u?' },
      {
        type: 'paragraph',
        text: 'Lead cháº¥t lÆ°á»£ng khÃ´ng cÃ³ nghÄ©a lÃ  ngÆ°á»i cháº¯c cháº¯n sáº½ mua. ÄÃ³ lÃ  ngÆ°á»i giÃºp cuá»™c trao Ä‘á»•i cÃ³ thá»ƒ tiáº¿n vá» phÃ­a trÆ°á»›c: nhu cáº§u rÃµ hÆ¡n, bá»‘i cáº£nh phÃ¹ há»£p hÆ¡n vÃ  cÃ³ kháº£ nÄƒng bÆ°á»›c vÃ o tÆ° váº¥n hoáº·c bÃ¡o giÃ¡.',
      },
      { type: 'visual', variant: 'lead-quality-comparison' },
      { type: 'heading', text: 'Marketing vÃ  Sales cáº§n cÃ¹ng Ä‘á»‹nh nghÄ©a vá» â€œlead tá»‘tâ€' },
      {
        type: 'paragraph',
        text: 'Äá»‹nh nghÄ©a nÃ y khÃ´ng cáº§n dÃ i. Team cÃ³ thá»ƒ báº¯t Ä‘áº§u báº±ng vÃ i tiÃªu chÃ­ quan sÃ¡t Ä‘Æ°á»£c: Ä‘Ãºng khu vá»±c, Ä‘Ãºng nhu cáº§u, phÃ¹ há»£p phÃ¢n khÃºc giÃ¡, cÃ³ thá»i Ä‘iá»ƒm mua tÆ°Æ¡ng Ä‘á»‘i rÃµ, sáºµn sÃ ng trao Ä‘á»•i tiáº¿p vÃ  khÃ´ng chá»‰ há»i cho biáº¿t. TÃ¹y mÃ´ hÃ¬nh kinh doanh, má»©c Ä‘á»™ Æ°u tiÃªn cá»§a tá»«ng tiÃªu chÃ­ sáº½ khÃ¡c nhau, nhÆ°ng chÃºng pháº£i Ä‘Æ°á»£c viáº¿t ra vÃ  dÃ¹ng chung.',
      },
      {
        type: 'paragraph',
        text: 'Khi khÃ´ng cÃ³ Ä‘á»‹nh nghÄ©a chung, team ráº¥t dá»… tranh luáº­n báº±ng cáº£m giÃ¡c. Marketing nhÃ¬n CPL; sales nhÃ¬n cháº¥t lÆ°á»£ng cuá»™c gá»i; founder nhÃ¬n doanh thu. Cáº£ ba gÃ³c nhÃ¬n Ä‘á»u cÃ³ lÃ½, nhÆ°ng náº¿u khÃ´ng ná»‘i láº¡i thÃ¬ khÃ´ng táº¡o ra quyáº¿t Ä‘á»‹nh tá»‘t. Má»™t nhá»‹p review ngáº¯n giá»¯a marketing vÃ  sales, cÃ³ tráº¡ng thÃ¡i lead vÃ  lÃ½ do khÃ´ng tiáº¿n tiáº¿p, thÆ°á»ng há»¯u Ã­ch hÆ¡n viá»‡c chá»‰ gá»­i hai bÃ¡o cÃ¡o riÃªng.',
      },
      { type: 'heading', text: 'BÃ i há»c tÃ´i dáº§n nháº­n ra' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra ráº±ng pháº£n xáº¡ nhÃ¬n CPL trÆ°á»›c dá»… khiáº¿n team sá»­a nháº§m chá»—. CPL tháº¥p mÃ  sales khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c, khÃ´ng tÆ° váº¥n Ä‘Æ°á»£c hoáº·c khÃ´ng ra Ä‘Æ¡n thÃ¬ loáº¡i lead Ä‘Ã³ khÃ´ng cÃ²n ráº» ná»¯a. Chi phÃ­ tháº­t cÃ²n gá»“m thá»i gian lá»c, sá»‘ láº§n gá»i láº¡i vÃ  cÆ¡ há»™i bá»‹ bá» lá»¡ khi sales pháº£i xá»­ lÃ½ quÃ¡ nhiá»u tÃ­n hiá»‡u yáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»£c láº¡i, má»™t nguá»“n cÃ³ CPL cao hÆ¡n nhÆ°ng Ä‘Æ°a vá» ngÆ°á»i Ä‘Ãºng nhu cáº§u, giÃºp sales báº¯t Ä‘áº§u cuá»™c gá»i dá»… hÆ¡n vÃ  cÃ³ kháº£ nÄƒng Ä‘i Ä‘áº¿n bÃ¡o giÃ¡ thÃ¬ cÃ³ thá»ƒ Ä‘Ã¡ng giá»¯ hÆ¡n. Äiá»u cáº§n tá»‘i Æ°u khÃ´ng pháº£i lÃ  má»™t con sá»‘ ráº» nháº¥t, mÃ  lÃ  cháº¥t lÆ°á»£ng cá»§a dÃ²ng cháº£y tá»« marketing sang sales vÃ  káº¿t quáº£ mÃ  dÃ²ng cháº£y Ä‘Ã³ táº¡o ra.',
      },
      { type: 'heading', text: 'NhÃ¬n láº¡i toÃ n bá»™ Ä‘Æ°á»ng Ä‘i cá»§a lead' },
      {
        type: 'paragraph',
        text: 'Khi lead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng, Ä‘á»«ng vá»™i káº¿t luáº­n ads tá»‘t hay sales yáº¿u. HÃ£y nhÃ¬n toÃ n bá»™ Ä‘Æ°á»ng Ä‘i tá»« lÃºc khÃ¡ch tháº¥y thÃ´ng Ä‘iá»‡p, Ä‘á»ƒ láº¡i tÃ­n hiá»‡u, Ä‘Æ°á»£c phÃ¢n loáº¡i, Ä‘Æ°á»£c liÃªn há»‡, bÆ°á»›c vÃ o tÆ° váº¥n cho Ä‘áº¿n khi táº¡o ra doanh thu. Chá»‰ khi cÃ¡c Ä‘oáº¡n nÃ y Ä‘Æ°á»£c ná»‘i láº¡i, team má»›i biáº¿t nÃªn sá»­a nguá»“n vÃ o, lá»i há»©a, quy trÃ¬nh follow-up hay cÃ¡ch Ä‘o lÆ°á»ng.',
      },
    ],
    cta: 'Náº¿u team cá»§a báº¡n Ä‘ang cÃ³ nhiá»u lead nhÆ°ng doanh thu khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng, viá»‡c Ä‘áº§u tiÃªn khÃ´ng pháº£i lÃ  tÄƒng ngÃ¢n sÃ¡ch, mÃ  lÃ  kiá»ƒm tra láº¡i cháº¥t lÆ°á»£ng lead vÃ  Ä‘oáº¡n ná»‘i giá»¯a marketing vá»›i sales.',
  },
  {
    title: 'Marketing khÃ´ng cháº¿t vÃ¬ má»™t lá»—i lá»›n, mÃ  vÃ¬ nhiá»u Ä‘iá»ƒm Ä‘á»©t gÃ£y nhá»',
    slug: 'marketing-khong-chet-vi-mot-loi-lon',
    category: 'Marketing System',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-session-01.jpg",
                "alt": "Audience watching a presentation in a training room",
                "caption": "Training session audience",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-meeting-room-presentation-discussion-01.jpg",
                      "alt": "People in a meeting room during a workshop",
                      "caption": "Workshop discussion in meeting room",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "CÃ¡c Ä‘iá»ƒm Ä‘á»©t gÃ£y nhá» thÆ°á»ng gáº·p"
                }
          ]
    },
    excerpt:
      'Nhiá»u há»‡ thá»‘ng marketing khÃ´ng tháº¥t báº¡i vÃ¬ má»™t quyáº¿t Ä‘á»‹nh sai tháº­t lá»›n. ChÃºng cháº­m láº¡i vÃ¬ nhiá»u Ä‘iá»ƒm lá»‡ch nhá» giá»¯a strategy, content, ads, website, sales, tracking vÃ  cÃ¡ch team review má»—i tuáº§n.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u khi nhÃ¬n má»™t team marketing Ä‘ang váº­n hÃ nh, ráº¥t khÃ³ chá»‰ ra má»™t lá»—i tháº­t lá»›n. Content váº«n Ä‘Äƒng. Ads váº«n cháº¡y. Website váº«n cÃ³ form. Sales váº«n gá»i khÃ¡ch. BÃ¡o cÃ¡o váº«n Ä‘Æ°á»£c gá»­i. NhÆ°ng káº¿t quáº£ cuá»‘i cÃ¹ng láº¡i khÃ´ng tÆ°Æ¡ng xá»©ng vá»›i lÆ°á»£ng viá»‡c cáº£ team Ä‘ang lÃ m.',
      },
      {
        type: 'paragraph',
        text: 'TÃ¬nh huá»‘ng nÃ y dá»… táº¡o cáº£m giÃ¡c pháº£i tÃ¬m má»™t ngÆ°á»i hoáº·c má»™t quyáº¿t Ä‘á»‹nh Ä‘á»ƒ giáº£i thÃ­ch váº¥n Ä‘á». Má»—i ngÆ°á»i cÃ³ thá»ƒ Ä‘ang hoÃ n thÃ nh pháº§n viá»‡c cá»§a mÃ¬nh, nhÆ°ng khi ghÃ©p láº¡i, dÃ²ng cháº£y tá»« lÃºc khÃ¡ch nhÃ¬n tháº¥y thÃ´ng Ä‘iá»‡p Ä‘áº¿n lÃºc táº¡o ra doanh thu bá»‹ gÃ£y á»Ÿ nhiá»u Ä‘oáº¡n nhá». Tá»•ng tÃ¡c Ä‘á»™ng khiáº¿n cáº£ há»‡ thá»‘ng cháº­m láº¡i.',
      },
      { type: 'heading', text: 'Váº¥n Ä‘á» khÃ´ng náº±m á»Ÿ tá»«ng máº£nh riÃªng láº»' },
      {
        type: 'paragraph',
        text: 'Má»™t team nhá» cÃ³ thá»ƒ Ä‘ang lÃ m Ä‘á»§ viá»‡c: content viáº¿t Ä‘á»§ bÃ i, design lÃ m Ä‘á»§ hÃ¬nh, ads tá»‘i Æ°u Ä‘á»§ campaign, IT dá»±ng Ä‘á»§ landing page, sales gá»i Ä‘á»§ lead, founder váº«n há»p vÃ  xem bÃ¡o cÃ¡o.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng lÃ m Ä‘á»§ viá»‡c khÃ´ng cÃ³ nghÄ©a lÃ  há»‡ thá»‘ng Ä‘ang cháº¡y Ä‘Ãºng. Má»™t bÃ i viáº¿t tá»‘t nhÆ°ng nÃ³i khÃ¡c hÆ°á»›ng vá»›i quáº£ng cÃ¡o váº«n táº¡o ra khoáº£ng lá»‡ch. Má»™t landing page Ä‘áº¹p nhÆ°ng khÃ´ng tiáº¿p ná»‘i Ä‘iá»u khÃ¡ch vá»«a click váº«n lÃ m máº¥t nhá»‹p. Marketing yáº¿u khÃ´ng chá»‰ vÃ¬ thiáº¿u task; nÃ³ thÆ°á»ng yáº¿u vÃ¬ thiáº¿u sá»± liÃªn tá»¥c giá»¯a cÃ¡c task.',
      },
      { type: 'visual', variant: 'system-breakpoints' },
      { type: 'heading', text: 'CÃ¡c Ä‘iá»ƒm Ä‘á»©t gÃ£y nhá» thÆ°á»ng gáº·p' },
      {
        type: 'paragraph',
        text: '1. Strategy khÃ´ng rÃµ. Team biáº¿t cáº§n cháº¡y campaign nhÆ°ng chÆ°a tráº£ lá»i tháº­t rÃµ campaign nÃ y bÃ¡n cho ai, muá»‘n khÃ¡ch nhá»› Ä‘iá»u gÃ¬ vÃ  sáº£n pháº©m hay dá»‹ch vá»¥ nÃ o cáº§n Ä‘Æ°á»£c Æ°u tiÃªn. Má»—i ngÆ°á»i vÃ¬ tháº¿ tá»± diá»…n giáº£i direction theo cÃ¡ch riÃªng.',
      },
      {
        type: 'paragraph',
        text: '2. Content vÃ  ads khÃ´ng cÃ¹ng thÃ´ng Ä‘iá»‡p. Social Ä‘ang xÃ¢y dá»±ng hÃ¬nh áº£nh chuyÃªn sÃ¢u, trong khi ads láº¡i nÃ³i chá»§ yáº¿u vá» giÃ¡; landing page sau Ä‘Ã³ chuyá»ƒn sang ká»ƒ vá» tÃ­nh nÄƒng. KhÃ¡ch pháº£i tá»± ná»‘i ba cÃ¢u chuyá»‡n khÃ´ng hoÃ n toÃ n giá»‘ng nhau.',
      },
      {
        type: 'paragraph',
        text: '3. Landing page khÃ´ng tiáº¿p ná»‘i lá»i há»©a tá»« ads. KhÃ¡ch click vÃ¬ má»™t váº¥n Ä‘á» cá»¥ thá»ƒ, nhÆ°ng trang Ä‘Ã­ch láº¡i má»Ÿ Ä‘áº§u báº±ng thÃ´ng tin doanh nghiá»‡p chung chung. Há» pháº£i tÃ¬m láº¡i lÃ½ do mÃ¬nh Ä‘Ã£ quan tÃ¢m trÆ°á»›c khi hiá»ƒu bÆ°á»›c tiáº¿p theo.',
      },
      {
        type: 'paragraph',
        text: '4. Form hoáº·c CTA táº¡o ma sÃ¡t. KhÃ¡ch muá»‘n há»i nhanh nhÆ°ng form yÃªu cáº§u quÃ¡ nhiá»u trÆ°á»ng, nÃºt hÃ nh Ä‘á»™ng khÃ´ng rÃµ hoáº·c kÃªnh liÃªn há»‡ khÃ´ng thuáº­n tiá»‡n trÃªn Ä‘iá»‡n thoáº¡i. Äoáº¡n chuyá»ƒn tá»« quan tÃ¢m sang hÃ nh Ä‘á»™ng Ä‘Ã²i há»i nhiá»u ná»— lá»±c hÆ¡n má»©c cáº§n thiáº¿t.',
      },
      {
        type: 'paragraph',
        text: '5. Sales khÃ´ng cÃ³ context. Sales nháº­n Ä‘Æ°á»£c tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i nhÆ°ng khÃ´ng biáº¿t lead Ä‘áº¿n tá»« campaign nÃ o, Ä‘Ã£ quan tÃ¢m thÃ´ng Ä‘iá»‡p gÃ¬ hoáº·c xem ná»™i dung nÃ o. Cuá»™c gá»i vÃ¬ tháº¿ pháº£i báº¯t Ä‘áº§u láº¡i tá»« Ä‘áº§u. KhÃ¡ch tháº¥y doanh nghiá»‡p thiáº¿u liá»n máº¡ch, cÃ²n sales máº¥t thá»i gian Ä‘oÃ¡n nhu cáº§u.',
      },
      {
        type: 'paragraph',
        text: '6. Tracking thiáº¿u hoáº·c sai. BÃ¡o cÃ¡o cho biáº¿t cÃ³ traffic vÃ  cÃ³ lead, nhÆ°ng khÃ´ng chá»‰ ra khÃ¡ch rÆ¡i á»Ÿ form, bÆ°á»›c tÆ° váº¥n hay lÃºc bÃ¡o giÃ¡. Team thÆ°á»ng sá»­a pháº§n dá»… nhÃ¬n nháº¥t, dÃ¹ Ä‘iá»ƒm ngháº½n tháº­t cÃ³ thá»ƒ náº±m á»Ÿ phÃ­a sau.',
      },
      {
        type: 'paragraph',
        text: '7. Review tuáº§n khÃ´ng táº¡o hÃ nh Ä‘á»™ng. Cuá»™c há»p cÃ³ Ä‘á»§ sá»‘, má»i ngÆ°á»i Ä‘á»u cáº­p nháº­t pháº§n viá»‡c, nhÆ°ng khÃ´ng ai chá»‘t tuáº§n sau cáº§n sá»­a Ä‘oáº¡n nÃ o trÆ°á»›c, ai phá»¥ trÃ¡ch vÃ  dáº¥u hiá»‡u nÃ o cho biáº¿t viá»‡c sá»­a cÃ³ tÃ¡c dá»¥ng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh tá»« má»™t campaign SME bá»‹ loÃ£ng thÃ´ng Ä‘iá»‡p.',
      },
      { type: 'heading', text: 'Má»™t dÃ²ng campaign bá»‹ gÃ£y trÃ´ng nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'HÃ£y hÃ¬nh dung má»™t doanh nghiá»‡p muá»‘n bÃ¡n giáº£i phÃ¡p á»Ÿ phÃ¢n khÃºc cao. Direction ban Ä‘áº§u nghe há»£p lÃ½, nhÆ°ng content láº¡i nÃ³i nhiá»u vá» khuyáº¿n mÃ£i. Ads vÃ¬ tháº¿ kÃ©o vá» nhÃ³m khÃ¡ch chá»§ yáº¿u há»i giÃ¡ ráº». Khi khÃ¡ch click, landing page táº­p trung vÃ o cÃ´ng nghá»‡ nhÆ°ng khÃ´ng giáº£i thÃ­ch lá»£i Ã­ch thá»±c táº¿ mÃ  há» vá»«a quan tÃ¢m.',
      },
      {
        type: 'paragraph',
        text: 'Sales nháº­n lead mÃ  khÃ´ng biáº¿t khÃ¡ch Ä‘áº¿n tá»« máº«u quáº£ng cÃ¡o nÃ o nÃªn dÃ¹ng má»™t ká»‹ch báº£n chung cho má»i cuá»™c gá»i. Tracking chá»‰ ghi nháº­n Ä‘Ã£ cÃ³ lead, khÃ´ng cho biáº¿t lead nÃ o bÆ°á»›c vÃ o tÆ° váº¥n. Äáº¿n cuá»‘i thÃ¡ng, founder nhÃ¬n káº¿t quáº£ vÃ  káº¿t luáº­n marketing chÆ°a hiá»‡u quáº£. Káº¿t luáº­n Ä‘Ã³ pháº£n Ã¡nh Ä‘Ãºng cáº£m giÃ¡c kinh doanh, nhÆ°ng chÆ°a chá»‰ ra Ä‘Æ°á»£c nguyÃªn nhÃ¢n Ä‘á»ƒ sá»­a.',
      },
      {
        type: 'paragraph',
        text: 'Trong vÃ­ dá»¥ nÃ y, khÃ´ng cÃ³ má»™t ngÆ°á»i nÃ o lÃ m sai toÃ n bá»™. Campaign chá»‰ thiáº¿u má»™t máº¡ch ná»‘i chung. Nhá»¯ng pháº§n lá»‡ch nhá» cá»™ng láº¡i thÃ nh khoáº£ng cÃ¡ch lá»›n giá»¯a hoáº¡t Ä‘á»™ng vÃ  káº¿t quáº£.',
      },
      { type: 'visual', variant: 'campaign-continuity-comparison' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video ngáº¯n giáº£i thÃ­ch concept â€œÄ‘á»©t gÃ£y nhá»â€ trong marketing system.',
      },
      { type: 'heading', text: 'Framework kiá»ƒm tra Ä‘iá»ƒm gÃ£y' },
      {
        type: 'paragraph',
        text: 'Khi káº¿t quáº£ cháº­m láº¡i, team khÃ´ng nháº¥t thiáº¿t pháº£i audit má»i thá»© cÃ¹ng lÃºc. CÃ³ thá»ƒ Ä‘i theo hÃ nh trÃ¬nh cá»§a khÃ¡ch vÃ  Ä‘áº·t nÄƒm cÃ¢u há»i liÃªn tiáº¿p, dá»±a trÃªn nhá»¯ng gÃ¬ khÃ¡ch thá»±c sá»± nhÃ¬n tháº¥y vÃ  team thá»±c sá»± nháº­n Ä‘Æ°á»£c.',
      },
      {
        type: 'list',
        items: [
          'KhÃ¡ch tháº¥y gÃ¬ Ä‘áº§u tiÃªn: má»™t váº¥n Ä‘á», má»™t Æ°u Ä‘Ã£i hay má»™t thÃ´ng Ä‘iá»‡p thÆ°Æ¡ng hiá»‡u?',
          'Há» hiá»ƒu lá»i há»©a gÃ¬ vÃ  lá»i há»©a Ä‘Ã³ cÃ³ Ä‘Ãºng vá»›i direction cá»§a campaign khÃ´ng?',
          'Khi click vÃ o, landing page cÃ³ tiáº¿p ná»‘i Ä‘Ãºng Ä‘iá»u vá»«a khiáº¿n há» quan tÃ¢m khÃ´ng?',
          'Khi khÃ¡ch Ä‘á»ƒ láº¡i thÃ´ng tin, sales cÃ³ Ä‘á»§ nguá»“n, ná»™i dung vÃ  nhu cáº§u Ä‘á»ƒ báº¯t Ä‘áº§u cuá»™c gá»i khÃ´ng?',
          'Khi review, team cÃ³ biáº¿t Ä‘iá»ƒm nÃ o cáº§n sá»­a trÆ°á»›c vÃ  ai chá»‹u trÃ¡ch nhiá»‡m cho bÆ°á»›c tiáº¿p theo khÃ´ng?',
        ],
      },
      {
        type: 'paragraph',
        text: 'NÄƒm cÃ¢u há»i nÃ y giÃºp biáº¿n má»™t nháº­n xÃ©t rá»™ng nhÆ° â€œmarketing khÃ´ng hiá»‡u quáº£â€ thÃ nh má»™t Ä‘iá»ƒm cáº§n kiá»ƒm tra cá»¥ thá»ƒ. CÃ³ lÃºc direction Ä‘Ã£ rÃµ nhÆ°ng landing page lá»‡ch. CÃ³ lÃºc toÃ n bá»™ pháº§n trÆ°á»›c hoáº¡t Ä‘á»™ng á»•n nhÆ°ng context bá»‹ máº¥t khi chuyá»ƒn lead sang sales. Tháº¥y Ä‘Ãºng Ä‘oáº¡n gÃ£y giÃºp team sá»­a Ã­t hÆ¡n mÃ  cÃ³ chá»§ Ä‘Ã­ch hÆ¡n.',
      },
      { type: 'visual', variant: 'breakpoint-diagnostic-checklist' },
      { type: 'heading', text: 'BÃ i há»c tÃ´i dáº§n nháº­n ra' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra má»™t chiáº¿n dá»‹ch tá»‘t khÃ´ng chá»‰ cáº§n Ã½ tÆ°á»Ÿng hay, creative Ä‘áº¹p hoáº·c ngÃ¢n sÃ¡ch Ä‘á»§. NÃ³ cáº§n sá»± liÃªn tá»¥c. Tá»« post, ads, landing page, script sales, tracking Ä‘áº¿n bÃ¡o cÃ¡o tuáº§n pháº£i cÃ¹ng nÃ³i má»™t cÃ¢u chuyá»‡n, dÃ¹ má»—i pháº§n dÃ¹ng má»™t cÃ¡ch thá»ƒ hiá»‡n khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'Khi cÃ¡c pháº§n khÃ´ng ná»‘i nhau, pháº£n xáº¡ phá»• biáº¿n lÃ  lÃ m thÃªm: thÃªm bÃ i viáº¿t, thÃªm máº«u ads, thÃªm Æ°u Ä‘Ã£i hoáº·c thÃªm ngÃ¢n sÃ¡ch. Nhá»¯ng viá»‡c Ä‘Ã³ táº¡o cáº£m giÃ¡c há»‡ thá»‘ng Ä‘ang Ä‘Æ°á»£c Ä‘áº©y nhanh. NhÆ°ng náº¿u direction gá»‘c chÆ°a rÃµ, lÃ m thÃªm chá»‰ táº¡o ra nhiá»u phiÃªn báº£n hÆ¡n cá»§a cÃ¹ng má»™t khoáº£ng lá»‡ch.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»u cÃ³ giÃ¡ trá»‹ hÆ¡n thÆ°á»ng lÃ  dá»«ng láº¡i á»Ÿ má»™t Ä‘oáº¡n Ä‘á»§ nhá», Ä‘á»‘i chiáº¿u lá»i há»©a trÆ°á»›c vÃ  sau Ä‘oáº¡n Ä‘Ã³, rá»“i thá»‘ng nháº¥t cÃ¡ch chuyá»ƒn thÃ´ng tin sang bÆ°á»›c káº¿ tiáº¿p. Team khÃ´ng cáº§n hoÃ n háº£o ngay. Team cáº§n nhÃ¬n cÃ¹ng má»™t dÃ²ng cháº£y vÃ  biáº¿t Ä‘iá»ƒm nÃ o Ä‘ang kÃ©o cháº­m nhá»¯ng pháº§n cÃ²n láº¡i.',
      },
      { type: 'heading', text: 'TÃ¬m Ä‘oáº¡n gÃ£y trÆ°á»›c khi thÃªm viá»‡c' },
      {
        type: 'paragraph',
        text: 'Khi marketing Ä‘ang cháº­m láº¡i, Ä‘á»«ng chá»‰ há»i â€œai lÃ m sai?â€. CÃ¢u há»i tá»‘t hÆ¡n lÃ : â€œdÃ²ng cháº£y tá»« khÃ¡ch hÃ ng Ä‘áº¿n doanh thu Ä‘ang gÃ£y á»Ÿ Ä‘oáº¡n nÃ o?â€. CÃ¢u há»i nÃ y khÃ´ng lÃ m nháº¹ trÃ¡ch nhiá»‡m cá»§a tá»«ng vai trÃ²; nÃ³ giÃºp má»i ngÆ°á»i Ä‘áº·t trÃ¡ch nhiá»‡m vÃ o Ä‘Ãºng má»‘i ná»‘i vÃ  cÃ¹ng sá»­a má»™t váº¥n Ä‘á» cÃ³ thá»ƒ quan sÃ¡t Ä‘Æ°á»£c.',
      },
    ],
    cta: 'Náº¿u team cá»§a báº¡n Ä‘ang lÃ m nhiá»u nhÆ°ng káº¿t quáº£ khÃ´ng tÆ°Æ¡ng xá»©ng, cÃ³ thá»ƒ váº¥n Ä‘á» khÃ´ng náº±m á»Ÿ viá»‡c thiáº¿u thÃªm task má»›i, mÃ  á»Ÿ viá»‡c cÃ¡c pháº§n hiá»‡n táº¡i chÆ°a Ä‘Æ°á»£c ná»‘i láº¡i vá»›i nhau.',
  },
  {
    title: 'Founder nÃªn nhÃ¬n dashboard marketing nhÆ° tháº¿ nÃ o?',
    slug: 'founder-nen-nhin-dashboard-marketing-nhu-the-nao',
    category: 'Dashboard & KPI',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-result-01.jpg",
                "alt": "PageSpeed performance report screenshot",
                "caption": "PageSpeed performance result",
                "width": 2048,
                "height": 1189,
                "fit": "contain"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/team-meeting/team-meeting-company-team-office-team-group-01.jpg",
                      "alt": "Office team group photo",
                      "caption": "Office team group moment",
                      "width": 1280,
                      "height": 960,
                      "fit": "cover",
                      "afterHeading": "Founder khÃ´ng cáº§n nhÃ¬n 30 chá»‰ sá»‘"
                }
          ]
    },
    excerpt:
      'Dashboard marketing khÃ´ng pháº£i Ä‘á»ƒ lÃ m Ä‘áº¹p bÃ¡o cÃ¡o. Vá»›i founder, dashboard tá»‘t pháº£i giÃºp nhÃ¬n ra tiá»n Ä‘ang Ä‘i Ä‘Ã¢u, kÃªnh nÃ o táº¡o ra cÆ¡ há»™i tháº­t vÃ  tuáº§n nÃ y cáº§n sá»­a Ä‘iá»ƒm nÃ o trÆ°á»›c.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u dashboard marketing nhÃ¬n ráº¥t Ä‘áº¹p. CÃ³ biá»ƒu Ä‘á»“, mÃ u sáº¯c, sá»‘ theo ngÃ y, theo tuáº§n, theo kÃªnh. NhÆ°ng khi founder há»i â€œváº­y tuáº§n nÃ y nÃªn lÃ m gÃ¬?â€ thÃ¬ cáº£ team láº¡i im láº·ng. Marketing má»Ÿ bÃ¡o cÃ¡o quáº£ng cÃ¡o, sales ká»ƒ vÃ i cuá»™c gá»i, cÃ²n ngÆ°á»i chá»§ doanh nghiá»‡p váº«n chÆ°a biáº¿t nÃªn giá»¯ ngÃ¢n sÃ¡ch hay sá»­a quy trÃ¬nh xá»­ lÃ½ lead.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» thÆ°á»ng khÃ´ng pháº£i thiáº¿u dá»¯ liá»‡u, mÃ  dá»¯ liá»‡u chÆ°a Ä‘Æ°á»£c sáº¯p xáº¿p quanh cÃ¢u há»i kinh doanh. Founder khÃ´ng cáº§n má»™t mÃ n hÃ¬nh Ä‘áº§y sá»‘. Founder cáº§n biáº¿t Ä‘iá»u gÃ¬ Ä‘ang tá»‘t, Ä‘iá»u gÃ¬ Ä‘ang xáº¥u, vÃ¬ sao vÃ  tuáº§n sau nÃªn sá»­a gÃ¬ trÆ°á»›c.',
      },
      { type: 'heading', text: 'Dashboard Ä‘áº¹p chÆ°a cháº¯c lÃ  dashboard tá»‘t' },
      {
        type: 'paragraph',
        text: 'Sá»‘ lÆ°á»£ng biá»ƒu Ä‘á»“ khÃ´ng quyáº¿t Ä‘á»‹nh cháº¥t lÆ°á»£ng dashboard. Má»™t bÃ¡o cÃ¡o cÃ³ thá»ƒ ráº¥t chá»‰n chu nhÆ°ng chá»‰ ghi nháº­n â€œÄ‘Ã£ xáº£y ra gÃ¬â€: quáº£ng cÃ¡o tiÃªu bao nhiÃªu, cÃ³ bao nhiÃªu lÆ°á»£t nháº¥p, giÃ¡ má»™t lead lÃ  bao nhiÃªu. Nhá»¯ng sá»‘ Ä‘Ã³ há»¯u Ã­ch nhÆ°ng chÆ°a Ä‘á»§ Ä‘á»ƒ dáº«n tá»›i quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Sau khi nhÃ¬n dashboard, ngÆ°á»i ra quyáº¿t Ä‘á»‹nh cáº§n tráº£ lá»i: cÃ¡i gÃ¬ Ä‘ang tá»‘t, cÃ¡i gÃ¬ Ä‘ang xáº¥u, vÃ¬ sao vÃ  tuáº§n sau nÃªn sá»­a Ä‘iá»ƒm nÃ o trÆ°á»›c? Náº¿u cuá»™c há»p chá»‰ káº¿t thÃºc báº±ng viá»‡c â€œtiáº¿p tá»¥c theo dÃµiâ€, dashboard má»›i lÃ m nhiá»‡m vá»¥ lÆ°u sá»‘. Dashboard tá»‘t pháº£i giÃºp team chuyá»ƒn tá»« ghi nháº­n sang hÃ nh Ä‘á»™ng.',
      },
      { type: 'visual', variant: 'dashboard-comparison' },
      { type: 'heading', text: 'Founder khÃ´ng cáº§n nhÃ¬n 30 chá»‰ sá»‘' },
      {
        type: 'paragraph',
        text: 'Founder khÃ´ng cáº§n Ä‘á»c dashboard giá»‘ng má»™t performance marketer. Táº§n suáº¥t, giÃ¡ lÆ°á»£t nháº¥p hay tá»· lá»‡ xem video cáº§n cho ngÆ°á»i trá»±c tiáº¿p tá»‘i Æ°u kÃªnh. á»ž táº§ng quáº£n trá»‹, cÃ¢u há»i cáº§n sÃ¡t vá»›i dÃ²ng tiá»n vÃ  cÃ¡ch há»‡ thá»‘ng váº­n hÃ nh.',
      },
      {
        type: 'list',
        items: [
          'Tiá»n marketing Ä‘ang Ä‘i Ä‘Ã¢u vÃ  cÃ³ cháº¡y Ä‘Ãºng nhá»‹p ngÃ¢n sÃ¡ch khÃ´ng?',
          'KÃªnh nÃ o táº¡o lead, cÆ¡ há»™i bÃ¡n hÃ ng hoáº·c doanh thu?',
          'Chi phÃ­ cÃ³ tÄƒng báº¥t thÆ°á»ng khÃ´ng vÃ  tÄƒng á»Ÿ Ä‘oáº¡n nÃ o?',
          'Lead cÃ³ Ä‘Ãºng nhu cáº§u vÃ  Ä‘Ã£ Ä‘Æ°á»£c xá»­ lÃ½ chÆ°a?',
          'Funnel Ä‘ang rÆ¡i nhiá»u nháº¥t á»Ÿ bÆ°á»›c nÃ o?',
          'Tuáº§n sau nÃªn Æ°u tiÃªn sá»­a Ä‘iá»ƒm nÃ o?',
        ],
      },
      {
        type: 'paragraph',
        text: 'QuÃ¡ nhiá»u chá»‰ sá»‘ dá»… kÃ©o cuá»™c há»p vÃ o chi tiáº¿t ká»¹ thuáº­t. NhÃ¬n Ä‘Ãºng nhÃ³m sá»‘ lÃ m cÃ¢u há»i rÃµ hÆ¡n. Team váº«n cÃ³ thá»ƒ má»Ÿ bÃ¡o cÃ¡o sÃ¢u, nhÆ°ng sau khi Ä‘Ã£ xÃ¡c Ä‘á»‹nh váº¥n Ä‘á» quáº£n trá»‹ cáº§n giáº£i quyáº¿t.',
      },
      { type: 'heading', text: 'Má»™t dashboard founder nÃªn cÃ³ 5 nhÃ³m sá»‘' },
      {
        type: 'paragraph',
        text: '1. Spend & Budget. ÄÃ£ tiÃªu bao nhiÃªu vÃ  so vá»›i káº¿ hoáº¡ch tuáº§n hoáº·c thÃ¡ng nhÆ° tháº¿ nÃ o? NhÃ³m nÃ y cho biáº¿t tiá»n Ä‘ang Ä‘Æ°á»£c dÃ¹ng ra sao, cÃ³ vÆ°á»£t nhá»‹p khiáº¿n cuá»‘i ká»³ thiáº¿u ngÃ¢n sÃ¡ch hay cháº¡y dÆ°á»›i nhá»‹p khiáº¿n má»¥c tiÃªu Ä‘áº§u vÃ o khÃ³ Ä‘áº¡t.',
      },
      {
        type: 'paragraph',
        text: '2. Lead & Source. CÃ³ bao nhiÃªu lead, lead Ä‘áº¿n tá»« kÃªnh nÃ o vÃ  nguá»“n nÃ o Ä‘ang tÄƒng hoáº·c giáº£m? ÄÃ¢y lÃ  pháº§n giÃºp founder nhÃ¬n tháº¥y Ä‘áº§u vÃ o cá»§a há»‡ thá»‘ng thay vÃ¬ chá»‰ tháº¥y má»™t con sá»‘ tá»•ng Ä‘Ã£ bá»‹ trá»™n tá»« nhiá»u nguá»“n.',
      },
      {
        type: 'paragraph',
        text: '3. Lead Quality. Bao nhiÃªu lead Ä‘á»§ Ä‘iá»u kiá»‡n; bao nhiÃªu lead sai nhu cáº§u, sai khu vá»±c hoáº·c khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c? Náº¿u thiáº¿u lá»›p nÃ y, team ráº¥t dá»… tá»‘i Æ°u theo sá»‘ lÆ°á»£ng lead ráº» dÃ¹ pháº§n lá»›n khÃ´ng táº¡o ra giÃ¡ trá»‹ cho sales.',
      },
      {
        type: 'paragraph',
        text: '4. Sales Progress. Bao nhiÃªu lead Ä‘Ã£ Ä‘Æ°á»£c gá»i, tÆ° váº¥n, bÃ¡o giÃ¡ vÃ  bao nhiÃªu cÆ¡ há»™i cÃ²n má»Ÿ? NhÃ³m nÃ y giÃºp phÃ¢n biá»‡t váº¥n Ä‘á» náº±m á»Ÿ marketing hay Ä‘oáº¡n xá»­ lÃ½ sau lead. Äáº§u vÃ o tá»‘t váº«n cÃ³ thá»ƒ máº¥t náº¿u pháº£n há»“i cháº­m.',
      },
      {
        type: 'paragraph',
        text: '5. Revenue / Outcome. CÃ³ bao nhiÃªu Ä‘Æ¡n, cÆ¡ há»™i hoáº·c doanh thu Ä‘áº¿n tá»« marketing; kÃªnh nÃ o táº¡o outcome tá»‘t hÆ¡n? Dashboard cáº§n tiáº¿n dáº§n tá»›i viá»‡c ná»‘i marketing vá»›i káº¿t quáº£ kinh doanh, thay vÃ¬ dá»«ng á»Ÿ traffic vÃ  CPL.',
      },
      { type: 'visual', variant: 'founder-dashboard-mockup' },
      { type: 'heading', text: 'CÃ¡ch Ä‘á»c dashboard theo thá»© tá»±' },
      {
        type: 'paragraph',
        text: 'Thá»© tá»± Ä‘Æ¡n giáº£n Ä‘á»ƒ Ä‘á»c dashboard lÃ : Spend â†’ Lead â†’ Qualified Lead â†’ Sales Action â†’ Revenue. Äá»«ng nhÃ¬n doanh thu rá»“i káº¿t luáº­n ads sai. HÃ£y láº§n qua tá»«ng táº§ng Ä‘á»ƒ biáº¿t váº¥n Ä‘á» náº±m á»Ÿ Ä‘áº§u vÃ o, cháº¥t lÆ°á»£ng lead, follow-up hay kháº£ nÄƒng chá»‘t.',
      },
      {
        type: 'paragraph',
        text: '1. Spend: tuáº§n nÃ y tiá»n cÃ³ Ä‘Æ°á»£c dÃ¹ng Ä‘Ãºng nhá»‹p khÃ´ng? Náº¿u chi tiÃªu tháº¥p hÆ¡n káº¿ hoáº¡ch, cáº§n biáº¿t do chá»§ Ä‘á»™ng giá»¯ ngÃ¢n sÃ¡ch hay campaign khÃ´ng phÃ¢n phá»‘i Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: '2. Lead: sá»‘ tiá»n Ä‘Ã³ táº¡o ra bao nhiÃªu tÃ­n hiá»‡u quan tÃ¢m vÃ  tÃ­n hiá»‡u Ä‘áº¿n tá»« nguá»“n nÃ o? ÄÃ¢y má»›i lÃ  Ä‘áº§u vÃ o, chÆ°a pháº£i káº¿t quáº£ cuá»‘i.',
      },
      {
        type: 'paragraph',
        text: '3. Qualified Lead: nhá»¯ng tÃ­n hiá»‡u Ä‘Ã³ cÃ³ Ä‘Ãºng nhu cáº§u khÃ´ng? Lead tÄƒng nhÆ°ng tá»· lá»‡ phÃ¹ há»£p giáº£m thÆ°á»ng cho tháº¥y thÃ´ng Ä‘iá»‡p hoáº·c nguá»“n traffic Ä‘ang thu hÃºt sai ká»³ vá»ng.',
      },
      {
        type: 'paragraph',
        text: '4. Sales Action: lead Ä‘Ã£ Ä‘Æ°á»£c xá»­ lÃ½ chÆ°a, nhanh hay cháº­m, Ä‘Ã£ Ä‘i Ä‘áº¿n tÆ° váº¥n hoáº·c bÃ¡o giÃ¡ chÆ°a? Náº¿u lead phÃ¹ há»£p nhÆ°ng Ä‘á»©ng yÃªn á»Ÿ Ä‘Ã¢y, tÄƒng thÃªm quáº£ng cÃ¡o chÆ°a cháº¯c giáº£i quyáº¿t Ä‘Æ°á»£c váº¥n Ä‘á».',
      },
      {
        type: 'paragraph',
        text: '5. Revenue: cuá»‘i cÃ¹ng cÃ³ cÆ¡ há»™i hoáº·c doanh thu tháº­t khÃ´ng? ÄÃ¢y lÃ  táº§ng xÃ¡c nháº­n dÃ²ng cháº£y cÃ³ táº¡o giÃ¡ trá»‹, nhÆ°ng lÃ  káº¿t quáº£ cá»§a táº¥t cáº£ bÆ°á»›c phÃ­a trÆ°á»›c, khÃ´ng pháº£i báº±ng chá»©ng Ä‘á»ƒ quy lá»—i ngay cho má»™t kÃªnh.',
      },
      { type: 'visual', variant: 'dashboard-decision-flow' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh dashboard giÃºp phÃ¡t hiá»‡n váº¥n Ä‘á» náº±m á»Ÿ sales follow-up chá»© khÃ´ng pháº£i ads.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i dashboard thÆ°á»ng gáº·p trong SME' },
      {
        type: 'list',
        items: [
          'Chá»‰ cÃ³ sá»‘ ads, khÃ´ng cÃ³ sá»‘ sales nÃªn khÃ´ng biáº¿t lead Ä‘Ã£ Ä‘i tiáº¿p tá»›i Ä‘Ã¢u.',
          'CÃ³ lead nhÆ°ng khÃ´ng lÆ°u nguá»“n, khiáº¿n team khÃ´ng biáº¿t kÃªnh nÃ o táº¡o Ä‘áº§u vÃ o tá»‘t.',
          'CÃ³ CPL nhÆ°ng khÃ´ng cÃ³ cháº¥t lÆ°á»£ng lead, nÃªn sá»‘ ráº» dá»… Ä‘Æ°á»£c hiá»ƒu nháº§m lÃ  hiá»‡u quáº£.',
          'CÃ³ doanh thu nhÆ°ng khÃ´ng ná»‘i Ä‘Æ°á»£c vá» campaign, nÃªn marketing thiáº¿u tÃ­n hiá»‡u Ä‘á»ƒ tá»‘i Æ°u.',
          'BÃ¡o cÃ¡o tuáº§n chá»‰ ghi nháº­n diá»…n biáº¿n, khÃ´ng chá»‘t hÃ nh Ä‘á»™ng, ngÆ°á»i phá»¥ trÃ¡ch vÃ  thá»i Ä‘iá»ƒm xem láº¡i.',
          'Dashboard quÃ¡ nhiá»u chá»‰ sá»‘ khiáº¿n khÃ´ng ai Ä‘á»c ká»¹, cÃ²n sá»‘ quan trá»ng bá»‹ chÃ¬m.',
          'Má»—i tuáº§n Ä‘á»•i má»™t format report nÃªn team khÃ´ng nhÃ¬n Ä‘Æ°á»£c xu hÆ°á»›ng Ä‘á»§ dÃ i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Khi dashboard khÃ´ng á»•n, cuá»™c há»p thÆ°á»ng quay láº¡i cáº£m tÃ­nh. NgÆ°á»i cháº¡y ads nÃ³i theo sá»‘ ads, sales nÃ³i theo nhá»¯ng cuá»™c gá»i, founder nÃ³i theo doanh thu. Má»—i gÃ³c nhÃ¬n Ä‘á»u cÃ³ pháº§n Ä‘Ãºng, nhÆ°ng cáº£ team thiáº¿u má»™t há»‡ quy chiáº¿u chung Ä‘á»ƒ tÃ¬m Ä‘oáº¡n ngháº½n.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough má»™t dashboard marketing Ä‘Æ¡n giáº£n.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra dashboard khÃ´ng thay tháº¿ tÆ° duy quáº£n trá»‹. NÃ³ chá»‰ giÃºp cuá»™c há»p bá»›t cáº£m tÃ­nh hÆ¡n. Thay vÃ¬ há»i â€œads á»•n khÃ´ng?â€, founder cÃ³ thá»ƒ há»i: tuáº§n nÃ y lead giáº£m vÃ¬ traffic giáº£m, form giáº£m hay sales chÆ°a xá»­ lÃ½ ká»‹p? CPL tÄƒng vÃ¬ chi phÃ­ media tÄƒng hay vÃ¬ thÃ´ng Ä‘iá»‡p Ä‘ang yáº¿u?',
      },
      {
        type: 'paragraph',
        text: 'Lead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng cÃ³ thá»ƒ do sai tá»‡p hoáº·c follow-up chÆ°a Ä‘á»u. KÃªnh táº¡o nhiá»u form chÆ°a cháº¯c Ä‘Ã¡ng giá»¯ báº±ng kÃªnh táº¡o Ã­t form nhÆ°ng Ä‘Æ°a Ä‘Æ°á»£c khÃ¡ch vÃ o tÆ° váº¥n. Dashboard khÃ´ng tráº£ lá»i thay team, nhÆ°ng buá»™c cÃ¡c giáº£ thuyáº¿t dá»±a trÃªn cÃ¹ng má»™t dÃ²ng dá»¯ liá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘t giÃºp founder há»i cÃ¢u há»i Ä‘Ãºng hÆ¡n. CÃ¢u há»i Ä‘Ãºng kÃ©o team tÃ¬m nguyÃªn nhÃ¢n Ä‘Ãºng; nguyÃªn nhÃ¢n Ä‘Ãºng má»›i dáº«n tá»›i hÃ nh Ä‘á»™ng Ä‘Ãºng. Buá»•i review khi Ä‘Ã³ lÃ  lÃºc cáº£ team cÃ¹ng chá»n má»™t Ä‘áº¿n ba Ä‘iá»ƒm cáº§n sá»­a.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u tá»« dÃ²ng cháº£y, khÃ´ng báº¯t Ä‘áº§u tá»« biá»ƒu Ä‘á»“' },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘t khÃ´ng cáº§n phá»©c táº¡p ngay tá»« Ä‘áº§u. Má»™t báº£ng theo tuáº§n, vÃ i Ä‘á»‹nh nghÄ©a thá»‘ng nháº¥t vÃ  dÃ²ng ná»‘i tá»« chi phÃ­ Ä‘áº¿n lead, cÆ¡ há»™i rá»“i doanh thu cÃ³ thá»ƒ há»¯u Ã­ch hÆ¡n má»™t mÃ n hÃ¬nh nhiá»u chart. Äiá»u quan trá»ng lÃ  founder nhÃ¬n rÃµ tiá»n Ä‘i Ä‘Ã¢u, há»‡ thá»‘ng rÆ¡i á»Ÿ Ä‘Ã¢u vÃ  quyáº¿t Ä‘á»‹nh tiáº¿p theo lÃ  gÃ¬.',
      },
    ],
    cta: 'Náº¿u dashboard hiá»‡n táº¡i chá»‰ cho báº¡n biáº¿t â€œÄ‘Ã£ xáº£y ra gÃ¬â€ nhÆ°ng khÃ´ng giÃºp biáº¿t â€œtuáº§n sau nÃªn sá»­a gÃ¬â€, cÃ³ láº½ dashboard Ä‘Ã³ cáº§n Ä‘Æ°á»£c thiáº¿t káº¿ láº¡i tá»« gÃ³c nhÃ¬n ra quyáº¿t Ä‘á»‹nh.',
  },
  {
    title: 'Marketing team nhá» nÃªn Ä‘o KPI gÃ¬ má»—i tuáº§n?',
    slug: 'marketing-team-nho-nen-do-kpi-gi-moi-tuan',
    category: 'Dashboard & KPI',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-diagnostics-01.jpg",
                "alt": "PageSpeed Insights diagnostics screenshot",
                "caption": "PageSpeed diagnostics",
                "width": 2880,
                "height": 1466,
                "fit": "contain"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-mobile-result-01.jpg",
                      "alt": "PageSpeed Insights mobile performance screenshot",
                      "caption": "PageSpeed mobile performance result",
                      "width": 2880,
                      "height": 1458,
                      "fit": "contain",
                      "afterHeading": "KPI tuáº§n nÃªn tráº£ lá»i 5 cÃ¢u há»i"
                }
          ]
    },
    excerpt:
      'Team marketing nhá» khÃ´ng cáº§n theo dÃµi quÃ¡ nhiá»u chá»‰ sá»‘. Äiá»u há» cáº§n lÃ  má»™t bá»™ KPI Ä‘á»§ gá»n Ä‘á»ƒ biáº¿t tuáº§n nÃ y traffic, lead, cháº¥t lÆ°á»£ng, sales follow-up vÃ  outcome Ä‘ang thay Ä‘á»•i nhÆ° tháº¿ nÃ o.',
    content: [
      {
        type: 'paragraph',
        text: 'á»ž nhiá»u team marketing nhá», má»i ngÆ°á»i váº«n lÃ m ráº¥t nhiá»u viá»‡c má»—i tuáº§n: Ä‘Äƒng bÃ i, cháº¡y ads, lÃ m landing page, quay video, gá»­i brief, tráº£ lá»i comment. NhÆ°ng khi há»i tuáº§n nÃ y marketing tá»‘t hÆ¡n hay xáº¥u hÆ¡n tuáº§n trÆ°á»›c á»Ÿ Ä‘iá»ƒm nÃ o, cÃ¢u tráº£ lá»i láº¡i khÃ¡ mÆ¡ há»“.',
      },
      {
        type: 'paragraph',
        text: 'Team nhá»› mÃ¬nh Ä‘Ã£ hoÃ n thÃ nh bao nhiÃªu viá»‡c, nhÆ°ng chÆ°a cháº¯c viá»‡c nÃ o táº¡o chuyá»ƒn biáº¿n. Báº­n khÃ´ng Ä‘á»“ng nghÄ©a vá»›i tiáº¿n bá»™. Thiáº¿u KPI tuáº§n, cáº£ team dá»… Ä‘Ã¡nh giÃ¡ theo cáº£m giÃ¡c hoáº·c vÃ i pháº£n há»“i gáº§n nháº¥t tá»« sales.',
      },
      {
        type: 'paragraph',
        text: 'KPI tuáº§n khÃ´ng nÃªn lÃ  cÃ´ng cá»¥ Ä‘á»ƒ báº¯t lá»—i. NÃ³ lÃ  cÃ¡ch phÃ¡t hiá»‡n sá»›m má»™t Ä‘oáº¡n Ä‘ang cháº­m láº¡i, trÆ°á»›c khi váº¥n Ä‘á» kÃ©o dÃ i tá»›i cuá»‘i thÃ¡ng. Má»¥c tiÃªu khÃ´ng pháº£i cÃ³ báº£ng sá»‘ hoÃ n háº£o, mÃ  lÃ  biáº¿t tuáº§n sau nÃªn sá»­a Ä‘iá»ƒm nÃ o trÆ°á»›c.',
      },
      { type: 'heading', text: 'Team nhá» khÃ´ng cáº§n 30 chá»‰ sá»‘' },
      {
        type: 'paragraph',
        text: 'QuÃ¡ nhiá»u chá»‰ sá»‘ thÆ°á»ng khiáº¿n team bÃ¡o cÃ¡o nhiá»u hÆ¡n nhÆ°ng hiá»ƒu Ã­t hÆ¡n. NgÆ°á»i cáº­p nháº­t máº¥t thá»i gian gom sá»‘; ngÆ°á»i Ä‘á»c lÆ°á»›t qua nhiá»u biá»ƒu Ä‘á»“; cuá»™c há»p cuá»‘i cÃ¹ng váº«n quay láº¡i cÃ¢u há»i: â€œváº­y giá» lÃ m gÃ¬?â€.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i team 2â€“5 ngÆ°á»i, bá»™ KPI nÃªn Ä‘á»§ gá»n Ä‘á»ƒ cáº­p nháº­t Ä‘á»u vÃ  cÃ¹ng nhÃ¬n má»—i tuáº§n. NÃ³ khÃ´ng cáº§n bao phá»§ má»i hoáº¡t Ä‘á»™ng, chá»‰ cáº§n cho biáº¿t Ä‘áº§u vÃ o tÄƒng hay giáº£m, lead cÃ³ Ä‘Ãºng khÃ´ng, sales xá»­ lÃ½ tá»›i Ä‘Ã¢u vÃ  Ä‘Ã£ cÃ³ outcome nÃ o chÆ°a.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t bá»™ sá»‘ Ä‘Æ¡n giáº£n Ä‘Æ°á»£c xem Ä‘á»u há»¯u Ã­ch hÆ¡n dashboard chi tiáº¿t chá»‰ má»Ÿ cuá»‘i thÃ¡ng. Sá»± Ä‘á»u Ä‘áº·n giÃºp team tháº¥y xu hÆ°á»›ng vÃ  nháº­n ra thay Ä‘á»•i nÃ o cáº§n hÃ nh Ä‘á»™ng.',
      },
      { type: 'visual', variant: 'weekly-kpi-groups' },
      { type: 'heading', text: 'KPI tuáº§n nÃªn tráº£ lá»i 5 cÃ¢u há»i' },
      {
        type: 'list',
        items: [
          'Tuáº§n nÃ y mÃ¬nh kÃ©o Ä‘Æ°á»£c bao nhiÃªu ngÆ°á»i Ä‘Ãºng vÃ o há»‡ thá»‘ng?',
          'Bao nhiÃªu ngÆ°á»i Ä‘á»ƒ láº¡i tÃ­n hiá»‡u quan tÃ¢m?',
          'Nhá»¯ng lead Ä‘Ã³ cÃ³ cháº¥t lÆ°á»£ng khÃ´ng?',
          'Sales Ä‘Ã£ xá»­ lÃ½ tá»›i Ä‘Ã¢u?',
          'CÃ³ outcome kinh doanh nÃ o khÃ´ng?',
        ],
      },
      {
        type: 'paragraph',
        text: 'NÄƒm cÃ¢u há»i ná»‘i marketing vá»›i pháº§n viá»‡c phÃ­a sau. Traffic cho tháº¥y Ä‘áº§u vÃ o, lead cho tháº¥y má»©c quan tÃ¢m, cháº¥t lÆ°á»£ng cho biáº¿t Ä‘áº§u vÃ o cÃ³ Ä‘Ãºng, follow-up cho biáº¿t tÃ­n hiá»‡u Ä‘Ã£ Ä‘Æ°á»£c xá»­ lÃ½, cÃ²n outcome cho tháº¥y há»‡ thá»‘ng cÃ³ tiáº¿n gáº§n káº¿t quáº£ kinh doanh.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u KPI khÃ´ng giÃºp tráº£ lá»i nhá»¯ng cÃ¢u há»i Ä‘Ã³, dashboard cÃ³ thá»ƒ Ä‘áº¹p nhÆ°ng chÆ°a giÃºp team váº­n hÃ nh tá»‘t hÆ¡n. Nhá»¯ng chá»‰ sá»‘ chuyÃªn sÃ¢u váº«n cÃ³ chá»— dÃ¹ng, nhÆ°ng nÃªn Ä‘Æ°á»£c má»Ÿ ra Ä‘á»ƒ giáº£i thÃ­ch má»™t váº¥n Ä‘á» Ä‘Ã£ tháº¥y, khÃ´ng pháº£i Ä‘á»ƒ lÃ m bÃ¡o cÃ¡o dÃ i thÃªm.',
      },
      { type: 'heading', text: 'Bá»™ KPI tá»‘i thiá»ƒu cho marketing team nhá»' },
      {
        type: 'paragraph',
        text: '1. Traffic. CÃ³ thá»ƒ theo dÃµi sessions hoáº·c users trÃªn website, click tá»« ads, social, search, top nguá»“n traffic vÃ  top landing page náº¿u cÃ³. NhÃ³m nÃ y cho biáº¿t Ä‘áº§u vÃ o cá»§a há»‡ thá»‘ng tÄƒng hay giáº£m. Khi traffic giáº£m máº¡nh, chÆ°a nÃªn vá»™i káº¿t luáº­n content, landing page hay sales Ä‘á»u cÃ³ váº¥n Ä‘á».',
      },
      {
        type: 'paragraph',
        text: '2. Lead / Contact. Theo dÃµi form submit, click Hotline, Zalo, Messenger, inbox hoáº·c comment cÃ³ nhu cáº§u vÃ  sá»‘ cuá»™c gá»i náº¿u tracking Ä‘Æ°á»£c. NhÃ³m nÃ y cho biáº¿t traffic cÃ³ táº¡o tÃ­n hiá»‡u hay khÃ´ng. Náº¿u traffic á»•n nhÆ°ng lead giáº£m, hÃ£y xem láº¡i thÃ´ng Ä‘iá»‡p, CTA, landing page hoáº·c Æ°u Ä‘Ã£i.',
      },
      {
        type: 'paragraph',
        text: '3. Lead Quality. Ghi nháº­n lead Ä‘Ãºng nhu cáº§u, sai nhu cáº§u, khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c, sai khu vá»±c hoáº·c phÃ¢n khÃºc vÃ  lead cáº§n follow-up láº¡i. ÄÃ¢y lÃ  lá»›p giÃºp marketing khÃ´ng chá»‰ tá»‘i Æ°u theo sá»‘ lÆ°á»£ng. Lead nhiá»u nhÆ°ng sai tá»‡p lÃ m sales báº­n hÆ¡n mÃ  doanh thu chÆ°a cháº¯c tiáº¿n lÃªn.',
      },
      {
        type: 'paragraph',
        text: '4. Sales Follow-up. Theo dÃµi lead Ä‘Ã£ gá»i, chÆ°a gá»i, Ä‘Ã£ tÆ° váº¥n, Ä‘Ã£ bÃ¡o giÃ¡ vÃ  Ä‘ang chá» pháº£n há»“i. NhÃ³m nÃ y giÃºp team biáº¿t váº¥n Ä‘á» náº±m á»Ÿ marketing hay Ä‘oáº¡n xá»­ lÃ½ sau lead. Náº¿u lead phÃ¹ há»£p nhÆ°ng tá»“n Ä‘á»ng chÆ°a Ä‘Æ°á»£c gá»i, tÄƒng ngÃ¢n sÃ¡ch ads cÃ³ thá»ƒ chá»‰ lÃ m backlog lá»›n hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: '5. Outcome. Theo dÃµi cÆ¡ há»™i bÃ¡n hÃ ng, Ä‘Æ¡n hÃ ng, doanh thu Æ°á»›c tÃ­nh náº¿u cÃ³, tá»· lá»‡ tá»« lead sang cÆ¡ há»™i vÃ  kÃªnh táº¡o outcome tá»‘t hÆ¡n. ChÆ°a cáº§n ná»‘i toÃ n bá»™ doanh thu ngay, nhÆ°ng cáº§n ghi nháº­n outcome Ä‘á»ƒ trÃ¡nh máº¯c káº¹t á»Ÿ nhá»¯ng chá»‰ sá»‘ Ä‘áº¹p mÃ  xa káº¿t quáº£.',
      },
      { type: 'visual', variant: 'weekly-kpi-scorecard' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n link táº£i template Google Sheet KPI weekly cho team nhá».',
      },
      { type: 'heading', text: 'CÃ¡ch há»p KPI má»—i tuáº§n' },
      {
        type: 'paragraph',
        text: 'Cuá»™c há»p KPI khÃ´ng cáº§n dÃ i. Má»™t nhá»‹p 50 phÃºt cÃ³ thá»ƒ báº¯t Ä‘áº§u báº±ng 10 phÃºt nhÃ¬n sá»‘ tá»•ng, 15 phÃºt tÃ¬m Ä‘iá»ƒm tÄƒng hoáº·c giáº£m báº¥t thÆ°á»ng, 15 phÃºt phÃ¢n tÃ­ch nguyÃªn nhÃ¢n cÃ³ kháº£ nÄƒng nháº¥t vÃ  10 phÃºt chá»‘t viá»‡c cho tuáº§n sau.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y Ä‘i qua nÄƒm nhÃ³m theo cÃ¹ng má»™t thá»© tá»±. Khi tháº¥y báº¥t thÆ°á»ng, team má»›i má»Ÿ sÃ¢u hÆ¡n: traffic giáº£m á»Ÿ nguá»“n nÃ o, lead giáº£m á»Ÿ landing page nÃ o, cháº¥t lÆ°á»£ng giáº£m tá»« thÃ´ng Ä‘iá»‡p nÃ o hay sales cÃ²n lead chÆ°a xá»­ lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'Pháº§n quan trá»ng nháº¥t lÃ  chá»‘t hÃ nh Ä‘á»™ng. Chá»‰ chá»n má»™t Ä‘áº¿n ba viá»‡c, ghi rÃµ ngÆ°á»i phá»¥ trÃ¡ch vÃ  dáº¥u hiá»‡u sáº½ xem láº¡i vÃ o tuáº§n sau. Cuá»™c há»p tá»‘t khÃ´ng káº¿t thÃºc báº±ng má»™t nháº­n xÃ©t chung nhÆ° â€œcáº§n cáº£i thiá»‡n cháº¥t lÆ°á»£ngâ€, mÃ  báº±ng má»™t thay Ä‘á»•i Ä‘á»§ cá»¥ thá»ƒ Ä‘á»ƒ thá»±c hiá»‡n.',
      },
      { type: 'visual', variant: 'weekly-review-rhythm' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video hÆ°á»›ng dáº«n Ä‘á»c KPI tuáº§n trong 5 phÃºt.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi Ä‘o KPI' },
      {
        type: 'list',
        items: [
          'Chá»‰ Ä‘o chá»‰ sá»‘ ads vÃ  bá» qua sá»‘ sales, nÃªn khÃ´ng biáº¿t lead Ä‘Ã£ Ä‘i tiáº¿p hay chÆ°a.',
          'Chá»‰ nhÃ¬n CPL mÃ  khÃ´ng ghi nháº­n cháº¥t lÆ°á»£ng lead, khiáº¿n team dá»… tá»‘i Æ°u theo Ä‘áº§u vÃ o ráº».',
          'BÃ¡o cÃ¡o nhiá»u sá»‘ nhÆ°ng khÃ´ng chá»‘t hÃ nh Ä‘á»™ng, nÃªn tuáº§n sau má»i viá»‡c tiáº¿p tá»¥c nhÆ° cÅ©.',
          'Má»—i tuáº§n Ä‘á»•i cÃ¡ch Ä‘o má»™t láº§n, lÃ m xu hÆ°á»›ng máº¥t tÃ­nh so sÃ¡nh.',
          'KhÃ´ng cÃ³ Ä‘á»‹nh nghÄ©a chung vá» lead tá»‘t, khiáº¿n marketing vÃ  sales Ä‘Ã¡nh giÃ¡ theo hai cÃ¡ch.',
          'KhÃ´ng ghi chÃº nguyÃªn nhÃ¢n khi sá»‘ tÄƒng hoáº·c giáº£m, nÃªn vÃ i tuáº§n sau khÃ´ng nhá»› Ä‘iá»u gÃ¬ Ä‘Ã£ thay Ä‘á»•i.',
          'Data Ä‘Æ°á»£c cáº­p nháº­t lÃºc cÃ³ lÃºc khÃ´ng, Ä‘áº¿n cuá»‘i thÃ¡ng khÃ´ng ai cháº¯c nÃªn tin con sá»‘ nÃ o.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KPI khÃ´ng Ä‘á»u thÃ¬ khÃ³ táº¡o insight. Má»™t dashboard Ä‘áº¹p nhÆ°ng dá»¯ liá»‡u cáº­p nháº­t tháº¥t thÆ°á»ng váº«n buá»™c founder ra quyáº¿t Ä‘á»‹nh báº±ng cáº£m giÃ¡c. Náº¿u chÆ°a Ä‘á»§ nguá»“n lá»±c, hÃ£y giáº£m sá»‘ lÆ°á»£ng KPI trÆ°á»›c khi giáº£m tÃ­nh Ä‘á»u Ä‘áº·n.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team nhá» dÃ¹ng KPI tuáº§n Ä‘á»ƒ phÃ¡t hiá»‡n lead nhiá»u nhÆ°ng sales chÆ°a gá»i ká»‹p.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra team nhá» khÃ´ng yáº¿u vÃ¬ thiáº¿u dashboard phá»©c táº¡p. Team thÆ°á»ng yáº¿u vÃ¬ thiáº¿u má»™t nhá»‹p nhÃ¬n láº¡i Ä‘á»u Ä‘áº·n. Khi má»—i tuáº§n cÃ¹ng nhÃ¬n má»™t bá»™ sá»‘, nhá»¯ng pattern trÆ°á»›c Ä‘Ã¢y chá»‰ lÃ  cáº£m giÃ¡c báº¯t Ä‘áº§u hiá»‡n rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Team dáº§n biáº¿t kÃªnh nÃ o kÃ©o lead phÃ¹ há»£p, thÃ´ng Ä‘iá»‡p nÃ o giÃºp sales dá»… tÆ° váº¥n, landing page nÃ o giá»¯ khÃ¡ch tá»‘t hÆ¡n, lead rÆ¡i á»Ÿ bÆ°á»›c nÃ o vÃ  sales backlog á»Ÿ Ä‘Ã¢u. Quan trá»ng hÆ¡n, má»i ngÆ°á»i biáº¿t viá»‡c nÃ o nÃªn sá»­a trÆ°á»›c.',
      },
      {
        type: 'paragraph',
        text: 'KPI tá»‘t khÃ´ng lÃ m team sá»£ sá»‘. NÃ³ giÃºp team bá»›t tranh luáº­n báº±ng áº¥n tÆ°á»£ng riÃªng vÃ  lÃ m theo cáº£m giÃ¡c. Má»™t tuáº§n chÆ°a Ä‘á»§ Ä‘á»ƒ káº¿t luáº­n, nhÆ°ng nhá»‹p xem Ä‘á»u giÃºp team thá»­ thay Ä‘á»•i vÃ  kiá»ƒm tra láº¡i báº±ng cÃ¹ng há»‡ quy chiáº¿u.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u nhá», nhÆ°ng nhÃ¬n Ä‘á»u' },
      {
        type: 'paragraph',
        text: 'Marketing team nhá» khÃ´ng cáº§n má»™t há»‡ thá»‘ng Ä‘o lÆ°á»ng phá»©c táº¡p ngay tá»« Ä‘áº§u. Team cáº§n má»™t bá»™ KPI Ä‘á»§ gá»n, Ä‘Æ°á»£c cáº­p nháº­t Ä‘á»u, Ä‘Æ°á»£c nhÃ¬n láº¡i má»—i tuáº§n vÃ  dáº«n Ä‘áº¿n hÃ nh Ä‘á»™ng cá»¥ thá»ƒ. Khi nhá»‹p Ä‘Ã³ Ä‘Ã£ á»•n, dashboard cÃ³ thá»ƒ phÃ¡t triá»ƒn theo nhu cáº§u tháº­t thay vÃ¬ phÃ¬nh ra theo má»i chá»‰ sá»‘ cÃ³ sáºµn.',
      },
    ],
    cta: 'Náº¿u team cá»§a báº¡n Ä‘ang lÃ m nhiá»u nhÆ°ng má»—i tuáº§n khÃ´ng rÃµ Ä‘iá»u gÃ¬ tá»‘t hÆ¡n, xáº¥u hÆ¡n vÃ  cáº§n sá»­a gÃ¬ trÆ°á»›c, hÃ£y báº¯t Ä‘áº§u báº±ng má»™t bá»™ KPI nhá» nhÆ°ng Ä‘Æ°á»£c nhÃ¬n Ä‘á»u.',
  },
  {
    title: 'GTM lÃ  gÃ¬ vÃ  vÃ¬ sao marketer nÃªn hiá»ƒu nÃ³?',
    slug: 'gtm-la-gi-va-vi-sao-marketer-nen-hieu-no',
    category: 'Tracking & Data',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-workshop-selfie-01.jpg",
                "alt": "Workshop room selfie with people at a table",
                "caption": "Workshop working session",
                "width": 1448,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-whiteboard-standing-presentation-01.jpg",
                      "alt": "Person presenting at a board during a workshop",
                      "caption": "Workshop board presentation",
                      "width": 1386,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "TrÆ°á»›c khi cÃ³ GTM, tracking thÆ°á»ng bá»‹ rá»i ráº¡c"
                }
          ]
    },
    excerpt:
      'GTM khÃ´ng chá»‰ lÃ  cÃ´ng cá»¥ Ä‘á»ƒ gáº¯n mÃ£ tracking. Vá»›i marketer, GTM giá»‘ng nhÆ° báº£ng Ä‘iá»u phá»‘i tÃ­n hiá»‡u giá»¯a website, ná»n táº£ng quáº£ng cÃ¡o, analytics vÃ  dashboard. Hiá»ƒu GTM giÃºp team bá»›t phá»¥ thuá»™c hoÃ n toÃ n vÃ o dev vÃ  ra quyáº¿t Ä‘á»‹nh marketing rÃµ hÆ¡n.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t giai Ä‘oáº¡n tÃ´i nghÄ© tracking chá»‰ lÃ  gáº¯n pixel cho xong. Website cÃ³ Meta Pixel, GA4 vÃ  Google Ads tag lÃ  Ä‘á»§. NhÆ°ng khi Ä‘á»‘i chiáº¿u ads, form, CRM vá»›i doanh thu, tÃ´i má»›i tháº¥y váº¥n Ä‘á» khÃ´ng Ä‘Æ¡n giáº£n.',
      },
      {
        type: 'paragraph',
        text: 'Ná»n táº£ng quáº£ng cÃ¡o bÃ¡o má»™t kiá»ƒu, GA4 má»™t kiá»ƒu, sá»‘ form thá»±c nháº­n láº¡i khÃ¡c. CÃ³ lead Ä‘Æ°á»£c ghi hai láº§n, cÃ³ click Zalo khÃ´ng xuáº¥t hiá»‡n. Khi founder há»i kÃªnh nÃ o táº¡o lead tháº­t, team chá»‰ cÃ³ cÃ¢u tráº£ lá»i kÃ¨m nhiá»u giáº£ Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'LÃºc Ä‘Ã³ tÃ´i má»›i hiá»ƒu GTM khÃ´ng chá»‰ lÃ  chá»— Ä‘á»ƒ gáº¯n mÃ£. Vá»›i marketer, nÃ³ giá»‘ng má»™t báº£ng Ä‘iá»u phá»‘i tÃ­n hiá»‡u: website vá»«a cÃ³ hÃ nh Ä‘á»™ng gÃ¬, tÃ­n hiá»‡u nÃ o cáº§n Ä‘Æ°á»£c ghi nháº­n, gá»­i tá»›i Ä‘Ã¢u vÃ  gá»­i vÃ o lÃºc nÃ o.',
      },
      { type: 'heading', text: 'GTM nÃªn Ä‘Æ°á»£c hiá»ƒu nhÆ° â€œbáº£ng Ä‘iá»u phá»‘i tÃ­n hiá»‡uâ€' },
      {
        type: 'paragraph',
        text: 'HÃ£y hÃ¬nh dung website lÃ  nÆ¡i khÃ¡ch Ä‘á»ƒ láº¡i nhiá»u dáº¥u váº¿t. Há» xem má»™t trang dá»‹ch vá»¥, click hotline, má»Ÿ Zalo, gá»­i form, thÃªm sáº£n pháº©m vÃ o giá» hoáº·c hoÃ n táº¥t mua hÃ ng. Má»—i hÃ nh Ä‘á»™ng nÃ³i lÃªn má»™t má»©c Ä‘á»™ quan tÃ¢m khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'GTM Ä‘á»©ng giá»¯a website vÃ  cÃ¡c ná»n táº£ng nháº­n dá»¯ liá»‡u. Khi má»™t hÃ nh Ä‘á»™ng Ä‘á»§ Ä‘iá»u kiá»‡n xáº£y ra, GTM cÃ³ thá»ƒ gá»­i tÃ­n hiá»‡u tá»›i GA4, Meta Pixel, TikTok Pixel, Google Ads, dashboard hoáº·c lá»›p server-side náº¿u há»‡ thá»‘ng cÃ³ setup. CÃ¹ng má»™t hÃ nh Ä‘á»™ng cÅ©ng cÃ³ thá»ƒ phá»¥c vá»¥ nhiá»u nÆ¡i, miá»…n lÃ  cÃ¡ch Ä‘o Ä‘Æ°á»£c thiáº¿t káº¿ rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡ch lÃ m nÃ y táº¡o má»™t nÆ¡i quáº£n lÃ½ tracking táº­p trung. Marketer cÃ³ thá»ƒ mÃ´ táº£ hÃ nh Ä‘á»™ng cáº§n Ä‘o, kiá»ƒm tra logic vÃ  chá»‰ phá»‘i há»£p vá»›i dev á»Ÿ pháº§n tháº­t sá»± cáº§n can thiá»‡p website.',
      },
      { type: 'visual', variant: 'gtm-signal-router' },
      { type: 'heading', text: 'TrÆ°á»›c khi cÃ³ GTM, tracking thÆ°á»ng bá»‹ rá»i ráº¡c' },
      {
        type: 'paragraph',
        text: 'Khi thiáº¿u nÆ¡i quáº£n lÃ½ rÃµ, má»—i ná»n táº£ng thÆ°á»ng cÃ³ má»™t Ä‘oáº¡n code riÃªng. Sau vÃ i láº§n sá»­a landing page hoáº·c thÃªm campaign, team khÃ³ nhá»› tag nÃ o cÃ²n cháº¡y vÃ  tag nÃ o Ä‘Ã£ cÅ©.',
      },
      {
        type: 'list',
        items: [
          'Má»™t event cÃ³ thá»ƒ báº¯n hai láº§n vÃ¬ Ä‘Æ°á»£c gáº¯n á»Ÿ cáº£ website láº«n cÃ´ng cá»¥ khÃ¡c.',
          'NÃºt hotline hoáº·c Zalo quan trá»ng chÆ°a Ä‘Æ°á»£c Ä‘o dÃ¹ form Ä‘Ã£ cÃ³ tracking.',
          'Dev thay cáº¥u trÃºc trang lÃ m trigger cÅ© khÃ´ng cÃ²n hoáº¡t Ä‘á»™ng.',
          'Má»—i láº§n thÃªm event má»›i Ä‘á»u máº¥t thá»i gian trao Ä‘á»•i vÃ  dá»… hiá»ƒu lá»‡ch yÃªu cáº§u.',
          'BÃ¡o cÃ¡o giá»¯a ads, analytics vÃ  dá»¯ liá»‡u lead ngÃ y cÃ ng khÃ³ Ä‘á»‘i chiáº¿u.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tracking rá»i ráº¡c khiáº¿n team tá»‘i Æ°u báº±ng dá»¯ liá»‡u khÃ´ng cháº¯c. Marketer khÃ³ biáº¿t sai lá»‡ch náº±m á»Ÿ hÃ nh vi ngÆ°á»i dÃ¹ng, cÃ¡ch ná»n táº£ng ghi nháº­n hay chÃ­nh setup tracking.',
      },
      { type: 'visual', variant: 'gtm-before-after' },
      { type: 'heading', text: 'Marketer cáº§n hiá»ƒu GTM tá»›i má»©c nÃ o?' },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n trá»Ÿ thÃ nh developer hay biáº¿t code sÃ¢u. NhÆ°ng nÃªn hiá»ƒu nÄƒm khÃ¡i niá»‡m Ä‘á»ƒ mÃ´ táº£ nhu cáº§u vÃ  kiá»ƒm tra trÆ°á»›c khi tin vÃ o sá»‘.',
      },
      {
        type: 'paragraph',
        text: '1. Tag lÃ  tÃ­n hiá»‡u hoáº·c Ä‘oáº¡n mÃ£ Ä‘Æ°á»£c gá»­i Ä‘i. VÃ­ dá»¥, má»™t GA4 event, Meta Pixel event hoáº·c Google Ads conversion. CÃ³ thá»ƒ hiá»ƒu Ä‘Æ¡n giáº£n Ä‘Ã¢y lÃ  â€œthÃ´ng bÃ¡oâ€ mÃ  website gá»­i tá»›i ná»n táº£ng nháº­n dá»¯ liá»‡u.',
      },
      {
        type: 'paragraph',
        text: '2. Trigger lÃ  Ä‘iá»u kiá»‡n Ä‘á»ƒ tag cháº¡y. Trigger cÃ³ thá»ƒ lÃ  khi khÃ¡ch gá»­i form thÃ nh cÃ´ng, click hotline, click nÃºt Zalo hoáº·c xem trang thank-you. Trigger sai thÃ¬ tag cÃ³ thá»ƒ cháº¡y quÃ¡ sá»›m, quÃ¡ nhiá»u láº§n hoáº·c khÃ´ng cháº¡y.',
      },
      {
        type: 'paragraph',
        text: '3. Variable lÃ  thÃ´ng tin Ä‘i kÃ¨m sá»± kiá»‡n, cháº³ng háº¡n URL trang, tÃªn nÃºt, event name, giÃ¡ trá»‹ Ä‘Æ¡n hÃ ng hoáº·c transaction_id. Variable giÃºp team phÃ¢n biá»‡t cÃ¹ng má»™t loáº¡i hÃ nh Ä‘á»™ng xáº£y ra á»Ÿ Ä‘Ã¢u vÃ  mang thÃ´ng tin gÃ¬.',
      },
      {
        type: 'paragraph',
        text: '4. Preview / Debug lÃ  cháº¿ Ä‘á»™ kiá»ƒm tra trÆ°á»›c khi publish. Marketer thá»­ má»™t hÃ nh Ä‘á»™ng Ä‘á»ƒ xem trigger nÃ o Ä‘Æ°á»£c nháº­n, tag nÃ o cháº¡y hoáº·c khÃ´ng cháº¡y. BÆ°á»›c nÃ y giÃºp phÃ¡t hiá»‡n lá»—i trÆ°á»›c khi campaign tiÃªu tiá»n.',
      },
      {
        type: 'paragraph',
        text: '5. Version lÃ  báº£n lÆ°u cá»§a má»—i láº§n thay Ä‘á»•i. TÃªn version rÃµ giÃºp team biáº¿t ai sá»­a gÃ¬ vÃ  khi nÃ o. Náº¿u setup má»›i lá»—i, lá»‹ch sá»­ version giÃºp viá»‡c kiá»ƒm tra hoáº·c quay láº¡i dá»… hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥, khi khÃ¡ch click nÃºt Zalo, trigger lÃ  cÃº click Ä‘Ãºng vÃ o nÃºt Ä‘Ã³. Tag cÃ³ thá»ƒ gá»­i GA4 event vÃ  Meta event Contact. Variable cÃ³ thá»ƒ gá»“m tÃªn nÃºt, URL trang vÃ  nguá»“n. Preview Ä‘Æ°á»£c dÃ¹ng Ä‘á»ƒ kiá»ƒm tra event chá»‰ báº¯n má»™t láº§n trÆ°á»›c khi publish version má»›i.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough GTM Preview Mode cÆ¡ báº£n cho marketer.',
      },
      { type: 'heading', text: 'VÃ¬ sao marketer nÃªn hiá»ƒu GTM?' },
      {
        type: 'paragraph',
        text: 'Thá»© nháº¥t, marketer bá»›t phá»¥ thuá»™c hoÃ n toÃ n vÃ o dev. Marketing khÃ´ng cáº§n tá»± lÃ m má»i setup, nhÆ°ng cáº§n biáº¿t brief hÃ nh Ä‘á»™ng, Ä‘iá»u kiá»‡n thÃ nh cÃ´ng, nÆ¡i nháº­n dá»¯ liá»‡u vÃ  cÃ¡ch test. Dev nháº­n yÃªu cáº§u rÃµ hÆ¡n, marketer kiá»ƒm tra Ä‘Æ°á»£c káº¿t quáº£.',
      },
      {
        type: 'paragraph',
        text: 'Thá»© hai, marketer biáº¿t Ä‘áº·t cÃ¢u há»i khi dá»¯ liá»‡u lá»‡ch. Náº¿u sá»‘ lead trong ads, GA4 vÃ  CRM khÃ¡c nhau, ngÆ°á»i hiá»ƒu GTM sáº½ nghÄ© tá»›i event, trigger, form success, thank-you page hoáº·c logic chá»‘ng ghi nháº­n trÃ¹ng, thay vÃ¬ vá»™i káº¿t luáº­n má»™t ná»n táº£ng sai.',
      },
      {
        type: 'paragraph',
        text: 'Thá»© ba, ads cÃ³ cÆ¡ há»™i há»c tá»« tÃ­n hiá»‡u tá»‘t hÆ¡n. Náº¿u chá»‰ nháº­n PageView hoáº·c click chung chung, ná»n táº£ng dá»… tá»‘i Æ°u xa káº¿t quáº£. Form thÃ nh cÃ´ng, lead Ä‘á»§ Ä‘iá»u kiá»‡n hoáº·c purchase thÆ°á»ng gáº§n outcome hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Thá»© tÆ°, GTM táº¡o má»™t lá»›p Ä‘áº§u vÃ o cho dashboard. Dashboard tá»‘t khÃ´ng cá»©u Ä‘Æ°á»£c dá»¯ liá»‡u gá»‘c sai hoáº·c thiáº¿u. Khi event name, trigger vÃ  thÃ´ng tin Ä‘i kÃ¨m Ä‘Æ°á»£c quáº£n lÃ½ rÃµ, team cÃ³ ná»n táº£ng tá»‘t hÆ¡n Ä‘á»ƒ ná»‘i website vá»›i bÃ¡o cÃ¡o, lead vÃ  outcome.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i cÃ¹ng, marketer lÃ m viá»‡c vá»›i agency hoáº·c dev rÃµ hÆ¡n. Tracking brief cáº§n nÃ³i Ä‘Æ°á»£c hÃ nh Ä‘á»™ng, tÃªn event, ná»n táº£ng nháº­n, dá»¯ liá»‡u Ä‘i kÃ¨m vÃ  ká»‹ch báº£n test, thay vÃ¬ chá»‰ yÃªu cáº§u chung chung ráº±ng â€œgáº¯n tracking giÃºp emâ€.',
      },
      { type: 'heading', text: 'Má»™t website marketing tá»‘i thiá»ƒu nÃªn Ä‘o gÃ¬?' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n Ä‘o má»i hÃ nh Ä‘á»™ng ngay tá»« Ä‘áº§u. HÃ£y Æ°u tiÃªn tÃ­n hiá»‡u gáº¯n vá»›i intent tháº­t: PageView hoáº·c ViewContent cho trang quan trá»ng; form submit thÃ nh cÃ´ng; click Hotline, Zalo, Messenger; click CTA chÃ­nh; Lead; Purchase vá»›i ecommerce; vÃ  thank-you page hoáº·c success state.',
      },
      {
        type: 'paragraph',
        text: 'Scroll vÃ  engagement cÃ³ thá»ƒ há»¯u Ã­ch khi team cÃ³ cÃ¢u há»i cá»¥ thá»ƒ vá» ná»™i dung, nhÆ°ng khÃ´ng nÃªn Ä‘Æ°á»£c thÃªm chá»‰ vÃ¬ cÃ´ng cá»¥ cho phÃ©p. Má»—i event cáº§n cÃ³ lÃ½ do tá»“n táº¡i: nÃ³ giÃºp tá»‘i Æ°u campaign, kiá»ƒm tra hÃ nh trÃ¬nh hay giáº£i thÃ­ch má»™t quyáº¿t Ä‘á»‹nh nÃ o?',
      },
      { type: 'visual', variant: 'marketer-gtm-checklist' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh tracking click Zalo/Form submit giÃºp Ä‘á»c láº¡i cháº¥t lÆ°á»£ng lead.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra tracking khÃ´ng nÃªn lÃ  pháº§n sau cÃ¹ng, cháº¡y ads trÆ°á»›c rá»“i thiáº¿u gÃ¬ gáº¯n sau. Khi há»‡ thá»‘ng Ä‘Ã£ váº­n hÃ nh, dá»¯ liá»‡u sai hoáº·c thiáº¿u khiáº¿n team máº¥t nhiá»u cÃ´ng sá»©c truy láº¡i campaign nÃ o táº¡o form vÃ  form nÃ o thÃ nh lead.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t setup tracking tá»‘t khÃ´ng pháº£i Ä‘á»ƒ lÃ m mÃ u. NÃ³ giÃºp team biáº¿t khÃ¡ch Ä‘áº¿n tá»« Ä‘Ã¢u, há» lÃ m gÃ¬ trÃªn website, tÃ­n hiá»‡u nÃ o Ä‘Ã¡ng tá»‘i Æ°u, kÃªnh nÃ o táº¡o lead hoáº·c cÆ¡ há»™i tháº­t vÃ  khi sá»‘ lá»‡ch thÃ¬ nÃªn báº¯t Ä‘áº§u kiá»ƒm tra á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'GTM khÃ´ng lÃ m dá»¯ liá»‡u tá»± nhiÃªn Ä‘Ãºng hoÃ n toÃ n. Form cÃ³ thá»ƒ lá»—i, ngÆ°á»i dÃ¹ng cÃ³ thá»ƒ cháº·n tracking vÃ  cÃ¡c ná»n táº£ng ghi nháº­n khÃ¡c nhau. NhÆ°ng nÆ¡i Ä‘iá»u phá»‘i rÃµ giÃºp team tháº¥y logic, kiá»ƒm tra giáº£ thuyáº¿t vÃ  sá»­a lá»—i cÃ³ há»‡ thá»‘ng hÆ¡n.',
      },
      { type: 'heading', text: 'Hiá»ƒu dÃ²ng dá»¯ liá»‡u, khÃ´ng cáº§n trá»Ÿ thÃ nh developer' },
      {
        type: 'paragraph',
        text: 'GTM khÃ´ng biáº¿n marketer thÃ nh developer. NÃ³ giÃºp marketer hiá»ƒu dÃ²ng dá»¯ liá»‡u marketing rÃµ hÆ¡n: website Ä‘ang ghi nháº­n hÃ nh Ä‘á»™ng nÃ o, tÃ­n hiá»‡u Ä‘Æ°á»£c gá»­i tá»›i Ä‘Ã¢u vÃ  con sá»‘ nÃ o cáº§n kiá»ƒm tra trÆ°á»›c khi dÃ¹ng Ä‘á»ƒ ra quyáº¿t Ä‘á»‹nh.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang cháº¡y ads, cÃ³ website, cÃ³ form, cÃ³ hotline, cÃ³ Zalo nhÆ°ng khÃ´ng cháº¯c tÃ­n hiá»‡u nÃ o Ä‘ang Ä‘Æ°á»£c Ä‘o Ä‘Ãºng, hÃ£y báº¯t Ä‘áº§u báº±ng viá»‡c nhÃ¬n láº¡i GTM vÃ  cÃ¡c event quan trá»ng trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch.',
  },
  {
    title: 'DataLayer lÃ  gÃ¬? Giáº£i thÃ­ch báº±ng vÃ­ dá»¥ form, lead vÃ  Ä‘Æ¡n hÃ ng',
    slug: 'datalayer-la-gi-giai-thich-bang-vi-du-form-lead-va-don-hang',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-marketing-strategy-session-01.jpg",
                "alt": "Workshop room with a marketing strategy presentation",
                "caption": "Marketing strategy workshop session",
                "width": 1332,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-talk-01.jpg",
                      "alt": "Audience watching a presentation in a workshop room",
                      "caption": "Workshop audience session",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "VÃ¬ sao chá»‰ gáº¯n tag thÃ´i chÆ°a Ä‘á»§?"
                }
          ]
    },
    excerpt:
      'DataLayer lÃ  lá»›p dá»¯ liá»‡u giÃºp website nÃ³i cho GTM biáº¿t Ä‘iá»u gÃ¬ vá»«a xáº£y ra: khÃ¡ch gá»­i form, Ä‘á»ƒ láº¡i lead, mua hÃ ng hay táº¡o Ä‘Æ¡n. Hiá»ƒu DataLayer giÃºp marketer brief tracking rÃµ hÆ¡n, test event tá»‘t hÆ¡n vÃ  xÃ¢y ná»n dá»¯ liá»‡u Ä‘Ã¡ng tin hÆ¡n.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t lá»—i ráº¥t hay gáº·p khi lÃ m tracking: website cÃ³ form, GTM cÃ³ tag, GA4 cÃ³ event, ná»n táº£ng quáº£ng cÃ¡o cÅ©ng bÃ¡o chuyá»ƒn Ä‘á»•i. NhÆ°ng khi Ä‘á»‘i chiáº¿u láº¡i, team váº«n khÃ´ng cháº¯c má»™t lead tháº­t sá»± gá»“m nhá»¯ng thÃ´ng tin gÃ¬, Ä‘áº¿n tá»« Ä‘Ã¢u vÃ  cÃ³ Ä‘Ã¡ng tin khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Nhiá»u team nghÄ© chá»‰ cáº§n gáº¯n pixel hoáº·c tag lÃ  Ä‘á»§. NhÆ°ng giá»›i háº¡n sáº½ lá»™ ra khi marketer cáº§n biáº¿t lead Ä‘áº¿n tá»« form, trang, campaign nÃ o; hoáº·c Ä‘Æ¡n hÃ ng cÃ³ giÃ¡ trá»‹ vÃ  transaction_id gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'LÃºc Ä‘Ã³ DataLayer trá»Ÿ nÃªn quan trá»ng. NÃ³ giÃºp website â€œnÃ³i rÃµâ€ vá»›i GTM Ä‘iá»u gÃ¬ vá»«a xáº£y ra vÃ  mang theo thÃ´ng tin nÃ o, Ä‘á»ƒ GTM gá»­i tiáº¿p tÃ­n hiá»‡u vá» GA4, Ads, Pixel hoáº·c dashboard.',
      },
      { type: 'heading', text: 'DataLayer nÃªn Ä‘Æ°á»£c hiá»ƒu nhÆ° â€œlá»›p thÃ´ng tin trung gianâ€' },
      {
        type: 'paragraph',
        text: 'Náº¿u GTM lÃ  báº£ng Ä‘iá»u phá»‘i tÃ­n hiá»‡u, DataLayer giá»‘ng nhÆ° tá» giáº¥y website Ä‘áº·t lÃªn bÃ n Ä‘iá»u phá»‘i. NÃ³ ghi Ä‘Ãºng chuyá»‡n gÃ¬ vá»«a xáº£y ra Ä‘á»ƒ GTM biáº¿t cáº§n kÃ­ch hoáº¡t tag nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥, má»™t khÃ¡ch vá»«a gá»­i form tÆ° váº¥n. Website cÃ³ thá»ƒ bÃ¡o Ä‘Ã¢y lÃ  form nÃ o, á»Ÿ trang nÃ o, loáº¡i nhu cáº§u gÃ¬, náº±m á»Ÿ hero hay footer, cÃ³ lead ID vÃ  nguá»“n campaign hay khÃ´ng. Quan trá»ng nháº¥t, tÃ­n hiá»‡u chá»‰ xuáº¥t hiá»‡n sau khi form gá»­i thÃ nh cÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'GTM vÃ¬ tháº¿ khÃ´ng pháº£i suy Ä‘oÃ¡n tá»« má»™t cÃº click. Website táº¡o tÃ­n hiá»‡u, DataLayer mÃ´ táº£ tÃ­n hiá»‡u, GTM Ä‘iá»u phá»‘i, cÃ²n cÃ¡c ná»n táº£ng tiáº¿p nháº­n Ä‘á»ƒ bÃ¡o cÃ¡o hoáº·c tá»‘i Æ°u.',
      },
      { type: 'visual', variant: 'datalayer-gtm-relationship' },
      { type: 'heading', text: 'VÃ¬ sao chá»‰ gáº¯n tag thÃ´i chÆ°a Ä‘á»§?' },
      {
        type: 'paragraph',
        text: 'Má»™t tag cÃ³ thá»ƒ báº¯n event â€œleadâ€. NhÆ°ng náº¿u thiáº¿u thÃ´ng tin Ä‘i kÃ¨m, team váº«n khÃ´ng biáº¿t lead Ä‘áº¿n tá»« form tÆ° váº¥n hay form táº£i tÃ i liá»‡u, á»Ÿ landing page nÃ o vÃ  cÃ³ ID Ä‘á»ƒ ná»‘i vá»›i CRM hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i Ä‘Æ¡n hÃ ng, khoáº£ng trá»‘ng cÃ²n rÃµ hÆ¡n. Má»™t event purchase khÃ´ng cÃ³ transaction_id sáº½ khÃ³ Ä‘á»‘i chiáº¿u vÃ  khÃ³ chá»‘ng ghi nháº­n trÃ¹ng. KhÃ´ng cÃ³ value, ná»n táº£ng quáº£ng cÃ¡o chá»‰ biáº¿t cÃ³ Ä‘Æ¡n chá»© khÃ´ng biáº¿t giÃ¡ trá»‹. KhÃ´ng cÃ³ items, team khÃ´ng tháº¥y nhÃ³m sáº£n pháº©m nÃ o Ä‘ang Ä‘Ã³ng gÃ³p doanh thu.',
      },
      {
        type: 'paragraph',
        text: 'Khi DataLayer khÃ´ng rÃµ, dá»¯ liá»‡u thÆ°á»ng dá»«ng á»Ÿ má»©c â€œcÃ³ sá»± kiá»‡n xáº£y raâ€. Dashboard váº«n cÃ³ biá»ƒu Ä‘á»“, nhÆ°ng team chÆ°a biáº¿t nÃªn tá»‘i Æ°u form, trang, campaign hay nhÃ³m sáº£n pháº©m nÃ o.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥ 1: DataLayer cho form tÆ° váº¥n' },
      {
        type: 'paragraph',
        text: 'Má»™t khÃ¡ch vÃ o landing page, Ä‘iá»n form tÆ° váº¥n vÃ  nháº­n thÃ´ng bÃ¡o thÃ nh cÃ´ng. Náº¿u tracking sÆ¡ sÃ i, GTM cÃ³ thá»ƒ chá»‰ báº¯t cÃº click submit. CÃº click chÆ°a cháº¯c táº¡o ra lead: form cÃ³ thá»ƒ thiáº¿u dá»¯ liá»‡u, lá»—i máº¡ng hoáº·c chÆ°a Ä‘Æ°á»£c lÆ°u.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i DataLayer tá»‘t, website chá»‰ Ä‘áº©y event sau tráº¡ng thÃ¡i thÃ nh cÃ´ng. Event lead_submit cÃ³ thá»ƒ Ä‘i kÃ¨m form_name, page_type, lead_type, form_location vÃ  lead_id. Team nhá» Ä‘Ã³ phÃ¢n biá»‡t form hero vá»›i footer, nhu cáº§u tÆ° váº¥n vá»›i bÃ¡o giÃ¡.',
      },
      {
        type: 'code',
        code: `window.dataLayer.push({
  event: "lead_submit",
  form_name: "consultation_form",
  lead_type: "consultation",
  page_location: "/growth-system"
});`,
      },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n tá»± viáº¿t Ä‘oáº¡n code nÃ y. Äiá»u marketer cáº§n hiá»ƒu lÃ  mÃ¬nh pháº£i brief cho dev hoáº·c ngÆ°á»i setup GTM nhá»¯ng thÃ´ng tin nÃ o, event Ä‘Æ°á»£c tÃ­nh thÃ nh cÃ´ng á»Ÿ thá»i Ä‘iá»ƒm nÃ o vÃ  tá»«ng trÆ°á»ng dá»¯ liá»‡u sáº½ giÃºp tráº£ lá»i cÃ¢u há»i gÃ¬.',
      },
      { type: 'visual', variant: 'form-lead-datalayer' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough má»™t dataLayer.push cho form lead.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥ 2: DataLayer cho Ä‘Æ¡n hÃ ng' },
      {
        type: 'paragraph',
        text: 'Vá»›i ecommerce hoáº·c website Ä‘áº·t hÃ ng, má»™t giao dá»‹ch cáº§n nhiá»u thÃ´ng tin Ä‘á»ƒ Ä‘á»‘i chiáº¿u. NgoÃ i event purchase, team thÆ°á»ng cáº§n transaction_id, value, currency, items, quantity; tÃ¹y há»‡ thá»‘ng cÃ³ thá»ƒ thÃªm customer_type hoáº·c payment_status.',
      },
      {
        type: 'paragraph',
        text: 'Transaction_id giÃºp nháº­n diá»‡n giao dá»‹ch vÃ  háº¡n cháº¿ ghi trÃ¹ng khi trang cáº£m Æ¡n Ä‘Æ°á»£c táº£i láº¡i. Value cho GA4 vÃ  Ads biáº¿t giÃ¡ trá»‹ chuyá»ƒn Ä‘á»•i. Items vÃ  quantity cho tháº¥y sáº£n pháº©m nÃ o táº¡o Ä‘Æ¡n, thay vÃ¬ chá»‰ cÃ³ tá»•ng sá»‘ purchase.',
      },
      {
        type: 'code',
        code: `window.dataLayer.push({
  event: "purchase",
  transaction_id: "ORDER_123",
  value: 1500000,
  currency: "VND",
  items: [{ item_name: "Product A", quantity: 1 }]
});`,
      },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n thuá»™c cÃº phÃ¡p, nhÆ°ng nÃªn hiá»ƒu vÃ¬ sao má»—i trÆ°á»ng tá»“n táº¡i vÃ  dá»¯ liá»‡u nÃ o thá»±c sá»± cÃ³ sáºµn. Brief theo cÃ¢u há»i kinh doanh thá»±c táº¿ hÆ¡n yÃªu cáº§u dev â€œÄ‘áº©y háº¿t dá»¯ liá»‡u cÃ³ thá»ƒâ€.',
      },
      { type: 'visual', variant: 'purchase-datalayer' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh DataLayer purchase giÃºp Ä‘á»‘i chiáº¿u Ä‘Æ¡n hÃ ng vá»›i GA4/Ads.',
      },
      {
        type: 'placeholder',
        label: 'CODE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n snippet tháº­t tá»« project sau khi Ä‘Ã£ lÃ m sáº¡ch dá»¯ liá»‡u nháº¡y cáº£m.',
      },
      { type: 'heading', text: 'Marketer cáº§n brief DataLayer nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Má»™t tracking brief tá»‘t khÃ´ng chá»‰ viáº¿t â€œgáº¯n giÃºp em event leadâ€. YÃªu cáº§u Ä‘Ã³ Ä‘á»ƒ láº¡i quÃ¡ nhiá»u khoáº£ng trá»‘ng: lead Ä‘Æ°á»£c tÃ­nh khi click hay khi form thÃ nh cÃ´ng, event mang theo trÆ°á»ng gÃ¬, gá»­i vá» Ä‘Ã¢u vÃ  ai chá»‹u trÃ¡ch nhiá»‡m kiá»ƒm tra.',
      },
      {
        type: 'list',
        items: [
          '1. Sá»± kiá»‡n nÃ o cáº§n Ä‘o? VÃ­ dá»¥: lead_submit, contact_click hoáº·c purchase. TÃªn nÃªn rÃµ vÃ  thá»‘ng nháº¥t giá»¯a cÃ¡c trang.',
          '2. Khi nÃ o sá»± kiá»‡n Ä‘Æ°á»£c tÃ­nh lÃ  thÃ nh cÃ´ng? Form pháº£i Ä‘Æ°á»£c lÆ°u thÃ nh cÃ´ng, khÃ´ng pháº£i chá»‰ cÃ³ ngÆ°á»i báº¥m nÃºt submit.',
          '3. Cáº§n gá»­i thÃ´ng tin gÃ¬ Ä‘i kÃ¨m? VÃ­ dá»¥: form_name, page_location, lead_type, transaction_id, value hoáº·c currency.',
          '4. Event sáº½ gá»­i vá» Ä‘Ã¢u? XÃ¡c Ä‘á»‹nh rÃµ GA4, Meta, TikTok, Google Ads, CRM hay dashboard cáº§n nháº­n tÃ­n hiá»‡u nÃ o.',
          '5. Test báº±ng cÃ¡ch nÃ o? DÃ¹ng GTM Preview, GA4 DebugView, Meta Test Events vÃ  Ä‘á»‘i chiáº¿u vá»›i form, CRM hoáº·c dá»¯ liá»‡u Ä‘Æ¡n hÃ ng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'NÄƒm cÃ¢u há»i giÃºp marketer, dev vÃ  ngÆ°á»i lÃ m tracking cÃ¹ng nhÃ¬n má»™t logic trÆ°á»›c khi publish, thay vÃ¬ phÃ¡t hiá»‡n khoáº£ng trá»‘ng sau khi campaign Ä‘Ã£ cháº¡y.',
      },
      { type: 'visual', variant: 'datalayer-brief-checklist' },
      { type: 'heading', text: 'Nhá»¯ng lá»—i DataLayer thÆ°á»ng gáº·p' },
      {
        type: 'list',
        items: [
          'Báº¯n event ngay khi click nÃºt, trong khi form chÆ°a gá»­i thÃ nh cÃ´ng hoáº·c váº«n Ä‘ang bÃ¡o lá»—i.',
          'Event name Ä‘áº·t thiáº¿u quy Æ°á»›c, má»—i trang dÃ¹ng má»™t kiá»ƒu nÃªn bÃ¡o cÃ¡o khÃ³ gom.',
          'Thiáº¿u transaction_id, khiáº¿n Ä‘Æ¡n hÃ ng khÃ³ Ä‘á»‘i chiáº¿u vÃ  cÃ³ nguy cÆ¡ bá»‹ ghi nháº­n trÃ¹ng.',
          'Thiáº¿u value, khiáº¿n Ads vÃ  GA4 khÃ´ng Ä‘á»c Ä‘Æ°á»£c giÃ¡ trá»‹ chuyá»ƒn Ä‘á»•i Ä‘á»ƒ phÃ¢n tÃ­ch doanh thu.',
          'Thiáº¿u form_name, nÃªn team chá»‰ biáº¿t cÃ³ lead mÃ  khÃ´ng biáº¿t form nÃ o táº¡o ra lead.',
          'KhÃ´ng phÃ¢n biá»‡t lead thÆ°á»ng, lead tÆ° váº¥n vÃ  lead bÃ¡o giÃ¡ dÃ¹ cháº¥t lÆ°á»£ng, intent khÃ¡c nhau.',
          'DataLayer push khÃ´ng Ä‘Ãºng thá»i Ä‘iá»ƒm, khiáº¿n GTM cÃ³ thá»ƒ bá» lá»¡ event cáº§n báº¯t.',
          'KhÃ´ng test báº±ng Preview hoáº·c Debug trÆ°á»›c khi publish vÃ  tin ngay vÃ o sá»‘ trÃªn dashboard.',
        ],
      },
      {
        type: 'paragraph',
        text: 'DataLayer sai khÃ´ng pháº£i lÃºc nÃ o cÅ©ng lÃ m há»‡ thá»‘ng ngá»«ng cháº¡y. GTM váº«n kÃ­ch hoáº¡t tag, dashboard váº«n cÃ³ sá»‘ vÃ  ads váº«n bÃ¡o conversion, nhÆ°ng team Ä‘ang tá»‘i Æ°u trÃªn dá»¯ liá»‡u lá»‡ch.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra tracking tá»‘t khÃ´ng báº¯t Ä‘áº§u tá»« viá»‡c gáº¯n tháº­t nhiá»u tag. NÃ³ báº¯t Ä‘áº§u tá»« Ä‘á»‹nh nghÄ©a Ä‘Ãºng sá»± kiá»‡n vÃ  dá»¯ liá»‡u Ä‘i kÃ¨m. Äá»‹nh nghÄ©a chÆ°a rÃµ chá»‰ khiáº¿n cÃ¹ng má»™t tÃ­n hiá»‡u mÆ¡ há»“ xuáº¥t hiá»‡n á»Ÿ nhiá»u nÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'Khi DataLayer rÃµ, GTM dá»… setup vÃ  debug hÆ¡n vÃ¬ team nhÃ¬n Ä‘Æ°á»£c event cÃ¹ng cÃ¡c trÆ°á»ng Ä‘i kÃ¨m. Ads nháº­n tÃ­n hiá»‡u cÃ³ ngá»¯ cáº£nh, cÃ²n dashboard cÃ³ cÆ¡ sá»Ÿ phÃ¢n nhÃ³m theo form, trang, Ä‘Æ¡n hÃ ng hoáº·c sáº£n pháº©m.',
      },
      {
        type: 'paragraph',
        text: 'Marketing vÃ  sales dá»… Ä‘á»‘i chiáº¿u hÆ¡n khi lead_id, form_name vÃ  nguá»“n Ä‘Æ°á»£c thá»‘ng nháº¥t. Founder cÅ©ng bá»›t quyáº¿t Ä‘á»‹nh báº±ng cáº£m giÃ¡c vÃ¬ con sá»‘ cÃ³ thá»ƒ láº§n ngÆ°á»£c vá» hÃ nh Ä‘á»™ng tháº­t.',
      },
      { type: 'heading', text: 'DataLayer khÃ´ng chá»‰ dÃ nh cho developer' },
      {
        type: 'paragraph',
        text: 'DataLayer giÃºp biáº¿n hÃ nh Ä‘á»™ng cá»§a khÃ¡ch trÃªn website thÃ nh dá»¯ liá»‡u cÃ³ thá»ƒ Ä‘o, gá»­i, Ä‘á»‘i chiáº¿u vÃ  tá»‘i Æ°u. Marketer khÃ´ng cáº§n tá»± code, nhÆ°ng cáº§n mÃ´ táº£ tÃ­n hiá»‡u quan trá»ng, Ä‘iá»u kiá»‡n thÃ nh cÃ´ng vÃ  thÃ´ng tin Ä‘i cÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'Khi website cÃ³ form, lead hoáº·c Ä‘Æ¡n hÃ ng, cÃ¢u há»i khÃ´ng nÃªn chá»‰ lÃ  â€œÄ‘Ã£ gáº¯n tag chÆ°a?â€. CÃ¢u há»i tá»‘t hÆ¡n lÃ  website Ä‘ang nÃ³i gÃ¬ vá»›i GTM, thÃ´ng tin Ä‘Ã³ cÃ³ Ä‘á»§ rÃµ khÃ´ng vÃ  team Ä‘Ã£ test nÃ³ vá»›i dá»¯ liá»‡u thá»±c nháº­n hay chÆ°a.',
      },
    ],
    cta: 'Náº¿u website cá»§a báº¡n cÃ³ form, lead hoáº·c Ä‘Æ¡n hÃ ng nhÆ°ng dá»¯ liá»‡u giá»¯a ads, GA4 vÃ  CRM thÆ°á»ng xuyÃªn lá»‡ch nhau, hÃ£y báº¯t Ä‘áº§u báº±ng viá»‡c kiá»ƒm tra láº¡i DataLayer vÃ  cÃ¡ch cÃ¡c event quan trá»ng Ä‘ang Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a.',
  },
  {
    title: 'VÃ¬ sao tracking sai lÃ m team marketing ra quyáº¿t Ä‘á»‹nh sai?',
    slug: 'vi-sao-tracking-sai-lam-team-marketing-ra-quyet-dinh-sai',
    category: 'Tracking & Data',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-performance-summary-01.jpg",
                "alt": "PageSpeed Insights performance summary screenshot",
                "caption": "PageSpeed performance summary",
                "width": 2880,
                "height": 1450,
                "fit": "contain"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-session-01.jpg",
                      "alt": "Audience watching a presentation in a training room",
                      "caption": "Training session audience",
                      "width": 2048,
                      "height": 1536,
                      "fit": "cover",
                      "afterHeading": "5 kiá»ƒu tracking sai thÆ°á»ng gáº·p"
                }
          ]
    },
    excerpt:
      'Tracking sai khÃ´ng chá»‰ lÃ m bÃ¡o cÃ¡o lá»‡ch. NÃ³ khiáº¿n team marketing tá»‘i Æ°u sai campaign, Ä‘Ã¡nh giÃ¡ sai cháº¥t lÆ°á»£ng lead, phÃ¢n bá»• sai ngÃ¢n sÃ¡ch vÃ  khiáº¿n founder ra quyáº¿t Ä‘á»‹nh báº±ng dá»¯ liá»‡u tÆ°á»Ÿng lÃ  Ä‘Ãºng nhÆ°ng tháº­t ra chÆ°a Ä‘Ã¡ng tin.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t chuyá»‡n khÃ¡ nguy hiá»ƒm trong marketing: team ra quyáº¿t Ä‘á»‹nh dá»±a trÃªn má»™t con sá»‘ nhÃ¬n cÃ³ váº» Ä‘Ãºng, nhÆ°ng tracking phÃ­a sau tháº­t ra Ä‘ang sai. Sá»‘ xuáº¥t hiá»‡n ngay ngáº¯n trÃªn dashboard nÃªn Ã­t ngÆ°á»i há»i tÃ­n hiá»‡u ban Ä‘áº§u Ä‘Æ°á»£c ghi nháº­n tháº¿ nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Ads bÃ¡o cÃ³ nhiá»u conversion. GA4 bÃ¡o Ã­t hÆ¡n. Form thá»±c táº¿ láº¡i lÃ  má»™t con sá»‘ khÃ¡c. Sales nÃ³i sá»‘ lead há» nháº­n vÃ  cháº¥t lÆ°á»£ng cuá»™c gá»i khÃ´ng giá»‘ng bÃ¡o cÃ¡o. Founder nhÃ¬n dashboard rá»“i há»i cÃ¢u tÆ°á»Ÿng Ä‘Æ¡n giáº£n: kÃªnh nÃ o tháº­t sá»± hiá»‡u quáº£?',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» khÃ´ng chá»‰ lÃ  ba bÃ¡o cÃ¡o lá»‡ch nhau. Náº¿u dÃ¹ng dá»¯ liá»‡u Ä‘Ã³ Ä‘á»ƒ phÃ¢n bá»• ngÃ¢n sÃ¡ch, chá»n content hoáº·c Ä‘Ã¡nh giÃ¡ sales follow-up, má»™t tÃ­n hiá»‡u sai cÃ³ thá»ƒ kÃ©o theo cáº£ chuá»—i quyáº¿t Ä‘á»‹nh sai.',
      },
      { type: 'heading', text: 'Tracking sai khÃ´ng chá»‰ lÃ m bÃ¡o cÃ¡o xáº¥u' },
      {
        type: 'paragraph',
        text: 'Nhiá»u ngÆ°á»i xem tracking nhÆ° pháº§n ká»¹ thuáº­t Ä‘á»©ng sau marketing. NhÆ°ng sá»‘ tracking lÃ  Ä‘áº§u vÃ o cho nhá»¯ng cÃ¢u há»i háº±ng ngÃ y: campaign nÃ o nÃªn giá»¯ hay táº¯t, kÃªnh nÃ o cáº§n tÄƒng ngÃ¢n sÃ¡ch vÃ  content nÃ o Ä‘ang táº¡o hÃ nh Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¹ng dá»¯ liá»‡u Ä‘Ã³ cÃ²n Ä‘Æ°á»£c dÃ¹ng Ä‘á»ƒ Ä‘Ã¡nh giÃ¡ landing page, cháº¥t lÆ°á»£ng lead vÃ  tá»‘c Ä‘á»™ sales xá»­ lÃ½. Founder dá»±a vÃ o dashboard Ä‘á»ƒ quyáº¿t Ä‘á»‹nh Ä‘áº§u tÆ° tiáº¿p vÃ o Ä‘Ã¢u. Náº¿u tracking sai, cÃ¡c cÃ¢u há»i Ä‘Ãºng váº«n cÃ³ thá»ƒ nháº­n cÃ¢u tráº£ lá»i sai.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t con sá»‘ sai khÃ´ng náº±m yÃªn trong bÃ¡o cÃ¡o. NÃ³ Ä‘i tá»« hÃ nh Ä‘á»™ng trÃªn website, qua event, vÃ o dashboard, rá»“i thÃ nh quyáº¿t Ä‘á»‹nh vá» tiá»n vÃ  nguá»“n lá»±c. Tracking vÃ¬ tháº¿ lÃ  ná»n cá»§a quyáº¿t Ä‘á»‹nh, khÃ´ng pháº£i pháº§n trang trÃ­.',
      },
      { type: 'visual', variant: 'wrong-tracking-decision-chain' },
      { type: 'heading', text: '5 kiá»ƒu tracking sai thÆ°á»ng gáº·p' },
      {
        type: 'paragraph',
        text: '1. Äo nháº§m hÃ nh Ä‘á»™ng. Conversion Ä‘Æ°á»£c tÃ­nh ngay khi khÃ¡ch click submit. Form cÃ³ thá»ƒ váº«n thiáº¿u thÃ´ng tin, lá»—i máº¡ng hoáº·c chÆ°a Ä‘Æ°á»£c lÆ°u, nhÆ°ng ads vÃ  GA4 Ä‘Ã£ nháº­n má»™t lead. BÃ¡o cÃ¡o vÃ¬ tháº¿ Ä‘áº¹p hÆ¡n thá»±c táº¿.',
      },
      {
        type: 'paragraph',
        text: '2. Äo thiáº¿u hÃ nh Ä‘á»™ng quan trá»ng. Website SME thÆ°á»ng cÃ³ form, Zalo, hotline, Messenger hoáº·c email. Náº¿u team chá»‰ Ä‘o PageView vÃ  form, nhá»¯ng cuá»™c liÃªn há»‡ qua Zalo hay hotline sáº½ biáº¿n máº¥t khá»i hÃ nh trÃ¬nh. Má»™t kÃªnh Ä‘ang táº¡o cuá»™c gá»i tá»‘t cÃ³ thá»ƒ bá»‹ Ä‘Ã¡nh giÃ¡ tháº¥p vÃ¬ thiáº¿u event contact click.',
      },
      {
        type: 'paragraph',
        text: '3. Äo trÃ¹ng conversion. Má»™t lead cÃ³ thá»ƒ bá»‹ tÃ­nh nhiá»u láº§n khi khÃ¡ch refresh trang cáº£m Æ¡n, website vÃ  GTM cÃ¹ng gá»­i tag, hoáº·c thiáº¿u event_id hay cÆ¡ cháº¿ Ä‘á»‘i chiáº¿u. Team tháº¥y nhiá»u conversion hÆ¡n thá»±c táº¿ vÃ  dá»… tÄƒng ngÃ¢n sÃ¡ch quÃ¡ sá»›m.',
      },
      {
        type: 'paragraph',
        text: '4. Event name khÃ´ng nháº¥t quÃ¡n. Trang nÃ y dÃ¹ng lead_submit, trang khÃ¡c dÃ¹ng form_submit, nÆ¡i khÃ¡c láº¡i dÃ¹ng generate_lead. Tá»«ng event cÃ³ thá»ƒ váº«n cháº¡y, nhÆ°ng khi Ä‘Æ°a vÃ o dashboard, team khÃ³ gom cÃ¹ng má»™t loáº¡i hÃ nh Ä‘á»™ng vÃ  khÃ³ so sÃ¡nh giá»¯a cÃ¡c landing page.',
      },
      {
        type: 'paragraph',
        text: '5. KhÃ´ng ná»‘i Ä‘Æ°á»£c lead vá»›i sales hoáº·c revenue. Marketing biáº¿t campaign táº¡o lead nhÆ°ng khÃ´ng biáº¿t lead Ä‘Ã£ Ä‘Æ°á»£c gá»i, nháº­n bÃ¡o giÃ¡ hay thÃ nh Ä‘Æ¡n. Khi thiáº¿u Ä‘oáº¡n ná»‘i nÃ y, team thÆ°á»ng tá»‘i Æ°u theo CPL ráº» nháº¥t dÃ¹ sales Ä‘ang nháº­n nhiá»u ngÆ°á»i khÃ´ng phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i lá»—i riÃªng láº» trÃ´ng khÃ¡ nhá» vÃ  website váº«n hoáº¡t Ä‘á»™ng bÃ¬nh thÆ°á»ng. NhÆ°ng khi chÃºng xuáº¥t hiá»‡n cÃ¹ng lÃºc, team cÃ³ thá»ƒ Ä‘á»c sai toÃ n bá»™ há»‡ thá»‘ng: sai lÆ°á»£ng lead, sai nguá»“n Ä‘Ã³ng gÃ³p vÃ  sai cáº£ cháº¥t lÆ°á»£ng outcome.',
      },
      { type: 'visual', variant: 'tracking-error-map' },
      { type: 'heading', text: 'Tracking sai kÃ©o theo quyáº¿t Ä‘á»‹nh sai nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'HÃ£y báº¯t Ä‘áº§u vá»›i form lead. Náº¿u event báº¯n ngay khi khÃ¡ch click submit, team cÃ³ thá»ƒ tÆ°á»Ÿng landing page Ä‘ang chuyá»ƒn Ä‘á»•i tá»‘t. Marketer giá»¯ máº«u quáº£ng cÃ¡o, tÄƒng ngÃ¢n sÃ¡ch vÃ  Ä‘Æ°a thÃªm traffic vÃ o trang, trong khi sá»‘ form Ä‘Æ°á»£c lÆ°u tháº­t khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u click Zalo vÃ  hotline khÃ´ng Ä‘Æ°á»£c Ä‘o, campaign cÃ³ thá»ƒ trÃ´ng kÃ©m hiá»‡u quáº£ dÃ¹ táº¡o nhiá»u cuá»™c trao Ä‘á»•i cháº¥t lÆ°á»£ng. Team táº¯t campaign vÃ¬ Ã­t conversion, cÃ²n sales máº¥t má»™t nguá»“n khÃ¡ch gá»i trá»±c tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i purchase, conversion trÃ¹ng khiáº¿n founder tÆ°á»Ÿng ads táº¡o Ä‘Æ¡n tá»‘t. NgÃ¢n sÃ¡ch tÄƒng nhÆ°ng doanh thu vÃ  sá»‘ Ä‘Æ¡n khÃ´ng tÄƒng cÃ¹ng nhá»‹p. Thiáº¿u Ä‘á»‘i chiáº¿u transaction_id, team khÃ³ biáº¿t ads, GA4 hay dashboard Ä‘ang Ä‘Ãºng.',
      },
      {
        type: 'paragraph',
        text: 'Khi lead khÃ´ng Ä‘Æ°á»£c ná»‘i vá»›i sales follow-up, marketing chá»‰ tháº¥y CPL. Campaign kÃ©o lead ráº» Ä‘Æ°á»£c giá»¯ láº¡i, cÃ²n sales tháº¥y nhiá»u ngÆ°á»i sai nhu cáº§u hoáº·c khÃ´ng thá»ƒ liÃªn há»‡. Hai team Ä‘á»u cÃ³ sá»‘ Ä‘á»ƒ báº£o vá»‡ gÃ³c nhÃ¬n cá»§a mÃ¬nh, nhÆ°ng chÆ°a cÃ³ dá»¯ liá»‡u chung Ä‘á»ƒ nhÃ¬n outcome.',
      },
      {
        type: 'paragraph',
        text: 'Tracking sai vÃ¬ tháº¿ khÃ´ng loáº¡i bá» tranh luáº­n báº±ng cáº£m giÃ¡c. NÃ³ chá»‰ lÃ m cuá»™c tranh luáº­n trÃ´ng cÃ³ váº» dá»±a trÃªn data hÆ¡n. Muá»‘n ra quyáº¿t Ä‘á»‹nh tá»‘t, team cáº§n tÃ­n hiá»‡u Ä‘o Ä‘Ãºng hÃ nh Ä‘á»™ng vÃ  Ä‘á»§ context Ä‘á»ƒ kiá»ƒm tra láº¡i.',
      },
      { type: 'visual', variant: 'tracking-signal-comparison' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh tracking sai khiáº¿n team Ä‘Ã¡nh giÃ¡ nháº§m cháº¥t lÆ°á»£ng campaign.',
      },
      { type: 'heading', text: 'Team marketing nÃªn kiá»ƒm tra tracking trÆ°á»›c khi tin sá»‘' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n chá» má»™t cuá»™c audit lá»›n. TrÆ°á»›c khi dÃ¹ng sá»‘ Ä‘á»ƒ táº¯t campaign hoáº·c scale ngÃ¢n sÃ¡ch, team cÃ³ thá»ƒ kiá»ƒm tra sÃ¡u Ä‘iá»ƒm cÆ¡ báº£n sau.',
      },
      {
        type: 'list',
        items: [
          '1. Event cÃ³ báº¯n Ä‘Ãºng hÃ nh Ä‘á»™ng thÃ nh cÃ´ng khÃ´ng? Vá»›i form, hÃ£y kiá»ƒm tra tráº¡ng thÃ¡i gá»­i thÃ nh cÃ´ng thay vÃ¬ chá»‰ nhÃ¬n cÃº click nÃºt.',
          '2. Event cÃ³ bá»‹ báº¯n trÃ¹ng khÃ´ng? Thá»­ refresh trang, kiá»ƒm tra nhiá»u tag cÃ¹ng gá»­i vÃ  dÃ¹ng event_id hoáº·c mÃ£ Ä‘á»‘i chiáº¿u khi cáº§n.',
          '3. ÄÃ£ Ä‘o Ä‘á»§ kÃªnh liÃªn há»‡ chÃ­nh chÆ°a? RÃ  láº¡i hotline, Zalo, Messenger, form, email vÃ  purchase theo hÃ nh trÃ¬nh tháº­t cá»§a khÃ¡ch.',
          '4. Event name cÃ³ nháº¥t quÃ¡n khÃ´ng? CÃ¹ng má»™t loáº¡i hÃ nh Ä‘á»™ng nÃªn dÃ¹ng há»‡ tÃªn dá»… hiá»ƒu, khÃ´ng thay Ä‘á»•i tÃ¹y tá»«ng trang.',
          '5. CÃ³ Ä‘á»‘i chiáº¿u vá»›i nguá»“n tháº­t khÃ´ng? So event vá»›i form backend, CRM, Google Sheet, Ä‘Æ¡n hÃ ng hoáº·c sales log trong cÃ¹ng khoáº£ng thá»i gian.',
          '6. ÄÃ£ test báº±ng Preview hoáº·c Debug chÆ°a? GTM Preview, GA4 DebugView, Meta Test Events vÃ  cháº©n Ä‘oÃ¡n Google Ads giÃºp xem tÃ­n hiá»‡u trÆ°á»›c khi publish.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Checklist khÃ´ng biáº¿n marketer thÃ nh developer. NÃ³ giÃºp team biáº¿t sá»‘ nÃ o Ä‘Ã£ Ä‘Æ°á»£c kiá»ƒm tra, sá»‘ nÃ o má»›i lÃ  tham kháº£o vÃ  khi lá»‡ch nÃªn báº¯t Ä‘áº§u tÃ¬m á»Ÿ Ä‘Ã¢u.',
      },
      { type: 'visual', variant: 'tracking-diagnostic-checklist' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch test má»™t event báº±ng GTM Preview vÃ  GA4 DebugView.',
      },
      {
        type: 'placeholder',
        label: 'CHECKLIST PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n checklist táº£i vá» kiá»ƒm tra tracking trÆ°á»›c khi scale ngÃ¢n sÃ¡ch.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra tracking sai thÆ°á»ng khÃ´ng lÃ m há»‡ thá»‘ng sáº­p ngay. Website váº«n cháº¡y, ads váº«n tiÃªu tiá»n vÃ  dashboard váº«n cÃ³ sá»‘. ChÃ­nh vÃ¬ má»i thá»© cÃ³ váº» hoáº¡t Ä‘á»™ng, team dá»… tin ráº±ng dá»¯ liá»‡u Ä‘ang Ä‘Ãºng vÃ  tiáº¿p tá»¥c tá»‘i Æ°u trÃªn tÃ­n hiá»‡u cÅ©.',
      },
      {
        type: 'paragraph',
        text: 'Vá» lÃ¢u dÃ i, team tá»‘i Æ°u nháº§m event, Ä‘Ã¡nh giÃ¡ sai campaign, giá»¯ nháº§m kÃªnh hoáº·c táº¯t nguá»“n Ä‘ang táº¡o khÃ¡ch tháº­t. Marketing vÃ  sales dá»… Ä‘á»• lá»—i vÃ¬ má»—i bÃªn nhÃ¬n má»™t Ä‘oáº¡n dá»¯ liá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'Tracking tá»‘t khÃ´ng pháº£i Ä‘á»ƒ bÃ¡o cÃ¡o Ä‘áº¹p hÆ¡n. NÃ³ giÃºp team bá»›t ra quyáº¿t Ä‘á»‹nh báº±ng dá»¯ liá»‡u lá»‡ch. Má»™t há»‡ thá»‘ng Ä‘Æ¡n giáº£n nhÆ°ng Ä‘o Ä‘Ãºng form thÃ nh cÃ´ng, contact click, purchase vÃ  outcome thÆ°á»ng cÃ³ giÃ¡ trá»‹ hÆ¡n má»™t dashboard nhiá»u sá»‘ nhÆ°ng thiáº¿u Ä‘á»‘i chiáº¿u.',
      },
      { type: 'heading', text: 'Kiá»ƒm tra tÃ­n hiá»‡u trÆ°á»›c khi Ä‘á»•i quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'Tracking lÃ  ná»n cá»§a quyáº¿t Ä‘á»‹nh marketing. Há»‡ thá»‘ng chÆ°a cáº§n phá»©c táº¡p ngay tá»« Ä‘áº§u, nhÆ°ng cáº§n Ä‘o Ä‘Ãºng nhá»¯ng hÃ nh Ä‘á»™ng quan trá»ng nháº¥t, Ä‘áº·t tÃªn nháº¥t quÃ¡n vÃ  cÃ³ cÃ¡ch kiá»ƒm tra vá»›i nguá»“n tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Khi dashboard vÃ  thá»±c táº¿ khÃ´ng khá»›p, Ä‘á»«ng vá»™i káº¿t luáº­n campaign kÃ©m, ads sai hay sales xá»­ lÃ½ chÆ°a tá»‘t. HÃ£y láº§n láº¡i tÃ­n hiá»‡u tá»« hÃ nh Ä‘á»™ng cá»§a khÃ¡ch Ä‘áº¿n bÃ¡o cÃ¡o. Sá»­a Ä‘Ãºng Ä‘áº§u vÃ o thÆ°á»ng giÃºp nhá»¯ng cuá»™c trao Ä‘á»•i phÃ­a sau rÃµ rÃ ng hÆ¡n.',
      },
    ],
    cta: 'Náº¿u team cá»§a báº¡n Ä‘ang nhÃ¬n dashboard má»—i tuáº§n nhÆ°ng váº«n tranh luáº­n khÃ´ng biáº¿t kÃªnh nÃ o tháº­t sá»± hiá»‡u quáº£, hÃ£y báº¯t Ä‘áº§u báº±ng viá»‡c kiá»ƒm tra láº¡i tracking trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch hoáº·c Ä‘á»•i toÃ n bá»™ campaign.',
  },
  {
    title: 'Server-side tracking lÃ  gÃ¬, cÃ³ cáº§n cho SME khÃ´ng?',
    slug: 'server-side-tracking-la-gi-co-can-cho-sme-khong',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-presentation-discussion-01.jpg",
                "alt": "People in a meeting room during a workshop",
                "caption": "Workshop discussion in meeting room",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-whiteboard-standing-presentation-01.jpg",
                      "alt": "Person presenting at a board during a workshop",
                      "caption": "Workshop board presentation",
                      "width": 1386,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "Client-side tracking vÃ  server-side tracking khÃ¡c nhau á»Ÿ Ä‘Ã¢u?"
                }
          ]
    },
    excerpt:
      'Server-side tracking giÃºp doanh nghiá»‡p kiá»ƒm soÃ¡t tÃ­n hiá»‡u chuyá»ƒn Ä‘á»•i tá»‘t hÆ¡n báº±ng cÃ¡ch Ä‘Æ°a má»™t pháº§n xá»­ lÃ½ tracking vá» server trÆ°á»›c khi gá»­i sang GA4, Meta, TikTok hay Google Ads. NhÆ°ng vá»›i SME, cÃ¢u há»i quan trá»ng khÃ´ng pháº£i lÃ  â€œcÃ³ nÃªn lÃ m cho sang khÃ´ngâ€, mÃ  lÃ  ná»n tracking hiá»‡n táº¡i Ä‘Ã£ Ä‘á»§ tá»‘t Ä‘á»ƒ lÃ m server-side chÆ°a.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t giai Ä‘oáº¡n, cá»© nháº¯c Ä‘áº¿n tracking lÃ  nhiá»u ngÆ°á»i báº¯t Ä‘áº§u nÃ³i vá» server-side, CAPI, Events API, enhanced conversion... nghe ráº¥t xá»‹n. NhÆ°ng vá»›i má»™t SME Ä‘ang cháº¡y ads, cÃ³ website, cÃ³ form, cÃ³ Zalo, cÃ¢u há»i thá»±c táº¿ hÆ¡n lÃ : mÃ¬nh cÃ³ tháº­t sá»± cáº§n server-side tracking ngay bÃ¢y giá» khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Server-side nghe ká»¹ thuáº­t vÃ  cÃ³ váº» lÃ  má»™t báº£n nÃ¢ng cáº¥p cao cáº¥p. NhÆ°ng lÃ m thÃªm lá»›p server khÃ´ng khiáº¿n dá»¯ liá»‡u tá»± nhiÃªn Ä‘Ãºng. Náº¿u event cÆ¡ báº£n Ä‘ang báº¯n sai, DataLayer thiáº¿u, form chÆ°a Ä‘o Ä‘Ãºng hoáº·c CRM khÃ´ng Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c lead, há»‡ thá»‘ng má»›i chá»‰ phá»©c táº¡p hÆ¡n. TrÆ°á»›c khi triá»ƒn khai, team cáº§n hiá»ƒu Ä‘Ãºng nÃ³ giáº£i quyáº¿t pháº§n nÃ o vÃ  Ä‘Ã²i há»i ná»n táº£ng gÃ¬.',
      },
      { type: 'heading', text: 'Server-side tracking nÃªn Ä‘Æ°á»£c hiá»ƒu Ä‘Æ¡n giáº£n nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Client-side tracking lÃ  khi trÃ¬nh duyá»‡t cá»§a khÃ¡ch gá»­i tÃ­n hiá»‡u trá»±c tiáº¿p Ä‘áº¿n GA4, Meta, TikTok hoáº·c Google Ads. KhÃ¡ch gá»­i form, web GTM ghi nháº­n hÃ nh Ä‘á»™ng rá»“i gá»­i event lead sang cÃ¡c ná»n táº£ng Ä‘Ã£ cáº¥u hÃ¬nh.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i server-side tracking, tÃ­n hiá»‡u Ä‘i qua má»™t lá»›p server trung gian do doanh nghiá»‡p kiá»ƒm soÃ¡t tá»‘t hÆ¡n. Website hoáº·c web GTM gá»­i event vá» server container hay má»™t server endpoint; lá»›p nÃ y xá»­ lÃ½, chuáº©n hoÃ¡ rá»“i má»›i gá»­i tiáº¿p sang cÃ¡c ná»n táº£ng.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i marketer, cÃ³ thá»ƒ hÃ¬nh dung Ä‘Ã¢y lÃ  má»™t tráº¡m trung chuyá»ƒn tÃ­n hiá»‡u. Tráº¡m khÃ´ng táº¡o ra conversion má»›i. NÃ³ giÃºp team kiá»ƒm soÃ¡t event nÃ o Ä‘Æ°á»£c gá»­i, dá»¯ liá»‡u Ä‘i kÃ¨m lÃ  gÃ¬ vÃ  Ä‘Ã­ch Ä‘áº¿n nÃ o cáº§n nháº­n tÃ­n hiá»‡u.',
      },
      { type: 'visual', variant: 'server-side-tracking-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch client-side vs server-side tracking báº±ng sÆ¡ Ä‘á»“ Ä‘Æ¡n giáº£n.',
      },
      { type: 'heading', text: 'Client-side tracking vÃ  server-side tracking khÃ¡c nhau á»Ÿ Ä‘Ã¢u?' },
      {
        type: 'paragraph',
        text: 'Client-side dá»… triá»ƒn khai hÆ¡n, phÃ¹ há»£p Ä‘á»ƒ báº¯t Ä‘áº§u vÃ  Ä‘á»§ dÃ¹ng cho nhiá»u setup cÆ¡ báº£n. Äiá»ƒm háº¡n cháº¿ lÃ  tÃ­n hiá»‡u cháº¡y trÃªn trÃ¬nh duyá»‡t nÃªn cÃ³ thá»ƒ bá»‹ áº£nh hÆ°á»Ÿng bá»Ÿi browser, ad blocker, cookie setting, tá»‘c Ä‘á»™ táº£i trang hoáº·c viá»‡c ngÆ°á»i dÃ¹ng rá»i trang quÃ¡ nhanh. Náº¿u gáº¯n nhiá»u tag mÃ  khÃ´ng quáº£n lÃ½ tá»‘t, setup cÅ©ng dá»… rá»‘i.',
      },
      {
        type: 'paragraph',
        text: 'Server-side thÃªm má»™t lá»›p trung gian Ä‘á»ƒ team kiá»ƒm soÃ¡t vÃ  chuáº©n hoÃ¡ dá»¯ liá»‡u trÆ°á»›c khi gá»­i. Tuá»³ cÃ¡ch setup, nÃ³ cÃ³ thá»ƒ há»— trá»£ Meta CAPI, TikTok Events API, Google Ads enhanced conversion hoáº·c server events khÃ¡c. Äá»•i láº¡i, doanh nghiá»‡p pháº£i tÃ­nh chi phÃ­ háº¡ táº§ng, cÃ´ng setup, kiá»ƒm thá»­ vÃ  maintenance. Viá»‡c thu tháº­p, sá»­ dá»¥ng dá»¯ liá»‡u váº«n cáº§n Ä‘i theo cÆ¡ cháº¿ consent vÃ  quy Ä‘á»‹nh phÃ¹ há»£p cá»§a doanh nghiá»‡p.',
      },
      { type: 'visual', variant: 'client-vs-server-tracking' },
      { type: 'heading', text: 'Server-side tracking giÃºp gÃ¬ cho marketing?' },
      {
        type: 'list',
        items: [
          '1. Kiá»ƒm soÃ¡t tÃ­n hiá»‡u chuyá»ƒn Ä‘á»•i tá»‘t hÆ¡n. Thay vÃ¬ Ä‘á»ƒ tá»«ng ná»n táº£ng nháº­n dá»¯ liá»‡u rá»i ráº¡c tá»« browser, team cÃ³ thÃªm má»™t lá»›p xá»­ lÃ½ trung gian.',
          '2. Chuáº©n hoÃ¡ dá»¯ liá»‡u trÆ°á»›c khi gá»­i. Event name, event_id, value, currency, user_data hoáº·c transaction_id cÃ³ thá»ƒ Ä‘Æ°á»£c kiá»ƒm tra theo cÃ¹ng má»™t logic.',
          '3. Há»— trá»£ gá»­i tÃ­n hiá»‡u vá» nhiá»u ná»n táº£ng. Má»™t luá»“ng Ä‘Æ°á»£c thiáº¿t káº¿ Ä‘Ãºng cÃ³ thá»ƒ phá»¥c vá»¥ GA4, Meta CAPI, TikTok Events API hay Google Ads tuá»³ nhu cáº§u.',
          '4. Giáº£m phá»¥ thuá»™c hoÃ n toÃ n vÃ o browser. Äiá»u nÃ y khÃ´ng cÃ³ nghÄ©a Ä‘o Ä‘Æ°á»£c 100%, nhÆ°ng há»‡ thá»‘ng bá»›t phá»¥ thuá»™c vÃ o má»™t sá»‘ giá»›i háº¡n phÃ­a trÃ¬nh duyá»‡t.',
          '5. Táº¡o ná»n tá»‘t hÆ¡n cho dashboard vÃ  Ä‘á»‘i chiáº¿u. Khi tÃ­n hiá»‡u nháº¥t quÃ¡n hÆ¡n, team dá»… ná»‘i lead hoáº·c order vá»›i nguá»“n tháº­t Ä‘á»ƒ kiá»ƒm tra.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lá»£i Ã­ch tháº­t khÃ´ng náº±m á»Ÿ viá»‡c há»‡ thá»‘ng trÃ´ng hiá»‡n Ä‘áº¡i hÆ¡n. GiÃ¡ trá»‹ náº±m á»Ÿ kháº£ nÄƒng kiá»ƒm soÃ¡t vÃ  kiá»ƒm tra dá»¯ liá»‡u chuyá»ƒn Ä‘á»•i, nháº¥t lÃ  khi doanh nghiá»‡p Ä‘Ã£ cÃ³ nhiá»u nguá»“n traffic vÃ  cáº§n tá»‘i Æ°u theo lead hoáº·c doanh thu tháº­t.',
      },
      { type: 'heading', text: 'NhÆ°ng server-side tracking khÃ´ng giáº£i quyáº¿t Ä‘Æ°á»£c má»i thá»©' },
      {
        type: 'paragraph',
        text: 'Server-side khÃ´ng sá»­a Ä‘Æ°á»£c strategy sai, traffic sai tá»‡p, landing page yáº¿u, form khÃ³ dÃ¹ng hay sales follow-up cháº­m. NÃ³ cÅ©ng khÃ´ng cá»©u Ä‘Æ°á»£c má»™t DataLayer sai tá»« Ä‘áº§u, event name Ä‘áº·t lung tung, thiáº¿u event_id Ä‘á»ƒ dedup, CRM khÃ´ng cáº­p nháº­t hoáº·c dashboard khÃ´ng cÃ³ logic Ä‘á»c sá»‘.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥, náº¿u event lead báº¯n ngay khi khÃ¡ch click nÃºt thay vÃ¬ sau khi form Ä‘Æ°á»£c lÆ°u thÃ nh cÃ´ng, gá»­i event Ä‘Ã³ qua server chá»‰ khiáº¿n má»™t tÃ­n hiá»‡u sai Ä‘i xa hÆ¡n. Náº¿u browser event vÃ  server event cÃ¹ng gá»­i nhÆ°ng khÃ´ng cÃ³ cÆ¡ cháº¿ dedup rÃµ, conversion cÃ²n cÃ³ thá»ƒ bá»‹ tÃ­nh trÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'Khi ná»n client-side, GTM, DataLayer, form vÃ  CRM cÃ²n rá»‘i, lÃ m server-side quÃ¡ sá»›m khiáº¿n team khÃ³ debug hÆ¡n. Váº¥n Ä‘á» gá»‘c váº«n cÃ²n, nhÆ°ng nay náº±m sau thÃªm má»™t lá»›p ká»¹ thuáº­t.',
      },
      { type: 'visual', variant: 'server-side-not-magic' },
      { type: 'heading', text: 'SME cÃ³ cáº§n server-side tracking khÃ´ng?' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i SME nÃ o cÅ©ng cáº§n lÃ m ngay. TÃ´i thÆ°á»ng chia quyáº¿t Ä‘á»‹nh thÃ nh ba má»©c dá»±a trÃªn Ä‘á»™ trÆ°á»Ÿng thÃ nh cá»§a tracking vÃ  nhu cáº§u váº­n hÃ nh.',
      },
      {
        type: 'paragraph',
        text: 'Má»©c 1 â€” ChÆ°a nÃªn lÃ m vá»™i. Website má»›i cháº¡y, lead hoáº·c order cÃ²n Ã­t, form, hotline, Zalo chÆ°a Ä‘Æ°á»£c Ä‘o Ä‘Ãºng, DataLayer chÆ°a rÃµ, chÆ°a cÃ³ dashboard hoáº·c CRM tá»‘i thiá»ƒu vÃ  chÆ°a ai kiá»ƒm tra tracking Ä‘á»‹nh ká»³. LÃºc nÃ y nÃªn Æ°u tiÃªn lÃ m Ä‘Ãºng client-side, GTM, event quan trá»ng vÃ  Ä‘á»‘i chiáº¿u nguá»“n tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Má»©c 2 â€” CÃ³ thá»ƒ cÃ¢n nháº¯c. Ads Ä‘Ã£ cháº¡y Ä‘á»u, cÃ³ Ä‘á»§ lead hoáº·c order Ä‘á»ƒ tá»‘i Æ°u, form hay purchase tracking cÆ¡ báº£n Ä‘Ã£ á»•n vÃ  team muá»‘n gá»­i tÃ­n hiá»‡u tá»‘t hÆ¡n vá» cÃ¡c ná»n táº£ng. Doanh nghiá»‡p cÅ©ng báº¯t Ä‘áº§u cáº§n Ä‘á»‘i chiáº¿u Ads, GA4 vá»›i CRM hoáº·c Ä‘Æ¡n hÃ ng, Ä‘á»“ng thá»i cÃ³ ngÆ°á»i phá»¥ trÃ¡ch hay Ä‘Æ¡n vá»‹ há»— trá»£.',
      },
      {
        type: 'paragraph',
        text: 'Má»©c 3 â€” NÃªn lÃ m nghiÃªm tÃºc. NgÃ¢n sÃ¡ch ads Ä‘Ã¡ng ká»ƒ, ecommerce hoáº·c lead gen cÃ³ volume á»•n, nhiá»u ná»n táº£ng cÃ¹ng cháº¡y, cáº§n CAPI, API, server events, event_id vÃ  dedup rÃµ. Team cÅ©ng cáº§n ná»‘i dá»¯ liá»‡u vá»›i dashboard hoáº·c CRM vÃ  Ä‘Ã£ cÃ³ quy trÃ¬nh test, maintain tracking.',
      },
      { type: 'visual', variant: 'sme-server-side-decision-matrix' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh setup server-side tracking cho lead/purchase khi ná»n GTM vÃ  DataLayer Ä‘Ã£ á»•n.',
      },
      { type: 'heading', text: 'TrÆ°á»›c khi lÃ m server-side tracking, nÃªn chuáº©n bá»‹ gÃ¬?' },
      {
        type: 'list',
        items: [
          '1. Event quan trá»ng Ä‘Ã£ Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a rÃµ chÆ°a? Báº¯t Ä‘áº§u vá»›i PageView, Contact, Lead vÃ  Purchase theo hÃ nh trÃ¬nh thá»±c táº¿.',
          '2. DataLayer cÃ³ Ä‘á»§ thÃ´ng tin chÆ°a? Kiá»ƒm tra event name, form_name, transaction_id, value, currency vÃ  event_id khi cáº§n.',
          '3. CÃ³ event_id vÃ  cÆ¡ cháº¿ dedup cho conversion quan trá»ng chÆ°a? Äiá»ƒm nÃ y Ä‘áº·c biá»‡t cáº§n thiáº¿t khi cÃ¹ng gá»­i browser event vÃ  server event.',
          '4. CÃ³ Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c vá»›i nguá»“n tháº­t khÃ´ng? So tÃ­n hiá»‡u vá»›i form backend, CRM, Ä‘Æ¡n hÃ ng hoáº·c sales log.',
          '5. CÃ³ domain vÃ  server endpoint rÃµ chÆ°a? VÃ­ dá»¥ subdomain tracking hoáº·c server container theo kiáº¿n trÃºc Ä‘Ã£ chá»n.',
          '6. CÃ³ quy trÃ¬nh test khÃ´ng? DÃ¹ng GTM Preview, GA4 DebugView, Meta Test Events, TikTok Events Manager hoáº·c Google Ads diagnostics khi phÃ¹ há»£p.',
          '7. CÃ³ ngÆ°á»i maintain khÃ´ng? Tracking cáº§n Ä‘Æ°á»£c kiá»ƒm tra sau thay Ä‘á»•i website, form, checkout vÃ  cáº¥u hÃ¬nh ná»n táº£ng.',
        ],
      },
      { type: 'visual', variant: 'server-side-readiness-checklist' },
      {
        type: 'placeholder',
        label: 'CHECKLIST PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n checklist audit readiness trÆ°á»›c khi lÃ m server-side tracking.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra server-side tracking nghe ráº¥t ká»¹ thuáº­t, nhÆ°ng quyáº¿t Ä‘á»‹nh cÃ³ lÃ m hay chÆ°a láº¡i lÃ  má»™t cÃ¢u há»i quáº£n trá»‹ há»‡ thá»‘ng. Team Ä‘ang cáº§n giáº£i quyáº¿t váº¥n Ä‘á» dá»¯ liá»‡u nÃ o? TÃ­n hiá»‡u hiá»‡n táº¡i cÃ³ Ä‘Ã¡ng tin chÆ°a? Ai sáº½ test vÃ  chá»‹u trÃ¡ch nhiá»‡m khi website thay Ä‘á»•i?',
      },
      {
        type: 'paragraph',
        text: 'LÃ m quÃ¡ sá»›m dá»… táº¡o thÃªm má»™t lá»›p phá»©c táº¡p mÃ  chÆ°a xá»­ lÃ½ Ä‘Æ°á»£c váº¥n Ä‘á» gá»‘c. LÃ m Ä‘Ãºng thá»i Ä‘iá»ƒm cÃ³ thá»ƒ giÃºp ná»n dá»¯ liá»‡u cháº¯c hÆ¡n, nháº¥t lÃ  khi doanh nghiá»‡p cháº¡y ads Ä‘á»u, cÃ³ lead hoáº·c order, cÃ³ dashboard vÃ  cáº§n gá»­i conversion tá»‘t hÆ¡n vá» cÃ¡c ná»n táº£ng.',
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng lÃ m server-side Ä‘á»ƒ trÃ´ng hiá»‡n Ä‘áº¡i. HÃ£y lÃ m vÃ¬ cÃ³ váº¥n Ä‘á» tracking tháº­t cáº§n giáº£i quyáº¿t, ná»n GTM, DataLayer vÃ  event Ä‘Ã£ Ä‘á»§ rÃµ, Ä‘á»“ng thá»i cÃ³ ngÆ°á»i test vÃ  maintain. NÃ³ váº«n khÃ´ng thay tháº¿ strategy, content, landing page hay cÃ¡ch sales follow-up.',
      },
      { type: 'heading', text: 'Server-side lÃ  lá»›p nÃ¢ng cáº¥p, khÃ´ng pháº£i Ä‘iá»ƒm báº¯t Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Server-side tracking lÃ  má»™t lá»›p nÃ¢ng cáº¥p Ä‘Ã¡ng giÃ¡, nhÆ°ng khÃ´ng pháº£i Ä‘iá»ƒm báº¯t Ä‘áº§u cho má»i SME. Äiá»ƒm báº¯t Ä‘áº§u váº«n lÃ  Ä‘o Ä‘Ãºng cÃ¡c hÃ nh Ä‘á»™ng quan trá»ng nháº¥t: khÃ¡ch xem gÃ¬, click gÃ¬, gá»­i form nÃ o, táº¡o lead nÃ o, mua gÃ¬ vÃ  dá»¯ liá»‡u Ä‘Ã³ cÃ³ ná»‘i Ä‘Æ°á»£c vá» dashboard hoáº·c sales hay khÃ´ng.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang phÃ¢n vÃ¢n cÃ³ cáº§n server-side tracking hay chÆ°a, Ä‘á»«ng báº¯t Ä‘áº§u báº±ng cÃ¢u há»i â€œcÃ´ng nghá»‡ nÃ y cÃ³ xá»‹n khÃ´ngâ€. HÃ£y báº¯t Ä‘áº§u báº±ng cÃ¢u há»i: tracking hiá»‡n táº¡i Ä‘Ã£ Ä‘o Ä‘Ãºng lead, contact, purchase vÃ  revenue chÆ°a?',
  },
  {
    title: 'Pixel, GA4, TikTok Pixel, Google Ads tag khÃ¡c nhau tháº¿ nÃ o?',
    slug: 'pixel-ga4-tiktok-pixel-google-ads-tag-khac-nhau-the-nao',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-workshop-selfie-01.jpg",
                "alt": "Workshop room selfie with people at a table",
                "caption": "Workshop working session",
                "width": 1448,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-talk-01.jpg",
                      "alt": "Audience watching a presentation in a workshop room",
                      "caption": "Workshop audience session",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "GA4 dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬?"
                }
          ]
    },
    excerpt:
      'Pixel, GA4, TikTok Pixel vÃ  Google Ads tag Ä‘á»u liÃªn quan Ä‘áº¿n tracking, nhÆ°ng chÃºng khÃ´ng phá»¥c vá»¥ cÃ¹ng má»™t má»¥c Ä‘Ã­ch. CÃ³ cÃ¡i dÃ¹ng Ä‘á»ƒ phÃ¢n tÃ­ch hÃ nh vi, cÃ³ cÃ¡i dÃ¹ng Ä‘á»ƒ tá»‘i Æ°u quáº£ng cÃ¡o, cÃ³ cÃ¡i dÃ¹ng Ä‘á»ƒ ghi nháº­n chuyá»ƒn Ä‘á»•i cho tá»«ng ná»n táº£ng.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t cÃ¢u há»i ráº¥t hay gáº·p khi báº¯t Ä‘áº§u lÃ m tracking cho website: Ä‘Ã£ gáº¯n GA4 rá»“i thÃ¬ cÃ³ cáº§n Meta Pixel khÃ´ng? ÄÃ£ cÃ³ GTM rá»“i thÃ¬ Google Ads tag náº±m á»Ÿ Ä‘Ã¢u? TikTok Pixel cÃ³ khÃ¡c gÃ¬ Meta Pixel khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Nhiá»u marketer nhÃ¬n cÃ¡c tag vÃ  pixel nhÆ° má»™t Ä‘á»‘ng mÃ£ ká»¹ thuáº­t pháº£i nhá» developer gáº¯n vÃ o web. NhÆ°ng náº¿u tÃ¡ch theo vai trÃ², bá»©c tranh dá»… hiá»ƒu hÆ¡n nhiá»u. CÃ³ cÃ´ng cá»¥ giÃºp phÃ¢n tÃ­ch hÃ nh vi, cÃ³ cÃ´ng cá»¥ Ä‘Æ°a tÃ­n hiá»‡u vá» ná»n táº£ng quáº£ng cÃ¡o, cÃ²n má»™t cÃ´ng cá»¥ khÃ¡c chá»‰ Ä‘á»©ng giá»¯a Ä‘á»ƒ quáº£n lÃ½ viá»‡c gá»­i dá»¯ liá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i tag nÃ o cÅ©ng tráº£ lá»i cÃ¹ng má»™t cÃ¢u há»i. Váº¥n Ä‘á» khÃ´ng pháº£i gáº¯n cÃ ng nhiá»u cÃ ng tá»‘t, mÃ  lÃ  biáº¿t hÃ nh Ä‘á»™ng nÃ o cá»§a khÃ¡ch cáº§n Ä‘Æ°á»£c ghi nháº­n, gá»­i vá» Ä‘Ã¢u vÃ  dÃ¹ng cho quyáº¿t Ä‘á»‹nh gÃ¬.',
      },
      { type: 'heading', text: 'Äá»«ng gom táº¥t cáº£ thÃ nh â€œtracking codeâ€' },
      {
        type: 'paragraph',
        text: 'Trong nhiá»u buá»•i lÃ m viá»‡c, team thÆ°á»ng gá»i chung yÃªu cáº§u lÃ  â€œgáº¯n pixelâ€. CÃ¡ch gá»i nÃ y tiá»‡n nhÆ°ng dá»… gÃ¢y hiá»ƒu nháº§m. GA4 khÃ´ng giá»‘ng Meta Pixel. Meta Pixel khÃ´ng giá»‘ng TikTok Pixel. Google Ads tag khÃ´ng giá»‘ng GA4. GTM láº¡i cÃ ng khÃ´ng pháº£i má»™t ná»n táº£ng phÃ¢n tÃ­ch hay quáº£ng cÃ¡o.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u gom táº¥t cáº£ thÃ nh má»™t nhÃ³m, team dá»… brief sai event, test nháº§m nÆ¡i vÃ  Ä‘á»c sai sá»‘. CÃ¡ch rÃµ hÆ¡n lÃ  há»i ba Ä‘iá»u: ai sáº½ nháº­n dá»¯ liá»‡u, há» nháº­n Ä‘á»ƒ lÃ m gÃ¬ vÃ  dá»¯ liá»‡u Ä‘Ã³ giÃºp team ra quyáº¿t Ä‘á»‹nh nÃ o. Má»™t form lead cÃ³ thá»ƒ lÃ  cÃ¹ng má»™t hÃ nh Ä‘á»™ng, nhÆ°ng GA4, Meta vÃ  CRM nhÃ¬n nÃ³ theo nhá»¯ng má»¥c Ä‘Ã­ch khÃ¡c nhau.',
      },
      { type: 'visual', variant: 'tracking-destinations' },
      { type: 'heading', text: 'GA4 dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬?' },
      {
        type: 'paragraph',
        text: 'GA4 giÃºp team nhÃ¬n hÃ nh vi ngÆ°á»i dÃ¹ng trÃªn website hoáº·c app á»Ÿ táº§ng tá»•ng thá»ƒ. NÃ³ thÆ°á»ng tráº£ lá»i cÃ¡c cÃ¢u há»i nhÆ° ngÆ°á»i dÃ¹ng Ä‘áº¿n tá»« Ä‘Ã¢u, xem trang nÃ o, Ä‘i qua nhá»¯ng bÆ°á»›c nÃ o, event gÃ¬ xáº£y ra, funnel rÆ¡i á»Ÿ Ä‘Ã¢u vÃ  nguá»“n traffic nÃ o táº¡o tÃ­n hiá»‡u tá»‘t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'GA4 khÃ´ng chá»‰ Ä‘á»ƒ xem bao nhiÃªu ngÆ°á»i vÃ o web. Náº¿u event Ä‘Æ°á»£c thiáº¿t káº¿ tá»‘t, team cÃ³ thá»ƒ Ä‘á»c hÃ nh vi trÆ°á»›c khi khÃ¡ch trá»Ÿ thÃ nh lead hoáº·c Ä‘Æ¡n hÃ ng. VÃ­ dá»¥ má»™t landing page cÃ³ nhiá»u traffic nhÆ°ng Ã­t lead: GA4 cÃ³ thá»ƒ giÃºp nhÃ¬n PageView, scroll, CTA click, form start vÃ  form submit Ä‘á»ƒ xÃ¡c Ä‘á»‹nh ngÆ°á»i dÃ¹ng rá»i Ä‘i á»Ÿ Ä‘oáº¡n nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Dá»¯ liá»‡u Ä‘Ã³ há»¯u Ã­ch cho viá»‡c cáº£i thiá»‡n ná»™i dung, landing page vÃ  funnel. NÃ³ khÃ´ng tá»± thay tháº¿ dá»¯ liá»‡u bÃ¡n hÃ ng, cÅ©ng khÃ´ng pháº£i tÃ­n hiá»‡u tá»‘i Æ°u riÃªng cho má»i ná»n táº£ng quáº£ng cÃ¡o.',
      },
      { type: 'heading', text: 'Meta Pixel vÃ  TikTok Pixel dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Meta Pixel vÃ  TikTok Pixel chá»§ yáº¿u phá»¥c vá»¥ há»‡ quáº£ng cÃ¡o cá»§a tá»«ng ná»n táº£ng. ChÃºng giÃºp ghi nháº­n hÃ nh Ä‘á»™ng sau khi ngÆ°á»i dÃ¹ng tÆ°Æ¡ng tÃ¡c vá»›i ads, há»— trá»£ audience hoáº·c remarketing khi setup phÃ¹ há»£p, Ä‘á»“ng thá»i Ä‘Æ°a tÃ­n hiá»‡u chuyá»ƒn Ä‘á»•i vá» cho thuáº­t toÃ¡n quáº£ng cÃ¡o.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c event cÃ³ thá»ƒ lÃ  ViewContent, Contact, Lead, AddToCart hoáº·c Purchase tuá»³ hÃ nh trÃ¬nh thá»±c táº¿. Náº¿u Ä‘ang cháº¡y Meta Ads táº¡o lead, viá»‡c gá»­i Ä‘Ãºng Lead hoáº·c Contact giÃºp campaign nháº­n Ä‘Æ°á»£c tÃ­n hiá»‡u gáº§n káº¿t quáº£ kinh doanh hÆ¡n. Náº¿u cháº¡y TikTok Ads, TikTok Pixel thá»±c hiá»‡n vai trÃ² tÆ°Æ¡ng tá»± trong há»‡ TikTok.',
      },
      {
        type: 'paragraph',
        text: 'Hai pixel nÃ y khÃ´ng thay tháº¿ GA4. Meta Pixel chá»§ yáº¿u giÃºp Meta Ads ghi nháº­n vÃ  tá»‘i Æ°u; TikTok Pixel phá»¥c vá»¥ TikTok Ads. GA4 váº«n cáº§n khi team muá»‘n nhÃ¬n hÃ nh vi tá»•ng thá»ƒ trÃªn website, so sÃ¡nh cÃ¡c nguá»“n traffic vÃ  Ä‘á»c funnel ngoÃ i pháº¡m vi bÃ¡o cÃ¡o cá»§a má»™t ná»n táº£ng ads.',
      },
      { type: 'heading', text: 'Google Ads tag dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Google Ads conversion tag giÃºp ghi nháº­n conversion cho chiáº¿n dá»‹ch Google Ads. NÃ³ há»— trá»£ team nhÃ¬n campaign, keyword hoáº·c ad group nÃ o táº¡o hÃ nh Ä‘á»™ng quan trá»ng, Ä‘á»“ng thá»i gá»­i tÃ­n hiá»‡u Ä‘á»ƒ há»‡ Google Ads tá»‘i Æ°u bidding vÃ  campaign.',
      },
      {
        type: 'paragraph',
        text: 'Conversion cÃ³ thá»ƒ lÃ  form submit, lead, purchase hoáº·c phone call tuá»³ setup. Doanh nghiá»‡p cÃ³ thá»ƒ dÃ¹ng Google Ads tag riÃªng hoáº·c import conversion tá»« GA4 theo kiáº¿n trÃºc Ä‘Ã£ chá»n. BÃ i nÃ y khÃ´ng cáº§n Ä‘i sÃ¢u vÃ o lá»±a chá»n ká»¹ thuáº­t; Ä‘iá»ƒm cáº§n hiá»ƒu lÃ  Google Ads cáº§n tÃ­n hiá»‡u conversion Ä‘á»ƒ tá»‘i Æ°u trong há»‡ Google, cÃ²n GA4 phá»¥c vá»¥ gÃ³c nhÃ¬n phÃ¢n tÃ­ch tá»•ng thá»ƒ.',
      },
      { type: 'heading', text: 'GTM khÃ¡c gÃ¬ cÃ¡c tag vÃ  pixel trÃªn?' },
      {
        type: 'paragraph',
        text: 'GTM khÃ´ng pháº£i GA4, Meta Pixel, TikTok Pixel hay Google Ads. GTM lÃ  nÆ¡i quáº£n lÃ½, Ä‘iá»u phá»‘i vÃ  kiá»ƒm tra cÃ¡c tag Ä‘Ã³. CÃ³ thá»ƒ hÃ¬nh dung GTM nhÆ° báº£ng Ä‘iá»u phá»‘i: nháº­n biáº¿t má»™t hÃ nh Ä‘á»™ng Ä‘Ã£ xáº£y ra, kiá»ƒm tra Ä‘iá»u kiá»‡n rá»“i kÃ­ch hoáº¡t tag phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ gáº¯n tá»«ng Ä‘oáº¡n mÃ£ rá»i ráº¡c vÃ o website, team cÃ³ thá»ƒ dÃ¹ng GTM Ä‘á»ƒ quáº£n lÃ½ GA4 event, Meta Pixel event, TikTok Pixel event vÃ  Google Ads conversion. Trigger cÃ³ thá»ƒ lÃ  form gá»­i thÃ nh cÃ´ng, click hotline, click Zalo hoáº·c purchase. TrÆ°á»›c khi publish, team kiá»ƒm tra báº±ng Preview Ä‘á»ƒ biáº¿t tag nÃ o Ä‘Ã£ báº¯n vÃ  dá»¯ liá»‡u Ä‘i kÃ¨m cÃ³ Ä‘Ãºng khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'GTM khÃ´ng thay tháº¿ nÆ¡i nháº­n dá»¯ liá»‡u. CÃ¡c ná»n táº£ng GA4, Meta, TikTok vÃ  Google Ads má»›i lÃ  nÆ¡i sá»­ dá»¥ng tÃ­n hiá»‡u Ä‘á»ƒ phÃ¢n tÃ­ch hoáº·c tá»‘i Æ°u.',
      },
      { type: 'visual', variant: 'tracking-platform-comparison' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch GA4, Meta Pixel, TikTok Pixel vÃ  Google Ads tag báº±ng má»™t form lead.',
      },
      { type: 'heading', text: 'CÃ¹ng má»™t event cÃ³ thá»ƒ gá»­i vá» nhiá»u nÆ¡i' },
      {
        type: 'paragraph',
        text: 'Giáº£ sá»­ khÃ¡ch gá»­i form tÆ° váº¥n thÃ nh cÃ´ng. CÃ¹ng má»™t hÃ nh Ä‘á»™ng cÃ³ thá»ƒ táº¡o event lead_submit hoáº·c generate_lead trong GA4 Ä‘á»ƒ phÃ¢n tÃ­ch funnel; gá»­i Lead hoáº·c Contact vá» Meta náº¿u Ä‘ang cháº¡y Meta Ads; gá»­i event phÃ¹ há»£p vá» TikTok náº¿u cháº¡y TikTok Ads; vÃ  ghi nháº­n má»™t Lead conversion trong Google Ads náº¿u khÃ¡ch Ä‘áº¿n tá»« chiáº¿n dá»‹ch Google.',
      },
      {
        type: 'paragraph',
        text: 'á»ž lá»›p váº­n hÃ nh, dashboard hoáº·c CRM cÃ³ thá»ƒ nháº­n lead_id, form_name, source vÃ  campaign Ä‘á»ƒ Ä‘á»‘i chiáº¿u vá»›i lead tháº­t. Nhá» váº­y marketer biáº¿t ná»n táº£ng nÃ o bÃ¡o conversion, cÃ²n sales biáº¿t lead nÃ o Ä‘Ã£ Ä‘Æ°á»£c liÃªn há»‡ vÃ  cÃ³ cháº¥t lÆ°á»£ng ra sao.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»u nÃ y khÃ´ng cÃ³ nghÄ©a nÃªn gá»­i má»i event Ä‘áº¿n má»i nÆ¡i. Chá»‰ gá»­i khi cÃ³ má»¥c Ä‘Ã­ch rÃµ: ná»n táº£ng nÃ o Ä‘ang cháº¡y ads, team cáº§n tá»‘i Æ°u event nÃ o, dashboard cáº§n trÆ°á»ng dá»¯ liá»‡u gÃ¬ vÃ  cÃ³ cÃ¡ch test, Ä‘á»‘i chiáº¿u hay khÃ´ng.',
      },
      { type: 'visual', variant: 'same-event-different-platforms' },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi gáº¯n nhiá»u pixel vÃ  tag' },
      {
        type: 'list',
        items: [
          'Gáº¯n nhiá»u tag nhÆ°ng khÃ´ng biáº¿t tag nÃ o Ä‘ang báº¯n, báº¯n á»Ÿ trang nÃ o vÃ  do trigger nÃ o kÃ­ch hoáº¡t.',
          'Má»™t conversion bá»‹ gá»­i nhiá»u láº§n vÃ¬ event báº¯n láº¡i khi refresh, cáº£m Æ¡n trang táº£i láº¡i hoáº·c nhiá»u tag cÃ¹ng ghi nháº­n.',
          'Event name má»—i ná»n táº£ng má»™t kiá»ƒu nhÆ°ng khÃ´ng cÃ³ event map chung, khiáº¿n dashboard khÃ³ Ä‘á»‘i chiáº¿u.',
          'Cháº¡y Meta Ads hoáº·c TikTok Ads nhÆ°ng event quan trá»ng chÆ°a Ä‘Æ°á»£c gá»­i vá» Ä‘Ãºng ná»n táº£ng.',
          'Cháº¡y Google Ads nhÆ°ng conversion chÆ°a setup Ä‘Ãºng Ä‘iá»u kiá»‡n thÃ nh cÃ´ng.',
          'GA4 chá»‰ cÃ³ PageView, khÃ´ng cÃ³ Contact, Lead hoáº·c Purchase Ä‘á»ƒ Ä‘á»c hÃ nh trÃ¬nh thá»±c táº¿.',
          'KhÃ´ng dÃ¹ng GTM Preview, DebugView hoáº·c cÃ´ng cá»¥ test trÆ°á»›c khi publish.',
          'KhÃ´ng ghi láº¡i event map nÃªn vÃ i thÃ¡ng sau khÃ´ng ai nhá»› há»‡ thá»‘ng tracking Ä‘ang cháº¡y tháº¿ nÃ o.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Gáº¯n Ä‘á»§ pixel khÃ´ng Ä‘á»“ng nghÄ©a tracking tá»‘t. Má»™t setup Ä‘Ã¡ng tin cáº§n event map rÃµ, trigger Ä‘Ãºng hÃ nh Ä‘á»™ng thÃ nh cÃ´ng, dá»¯ liá»‡u Ä‘i kÃ¨m Ä‘á»§ dÃ¹ng vÃ  quy trÃ¬nh test cÃ³ thá»ƒ láº·p láº¡i.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t website gáº¯n nhiá»u pixel nhÆ°ng thiáº¿u event map nÃªn dashboard bá»‹ rá»‘i.',
      },
      { type: 'heading', text: 'Website marketing nÃªn cÃ³ tracking stack tá»‘i thiá»ƒu tháº¿ nÃ o?' },
      {
        type: 'list',
        items: [
          '1. GA4 Ä‘á»ƒ Ä‘á»c hÃ nh vi tá»•ng thá»ƒ, nguá»“n traffic, ná»™i dung vÃ  funnel.',
          '2. GTM Ä‘á»ƒ quáº£n lÃ½ tag, trigger, event vÃ  kiá»ƒm tra trÆ°á»›c khi publish.',
          '3. Pixel hoáº·c tag theo Ä‘Ãºng kÃªnh ads Ä‘ang cháº¡y: Meta Pixel cho Meta Ads, TikTok Pixel cho TikTok Ads vÃ  Google Ads conversion tag cho Google Ads.',
          '4. Event map ghi rÃµ PageView, Contact, Lead, Purchase cÃ¹ng Ä‘iá»u kiá»‡n thÃ nh cÃ´ng vÃ  nÆ¡i nháº­n.',
          '5. Quy trÃ¬nh test báº±ng GTM Preview, GA4 DebugView vÃ  cÃ´ng cá»¥ Test Events hoáº·c diagnostics cá»§a ná»n táº£ng khi cÃ³.',
          '6. Dashboard hoáº·c CRM Ä‘á»ƒ Ä‘á»‘i chiáº¿u sá»‘ trong ads vá»›i lead, order vÃ  káº¿t quáº£ tháº­t.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Stack nÃ y khÃ´ng cáº§n phá»©c táº¡p ngay tá»« ngÃ y Ä‘áº§u. Má»™t SME cÃ³ thá»ƒ báº¯t Ä‘áº§u vá»›i vÃ i event quan trá»ng nháº¥t, nhÆ°ng tá»«ng event pháº£i cÃ³ má»¥c Ä‘Ã­ch vÃ  ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m kiá»ƒm tra.',
      },
      { type: 'visual', variant: 'tracking-stack-checklist' },
      {
        type: 'placeholder',
        label: 'CHECKLIST PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n tracking stack checklist táº£i vá».',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra khi má»›i lÃ m tracking, nhiá»u ngÆ°á»i muá»‘n gáº¯n Ä‘á»§ má»i thá»© cho yÃªn tÃ¢m. NhÆ°ng lÃ m lÃ¢u sáº½ tháº¥y thá»© quan trá»ng khÃ´ng pháº£i sá»‘ lÆ°á»£ng pixel hay tag, mÃ  lÃ  há»‡ thá»‘ng tÃ­n hiá»‡u cÃ³ rÃµ hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t setup tá»‘t pháº£i tráº£ lá»i Ä‘Æ°á»£c website Ä‘ang Ä‘o hÃ nh Ä‘á»™ng nÃ o, má»—i hÃ nh Ä‘á»™ng gá»­i vá» Ä‘Ã¢u, event dÃ¹ng Ä‘á»ƒ phÃ¢n tÃ­ch, tá»‘i Æ°u ads hay Ä‘á»‘i chiáº¿u sales, cÃ³ bá»‹ trÃ¹ng khÃ´ng, test báº±ng cÃ¡ch nÃ o vÃ  cÃ³ ná»‘i vá» dashboard hoáº·c CRM khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'CÃ´ng cá»¥ chá»‰ cÃ³ Ã½ nghÄ©a khi team hiá»ƒu vai trÃ² cá»§a nÃ³ trong há»‡ thá»‘ng ra quyáº¿t Ä‘á»‹nh. Náº¿u vai trÃ² chÆ°a rÃµ, thÃªm tag thÆ°á»ng chá»‰ táº¡o thÃªm sá»‘ liá»‡u vÃ  thÃªm Ä‘iá»ƒm cáº§n debug.',
      },
      { type: 'heading', text: 'Hiá»ƒu vai trÃ² trÆ°á»›c khi gáº¯n thÃªm tag' },
      {
        type: 'paragraph',
        text: 'Pixel, GA4, TikTok Pixel vÃ  Google Ads tag khÃ´ng pháº£i nhá»¯ng thá»© giá»‘ng nhau chá»‰ khÃ¡c tÃªn. ChÃºng lÃ  cÃ¡c lá»›p tÃ­n hiá»‡u phá»¥c vá»¥ nhá»¯ng má»¥c Ä‘Ã­ch khÃ¡c nhau: Ä‘á»c hÃ nh vi, tá»‘i Æ°u quáº£ng cÃ¡o, ghi nháº­n conversion hoáº·c Ä‘iá»u phá»‘i viá»‡c gá»­i dá»¯ liá»‡u.',
      },
    ],
    cta: 'Náº¿u website cá»§a báº¡n Ä‘Ã£ gáº¯n nhiá»u pixel/tag nhÆ°ng team váº«n khÃ´ng cháº¯c sá»‘ nÃ o dÃ¹ng Ä‘á»ƒ phÃ¢n tÃ­ch, sá»‘ nÃ o dÃ¹ng Ä‘á»ƒ tá»‘i Æ°u ads vÃ  sá»‘ nÃ o Ä‘á»‘i chiáº¿u vá»›i lead tháº­t, hÃ£y báº¯t Ä‘áº§u báº±ng viá»‡c váº½ láº¡i event map trÆ°á»›c khi gáº¯n thÃªm báº¥t ká»³ tag má»›i nÃ o.',
  },
  {
    title: 'Event tracking lÃ  gÃ¬? PageView, Contact, Lead, Purchase nÃªn hiá»ƒu sao?',
    slug: 'event-tracking-la-gi-pageview-contact-lead-purchase-nen-hieu-sao',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-marketing-strategy-session-01.jpg",
                "alt": "Workshop room with a marketing strategy presentation",
                "caption": "Marketing strategy workshop session",
                "width": 1332,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-result-01.jpg",
                      "alt": "PageSpeed performance report screenshot",
                      "caption": "PageSpeed performance result",
                      "width": 2048,
                      "height": 1189,
                      "fit": "contain",
                      "afterHeading": "KhÃ´ng pháº£i event nÃ o cÅ©ng cÃ³ giÃ¡ trá»‹ nhÆ° nhau"
                }
          ]
    },
    excerpt:
      'Event tracking lÃ  cÃ¡ch ghi nháº­n nhá»¯ng hÃ nh Ä‘á»™ng quan trá»ng cá»§a khÃ¡ch hÃ ng trÃªn website: xem trang, click liÃªn há»‡, gá»­i form, táº¡o lead hoáº·c mua hÃ ng. NhÆ°ng khÃ´ng pháº£i event nÃ o cÅ©ng cÃ³ giÃ¡ trá»‹ nhÆ° nhau. Marketer cáº§n hiá»ƒu PageView, Contact, Lead vÃ  Purchase khÃ¡c nhau á»Ÿ Ä‘Ã¢u Ä‘á»ƒ tá»‘i Æ°u Ä‘Ãºng tÃ­n hiá»‡u.',
    content: [
      {
        type: 'paragraph',
        text: 'Khi báº¯t Ä‘áº§u lÃ m tracking, ráº¥t nhiá»u team nhÃ¬n vÃ o danh sÃ¡ch event vÃ  tháº¥y toÃ n nhá»¯ng cÃ¡i tÃªn quen quen: PageView, Contact, Lead, Purchase. NhÆ°ng khi há»i tá»«ng event cÃ³ nghÄ©a gÃ¬ trong kinh doanh, event nÃ o nÃªn dÃ¹ng Ä‘á»ƒ tá»‘i Æ°u ads, event nÃ o chá»‰ Ä‘á»ƒ Ä‘á»c hÃ nh vi, cÃ¢u tráº£ lá»i láº¡i khÃ´ng rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ nÆ¡i gom táº¥t cáº£ thÃ nh conversion. CÃ³ nÆ¡i khÃ¡ch má»›i click nÃºt Ä‘Ã£ Ä‘Æ°á»£c tÃ­nh lÃ  Lead. Má»™t trang khÃ¡c ghi nháº­n conversion khi trang cáº£m Æ¡n Ä‘Æ°á»£c má»Ÿ láº¡i dÃ¹ form khÃ´ng vá»«a gá»­i thÃ nh cÃ´ng. Vá»›i Purchase, event cÃ³ thá»ƒ thiáº¿u transaction_id vÃ  value nÃªn khÃ´ng Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c doanh thu.',
      },
      { type: 'heading', text: 'Event tracking nÃªn Ä‘Æ°á»£c hiá»ƒu Ä‘Æ¡n giáº£n nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Event tracking lÃ  viá»‡c ghi nháº­n nhá»¯ng hÃ nh Ä‘á»™ng quan trá»ng cá»§a khÃ¡ch hÃ ng trÃªn website hoáº·c landing page. ÄÃ³ cÃ³ thá»ƒ lÃ  xem má»™t trang, click gá»i hotline, má»Ÿ Zalo hoáº·c Messenger, gá»­i form tÆ° váº¥n, Ä‘áº·t hÃ ng hay thanh toÃ¡n thÃ nh cÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i event giá»‘ng má»™t dáº¥u má»‘c cho biáº¿t khÃ¡ch Ä‘Ã£ Ä‘i Ä‘áº¿n Ä‘Ã¢u trong hÃ nh trÃ¬nh. PageView cho tháº¥y há» Ä‘Ã£ vÃ o xem. Contact cho tháº¥y há» báº¯t Ä‘áº§u muá»‘n tÆ°Æ¡ng tÃ¡c. Lead cho tháº¥y team Ä‘Ã£ nháº­n Ä‘Æ°á»£c má»™t tÃ­n hiá»‡u Ä‘á»§ rÃµ Ä‘á»ƒ xá»­ lÃ½. Purchase cho tháº¥y hÃ nh trÃ¬nh Ä‘Ã£ táº¡o ra Ä‘Æ¡n hÃ ng hoáº·c doanh thu.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i má»i cÃº click Ä‘á»u cáº§n Ä‘o ngay. Äiá»u quan trá»ng lÃ  chá»n cÃ¡c hÃ nh Ä‘á»™ng giÃºp team hiá»ƒu khÃ¡ch Ä‘ang tiáº¿n gáº§n hay rá»i xa má»¥c tiÃªu mua hÃ ng, rá»“i thá»‘ng nháº¥t Ä‘iá»u kiá»‡n thÃ nh cÃ´ng cho tá»«ng hÃ nh Ä‘á»™ng.',
      },
      { type: 'visual', variant: 'event-tracking-journey' },
      { type: 'heading', text: 'KhÃ´ng pháº£i event nÃ o cÅ©ng cÃ³ giÃ¡ trá»‹ nhÆ° nhau' },
      {
        type: 'paragraph',
        text: 'PageView khÃ´ng thá»ƒ Ä‘Æ°á»£c hiá»ƒu giá»‘ng Lead. Contact khÃ´ng thá»ƒ Ä‘Æ°á»£c hiá»ƒu giá»‘ng Purchase. Lead cÅ©ng chÆ°a cháº¯c táº¡o ra doanh thu. Bá»‘n event nÃ y Ä‘áº¡i diá»‡n cho bá»‘n má»©c tÃ­n hiá»‡u khÃ¡c nhau.',
      },
      {
        type: 'list',
        items: [
          'PageView lÃ  tÃ­n hiá»‡u nháº¹: cÃ³ ngÆ°á»i vÃ o xem nhÆ°ng chÆ°a biáº¿t há» cÃ³ nhu cáº§u hay khÃ´ng.',
          'Contact lÃ  tÃ­n hiá»‡u quan tÃ¢m: khÃ¡ch báº¯t Ä‘áº§u má»™t hÃ nh Ä‘á»™ng liÃªn há»‡.',
          'Lead lÃ  tÃ­n hiá»‡u cÃ³ kháº£ nÄƒng bÃ¡n hÃ ng: khÃ¡ch Ä‘á»ƒ láº¡i thÃ´ng tin hoáº·c hoÃ n táº¥t hÃ nh Ä‘á»™ng Ä‘á»§ rÃµ Ä‘á»ƒ team xá»­ lÃ½.',
          'Purchase lÃ  outcome kinh doanh: cÃ³ Ä‘Æ¡n hÃ ng hoáº·c doanh thu Ä‘Æ°á»£c ghi nháº­n.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u tá»‘i Æ°u ads theo event quÃ¡ nháº¹, ná»n táº£ng cÃ³ thá»ƒ há»c cÃ¡ch tÃ¬m nhiá»u traffic ráº» thay vÃ¬ ngÆ°á»i cÃ³ nhu cáº§u. NhÆ°ng náº¿u chá»‰ chá»n Purchase khi doanh nghiá»‡p ráº¥t Ã­t Ä‘Æ¡n, há»‡ thá»‘ng láº¡i thiáº¿u tÃ­n hiá»‡u Ä‘á»ƒ há»c. Marketer cáº§n chá»n event Ä‘á»§ gáº§n outcome, Ä‘á»“ng thá»i Ä‘á»§ volume vÃ  Ä‘á»§ Ä‘Ã¡ng tin theo giai Ä‘oáº¡n hiá»‡n táº¡i.',
      },
      { type: 'visual', variant: 'event-value-ladder' },
      { type: 'heading', text: 'PageView nÃªn hiá»ƒu sao?' },
      {
        type: 'paragraph',
        text: 'PageView chá»‰ nÃ³i ráº±ng má»™t ngÆ°á»i Ä‘Ã£ xem trang. NÃ³ chÆ°a chá»©ng minh ngÆ°á»i Ä‘Ã³ hiá»ƒu sáº£n pháº©m, muá»‘n liÃªn há»‡ hay sáºµn sÃ ng mua. PageView há»¯u Ã­ch Ä‘á»ƒ Ä‘á»c lÆ°á»£ng traffic, so sÃ¡nh nguá»“n truy cáº­p, biáº¿t trang nÃ o Ä‘Æ°á»£c xem nhiá»u vÃ  lÃ m ná»n cho phÃ¢n tÃ­ch cÃ¡c bÆ°á»›c tiáº¿p theo.',
      },
      {
        type: 'paragraph',
        text: 'Lá»—i thÆ°á»ng gáº·p lÃ  tháº¥y PageView cao rá»“i káº¿t luáº­n marketing tá»‘t, hoáº·c dÃ¹ng PageView lÃ m má»¥c tiÃªu trong khi doanh nghiá»‡p cáº§n lead hay Ä‘Æ¡n hÃ ng. PageView lÃ  Ä‘iá»ƒm báº¯t Ä‘áº§u cá»§a hÃ nh trÃ¬nh, khÃ´ng pháº£i báº±ng chá»©ng cá»§a tÄƒng trÆ°á»Ÿng.',
      },
      { type: 'heading', text: 'Contact nÃªn hiá»ƒu sao?' },
      {
        type: 'paragraph',
        text: 'Contact xáº£y ra khi khÃ¡ch báº¯t Ä‘áº§u má»™t hÃ nh Ä‘á»™ng liÃªn há»‡: click gá»i hotline, click Zalo, má»Ÿ Messenger, click email hoáº·c nháº¥n nÃºt tÆ° váº¥n. TÃ­n hiá»‡u nÃ y máº¡nh hÆ¡n PageView vÃ¬ khÃ¡ch Ä‘Ã£ thá»ƒ hiá»‡n Ã½ Ä‘á»‹nh tÆ°Æ¡ng tÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Tuy váº­y, Contact chÆ°a cháº¯c lÃ  lead tháº­t. Má»™t ngÆ°á»i cÃ³ thá»ƒ click Zalo nhÆ°ng chÆ°a nháº¯n, click hotline nhÆ°ng cuá»™c gá»i khÃ´ng káº¿t ná»‘i, hoáº·c má»Ÿ Messenger rá»“i rá»i Ä‘i. VÃ¬ tháº¿ Contact nÃªn Ä‘Æ°á»£c Ä‘á»c nhÆ° tÃ­n hiá»‡u quan tÃ¢m, khÃ´ng pháº£i káº¿t quáº£ bÃ¡n hÃ ng Ä‘Ã£ cháº¯c cháº¯n.',
      },
      {
        type: 'paragraph',
        text: 'Contact Ä‘áº·c biá»‡t quan trá»ng vá»›i SME vÃ¬ nhiá»u khÃ¡ch khÃ´ng Ä‘iá»n form mÃ  chá»n gá»i hoáº·c nháº¯n ngay. Náº¿u chá»‰ Ä‘o form submit, team cÃ³ thá»ƒ Ä‘Ã¡nh giÃ¡ tháº¥p landing page vÃ  campaign Ä‘ang táº¡o ra nhá»¯ng cuá»™c liÃªn há»‡ tháº­t.',
      },
      { type: 'heading', text: 'Lead nÃªn hiá»ƒu sao?' },
      {
        type: 'paragraph',
        text: 'Lead lÃ  khi khÃ¡ch Ä‘á»ƒ láº¡i tÃ­n hiá»‡u rÃµ hÆ¡n Ä‘á»ƒ team cÃ³ thá»ƒ xá»­ lÃ½ tiáº¿p. VÃ­ dá»¥ gá»“m gá»­i form tÆ° váº¥n hoáº·c bÃ¡o giÃ¡ thÃ nh cÃ´ng, Ä‘á»ƒ láº¡i sá»‘ Ä‘iá»‡n thoáº¡i, hoÃ n táº¥t má»™t bÆ°á»›c Ä‘Äƒng kÃ½ cÃ³ giÃ¡ trá»‹, hoáº·c má»™t contact Ä‘Æ°á»£c sales xÃ¡c nháº­n cÃ³ nhu cáº§u tÆ°Æ¡ng Ä‘á»‘i rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm quan trá»ng lÃ  Lead nÃªn báº¯n khi hÃ nh Ä‘á»™ng thÃ nh cÃ´ng tháº­t. Vá»›i form, Ä‘iá»u kiá»‡n cÃ³ thá»ƒ lÃ  backend xÃ¡c nháº­n Ä‘Ã£ nháº­n dá»¯ liá»‡u, website hiá»ƒn thá»‹ success state hoáº·c chuyá»ƒn sang trang cáº£m Æ¡n theo luá»“ng Ä‘Æ°á»£c kiá»ƒm soÃ¡t.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u khÃ¡ch chá»‰ click â€œGá»­i thÃ´ng tinâ€ nhÆ°ng form thiáº¿u sá»‘ Ä‘iá»‡n thoáº¡i, bÃ¡o lá»—i vÃ  chÆ°a gá»­i thÃ nh cÃ´ng, há»‡ thá»‘ng khÃ´ng nÃªn ghi Lead. Báº¯n event ngay á»Ÿ cÃº click lÃ m bÃ¡o cÃ¡o cÃ³ nhiá»u lead áº£o, campaign tá»‘i Æ°u theo tÃ­n hiá»‡u sai vÃ  sales khÃ´ng tÃ¬m tháº¥y dá»¯ liá»‡u tÆ°Æ¡ng á»©ng.',
      },
      { type: 'visual', variant: 'event-definition-table' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch PageView, Contact, Lead, Purchase báº±ng má»™t landing page tháº­t.',
      },
      { type: 'heading', text: 'Purchase nÃªn hiá»ƒu sao?' },
      {
        type: 'paragraph',
        text: 'Purchase lÃ  event gáº§n doanh thu nháº¥t, thÆ°á»ng xuáº¥t hiá»‡n trong ecommerce hoáº·c luá»“ng Ä‘áº·t hÃ ng online. Má»™t event tá»‘t khÃ´ng chá»‰ bÃ¡o â€œcÃ³ ngÆ°á»i muaâ€ mÃ  cÃ²n mang Ä‘á»§ thÃ´ng tin Ä‘á»ƒ kiá»ƒm tra vá»›i Ä‘Æ¡n hÃ ng tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c trÆ°á»ng thÆ°á»ng cáº§n gá»“m transaction_id, value, currency, items vÃ  quantity náº¿u cÃ³; event_id cÃ³ thá»ƒ dÃ¹ng khi há»‡ thá»‘ng cáº§n dedup. Äiá»u kiá»‡n ghi nháº­n cÅ©ng pháº£i rÃµ: táº¡o Ä‘Æ¡n, thanh toÃ¡n thÃ nh cÃ´ng hay hoÃ n táº¥t bÆ°á»›c nÃ o. Náº¿u thiáº¿u mÃ£ Ä‘Æ¡n vÃ  giÃ¡ trá»‹, dashboard khÃ³ ná»‘i doanh thu; náº¿u trang xÃ¡c nháº­n Ä‘Æ°á»£c táº£i láº¡i vÃ  event báº¯n láº¡i, sá»‘ purchase cÃ³ thá»ƒ bá»‹ trÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'SME khÃ´ng cÃ³ ecommerce cÃ³ thá»ƒ chÆ°a cáº§n Purchase Ä‘Ãºng nghÄ©a. Khi Ä‘Ã³ team cÃ³ thá»ƒ dÃ¹ng tÃ­n hiá»‡u gáº§n outcome hÆ¡n nhÆ° QualifiedLead, QuoteRequested, ConsultationBooked, DealCreated hoáº·c OfflinePurchase náº¿u cÃ³ quy trÃ¬nh Ä‘á»‘i chiáº¿u. TÃªn event pháº£i pháº£n Ã¡nh Ä‘Ãºng hÃ nh Ä‘á»™ng tháº­t, khÃ´ng nÃªn Ä‘á»•i tÃªn Lead thÃ nh Purchase chá»‰ Ä‘á»ƒ bÃ¡o cÃ¡o trÃ´ng tá»‘t hÆ¡n.',
      },
      { type: 'heading', text: 'NÃªn dÃ¹ng event nÃ o Ä‘á»ƒ tá»‘i Æ°u ads?' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ má»™t Ä‘Ã¡p Ã¡n cá»‘ Ä‘á»‹nh cho má»i doanh nghiá»‡p. Website má»›i vÃ  Ã­t dá»¯ liá»‡u cÃ³ thá»ƒ báº¯t Ä‘áº§u vá»›i Contact hoáº·c Lead náº¿u Purchase quÃ¡ Ã­t. Lead gen nÃªn Æ°u tiÃªn Lead hoáº·c QualifiedLead hÆ¡n PageView. Ecommerce cÃ³ Ä‘Æ¡n Ä‘á»u thÆ°á»ng cáº§n Purchase lÃ m tÃ­n hiá»‡u chÃ­nh.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u Lead nhiá»u nhÆ°ng pháº§n lá»›n sai tá»‡p, team cáº§n nhÃ¬n sÃ¢u hÆ¡n vÃ o QualifiedLead hoáº·c tÃ­n hiá»‡u downstream tá»« sales. Náº¿u chá»‰ tá»‘i Æ°u PageView, campaign cÃ³ thá»ƒ kÃ©o nhiá»u lÆ°á»£t truy cáº­p ráº» nhÆ°ng khÃ´ng táº¡o nhu cáº§u tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'NguyÃªn táº¯c thá»±c táº¿ lÃ  chá»n event Ä‘á»§ gáº§n outcome kinh doanh, cÃ³ volume Ä‘á»§ Ä‘á»ƒ há»‡ thá»‘ng há»c vÃ  Ä‘Æ°á»£c kiá»ƒm tra Ä‘á»§ ká»¹ Ä‘á»ƒ Ä‘Ã¡ng tin. Gáº§n doanh thu nhÆ°ng báº¯n sai váº«n lÃ  tÃ­n hiá»‡u kÃ©m.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi Ä‘á»‹nh nghÄ©a event' },
      {
        type: 'list',
        items: [
          'Gá»i má»i hÃ nh Ä‘á»™ng lÃ  conversion nÃªn khÃ´ng phÃ¢n biá»‡t Ä‘Æ°á»£c má»©c Ä‘á»™ quan tÃ¢m.',
          'TÃ­nh cÃº click submit lÃ  Lead dÃ¹ form chÆ°a gá»­i thÃ nh cÃ´ng.',
          'KhÃ´ng Ä‘o Contact nÃªn bá» sÃ³t Zalo, Messenger vÃ  hotline.',
          'Chá»‰ Ä‘o PageView nÃªn khÃ´ng biáº¿t traffic cÃ³ táº¡o hÃ nh Ä‘á»™ng giÃ¡ trá»‹ hay khÃ´ng.',
          'Lead hoáº·c Purchase báº¯n láº¡i khi refresh trang vÃ  bá»‹ tÃ­nh trÃ¹ng.',
          'Event name khÃ´ng nháº¥t quÃ¡n giá»¯a GA4, Pixel vÃ  Ads tag.',
          'Purchase thiáº¿u transaction_id hoáº·c value nÃªn khÃ´ng Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c doanh thu.',
          'KhÃ´ng cÃ³ event map nÃªn sau vÃ i thÃ¡ng khÃ´ng ai biáº¿t event dÃ¹ng cho quyáº¿t Ä‘á»‹nh nÃ o.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Event tracking sai khÃ´ng chá»‰ lÃ m dashboard lá»‡ch. NÃ³ cÃ²n khiáº¿n thuáº­t toÃ¡n ads há»c sai hÃ nh Ä‘á»™ng, marketer Ä‘Ã¡nh giÃ¡ sai campaign vÃ  sales nháº­n má»™t lÆ°á»£ng lead khÃ´ng khá»›p vá»›i bÃ¡o cÃ¡o.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh viá»‡c báº¯n Lead khi click submit lÃ m campaign tá»‘i Æ°u sai.',
      },
      { type: 'heading', text: 'Checklist Ä‘á»‹nh nghÄ©a event cho website marketing' },
      { type: 'visual', variant: 'event-tracking-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n event map template cho website marketing.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m tracking, nhiá»u ngÆ°á»i chá»‰ há»i â€œÄ‘Ã£ gáº¯n pixel chÆ°a?â€. LÃ m lÃ¢u hÆ¡n, cÃ¢u há»i quan trá»ng láº¡i lÃ  â€œmÃ¬nh Ä‘ang gá»­i tÃ­n hiá»‡u gÃ¬ cho ná»n táº£ng vÃ  tÃ­n hiá»‡u Ä‘Ã³ cÃ³ Ä‘Ãºng Ã½ nghÄ©a khÃ´ng?â€.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u Lead báº¯n sai, ads há»c sai. Náº¿u Contact khÃ´ng Ä‘Æ°á»£c Ä‘o, team bá» sÃ³t kÃªnh liÃªn há»‡ tháº­t. Náº¿u Purchase thiáº¿u dá»¯ liá»‡u, dashboard khÃ´ng ná»‘i Ä‘Æ°á»£c doanh thu. Náº¿u PageView bá»‹ xem nhÆ° conversion, team ráº¥t dá»… tá»± ru ngá»§ báº±ng traffic.',
      },
      {
        type: 'paragraph',
        text: 'Event tracking tá»‘t khÃ´ng chá»‰ lÃ m bÃ¡o cÃ¡o cÃ³ thÃªm sá»‘. NÃ³ giÃºp team hiá»ƒu khÃ¡ch Ä‘ang tiáº¿n Ä‘áº¿n Ä‘Ã¢u trong hÃ nh trÃ¬nh mua hÃ ng vÃ  chá»n Ä‘Ãºng Ä‘iá»ƒm cáº§n cáº£i thiá»‡n.',
      },
      { type: 'heading', text: 'Äá»c event nhÆ° cÃ¡c má»©c tÃ­n hiá»‡u kinh doanh' },
      {
        type: 'paragraph',
        text: 'PageView, Contact, Lead vÃ  Purchase khÃ´ng pháº£i bá»‘n cÃ¡i tÃªn ká»¹ thuáº­t Ä‘á»ƒ gáº¯n cho Ä‘á»§. ChÃºng lÃ  bá»‘n má»©c tÃ­n hiá»‡u trong hÃ nh trÃ¬nh tá»« ngÆ°á»i xem thÃ nh khÃ¡ch mua. Khi Ä‘á»‹nh nghÄ©a Ä‘Ãºng tá»«ng má»©c, marketing, sales vÃ  founder cÃ³ cÃ¹ng má»™t ngÃ´n ngá»¯ Ä‘á»ƒ Ä‘á»c káº¿t quáº£.',
      },
    ],
    cta: 'Náº¿u website cá»§a báº¡n Ä‘Ã£ cÃ³ tracking nhÆ°ng team váº«n chÆ°a rÃµ event nÃ o lÃ  tÃ­n hiá»‡u nháº¹, event nÃ o lÃ  lead tháº­t vÃ  event nÃ o gáº¯n vá»›i doanh thu, hÃ£y báº¯t Ä‘áº§u báº±ng viá»‡c váº½ láº¡i event map trÆ°á»›c khi tá»‘i Æ°u thÃªm ngÃ¢n sÃ¡ch quáº£ng cÃ¡o.',
  },
  {
    title: 'VÃ¬ sao pháº£i cÃ³ event_id Ä‘á»ƒ trÃ¡nh Ä‘o trÃ¹ng chuyá»ƒn Ä‘á»•i?',
    slug: 'vi-sao-phai-co-event-id-de-tranh-do-trung-chuyen-doi',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-diagnostics-01.jpg",
                "alt": "PageSpeed Insights diagnostics screenshot",
                "caption": "PageSpeed diagnostics",
                "width": 2880,
                "height": 1466,
                "fit": "contain"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-mobile-result-01.jpg",
                      "alt": "PageSpeed Insights mobile performance screenshot",
                      "caption": "PageSpeed mobile performance result",
                      "width": 2880,
                      "height": 1458,
                      "fit": "contain",
                      "afterHeading": "event_id nÃªn Ä‘Æ°á»£c hiá»ƒu Ä‘Æ¡n giáº£n nhÆ° tháº¿ nÃ o?"
                }
          ]
    },
    excerpt:
      'event_id lÃ  mÃ£ Ä‘á»‹nh danh giÃºp há»‡ thá»‘ng nháº­n ra nhiá»u tÃ­n hiá»‡u tracking Ä‘ang nÃ³i vá» cÃ¹ng má»™t chuyá»ƒn Ä‘á»•i. Náº¿u khÃ´ng cÃ³ event_id hoáº·c cÆ¡ cháº¿ dedup rÃµ, má»™t lead hoáº·c má»™t Ä‘Æ¡n hÃ ng cÃ³ thá»ƒ bá»‹ ghi nháº­n nhiá»u láº§n, khiáº¿n dashboard, ads vÃ  quyáº¿t Ä‘á»‹nh marketing bá»‹ lá»‡ch.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t lá»—i tracking ráº¥t nguy hiá»ƒm vÃ¬ nhÃ¬n bÃªn ngoÃ i má»i thá»© váº«n cÃ³ váº» tá»‘t: ads bÃ¡o conversion tÄƒng, dashboard cÃ³ nhiá»u lead hÆ¡n, report nhÃ¬n Ä‘áº¹p hÆ¡n. NhÆ°ng khi Ä‘á»‘i chiáº¿u vá»›i form, CRM hoáº·c Ä‘Æ¡n hÃ ng tháº­t, team má»›i phÃ¡t hiá»‡n má»™t pháº§n conversion Ä‘ang bá»‹ ghi nháº­n trÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t khÃ¡ch gá»­i form má»™t láº§n nhÆ°ng ads cÃ³ thá»ƒ bÃ¡o hai Lead. Má»™t Ä‘Æ¡n hÃ ng tháº­t cÃ³ thá»ƒ xuáº¥t hiá»‡n nhiá»u láº§n khi trang cáº£m Æ¡n Ä‘Æ°á»£c refresh, hoáº·c browser vÃ  server cÃ¹ng gá»­i tÃ­n hiá»‡u mÃ  khÃ´ng cÃ³ cÆ¡ cháº¿ nháº­n diá»‡n Ä‘Ã³ lÃ  cÃ¹ng má»™t hÃ nh Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'Founder nhÃ¬n sá»‘ tÆ°á»Ÿng campaign Ä‘ang tá»‘t hÆ¡n. Marketing cÃ³ thá»ƒ tÄƒng ngÃ¢n sÃ¡ch, trong khi sales khÃ´ng tháº¥y sá»‘ lead tháº­t tÆ°Æ¡ng á»©ng. Váº¥n Ä‘á» lÃºc nÃ y khÃ´ng náº±m á»Ÿ campaign hay sales; tracking Ä‘ang Ä‘áº¿m trÃ¹ng.',
      },
      { type: 'heading', text: 'Äo trÃ¹ng chuyá»ƒn Ä‘á»•i lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Äo trÃ¹ng chuyá»ƒn Ä‘á»•i lÃ  khi má»™t hÃ nh Ä‘á»™ng tháº­t cá»§a khÃ¡ch hÃ ng bá»‹ há»‡ thá»‘ng tracking ghi nháº­n thÃ nh nhiá»u conversion. KhÃ¡ch gá»­i form tÆ° váº¥n má»™t láº§n nhÆ°ng report cÃ³ hai Lead. KhÃ¡ch mua má»™t Ä‘Æ¡n nhÆ°ng Purchase Ä‘Æ°á»£c gá»­i hai láº§n. Má»™t cÃº click liÃªn há»‡ cÃ³ thá»ƒ kÃ­ch hoáº¡t nhiá»u tag Contact cÃ¹ng lÃºc.',
      },
      {
        type: 'paragraph',
        text: 'TÃ¬nh huá»‘ng cÅ©ng thÆ°á»ng gáº·p khi website vá»«a gá»­i event tá»« browser pixel, vá»«a gá»­i tá»« server-side, CAPI hoáº·c API. CÃ³ nhiá»u tÃ­n hiá»‡u khÃ´ng pháº£i Ä‘iá»u xáº¥u; browser vÃ  server cÃ³ thá»ƒ bá»• trá»£ cho nhau. Váº¥n Ä‘á» lÃ  ná»n táº£ng khÃ´ng cÃ³ Ä‘á»§ cÆ¡ sá»Ÿ Ä‘á»ƒ biáº¿t cÃ¡c tÃ­n hiá»‡u Ä‘Ã³ Ä‘ang nÃ³i vá» cÃ¹ng má»™t conversion.',
      },
      {
        type: 'paragraph',
        text: 'Khi Ä‘Ã³, má»™t hÃ nh Ä‘á»™ng kinh doanh bá»‹ biáº¿n thÃ nh nhiá»u dÃ²ng sá»‘. Dashboard Ä‘áº¹p hÆ¡n thá»±c táº¿, chi phÃ­ trÃªn má»—i chuyá»ƒn Ä‘á»•i nhÃ¬n ráº» hÆ¡n, nhÆ°ng form, CRM vÃ  order system khÃ´ng thay Ä‘á»•i.',
      },
      { type: 'visual', variant: 'duplicate-conversion-problem' },
      { type: 'heading', text: 'event_id nÃªn Ä‘Æ°á»£c hiá»ƒu Ä‘Æ¡n giáº£n nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'event_id lÃ  mÃ£ Ä‘á»‹nh danh cho má»™t event cá»¥ thá»ƒ. CÃ³ thá»ƒ hiá»ƒu nÃ³ nhÆ° mÃ£ phiáº¿u cá»§a má»™t hÃ nh Ä‘á»™ng: lead nÃ y cÃ³ mÃ£ riÃªng, purchase kia cÃ³ mÃ£ riÃªng. Khi cáº§n gá»­i cÃ¹ng hÃ nh Ä‘á»™ng qua nhiá»u luá»“ng tracking, mÃ£ Ä‘Ã³ giÃºp cÃ¡c bÃªn cÃ³ Ä‘iá»ƒm chung Ä‘á»ƒ Ä‘á»‘i chiáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥, má»™t khÃ¡ch gá»­i form tÆ° váº¥n thÃ nh cÃ´ng. Event cÃ³ tÃªn Lead, event_id lÃ  lead_abc123 vÃ  form_name lÃ  consultation_form. Browser gá»­i Lead vá»›i event_id lead_abc123; server cÅ©ng gá»­i Lead vá»›i Ä‘Ãºng event_id lead_abc123. Trong Ä‘iá»u kiá»‡n dedup phÃ¹ há»£p, ná»n táº£ng cÃ³ cÆ¡ sá»Ÿ tá»‘t hÆ¡n Ä‘á»ƒ hiá»ƒu hai tÃ­n hiá»‡u nÃ y cÃ³ thá»ƒ Ä‘áº¡i diá»‡n cho cÃ¹ng má»™t lead.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u browser vÃ  server dÃ¹ng hai ID khÃ¡c nhau, hoáº·c má»™t bÃªn khÃ´ng cÃ³ ID, viá»‡c Ä‘á»‘i chiáº¿u khÃ³ hÆ¡n nhiá»u. Tuy váº­y, event_id khÃ´ng lÃ m tracking tá»± Ä‘Ãºng hoÃ n toÃ n. Event name, Ä‘iá»u kiá»‡n thÃ nh cÃ´ng, thá»i Ä‘iá»ƒm gá»­i vÃ  cáº¥u hÃ¬nh ná»n táº£ng váº«n pháº£i nháº¥t quÃ¡n.',
      },
      { type: 'visual', variant: 'event-id-dedup-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch event_id báº±ng vÃ­ dá»¥ browser event vÃ  server event.',
      },
      { type: 'heading', text: 'Khi nÃ o dá»… bá»‹ Ä‘o trÃ¹ng conversion?' },
      {
        type: 'paragraph',
        text: 'TÃ¬nh huá»‘ng 1 â€” Thank-you page bá»‹ refresh. KhÃ¡ch gá»­i form rá»“i vÃ o trang cáº£m Æ¡n. Náº¿u event báº¯n má»—i láº§n trang táº£i, má»™t láº§n refresh cÃ³ thá»ƒ táº¡o thÃªm conversion dÃ¹ khÃ´ng cÃ³ form má»›i.',
      },
      {
        type: 'paragraph',
        text: 'TÃ¬nh huá»‘ng 2 â€” Browser pixel vÃ  server-side cÃ¹ng gá»­i. Browser gá»­i Lead, CAPI hoáº·c API cÅ©ng gá»­i Lead, nhÆ°ng event_id khÃ´ng Ä‘Æ°á»£c Ä‘á»“ng bá»™ nÃªn ná»n táº£ng khÃ³ nháº­n ra Ä‘Ã¢y lÃ  cÃ¹ng má»™t hÃ nh Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'TÃ¬nh huá»‘ng 3 â€” Má»™t form cÃ³ nhiá»u trigger. Team vá»«a báº¯n event theo click nÃºt, vá»«a theo form submit, vá»«a theo thank-you page. Chá»‰ má»™t láº§n gá»­i form nhÆ°ng ba Ä‘iá»u kiá»‡n Ä‘á»u cÃ³ thá»ƒ cháº¡y.',
      },
      {
        type: 'paragraph',
        text: 'TÃ¬nh huá»‘ng 4 â€” Nhiá»u tag trÃ¹ng logic. Má»™t event Ä‘Æ°á»£c cáº¥u hÃ¬nh á»Ÿ mÃ£ website, GTM vÃ  má»™t plugin khÃ¡c mÃ  khÃ´ng cÃ³ event map, khiáº¿n tá»«ng nÆ¡i gá»­i má»™t tÃ­n hiá»‡u tÆ°Æ¡ng tá»±.',
      },
      {
        type: 'paragraph',
        text: 'TÃ¬nh huá»‘ng 5 â€” Purchase thiáº¿u transaction_id. ÄÆ¡n hÃ ng Ä‘Æ°á»£c gá»­i láº¡i nhÆ°ng khÃ´ng cÃ³ mÃ£ Ä‘Æ¡n Ä‘á»ƒ Ä‘á»‘i chiáº¿u, khiáº¿n dashboard hoáº·c ná»n táº£ng khÃ³ xÃ¡c Ä‘á»‹nh Ä‘Æ¡n Ä‘Ã£ ghi nháº­n. Äo trÃ¹ng thÆ°á»ng khÃ´ng Ä‘áº¿n tá»« má»™t lá»—i lá»›n; nÃ³ hÃ¬nh thÃ nh tá»« nhiá»u trigger nhá» chÆ°a Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a rÃµ.',
      },
      { type: 'heading', text: 'event_id khÃ¡c gÃ¬ transaction_id?' },
      {
        type: 'paragraph',
        text: 'event_id lÃ  mÃ£ cá»§a event tracking, dÃ¹ng Ä‘á»ƒ há»— trá»£ Ä‘á»‘i chiáº¿u hoáº·c dedup tÃ­n hiá»‡u trong quÃ¡ trÃ¬nh gá»­i event. NÃ³ thÆ°á»ng quan trá»ng trong luá»“ng browser vÃ  server, Pixel vá»›i CAPI hoáº·c API, vÃ  cÃ³ thá»ƒ Ã¡p dá»¥ng cho Lead, Contact, Purchase hay event quan trá»ng khÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'transaction_id lÃ  mÃ£ Ä‘Æ¡n hÃ ng hoáº·c giao dá»‹ch. MÃ£ nÃ y thÆ°á»ng dÃ¹ng cho Purchase Ä‘á»ƒ ná»‘i event vá»›i Ä‘Æ¡n tháº­t, doanh thu, dashboard, ecommerce hoáº·c CRM. NÃ³ tráº£ lá»i cÃ¢u há»i â€œÄ‘Ã¢y lÃ  Ä‘Æ¡n nÃ o?â€, trong khi event_id giÃºp tráº£ lá»i â€œcÃ¡c tÃ­n hiá»‡u tracking nÃ y cÃ³ Ä‘ang nÃ³i vá» cÃ¹ng má»™t event khÃ´ng?â€.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i Purchase, má»™t setup cÃ³ thá»ƒ cáº§n cáº£ event_id vÃ  transaction_id tuá»³ kiáº¿n trÃºc. Hai mÃ£ cÃ³ liÃªn quan nhÆ°ng khÃ´ng nÃªn hiá»ƒu lÃ  má»™t, cÅ©ng khÃ´ng nÃªn dÃ¹ng event_id Ä‘á»ƒ thay tháº¿ bá»«a mÃ£ Ä‘Æ¡n hÃ ng.',
      },
      { type: 'visual', variant: 'event-id-vs-transaction-id' },
      { type: 'heading', text: 'Thiáº¿u event_id cÃ³ thá»ƒ lÃ m team quyáº¿t Ä‘á»‹nh sai tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Chuá»—i háº­u quáº£ thÆ°á»ng báº¯t Ä‘áº§u ráº¥t Ãªm: ads bÃ¡o conversion cao hÆ¡n thá»±c táº¿, CPL hoáº·c CPA nhÃ¬n ráº» hÆ¡n, campaign Ä‘Æ°á»£c Ä‘Ã¡nh giÃ¡ tá»‘t hÆ¡n. Team tÄƒng ngÃ¢n sÃ¡ch vÃ o má»™t nhÃ³m quáº£ng cÃ¡o chÆ°a cháº¯c hiá»‡u quáº£, cÃ²n founder nhÃ¬n dashboard tÆ°á»Ÿng marketing Ä‘ang cáº£i thiá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'Äáº¿n khi sales hoáº·c CRM khÃ´ng cÃ³ sá»‘ lead tÆ°Æ¡ng á»©ng, cuá»™c há»p quay vá» tranh luáº­n: ads Ä‘Ãºng hay sales bá» sÃ³t? Vá»›i purchase, doanh thu trong ná»n táº£ng quáº£ng cÃ¡o cÃ³ thá»ƒ cao hÆ¡n order system, lÃ m ROAS trÃ´ng tá»‘t hÆ¡n tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Äo trÃ¹ng khiáº¿n dá»¯ liá»‡u Ä‘áº¹p hÆ¡n thá»±c táº¿. Dá»¯ liá»‡u Ä‘áº¹p sai Ä‘Ã´i khi nguy hiá»ƒm hÆ¡n dá»¯ liá»‡u xáº¥u, vÃ¬ team dá»… tin nÃ³ vÃ  hÃ nh Ä‘á»™ng tá»± tin hÆ¡n. event_id khÃ´ng tá»± cáº£i thiá»‡n campaign, nhÆ°ng giÃºp giáº£m nguy cÆ¡ conversion bá»‹ phÃ³ng Ä‘áº¡i trong cÃ¡c luá»“ng cáº§n dedup.',
      },
      { type: 'visual', variant: 'dedup-before-after' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign bá»‹ Ä‘o trÃ¹ng Lead do thiáº¿u event_id/dedup.',
      },
      { type: 'heading', text: 'Marketer cáº§n brief event_id nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n tá»± viáº¿t code táº¡o event_id, nhÆ°ng cáº§n brief Ä‘á»§ rÃµ Ä‘á»ƒ dev hoáº·c ngÆ°á»i setup tracking hiá»ƒu logic kinh doanh. Má»™t brief tá»‘t nÃªn tráº£ lá»i cÃ¡c Ä‘iá»ƒm sau:',
      },
      {
        type: 'list',
        items: [
          '1. Event nÃ o cáº§n event_id? Æ¯u tiÃªn Lead, Contact quan trá»ng, Purchase, CompleteRegistration hoáº·c conversion Ä‘ang gá»­i qua nhiá»u luá»“ng.',
          '2. Khi nÃ o event Ä‘Æ°á»£c tÃ­nh thÃ nh cÃ´ng? VÃ­ dá»¥ form Ä‘Ã£ Ä‘Æ°á»£c lÆ°u, Ä‘Æ¡n hÃ ng Ä‘Ã£ táº¡o hoáº·c backend Ä‘Ã£ xÃ¡c nháº­n.',
          '3. event_id Ä‘Æ°á»£c táº¡o á»Ÿ Ä‘Ã¢u? MÃ£ nÃªn hÃ¬nh thÃ nh á»Ÿ Ä‘iá»ƒm cÃ³ thá»ƒ Ä‘áº¡i diá»‡n á»•n Ä‘á»‹nh cho hÃ nh Ä‘á»™ng tháº­t.',
          '4. Browser vÃ  server cÃ³ dÃ¹ng cÃ¹ng event_id khÃ´ng? Náº¿u dÃ¹ng CAPI, API hoáº·c server-side, cÃ¡c luá»“ng cáº§n Ä‘Æ°á»£c Ä‘á»“ng bá»™ theo thiáº¿t káº¿.',
          '5. event_id cÃ³ Ä‘Æ°á»£c lÆ°u Ä‘á»ƒ debug khÃ´ng? Khi cáº§n, team nÃªn Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c vá»›i log, form, CRM hoáº·c order.',
          '6. Purchase cÃ³ transaction_id riÃªng khÃ´ng? KhÃ´ng thay mÃ£ Ä‘Æ¡n hÃ ng báº±ng má»™t ID tracking thiáº¿u logic Ä‘á»‘i chiáº¿u doanh thu.',
          '7. ÄÃ£ test trÆ°á»ng há»£p trÃ¹ng chÆ°a? Kiá»ƒm tra refresh, nhiá»u trigger, browser vÃ  server báº±ng Preview, cÃ´ng cá»¥ debug, Test Events, dashboard hoáº·c log.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Brief tá»‘t khÃ´ng dá»«ng á»Ÿ cÃ¢u â€œgáº¯n event Leadâ€. NÃ³ pháº£i nÃ³i Lead Ä‘Æ°á»£c tÃ­nh khi nÃ o, event_id táº¡o ra sao, browser vÃ  server gá»­i tháº¿ nÃ o, rá»“i kiá»ƒm tra trÃ¹ng báº±ng nguá»“n nÃ o.',
      },
      { type: 'visual', variant: 'event-id-checklist' },
      {
        type: 'placeholder',
        label: 'CHECKLIST PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n checklist kiá»ƒm tra event_id vÃ  dedup trÆ°á»›c khi scale ngÃ¢n sÃ¡ch.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p vá»›i event_id' },
      {
        type: 'list',
        items: [
          'Browser event vÃ  server event dÃ¹ng hai event_id khÃ¡c nhau.',
          'Chá»‰ server event cÃ³ event_id, cÃ²n browser event khÃ´ng cÃ³.',
          'event_id Ä‘Æ°á»£c táº¡o láº¡i má»—i láº§n refresh nÃªn khÃ´ng há»— trá»£ Ä‘á»‘i chiáº¿u nhÆ° dá»± kiáº¿n.',
          'Má»™t event_id bá»‹ dÃ¹ng cho nhiá»u hÃ nh Ä‘á»™ng khÃ¡c nhau.',
          'Team khÃ´ng phÃ¢n biá»‡t event_id vá»›i transaction_id.',
          'Purchase cÃ³ transaction_id nhÆ°ng thiáº¿u event_id trong luá»“ng browser vÃ  server cáº§n dedup.',
          'KhÃ´ng test báº±ng cÃ´ng cá»¥ debug trÆ°á»›c khi publish.',
          'KhÃ´ng cÃ³ log nÃªn khi sá»‘ lá»‡ch, team khÃ´ng biáº¿t láº§n ngÆ°á»£c tá»« Ä‘Ã¢u.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Sai event_id cÃ³ thá»ƒ táº¡o cáº£m giÃ¡c há»‡ thá»‘ng Ä‘Ã£ dedup, trong khi conversion váº«n bá»‹ trÃ¹ng hoáº·c khÃ´ng thá»ƒ kiá»ƒm tra. VÃ¬ váº­y, ID pháº£i Ä‘i cÃ¹ng event name, Ä‘iá»u kiá»‡n thÃ nh cÃ´ng vÃ  quy trÃ¬nh test rÃµ.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra khi má»›i lÃ m tracking, má»i ngÆ°á»i thÆ°á»ng táº­p trung vÃ o viá»‡c event cÃ³ báº¯n hay khÃ´ng. LÃ m lÃ¢u hÆ¡n, cÃ¢u há»i tiáº¿p theo cÅ©ng quan trá»ng khÃ´ng kÃ©m: event cÃ³ bá»‹ báº¯n trÃ¹ng, cÃ³ ID Ä‘á»ƒ Ä‘á»‘i chiáº¿u vÃ  cÃ³ ná»‘i Ä‘Æ°á»£c vá»›i lead hoáº·c order tháº­t khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u khÃ´ng cÃ³ dedup rÃµ, report cÃ³ thá»ƒ Ä‘áº¹p hÆ¡n thá»±c táº¿. NhÆ°ng Ä‘áº¹p hÆ¡n thá»±c táº¿ khÃ´ng giÃºp team tÄƒng trÆ°á»Ÿng; nÃ³ chá»‰ lÃ m team tá»± tin hÆ¡n vÃ o dá»¯ liá»‡u chÆ°a cháº¯c Ä‘Ãºng.',
      },
      {
        type: 'paragraph',
        text: 'Tracking tá»‘t khÃ´ng nháº±m táº¡o cáº£m giÃ¡c campaign Ä‘ang tá»‘t. NÃ³ giÃºp team biáº¿t dá»¯ liá»‡u mÃ¬nh nhÃ¬n gáº§n vá»›i thá»±c táº¿ Ä‘áº¿n Ä‘Ã¢u, pháº§n nÃ o Ä‘Ã£ kiá»ƒm tra vÃ  pháº§n nÃ o cÃ²n cáº§n Ä‘á»‘i chiáº¿u.',
      },
      { type: 'heading', text: 'Má»™t mÃ£ nhá», má»™t lá»›p kiá»ƒm soÃ¡t quan trá»ng' },
      {
        type: 'paragraph',
        text: 'event_id lÃ  chi tiáº¿t nhá» nhÆ°ng cÃ³ áº£nh hÆ°á»Ÿng lá»›n trong há»‡ thá»‘ng tracking, Ä‘áº·c biá»‡t khi doanh nghiá»‡p dÃ¹ng Pixel vá»›i CAPI, API hoáº·c browser vá»›i server-side. NÃ³ cho cÃ¡c tÃ­n hiá»‡u má»™t cÆ¡ sá»Ÿ chung Ä‘á»ƒ nháº­n diá»‡n cÃ¹ng má»™t conversion, nhÆ°ng váº«n cáº§n event Ä‘Ãºng, trigger Ä‘Ãºng vÃ  test Ä‘áº§y Ä‘á»§.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang tháº¥y sá»‘ conversion trong ads Ä‘áº¹p hÆ¡n nhiá»u so vá»›i form, CRM hoáº·c Ä‘Æ¡n hÃ ng tháº­t, Ä‘á»«ng vá»™i tÄƒng ngÃ¢n sÃ¡ch. HÃ£y kiá»ƒm tra trÆ°á»›c xem cÃ¡c event quan trá»ng Ä‘Ã£ cÃ³ event_id, transaction_id vÃ  cÆ¡ cháº¿ dedup rÃµ rÃ ng chÆ°a.',
  },
  {
    title: 'Má»™t website marketing tá»‘i thiá»ƒu nÃªn tracking nhá»¯ng gÃ¬?',
    slug: 'mot-website-marketing-toi-thieu-nen-tracking-nhung-gi',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/website-landingpage/website-landingpage-pagespeed-pagespeed-performance-summary-01.jpg",
                "alt": "PageSpeed Insights performance summary screenshot",
                "caption": "PageSpeed performance summary",
                "width": 2880,
                "height": 1450,
                "fit": "contain"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-session-01.jpg",
                      "alt": "Audience watching a presentation in a training room",
                      "caption": "Training session audience",
                      "width": 2048,
                      "height": 1536,
                      "fit": "cover",
                      "afterHeading": "NhÃ³m 1: Nguá»“n traffic vÃ  landing page"
                }
          ]
    },
    excerpt:
      'Má»™t website marketing khÃ´ng cáº§n tracking má»i thá»© ngay tá»« Ä‘áº§u. NhÆ°ng tá»‘i thiá»ƒu, team nÃªn biáº¿t khÃ¡ch vÃ o tá»« Ä‘Ã¢u, xem trang nÃ o, click CTA nÃ o, gá»­i form nÃ o, liÃªn há»‡ qua kÃªnh nÃ o vÃ  hÃ nh Ä‘á»™ng nÃ o táº¡o ra lead hoáº·c doanh thu tháº­t.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u website marketing nhÃ¬n ngoÃ i khÃ¡ á»•n: cÃ³ landing page, cÃ³ form, cÃ³ nÃºt hotline, cÃ³ Zalo, cÃ³ Messenger vÃ  Ä‘ang cháº¡y ads. NhÆ°ng khi há»i khÃ¡ch Ä‘áº¿n tá»« Ä‘Ã¢u, báº¥m nÃºt nÃ o nhiá»u nháº¥t, form nÃ o táº¡o lead tháº­t, kÃªnh nÃ o ra cÆ¡ há»™i bÃ¡n hÃ ng, team láº¡i khÃ´ng cháº¯c.',
      },
      {
        type: 'paragraph',
        text: 'Website váº«n táº¡o ra nhiá»u hÃ nh Ä‘á»™ng má»—i ngÃ y, nhÆ°ng cÃ¡c Ä‘iá»ƒm cháº¡m khÃ´ng Ä‘Æ°á»£c ghi nháº­n rÃµ. Ads váº«n tiÃªu ngÃ¢n sÃ¡ch, marketer váº«n bÃ¡o cÃ¡o vÃ  founder váº«n xem sá»‘. Náº¿u thiáº¿u tracking cÆ¡ báº£n, khÃ´ng ai biáº¿t Ä‘oáº¡n nÃ o Ä‘ang hoáº¡t Ä‘á»™ng, Ä‘oáº¡n nÃ o lÃ m khÃ¡ch rÆ¡i vÃ  nguá»“n nÃ o tháº­t sá»± táº¡o ra cÆ¡ há»™i.',
      },
      { type: 'heading', text: 'Tracking tá»‘i thiá»ƒu khÃ´ng pháº£i lÃ  tracking má»i thá»©' },
      {
        type: 'paragraph',
        text: 'Má»™t lá»—i hay gáº·p lÃ  team má»›i báº¯t Ä‘áº§u Ä‘Ã£ muá»‘n Ä‘o scroll tá»«ng Ä‘oáº¡n, hover tá»«ng button, click má»i icon, time on page vÃ  hÃ ng loáº¡t micro event. Nhá»¯ng tÃ­n hiá»‡u Ä‘Ã³ cÃ³ thá»ƒ há»¯u Ã­ch khi cáº§n phÃ¢n tÃ­ch sÃ¢u, nhÆ°ng khÃ´ng pháº£i Ä‘iá»ƒm báº¯t Ä‘áº§u tá»‘t náº¿u form vÃ  contact cÃ²n chÆ°a Ä‘Æ°á»£c Ä‘o Ä‘Ãºng.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm báº¯t Ä‘áº§u nÃªn lÃ  nhá»¯ng cÃ¢u há»i gáº¯n vá»›i dÃ²ng cháº£y kinh doanh: khÃ¡ch Ä‘áº¿n tá»« Ä‘Ã¢u, xem trang nÃ o, báº¥m CTA gÃ¬, liÃªn há»‡ qua kÃªnh nÃ o, gá»­i form nÃ o, cÃ³ táº¡o lead hoáº·c order tháº­t khÃ´ng, vÃ  dá»¯ liá»‡u Ä‘Ã³ cÃ³ Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c vá»›i sales, CRM hay Ä‘Æ¡n hÃ ng khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Tracking tá»‘i thiá»ƒu nghÄ©a lÃ  Ä‘o Ä‘á»§ cÃ¡c Ä‘iá»ƒm giÃºp team nhÃ¬n Ä‘Æ°á»£c Ä‘Æ°á»ng Ä‘i tá»« Ä‘áº§u vÃ o Ä‘áº¿n outcome. Báº¯t Ä‘áº§u nhá» nhÆ°ng Ä‘Ãºng thÆ°á»ng cÃ³ giÃ¡ trá»‹ hÆ¡n má»™t há»‡ thá»‘ng nhiá»u event mÃ  khÃ´ng ai biáº¿t dÃ¹ng Ä‘á»ƒ quyáº¿t Ä‘á»‹nh viá»‡c gÃ¬.',
      },
      { type: 'visual', variant: 'minimum-tracking-map' },
      { type: 'heading', text: 'NhÃ³m 1: Nguá»“n traffic vÃ  landing page' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi Ä‘o lead, team cáº§n biáº¿t Ä‘áº§u vÃ o Ä‘áº¿n tá»« Ä‘Ã¢u. Tá»‘i thiá»ƒu nÃªn Ä‘á»c Ä‘Æ°á»£c source, medium vÃ  campaign khi cÃ³ UTM; landing page Ä‘áº§u tiÃªn; PageView hoáº·c ViewContent; cÃ¡c landing page chÃ­nh; vÃ  traffic theo nhÃ³m kÃªnh nhÆ° ads, organic, social, direct hoáº·c referral.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u khÃ´ng biáº¿t khÃ¡ch vÃ o tá»« nguá»“n nÃ o vÃ  Ä‘áº¿n Ä‘Ãºng trang nÃ o, team ráº¥t khÃ³ giáº£i thÃ­ch vÃ¬ sao lead tÄƒng hoáº·c giáº£m. Ads cÃ³ thá»ƒ kÃ©o nhiá»u traffic nhÆ°ng Ä‘Æ°a khÃ¡ch vÃ o sai landing page. Social cÃ³ thá»ƒ táº¡o nhiá»u lÆ°á»£t xem nhÆ°ng Ã­t contact. Google Search Ã­t traffic hÆ¡n nhÆ°ng ngÆ°á»i dÃ¹ng vÃ o Ä‘Ãºng trang dá»‹ch vá»¥ vÃ  Ä‘á»ƒ láº¡i nhiá»u tÃ­n hiá»‡u hÆ¡n.',
      },
      { type: 'heading', text: 'NhÃ³m 2: CTA click vÃ  kÃªnh liÃªn há»‡' },
      {
        type: 'paragraph',
        text: 'Vá»›i website SME, khÃ¡ch khÃ´ng pháº£i lÃºc nÃ o cÅ©ng Ä‘iá»n form. Há» cÃ³ thá»ƒ click hotline, Zalo, Messenger, email, â€œNháº­n tÆ° váº¥nâ€, â€œXem báº£ng giÃ¡â€ hoáº·c â€œÄáº·t lá»‹châ€. Nhá»¯ng cÃº click nÃ y chÆ°a cháº¯c lÃ  lead hoÃ n chá»‰nh, nhÆ°ng cho tháº¥y Ã½ Ä‘á»‹nh tÆ°Æ¡ng tÃ¡c máº¡nh hÆ¡n má»™t PageView.',
      },
      {
        type: 'paragraph',
        text: 'Tá»‘i thiá»ƒu nÃªn Ä‘o hotline click, Zalo click, Messenger click, main CTA click vÃ  cÃ¡c nÃºt bÃ¡o giÃ¡ hoáº·c booking náº¿u chÃºng lÃ  Ä‘Æ°á»ng chuyá»ƒn Ä‘á»•i chÃ­nh. TÃªn event vÃ  button_name nÃªn Ä‘á»§ rÃµ Ä‘á»ƒ team biáº¿t khÃ¡ch Ä‘Ã£ chá»n kÃªnh nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t landing page cÃ³ thá»ƒ Ã­t form submit nhÆ°ng nhiá»u click Zalo. Náº¿u Zalo khÃ´ng Ä‘Æ°á»£c tracking, marketer dá»… káº¿t luáº­n trang khÃ´ng hiá»‡u quáº£ vÃ  táº¯t campaign Ä‘ang táº¡o ra cuá»™c trÃ² chuyá»‡n tháº­t. Contact click giÃºp team nhÃ¬n pháº§n Ã½ Ä‘á»‹nh thÆ°á»ng bá»‹ bá» sÃ³t giá»¯a traffic vÃ  lead.',
      },
      { type: 'visual', variant: 'contact-tracking' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough event map tá»‘i thiá»ƒu cho má»™t landing page SME.',
      },
      { type: 'heading', text: 'NhÃ³m 3: Form, lead vÃ  tráº¡ng thÃ¡i gá»­i thÃ nh cÃ´ng' },
      {
        type: 'paragraph',
        text: 'Form tracking cáº§n rÃµ hÆ¡n cÃº click nÃºt. Tuá»³ nhu cáº§u, team cÃ³ thá»ƒ Ä‘o form view, form start, form submit success vÃ  error state. Pháº§n tá»‘i thiá»ƒu quan trá»ng nháº¥t váº«n lÃ  gá»­i thÃ nh cÃ´ng, kÃ¨m form_name, page_location, lead_type vÃ  lead_id náº¿u há»‡ thá»‘ng cÃ³.',
      },
      {
        type: 'paragraph',
        text: 'Lead khÃ´ng nÃªn báº¯n khi khÃ¡ch chá»‰ click submit. Náº¿u ngÆ°á»i dÃ¹ng thiáº¿u sá»‘ Ä‘iá»‡n thoáº¡i, form bÃ¡o lá»—i vÃ  dá»¯ liá»‡u chÆ°a Ä‘Æ°á»£c lÆ°u, cÃº click Ä‘Ã³ chÆ°a pháº£i Lead. Event nÃªn Ä‘Æ°á»£c ghi nháº­n sau khi form gá»­i thÃ nh cÃ´ng tháº­t qua success state, backend hoáº·c luá»“ng xÃ¡c nháº­n phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Nhá» váº­y, team phÃ¢n biá»‡t Ä‘Æ°á»£c ngÆ°á»i chá»‰ báº¯t Ä‘áº§u Ä‘iá»n, ngÆ°á»i gáº·p lá»—i vÃ  ngÆ°á»i Ä‘Ã£ Ä‘á»ƒ láº¡i thÃ´ng tin cÃ³ thá»ƒ xá»­ lÃ½. Sales cÅ©ng cÃ³ cÆ¡ sá»Ÿ Ä‘á»‘i chiáº¿u sá»‘ lead trong report vá»›i form backend hoáº·c CRM.',
      },
      { type: 'heading', text: 'NhÃ³m 4: Purchase hoáº·c Order náº¿u cÃ³ Ä‘áº·t hÃ ng' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i website SME nÃ o cÅ©ng cÃ³ purchase online. NhÆ°ng náº¿u cÃ³ ecommerce hoáº·c luá»“ng Ä‘áº·t hÃ ng, team nÃªn Ä‘o AddToCart vÃ  BeginCheckout khi cáº§n, cÃ¹ng Purchase hoáº·c Order success á»Ÿ Ä‘iá»ƒm hoÃ n táº¥t phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Purchase tá»‘t cáº§n Ä‘á»§ dá»¯ liá»‡u Ä‘á»ƒ Ä‘á»‘i chiáº¿u: transaction_id, value, currency, items, quantity vÃ  event_id náº¿u luá»“ng cáº§n dedup. Tráº¡ng thÃ¡i Ä‘Æ¡n hÃ ng hoáº·c thanh toÃ¡n cÅ©ng pháº£i Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a rÃµ. Má»¥c tiÃªu khÃ´ng chá»‰ lÃ  bÃ¡o â€œcÃ³ Ä‘Æ¡nâ€, mÃ  lÃ  biáº¿t kÃªnh nÃ o táº¡o doanh thu, sáº£n pháº©m nÃ o Ä‘Æ°á»£c mua vÃ  conversion nÃ o cÃ³ thá»ƒ bá»‹ trÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'Website dá»‹ch vá»¥ khÃ´ng cÃ³ checkout cÃ³ thá»ƒ dÃ¹ng outcome gáº§n hÆ¡n nhÆ° QualifiedLead, QuoteRequested, ConsultationBooked, DealCreated hoáº·c OfflineRevenue náº¿u Ä‘Ã£ cÃ³ quy trÃ¬nh ná»‘i dá»¯ liá»‡u. KhÃ´ng cáº§n Ã©p má»i mÃ´ hÃ¬nh pháº£i cÃ³ Purchase; event nÃªn pháº£n Ã¡nh hÃ nh Ä‘á»™ng kinh doanh tháº­t.',
      },
      { type: 'heading', text: 'NhÃ³m 5: Dá»¯ liá»‡u Ä‘i kÃ¨m event' },
      {
        type: 'paragraph',
        text: 'TÃªn event cho biáº¿t chuyá»‡n gÃ¬ xáº£y ra, cÃ²n dá»¯ liá»‡u Ä‘i kÃ¨m cho biáº¿t chuyá»‡n Ä‘Ã³ xáº£y ra á»Ÿ Ä‘Ã¢u vÃ  trong ngá»¯ cáº£nh nÃ o. CÃ¡c trÆ°á»ng thÆ°á»ng há»¯u Ã­ch gá»“m page_location, page_title, form_name, button_name, contact_type, lead_type, source, medium, campaign, transaction_id, value, currency, event_id vÃ  lead_id hoáº·c order_id náº¿u cÃ³.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t event Lead khÃ´ng cÃ³ form_name, page_location hoáº·c source váº«n cho biáº¿t tá»•ng lead, nhÆ°ng khÃ³ tráº£ lá»i form nÃ o hiá»‡u quáº£, trang nÃ o táº¡o tÃ­n hiá»‡u vÃ  campaign nÃ o mang Ä‘Ãºng khÃ¡ch. CÃ ng thiáº¿u context, dashboard cÃ ng dá»… dá»«ng á»Ÿ tá»•ng sá»‘ mÃ  khÃ´ng chá»‰ ra viá»‡c cáº§n lÃ m.',
      },
      { type: 'visual', variant: 'website-tracking-checklist' },
      { type: 'heading', text: 'Tracking theo má»©c Æ°u tiÃªn: cÃ¡i gÃ¬ lÃ m trÆ°á»›c?' },
      {
        type: 'paragraph',
        text: 'Náº¿u nguá»“n lá»±c Ã­t, Ä‘á»«ng triá»ƒn khai má»i thá»© cÃ¹ng lÃºc. CÃ³ thá»ƒ chia thÃ nh ba má»©c Ä‘á»ƒ giá»¯ há»‡ thá»‘ng vá»«a Ä‘á»§ dÃ¹ng vÃ  dá»… kiá»ƒm tra.',
      },
      {
        type: 'paragraph',
        text: 'Má»©c 1 â€” NÃªn cÃ³ trÆ°á»›c: GA4 PageView, GTM Ä‘á»ƒ quáº£n lÃ½ tag, form submit success, hotline, Zalo, Messenger vÃ  main CTA click, UTM hoáº·c source cÆ¡ báº£n, cÃ¹ng kháº£ nÄƒng Ä‘á»‘i chiáº¿u lead hoáº·c order vá»›i nguá»“n tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Má»©c 2 â€” Khi cháº¡y ads Ä‘á»u: conversion event cho Meta, TikTok hoáº·c Google Ads theo kÃªnh Ä‘ang dÃ¹ng; event_id cho event quan trá»ng; DataLayer cho form hoáº·c purchase; dashboard contact vÃ  lead theo nguá»“n; event map Ä‘Æ°á»£c ghi láº¡i rÃµ rÃ ng.',
      },
      {
        type: 'paragraph',
        text: 'Má»©c 3 â€” Khi ná»n Ä‘Ã£ á»•n: scroll depth, form start hoáº·c error, engagement sÃ¢u hÆ¡n, server-side tracking, CRM hoáº·c offline conversion import vÃ  logic audience nÃ¢ng cao. Nhá»¯ng pháº§n nÃ y cÃ³ giÃ¡ trá»‹, nhÆ°ng nÃªn lÃ m sau khi event kinh doanh cÆ¡ báº£n Ä‘Ã£ Ä‘Ã¡ng tin.',
      },
      { type: 'visual', variant: 'tracking-priority-matrix' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n event map template tá»‘i thiá»ƒu cho website marketing.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi tracking website marketing' },
      {
        type: 'list',
        items: [
          'Chá»‰ gáº¯n PageView nhÆ°ng khÃ´ng Ä‘o Contact hoáº·c Lead.',
          'TÃ­nh click submit thÃ nh Lead dÃ¹ form chÆ°a gá»­i thÃ nh cÃ´ng.',
          'Website cÃ³ Zalo, Messenger vÃ  hotline nhÆ°ng khÃ´ng tracking click.',
          'KhÃ´ng dÃ¹ng UTM nÃªn khÃ´ng biáº¿t lead Ä‘áº¿n tá»« campaign nÃ o.',
          'Má»i form cÃ¹ng báº¯n má»™t event Lead nhÆ°ng khÃ´ng cÃ³ form_name.',
          'Purchase thiáº¿u transaction_id hoáº·c value Ä‘á»ƒ Ä‘á»‘i chiáº¿u.',
          'KhÃ´ng cÃ³ event map nÃªn sau vÃ i thÃ¡ng khÃ´ng ai nhá»› event dÃ¹ng lÃ m gÃ¬.',
          'KhÃ´ng Ä‘á»‘i chiáº¿u report vá»›i CRM, form backend hoáº·c order tháº­t.',
          'Äo quÃ¡ nhiá»u micro event nhÆ°ng bá» sÃ³t event kinh doanh quan trá»ng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tracking sai Æ°u tiÃªn cÅ©ng nguy hiá»ƒm nhÆ° tracking sai ká»¹ thuáº­t. Äo nhiá»u nhÆ°ng bá» sÃ³t Ä‘iá»ƒm cáº§n ra quyáº¿t Ä‘á»‹nh khiáº¿n dashboard váº«n khÃ´ng giÃºp team hiá»ƒu traffic cÃ³ Ä‘ang tiáº¿n thÃ nh lead vÃ  outcome hay khÃ´ng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t website cÃ³ nhiá»u nÃºt liÃªn há»‡ nhÆ°ng chá»‰ tracking PageView.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra cÃ¢u há»i â€œwebsite Ä‘Ã£ gáº¯n pixel chÆ°a?â€ chÆ°a Ä‘á»§. CÃ¢u há»i Ä‘Ãºng hÆ¡n lÃ  website Ä‘ang Ä‘o hÃ nh Ä‘á»™ng nÃ o, hÃ nh Ä‘á»™ng Ä‘Ã³ cÃ³ gáº§n lead hoáº·c doanh thu khÃ´ng, event cÃ³ báº¯n Ä‘Ãºng Ä‘iá»u kiá»‡n thÃ nh cÃ´ng vÃ  cÃ³ biáº¿t lead Ä‘áº¿n tá»« form, trang, campaign nÃ o khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Má»™t lá»›p kiá»ƒm tra ná»¯a lÃ  dá»¯ liá»‡u cÃ³ Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c vá»›i sales hoáº·c Ä‘Æ¡n hÃ ng tháº­t hay khÃ´ng. Tracking tá»‘i thiá»ƒu khÃ´ng lÃ m káº¿t quáº£ tá»‘t lÃªn ngay, nhÆ°ng cho team biáº¿t mÃ¬nh Ä‘ang nhÃ¬n Ä‘Ãºng Ä‘oáº¡n nÃ o vÃ  Ä‘iá»ƒm nÃ o cÃ²n mÃ¹.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u nhá», nhÆ°ng Ä‘o Ä‘Ãºng dÃ²ng cháº£y' },
      {
        type: 'paragraph',
        text: 'Má»™t website marketing tá»‘i thiá»ƒu nÃªn tracking Ä‘á»§ cÃ¡c Ä‘iá»ƒm cháº¡m chÃ­nh: traffic, page, CTA, contact, form, lead, purchase hoáº·c order náº¿u cÃ³, cÃ¹ng dá»¯ liá»‡u Ä‘i kÃ¨m Ä‘á»ƒ Ä‘á»‘i chiáº¿u. Khi ná»n nÃ y Ä‘Ã£ rÃµ, team má»›i nÃªn má»Ÿ rá»™ng sang cÃ¡c tÃ­n hiá»‡u sÃ¢u vÃ  há»‡ thá»‘ng phá»©c táº¡p hÆ¡n.',
      },
    ],
    cta: 'Náº¿u website cá»§a báº¡n Ä‘ang cháº¡y ads nhÆ°ng chá»‰ biáº¿t tá»•ng traffic hoáº·c tá»•ng lead, hÃ£y báº¯t Ä‘áº§u báº±ng viá»‡c váº½ láº¡i event map tá»‘i thiá»ƒu: khÃ¡ch vÃ o tá»« Ä‘Ã¢u, báº¥m gÃ¬, liÃªn há»‡ qua Ä‘Ã¢u, gá»­i form nÃ o vÃ  tÃ­n hiá»‡u Ä‘Ã³ cÃ³ ná»‘i Ä‘Æ°á»£c vá»›i sales hoáº·c doanh thu tháº­t khÃ´ng.',
  },
  {
    title: 'Tá»« form lead Ä‘áº¿n dashboard: dá»¯ liá»‡u Ä‘i qua nhá»¯ng bÆ°á»›c nÃ o?',
    slug: 'tu-form-lead-den-dashboard-du-lieu-di-qua-nhung-buoc-nao',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-presentation-discussion-01.jpg",
                "alt": "People in a meeting room during a workshop",
                "caption": "Workshop discussion in meeting room",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-whiteboard-standing-presentation-01.jpg",
                      "alt": "Person presenting at a board during a workshop",
                      "caption": "Workshop board presentation",
                      "width": 1386,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "ÄÆ°á»ng Ä‘i cÆ¡ báº£n cá»§a dá»¯ liá»‡u lead"
                }
          ]
    },
    excerpt:
      'Má»™t lead khÃ´ng tá»± nhiÃªn xuáº¥t hiá»‡n trong dashboard. Tá»« lÃºc khÃ¡ch gá»­i form Ä‘áº¿n lÃºc founder nhÃ¬n tháº¥y sá»‘ liá»‡u, dá»¯ liá»‡u pháº£i Ä‘i qua nhiá»u bÆ°á»›c: form, DataLayer, GTM, ná»n táº£ng ads/analytics, CRM hoáº·c Google Sheet, sales update vÃ  dashboard. Chá»‰ cáº§n má»™t Ä‘oáº¡n ná»‘i bá»‹ gÃ£y, sá»‘ liá»‡u phÃ­a sau sáº½ lá»‡ch.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u team nghÄ© ráº±ng khi khÃ¡ch gá»­i form xong, dá»¯ liá»‡u Ä‘Ã£ hoÃ n thÃ nh nhiá»‡m vá»¥. NhÆ°ng trong thá»±c táº¿, Ä‘Ã³ má»›i chá»‰ lÃ  Ä‘iá»ƒm báº¯t Ä‘áº§u. Má»™t lead muá»‘n Ä‘i vÃ o dashboard vÃ  trá»Ÿ thÃ nh dá»¯ liá»‡u cÃ³ thá»ƒ dÃ¹ng Ä‘á»ƒ ra quyáº¿t Ä‘á»‹nh pháº£i Ä‘i qua nhiá»u Ä‘oáº¡n ná»‘i phÃ­a sau.',
      },
      {
        type: 'paragraph',
        text: 'Website cÃ³ form, khÃ¡ch Ä‘á»ƒ láº¡i thÃ´ng tin, Ads hoáº·c GA4 ghi nháº­n conversion, rá»“i Google Sheet hay CRM xuáº¥t hiá»‡n má»™t dÃ²ng má»›i. Sales gá»i khÃ¡ch, cáº­p nháº­t tiáº¿n Ä‘á»™, cÃ²n dashboard gom dá»¯ liá»‡u Ä‘á»ƒ founder xem.',
      },
      {
        type: 'paragraph',
        text: 'Thá»±c táº¿, chá»‰ cáº§n form bÃ¡o thÃ nh cÃ´ng sai, nguá»“n lead khÃ´ng Ä‘Æ°á»£c lÆ°u, sales quÃªn cáº­p nháº­t tráº¡ng thÃ¡i hoáº·c dashboard Ä‘á»c nháº§m cá»™t, bá»©c tranh cuá»‘i Ä‘Ã£ khÃ¡c. Dashboard khÃ´ng sai má»™t mÃ¬nh. NÃ³ thÆ°á»ng sai vÃ¬ dá»¯ liá»‡u tá»« form Ä‘áº¿n dashboard Ä‘Ã£ bá»‹ thiáº¿u, lá»‡ch hoáº·c khÃ´ng Ä‘Æ°á»£c cáº­p nháº­t Ä‘á»u.',
      },
      { type: 'heading', text: 'Má»™t lead khÃ´ng chá»‰ lÃ  â€œcÃ³ ngÆ°á»i gá»­i formâ€' },
      {
        type: 'paragraph',
        text: 'Má»™t lead cÃ³ giÃ¡ trá»‹ phÃ¢n tÃ­ch khÃ´ng chá»‰ gá»“m tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i. Team cÃ²n cáº§n biáº¿t nguá»“n, trang, form, nhu cáº§u vÃ  thá»i Ä‘iá»ƒm táº¡o lead. Sau Ä‘Ã³ lÃ  pháº§n sales: Ä‘Ã£ xá»­ lÃ½ chÆ°a, cÃ³ Ä‘Ãºng nhu cáº§u khÃ´ng, Ä‘Ã£ tÆ° váº¥n, bÃ¡o giÃ¡, Ä‘áº·t lá»‹ch hay táº¡o Ä‘Æ¡n hÃ ng chÆ°a.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u lead chá»‰ lÃ  má»™t sá»‘ Ä‘iá»‡n thoáº¡i trong Google Sheet, sales váº«n cÃ³ thá»ƒ gá»i. NhÆ°ng marketer khÃ´ng biáº¿t campaign nÃ o mang Ä‘Ãºng ngÆ°á»i, landing page nÃ o táº¡o nhu cáº§u tá»‘t hay nguá»“n nÃ o táº¡o liÃªn há»‡ kÃ©m cháº¥t lÆ°á»£ng. Äá»ƒ tá»‘i Æ°u marketing, nhÆ° váº­y lÃ  chÆ°a Ä‘á»§.',
      },
      { type: 'heading', text: 'ÄÆ°á»ng Ä‘i cÆ¡ báº£n cá»§a dá»¯ liá»‡u lead' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i doanh nghiá»‡p nÃ o cÅ©ng cÃ³ cÃ¹ng má»™t bá»™ cÃ´ng cá»¥, nhÆ°ng Ä‘Æ°á»ng Ä‘i cÆ¡ báº£n thÆ°á»ng gá»“m báº£y bÆ°á»›c:',
      },
      {
        type: 'list',
        items: [
          'KhÃ¡ch gá»­i form thÃ nh cÃ´ng: Ä‘Ã¢y lÃ  hÃ nh Ä‘á»™ng tháº­t, khÃ´ng chá»‰ lÃ  cÃº click nÃºt gá»­i.',
          'Website hoáº·c DataLayer ghi nháº­n sá»± kiá»‡n: kÃ¨m tÃªn event, form, trang vÃ  nhu cáº§u náº¿u cÃ³.',
          'GTM báº¯t event vÃ  gá»­i Ä‘i: tá»›i GA4, Meta Pixel, TikTok Pixel, Google Ads tag hoáº·c server-side.',
          'Form backend, CRM hoáº·c Google Sheet lÆ°u lead Ä‘á»ƒ sales xá»­ lÃ½.',
          'Sales cáº­p nháº­t tráº¡ng thÃ¡i: Ä‘Ã£ gá»i, khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c, sai nhu cáº§u, Ä‘ang tÆ° váº¥n, bÃ¡o giÃ¡ hoáº·c Ä‘Ã£ chá»‘t.',
          'Dashboard gom sá»‘ lead, nguá»“n, cháº¥t lÆ°á»£ng, tiáº¿n Ä‘á»™ sales vÃ  outcome.',
          'Team review Ä‘á»ƒ giá»¯ campaign, sá»­a landing page, Ä‘á»•i thÃ´ng Ä‘iá»‡p, xá»­ lÃ½ backlog sales hoáº·c Ä‘iá»u chá»‰nh ngÃ¢n sÃ¡ch.',
        ],
      },
      { type: 'visual', variant: 'lead-data-journey' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough Ä‘Æ°á»ng Ä‘i dá»¯ liá»‡u tá»« form lead Ä‘áº¿n dashboard.',
      },
      { type: 'heading', text: 'BÆ°á»›c 1: Form pháº£i ghi nháº­n Ä‘Ãºng hÃ nh Ä‘á»™ng thÃ nh cÃ´ng' },
      {
        type: 'paragraph',
        text: 'Lead khÃ´ng nÃªn Ä‘Æ°á»£c tÃ­nh khi khÃ¡ch chá»‰ click nÃºt submit. Má»™t tÃ¬nh huá»‘ng sai khÃ¡ phá»• biáº¿n lÃ  khÃ¡ch báº¥m gá»­i nhÆ°ng thiáº¿u sá»‘ Ä‘iá»‡n thoáº¡i, form bÃ¡o lá»—i, dá»¯ liá»‡u chÆ°a Ä‘Æ°á»£c lÆ°u, cÃ²n event Lead váº«n báº¯n. Ads nháº­n conversion, dashboard tÄƒng má»™t lead nhÆ°ng sales khÃ´ng tháº¥y thÃ´ng tin tÆ°Æ¡ng á»©ng.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡ch Ä‘Ãºng lÃ  chá» backend hoáº·c tráº¡ng thÃ¡i success xÃ¡c nháº­n form Ä‘Ã£ gá»­i, rá»“i má»›i ghi nháº­n event vÃ  lÆ°u lead. Náº¿u bÆ°á»›c Ä‘áº§u sai, ná»n táº£ng quáº£ng cÃ¡o há»c tá»« tÃ­n hiá»‡u áº£o, dashboard cÃ³ lead áº£o vÃ  sales khÃ´ng cÃ³ báº£n ghi tÆ°Æ¡ng á»©ng.',
      },
      { type: 'heading', text: 'BÆ°á»›c 2: DataLayer vÃ  GTM cáº§n Ä‘á»§ thÃ´ng tin' },
      {
        type: 'paragraph',
        text: 'Khi form gá»­i thÃ nh cÃ´ng, website nÃªn chuyá»ƒn cho GTM thÃ´ng tin Ä‘á»§ rÃµ. NgoÃ i event lead_submit, team thÆ°á»ng cáº§n form_name, page_location, lead_type, source, medium, campaign, cÃ¹ng lead_id, event_id hoáº·c timestamp Ä‘á»ƒ Ä‘á»‘i chiáº¿u khi cáº§n.',
      },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n tá»± code DataLayer, nhÆ°ng cáº§n biáº¿t pháº£i brief nhá»¯ng gÃ¬. Náº¿u yÃªu cáº§u chá»‰ lÃ  â€œgáº¯n event leadâ€, káº¿t quáº£ thÆ°á»ng chá»‰ tráº£ lá»i Ä‘Æ°á»£c tá»•ng sá»‘ lead. Khi founder há»i lead Ä‘áº¿n tá»« form nÃ o, trang nÃ o hoáº·c nhu cáº§u gÃ¬, dashboard khÃ´ng cÃ³ dá»¯ liá»‡u Ä‘á»ƒ tráº£ lá»i.',
      },
      { type: 'visual', variant: 'lead-record-anatomy' },
      { type: 'heading', text: 'BÆ°á»›c 3: Lead pháº£i Ä‘Æ°á»£c lÆ°u vÃ o nÆ¡i sales tháº­t sá»± dÃ¹ng' },
      {
        type: 'paragraph',
        text: 'Má»™t event trong GA4 hoáº·c Ads khÃ´ng thay tháº¿ CRM hay Google Sheet. CÃ¡c ná»n táº£ng Ä‘Ã³ giÃºp phÃ¢n tÃ­ch vÃ  tá»‘i Æ°u quáº£ng cÃ¡o, nhÆ°ng sales cáº§n nÆ¡i nhÃ¬n tháº¥y tÃªn, sá»‘ liÃªn há»‡, nhu cáº§u vÃ  ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m xá»­ lÃ½. Náº¿u sales khÃ´ng nháº­n Ä‘Æ°á»£c lead hoáº·c khÃ´ng thá»ƒ gá»i láº¡i, conversion trÃªn report chÆ°a táº¡o ra giÃ¡ trá»‹ kinh doanh.',
      },
      {
        type: 'paragraph',
        text: 'NÆ¡i lÆ°u cÃ³ thá»ƒ lÃ  CRM, Google Sheet, form backend, email, quy trÃ¬nh Zalo/Inbox hoáº·c sales pipeline. SME chÆ°a cáº§n CRM phá»©c táº¡p ngay, nhÆ°ng pháº£i cÃ³ má»™t nguá»“n lÆ°u rÃµ, tráº¡ng thÃ¡i thá»‘ng nháº¥t vÃ  ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m cáº­p nháº­t.',
      },
      { type: 'heading', text: 'BÆ°á»›c 4: Sales status lÃ  Ä‘oáº¡n ná»‘i cá»±c quan trá»ng' },
      {
        type: 'paragraph',
        text: 'Náº¿u dashboard chá»‰ cÃ³ â€œsá»‘ leadâ€, founder váº«n chÆ°a biáº¿t lead Ä‘Ã³ tá»‘t hay khÃ´ng. Má»™t bá»™ tráº¡ng thÃ¡i Ä‘Æ¡n giáº£n cÃ³ thá»ƒ gá»“m New, Contacted, Cannot contact, Wrong need, Qualified, Consultation, Quoted, Won, Lost vÃ  Follow-up later. KhÃ´ng cáº§n dÃ¹ng háº¿t ngay; Ä‘iá»u quan trá»ng lÃ  cáº£ team hiá»ƒu cÃ¹ng má»™t tráº¡ng thÃ¡i theo cÃ¹ng má»™t nghÄ©a.',
      },
      {
        type: 'paragraph',
        text: 'Khi sales cáº­p nháº­t Ä‘á»u, marketing biáº¿t kÃªnh nÃ o táº¡o lead khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c, landing page nÃ o mang Ä‘Ãºng nhu cáº§u, campaign nÃ o Ä‘i tá»›i bÃ¡o giÃ¡ vÃ  lead thÆ°á»ng rÆ¡i á»Ÿ bÆ°á»›c gá»i, tÆ° váº¥n hay follow-up. Chá»‰ sá»‘ form submit khÃ´ng thá»ƒ cung cáº¥p feedback nÃ y.',
      },
      { type: 'visual', variant: 'broken-vs-connected-lead-flow' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team cÃ³ nhiá»u lead nhÆ°ng dashboard khÃ´ng Ä‘á»c Ä‘Æ°á»£c quality vÃ¬ sales khÃ´ng update status.',
      },
      { type: 'heading', text: 'BÆ°á»›c 5: Dashboard chá»‰ lÃ  lá»›p cuá»‘i, khÃ´ng pháº£i Ä‘iá»ƒm báº¯t Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team muá»‘n lÃ m dashboard trÆ°á»›c vÃ¬ biá»ƒu Ä‘á»“ lÃ  pháº§n dá»… nhÃ¬n tháº¥y nháº¥t. NhÆ°ng dashboard chá»‰ tá»‘t khi nhá»¯ng lá»›p trÆ°á»›c Ä‘Ã£ rÃµ. NÃ³ nÃªn giÃºp team tráº£ lá»i: lead Ä‘áº¿n tá»« nguá»“n nÃ o, trang vÃ  form nÃ o táº¡o lead, bao nhiÃªu lead Ä‘Ãºng nhu cáº§u, sales Ä‘Ã£ xá»­ lÃ½ bao nhiÃªu, bao nhiÃªu lead vÃ o tÆ° váº¥n hoáº·c bÃ¡o giÃ¡ vÃ  kÃªnh nÃ o táº¡o outcome tá»‘t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard pháº£i há»— trá»£ cÃ¢u há»i hÃ nh Ä‘á»™ng: tuáº§n nÃ y nÃªn sá»­a traffic, landing page, form, tracking hay sales follow-up? NÃ³ khÃ´ng táº¡o ra dá»¯ liá»‡u tá»‘t, chá»‰ hiá»ƒn thá»‹ nhá»¯ng gÃ¬ há»‡ thá»‘ng phÃ­a trÆ°á»›c ghi nháº­n.',
      },
      { type: 'heading', text: 'Nhá»¯ng Ä‘oáº¡n dá»… bá»‹ gÃ£y trong hÃ nh trÃ¬nh dá»¯ liá»‡u lead' },
      {
        type: 'list',
        items: [
          'Form báº¯n event khi click, khÃ´ng pháº£i khi gá»­i thÃ nh cÃ´ng.',
          'Lead khÃ´ng cÃ³ source hoáº·c campaign nÃªn khÃ´ng biáº¿t Ä‘áº¿n tá»« Ä‘Ã¢u.',
          'Má»i form dÃ¹ng chung má»™t event vÃ  khÃ´ng cÃ³ form_name.',
          'Ads hoáº·c GA4 cÃ³ conversion nhÆ°ng CRM khÃ´ng cÃ³ lead tÆ°Æ¡ng á»©ng.',
          'Sales Ä‘Ã£ gá»i nhÆ°ng khÃ´ng cáº­p nháº­t status.',
          'Lead Ä‘Æ°á»£c lÆ°u á»Ÿ nhiá»u nÆ¡i rá»i ráº¡c, má»—i nÆ¡i má»™t format.',
          'Dashboard chá»‰ Ä‘á»c tá»•ng lead, khÃ´ng cÃ³ cháº¥t lÆ°á»£ng vÃ  outcome.',
          'KhÃ´ng cÃ³ lead_id hoáº·c event_id nÃªn khÃ³ Ä‘á»‘i chiáº¿u khi sá»‘ lá»‡ch.',
          'Team Ä‘á»•i cáº¥u trÃºc Sheet má»—i tuáº§n khiáº¿n dashboard dá»… há»ng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Dá»¯ liá»‡u lead hiáº¿m khi chá»‰ gÃ£y á»Ÿ má»™t lá»—i lá»›n. NÃ³ thÆ°á»ng gÃ£y táº¡i cÃ¡c Ä‘oáº¡n ná»‘i nhá» giá»¯a website, tracking, CRM, sales vÃ  dashboard. VÃ¬ váº­y, khi report lá»‡ch, nÃªn láº§n theo cáº£ hÃ nh trÃ¬nh thay vÃ¬ chá»‰ kiá»ƒm tra biá»ƒu Ä‘á»“ cuá»‘i.',
      },
      { type: 'heading', text: 'Checklist dá»¯ liá»‡u trÆ°á»›c khi lÃ m dashboard lead' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi chá»n biá»ƒu Ä‘á»“ hoáº·c phá»‘i mÃ u bÃ¡o cÃ¡o, team nÃªn kiá»ƒm tra dá»¯ liá»‡u Ä‘Ã£ Ä‘á»§ Ä‘á»ƒ ná»‘i má»™t lead tá»« nguá»“n marketing Ä‘áº¿n káº¿t quáº£ sales hay chÆ°a.',
      },
      { type: 'visual', variant: 'dashboard-input-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n lead field map template cho CRM/Google Sheet.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m dashboard, nhiá»u ngÆ°á»i nghÄ© váº¥n Ä‘á» náº±m á»Ÿ biá»ƒu Ä‘á»“. NhÆ°ng lÃ m lÃ¢u sáº½ tháº¥y biá»ƒu Ä‘á»“ chá»‰ lÃ  pháº§n dá»… nhÃ¬n nháº¥t. Pháº§n khÃ³ hÆ¡n lÃ  dá»¯ liá»‡u trÆ°á»›c Ä‘Ã³ cÃ³ Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a thá»‘ng nháº¥t, lÆ°u láº¡i Ä‘Ãºng chá»— vÃ  cáº­p nháº­t Ä‘á»u hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t dashboard lead tá»‘t khÃ´ng báº¯t Ä‘áº§u tá»« Looker Studio hay má»™t Google Sheet Ä‘áº¹p. NÃ³ báº¯t Ä‘áº§u tá»« form Ä‘Æ°á»£c Ä‘o Ä‘Ãºng, DataLayer vÃ  event cÃ³ thÃ´ng tin cáº§n thiáº¿t, lead Ä‘Æ°á»£c lÆ°u rÃµ, sales cáº­p nháº­t tráº¡ng thÃ¡i, rá»“i dashboard gom láº¡i nhá»¯ng dÃ²ng dá»¯ liá»‡u Ä‘Ã£ Ä‘Æ°á»£c ná»‘i Ä‘Ãºng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u khÃ´ng ná»‘i marketing vá»›i sales, dashboard ráº¥t dá»… trá»Ÿ thÃ nh báº£ng tá»•ng há»£p sá»‘ lead. NÃ³ cho biáº¿t team Ä‘Ã£ thu Ä‘Æ°á»£c bao nhiÃªu liÃªn há»‡, nhÆ°ng chÆ°a pháº£i cÃ´ng cá»¥ giÃºp hiá»ƒu nguá»“n nÃ o táº¡o cÆ¡ há»™i tháº­t vÃ  nÃªn Æ°u tiÃªn sá»­a viá»‡c gÃ¬.',
      },
      { type: 'heading', text: 'Tá»« má»™t form submit Ä‘áº¿n má»™t quyáº¿t Ä‘á»‹nh tá»‘t hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Tá»« form lead Ä‘áº¿n dashboard lÃ  má»™t hÃ nh trÃ¬nh dá»¯ liá»‡u, khÃ´ng pháº£i má»™t bÆ°á»›c duy nháº¥t. CÃ ng hiá»ƒu rÃµ hÃ nh trÃ¬nh Ä‘Ã³, team cÃ ng dá»… biáº¿t sá»‘ Ä‘ang lá»‡ch á»Ÿ Ä‘Ã¢u, Ä‘oáº¡n ná»‘i nÃ o Ä‘ang thiáº¿u vÃ  nÃªn sá»­a pháº§n nÃ o trÆ°á»›c thay vÃ¬ tiáº¿p tá»¥c thÃªm biá»ƒu Ä‘á»“.',
      },
    ],
    cta: 'Náº¿u team cá»§a báº¡n Ä‘Ã£ cÃ³ form lead nhÆ°ng dashboard váº«n khÃ´ng tráº£ lá»i Ä‘Æ°á»£c lead Ä‘áº¿n tá»« Ä‘Ã¢u, sales xá»­ lÃ½ tá»›i Ä‘Ã¢u vÃ  kÃªnh nÃ o táº¡o cÆ¡ há»™i tháº­t, hÃ£y kiá»ƒm tra láº¡i Ä‘Æ°á»ng Ä‘i cá»§a dá»¯ liá»‡u tá»« form Ä‘áº¿n CRM trÆ°á»›c khi lÃ m thÃªm biá»ƒu Ä‘á»“ má»›i.',
  },
  {
    title: 'Tracking khÃ´ng pháº£i Ä‘á»ƒ lÃ m mÃ u, mÃ  Ä‘á»ƒ biáº¿t tiá»n marketing Ä‘ang Ä‘i Ä‘Ã¢u',
    slug: 'tracking-khong-phai-de-lam-mau-ma-de-biet-tien-marketing-dang-di-dau',
    category: 'Tracking & Data',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/team-meeting/team-meeting-company-team-office-team-group-01.jpg",
                "alt": "Office team group photo",
                "caption": "Office team group moment",
                "width": 1280,
                "height": 960,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-talk-01.jpg",
                      "alt": "Audience watching a presentation in a workshop room",
                      "caption": "Workshop audience session",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "Tiá»n marketing Ä‘i qua nhá»¯ng Ä‘oáº¡n nÃ o?"
                }
          ]
    },
    excerpt:
      'Tracking khÃ´ng pháº£i Ä‘á»ƒ dashboard nhÃ¬n xá»‹n hÆ¡n hay report cÃ³ nhiá»u sá»‘ hÆ¡n. Tracking tá»‘t giÃºp team biáº¿t tiá»n marketing Ä‘ang Ä‘i vÃ o kÃªnh nÃ o, táº¡o ra tÃ­n hiá»‡u gÃ¬, rÆ¡i á»Ÿ Ä‘oáº¡n nÃ o vÃ  cuá»‘i cÃ¹ng cÃ³ ná»‘i Ä‘Æ°á»£c Ä‘áº¿n lead, cÆ¡ há»™i bÃ¡n hÃ ng hoáº·c doanh thu tháº­t khÃ´ng.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u doanh nghiá»‡p cháº¡y ads Ä‘á»u má»—i thÃ¡ng. NgÃ¢n sÃ¡ch váº«n tiÃªu, report váº«n cÃ³ sá»‘, dashboard váº«n cÃ³ biá»ƒu Ä‘á»“. NhÆ°ng khi founder há»i tiá»n marketing Ä‘ang Ä‘i Ä‘Ã¢u, kÃªnh nÃ o táº¡o cÆ¡ há»™i tháº­t vÃ  Ä‘oáº¡n nÃ o Ä‘ang rÆ¡i nhiá»u nháº¥t, team láº¡i khÃ´ng tráº£ lá»i Ä‘Æ°á»£c rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ sá»‘ khÃ´ng cÃ³ nghÄ©a lÃ  Ä‘Ã£ hiá»ƒu. CÃ³ dashboard khÃ´ng cÃ³ nghÄ©a lÃ  ra quyáº¿t Ä‘á»‹nh tá»‘t. Pixel, tag vÃ  nhiá»u event cÅ©ng chÆ°a táº¡o giÃ¡ trá»‹ náº¿u tÃ­n hiá»‡u khÃ´ng ná»‘i Ä‘Æ°á»£c vá»›i cÃ´ng viá»‡c kinh doanh.',
      },
      {
        type: 'paragraph',
        text: 'Tiá»n marketing khÃ´ng chá»‰ Ä‘i vÃ o ads. NÃ³ Ä‘i qua traffic, landing page, nÃºt Zalo hay hotline, form lead, sales follow-up, bÃ¡o giÃ¡ rá»“i má»›i cÃ³ thá»ƒ thÃ nh doanh thu. Tracking chá»‰ cÃ³ Ã½ nghÄ©a khi giÃºp team nhÃ¬n rÃµ dÃ²ng cháº£y nÃ y vÃ  bá»›t Ä‘oÃ¡n lÃºc quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch hoáº·c hÆ°á»›ng tá»‘i Æ°u.',
      },
      { type: 'heading', text: 'Tracking khÃ´ng pháº£i Ä‘á»ƒ report nhÃ¬n xá»‹n hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Má»™t report nhiá»u chart nhÆ°ng khÃ´ng tráº£ lá»i Ä‘Æ°á»£c cÃ¢u há»i kinh doanh thÃ¬ váº«n chÆ°a Ä‘á»§. Tracking tá»‘t pháº£i giÃºp team biáº¿t tiá»n Ä‘ang chi cho kÃªnh nÃ o, táº¡o traffic gÃ¬, traffic cÃ³ thÃ nh lead vÃ  Ä‘Æ°á»£c sales xá»­ lÃ½ khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i cÃ¹ng, tÃ­n hiá»‡u cÃ³ táº¡o bÃ¡o giÃ¡, cÆ¡ há»™i, Ä‘Æ¡n hÃ ng hay doanh thu khÃ´ng? Tá»« Ä‘Ã³, team má»›i biáº¿t tuáº§n sau nÃªn sá»­a traffic, landing page, form, sales follow-up hay tracking. Náº¿u khÃ´ng há»— trá»£ cÃ¡c cÃ¢u há»i nÃ y, tracking chá»‰ lÃ  lá»›p ká»¹ thuáº­t trang trÃ­.',
      },
      { type: 'visual', variant: 'tracking-purpose-comparison' },
      { type: 'heading', text: 'Tiá»n marketing Ä‘i qua nhá»¯ng Ä‘oáº¡n nÃ o?' },
      {
        type: 'paragraph',
        text: 'Budget Ä‘Æ°á»£c phÃ¢n bá»• cho ads, content, media, landing page, event hoáº·c kÃªnh khÃ¡c. NgÃ¢n sÃ¡ch táº¡o traffic tá»›i website, inbox, cuá»™c gá»i hay Ä‘iá»ƒm cháº¡m bÃ¡n hÃ ng. Má»™t pháº§n traffic tÆ°Æ¡ng tÃ¡c qua CTA, hotline, Zalo, Messenger hoáº·c form.',
      },
      {
        type: 'paragraph',
        text: 'Khi khÃ¡ch Ä‘á»ƒ láº¡i tÃ­n hiá»‡u rÃµ hÆ¡n, contact trá»Ÿ thÃ nh lead. Sales gá»i, phÃ¢n loáº¡i, tÆ° váº¥n, bÃ¡o giÃ¡ hoáº·c háº¹n láº¡i. Outcome cÃ³ thá»ƒ lÃ  cÆ¡ há»™i, Ä‘Æ¡n hÃ ng, doanh thu hoáº·c thÃ´ng tin cho biáº¿t nguá»“n Ä‘Ã³ cÃ³ mang Ä‘Ãºng nhu cáº§u khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u chá»‰ tracking á»Ÿ Ä‘áº§u phá»…u, team biáº¿t tiá»n táº¡o traffic. Khi tracking ná»‘i Ä‘áº¿n sales vÃ  outcome, team má»›i biáº¿t dÃ²ng tiá»n Ä‘Ã³ cÃ³ táº¡o cÆ¡ há»™i tháº­t khÃ´ng.',
      },
      { type: 'visual', variant: 'marketing-money-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch tracking theo dÃ²ng tiá»n marketing tá»« budget Ä‘áº¿n revenue.',
      },
      { type: 'heading', text: 'KhÃ´ng tracking Ä‘Ãºng, team dá»… hiá»ƒu sai tiá»n Ä‘ang táº¡o ra gÃ¬' },
      {
        type: 'list',
        items: [
          'Ads táº¡o nhiá»u traffic nhÆ°ng khÃ´ng táº¡o contact. Náº¿u chá»‰ nhÃ¬n CPC vÃ  lÆ°á»£t vÃ o, team cÃ³ thá»ƒ tÆ°á»Ÿng kÃªnh Ä‘ang á»•n.',
          'Landing page cÃ³ Ã­t form nhÆ°ng nhiá»u Zalo click. KhÃ´ng Ä‘o contact click khiáº¿n team Ä‘Ã¡nh giÃ¡ tháº¥p má»™t trang váº«n táº¡o ra há»™i thoáº¡i tháº­t.',
          'Campaign táº¡o lead ráº» nhÆ°ng sales khÃ³ Ä‘Æ°a vÃ o tÆ° váº¥n. Thiáº¿u lead quality vÃ  sales status khiáº¿n CPL tháº¥p bá»‹ hiá»ƒu nháº§m lÃ  hiá»‡u quáº£.',
          'Má»™t kÃªnh Ã­t lead hÆ¡n nhÆ°ng lead dá»… Ä‘i tá»›i bÃ¡o giÃ¡. Náº¿u khÃ´ng ná»‘i sales outcome, team cÃ³ thá»ƒ táº¯t nháº§m kÃªnh tá»‘t.',
          'Dashboard bÃ¡o conversion cao nhÆ°ng CRM khÃ´ng cÃ³ sá»‘ lead tÆ°Æ¡ng á»©ng. Team cÃ³ thá»ƒ tÄƒng ngÃ¢n sÃ¡ch dá»±a trÃªn dá»¯ liá»‡u lá»‡ch.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ tracking Ä‘Ãºng, tiá»n marketing dá»… bá»‹ Ä‘Ã¡nh giÃ¡ báº±ng tÃ­n hiá»‡u gáº§n nháº¥t vÃ  dá»… nhÃ¬n nháº¥t, thay vÃ¬ káº¿t quáº£ cÃ³ Ã½ nghÄ©a vá»›i doanh nghiá»‡p.',
      },
      { type: 'heading', text: 'Tracking giÃºp phÃ¡t hiá»‡n tiá»n Ä‘ang rÃ² á»Ÿ Ä‘Ã¢u' },
      {
        type: 'paragraph',
        text: 'Tiá»n marketing khÃ´ng chá»‰ â€œlá»—â€ khi ads Ä‘áº¯t. NÃ³ cÃ³ thá»ƒ rÃ² vÃ¬ traffic sai tá»‡p, landing page lá»‡ch thÃ´ng Ä‘iá»‡p, CTA khÃ´ng rÃµ, form dÃ i hoáº·c lá»—i. Zalo vÃ  hotline khÃ´ng Ä‘Æ°á»£c Ä‘o cÅ©ng khiáº¿n team bá» sÃ³t tÃ­n hiá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'Pháº§n sau lead cÅ©ng cÃ³ nhiá»u Ä‘iá»ƒm rÃ²: nhu cáº§u khÃ´ng phÃ¹ há»£p, sales follow-up cháº­m, CRM khÃ´ng Ä‘Æ°á»£c cáº­p nháº­t hoáº·c dashboard khÃ´ng ná»‘i Ä‘Æ°á»£c bÃ¡o giÃ¡ vÃ  doanh thu. Báº£n thÃ¢n tracking khÃ´ng vÃ¡ nhá»¯ng Ä‘iá»ƒm rÃ² nÃ y, nhÆ°ng nÃ³ giÃºp team tháº¥y Ä‘oáº¡n nÃ o cáº§n kiá»ƒm tra trÆ°á»›c.',
      },
      { type: 'visual', variant: 'budget-leak-map' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign cÃ³ nhiá»u conversion nhÆ°ng khÃ´ng ná»‘i Ä‘Æ°á»£c Ä‘áº¿n sales outcome.',
      },
      { type: 'heading', text: 'Tracking khÃ´ng thay tháº¿ tÆ° duy marketing' },
      {
        type: 'paragraph',
        text: 'Tracking khÃ´ng sá»­a Ä‘Æ°á»£c sáº£n pháº©m chÆ°a phÃ¹ há»£p thá»‹ trÆ°á»ng, thÃ´ng Ä‘iá»‡p sai, traffic sai tá»‡p, offer yáº¿u hay landing page khÃ³ hiá»ƒu. NÃ³ cÅ©ng khÃ´ng thay sales gá»i láº¡i Ä‘Ãºng lÃºc hoáº·c má»™t quy trÃ¬nh ná»™i bá»™ Ä‘á»§ ká»· luáº­t Ä‘á»ƒ lÆ°u vÃ  cáº­p nháº­t dá»¯ liá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u chiáº¿n lÆ°á»£c sai, thÃªm event khÃ´ng lÃ m campaign tá»‘t lÃªn. GiÃ¡ trá»‹ cá»§a tracking lÃ  giÃºp team bá»›t tranh luáº­n mÃ¹. Thay vÃ¬ má»—i bÃªn nÃ³i â€œads yáº¿uâ€, â€œlanding yáº¿uâ€ hoáº·c â€œsales yáº¿uâ€, cáº£ team cÃ³ thá»ƒ nhÃ¬n theo tá»«ng Ä‘oáº¡n vÃ  há»i Ä‘iá»ƒm rÆ¡i lá»›n nháº¥t Ä‘ang náº±m á»Ÿ Ä‘Ã¢u.',
      },
      { type: 'heading', text: 'Tracking tá»‘t nÃªn tráº£ lá»i Ä‘Æ°á»£c 5 cÃ¢u há»i vá» tiá»n' },
      {
        type: 'list',
        items: [
          'Tiá»n Ä‘ang Ä‘i vÃ o kÃªnh nÃ o? CÃ³ thá»ƒ lÃ  Meta, Google, TikTok, SEO, social hoáº·c event.',
          'KÃªnh Ä‘Ã³ táº¡o tÃ­n hiá»‡u gÃ¬? Traffic, click, contact, lead hay purchase.',
          'TÃ­n hiá»‡u cÃ³ cháº¥t lÆ°á»£ng khÃ´ng? Lead cÃ³ Ä‘Ãºng nhu cáº§u, khu vá»±c vÃ  Ä‘á»§ Ä‘iá»u kiá»‡n tÆ° váº¥n khÃ´ng.',
          'TÃ­n hiá»‡u Ä‘Ã£ Ä‘Æ°á»£c xá»­ lÃ½ chÆ°a? Sales Ä‘Ã£ gá»i, tÆ° váº¥n, bÃ¡o giÃ¡ hoáº·c follow-up chÆ°a.',
          'Cuá»‘i cÃ¹ng cÃ³ outcome gÃ¬? CÆ¡ há»™i, Ä‘Æ¡n hÃ ng, doanh thu hoáº·c má»™t bÃ i há»c Ä‘á»§ rÃµ Ä‘á»ƒ tá»‘i Æ°u.',
        ],
      },
      { type: 'visual', variant: 'spend-to-decision-loop' },
      { type: 'heading', text: 'Tracking tá»‘i thiá»ƒu Ä‘á»ƒ Ä‘á»c dÃ²ng tiá»n marketing' },
      {
        type: 'paragraph',
        text: 'Team khÃ´ng cáº§n há»‡ thá»‘ng phá»©c táº¡p. Ná»n tá»‘i thiá»ƒu nÃªn cÃ³ UTM, source, medium, campaign; landing page Ä‘áº§u vÃ o; main CTA; click hotline, Zalo, Messenger; form submit success vÃ  mÃ£ Ä‘á»‘i chiáº¿u lead náº¿u cÃ³.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i lead nÃªn giá»¯ Ä‘Æ°á»£c nguá»“n, form vÃ  trang táº¡o ra nÃ³. Sales cáº§n cáº­p nháº­t vÃ i tráº¡ng thÃ¡i cÆ¡ báº£n. Outcome cÃ³ thá»ƒ lÃ  qualified, quoted, won, lost hoáº·c revenue náº¿u Ä‘Ã£ ghi nháº­n Ä‘Æ°á»£c. Cuá»‘i cÃ¹ng, dashboard hay Sheet nÃªn gom dá»¯ liá»‡u theo tuáº§n Ä‘á»ƒ marketing vÃ  sales cÃ¹ng review.',
      },
      { type: 'visual', variant: 'marketing-spend-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n template tracking budget-to-outcome cho SME.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p' },
      {
        type: 'list',
        items: [
          'Chá»‰ nhÃ¬n sá»‘ ads mÃ  khÃ´ng Ä‘á»‘i chiáº¿u CRM vÃ  pháº£n há»“i cá»§a sales.',
          'CÃ³ UTM nhÆ°ng Ä‘áº·t tÃªn khÃ´ng nháº¥t quÃ¡n giá»¯a ngÆ°á»i vÃ  kÃªnh.',
          'Chá»‰ Ä‘o PageView, khÃ´ng Ä‘o Contact hoáº·c Lead.',
          'Äo Lead nhÆ°ng thiáº¿u form_name vÃ  page_location.',
          'KhÃ´ng Ä‘o Zalo hoáº·c hotline dÃ¹ khÃ¡ch chá»§ yáº¿u liÃªn há»‡ qua Ä‘Ã³.',
          'KhÃ´ng cÃ³ sales status nÃªn khÃ´ng Ä‘á»c Ä‘Æ°á»£c cháº¥t lÆ°á»£ng lead.',
          'KhÃ´ng Ä‘á»‘i chiáº¿u dashboard vá»›i sá»‘ lead hoáº·c order tháº­t.',
          'Xem tracking lÃ  viá»‡c ká»¹ thuáº­t, tÃ¡ch khá»i quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch.',
          'Cháº¡y ads rá»“i má»›i nghÄ© Ä‘áº¿n tracking, khiáº¿n dá»¯ liá»‡u giai Ä‘oáº¡n Ä‘áº§u bá»‹ thiáº¿u.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tracking bá»‹ lÃ m sai má»¥c Ä‘Ã­ch khi nÃ³ chá»‰ phá»¥c vá»¥ bÃ¡o cÃ¡o nhÆ°ng khÃ´ng phá»¥c vá»¥ quyáº¿t Ä‘á»‹nh. Má»™t event chá»‰ Ä‘Ã¡ng giá»¯ khi team hiá»ƒu nÃ³ giÃºp tráº£ lá»i cÃ¢u há»i nÃ o.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m marketing, má»i ngÆ°á»i dá»… táº­p trung vÃ o cÃ¡ch cháº¡y ads, viáº¿t content hay lÃ m landing page. Nhá»¯ng viá»‡c Ä‘Ã³ Ä‘á»u quan trá»ng. NhÆ°ng khi ngÃ¢n sÃ¡ch báº¯t Ä‘áº§u Ä‘Æ°á»£c chi Ä‘á»u, cÃ¢u há»i khÃ´ng cÃ²n lÃ  â€œcÃ³ cháº¡y khÃ´ngâ€, mÃ  lÃ  â€œtiá»n Ä‘ang táº¡o ra Ä‘iá»u gÃ¬?â€.',
      },
      {
        type: 'paragraph',
        text: 'Tracking tá»‘t giÃºp team bÃ¬nh tÄ©nh hÆ¡n: khÃ´ng vá»™i táº¯t kÃªnh chá»‰ vÃ¬ CPL cao, khÃ´ng tÄƒng ngÃ¢n sÃ¡ch chá»‰ vÃ¬ conversion Ä‘áº¹p, khÃ´ng Ä‘á»• lá»—i cho sales khi chÆ°a Ä‘á»c lead quality vÃ  khÃ´ng káº¿t luáº­n ads yáº¿u khi landing page hoáº·c form Ä‘ang lÃ m khÃ¡ch rÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cÅ©ng giÃºp cuá»™c há»p bá»›t phá»¥ thuá»™c vÃ o cáº£m giÃ¡c cá»§a ngÆ°á»i nÃ³i tá»± tin nháº¥t trong phÃ²ng. Tracking khÃ´ng lÃ m marketing bá»›t khÃ³, nhÆ°ng lÃ m cuá»™c há»p marketing bá»›t mÃ¹.',
      },
      { type: 'heading', text: 'Biáº¿t tiá»n Ä‘i Ä‘Ã¢u trÆ°á»›c khi chi thÃªm' },
      {
        type: 'paragraph',
        text: 'Tracking khÃ´ng pháº£i lá»›p trang trÃ­ cho website hay dashboard. ÄÃ³ lÃ  há»‡ thá»‘ng giÃºp team biáº¿t tiá»n marketing Ä‘i qua Ä‘Ã¢u, táº¡o tÃ­n hiá»‡u gÃ¬, rÆ¡i á»Ÿ Ä‘oáº¡n nÃ o vÃ  cÃ³ ná»‘i Ä‘Æ°á»£c Ä‘áº¿n outcome tháº­t khÃ´ng. NÃ³ khÃ´ng há»©a táº¡o doanh thu ngay, nhÆ°ng táº¡o cÆ¡ sá»Ÿ tá»‘t hÆ¡n cho quyáº¿t Ä‘á»‹nh tiáº¿p theo.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang chi tiá»n marketing má»—i thÃ¡ng nhÆ°ng khÃ´ng cháº¯c ngÃ¢n sÃ¡ch Ä‘Ã³ Ä‘ang táº¡o ra traffic, lead, cÆ¡ há»™i hay doanh thu á»Ÿ má»©c nÃ o, viá»‡c Ä‘áº§u tiÃªn khÃ´ng pháº£i lÃ  tÄƒng ngÃ¢n sÃ¡ch. HÃ£y kiá»ƒm tra láº¡i tracking Ä‘á»ƒ biáº¿t tiá»n Ä‘ang Ä‘i Ä‘Ã¢u trÆ°á»›c Ä‘Ã£.',
  },
  {
    title: 'Consent banner, cookie vÃ  tracking: marketer cáº§n hiá»ƒu Ä‘á»§ tá»›i Ä‘Ã¢u?',
    slug: 'consent-banner-cookie-va-tracking-marketer-can-hieu-du-toi-dau',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-workshop-selfie-01.jpg",
                "alt": "Workshop room selfie with people at a table",
                "caption": "Workshop working session",
                "width": 1448,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-meeting-room-marketing-strategy-session-01.jpg",
                      "alt": "Workshop room with a marketing strategy presentation",
                      "caption": "Marketing strategy workshop session",
                      "width": 1332,
                      "height": 1086,
                      "fit": "cover",
                      "afterHeading": "Consent banner khÃ´ng chá»‰ lÃ  popup"
                }
          ]
    },
    excerpt:
      'Marketer khÃ´ng cáº§n trá»Ÿ thÃ nh luáº­t sÆ° hay developer Ä‘á»ƒ hiá»ƒu consent banner vÃ  cookie. NhÆ°ng náº¿u website cÃ³ tracking, form, pixel, GA4 hoáº·c ads tag, marketer nÃªn hiá»ƒu Ä‘á»§ Ä‘á»ƒ biáº¿t dá»¯ liá»‡u nÃ o Ä‘ang Ä‘Æ°á»£c ghi nháº­n, khi nÃ o tag Ä‘Æ°á»£c phÃ©p cháº¡y, vÃ  vÃ¬ sao minh báº¡ch vá»›i ngÆ°á»i dÃ¹ng lÃ  má»™t pháº§n cá»§a há»‡ thá»‘ng marketing dÃ i háº¡n.',
    content: [
      {
        type: 'paragraph',
        text: 'Khi lÃ m website marketing, nhiá»u team xem consent banner nhÆ° má»™t viá»‡c nhá»: thÃªm popup, vÃ i dÃ²ng chá»¯, má»™t nÃºt Ä‘á»“ng Ã½ rá»“i xong. NhÆ°ng khi báº¯t Ä‘áº§u ná»‘i tracking, GA4, pixel, form lead vÃ  dashboard, consent banner khÃ´ng cÃ²n chá»‰ lÃ  chuyá»‡n giao diá»‡n. NÃ³ liÃªn quan Ä‘áº¿n tag nÃ o Ä‘Æ°á»£c cháº¡y, dá»¯ liá»‡u nÃ o Ä‘Æ°á»£c ghi nháº­n vÃ  ngÆ°á»i dÃ¹ng cÃ³ Ä‘Æ°á»£c thÃ´ng bÃ¡o rÃµ hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Marketer thÆ°á»ng ngáº¡i cookie vÃ  consent vÃ¬ chÃºng nghe vá»«a phÃ¡p lÃ½ vá»«a ká»¹ thuáº­t. NhÆ°ng náº¿u team dÃ¹ng GA4, ads tag, Pixel hoáº·c form lead, bá» qua hoÃ n toÃ n pháº§n nÃ y khÃ´ng thá»±c táº¿.',
      },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n hiá»ƒu sÃ¢u nhÆ° luáº­t sÆ° vÃ  cÅ©ng khÃ´ng cáº§n tá»± code. NhÆ°ng cáº§n há»i Ä‘Æ°á»£c cÃ¡c cÃ¢u cÆ¡ báº£n: website cÃ³ tag nÃ o, chÃºng cháº¡y khi nÃ o, dá»¯ liá»‡u gÃ¬ Ä‘Æ°á»£c lÆ°u, ngÆ°á»i dÃ¹ng cÃ³ lá»±a chá»n rÃµ khÃ´ng vÃ  há»‡ thá»‘ng cÃ³ tÃ´n trá»ng lá»±a chá»n Ä‘Ã³ khÃ´ng. Consent khÃ´ng pháº£i pháº§n trang trÃ­; nÃ³ lÃ  má»™t lá»›p trong há»‡ thá»‘ng tracking.',
      },
      {
        type: 'paragraph',
        text: 'BÃ i viáº¿t nÃ y nhÃ¬n consent dÆ°á»›i gÃ³c Ä‘á»™ váº­n hÃ nh marketing, khÃ´ng thay tháº¿ tÆ° váº¥n phÃ¡p lÃ½. Doanh nghiá»‡p nÃªn kiá»ƒm tra thÃªm vá»›i ngÆ°á»i cÃ³ chuyÃªn mÃ´n phÃ¹ há»£p.',
      },
      { type: 'heading', text: 'Cookie vÃ  consent nÃªn hiá»ƒu Ä‘Æ¡n giáº£n tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Cookie hoáº·c cÃ¡c dáº¡ng storage lÃ  cÃ¡ch website vÃ  cÃ´ng cá»¥ liÃªn quan ghi nhá»› má»™t sá»‘ thÃ´ng tin trÃªn trÃ¬nh duyá»‡t. ChÃºng cÃ³ thá»ƒ há»— trá»£ phiÃªn Ä‘Äƒng nháº­p, báº£o máº­t, ghi nhá»› ngÃ´n ngá»¯ hay tuá»³ chá»n hiá»ƒn thá»‹. Trong tracking, chÃºng cÅ©ng cÃ³ thá»ƒ gÃ³p pháº§n ghi nháº­n lÆ°á»£t truy cáº­p, event vÃ  hÃ nh vi tá»•ng thá»ƒ tuá»³ cÃ¡ch há»‡ thá»‘ng Ä‘Æ°á»£c thiáº¿t láº­p.',
      },
      {
        type: 'paragraph',
        text: 'Consent, hiá»ƒu Ä‘Æ¡n giáº£n, lÃ  viá»‡c ngÆ°á»i dÃ¹ng Ä‘Æ°á»£c thÃ´ng bÃ¡o vÃ  cÃ³ lá»±a chá»n phÃ¹ há»£p vá» viá»‡c má»™t sá»‘ loáº¡i cookie, dá»¯ liá»‡u hoáº·c tag cÃ³ Ä‘Æ°á»£c sá»­ dá»¥ng hay khÃ´ng. KhÃ´ng pháº£i má»i tag Ä‘á»u cÃ³ cÃ¹ng má»¥c Ä‘Ã­ch: pháº§n cáº§n thiáº¿t cho website hoáº¡t Ä‘á»™ng khÃ¡c vá»›i analytics, vÃ  analytics khÃ¡c vá»›i tÃ­n hiá»‡u gá»­i sang ná»n táº£ng quáº£ng cÃ¡o.',
      },
      { type: 'visual', variant: 'cookie-types-for-marketer' },
      { type: 'heading', text: 'Consent banner khÃ´ng chá»‰ lÃ  popup' },
      {
        type: 'paragraph',
        text: 'Banner thÆ°á»ng lÃ  pháº§n ngÆ°á»i dÃ¹ng nhÃ¬n tháº¥y: thÃ´ng bÃ¡o ngáº¯n vá» cookie hoáº·c tracking, cÃ¹ng lá»±a chá»n Ä‘á»“ng Ã½, tá»« chá»‘i hay tuá»³ chá»‰nh. NhÆ°ng phÃ­a sau giao diá»‡n Ä‘Ã³ pháº£i cÃ³ má»™t luá»“ng váº­n hÃ nh. Há»‡ thá»‘ng cáº§n biáº¿t ngÆ°á»i dÃ¹ng Ä‘Ã£ chá»n gÃ¬, lÆ°u lá»±a chá»n á»Ÿ Ä‘Ã¢u vÃ  chuyá»ƒn tráº¡ng thÃ¡i Ä‘Ã³ cho nÆ¡i quáº£n lÃ½ tag.',
      },
      {
        type: 'paragraph',
        text: 'GTM cÃ³ Ä‘á»c Ä‘Æ°á»£c consent state khÃ´ng? Analytics vÃ  ads tag cÃ³ cháº¡y theo lá»±a chá»n Ä‘Ã³ khÃ´ng? Náº¿u ngÆ°á»i dÃ¹ng Ä‘á»•i lá»±a chá»n, tráº¡ng thÃ¡i cÃ³ Ä‘Æ°á»£c cáº­p nháº­t khÃ´ng? Banner cÃ³ hiá»ƒn thá»‹ láº¡i Ä‘Ãºng lÃºc cáº§n thiáº¿t khÃ´ng? ÄÃ¢y lÃ  nhá»¯ng cÃ¢u há»i quan trá»ng hÆ¡n mÃ u ná»n hay vá»‹ trÃ­ cá»§a popup.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u banner hiá»‡n cho cÃ³ nhÆ°ng tag váº«n cháº¡y háº¿t, Ä‘Ã³ khÃ´ng pháº£i há»‡ thá»‘ng tá»­ táº¿. Banner quÃ¡ rá»‘i lÃ m cáº£n tráº£i nghiá»‡m; cÃ¢u chá»¯ mÆ¡ há»“ khiáº¿n cáº£ ngÆ°á»i dÃ¹ng láº«n marketer khÃ³ hiá»ƒu tracking.',
      },
      { type: 'visual', variant: 'consent-tracking-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough consent banner ná»‘i vá»›i GTM á»Ÿ má»©c cÆ¡ báº£n.',
      },
      { type: 'heading', text: 'Marketer cáº§n hiá»ƒu Ä‘á»§ tá»›i Ä‘Ã¢u?' },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n tá»± viáº¿t consent framework, giáº£i thÃ­ch phÃ¡p lÃ½ hay xá»­ lÃ½ má»i trÆ°á»ng há»£p ká»¹ thuáº­t. NhÆ°ng marketer khÃ´ng nÃªn mÃ¹ vá» há»‡ thá»‘ng táº¡o ra dá»¯ liá»‡u mÃ¬nh sá»­ dá»¥ng.',
      },
      {
        type: 'list',
        items: [
          'Website Ä‘ang cÃ³ tag nÃ o: GA4, Meta Pixel, TikTok Pixel, Google Ads tag, heatmap, chat widget hay form tracking?',
          'Má»—i tag dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬: analytics, ads conversion, há»— trá»£ chat, Ä‘o UX hay ghi nháº­n form?',
          'Tag cháº¡y khi nÃ o: khi má»Ÿ trang, sau lá»±a chá»n consent, sau form success hay sau click CTA?',
          'Dá»¯ liá»‡u nÃ o Ä‘Æ°á»£c ghi nháº­n: page URL, event, form name, click, lead, purchase hoáº·c dá»¯ liá»‡u ngÆ°á»i dÃ¹ng náº¿u cÃ³?',
          'Ai chá»‹u trÃ¡ch nhiá»‡m kiá»ƒm tra: dev, marketer, agency, consultant hay owner cá»§a há»‡ thá»‘ng?',
        ],
      },
      { type: 'heading', text: 'Consent liÃªn quan gÃ¬ Ä‘áº¿n GTM vÃ  tracking?' },
      {
        type: 'paragraph',
        text: 'GTM thÆ°á»ng lÃ  nÆ¡i quáº£n lÃ½ tag vÃ  Ä‘iá»u kiá»‡n kÃ­ch hoáº¡t. Khi website cÃ³ consent logic, GTM cáº§n nháº­n Ä‘Æ°á»£c tráº¡ng thÃ¡i phÃ¹ há»£p Ä‘á»ƒ quyáº¿t Ä‘á»‹nh tag nÃ o Ä‘Æ°á»£c cháº¡y. Logic thiáº¿t yáº¿u Ä‘á»ƒ website hoáº¡t Ä‘á»™ng cÃ³ vai trÃ² khÃ¡c vá»›i analytics tag hoáº·c ads conversion tag, nÃªn team cáº§n phÃ¢n nhÃ³m rÃµ ngay tá»« lÃºc brief.',
      },
      {
        type: 'paragraph',
        text: 'Form submit lÃ  vÃ­ dá»¥ cáº§n nhÃ¬n cáº©n tháº­n. LÆ°u thÃ´ng tin Ä‘á»ƒ xá»­ lÃ½ yÃªu cáº§u khÃ¡ch gá»­i vÃ  chuyá»ƒn event sang ná»n táº£ng khÃ¡c lÃ  hai má»¥c Ä‘Ã­ch cáº§n Ä‘Æ°á»£c thiáº¿t káº¿ rÃµ theo bá»‘i cáº£nh vÃ  consent.',
      },
      {
        type: 'paragraph',
        text: 'Marketer nÃªn brief cho dev hoáº·c agency nhÃ³m cá»§a tá»«ng tag, Ä‘iá»u kiá»‡n trÆ°á»›c vÃ  sau consent, cÃ¡ch test accept, decline, customize vÃ  event ná»™i bá»™ cáº§n thiáº¿t. Tuá»³ thá»‹ trÆ°á»ng vÃ  ngÃ nh, hÃ£y kiá»ƒm tra thÃªm vá»›i ngÆ°á»i cÃ³ chuyÃªn mÃ´n phÃ¡p lÃ½.',
      },
      { type: 'heading', text: 'LÃ m consent banner tá»­ táº¿ mÃ  khÃ´ng phÃ¡ tráº£i nghiá»‡m' },
      {
        type: 'paragraph',
        text: 'Banner tá»‘t nÃªn ngáº¯n gá»n, dá»… hiá»ƒu vÃ  cÃ³ lá»±a chá»n rÃµ. NÃ³ khÃ´ng nÃªn hÃ¹ doáº¡ hay Ã©p ngÆ°á»i dÃ¹ng báº±ng thiáº¿t káº¿ gÃ¢y hiá»ƒu nháº§m. ChÃ­nh sÃ¡ch liÃªn quan nÃªn dá»… tÃ¬m; lá»±a chá»n cáº§n Ä‘Æ°á»£c lÆ°u vÃ  cÃ³ thá»ƒ thay Ä‘á»•i khi há»‡ thá»‘ng há»— trá»£.',
      },
      {
        type: 'paragraph',
        text: 'Banner kÃ©m thÆ°á»ng cÃ³ text dÃ i, nÃºt Ä‘á»“ng Ã½ ná»•i nhÆ°ng nÃºt tá»« chá»‘i bá»‹ giáº¥u, hoáº·c coi im láº·ng lÃ  Ä‘á»“ng Ã½. PhÃ­a sau, tag váº«n cÃ³ thá»ƒ cháº¡y lung tung vÃ¬ khÃ´ng ai test sau khi publish.',
      },
      { type: 'visual', variant: 'consent-banner-do-dont' },
      { type: 'heading', text: 'Nhá»¯ng lá»—i SME hay gáº·p vá»›i cookie, consent vÃ  tracking' },
      {
        type: 'list',
        items: [
          'CÃ i banner nhÆ°ng khÃ´ng ná»‘i tráº¡ng thÃ¡i lá»±a chá»n vá»›i GTM.',
          'Banner táº¯t Ä‘Æ°á»£c nhÆ°ng cÃ¡c tag váº«n cháº¡y nhÆ° cÅ©.',
          'KhÃ´ng ai biáº¿t website hiá»‡n cÃ³ bao nhiÃªu tag vÃ  ai Ä‘Ã£ thÃªm chÃºng.',
          'KhÃ´ng phÃ¢n loáº¡i tag theo má»¥c Ä‘Ã­ch sá»­ dá»¥ng.',
          'Gáº¯n nhiá»u pixel hoáº·c ads tag nhÆ°ng khÃ´ng biáº¿t chÃºng cháº¡y khi nÃ o.',
          'Copy ná»™i dung cookie banner tá»« website khÃ¡c mÃ  khÃ´ng hiá»ƒu há»‡ thá»‘ng mÃ¬nh Ä‘ang dÃ¹ng.',
          'KhÃ´ng test riÃªng tráº¡ng thÃ¡i Ä‘á»“ng Ã½, tá»« chá»‘i vÃ  tuá»³ chá»‰nh.',
          'KhÃ´ng cáº­p nháº­t trang thÃ´ng tin hoáº·c chÃ­nh sÃ¡ch liÃªn quan khi há»‡ thá»‘ng thay Ä‘á»•i.',
          'Xem consent lÃ  viá»‡c riÃªng cá»§a dev hoáº·c phÃ¡p lÃ½, dÃ¹ marketing sá»­ dá»¥ng dá»¯ liá»‡u phÃ­a sau.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lá»—i thÆ°á»ng xuáº¥t hiá»‡n vÃ¬ khÃ´ng ai lÃ m chá»§ toÃ n bá»™ luá»“ng tá»« banner Ä‘áº¿n consent state, GTM, tag vÃ  dashboard. Má»—i bÃªn biáº¿t má»™t Ä‘oáº¡n nhÆ°ng thiáº¿u ngÆ°á»i ná»‘i há»‡ thá»‘ng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t website cÃ³ banner nhÆ°ng tag váº«n cháº¡y khÃ´ng theo consent state.',
      },
      { type: 'heading', text: 'Checklist marketer nÃªn dÃ¹ng khi lÃ m consent + tracking' },
      { type: 'visual', variant: 'consent-tracking-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n consent + tracking audit checklist cho marketer.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra trÆ°á»›c Ä‘Ã¢y nhiá»u team lÃ m tracking theo cÃ¡ch cáº§n sá»‘ gÃ¬ thÃ¬ gáº¯n tag Ä‘Ã³. Khi website cÃ³ nhiá»u ná»n táº£ng, pixel, event vÃ  má»¥c tiÃªu khÃ¡c nhau, cÃ¡ch lÃ m nÃ y nhanh chÃ³ng trá»Ÿ nÃªn rá»‘i. KhÃ´ng ai cháº¯c tag nÃ o cÃ²n cáº§n, tag nÃ o cháº¡y khi nÃ o vÃ  má»™t thay Ä‘á»•i nhá» sáº½ áº£nh hÆ°á»Ÿng report ra sao.',
      },
      {
        type: 'paragraph',
        text: 'Consent banner buá»™c team nhÃ¬n tracking cÃ³ trÃ¡ch nhiá»‡m hÆ¡n: mÃ¬nh Ä‘ang Ä‘o gÃ¬, Ä‘o Ä‘á»ƒ lÃ m gÃ¬, tag cháº¡y trong Ä‘iá»u kiá»‡n nÃ o, ngÆ°á»i dÃ¹ng cÃ³ Ä‘Æ°á»£c thÃ´ng bÃ¡o rÃµ khÃ´ng vÃ  dashboard thay Ä‘á»•i tháº¿ nÃ o khi logic tracking Ä‘Æ°á»£c cáº­p nháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Consent khÃ´ng pháº£i váº­t cáº£n cá»§a marketing. Náº¿u nhÃ¬n Ä‘Ãºng, nÃ³ giÃºp há»‡ thá»‘ng tracking cÃ³ chá»§ Ä‘Ã­ch hÆ¡n, minh báº¡ch hÆ¡n vÃ  bá»›t phá»¥ thuá»™c vÃ o nhá»¯ng setup mÆ¡ há»“ mÃ  khÃ´ng ai dÃ¡m sá»­a.',
      },
      { type: 'heading', text: 'Hiá»ƒu Ä‘á»§ Ä‘á»ƒ lÃ m Ä‘Ãºng hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n biáº¿n mÃ¬nh thÃ nh luáº­t sÆ° hay developer. NhÆ°ng marketer nÃªn hiá»ƒu Ä‘á»§ Ä‘á»ƒ biáº¿t website Ä‘ang Ä‘o gÃ¬, tag cháº¡y khi nÃ o, dá»¯ liá»‡u Ä‘i vá» Ä‘Ã¢u vÃ  ngÆ°á»i dÃ¹ng cÃ³ lá»±a chá»n rÃµ rÃ ng hay khÃ´ng. ÄÃ³ lÃ  ná»n cáº§n thiáº¿t Ä‘á»ƒ lÃ m viá»‡c tá»‘t hÆ¡n vá»›i dev, agency vÃ  ngÆ°á»i phá»¥ trÃ¡ch phÃ¡p lÃ½.',
      },
    ],
    cta: 'Náº¿u website cá»§a báº¡n Ä‘Ã£ cÃ³ GA4, Pixel, Ads tag hoáº·c form tracking nhÆ°ng consent banner chá»‰ Ä‘Æ°á»£c cÃ i cho cÃ³, hÃ£y kiá»ƒm tra láº¡i luá»“ng tá»« banner Ä‘áº¿n GTM trÆ°á»›c khi tiáº¿p tá»¥c thÃªm tag má»›i.',
  },
  {
    title: 'Checklist kiá»ƒm tra tracking trÆ°á»›c khi cháº¡y ads',
    slug: 'checklist-kiem-tra-tracking-truoc-khi-chay-ads',
    category: 'Tracking & Data',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-team-dinner-group-01.jpg",
                "alt": "Team group selfie at a restaurant table",
                "caption": "Team meal group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-team-dinner-restaurant-team-group-01.jpg",
                      "alt": "Team members gathered around a restaurant table",
                      "caption": "Team dinner group photo",
                      "width": 2560,
                      "height": 1920,
                      "fit": "cover",
                      "afterHeading": "Checklist 1: Website vÃ  landing page"
                }
          ]
    },
    excerpt:
      'TrÆ°á»›c khi cháº¡y ads hoáº·c tÄƒng ngÃ¢n sÃ¡ch, team nÃªn kiá»ƒm tra tracking tá»« website, event, GTM, GA4, pixel, conversion tag, form lead, CRM vÃ  dashboard. KhÃ´ng pháº£i Ä‘á»ƒ lÃ m ká»¹ thuáº­t cho Ä‘áº¹p, mÃ  Ä‘á»ƒ trÃ¡nh tiÃªu tiá»n trÃªn má»™t há»‡ thá»‘ng Ä‘o lÆ°á»ng chÆ°a Ä‘Ã¡ng tin.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t lá»—i ráº¥t tá»‘n tiá»n nhÆ°ng thÆ°á»ng chá»‰ Ä‘Æ°á»£c phÃ¡t hiá»‡n sau khi campaign Ä‘Ã£ cháº¡y vÃ i ngÃ y: ads váº«n tiÃªu ngÃ¢n sÃ¡ch, landing page váº«n cÃ³ traffic, report váº«n cÃ³ conversion, nhÆ°ng form tháº­t, CRM vÃ  dashboard láº¡i khÃ´ng khá»›p nhau.',
      },
      {
        type: 'paragraph',
        text: 'Nhiá»u team cháº¡y ads trÆ°á»›c, kiá»ƒm tra tracking sau. Äáº¿n khi sá»‘ lá»‡ch má»›i báº¯t Ä‘áº§u debug, lÃºc Ä‘Ã³ vÃ i ngÃ y dá»¯ liá»‡u vÃ  má»™t pháº§n ngÃ¢n sÃ¡ch Ä‘Ã£ trÃ´i qua. Tá»‡ hÆ¡n, campaign cÃ³ thá»ƒ Ä‘Ã£ Ä‘Æ°á»£c tÄƒng, giáº£m hoáº·c táº¯t dá»±a trÃªn tÃ­n hiá»‡u sai.',
      },
      {
        type: 'paragraph',
        text: 'Kiá»ƒm tra tracking trÆ°á»›c khi cháº¡y khÃ´ng lÃ m ads tá»± hiá»‡u quáº£. NÃ³ chá»‰ giáº£m rá»§i ro Ä‘á»ƒ team khÃ´ng báº¯t Ä‘áº§u trong tráº¡ng thÃ¡i mÃ¹. TrÆ°á»›c khi há»i campaign cÃ³ hay khÃ´ng, nÃªn há»i: há»‡ thá»‘ng Ä‘o lÆ°á»ng Ä‘Ã£ Ä‘á»§ Ä‘Ã¡ng tin Ä‘á»ƒ há»c vÃ  ra quyáº¿t Ä‘á»‹nh chÆ°a?',
      },
      { type: 'heading', text: 'VÃ¬ sao pháº£i kiá»ƒm tra tracking trÆ°á»›c khi cháº¡y ads?' },
      {
        type: 'paragraph',
        text: 'Ads kÃ©o traffic vÃ o toÃ n bá»™ há»‡ thá»‘ng phÃ­a sau. Náº¿u ná»n Ä‘o lÆ°á»ng chÆ°a á»•n, PageView cÃ³ thá»ƒ thiáº¿u, form submit báº¯n sai, click Zalo hoáº·c hotline khÃ´ng Ä‘Æ°á»£c ghi nháº­n, Lead bá»‹ Ä‘o trÃ¹ng, GA4 cÃ³ event nhÆ°ng Ads khÃ´ng cÃ³ conversion. CRM cÃ³ lead nhÆ°ng máº¥t nguá»“n; dashboard cÃ³ sá»‘ nhÆ°ng khÃ´ng thá»ƒ Ä‘á»‘i chiáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t lá»—i nhá» trÆ°á»›c ngÃ y launch cÃ³ thá»ƒ thÃ nh quyáº¿t Ä‘á»‹nh sai sau vÃ i ngÃ y cháº¡y. Pre-flight vÃ¬ tháº¿ pháº£i Ä‘i háº¿t Ä‘Æ°á»ng dá»¯ liá»‡u, khÃ´ng chá»‰ nhÃ¬n xem pixel Ä‘Ã£ gáº¯n chÆ°a.',
      },
      { type: 'visual', variant: 'prelaunch-tracking-audit-flow' },
      { type: 'heading', text: 'Checklist 1: Website vÃ  landing page' },
      {
        type: 'paragraph',
        text: 'HÃ£y Ä‘i qua hÃ nh trÃ¬nh nhÆ° má»™t khÃ¡ch tháº­t trÃªn desktop vÃ  mobile. Landing page pháº£i táº£i Ä‘Æ°á»£c, CTA dá»… tháº¥y, cÃ¡c nÃºt liÃªn há»‡ má»Ÿ Ä‘Ãºng nÆ¡i. Form pháº£i gá»­i Ä‘Æ°á»£c, bÃ¡o lá»—i rÃµ vÃ  cÃ³ success state.',
      },
      {
        type: 'list',
        items: [
          'Sau khi submit, lead cÃ³ Ä‘i vá» Ä‘Ãºng CRM, Sheet hoáº·c backend mÃ  sales Ä‘ang dÃ¹ng khÃ´ng?',
          'Refresh trang cáº£m Æ¡n cÃ³ lÃ m conversion báº¯n láº¡i khÃ´ng, vÃ  cÃ³ thá»ƒ trÃ¡nh viá»‡c Ä‘Ã³ khÃ´ng?',
          'Layout mobile cÃ³ che CTA, lÃ m nÃºt khÃ³ báº¥m hoáº·c khiáº¿n form bá»‹ trÃ n khÃ´ng?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tracking khÃ´ng cá»©u Ä‘Æ°á»£c form há»ng hay nÃºt sai link. TrÆ°á»›c khi Ä‘o, pháº£i cháº¯c hÃ nh Ä‘á»™ng tháº­t hoáº¡t Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Checklist 2: Event quan trá»ng Ä‘Ã£ Ä‘á»‹nh nghÄ©a Ä‘Ãºng chÆ°a?' },
      {
        type: 'paragraph',
        text: 'NhÃ³m tá»‘i thiá»ƒu thÆ°á»ng gá»“m PageView hoáº·c ViewContent, main CTA, hotline, Zalo, Messenger, form submit success, Lead vÃ  Purchase náº¿u cÃ³. Dá»‹ch vá»¥ cÃ³ thá»ƒ thÃªm QualifiedLead hoáº·c QuoteRequested khi Ä‘Ã£ cÃ³ Ä‘á»‹nh nghÄ©a rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i tá»«ng event, cáº§n thá»‘ng nháº¥t hÃ nh Ä‘á»™ng, Ä‘iá»u kiá»‡n thÃ nh cÃ´ng, thá»i Ä‘iá»ƒm báº¯n, nguy cÆ¡ trÃ¹ng vÃ  cÃ¡ch Ä‘áº·t tÃªn. CÃ¡c field nhÆ° form_name, page_location, button_name, contact_type giÃºp xÃ¡c Ä‘á»‹nh ngá»¯ cáº£nh.',
      },
      {
        type: 'paragraph',
        text: 'Lead khÃ´ng nÃªn báº¯n khi khÃ¡ch chá»‰ nháº¥n Submit. Purchase cáº§n transaction_id, value vÃ  currency náº¿u cÃ³ dá»¯ liá»‡u Ä‘Æ¡n hÃ ng. Event pháº£i pháº£n Ã¡nh Ä‘Ãºng Ä‘iá»u Ä‘Ã£ xáº£y ra.',
      },
      { type: 'visual', variant: 'tracking-preflight-checklist' },
      { type: 'heading', text: 'Checklist 3: GTM, DataLayer vÃ  tag Ä‘Ã£ cháº¡y Ä‘Ãºng chÆ°a?' },
      {
        type: 'paragraph',
        text: 'Náº¿u dÃ¹ng GTM, kiá»ƒm tra container Ä‘Ãºng ID vÃ  khÃ´ng bá»‹ gáº¯n hai láº§n. Trong Preview, trigger pháº£i Ä‘Ãºng Ä‘iá»u kiá»‡n, variable láº¥y Ä‘Ãºng dá»¯ liá»‡u, DataLayer Ä‘á»§ event vÃ  field, cÃ¡c tag kÃ­ch hoáº¡t Ä‘Ãºng thá»© tá»±. Tag cÅ© khÃ´ng Ä‘Æ°á»£c gá»­i thÃªm conversion.',
      },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n tá»± code, nhÆ°ng pháº£i brief Ä‘Æ°á»£c event, Ä‘Ã­ch Ä‘áº¿n, field Ä‘i kÃ¨m, vai trÃ² tá»«ng tag vÃ  consent logic. Chá»‰ publish sau khi test. GTM lÃ  báº£ng Ä‘iá»u phá»‘i; nÃ³ rá»‘i thÃ¬ dá»¯ liá»‡u cÅ©ng rá»‘i.',
      },
      { type: 'heading', text: 'Checklist 4: GA4, Pixel vÃ  Ads conversion' },
      {
        type: 'paragraph',
        text: 'Má»—i ná»n táº£ng cáº§n test riÃªng. Trong GA4, xem PageView vÃ  event chÃ­nh á»Ÿ Realtime hoáº·c DebugView; kiá»ƒm tra event name, key event, source, medium, campaign. Vá»›i Meta hoáº·c TikTok, kiá»ƒm tra pixel load, event Ä‘Ãºng lÃºc vÃ  khÃ´ng duplicate.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u káº¿t há»£p browser vá»›i CAPI hoáº·c Events API, cáº§n event_id Ä‘á»ƒ dedup. Vá»›i Google Ads, kiá»ƒm tra tag hoáº·c imported conversion Ä‘Ã£ nháº­n, conversion action Ä‘Ãºng má»¥c tiÃªu vÃ  khÃ´ng nháº§m PageView thÃ nh Lead. Enhanced conversion hoáº·c user data chá»‰ dÃ¹ng trong pháº¡m vi phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Website khÃ´ng cáº§n cÃ i Ä‘á»§ má»i ná»n táº£ng. NhÆ°ng kÃªnh nÃ o sáº¯p cháº¡y ads thÃ¬ tÃ­n hiá»‡u conversion cá»§a kÃªnh Ä‘Ã³ pháº£i Ä‘Æ°á»£c test.',
      },
      { type: 'heading', text: 'Checklist 5: UTM, source vÃ  campaign naming' },
      {
        type: 'paragraph',
        text: 'Dashboard lá»‡ch Ä‘Ã´i khi do cÃ¡ch Ä‘áº·t tÃªn. CÃ¹ng Facebook nhÆ°ng lÃºc dÃ¹ng facebook, lÃºc fb, lÃºc meta thÃ¬ ráº¥t khÃ³ gom. HÃ£y thá»‘ng nháº¥t utm_source, utm_medium, utm_campaign vÃ  quy Æ°á»›c cho cÃ¡c kÃªnh.',
      },
      {
        type: 'paragraph',
        text: 'Kiá»ƒm tra link ads cÃ³ UTM, redirect giá»¯ tham sá»‘, campaign dá»… Ä‘á»c, lead lÆ°u source vÃ  dashboard gom Ä‘Ãºng kÃªnh. Naming cÅ©ng lÃ  dá»¯ liá»‡u.',
      },
      { type: 'visual', variant: 'tracking-test-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough checklist kiá»ƒm tra tracking trÆ°á»›c khi cháº¡y ads.',
      },
      { type: 'heading', text: 'Checklist 6: CRM, Sheet vÃ  sales follow-up' },
      {
        type: 'paragraph',
        text: 'Ads bÃ¡o conversion chÆ°a cÃ³ nghÄ©a doanh nghiá»‡p Ä‘Ã£ nháº­n lead. Kiá»ƒm tra record trong CRM, Sheet hoáº·c backend cÃ³ thÃ´ng tin liÃªn há»‡, source, medium, campaign, form_name, page_location vÃ  timestamp. Sales cÃ³ nháº­n thÃ´ng bÃ¡o vÃ  cÃ³ ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Tá»‘i thiá»ƒu nÃªn cÃ³ status Ä‘á»ƒ sales cáº­p nháº­t vÃ  dashboard Ä‘á»c Ä‘Æ°á»£c outcome. Náº¿u ads bÃ¡o Lead nhÆ°ng sales khÃ´ng tháº¥y, hoáº·c sales cÃ³ lead mÃ  khÃ´ng biáº¿t nguá»“n, team váº«n khÃ³ tá»‘i Æ°u.',
      },
      { type: 'heading', text: 'Checklist 7: Dedup, event_id vÃ  transaction_id' },
      {
        type: 'paragraph',
        text: 'Cáº§n kiá»ƒm tra ká»¹ vá»›i thank-you page, browser cá»™ng server-side, Pixel cá»™ng CAPI, TikTok cá»™ng Events API hoáº·c nhiá»u tag cÃ¹ng gá»­i conversion. HÃ£y refresh vÃ  submit láº¡i Ä‘á»ƒ xem Lead hoáº·c Purchase cÃ³ nhÃ¢n Ä‘Ã´i khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Browser vÃ  server nÃªn dÃ¹ng cÃ¹ng event_id khi cáº§n dedup. Purchase cáº§n transaction_id á»•n Ä‘á»‹nh Ä‘á»ƒ má»™t Ä‘Æ¡n khÃ´ng thÃ nh nhiá»u conversion. Dedup khÃ´ng xa xá»‰: sá»‘ nhÃ¢n Ä‘Ã´i cÃ³ thá»ƒ khiáº¿n team scale dá»±a trÃªn káº¿t quáº£ Ä‘áº¹p hÆ¡n thá»±c táº¿.',
      },
      { type: 'heading', text: 'Lá»—i nÃ o pháº£i sá»­a trÆ°á»›c, lá»—i nÃ o cÃ³ thá»ƒ ghi chÃº?' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i thiáº¿u sÃ³t nÃ o cÅ©ng buá»™c hoÃ£n launch. Äiá»u quan trá»ng lÃ  xáº¿p má»©c Æ°u tiÃªn theo áº£nh hÆ°á»Ÿng Ä‘áº¿n hÃ nh Ä‘á»™ng tháº­t, conversion chÃ­nh vÃ  kháº£ nÄƒng Ä‘á»‘i chiáº¿u.',
      },
      { type: 'visual', variant: 'tracking-issue-priority' },
      {
        type: 'paragraph',
        text: 'Form khÃ´ng gá»­i, CTA sai link, Lead báº¯n sai, ná»n táº£ng khÃ´ng nháº­n conversion, CRM khÃ´ng lÆ°u lead, Purchase trÃ¹ng hoáº·c máº¥t nguá»“n lÃ  má»©c pháº£i sá»­a trÆ°á»›c khi cháº¡y. Thiáº¿u field phá»¥, dashboard chÆ°a Ä‘áº¹p hay event phá»¥ chÆ°a Ä‘á»§ cÃ³ thá»ƒ cháº¡y nhá» náº¿u dá»¯ liá»‡u thÃ´ váº«n Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Scroll depth, heatmap, audience, automation vÃ  server-side nÃ¢ng cao thÆ°á»ng cÃ³ thá»ƒ lÃ m sau. Consent vÃ  tag logic váº«n cáº§n review theo bá»‘i cáº£nh; náº¿u chÆ°a rÃµ áº£nh hÆ°á»Ÿng, hÃ£y giá»›i háº¡n test.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign cháº¡y trÆ°á»›c khi test tracking khiáº¿n Lead bá»‹ Ä‘o sai.',
      },
      { type: 'heading', text: 'Go / No-Go trÆ°á»›c khi báº¥m cháº¡y ads' },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ Go khi website vÃ  contact hoáº¡t Ä‘á»™ng, event chÃ­nh báº¯n Ä‘Ãºng, ná»n táº£ng nháº­n conversion, lead lÆ°u Ä‘Ãºng nÆ¡i, source vÃ  campaign Ä‘á»c Ä‘Æ°á»£c. Team cÅ©ng cáº§n chá»‰ Ä‘á»‹nh ngÆ°á»i review dá»¯ liá»‡u trong 24â€“48 giá» Ä‘áº§u vÃ  quy trÃ¬nh xá»­ lÃ½ náº¿u sá»‘ lá»‡ch.',
      },
      {
        type: 'paragraph',
        text: 'NÃªn No-Go hoáº·c chá»‰ test ráº¥t nhá» khi chÆ°a cháº¯c form gá»­i Ä‘Æ°á»£c, khÃ´ng rÃµ conversion báº¯n lÃºc nÃ o, khÃ´ng test Ä‘Æ°á»£c tag, khÃ´ng cÃ³ nÆ¡i lÆ°u lead, máº¥t nguá»“n campaign hoáº·c dashboard khÃ´ng cÃ³ nguá»“n tháº­t Ä‘á»ƒ Ä‘á»‘i chiáº¿u.',
      },
      { type: 'visual', variant: 'ads-tracking-go-no-go' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n pre-launch tracking checklist táº£i vá».',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i cháº¡y ads, nhiá»u team chá»‰ kiá»ƒm tra campaign, content, ngÃ¢n sÃ¡ch vÃ  landing page. LÃ m lÃ¢u má»›i tháº¥y tracking cÅ©ng cáº§n má»™t bÆ°á»›c pre-flight nhÆ° mÃ¡y bay trÆ°á»›c khi cáº¥t cÃ¡nh. KhÃ´ng pháº£i tracking quan trá»ng hÆ¡n content hay offer, mÃ  vÃ¬ tracking sai khiáº¿n team khÃ´ng biáº¿t chÃºng Ä‘ang tháº­t sá»± hoáº¡t Ä‘á»™ng tháº¿ nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t checklist tá»‘t giÃºp team bá»›t tranh luáº­n cáº£m tÃ­nh, phÃ¡t hiá»‡n lá»—i trÆ°á»›c khi tiÃªu tiá»n lá»›n, biáº¿t data nÃ o cÃ³ thá»ƒ tin vÃ  sá»‘ nÃ o cáº§n Ä‘á»‘i chiáº¿u. Nhá» váº­y, cuá»™c review tuáº§n Ä‘áº§u bÃ¬nh tÄ©nh hÆ¡n. Tracking pre-launch khÃ´ng lÃ m campaign tháº¯ng; nÃ³ giÃºp team khÃ´ng báº¯t Ä‘áº§u báº±ng má»™t há»‡ thá»‘ng Ä‘o lÆ°á»ng mÃ¹.',
      },
      { type: 'heading', text: 'Kiá»ƒm tra Ä‘á»§ nhá»¯ng Ä‘iá»ƒm sá»‘ng cÃ²n' },
      {
        type: 'paragraph',
        text: 'Tracking khÃ´ng cáº§n hoÃ n háº£o tuyá»‡t Ä‘á»‘i trÆ°á»›c launch. NhÆ°ng website pháº£i hoáº¡t Ä‘á»™ng, event chÃ­nh báº¯n Ä‘Ãºng, platform nháº­n conversion, lead vá» nÆ¡i sales dÃ¹ng, source/campaign Ä‘á»c Ä‘Æ°á»£c vÃ  dashboard cÃ³ cÃ¡ch Ä‘á»‘i chiáº¿u. ÄÃ³ lÃ  má»©c ná»n Ä‘á»ƒ ngÃ¢n sÃ¡ch táº¡o ra bÃ i há»c Ä‘Ã¡ng tin hÆ¡n, khÃ´ng pháº£i lá»i há»©a ads sáº½ hiá»‡u quáº£.',
      },
    ],
    cta: 'Náº¿u báº¡n chuáº©n bá»‹ cháº¡y ads cho website má»›i, Ä‘á»«ng chá»‰ há»i â€œngÃ¢n sÃ¡ch bao nhiÃªuâ€ hoáº·c â€œcontent xong chÆ°aâ€. HÃ£y há»i: tracking Ä‘Ã£ Ä‘á»§ Ä‘Ã¡ng tin Ä‘á»ƒ team há»c tá»« ngÃ¢n sÃ¡ch Ä‘Ã³ chÆ°a?',
  },
  {
    title: 'Dashboard marketing khÃ´ng pháº£i Ä‘á»ƒ nhÃ¬n cho Ä‘áº¹p, mÃ  Ä‘á»ƒ ra quyáº¿t Ä‘á»‹nh má»—i tuáº§n',
    slug: 'dashboard-marketing-khong-phai-de-nhin-cho-dep-ma-de-ra-quyet-dinh-moi-tuan',
    category: 'Dashboard & Insights',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-operations-warehouse-boxes-01.jpg",
                "alt": "Person beside stacked product boxes in a work area",
                "caption": "Operations and product stock moment",
                "width": 2048,
                "height": 1171,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-partnership-tablet-handoff-01.jpg",
                      "alt": "Two people standing outdoors with a tablet",
                      "caption": "Work partnership moment",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "Dashboard nÃªn báº¯t Ä‘áº§u tá»« cÃ¢u há»i, khÃ´ng pháº£i tá»« chart"
                }
          ]
    },
    excerpt:
      'Má»™t dashboard marketing tá»‘t khÃ´ng pháº£i lÃ  dashboard cÃ³ nhiá»u biá»ƒu Ä‘á»“. NÃ³ pháº£i giÃºp founder vÃ  team biáº¿t tuáº§n nÃ y kÃªnh nÃ o Ä‘ang táº¡o tÃ­n hiá»‡u tá»‘t, Ä‘oáº¡n nÃ o Ä‘ang rÆ¡i, viá»‡c gÃ¬ cáº§n sá»­a vÃ  quyáº¿t Ä‘á»‹nh nÃ o nÃªn Ä‘Æ°á»£c Ä‘Æ°a ra trong tuáº§n tiáº¿p theo.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u doanh nghiá»‡p báº¯t Ä‘áº§u lÃ m dashboard vÃ¬ muá»‘n nhÃ¬n marketing chuyÃªn nghiá»‡p hÆ¡n. CÃ³ biá»ƒu Ä‘á»“, mÃ u sáº¯c, sá»‘ liá»‡u theo ngÃ y, theo kÃªnh, theo campaign. NhÆ°ng Ä‘áº¿n buá»•i há»p tuáº§n, founder váº«n há»i má»™t cÃ¢u ráº¥t cÆ¡ báº£n: váº­y tuáº§n nÃ y mÃ¬nh nÃªn lÃ m gÃ¬?',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ dashboard khÃ´ng Ä‘á»“ng nghÄ©a team ra quyáº¿t Ä‘á»‹nh tá»‘t hÆ¡n. Nhiá»u chart cÅ©ng khÃ´ng cÃ³ nghÄ©a team hiá»ƒu há»‡ thá»‘ng hÆ¡n. Náº¿u dashboard chá»‰ gom sá»‘ mÃ  khÃ´ng giÃºp tháº¥y váº¥n Ä‘á», má»i ngÆ°á»i váº«n pháº£i Ä‘oÃ¡n xem kÃªnh nÃ o á»•n, Ä‘oáº¡n nÃ o Ä‘ang rÆ¡i, lead cÃ³ cháº¥t lÆ°á»£ng khÃ´ng vÃ  sales Ä‘Ã£ xá»­ lÃ½ tá»›i Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Tracking giÃºp dá»¯ liá»‡u Ä‘Æ°á»£c ghi nháº­n. Dashboard giÃºp team Ä‘á»c dá»¯ liá»‡u Ä‘Ã³ Ä‘á»ƒ quyáº¿t Ä‘á»‹nh vÃ  lÃ m cuá»™c há»p marketing bá»›t cáº£m tÃ­nh.',
      },
      { type: 'heading', text: 'Dashboard Ä‘áº¹p nhÆ°ng khÃ´ng giÃºp quyáº¿t Ä‘á»‹nh thÃ¬ váº«n thiáº¿u' },
      {
        type: 'paragraph',
        text: 'Má»™t dashboard cÃ³ thá»ƒ nhÃ¬n ráº¥t chuyÃªn nghiá»‡p nhÆ°ng váº«n khÃ´ng há»¯u Ã­ch. Dáº¥u hiá»‡u quen thuá»™c lÃ  cÃ³ nhiá»u chá»‰ sá»‘ nhÆ°ng khÃ´ng biáº¿t sá»‘ nÃ o quan trá»ng; nhiá»u biá»ƒu Ä‘á»“ nhÆ°ng khÃ´ng tháº¥y váº¥n Ä‘á»; chá»‰ nhÃ¬n tá»•ng traffic, tá»•ng lead vÃ  tá»•ng cost mÃ  khÃ´ng tÃ¡ch nguá»“n, campaign, landing page, form hay sales status.',
      },
      {
        type: 'paragraph',
        text: 'Khi sá»‘ tÄƒng hoáº·c giáº£m, khÃ´ng ai giáº£i thÃ­ch Ä‘Æ°á»£c bá»‘i cáº£nh. Dashboard khÃ´ng cÃ³ chá»— ghi chÃº, khÃ´ng dáº«n Ä‘áº¿n hÃ nh Ä‘á»™ng tiáº¿p theo, vÃ  cuá»‘i cuá»™c há»p váº«n chÆ°a ai chá»‘t viá»‡c cáº§n sá»­a. Dashboard khÃ´ng tháº¥t báº¡i vÃ¬ thiáº¿u biá»ƒu Ä‘á»“. NÃ³ tháº¥t báº¡i khi khÃ´ng giÃºp team ra quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'visual', variant: 'vanity-vs-decision-dashboard' },
      { type: 'heading', text: 'Dashboard nÃªn báº¯t Ä‘áº§u tá»« cÃ¢u há»i, khÃ´ng pháº£i tá»« chart' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi chá»n biá»ƒu Ä‘á»“ cá»™t, Ä‘Æ°á»ng hay báº£ng, team nÃªn thá»‘ng nháº¥t dashboard pháº£i tráº£ lá»i cÃ¢u há»i gÃ¬. Vá»›i founder vÃ  marketer SME, cÃ¡c cÃ¢u há»i thÆ°á»ng ráº¥t thá»±c táº¿:',
      },
      {
        type: 'list',
        items: [
          'Tuáº§n nÃ y lead tÄƒng hay giáº£m, vÃ  lead Ä‘áº¿n tá»« kÃªnh nÃ o?',
          'KÃªnh nÃ o táº¡o lead Ä‘Ãºng nhu cáº§u hÆ¡n, khÃ´ng chá»‰ ráº» hÆ¡n?',
          'Landing page nÃ o cÃ³ traffic nhÆ°ng Ã­t contact?',
          'Campaign nÃ o CPL tháº¥p nhÆ°ng tá»· lá»‡ qualified láº¡i kÃ©m?',
          'Sales Ä‘Ã£ xá»­ lÃ½ bao nhiÃªu lead, lead rÆ¡i á»Ÿ contact, tÆ° váº¥n, bÃ¡o giÃ¡ hay chá»‘t?',
          'Tuáº§n sau nÃªn tÄƒng ngÃ¢n sÃ¡ch, sá»­a landing page, Ä‘á»•i content hay chá»‰nh quy trÃ¬nh sales?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Chart chá»‰ lÃ  hÃ¬nh thá»©c hiá»ƒn thá»‹. CÃ¢u há»i má»›i quyáº¿t Ä‘á»‹nh dashboard cÃ³ Ä‘Ã¡ng dÃ¹ng hay khÃ´ng. Má»™t báº£ng Ä‘Æ¡n giáº£n tráº£ lá»i Ä‘Ãºng cÃ¢u há»i thÆ°á»ng cÃ³ Ã­ch hÆ¡n má»™t trang Ä‘áº§y biá»ƒu Ä‘á»“ khÃ´ng gáº¯n vá»›i quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'heading', text: 'Má»™t dashboard marketing tá»‘i thiá»ƒu nÃªn cÃ³ nhá»¯ng lá»›p nÃ o?' },
      {
        type: 'paragraph',
        text: 'Dashboard nÃªn pháº£n Ã¡nh hÃ nh trÃ¬nh thay vÃ¬ gom cÃ¡c con sá»‘ rá»i ráº¡c. Lá»›p Traffic cho biáº¿t khÃ¡ch Ä‘áº¿n tá»« source, medium, campaign vÃ  landing page nÃ o. Lá»›p Engagement cho biáº¿t há» cÃ³ click CTA, gá»i hotline, má»Ÿ Zalo, Messenger hoáº·c báº¯t Ä‘áº§u form hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Lá»›p Lead ghi nháº­n contact vÃ  form submit thÃ nh cÃ´ng, kÃ¨m trang, form hoáº·c kÃªnh táº¡o lead. Sau Ä‘Ã³ cáº§n lá»›p Sales Status: Ä‘Ã£ gá»i chÆ°a, cÃ³ liÃªn há»‡ Ä‘Æ°á»£c khÃ´ng, Ä‘Ãºng nhu cáº§u khÃ´ng, Ä‘Ã£ tÆ° váº¥n hoáº·c bÃ¡o giÃ¡ chÆ°a. Cuá»‘i cÃ¹ng lÃ  Outcome nhÆ° opportunity, won/lost, Ä‘Æ¡n hÃ ng, doanh thu hoáº·c má»™t tráº¡ng thÃ¡i gáº§n káº¿t quáº£ kinh doanh hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard chá»‰ nhÃ¬n traffic vÃ  lead má»›i cho tháº¥y ná»­a Ä‘áº§u. Muá»‘n biáº¿t marketing táº¡o giÃ¡ trá»‹ tháº­t khÃ´ng, team cáº§n ná»‘i tiáº¿p sales status vÃ  outcome.',
      },
      { type: 'visual', variant: 'weekly-marketing-dashboard-map' },
      { type: 'heading', text: 'Dashboard nÃªn giÃºp team tháº¥y Ä‘iá»ƒm ngháº½n' },
      {
        type: 'paragraph',
        text: 'Dashboard khÃ´ng chá»‰ bÃ¡o káº¿t quáº£. NÃ³ nÃªn giÃºp team Ä‘áº·t cÃ¢u há»i cháº©n Ä‘oÃ¡n. Traffic tÄƒng nhÆ°ng lead khÃ´ng tÄƒng cÃ³ thá»ƒ gá»£i Ã½ váº¥n Ä‘á» á»Ÿ landing page, offer, CTA hoáº·c form. Lead tÄƒng nhÆ°ng sales khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c cÃ³ thá»ƒ liÃªn quan tá»›i cháº¥t lÆ°á»£ng tá»‡p hoáº·c dá»¯ liá»‡u form.',
      },
      {
        type: 'paragraph',
        text: 'Lead nhiá»u nhÆ°ng Ã­t bÃ¡o giÃ¡ cÃ³ thá»ƒ do targeting sai hoáº·c cÃ¡ch qualification chÆ°a rÃµ. CPL tháº¥p nhÆ°ng tá»· lá»‡ qualified tháº¥p khÃ´ng pháº£i tÃ­n hiá»‡u Ä‘á»ƒ vá»™i scale. NgÆ°á»£c láº¡i, má»™t kÃªnh Ã­t lead hÆ¡n nhÆ°ng tá»· lá»‡ bÃ¡o giÃ¡ cao hÆ¡n cÃ³ thá»ƒ Ä‘Ã¡ng giá»¯ vÃ  tá»‘i Æ°u sÃ¢u.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘t khÃ´ng káº¿t luáº­n thay con ngÆ°á»i. NÃ³ lÃ m rÃµ nÆ¡i cáº§n Ä‘iá»u tra Ä‘á»ƒ team khÃ´ng pháº£n á»©ng Ä‘Æ¡n giáº£n vá»›i viá»‡c sá»‘ lá»›n hÆ¡n hay nhá» hÆ¡n.',
      },
      { type: 'visual', variant: 'metrics-to-actions' },
      { type: 'heading', text: 'Dashboard khÃ´ng nÃªn gom quÃ¡ nhiá»u KPI tá»« Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Impression, reach, click, CTR, CPC, CPM, session, engagement, lead, CPL, conversion rate, sales status, revenue vÃ  ROAS Ä‘á»u cÃ³ thá»ƒ há»¯u Ã­ch. NhÆ°ng Ä‘Æ°a táº¥t cáº£ lÃªn cÃ¹ng má»™t mÃ n hÃ¬nh mÃ  khÃ´ng cÃ³ cáº¥u trÃºc sáº½ lÃ m ngÆ°á»i xem bá»‹ ngá»£p vÃ  máº¥t trá»ng tÃ¢m.',
      },
      {
        type: 'list',
        items: [
          'Founder view: khoáº£ng 5â€“8 chá»‰ sá»‘ chÃ­nh Ä‘á»ƒ nhÃ¬n dÃ²ng tiá»n, tÃ­n hiá»‡u, lead vÃ  outcome.',
          'Marketing view: chi tiáº¿t theo channel, campaign, content vÃ  landing page.',
          'Sales view: lead status, follow-up, quality vÃ  outcome.',
          'Diagnostic view: chá»‰ má»Ÿ khi cáº§n Ä‘Ã o sÃ¢u nguyÃªn nhÃ¢n.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘t khÃ´ng pháº£i nÆ¡i nhÃ©t nhiá»u sá»‘ nháº¥t. NÃ³ Æ°u tiÃªn Ä‘Ãºng thÃ´ng tin cho Ä‘Ãºng ngÆ°á»i xem vÃ  Ä‘Ãºng quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'heading', text: 'Founder nÃªn nhÃ¬n dashboard marketing theo tuáº§n nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Founder khÃ´ng cáº§n theo dÃµi má»i chá»‰ sá»‘ má»—i ngÃ y. NhÆ°ng trong nhá»‹p tuáº§n, founder nÃªn tháº¥y: Ä‘Ã£ chi bao nhiÃªu, tiá»n Ä‘i vÃ o kÃªnh nÃ o, kÃªnh nÃ o táº¡o traffic, contact vÃ  lead, nhÃ³m lead nÃ o cÃ³ cháº¥t lÆ°á»£ng hÆ¡n, sales Ä‘Ã£ xá»­ lÃ½ tá»›i Ä‘Ã¢u, vÃ  Ä‘Ã£ cÃ³ cÆ¡ há»™i, bÃ¡o giÃ¡ hoáº·c doanh thu nÃ o chÆ°a.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u há»i cuá»‘i cÃ¹ng luÃ´n lÃ  tuáº§n sau lÃ m gÃ¬: tÄƒng, giáº£m, giá»¯, sá»­a hay test má»›i? Founder khÃ´ng cáº§n bá»‹ kÃ©o vÃ o tá»«ng CPC hoáº·c tá»«ng máº«u quáº£ng cÃ¡o, nhÆ°ng cáº§n tháº¥y dÃ²ng cháº£y tá»« tiá»n Ä‘áº¿n tÃ­n hiá»‡u, lead, sales vÃ  outcome.',
      },
      { type: 'visual', variant: 'dashboard-decision-loop' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cáº¥u trÃºc má»™t dashboard marketing weekly review.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi lÃ m dashboard marketing' },
      {
        type: 'list',
        items: [
          'LÃ m dashboard trÆ°á»›c khi Ä‘á»‹nh nghÄ©a cÃ¢u há»i cáº§n tráº£ lá»i.',
          'Gom quÃ¡ nhiá»u metric nhÆ°ng khÃ´ng cÃ³ táº§ng Æ°u tiÃªn.',
          'Chá»‰ láº¥y sá»‘ tá»« ads, khÃ´ng ná»‘i CRM, Sheet hoáº·c sales status.',
          'Chá»‰ nhÃ¬n tá»•ng lead mÃ  khÃ´ng nhÃ¬n cháº¥t lÆ°á»£ng vÃ  outcome.',
          'KhÃ´ng cÃ³ quy Æ°á»›c UTM, source vÃ  campaign naming rÃµ.',
          'KhÃ´ng ghi chÃº bá»‘i cáº£nh nhÆ° campaign má»›i, tracking Ä‘á»•i, sales nghá»‰ hoáº·c mÃ¹a vá»¥.',
          'KhÃ´ng phÃ¢n biá»‡t view theo dÃµi thÆ°á»ng ká»³ vá»›i view cháº©n Ä‘oÃ¡n.',
          'KhÃ´ng ai chá»‹u trÃ¡ch nhiá»‡m cáº­p nháº­t vÃ  kiá»ƒm tra dá»¯ liá»‡u.',
          'Dashboard Ä‘áº¹p nhÆ°ng khÃ´ng Ä‘Æ°á»£c dÃ¹ng trong cuá»™c há»p tuáº§n.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c lá»—i nÃ y cÃ³ chung má»™t gá»‘c: dashboard khÃ´ng cÃ³ vai trÃ² rÃµ trong quy trÃ¬nh ra quyáº¿t Ä‘á»‹nh. Khi khÃ´ng ai biáº¿t pháº£i dÃ¹ng nÃ³ lÃºc nÃ o vÃ  chá»‘t Ä‘iá»u gÃ¬, chart Ä‘áº¹p Ä‘áº¿n Ä‘Ã¢u cÅ©ng sá»›m thÃ nh tÃ i sáº£n trang trÃ­.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t dashboard cÃ³ nhiá»u chart nhÆ°ng khÃ´ng giÃºp team chá»‘t hÃ nh Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Checklist dashboard marketing trÆ°á»›c khi dÃ¹ng háº±ng tuáº§n' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi Ä‘Æ°a dashboard vÃ o buá»•i review, hÃ£y kiá»ƒm tra nÃ³ tá»« cÃ¢u há»i, dá»¯ liá»‡u Ä‘áº§u vÃ o, sales status, outcome Ä‘áº¿n ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m cáº­p nháº­t. Quan trá»ng nháº¥t lÃ  sau khi xem, team cÃ³ chá»‘t Ä‘Æ°á»£c viá»‡c hay váº«n quay láº¡i tranh luáº­n báº±ng cáº£m giÃ¡c.',
      },
      { type: 'visual', variant: 'founder-dashboard-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n weekly marketing dashboard template cho founder/SME.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m dashboard, nhiá»u ngÆ°á»i nghÄ© pháº§n khÃ³ lÃ  kÃ©o dá»¯ liá»‡u vÃ  váº½ biá»ƒu Ä‘á»“. LÃ m lÃ¢u má»›i tháº¥y pháº§n khÃ³ hÆ¡n lÃ  quyáº¿t Ä‘á»‹nh dashboard phá»¥c vá»¥ ai, tráº£ lá»i cÃ¢u há»i gÃ¬ vÃ  Ä‘Æ°á»£c dÃ¹ng trong nhá»‹p váº­n hÃ nh nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t dashboard khÃ´ng Ä‘i vÃ o cuá»™c há»p tháº­t ráº¥t dá»… trá»Ÿ thÃ nh Ä‘á»“ trang trÃ­. NgÆ°á»£c láº¡i, dashboard Ä‘Æ¡n giáº£n nhÆ°ng tuáº§n nÃ o cÅ©ng giÃºp team chá»‘t má»™t vÃ i viá»‡c cáº§n sá»­a cÃ³ giÃ¡ trá»‹ hÆ¡n nhiá»u. NÃ³ khÃ´ng lÃ m team thÃ´ng minh hÆ¡n ngay láº­p tá»©c, nhÆ°ng giÃºp má»i ngÆ°á»i bá»›t quyáº¿t Ä‘á»‹nh báº±ng cáº£m giÃ¡c vÃ  nhÃ¬n há»‡ thá»‘ng bÃ¬nh tÄ©nh hÆ¡n.',
      },
      { type: 'heading', text: 'Dashboard pháº£i káº¿t thÃºc báº±ng má»™t quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'Dashboard giÃºp team nhÃ¬n má»—i tuáº§n: tiá»n Ä‘i Ä‘Ã¢u, lead cÃ³ cháº¥t lÆ°á»£ng khÃ´ng, sales xá»­ lÃ½ tá»›i Ä‘Ã¢u vÃ  cáº§n sá»­a gÃ¬. Náº¿u khÃ´ng dáº«n Ä‘áº¿n quyáº¿t Ä‘á»‹nh hoáº·c cÃ¢u há»i cháº©n Ä‘oÃ¡n rÃµ hÆ¡n, nÃ³ chÆ°a hoÃ n thÃ nh nhiá»‡m vá»¥.',
      },
    ],
    cta: 'Náº¿u dashboard cÃ³ nhiá»u biá»ƒu Ä‘á»“ nhÆ°ng sau buá»•i há»p team váº«n khÃ´ng biáº¿t nÃªn tÄƒng, giáº£m, giá»¯, sá»­a hay test gÃ¬, hÃ£y báº¯t Ä‘áº§u láº¡i tá»« cÃ¢u há»i: dashboard nÃ y Ä‘ang phá»¥c vá»¥ quyáº¿t Ä‘á»‹nh nÃ o?',
  },
  {
    title: 'Má»™t dashboard marketing tá»‘i thiá»ƒu nÃªn cÃ³ nhá»¯ng gÃ¬?',
    slug: 'mot-dashboard-marketing-toi-thieu-nen-co-nhung-gi',
    category: 'Dashboard & Insights',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-team-dinner-group-01.jpg",
                "alt": "Team group selfie at a restaurant table",
                "caption": "Team meal group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-operations-box-carrying-01.jpg",
                      "alt": "Person carrying a product box in a work area",
                      "caption": "Operations work moment",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "Block 1: Executive snapshot cho founder"
                }
          ]
    },
    excerpt:
      'Má»™t dashboard marketing tá»‘i thiá»ƒu khÃ´ng cáº§n cÃ³ quÃ¡ nhiá»u biá»ƒu Ä‘á»“. NhÆ°ng nÃ³ nÃªn giÃºp founder vÃ  team biáº¿t tiá»n Ä‘ang chi vÃ o Ä‘Ã¢u, kÃªnh nÃ o táº¡o traffic/contact/lead, lead cÃ³ cháº¥t lÆ°á»£ng khÃ´ng, sales xá»­ lÃ½ Ä‘áº¿n Ä‘Ã¢u vÃ  tuáº§n sau nÃªn lÃ m gÃ¬ tiáº¿p theo.',
    content: [
      {
        type: 'paragraph',
        text: 'Khi báº¯t Ä‘áº§u lÃ m dashboard marketing, nhiá»u team thÆ°á»ng há»i nÃªn dÃ¹ng tool nÃ o, kÃ©o dá»¯ liá»‡u tá»« Ä‘Ã¢u, váº½ biá»ƒu Ä‘á»“ gÃ¬ cho Ä‘áº¹p. NhÆ°ng cÃ¢u há»i nÃªn há»i trÆ°á»›c lÃ : má»™t dashboard tá»‘i thiá»ƒu cáº§n cÃ³ nhá»¯ng gÃ¬ Ä‘á»ƒ founder vÃ  team ra quyáº¿t Ä‘á»‹nh má»—i tuáº§n?',
      },
      {
        type: 'paragraph',
        text: 'Dashboard khÃ´ng cáº§n phá»©c táº¡p hoáº·c chá»©a má»i metric. NhÆ°ng náº¿u quÃ¡ thiáº¿u, nÃ³ chá»‰ lÃ  báº£ng sá»‘ rá»i ráº¡c: biáº¿t spend vÃ  lead mÃ  khÃ´ng biáº¿t cháº¥t lÆ°á»£ng, cÃ¡ch xá»­ lÃ½ hay Ä‘iá»ƒm rÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘i thiá»ƒu khÃ´ng pháº£i Ä‘á»ƒ â€œcho cÃ³ dashboardâ€. NÃ³ pháº£i Ä‘á»§ Ä‘á»ƒ dÃ¹ng trong váº­n hÃ nh tháº­t: nhÃ¬n Ä‘Æ°á»£c ngÃ¢n sÃ¡ch, traffic, contact, lead, sales status, outcome vÃ  viá»‡c cáº§n lÃ m tiáº¿p theo.',
      },
      { type: 'heading', text: 'Dashboard tá»‘i thiá»ƒu khÃ´ng pháº£i dashboard sÆ¡ sÃ i' },
      {
        type: 'paragraph',
        text: 'Tá»‘i thiá»ƒu khÃ´ng cÃ³ nghÄ©a chá»‰ giá»¯ spend, click vÃ  lead. Má»™t dashboard Ä‘á»§ dÃ¹ng váº«n cáº§n bá»©c tranh tá»•ng quan, pháº§n tÃ¡ch theo kÃªnh, contact hoáº·c lead, cháº¥t lÆ°á»£ng hoáº·c sales status, outcome hay proxy gáº§n outcome, cÃ¹ng ghi chÃº hÃ nh Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard sÆ¡ sÃ i chá»‰ nÃ³i â€œtuáº§n nÃ y cÃ³ bao nhiÃªu leadâ€. Dashboard tá»‘i thiá»ƒu pháº£i cho biáº¿t lead Ä‘áº¿n tá»« Ä‘Ã¢u, cÃ³ Ä‘Ã¡ng xá»­ lÃ½ vÃ  táº¡o cÆ¡ há»™i tháº­t khÃ´ng. KhÃ¡c biá»‡t náº±m á»Ÿ cáº¥u trÃºc, khÃ´ng pháº£i sá»‘ chart.',
      },
      { type: 'visual', variant: 'minimum-marketing-dashboard-structure' },
      { type: 'heading', text: 'Block 1: Executive snapshot cho founder' },
      {
        type: 'paragraph',
        text: 'Founder khÃ´ng cáº§n má»Ÿ dashboard ra lÃ  tháº¥y 30 biá»ƒu Ä‘á»“. Pháº§n Ä‘áº§u nÃªn lÃ  snapshot ngáº¯n gá»“m tá»•ng ngÃ¢n sÃ¡ch, traffic hoáº·c session, contact hoáº·c lead, CPL náº¿u phÃ¹ há»£p, sá»‘ lead qualified vÃ  sá»‘ bÃ¡o giÃ¡, cÆ¡ há»™i hoáº·c doanh thu náº¿u Ä‘Ã£ cÃ³ dá»¯ liá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'Snapshot cáº§n thÃªm má»™t dÃ²ng bá»‘i cáº£nh: tuáº§n nÃ y cÃ³ gÃ¬ báº¥t thÆ°á»ng? â€œLead tÄƒng nhÆ°ng qualified giáº£mâ€, â€œspend tÄƒng nhÆ°ng contact khÃ´ng tÄƒngâ€ hay â€œtraffic giáº£m nhÆ°ng tá»· lá»‡ bÃ¡o giÃ¡ tá»‘t hÆ¡nâ€ há»¯u Ã­ch hÆ¡n má»™t hÃ ng sá»‘ khÃ´ng cÃ³ diá»…n giáº£i.',
      },
      { type: 'heading', text: 'Block 2: Channel vÃ  campaign view' },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘i thiá»ƒu pháº£i cho biáº¿t kÃªnh nÃ o Ä‘ang táº¡o tÃ­n hiá»‡u. NÃªn tÃ¡ch theo source, medium, campaign vÃ  landing page; Ä‘i kÃ¨m spend náº¿u cÃ³ ads, traffic, contact hoáº·c lead, CPL vÃ  qualified lead hoáº·c outcome khi dá»¯ liá»‡u cho phÃ©p.',
      },
      {
        type: 'paragraph',
        text: 'Tá»•ng lead khÃ´ng cho biáº¿t kÃªnh nÃ o Ä‘Ã³ng gÃ³p tháº­t. Quyáº¿t Ä‘á»‹nh giá»¯, giáº£m hay tÄƒng ngÃ¢n sÃ¡ch cáº§n nhÃ¬n theo channel vÃ  campaign.',
      },
      { type: 'visual', variant: 'weekly-dashboard-layout' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cáº¥u trÃºc dashboard marketing tá»‘i thiá»ƒu cho SME.',
      },
      { type: 'heading', text: 'Block 3: Contact vÃ  lead view' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i lead nÃ o cÅ©ng giá»‘ng nhau. Dashboard nÃªn cho biáº¿t form hoáº·c landing page nÃ o táº¡o lead, contact type lÃ  hotline, Zalo, Messenger hay form, má»¥c Ä‘Ã­ch lÃ  tÆ° váº¥n, bÃ¡o giÃ¡ hay Ä‘áº·t lá»‹ch, thá»i gian phÃ¡t sinh vÃ  source/campaign liÃªn quan. Náº¿u há»‡ thá»‘ng cÃ³ kiá»ƒm tra trÃ¹ng, tráº¡ng thÃ¡i Ä‘Ã³ cÅ©ng nÃªn Ä‘Æ°á»£c lÆ°u.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i SME, nhiá»u khÃ¡ch khÃ´ng Ä‘iá»n form mÃ  gá»i Ä‘iá»‡n hoáº·c má»Ÿ Zalo. Dashboard chá»‰ Ä‘áº¿m form submit cÃ³ thá»ƒ Ä‘Ã¡nh giÃ¡ sai landing page vÃ  campaign. VÃ¬ váº­y block tá»‘i thiá»ƒu nÃªn Ä‘á»c cáº£ contact láº«n lead, khÃ´ng chá»‰ má»™t loáº¡i conversion thuáº­n tiá»‡n nháº¥t.',
      },
      { type: 'heading', text: 'Block 4: Sales status vÃ  lead quality' },
      {
        type: 'paragraph',
        text: 'ÄÃ¢y lÃ  block quan trá»ng nhÆ°ng thÆ°á»ng bá»‹ bá» qua. Status khÃ´ng cáº§n phá»©c táº¡p: New, Contacted, Cannot contact, Wrong need, Qualified, Consultation, Quoted, Won, Lost hoáº·c Follow-up later Ä‘Ã£ Ä‘á»§ Ä‘á»ƒ báº¯t Ä‘áº§u. Quan trá»ng lÃ  sales cáº­p nháº­t nháº¥t quÃ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t kÃªnh cÃ³ thá»ƒ táº¡o 50 lead nhÆ°ng chá»‰ 5 qualified. KÃªnh khÃ¡c táº¡o 20 lead nhÆ°ng cÃ³ 12 qualified vÃ  6 bÃ¡o giÃ¡. ÄÃ¢y chá»‰ lÃ  vÃ­ dá»¥ minh hoáº¡, nhÆ°ng cho tháº¥y náº¿u chá»‰ nhÃ¬n tá»•ng lead, team ráº¥t dá»… tÄƒng ngÃ¢n sÃ¡ch sai nÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'Founder, marketing vÃ  sales cáº§n nhÃ¬n cÃ¹ng dÃ²ng dá»¯ liá»‡u á»Ÿ cÃ¡c gÃ³c khÃ¡c nhau. Founder cáº§n quyáº¿t Ä‘á»‹nh; marketing cáº§n tháº¥y channel, campaign, landing page vÃ  conversion; sales cáº§n status, outcome vÃ  follow-up.',
      },
      { type: 'visual', variant: 'dashboard-audience-views' },
      { type: 'heading', text: 'Block 5: Outcome hoáº·c proxy gáº§n outcome' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i doanh nghiá»‡p nÃ o cÅ©ng ná»‘i Ä‘Æ°á»£c doanh thu vÃ o dashboard ngay. NhÆ°ng team nÃªn cÃ³ má»™t outcome hoáº·c proxy gáº§n káº¿t quáº£ kinh doanh: qualified lead, cuá»™c háº¹n tÆ° váº¥n, bÃ¡o giÃ¡ Ä‘Ã£ gá»­i, deal created, won/lost, revenue, repeat order hoáº·c offline conversion náº¿u cÃ³ quy trÃ¬nh Ä‘á»‘i chiáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'Khi dashboard chá»‰ cÃ³ traffic vÃ  lead, team dá»… tá»‘i Æ°u theo sá»‘ lÆ°á»£ng. ThÃªm outcome giÃºp nhÃ¬n cháº¥t lÆ°á»£ng vÃ  tÃ¡c Ä‘á»™ng kinh doanh tá»‘t hÆ¡n. Má»¥c tiÃªu lÃ  Ä‘i cÃ ng gáº§n doanh thu cÃ ng tá»‘t, khÃ´ng pháº£i Ã©p SME xÃ¢y revenue dashboard phá»©c táº¡p tá»« ngÃ y Ä‘áº§u.',
      },
      { type: 'heading', text: 'Block 6: Action notes' },
      {
        type: 'paragraph',
        text: 'Má»™t khu vá»±c nhá» dÃ nh cho hÃ nh Ä‘á»™ng cÃ³ thá»ƒ lÃ  pháº§n giÃ¡ trá»‹ nháº¥t: tuáº§n nÃ y giá»¯ gÃ¬, táº¯t gÃ¬, sá»­a gÃ¬, test gÃ¬, ai phá»¥ trÃ¡ch vÃ  khi nÃ o review láº¡i. Team cÅ©ng nÃªn ghi thay Ä‘á»•i vá» tracking, ngÃ¢n sÃ¡ch, campaign, offer hoáº·c landing page Ä‘á»ƒ tuáº§n sau Ä‘á»c sá»‘ Ä‘Ãºng bá»‘i cáº£nh.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u dashboard chá»‰ cÃ³ sá»‘ mÃ  khÃ´ng cÃ³ action, buá»•i há»p sau ráº¥t dá»… láº·p láº¡i cÃ¢u há»i cÅ©. Action notes biáº¿n report thÃ nh cÃ´ng cá»¥ váº­n hÃ nh.',
      },
      { type: 'heading', text: 'KPI nÃ o nÃªn cÃ³ trÆ°á»›c, KPI nÃ o lÃ m sau?' },
      {
        type: 'paragraph',
        text: 'Dashboard nÃªn phÃ¡t triá»ƒn theo Ä‘á»™ tin cáº­y cá»§a dá»¯ liá»‡u vÃ  nhu cáº§u quyáº¿t Ä‘á»‹nh, khÃ´ng theo danh sÃ¡ch tÃ­nh nÄƒng cá»§a tool.',
      },
      {
        type: 'list',
        items: [
          'NÃªn cÃ³ trÆ°á»›c: spend, traffic/session, contact/lead, CPL hoáº·c cost/contact, source/campaign, landing page, sales status cÆ¡ báº£n, qualified lead vÃ  action notes.',
          'Khi dá»¯ liá»‡u á»•n hÆ¡n: conversion rate theo landing page, hiá»‡u quáº£ tá»«ng CTA/contact type, lead quality theo source, quote rate, won/lost theo kÃªnh vÃ  revenue.',
          'LÃ m sau: attribution phá»©c táº¡p, cohort/LTV, multi-touch journey, predictive scoring, advanced segmentation vÃ  full CRM automation.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Attribution nÃ¢ng cao khÃ´ng giáº£i quyáº¿t Ä‘Æ°á»£c ná»n dá»¯ liá»‡u mÃ  spend, lead, source vÃ  sales status cÃ²n chÆ°a rÃµ. LÃ m Ä‘Ãºng thá»© tá»± giÃºp dashboard gá»n hÆ¡n vÃ  bá»›t táº¡o cáº£m giÃ¡c chÃ­nh xÃ¡c giáº£.',
      },
      { type: 'visual', variant: 'dashboard-metric-priority' },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi lÃ m dashboard tá»‘i thiá»ƒu' },
      {
        type: 'list',
        items: [
          'Copy metric tá»« Ads hoáº·c GA4 mÃ  khÃ´ng há»i quyáº¿t Ä‘á»‹nh cáº§n ra lÃ  gÃ¬.',
          'NhÃ©t quÃ¡ nhiá»u chart vÃ o má»™t mÃ n hÃ¬nh, khiáº¿n pháº§n quan trá»ng bá»‹ chÃ¬m.',
          'Chá»‰ nhÃ¬n tá»•ng lead, khÃ´ng tÃ¡ch source, campaign vÃ  landing page.',
          'KhÃ´ng cÃ³ sales status nÃªn khÃ´ng biáº¿t lead cÃ³ Ä‘Æ°á»£c xá»­ lÃ½ vÃ  cÃ³ cháº¥t lÆ°á»£ng khÃ´ng.',
          'KhÃ´ng cÃ³ outcome hoáº·c proxy gáº§n outcome.',
          'KhÃ´ng ghi bá»‘i cáº£nh khi Ä‘á»•i ngÃ¢n sÃ¡ch, offer, landing page hoáº·c tracking gáº·p lá»—i.',
          'KhÃ´ng chá»‘t action notes sau má»—i tuáº§n.',
          'KhÃ´ng ai chá»‹u trÃ¡ch nhiá»‡m cáº­p nháº­t vÃ  kiá»ƒm tra dá»¯ liá»‡u.',
          'Founder, marketing vÃ  sales dÃ¹ng cÃ¡c Ä‘á»‹nh nghÄ©a khÃ¡c nhau cho cÃ¹ng má»™t chá»‰ sá»‘.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘i thiá»ƒu tháº¥t báº¡i khi nÃ³ Ä‘á»©ng ngoÃ i nhá»‹p review tháº­t. Náº¿u team khÃ´ng dÃ¹ng cÃ¹ng logic Ä‘á»ƒ Ä‘á»c sá»‘ vÃ  chá»‘t viá»‡c, dashboard chá»‰ lÃ  má»™t file bÃ¡o cÃ¡o khÃ¡c.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t dashboard chá»‰ cÃ³ tá»•ng lead nÃªn founder khÃ´ng biáº¿t nÃªn tÄƒng hay giáº£m ngÃ¢n sÃ¡ch kÃªnh nÃ o.',
      },
      { type: 'heading', text: 'Checklist dashboard marketing tá»‘i thiá»ƒu' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi Ä‘Æ°a dashboard vÃ o cuá»™c há»p tuáº§n, hÃ£y kiá»ƒm tra tá»« snapshot, nguá»“n dá»¯ liá»‡u, contact, sales status vÃ  outcome Ä‘áº¿n bá»‘i cáº£nh vÃ  action notes. CÃ¢u há»i cuá»‘i cÃ¹ng váº«n lÃ : xem xong cÃ³ chá»‘t Ä‘Æ°á»£c viá»‡c cáº§n lÃ m khÃ´ng?',
      },
      { type: 'visual', variant: 'minimum-dashboard-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n minimum marketing dashboard template cho SME.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m dashboard, nhiá»u ngÆ°á»i muá»‘n nÃ³ Ä‘áº¹p vÃ  Ä‘á»§ má»i chá»‰ sá»‘. LÃ m lÃ¢u sáº½ tháº¥y dashboard cÃ ng gáº§n váº­n hÃ nh tháº­t cÃ ng pháº£i gá»n, rÃµ vÃ  cÃ³ chá»§ Ä‘Ã­ch.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘i thiá»ƒu giá»‘ng má»™t bÃ n Ä‘iá»u khiá»ƒn nhá»: Ä‘á»§ tÃ­n hiá»‡u chÃ­nh, khÃ´ng lÃ m ngÆ°á»i xem ngá»£p, chá»‰ ra chá»— cáº§n Ä‘Ã o sÃ¢u, gáº¯n vá»›i cuá»™c há»p tuáº§n vÃ  káº¿t thÃºc báº±ng hÃ nh Ä‘á»™ng. Má»™t dashboard Ä‘Æ¡n giáº£n nhÆ°ng Ä‘Æ°á»£c dÃ¹ng háº±ng tuáº§n cÃ³ giÃ¡ trá»‹ hÆ¡n dashboard Ä‘áº¹p mÃ  khÃ´ng ai má»Ÿ khi ra quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u Ä‘á»§ dÃ¹ng, rá»“i phÃ¡t triá»ƒn theo nhu cáº§u' },
      {
        type: 'paragraph',
        text: 'Má»™t dashboard marketing tá»‘i thiá»ƒu cáº§n giÃºp team nhÃ¬n tá»« ngÃ¢n sÃ¡ch Ä‘áº¿n traffic, contact, lead, sales status, outcome vÃ  hÃ nh Ä‘á»™ng tiáº¿p theo. KhÃ´ng cáº§n báº¯t Ä‘áº§u phá»©c táº¡p, nhÆ°ng pháº£i báº¯t Ä‘áº§u báº±ng Ä‘Ãºng cÃ¢u há»i vÃ  Ä‘á»§ dá»¯ liá»‡u Ä‘á»ƒ cuá»™c há»p tuáº§n tiáº¿n vá» phÃ­a trÆ°á»›c.',
      },
    ],
    cta: 'Náº¿u báº¡n muá»‘n lÃ m dashboard cho team nhá», Ä‘á»«ng báº¯t Ä‘áº§u báº±ng cÃ¢u há»i â€œdÃ¹ng tool nÃ oâ€. HÃ£y há»i: founder, marketing vÃ  sales cáº§n nhÃ¬n nhá»¯ng gÃ¬ má»—i tuáº§n Ä‘á»ƒ ra quyáº¿t Ä‘á»‹nh tá»‘t hÆ¡n?',
  },
  {
    title: 'CÃ¡ch Ä‘á»c dashboard marketing má»—i tuáº§n: nhÃ¬n sá»‘ nÃ o trÆ°á»›c, há»i cÃ¢u gÃ¬ sau?',
    slug: 'cach-doc-dashboard-marketing-moi-tuan-nhin-so-nao-truoc-hoi-cau-gi-sau',
    category: 'Dashboard & Insights',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-restaurant-team-group-01.jpg",
                "alt": "Team members gathered around a restaurant table",
                "caption": "Team dinner group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-team-group-formal-team-photo-01.jpg",
                      "alt": "Formal team group photo indoors",
                      "caption": "Formal team group photo",
                      "width": 958,
                      "height": 960,
                      "fit": "cover",
                      "afterHeading": "Thá»© tá»± Ä‘á»c dashboard má»—i tuáº§n"
                }
          ]
    },
    excerpt:
      'Dashboard marketing chá»‰ cÃ³ giÃ¡ trá»‹ khi team biáº¿t Ä‘á»c nÃ³ Ä‘Ãºng cÃ¡ch. Má»—i tuáº§n, founder vÃ  marketer nÃªn nhÃ¬n tá»« bá»‘i cáº£nh, ngÃ¢n sÃ¡ch, traffic, contact/lead, cháº¥t lÆ°á»£ng lead, sales status Ä‘áº¿n outcome, rá»“i má»›i chá»‘t hÃ nh Ä‘á»™ng tiáº¿p theo.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t dashboard marketing cÃ³ thá»ƒ cÃ³ Ä‘á»§ sá»‘: spend, traffic, click, lead, CPL, sales status, revenue. NhÆ°ng khi vÃ o cuá»™c há»p tuáº§n, náº¿u team khÃ´ng biáº¿t nÃªn nhÃ¬n sá»‘ nÃ o trÆ°á»›c vÃ  há»i cÃ¢u gÃ¬ sau, dashboard váº«n dá»… thÃ nh má»™t mÃ n hÃ¬nh Ä‘áº§y dá»¯ liá»‡u nhÆ°ng Ã­t quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Nhiá»u team má»Ÿ dashboard vÃ  nhÃ¬n chá»— ná»•i nháº¥t. Lead giáº£m thÃ¬ lo, CPL tÄƒng thÃ¬ muá»‘n táº¯t campaign, traffic tÄƒng thÃ¬ tÆ°á»Ÿng má»i thá»© Ä‘ang tá»‘t. CÃ¡ch Ä‘á»c nÃ y dá»… dáº«n Ä‘áº¿n káº¿t luáº­n quÃ¡ nhanh vÃ¬ má»—i chá»‰ sá»‘ chá»‰ pháº£n Ã¡nh má»™t Ä‘oáº¡n cá»§a há»‡ thá»‘ng.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard nÃªn Ä‘Æ°á»£c Ä‘á»c nhÆ° má»™t dÃ²ng cháº£y: bá»‘i cáº£nh, ngÃ¢n sÃ¡ch, traffic, contact hoáº·c lead, cháº¥t lÆ°á»£ng, sales, outcome rá»“i má»›i Ä‘áº¿n hÃ nh Ä‘á»™ng. Nhiá»u khi dashboard khÃ³ Ä‘á»c khÃ´ng pháº£i vÃ¬ thiáº¿u biá»ƒu Ä‘á»“, mÃ  vÃ¬ team chÆ°a cÃ³ quy trÃ¬nh Ä‘á»c sá»‘ chung.',
      },
      { type: 'heading', text: 'Äá»«ng báº¯t Ä‘áº§u báº±ng káº¿t luáº­n' },
      {
        type: 'paragraph',
        text: 'CPL tÄƒng khÃ´ng tá»± Ä‘á»™ng nghÄ©a ads kÃ©m. Lead giáº£m chÆ°a cháº¯c marketing yáº¿u. Traffic tÄƒng khÃ´ng Ä‘áº£m báº£o campaign tá»‘t. Sales khÃ´ng chá»‘t cÅ©ng chÆ°a Ä‘á»§ Ä‘á»ƒ káº¿t luáº­n sales yáº¿u. Nhá»¯ng nháº­n Ä‘á»‹nh Ä‘Ã³ cÃ³ thá»ƒ Ä‘Ãºng, nhÆ°ng chá»‰ sau khi team nhÃ¬n Ä‘á»§ bá»‘i cáº£nh.',
      },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi pháº£n á»©ng, hÃ£y há»i: Ä‘ang so vá»›i tuáº§n nÃ o, ngÃ¢n sÃ¡ch cÃ³ Ä‘á»•i khÃ´ng, cÃ³ campaign, landing page, offer hoáº·c content má»›i khÃ´ng, tracking cÃ³ thay Ä‘á»•i khÃ´ng, sales cÃ³ xá»­ lÃ½ Ä‘á»u khÃ´ng, vÃ  tuáº§n Ä‘Ã³ cÃ³ ngÃ y nghá»‰ hay yáº¿u tá»‘ mÃ¹a vá»¥ nÃ o khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡ch Ä‘á»c Ä‘Ãºng báº¯t Ä‘áº§u báº±ng bá»‘i cáº£nh, khÃ´ng báº±ng pháº£n á»©ng.',
      },
      { type: 'heading', text: 'Thá»© tá»± Ä‘á»c dashboard má»—i tuáº§n' },
      {
        type: 'paragraph',
        text: 'Má»™t thá»© tá»± cá»‘ Ä‘á»‹nh giÃºp cuá»™c há»p bá»›t nháº£y tá»« chart nÃ y sang chart khÃ¡c. Team cÃ³ thá»ƒ Ä‘i qua báº£y bÆ°á»›c:',
      },
      {
        type: 'list',
        items: [
          'Bá»‘i cáº£nh tuáº§n: ngÃ¢n sÃ¡ch, campaign, offer, tracking, website, mÃ¹a vá»¥ hoáº·c nguá»“n lá»±c sales cÃ³ gÃ¬ khÃ¡c?',
          'Spend: tuáº§n nÃ y chi bao nhiÃªu, tÄƒng giáº£m ra sao vÃ  tiá»n Ä‘i vÃ o kÃªnh nÃ o?',
          'Traffic: thay Ä‘á»•i náº±m á»Ÿ source, campaign hay landing page nÃ o?',
          'Engagement vÃ  contact: khÃ¡ch cÃ³ click CTA, hotline, Zalo, Messenger hoáº·c form khÃ´ng?',
          'Lead: cÃ³ bao nhiÃªu contact hoáº·c form submit thÃ nh cÃ´ng, Ä‘áº¿n tá»« Ä‘Ã¢u?',
          'Quality vÃ  sales status: lead cÃ³ liÃªn há»‡ Ä‘Æ°á»£c, Ä‘Ãºng nhu cáº§u, Ä‘Æ°á»£c tÆ° váº¥n hay bÃ¡o giÃ¡ chÆ°a?',
          'Outcome vÃ  action: cÃ³ cÆ¡ há»™i, Ä‘Æ¡n hÃ ng, doanh thu hoáº·c proxy nÃ o; tuáº§n sau giá»¯, sá»­a, táº¯t, tÄƒng hay test gÃ¬?',
        ],
      },
      { type: 'visual', variant: 'weekly-dashboard-reading-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch Ä‘á»c dashboard marketing trong má»™t buá»•i weekly review.',
      },
      { type: 'heading', text: 'Má»—i chá»‰ sá»‘ nÃªn Ä‘i kÃ¨m má»™t cÃ¢u há»i' },
      {
        type: 'paragraph',
        text: 'Metric Ä‘á»©ng má»™t mÃ¬nh thÆ°á»ng chÆ°a Ä‘á»§. Spend tÄƒng cáº§n há»i tÄƒng á»Ÿ kÃªnh nÃ o vÃ  cÃ³ chá»§ Ä‘Ã­ch khÃ´ng. Traffic tÄƒng cáº§n há»i khÃ¡ch cÃ³ vÃ o Ä‘Ãºng landing page vÃ  Ä‘Ãºng tá»‡p khÃ´ng. CTR tÄƒng cÃ³ thá»ƒ do thÃ´ng Ä‘iá»‡p háº¥p dáº«n hÆ¡n, cÅ©ng cÃ³ thá»ƒ chá»‰ kÃ©o click tÃ² mÃ².',
      },
      {
        type: 'paragraph',
        text: 'Contact tÄƒng thÃ¬ xem khÃ¡ch liÃªn há»‡ qua kÃªnh nÃ o. Lead tÄƒng pháº£i Ä‘á»‘i chiáº¿u nhu cáº§u. CPL giáº£m cáº§n kiá»ƒm tra quality cÃ³ giáº£m theo khÃ´ng. Qualified lead giáº£m cÃ³ thá»ƒ Ä‘áº¿n tá»« traffic, offer, form hoáº·c viá»‡c sales chÆ°a cáº­p nháº­t. Revenue giáº£m cáº§n tÃ¬m Ä‘oáº¡n rÆ¡i tá»« lead Ä‘áº¿n tÆ° váº¥n, bÃ¡o giÃ¡ vÃ  closing.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘t gáº¯n metric vá»›i cÃ¢u há»i, Ä‘á»ƒ team biáº¿t cáº§n kiá»ƒm tra á»Ÿ Ä‘Ã¢u.',
      },
      { type: 'visual', variant: 'metric-question-action' },
      { type: 'heading', text: 'Äá»«ng Ä‘á»c tá»•ng sá»‘ trÆ°á»›c khi tÃ¡ch lá»›p' },
      {
        type: 'paragraph',
        text: 'Tá»•ng lead cÃ³ thá»ƒ tÄƒng trong khi má»™t kÃªnh táº¡o nhiá»u lead sai nhu cáº§u. Má»™t landing page cÃ³ nhiá»u contact nhÆ°ng Ã­t form. Má»™t campaign cÃ³ CPL tháº¥p nhÆ°ng sales khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c. NgÆ°á»£c láº¡i, kÃªnh Ã­t lead hÆ¡n cÃ³ thá»ƒ táº¡o nhiá»u bÃ¡o giÃ¡ hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Sau snapshot, hÃ£y tÃ¡ch theo channel, campaign, landing page, contact type, lead type, sales status vÃ  outcome. Tá»•ng sá»‘ cho biáº¿t chuyá»‡n gÃ¬ xáº£y ra; tÃ¡ch lá»›p cho biáº¿t á»Ÿ Ä‘Ã¢u.',
      },
      { type: 'heading', text: 'CÃ¡ch cháº©n Ä‘oÃ¡n khi sá»‘ thay Ä‘á»•i' },
      {
        type: 'paragraph',
        text: 'Khi spend tÄƒng mÃ  lead khÃ´ng tÄƒng, kiá»ƒm tra traffic cÃ³ tÄƒng khÃ´ng, CPC hoáº·c CPM cÃ³ Ä‘á»•i khÃ´ng, traffic cÃ³ vÃ o Ä‘Ãºng trang, landing page cÃ³ lá»—i vÃ  form hoáº·c nÃºt liÃªn há»‡ cÃ³ hoáº¡t Ä‘á»™ng khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Khi traffic tÄƒng nhÆ°ng contact khÃ´ng tÄƒng, xem láº¡i tá»‡p traffic, Ä‘á»™ khá»›p giá»¯a ads vÃ  landing page, offer, CTA, Ä‘á»™ khÃ³ cá»§a form cÃ¹ng nÃºt Zalo hoáº·c hotline trÃªn mobile. Khi lead tÄƒng nhÆ°ng qualified giáº£m, kiá»ƒm tra targeting cÃ³ má»Ÿ quÃ¡ rá»™ng, offer cÃ³ kÃ©o sai tá»‡p, form cÃ³ lá»c Ä‘á»§ vÃ  sales status cÃ³ Ä‘Æ°á»£c update Ä‘Ãºng khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Khi qualified á»•n mÃ  doanh thu chÆ°a lÃªn, váº¥n Ä‘á» cÃ³ thá»ƒ náº±m á»Ÿ tá»‘c Ä‘á»™ follow-up, bÆ°á»›c bÃ¡o giÃ¡, closing hoáº·c chu ká»³ mua dÃ i. TrÆ°á»ng há»£p nÃ y cÃ³ thá»ƒ cáº§n nhÃ¬n nhiá»u tuáº§n thay vÃ¬ Ã©p má»™t tuáº§n pháº£n Ã¡nh toÃ n bá»™ káº¿t quáº£.',
      },
      { type: 'visual', variant: 'signal-diagnosis-matrix' },
      { type: 'heading', text: 'Weekly review khÃ´ng nÃªn kÃ©o dÃ i quÃ¡ lÃ¢u' },
      {
        type: 'paragraph',
        text: 'Buá»•i review khÃ´ng nÃªn biáº¿n thÃ nh lÃºc Ä‘á»c toÃ n bá»™ chart. Má»™t nhá»‹p 45 phÃºt cÃ³ thá»ƒ gá»“m 5 phÃºt cho bá»‘i cáº£nh, 10 phÃºt xem snapshot spend, traffic, lead, quality vÃ  outcome, 15 phÃºt cháº©n Ä‘oÃ¡n má»™t hoáº·c hai Ä‘iá»ƒm lá»‡ch lá»›n nháº¥t, 10 phÃºt chá»‘t action, 5 phÃºt giao owner, deadline vÃ  metric Ä‘o láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»™c há»p tá»‘t chá»n Ä‘Ãºng váº¥n Ä‘á» Æ°u tiÃªn vÃ  chá»‘t viá»‡c Ä‘á»§ cá»¥ thá»ƒ Ä‘á»ƒ tuáº§n sau kiá»ƒm tra.',
      },
      { type: 'visual', variant: 'dashboard-review-meeting-agenda' },
      { type: 'heading', text: 'Sau khi Ä‘á»c dashboard, pháº£i cÃ³ action log' },
      {
        type: 'paragraph',
        text: 'Náº¿u xem dashboard xong mÃ  khÃ´ng ghi quyáº¿t Ä‘á»‹nh, team ráº¥t dá»… láº·p láº¡i váº¥n Ä‘á» cÅ©. Action log nÃªn cÃ³ tuáº§n review, váº¥n Ä‘á» chÃ­nh, giáº£ thuyáº¿t nguyÃªn nhÃ¢n, hÃ nh Ä‘á»™ng, ngÆ°á»i phá»¥ trÃ¡ch, deadline, metric Ä‘o láº¡i vÃ  káº¿t quáº£ á»Ÿ tuáº§n sau.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥, traffic tÄƒng nhÆ°ng form lead giáº£m. Giáº£ thuyáº¿t lÃ  CTA trÃªn mobile khÃ³ tháº¥y. Action lÃ  lÃ m CTA dá»… tiáº¿p cáº­n hÆ¡n vÃ  rÃºt gá»n form; marketing phá»‘i há»£p dev; metric Ä‘o láº¡i gá»“m CTA click, form submit success vÃ  contact click. ÄÃ¢y lÃ  giáº£ thuyáº¿t cáº§n test, khÃ´ng pháº£i káº¿t luáº­n chá»‰ tá»« dashboard.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard chá»‰ táº¡o giÃ¡ trá»‹ khi quyáº¿t Ä‘á»‹nh Ä‘Æ°á»£c ghi láº¡i, cÃ³ ngÆ°á»i thá»±c hiá»‡n vÃ  Ä‘Æ°á»£c kiá»ƒm tra láº¡i.',
      },
      { type: 'visual', variant: 'weekly-action-log-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n weekly dashboard review agenda + action log template.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi Ä‘á»c dashboard' },
      {
        type: 'list',
        items: [
          'NhÃ¬n má»™t chá»‰ sá»‘ rá»“i káº¿t luáº­n trÆ°á»›c khi kiá»ƒm tra bá»‘i cáº£nh.',
          'So tuáº§n nÃ y vá»›i tuáº§n trÆ°á»›c nhÆ°ng khÃ´ng ghi cÃ¡c thay Ä‘á»•i quan trá»ng.',
          'Chá»‰ xem tá»•ng sá»‘, khÃ´ng tÃ¡ch channel, campaign hoáº·c landing page.',
          'Chá»‰ nhÃ¬n lead volume mÃ  bá» qua quality vÃ  sales status.',
          'Tháº¥y CPL tháº¥p nhÆ°ng khÃ´ng kiá»ƒm tra qualified lead.',
          'Doanh thu chÆ°a lÃªn lÃ  phá»§ nháº­n marketing dÃ¹ sales cycle dÃ i.',
          'KhÃ´ng ghi action sau cuá»™c há»p vÃ  tuáº§n sau khÃ´ng kiá»ƒm tra láº¡i.',
          'Dashboard thay Ä‘á»•i liÃªn tá»¥c nÃªn team khÃ´ng cÃ³ baseline chung.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Äá»c dashboard sai cÃ³ thá»ƒ dáº«n Ä‘áº¿n quyáº¿t Ä‘á»‹nh sai ngay cáº£ khi tracking vÃ  dá»¯ liá»‡u Ä‘áº§u vÃ o tÆ°Æ¡ng Ä‘á»‘i á»•n. Váº¥n Ä‘á» lÃºc Ä‘Ã³ náº±m á»Ÿ cÃ¡ch team diá»…n giáº£i tÃ­n hiá»‡u.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team Ä‘á»c dashboard sai vÃ¬ chá»‰ nhÃ¬n tá»•ng lead mÃ  khÃ´ng nhÃ¬n lead quality.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃ m dashboard khÃ´ng khÃ³ báº±ng táº¡o thÃ³i quen Ä‘á»c dashboard Ä‘Ãºng. Nhiá»u team cÃ³ sá»‘ nhÆ°ng váº«n há»p báº±ng cáº£m giÃ¡c vÃ¬ founder, marketing vÃ  sales chÆ°a cÃ³ cÃ¹ng má»™t quy trÃ¬nh Ä‘á»c.',
      },
      {
        type: 'paragraph',
        text: 'Khi má»i ngÆ°á»i Ä‘i theo cÃ¹ng thá»© tá»±, founder khÃ´ng bá»‹ kÃ©o vÃ o tá»«ng metric nhá», marketing khÃ´ng chá»‰ báº£o vá»‡ campaign vÃ  sales khÃ´ng chá»‰ pháº£n á»©ng báº±ng cáº£m giÃ¡c. Cáº£ team cÃ¹ng nhÃ¬n má»™t dÃ²ng cháº£y: tiá»n, traffic, lead, cháº¥t lÆ°á»£ng, outcome vÃ  hÃ nh Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘t khÃ´ng chá»‰ lÃ  file hay mÃ n hÃ¬nh. NÃ³ lÃ  má»™t nhá»‹p váº­n hÃ nh giÃºp team Ä‘áº·t cÃ¢u há»i tá»‘t hÆ¡n, hÃ nh Ä‘á»™ng cÃ³ chá»§ Ä‘Ã­ch vÃ  há»c láº¡i vÃ o tuáº§n káº¿ tiáº¿p.',
      },
      { type: 'heading', text: 'Äá»c sá»‘ Ä‘á»ƒ cháº©n Ä‘oÃ¡n vÃ  quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'Weekly review nÃªn báº¯t Ä‘áº§u tá»« bá»‘i cáº£nh, Ä‘i qua spend, traffic, contact, lead, quality, sales status, outcome vÃ  káº¿t thÃºc báº±ng action log. Náº¿u khÃ´ng cÃ³ hÃ nh Ä‘á»™ng vÃ  cÃ¡ch Ä‘o láº¡i sau khi Ä‘á»c sá»‘, dashboard váº«n chÆ°a hoÃ n thÃ nh nhiá»‡m vá»¥.',
      },
    ],
    cta: 'Náº¿u team Ä‘Ã£ cÃ³ dashboard nhÆ°ng váº«n khÃ´ng biáº¿t nÃªn sá»­a landing page, chá»‰nh traffic, tÄƒng ngÃ¢n sÃ¡ch hay xá»­ lÃ½ sales follow-up, hÃ£y chuáº©n hoÃ¡ cÃ¡ch Ä‘á»c dashboard trÆ°á»›c khi thÃªm biá»ƒu Ä‘á»“ má»›i.',
  },
  {
    title: 'Vanity metrics vÃ  decision metrics: sá»‘ nÃ o chá»‰ Ä‘á»ƒ nhÃ¬n, sá»‘ nÃ o giÃºp ra quyáº¿t Ä‘á»‹nh?',
    slug: 'vanity-metrics-va-decision-metrics-so-nao-chi-de-nhin-so-nao-giup-ra-quyet-dinh',
    category: 'Dashboard & Insights',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-operations-warehouse-boxes-01.jpg",
                "alt": "Person beside stacked product boxes in a work area",
                "caption": "Operations and product stock moment",
                "width": 2048,
                "height": 1171,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-partnership-tablet-handoff-01.jpg",
                      "alt": "Two people standing outdoors with a tablet",
                      "caption": "Work partnership moment",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "Decision metrics lÃ  gÃ¬?"
                }
          ]
    },
    excerpt:
      'KhÃ´ng pháº£i chá»‰ sá»‘ nÃ o trÃªn dashboard cÅ©ng cÃ³ cÃ¹ng giÃ¡ trá»‹. Reach, impression, click, traffic hay CTR cÃ³ thá»ƒ giÃºp team hiá»ƒu bá»‘i cáº£nh, nhÆ°ng Ä‘á»ƒ ra quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch, content, landing page hoáº·c sales, team cáº§n nhÃ¬n thÃªm cÃ¡c chá»‰ sá»‘ gáº§n hÃ nh Ä‘á»™ng hÆ¡n nhÆ° contact, lead quality, sales status, quote rate vÃ  outcome.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ nhá»¯ng tuáº§n report nhÃ¬n ráº¥t Ä‘áº¹p: reach tÄƒng, impression tÄƒng, click nhiá»u hÆ¡n, CTR tá»‘t hÆ¡n, traffic vá» website cÅ©ng cao hÆ¡n. NhÆ°ng khi founder há»i nÃªn tÄƒng ngÃ¢n sÃ¡ch kÃªnh nÃ o, sá»­a landing page nÃ o hoáº·c lead cÃ³ tá»‘t hÆ¡n khÃ´ng, team láº¡i chÆ°a tráº£ lá»i rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i vÃ¬ cÃ¡c chá»‰ sá»‘ Ä‘Ã³ vÃ´ dá»¥ng. Váº¥n Ä‘á» lÃ  chÃºng Ä‘ang bá»‹ dÃ¹ng sai vai trÃ². CÃ³ metric giÃºp Ä‘á»c bá»‘i cáº£nh, metric giÃºp cháº©n Ä‘oÃ¡n vÃ  metric Ä‘á»§ gáº§n hÃ nh Ä‘á»™ng Ä‘á»ƒ há»— trá»£ quyáº¿t Ä‘á»‹nh. Náº¿u gom táº¥t cáº£ thÃ nh â€œKPI quan trá»ngâ€, dashboard dá»… nhiá»u sá»‘ nhÆ°ng Ã­t káº¿t luáº­n cÃ³ Ã­ch.',
      },
      {
        type: 'paragraph',
        text: 'Sá»‘ Ä‘áº¹p chÆ°a cháº¯c tá»‘t hÆ¡n. GiÃ¡ trá»‹ cá»§a metric phá»¥ thuá»™c vÃ o cÃ¢u há»i.',
      },
      { type: 'heading', text: 'Vanity metrics lÃ  gÃ¬, hiá»ƒu sao cho Ä‘Ãºng?' },
      {
        type: 'paragraph',
        text: 'Vanity metrics thÆ°á»ng lÃ  nhá»¯ng chá»‰ sá»‘ dá»… táº¡o cáº£m giÃ¡c tá»‘t vÃ  dá»… Ä‘Æ°a vÃ o report, nhÆ°ng náº¿u Ä‘á»©ng má»™t mÃ¬nh thÃ¬ khÃ³ kÃ©o ra quyáº¿t Ä‘á»‹nh kinh doanh. Reach, impression, like, follower, click, CTR, traffic, PageView, video view vÃ  tá»•ng engagement thÆ°á»ng náº±m trong nhÃ³m nÃ y.',
      },
      {
        type: 'paragraph',
        text: 'ChÃºng khÃ´ng vÃ´ dá»¥ng. Reach vÃ  impression cho biáº¿t campaign cÃ³ Ä‘Æ°á»£c phÃ¢n phá»‘i. Click vÃ  CTR giÃºp Ä‘á»c sá»©c kÃ©o cá»§a creative hoáº·c message. Traffic cho biáº¿t dÃ²ng ngÆ°á»i vÃ o website; engagement vÃ  video view pháº£n Ã¡nh má»™t pháº§n attention. ÄÃ¢y lÃ  dá»¯ liá»‡u bá»‘i cáº£nh vÃ  cháº©n Ä‘oÃ¡n Ä‘áº§u phá»…u.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» lÃ  káº¿t luáº­n quÃ¡ xa: reach tÄƒng chÆ°a cháº¯c lead tá»‘t; click nhiá»u khÃ´ng Ä‘áº£m báº£o nhu cáº§u tháº­t; traffic cao chÆ°a chá»©ng minh landing page hiá»‡u quáº£.',
      },
      { type: 'visual', variant: 'vanity-vs-decision-metrics' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough phÃ¢n loáº¡i vanity metrics vÃ  decision metrics trong má»™t dashboard SME.',
      },
      { type: 'heading', text: 'Decision metrics lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Decision metrics lÃ  chá»‰ sá»‘ giÃºp team Ä‘Æ°a ra hoáº·c kiá»ƒm tra má»™t quyáº¿t Ä‘á»‹nh cá»¥ thá»ƒ: cÃ³ nÃªn tÄƒng ngÃ¢n sÃ¡ch, sá»­a landing page, Ä‘á»•i offer, giá»¯ campaign thÃªm má»™t tuáº§n, kiá»ƒm tra cháº¥t lÆ°á»£ng lead, xá»­ lÃ½ sales follow-up hay dá»«ng má»™t test?',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥ gá»“m cost per qualified lead, contact-to-lead rate, lead-to-qualified rate, qualified-to-quote rate, quote-to-won rate, lead status theo campaign, contact click theo landing page, form submit success rate vÃ  outcome theo source. Revenue by channel cÅ©ng há»¯u Ã­ch khi dá»¯ liá»‡u Ä‘á»§ tin cáº­y.',
      },
      {
        type: 'paragraph',
        text: 'Decision metric khÃ´ng cáº§n phá»©c táº¡p; nÃ³ cáº§n gáº§n quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'heading', text: 'Má»™t metric nÃªn Ä‘Æ°á»£c xáº¿p theo vai trÃ², khÃ´ng chá»‰ theo tÃªn' },
      {
        type: 'paragraph',
        text: 'CÃ¹ng má»™t metric cÃ³ thá»ƒ há»¯u Ã­ch hoáº·c chÆ°a Ä‘á»§ tuá»³ cÃ¢u há»i. Traffic tráº£ lá»i tá»‘t cÃ¢u â€œwebsite cÃ³ ai vÃ o khÃ´ng?â€, nhÆ°ng chÆ°a Ä‘á»§ Ä‘á»ƒ káº¿t luáº­n campaign táº¡o khÃ¡ch tiá»m nÄƒng hay nÃªn tÄƒng ngÃ¢n sÃ¡ch. Khi Ä‘Ã³ cáº§n ná»‘i thÃªm contact, lead, quality vÃ  outcome.',
      },
      {
        type: 'paragraph',
        text: 'CTR há»¯u Ã­ch khi há»i creative cÃ³ kÃ©o click khÃ´ng, nhÆ°ng khÃ´ng tráº£ lá»i lead cÃ³ tá»‘t khÃ´ng. CPL cho biáº¿t chi phÃ­ táº¡o lead, nhÆ°ng muá»‘n biáº¿t lead cÃ³ Ä‘Ã¡ng tiá»n pháº£i nhÃ¬n qualified, sales status vÃ  outcome.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u há»i phÃ­a sau quyáº¿t Ä‘á»‹nh metric Ä‘Ã³ng vai trÃ² bá»‘i cáº£nh, cháº©n Ä‘oÃ¡n, conversion hay decision.',
      },
      { type: 'visual', variant: 'metric-decision-ladder' },
      { type: 'heading', text: 'Nhá»¯ng báº«y hay gáº·p khi Ä‘á»c vanity metrics' },
      {
        type: 'paragraph',
        text: 'Reach tÄƒng dá»… khiáº¿n team nghÄ© brand hoáº·c campaign tá»‘t hÆ¡n, dÃ¹ audience cÃ³ thá»ƒ sai tá»‡p. Click nhiá»u dá»… Ä‘Æ°á»£c hiá»ƒu lÃ  ads hiá»‡u quáº£, dÃ¹ khÃ¡ch vÃ o trang rá»“i khÃ´ng contact. CTR cao cho tháº¥y quáº£ng cÃ¡o kÃ©o click, khÃ´ng cho biáº¿t lead cÃ³ cháº¥t lÆ°á»£ng.',
      },
      {
        type: 'paragraph',
        text: 'Traffic tÄƒng cÅ©ng chÆ°a nÃ³i website Ä‘ang tÄƒng trÆ°á»Ÿng náº¿u CTA, form, Zalo vÃ  hotline khÃ´ng táº¡o thÃªm tÃ­n hiá»‡u. CPL tháº¥p tháº­m chÃ­ cÃ³ thá»ƒ nguy hiá»ƒm khi lead khÃ³ liÃªn há»‡ hoáº·c sai nhu cáº§u.',
      },
      {
        type: 'paragraph',
        text: 'Báº«y náº±m á»Ÿ viá»‡c dÃ¹ng tÃ­n hiá»‡u Ä‘áº§u phá»…u Ä‘á»ƒ káº¿t luáº­n quÃ¡ xa.',
      },
      { type: 'visual', variant: 'vanity-metric-trap' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team bá»‹ Ä‘Ã¡nh lá»«a bá»Ÿi CPL tháº¥p nhÆ°ng lead quality giáº£m.',
      },
      { type: 'heading', text: 'Biáº¿n metric thÃ nh quyáº¿t Ä‘á»‹nh báº±ng cÃ¡ch há»i Ä‘Ãºng cÃ¢u' },
      {
        type: 'paragraph',
        text: 'Má»™t framework Ä‘Æ¡n giáº£n lÃ  Metric â†’ CÃ¢u há»i â†’ Cháº©n Ä‘oÃ¡n â†’ Quyáº¿t Ä‘á»‹nh. Traffic tÄƒng thÃ¬ há»i Ä‘áº¿n tá»« kÃªnh vÃ  landing page nÃ o, sau Ä‘Ã³ kiá»ƒm tra contact hoáº·c lead. Quyáº¿t Ä‘á»‹nh cÃ³ thá»ƒ lÃ  giá»¯ source, sá»­a landing page hoáº·c Ä‘á»•i message.',
      },
      {
        type: 'paragraph',
        text: 'Lead tÄƒng thÃ¬ tÃ¡ch theo campaign vÃ  kiá»ƒm tra qualified. Team cÃ³ thá»ƒ tÄƒng ngÃ¢n sÃ¡ch náº¿u cháº¥t lÆ°á»£ng á»•n, hoáº·c chá»‰nh targeting, offer, form field náº¿u tá»‡p lá»‡ch. CPL giáº£m cáº§n Ä‘á»‘i chiáº¿u sales status vÃ  outcome; khÃ´ng nÃªn scale náº¿u qualified giáº£m.',
      },
      {
        type: 'paragraph',
        text: 'Revenue giáº£m thÃ¬ tÃ¡ch funnel Ä‘á»ƒ xem váº¥n Ä‘á» náº±m á»Ÿ traffic, lead, follow-up, bÃ¡o giÃ¡ hay closing. Quyáº¿t Ä‘á»‹nh nÃªn sá»­a Ä‘oáº¡n ngháº½n, khÃ´ng káº¿t luáº­n chung ráº±ng marketing hoáº·c sales Ä‘ang kÃ©m.',
      },
      { type: 'visual', variant: 'metric-to-decision-map' },
      { type: 'heading', text: 'Founder nÃªn nhÃ¬n metric nÃ o trÆ°á»›c?' },
      {
        type: 'paragraph',
        text: 'Founder khÃ´ng cáº§n theo dÃµi má»i vanity metric má»—i ngÃ y. Lá»›p nhÃ¬n chÃ­nh nÃªn báº¯t Ä‘áº§u tá»« spend, contact hoáº·c lead, lead quality, sales status, outcome vÃ  action. Cá»¥ thá»ƒ: tuáº§n nÃ y chi bao nhiÃªu, táº¡o ra tÃ­n hiá»‡u bÃ¡n hÃ ng nÃ o, lead cÃ³ Ä‘Ãºng nhu cáº§u vÃ  liÃªn há»‡ Ä‘Æ°á»£c khÃ´ng, Ä‘ang á»Ÿ New, Contacted, Qualified, Quoted hay Won/Lost.',
      },
      {
        type: 'paragraph',
        text: 'Outcome cÃ³ thá»ƒ lÃ  cÆ¡ há»™i, bÃ¡o giÃ¡, doanh thu hoáº·c proxy gáº§n doanh thu. Cuá»‘i cÃ¹ng pháº£i chá»‘t tuáº§n sau giá»¯, sá»­a, táº¯t, tÄƒng hay test gÃ¬. Founder váº«n cÃ³ thá»ƒ xem reach, click vÃ  traffic Ä‘á»ƒ hiá»ƒu bá»‘i cáº£nh, nhÆ°ng quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch khÃ´ng nÃªn chá»‰ dá»±a vÃ o chÃºng.',
      },
      { type: 'heading', text: 'Marketing team nÃªn dÃ¹ng vanity metrics tháº¿ nÃ o cho Ä‘Ãºng?' },
      {
        type: 'paragraph',
        text: 'Marketing khÃ´ng nÃªn bá» vanity metrics vÃ¬ chÃºng giÃºp cháº©n Ä‘oÃ¡n Ä‘áº§u phá»…u. Reach vÃ  impression Ä‘á»c phÃ¢n phá»‘i; CTR Ä‘á»c sá»©c kÃ©o cá»§a creative; CPC Ä‘á»c chi phÃ­ kÃ©o traffic; traffic Ä‘á»c dÃ²ng vÃ o website; engagement vÃ  video view Ä‘á»c attention.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng má»—i sá»‘ cáº§n má»™t cÃ¢u há»i ná»‘i tiáº¿p: reach cÃ³ Ä‘Ãºng tá»‡p khÃ´ng, click vÃ o trang rá»“i lÃ m gÃ¬, traffic cÃ³ táº¡o contact, engagement cÃ³ kÃ©o hÃ nh Ä‘á»™ng tiáº¿p theo, video view cÃ³ phá»¥c vá»¥ funnel hay chá»‰ lÃ  view ráº»?',
      },
      {
        type: 'paragraph',
        text: 'Vanity metrics lÃ  tÃ­n hiá»‡u Ä‘áº§u. Decision metrics giÃºp chá»‘t viá»‡c. Äá»«ng báº¯t má»™t chá»‰ sá»‘ Ä‘áº§u phá»…u lÃ m nhiá»‡m vá»¥ cá»§a chá»‰ sá»‘ gáº§n outcome.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi chá»n KPI dashboard' },
      {
        type: 'list',
        items: [
          'Chá»n KPI vÃ¬ ná»n táº£ng cÃ³ sáºµn, khÃ´ng vÃ¬ cÃ¢u há»i cáº§n tráº£ lá»i.',
          'ÄÆ°a quÃ¡ nhiá»u vanity metrics lÃªn Ä‘áº§u dashboard.',
          'Chá»‰ nhÃ¬n total lead, khÃ´ng nhÃ¬n quality vÃ  sales status.',
          'DÃ¹ng CPL lÃ m KPI chÃ­nh nhÆ°ng khÃ´ng theo dÃµi qualified lead.',
          'KhÃ´ng tÃ¡ch metric theo channel, campaign vÃ  landing page.',
          'KhÃ´ng cÃ³ outcome hoáº·c proxy nÃªn dashboard dá»«ng á»Ÿ sá»‘ lÆ°á»£ng.',
          'Founder vÃ  marketing nhÃ¬n cÃ¹ng má»™t sá»‘ nhÆ°ng hiá»ƒu khÃ¡c nhau.',
          'KhÃ´ng ghi rÃµ metric nÃ o dÃ¹ng cho context, diagnosis hay decision.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KPI khÃ´ng rÃµ vai trÃ² lÃ m dashboard rá»‘i vÃ  cuá»™c há»p lá»‡ch trá»ng tÃ¢m. CÃ¹ng má»™t Ä‘á»‹nh nghÄ©a, nguá»“n dá»¯ liá»‡u vÃ  má»¥c Ä‘Ã­ch sá»­ dá»¥ng cáº§n Ä‘Æ°á»£c thá»‘ng nháº¥t trÆ°á»›c.',
      },
      { type: 'heading', text: 'Checklist chá»n decision metrics cho dashboard' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi Ä‘Æ°a má»™t metric lÃªn dashboard chÃ­nh, hÃ£y kiá»ƒm tra nÃ³ tráº£ lá»i cÃ¢u há»i nÃ o, phá»¥c vá»¥ quyáº¿t Ä‘á»‹nh gÃ¬, cÃ³ gáº§n lead, sales hoáº·c outcome khÃ´ng, cÃ³ tÃ¡ch vÃ  Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c khÃ´ng, dá»¯ liá»‡u cÃ³ Ä‘á»§ á»•n Ä‘á»‹nh Ä‘á»ƒ so sÃ¡nh theo tuáº§n khÃ´ng.',
      },
      { type: 'visual', variant: 'decision-metric-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n metric classification template cho dashboard marketing.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m report, nhiá»u ngÆ°á»i ráº¥t thÃ­ch sá»‘ Ä‘áº¹p. Reach cao, click nhiá»u, traffic tÄƒng vÃ  chart Ä‘i lÃªn táº¡o cáº£m giÃ¡c yÃªn tÃ¢m. LÃ m lÃ¢u má»›i tháº¥y sá»‘ Ä‘áº¹p chá»‰ tháº­t sá»± cÃ³ giÃ¡ trá»‹ khi ná»‘i Ä‘Æ°á»£c vá»›i hÃ nh vi tháº­t cá»§a khÃ¡ch vÃ  quyáº¿t Ä‘á»‹nh tháº­t cá»§a team.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard trÆ°á»Ÿng thÃ nh khÃ´ng loáº¡i bá» vanity metrics. NÃ³ Ä‘áº·t context á»Ÿ Ä‘áº§u, diagnosis á»Ÿ giá»¯a, decision gáº§n lead, sales vÃ  outcome, cÃ²n action á»Ÿ cuá»‘i cuá»™c há»p. KhÃ´ng metric nÃ o tá»± Ä‘á»™ng thÃ´ng minh; team tá»‘t hÆ¡n khi biáº¿t metric Ä‘Ã³ tráº£ lá»i cÃ¢u há»i nÃ o.',
      },
      { type: 'heading', text: 'Äáº·t má»—i metric Ä‘Ãºng vai trÃ²' },
      {
        type: 'paragraph',
        text: 'Vanity metrics vÃ  decision metrics khÃ´ng pháº£i hai phe Ä‘á»‘i láº­p. Má»™t nhÃ³m giÃºp hiá»ƒu bá»‘i cáº£nh vÃ  tÃ­n hiá»‡u Ä‘áº§u phá»…u; nhÃ³m kia giÃºp cháº©n Ä‘oÃ¡n vÃ  quyáº¿t Ä‘á»‹nh gáº§n hÆ¡n vá»›i lead, sales, outcome. Dashboard cÃ³ Ã­ch khi hai nhÃ³m Ä‘Æ°á»£c ná»‘i thÃ nh má»™t dÃ²ng logic rÃµ rÃ ng.',
      },
    ],
    cta: 'Náº¿u dashboard cÃ³ nhiá»u sá»‘ nhÆ°ng team váº«n khÃ´ng biáº¿t nÃªn tÄƒng ngÃ¢n sÃ¡ch, sá»­a landing page, chá»‰nh offer hay xá»­ lÃ½ sales follow-up, hÃ£y phÃ¢n loáº¡i láº¡i: sá»‘ nÃ o Ä‘á»ƒ nhÃ¬n bá»‘i cáº£nh, sá»‘ nÃ o Ä‘á»ƒ cháº©n Ä‘oÃ¡n vÃ  sá»‘ nÃ o tháº­t sá»± giÃºp ra quyáº¿t Ä‘á»‹nh.',
  },
  {
    title: 'Lead tÄƒng nhÆ°ng doanh thu khÃ´ng tÄƒng: dashboard nÃªn Ä‘á»c tháº¿ nÃ o?',
    slug: 'lead-tang-nhung-doanh-thu-khong-tang-dashboard-nen-doc-the-nao',
    category: 'Dashboard & Insights',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/team-meeting/team-meeting-company-team-office-team-group-01.jpg",
                "alt": "Office team group photo",
                "caption": "Office team group moment",
                "width": 1280,
                "height": 960,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-operations-box-carrying-01.jpg",
                      "alt": "Person carrying a product box in a work area",
                      "caption": "Operations work moment",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "Dashboard cáº§n ná»‘i lead Ä‘áº¿n cÃ¡c bÆ°á»›c phÃ­a sau"
                }
          ]
    },
    excerpt:
      'Lead tÄƒng khÃ´ng tá»± Ä‘á»™ng Ä‘á»“ng nghÄ©a doanh thu sáº½ tÄƒng. Khi dashboard bÃ¡o lead nhiá»u hÆ¡n nhÆ°ng doanh thu khÃ´ng nhÃºc nhÃ­ch, team cáº§n Ä‘á»c tiáº¿p cÃ¡c lá»›p phÃ­a sau: lead quality, tá»‘c Ä‘á»™ follow-up, sales status, tá»· lá»‡ bÃ¡o giÃ¡, tá»· lá»‡ chá»‘t, giÃ¡ trá»‹ Ä‘Æ¡n hÃ ng vÃ  Ä‘á»™ trá»… chu ká»³ bÃ¡n hÃ ng.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t trong nhá»¯ng tÃ¬nh huá»‘ng dá»… gÃ¢y tranh luáº­n nháº¥t trong marketing lÃ : lead tÄƒng, CPL nhÃ¬n á»•n, report ads cÃ³ váº» Ä‘áº¹p hÆ¡n, nhÆ°ng doanh thu láº¡i khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng.',
      },
      {
        type: 'paragraph',
        text: 'Marketing nÃ³i campaign táº¡o nhiá»u lead; sales nÃ³i lead khÃ³ chá»‘t. Founder tháº¥y sá»‘ lead Ä‘i lÃªn nhÆ°ng tiá»n chÆ°a vá». Dashboard chá»‰ cÃ³ tá»•ng lead nÃªn chÆ°a Ä‘á»§ tráº£ lá»i ngháº½n náº±m á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Lead tÄƒng khÃ´ng pháº£i tin xáº¥u. NhÆ°ng Ä‘Ã³ lÃ  tÃ­n hiá»‡u cáº§n Ä‘á»c tiáº¿p qua cháº¥t lÆ°á»£ng, tá»‘c Ä‘á»™ xá»­ lÃ½, sales status vÃ  outcome, thay vÃ¬ Ä‘iá»ƒm káº¿t thÃºc cá»§a káº¿t luáº­n.',
      },
      { type: 'heading', text: 'Lead lÃ  tÃ­n hiá»‡u trung gian, khÃ´ng pháº£i doanh thu' },
      {
        type: 'paragraph',
        text: 'Lead cho biáº¿t má»™t ngÆ°á»i Ä‘Ã£ Ä‘á»ƒ láº¡i tÃ­n hiá»‡u hoáº·c thÃ´ng tin Ä‘á»ƒ team xá»­ lÃ½. NÃ³ chÆ°a nÃ³i khÃ¡ch cÃ³ Ä‘Ãºng tá»‡p, cÃ³ nhu cáº§u tháº­t, Ä‘á»§ ngÃ¢n sÃ¡ch, liÃªn há»‡ Ä‘Æ°á»£c, Ä‘Æ°á»£c tÆ° váº¥n, nháº­n bÃ¡o giÃ¡ hay chá»‘t thÃ nh Ä‘Æ¡n hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Lead cÅ©ng khÃ´ng cho biáº¿t doanh thu sáº½ ghi nháº­n trong tuáº§n nÃ y hay vÃ i tuáº§n sau. Náº¿u founder chá»‰ nhÃ¬n tá»•ng lead, dashboard cÃ³ thá»ƒ táº¡o cáº£m giÃ¡c marketing Ä‘ang tá»‘t hÆ¡n thá»±c táº¿. NgÆ°á»£c láº¡i, náº¿u revenue chÆ°a tÄƒng ngay, cÅ©ng khÃ´ng nÃªn káº¿t luáº­n lead vÃ´ dá»¥ng trÆ°á»›c khi nhÃ¬n chu ká»³ bÃ¡n hÃ ng.',
      },
      { type: 'visual', variant: 'lead-revenue-gap' },
      { type: 'heading', text: 'Dashboard cáº§n ná»‘i lead Ä‘áº¿n cÃ¡c bÆ°á»›c phÃ­a sau' },
      {
        type: 'paragraph',
        text: 'Má»™t dashboard há»¯u Ã­ch nÃªn theo Ä‘Æ°á»£c Ä‘Æ°á»ng Ä‘i tá»« Lead Created qua Source Known, Contacted, Qualified, Consultation hoáº·c Quote, Won/Lost vÃ  cuá»‘i cÃ¹ng lÃ  Revenue hoáº·c outcome gáº§n doanh thu.',
      },
      {
        type: 'paragraph',
        text: 'Lead cÃ³ thá»ƒ Ä‘áº¿n tá»« form, Zalo, hotline hay Messenger. Dashboard cáº§n giá»¯ source, campaign, landing page hoáº·c form táº¡o lead; sau Ä‘Ã³ nháº­n status sales Ä‘Ã£ gá»i hay nháº¯n, cÃ³ liÃªn há»‡ Ä‘Æ°á»£c, Ä‘Ãºng nhu cáº§u, Ä‘Ã£ tÆ° váº¥n, bÃ¡o giÃ¡, chá»‘t, máº¥t hay háº¹n láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ sales status, team má»›i tháº¥y lead Ä‘i tiáº¿p Ä‘áº¿n Ä‘Ã¢u vÃ  rÆ¡i á»Ÿ bÆ°á»›c nÃ o.',
      },
      { type: 'visual', variant: 'lead-to-revenue-funnel' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch Ä‘á»c dashboard khi lead tÄƒng nhÆ°ng doanh thu khÃ´ng tÄƒng.',
      },
      { type: 'heading', text: '7 lÃ½ do lead tÄƒng nhÆ°ng doanh thu khÃ´ng tÄƒng' },
      {
        type: 'list',
        items: [
          'Lead sai tá»‡p: campaign kÃ©o ngÆ°á»i khÃ´ng Ä‘Ãºng nhu cáº§u, khu vá»±c, ngÃ¢n sÃ¡ch hoáº·c nhÃ³m khÃ¡ch má»¥c tiÃªu.',
          'Offer kÃ©o tÃ² mÃ²: thÃ´ng Ä‘iá»‡p hoáº·c Æ°u Ä‘Ã£i quÃ¡ rá»™ng táº¡o nhiá»u pháº£n há»“i nhÆ°ng Ã­t Ã½ Ä‘á»‹nh mua tháº­t.',
          'Form quÃ¡ dá»…: Ã­t trÆ°á»ng giÃºp tÄƒng lead nhÆ°ng thiáº¿u cÃ¢u há»i lá»c, khiáº¿n sales nháº­n nhiá»u liÃªn há»‡ khÃ³ xá»­ lÃ½.',
          'Sales follow-up cháº­m: lead cÃ³ nhu cáº§u nhÆ°ng Ä‘Æ°á»£c gá»i muá»™n, máº¥t nhiá»‡t hoáº·c Ä‘Ã£ chá»n nÆ¡i khÃ¡c.',
          'Sales status khÃ´ng cáº­p nháº­t: viá»‡c xá»­ lÃ½ Ä‘Ã£ xáº£y ra nhÆ°ng CRM hoáº·c Sheet khÃ´ng ghi, lÃ m dashboard ká»ƒ sai cÃ¢u chuyá»‡n.',
          'Chu ká»³ bÃ¡n hÃ ng dÃ i: lead tuáº§n nÃ y cÃ³ thá»ƒ táº¡o bÃ¡o giÃ¡ vÃ  doanh thu á»Ÿ cÃ¡c tuáº§n sau.',
          'Tracking hoáº·c dedup lá»‡ch: lead bá»‹ Ä‘o trÃ¹ng, source sai hoáº·c logic tá»•ng há»£p khiáº¿n volume cao hÆ¡n thá»±c táº¿.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i lÃ½ do nÃ o cÅ©ng thuá»™c marketing, vÃ  cÅ©ng khÃ´ng pháº£i lÃ½ do nÃ o thuá»™c sales. Dashboard cáº§n giÃºp khoanh vÃ¹ng trÆ°á»›c khi team gÃ¡n trÃ¡ch nhiá»‡m.',
      },
      { type: 'visual', variant: 'lead-revenue-diagnosis-matrix' },
      { type: 'heading', text: 'Äá»«ng chá»‰ nhÃ¬n lead volume, hÃ£y nhÃ¬n lead quality' },
      {
        type: 'paragraph',
        text: 'Lead volume tráº£ lá»i cÃ³ bao nhiÃªu lead. Lead quality tráº£ lá»i lead Ä‘Ã³ cÃ³ Ä‘Ã¡ng xá»­ lÃ½ khÃ´ng. Dashboard nÃªn cÃ³ source/campaign, lead type, contacted rate, cannot contact rate, qualified rate, wrong need rate, quote rate, won/lost vÃ  average deal value hoáº·c revenue by source khi dá»¯ liá»‡u Ä‘á»§ á»•n.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥ minh hoáº¡: campaign A táº¡o nhiá»u lead hÆ¡n nhÆ°ng tá»· lá»‡ qualified tháº¥p; campaign B Ã­t lead hÆ¡n nhÆ°ng nhiá»u lead qualified vÃ  bÃ¡o giÃ¡ hÆ¡n. Chá»‰ nhÃ¬n volume sáº½ lÃ m A ná»•i báº­t. NhÃ¬n quality cÃ³ thá»ƒ cho tháº¥y B Ä‘Ã¡ng giá»¯ vÃ  tá»‘i Æ°u sÃ¢u hÆ¡n.',
      },
      { type: 'visual', variant: 'quantity-vs-quality-dashboard' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign tÄƒng lead nhÆ°ng qualified rate giáº£m.',
      },
      { type: 'heading', text: 'CÃ¡ch Ä‘á»c dashboard khi lead tÄƒng nhÆ°ng doanh thu khÃ´ng tÄƒng' },
      {
        type: 'list',
        items: [
          'Kiá»ƒm tra tracking: lead cÃ³ bá»‹ trÃ¹ng, form submit cÃ³ Ä‘Ãºng success, source/campaign cÃ³ chÃ­nh xÃ¡c khÃ´ng?',
          'TÃ¡ch lead theo source, campaign vÃ  landing page Ä‘á»ƒ biáº¿t pháº§n tÄƒng Ä‘áº¿n tá»« Ä‘Ã¢u.',
          'Äá»c contact rate: sales cÃ³ liÃªn há»‡ Ä‘Æ°á»£c vÃ  thÃ´ng tin Ä‘iá»‡n thoáº¡i, email cÃ³ dÃ¹ng Ä‘Æ°á»£c khÃ´ng?',
          'Äá»c qualified rate: lead cÃ³ Ä‘Ãºng nhu cáº§u hay chá»‰ tÃ² mÃ², sai tá»‡p?',
          'Äá»c quote hoáº·c consultation rate: bao nhiÃªu lead Ä‘i tá»›i tÆ° váº¥n, bÃ¡o giÃ¡ hoáº·c cÆ¡ há»™i tháº­t?',
          'Äá»c won vÃ  revenue theo Ä‘á»™ trá»…: Ä‘á»‘i chiáº¿u cohort tuáº§n táº¡o lead náº¿u sales cycle dÃ i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Quy trÃ¬nh nÃ y ngÄƒn team nháº£y tháº³ng tá»« â€œlead tÄƒngâ€ sang â€œmarketing tá»‘tâ€ hoáº·c â€œsales yáº¿uâ€. Má»—i bÆ°á»›c thu háº¹p dáº§n Ä‘oáº¡n cáº§n kiá»ƒm tra.',
      },
      { type: 'heading', text: 'Cáº§n nhÃ¬n cohort náº¿u chu ká»³ bÃ¡n hÃ ng dÃ i' },
      {
        type: 'paragraph',
        text: 'Vá»›i dá»‹ch vá»¥ hoáº·c sáº£n pháº©m cáº§n cÃ¢n nháº¯c, doanh thu tuáº§n nÃ y cÃ³ thá»ƒ Ä‘áº¿n tá»« lead cá»§a nhiá»u tuáº§n trÆ°á»›c. Lead táº¡o á»Ÿ tuáº§n má»™t, tÆ° váº¥n tuáº§n hai, bÃ¡o giÃ¡ tuáº§n ba vÃ  chá»‘t tuáº§n bá»‘n lÃ  má»™t hÃ nh trÃ¬nh hoÃ n toÃ n cÃ³ thá»ƒ xáº£y ra.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u dashboard chá»‰ so lead tuáº§n nÃ y vá»›i doanh thu cÃ¹ng tuáº§n, team dá»… hiá»ƒu sai. NÃªn theo nhÃ³m lead theo tuáº§n táº¡o, status hiá»‡n táº¡i, sá»‘ lead tuáº§n trÆ°á»›c Ä‘Ã£ bÃ¡o giÃ¡, sá»‘ lead thÃ¡ng trÆ°á»›c Ä‘Ã£ chá»‘t vÃ  revenue ná»‘i vá» source ban Ä‘áº§u khi cÃ³ thá»ƒ.',
      },
      {
        type: 'paragraph',
        text: 'Äá»™ trá»… cáº§n Ä‘Æ°á»£c ghi rÃµ Ä‘á»ƒ founder khÃ´ng Ä‘Ã¡nh giÃ¡ má»™t funnel dÃ i báº±ng nhá»‹p quÃ¡ ngáº¯n.',
      },
      { type: 'heading', text: 'Marketing vÃ  sales nÃªn cÃ¹ng nhÃ¬n má»™t dashboard' },
      {
        type: 'paragraph',
        text: 'Náº¿u marketing nhÃ¬n Ads hoáº·c GA4, sales nhÃ¬n CRM hoáº·c Sheet, founder nhÃ¬n báº£ng tá»•ng nhÆ°ng cÃ¡c sá»‘ khÃ´ng ná»‘i nhau, cuá»™c há»p ráº¥t dá»… lá»‡ch. Dashboard chung nÃªn cho marketing tháº¥y source, campaign, landing page vÃ  contact; sales tháº¥y status, quality, quote, won/lost; founder tháº¥y spend, cháº¥t lÆ°á»£ng, outcome vÃ  action.',
      },
      {
        type: 'paragraph',
        text: 'Khi nhÃ¬n cÃ¹ng má»™t dÃ²ng dá»¯ liá»‡u, cÃ¢u há»i bá»›t cáº£m tÃ­nh hÆ¡n: lead nÃ o tháº­t sá»± sai tá»‡p, kÃªnh nÃ o táº¡o lead khÃ³ liÃªn há»‡, follow-up cÃ³ ká»‹p, offer nÃ o kÃ©o tÃ² mÃ² vÃ  landing page nÃ o táº¡o cÆ¡ há»™i tá»‘t hÆ¡n?',
      },
      { type: 'heading', text: 'Checklist review khoáº£ng cÃ¡ch tá»« lead Ä‘áº¿n revenue' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch hoáº·c káº¿t luáº­n má»™t phÃ²ng ban cÃ³ váº¥n Ä‘á», team nÃªn kiá»ƒm tra tracking, nguá»“n lead, kháº£ nÄƒng liÃªn há»‡, quality, quote rate, Ä‘á»™ trá»… vÃ  kháº£ nÄƒng ná»‘i outcome vá» source.',
      },
      { type: 'visual', variant: 'lead-revenue-review-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n lead-to-revenue dashboard review template.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi Ä‘á»c tÃ¬nh huá»‘ng nÃ y' },
      {
        type: 'list',
        items: [
          'Tháº¥y lead tÄƒng lÃ  vá»™i tÄƒng ngÃ¢n sÃ¡ch.',
          'Tháº¥y revenue chÆ°a tÄƒng lÃ  káº¿t luáº­n marketing sai.',
          'Äá»• lá»—i sales mÃ  khÃ´ng xem lead quality, hoáº·c Ä‘á»• lá»—i marketing mÃ  khÃ´ng xem follow-up.',
          'Chá»‰ nhÃ¬n CPL, khÃ´ng nhÃ¬n qualified vÃ  quote rate.',
          'KhÃ´ng tÃ¡ch lead theo source, campaign vÃ  landing page.',
          'KhÃ´ng cÃ³ status nÃªn khÃ´ng biáº¿t lead rÆ¡i á»Ÿ Ä‘Ã¢u.',
          'KhÃ´ng nhÃ¬n sales cycle, duplicate vÃ  tracking trÆ°á»›c khi káº¿t luáº­n.',
          'KhÃ´ng ghi action sau buá»•i review Ä‘á»ƒ tuáº§n sau Ä‘o láº¡i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Sai láº§m lá»›n nháº¥t lÃ  biáº¿n má»™t váº¥n Ä‘á» há»‡ thá»‘ng thÃ nh cuá»™c tranh luáº­n giá»¯a phÃ²ng ban. Dashboard nÃªn Ä‘Æ°a cuá»™c trao Ä‘á»•i trá»Ÿ láº¡i dá»¯ liá»‡u vÃ  Ä‘oáº¡n ngháº½n cá»¥ thá»ƒ.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m marketing, lead tÄƒng táº¡o cáº£m giÃ¡c ráº¥t yÃªn tÃ¢m. LÃ m lÃ¢u má»›i tháº¥y lead chá»‰ lÃ  tÃ­n hiá»‡u cáº§n Ä‘Æ°á»£c Ä‘á»c tiáº¿p báº±ng quality, tráº¡ng thÃ¡i xá»­ lÃ½ vÃ  outcome phÃ­a sau.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard tá»‘t khÃ´ng lÃ m team bá»›t tranh cÃ£i vÃ¬ Ä‘áº¹p hÆ¡n. NÃ³ giÃºp má»i ngÆ°á»i cÃ¹ng nhÃ¬n lead Ä‘áº¿n tá»« Ä‘Ã¢u, cÃ³ Ä‘Ãºng khÃ´ng, sales xá»­ lÃ½ tá»›i Ä‘Ã¢u, cÃ³ bÃ¡o giÃ¡, cÃ³ chá»‘t vÃ  náº¿u chÆ°a cÃ³ revenue thÃ¬ ngháº½n náº±m á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Lead tÄƒng lÃ  Ä‘iá»ƒm báº¯t Ä‘áº§u cá»§a cÃ¢u há»i, khÃ´ng pháº£i Ä‘iá»ƒm káº¿t thÃºc cá»§a káº¿t luáº­n.',
      },
      { type: 'heading', text: 'Äá»c khoáº£ng cÃ¡ch, khÃ´ng chá»‰ Ä‘á»c hai Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Khi lead tÄƒng nhÆ°ng doanh thu chÆ°a tÄƒng, dashboard pháº£i lÃ m rÃµ khoáº£ng giá»¯a: lead quality, follow-up, sales status, quote rate, close rate, sales cycle vÃ  tracking. Dashboard khÃ´ng Ä‘áº£m báº£o doanh thu tÄƒng, nhÆ°ng giÃºp team biáº¿t nÃªn kiá»ƒm tra vÃ  sá»­a Ä‘oáº¡n nÃ o trÆ°á»›c.',
      },
    ],
    cta: 'Náº¿u team cÃ³ nhiá»u lead hÆ¡n nhÆ°ng doanh thu chÆ°a tÄƒng tÆ°Æ¡ng á»©ng, Ä‘á»«ng vá»™i tÄƒng ngÃ¢n sÃ¡ch hoáº·c Ä‘á»• lá»—i má»™t phÃ²ng ban. HÃ£y khoanh vÃ¹ng: váº¥n Ä‘á» náº±m á»Ÿ traffic, offer, form, lead quality, sales follow-up, sales cycle hay tracking.',
  },
  {
    title: 'Dashboard giÃºp tÃ¬m Ä‘iá»ƒm ngháº½n marketing nhÆ° tháº¿ nÃ o?',
    slug: 'dashboard-giup-tim-diem-nghen-marketing-nhu-the-nao',
    category: 'Dashboard & Insights',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-session-01.jpg",
                "alt": "Audience watching a presentation in a training room",
                "caption": "Training session audience",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-meeting-room-presentation-discussion-01.jpg",
                      "alt": "People in a meeting room during a workshop",
                      "caption": "Workshop discussion in meeting room",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "Äá»c Ä‘iá»ƒm ngháº½n theo dÃ²ng cháº£y, khÃ´ng Ä‘á»c tá»«ng sá»‘ láº»"
                }
          ]
    },
    excerpt:
      'Dashboard marketing tá»‘t khÃ´ng chá»‰ cho biáº¿t sá»‘ tÄƒng hay giáº£m. NÃ³ pháº£i giÃºp team khoanh vÃ¹ng Ä‘iá»ƒm ngháº½n: traffic sai tá»‡p, thÃ´ng Ä‘iá»‡p chÆ°a khá»›p, landing page yáº¿u, CTA/form khÃ³ dÃ¹ng, lead kÃ©m cháº¥t lÆ°á»£ng, sales follow-up cháº­m hay tracking Ä‘ang lá»‡ch.',
    content: [
      {
        type: 'paragraph',
        text: 'Khi sá»‘ marketing xáº¥u Ä‘i, pháº£n á»©ng tá»± nhiÃªn cá»§a nhiá»u team lÃ  tÃ¬m ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m. Ads yáº¿u, content dá»Ÿ, sales cháº­m hay landing page khÃ´ng á»•n? Náº¿u dashboard chá»‰ cÃ³ vÃ i con sá»‘ tá»•ng, cuá»™c há»p ráº¥t dá»… biáº¿n thÃ nh tranh luáº­n báº±ng cáº£m giÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard khÃ´ng nÃªn dá»«ng á»Ÿ viá»‡c bÃ¡o lead giáº£m, CPL tÄƒng hoáº·c revenue Ä‘i xuá»‘ng. NÃ³ cáº§n giÃºp team há»i tiáº¿p: thay Ä‘á»•i náº±m á»Ÿ Ä‘Ã¢u, Ä‘oáº¡n nÃ o Ä‘ang rÆ¡i vÃ  nÃªn kiá»ƒm tra pháº§n nÃ o trÆ°á»›c.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» thÆ°á»ng náº±m trong dÃ²ng cháº£y tá»« spend qua traffic, message, landing page, form, lead quality, sales Ä‘áº¿n outcome. Dashboard khÃ´ng tá»± sá»­a, nhÆ°ng giÃºp team kiá»ƒm tra Ä‘Ãºng chá»—.',
      },
      { type: 'heading', text: 'Äiá»ƒm ngháº½n marketing lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm ngháº½n lÃ  Ä‘oáº¡n khiáº¿n dÃ²ng cháº£y tá»« tiá»n marketing Ä‘áº¿n káº¿t quáº£ kinh doanh bá»‹ cháº­m hoáº·c rÆ¡i máº¥t. CÃ³ ngÃ¢n sÃ¡ch nhÆ°ng traffic khÃ´ng Ä‘á»§; cÃ³ traffic nhÆ°ng sai tá»‡p; traffic Ä‘Ãºng nhÆ°ng landing page chÆ°a thuyáº¿t phá»¥c; khÃ¡ch quan tÃ¢m nhÆ°ng CTA, form hoáº·c contact khÃ³ dÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'á»ž Ä‘oáº¡n sau, lead cÃ³ thá»ƒ sai nhu cáº§u, sales follow-up cháº­m, bÃ¡o giÃ¡ bá»‹ ngháº½n hoáº·c tá»· lá»‡ chá»‘t tháº¥p. CÅ©ng cÃ³ lÃºc hoáº¡t Ä‘á»™ng kinh doanh váº«n diá»…n ra nhÆ°ng tracking vÃ  dashboard khÃ´ng Ä‘á»‘i chiáº¿u Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm ngháº½n khÃ´ng máº·c Ä‘á»‹nh náº±m á»Ÿ ads hay sales. NÃ³ cÃ³ thá»ƒ náº±m á»Ÿ chÃ­nh Ä‘oáº¡n ná»‘i giá»¯a cÃ¡c pháº§n.',
      },
      { type: 'visual', variant: 'marketing-bottleneck-map' },
      { type: 'heading', text: 'Äá»c Ä‘iá»ƒm ngháº½n theo dÃ²ng cháº£y, khÃ´ng Ä‘á»c tá»«ng sá»‘ láº»' },
      {
        type: 'paragraph',
        text: 'Traffic giáº£m khÃ´ng tá»± Ä‘á»™ng nghÄ©a ads sai. Lead giáº£m chÆ°a cháº¯c landing page yáº¿u. CPL tÄƒng khÃ´ng Ä‘á»§ káº¿t luáº­n campaign kÃ©m; revenue giáº£m cÅ©ng chÆ°a chá»©ng minh marketing khÃ´ng hiá»‡u quáº£.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y Ä‘á»c theo flow: spend cÃ³ Ä‘á»•i khÃ´ng, traffic thay Ä‘á»•i á»Ÿ channel, campaign hay landing page nÃ o, CTA vÃ  contact cÃ³ Ä‘á»•i, lead volume vÃ  quality ra sao, sales status rÆ¡i á»Ÿ bÆ°á»›c nÃ o, outcome cÃ³ Ä‘á»™ trá»… khÃ´ng, tracking hoáº·c dashboard vá»«a thay Ä‘á»•i gÃ¬?',
      },
      {
        type: 'paragraph',
        text: 'Quy trÃ¬nh nÃ y Ä‘Æ°a team tá»« sá»‘ tá»•ng Ä‘áº¿n Ä‘oáº¡n cá»¥ thá»ƒ trong há»‡ thá»‘ng, rá»“i má»›i hÃ¬nh thÃ nh giáº£ thuyáº¿t sá»­a.',
      },
      { type: 'visual', variant: 'bottleneck-diagnosis-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch dÃ¹ng dashboard Ä‘á»ƒ tÃ¬m Ä‘iá»ƒm ngháº½n marketing.',
      },
      { type: 'heading', text: 'Khi traffic cÃ³ váº¥n Ä‘á»' },
      {
        type: 'paragraph',
        text: 'Dáº¥u hiá»‡u cÃ³ thá»ƒ lÃ  spend tÄƒng nhÆ°ng traffic khÃ´ng tÄƒng, CPC biáº¿n Ä‘á»™ng máº¡nh, traffic giáº£m á»Ÿ kÃªnh chÃ­nh, traffic tÄƒng nhÆ°ng engagement xáº¥u hÆ¡n, vÃ o sai landing page hoáº·c khÃ´ng táº¡o thÃªm CTA vÃ  contact.',
      },
      {
        type: 'paragraph',
        text: 'Cáº§n há»i ngÃ¢n sÃ¡ch cÃ³ Ä‘á»•i, campaign cÃ³ bá»‹ giá»›i háº¡n phÃ¢n phá»‘i, audience hoáº·c keyword cÃ³ lá»‡ch, traffic cÃ³ vÃ o Ä‘Ãºng trang, message ads cÃ³ khá»›p landing page vÃ  kÃªnh Ä‘Ã³ cÃ³ táº¡o contact hay lead khÃ´ng. Traffic lÃ  Ä‘áº§u vÃ o; Ä‘áº§u vÃ o sai hoáº·c yáº¿u sáº½ lÃ m cÃ¡c Ä‘oáº¡n sau khÃ³ táº¡o káº¿t quáº£.',
      },
      { type: 'heading', text: 'Khi landing page hoáº·c offer cÃ³ váº¥n Ä‘á»' },
      {
        type: 'paragraph',
        text: 'Traffic á»•n nhÆ°ng contact tháº¥p, CTA click tháº¥p, form submit Ã­t, Zalo hoáº·c hotline Ã­t Ä‘Æ°á»£c báº¥m, hay hai landing page nháº­n traffic tÆ°Æ¡ng tá»± nhÆ°ng táº¡o tÃ­n hiá»‡u ráº¥t khÃ¡c lÃ  nhá»¯ng dáº¥u hiá»‡u Ä‘Ã¡ng kiá»ƒm tra.',
      },
      {
        type: 'paragraph',
        text: 'Team nÃªn xem message quáº£ng cÃ¡o cÃ³ khá»›p ná»™i dung trang, offer cÃ³ rÃµ, CTA cÃ³ dá»… tháº¥y, tráº£i nghiá»‡m mobile cÃ³ dá»… Ä‘á»c vÃ  báº¥m, form cÃ³ quÃ¡ dÃ i, vÃ  trang Ä‘Ã£ tráº£ lá»i Ä‘Ãºng ná»—i Ä‘au cá»§a khÃ¡ch chÆ°a. Khi traffic Ä‘Ãºng mÃ  khÃ´ng táº¡o hÃ nh Ä‘á»™ng, Ä‘á»«ng chá»‰ tiáº¿p tá»¥c chá»‰nh ads.',
      },
      { type: 'heading', text: 'Khi contact, form hoáº·c lead cÃ³ váº¥n Ä‘á»' },
      {
        type: 'paragraph',
        text: 'CTA click cÃ³ nhÆ°ng form submit tháº¥p cÃ³ thá»ƒ lÃ  form friction. Zalo hoáº·c hotline click nhiá»u nhÆ°ng CRM Ã­t lead cÃ³ thá»ƒ do quy trÃ¬nh ghi nháº­n. Ads hoáº·c GA4 bÃ¡o form submit cao trong khi CRM khÃ´ng cÃ³ sá»‘ tÆ°Æ¡ng á»©ng cÃ³ thá»ƒ lÃ  event báº¯n sai Ä‘iá»u kiá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y test nÃºt liÃªn há»‡, gá»­i form tháº­t, kiá»ƒm tra Lead chá»‰ báº¯n khi success, xem form field cÃ³ lá»c Ä‘á»§ nhu cáº§u, record cÃ³ source, form_name, page_location vÃ  sales cÃ³ theo dÃµi contact click khÃ´ng. Lead tÄƒng báº¥t thÆ°á»ng kÃ¨m quality giáº£m cÅ©ng cáº§n tÃ¡ch theo nguá»“n trÆ°á»›c khi káº¿t luáº­n.',
      },
      { type: 'visual', variant: 'signal-to-bottleneck-matrix' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team sá»­a ads liÃªn tá»¥c nhÆ°ng Ä‘iá»ƒm ngháº½n tháº­t náº±m á»Ÿ landing page/form.',
      },
      { type: 'heading', text: 'Khi lead quality hoáº·c sales follow-up cÃ³ váº¥n Ä‘á»' },
      {
        type: 'paragraph',
        text: 'Lead tÄƒng nhÆ°ng qualified rate giáº£m, nhiá»u lead khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c, sai khu vá»±c, sai nhu cáº§u hoáº·c kÃªnh cÃ³ CPL tháº¥p nhÆ°ng quote rate tháº¥p lÃ  dáº¥u hiá»‡u quality cáº§n xem láº¡i. NguyÃªn nhÃ¢n cÃ³ thá»ƒ náº±m á»Ÿ traffic, offer hoáº·c form chÆ°a lá»c Ä‘á»§.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u qualified á»•n nhÆ°ng quote tháº¥p, lead má»›i tá»“n nhiá»u ngÃ y, time to contact dÃ i, CRM thiáº¿u status hoáº·c Follow-up later khÃ´ng cÃ³ lá»‹ch nháº¯c, Ä‘iá»ƒm ngháº½n cÃ³ thá»ƒ náº±m trong quy trÃ¬nh sales. Team cáº§n kiá»ƒm tra tá»‘c Ä‘á»™ gá»i, cÃ¡ch cáº­p nháº­t tráº¡ng thÃ¡i, bÆ°á»›c tÆ° váº¥n vÃ  bÃ¡o giÃ¡.',
      },
      {
        type: 'paragraph',
        text: 'Lead quality vÃ  follow-up lÃ  Ä‘oáº¡n ná»‘i giá»¯a marketing vá»›i revenue. Dashboard thiáº¿u Ä‘oáº¡n nÃ y sáº½ khiáº¿n hai bÃªn ráº¥t dá»… Ä‘á»• lá»—i sai.',
      },
      { type: 'heading', text: 'Khi tracking hoáº·c dashboard data cÃ³ váº¥n Ä‘á»' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i sá»‘ xáº¥u nÃ o cÅ©ng pháº£n Ã¡nh váº¥n Ä‘á» kinh doanh. Ads bÃ¡o nhiá»u lead nhÆ°ng CRM khÃ´ng cÃ³, GA4 cÃ³ event mÃ  dashboard khÃ´ng nháº­n, conversion tÄƒng Ä‘á»™t biáº¿n, lead bá»‹ ghi nhiá»u láº§n, source bá»‹ máº¥t hoáº·c form má»›i thiáº¿u form_name Ä‘á»u cÃ³ thá»ƒ lÃ  lá»—i Ä‘o lÆ°á»ng.',
      },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c quyáº¿t Ä‘á»‹nh lá»›n, hÃ£y kiá»ƒm tra event cÃ³ báº¯n Ä‘Ãºng success, cÃ³ duplicate, GTM hoáº·c DataLayer vá»«a Ä‘á»•i, CRM/Sheet cÃ³ lÆ°u Ä‘Ãºng, UTM cÃ³ bá»‹ máº¥t vÃ  dashboard cÃ³ Ä‘á»c Ä‘Ãºng field. Má»™t sheet Ä‘á»•i cáº¥u trÃºc hoáº·c refresh lá»—i cÅ©ng Ä‘á»§ lÃ m report lá»‡ch.',
      },
      { type: 'heading', text: 'KhÃ´ng nÃªn sá»­a táº¥t cáº£ cÃ¹ng lÃºc' },
      {
        type: 'paragraph',
        text: 'Khi dashboard chá»‰ ra nhiá»u váº¥n Ä‘á», team nhá» thÆ°á»ng muá»‘n Ä‘á»•i ads, landing page, offer, form, quy trÃ¬nh sales, tracking vÃ  dashboard cÃ¹ng lÃºc. CÃ¡ch nÃ y khiáº¿n tuáº§n sau khÃ³ biáº¿t thay Ä‘á»•i nÃ o táº¡o tÃ¡c Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y Æ°u tiÃªn lá»—i lÃ m dá»¯ liá»‡u khÃ´ng Ä‘Ã¡ng tin, lá»—i khiáº¿n khÃ¡ch khÃ´ng thá»ƒ hÃ nh Ä‘á»™ng, Ä‘oáº¡n ngháº½n lá»›n nháº¥t, quick win dá»… sá»­a, rá»“i má»›i Ä‘áº¿n thay Ä‘á»•i cáº§n test dÃ i nhÆ° offer, targeting hoáº·c sales process.',
      },
      { type: 'visual', variant: 'bottleneck-fix-priority' },
      { type: 'heading', text: 'Checklist review Ä‘iá»ƒm ngháº½n háº±ng tuáº§n' },
      {
        type: 'paragraph',
        text: 'Má»™t buá»•i review nÃªn báº¯t Ä‘áº§u báº±ng sá»‘ lá»‡ch lá»›n nháº¥t, tÃ¡ch theo nguá»“n vÃ  lá»›p, xÃ¡c nháº­n dá»¯ liá»‡u Ä‘Ã¡ng tin, rá»“i chá»n má»™t Ä‘áº¿n ba Ä‘iá»ƒm cáº§n sá»­a. Ãt viá»‡c nhÆ°ng cÃ³ owner, deadline vÃ  metric Ä‘o láº¡i há»¯u Ã­ch hÆ¡n má»™t danh sÃ¡ch thay Ä‘á»•i dÃ i.',
      },
      { type: 'visual', variant: 'bottleneck-review-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n bottleneck diagnosis template cho dashboard weekly review.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi tÃ¬m Ä‘iá»ƒm ngháº½n' },
      {
        type: 'list',
        items: [
          'NhÃ¬n má»™t sá»‘ xáº¥u rá»“i káº¿t luáº­n ngay.',
          'Äá»• lá»—i ads trÆ°á»›c khi kiá»ƒm tra landing page, CTA vÃ  form.',
          'Äá»• lá»—i sales trÆ°á»›c khi kiá»ƒm tra lead quality.',
          'Äá»• lá»—i marketing trÆ°á»›c khi nhÃ¬n follow-up vÃ  sales cycle.',
          'KhÃ´ng kiá»ƒm tra tracking khi sá»‘ lá»‡ch báº¥t thÆ°á»ng.',
          'Sá»­a quÃ¡ nhiá»u thá»© cÃ¹ng lÃºc nÃªn khÃ´ng biáº¿t thay Ä‘á»•i nÃ o cÃ³ tÃ¡c Ä‘á»™ng.',
          'Chá»‰ nhÃ¬n tá»•ng sá»‘, khÃ´ng tÃ¡ch source, campaign vÃ  landing page.',
          'KhÃ´ng ghi giáº£ thuyáº¿t, action vÃ  tuáº§n sau khÃ´ng Ä‘o láº¡i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'TÃ¬m Ä‘iá»ƒm ngháº½n lÃ  thÃ³i quen váº­n hÃ nh, khÃ´ng pháº£i má»™t láº§n soi dashboard. Má»—i vÃ²ng review cáº§n táº¡o ra giáº£ thuyáº¿t, thay Ä‘á»•i cÃ³ giá»›i háº¡n vÃ  phÃ©p Ä‘o cho tuáº§n káº¿ tiáº¿p.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i nhÃ¬n dashboard, nhiá»u ngÆ°á»i muá»‘n nÃ³ nÃ³i ngay ai Ä‘Ãºng ai sai. Dashboard há»¯u Ã­ch hÆ¡n khi lÃ m má»™t viá»‡c khÃ¡c: giÃºp team khoanh vÃ¹ng váº¥n Ä‘á» bÃ¬nh tÄ©nh hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t cuá»™c tranh luáº­n cÃ³ cáº¥u trÃºc sáº½ há»i: lá»‡ch á»Ÿ Ä‘oáº¡n nÃ o, dá»¯ liá»‡u cÃ³ Ä‘Ã¡ng tin khÃ´ng, giáº£ thuyáº¿t há»£p lÃ½ nháº¥t lÃ  gÃ¬, tuáº§n nÃ y sá»­a gÃ¬ trÆ°á»›c vÃ  tuáº§n sau Ä‘o láº¡i báº±ng chá»‰ sá»‘ nÃ o?',
      },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm ngháº½n khÃ´ng pháº£i Ä‘á»ƒ Ä‘á»• lá»—i. NÃ³ cho biáº¿t há»‡ thá»‘ng cáº§n Ä‘Æ°á»£c sá»­a á»Ÿ Ä‘Ã¢u.',
      },
      { type: 'heading', text: 'Khoanh vÃ¹ng trÆ°á»›c, sá»­a sau, rá»“i Ä‘o láº¡i' },
      {
        type: 'paragraph',
        text: 'Dashboard marketing tá»‘t giÃºp tÃ¬m Ä‘iá»ƒm ngháº½n trong dÃ²ng cháº£y tá»« spend Ä‘áº¿n traffic, contact, lead, sales vÃ  outcome. Khi khoanh Ä‘Ãºng Ä‘oáº¡n, team má»›i cÃ³ thá»ƒ sá»­a Ä‘Ãºng chá»— vÃ  Ä‘o láº¡i Ä‘Ãºng cÃ¡ch. Dashboard khÃ´ng tá»± giáº£i quyáº¿t váº¥n Ä‘á»; nÃ³ táº¡o cÆ¡ sá»Ÿ tá»‘t hÆ¡n cho hÃ nh Ä‘á»™ng.',
      },
    ],
    cta: 'Náº¿u dashboard má»—i tuáº§n chá»‰ cho tháº¥y sá»‘ Ä‘áº¹p hay xáº¥u nhÆ°ng khÃ´ng giÃºp team biáº¿t nÃªn sá»­a traffic, landing page, form, lead quality, sales follow-up hay tracking, hÃ£y thiáº¿t káº¿ láº¡i theo hÆ°á»›ng tÃ¬m Ä‘iá»ƒm ngháº½n trÆ°á»›c khi thÃªm biá»ƒu Ä‘á»“ má»›i.',
  },
  {
    title: 'Má»™t campaign khÃ´ng nÃªn báº¯t Ä‘áº§u tá»« viá»‡c lÃ m post, mÃ  tá»« má»™t direction chung',
    slug: 'mot-campaign-khong-nen-bat-dau-tu-viec-lam-post-ma-tu-mot-direction-chung',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-product-demo-booth-01.jpg",
                "alt": "People at an exhibition booth with product displays",
                "caption": "Exhibition booth activity",
                "width": 1600,
                "height": 1067,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-exhibition-outdoor-booth-01.jpg",
                      "alt": "Outdoor exhibition booth with visitors",
                      "caption": "Outdoor exhibition booth",
                      "width": 1920,
                      "height": 1080,
                      "fit": "cover",
                      "afterHeading": "Direction chung lÃ  gÃ¬?"
                }
          ]
    },
    excerpt:
      'Má»™t campaign marketing nhá» ráº¥t dá»… bá»‹ báº¯t Ä‘áº§u báº±ng cÃ¢u â€œlÃ m vÃ i post Ä‘iâ€. NhÆ°ng náº¿u chÆ°a cÃ³ direction chung, content, design, ads, landing page, event vÃ  sales script ráº¥t dá»… má»—i bÃªn hiá»ƒu má»™t kiá»ƒu. Campaign nÃªn báº¯t Ä‘áº§u tá»« má»™t hÆ°á»›ng váº­n hÃ nh rÃµ: má»¥c tiÃªu, tá»‡p khÃ¡ch, insight, thÃ´ng Ä‘iá»‡p, offer, proof, CTA vÃ  cÃ¡ch Ä‘o.',
    content: [
      {
        type: 'paragraph',
        text: 'Ráº¥t nhiá»u campaign nhá» báº¯t Ä‘áº§u báº±ng má»™t cÃ¢u quen thuá»™c: lÃ m vÃ i post trÆ°á»›c Ä‘i. Sau Ä‘Ã³ content viáº¿t bÃ i, design lÃ m key visual, ads set campaign, IT dá»±ng landing page, sales chuáº©n bá»‹ tÆ° váº¥n. Má»i ngÆ°á»i Ä‘á»u cÃ³ viá»‡c, nhÆ°ng chÆ°a cháº¯c Ä‘ang hiá»ƒu cÃ¹ng má»™t hÆ°á»›ng.',
      },
      {
        type: 'paragraph',
        text: 'Báº¯t Ä‘áº§u báº±ng post táº¡o cáº£m giÃ¡c nhanh. NhÆ°ng náº¿u chÆ°a cÃ³ direction, post chá»‰ lÃ  má»™t máº£nh rá»i. Design cÃ³ thá»ƒ hiá»ƒu concept má»™t kiá»ƒu, ads kÃ©o báº±ng thÃ´ng Ä‘iá»‡p khÃ¡c, landing page trÃ¬nh bÃ y lá»‡ch social, cÃ²n sales tÆ° váº¥n theo cÃ¡ch cÅ©.',
      },
      {
        type: 'paragraph',
        text: 'Campaign cáº§n direction chung: thá»‹ trÆ°á»ng cáº§n hiá»ƒu gÃ¬, tin gÃ¬, lÃ m gÃ¬ vÃ  team Ä‘o báº±ng tÃ­n hiá»‡u nÃ o.',
      },
      { type: 'heading', text: 'â€œLÃ m vÃ i post Ä‘iâ€ lÃ  Ä‘iá»ƒm báº¯t Ä‘áº§u nguy hiá»ƒm' },
      {
        type: 'paragraph',
        text: 'Post lÃ  output, khÃ´ng pháº£i direction. TrÆ°á»›c khi sáº£n xuáº¥t, team cáº§n thá»‘ng nháº¥t campaign phá»¥c vá»¥ má»¥c tiÃªu gÃ¬, tá»‡p khÃ¡ch lÃ  ai, há» Ä‘ang vÆ°á»›ng váº¥n Ä‘á» nÃ o, nháº­n thá»©c nÃ o cáº§n thay Ä‘á»•i, thÃ´ng Ä‘iá»‡p chÃ­nh, offer vÃ  CTA lÃ  gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Team cÅ©ng cáº§n biáº¿t báº±ng chá»©ng nÃ o lÃ m khÃ¡ch tin, sau post, ads hoáº·c landing page khÃ¡ch nÃªn lÃ m gÃ¬, vÃ  thÃ nh cÃ´ng Ä‘Æ°á»£c Ä‘o báº±ng contact, lead, booking, data hay sales opportunity. Khi cÃ¡c cÃ¢u há»i nÃ y chÆ°a rÃµ, lÃ m post nhanh chá»‰ khiáº¿n campaign cÃ³ váº» Ä‘ang cháº¡y.',
      },
      { type: 'visual', variant: 'post-first-vs-direction-first' },
      { type: 'heading', text: 'Direction chung lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Direction chung khÃ´ng pháº£i má»™t cÃ¢u slogan nghe hay. NÃ³ lÃ  hÆ°á»›ng váº­n hÃ nh cá»§a campaign: Ä‘Ã¡nh vÃ o váº¥n Ä‘á» nÃ o, nÃ³i vá»›i tá»‡p nÃ o, dá»±a trÃªn insight nÃ o, muá»‘n khÃ¡ch hiá»ƒu Ä‘iá»u gÃ¬, offer vÃ  CTA ra sao, proof nÃ o Ä‘Æ°á»£c dÃ¹ng, kÃªnh nÃ o Ä‘áº£m nháº­n vai trÃ² gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Direction cÅ©ng pháº£i nÃ³i rÃµ dá»¯ liá»‡u cáº§n thu vÃ  cÃ¡ch follow-up sau campaign. Tagline cÃ³ thá»ƒ lÃ  má»™t cÃ¢u neo Ä‘á»ƒ team bÃ¡m, nhÆ°ng khÃ´ng thay tháº¿ má»¥c tiÃªu, audience, message vÃ  measurement.',
      },
      {
        type: 'paragraph',
        text: 'Post, ads, landing page, event vÃ  sales script lÃ  cÃ¡c biá»ƒu hiá»‡n cá»§a cÃ¹ng má»™t trá»¥c.',
      },
      { type: 'visual', variant: 'campaign-direction-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch láº­p campaign direction brief trÆ°á»›c khi lÃ m post.',
      },
      { type: 'heading', text: 'Khi khÃ´ng cÃ³ direction, campaign rá»i ráº¡c á»Ÿ Ä‘Ã¢u?' },
      {
        type: 'list',
        items: [
          'Content ká»ƒ cÃ¢u chuyá»‡n thÆ°Æ¡ng hiá»‡u, trong khi ads kÃ©o báº±ng Æ°u Ä‘Ã£i ngáº¯n háº¡n nÃªn tráº£i nghiá»‡m bá»‹ lá»‡ch.',
          'Key visual nhÃ¬n á»•n nhÆ°ng khÃ´ng lÃ m rÃµ váº¥n Ä‘á», offer hoáº·c CTA.',
          'KhÃ¡ch click vÃ¬ má»™t lá»i há»©a trong ads nhÆ°ng landing page láº¡i nÃ³i chuyá»‡n khÃ¡c.',
          'KhÃ¡ch há»i theo concept campaign, sales váº«n tÆ° váº¥n báº±ng script cÅ©.',
          'Event offline cÃ³ check-in vÃ  hÃ¬nh áº£nh nhÆ°ng thiáº¿u data phÃ¢n loáº¡i cÃ¹ng káº¿ hoáº¡ch follow-up.',
          'Dashboard Ä‘o reach, click vÃ  lead nhÆ°ng khÃ´ng biáº¿t campaign Ä‘ang kiá»ƒm tra giáº£ thuyáº¿t nÃ o.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Sá»± rá»i ráº¡c thÆ°á»ng khÃ´ng Ä‘áº¿n tá»« viá»‡c team lÆ°á»i. Má»—i ngÆ°á»i váº«n lÃ m ráº¥t nhiá»u, nhÆ°ng thiáº¿u má»™t direction Ä‘á»§ rÃµ Ä‘á»ƒ cÃ¹ng bÃ¡m.',
      },
      { type: 'heading', text: 'Direction brief nÃªn cÃ³ nhá»¯ng pháº§n nÃ o?' },
      {
        type: 'paragraph',
        text: 'Brief báº¯t Ä‘áº§u tá»« Objective: awareness, lead, event data, demo booking, trial, sales opportunity hay follow-up. Sau Ä‘Ã³ xÃ¡c Ä‘á»‹nh audience vÃ  ngÆ°á»i áº£nh hÆ°á»Ÿng quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Problem hoáº·c insight mÃ´ táº£ Ä‘iá»u khÃ¡ch Ä‘ang vÆ°á»›ng, hiá»ƒu sai hay cáº§n báº±ng chá»©ng. Core Message lÃ  má»™t cÃ¢u rÃµ vá» Ä‘iá»u campaign muá»‘n khÃ¡ch hiá»ƒu. Operating Tagline lÃ  cÃ¢u neo cho team, khÃ´ng nháº¥t thiáº¿t lÃ  slogan quáº£ng cÃ¡o.',
      },
      {
        type: 'paragraph',
        text: 'Offer hoáº·c CTA nÃ³i khÃ¡ch nÃªn Ä‘Äƒng kÃ½, nháº­n tÆ° váº¥n, xem demo, Ä‘áº¿n event, quÃ©t QR hay táº£i tÃ i liá»‡u. Proof Assets gá»“m hÃ¬nh tháº­t, case, demo, sample, dá»¯ liá»‡u, video hoáº·c testimonial phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i cÃ¹ng, Channel Role quy Ä‘á»‹nh social táº¡o nháº­n thá»©c gÃ¬, ads kÃ©o ai, landing page chá»‘t gÃ¬, sales nÃ³i gÃ¬, event thu data nÃ o. Measurement xÃ¡c Ä‘á»‹nh contact, QR scan, form submit, booking, qualified lead vÃ  follow-up status cáº§n Ä‘o.',
      },
      { type: 'visual', variant: 'campaign-direction-brief' },
      { type: 'heading', text: 'Direction giÃºp tá»«ng team lÃ m Ä‘Ãºng vai trÃ² hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Content khÃ´ng viáº¿t post chá»‰ Ä‘á»ƒ Ä‘á»§ lá»‹ch mÃ  biáº¿t má»—i bÃ i cáº§n thay Ä‘á»•i nháº­n thá»©c nÃ o. Design biáº¿t nÃªn lÃ m ná»•i problem, offer, proof hay CTA. Ads biáº¿t tÃ­n hiá»‡u cáº§n kÃ©o lÃ  traffic, lead, QR scan, booking hay qualified lead.',
      },
      {
        type: 'paragraph',
        text: 'IT khÃ´ng chá»‰ dá»±ng page theo yÃªu cáº§u rá»i ráº¡c; há» biáº¿t copy nÃ o cáº§n tiáº¿p ná»‘i, form thu field gÃ¬ vÃ  event nÃ o pháº£i Ä‘o. Sales biáº¿t khÃ¡ch Ä‘Ã£ Ä‘Æ°á»£c dáº«n báº±ng concept nÃ o Ä‘á»ƒ follow-up Ä‘Ãºng angle. Founder cÃ³ thá»ƒ duyá»‡t Ä‘á»™ lá»‡ch direction thay vÃ¬ sa vÃ o tá»«ng cÃ¢u chá»¯ nhá».',
      },
      { type: 'visual', variant: 'campaign-alignment-flow' },
      { type: 'heading', text: 'VÃ­ dá»¥: campaign offline cho nhÃ³m kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Giáº£ sá»­ doanh nghiá»‡p tá»• chá»©c event vá» giáº£i phÃ¡p váº­t liá»‡u cho kiáº¿n trÃºc sÆ°. Náº¿u báº¯t Ä‘áº§u tá»« post, team lÃ m bÃ i má»i, banner, ads, áº£nh check-in vÃ  lá»i cáº£m Æ¡n. Äáº§u viá»‡c Ä‘á»§ nhÆ°ng hÆ°á»›ng chung váº«n má».',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u báº¯t Ä‘áº§u tá»« direction, objective cÃ³ thá»ƒ lÃ  táº¡o data kiáº¿n trÃºc sÆ° vÃ  má»Ÿ há»™i thoáº¡i tÆ° váº¥n giáº£i phÃ¡p. Audience lÃ  nhÃ³m thiáº¿t káº¿ nhÃ  phá»‘, biá»‡t thá»± hoáº·c cÃ´ng trÃ¬nh Ä‘áº·c thÃ¹. Insight lÃ  há» cáº§n tháº¥y cÃ¡ch xá»­ lÃ½ bá» máº·t, Ä‘iá»u kiá»‡n thi cÃ´ng vÃ  case tháº­t hÆ¡n lÃ  quáº£ng cÃ¡o sáº£n pháº©m chung.',
      },
      {
        type: 'paragraph',
        text: 'Core message chuyá»ƒn tá»« bÃ¡n má»™t sáº£n pháº©m sang cung cáº¥p bá»™ giáº£i phÃ¡p Ä‘á»ƒ kiáº¿n trÃºc sÆ° dá»… tÆ° váº¥n chá»§ nhÃ . CTA lÃ  quÃ©t QR nháº­n solution kit, Ä‘Äƒng kÃ½ test máº«u hoáº·c follow-up theo case. Proof gá»“m sample box, hÃ¬nh cÃ´ng trÃ¬nh vÃ  demo bá» máº·t.',
      },
      {
        type: 'paragraph',
        text: 'Landing page giáº£i thÃ­ch solution kit vÃ  phÃ¢n loáº¡i nhu cáº§u. Sales gá»i theo nhÃ³m Ä‘Ã£ chá»n. Dashboard theo QR scan, form submit, follow-up status vÃ  meeting booked. Direction lÃ m toÃ n bá»™ event thay Ä‘á»•i.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign event offline bá»‹ rá»i ráº¡c vÃ¬ thiáº¿u direction chung.',
      },
      { type: 'heading', text: 'Direction khÃ´ng lÃ m cháº­m, mÃ  giÃºp Ä‘á»¡ sá»­a sai' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team sá»£ lÃ m direction máº¥t thá»i gian. NhÆ°ng thiáº¿u direction thÆ°á»ng khiáº¿n post duyá»‡t nhiá»u vÃ²ng, design sá»­a liÃªn tá»¥c, ads test creative mÃ  khÃ´ng biáº¿t há»c gÃ¬, landing page Ä‘á»•i copy, sales há»i láº¡i message vÃ  cuá»‘i campaign khÃ´ng rÃºt Ä‘Æ°á»£c bÃ i há»c.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t direction brief má»™t Ä‘áº¿n hai trang cÃ³ thá»ƒ cháº­m hÆ¡n vÃ i giá» á»Ÿ Ä‘áº§u, nhÆ°ng giÃºp campaign bá»›t lá»‡ch nhiá»u ngÃ y á»Ÿ giá»¯a. Má»¥c tiÃªu khÃ´ng pháº£i lÃ m tÃ i liá»‡u dÃ y, mÃ  thá»‘ng nháº¥t Ä‘á»§ Ä‘á»ƒ báº¯t Ä‘áº§u.',
      },
      { type: 'heading', text: 'Checklist trÆ°á»›c khi cho team lÃ m post' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi má»Ÿ lá»‹ch content, hÃ£y xÃ¡c nháº­n má»¥c tiÃªu, audience, insight, message, offer, proof, channel role, data cáº§n thu vÃ  cÃ¡ch follow-up. Náº¿u má»™t pháº§n chÆ°a rÃµ, Ä‘Ã³ lÃ  cÃ¢u há»i cáº§n chá»‘t trÆ°á»›c khi nhÃ¢n output.',
      },
      { type: 'visual', variant: 'campaign-direction-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign direction brief template cho team nhá».',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi campaign thiáº¿u direction' },
      {
        type: 'list',
        items: [
          'Báº¯t Ä‘áº§u báº±ng lá»‹ch post thay vÃ¬ campaign brief.',
          'Má»—i kÃªnh dÃ¹ng má»™t thÃ´ng Ä‘iá»‡p khÃ¡c nhau.',
          'Design Ä‘áº¹p nhÆ°ng khÃ´ng lÃ m rÃµ problem hoáº·c CTA.',
          'Ads kÃ©o báº±ng angle khÃ´ng Ä‘Æ°á»£c landing page tiáº¿p ná»‘i.',
          'Landing page thiáº¿u proof hoáº·c field dá»¯ liá»‡u cáº§n thu.',
          'Sales khÃ´ng biáº¿t khÃ¡ch Ä‘áº¿n tá»« concept nÃ o.',
          'Event cÃ³ check-in nhÆ°ng khÃ´ng cÃ³ data phÃ¢n loáº¡i.',
          'Sau campaign chá»‰ cÃ²n áº£nh, reach vÃ  tá»•ng lead, khÃ´ng rÃµ Ä‘Ã£ há»c gÃ¬.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Khi direction yáº¿u, founder pháº£i duyá»‡t tá»«ng output nhá» vÃ  cáº£ team tá»‘n nhiá»u sá»©c kÃ©o campaign vá» Ä‘Ãºng hÆ°á»›ng trong lÃºc nÃ³ Ä‘ang cháº¡y.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra campaign khÃ´ng báº¯t Ä‘áº§u khi post Ä‘áº§u tiÃªn Ä‘Æ°á»£c Ä‘Äƒng hay ads Ä‘Æ°á»£c báº­t. NÃ³ báº¯t Ä‘áº§u khi team thá»‘ng nháº¥t Ä‘ang Ä‘Ã¡nh vÃ o váº¥n Ä‘á» nÃ o, nÃ³i vá»›i ai, báº±ng thÃ´ng Ä‘iá»‡p gÃ¬ vÃ  muá»‘n khÃ¡ch lÃ m gÃ¬ sau khi tiáº¿p xÃºc.',
      },
      {
        type: 'paragraph',
        text: 'Post lÃ  thá»© thá»‹ trÆ°á»ng nhÃ¬n tháº¥y. Direction lÃ  thá»© team pháº£i nhÃ¬n tháº¥y trÆ°á»›c. Campaign nhá» khÃ´ng cáº§n bá»™ tÃ i liá»‡u IMC dÃ y, nhÆ°ng cáº§n má»™t hÆ°á»›ng Ä‘á»§ rÃµ Ä‘á»ƒ má»i ngÆ°á»i khÃ´ng tá»± diá»…n giáº£i.',
      },
      {
        type: 'paragraph',
        text: 'Direction khÃ´ng Ä‘áº£m báº£o campaign tháº¯ng, nhÆ°ng giÃºp output nháº¥t quÃ¡n vÃ  bÃ i há»c rÃµ hÆ¡n.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u báº±ng trá»¥c chung' },
      {
        type: 'paragraph',
        text: 'Post, ads, landing page, event, sales script vÃ  dashboard nÃªn xuáº¥t phÃ¡t tá»« cÃ¹ng direction: objective, audience, insight, message, offer, proof, channel role, data vÃ  follow-up. Khi trá»¥c nÃ y rÃµ, tá»«ng Ä‘áº§u viá»‡c má»›i trá»Ÿ thÃ nh má»™t pháº§n cá»§a campaign thay vÃ¬ danh sÃ¡ch output rá»i.',
      },
    ],
    cta: 'Náº¿u team chuáº©n bá»‹ campaign má»›i, Ä‘á»«ng báº¯t Ä‘áº§u báº±ng cÃ¢u â€œlÃ m vÃ i post trÆ°á»›c Ä‘iâ€. HÃ£y báº¯t Ä‘áº§u báº±ng direction brief ngáº¯n: thá»‹ trÆ°á»ng cáº§n hiá»ƒu gÃ¬, tin gÃ¬, lÃ m gÃ¬ vÃ  team sáº½ Ä‘o Ä‘iá»u Ä‘Ã³ báº±ng tÃ­n hiá»‡u nÃ o.',
  },
  {
    title: 'VÃ¬ sao má»—i campaign nÃªn cÃ³ má»™t tagline váº­n hÃ nh?',
    slug: 'vi-sao-moi-campaign-nen-co-mot-tagline-van-hanh',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-booth-team-demo-01.jpg",
                "alt": "Team members at an exhibition booth serving visitors",
                "caption": "Exhibition booth team activity",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-internal-event-team-group-stage-01.jpg",
                      "alt": "Large team group photo in an indoor venue",
                      "caption": "Team group photo at an indoor event",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "VÃ¬ sao campaign cáº§n má»™t cÃ¢u neo?"
                }
          ]
    },
    excerpt:
      'Tagline váº­n hÃ nh khÃ´ng pháº£i cÃ¢u slogan viáº¿t cho hay. NÃ³ lÃ  cÃ¢u neo giÃºp cáº£ team bÃ¡m cÃ¹ng má»™t hÆ°á»›ng khi lÃ m content, design, ads, landing page, event, sales script vÃ  follow-up. Má»™t campaign cÃ³ tagline váº­n hÃ nh rÃµ sáº½ Ã­t bá»‹ rá»i ráº¡c hÆ¡n, dá»… kiá»ƒm tra output hÆ¡n vÃ  dá»… Ä‘o xem thÃ´ng Ä‘iá»‡p cÃ³ Ä‘i Ä‘Ãºng hÆ°á»›ng khÃ´ng.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ nhá»¯ng campaign khÃ´ng thiáº¿u content. Post váº«n lÃªn Ä‘á»u, key visual váº«n cÃ³, ads váº«n cháº¡y, landing page váº«n dá»±ng, sales váº«n nháº­n lead. NhÆ°ng khi nhÃ¬n toÃ n bá»™, cáº£m giÃ¡c ráº¥t rÃµ: má»—i thá»© Ä‘ang nÃ³i má»™t kiá»ƒu.',
      },
      {
        type: 'paragraph',
        text: 'Social Ä‘i theo má»™t hÆ°á»›ng, ads kÃ©o báº±ng angle khÃ¡c, landing page ká»ƒ cÃ¢u chuyá»‡n khÃ¡c. Event cÃ³ booth, QR vÃ  form nhÆ°ng thiáº¿u má»™t cÃ¢u Ä‘á»ƒ khÃ¡ch nhá»›. Sales nháº­n lead mÃ  khÃ´ng biáº¿t nÃªn má»Ÿ cuá»™c tÆ° váº¥n theo hÆ°á»›ng nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» khÃ´ng pháº£i team khÃ´ng lÃ m viá»‡c. Campaign thiáº¿u má»™t cÃ¢u neo váº­n hÃ nh Ä‘á»§ rÃµ. Tagline váº­n hÃ nh khÃ´ng thay strategy, nhÆ°ng giÃºp strategy Ä‘i vÃ o tá»«ng output báº±ng má»™t trá»¥c ngÃ´n ngá»¯ chung.',
      },
      { type: 'heading', text: 'Tagline váº­n hÃ nh khÃ´ng pháº£i slogan cho hay' },
      {
        type: 'paragraph',
        text: 'Nghe Ä‘áº¿n tagline, nhiá»u ngÆ°á»i nghÄ© ngay má»™t cÃ¢u tháº­t kÃªu, dá»… nhá»› vÃ  dÃ¹ng lÃ¢u dÃ i cho thÆ°Æ¡ng hiá»‡u. Trong campaign, tagline váº­n hÃ nh cÃ³ má»¥c Ä‘Ã­ch khÃ¡c: Ä‘Ã³ lÃ  cÃ¢u ngáº¯n giÃºp team bÃ¡m direction cá»§a má»™t giai Ä‘oáº¡n cá»¥ thá»ƒ.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cáº§n lÃ m rÃµ campaign Ä‘ang nÃ³i vá» váº¥n Ä‘á» gÃ¬, khÃ¡ch nÃªn nhá»› Ä‘iá»u gÃ¬, vÃ¬ sao Ä‘Ã¡ng quan tÃ¢m, sales nÃªn má»Ÿ cÃ¢u chuyá»‡n báº±ng angle nÃ o, landing page tiáº¿p ná»‘i thÃ´ng Ä‘iá»‡p nÃ o vÃ  follow-up phÃ¢n nhÃ³m theo logic gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u nÃ y cÃ³ thá»ƒ chÆ°a pháº£i copy quáº£ng cÃ¡o cuá»‘i cÃ¹ng. NhÆ°ng nÃ³ pháº£i Ä‘á»§ rÃµ Ä‘á»ƒ ná»™i bá»™ khÃ´ng tá»± diá»…n giáº£i campaign theo nhiá»u hÆ°á»›ng.',
      },
      { type: 'visual', variant: 'tagline-vs-slogan' },
      { type: 'heading', text: 'VÃ¬ sao campaign cáº§n má»™t cÃ¢u neo?' },
      {
        type: 'paragraph',
        text: 'Campaign thÆ°á»ng cÃ³ founder duyá»‡t hÆ°á»›ng, content viáº¿t post, design lÃ m key visual, ads chá»n angle, IT dá»±ng page vÃ  form, event team chuáº©n bá»‹ booth, sales tÆ° váº¥n, marketing follow-up data. KhÃ´ng cÃ³ cÃ¢u neo, má»—i ngÆ°á»i sáº½ tá»± chá»n má»™t cÃ¡ch hiá»ƒu.',
      },
      {
        type: 'paragraph',
        text: 'Tagline váº­n hÃ nh nÃ©n direction thÃ nh cÃ¢u dá»… nhá»›, lÃ m tiÃªu chuáº©n kiá»ƒm tra output, giá»¯ thÃ´ng Ä‘iá»‡p nháº¥t quÃ¡n giá»¯a cÃ¡c kÃªnh, giÃºp sales tiáº¿p ná»‘i cÃ¢u chuyá»‡n vÃ  giÃºp follow-up cÃ³ logic. NÃ³ cÅ©ng gá»£i Ã½ dashboard nÃªn theo tÃ­n hiá»‡u nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ xem tagline nhÆ° Ä‘Æ°á»ng ray ngÃ´n ngá»¯. NÃ³ khÃ´ng lÃ m campaign tá»± hay hÆ¡n, nhÆ°ng giÃºp cÃ¡c Ä‘áº§u viá»‡c Ã­t lá»‡ch khá»i cÃ¹ng má»™t hÆ°á»›ng.',
      },
      { type: 'visual', variant: 'operating-tagline-role' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch táº¡o tagline váº­n hÃ nh tá»« campaign direction.',
      },
      { type: 'heading', text: 'Má»™t tagline váº­n hÃ nh tá»‘t nÃªn cÃ³ Ä‘áº·c Ä‘iá»ƒm gÃ¬?' },
      {
        type: 'list',
        items: [
          'RÃµ váº¥n Ä‘á»: team hiá»ƒu campaign Ä‘ang Ä‘Ã¡nh vÃ o Ä‘iá»u gÃ¬.',
          'Gáº§n insight: báº¯t tá»« Ä‘iá»u khÃ¡ch Ä‘ang vÆ°á»›ng, hiá»ƒu sai hoáº·c cáº§n Ä‘Æ°á»£c thuyáº¿t phá»¥c.',
          'CÃ³ hÆ°á»›ng giáº£i phÃ¡p: khÃ´ng chá»‰ nháº¯c ná»—i Ä‘au mÃ  má»Ÿ ra hÆ°á»›ng nhÃ¬n hoáº·c hÃ nh Ä‘á»™ng.',
          'Äá»§ ngáº¯n Ä‘á»ƒ team nhá»› vÃ  dÃ¹ng lÃ m cÃ¢u neo trong lÃºc triá»ƒn khai.',
          'Äá»§ cá»¥ thá»ƒ Ä‘á»ƒ lá»c post, visual, landing section vÃ  sales script.',
          'DÃ¹ng Ä‘Æ°á»£c trÃªn nhiá»u touchpoint: social, ads, page, event, sales vÃ  follow-up.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tagline váº­n hÃ nh khÃ´ng cáº§n lÃ  cÃ¢u hay nháº¥t. NÃ³ cáº§n lÃ  cÃ¢u há»¯u dá»¥ng nháº¥t cho campaign.',
      },
      { type: 'heading', text: 'Tagline yáº¿u lÃ m campaign lá»‡ch nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Tagline kiá»ƒu â€œgiáº£i phÃ¡p toÃ n diá»‡n cho doanh nghiá»‡pâ€ quÃ¡ chung nÃªn team khÃ´ng biáº¿t váº¥n Ä‘á» cá»¥ thá»ƒ. Má»™t cÃ¢u nghe Ä‘áº¹p nhÆ°ng khÃ´ng gá»£i Ä‘Æ°á»£c angle sáº½ khiáº¿n content khÃ³ viáº¿t vÃ  sales khÃ³ má»Ÿ chuyá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'Tagline chá»‰ nÃ³i sáº£n pháº©m sáº½ kÃ©o campaign vá» giá»›i thiá»‡u tÃ­nh nÄƒng. Tagline chá»‰ xuáº¥t hiá»‡n trÃªn poster khiáº¿n landing page, form vÃ  follow-up khÃ´ng tiáº¿p ná»‘i. Náº¿u khÃ´ng cÃ³ hÆ°á»›ng hÃ nh Ä‘á»™ng, khÃ¡ch nghe xong cÅ©ng khÃ´ng biáº¿t bÆ°á»›c tiáº¿p theo.',
      },
      {
        type: 'paragraph',
        text: 'Tagline yáº¿u khÃ´ng lÃ m campaign tháº¥t báº¡i ngay, nhÆ°ng khiáº¿n viá»‡c Ä‘á»“ng bá»™ vÃ  rÃºt bÃ i há»c sau campaign khÃ³ hÆ¡n.',
      },
      { type: 'visual', variant: 'weak-vs-strong-tagline' },
      { type: 'heading', text: 'Tagline giÃºp tá»«ng kÃªnh bÃ¡m cÃ¹ng concept' },
      {
        type: 'paragraph',
        text: 'Vá»›i social, má»—i post cÃ³ thá»ƒ khai thÃ¡c má»™t gÃ³c khÃ¡c nhÆ°ng váº«n quanh cÃ¢u chuyá»‡n chÃ­nh. Vá»›i ads, team cÃ³ thá»ƒ test nhiá»u hook mÃ  khÃ´ng kÃ©o sai ká»³ vá»ng. Landing page dÃ¹ng tagline Ä‘á»ƒ tiáº¿p ná»‘i lá»i há»©a á»Ÿ hero, proof, CTA vÃ  form.',
      },
      {
        type: 'paragraph',
        text: 'á»ž event, booth, demo, QR form, sample kit, brochure vÃ  cÃ¢u chÃ o khÃ¡ch cÃ³ cÃ¹ng concept. Sales biáº¿t khÃ¡ch Ä‘Ã£ Ä‘Æ°á»£c dáº«n báº±ng cÃ¢u chuyá»‡n nÃ o. Follow-up khÃ´ng chá»‰ cáº£m Æ¡n chung chung mÃ  tiáº¿p tá»¥c Ä‘Ãºng angle vÃ  nhu cáº§u ban Ä‘áº§u.',
      },
      { type: 'visual', variant: 'tagline-alignment-map' },
      { type: 'heading', text: 'VÃ­ dá»¥: campaign B2B cho nhÃ³m kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Giáº£ sá»­ má»™t doanh nghiá»‡p lÃ m event nhá» Ä‘á»ƒ giá»›i thiá»‡u bá»™ giáº£i phÃ¡p váº­t liá»‡u cho kiáº¿n trÃºc sÆ°. KhÃ´ng cÃ³ tagline váº­n hÃ nh, post má»i nÃ³i vá» sáº£n pháº©m má»›i, booth trÆ°ng nhiá»u máº«u, landing page liá»‡t kÃª tÃ­nh nÄƒng, sales nÃ³i theo catalogue vÃ  follow-up chá»‰ gá»­i lá»i cáº£m Æ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t tagline theo hÆ°á»›ng â€œBá»™ giáº£i phÃ¡p bá» máº·t cho nhá»¯ng case thi cÃ´ng khÃ³â€ váº­n hÃ nh tá»‘t hÆ¡n vÃ¬ nÃ³i Ä‘Ãºng bá»‘i cáº£nh chuyÃªn mÃ´n, khÃ´ng chá»‰ nÃ³i sáº£n pháº©m. Social cÃ³ thá»ƒ ká»ƒ cÃ¡c tÃ¬nh huá»‘ng bá» máº·t khÃ³; ads kÃ©o nhÃ³m quan tÃ¢m case á»©ng dá»¥ng; landing page chia theo tá»«ng váº¥n Ä‘á».',
      },
      {
        type: 'paragraph',
        text: 'Booth trÆ°ng sample theo case. QR form há»i kiáº¿n trÃºc sÆ° Ä‘ang quan tÃ¢m tÃ¬nh huá»‘ng nÃ o. Sales follow-up theo nhÃ³m nhu cáº§u Ä‘Ã£ chá»n. CÃ¹ng campaign Ä‘Ã³, tagline lÃ m social, ads, page, event vÃ  follow-up ná»‘i thÃ nh má»™t cÃ¢u chuyá»‡n.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign B2B cÃ³ tagline váº­n hÃ nh giÃºp social, booth, landing page vÃ  follow-up Ä‘á»“ng bá»™.',
      },
      { type: 'heading', text: 'CÃ¡ch táº¡o má»™t tagline váº­n hÃ nh' },
      {
        type: 'paragraph',
        text: 'BÆ°á»›c Ä‘áº§u khÃ´ng pháº£i nghÄ© cÃ¢u chá»¯ mÃ  lÃ  viáº¿t rÃµ direction: objective, audience, insight, offer vÃ  proof. Sau Ä‘Ã³ chá»n má»™t váº¥n Ä‘á» trung tÃ¢m; Ä‘á»«ng cá»‘ Ä‘á»ƒ má»™t campaign Ã´m má»i váº¥n Ä‘á».',
      },
      {
        type: 'paragraph',
        text: 'Viáº¿t báº±ng ngÃ´n ngá»¯ khÃ¡ch hiá»ƒu, trÃ¡nh thuáº­t ngá»¯ ná»™i bá»™. Test cÃ¢u Ä‘Ã³ vá»›i tá»«ng touchpoint: content cÃ³ triá»ƒn khai nhiá»u angle Ä‘Æ°á»£c khÃ´ng, ads cÃ³ kÃ©o Ä‘Ãºng ká»³ vá»ng, landing page cÃ³ tiáº¿p ná»‘i, sales cÃ³ má»Ÿ chuyá»‡n vÃ  follow-up cÃ³ nuÃ´i nhu cáº§u khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i cÃ¹ng, dÃ¹ng tagline Ä‘á»ƒ lá»c output. Náº¿u post, visual hoáº·c script khÃ´ng bÃ¡m Ä‘Æ°á»£c cÃ¢u neo, output Ä‘Ã³ cÃ³ thá»ƒ Ä‘ang lá»‡ch direction. Táº¡o tagline lÃ  quÃ¡ trÃ¬nh nÃ©n hÆ°á»›ng campaign, khÃ´ng pháº£i ngá»“i nghÄ© má»™t cÃ¢u hoa má»¹.',
      },
      { type: 'heading', text: 'Checklist kiá»ƒm tra tagline váº­n hÃ nh' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi chá»‘t, hÃ£y kiá»ƒm tra tagline cÃ³ bÃ¡m objective, audience vÃ  insight, cÃ³ gá»£i hÆ°á»›ng giáº£i phÃ¡p, Ä‘á»§ ngáº¯n Ä‘á»ƒ nhá»›, Ä‘á»§ rá»™ng Ä‘á»ƒ triá»ƒn khai nhÆ°ng Ä‘á»§ cá»¥ thá»ƒ Ä‘á»ƒ lá»c output, Ä‘á»“ng thá»i ná»‘i Ä‘Æ°á»£c Ä‘áº¿n tÃ­n hiá»‡u Ä‘o.',
      },
      { type: 'visual', variant: 'operating-tagline-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n operating tagline worksheet cho campaign nhá».',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi Ä‘áº·t tagline campaign' },
      {
        type: 'list',
        items: [
          'NghÄ© tagline trÆ°á»›c khi cÃ³ direction.',
          'Viáº¿t cÃ¢u quÃ¡ chung, campaign nÃ o cÅ©ng dÃ¹ng Ä‘Æ°á»£c.',
          'DÃ¹ng ngÃ´n ngá»¯ ná»™i bá»™ mÃ  khÃ¡ch khÃ´ng hiá»ƒu.',
          'Cá»‘ lÃ m cÃ¢u tháº­t hay nhÆ°ng khÃ´ng há»— trá»£ triá»ƒn khai.',
          'Chá»‰ Ä‘áº·t tagline trÃªn key visual, khÃ´ng Ä‘Æ°a vÃ o page, sales vÃ  follow-up.',
          'KhÃ´ng nÃ³i rÃµ váº¥n Ä‘á» hoáº·c hÆ°á»›ng giáº£i phÃ¡p.',
          'KhÃ´ng giÃºp phÃ¢n loáº¡i data sau campaign.',
          'Má»—i kÃªnh tá»± biáº¿n tagline thÃ nh thÃ´ng Ä‘iá»‡p khÃ¡c.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tagline khÃ´ng cá»©u Ä‘Æ°á»£c direction sai. NhÆ°ng direction Ä‘Ãºng vá»›i tagline yáº¿u váº«n dá»… máº¥t trá»¥c khi Ä‘i qua nhiá»u ngÆ°á»i vÃ  nhiá»u kÃªnh.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra tagline khÃ´ng nÃªn lÃ  pháº§n chá»¯ nghÄ©a nghÄ© sÃ¡t ngÃ y launch Ä‘á»ƒ Ä‘áº·t lÃªn visual. NÃ³ nÃªn xuáº¥t hiá»‡n sá»›m, nhÆ° cÃ¡ch team nÃ©n campaign thÃ nh má»™t cÃ¢u Ä‘á»§ rÃµ Ä‘á»ƒ cÃ¹ng lÃ m.',
      },
      {
        type: 'paragraph',
        text: 'Tagline tá»‘t khÃ´ng nháº¥t thiáº¿t khiáº¿n khÃ¡ch nhá»› mÃ£i. NhÆ°ng nÃ³ giÃºp team nhá»› Ä‘Ãºng Ä‘iá»u cáº§n nÃ³i trong vÃ i tuáº§n campaign cháº¡y, vÃ  lÃ m buá»•i duyá»‡t bá»›t cáº£m tÃ­nh: post cÃ³ bÃ¡m cÃ¢u neo, visual cÃ³ rÃµ váº¥n Ä‘á», page cÃ³ tiáº¿p lá»i há»©a, sales vÃ  follow-up cÃ³ cÃ¹ng angle khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Tagline váº­n hÃ nh khÃ´ng pháº£i pháº§n trang trÃ­. NÃ³ lÃ  cÃ´ng cá»¥ quáº£n trá»‹ thÃ´ng Ä‘iá»‡p trong campaign.',
      },
      { type: 'heading', text: 'Má»™t cÃ¢u neo cho nhiá»u Ä‘iá»ƒm cháº¡m' },
      {
        type: 'paragraph',
        text: 'Campaign cÃ³ nhiá»u ngÆ°á»i cÃ¹ng lÃ m vÃ  nhiá»u Ä‘iá»ƒm cháº¡m. Má»™t tagline váº­n hÃ nh rÃµ giÃºp content, design, ads, landing page, event, sales script vÃ  follow-up Ã­t lá»‡ch khá»i nhau. GiÃ¡ trá»‹ cá»§a nÃ³ náº±m á»Ÿ kháº£ nÄƒng dáº«n viá»‡c, khÃ´ng chá»‰ á»Ÿ viá»‡c nghe hay.',
      },
    ],
    cta: 'Náº¿u team chuáº©n bá»‹ campaign má»›i, Ä‘á»«ng chá»‰ há»i â€œtagline nghe cÃ³ hay khÃ´ngâ€. HÃ£y há»i: cÃ¢u nÃ y cÃ³ giÃºp content, design, ads, landing page, sales vÃ  follow-up cÃ¹ng bÃ¡m má»™t hÆ°á»›ng khÃ´ng?',
  },
  {
    title: 'Tá»« event offline Ä‘áº¿n data follow-up: Ä‘á»«ng Ä‘á»ƒ sá»± kiá»‡n chá»‰ dá»«ng á»Ÿ check-in',
    slug: 'tu-event-offline-den-data-follow-up-dung-de-su-kien-chi-dung-o-check-in',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-company-trip-night-group-photo-01.jpg",
                "alt": "Large group photo at a night event backdrop",
                "caption": "Night event group photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-exhibition-outdoor-demo-01.jpg",
                      "alt": "Outdoor exhibition booth activity",
                      "caption": "Exhibition booth activity",
                      "width": 2048,
                      "height": 1536,
                      "fit": "cover",
                      "afterHeading": "Data follow-up pháº£i Ä‘Æ°á»£c thiáº¿t káº¿ trÆ°á»›c event"
                }
          ]
    },
    excerpt:
      'Má»™t event offline khÃ´ng nÃªn chá»‰ Ä‘Æ°á»£c Ä‘Ã¡nh giÃ¡ báº±ng sá»‘ ngÆ°á»i check-in, booth Ä‘Ã´ng hay áº£nh recap Ä‘áº¹p. Náº¿u event lÃ  má»™t pháº§n cá»§a campaign, team cáº§n thiáº¿t káº¿ luá»“ng data tá»« trÆ°á»›c event, trong event Ä‘áº¿n sau event: ai tham dá»±, há» quan tÃ¢m váº¥n Ä‘á» gÃ¬, cáº§n follow-up báº±ng ná»™i dung nÃ o, sales xá»­ lÃ½ tá»›i Ä‘Ã¢u vÃ  cÃ³ táº¡o ra cÆ¡ há»™i tháº­t khÃ´ng.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t event offline cÃ³ thá»ƒ nhÃ¬n ráº¥t thÃ nh cÃ´ng trong ngÃ y diá»…n ra: booth Ä‘Ã´ng, khÃ¡ch check-in Ä‘á»u, hÃ¬nh áº£nh Ä‘áº¹p, bÃ i recap cÃ³ tÆ°Æ¡ng tÃ¡c. NhÆ°ng vÃ i ngÃ y sau, khi há»i data Ä‘Ã£ Ä‘Æ°á»£c phÃ¢n loáº¡i chÆ°a, khÃ¡ch quan tÃ¢m gÃ¬, sales Ä‘Ã£ follow-up ai vÃ  cÃ³ cuá»™c háº¹n nÃ o Ä‘Æ°á»£c táº¡o ra khÃ´ng, nhiá»u team báº¯t Ä‘áº§u im láº·ng.',
      },
      {
        type: 'paragraph',
        text: 'Event dá»… táº¡o cáº£m giÃ¡c thÃ nh cÃ´ng vÃ¬ cÃ³ hÃ¬nh áº£nh tháº­t. NhÆ°ng check-in chÆ°a pháº£i outcome. KhÃ¡ch ghÃ© booth chÆ°a tá»± Ä‘á»™ng thÃ nh lead cháº¥t lÆ°á»£ng; QR scan chÆ°a tá»± Ä‘á»™ng thÃ nh cÆ¡ há»™i. Danh sÃ¡ch dÃ i mÃ  thiáº¿u ngá»¯ cáº£nh váº«n ráº¥t khÃ³ xá»­ lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u event lÃ  campaign, nÃ³ cáº§n luá»“ng sau event, khÃ´ng chá»‰ áº£nh recap vÃ  file liÃªn há»‡.',
      },
      { type: 'heading', text: 'Event khÃ´ng káº¿t thÃºc khi khÃ¡ch check-in' },
      {
        type: 'paragraph',
        text: 'Check-in chá»‰ xÃ¡c nháº­n ai xuáº¥t hiá»‡n. NÃ³ chÆ°a cho biáº¿t khÃ¡ch thuá»™c nhÃ³m nÃ o, quan tÃ¢m váº¥n Ä‘á» gÃ¬, cÃ³ nhu cáº§u tháº­t khÃ´ng, Ä‘Ã£ tÆ°Æ¡ng tÃ¡c vá»›i booth hoáº·c sáº£n pháº©m nÃ o, cáº§n tÃ i liá»‡u gÃ¬ vÃ  sales nÃªn tiáº¿p tá»¥c cÃ¢u chuyá»‡n theo hÆ°á»›ng nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Event cÃ³ thá»ƒ táº¡o registration, attendance, booth visit, QR scan, interest tag, conversation note, follow-up status, meeting, quote vÃ  outcome. KhÃ´ng cáº§n Ä‘á»§ má»i lá»›p, nhÆ°ng tÃ­n hiá»‡u pháº£i phá»¥c vá»¥ objective.',
      },
      { type: 'visual', variant: 'event-checkin-vs-followup' },
      { type: 'heading', text: 'Data follow-up pháº£i Ä‘Æ°á»£c thiáº¿t káº¿ trÆ°á»›c event' },
      {
        type: 'paragraph',
        text: 'Äá»£i event káº¿t thÃºc má»›i há»i â€œlÃ m gÃ¬ vá»›i danh sÃ¡ch nÃ y?â€ thÆ°á»ng lÃ  quÃ¡ muá»™n. TrÆ°á»›c event, team cáº§n chá»‘t objective, loáº¡i data cáº§n thu, field trong form Ä‘Äƒng kÃ½, QR táº¡i booth dáº«n vá» Ä‘Ã¢u, cÃ¡ch phÃ¢n nhÃ³m nhu cáº§u, field sales cáº§n vÃ  tÃ­n hiá»‡u dashboard sáº½ Ä‘á»c.',
      },
      {
        type: 'paragraph',
        text: 'Follow-up trong 24â€“48 giá» cÅ©ng cáº§n Ä‘Æ°á»£c chuáº©n bá»‹: nhÃ³m nÃ o nháº­n tÃ i liá»‡u nÃ o, nhÃ³m nÃ o cáº§n sales liÃªn há»‡, nhÃ³m nÃ o chá»‰ nÃªn Ä‘Æ°á»£c nuÃ´i dÆ°á»¡ng thÃªm. Data pháº£i Ä‘i tá»« direction vÃ  tagline váº­n hÃ nh, khÃ´ng pháº£i thu Ä‘Æ°á»£c gÃ¬ rá»“i tÃ­nh sau.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥, náº¿u event hÆ°á»›ng tá»›i kiáº¿n trÃºc sÆ° quan tÃ¢m case thi cÃ´ng khÃ³, form khÃ´ng nÃªn chá»‰ há»i tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i. CÃ³ thá»ƒ cho khÃ¡ch chá»§ Ä‘á»™ng chá»n nhÃ³m há» muá»‘n tÃ¬m hiá»ƒu nhÆ° chá»‘ng tháº¥m, ngoÃ i trá»i, gá»—, kim loáº¡i, nhÃ  ven biá»ƒn, cáº£i táº¡o, demo máº«u hoáº·c tÆ° váº¥n ká»¹ thuáº­t.',
      },
      {
        type: 'paragraph',
        text: 'Thu Ã­t, Ä‘Ãºng ngá»¯ cáº£nh vÃ  minh báº¡ch tá»‘t hÆ¡n má»™t form dÃ i khÃ´ng ai xá»­ lÃ½.',
      },
      { type: 'heading', text: 'Luá»“ng data cá»§a má»™t event offline' },
      {
        type: 'paragraph',
        text: 'Luá»“ng báº¯t Ä‘áº§u tá»« pre-event content Ä‘á»ƒ khÃ¡ch hiá»ƒu lÃ½ do tham gia, rá»“i registration thu thÃ´ng tin vÃ  nhu cáº§u ban Ä‘áº§u. Check-in xÃ¡c nháº­n ai tháº­t sá»± Ä‘áº¿n. Táº¡i booth, team ghi nháº­n demo, sample, tÆ° váº¥n hoáº·c cÃ¢u há»i Ä‘Ã¡ng chÃº Ã½.',
      },
      {
        type: 'paragraph',
        text: 'QR hoáº·c interest form giÃºp khÃ¡ch tá»± chá»n case quan tÃ¢m. Data sau Ä‘Ã³ Ä‘Æ°á»£c segment theo vai trÃ², nhu cáº§u vÃ  má»©c Ä‘á»™ quan tÃ¢m; follow-up theo Ä‘Ãºng ngá»¯ cáº£nh; sales cáº­p nháº­t New, Contacted, Qualified, Meeting, Quoted, Won/Lost hoáº·c Follow-up later.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard cuá»‘i luá»“ng cho biáº¿t event táº¡o tÃ­n hiá»‡u gÃ¬ vÃ  pháº§n nÃ o cáº§n cáº£i thiá»‡n.',
      },
      { type: 'visual', variant: 'offline-event-data-flow' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough luá»“ng event offline Ä‘áº¿n data follow-up.',
      },
      { type: 'heading', text: 'Event nÃªn thu data gÃ¬?' },
      {
        type: 'paragraph',
        text: 'NhÃ³m cÆ¡ báº£n gá»“m há» tÃªn, Ä‘iá»‡n thoáº¡i hoáº·c email, Ä‘Æ¡n vá»‹ vÃ  vai trÃ² náº¿u phÃ¹ há»£p vá»›i B2B. NhÃ³m source/context ghi kÃªnh, session, booth, QR hoáº·c form Ä‘á»ƒ biáº¿t tÃ­n hiá»‡u xuáº¥t hiá»‡n á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'NhÃ³m interest/need cho khÃ¡ch chá»n váº¥n Ä‘á», sáº£n pháº©m, giáº£i phÃ¡p hoáº·c má»©c Ä‘á»™ cáº§n há»— trá»£: tÃ¬m hiá»ƒu, cáº§n máº«u, demo, tÆ° váº¥n hay bÃ¡o giÃ¡. Follow-up preference cÃ³ thá»ƒ ghi tÃ i liá»‡u muá»‘n nháº­n, kÃªnh liÃªn há»‡ vÃ  thá»i Ä‘iá»ƒm phÃ¹ há»£p náº¿u khÃ¡ch chá»§ Ä‘á»™ng cung cáº¥p.',
      },
      {
        type: 'paragraph',
        text: 'Sau event cáº§n sales status vÃ  note ngáº¯n. Data cÃ³ giÃ¡ trá»‹ khi khÃ¡ch hiá»ƒu ngá»¯ cáº£nh, sales dÃ¹ng Ä‘Æ°á»£c vÃ  team xá»­ lÃ½ cÃ³ trÃ¡ch nhiá»‡m.',
      },
      { type: 'visual', variant: 'event-data-capture-map' },
      { type: 'heading', text: 'Äá»«ng gá»­i má»™t tin nháº¯n chung cho táº¥t cáº£' },
      {
        type: 'paragraph',
        text: 'Gá»­i lá»i cáº£m Æ¡n chung khÃ´ng sai, nhÆ°ng chÆ°a Ä‘á»§. NgÆ°á»i quÃ©t QR nháº­n solution kit nÃªn nháº­n Ä‘Ãºng tÃ i liá»‡u. NgÆ°á»i muá»‘n demo cáº§n lá»‹ch háº¹n. NgÆ°á»i há»i case ká»¹ thuáº­t cáº§n case liÃªn quan. NgÆ°á»i chá»‰ check-in cÃ³ thá»ƒ nháº­n recap kÃ¨m lá»±a chá»n nhu cáº§u, thay vÃ¬ bá»‹ sales gá»i ngay.',
      },
      {
        type: 'paragraph',
        text: 'NhÃ³m cÃ³ nhu cáº§u rÃµ chuyá»ƒn sales sá»›m; nhÃ³m chÆ°a sáºµn sÃ ng vÃ o luá»“ng nurturing phÃ¹ há»£p. Follow-up tá»‘t lÃ  nháº¯n Ä‘Ãºng vÃ  tÃ´n trá»ng ngá»¯ cáº£nh.',
      },
      { type: 'heading', text: 'Timeline follow-up sau event' },
      {
        type: 'paragraph',
        text: 'Trong 0â€“24 giá», team lÃ m sáº¡ch data, gáº¯n tag, gá»­i tÃ i liá»‡u Ä‘Ã£ há»©a vÃ  Æ°u tiÃªn high intent. Trong 24â€“48 giá», sales liÃªn há»‡ nhÃ³m nhu cáº§u rÃµ vÃ  cáº­p nháº­t status.',
      },
      {
        type: 'paragraph',
        text: 'Trong 3â€“7 ngÃ y, follow-up báº±ng ná»™i dung há»¯u Ã­ch, demo hoáº·c booking phÃ¹ há»£p. Sau 2â€“4 tuáº§n, nurture, cáº­p nháº­t quote/outcome vÃ  tá»•ng káº¿t campaign.',
      },
      { type: 'visual', variant: 'post-event-followup-timeline' },
      { type: 'heading', text: 'VÃ­ dá»¥: event B2B cho nhÃ³m kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Giáº£ sá»­ doanh nghiá»‡p tá»• chá»©c booth giá»›i thiá»‡u giáº£i phÃ¡p váº­t liá»‡u chuyÃªn biá»‡t. Náº¿u dá»«ng á»Ÿ check-in, team cÃ³ danh sÃ¡ch khÃ¡ch, áº£nh booth Ä‘Ã´ng, bÃ i recap vÃ  vÃ i sá»‘ Ä‘iá»‡n thoáº¡i nhÆ°ng khÃ´ng biáº¿t ai quan tÃ¢m case nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u thiáº¿t káº¿ data flow, QR táº¡i booth dáº«n Ä‘áº¿n form cho khÃ¡ch chá»n chá»‘ng tháº¥m, bá» máº·t ngoÃ i trá»i, gá»—, kim loáº¡i, nhÃ  ven biá»ƒn, cáº£i táº¡o, demo máº«u hoáº·c tÆ° váº¥n ká»¹ thuáº­t. Booth staff ghi chÃº cÃ¢u há»i Ä‘Ã¡ng chÃº Ã½; data Ä‘Æ°á»£c tag theo nhu cáº§u.',
      },
      {
        type: 'paragraph',
        text: 'Sales gá»­i tÃ i liá»‡u vÃ  gá»i theo case Ä‘Ã£ chá»n. Dashboard theo QR scan, form submit, nhÃ³m nhu cáº§u, Contacted, Qualified, Demo Booked vÃ  Quote. Team khÃ´ng chá»‰ biáº¿t ai Ä‘Ã£ Ä‘áº¿n mÃ  cÃ²n biáº¿t nÃªn nÃ³i tiáº¿p vá» Ä‘iá»u gÃ¬.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t event offline cÃ³ booth Ä‘Ã´ng nhÆ°ng data follow-up yáº¿u.',
      },
      { type: 'heading', text: 'Event data nÃªn Ä‘i vÃ o Ä‘Ã¢u?' },
      {
        type: 'paragraph',
        text: 'Data khÃ´ng nÃªn náº±m ráº£i á»Ÿ file check-in, file QR, nhÃ³m Zalo, sheet riÃªng cá»§a sales, report marketing vÃ  inbox. Tá»‘i thiá»ƒu, hÃ£y gom vá» má»™t CRM hoáº·c Sheet cÃ³ cáº¥u trÃºc chung.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i record nÃªn cÃ³ contact, source/event, interest, note, owner, follow-up date, status, next action vÃ  outcome. Team nhá» chÆ°a cáº§n CRM phá»©c táº¡p, nhÆ°ng cáº§n má»™t nguá»“n chung.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i khiáº¿n event dá»«ng á»Ÿ check-in' },
      {
        type: 'list',
        items: [
          'Chá»‰ Ä‘o ngÆ°á»i tham dá»±, khÃ´ng Ä‘o tÆ°Æ¡ng tÃ¡c vÃ  follow-up.',
          'QR form chá»‰ há»i tÃªn, sá»‘ Ä‘iá»‡n thoáº¡i mÃ  khÃ´ng há»i nhu cáº§u.',
          'KhÃ´ng gáº¯n source, booth hoáº·c session nÃªn data máº¥t ngá»¯ cáº£nh.',
          'Event staff khÃ´ng ghi láº¡i cÃ¢u há»i tháº­t cá»§a khÃ¡ch.',
          'Data náº±m á»Ÿ nhiá»u file; sales nháº­n danh sÃ¡ch thÃ´ vÃ  gá»i chung chung.',
          'Follow-up quÃ¡ trá»… hoáº·c gá»­i cÃ¹ng má»™t ná»™i dung cho táº¥t cáº£.',
          'KhÃ´ng cÃ³ sales status sau follow-up.',
          'Recap cÃ³ hÃ¬nh Ä‘áº¹p nhÆ°ng dashboard khÃ´ng biáº¿t event táº¡o cÆ¡ há»™i gÃ¬.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Event khÃ´ng yáº¿u vÃ¬ thiáº¿u hÃ¬nh áº£nh. NÃ³ yáº¿u khi thiáº¿u há»‡ thá»‘ng ná»‘i tÆ°Æ¡ng tÃ¡c tháº­t vá»›i follow-up tháº­t.',
      },
      { type: 'heading', text: 'Checklist event offline Ä‘áº¿n data follow-up' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c event, kiá»ƒm tra objective, audience, direction, QR/form, owner data vÃ  káº¿ hoáº¡ch follow-up. Sau event, kiá»ƒm tra segmentation, sales handoff, status, dashboard vÃ  bÃ i há»c cho campaign tiáº¿p theo.',
      },
      { type: 'visual', variant: 'event-followup-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n event data follow-up sheet template.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra lÃºc má»›i lÃ m event, ráº¥t dá»… bá»‹ cuá»‘n vÃ o booth, backdrop, quÃ  táº·ng, khÃ¡ch Ä‘Ã´ng vÃ  áº£nh Ä‘áº¹p. Nhá»¯ng pháº§n Ä‘Ã³ quan trá»ng nhÆ°ng chÆ°a Ä‘á»§.',
      },
      {
        type: 'paragraph',
        text: 'Lá»£i tháº¿ lá»›n cá»§a event offline lÃ  tÃ­n hiá»‡u tháº­t: ngÆ°á»i Ä‘á»©ng láº¡i há»i, cáº§m máº«u, quÃ©t QR, ká»ƒ váº¥n Ä‘á», xin tÃ i liá»‡u hoáº·c háº¹n tÆ° váº¥n. Nhá»¯ng tÃ­n hiá»‡u nÃ y quÃ½ hÆ¡n má»™t lÆ°á»£t check-in, nhÆ°ng chá»‰ cÃ³ giÃ¡ trá»‹ khi Ä‘Æ°á»£c ghi nháº­n vÃ  xá»­ lÃ½ tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'Event khÃ´ng chá»‰ lÃ  má»™t ngÃ y tá»• chá»©c. NÃ³ lÃ  Ä‘iá»ƒm cháº¡m má»Ÿ ra data, quan há»‡ vÃ  follow-up.',
      },
      { type: 'heading', text: 'Thiáº¿t káº¿ luá»“ng sau event tá»« trÆ°á»›c event' },
      {
        type: 'paragraph',
        text: 'Team cáº§n biáº¿t sáº½ thu data gÃ¬, phÃ¢n nhÃ³m tháº¿ nÃ o, follow-up ra sao, sales cáº­p nháº­t status á»Ÿ Ä‘Ã¢u vÃ  dashboard Ä‘á»c outcome nÃ o. Khi luá»“ng nÃ y rÃµ, event cÃ³ thá»ƒ tiáº¿p tá»¥c táº¡o giÃ¡ trá»‹ sau khi khÃ¡ch rá»i booth; khÃ´ng pháº£i báº±ng spam, mÃ  báº±ng cuá»™c trÃ² chuyá»‡n Ä‘Ãºng ngá»¯ cáº£nh.',
      },
    ],
    cta: 'Náº¿u team chuáº©n bá»‹ event offline, Ä‘á»«ng chá»‰ há»i booth Ä‘áº·t á»Ÿ Ä‘Ã¢u, backdrop Ä‘áº¹p chÆ°a hay recap viáº¿t gÃ¬. HÃ£y há»i: sau check-in, data Ä‘i Ä‘Ã¢u, ai follow-up, báº±ng ná»™i dung gÃ¬ vÃ  team sáº½ Ä‘o cÆ¡ há»™i sau event tháº¿ nÃ o?',
  },
  {
    title: 'Campaign brief nÃªn cÃ³ gÃ¬ Ä‘á»ƒ team khÃ´ng lÃ m lá»‡ch hÆ°á»›ng?',
    slug: 'campaign-brief-nen-co-gi-de-team-khong-lam-lech-huong',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-team-backdrop-01.jpg",
                "alt": "Team posing in front of an exhibition backdrop",
                "caption": "Exhibition team group photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-exhibition-outdoor-portrait-01.jpg",
                      "alt": "Person standing outdoors near an event area",
                      "caption": "Outdoor event portrait",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "Khi khÃ´ng cÃ³ brief, team lá»‡ch hÆ°á»›ng á»Ÿ Ä‘Ã¢u?"
                }
          ]
    },
    excerpt:
      'Má»™t campaign brief tá»‘t khÃ´ng cáº§n dÃ i, nhÆ°ng pháº£i Ä‘á»§ rÃµ Ä‘á»ƒ content, design, ads, IT, landing page vÃ  sales cÃ¹ng hiá»ƒu campaign Ä‘ang Ä‘i vá» Ä‘Ã¢u. Brief nÃªn gom má»¥c tiÃªu, tá»‡p khÃ¡ch, insight, message, tagline váº­n hÃ nh, offer, proof, channel role, tracking, data follow-up vÃ  owner trÆ°á»›c khi team báº¯t Ä‘áº§u sáº£n xuáº¥t output.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t campaign nhá» Ä‘Ã´i khi khÃ´ng yáº¿u vÃ¬ thiáº¿u ngÆ°á»i lÃ m. Ai cÅ©ng cÃ³ viá»‡c: content viáº¿t post, design lÃ m visual, ads set campaign, IT dá»±ng landing page, sales chá» data Ä‘á»ƒ gá»i. NhÆ°ng khi ghÃ©p láº¡i, má»i thá»© khÃ´ng tháº­t sá»± cÃ¹ng má»™t hÆ°á»›ng.',
      },
      {
        type: 'paragraph',
        text: 'Content ká»ƒ má»™t cÃ¢u chuyá»‡n, design nháº¥n má»™t Ä‘iá»ƒm khÃ¡c, ads dÃ¹ng hook khÃ¡c Ä‘á»ƒ kÃ©o traffic, landing page khÃ´ng tiáº¿p ná»‘i lá»i há»©a. Sales nháº­n lead mÃ  khÃ´ng biáº¿t khÃ¡ch Ä‘Ã£ Ä‘Æ°á»£c dáº«n báº±ng thÃ´ng Ä‘iá»‡p nÃ o; founder pháº£i duyá»‡t tá»«ng chi tiáº¿t vÃ¬ thiáº¿u tiÃªu chuáº©n chung.',
      },
      {
        type: 'paragraph',
        text: 'Campaign thiáº¿u brief váº­n hÃ nh: báº£n Ä‘á»“ chung ngÄƒn má»—i ngÆ°á»i tá»± diá»…n giáº£i má»™t hÆ°á»›ng.',
      },
      { type: 'heading', text: 'Campaign brief khÃ´ng pháº£i file thá»§ tá»¥c' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team xem brief nhÆ° file pháº£i lÃ m cho Ä‘á»§ quy trÃ¬nh. Brief Ä‘Ãºng nghÄ©a pháº£i tráº£ lá»i nhá»¯ng cÃ¢u há»i thá»±c táº¿: campaign nháº±m má»¥c tiÃªu gÃ¬, nÃ³i vá»›i ai, khÃ¡ch Ä‘ang vÆ°á»›ng gÃ¬, team muá»‘n há» hiá»ƒu Ä‘iá»u gÃ¬, operating tagline, offer vÃ  CTA lÃ  gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Brief cÅ©ng cáº§n xÃ¡c Ä‘á»‹nh proof nÃ o lÃ m message Ä‘Ã¡ng tin, social, ads, landing page, event vÃ  sales script Ä‘Ã³ng vai trÃ² gÃ¬, data nÃ o cáº§n thu, ai phá»¥ trÃ¡ch pháº§n nÃ o vÃ  khi nÃ o launch.',
      },
      {
        type: 'paragraph',
        text: 'Brief khÃ´ng cáº§n dÃ i, nhÆ°ng pháº£i giÃºp má»i ngÆ°á»i hiá»ƒu cÃ¹ng campaign.',
      },
      { type: 'visual', variant: 'campaign-brief-role' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch viáº¿t campaign brief cho team nhá».',
      },
      { type: 'heading', text: 'Khi khÃ´ng cÃ³ brief, team lá»‡ch hÆ°á»›ng á»Ÿ Ä‘Ã¢u?' },
      {
        type: 'list',
        items: [
          'Content viáº¿t theo cáº£m giÃ¡c vÃ¬ khÃ´ng biáº¿t váº¥n Ä‘á» vÃ  angle chÃ­nh.',
          'Design lÃ m Ä‘áº¹p nhÆ°ng khÃ´ng lÃ m rÃµ message, proof hoáº·c CTA.',
          'Ads cÃ³ hook kÃ©o click nhÆ°ng táº¡o ká»³ vá»ng khÃ¡c landing page.',
          'Landing page cÃ³ thÃ´ng tin nhÆ°ng thiáº¿u proof, CTA hoáº·c field cho follow-up.',
          'Sales gá»i báº±ng script cÅ©, khÃ´ng tiáº¿p ná»‘i cÃ¢u chuyá»‡n campaign.',
          'IT dá»±ng form nhÆ°ng khÃ´ng biáº¿t event, source, form_name vÃ  field cáº§n Ä‘o.',
          'Sau campaign cÃ³ reach, click, lead tá»•ng nhÆ°ng khÃ´ng biáº¿t angle hoáº·c kÃªnh nÃ o táº¡o tÃ­n hiá»‡u tháº­t.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ brief, founder pháº£i dá»‹ch láº¡i campaign cho tá»«ng ngÆ°á»i, vá»«a tá»‘n thá»i gian vá»«a dá»… lá»‡ch.',
      },
      { type: 'visual', variant: 'no-brief-misalignment' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign bá»‹ lá»‡ch vÃ¬ content, ads, landing page vÃ  sales khÃ´ng dÃ¹ng chung brief.',
      },
      { type: 'heading', text: 'Má»™t campaign brief tá»‘i thiá»ƒu nÃªn cÃ³ nhá»¯ng gÃ¬?' },
      {
        type: 'list',
        items: [
          'Campaign Name: tÃªn gá»i chung Ä‘á»ƒ team khÃ´ng dÃ¹ng nhiá»u phiÃªn báº£n.',
          'Objective: awareness, lead, event data, demo booking, trial, sales opportunity hoáº·c follow-up.',
          'Audience: tá»‡p chÃ­nh, tá»‡p phá»¥ vÃ  ngÆ°á»i áº£nh hÆ°á»Ÿng quyáº¿t Ä‘á»‹nh náº¿u cÃ³.',
          'Problem / Insight: Ä‘iá»u khÃ¡ch Ä‘ang vÆ°á»›ng, hiá»ƒu sai hoáº·c cáº§n Ä‘Æ°á»£c thuyáº¿t phá»¥c.',
          'Core Message: má»™t cÃ¢u rÃµ vá» Ä‘iá»u campaign muá»‘n khÃ¡ch hiá»ƒu.',
          'Operating Tagline: cÃ¢u neo giÃºp output khÃ´ng lá»‡ch direction.',
          'Offer / CTA: Ä‘Äƒng kÃ½, quÃ©t QR, nháº­n tÆ° váº¥n, táº£i tÃ i liá»‡u, Ä‘áº·t lá»‹ch hoáº·c nháº­n máº«u.',
          'Proof Assets: case, hÃ¬nh tháº­t, demo, sample, testimonial, dá»¯ liá»‡u hoáº·c tÃ i liá»‡u ká»¹ thuáº­t.',
          'Channel Role: social, ads, page, event vÃ  sales lÃ m pháº§n nÃ o.',
          'Landing / Form: section, CTA, field dá»¯ liá»‡u vÃ  yÃªu cáº§u tráº£i nghiá»‡m.',
          'Tracking / Measurement: PageView, CTA click, QR scan, form submit, lead, qualified, meeting hoáº·c quote.',
          'Owner / Timeline: ngÆ°á»i phá»¥ trÃ¡ch, deadline, ngÃ y launch vÃ  ngÆ°á»i duyá»‡t cuá»‘i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Brief tá»‘i thiá»ƒu cáº§n rÃµ, Ä‘á»§ vÃ  Ä‘Æ°á»£c dÃ¹ng tháº­t.',
      },
      { type: 'visual', variant: 'campaign-brief-anatomy' },
      { type: 'heading', text: 'Brief pháº£i nÃ³i rÃµ vai trÃ² tá»«ng kÃªnh' },
      {
        type: 'paragraph',
        text: 'Brief chá»‰ cÃ³ message chung váº«n chÆ°a Ä‘á»§. Social cÃ³ thá»ƒ táº¡o bá»‘i cáº£nh vÃ  giáº£i thÃ­ch váº¥n Ä‘á». Ads kÃ©o Ä‘Ãºng audience vÃ o landing page, form hoáº·c event. Landing page tiáº¿p ná»‘i message, Ä‘Æ°a proof vÃ  chá»‘t CTA.',
      },
      {
        type: 'paragraph',
        text: 'Event hoáº·c booth táº¡o tráº£i nghiá»‡m tháº­t, demo, sample vÃ  QR data. Sales script ná»‘i tiáº¿p cÃ¢u chuyá»‡n vÃ  phÃ¢n loáº¡i nhu cáº§u. Follow-up gá»­i Ä‘Ãºng tÃ i liá»‡u theo segment. Dashboard Ä‘o tÃ­n hiá»‡u Ä‘á»ƒ biáº¿t campaign táº¡o ra gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c kÃªnh khÃ´ng cáº§n nÃ³i y há»‡t nhau. ChÃºng cáº§n lÃ m Ä‘Ãºng vai trÃ² Ä‘á»ƒ cÃ¹ng phá»¥c vá»¥ má»™t direction.',
      },
      { type: 'heading', text: 'Brief giÃºp duyá»‡t output dá»… hÆ¡n' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ brief, pháº£n há»“i dá»… trá»Ÿ thÃ nh â€œchÆ°a hayâ€, â€œmÃ u chÆ°a thÃ­châ€, â€œpost thiáº¿u lá»±câ€ hoáº·c â€œlanding page chÆ°a Ä‘Ã£â€. ÄÃ¢y lÃ  cáº£m nháº­n há»£p lá»‡, nhÆ°ng khÃ³ giÃºp ngÆ°á»i thá»±c hiá»‡n biáº¿t pháº£i sá»­a theo tiÃªu chuáº©n nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ brief, team há»i cá»¥ thá»ƒ hÆ¡n: output cÃ³ bÃ¡m audience vÃ  insight, giá»¯ core message, dÃ¹ng Ä‘Ãºng proof, CTA rÃµ, landing page tiáº¿p ná»‘i ads, sales dÃ¹ng Ä‘Æ°á»£c angle vÃ  tracking Ä‘o Ä‘Æ°á»£c tÃ­n hiá»‡u khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Brief khÃ´ng xoÃ¡ háº¿t tranh luáº­n. NÃ³ lÃ m cuá»™c trao Ä‘á»•i cÃ³ tiÃªu chuáº©n vÃ  gáº§n má»¥c tiÃªu campaign hÆ¡n.',
      },
      { type: 'visual', variant: 'brief-to-execution-flow' },
      { type: 'heading', text: 'VÃ­ dá»¥: campaign B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Giáº£ sá»­ doanh nghiá»‡p lÃ m event giá»›i thiá»‡u giáº£i phÃ¡p váº­t liá»‡u chuyÃªn biá»‡t. Campaign Name lÃ  â€œSolution Kit cho case thi cÃ´ng khÃ³â€. Objective lÃ  thu data kiáº¿n trÃºc sÆ° quan tÃ¢m case ká»¹ thuáº­t vÃ  táº¡o cuá»™c háº¹n, demo hoáº·c follow-up tÆ° váº¥n.',
      },
      {
        type: 'paragraph',
        text: 'Audience gá»“m kiáº¿n trÃºc sÆ°, designer vÃ  nhÃ  tháº§u cho nhÃ  phá»‘, biá»‡t thá»±, cÃ´ng trÃ¬nh cáº£i táº¡o hoáº·c bá» máº·t khÃ³. Insight: há» khÃ´ng chá»‰ cáº§n catalogue, mÃ  cáº§n giáº£i phÃ¡p á»©ng dá»¥ng cho case tháº­t Ä‘á»ƒ tá»± tin tÆ° váº¥n chá»§ nhÃ .',
      },
      {
        type: 'paragraph',
        text: 'Core Message chuyá»ƒn tá»« bÃ¡n sáº£n pháº©m láº» sang bá»™ giáº£i phÃ¡p theo tá»«ng case. Operating Tagline lÃ  â€œBá»™ giáº£i phÃ¡p bá» máº·t cho nhá»¯ng case thi cÃ´ng khÃ³â€. CTA lÃ  quÃ©t QR nháº­n solution kit, chá»n case, Ä‘Äƒng kÃ½ test máº«u hoáº·c tÆ° váº¥n.',
      },
      {
        type: 'paragraph',
        text: 'Proof gá»“m sample box, hÃ¬nh cÃ´ng trÃ¬nh, demo bá» máº·t vÃ  tÃ i liá»‡u ká»¹ thuáº­t ngáº¯n. Social ká»ƒ case, ads kÃ©o Ä‘Ãºng tá»‡p, landing page chia theo váº¥n Ä‘á», booth trÆ°ng sample, sales follow-up theo case. Dashboard Ä‘á»c QR scan, form submit, interest tag, Contacted, Qualified, Demo Booked vÃ  Quote.',
      },
      {
        type: 'paragraph',
        text: 'Khi brief rÃµ, post, booth, QR, form, page, follow-up vÃ  dashboard dÃ¹ng cÃ¹ng má»™t logic.',
      },
      { type: 'heading', text: 'Brief nÃªn ngáº¯n, nhÆ°ng khÃ´ng nÃªn mÆ¡ há»“' },
      {
        type: 'paragraph',
        text: 'Brief quÃ¡ dÃ i dá»… khÃ´ng ai Ä‘á»c; quÃ¡ ngáº¯n láº¡i khiáº¿n má»—i ngÆ°á»i tá»± Ä‘iá»n pháº§n cÃ²n thiáº¿u. Vá»›i team nhá», brief nÃªn Ä‘á»c Ä‘Æ°á»£c trong 10â€“15 phÃºt, dÃ¹ng ngÃ´n ngá»¯ rÃµ, Ã­t thuáº­t ngá»¯ vÃ  khÃ´ng cáº§n trÃ¬nh bÃ y mÃ u mÃ¨.',
      },
      {
        type: 'paragraph',
        text: 'Ghi rÃµ pháº§n Ä‘Ã£ chá»‘t, pháº§n cÃ²n cáº§n quyáº¿t Ä‘á»‹nh, owner tá»«ng Ä‘áº§u viá»‡c, ngÃ y review trÆ°á»›c launch vÃ  checklist launch. Brief tá»‘t khÃ´ng pháº£i brief dÃ y; Ä‘Ã³ lÃ  brief Ä‘Æ°á»£c má»Ÿ ra khi team viáº¿t, thiáº¿t káº¿, dá»±ng page vÃ  duyá»‡t output.',
      },
      { type: 'heading', text: 'Checklist trÆ°á»›c khi gá»­i brief cho team' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi triá»ƒn khai, hÃ£y kiá»ƒm tra objective, audience, insight, message, tagline, offer, proof, channel role, landing/form, tracking, owner vÃ  cÃ¡ch Ä‘o sau campaign. Má»™t khoáº£ng trá»‘ng chÆ°a rÃµ á»Ÿ brief thÆ°á»ng trá»Ÿ thÃ nh nhiá»u vÃ²ng sá»­a á»Ÿ execution.',
      },
      { type: 'visual', variant: 'campaign-brief-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign brief template 1 trang cho SME.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi viáº¿t campaign brief' },
      {
        type: 'list',
        items: [
          'Viáº¿t brief khi output Ä‘Ã£ gáº§n hoÃ n thÃ nh.',
          'Brief chá»‰ cÃ³ lá»‹ch post, khÃ´ng cÃ³ direction.',
          'Audience quÃ¡ chung, ai cÅ©ng lÃ  khÃ¡ch hÃ ng.',
          'Insight mÃ´ táº£ sáº£n pháº©m thay vÃ¬ váº¥n Ä‘á» cá»§a khÃ¡ch.',
          'Core message quÃ¡ dÃ i hoáº·c chá»©a quÃ¡ nhiá»u Ã½.',
          'Tagline nghe hay nhÆ°ng khÃ´ng giÃºp triá»ƒn khai.',
          'Offer, CTA vÃ  proof khÃ´ng rÃµ.',
          'KhÃ´ng ghi role tá»«ng kÃªnh, tracking, data hoáº·c follow-up.',
          'KhÃ´ng cÃ³ owner vÃ  deadline nÃªn cÃ´ng viá»‡c trÃ´i theo cáº£m giÃ¡c.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Brief yáº¿u lÃ m campaign lá»‡ch tá»« trÆ°á»›c khi post Ä‘áº§u tiÃªn Ä‘Æ°á»£c Ä‘Äƒng.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra viáº¿t brief khÃ´ng pháº£i pháº§n tá»‘n thá»i gian nháº¥t. Tá»‘n thá»i gian hÆ¡n lÃ  sá»­a Ä‘i sá»­a láº¡i vÃ¬ má»—i ngÆ°á»i hiá»ƒu campaign theo má»™t hÆ°á»›ng.',
      },
      {
        type: 'paragraph',
        text: 'Brief ngáº¯n nhÆ°ng rÃµ giÃºp content biáº¿t viáº¿t gÃ¬, design biáº¿t nháº¥n gÃ¬, ads biáº¿t kÃ©o tÃ­n hiá»‡u nÃ o, IT biáº¿t form vÃ  tracking cáº§n gÃ¬, sales biáº¿t follow-up báº±ng angle nÃ o, cÃ²n founder cÃ³ tiÃªu chuáº©n Ä‘á»ƒ duyá»‡t.',
      },
      {
        type: 'paragraph',
        text: 'Campaign brief khÃ´ng pháº£i tÃ i liá»‡u lÃ m cho chuyÃªn nghiá»‡p. NÃ³ lÃ  cÃ´ng cá»¥ Ä‘á»ƒ team nhá» Ä‘á»¡ lá»‡ch hÆ°á»›ng khi cháº¡y tháº­t.',
      },
      { type: 'heading', text: 'Má»™t báº£n Ä‘á»“ chung trÆ°á»›c khi báº¯t Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Campaign brief cáº§n gom objective, audience, insight, message, operating tagline, offer, proof, channel role, landing/form, tracking/data, owner vÃ  timeline. NÃ³ khÃ´ng cáº§n dÃ i, nhÆ°ng pháº£i Ä‘á»§ rÃµ Ä‘á»ƒ content, design, ads, IT vÃ  sales cÃ¹ng bÃ¡m.',
      },
    ],
    cta: 'Náº¿u team chuáº©n bá»‹ campaign má»›i, Ä‘á»«ng chá»‰ giao tá»«ng Ä‘áº§u viá»‡c rá»i ráº¡c. HÃ£y viáº¿t brief ngáº¯n trÆ°á»›c: campaign nÃ³i vá»›i ai, muá»‘n há» hiá»ƒu gÃ¬, tin gÃ¬, lÃ m gÃ¬ vÃ  team sáº½ Ä‘o báº±ng dá»¯ liá»‡u nÃ o.',
  },
  {
    title: 'Landing page cho campaign nÃªn cÃ³ nhá»¯ng pháº§n nÃ o?',
    slug: 'landing-page-cho-campaign-nen-co-nhung-phan-nao',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-networking-night-waterfront-group-01.jpg",
                "alt": "Small group standing at a night waterfront event",
                "caption": "Night networking group photo",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-exhibition-booth-crowd-01.jpg",
                      "alt": "People gathered around an exhibition booth",
                      "caption": "Exhibition booth crowd",
                      "width": 2048,
                      "height": 1536,
                      "fit": "cover",
                      "afterHeading": "TrÆ°á»›c khi viáº¿t page, hÃ£y quay láº¡i campaign brief"
                }
          ]
    },
    excerpt:
      'Landing page cho campaign khÃ´ng nÃªn chá»‰ lÃ  má»™t trang giá»›i thiá»‡u sáº£n pháº©m. NÃ³ pháº£i tiáº¿p ná»‘i Ä‘Ãºng lá»i há»©a tá»« social, ads hoáº·c event; lÃ m rÃµ váº¥n Ä‘á», offer, proof, CTA, form data, tracking vÃ  bÆ°á»›c follow-up tiáº¿p theo. Má»™t landing page tá»‘t giÃºp campaign khÃ´ng bá»‹ Ä‘á»©t Ä‘oáº¡n giá»¯a traffic vÃ  sales.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t campaign cÃ³ thá»ƒ chuáº©n bá»‹ ká»¹ social vÃ  ads: post cÃ³ concept, visual cÃ³ tagline, quáº£ng cÃ¡o kÃ©o Ä‘Æ°á»£c traffic. NhÆ°ng khi khÃ¡ch click vÃ o landing page, há» láº¡i tháº¥y trang giá»›i thiá»‡u sáº£n pháº©m chung chung, khÃ´ng tiáº¿p ná»‘i lá»i há»©a, khÃ´ng rÃµ bÆ°á»›c tiáº¿p theo vÃ  form cÅ©ng khÃ´ng thu Ä‘á»§ data cho follow-up.',
      },
      {
        type: 'paragraph',
        text: 'Landing page thÆ°á»ng bá»‹ lÃ m sau cÃ¹ng vÃ  Ä‘Æ°á»£c xem nhÆ° nÆ¡i chá»©a thÃ´ng tin. Trong campaign, nÃ³ lÃ  Ä‘iá»ƒm chuyá»ƒn tá»« attention sang action: lÃ m rÃµ khÃ¡ch Ä‘áº¿n vÃ¬ Ä‘iá»u gÃ¬, cáº§n tháº¥y proof nÃ o, nÃªn lÃ m gÃ¬, data nÃ o cáº§n thu vÃ  sales tiáº¿p tá»¥c ra sao.',
      },
      {
        type: 'paragraph',
        text: 'Landing page lÃ  Ä‘iá»ƒm chá»‘t direction, proof, CTA vÃ  data.',
      },
      { type: 'heading', text: 'Landing page campaign khÃ¡c trang giá»›i thiá»‡u cÃ´ng ty tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Trang giá»›i thiá»‡u cÃ´ng ty phá»¥c vá»¥ nháº­n diá»‡n tá»•ng quan: doanh nghiá»‡p lÃ  ai, cÃ³ sáº£n pháº©m, nÄƒng lá»±c, lá»‹ch sá»­, Ä‘á»™i ngÅ© vÃ  cÃ¡ch liÃªn há»‡ nÃ o. Landing page campaign phá»¥c vá»¥ má»™t audience, problem, message, offer vÃ  CTA cá»¥ thá»ƒ.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cáº§n data flow vÃ  follow-up cá»¥ thá»ƒ. Náº¿u campaign nÃ³i vá» â€œsolution kit cho case thi cÃ´ng khÃ³â€, hero pháº£i tiáº¿p ná»‘i ngay váº¥n Ä‘á» Ä‘Ã£ há»©a trong social, ads hoáº·c event.',
      },
      { type: 'visual', variant: 'campaign-landing-page-role' },
      { type: 'heading', text: 'TrÆ°á»›c khi viáº¿t page, hÃ£y quay láº¡i campaign brief' },
      {
        type: 'paragraph',
        text: 'Landing page khÃ´ng nÃªn Ä‘Æ°á»£c viáº¿t tá»« file sáº£n pháº©m rá»i ráº¡c. HÃ£y quay láº¡i objective: page cáº§n táº¡o lead, booking, QR scan, download hay form submit? Audience lÃ  ai, há» vÆ°á»›ng Ä‘iá»u gÃ¬, core message vÃ  operating tagline nÃ o cáº§n Ä‘Æ°á»£c tiáº¿p ná»‘i?',
      },
      {
        type: 'paragraph',
        text: 'Brief cho biáº¿t offer, CTA, proof, nguá»“n traffic, field form vÃ  event tracking. Page khÃ´ng báº¯t Ä‘áº§u tá»« layout, mÃ  tá»« hÃ nh Ä‘á»™ng cáº§n táº¡o.',
      },
      { type: 'heading', text: 'Landing page campaign nÃªn cÃ³ nhá»¯ng pháº§n nÃ o?' },
      {
        type: 'list',
        items: [
          'Hero / Campaign Promise: nÃ³i vá»›i ai, giáº£i quyáº¿t váº¥n Ä‘á» gÃ¬ vÃ  CTA nÃ o; tiáº¿p ná»‘i Ä‘Ãºng lá»i há»©a trÆ°á»›c Ä‘Ã³.',
          'Problem / Context: lÃ m khÃ¡ch nháº­n ra Ä‘Ã¢y lÃ  bá»‘i cáº£nh cá»§a mÃ¬nh, khÃ´ng cáº§n ká»ƒ quÃ¡ dÃ i.',
          'Solution / Campaign Concept: má»Ÿ tagline thÃ nh hÆ°á»›ng giáº£i phÃ¡p cÃ³ thá»ƒ hiá»ƒu Ä‘Æ°á»£c.',
          'Offer Detail: khÃ¡ch nháº­n tÃ i liá»‡u, tÆ° váº¥n, demo, sample, solution kit, lá»‹ch háº¹n hay bÃ¡o giÃ¡ gÃ¬.',
          'Proof / Trust: case, hÃ¬nh tháº­t, demo, sample, testimonial, before-after hoáº·c dá»¯ liá»‡u phÃ¹ há»£p.',
          'How It Works: sau Ä‘Äƒng kÃ½ ai liÃªn há»‡, khi nÃ o vÃ  khÃ¡ch nháº­n Ä‘Æ°á»£c gÃ¬.',
          'Form / CTA: Ä‘á»§ data Ä‘á»ƒ follow-up, CTA rÃµ vÃ  nháº¥t quÃ¡n.',
          'FAQ / Objections: tráº£ lá»i Ä‘á»‘i tÆ°á»£ng phÃ¹ há»£p, thá»i gian, chi phÃ­, cÃ¡ch nháº­n tÃ i liá»‡u hoáº·c chuáº©n bá»‹ cáº§n thiáº¿t.',
          'Thank-you / Tracking: success state, event Ä‘o lÆ°á»ng vÃ  nÆ¡i data Ä‘Æ°á»£c chuyá»ƒn tá»›i.',
        ],
      },
      { type: 'visual', variant: 'landing-page-section-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cáº¥u trÃºc landing page cho campaign nhá».',
      },
      { type: 'heading', text: 'Hero pháº£i khá»›p lá»i há»©a tá»« social, ads hoáº·c event' },
      {
        type: 'paragraph',
        text: 'Message mismatch lÃ  lá»—i phá»• biáº¿n. Ads nÃ³i â€œnháº­n bá»™ giáº£i phÃ¡p cho case thi cÃ´ng khÃ³â€, nhÆ°ng hero láº¡i nÃ³i â€œchÃºng tÃ´i cung cáº¥p sáº£n pháº©m cháº¥t lÆ°á»£ng caoâ€. KhÃ¡ch click vÃ o sáº½ khÃ´ng cháº¯c mÃ¬nh Ä‘Ã£ Ä‘áº¿n Ä‘Ãºng nÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'Hero nÃªn lÃ m rÃµ audience, problem, cÃ¢u neo vÃ  CTA, cÃ³ thá»ƒ thÃªm hint proof. NÃ³ khÃ´ng cáº§n nÃ³i háº¿t, nhÆ°ng pháº£i tiáº¿p ná»‘i lá»i há»©a.',
      },
      { type: 'visual', variant: 'message-continuity-to-landing' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t landing page campaign bá»‹ rÆ¡i vÃ¬ ads nÃ³i má»™t chuyá»‡n nhÆ°ng hero nÃ³i chuyá»‡n khÃ¡c.',
      },
      { type: 'heading', text: 'Form khÃ´ng chá»‰ Ä‘á»ƒ láº¥y sá»‘ Ä‘iá»‡n thoáº¡i' },
      {
        type: 'paragraph',
        text: 'Form pháº£i phá»¥c vá»¥ follow-up. Tá»‘i thiá»ƒu cÃ³ thá»ƒ gá»“m tÃªn, Ä‘iá»‡n thoáº¡i hoáº·c email; vá»›i B2B cÃ³ thá»ƒ thÃªm vai trÃ², cÃ´ng ty, nhu cáº§u hoáº·c case quan tÃ¢m. Má»—i field Ä‘Æ°á»£c há»i nÃªn cÃ³ lÃ½ do vÃ  khÃ¡ch hiá»ƒu data sáº½ Ä‘Æ°á»£c dÃ¹ng trong ngá»¯ cáº£nh nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Campaign event khÃ´ng nÃªn chá»‰ há»i contact. Lá»±a chá»n tÃ i liá»‡u, demo, sample hoáº·c tÆ° váº¥n giÃºp sales má»Ÿ Ä‘Ãºng cÃ¢u chuyá»‡n. Record cáº§n source, campaign, page hoáº·c QR.',
      },
      { type: 'visual', variant: 'campaign-form-data-capture' },
      { type: 'heading', text: 'Proof pháº£i Ä‘Ãºng vá»›i lá»i há»©a' },
      {
        type: 'paragraph',
        text: 'Proof khÃ´ng chá»‰ lÃ  logo hoáº·c lá»i khen chung. NÃ³ cÃ³ thá»ƒ lÃ  hÃ¬nh tháº­t, case á»©ng dá»¥ng, demo, sample, before-after, testimonial, dá»¯ liá»‡u ká»¹ thuáº­t, quy trÃ¬nh hoáº·c FAQ xá»­ lÃ½ pháº£n biá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u campaign nÃ³i vá» case thi cÃ´ng khÃ³, proof nÃªn cho tháº¥y tá»«ng bá» máº·t, Ä‘iá»u kiá»‡n vÃ  cÃ¡ch xá»­ lÃ½. Chá»‰ Ä‘Æ°a áº£nh sáº£n pháº©m Ä‘áº¹p chÆ°a Ä‘á»§. Proof tá»‘t tráº£ lá»i Ä‘Ãºng Ä‘iá»u khÃ¡ch Ä‘ang nghi ngá».',
      },
      { type: 'heading', text: 'Landing page pháº£i ná»‘i vá»›i sales vÃ  follow-up' },
      {
        type: 'paragraph',
        text: 'Sau form submit, sales cáº§n biáº¿t khÃ¡ch Ä‘áº¿n tá»« campaign nÃ o, quan tÃ¢m váº¥n Ä‘á» gÃ¬, Ä‘Ã£ tháº¥y offer nÃ o, chá»n case nÃ o vÃ  muá»‘n nháº­n tÃ i liá»‡u, sample, demo hay tÆ° váº¥n.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u page nÃ³i vá» solution kit, sales khÃ´ng nÃªn má»Ÿ Ä‘áº§u báº±ng catalogue chung. Náº¿u khÃ¡ch chá»n case, cuá»™c gá»i nÃªn Ä‘i tá»« case Ä‘Ã³. Landing page khÃ´ng káº¿t thÃºc á»Ÿ form; nÃ³ má»Ÿ Ä‘Æ°á»ng cho cuá»™c trÃ² chuyá»‡n tiáº¿p theo.',
      },
      { type: 'heading', text: 'Tracking cáº§n cÃ³ trÃªn landing page campaign' },
      {
        type: 'paragraph',
        text: 'Tá»‘i thiá»ƒu, team nÃªn biáº¿t PageView, CTA click, hotline, Zalo hoáº·c Messenger click náº¿u cÃ³, form submit success, Lead event, QR scan vá»›i campaign offline, thank-you state, source/campaign/UTM vÃ  CRM/Sheet status.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c field nhÆ° form_name, page_location vÃ  campaign_name giÃºp Ä‘á»‘i chiáº¿u. Tracking cáº§n cho biáº¿t traffic vÃ o, hÃ nh Ä‘á»™ng, nÆ¡i data Ä‘áº¿n vÃ  sales status.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥: landing page B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Vá»›i campaign vá» case thi cÃ´ng khÃ³, hero cÃ³ thá»ƒ dÃ¹ng cÃ¢u â€œBá»™ giáº£i phÃ¡p bá» máº·t cho nhá»¯ng case thi cÃ´ng khÃ³â€, cÃ¹ng CTA nháº­n solution kit, Ä‘Äƒng kÃ½ test máº«u hoáº·c chá»n case cáº§n tÆ° váº¥n.',
      },
      {
        type: 'paragraph',
        text: 'Problem nÃ³i ráº±ng kiáº¿n trÃºc sÆ° khÃ´ng thiáº¿u catalogue; Ä‘iá»u khÃ³ lÃ  tÃ¬m giáº£i phÃ¡p Ä‘Ã¡ng tin theo bá» máº·t vÃ  Ä‘iá»u kiá»‡n. Solution chia nhÃ³m chá»‘ng tháº¥m, ngoÃ i trá»i, gá»—, kim loáº¡i, cáº£i táº¡o hoáº·c nhÃ  ven biá»ƒn. Proof dÃ¹ng sample, hÃ¬nh cÃ´ng trÃ¬nh, demo vÃ  ghi chÃº á»©ng dá»¥ng.',
      },
      {
        type: 'paragraph',
        text: 'Form há»i contact, vai trÃ², cÃ´ng ty, case quan tÃ¢m vÃ  nhu cáº§u nháº­n tÃ i liá»‡u, máº«u, demo hay tÆ° váº¥n. Thank-you xÃ¡c nháº­n bÆ°á»›c tiáº¿p theo. Dashboard theo QR scan, form submit, interest tag, Contacted, Qualified, Demo Booked vÃ  Quote.',
      },
      {
        type: 'paragraph',
        text: 'Page tá»‘t khÃ´ng pháº£i page dÃ i nháº¥t. NÃ³ ná»‘i Ä‘Æ°á»£c message Ä‘áº¿n data follow-up.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi lÃ m landing page campaign' },
      {
        type: 'list',
        items: [
          'Dá»±ng page sau cÃ¹ng nÃªn khÃ´ng bÃ¡m campaign brief.',
          'Hero nÃ³i vá» cÃ´ng ty thay vÃ¬ lá»i há»©a campaign.',
          'Social hoáº·c ads nÃ³i má»™t chuyá»‡n, page nÃ³i chuyá»‡n khÃ¡c.',
          'Liá»‡t kÃª tÃ­nh nÄƒng nhÆ°ng thiáº¿u problem vÃ  proof.',
          'CTA mÆ¡ há»“ hoáº·c cÃ³ quÃ¡ nhiá»u CTA ngang nhau.',
          'Form chá»‰ láº¥y contact, khÃ´ng há»i nhu cáº§u hoáº·c case.',
          'KhÃ´ng cÃ³ thank-you state, tracking CTA, form vÃ  lead.',
          'Data vá» má»™t nÆ¡i nhÆ°ng sales khÃ´ng biáº¿t context.',
          'Mobile khÃ³ Ä‘á»c, form khÃ³ Ä‘iá»n hoáº·c thiáº¿u FAQ cÆ¡ báº£n.',
          'KhÃ´ng nÃ³i rÃµ bÆ°á»›c tiáº¿p theo sau submit.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Landing page yáº¿u lÃ m campaign rÆ¡i á»Ÿ giá»¯a: cÃ³ traffic nhÆ°ng khÃ´ng táº¡o data Ä‘á»§ tá»‘t Ä‘á»ƒ Ä‘i tiáº¿p.',
      },
      { type: 'heading', text: 'Checklist landing page cho campaign' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c launch, hÃ£y kiá»ƒm tra message continuity, offer, proof, CTA, form, success state, tracking, source vÃ  mobile. Äá»“ng thá»i xÃ¡c nháº­n sales biáº¿t data Ä‘áº¿n tá»« Ä‘Ã¢u vÃ  follow-up báº±ng angle nÃ o.',
      },
      { type: 'visual', variant: 'campaign-landing-page-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign landing page wireframe template.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra landing page khÃ´ng chá»‰ lÃ  pháº§n ká»¹ thuáº­t hoáº·c thiáº¿t káº¿. ÄÃ¢y lÃ  nÆ¡i campaign bá»‹ kiá»ƒm tra ráº¥t tháº­t: social nÃ³i hay nhÆ°ng page khÃ´ng tiáº¿p ná»‘i thÃ¬ khÃ¡ch rÆ¡i; ads kÃ©o click nhÆ°ng offer má» thÃ¬ khÃ¡ch rÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'Form láº¥y data quÃ¡ chung thÃ¬ sales rÆ¡i. KhÃ´ng tracking thÃ¬ dashboard rÆ¡i. Thiáº¿u thank-you vÃ  follow-up thÃ¬ quan há»‡ rÆ¡i. Page khÃ´ng cáº§n phá»©c táº¡p, nhÆ°ng pháº£i giá»¯ dÃ²ng cháº£y tá»« attention Ä‘áº¿n action.',
      },
      {
        type: 'paragraph',
        text: 'Landing page ná»‘i campaign vá»›i há»‡ thá»‘ng bÃ¡n hÃ ng phÃ­a sau.',
      },
      { type: 'heading', text: 'Ná»‘i lá»i há»©a vá»›i hÃ nh Ä‘á»™ng' },
      {
        type: 'paragraph',
        text: 'Landing page campaign cáº§n tiáº¿p ná»‘i lá»i há»©a, lÃ m rÃµ problem vÃ  solution, Ä‘Æ°a proof, chá»‘t offer/CTA, thu data Ä‘Ãºng ngá»¯ cáº£nh, tracking event quan trá»ng vÃ  má»Ÿ Ä‘Æ°á»ng cho sales follow-up. ÄÃ³ lÃ  tiÃªu chuáº©n quan trá»ng hÆ¡n viá»‡c page cÃ³ tháº­t nhiá»u section.',
      },
    ],
    cta: 'Náº¿u team lÃ m campaign má»›i, Ä‘á»«ng chá»‰ há»i landing page Ä‘áº¹p chÆ°a. HÃ£y há»i: page cÃ³ tiáº¿p ná»‘i social/ads/event, thu Ä‘á»§ data, tracking Ä‘Ãºng hÃ nh Ä‘á»™ng vÃ  giÃºp sales biáº¿t follow-up theo cÃ¢u chuyá»‡n nÃ o khÃ´ng?',
  },
  {
    title: 'Sau event nÃªn lÃ m gÃ¬ vá»›i data thu Ä‘Æ°á»£c?',
    slug: 'sau-event-nen-lam-gi-voi-data-thu-duoc',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-stage-team-01.jpg",
                "alt": "Team posing on an exhibition stage",
                "caption": "Exhibition stage team photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-exhibition-brand-shirt-portrait-01.jpg",
                      "alt": "Person in a branded shirt at an exhibition booth",
                      "caption": "Exhibition booth portrait",
                      "width": 640,
                      "height": 960,
                      "fit": "cover",
                      "afterHeading": "BÆ°á»›c 1: gom data tá»« má»i nguá»“n vá» má»™t nÆ¡i"
                }
          ]
    },
    excerpt:
      'Data sau event khÃ´ng nÃªn náº±m cháº¿t trong má»™t file check-in hoáº·c má»™t sheet danh báº¡. Sau event, team cáº§n gom data tá»« nhiá»u nguá»“n, lÃ m sáº¡ch, gáº¯n tag nhu cáº§u, phÃ¢n nhÃ³m má»©c Ä‘á»™ quan tÃ¢m, giao owner follow-up, cáº­p nháº­t sales status vÃ  Ä‘á»c láº¡i dashboard Ä‘á»ƒ biáº¿t event tháº­t sá»± táº¡o ra tÃ­n hiá»‡u gÃ¬.',
    content: [
      {
        type: 'paragraph',
        text: 'Sau má»™t event offline, team thÆ°á»ng cÃ³ danh sÃ¡ch check-in, QR form, danh thiáº¿p, ghi chÃº booth, inbox há»i thÃªm, hÃ¬nh áº£nh, video vÃ  vÃ i cuá»™c trÃ² chuyá»‡n Ä‘Ã¡ng nhá»›. Data nhÃ¬n cÃ³ váº» nhiá»u, nhÆ°ng náº¿u khÃ´ng xá»­ lÃ½ trong 24â€“48 giá» Ä‘áº§u, nÃ³ ráº¥t dá»… thÃ nh má»™t file náº±m yÃªn trong folder.',
      },
      {
        type: 'paragraph',
        text: 'Event xong, team thÆ°á»ng má»‡t vÃ  chuyá»ƒn sang lÃ m recap. Data bá»‹ ráº£i á»Ÿ sheet form, tin nháº¯n Zalo, áº£nh danh thiáº¿p, note cÃ¡ nhÃ¢n vÃ  inbox page. Sales nháº­n danh sÃ¡ch thÃ´ nÃªn follow-up chung chung, lÃ m máº¥t ngá»¯ cáº£nh vá»«a táº¡o táº¡i event.',
      },
      {
        type: 'paragraph',
        text: 'Sau event, team cáº§n biáº¿n data thÃ´ thÃ nh danh sÃ¡ch cÃ³ ngá»¯ cáº£nh.',
      },
      { type: 'heading', text: 'Data sau event cÃ³ â€œháº¡n sá»­ dá»¥ngâ€ vá» ngá»¯ cáº£nh' },
      {
        type: 'paragraph',
        text: 'Data event khÃ¡c contact láº¡nh vÃ¬ khÃ¡ch vá»«a gáº·p team táº¡i booth, quÃ©t QR, cáº§m sample, xem demo, há»i má»™t case hoáº·c nÃ³i nhu cáº§u vá»›i nhÃ¢n sá»± sá»± kiá»‡n. Nhá»¯ng chi tiáº¿t nÃ y táº¡o lÃ½ do tá»± nhiÃªn Ä‘á»ƒ tiáº¿p tá»¥c cuá»™c trÃ² chuyá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'Trong 24â€“48 giá», khÃ¡ch cÃ²n nhá»› vÃ¬ sao há» Ä‘á»ƒ láº¡i thÃ´ng tin. Sau má»™t tuáº§n, kÃ½ á»©c cÃ³ thá»ƒ má»; sau vÃ i tuáº§n khÃ´ng cÃ³ follow-up phÃ¹ há»£p, contact dá»… trá»Ÿ nÃªn láº¡nh. ÄÃ¢y khÃ´ng pháº£i lÃ½ do Ä‘á»ƒ nháº¯n dá»“n dáº­p, mÃ  lÃ  lÃ½ do xá»­ lÃ½ data sá»›m vÃ  Ä‘Ãºng ngá»¯ cáº£nh.',
      },
      { type: 'visual', variant: 'raw-vs-actionable-event-data' },
      { type: 'heading', text: 'BÆ°á»›c 1: gom data tá»« má»i nguá»“n vá» má»™t nÆ¡i' },
      {
        type: 'paragraph',
        text: 'Data cÃ³ thá»ƒ náº±m á»Ÿ registration trÆ°á»›c event, check-in, QR booth, form nháº­n tÃ i liá»‡u, danh thiáº¿p, Zalo, Messenger, note cá»§a booth staff, sheet tá»«ng nhÃ³m, CRM vÃ  áº£nh chá»¥p báº£ng tÃªn. Viá»‡c Ä‘áº§u tiÃªn lÃ  gom vá» má»™t CRM hoáº·c Google Sheet chung.',
      },
      {
        type: 'paragraph',
        text: 'Field tá»‘i thiá»ƒu gá»“m há» tÃªn, Ä‘iá»‡n thoáº¡i hoáº·c email, cÃ´ng ty, vai trÃ², event name, source, booth/session/QR/form, nhu cáº§u, note, owner, status, next action, follow-up date vÃ  outcome.',
      },
      {
        type: 'paragraph',
        text: 'Team nhá» chÆ°a cáº§n CRM phá»©c táº¡p, nhÆ°ng marketing vÃ  sales cáº§n má»™t nguá»“n chung.',
      },
      { type: 'heading', text: 'BÆ°á»›c 2: lÃ m sáº¡ch vÃ  chuáº©n hoÃ¡ data' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c follow-up, hÃ£y kiá»ƒm tra trÃ¹ng Ä‘iá»‡n thoáº¡i hoáº·c email, thÃ´ng tin thiáº¿u, sá»‘ sai Ä‘á»‹nh dáº¡ng, tÃªn cÃ´ng ty viáº¿t nhiá»u kiá»ƒu, source bá»‹ máº¥t, nhu cáº§u bá» trá»‘ng, note náº±m á»Ÿ file khÃ¡c vÃ  record chÆ°a cÃ³ owner.',
      },
      {
        type: 'paragraph',
        text: 'Chuáº©n hoÃ¡ cÃ¡c field nhÆ° event_name, lead_source, interest_tag, lead_type, status, owner vÃ  follow_up_date. ÄÃ¢y khÃ´ng pháº£i viá»‡c hÃ nh chÃ­nh cho Ä‘áº¹p. Data sáº¡ch giÃºp sales gá»i Ä‘Ãºng ngÆ°á»i, giá»¯ context vÃ  giÃºp dashboard tá»•ng há»£p Ä‘Æ°á»£c.',
      },
      { type: 'visual', variant: 'post-event-data-pipeline' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough quy trÃ¬nh xá»­ lÃ½ data sau event báº±ng CRM hoáº·c Google Sheet.',
      },
      { type: 'heading', text: 'BÆ°á»›c 3: gáº¯n tag nhu cáº§u thay vÃ¬ chá»‰ lÆ°u danh sÃ¡ch' },
      {
        type: 'paragraph',
        text: 'TÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i chÆ°a Ä‘á»§ Ä‘á»ƒ follow-up tá»‘t. Team cÃ³ thá»ƒ tag theo vai trÃ² nhÆ° kiáº¿n trÃºc sÆ°, nhÃ  tháº§u, chá»§ nhÃ , Ä‘áº¡i lÃ½ hoáº·c Ä‘á»‘i tÃ¡c; theo nhu cáº§u nhÆ° tÃ i liá»‡u, tÆ° váº¥n ká»¹ thuáº­t, test máº«u, demo, bÃ¡o giÃ¡ hoáº·c há»£p tÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i campaign chuyÃªn mÃ´n, thÃªm case quan tÃ¢m nhÆ° chá»‘ng tháº¥m, ngoÃ i trá»i, gá»—, kim loáº¡i, cáº£i táº¡o, nhÃ  ven biá»ƒn hoáº·c bá» máº·t khÃ³. Ghi nguá»“n cháº¡m lÃ  check-in, booth, QR, workshop, inbox hay giá»›i thiá»‡u vÃ  owner sales phá»¥ trÃ¡ch.',
      },
      {
        type: 'paragraph',
        text: 'Tag chá»‰ cáº§n Ä‘á»§ Ä‘á»ƒ sales khÃ´ng gá»i má»i ngÆ°á»i báº±ng cÃ¹ng má»™t cÃ¢u.',
      },
      { type: 'visual', variant: 'event-data-segmentation' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t event cÃ³ nhiá»u QR form nhÆ°ng khÃ´ng gáº¯n tag nÃªn sales follow-up ráº¥t chung chung.',
      },
      { type: 'heading', text: 'BÆ°á»›c 4: Æ°u tiÃªn follow-up theo má»©c Ä‘á»™ quan tÃ¢m' },
      {
        type: 'paragraph',
        text: 'NhÃ³m Hot Ä‘Ã£ há»i giÃ¡, muá»‘n demo, cáº§n sample, cÃ³ dá»± Ã¡n cá»¥ thá»ƒ hoáº·c xin liÃªn há»‡ sá»›m. Sales nÃªn liÃªn há»‡ trong 24â€“48 giá», nháº¯c Ä‘Ãºng context event vÃ  Ä‘á» xuáº¥t next step rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'NhÃ³m Warm quan tÃ¢m má»™t case, Ä‘Ã£ quÃ©t QR hoáº·c nháº­n tÃ i liá»‡u nhÆ°ng chÆ°a mua ngay. HÃ£y gá»­i case Ä‘Ãºng nhu cáº§u vÃ  háº¹n follow-up nháº¹. NhÃ³m Nurture chá»‰ check-in hoáº·c chÆ°a rÃµ nhu cáº§u cÃ³ thá»ƒ nháº­n recap vÃ  ná»™i dung há»¯u Ã­ch Ä‘á»ƒ tá»± chá»n chá»§ Ä‘á».',
      },
      {
        type: 'paragraph',
        text: 'Not-fit hoáº·c Invalid gá»“m sai tá»‡p, thiáº¿u thÃ´ng tin, data lá»—i hoáº·c khÃ´ng cÃ³ ngá»¯ cáº£nh phÃ¹ há»£p Ä‘á»ƒ follow-up sÃ¢u. KhÃ´ng Ä‘Æ°a nhÃ³m nÃ y vÃ o sales pipeline chÃ­nh; hÃ£y lÃ m sáº¡ch hoáº·c lÆ°u riÃªng.',
      },
      { type: 'visual', variant: 'event-followup-priority-matrix' },
      { type: 'heading', text: 'BÆ°á»›c 5: follow-up theo ngá»¯ cáº£nh' },
      {
        type: 'paragraph',
        text: 'Má»™t tin cáº£m Æ¡n chung khÃ´ng sai, nhÆ°ng chÆ°a Ä‘á»§. Follow-up nÃªn nháº¯c khÃ¡ch Ä‘Ã£ gáº·p á»Ÿ Ä‘Ã¢u, quan tÃ¢m case nÃ o, xin tÃ i liá»‡u hoáº·c demo gÃ¬, Ä‘Ã£ há»i gÃ¬ táº¡i booth vÃ  bÆ°á»›c tiáº¿p theo há»£p lÃ½ lÃ  gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'NhÃ³m demo cÃ³ thá»ƒ nháº­n láº¡i pháº§n há» Ä‘Ã£ xem cÃ¹ng lá»i má»i trao Ä‘á»•i ngáº¯n. NhÃ³m tÃ i liá»‡u nháº­n Ä‘Ãºng case Ä‘Ã£ chá»n vÃ  lá»±a chá»n xin sample. NhÃ³m chá»‰ check-in nháº­n recap cÃ¹ng danh sÃ¡ch chá»§ Ä‘á» Ä‘á»ƒ tá»± chá»n, thay vÃ¬ bá»‹ gá»i bÃ¡n hÃ ng ngay.',
      },
      {
        type: 'paragraph',
        text: 'Follow-up tá»‘t nháº¯c Ä‘Ãºng context, minh báº¡ch vÃ  tÃ´n trá»ng má»©c Ä‘á»™ quan tÃ¢m.',
      },
      { type: 'heading', text: 'BÆ°á»›c 6: cáº­p nháº­t status, Ä‘á»«ng chá»‰ ghi â€œÄ‘Ã£ gá»iâ€' },
      {
        type: 'paragraph',
        text: 'Status cÃ³ thá»ƒ gá»“m New, Contacted, Cannot Contact, Wrong Fit, Interested, Qualified, Need Material, Demo/Meeting Booked, Quoted, Won, Lost vÃ  Follow-up Later. Team khÃ´ng cáº§n dÃ¹ng háº¿t, nhÆ°ng pháº£i thá»‘ng nháº¥t má»™t bá»™ Ä‘á»§ pháº£n Ã¡nh hÃ nh trÃ¬nh.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i record nÃªn cÃ³ owner, last contact date, next action, next follow-up date, note ngáº¯n vÃ  outcome. Status giÃºp marketing Ä‘á»c cháº¥t lÆ°á»£ng data vÃ  founder tháº¥y event táº¡o cÆ¡ há»™i gÃ¬, khÃ´ng chá»‰ táº¡o bao nhiÃªu contact.',
      },
      { type: 'heading', text: 'BÆ°á»›c 7: Ä‘á»c dashboard sau event' },
      {
        type: 'paragraph',
        text: 'NgoÃ i check-in, QR scan, form submit vÃ  tá»•ng lead, dashboard nÃªn tÃ¡ch data theo booth, session hoáº·c QR; Ä‘á»c nhÃ³m nhu cáº§u, tá»· lá»‡ Ä‘á»§ thÃ´ng tin, hot/warm/nurture, Contacted, Qualified, Demo/Meeting Booked, Quote, Won/Lost vÃ  follow-up pending.',
      },
      {
        type: 'paragraph',
        text: 'Dashboard khÃ´ng dÃ¹ng Ä‘á»ƒ chá»©ng minh event Ä‘Ã´ng. NÃ³ giÃºp team hiá»ƒu event táº¡o loáº¡i tÃ­n hiá»‡u nÃ o, data nÃ o Ä‘i tiáº¿p vÃ  invitation, booth, form, content hay sales script cáº§n cáº£i thiá»‡n á»Ÿ láº§n sau.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥: xá»­ lÃ½ data event B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'NgÃ y event káº¿t thÃºc, team gom check-in, QR, note booth vÃ  danh thiáº¿p vÃ o sheet chung; chuáº©n hoÃ¡ tÃªn, contact, cÃ´ng ty, vai trÃ², event name vÃ  source.',
      },
      {
        type: 'paragraph',
        text: 'NgÃ y tiáº¿p theo, data Ä‘Æ°á»£c tag theo chá»‘ng tháº¥m, gá»—, kim loáº¡i, ngoÃ i trá»i, cáº£i táº¡o, nhÃ  ven biá»ƒn hoáº·c bá» máº·t Ä‘áº·c biá»‡t; chia Hot, Warm, Nurture vÃ  giao owner. NhÃ³m Hot nháº­n follow-up cÃ¡ nhÃ¢n hoÃ¡.',
      },
      {
        type: 'paragraph',
        text: 'Trong ngÃ y hai vÃ  ba, team gá»­i case Ä‘Ãºng nhÃ³m; sales cáº­p nháº­t Contacted, Qualified vÃ  Demo Booked. Tuáº§n sau, dashboard Ä‘á»c QR, form, interest, meeting vÃ  quote Ä‘á»ƒ rÃºt bÃ i há»c cho booth, sample, content vÃ  script.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p sau event' },
      {
        type: 'list',
        items: [
          'Chá»‰ lÃ m recap, khÃ´ng xá»­ lÃ½ data.',
          'Data náº±m á»Ÿ nhiá»u file vÃ  nhiá»u ngÆ°á»i giá»¯.',
          'KhÃ´ng xoÃ¡ trÃ¹ng hoáº·c chuáº©n hoÃ¡ contact.',
          'KhÃ´ng gáº¯n tag nhu cáº§u vÃ  case quan tÃ¢m.',
          'Sales nháº­n danh sÃ¡ch thÃ´ nÃªn gá»i chung chung.',
          'Gá»­i cÃ¹ng má»™t tin nháº¯n cho toÃ n bá»™ data hoáº·c follow-up quÃ¡ muá»™n.',
          'KhÃ´ng cÃ³ owner vÃ  chá»‰ ghi status â€œÄ‘Ã£ gá»iâ€.',
          'KhÃ´ng phÃ¢n biá»‡t Hot, Warm, Nurture vÃ  Not-fit.',
          'KhÃ´ng Ä‘Æ°a status vÃ o dashboard vÃ  khÃ´ng rÃºt bÃ i há»c.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Data chá»‰ Ä‘i tiáº¿p khi Ä‘Æ°á»£c chuyá»ƒn thÃ nh follow-up vÃ  status.',
      },
      { type: 'heading', text: 'Checklist xá»­ lÃ½ data sau event' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi Ä‘Ã³ng campaign, xÃ¡c nháº­n data Ä‘Ã£ Ä‘Æ°á»£c gom, lÃ m sáº¡ch, tag, segment, giao owner vÃ  cáº­p nháº­t status; dashboard Ä‘á»c Ä‘Æ°á»£c sales handoff.',
      },
      { type: 'visual', variant: 'post-event-data-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n post-event data processing sheet template.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra ngÃ y event khÃ´ng pháº£i Ä‘iá»ƒm cuá»‘i cá»§a campaign. Booth Ä‘Ã´ng, khÃ¡ch ghÃ© nhiá»u, áº£nh Ä‘áº¹p vÃ  recap cÃ³ tÆ°Æ¡ng tÃ¡c má»›i chá»‰ lÃ  lÃºc tÃ­n hiá»‡u Ä‘Æ°á»£c táº¡o ra.',
      },
      {
        type: 'paragraph',
        text: 'Sau event, team má»›i biáº¿n tÃ­n hiá»‡u thÃ nh quan há»‡, cuá»™c háº¹n, tÆ° váº¥n, bÃ¡o giÃ¡ hoáº·c bÃ i há»c. KhÃ´ng xá»­ lÃ½ data giá»‘ng má»™t cuá»™c gáº·p Ä‘Ã´ng vui mÃ  khÃ´ng ghi láº¡i; xá»­ lÃ½ Ä‘Ãºng giÃºp má»—i cuá»™c trÃ² chuyá»‡n cÃ³ cÆ¡ há»™i Ä‘i tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'Event káº¿t thÃºc khi data Ä‘Ã£ Ä‘Æ°á»£c xá»­ lÃ½ vÃ  team biáº¿t mÃ¬nh há»c Ä‘Æ°á»£c gÃ¬.',
      },
      { type: 'heading', text: 'Biáº¿n data thÃ nh hÃ nh Ä‘á»™ng' },
      {
        type: 'paragraph',
        text: 'Sau event, hÃ£y gom data, lÃ m sáº¡ch, tag, phÃ¢n nhÃ³m, giao owner, cáº­p nháº­t status vÃ  Ä‘á»c dashboard. Khi Ä‘Ã³ event khÃ´ng chá»‰ Ä‘á»ƒ láº¡i áº£nh vÃ  check-in, mÃ  má»Ÿ tiáº¿p cuá»™c trÃ² chuyá»‡n.',
      },
    ],
    cta: 'Náº¿u team vá»«a xong event, Ä‘á»«ng chá»‰ há»i recap Ä‘Ã£ Ä‘Äƒng chÆ°a. HÃ£y há»i: data Ä‘Ã£ gom á»Ÿ Ä‘Ã¢u, tag tháº¿ nÃ o, nhÃ³m nÃ o follow-up trÆ°á»›c, ai phá»¥ trÃ¡ch, status cáº­p nháº­t á»Ÿ Ä‘Ã¢u vÃ  dashboard sáº½ Ä‘á»c outcome nÃ o?',
  },
  {
    title: 'VÃ¬ sao social, ads, landing page vÃ  sales script pháº£i bÃ¡m cÃ¹ng má»™t concept?',
    slug: 'vi-sao-social-ads-landing-page-va-sales-script-phai-bam-cung-mot-concept',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-outdoor-event-walk-01.jpg",
                "alt": "Person walking in an outdoor event area",
                "caption": "Outdoor event moment",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-networking-restaurant-toast-01.jpg",
                      "alt": "Group toasting at a crowded event table",
                      "caption": "Team networking toast",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "VÃ¬ sao cÃ¡c Ä‘iá»ƒm cháº¡m pháº£i bÃ¡m cÃ¹ng concept?"
                }
          ]
    },
    excerpt:
      'Má»™t campaign khÃ´ng chá»‰ cáº§n post Ä‘áº¹p, ads cháº¡y Ä‘Æ°á»£c hay landing page cÃ³ form. Social, ads, landing page vÃ  sales script pháº£i bÃ¡m cÃ¹ng má»™t concept Ä‘á»ƒ khÃ¡ch Ä‘i qua tá»«ng Ä‘iá»ƒm cháº¡m mÃ  khÃ´ng bá»‹ Ä‘á»©t máº¡ch: tháº¥y má»™t lá»i há»©a, click vÃ o Ä‘Ãºng cÃ¢u chuyá»‡n, Ä‘á»ƒ láº¡i data Ä‘Ãºng ngá»¯ cáº£nh vÃ  Ä‘Æ°á»£c sales follow-up báº±ng cÃ¹ng má»™t hÆ°á»›ng.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t campaign cÃ³ thá»ƒ nhÃ¬n ráº¥t Ä‘á»§ Ä‘áº§u viá»‡c: social post Ä‘Ã£ lÃªn, ads Ä‘Ã£ cháº¡y, landing page Ä‘Ã£ dá»±ng, form Ä‘Ã£ cÃ³, sales Ä‘Ã£ nháº­n lead. NhÆ°ng khi khÃ¡ch Ä‘i qua hÃ nh trÃ¬nh Ä‘Ã³, há» láº¡i tháº¥y má»—i Ä‘iá»ƒm cháº¡m ká»ƒ má»™t cÃ¢u chuyá»‡n khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'Social nÃ³i vá» má»™t váº¥n Ä‘á», ads dÃ¹ng hook khÃ¡c, landing page má»Ÿ báº±ng cÃ¢u chuyá»‡n sáº£n pháº©m chung, form chá»‰ há»i contact vÃ  sales gá»i theo script cÅ©. Má»—i pháº§n cÃ³ váº» lÃ m Ä‘Ãºng nhiá»‡m vá»¥ riÃªng, nhÆ°ng toÃ n campaign rÆ¡i á»Ÿ Ä‘oáº¡n chuyá»ƒn tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c output pháº£i bÃ¡m cÃ¹ng concept Ä‘á»ƒ hÃ nh trÃ¬nh khÃ´ng Ä‘á»©t máº¡ch.',
      },
      { type: 'heading', text: 'Concept campaign khÃ´ng chá»‰ lÃ  Ã½ tÆ°á»Ÿng thiáº¿t káº¿' },
      {
        type: 'paragraph',
        text: 'Concept thÆ°á»ng bá»‹ hiá»ƒu lÃ  mÃ u sáº¯c, key visual hay moodboard. ÄÃ³ chá»‰ lÃ  biá»ƒu hiá»‡n bÃªn ngoÃ i.',
      },
      {
        type: 'paragraph',
        text: 'Concept váº­n hÃ nh cáº§n tráº£ lá»i campaign Ä‘Ã¡nh vÃ o problem nÃ o, audience lÃ  ai, khÃ¡ch cáº§n hiá»ƒu gÃ¬, lá»i há»©a chÃ­nh, proof, CTA vÃ  data cáº§n thu lÃ  gÃ¬, sales nÃªn má»Ÿ cÃ¢u chuyá»‡n theo hÆ°á»›ng nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Concept lÃ  trá»¥c Ä‘á»ƒ content, ads, page, form, sales vÃ  follow-up ká»ƒ cÃ¹ng cÃ¢u chuyá»‡n.',
      },
      { type: 'visual', variant: 'concept-alignment-system' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch audit social, ads, landing page vÃ  sales script cÃ³ bÃ¡m cÃ¹ng concept khÃ´ng.',
      },
      { type: 'heading', text: 'VÃ¬ sao cÃ¡c Ä‘iá»ƒm cháº¡m pháº£i bÃ¡m cÃ¹ng concept?' },
      {
        type: 'list',
        items: [
          'KhÃ¡ch khÃ´ng bá»‹ Ä‘á»©t máº¡ch: lá»i há»©a á»Ÿ social hoáº·c ads Ä‘Æ°á»£c gáº·p láº¡i trÃªn page vÃ  trong tÆ° váº¥n.',
          'Ká»³ vá»ng khÃ´ng bá»‹ kÃ©o sai: hook cÃ³ thá»ƒ máº¡nh nhÆ°ng khÃ´ng Ä‘Æ°á»£c dáº«n sang má»™t cÃ¢u chuyá»‡n khÃ¡c.',
          'Landing page khÃ´ng pháº£i giáº£i thÃ­ch láº¡i tá»« Ä‘áº§u: nÃ³ tiáº¿p ná»‘i context vÃ  chá»‘t báº±ng proof, CTA.',
          'Sales khÃ´ng gá»i nhÆ° lead láº¡nh: há» biáº¿t khÃ¡ch vá»«a tiáº¿p xÃºc vá»›i angle nÃ o.',
          'Dashboard Ä‘á»c Ä‘Æ°á»£c tÃ­n hiá»‡u: team biáº¿t lead vÃ  outcome Ä‘áº¿n tá»« concept nÃ o.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CÃ¹ng concept khÃ´ng pháº£i copy y há»‡t, mÃ  cÃ¹ng phá»¥c vá»¥ má»™t lá»i há»©a vÃ  hÃ nh Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Campaign rÆ¡i á»Ÿ Ä‘Ã¢u khi concept khÃ´ng liá»n máº¡ch?' },
      {
        type: 'paragraph',
        text: 'Social táº¡o nháº­n thá»©c nhÆ°ng ads chá»‰ bÃ¡n Æ°u Ä‘Ã£i sáº½ kÃ©o khÃ¡ch sang ká»³ vá»ng khÃ¡c. Ads há»©a má»™t hook cá»¥ thá»ƒ nhÆ°ng landing page nÃ³i chung vá» cÃ´ng ty khiáº¿n khÃ¡ch khÃ´ng cháº¯c mÃ¬nh Ä‘áº¿n Ä‘Ãºng nÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'Form khÃ´ng há»i case lÃ m sales máº¥t context. Booth cÃ³ concept nhÆ°ng follow-up chung chung; sales há»i láº¡i tá»« Ä‘áº§u. Dashboard chá»‰ tháº¥y tá»•ng lead, khÃ´ng biáº¿t angle nÃ o táº¡o tÃ­n hiá»‡u.',
      },
      { type: 'visual', variant: 'fragmented-vs-aligned-campaign' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign cÃ³ ads kÃ©o tá»‘t nhÆ°ng landing page vÃ  sales script lá»‡ch concept nÃªn lead khÃ´ng Ä‘i tiáº¿p.',
      },
      { type: 'heading', text: 'Concept pháº£i Ä‘Æ°á»£c dá»‹ch ra tá»«ng Ä‘iá»ƒm cháº¡m' },
      {
        type: 'paragraph',
        text: 'Giáº£ sá»­ concept lÃ  â€œBá»™ giáº£i phÃ¡p bá» máº·t cho nhá»¯ng case thi cÃ´ng khÃ³â€. Social ká»ƒ cÃ¡c case ngoÃ i trá»i, gá»—, kim loáº¡i, cáº£i táº¡o hoáº·c nhÃ  ven biá»ƒn. Ads kÃ©o nhÃ³m quan tÃ¢m case cá»¥ thá»ƒ báº±ng lá»i má»i nháº­n solution kit.',
      },
      {
        type: 'paragraph',
        text: 'Landing hero nháº¯c láº¡i concept, chia ná»™i dung theo case vÃ  Ä‘Æ°a sample, demo, hÃ¬nh tháº­t. Form há»i khÃ¡ch quan tÃ¢m case nÃ o vÃ  muá»‘n tÃ i liá»‡u, máº«u, demo hay tÆ° váº¥n. Booth trÆ°ng sample theo váº¥n Ä‘á», khÃ´ng chá»‰ theo mÃ£ sáº£n pháº©m.',
      },
      {
        type: 'paragraph',
        text: 'Sales má»Ÿ Ä‘áº§u báº±ng case khÃ¡ch Ä‘Ã£ chá»n. Follow-up gá»­i Ä‘Ãºng tÃ i liá»‡u. Dashboard Ä‘á»c QR, form, interest tag, Contacted, Qualified, Demo hoáº·c Quote theo tá»«ng nhÃ³m case.',
      },
      { type: 'visual', variant: 'concept-to-touchpoints' },
      { type: 'heading', text: 'Social má»Ÿ Ä‘Ãºng bá»‘i cáº£nh' },
      {
        type: 'paragraph',
        text: 'Social cÃ³ thá»ƒ ká»ƒ problem, insight vÃ  tÃ¬nh huá»‘ng thá»±c táº¿ Ä‘á»ƒ khÃ¡ch nháº­n ra bá»‘i cáº£nh cá»§a mÃ¬nh. Má»—i post khai thÃ¡c má»™t gÃ³c nhÆ°ng váº«n dáº«n vá» concept chung.',
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng Ä‘Äƒng cho Ä‘á»§ lá»‹ch hoáº·c táº¡o ká»³ vá»ng mÃ  page vÃ  sales khÃ´ng tiáº¿p ná»‘i. Social má»Ÿ sai bá»‘i cáº£nh sáº½ lÃ m bÆ°á»›c sau khÃ³ chá»‘t.',
      },
      { type: 'heading', text: 'Ads kÃ©o Ä‘Ãºng ká»³ vá»ng, khÃ´ng chá»‰ kÃ©o click' },
      {
        type: 'paragraph',
        text: 'Ads cáº§n bÃ¡m concept á»Ÿ hook, creative, primary text, CTA, landing URL, UTM vÃ  conversion signal. Vá»›i solution kit cho case khÃ³, hook váº«n nÃªn xoay quanh case, sample, tÃ i liá»‡u hoáº·c tÆ° váº¥n ká»¹ thuáº­t, khÃ´ng Ä‘á»™t ngá»™t chuyá»ƒn sang â€œsáº£n pháº©m má»›i giÃ¡ tá»‘tâ€.',
      },
      { type: 'heading', text: 'Landing page tiáº¿p ná»‘i lá»i há»©a vÃ  chá»‘t báº±ng proof' },
      {
        type: 'paragraph',
        text: 'Landing page lÃ  nÆ¡i khÃ¡ch kiá»ƒm tra lá»i há»©a cÃ³ tháº­t khÃ´ng. Hero cáº§n nháº¯c concept, cÃ¡c section lÃ m rÃµ problem vÃ  solution, proof Ä‘Ãºng vá»›i lá»i há»©a, CTA rÃµ, form thu data theo context, thank-you vÃ  tracking Ä‘áº§y Ä‘á»§.',
      },
      { type: 'heading', text: 'Sales script tiáº¿p tá»¥c campaign, khÃ´ng gá»i nhÆ° lead láº¡nh' },
      {
        type: 'paragraph',
        text: 'Sales cáº§n biáº¿t campaign, nguá»“n click hoáº·c QR, case khÃ¡ch chá»n, offer Ä‘Ã£ tháº¥y vÃ  nhu cáº§u lÃ  tÃ i liá»‡u, demo, tÆ° váº¥n hay bÃ¡o giÃ¡. Lead campaign Ä‘Ã£ cÃ³ context; khÃ´ng nÃªn bá»‹ há»i láº¡i tá»« Ä‘áº§u nhÆ° má»™t contact vÃ´ danh.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ â€œanh/chá»‹ cáº§n tÆ° váº¥n gÃ¬?â€, sales cÃ³ thá»ƒ nháº¯c nhÃ³m case khÃ¡ch chá»n, gá»­i case liÃªn quan vÃ  há»i pháº§n há» Ä‘ang cáº§n xá»­ lÃ½. Cuá»™c gá»i khi Ä‘Ã³ lÃ  sá»± tiáº¿p ná»‘i, khÃ´ng pháº£i má»™t cuá»™c gá»i tá»« danh sÃ¡ch thÃ´.',
      },
      { type: 'heading', text: 'Concept alignment giÃºp dashboard Ä‘á»c rÃµ hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Khi cÃ¡c Ä‘iá»ƒm cháº¡m cÃ¹ng concept, team cÃ³ thá»ƒ nhÃ¬n angle kÃ©o traffic, page chá»‘t form, interest tag phá»• biáº¿n, nhÃ³m sales contact Ä‘Æ°á»£c, qualified vÃ  demo/quote theo tá»«ng case. Äiá»ƒm rÆ¡i á»Ÿ traffic, page, form hay sales cÅ©ng rÃµ hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u má»—i kÃªnh nÃ³i má»™t kiá»ƒu, team khÃ´ng biáº¿t click Ä‘áº¿n tá»« lá»i há»©a nÃ o, lead quan tÃ¢m gÃ¬, form cÃ³ pháº£n Ã¡nh concept hay sales Ä‘ang follow-up theo angle nÃ o.',
      },
      { type: 'visual', variant: 'message-mismatch-leak' },
      { type: 'heading', text: 'CÃ¡ch audit concept alignment' },
      {
        type: 'list',
        items: [
          'Social cÃ³ má»Ÿ Ä‘Ãºng problem cá»§a concept khÃ´ng?',
          'Ads cÃ³ kÃ©o Ä‘Ãºng ká»³ vá»ng khÃ´ng?',
          'Landing hero cÃ³ nháº¯c Ä‘Ãºng lá»i há»©a vÃ  proof cÃ³ lÃ m lá»i há»©a Ä‘Ã¡ng tin khÃ´ng?',
          'Form cÃ³ há»i data Ä‘Ãºng context khÃ´ng?',
          'Sales script vÃ  follow-up cÃ³ tiáº¿p ná»‘i cÃ¢u chuyá»‡n khÃ´ng?',
          'UTM, campaign naming vÃ  dashboard cÃ³ giá»¯ Ä‘Æ°á»£c angle hoáº·c interest tag khÃ´ng?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Audit kiá»ƒm tra khÃ¡ch cÃ³ Ä‘Æ°á»£c dáº«n qua cÃ¹ng má»™t logic hay khÃ´ng.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥ campaign B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Campaign hÆ°á»›ng Ä‘áº¿n kiáº¿n trÃºc sÆ° vá»›i concept giáº£i phÃ¡p cho case khÃ³. Social ká»ƒ tá»«ng case; ads dÃ¹ng hook ngoÃ i trá»i, cáº£i táº¡o hoáº·c bá» máº·t Ä‘áº·c biá»‡t; page dÃ¹ng cÃ¹ng concept vÃ  proof theo tá»«ng nhÃ³m.',
      },
      {
        type: 'paragraph',
        text: 'Form há»i vai trÃ², cÃ´ng ty, case vÃ  nhu cáº§u. Booth trÆ°ng sample theo case. Sales má»Ÿ báº±ng lá»±a chá»n cá»§a khÃ¡ch; follow-up gá»­i Ä‘Ãºng tÃ i liá»‡u. Dashboard Ä‘á»c interest tag, Qualified, Demo, Meeting vÃ  Quote.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi team khÃ´ng bÃ¡m concept' },
      {
        type: 'list',
        items: [
          'Tagline chá»‰ náº±m trÃªn visual, khÃ´ng Ä‘i vÃ o page, sales vÃ  follow-up.',
          'Social dÃ¹ng quÃ¡ nhiá»u angle xa nhau.',
          'Ads chá»n hook máº¡nh nhÆ°ng khÃ´ng khá»›p landing page.',
          'Hero giá»›i thiá»‡u cÃ´ng ty thay vÃ¬ campaign promise.',
          'Form khÃ´ng há»i case nÃªn sales máº¥t ngá»¯ cáº£nh.',
          'Sales khÃ´ng Ä‘Æ°á»£c brief concept trÆ°á»›c khi gá»i.',
          'Follow-up dÃ¹ng má»™t máº«u chung cho má»i lead.',
          'Dashboard chá»‰ Ä‘o tá»•ng lead, khÃ´ng Ä‘o angle hoáº·c interest tag.',
          'Team hiá»ƒu alignment lÃ  copy y nguyÃªn má»™t cÃ¢u á»Ÿ má»i nÆ¡i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Alignment khÃ´ng Ä‘áº£m báº£o campaign tháº¯ng, nhÆ°ng giáº£m rÆ¡i khÃ¡ch giá»¯a cÃ¡c Ä‘iá»ƒm cháº¡m.',
      },
      { type: 'heading', text: 'Checklist concept alignment cho campaign' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c launch, Ä‘áº·t social, ads, landing page, form vÃ  sales script cáº¡nh nhau. Kiá»ƒm tra lá»i há»©a, proof, CTA, data vÃ  follow-up cÃ³ phá»¥c vá»¥ cÃ¹ng concept hay khÃ´ng.',
      },
      { type: 'visual', variant: 'campaign-concept-alignment-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n concept alignment audit checklist cho campaign nhá».',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra kiá»ƒm tá»«ng output riÃªng lÃ  chÆ°a Ä‘á»§. CÃ¢u há»i quan trá»ng hÆ¡n lÃ  post, visual, ads, page, form vÃ  script cÃ³ cÃ¹ng kÃ©o khÃ¡ch qua má»™t cÃ¢u chuyá»‡n khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Campaign khÃ´ng cáº§n hoÃ n háº£o á»Ÿ má»i Ä‘iá»ƒm cháº¡m. NhÆ°ng náº¿u liá»n máº¡ch, khÃ¡ch dá»… hiá»ƒu, sales dá»… follow-up vÃ  dashboard dá»… Ä‘á»c. Nhiá»u output Ä‘áº¹p mÃ  thiáº¿u concept chung giá»‘ng má»™t Ä‘oÃ n ngÆ°á»i cÃ¹ng xuáº¥t phÃ¡t nhÆ°ng ráº½ nhiá»u hÆ°á»›ng.',
      },
      {
        type: 'paragraph',
        text: 'Concept khÃ´ng pháº£i pháº§n trang trÃ­. NÃ³ giá»¯ dÃ²ng cháº£y tá»« attention Ä‘áº¿n action.',
      },
      { type: 'heading', text: 'Má»™t cÃ¢u chuyá»‡n xuyÃªn suá»‘t hÃ nh trÃ¬nh' },
      {
        type: 'paragraph',
        text: 'KhÃ¡ch khÃ´ng tráº£i nghiá»‡m campaign theo tá»«ng file riÃªng. Há» Ä‘i qua má»™t hÃ nh trÃ¬nh. Social, ads, landing page vÃ  sales script cÃ¹ng concept sáº½ táº¡o ká»³ vá»ng Ä‘Ãºng, chá»‘t hÃ nh Ä‘á»™ng Ä‘Ãºng, giá»¯ context cho follow-up vÃ  giÃºp team Ä‘á»c tÃ­n hiá»‡u rÃµ hÆ¡n.',
      },
    ],
    cta: 'Náº¿u team chuáº©n bá»‹ campaign má»›i, Ä‘á»«ng chá»‰ duyá»‡t tá»«ng post, visual hay ads riÃªng láº». HÃ£y Ä‘áº·t chÃºng cáº¡nh nhau vÃ  há»i: khÃ¡ch cÃ³ Ä‘Æ°á»£c dáº«n qua cÃ¹ng má»™t cÃ¢u chuyá»‡n tá»« social Ä‘áº¿n sales follow-up khÃ´ng?',
  },
  {
    title: 'Má»™t campaign B2B cho kiáº¿n trÃºc sÆ° nÃªn nhÃ¬n khÃ¡c campaign bÃ¡n láº» tháº¿ nÃ o?',
    slug: 'mot-campaign-b2b-cho-kien-truc-su-nen-nhin-khac-campaign-ban-le-the-nao',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-conference-conference-portrait-01.jpg",
                "alt": "Person standing in front of a conference backdrop",
                "caption": "Conference portrait",
                "width": 2048,
                "height": 1682,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-exhibition-product-demo-booth-01.jpg",
                      "alt": "People at an exhibition booth with product displays",
                      "caption": "Exhibition booth activity",
                      "width": 1600,
                      "height": 1067,
                      "fit": "cover",
                      "afterHeading": "Kiáº¿n trÃºc sÆ° cáº§n solution, khÃ´ng chá»‰ sáº£n pháº©m"
                }
          ]
    },
    excerpt:
      'Campaign B2B cho kiáº¿n trÃºc sÆ° khÃ´ng nÃªn nhÃ¬n giá»‘ng má»™t campaign bÃ¡n láº» ngáº¯n háº¡n. Kiáº¿n trÃºc sÆ° khÃ´ng chá»‰ mua má»™t sáº£n pháº©m; há» cáº§n hiá»ƒu giáº£i phÃ¡p, bá»‘i cáº£nh á»©ng dá»¥ng, proof, máº«u thá»­, tÃ i liá»‡u ká»¹ thuáº­t vÃ  cÃ¡ch sáº£n pháº©m giÃºp há» tÆ° váº¥n tá»‘t hÆ¡n cho khÃ¡ch hÃ ng cá»§a há».',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t lá»—i phá»• biáº¿n khi lÃ m campaign cho kiáº¿n trÃºc sÆ° lÃ  dÃ¹ng tÆ° duy bÃ¡n láº» Ä‘á»ƒ triá»ƒn khai B2B: cÃ³ sáº£n pháº©m, Æ°u Ä‘Ã£i, post, ads, form rá»“i chá» lead. NhÆ°ng kiáº¿n trÃºc sÆ° hiáº¿m khi quyáº¿t Ä‘á»‹nh nhÆ° má»™t khÃ¡ch mua láº» vá»«a tháº¥y deal tá»‘t.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡ch bÃ¡n láº» cÃ³ thá»ƒ pháº£n á»©ng nhanh vá»›i giÃ¡, tiá»‡n lá»£i, hÃ¬nh áº£nh vÃ  offer rÃµ. Kiáº¿n trÃºc sÆ° thÆ°á»ng cáº§n hiá»ƒu giáº£i phÃ¡p dÃ¹ng cho case nÃ o, cÃ³ proof, sample, tÃ i liá»‡u ká»¹ thuáº­t vÃ  cÃ³ giÃºp há» tÆ° váº¥n láº¡i cho chá»§ nhÃ  hoáº·c nhÃ  tháº§u khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Há» cÃ³ thá»ƒ chÆ°a mua ngay nhÆ°ng lÆ°u tÃ i liá»‡u, xin sample, há»i demo hoáº·c Ä‘Æ°a giáº£i phÃ¡p vÃ o dá»± Ã¡n sau. VÃ¬ váº­y dashboard cÅ©ng cáº§n Ä‘á»c interest tag, sample request, meeting, technical consultation vÃ  follow-up status, khÃ´ng chá»‰ lead tá»©c thá»i.',
      },
      {
        type: 'paragraph',
        text: 'Campaign B2B cho kiáº¿n trÃºc sÆ° cáº§n má»™t há»‡ váº­n hÃ nh khÃ¡c.',
      },
      { type: 'heading', text: 'KhÃ¡c nhau Ä‘áº§u tiÃªn: vai trÃ² cá»§a ngÆ°á»i nháº­n thÃ´ng Ä‘iá»‡p' },
      {
        type: 'paragraph',
        text: 'Trong bÃ¡n láº», ngÆ°á»i tháº¥y quáº£ng cÃ¡o thÆ°á»ng gáº§n vá»›i ngÆ°á»i mua hoáº·c ngÆ°á»i dÃ¹ng cuá»‘i. Trong B2B, kiáº¿n trÃºc sÆ° cÃ³ thá»ƒ lÃ  ngÆ°á»i tÆ° váº¥n chá»§ nhÃ , áº£nh hÆ°á»Ÿng viá»‡c chá»n váº­t liá»‡u, phá»‘i há»£p nhÃ  tháº§u vÃ  báº£o vá»‡ uy tÃ­n nghá» nghiá»‡p cá»§a mÃ¬nh.',
      },
      {
        type: 'paragraph',
        text: 'Há» cáº§n tin Ä‘á»™ phÃ¹ há»£p ká»¹ thuáº­t trÆ°á»›c khi Ä‘á» xuáº¥t. CÃ¢u há»i lÃ  lÃ m sao Ä‘á»ƒ há» Ä‘á»§ hiá»ƒu vÃ  tin Ä‘á»ƒ Ä‘Æ°a giáº£i phÃ¡p vÃ o tÆ° váº¥n hoáº·c dá»± Ã¡n.',
      },
      { type: 'visual', variant: 'b2b-architect-vs-retail-campaign' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch thiáº¿t káº¿ campaign B2B cho kiáº¿n trÃºc sÆ° khÃ¡c campaign bÃ¡n láº».',
      },
      { type: 'heading', text: 'Kiáº¿n trÃºc sÆ° cáº§n solution, khÃ´ng chá»‰ sáº£n pháº©m' },
      {
        type: 'paragraph',
        text: 'Product-first nÃ³i sáº£n pháº©m cÃ³ tÃ­nh nÄƒng gÃ¬. Case/solution-first nÃ³i case nÃ o nÃªn dÃ¹ng, giáº£i quyáº¿t bá» máº·t hoáº·c Ä‘iá»u kiá»‡n thi cÃ´ng gÃ¬ vÃ  proof nÃ o giÃºp quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ chá»‰ nÃ³i sÆ¡n hoáº·c cháº¥t phá»§ bá»n Ä‘áº¹p, campaign cÃ³ thá»ƒ Ä‘i theo bá» máº·t ngoÃ i trá»i, gá»—, kim loáº¡i, cáº£i táº¡o nhÃ  cÅ©, nhÃ  ven biá»ƒn, khu vá»±c áº©m, bá» máº·t khÃ³ bÃ¡m hoáº·c cÃ´ng trÃ¬nh cáº§n máº«u tháº­t Ä‘á»ƒ tÆ° váº¥n chá»§ nhÃ .',
      },
      {
        type: 'paragraph',
        text: 'CTA chuyá»ƒn tá»« â€œmua ngayâ€ sang solution kit, sample, tÃ i liá»‡u hoáº·c tÆ° váº¥n theo case.',
      },
      { type: 'visual', variant: 'solution-kit-vs-product-promo' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign KTS chuyá»ƒn tá»« product promo sang solution kit theo case.',
      },
      { type: 'heading', text: 'Há»‡ sinh thÃ¡i quyáº¿t Ä‘á»‹nh phá»©c táº¡p hÆ¡n' },
      {
        type: 'paragraph',
        text: 'ÄÆ°á»ng bÃ¡n láº» thÆ°á»ng ngáº¯n hÆ¡n: ngÆ°á»i xem, quan tÃ¢m, há»i hoáº·c mua, nháº­n sáº£n pháº©m. Vá»›i kiáº¿n trÃºc sÆ°, quyáº¿t Ä‘á»‹nh cÃ²n liÃªn quan chá»§ nhÃ , chá»§ Ä‘áº§u tÆ°, nhÃ  tháº§u, Ä‘á»™i thi cÃ´ng, sales, tÆ° váº¥n ká»¹ thuáº­t, timeline, ngÃ¢n sÃ¡ch vÃ  Ä‘iá»u kiá»‡n táº¡i dá»± Ã¡n.',
      },
      {
        type: 'paragraph',
        text: 'Khi Ä‘Æ°a giáº£i phÃ¡p vÃ o thiáº¿t káº¿, KTS Ä‘áº·t uy tÃ­n nghá» nghiá»‡p vÃ o Ä‘Ã³. Campaign cáº§n case, sample, demo, giá»›i háº¡n á»©ng dá»¥ng vÃ  ngÆ°á»i há»— trá»£, khÃ´ng chá»‰ attention.',
      },
      { type: 'visual', variant: 'architect-decision-ecosystem' },
      { type: 'heading', text: 'Message pháº£i Ä‘i theo case, proof vÃ  á»©ng dá»¥ng' },
      {
        type: 'paragraph',
        text: 'Message nÃªn Æ°u tiÃªn case á»©ng dá»¥ng, váº¥n Ä‘á» thá»±c táº¿, Ä‘iá»u kiá»‡n thi cÃ´ng, before-after, sample, demo vÃ  lÃ½ do giáº£i phÃ¡p Ä‘Ã¡ng tin. TÃ i liá»‡u cÅ©ng cáº§n Ä‘á»§ Ä‘á»ƒ kiáº¿n trÃºc sÆ° dÃ¹ng khi trao Ä‘á»•i láº¡i vá»›i khÃ¡ch hÃ ng cá»§a há».',
      },
      {
        type: 'paragraph',
        text: 'Nhá»¯ng cÃ¢u nhÆ° â€œgiáº£i phÃ¡p cho bá» máº·t ngoÃ i trá»i cáº§n bá»n mÃ u vÃ  dá»… báº£o trÃ¬â€ hoáº·c â€œcase cáº£i táº¡o khi bá» máº·t cÅ© khÃ´ng thá»ƒ xá»­ lÃ½ nhÆ° cÃ´ng trÃ¬nh má»›iâ€ táº¡o context rÃµ hÆ¡n lá»i khen chung hoáº·c danh sÃ¡ch tÃ­nh nÄƒng.',
      },
      { type: 'heading', text: 'CTA cáº§n má»Ÿ cuá»™c trÃ² chuyá»‡n cÃ³ ngá»¯ cáº£nh' },
      {
        type: 'paragraph',
        text: 'BÃ¡n láº» cÃ³ thá»ƒ dÃ¹ng mua ngay, Ä‘áº·t hÃ ng, nháº­n Æ°u Ä‘Ã£i, inbox hoáº·c hotline. B2B cho kiáº¿n trÃºc sÆ° thÆ°á»ng phÃ¹ há»£p vá»›i CTA nháº­n solution kit, chá»n case, Ä‘Äƒng kÃ½ sample, Ä‘áº·t demo, nháº­n tÃ i liá»‡u ká»¹ thuáº­t, tÆ° váº¥n má»™t case hoáº·c tham gia workshop.',
      },
      {
        type: 'paragraph',
        text: 'CTA nÃ y táº¡o bÆ°á»›c tiáº¿p theo phÃ¹ há»£p vÃ  cho team biáº¿t khÃ¡ch quan tÃ¢m gÃ¬.',
      },
      { type: 'heading', text: 'Landing page vÃ  form pháº£i thu data theo case' },
      {
        type: 'paragraph',
        text: 'Landing page nÃªn bÃ¡m concept, chia ná»™i dung theo problem hoáº·c nhÃ³m á»©ng dá»¥ng, Ä‘Æ°a proof theo case, sample, demo, tÃ i liá»‡u ká»¹ thuáº­t vÃ  FAQ cho pháº£n biá»‡n chuyÃªn mÃ´n.',
      },
      {
        type: 'paragraph',
        text: 'Form khÃ´ng chá»‰ há»i tÃªn vÃ  Ä‘iá»‡n thoáº¡i. Vá»«a Ä‘á»§ lÃ  vai trÃ², cÃ´ng ty, nhÃ³m case quan tÃ¢m, nhu cáº§u nháº­n tÃ i liá»‡u, sample, demo hay tÆ° váº¥n vÃ  ghi chÃº ngáº¯n náº¿u khÃ¡ch muá»‘n chia sáº».',
      },
      { type: 'heading', text: 'Sales script giá»‘ng tÆ° váº¥n hÆ¡n lÃ  chá»‘t nhanh' },
      {
        type: 'paragraph',
        text: 'Vá»›i bÃ¡n láº», sales cÃ³ thá»ƒ táº­p trung vÃ o giÃ¡, Æ°u Ä‘Ã£i, tá»“n kho, giao hÃ ng vÃ  Ä‘áº·t hÃ ng. Vá»›i KTS, má»Ÿ Ä‘áº§u nÃªn há»i case Ä‘ang quan tÃ¢m, Ä‘iá»u kiá»‡n dá»± Ã¡n, bá» máº·t cáº§n xá»­ lÃ½ vÃ  khÃ¡ch cáº§n tÃ i liá»‡u, sample hay demo Ä‘á»ƒ tÆ° váº¥n.',
      },
      {
        type: 'paragraph',
        text: 'Sales cáº§n biáº¿t concept, case vÃ  offer lead Ä‘Ã£ tháº¥y; cÃ³ thá»ƒ gá»­i case tÆ°Æ¡ng tá»± trÆ°á»›c khi trao Ä‘á»•i sÃ¢u, thay vÃ¬ gá»i nhÆ° contact láº¡nh.',
      },
      { type: 'heading', text: 'Dashboard B2B khÃ´ng nÃªn chá»‰ Ä‘á»c lead ngay' },
      {
        type: 'paragraph',
        text: 'Dashboard nÃªn Ä‘á»c traffic trong tá»‡p chuyÃªn mÃ´n, QR hoáº·c form, interest tag, sample request, technical document request, Contacted, Qualified, Demo/Meeting Booked, Quote, Project Opportunity, Follow-up Later vÃ  nurture list.',
      },
      {
        type: 'paragraph',
        text: 'Chá»‰ nhÃ¬n lead tuáº§n Ä‘áº§u dá»… Ä‘Ã¡nh giÃ¡ sai má»™t journey dÃ i.',
      },
      { type: 'visual', variant: 'architect-campaign-journey' },
      { type: 'heading', text: 'VÃ­ dá»¥ campaign B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Náº¿u lÃ m nhÆ° bÃ¡n láº», team cÃ³ thá»ƒ post sáº£n pháº©m, cháº¡y Æ°u Ä‘Ã£i, dá»±ng page tÃ­nh nÄƒng, láº¥y tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i, rá»“i sales há»i khÃ¡ch cáº§n mua gÃ¬. Dashboard chá»‰ cÃ³ lead tá»•ng.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i B2B, direction lÃ  giÃºp KTS cÃ³ giáº£i phÃ¡p theo case thi cÃ´ng khÃ³; tagline váº­n hÃ nh lÃ  â€œBá»™ giáº£i phÃ¡p bá» máº·t cho nhá»¯ng case thi cÃ´ng khÃ³â€. Social ká»ƒ case, ads kÃ©o theo case, page cÃ³ proof, sample vÃ  demo.',
      },
      {
        type: 'paragraph',
        text: 'Form há»i vai trÃ², cÃ´ng ty, case vÃ  nhu cáº§u. Booth trÆ°ng sample theo váº¥n Ä‘á». Sales má»Ÿ báº±ng case khÃ¡ch chá»n; follow-up gá»­i tÃ i liá»‡u Ä‘Ãºng tag. Dashboard Ä‘á»c sample request, Demo Booked, Qualified, Quote vÃ  nurture.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i khi lÃ m B2B giá»‘ng bÃ¡n láº»' },
      {
        type: 'list',
        items: [
          'Táº­p trung vÃ o giÃ¡ hoáº·c Æ°u Ä‘Ã£i nhÆ°ng thiáº¿u case á»©ng dá»¥ng.',
          'Content giá»›i thiá»‡u sáº£n pháº©m mÃ  khÃ´ng nÃ³i giáº£i quyáº¿t váº¥n Ä‘á» nÃ o.',
          'Visual Ä‘áº¹p nhÆ°ng thiáº¿u proof vÃ  context dá»± Ã¡n.',
          'Landing page giá»‘ng catalogue; form khÃ´ng há»i case.',
          'Booth trÆ°ng sáº£n pháº©m nhÆ°ng khÃ´ng cÃ³ logic solution.',
          'Sales gá»i nhÆ° lead láº¡nh; follow-up gá»­i catalogue chung.',
          'Dashboard chá»‰ Ä‘á»c lead tá»•ng, bá» sample, demo, qualified vÃ  quote.',
          'ÄÃ¡nh giÃ¡ quÃ¡ sá»›m trong khi sales cycle dÃ i hÆ¡n.',
          'KhÃ´ng cÃ³ tÃ i liá»‡u giÃºp KTS tÆ° váº¥n láº¡i cho khÃ¡ch.',
        ],
      },
      {
        type: 'paragraph',
        text: 'B2B khÃ´ng tá»‘t hÆ¡n bÃ¡n láº»; nÃ³ phá»¥c vá»¥ hÃ nh trÃ¬nh khÃ¡c. MÃ´ hÃ¬nh sai cÃ³ thá»ƒ táº¡o attention nhÆ°ng khÃ³ thÃ nh cÆ¡ há»™i.',
      },
      { type: 'heading', text: 'Checklist campaign B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c launch, kiá»ƒm tra direction cÃ³ theo case/solution, proof Ä‘á»§ dÃ¹ng, CTA má»Ÿ Ä‘Ãºng bÆ°á»›c tiáº¿p theo, form giá»¯ context, sales Ä‘Æ°á»£c brief vÃ  dashboard Ä‘á»c Ä‘Æ°á»£c journey dÃ i hay chÆ°a.',
      },
      { type: 'visual', variant: 'architect-campaign-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n B2B architect campaign planning checklist.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra cÃ´ng thá»©c cÃ³ sáº£n pháº©m, offer, post, ads vÃ  form khÃ´ng thá»ƒ Ã¡p giá»‘ng nhau cho má»i tá»‡p. NhÃ³m chuyÃªn mÃ´n khÃ´ng chá»‰ cáº§n má»™t lá»i chÃ o hÃ ng.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i kiáº¿n trÃºc sÆ°, trust Ä‘áº¿n tá»« case, proof, sample, demo vÃ  kháº£ nÄƒng Ã¡p dá»¥ng vÃ o dá»± Ã¡n tháº­t. Há» cáº§n cháº¥t liá»‡u Ä‘á»ƒ tÆ° váº¥n láº¡i cho ngÆ°á»i khÃ¡c, khÃ´ng chá»‰ thÃ´ng tin Ä‘á»ƒ tá»± mua.',
      },
      {
        type: 'paragraph',
        text: 'Campaign B2B khÃ´ng nháº¥t thiáº¿t táº¡o Ä‘Æ¡n ngay, nhÆ°ng pháº£i táº¡o data cÃ³ context, cuá»™c trÃ² chuyá»‡n cháº¥t lÆ°á»£ng vÃ  cÆ¡ há»™i Ä‘i tiáº¿p. Journey cÃ³ nhiá»u lá»›p trust hÆ¡n nÃªn campaign cÅ©ng pháº£i sÃ¢u hÆ¡n.',
      },
      { type: 'heading', text: 'Thiáº¿t káº¿ theo vai trÃ² vÃ  hÃ nh trÃ¬nh tháº­t' },
      {
        type: 'paragraph',
        text: 'Campaign cho kiáº¿n trÃºc sÆ° khÃ¡c bÃ¡n láº» á»Ÿ vai trÃ² ngÆ°á»i nháº­n, journey, proof, CTA, page, script, follow-up vÃ  dashboard. Team cáº§n Ä‘i tá»« sáº£n pháº©m sang case, tá»« lead tá»•ng sang data cÃ³ ngá»¯ cáº£nh vÃ  tá»« lá»i chÃ o chung sang tÆ° váº¥n theo nhu cáº§u.',
      },
    ],
    cta: 'Náº¿u team chuáº©n bá»‹ campaign cho kiáº¿n trÃºc sÆ° hoáº·c tá»‡p B2B chuyÃªn mÃ´n, Ä‘á»«ng chá»‰ há»i cháº¡y ads hay post gÃ¬. HÃ£y há»i: campaign cÃ³ giÃºp há» hiá»ƒu case, tin solution, nháº­n proof, Ä‘á»ƒ láº¡i nhu cáº§u Ä‘Ãºng context vÃ  Ä‘Æ°á»£c follow-up chuyÃªn mÃ´n khÃ´ng?',
  },
  {
    title: 'LÃ m sao Ä‘á»ƒ team content, design, ads, IT khÃ´ng má»—i ngÆ°á»i hiá»ƒu má»™t kiá»ƒu?',
    slug: 'lam-sao-de-team-content-design-ads-it-khong-moi-nguoi-hieu-mot-kieu',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-workshop-selfie-01.jpg",
                "alt": "Workshop room selfie with people at a table",
                "caption": "Workshop working session",
                "width": 1448,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-whiteboard-standing-presentation-01.jpg",
                      "alt": "Person presenting at a board during a workshop",
                      "caption": "Workshop board presentation",
                      "width": 1386,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "Source of truth lÃ  gÃ¬?"
                }
          ]
    },
    excerpt:
      'Má»™t campaign nhá» ráº¥t dá»… lá»‡ch khi content, design, ads, IT, landing page vÃ  sales má»—i ngÆ°á»i hiá»ƒu direction theo má»™t kiá»ƒu. Muá»‘n giáº£m lá»‡ch, team cáº§n má»™t source of truth chung: campaign brief, concept, tagline váº­n hÃ nh, channel role, proof assets, landing spec, tracking spec, owner, timeline vÃ  checklist review trÆ°á»›c launch.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t campaign nhá» cÃ³ thá»ƒ trÃ´ng ráº¥t báº­n rá»™n: content viáº¿t post, design lÃ m visual, ads chuáº©n bá»‹ campaign, IT dá»±ng landing page, sales chá» lead. NhÆ°ng lÃºc ghÃ©p láº¡i, leader má»›i nháº­n ra má»—i ngÆ°á»i Ä‘ang hiá»ƒu campaign hÆ¡i khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'Content viáº¿t theo gÃ³c nhÃ¬n content, design nháº¥n pháº§n mÃ¬nh tháº¥y quan trá»ng, ads chá»n hook dá»… kÃ©o click, IT dá»±ng Ä‘Ãºng task Ä‘Æ°á»£c giao, sales dÃ¹ng script quen thuá»™c. KhÃ´ng ai cá»‘ tÃ¬nh lÃ m sai, nhÆ°ng pháº§n thiáº¿u Ä‘Æ°á»£c má»—i ngÆ°á»i tá»± Ä‘iá»n báº±ng kinh nghiá»‡m riÃªng.',
      },
      {
        type: 'paragraph',
        text: 'Muá»‘n team khÃ´ng má»—i ngÆ°á»i hiá»ƒu má»™t kiá»ƒu, Ä‘á»«ng chá»‰ giao viá»‡c. HÃ£y táº¡o má»™t source of truth Ä‘á»ƒ má»i ngÆ°á»i cÃ¹ng nhÃ¬n.',
      },
      { type: 'heading', text: 'Team lá»‡ch khÃ´ng háº³n vÃ¬ thiáº¿u nÄƒng lá»±c' },
      {
        type: 'paragraph',
        text: 'Khi output lá»‡ch, pháº£n á»©ng thÆ°á»ng lÃ  content chÆ°a Ä‘Ãºng, design chÆ°a hiá»ƒu Ã½, ads kÃ©o sai angle, IT lÃ m page chÆ°a giá»‘ng mong muá»‘n hoáº·c sales follow-up chÆ°a bÃ¡m. NhÆ°ng gá»‘c váº¥n Ä‘á» thÆ°á»ng xuáº¥t hiá»‡n sá»›m hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Brief cÃ³ thá»ƒ mÆ¡ há»“, direction chá»‰ náº±m trong Ä‘áº§u leader, tagline chÆ°a Ä‘Æ°á»£c giáº£i thÃ­ch, channel role chÆ°a viáº¿t ra, proof ráº£i rÃ¡c, landing spec vÃ  tracking chÆ°a chá»‘t, sales chÆ°a Ä‘Æ°á»£c brief, owner cuá»‘i cÃ¹ng khÃ´ng rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Khi chá»‰ nháº­n má»™t task rá»i ráº¡c, má»—i ngÆ°á»i buá»™c pháº£i tá»± láº¥p khoáº£ng trá»‘ng. Campaign báº¯t Ä‘áº§u lá»‡ch tá»« nhá»¯ng pháº§n khÃ´ng ai nÃ³i rÃµ.',
      },
      { type: 'visual', variant: 'campaign-team-misalignment' },
      { type: 'heading', text: 'Source of truth lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Source of truth lÃ  nÆ¡i duy nháº¥t cáº£ team cÃ³ thá»ƒ má»Ÿ ra Ä‘á»ƒ hiá»ƒu campaign. Vá»›i team nhá», nÃ³ cÃ³ thá»ƒ lÃ  Google Doc, Notion page, Sheet, folder cÃ³ cáº¥u trÃºc, brief má»™t Ä‘áº¿n hai trang hoáº·c task board Ä‘Æ¡n giáº£n.',
      },
      {
        type: 'paragraph',
        text: 'NÆ¡i Ä‘Ã³ cáº§n gom objective, audience, insight, core message, operating tagline, offer, CTA, proof assets, channel role, content angle, landing spec, form fields, tracking event, sales script, follow-up angle, owner, timeline vÃ  launch checklist.',
      },
      {
        type: 'paragraph',
        text: 'Má»¥c tiÃªu khÃ´ng pháº£i lÃ m quy trÃ¬nh Ä‘áº¹p. Source of truth giáº£m sá»‘ láº§n team pháº£i há»i láº¡i, Ä‘oÃ¡n láº¡i vÃ  sá»­a láº¡i.',
      },
      { type: 'visual', variant: 'shared-campaign-source-of-truth' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch táº¡o campaign source of truth cho team nhá».',
      },
      { type: 'heading', text: 'Má»—i team cáº§n biáº¿t pháº§n nÃ o trong campaign?' },
      {
        type: 'paragraph',
        text: 'Content cáº§n audience, insight, message, tagline, angle, proof Ä‘Æ°á»£c dÃ¹ng vÃ  CTA. Design cáº§n message hierarchy, visual priority, proof, format vÃ  giá»›i háº¡n khÃ´ng Ä‘Æ°á»£c lÃ m lá»‡ch.',
      },
      {
        type: 'paragraph',
        text: 'Ads cáº§n objective, audience, hook Ä‘Æ°á»£c test, landing URL, conversion signal, UTM, budget vÃ  timeline. IT cáº§n page structure, form fields, CTA behavior, thank-you state, tracking event, data destination vÃ  mobile requirement.',
      },
      {
        type: 'paragraph',
        text: 'Sales cáº§n context lead, offer khÃ¡ch Ä‘Ã£ tháº¥y, nhu cáº§u trong form, opening script, tÃ i liá»‡u follow-up vÃ  status cáº§n update. Founder cáº§n direction, owner, launch criteria vÃ  cÃ¡ch Ä‘o sau campaign.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i team khÃ´ng cáº§n má»i chi tiáº¿t nhÆ° nhau, nhÆ°ng pháº£i nháº­n Ä‘Ãºng thÃ´ng tin Ä‘á»ƒ khÃ´ng tá»± diá»…n giáº£i pháº§n viá»‡c.',
      },
      { type: 'visual', variant: 'campaign-team-role-map' },
      { type: 'heading', text: 'Handoff pháº£i rÃµ, khÃ´ng chá»‰ â€œem lÃ m tiáº¿p nhÃ©â€' },
      {
        type: 'paragraph',
        text: 'Campaign dá»… lá»‡ch khi chuyá»ƒn tá»« leader sang content, content sang design, output sang ads, brief sang page, page sang tracking, form lead sang sales vÃ  sales status sang dashboard.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t handoff tá»‘t nÃ³i rÃµ output, input láº¥y á»Ÿ Ä‘Ã¢u, pháº§n Ä‘Ã£ chá»‘t, pháº§n Ä‘Æ°á»£c Ä‘á» xuáº¥t, acceptance criteria, deadline, ngÆ°á»i duyá»‡t vÃ  yÃªu cáº§u data hoáº·c tracking.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ â€œlÃ m landing page cho campaignâ€, hÃ£y giao: page bÃ¡m brief vÃ  tagline, form cÃ³ field A/B/C, CTA nháº­n solution kit, submit cÃ³ thank-you state, event lÃ  form_submit_success vÃ  data vá» Ä‘Ãºng CRM hoáº·c Sheet.',
      },
      {
        type: 'paragraph',
        text: 'Handoff rÃµ khÃ´ng láº¥y máº¥t sÃ¡ng táº¡o. NÃ³ giÃºp sÃ¡ng táº¡o khÃ´ng lá»‡ch má»¥c tiÃªu.',
      },
      { type: 'visual', variant: 'campaign-handoff-flow' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign bá»‹ sá»­a nhiá»u láº§n vÃ¬ content, design, ads, IT vÃ  sales khÃ´ng dÃ¹ng chung source of truth.',
      },
      { type: 'heading', text: 'Review output báº±ng brief, khÃ´ng báº±ng cáº£m giÃ¡c' },
      {
        type: 'paragraph',
        text: 'Nhá»¯ng cÃ¢u nhÆ° â€œchÆ°a hayâ€, â€œvisual chÆ°a Ä‘Ã£â€, â€œpost hÆ¡i yáº¿uâ€ hoáº·c â€œpage chÆ°a premiumâ€ cÃ³ thá»ƒ pháº£n Ã¡nh cáº£m nháº­n tháº­t, nhÆ°ng ngÆ°á»i lÃ m khÃ³ biáº¿t pháº£i sá»­a theo tiÃªu chuáº©n nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Review báº±ng brief sáº½ há»i output cÃ³ bÃ¡m audience vÃ  insight, giá»¯ core message, dÃ¹ng Ä‘Ãºng proof, CTA rÃµ, khá»›p concept, chá»‰ ra next step, thu Ä‘Ãºng data, tracking Ä‘Æ°á»£c vÃ  sales follow-up Ä‘Æ°á»£c khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Brief khÃ´ng biáº¿n review thÃ nh mÃ¡y mÃ³c. NÃ³ lÃ m tranh luáº­n cÃ³ tiÃªu chuáº©n hÆ¡n.',
      },
      { type: 'heading', text: 'Campaign nhá» cÅ©ng cáº§n nhá»‹p review Ä‘Æ¡n giáº£n' },
      {
        type: 'list',
        items: [
          'Kickoff: chá»‘t brief, direction, tagline, owner vÃ  timeline.',
          'First draft review: xem angle, key visual, landing structure vÃ  ads hook cÃ³ bÃ¡m concept.',
          'Pre-launch review: check link, form, tracking, UTM, sales script, follow-up vÃ  dashboard.',
          'Post-launch hoáº·c post-event review: Ä‘á»c signal, sales status, data follow-up vÃ  bÃ i há»c.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n há»p nhiá»u. NhÆ°ng thiáº¿u nhá»‹p review khiáº¿n lá»—i chá»‰ lá»™ gáº§n launch hoáº·c sau khi Ä‘Ã£ cháº¡y. Review Ä‘á»ƒ phÃ¡t hiá»‡n lá»‡ch sá»›m, khÃ´ng pháº£i lÃ m cháº­m.',
      },
      { type: 'heading', text: 'Sales vÃ  IT pháº£i vÃ o brief sá»›m hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Nhiá»u campaign brief content, design vÃ  ads trÆ°á»›c; IT nháº­n page khi copy gáº§n xong, sales nháº­n lead khi campaign Ä‘Ã£ cháº¡y, tracking chá»‰ Ä‘Æ°á»£c há»i sÃ¡t launch.',
      },
      {
        type: 'paragraph',
        text: 'Káº¿t quáº£ lÃ  page khÃ´ng thu Ä‘Ãºng data, form thiáº¿u field sales cáº§n, tracking thiáº¿u event, sales khÃ´ng biáº¿t lead Ä‘áº¿n tá»« concept nÃ o vÃ  follow-up khÃ´ng cÃ³ tÃ i liá»‡u phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'IT vÃ  sales khÃ´ng pháº£i pháº§n cuá»‘i. Há» lÃ  má»™t pháº§n cá»§a campaign system ngay tá»« brief.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥ campaign B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Team lÃ m campaign â€œBá»™ giáº£i phÃ¡p bá» máº·t cho nhá»¯ng case thi cÃ´ng khÃ³â€. KhÃ´ng cÃ³ source of truth, content viáº¿t vá» sáº£n pháº©m, design dÃ¹ng máº«u chung, ads kÃ©o báº±ng Æ°u Ä‘Ã£i, page giá»›i thiá»‡u cÃ´ng ty, QR chá»‰ há»i contact vÃ  sales gá»i chung chung.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ source of truth, brief xÃ¡c Ä‘á»‹nh audience lÃ  KTS vÃ  nhÃ  tháº§u tÆ° váº¥n; insight lÃ  há» cáº§n case vÃ  proof Ä‘á»ƒ tÆ° váº¥n chá»§ nhÃ . Tagline xuáº¥t hiá»‡n á»Ÿ social, booth vÃ  landing page. Content viáº¿t theo case, design nháº¥n sample, ads kÃ©o solution kit.',
      },
      {
        type: 'paragraph',
        text: 'Page chia theo case, form há»i interest, sales gá»i theo tag. Dashboard Ä‘á»c QR, form, Contacted, Qualified, Demo vÃ  Quote. Team khÃ´ng tá»± nhiÃªn giá»i hÆ¡n; há» chá»‰ bá»›t pháº£i Ä‘oÃ¡n.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i khiáº¿n team hiá»ƒu sai nhau' },
      {
        type: 'list',
        items: [
          'Direction chá»‰ náº±m trong Ä‘áº§u leader.',
          'Brief quÃ¡ chung hoáº·c chá»‰ giao task, khÃ´ng giao context.',
          'Content vÃ  design khÃ´ng cÃ¹ng nhÃ¬n message hierarchy.',
          'Ads chá»n hook khÃ¡c landing page.',
          'IT khÃ´ng biáº¿t tracking vÃ  data requirement.',
          'Sales chÆ°a Ä‘Æ°á»£c brief trÆ°á»›c khi lead vá».',
          'Proof assets ráº£i rÃ¡c, khÃ´ng cÃ³ owner cuá»‘i cÃ¹ng.',
          'Duyá»‡t output báº±ng cáº£m giÃ¡c vÃ  khÃ´ng review sau launch.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Team nhá» cÃ ng cáº§n rÃµ vÃ¬ má»™t ngÆ°á»i thÆ°á»ng kiÃªm nhiá»u vai; direction mÆ¡ há»“ lÃ m lá»—i lan ráº¥t nhanh.',
      },
      { type: 'heading', text: 'Checklist Ä‘á»ƒ team khÃ´ng má»—i ngÆ°á»i hiá»ƒu má»™t kiá»ƒu' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c sáº£n xuáº¥t, kiá»ƒm tra source of truth, objective, audience, insight, message, tagline, proof, channel role, landing spec, form, tracking, sales angle, owner vÃ  pre-launch review.',
      },
      { type: 'visual', variant: 'campaign-team-alignment-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign source of truth template cho team nhá».',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra nhiá»u lá»—i khÃ´ng báº¯t Ä‘áº§u á»Ÿ lÃºc content viáº¿t, design lÃ m hay IT dá»±ng page. ChÃºng báº¯t Ä‘áº§u khi team khÃ´ng cÃ¹ng nhÃ¬n má»™t báº£n Ä‘á»“.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ báº£n Ä‘á»“, ngÆ°á»i cÃ³ kinh nghiá»‡m Ä‘oÃ¡n theo kinh nghiá»‡m, ngÆ°á»i má»›i Ä‘oÃ¡n theo task, ngÆ°á»i lÃ m nhanh chá»n cÃ¡ch dá»… triá»ƒn khai, cÃ²n ngÆ°á»i duyá»‡t cuá»‘i kÃ©o má»i thá»© láº¡i báº±ng cáº£m giÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Source of truth khÃ´ng lÃ m team háº¿t lá»—i. NÃ³ giÃºp lá»—i lá»™ sá»›m, sá»­a dá»… vÃ  giáº£m viá»‡c giáº£i thÃ­ch láº¡i. Campaign lÃ  há»‡ phá»‘i há»£p; há»‡ yáº¿u thÃ¬ ngÆ°á»i giá»i cÅ©ng dá»… lÃ m lá»‡ch nhau.',
      },
      { type: 'heading', text: 'Táº¡o báº£n hiá»ƒu chung trÆ°á»›c khi giao viá»‡c' },
      {
        type: 'paragraph',
        text: 'Äá»ƒ cÃ¡c vai trÃ² khÃ´ng hiá»ƒu má»—i kiá»ƒu, team cáº§n brief, concept, tagline, channel role, proof, landing/form/tracking, sales follow-up, owner, timeline vÃ  review cÃ¹ng náº±m trong má»™t source of truth dá»… dÃ¹ng.',
      },
    ],
    cta: 'Náº¿u campaign hay bá»‹ sá»­a vÃ¬ má»—i team hiá»ƒu má»™t kiá»ƒu, Ä‘á»«ng chá»‰ há»p thÃªm. HÃ£y táº¡o source of truth ngáº¯n trÆ°á»›c: nÃ³i vá»›i ai, nÃ³i gÃ¬, dÃ¹ng proof nÃ o, CTA gÃ¬, thu data gÃ¬ vÃ  ai chá»‹u trÃ¡ch nhiá»‡m.',
  },
  {
    title: 'Checklist trÆ°á»›c khi launch má»™t campaign marketing nhá»',
    slug: 'checklist-truoc-khi-launch-mot-campaign-marketing-nho',
    category: 'Campaign System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-marketing-strategy-session-01.jpg",
                "alt": "Workshop room with a marketing strategy presentation",
                "caption": "Marketing strategy workshop session",
                "width": 1332,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-talk-01.jpg",
                      "alt": "Audience watching a presentation in a workshop room",
                      "caption": "Workshop audience session",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "NhÃ³m 1: kiá»ƒm tra direction vÃ  concept"
                }
          ]
    },
    excerpt:
      'Má»™t campaign marketing nhá» khÃ´ng cáº§n quy trÃ¬nh phá»©c táº¡p, nhÆ°ng trÆ°á»›c khi launch váº«n cáº§n checklist rÃµ. Team nÃªn kiá»ƒm tra direction, concept, audience, offer, content, design, ads, landing page, form, tracking, data destination, sales script, follow-up, owner vÃ  dashboard Ä‘á»ƒ trÃ¡nh cháº¡y rá»“i má»›i phÃ¡t hiá»‡n campaign bá»‹ lá»‡ch hoáº·c khÃ´ng Ä‘o Ä‘Æ°á»£c.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ nhá»¯ng campaign Ä‘áº¿n sÃ¡t giá» launch má»›i báº¯t Ä‘áº§u lá»™ lá»—i. Post Ä‘Ã£ xong nhÆ°ng ads dÃ¹ng má»™t hook khÃ¡c. Landing page Ä‘Ã£ dá»±ng nhÆ°ng hero khÃ´ng khá»›p thÃ´ng Ä‘iá»‡p. Form gá»­i Ä‘Æ°á»£c nhÆ°ng thiáº¿u field sales cáº§n. Tracking cÃ³ gáº¯n nhÆ°ng khÃ´ng ai test event. Sales biáº¿t sáº¯p cÃ³ lead, nhÆ°ng chÆ°a biáº¿t khÃ¡ch Ä‘áº¿n tá»« concept nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Team nhá» thÆ°á»ng muá»‘n cháº¡y nhanh. NhÆ°ng náº¿u thiáº¿u checklist, lá»—i nhá» chá»‰ rÆ¡i ra sau khi campaign Ä‘Ã£ báº­t: ads Ä‘Ã£ tiÃªu tiá»n, data Ä‘Ã£ vá» sai hoáº·c sales gá»i thiáº¿u ngá»¯ cáº£nh. Sá»­a lÃºc nÃ y luÃ´n má»‡t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Checklist trÆ°á»›c launch khÃ´ng pháº£i quy trÃ¬nh náº·ng. NÃ³ giÃºp team tá»± há»i campaign Ä‘Ã£ Ä‘á»§ rÃµ, Ä‘á»§ khá»›p vÃ  Ä‘á»§ Ä‘o chÆ°a. Má»™t campaign nhá» khÃ´ng cáº§n phá»©c táº¡p, nhÆ°ng cáº§n trÃ¡nh nhá»¯ng lá»—i ráº¥t cÆ¡ báº£n trÆ°á»›c khi cháº¡y tháº­t.',
      },
      { type: 'heading', text: 'Launch checklist lÃ  lá»›p kiá»ƒm tra há»‡ thá»‘ng, khÃ´ng pháº£i thá»§ tá»¥c' },
      {
        type: 'paragraph',
        text: 'Nghe Ä‘áº¿n checklist, nhiá»u ngÆ°á»i nghÄ© tá»›i hÃ nh chÃ­nh. Trong campaign, nÃ³ dÃ¹ng Ä‘á»ƒ kiá»ƒm tra direction chung; message giá»¯a social, ads vÃ  page; data form; tracking; sales follow-up; owner, deadline vÃ  dashboard.',
      },
      {
        type: 'paragraph',
        text: 'Checklist khÃ´ng Ä‘áº£m báº£o campaign tháº¯ng. NÃ³ giÃºp campaign khÃ´ng tá»± thua vÃ¬ lá»—i váº­n hÃ nh.',
      },
      { type: 'visual', variant: 'campaign-launch-readiness-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough checklist trÆ°á»›c khi launch campaign marketing nhá».',
      },
      { type: 'heading', text: 'NhÃ³m 1: kiá»ƒm tra direction vÃ  concept' },
      {
        type: 'list',
        items: [
          'Objective Ä‘Ã£ rÃµ; audience chÃ­nh vÃ  problem/insight Ä‘Ã£ Ä‘á»§ cá»¥ thá»ƒ chÆ°a?',
          'Core message cÃ³ dá»… hiá»ƒu; operating tagline cÃ³ lá»c Ä‘Æ°á»£c output khÃ´ng?',
          'Offer, CTA vÃ  proof chÃ­nh Ä‘Ã£ rÃµ chÆ°a?',
          'Social, ads, landing page vÃ  sales cÃ³ cÃ¹ng bÃ¡m concept khÃ´ng?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Direction chÆ°a rÃµ thÃ¬ cÃ¡c pháº§n sau dÃ¹ lÃ m nhanh váº«n dá»… lá»‡ch. Content viáº¿t theo cáº£m giÃ¡c, design tá»± chá»n Ä‘iá»ƒm nháº¥n, ads kÃ©o hook riÃªng, page ká»ƒ chuyá»‡n khÃ¡c vÃ  sales xá»­ lÃ½ nhÆ° lead cÅ©. TrÆ°á»›c khi há»i â€œÄ‘Ã£ cÃ³ post chÆ°aâ€, hÃ£y há»i â€œteam Ä‘Ã£ hiá»ƒu cÃ¹ng má»™t campaign chÆ°aâ€.',
      },
      { type: 'heading', text: 'NhÃ³m 2: kiá»ƒm tra content, design vÃ  ads' },
      {
        type: 'list',
        items: [
          'Content angle vÃ  tá»«ng post cÃ³ bÃ¡m audience, insight, concept khÃ´ng?',
          'Visual hierarchy cÃ³ lÃ m rÃµ message; key visual cÃ³ nháº¥n Ä‘Ãºng proof vÃ  CTA khÃ´ng?',
          'Ads hook cÃ³ táº¡o Ä‘Ãºng ká»³ vá»ng vÃ  trá» Ä‘Ãºng landing page khÃ´ng?',
          'UTM/campaign naming Ä‘Ã£ thá»‘ng nháº¥t; creative test, creative backup vÃ  lá»‹ch publish Ä‘Ã£ rÃµ chÆ°a?',
          'Ai duyá»‡t báº£n cuá»‘i?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Content, design vÃ  ads khÃ´ng cáº§n giá»‘ng nhau y há»‡t, nhÆ°ng pháº£i kÃ©o khÃ¡ch vá» cÃ¹ng má»™t lá»i há»©a. Click chÆ°a Ä‘á»§; click pháº£i Ä‘i Ä‘Ãºng vÃ o cÃ¢u chuyá»‡n mÃ  landing page vÃ  sales cÃ³ thá»ƒ tiáº¿p ná»‘i.',
      },
      { type: 'visual', variant: 'campaign-launch-flow' },
      { type: 'heading', text: 'NhÃ³m 3: kiá»ƒm tra landing page, form vÃ  mobile' },
      {
        type: 'list',
        items: [
          'Hero cÃ³ khá»›p social/ads/event; problem, offer, CTA, proof vÃ  pháº§n â€œkhÃ¡ch nháº­n Ä‘Æ°á»£c gÃ¬â€ cÃ³ rÃµ khÃ´ng?',
          'FAQ Ä‘Ã£ xá»­ lÃ½ objection cÆ¡ báº£n; link CTA, hotline, Zalo, Messenger cÃ³ hoáº¡t Ä‘á»™ng khÃ´ng?',
          'Form cÃ³ dá»… Ä‘iá»n, Ä‘á»§ field cho follow-up vÃ  cÃ³ thank-you state rÃµ khÃ´ng?',
          'Data cÃ³ vá» Ä‘Ãºng CRM/Sheet/email; sales cÃ³ tháº¥y source vÃ  campaign khÃ´ng?',
          'Mobile cÃ³ dá»… Ä‘á»c, dá»… báº¥m vÃ  tá»‘c Ä‘á»™ táº£i á»Ÿ má»©c cháº¥p nháº­n Ä‘Æ°á»£c khÃ´ng?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Landing page khÃ´ng chá»‰ cáº§n Ä‘áº¹p. NÃ³ pháº£i biáº¿n sá»± quan tÃ¢m thÃ nh hÃ nh Ä‘á»™ng vÃ  táº¡o ra data cÃ³ thá»ƒ xá»­ lÃ½.',
      },
      { type: 'heading', text: 'NhÃ³m 4: kiá»ƒm tra tracking vÃ  data trÆ°á»›c khi cháº¡y' },
      {
        type: 'paragraph',
        text: 'Tracking thÆ°á»ng bá»‹ Ä‘á»ƒ Ä‘áº¿n cuá»‘i, nhÆ°ng náº¿u sai thÃ¬ campaign ráº¥t khÃ³ Ä‘á»c. Team cáº§n test PageView, CTA click, form submit success vÃ  lead event; event chá»‰ Ä‘Æ°á»£c báº¯n Ä‘Ãºng thá»i Ä‘iá»ƒm, khÃ´ng trÃ¹ng.',
      },
      {
        type: 'list',
        items: [
          'QR scan cÃ³ source; UTM/source/campaign cÃ³ Ä‘Æ°á»£c lÆ°u khÃ´ng?',
          'Náº¿u há»‡ thá»‘ng há»— trá»£, form_name, page_location vÃ  campaign_name Ä‘Ã£ Ä‘Ãºng chÆ°a?',
          'Data vá» CRM/Sheet cÃ³ Ä‘á»§ field vÃ  khÃ´ng duplicate khÃ´ng?',
          'Dashboard Ä‘Ã£ Ä‘á»c Ä‘Æ°á»£c data; toÃ n bá»™ flow Ä‘Ã£ test trÃªn mobile chÆ°a?',
        ],
      },
      { type: 'visual', variant: 'tracking-data-launch-check' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign bá»‹ lá»—i launch vÃ¬ form/tracking/sales chÆ°a Ä‘Æ°á»£c check trÆ°á»›c.',
      },
      { type: 'heading', text: 'NhÃ³m 5: kiá»ƒm tra sales script vÃ  follow-up' },
      {
        type: 'list',
        items: [
          'Sales Ä‘Ã£ Ä‘Æ°á»£c brief concept, campaign, offer khÃ¡ch tháº¥y vÃ  nhu cáº§u form há»i chÆ°a?',
          'CÃ³ opening script theo ngá»¯ cáº£nh vÃ  tÃ i liá»‡u/case/sample Ä‘á»ƒ gá»­i sau cuá»™c gá»i khÃ´ng?',
          'Owner tá»«ng nhÃ³m lead vÃ  status cáº§n cáº­p nháº­t Ä‘Ã£ rÃµ chÆ°a?',
          'Timeline follow-up 24â€“48h, message cho nhÃ³m hot/warm/nurture vÃ  next action sau cuá»™c gá»i Ä‘Ã£ cÃ³ chÆ°a?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u sales chÆ°a Ä‘Æ°á»£c brief, lead campaign dá»… bá»‹ Ä‘á»‘i xá»­ nhÆ° lead láº¡nh vÃ  ngá»¯ cáº£nh marketing Ä‘Ã£ táº¡o sáº½ máº¥t. Campaign khÃ´ng káº¿t thÃºc á»Ÿ form submit; nÃ³ chá»‰ chuyá»ƒn sang má»™t Ä‘oáº¡n khÃ¡c cá»§a há»‡ thá»‘ng.',
      },
      { type: 'heading', text: 'NhÃ³m 6: kiá»ƒm tra owner, timeline vÃ  ká»‹ch báº£n lá»—i' },
      {
        type: 'paragraph',
        text: 'Campaign cáº§n má»™t owner, ngÆ°á»i duyá»‡t content/design/ads/page, ngÆ°á»i test tracking, ngÆ°á»i nháº­n vÃ  giao lead, ngÆ°á»i Ä‘á»c dashboard, cÃ¹ng ngÆ°á»i cÃ³ quyá»n táº¯t, sá»­a hoáº·c tÄƒng ngÃ¢n sÃ¡ch. Má»‘c launch vÃ  review sau 24h, 48h, 7 ngÃ y cÅ©ng pháº£i Ä‘Æ°á»£c chá»‘t.',
      },
      {
        type: 'list',
        items: [
          'Form khÃ´ng gá»­i hoáº·c data khÃ´ng vá» CRM/Sheet: ai xá»­ lÃ½?',
          'Ads khÃ´ng phÃ¢n phá»‘i hoáº·c landing page lá»—i mobile: ai quyáº¿t Ä‘á»‹nh chá»‰nh?',
          'Sales bÃ¡o lead thiáº¿u context: ai bá»• sung field?',
          'Tracking lá»‡ch: Ä‘iá»u kiá»‡n nÃ o cáº§n pause, Ä‘iá»u kiá»‡n nÃ o váº«n cháº¡y?',
        ],
      },
      { type: 'visual', variant: 'pre-launch-risk-check' },
      { type: 'heading', text: 'VÃ­ dá»¥: launch campaign B2B cho kiáº¿n trÃºc sÆ°' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign nhá» dÃ¹ng concept â€œBá»™ giáº£i phÃ¡p bá» máº·t cho nhá»¯ng case thi cÃ´ng khÃ³â€. Audience lÃ  kiáº¿n trÃºc sÆ°, designer vÃ  nhÃ  tháº§u tÆ° váº¥n. Objective lÃ  thu data cÃ³ nhu cáº§u cá»¥ thá»ƒ Ä‘á»ƒ gá»­i solution kit, sample, demo hoáº·c tÆ° váº¥n; message Ä‘i theo case thay vÃ¬ bÃ¡n sáº£n pháº©m láº».',
      },
      {
        type: 'paragraph',
        text: 'Social ká»ƒ tá»«ng case, visual nháº¥n sample vÃ  proof, ads kÃ©o vá» solution kit, UTM theo campaign vÃ  angle. Landing page giá»¯ tagline, chia case chá»‘ng tháº¥m, gá»—, kim loáº¡i, ngoÃ i trá»i, cáº£i táº¡o vÃ  nhÃ  ven biá»ƒn. Form há»i vai trÃ², cÃ´ng ty, case quan tÃ¢m vÃ  nhu cáº§u tiáº¿p theo.',
      },
      {
        type: 'paragraph',
        text: 'QR scan, form submit vÃ  interest tag vá» CRM/Sheet. Dashboard Ä‘á»c lead theo case vÃ  status. Sales má»Ÿ Ä‘áº§u theo case khÃ¡ch chá»n; lead hot Ä‘Æ°á»£c follow-up trong 24â€“48h vá»›i cÃ¡c status contacted, qualified, demo booked, quote hoáº·c follow-up later.',
      },
      {
        type: 'paragraph',
        text: 'Launch tá»‘t khÃ´ng cÃ³ nghÄ©a má»i thá»© hoÃ n háº£o. NÃ³ cÃ³ nghÄ©a nhá»¯ng pháº§n quan trá»ng Ä‘Ã£ Ä‘Æ°á»£c kiá»ƒm tra trÆ°á»›c khi cháº¡y tháº­t.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p trÆ°á»›c khi launch campaign nhá»' },
      {
        type: 'list',
        items: [
          'ChÆ°a chá»‘t direction nhÆ°ng Ä‘Ã£ lÃ m post; cÃ³ tagline nhÆ°ng landing page khÃ´ng dÃ¹ng.',
          'Ads hook lá»‡ch hero; form gá»­i Ä‘Æ°á»£c nhÆ°ng thiáº¿u field; khÃ´ng cÃ³ thank-you state.',
          'KhÃ´ng test mobile, CTA click, hotline, Zalo hoáº·c Messenger.',
          'Event báº¯n sai; UTM má»—i ngÆ°á»i Ä‘áº·t má»™t kiá»ƒu.',
          'Data vá» Sheet nhÆ°ng khÃ´ng cÃ³ owner; sales chÆ°a Ä‘Æ°á»£c brief vÃ  chÆ°a cÃ³ follow-up message.',
          'Dashboard khÃ´ng Ä‘á»c Ä‘Æ°á»£c status; khÃ´ng cÃ³ má»‘c review hoáº·c ngÆ°á»i cÃ³ quyá»n quyáº¿t Ä‘á»‹nh khi lá»—i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c lá»—i nÃ y khÃ´ng khÃ³ sá»­a. NhÆ°ng náº¿u bá» qua, campaign cÃ³ thá»ƒ máº¥t tiá»n, data hoáº·c ngá»¯ cáº£nh.',
      },
      { type: 'heading', text: 'Checklist tá»•ng trÆ°á»›c khi launch campaign marketing nhá»' },
      {
        type: 'paragraph',
        text: 'Má»™t lÆ°á»£t pre-launch review ngáº¯n nÃªn Ä‘i qua Ä‘á»§ sÃ¡u lá»›p, theo Ä‘Ãºng flow khÃ¡ch vÃ  data sáº½ di chuyá»ƒn.',
      },
      { type: 'visual', variant: 'campaign-launch-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign launch checklist template cho team nhá».',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra launch khÃ´ng chá»‰ lÃ  lÃºc báº­t ads hoáº·c Ä‘Äƒng post Ä‘áº§u tiÃªn. ÄÃ³ lÃ  lÃºc há»‡ thá»‘ng bá»‹ kiá»ƒm tra: message cÃ³ khá»›p, page cÃ³ cháº¡y, form cÃ³ ghi nháº­n, data cÃ³ vá», sales cÃ³ biáº¿t gá»i vÃ  dashboard cÃ³ Ä‘á»c Ä‘Æ°á»£c khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Campaign nhá» khÃ´ng cáº§n quy trÃ¬nh náº·ng, nhÆ°ng cáº§n sá»± rÃµ rÃ ng. CÃ ng Ã­t ngÆ°á»i cÃ ng pháº£i rÃµ, vÃ¬ má»™t lá»—i nhá» cÃ³ thá»ƒ lÃ m cáº£ team máº¥t vÃ i ngÃ y sá»­a láº¡i. Checklist khÃ´ng thay tÆ° duy chiáº¿n lÆ°á»£c; nÃ³ giá»¯ nhá»¯ng gÃ¬ Ä‘Ã£ nghÄ© khÃ´ng bá»‹ rÆ¡i khi váº­n hÃ nh.',
      },
      {
        type: 'paragraph',
        text: 'Campaign tá»‘t khÃ´ng chá»‰ lÃ  Ã½ tÆ°á»Ÿng Ä‘Ãºng. ÄÃ³ lÃ  Ã½ tÆ°á»Ÿng Ä‘Ãºng Ä‘Æ°á»£c triá»ƒn khai Ä‘á»§ khá»›p, Ä‘á»§ Ä‘o vÃ  Ä‘á»§ follow-up.',
      },
      { type: 'heading', text: 'Kiá»ƒm tra sÃ¡u lá»›p trÆ°á»›c khi báº¥m cháº¡y' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c launch, team nÃªn kiá»ƒm tra direction/concept, content/design/ads, landing/form, tracking/data, sales/follow-up vÃ  owner/timeline/review. Checklist khÃ´ng lÃ m campaign cháº¯c cháº¯n tháº¯ng, nhÆ°ng giÃºp trÃ¡nh lá»—i cÆ¡ báº£n khiáº¿n team máº¥t tiá»n, máº¥t data vÃ  máº¥t ngá»¯ cáº£nh.',
      },
    ],
    cta: 'Náº¿u team cá»§a báº¡n sáº¯p launch má»™t campaign má»›i, Ä‘á»«ng chá»‰ há»i â€œpost xong chÆ°aâ€ hay â€œads báº­t chÆ°aâ€. HÃ£y há»i: campaign Ä‘Ã£ Ä‘á»§ rÃµ, Ä‘á»§ khá»›p, Ä‘á»§ Ä‘o, Ä‘á»§ ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m vÃ  Ä‘á»§ follow-up chÆ°a?',
  },
  {
    title: 'CRM Ä‘Æ¡n giáº£n cho SME khÃ´ng pháº£i Ä‘á»ƒ quáº£n lÃ½ cho vui, mÃ  Ä‘á»ƒ khÃ´ng máº¥t khÃ¡ch',
    slug: 'crm-don-gian-cho-sme-khong-phai-de-quan-ly-cho-vui-ma-de-khong-mat-khach',
    category: 'CRM & Sales Follow-up',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-team-dinner-group-01.jpg",
                "alt": "Team group selfie at a restaurant table",
                "caption": "Team meal group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-team-group-formal-team-photo-01.jpg",
                      "alt": "Formal team group photo indoors",
                      "caption": "Formal team group photo",
                      "width": 958,
                      "height": 960,
                      "fit": "cover",
                      "afterHeading": "KhÃ´ng cÃ³ CRM, lead thÆ°á»ng rÆ¡i á»Ÿ Ä‘Ã¢u?"
                }
          ]
    },
    excerpt:
      'CRM Ä‘Æ¡n giáº£n cho SME khÃ´ng cáº§n báº¯t Ä‘áº§u báº±ng pháº§n má»m phá»©c táº¡p. NÃ³ cÃ³ thá»ƒ báº¯t Ä‘áº§u tá»« má»™t Google Sheet Ä‘á»§ rÃµ Ä‘á»ƒ biáº¿t lead Ä‘áº¿n tá»« Ä‘Ã¢u, ai phá»¥ trÃ¡ch, khÃ¡ch Ä‘ang á»Ÿ tráº¡ng thÃ¡i nÃ o, cáº§n follow-up khi nÃ o vÃ  káº¿t quáº£ cuá»‘i cÃ¹ng ra sao. Má»¥c tiÃªu Ä‘áº§u tiÃªn cá»§a CRM khÃ´ng pháº£i quáº£n lÃ½ cho Ä‘áº¹p, mÃ  lÃ  khÃ´ng Ä‘á»ƒ máº¥t khÃ¡ch vÃ¬ quÃªn, sÃ³t hoáº·c khÃ´ng ai chá»‹u trÃ¡ch nhiá»‡m.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u doanh nghiá»‡p nhá» khÃ´ng máº¥t khÃ¡ch vÃ¬ thiáº¿u ngÆ°á»i quan tÃ¢m. Há» máº¥t khÃ¡ch vÃ¬ lead Ä‘i vÃ o quÃ¡ nhiá»u chá»—: Zalo, hotline, form, event vÃ  fanpage. Má»—i sales xá»­ lÃ½ theo trÃ­ nhá»›, marketing chá»‰ biáº¿t Ä‘Ã£ cÃ³ lead, cÃ²n founder khÃ´ng biáº¿t lead náº±m á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Lead khÃ´ng biáº¿n máº¥t ngay. NÃ³ rÆ¡i dáº§n qua nhá»¯ng Ä‘oáº¡n nhá»: quÃªn gá»i láº¡i, gá»i cháº­m, khÃ´ng ghi nhu cáº§u, khÃ´ng rÃµ ai phá»¥ trÃ¡ch, khÃ´ng cÃ³ ngÃ y follow-up hoáº·c khÃ´ng cáº­p nháº­t tráº¡ng thÃ¡i.',
      },
      {
        type: 'paragraph',
        text: 'Marketing nÃ³i lead cÃ³ vá», sales tháº¥y lead chÆ°a phÃ¹ há»£p, founder khÃ´ng biáº¿t váº¥n Ä‘á» náº±m á»Ÿ nguá»“n, xá»­ lÃ½ hay follow-up. CRM tá»‘i thiá»ƒu khÃ´ng Ä‘á»ƒ doanh nghiá»‡p trÃ´ng chuyÃªn nghiá»‡p hÆ¡n; nÃ³ giá»¯ lead khÃ´ng rÆ¡i giá»¯a marketing vÃ  sales.',
      },
      { type: 'heading', text: 'CRM khÃ´ng nháº¥t thiáº¿t pháº£i báº¯t Ä‘áº§u báº±ng pháº§n má»m lá»›n' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team nghÄ© CRM lÃ  pháº§n má»m phá»©c táº¡p vÃ  nháº­p liá»‡u náº·ng. Vá»›i team nhá», nÃ³ cÃ³ thá»ƒ báº¯t Ä‘áº§u báº±ng má»™t Google Sheet cÃ³ cáº¥u trÃºc, gom lead tá»« form, ads, event, Zalo vÃ  hotline.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i dÃ²ng cáº§n owner, status, next action, follow-up date vÃ  outcome. Má»™t dashboard nhá» theo nguá»“n vÃ  tráº¡ng thÃ¡i lÃ  Ä‘á»§. CRM khÃ´ng pháº£i pháº§n má»m trÆ°á»›c; nÃ³ lÃ  cÃ¡ch team thá»‘ng nháº¥t viá»‡c ghi nháº­n, xá»­ lÃ½ vÃ  theo dÃµi lead.',
      },
      { type: 'visual', variant: 'simple-crm-purpose' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch dá»±ng CRM Google Sheet Ä‘Æ¡n giáº£n cho SME.',
      },
      { type: 'heading', text: 'KhÃ´ng cÃ³ CRM, lead thÆ°á»ng rÆ¡i á»Ÿ Ä‘Ã¢u?' },
      {
        type: 'list',
        items: [
          'Lead náº±m ráº£i rÃ¡c: form vá» email, inbox á»Ÿ fanpage, Zalo trong Ä‘iá»‡n thoáº¡i sales, hotline khÃ´ng ghi láº¡i, data event á»Ÿ sheet khÃ¡c.',
          'Nhiá»u ngÆ°á»i tháº¥y lead nhÆ°ng khÃ´ng ai nháº­n trÃ¡ch nhiá»‡m xá»­ lÃ½.',
          'Gá»i xong khÃ´ng ghi contacted, qualified, háº¹n láº¡i hay máº¥t liÃªn há»‡.',
          'KhÃ¡ch chÆ°a mua ngay nhÆ°ng khÃ´ng cÃ³ ngÃ y follow-up cá»¥ thá»ƒ.',
          'Marketing chá»‰ biáº¿t sá»‘ lead, khÃ´ng biáº¿t lead cÃ³ bÃ¡o giÃ¡ hoáº·c Ä‘i tiáº¿p khÃ´ng.',
          'Founder chá»‰ nghe â€œlead yáº¿uâ€ hoáº·c â€œkhÃ¡ch chÆ°a cÃ³ nhu cáº§uâ€ mÃ  khÃ´ng cÃ³ data chung Ä‘á»ƒ kiá»ƒm tra.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lead hiáº¿m khi máº¥t vÃ¬ má»™t lá»—i lá»›n. NÃ³ máº¥t vÃ¬ nhiá»u Ä‘iá»ƒm rÆ¡i nhá» khÃ´ng Ä‘Æ°á»£c ghi láº¡i.',
      },
      { type: 'visual', variant: 'no-crm-vs-simple-crm' },
      { type: 'heading', text: 'CRM tá»‘i thiá»ƒu nÃªn tráº£ lá»i Ä‘Æ°á»£c 6 cÃ¢u há»i' },
      {
        type: 'list',
        items: [
          'Lead Ä‘áº¿n tá»« Ä‘Ã¢u: ads, landing page, event, hotline, Zalo, giá»›i thiá»‡u hay organic?',
          'Lead lÃ  ai: tÃªn, contact, cÃ´ng ty/vai trÃ² náº¿u lÃ  B2B vÃ  nhu cáº§u ban Ä‘áº§u?',
          'Ai Ä‘ang phá»¥ trÃ¡ch: sales, team hay owner nÃ o?',
          'KhÃ¡ch á»Ÿ tráº¡ng thÃ¡i nÃ o: new, contacted, cannot contact, interested, qualified, quoted, won, lost hay follow-up later?',
          'Viá»‡c tiáº¿p theo lÃ  gÃ¬: gá»i láº¡i, gá»­i tÃ i liá»‡u, bÃ¡o giÃ¡, háº¹n demo, gá»­i máº«u hay nuÃ´i tiáº¿p?',
          'Káº¿t quáº£ cuá»‘i cÃ¹ng ra sao: khÃ´ng phÃ¹ há»£p, Ä‘ang cÃ¢n nháº¯c, bÃ¡o giÃ¡, chá»‘t, máº¥t hay háº¹n láº¡i?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u CRM chÆ°a tráº£ lá»i Ä‘Æ°á»£c sÃ¡u cÃ¢u há»i nÃ y, nÃ³ chÆ°a giÃºp team váº­n hÃ nh tá»‘t, dÃ¹ giao diá»‡n cÃ³ Ä‘áº¹p.',
      },
      { type: 'heading', text: 'Lead nÃªn cháº£y vÃ o CRM nhÆ° tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Marketing táº¡o Ä‘iá»ƒm cháº¡m qua ads, social, page, event, QR, hotline hoáº·c Zalo. Lead Ä‘Æ°á»£c ghi vÃ o CRM/Sheet cÃ¹ng source, campaign, nhu cáº§u vÃ  contact; sau Ä‘Ã³ giao owner vá»›i thá»i háº¡n xá»­ lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'Sales cáº­p nháº­t status vÃ  follow-up. Marketing, founder Ä‘á»c láº¡i nguá»“n nÃ o phÃ¹ há»£p, Ä‘oáº¡n nÃ o rÆ¡i vÃ  pháº§n cáº§n sá»­a. Form submit chá»‰ lÃ  Ä‘iá»ƒm Ä‘áº§u cá»§a flow.',
      },
      { type: 'visual', variant: 'lead-flow-to-crm' },
      { type: 'heading', text: 'CRM Ä‘Æ¡n giáº£n nÃªn cÃ³ nhá»¯ng cá»™t nÃ o?' },
      {
        type: 'list',
        items: [
          'ThÃ´ng tin khÃ¡ch: há» tÃªn, Ä‘iá»‡n thoáº¡i/email, cÃ´ng ty/vai trÃ², nhu cáº§u vÃ  ghi chÃº ban Ä‘áº§u.',
          'Nguá»“n: lead source, campaign name, landing/form/QR/event vÃ  ngÃ y táº¡o.',
          'Xá»­ lÃ½: owner, status, lead quality, last contact date, next follow-up date, next action vÃ  note.',
          'Outcome: quote sent, deal value náº¿u cÃ³, won/lost/follow-up later, lost reason vÃ  final note.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng báº¯t Ä‘áº§u vá»›i 50 cá»™t. HÃ£y dÃ¹ng sá»‘ cá»™t Ä‘á»§ cho viá»‡c tháº­t. CRM quÃ¡ náº·ng thÃ¬ sales dá»… bá» qua; CRM quÃ¡ thiáº¿u thÃ¬ founder khÃ´ng Ä‘á»c Ä‘Æ°á»£c dÃ²ng cháº£y.',
      },
      { type: 'visual', variant: 'simple-crm-fields' },
      { type: 'heading', text: 'CRM khÃ´ng pháº£i Ä‘á»ƒ Ã©p sales' },
      {
        type: 'paragraph',
        text: 'Sales dá»… pháº£n á»©ng khi CRM chá»‰ thÃªm viá»‡c nháº­p liá»‡u hoáº·c dÃ¹ng Ä‘á»ƒ soi lá»—i. CRM há»¯u Ã­ch giÃºp há» nhá»› ngÆ°á»i cáº§n gá»i láº¡i, nhu cáº§u, campaign vÃ  tÃ i liá»‡u nÃªn gá»­i.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ giÃºp bÃ n giao, giáº£m Ä‘Ã¡nh giÃ¡ báº±ng cáº£m giÃ¡c vÃ  cho tháº¥y khi lead sai tá»‡p. CRM pháº£i phá»¥c vá»¥ ngÆ°á»i bÃ¡n hÃ ng, lÃ m há» nháº¹ hÆ¡n chá»© khÃ´ng tháº¥y bá»‹ pháº¡t.',
      },
      { type: 'heading', text: 'Marketing cáº§n CRM Ä‘á»ƒ biáº¿t lead cÃ³ tháº­t sá»± tá»‘t khÃ´ng' },
      {
        type: 'paragraph',
        text: 'Chá»‰ nhÃ¬n sá»‘ lead dá»… khiáº¿n marketing tá»‘i Æ°u sai: CPL tháº¥p nhÆ°ng khÃ¡ch khÃ´ng contact Ä‘Æ°á»£c; form nhiá»u nhÆ°ng qualified tháº¥p; event nhiá»u data nhÆ°ng follow-up khÃ´ng Ä‘i tiáº¿p; ads cÃ³ váº» tá»‘t nhÆ°ng khÃ´ng táº¡o quote.',
      },
      {
        type: 'paragraph',
        text: 'CRM cho tháº¥y nguá»“n nÃ o táº¡o qualified lead, campaign nÃ o dá»… contact, field nÃ o cáº§n sá»­a vÃ  lead nÃ o nÃªn nurturing. Marketing nhá» Ä‘Ã³ há»c tá»« cháº¥t lÆ°á»£ng vÃ  outcome, khÃ´ng chá»‰ lead tá»•ng.',
      },
      { type: 'heading', text: 'Founder cáº§n CRM Ä‘á»ƒ nhÃ¬n há»‡ thá»‘ng' },
      {
        type: 'paragraph',
        text: 'Founder cáº§n biáº¿t lead má»›i Ä‘áº¿n tá»« Ä‘Ã¢u; bao nhiÃªu Ä‘Ã£ liÃªn há»‡, qualified, chá» follow-up, bÃ¡o giÃ¡, won hoáº·c lost; cÃ¹ng lÃ½ do máº¥t vÃ  nÆ¡i sales quÃ¡ táº£i.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ CRM, founder pháº£i há»i tá»«ng ngÆ°á»i. CÃ³ CRM, há» nhÃ¬n pipeline vÃ  há»i Ä‘Ãºng hÆ¡n. Má»¥c tiÃªu khÃ´ng pháº£i micromanage mÃ  lÃ  tháº¥y dÃ²ng cháº£y Ä‘á»§ sá»›m.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥: CRM Google Sheet Ä‘Æ¡n giáº£n cho team nhá»' },
      {
        type: 'paragraph',
        text: 'Má»™t team SME nháº­n lead tá»« ads, page, Zalo/hotline, event, QR vÃ  giá»›i thiá»‡u. Lead tá»«ng náº±m trong inbox, Zalo cÃ¡ nhÃ¢n, email form vÃ  file riÃªng. Sales nhá»› trong Ä‘áº§u, marketing bÃ¡o sá»‘ lead, founder khÃ´ng biáº¿t cÆ¡ há»™i káº¹t á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Team gom lead vÃ o Sheet chung, thÃªm source/campaign, owner, follow-up date, note vÃ  status: new, contacted, cannot contact, qualified, quote, won, lost, follow-up later. Dashboard Ä‘á»c nguá»“n, status vÃ  outcome.',
      },
      {
        type: 'paragraph',
        text: 'Team khÃ´ng tá»± Ä‘á»™ng bÃ¡n tá»‘t hÆ¡n ngay, nhÆ°ng tháº¥y lead nÃ o chÆ°a xá»­ lÃ½, nguá»“n nÃ o táº¡o nhu cáº§u Ä‘Ãºng, ai cáº§n follow-up vÃ  Ä‘oáº¡n nÃ o Ä‘ang rÆ¡i. Má»™t CRM Sheet Ä‘Æ°á»£c dÃ¹ng tháº­t váº«n tá»‘t hÆ¡n há»‡ thá»‘ng Ä‘áº¹p nhÆ°ng bá»‹ bá» trá»‘ng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team cÃ³ lead tá»« ads, event vÃ  Zalo nhÆ°ng bá»‹ máº¥t khÃ¡ch vÃ¬ khÃ´ng cÃ³ CRM tá»‘i thiá»ƒu.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi SME lÃ m CRM' },
      {
        type: 'list',
        items: [
          'Báº¯t Ä‘áº§u quÃ¡ phá»©c táº¡p hoáº·c chá»n pháº§n má»m trÆ°á»›c khi thá»‘ng nháº¥t cÃ¡ch xá»­ lÃ½.',
          'Marketing nháº­p lead nhÆ°ng sales khÃ´ng cáº­p nháº­t status.',
          'Chá»‰ ghi â€œÄ‘Ã£ gá»iâ€, khÃ´ng cÃ³ owner, next action hoáº·c ngÃ y follow-up.',
          'KhÃ´ng ghi source/campaign vÃ  lost reason nÃªn team khÃ´ng há»c Ä‘Æ°á»£c gÃ¬.',
          'KhÃ´ng review háº±ng tuáº§n, khiáº¿n data nhanh cÅ©.',
          'DÃ¹ng CRM Ä‘á»ƒ báº¯t lá»—i thay vÃ¬ cáº£i thiá»‡n há»‡ thá»‘ng.',
          'KhÃ´ng cÃ³ dashboard tá»‘i thiá»ƒu cho founder.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CRM cháº¿t khÃ´ng háº³n vÃ¬ tool tá»‡. NÃ³ cháº¿t khi khÃ´ng phá»¥c vá»¥ viá»‡c tháº­t cá»§a team.',
      },
      { type: 'heading', text: 'Checklist CRM Ä‘Æ¡n giáº£n cho SME' },
      { type: 'visual', variant: 'simple-crm-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n CRM Google Sheet template tá»‘i thiá»ƒu cho SME.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra CRM khÃ´ng chá»‰ lÃ  chuyá»‡n cá»§a sales hoáº·c pháº§n má»m. CÃ ng lÃ m marketing, tÃ´i cÃ ng tháº¥y Ä‘Ã¢y lÃ  Ä‘oáº¡n ná»‘i quan trá»ng giá»¯a tiá»n marketing vÃ  doanh thu.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ CRM, marketing chá»‰ biáº¿t mÃ¬nh táº¡o lead, sales chá»‰ biáº¿t mÃ¬nh Ä‘Ã£ gá»i khÃ¡ch, founder chá»‰ biáº¿t doanh thu cÃ³ lÃªn hay khÃ´ng. Ba gÃ³c nhÃ¬n dá»… tÃ¡ch rá»i. CRM tá»‘i thiá»ƒu chá»‰ cáº§n giÃºp má»i ngÆ°á»i cÃ¹ng nhÃ¬n: lead Ä‘áº¿n tá»« Ä‘Ã¢u, khÃ¡ch cáº§n gÃ¬, ai xá»­ lÃ½, tráº¡ng thÃ¡i nÃ o, khi nÃ o follow-up vÃ  káº¿t quáº£ ra sao.',
      },
      {
        type: 'paragraph',
        text: 'CRM khÃ´ng pháº£i Ä‘á»ƒ doanh nghiá»‡p nhá» trÃ´ng giá»‘ng doanh nghiá»‡p lá»›n. NÃ³ giÃºp nhá»¯ng cÆ¡ há»™i nhá» khÃ´ng rÆ¡i máº¥t vÃ¬ thiáº¿u há»‡ thá»‘ng.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u báº±ng má»™t nÆ¡i nhÃ¬n tháº¥y dÃ²ng cháº£y lead' },
      {
        type: 'paragraph',
        text: 'CRM Ä‘Æ¡n giáº£n giÃºp team khÃ´ng máº¥t lead, quÃªn follow-up hoáº·c tranh luáº­n báº±ng cáº£m giÃ¡c; Ä‘á»“ng thá»i giá»¯ marketing, sales vÃ  founder nhÃ¬n cÃ¹ng má»™t bá»©c tranh. Má»™t Google Sheet Ä‘á»§ rÃµ váº«n tá»‘t hÆ¡n khÃ´ng cÃ³ nÆ¡i nÃ o ghi nháº­n dÃ²ng cháº£y.',
      },
    ],
    cta: 'Náº¿u team cá»§a báº¡n Ä‘ang cÃ³ lead tá»« ads, landing page, event, Zalo, hotline hoáº·c giá»›i thiá»‡u nhÆ°ng váº«n khÃ´ng biáº¿t lead Ä‘ang náº±m á»Ÿ Ä‘Ã¢u, ai xá»­ lÃ½ vÃ  káº¿t quáº£ ra sao, Ä‘á»«ng vá»™i nghÄ© Ä‘áº¿n CRM phá»©c táº¡p. HÃ£y báº¯t Ä‘áº§u báº±ng má»™t báº£ng CRM Ä‘Æ¡n giáº£n Ä‘á»§ Ä‘á»ƒ khÃ´ng máº¥t khÃ¡ch trÆ°á»›c Ä‘Ã£.',
  },
  {
    title: 'Lead status trong CRM: vÃ¬ sao khÃ´ng nÃªn chá»‰ ghi â€œÄ‘Ã£ gá»iâ€?',
    slug: 'lead-status-trong-crm-vi-sao-khong-nen-chi-ghi-da-goi',
    category: 'CRM & Sales Follow-up',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-restaurant-team-group-01.jpg",
                "alt": "Team members gathered around a restaurant table",
                "caption": "Team dinner group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/personal-brand/personal-brand-lifestyle-night-portrait-01.jpg",
                      "alt": "Person standing outdoors at night",
                      "caption": "Outdoor personal brand portrait",
                      "width": 1133,
                      "height": 1492,
                      "fit": "cover",
                      "afterHeading": "VÃ¬ sao â€œÄ‘Ã£ gá»iâ€ lÃ  chÆ°a Ä‘á»§?"
                }
          ]
    },
    excerpt:
      'Trong CRM, cá»™t status khÃ´ng nÃªn chá»‰ cÃ³ â€œÄ‘Ã£ gá»iâ€ hoáº·c â€œchÆ°a gá»iâ€. Má»™t lead cÃ³ thá»ƒ má»›i vá», Ä‘Ã£ liÃªn há»‡, khÃ´ng báº¯t mÃ¡y, sai nhu cáº§u, Ä‘á»§ Ä‘iá»u kiá»‡n, cáº§n gá»­i tÃ i liá»‡u, Ä‘Ã£ bÃ¡o giÃ¡, tháº¯ng, máº¥t hoáº·c cáº§n follow-up láº¡i. Lead status rÃµ giÃºp sales khÃ´ng quÃªn viá»‡c, marketing hiá»ƒu cháº¥t lÆ°á»£ng lead vÃ  founder nhÃ¬n Ä‘Æ°á»£c pipeline tháº­t.',
    content: [
      {
        type: 'paragraph',
        text: 'Trong nhiá»u file CRM, tráº¡ng thÃ¡i chá»‰ cÃ³: chÆ°a gá»i, Ä‘Ã£ gá»i, Ä‘ang tÆ° váº¥n. NhÆ°ng khi founder há»i lead nÃ o khÃ´ng liÃªn há»‡ Ä‘Æ°á»£c, sai nhu cáº§u, chá» bÃ¡o giÃ¡, cáº§n gá»i láº¡i hoáº·c Ä‘á»§ Ä‘iá»u kiá»‡n, file báº¯t Ä‘áº§u khÃ´ng tráº£ lá»i Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'â€œÄÃ£ gá»iâ€ khÃ´ng nÃ³i khÃ¡ch cÃ³ báº¯t mÃ¡y, Ä‘Ãºng nhu cáº§u hay sales cáº§n lÃ m gÃ¬ tiáº¿p. Marketing khÃ´ng biáº¿t lead cÃ³ cháº¥t lÆ°á»£ng khÃ´ng; founder khÃ´ng tháº¥y pipeline ngháº½n á»Ÿ Ä‘Ã¢u. CRM váº«n chá»‰ lÃ  danh sÃ¡ch liÃªn há»‡.',
      },
      {
        type: 'paragraph',
        text: 'Lead status khÃ´ng pháº£i cá»™t nháº­p liá»‡u cho vui. NÃ³ biáº¿n lead thÃ nh má»™t dÃ²ng cháº£y mÃ  team cÃ³ thá»ƒ theo dÃµi.',
      },
      { type: 'heading', text: 'Lead status lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Lead status lÃ  tráº¡ng thÃ¡i hiá»‡n táº¡i cá»§a khÃ¡ch hÃ ng tiá»m nÄƒng. NÃ³ cho biáº¿t lead Ä‘Ã£ cÃ³ ngÆ°á»i phá»¥ trÃ¡ch, Ä‘Ã£ liÃªn há»‡ Ä‘Æ°á»£c, Ä‘Ãºng nhu cáº§u vÃ  Ä‘á»§ Ä‘iá»u kiá»‡n Ä‘i tiáº¿p chÆ°a.',
      },
      {
        type: 'paragraph',
        text: 'Status pháº£i dáº«n tá»›i viá»‡c tiáº¿p theo, ngÃ y follow-up vÃ  outcome. NÃ³ khÃ´ng mÃ´ táº£ má»i chi tiáº¿t; nÃ³ cho team biáº¿t lead Ä‘ang á»Ÿ bÆ°á»›c nÃ o.',
      },
      { type: 'visual', variant: 'lead-status-purpose' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch setup lead status trong CRM Google Sheet.',
      },
      { type: 'heading', text: 'VÃ¬ sao â€œÄ‘Ã£ gá»iâ€ lÃ  chÆ°a Ä‘á»§?' },
      {
        type: 'paragraph',
        text: 'CÃ¹ng lÃ  â€œÄ‘Ã£ gá»iâ€ nhÆ°ng khÃ¡ch cÃ³ thá»ƒ khÃ´ng báº¯t mÃ¡y, sai nhu cáº§u, Ä‘ang quan tÃ¢m vÃ  cáº§n tÃ i liá»‡u, cÃ³ nhu cáº§u rÃµ nhÆ°ng chÆ°a sáºµn sÃ ng, cáº§n bÃ¡o giÃ¡, háº¹n thÃ¡ng sau, Ä‘Ã£ mua nÆ¡i khÃ¡c hoáº·c hoÃ n toÃ n sai tá»‡p.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u má»i tÃ¬nh huá»‘ng cÃ¹ng má»™t nhÃ£n, CRM máº¥t kháº£ nÄƒng há»— trá»£ quyáº¿t Ä‘á»‹nh. â€œÄÃ£ gá»iâ€ chá»‰ lÃ  hoáº¡t Ä‘á»™ng sales Ä‘Ã£ lÃ m, khÃ´ng pháº£i tráº¡ng thÃ¡i Ä‘á»§ rÃµ cá»§a lead.',
      },
      { type: 'visual', variant: 'called-vs-clear-status' },
      { type: 'heading', text: 'Má»™t bá»™ lead status tá»‘i thiá»ƒu cho SME' },
      {
        type: 'list',
        items: [
          'New: lead má»›i vá», chÆ°a ai xá»­ lÃ½.',
          'Assigned: Ä‘Ã£ giao cho má»™t sales hoáº·c owner.',
          'Contacted: Ä‘Ã£ nÃ³i chuyá»‡n Ä‘Æ°á»£c vá»›i khÃ¡ch.',
          'Cannot contact: chÆ°a liÃªn há»‡ Ä‘Æ°á»£c sau má»™t hoáº·c nhiá»u láº§n thá»­.',
          'Wrong fit / Wrong need: sai tá»‡p, khu vá»±c, nhu cáº§u hoáº·c khÃ´ng phÃ¹ há»£p.',
          'Interested: cÃ³ quan tÃ¢m nhÆ°ng chÆ°a Ä‘á»§ thÃ´ng tin Ä‘á»ƒ Ä‘Ã¡nh giÃ¡ sÃ¢u.',
          'Qualified: nhu cáº§u tÆ°Æ¡ng Ä‘á»‘i rÃµ vÃ  Ä‘Ã¡ng Ä‘á»ƒ sales Ä‘i tiáº¿p.',
          'Need material / Need more info: cáº§n case, tÃ i liá»‡u, máº«u, demo hoáº·c tÆ° váº¥n thÃªm.',
          'Meeting / Demo booked: Ä‘Ã£ háº¹n trao Ä‘á»•i sÃ¢u hÆ¡n.',
          'Quoted: Ä‘Ã£ gá»­i bÃ¡o giÃ¡ hoáº·c Ä‘á» xuáº¥t.',
          'Won: Ä‘Ã£ chá»‘t. Lost: Ä‘Ã£ máº¥t vÃ  nÃªn cÃ³ lÃ½ do.',
          'Follow-up later: chÆ°a sáºµn sÃ ng, cáº§n háº¹n thá»i Ä‘iá»ƒm liÃªn há»‡ láº¡i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i team nÃ o cÅ©ng cáº§n Ä‘á»§ cÃ¡c status ngay. Team nhá» cÃ³ thá»ƒ báº¯t Ä‘áº§u vá»›i 7â€“9 tráº¡ng thÃ¡i, miá»…n má»—i tráº¡ng thÃ¡i rÃµ nghÄ©a vÃ  khÃ´ng chá»“ng chÃ©o.',
      },
      { type: 'visual', variant: 'simple-lead-status-flow' },
      { type: 'heading', text: 'Má»—i status pháº£i Ä‘i kÃ¨m Ã½ nghÄ©a vÃ  hÃ nh Ä‘á»™ng' },
      {
        type: 'paragraph',
        text: 'Status chá»‰ há»¯u Ã­ch khi má»i ngÆ°á»i hiá»ƒu cÃ¹ng nghÄ©a. New cáº§n giao owner; Assigned lÃ  Ä‘Ã£ giao ngÆ°á»i nhÆ°ng chÆ°a cháº¯c Ä‘Ã£ gá»i; Contacted lÃ  Ä‘Ã£ nÃ³i chuyá»‡n; Cannot contact pháº£i cÃ³ lá»‹ch thá»­ láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'Qualified cáº§n tÆ° váº¥n sÃ¢u; Need material cáº§n gá»­i tÃ i liá»‡u; Quoted cáº§n lá»‹ch há»i láº¡i. Follow-up later pháº£i cÃ³ ngÃ y háº¹n; Lost nÃªn cÃ³ lÃ½ do. Status khÃ´ng kÃ©o theo hÃ nh Ä‘á»™ng chá»‰ lÃ  nhÃ£n trang trÃ­.',
      },
      { type: 'visual', variant: 'status-meaning-action-map' },
      { type: 'heading', text: 'Status giÃºp sales khÃ´ng quÃªn viá»‡c tiáº¿p theo' },
      {
        type: 'paragraph',
        text: 'Sales cáº§n tháº¥y khÃ¡ch pháº£i gá»i hÃ´m nay, Ä‘ang chá» bÃ¡o giÃ¡, cáº§n tÃ i liá»‡u, cáº§n thá»­ láº¡i, háº¹n thÃ¡ng sau vÃ  lead nÃªn Æ°u tiÃªn. CRM pháº£i chá»‰ ra viá»‡c tiáº¿p theo, khÃ´ng chá»‰ lÆ°u viá»‡c Ä‘Ã£ lÃ m.',
      },
      {
        type: 'paragraph',
        text: 'Status rÃµ cÃ¹ng next action vÃ  follow-up date giÃºp sales Ä‘á»¡ phá»¥ thuá»™c vÃ o trÃ­ nhá»›.',
      },
      { type: 'heading', text: 'Status giÃºp marketing hiá»ƒu lead quality' },
      {
        type: 'paragraph',
        text: 'Tá»•ng lead lÃ  chÆ°a Ä‘á»§. Status cho tháº¥y nguá»“n nÃ o nhiá»u cannot contact, campaign nÃ o táº¡o wrong fit, page nÃ o nhiá»u interested nhÆ°ng Ã­t qualified vÃ  event nÃ o táº¡o nhu cáº§u demo.',
      },
      {
        type: 'paragraph',
        text: 'Team cÃ²n tháº¥y form cáº§n thÃªm field hay quote tháº¥p do lead quality hoáº·c sales process. Marketing nhá» Ä‘Ã³ há»c tá»« sales mÃ  khÃ´ng tranh luáº­n cáº£m giÃ¡c.',
      },
      { type: 'heading', text: 'Status giÃºp founder nhÃ¬n pipeline tháº­t' },
      {
        type: 'paragraph',
        text: 'Founder khÃ´ng cáº§n soi tá»«ng cuá»™c gá»i, nhÆ°ng cáº§n tháº¥y lead chÆ°a xá»­ lÃ½, Ä‘Ã£ contact, qualified, chá» bÃ¡o giÃ¡, cáº§n follow-up, won/lost vÃ  lÃ½ do máº¥t. Status cÃ²n cho biáº¿t nguá»“n nÃ o táº¡o cÆ¡ há»™i tá»‘t.',
      },
      {
        type: 'paragraph',
        text: 'Doanh thu lÃ  tÃ­n hiá»‡u Ä‘áº¿n muá»™n. Status cho founder tháº¥y sá»›m Ä‘oáº¡n Ä‘ang ngháº½n mÃ  khÃ´ng biáº¿n CRM thÃ nh cÃ´ng cá»¥ micromanage sales.',
      },
      { type: 'heading', text: 'Äá»«ng táº¡o quÃ¡ nhiá»u status ngay tá»« Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Má»™t CRM cÃ³ thá»ƒ nhanh chÃ³ng Ä‘áº§y cÃ¡c nhÃ£n Hot, Very hot, Warm, Pending 1, Pending 2, Ä‘Ã£ tÆ° váº¥n láº§n 2, gá»­i giÃ¡ láº¡i, chá» pháº£n há»“i vÃ  chÆ°a chá»‘t. QuÃ¡ nhiá»u lá»±a chá»n khiáº¿n sales khÃ³ chá»n, dashboard khÃ³ Ä‘á»c vÃ  má»—i ngÆ°á»i dÃ¹ng má»™t kiá»ƒu.',
      },
      {
        type: 'list',
        items: [
          'Báº¯t Ä‘áº§u vá»›i Ã­t status nhÆ°ng rÃµ nghÄ©a vÃ  khÃ¡c nhau tháº­t.',
          'Má»—i status pháº£i cÃ³ next action.',
          'Gá»™p tráº¡ng thÃ¡i Ã­t dÃ¹ng hoáº·c mÆ¡ há»“.',
          'Chá»‰ thÃªm status Ä‘áº·c thÃ¹ ngÃ nh sau khi team Ä‘Ã£ dÃ¹ng CRM má»™t thá»i gian.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CRM tá»‘t khÃ´ng pháº£i CRM cÃ³ nhiá»u status. NÃ³ cÃ³ Ä‘á»§ status Ä‘á»ƒ team ra quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'heading', text: 'VÃ­ dá»¥: tá»« â€œÄ‘Ã£ gá»iâ€ sang status rÃµ' },
      {
        type: 'paragraph',
        text: 'Má»™t team SME nháº­n lead tá»« ads, landing page, Zalo/hotline vÃ  event. CRM ban Ä‘áº§u chá»‰ cÃ³ tÃªn, sá»‘ Ä‘iá»‡n thoáº¡i, nguá»“n, sales, ghi chÃº vÃ  hai status chÆ°a gá»i/Ä‘Ã£ gá»i. Founder khÃ´ng biáº¿t lead nÃ o tiá»m nÄƒng, marketing khÃ´ng tháº¥y lead sai nhu cáº§u, khÃ¡ch háº¹n láº¡i bá»‹ quÃªn vÃ  bÃ¡o giÃ¡ khÃ´ng Ä‘Æ°á»£c follow-up Ä‘Ãºng lÃºc.',
      },
      {
        type: 'paragraph',
        text: 'Team Ä‘á»•i sang New, Assigned, Contacted, Cannot contact, Wrong fit, Interested, Qualified, Need material, Quoted, Won, Lost vÃ  Follow-up later; Ä‘á»“ng thá»i thÃªm Next action, Next follow-up date vÃ  Lost reason.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n giáº£ Ä‘á»‹nh doanh sá»‘ thay Ä‘á»•i ngay. Äiá»ƒm khÃ¡c biá»‡t lÃ  team tháº¥y lead nÃ o chÆ°a xá»­ lÃ½, Ä‘ang chá» tÃ i liá»‡u, Ä‘Ã£ bÃ¡o giÃ¡, cáº§n háº¹n láº¡i vÃ  nguá»“n nÃ o táº¡o lead phÃ¹ há»£p hÆ¡n. CRM trá»Ÿ thÃ nh cÃ´ng cá»¥ váº­n hÃ nh thay vÃ¬ danh sÃ¡ch liÃªn há»‡.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team chuyá»ƒn tá»« status â€œÄ‘Ã£ gá»iâ€ sang bá»™ lead status rÃµ hÆ¡n.',
      },
      { type: 'heading', text: 'Nhá»¯ng lá»—i thÆ°á»ng gáº·p khi Ä‘áº·t lead status' },
      {
        type: 'list',
        items: [
          'DÃ¹ng status chung nhÆ° â€œÄ‘Ã£ gá»iâ€, hoáº·c cÃ¡c status chá»“ng chÃ©o mÃ  khÃ´ng cÃ³ Ä‘á»‹nh nghÄ©a.',
          'Status khÃ´ng Ä‘i kÃ¨m next action vÃ  follow-up date cho nhÃ³m háº¹n láº¡i.',
          'KhÃ´ng cÃ³ lost reason; khÃ´ng phÃ¢n biá»‡t cannot contact vá»›i wrong fit.',
          'KhÃ´ng phÃ¢n biá»‡t interested vá»›i qualified.',
          'KhÃ´ng cáº­p nháº­t status sau má»—i láº§n xá»­ lÃ½.',
          'Marketing khÃ´ng xem status nÃªn khÃ´ng há»c Ä‘Æ°á»£c lead quality.',
          'Founder chá»‰ xem tá»•ng lead, khÃ´ng xem pipeline theo status.',
          'Táº¡o quÃ¡ nhiá»u status khiáº¿n CRM khÃ³ dÃ¹ng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lead status pháº£i Ä‘á»§ Ä‘Æ¡n giáº£n Ä‘á»ƒ sales dÃ¹ng, nhÆ°ng Ä‘á»§ rÃµ Ä‘á»ƒ marketing vÃ  founder Ä‘á»c Ä‘Æ°á»£c.',
      },
      { type: 'heading', text: 'Checklist lead status trong CRM' },
      { type: 'visual', variant: 'lead-status-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n lead status CRM template cho SME.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra status khÃ´ng pháº£i cá»™t phá»¥ trong CRM. CÃ ng lÃ m marketing vÃ  sales follow-up, tÃ´i cÃ ng tháº¥y nÃ³ lÃ  ngÃ´n ngá»¯ chung cá»§a cáº£ team.',
      },
      {
        type: 'paragraph',
        text: 'Status mÆ¡ há»“ khiáº¿n sales nÃ³i Ä‘Ã£ gá»i, marketing nÃ³i lead cÃ³ vá», founder há»i sao chÆ°a ra doanh thu, nhÆ°ng khÃ´ng ai tháº¥y lead káº¹t á»Ÿ Ä‘Ã¢u. Khi status rÃµ, cuá»™c há»p chuyá»ƒn thÃ nh cÃ¢u há»i cá»¥ thá»ƒ: cÃ²n bao nhiÃªu New, Cannot contact, Wrong fit, Qualified, Quoted, Follow-up later vÃ  Lost vÃ¬ lÃ½ do gÃ¬?',
      },
      {
        type: 'paragraph',
        text: 'Lead status khÃ´ng pháº£i chi tiáº¿t nhá». NÃ³ giÃºp team nhÃ¬n dÃ²ng cháº£y bÃ¡n hÃ ng bÃ¬nh tÄ©nh hÆ¡n.',
      },
      { type: 'heading', text: 'Äá»‹nh nghÄ©a láº¡i status trÆ°á»›c khi thÃªm cÃ´ng cá»¥' },
      {
        type: 'paragraph',
        text: 'Lead status khÃ´ng nÃªn dá»«ng á»Ÿ â€œÄ‘Ã£ gá»iâ€. Má»™t bá»™ status tá»‘i thiá»ƒu pháº£i cho biáº¿t lead á»Ÿ bÆ°á»›c nÃ o, Ã½ nghÄ©a gÃ¬, ai phá»¥ trÃ¡ch, viá»‡c tiáº¿p theo vÃ  káº¿t quáº£ ra sao. Nhá» Ä‘Ã³ sales khÃ´ng quÃªn follow-up, marketing hiá»ƒu lead quality vÃ  founder nhÃ¬n Ä‘Æ°á»£c pipeline tháº­t.',
      },
    ],
    cta: 'Náº¿u CRM cá»§a team báº¡n hiá»‡n táº¡i chá»‰ cÃ³ â€œchÆ°a gá»iâ€, â€œÄ‘Ã£ gá»iâ€ hoáº·c â€œÄ‘ang tÆ° váº¥nâ€, hÃ£y thá»­ Ä‘á»‹nh nghÄ©a láº¡i lead status trÆ°á»›c khi thÃªm pháº§n má»m má»›i. Má»™t bá»™ status rÃµ cÃ³ thá»ƒ giÃºp team nhÃ¬n tháº¥y Ä‘iá»ƒm ngháº½n nhanh hÆ¡n ráº¥t nhiá»u.',
  },
  {
    title: 'Khi nÃ o nÃªn thuÃª marketer Ä‘áº§u tiÃªn?',
    slug: 'khi-nao-nen-thue-marketer-dau-tien',
    category: 'Founder Marketing Decisions',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-operations-warehouse-boxes-01.jpg",
                "alt": "Person beside stacked product boxes in a work area",
                "caption": "Operations and product stock moment",
                "width": 2048,
                "height": 1171,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-partnership-tablet-handoff-01.jpg",
                      "alt": "Two people standing outdoors with a tablet",
                      "caption": "Work partnership moment",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "Äiá»ƒm chuyá»ƒn thÆ°á»ng Ä‘áº¿n khÃ¡ Ã¢m tháº§m"
                }
          ]
    },
    excerpt:
      'KhÃ´ng pháº£i cá»© thiáº¿u lead lÃ  nÃªn thuÃª marketer Ä‘áº§u tiÃªn. Vá»›i doanh nghiá»‡p nhá», thá»i Ä‘iá»ƒm thuÃª marketer nÃªn Ä‘áº¿n khi founder Ä‘Ã£ cÃ³ sáº£n pháº©m tÆ°Æ¡ng Ä‘á»‘i rÃµ, cÃ³ vÃ i kÃªnh bÃ¡n hÃ ng Ä‘ang cháº¡y, cÃ³ váº¥n Ä‘á» láº·p láº¡i trong marketing/sales vÃ  cáº§n má»™t ngÆ°á»i biáº¿n cÃ¡c viá»‡c rá»i ráº¡c thÃ nh há»‡ thá»‘ng váº­n hÃ nh.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t doanh nghiá»‡p nhá» báº¯t Ä‘áº§u cÃ³ khÃ¡ch Ä‘á»u hÆ¡n. Founder váº«n tá»± nghÄ© post, nhá» design lÃ m hÃ¬nh, giao ngÆ°á»i cháº¡y ads, nháº¯n IT sá»­a landing page rá»“i há»i sales xem lead Ä‘Ã£ vá» chÆ°a. Cuá»‘i tuáº§n, anh má»Ÿ Sheet Ä‘á»ƒ ghÃ©p cÃ¡c con sá»‘.',
      },
      {
        type: 'paragraph',
        text: 'Marketing Ä‘ang cháº¡y, viá»‡c ngÃ y cÃ ng nhiá»u, nhÆ°ng khÃ´ng ai giá»¯ há»‡ thá»‘ng. Chá»‰ cáº§n founder báº­n vÃ i ngÃ y, post cháº­m, campaign Ä‘á»©ng vÃ  bÃ¡o cÃ¡o biáº¿n máº¥t.',
      },
      {
        type: 'paragraph',
        text: 'Rá»“i cÃ¢u há»i quen thuá»™c xuáº¥t hiá»‡n: â€œHay lÃ  thuÃª má»™t báº¡n marketing?â€',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u há»i Ä‘Ãºng hÆ¡n lÃ  thuÃª ngÆ°á»i nÃ y Ä‘á»ƒ giáº£i quyáº¿t Ä‘iá»ƒm ngháº½n nÃ o. KhÃ´ng nÃªn tuyá»ƒn chá»‰ vÃ¬ founder báº­n, mÃ  khi má»™t nhÃ³m viá»‡c marketing Ä‘Ã£ láº·p láº¡i vÃ  cáº§n ngÆ°á»i chá»‹u trÃ¡ch nhiá»‡m.',
      },
      { type: 'heading', text: 'CÃ³ nhá»¯ng lÃºc thuÃª ngÆ°á»i chá»‰ lÃ m sá»± mÆ¡ há»“ lan nhanh hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Náº¿u offer cÃ²n Ä‘á»•i má»—i tuáº§n, chÆ°a biáº¿t khÃ¡ch mua vÃ¬ Ä‘iá»u gÃ¬ vÃ  tá»‡p khÃ¡ch váº«n lÃ  â€œai cÅ©ng Ä‘Æ°á»£câ€, ngÆ°á»i má»›i khÃ´ng cÃ³ direction Ä‘á»ƒ bÃ¡m. Há» chá»‰ cÃ³ thá»ƒ thá»­ viá»‡c rá»i ráº¡c.',
      },
      {
        type: 'paragraph',
        text: 'CÅ©ng chÆ°a nÃªn thuÃª khi lead chÆ°a cÃ³ nÆ¡i nháº­n, founder ká»³ vá»ng doanh thu tÄƒng ngay hoáº·c khÃ´ng ai duyá»‡t hÆ°á»›ng. Marketer sáº½ dá»… rÆ¡i vÃ o vÃ²ng xoÃ¡y: viáº¿t post, sá»­a banner, cháº¡y ads, lÃ m brochure rá»“i bá»‹ há»i vÃ¬ sao doanh thu chÆ°a tÄƒng.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» náº±m á»Ÿ viá»‡c vai trÃ² Ä‘Æ°á»£c táº¡o trÆ°á»›c khi doanh nghiá»‡p biáº¿t nÃ³ cáº§n váº­n hÃ nh Ä‘iá»u gÃ¬.',
      },
      { type: 'visual', variant: 'first-marketer-timing' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t SME thuÃª marketer Ä‘áº§u tiÃªn quÃ¡ sá»›m vÃ  bá»‹ biáº¿n thÃ nh ngÆ°á»i lÃ m viá»‡c váº·t.',
      },
      { type: 'heading', text: 'Äiá»ƒm chuyá»ƒn thÆ°á»ng Ä‘áº¿n khÃ¡ Ã¢m tháº§m' },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm chuyá»ƒn Ä‘áº¿n khi Ä‘Ã£ cÃ³ khÃ¡ch mua tháº­t, vÃ i lÃ½ do khÃ¡ch chá»n mÃ¬nh vÃ  vÃ i kÃªnh táº¡o nhu cáº§u. Má»—i tuáº§n Ä‘á»u cÃ³ content, ads, page, lead vÃ  sá»‘ liá»‡u cáº§n xá»­ lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'Founder trá»Ÿ thÃ nh nÃºt cá»• chai: brief, campaign, page vÃ  quyáº¿t Ä‘á»‹nh nhá» Ä‘á»u pháº£i chá». Lead báº¯t Ä‘áº§u rÆ¡i vÃ¬ khÃ´ng ai gom data, nhÃ¬n CRM hoáº·c theo pháº£n há»“i sales.',
      },
      {
        type: 'paragraph',
        text: 'LÃºc nÃ y team cáº§n ngÆ°á»i giá»¯ nhá»‹p háº±ng tuáº§n, biáº¿n direction thÃ nh execution vÃ  ná»‘i campaign, form, tracking, lead vá»›i report. Doanh nghiá»‡p cÅ©ng pháº£i cÃ³ ngÃ¢n sÃ¡ch cho lÆ°Æ¡ng vÃ  thá»­ nghiá»‡m; thiáº¿u media, asset hoáº·c cÃ´ng cá»¥ thÃ¬ output ráº¥t háº¡n cháº¿.',
      },
      { type: 'heading', text: 'Team nhá» cáº§n ngÆ°á»i ná»‘i viá»‡c hÆ¡n lÃ  má»™t chá»©c danh Ä‘áº¹p' },
      {
        type: 'paragraph',
        text: 'Marketer Ä‘áº§u tiÃªn khÃ´ng nÃªn quÃ¡ háº¹p. NgÆ°á»i chá»‰ cháº¡y ads, viáº¿t bÃ i, design hoáº·c lÃ m social calendar cÃ³ thá»ƒ giá»i nhÆ°ng váº«n Ä‘á»ƒ khoáº£ng trá»‘ng giá»¯a cÃ¡c pháº§n.',
      },
      {
        type: 'paragraph',
        text: 'Profile phÃ¹ há»£p thÆ°á»ng lÃ  marketing generalist: viáº¿t Ä‘á»§ tá»‘t, hiá»ƒu content, ads, page vÃ  lead flow; biáº¿t phá»‘i há»£p design, sales, IT; Ä‘á»c sá»‘ cÆ¡ báº£n vÃ  dÃ¹ng AI Ä‘á»ƒ tÄƒng tá»‘c. Há» lÃ m Ä‘Æ°á»£c viá»‡c nhá» nhÆ°ng hiá»ƒu há»‡ thá»‘ng phÃ­a sau.',
      },
      {
        type: 'paragraph',
        text: 'Há» cáº§n chuyá»ƒn Ã½ founder thÃ nh brief, output vÃ  nhá»‹p review. Giai Ä‘oáº¡n Ä‘áº§u cáº§n kháº£ nÄƒng ná»‘i viá»‡c hÆ¡n chuyÃªn mÃ´n quÃ¡ sÃ¢u.',
      },
      { type: 'visual', variant: 'first-marketer-role-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch founder quyáº¿t Ä‘á»‹nh khi nÃ o nÃªn thuÃª marketer Ä‘áº§u tiÃªn.',
      },
      { type: 'heading', text: 'SÃ¡u mÆ°Æ¡i ngÃ y Ä‘áº§u khÃ´ng nÃªn báº¯t Ä‘áº§u báº±ng sá»‘ lÆ°á»£ng post' },
      {
        type: 'paragraph',
        text: 'Trong 30 ngÃ y Ä‘áº§u, ngÆ°á»i má»›i cáº§n hiá»ƒu sáº£n pháº©m, khÃ¡ch vÃ  offer; audit kÃªnh; gom asset, content cÅ©, page, form vÃ  tÃ i khoáº£n ads. Há» cáº§n biáº¿t lead vá» Ä‘Ã¢u, bÃ¡o cÃ¡o hiá»‡n tráº¡ng, lÃ m rÃµ content angle vÃ  Ä‘á» xuáº¥t má»™t hoáº·c hai quick win.',
      },
      {
        type: 'paragraph',
        text: 'Ba mÆ°Æ¡i ngÃ y tiáº¿p theo cÃ³ thá»ƒ cháº¡y campaign nhá», cáº£i thiá»‡n page/form, láº­p CRM Sheet vÃ  dashboard tuáº§n, rá»“i Ä‘á»c lead quality cÃ¹ng sales. Má»™t buá»•i review ngáº¯n vá»›i founder giÃºp thÃ¡o Ä‘iá»ƒm ngháº½n.',
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng Ä‘o báº±ng sá»‘ post. HÃ£y nhÃ¬n há»‡ thá»‘ng Ä‘Ã£ rÃµ hÆ¡n, lead Ã­t rÆ¡i hÆ¡n vÃ  founder Ä‘á»c sá»‘ tá»‘t hÆ¡n chÆ°a.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n first marketer 60-day role brief template.',
      },
      { type: 'heading', text: 'Äá»«ng giao cho ngÆ°á»i má»›i toÃ n bá»™ sá»± mÆ¡ há»“' },
      {
        type: 'paragraph',
        text: 'â€œEm tá»± lo háº¿t marketingâ€, â€œthÃ¡ng nÃ y tÄƒng doanh thu ngayâ€ hay â€œads Ã­t tiá»n nhÆ°ng pháº£i ra leadâ€ Ä‘á»u khÃ³ váº­n hÃ nh. Giao cÃ¹ng lÃºc social, thÆ°Æ¡ng hiá»‡u, SEO, TikTok, web vÃ  sales outcome chá»‰ lÃ m máº¥t Æ°u tiÃªn.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i má»›i khÃ´ng thay Ä‘Æ°á»£c sáº£n pháº©m chÆ°a rÃµ, strategy mÆ¡ há»“, sales process yáº¿u hoáº·c founder chÆ°a quyáº¿t hÆ°á»›ng. Sales khÃ´ng cáº­p nháº­t lead thÃ¬ marketing khÃ´ng thá»ƒ má»™t mÃ¬nh chá»‹u doanh thu. Tuyá»ƒn ngÆ°á»i khÃ´ng pháº£i giao há» toÃ n bá»™ pháº§n chÆ°a rÃµ.',
      },
      { type: 'heading', text: 'CÃ³ khi bÃ i toÃ¡n Ä‘Ãºng láº¡i lÃ  agency' },
      {
        type: 'paragraph',
        text: 'Agency há»£p hÆ¡n khi direction Ä‘Ã£ rÃµ nhÆ°ng doanh nghiá»‡p thiáº¿u nÄƒng lá»±c chuyÃªn sÃ¢u nhÆ° ads, SEO, web, tracking hoáº·c creative production; Ä‘á»“ng thá»i Ä‘Ã£ cÃ³ ngÆ°á»i ná»™i bá»™ Ä‘á»§ hiá»ƒu Ä‘á»ƒ brief, kiá»ƒm soÃ¡t vÃ  cÃ³ ngÃ¢n sÃ¡ch cho service láº«n media.',
      },
      {
        type: 'paragraph',
        text: 'Marketer in-house há»£p hÆ¡n khi founder cáº§n ngÆ°á»i bÃ¡m sÃ¡t sáº£n pháº©m vÃ  sales má»—i tuáº§n, gom feedback, content, campaign, CRM, data rá»“i giá»¯ nhá»‹p phá»‘i há»£p ná»™i bá»™. Agency khÃ´ng thay Ä‘Æ°á»£c ngÆ°á»i giá»¯ context. NgÆ°á»i in-house cÅ©ng khÃ´ng thay Ä‘Æ°á»£c má»i specialist. Hai vai trÃ² cÃ³ thá»ƒ bá»• sung cho nhau.',
      },
      { type: 'visual', variant: 'first-marketer-vs-agency' },
      { type: 'heading', text: 'Báº£y cÃ¢u há»i trÆ°á»›c khi má»Ÿ má»™t vá»‹ trÃ­' },
      {
        type: 'list',
        items: [
          'Sáº£n pháº©m vÃ  offer Ä‘Ã£ Ä‘á»§ rÃµ Ä‘á»ƒ ngÆ°á»i má»›i hiá»ƒu chÆ°a?',
          'Tá»‡p khÃ¡ch chÃ­nh Ä‘Ã£ Ä‘á»§ rÃµ chÆ°a?',
          'ÄÃ£ cÃ³ viá»‡c marketing láº·p láº¡i má»—i tuáº§n chÆ°a?',
          'Lead Ä‘ang rÆ¡i vÃ¬ thiáº¿u ngÆ°á»i giá»¯ nhá»‹p khÃ´ng?',
          'Sales cÃ³ sáºµn sÃ ng phá»‘i há»£p vÃ  pháº£n há»“i lead quality khÃ´ng?',
          'CÃ³ ngÃ¢n sÃ¡ch cho lÆ°Æ¡ng vÃ  thá»­ nghiá»‡m khÃ´ng?',
          'Trong 60 ngÃ y Ä‘áº§u, ngÆ°á»i nÃ y cáº§n lÃ m rÃµ há»‡ thá»‘ng gÃ¬?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u quÃ¡ nhiá»u cÃ¢u váº«n chÆ°a cÃ³ cÃ¢u tráº£ lá»i, cÃ³ thá»ƒ chÆ°a nÃªn tuyá»ƒn ngay. Founder nÃªn lÃ m rÃµ direction, offer, lead flow vÃ  CRM tá»‘i thiá»ƒu trÆ°á»›c. Náº¿u pháº§n lá»›n Ä‘Ã£ rÃµ, marketer Ä‘áº§u tiÃªn cÃ³ thá»ƒ trá»Ÿ thÃ nh Ä‘Ã²n báº©y tá»‘t vÃ¬ há» cÃ³ ná»n Ä‘á»ƒ váº­n hÃ nh.',
      },
      { type: 'heading', text: 'BÃ i há»c tá»« vai trÃ² â€œngÆ°á»i lÃ m marketingâ€' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra nhiá»u founder thuÃª marketer vÃ¬ muá»‘n cÃ³ ngÆ°á»i lÃ m marketing thay mÃ¬nh. NhÆ°ng á»Ÿ doanh nghiá»‡p nhá», ngÆ°á»i Ä‘áº§u tiÃªn cÃ²n pháº£i giÃºp biáº¿n nhá»¯ng thá»© trong Ä‘áº§u founder thÃ nh má»™t nhá»‹p váº­n hÃ nh cÃ³ thá»ƒ nhÃ¬n tháº¥y.',
      },
      {
        type: 'paragraph',
        text: 'Founder chÆ°a rÃµ hÆ°á»›ng thÃ¬ marketer sáº½ chá»¯a chÃ¡y. Sales khÃ´ng cáº­p nháº­t lead thÃ¬ marketer khÃ´ng biáº¿t lead cÃ³ cháº¥t lÆ°á»£ng khÃ´ng. KhÃ´ng cÃ³ ngÃ¢n sÃ¡ch thá»­ nghiá»‡m, há» chá»‰ lÃ m ná»™i dung cáº§m chá»«ng. KhÃ´ng cÃ³ quyá»n phá»‘i há»£p vá»›i design, IT vÃ  sales, há» nhanh chÃ³ng thÃ nh â€œngÆ°á»i Ä‘Äƒng bÃ iâ€.',
      },
      {
        type: 'paragraph',
        text: 'Marketer Ä‘áº§u tiÃªn phÃ¡t huy khi doanh nghiá»‡p xem há» lÃ  ngÆ°á»i xÃ¢y ná»n marketing tá»‘i thiá»ƒu, khÃ´ng pháº£i ngÆ°á»i lÃ m phÃ©p.',
      },
      { type: 'heading', text: 'ThuÃª khi Ä‘Ã£ cÃ³ má»™t há»‡ thá»‘ng cáº§n ngÆ°á»i giá»¯ nhá»‹p' },
      {
        type: 'paragraph',
        text: 'NÃªn thuÃª khi sáº£n pháº©m vÃ  offer tÆ°Æ¡ng Ä‘á»‘i rÃµ, Ä‘Ã£ cÃ³ tÃ­n hiá»‡u bÃ¡n hÃ ng, viá»‡c marketing láº·p láº¡i má»—i tuáº§n, lead cáº§n Ä‘Æ°á»£c xá»­ lÃ½ tá»‘t hÆ¡n vÃ  founder cáº§n ngÆ°á»i giá»¯ nhá»‹p. ChÆ°a nÃªn thuÃª khi má»i thá»© cÃ²n quÃ¡ mÆ¡ há»“ vÃ  ká»³ vá»ng ngÆ°á»i má»›i sáº½ tá»± táº¡o tÄƒng trÆ°á»Ÿng ngay.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang chuáº©n bá»‹ thuÃª marketer Ä‘áº§u tiÃªn, Ä‘á»«ng báº¯t Ä‘áº§u báº±ng cÃ¢u â€œtuyá»ƒn ngÆ°á»i cháº¡y marketingâ€. HÃ£y viáº¿t rÃµ: ngÆ°á»i nÃ y Ä‘Æ°á»£c thuÃª Ä‘á»ƒ lÃ m rÃµ há»‡ thá»‘ng nÃ o trong 60 ngÃ y Ä‘áº§u â€” content, campaign, lead flow, CRM, dashboard hay phá»‘i há»£p sales?',
  },
  {
    title: 'Khi nÃ o nÃªn thuÃª agency?',
    slug: 'khi-nao-nen-thue-agency',
    category: 'Founder Marketing Decisions',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-outdoor-booth-01.jpg",
                "alt": "Outdoor exhibition booth with visitors",
                "caption": "Outdoor exhibition booth",
                "width": 1920,
                "height": 1080,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/events/events-exhibition-booth-team-demo-01.jpg",
                      "alt": "Team members at an exhibition booth serving visitors",
                      "caption": "Exhibition booth team activity",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "Má»• láº¡i quyáº¿t Ä‘á»‹nh: lÃºc nÃ o chÆ°a nÃªn thuÃª?"
                }
          ]
    },
    excerpt:
      'Agency khÃ´ng pháº£i cÃ¢y Ä‘Å©a tháº§n Ä‘á»ƒ giáº£i quyáº¿t má»i váº¥n Ä‘á» marketing. Vá»›i SME, nÃªn thuÃª agency khi direction Ä‘Ã£ tÆ°Æ¡ng Ä‘á»‘i rÃµ, cÃ³ ngÆ°á»i ná»™i bá»™ biáº¿t brief vÃ  kiá»ƒm soÃ¡t, cÃ³ ngÃ¢n sÃ¡ch Ä‘á»§ cho triá»ƒn khai, vÃ  doanh nghiá»‡p cáº§n nÄƒng lá»±c chuyÃªn mÃ´n sÃ¢u á»Ÿ má»™t máº£ng cá»¥ thá»ƒ nhÆ° ads, SEO, creative, landing page hoáº·c tracking.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t doanh nghiá»‡p nhá» tháº¥y marketing ná»™i bá»™ quÃ¡ táº£i. Founder Ä‘Æ°á»£c giá»›i thiá»‡u agency â€œlÃ m ads tá»‘t, content á»•n, lead sáº½ Ä‘á»u hÆ¡nâ€. Sau vÃ i buá»•i trao Ä‘á»•i, hai bÃªn báº¯t Ä‘áº§u.',
      },
      {
        type: 'paragraph',
        text: 'Agency há»i chÃ¢n dung khÃ¡ch, founder tráº£ lá»i rá»™ng. Há»i offer chÃ­nh, team gá»­i nhiá»u sáº£n pháº©m. Landing page lÃ  website cÅ©; data chá»‰ cÃ³ report ads rá»i ráº¡c; sales follow-up trÃªn Zalo. Agency váº«n lÃ m Ä‘Æ°á»£c post, ads vÃ  report.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i thÃ¡ng, founder tháº¥y â€œchÆ°a ra sá»‘ nhÆ° ká»³ vá»ngâ€. Agency cáº§n thÃªm dá»¯ liá»‡u vÃ  thá»i gian; team tháº¥y output chÆ°a sÃ¡t. KhÃ´ng khÃ­ báº¯t Ä‘áº§u cÄƒng dÃ¹ hai bÃªn Ä‘á»u lÃ m viá»‡c.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» khÃ´ng nháº¥t thiáº¿t lÃ  agency dá»Ÿ. CÃ³ thá»ƒ doanh nghiá»‡p Ä‘Ã£ thuÃª má»™t Ä‘á»™i execution trÆ°á»›c khi bÃ i toÃ¡n bÃªn trong Ä‘á»§ rÃµ.',
      },
      { type: 'heading', text: 'Agency cÃ ng giá»i cÃ ng cáº§n má»™t bÃ i toÃ¡n rÃµ' },
      {
        type: 'paragraph',
        text: 'Agency lÃ  lá»±c lÆ°á»£ng triá»ƒn khai chuyÃªn mÃ´n. Há» cÃ³ thá»ƒ cháº¡y ads, lÃ m creative, SEO, landing page, tracking, content, media plan, campaign hoáº·c audit tÃ i khoáº£n nhanh hÆ¡n má»™t team chÆ°a cÃ³ nÄƒng lá»±c Ä‘Ã³.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng há» khÃ´ng nÃªn pháº£i tá»± Ä‘oÃ¡n sáº£n pháº©m trá»ng tÃ¢m, khÃ¡ch chÃ­nh, lÃ½ do mua, offer Ä‘Ã¡ng Ä‘áº©y, lead vá» Ä‘Ã¢u, sales xá»­ lÃ½ tháº¿ nÃ o, lead tá»‘t nghÄ©a lÃ  gÃ¬ vÃ  ai duyá»‡t direction. Brief cÃ ng mÆ¡ há»“, agency cÃ ng pháº£i Ä‘oÃ¡n; Ä‘oÃ¡n cÃ ng nhiá»u, output cÃ ng dá»… lá»‡ch.',
      },
      { type: 'visual', variant: 'agency-timing-fit' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t SME thuÃª agency khi direction cÃ²n mÆ¡ há»“ nÃªn hai bÃªn Ä‘á»u tháº¥t vá»ng.',
      },
      { type: 'heading', text: 'Má»• láº¡i quyáº¿t Ä‘á»‹nh: lÃºc nÃ o chÆ°a nÃªn thuÃª?' },
      {
        type: 'paragraph',
        text: 'Náº¿u founder chá»‰ nÃ³i â€œmuá»‘n marketing tá»‘t hÆ¡nâ€, agency khÃ´ng biáº¿t Æ°u tiÃªn ads, content, SEO, page hay tracking. Offer vÃ  sáº£n pháº©m mÅ©i nhá»n thay Ä‘á»•i khiáº¿n má»i test máº¥t Ä‘iá»ƒm tá»±a.',
      },
      {
        type: 'paragraph',
        text: 'CÅ©ng chÆ°a nÃªn thuÃª khi khÃ´ng ai gom thÃ´ng tin, duyá»‡t hÆ°á»›ng, cáº¥p asset vÃ  pháº£n há»“i. Náº¿u khÃ´ng cÃ³ CRM, status vÃ  sales follow-up, hai bÃªn sáº½ tranh luáº­n lead tá»‘t hay xáº¥u báº±ng cáº£m giÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Giao agency chá»‹u toÃ n bá»™ doanh thu cÅ©ng dá»… lá»‡ch. Há» chá»‹u trÃ¡ch nhiá»‡m cho traffic, lead, creative, SEO hoáº·c tracking trong scope; doanh thu cÃ²n phá»¥ thuá»™c offer, giÃ¡, sales vÃ  váº­n hÃ nh. NgÃ¢n sÃ¡ch má»ng nhÆ°ng scope gá»“m ads, content, web, video, SEO, branding lÃ  lÃºc cáº§n Æ°u tiÃªn láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'ChÆ°a thuÃª khÃ´ng cÃ³ nghÄ©a ngá»«ng marketing. CÃ³ thá»ƒ doanh nghiá»‡p cáº§n lÃ m rÃµ direction, offer, lead flow, CRM vÃ  dashboard tá»‘i thiá»ƒu trÆ°á»›c.',
      },
      { type: 'heading', text: 'LÃºc agency trá»Ÿ thÃ nh má»™t Ä‘Ã²n báº©y Ä‘Ãºng nghÄ©a' },
      {
        type: 'paragraph',
        text: 'NÃªn thuÃª khi bÃ i toÃ¡n Ä‘Ã£ gá»i Ä‘Æ°á»£c tÃªn: cáº§n scale ads, xÃ¢y ná»n SEO, lÃ m campaign page, setup GTM, Ä‘á»u creative production hoáº·c audit há»‡ thá»‘ng Ä‘ang cháº¡y.',
      },
      {
        type: 'paragraph',
        text: 'Doanh nghiá»‡p cáº§n context owner hiá»ƒu sáº£n pháº©m, khÃ¡ch, sales feedback vÃ  má»¥c tiÃªu. Brief cáº§n objective, audience, offer, proof, scope, timeline; ngÃ¢n sÃ¡ch pháº£i gá»“m fee cÃ¹ng media, tool hoáº·c production.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¡ch Ä‘o Ä‘i theo loáº¡i viá»‡c. Ads Ä‘á»c CPL, lead quality, conversion; SEO Ä‘á»c technical, index, traffic quality; page Ä‘á»c CTA vÃ  submit; tracking Ä‘á»c event vÃ  data; creative Ä‘á»c output, angle test, tÃ­n hiá»‡u.',
      },
      { type: 'visual', variant: 'agency-problem-fit' },
      { type: 'heading', text: 'KhÃ´ng cÃ³ ngÆ°á»i giá»¯ context, hai bÃªn sáº½ liÃªn tá»¥c dá»‹ch sai' },
      {
        type: 'paragraph',
        text: 'Agency Ä‘á»©ng ngoÃ i doanh nghiá»‡p. Há» khÃ´ng nghe sales trao Ä‘á»•i vá»›i khÃ¡ch má»—i ngÃ y, khÃ´ng tháº¥y má»i Æ°u tiÃªn ná»™i bá»™ vÃ  khÃ´ng biáº¿t háº¿t cÃ¡c rÃ ng buá»™c váº­n hÃ nh. Context vÃ¬ váº­y váº«n pháº£i náº±m bÃªn trong.',
      },
      {
        type: 'paragraph',
        text: 'Context owner cung cáº¥p thÃ´ng tin sáº£n pháº©m, gom feedback sales, chá»‘t offer, duyá»‡t direction, Ä‘Æ°a proof, kiá»ƒm tra form/page, xem lead quality vÃ  káº¿t ná»‘i agency vá»›i IT, sales, founder. Thiáº¿u vai trÃ² nÃ y, agency buá»™c pháº£i tá»± Ä‘oÃ¡n quÃ¡ nhiá»u.',
      },
      { type: 'heading', text: 'Má»™t brief Ä‘á»§ dÃ¹ng khÃ´ng cáº§n dÃ i' },
      {
        type: 'paragraph',
        text: 'Brief tá»‘i thiá»ƒu cáº§n nÃ³i doanh nghiá»‡p bÃ¡n gÃ¬, Ä‘ang vÆ°á»›ng gÃ¬ vÃ  má»¥c tiÃªu láº§n thuÃª nÃ y lÃ  lead, SEO, page, tracking, audit hay creative. Tiáº¿p Ä‘Ã³ lÃ  audience, offer Æ°u tiÃªn, proof cÃ³ sáºµn vÃ  há»‡ thá»‘ng hiá»‡n táº¡i gá»“m website, ads account, CRM, tracking, dashboard.',
      },
      {
        type: 'paragraph',
        text: 'Pháº§n dá»… bá»‹ bá» quÃªn lÃ  scope: agency lÃ m gÃ¬, khÃ´ng lÃ m gÃ¬; KPI nÃ o náº±m trong táº§m áº£nh hÆ°á»Ÿng; ai duyá»‡t; report vÃ  pháº£n há»“i theo nhá»‹p nÃ o; cÃ¹ng cÃ¡c giá»›i háº¡n vá» ngÃ¢n sÃ¡ch, timeline, brand hoáº·c phÃ¡p lÃ½. Brief khÃ´ng cáº§n Ä‘áº¹p, nhÆ°ng pháº£i Ä‘á»§ Ä‘á»ƒ agency khÃ´ng Ä‘oÃ¡n direction.',
      },
      { type: 'visual', variant: 'agency-brief-minimum' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n agency brief template cho SME.',
      },
      { type: 'heading', text: 'Äá»«ng giao má»™t mong muá»‘n rá»™ng nhÆ° thá»ƒ Ä‘Ã³ lÃ  scope' },
      {
        type: 'paragraph',
        text: 'â€œLÃ m thÆ°Æ¡ng hiá»‡u máº¡nh hÆ¡nâ€, â€œads sao ra Ä‘Æ¡nâ€, â€œcontent hay hÆ¡nâ€, â€œSEO lÃªn topâ€, â€œwebsite Ä‘áº¹p hÆ¡nâ€ hay â€œtÄƒng doanh thu thÃ¡ng nÃ yâ€ Ä‘á»u cÃ³ Ã½ Ä‘á»‹nh há»£p lÃ½ nhÆ°ng chÆ°a Ä‘á»§ Ä‘á»ƒ triá»ƒn khai.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y Ä‘á»•i thÃ nh bÃ i toÃ¡n cá»¥ thá»ƒ: page conversion tháº¥p cáº§n audit hero/CTA/form; ads cÃ³ lead sai nhu cáº§u cáº§n test offer, form vÃ  creative; website thiáº¿u tracking cáº§n event vÃ  dashboard; content rá»i ráº¡c cáº§n bá»‘n pillar cÃ¹ng lá»‹ch tÃ¡m tuáº§n; SEO chÆ°a cÃ³ ná»n cáº§n technical audit, topic map vÃ  nhÃ³m bÃ i ná»n.',
      },
      {
        type: 'paragraph',
        text: 'YÃªu cáº§u cÃ ng rÃµ Ä‘áº§u ra, pháº¡m vi vÃ  tÃ­n hiá»‡u thÃ nh cÃ´ng, agency cÃ ng cÃ³ cÆ¡ há»™i lÃ m tá»‘t.',
      },
      { type: 'heading', text: 'Sau 30â€“60 ngÃ y, Ä‘á»«ng chá»‰ há»i â€œá»•n khÃ´ng?â€' },
      {
        type: 'paragraph',
        text: 'HÃ£y xem agency hiá»ƒu business nhanh khÃ´ng, cÃ³ há»i Ä‘Ãºng cÃ¢u, bÃ¡m brief, pháº£n há»“i báº±ng dá»¯ liá»‡u, minh báº¡ch viá»‡c Ä‘Ã£ vÃ  chÆ°a lÃ m, chá»§ Ä‘á»™ng chá»‰ Ä‘iá»ƒm ngháº½n, phá»‘i há»£p Ä‘Æ°á»£c vá»›i team vÃ  táº¡o report giÃºp ra quyáº¿t Ä‘á»‹nh khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'SEO, brand, content hoáº·c B2B khÃ´ng nháº¥t thiáº¿t táº¡o káº¿t quáº£ cuá»‘i trong 30 ngÃ y. NhÆ°ng sau 30â€“60 ngÃ y pháº£i rÃµ hÆ¡n: Ä‘ang test gÃ¬, há»c Ä‘Æ°á»£c gÃ¬, tÃ­n hiá»‡u nÃ o xuáº¥t hiá»‡n, Ä‘iá»ƒm ngháº½n á»Ÿ Ä‘Ã¢u vÃ  bÆ°á»›c tiáº¿p theo lÃ  gÃ¬.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch founder quyáº¿t Ä‘á»‹nh khi nÃ o nÃªn thuÃª agency.',
      },
      { type: 'heading', text: 'Ba vai trÃ² trong má»™t cÃ¡ch phá»‘i há»£p lÃ nh máº¡nh' },
      {
        type: 'paragraph',
        text: 'In-house giá»¯ context: viáº¿t brief, gom feedback sales, cung cáº¥p asset, theo dÃµi CRM/dashboard vÃ  review output. Agency triá»ƒn khai ads, SEO, page, tracking hoáº·c creative theo scope; Ä‘á» xuáº¥t test vÃ  bÃ¡o cÃ¡o tÃ­n hiá»‡u. Founder chá»‘t Æ°u tiÃªn, offer, ngÃ¢n sÃ¡ch vÃ  gá»¡ ngháº½n ná»™i bá»™.',
      },
      {
        type: 'paragraph',
        text: 'Agency khÃ´ng thay toÃ n bá»™ marketing ná»™i bá»™. Há» lÃ  pháº§n má»Ÿ rá»™ng chuyÃªn mÃ´n cá»§a má»™t há»‡ thá»‘ng Ä‘Ã£ cÃ³ ngÆ°á»i giá»¯ nhá»‹p.',
      },
      { type: 'heading', text: 'BÃ i há»c sau nhá»¯ng láº§n thuÃª ngoÃ i' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra thuÃª agency Ä‘á»ƒ Ä‘i nhanh hÆ¡n nhiá»u khi lÃ  quyáº¿t Ä‘á»‹nh Ä‘Ãºng. Má»™t Ä‘á»™i tá»‘t giÃºp trÃ¡nh mÃ² máº«m vÃ  bá»• sung nÄƒng lá»±c ná»™i bá»™ chÆ°a cÃ³. NhÆ°ng agency khÃ´ng thá»ƒ tá»± lÃ m rÃµ má»i thá»© náº¿u bÃªn trong khÃ´ng ai giá»¯ context.',
      },
      {
        type: 'paragraph',
        text: 'Agency lÃ m ads nhÆ°ng khÃ´ng thay sales follow-up; dá»±ng page nhÆ°ng cáº§n offer vÃ  proof; setup tracking nhÆ°ng cáº§n biáº¿t event quan trá»ng; lÃ m content nhÆ°ng cáº§n biáº¿t thá»‹ trÆ°á»ng nÃªn hiá»ƒu gÃ¬. Agency khÃ´ng xáº¥u. Sai thá»i Ä‘iá»ƒm, scope vÃ  ká»³ vá»ng má»›i lÃ m hai bÃªn má»‡t.',
      },
      {
        type: 'paragraph',
        text: 'Agency lÃ  Ä‘Ã²n báº©y tá»‘t khi doanh nghiá»‡p biáº¿t mÃ¬nh muá»‘n báº©y Ä‘iá»ƒm nÃ o.',
      },
      { type: 'heading', text: 'ThuÃª Ä‘á»ƒ giáº£i má»™t bÃ i toÃ¡n Ä‘Ã£ gá»i Ä‘Æ°á»£c tÃªn' },
      {
        type: 'paragraph',
        text: 'NÃªn thuÃª agency khi bÃ i toÃ¡n tÆ°Æ¡ng Ä‘á»‘i rÃµ, cÃ³ ngÆ°á»i ná»™i bá»™ giá»¯ context, brief, ngÃ¢n sÃ¡ch, cÃ¡ch Ä‘o vÃ  nhu cáº§u chuyÃªn mÃ´n cá»¥ thá»ƒ. ChÆ°a nÃªn thuÃª náº¿u direction, offer, lead flow, CRM, sales follow-up vÃ  KPI cÃ²n quÃ¡ mÆ¡ há»“.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang chuáº©n bá»‹ thuÃª agency, Ä‘á»«ng báº¯t Ä‘áº§u báº±ng cÃ¢u â€œbÃªn em giÃºp anh lÃ m marketing tá»‘t hÆ¡nâ€. HÃ£y báº¯t Ä‘áº§u báº±ng má»™t brief ngáº¯n: bÃ i toÃ¡n cáº§n giáº£i lÃ  gÃ¬, agency phá»¥ trÃ¡ch pháº§n nÃ o, dá»¯ liá»‡u hiá»‡n táº¡i ra sao, ai giá»¯ context ná»™i bá»™ vÃ  30â€“60 ngÃ y Ä‘áº§u sáº½ Ä‘Ã¡nh giÃ¡ báº±ng tÃ­n hiá»‡u nÃ o.',
  },
  {
    title: 'Khi nÃ o nÃªn tá»± build team marketing?',
    slug: 'khi-nao-nen-tu-build-team-marketing',
    category: 'Founder Marketing Decisions',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-internal-event-team-group-stage-01.jpg",
                "alt": "Large team group photo in an indoor venue",
                "caption": "Team group photo at an indoor event",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/company-work/company-work-operations-box-carrying-01.jpg",
                      "alt": "Person carrying a product box in a work area",
                      "caption": "Operations work moment",
                      "width": 1536,
                      "height": 2048,
                      "fit": "cover",
                      "afterHeading": "Memo 02 â€” Dáº¥u hiá»‡u khÃ´ng cÃ²n lÃ  thiáº¿u ngÆ°á»i lÃ m má»™t dá»± Ã¡n"
                }
          ]
    },
    excerpt:
      'Tá»± build team marketing khÃ´ng nÃªn báº¯t Ä‘áº§u tá»« cáº£m giÃ¡c â€œcÃ´ng ty cáº§n cÃ³ phÃ²ng marketing cho chuyÃªn nghiá»‡pâ€. Vá»›i SME, thá»i Ä‘iá»ƒm tá»± build team thÆ°á»ng Ä‘áº¿n khi marketing Ä‘Ã£ trá»Ÿ thÃ nh má»™t dÃ²ng viá»‡c láº·p láº¡i má»—i tuáº§n: content, ads, landing page, campaign, lead flow, CRM, sales feedback, dashboard vÃ  nhiá»u context ná»™i bá»™ cáº§n Ä‘Æ°á»£c giá»¯ láº¡i trong cÃ´ng ty.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ giai Ä‘oáº¡n doanh nghiá»‡p nhá» lá»›n hÆ¡n má»™t chÃºt. Lead Ä‘áº¿n tá»« nhiá»u nguá»“n; content khÃ´ng cÃ²n lÃ  vÃ i post; ads cáº§n theo dÃµi; page cáº§n sá»­a; sales pháº£n há»“i lead khÃ´ng Ä‘á»u hoáº·c lá»‡ch nhu cáº§u.',
      },
      {
        type: 'paragraph',
        text: 'Founder khÃ´ng thá»ƒ duyá»‡t tá»«ng banner, caption vÃ  campaign nhá». CÃ¢u há»i xuáº¥t hiá»‡n: â€œCÃ³ nÃªn tá»± build team marketing khÃ´ng?â€',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u há»i Ä‘Ãºng khÃ´ng pháº£i cÃ´ng ty Ä‘Ã£ cáº§n phÃ²ng marketing chÆ°a, mÃ  marketing Ä‘Ã£ thÃ nh má»™t há»‡ viá»‡c láº·p láº¡i Ä‘á»§ lá»›n Ä‘á»ƒ team ná»™i bá»™ giá»¯ nhá»‹p chÆ°a.',
      },
      {
        type: 'paragraph',
        text: 'Build team lÃ  quyáº¿t Ä‘á»‹nh giá»¯ context, nhá»‹p váº­n hÃ nh vÃ  bÃ i há»c marketing láº¡i trong doanh nghiá»‡p â€” khÃ´ng pháº£i thÃªm má»™t sÆ¡ Ä‘á»“ tá»• chá»©c Ä‘áº¹p.',
      },
      { type: 'heading', text: 'Memo 01 â€” CÃ³ ngÆ°á»i nhÆ°ng chÆ°a cháº¯c Ä‘Ã£ cÃ³ nÄƒng lá»±c' },
      {
        type: 'paragraph',
        text: 'ChÆ°a nÃªn build náº¿u founder chÆ°a rÃµ tá»‡p khÃ¡ch, offer, thÃ´ng Ä‘iá»‡p vÃ  kÃªnh Æ°u tiÃªn. Náº¿u lÃ¢u lÃ¢u má»›i Ä‘Äƒng bÃ i, cháº¡y campaign hoáº·c sá»­a web, viá»‡c chÆ°a Ä‘á»§ Ä‘á»u cho chi phÃ­ cá»‘ Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Tuyá»ƒn ngÆ°á»i nhÆ°ng khÃ´ng ai biáº¿t brief, review hay chá»‘t Æ°u tiÃªn cÅ©ng dá»… lá»‡ch. Náº¿u lead vá» Ä‘Ã¢u, ai xá»­ lÃ½, status vÃ  follow-up váº«n mÃ¹, team chá»‰ táº¡o thÃªm Ä‘áº§u vÃ o cho flow Ä‘ang há»Ÿ.',
      },
      {
        type: 'paragraph',
        text: 'NgÃ¢n sÃ¡ch chá»‰ Ä‘á»§ lÆ°Æ¡ng, khÃ´ng cÃ²n cho ads, production, tool vÃ  thá»­ nghiá»‡m khiáº¿n team lÃ m cáº§m chá»«ng. Náº¿u founder muá»‘n ngÆ°á»i â€œlÃ m thay marketingâ€, há» pháº£i gÃ¡nh cáº£ sáº£n pháº©m, offer vÃ  sales chÆ°a rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Build quÃ¡ sá»›m lÃ m chi phÃ­ vÃ  sá»‘ ngÆ°á»i cáº§n quáº£n lÃ½ tÄƒng, nhÆ°ng nÄƒng lá»±c chÆ°a cháº¯c tÄƒng vÃ¬ chÆ°a cÃ³ há»‡ Ä‘á»ƒ cháº¡y.',
      },
      { type: 'visual', variant: 'build-team-timing' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t SME build team quÃ¡ sá»›m nhÆ°ng thiáº¿u direction nÃªn team chá»‰ táº¡o output rá»i ráº¡c.',
      },
      { type: 'heading', text: 'Memo 02 â€” Dáº¥u hiá»‡u khÃ´ng cÃ²n lÃ  thiáº¿u ngÆ°á»i lÃ m má»™t dá»± Ã¡n' },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm chuyá»ƒn Ä‘áº¿n khi content, ads, campaign, page, tracking, report, CRM vÃ  sales feedback xuáº¥t hiá»‡n má»—i tuáº§n. Founder khÃ´ng giá»¯ ná»•i context; external lÃ m tá»‘t tá»«ng pháº§n nhÆ°ng khÃ´ng nghe khÃ¡ch pháº£n há»“i háº±ng ngÃ y.',
      },
      {
        type: 'paragraph',
        text: 'Sales cáº§n marketing há»— trá»£ lead quality, script, case vÃ  tÃ i liá»‡u follow-up. Ads, page, feedback vÃ  campaign result cáº§n thÃ nh bÃ i há»c ná»™i bá»™ thay vÃ¬ ráº£i rÃ¡c theo dá»± Ã¡n.',
      },
      {
        type: 'paragraph',
        text: 'Quyáº¿t Ä‘á»‹nh cÃ³ ná»n khi ngÃ¢n sÃ¡ch Ä‘á»§ duy trÃ¬ team vÃ  triá»ƒn khai trong 6â€“12 thÃ¡ng. Khi marketing lÃ  nÄƒng lá»±c cáº§n tÃ­ch luá»¹, team ná»™i bá»™ báº¯t Ä‘áº§u cÃ³ lÃ½ do tá»“n táº¡i.',
      },
      { type: 'heading', text: 'Memo 03 â€” Team Ä‘áº§u tiÃªn nÃªn giá»‘ng má»™t pod nhá»' },
      {
        type: 'paragraph',
        text: 'SME khÃ´ng cáº§n báº¯t Ä‘áº§u báº±ng nÄƒm hay báº£y ngÆ°á»i. Má»™t mÃ´ hÃ¬nh gá»n cÃ³ thá»ƒ lÃ  marketing generalist giá»¯ context, má»™t content marketer, designer part-time, ads specialist thuÃª ngoÃ i, web support theo nhu cáº§u vÃ  sales phá»‘i há»£p báº±ng CRM.',
      },
      {
        type: 'paragraph',
        text: 'Giai Ä‘oáº¡n Ä‘áº§u, in-house giá»¯ brief, asset, data vÃ  nhá»‹p review; freelancer hoáº·c agency lÃ m production vÃ  chuyÃªn mÃ´n sÃ¢u. Build team lÃ  build kháº£ nÄƒng phá»‘i há»£p, khÃ´ng pháº£i láº¥p Ä‘áº§y chá»©c danh.',
      },
      { type: 'visual', variant: 'first-marketing-pod' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch founder quyáº¿t Ä‘á»‹nh khi nÃ o nÃªn tá»± build team marketing.',
      },
      { type: 'heading', text: 'Memo 04 â€” Tuyá»ƒn vai trÃ² theo Ä‘iá»ƒm ngháº½n tháº­t' },
      {
        type: 'paragraph',
        text: 'Náº¿u chÆ°a ai giá»¯ nhá»‹p, vai trÃ² Ä‘áº§u thÆ°á»ng lÃ  generalist hoáº·c coordinator cÃ³ tÆ° duy há»‡ thá»‘ng: viáº¿t Ä‘á»§ tá»‘t, biáº¿t brief, phá»‘i há»£p design, ads, IT, sales, Ä‘á»c sá»‘ vÃ  biáº¿n feedback thÃ nh viá»‡c.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u content lÃ  ngháº½n, tuyá»ƒn content marketer nhÆ°ng cáº§n ngÆ°á»i Ä‘á»‹nh hÆ°á»›ng. Ads tiÃªu nhiá»u tiá»n cÃ³ thá»ƒ dÃ¹ng specialist, miá»…n ná»™i bá»™ Ä‘á»c lead quality. Web/tracking cÃ³ thá»ƒ thuÃª setup, nhÆ°ng team váº«n pháº£i hiá»ƒu event, form, CRM vÃ  dashboard.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ má»™t vá»‹ trÃ­ Ä‘áº§u tiÃªn Ä‘Ãºng cho má»i cÃ´ng ty. CÃ¢u tráº£ lá»i náº±m á»Ÿ Ä‘oáº¡n nÃ o Ä‘ang lÃ m há»‡ thá»‘ng Ä‘á»©ng láº¡i.',
      },
      { type: 'heading', text: 'Memo 05 â€” Äá»«ng tuyá»ƒn má»™t nÄƒng lá»±c trÆ°á»›c khi cÃ³ Ä‘á»§ viá»‡c cho nÃ³' },
      {
        type: 'paragraph',
        text: 'Social chá»‰ Ä‘Äƒng Ä‘á»u, designer khi Ã­t asset, SEO khi website chÆ°a cÃ³ ná»n, ads khi media nhá» vÃ  video team khi chÆ°a cÃ³ content direction Ä‘á»u dá»… thÃ nh chi phÃ­ chá» viá»‡c.',
      },
      {
        type: 'paragraph',
        text: 'Manager senior cÅ©ng chÆ°a phÃ¹ há»£p náº¿u scope quÃ¡ nhá». CÃ¡c vai trÃ² Ä‘á»u quan trá»ng á»Ÿ Ä‘Ãºng giai Ä‘oáº¡n; tuyá»ƒn sá»›m lÃ m chi phÃ­ tÄƒng nhanh hÆ¡n nÄƒng lá»±c.',
      },
      { type: 'heading', text: 'Memo 06 â€” In-house khÃ´ng cÃ³ nghÄ©a tá»± lÃ m má»i thá»©' },
      {
        type: 'paragraph',
        text: 'MÃ´ hÃ¬nh lÃ nh máº¡nh Ä‘á»ƒ in-house giá»¯ direction, context, CRM, sales feedback vÃ  dashboard; external bá»• sung ads, SEO, page, tracking, video; founder chá»‘t Æ°u tiÃªn vÃ  gá»¡ ngháº½n.',
      },
      {
        type: 'paragraph',
        text: 'Team ná»™i bá»™ viáº¿t brief, gom proof, Ä‘á»c sales feedback; agency dá»±ng page hoáº·c cháº¡y ads; sales cáº­p nháº­t CRM; marketing Ä‘Æ°a bÃ i há»c vÃ o campaign sau.',
      },
      {
        type: 'paragraph',
        text: 'Team ná»™i bá»™ tá»‘t khÃ´ng pháº£i team lÃ m háº¿t. Há» biáº¿t pháº§n nÃ o pháº£i giá»¯ trong cÃ´ng ty vÃ  pháº§n nÃ o nÃªn thuÃª ngoÃ i.',
      },
      { type: 'visual', variant: 'inhouse-external-operating-model' },
      { type: 'heading', text: 'Memo 07 â€” ChÃ­n mÆ°Æ¡i ngÃ y Ä‘áº§u Ä‘á»ƒ lÃ m rÃµ há»‡ thá»‘ng' },
      {
        type: 'paragraph',
        text: '30 ngÃ y Ä‘áº§u audit kÃªnh, gom asset/data, chá»‘t audience/offer/message, kiá»ƒm tra lead flow, CRM vÃ  report. 30 ngÃ y sau cháº¡y campaign nhá», sá»­a page/form, táº¡o content pillar, dashboard vÃ  láº¥y sales feedback.',
      },
      {
        type: 'paragraph',
        text: '30 ngÃ y cuá»‘i chuáº©n hoÃ¡ workflow, xÃ¡c Ä‘á»‹nh pháº§n in-house hay thuÃª ngoÃ i, táº¡o launch checklist, case, sales material rá»“i review vai trÃ² cáº§n tuyá»ƒn tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng yÃªu cáº§u team chá»©ng minh báº±ng tháº­t nhiá»u output. HÃ£y xem há»‡ thá»‘ng rÃµ hÆ¡n, lead Ã­t rÆ¡i hÆ¡n vÃ  founder quyáº¿t Ä‘á»‹nh dá»… hÆ¡n chÆ°a.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n 90-day marketing team build plan cho SME.',
      },
      { type: 'heading', text: 'Memo 08 â€” TÃ¡m cÃ¢u há»i trÆ°á»›c khi má»Ÿ thÃªm gháº¿' },
      {
        type: 'list',
        items: [
          'Marketing cÃ³ Ä‘ang lÃ  viá»‡c láº·p láº¡i má»—i tuáº§n khÃ´ng?',
          'Founder cÃ³ lÃ  nÃºt cá»• chai cá»§a má»i output khÃ´ng?',
          'Lead cÃ³ rÆ¡i vÃ¬ thiáº¿u ngÆ°á»i giá»¯ nhá»‹p khÃ´ng?',
          'Sales cÃ³ cáº§n marketing phá»‘i há»£p sÃ¡t hÆ¡n khÃ´ng?',
          'Doanh nghiá»‡p cÃ³ cáº§n giá»¯ context vÃ  bÃ i há»c ná»™i bá»™ khÃ´ng?',
          'CÃ³ ngÃ¢n sÃ¡ch duy trÃ¬ team vÃ  ngÃ¢n sÃ¡ch triá»ƒn khai khÃ´ng?',
          'CÃ³ ngÆ°á»i Ä‘á»§ nÄƒng lá»±c quáº£n lÃ½ vÃ  review team khÃ´ng?',
          'Trong 90 ngÃ y Ä‘áº§u, team cáº§n lÃ m rÃµ há»‡ thá»‘ng nÃ o?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u pháº§n lá»›n cÃ¢u há»i chÆ°a cÃ³ Ä‘Ã¡p Ã¡n, hÃ£y lÃ m rÃµ direction, lead flow, CRM, dashboard hoáº·c thuÃª ngoÃ i má»™t pháº§n trÆ°á»›c. Náº¿u pháº§n lá»›n Ä‘Ã£ rÃµ, má»™t team nhá» cÃ³ thá»ƒ lÃ  bÆ°á»›c Ä‘Ãºng.',
      },
      { type: 'heading', text: 'Ghi chÃº cuá»‘i tá»« gÃ³c nhÃ¬n operator' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra build team khÃ´ng Ä‘Æ¡n giáº£n lÃ  thÃªm ngÆ°á»i Ä‘á»ƒ lÃ m nhiá»u viá»‡c hÆ¡n. Nhiá»u doanh nghiá»‡p tháº­t ra thiáº¿u má»™t há»‡ thá»‘ng Ä‘á»ƒ ngÆ°á»i má»›i bÆ°á»›c vÃ o mÃ  khÃ´ng bá»‹ cuá»‘n vÃ o output rá»i ráº¡c.',
      },
      {
        type: 'paragraph',
        text: 'Team nhá» táº¡o giÃ¡ trá»‹ khi giá»¯ Ä‘Æ°á»£c cÃ¢u há»i khÃ¡ch, sales objection, Ä‘iá»ƒm rÆ¡i cá»§a page, campaign tá»‘t vÃ  data Ä‘Ã¡ng Ä‘á»c. Team Ä‘Ã´ng nhÆ°ng thiáº¿u direction, CRM, dashboard váº«n táº¡o nhiá»u output khÃ´ng rÃµ Ä‘ang Ä‘i Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Build team marketing khÃ´ng pháº£i cá»™ng thÃªm ngÆ°á»i. ÄÃ³ lÃ  xÃ¢y má»™t nÄƒng lá»±c váº­n hÃ nh náº±m láº¡i trong doanh nghiá»‡p.',
      },
      { type: 'heading', text: 'Build khi cÃ³ má»™t dÃ²ng viá»‡c Ä‘Ã¡ng Ä‘á»ƒ giá»¯ láº¡i' },
      {
        type: 'paragraph',
        text: 'NÃªn build team khi marketing Ä‘Ã£ láº·p láº¡i, cáº§n giá»¯ context, phá»‘i há»£p sÃ¡t sales/ops, cÃ³ lead vÃ  data cáº§n Ä‘á»c, cÃ¹ng ngÃ¢n sÃ¡ch duy trÃ¬. ChÆ°a nÃªn build khi direction, offer, lead flow, CRM, dashboard vÃ  nhá»‹p quáº£n lÃ½ cÃ²n mÆ¡ há»“.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang nghÄ© Ä‘áº¿n viá»‡c tá»± build team marketing, Ä‘á»«ng báº¯t Ä‘áº§u báº±ng sÆ¡ Ä‘á»“ nhÃ¢n sá»±. HÃ£y báº¯t Ä‘áº§u báº±ng má»™t cÃ¢u há»i: trong 90 ngÃ y tá»›i, team nÃ y cáº§n lÃ m rÃµ há»‡ thá»‘ng nÃ o â€” content, campaign, lead flow, CRM, dashboard, sales feedback hay nÄƒng lá»±c Ä‘iá»u phá»‘i agency/freelancer?',
  },
  {
    title: 'NgÃ¢n sÃ¡ch 20tr/thÃ¡ng nÃªn lÃ m gÃ¬ trÆ°á»›c?',
    slug: 'ngan-sach-20tr-thang-nen-lam-gi-truoc',
    category: 'Founder Marketing Decisions',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-conference-room-audience-session-01.jpg",
                "alt": "Audience watching a presentation in a training room",
                "caption": "Training session audience",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/training-workshop/training-workshop-meeting-room-presentation-discussion-01.jpg",
                      "alt": "People in a meeting room during a workshop",
                      "caption": "Workshop discussion in meeting room",
                      "width": 2048,
                      "height": 1366,
                      "fit": "cover",
                      "afterHeading": "Memo 02 â€” Ads khÃ´ng sai, nhÆ°ng ná»n pháº£i chá»‹u Ä‘Æ°á»£c traffic"
                }
          ]
    },
    excerpt:
      'Vá»›i ngÃ¢n sÃ¡ch marketing 20tr/thÃ¡ng, Ä‘iá»u nguy hiá»ƒm nháº¥t khÃ´ng pháº£i lÃ  Ã­t tiá»n, mÃ  lÃ  chia tiá»n quÃ¡ má»ng cho quÃ¡ nhiá»u viá»‡c: má»™t Ã­t ads, má»™t Ã­t content, má»™t Ã­t thiáº¿t káº¿, má»™t Ã­t SEO, má»™t Ã­t KOL, nhÆ°ng khÃ´ng cÃ³ landing page tá»‘t, tracking rÃµ, CRM/follow-up vÃ  má»™t hÆ°á»›ng Æ°u tiÃªn Ä‘á»§ sáº¯c. NgÃ¢n sÃ¡ch nhá» cáº§n chá»n Ä‘Ãºng Ä‘iá»ƒm ngháº½n trÆ°á»›c, khÃ´ng pháº£i lÃ m cho Ä‘á»§ máº·t tráº­n.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t founder cÃ³ 20tr má»—i thÃ¡ng cho marketing. KhÃ´ng quÃ¡ nhiá»u nhÆ°ng váº«n lÃ m Ä‘Æ°á»£c viá»‡c. Ráº¯c rá»‘i báº¯t Ä‘áº§u khi chia thÃ nh 7tr ads, 3tr thiáº¿t káº¿, 3tr content, 2tr boost, 2tr SEO vÃ  3tr thá»­ kÃªnh má»›i.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i thÃ¡ng, ads Ä‘Ã£ cháº¡y nhÆ°ng landing page yáº¿u. Content cÃ³ Ä‘Äƒng nhÆ°ng khÃ´ng ná»‘i vá»›i offer. Form cÃ³ lead nhÆ°ng sales khÃ´ng update. Tracking má», nguá»“n lead khÃ´ng rÃµ. Founder tháº¥y marketing â€œcÃ³ lÃ mâ€, nhÆ°ng khÃ´ng biáº¿t tiá»n Ä‘Ã£ lÃ m há»‡ thá»‘ng tá»‘t hÆ¡n á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: '20tr nÃªn Ä‘i theo Ä‘iá»ƒm ngháº½n, khÃ´ng theo danh sÃ¡ch viá»‡c muá»‘n lÃ m. ÄÃ¢y lÃ  cÃ¡ch Ä‘áº·t Æ°u tiÃªn, khÃ´ng pháº£i cÃ´ng thá»©c hay lá»i há»©a doanh thu.',
      },
      { type: 'heading', text: 'Memo 01 â€” Cháº©n Ä‘oÃ¡n trÆ°á»›c khi chia tiá»n' },
      {
        type: 'paragraph',
        text: 'CÃ¡ch dÃ¹ng thay Ä‘á»•i theo tráº¡ng thÃ¡i. Offer chÆ°a rÃµ thÃ¬ ads lÃ m Ä‘iá»ƒm yáº¿u lá»™ nhanh hÆ¡n. Page yáº¿u thÃ¬ click váº«n rÆ¡i vÃ¬ thiáº¿u proof, CTA hoáº·c form khÃ³ Ä‘iá»n.',
      },
      {
        type: 'paragraph',
        text: 'Sales follow-up yáº¿u khiáº¿n lead náº±m láº¡i trong Zalo hoáº·c file rá»i ráº¡c. KhÃ´ng tracking khiáº¿n founder khÃ´ng biáº¿t tiá»n Ä‘i Ä‘Ã¢u, form nÃ o hiá»‡u quáº£ vÃ  sales xá»­ lÃ½ Ä‘áº¿n Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Chá»‰ khi offer, page, tracking vÃ  lead flow Ä‘Ã£ táº¡m rÃµ, ngÃ¢n sÃ¡ch má»›i nÃªn nghiÃªng sang test ads, content angle, page variation hoáº·c campaign nhá». KhÃ´ng cháº©n Ä‘oÃ¡n, 20tr ráº¥t dá»… thÃ nh tiá»n thá»­ váº­n may.',
      },
      { type: 'visual', variant: 'budget-bottleneck-priority' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t SME dÃ¹ng 20tr/thÃ¡ng nhÆ°ng chia quÃ¡ má»ng nÃªn khÃ´ng há»c Ä‘Æ°á»£c gÃ¬.',
      },
      { type: 'heading', text: 'Memo 02 â€” Ads khÃ´ng sai, nhÆ°ng ná»n pháº£i chá»‹u Ä‘Æ°á»£c traffic' },
      {
        type: 'paragraph',
        text: 'Ads Ä‘Æ°a ngÆ°á»i vÃ o há»‡ thá»‘ng nhanh. NhÆ°ng Ä‘á»«ng dá»“n ngÃ¢n sÃ¡ch khi website chÆ°a rÃµ offer, form chÆ°a á»•n, submit khÃ´ng tracking, CRM chÆ°a nháº­n lead, sales chÆ°a follow-up vÃ  content thiáº¿u proof.',
      },
      {
        type: 'paragraph',
        text: 'Founder cáº§n Ä‘á»‹nh nghÄ©a lead cháº¥t lÆ°á»£ng. Thiáº¿u tiÃªu chuáº©n, nhiá»u form hÆ¡n váº«n chÆ°a cho biáº¿t campaign cÃ³ giÃºp business khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Ads nÃªn Ä‘á»©ng trÃªn ná»n tá»‘i thiá»ƒu gá»“m message, page, form, tracking, CRM vÃ  follow-up. NgÃ¢n sÃ¡ch nhá» khÃ´ng chá»‹u ná»•i viá»‡c liÃªn tá»¥c mua traffic cho má»™t há»‡ thá»‘ng mÃ¹.',
      },
      { type: 'heading', text: 'Memo 03 â€” Ba ká»‹ch báº£n, ba cÃ¡ch dÃ¹ng tiá»n khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'CÃ¡c con sá»‘ dÆ°á»›i Ä‘Ã¢y chá»‰ lÃ  vÃ­ dá»¥ tÆ° duy phÃ¢n bá»•, khÃ´ng pháº£i tá»· lá»‡ cá»‘ Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Ká»‹ch báº£n A â€” chÆ°a cÃ³ ná»n rÃµ: sá»­a há»‡ thá»‘ng trÆ°á»›c traffic. CÃ³ thá»ƒ dÃ nh 6â€“8tr cho page, form, copy, proof; 3â€“5tr cho tracking vÃ  dashboard; 3â€“5tr cho content ná»n; 3â€“5tr cho ads test nhá»; pháº§n cÃ²n láº¡i cho tool hoáº·c CRM Sheet.',
      },
      {
        type: 'paragraph',
        text: 'Ká»‹ch báº£n B â€” cÃ³ page nhÆ°ng lead rÆ¡i: Æ°u tiÃªn CRM, status, follow-up, form field, data destination, source vÃ  sales script. Ads test nhá» Ä‘á»ƒ kiá»ƒm tra dÃ²ng lead.',
      },
      {
        type: 'paragraph',
        text: 'Ká»‹ch báº£n C â€” ná»n táº¡m á»•n: cÃ³ thá»ƒ dÃ nh 8â€“12tr cho ads test, 3â€“5tr cho creative, 2â€“4tr cho page iteration vÃ  1â€“3tr cho tracking, report, CRM review. Sau 2â€“4 tuáº§n, quyáº¿t Ä‘á»‹nh giá»¯, sá»­a, táº¯t hoáº·c tÄƒng.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ tá»· lá»‡ Ä‘Ãºng cho má»i doanh nghiá»‡p. NguyÃªn táº¯c lÃ  Ä‘á»«ng chia tiá»n thÃ nh nhiá»u máº£nh quÃ¡ nhá» Ä‘á»ƒ khÃ´ng pháº§n nÃ o táº¡o Ä‘Æ°á»£c tÃ­n hiá»‡u.',
      },
      { type: 'visual', variant: 'twenty-million-scenario-split' },
      { type: 'heading', text: 'Memo 04 â€” Má»™t thá»© tá»± Æ°u tiÃªn Ä‘á»§ thá»±c dá»¥ng' },
      {
        type: 'list',
        items: [
          'LÃ m rÃµ offer: khÃ¡ch mua gÃ¬, vÃ¬ sao mua, proof nÃ o lÃ m há» tin vÃ  CTA lÃ  gÃ¬.',
          'Sá»­a landing page/form: hero, proof, CTA, form vÃ  mobile pháº£i Ä‘á»§ rÃµ.',
          'Gáº¯n tracking tá»‘i thiá»ƒu: PageView, CTA click, form submit, source/UTM vÃ  data destination.',
          'Táº¡o CRM Sheet: lead vá» má»™t nÆ¡i, cÃ³ owner, status, next action vÃ  follow-up date.',
          'Viáº¿t content ná»n: vÃ i bÃ i hoáº·c case giÃºp khÃ¡ch hiá»ƒu váº¥n Ä‘á», giáº£i phÃ¡p vÃ  báº±ng chá»©ng.',
          'Test ads nhá» khi ná»n táº¡m á»•n Ä‘á»ƒ há»c vá» message, angle vÃ  offer.',
          'Review má»—i tuáº§n: traffic vÃ o Ä‘Ã¢u, form cÃ³ submit, lead cÃ³ contact Ä‘Æ°á»£c vÃ  sales pháº£n há»“i gÃ¬.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Thá»© tá»± thÆ°á»ng lÃ  offer â†’ page/form â†’ tracking â†’ CRM/follow-up â†’ content/proof â†’ ads test â†’ review. CÃ³ thá»ƒ Ä‘iá»u chá»‰nh theo ngÃ nh, nhÆ°ng má»—i bÆ°á»›c pháº£i giÃºp bÆ°á»›c sau bá»›t mÃ¹ hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 05 â€” Nhá»¯ng cÃ¡ch tiÃªu xong mÃ  khÃ´ng há»c Ä‘Æ°á»£c gÃ¬' },
      {
        type: 'list',
        items: [
          'Cháº¡y ads khÃ´ng tracking hoáº·c boost bÃ i ráº£i rÃ¡c theo cáº£m giÃ¡c.',
          'ThuÃª content Ä‘á»u nhÆ°ng khÃ´ng cÃ³ pillar, offer vÃ  campaign.',
          'LÃ m page Ä‘áº¹p nhÆ°ng thiáº¿u form, data destination vÃ  follow-up.',
          'LÃ m vÃ i bÃ i SEO khÃ´ng cÃ³ topic map.',
          'ThuÃª KOL nhÆ°ng khÃ´ng cÃ³ landing page hoáº·c CTA Ä‘o Ä‘Æ°á»£c.',
          'Sáº£n xuáº¥t video mÃ  chÆ°a biáº¿t dÃ¹ng vÃ o campaign nÃ o.',
          'DÃ n tráº£i ba hoáº·c bá»‘n kÃªnh cÃ¹ng lÃºc.',
          'KhÃ´ng cÃ³ weekly review, lead source vÃ  sales status.',
        ],
      },
      {
        type: 'paragraph',
        text: 'ÄÃ¡ng sá»£ hÆ¡n viá»‡c máº¥t ngÃ¢n sÃ¡ch lÃ  tiÃªu xong mÃ  khÃ´ng biáº¿t giáº£ Ä‘á»‹nh nÃ o Ä‘Ãºng vÃ  thÃ¡ng sau cáº§n Ä‘á»•i gÃ¬.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch chia ngÃ¢n sÃ¡ch marketing 20tr/thÃ¡ng cho SME.',
      },
      { type: 'heading', text: 'Memo 06 â€” Ba mÆ°Æ¡i ngÃ y Ä‘áº§u nÃªn mua Ä‘Æ°á»£c má»™t bÃ i há»c' },
      {
        type: 'paragraph',
        text: 'Náº¿u há»‡ thá»‘ng cÃ²n má»›i, Ä‘á»«ng chá»‰ nhÃ¬n doanh thu ngay. HÃ£y xem offer vÃ  message Ä‘Ã£ rÃµ hÆ¡n chÆ°a; page cÃ³ CTA click hoáº·c submit khÃ´ng; tracking cÃ³ Ä‘á»c Ä‘Æ°á»£c; lead cÃ³ vá» Ä‘Ãºng nÆ¡i; sales cÃ³ contact Ä‘Æ°á»£c; nhu cáº§u cÃ³ phÃ¹ há»£p vÃ  angle nÃ o táº¡o tÃ­n hiá»‡u tá»‘t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Doanh thu lÃ  chá»‰ sá»‘ cuá»‘i. Trong 30 ngÃ y Ä‘áº§u, giÃ¡ trá»‹ lá»›n Ä‘Ã´i khi lÃ  xÃ¡c Ä‘á»‹nh chÃ­nh xÃ¡c Ä‘iá»ƒm rÆ¡i náº±m á»Ÿ traffic, page, form, CRM, sales hay follow-up Ä‘á»ƒ thÃ¡ng sau sá»­a Ä‘Ãºng hÆ¡n.',
      },
      { type: 'visual', variant: 'thirty-day-budget-learning' },
      { type: 'heading', text: 'Memo 07 â€” TÃ¡m cÃ¢u há»i trÆ°á»›c khi báº¥m chi' },
      {
        type: 'list',
        items: [
          'Offer chÃ­nh thÃ¡ng nÃ y lÃ  gÃ¬?',
          'Tá»‡p khÃ¡ch chÃ­nh lÃ  ai?',
          'KhÃ¡ch sáº½ Ä‘i vá» landing page hoáº·c form nÃ o?',
          'ÄÃ£ tracking form submit, CTA vÃ  source chÆ°a?',
          'Lead vá» Ä‘Ã¢u vÃ  ai xá»­ lÃ½?',
          'Sales cáº­p nháº­t status vÃ  follow-up tháº¿ nÃ o?',
          'Ná»™i dung hoáº·c proof nÃ o lÃ m khÃ¡ch tin hÆ¡n?',
          'Sau 30 ngÃ y, doanh nghiá»‡p muá»‘n há»c Ä‘Æ°á»£c Ä‘iá»u gÃ¬?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u cÃ¡c cÃ¢u nÃ y chÆ°a rÃµ, hÃ£y dÃ¹ng ngÃ¢n sÃ¡ch Ä‘á»ƒ lÃ m rÃµ há»‡ thá»‘ng. Náº¿u Ä‘Ã£ cÃ³ cÃ¢u tráº£ lá»i tÆ°Æ¡ng Ä‘á»‘i, team cÃ³ thá»ƒ test traffic, content vÃ  ads trong pháº¡m vi kiá»ƒm soÃ¡t.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n 20tr/month marketing budget priority sheet.',
      },
      { type: 'heading', text: 'Ghi chÃº cuá»‘i tá»« gÃ³c nhÃ¬n operator' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra ngÃ¢n sÃ¡ch nhá» khÃ´ng nÃªn cháº¡m má»—i kÃªnh má»™t chÃºt. NÃ³ cáº§n táº­p trung hÆ¡n ngÃ¢n sÃ¡ch lá»›n, vÃ¬ khi chia vá»¥n, khÃ´ng pháº§n nÃ o Ä‘á»§ sÃ¢u Ä‘á»ƒ táº¡o tÃ­n hiá»‡u.',
      },
      {
        type: 'paragraph',
        text: '20tr cÃ³ thá»ƒ khÃ´ng Ä‘á»§ cho má»™t campaign lá»›n vÃ  cÃ ng khÃ´ng Ä‘á»§ cho má»i ngÃ nh. NhÆ°ng nÃ³ cÃ³ thá»ƒ lÃ m rÃµ má»™t Ä‘oáº¡n quan trá»ng: offer, page, tracking, CRM, content ná»n hoáº·c ads test nhá».',
      },
      {
        type: 'paragraph',
        text: 'Äiá»u Ä‘Ã¡ng tiáº¿c khÃ´ng pháº£i thÃ¡ng Ä‘Ã³ chÆ°a tÄƒng trÆ°á»Ÿng máº¡nh, mÃ  lÃ  cuá»‘i thÃ¡ng founder váº«n khÃ´ng biáº¿t mÃ¬nh há»c Ä‘Æ°á»£c gÃ¬. Náº¿u chÆ°a mua Ä‘Æ°á»£c doanh thu, ngÃ¢n sÃ¡ch Ã­t nháº¥t pháº£i mua Ä‘Æ°á»£c tÃ­n hiá»‡u Ä‘á»ƒ quyáº¿t Ä‘á»‹nh tá»‘t hÆ¡n.',
      },
      { type: 'heading', text: 'DÃ¹ng tiá»n theo Ä‘iá»ƒm ngháº½n, khÃ´ng theo danh sÃ¡ch kÃªnh' },
      {
        type: 'paragraph',
        text: 'Offer chÆ°a rÃµ thÃ¬ lÃ m rÃµ offer. Page yáº¿u thÃ¬ sá»­a page/form. Tracking mÃ¹ thÃ¬ gáº¯n tracking. Lead rÆ¡i thÃ¬ lÃ m CRM/follow-up. Khi ná»n Ä‘Ã£ á»•n, má»›i test ads, content hoáº·c campaign nhá» cÃ³ kiá»ƒm soÃ¡t.',
      },
    ],
    cta: 'Náº¿u thÃ¡ng nÃ y báº¡n chá»‰ cÃ³ 20tr cho marketing, Ä‘á»«ng há»i Ä‘áº§u tiÃªn â€œcháº¡y kÃªnh nÃ o?â€. HÃ£y há»i: vá»›i 20tr nÃ y, mÃ¬nh cáº§n lÃ m rÃµ Ä‘oáº¡n nÃ o cá»§a há»‡ thá»‘ng Ä‘á»ƒ thÃ¡ng sau ra quyáº¿t Ä‘á»‹nh tá»‘t hÆ¡n?',
  },
  {
    title: 'Marketer khÃ´ng biáº¿t code nÃªn báº¯t Ä‘áº§u vibe coding tháº¿ nÃ o?',
    slug: 'marketer-khong-biet-code-nen-bat-dau-vibe-coding-the-nao',
    category: 'AI Marketing Ops',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/speaking/speaking-panel-discussion-three-speakers-01.jpg",
                "alt": "Three speakers holding microphones at an event",
                "caption": "Speaking session with three presenters",
                "width": 2048,
                "height": 1152,
                "fit": "cover"
          },
          "inlineImages": [
                {
                      "src": "/images/media-library/content-media/content-media-seo-seo-infographic-01.jpg",
                      "alt": "SEO infographic with a robot illustration",
                      "caption": "SEO infographic",
                      "width": 1414,
                      "height": 2000,
                      "fit": "contain",
                      "afterHeading": "Field note 02 â€” Äá»c codebase nhÆ° Ä‘á»c báº£n Ä‘á»“"
                }
          ]
    },
    excerpt:
      'Marketer khÃ´ng biáº¿t code khÃ´ng cáº§n báº¯t Ä‘áº§u vibe coding báº±ng backend, database hay nhá»¯ng thá»© phá»©c táº¡p. NÃªn báº¯t Ä‘áº§u tá»« nhá»¯ng viá»‡c gáº§n vá»›i marketing nháº¥t: sá»­a copy, dá»±ng landing page, thÃªm section, táº¡o blog, chá»‰nh UI, lÃ m form Ä‘Æ¡n giáº£n, kiá»ƒm tra tracking vÃ  há»c cÃ¡ch prompt AI theo contract Ä‘á»ƒ khÃ´ng phÃ¡ cáº¥u trÃºc project.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t marketer quen content, ads, dashboard vÃ  tool kÃ©o tháº£. Láº§n Ä‘áº§u má»Ÿ VS Code, má»i thá»© giá»‘ng khu rá»«ng: folder, terminal, component, route, props, import, lá»—i Ä‘á» vÃ  git.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u Ä‘áº§u tiÃªn thÆ°á»ng lÃ : â€œMÃ¬nh khÃ´ng pháº£i coder, lá»¡ sá»­a há»ng thÃ¬ sao?â€ Rá»“i AI coding xuáº¥t hiá»‡n vá»›i lá»i há»©a chá»‰ cáº§n prompt lÃ  cÃ³ thá»ƒ dá»±ng page, sá»­a web vÃ  thÃªm section.',
      },
      {
        type: 'paragraph',
        text: 'AI lÃ m nhanh, nhÆ°ng prompt mÆ¡ há»“ cÃ³ thá»ƒ khiáº¿n nÃ³ sá»­a lan, Ä‘á»•i global CSS, phÃ¡ mobile, táº¡o component thá»«a hoáº·c cháº¡m logic Ä‘ang á»•n.',
      },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n há»c háº¿t láº­p trÃ¬nh trÆ°á»›c khi báº¯t Ä‘áº§u. NhÆ°ng cáº§n biáº¿t lÃ m viá»‡c vá»›i codebase báº±ng pháº¡m vi rÃµ, guardrail vÃ  cÃ¡ch kiá»ƒm tra.',
      },
      { type: 'heading', text: 'Field note 01 â€” Äá»«ng báº¯t Ä‘áº§u báº±ng backend' },
      {
        type: 'paragraph',
        text: 'Má»¥c tiÃªu ban Ä‘áº§u khÃ´ng pháº£i trá»Ÿ thÃ nh developer. Marketer chÆ°a cáº§n Ä‘i vÃ o thuáº­t toÃ¡n, cáº¥u trÃºc dá»¯ liá»‡u, database, authentication, payment hay deployment pipeline phá»©c táº¡p.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y báº¯t Ä‘áº§u gáº§n cÃ´ng viá»‡c háº±ng ngÃ y: Ä‘á»c cáº¥u trÃºc trang, phÃ¢n biá»‡t page, component, data, asset; sá»­a copy, card, section; thÃªm blog; chá»‰nh page; kiá»ƒm tra mobile, form vÃ  tracking.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y coi AI nhÆ° má»™t junior dev lÃ m ráº¥t nhanh nhÆ°ng cáº§n brief vÃ  review. KhÃ´ng hiá»ƒu backend mÃ  cho AI tá»± sá»­a váº«n lÃ  rá»§i ro, dÃ¹ output ban Ä‘áº§u trÃ´ng cÃ³ váº» cháº¡y.',
      },
      { type: 'visual', variant: 'marketer-vibe-coding-safe-start' },
      { type: 'heading', text: 'Field note 02 â€” Äá»c codebase nhÆ° Ä‘á»c báº£n Ä‘á»“' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi sá»­a, hÃ£y biáº¿t: pages/routes chá»©a trang; components chá»©a UI dÃ¹ng láº¡i; data/content chá»©a ná»™i dung; public/assets chá»©a tÃ i nguyÃªn; package.json cÃ³ lá»‡nh local; git status cho biáº¿t file thay Ä‘á»•i.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n hiá»ƒu má»i dÃ²ng code. Chá»‰ cáº§n tráº£ lá»i: trang náº±m Ä‘Ã¢u, component nÃ o Ä‘ang dÃ¹ng, ná»™i dung láº¥y tá»« file nÃ o, cÃ³ pattern sáºµn Ä‘á»ƒ reuse khÃ´ng vÃ  thay Ä‘á»•i cÃ³ Ä‘á»¥ng global khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y yÃªu cáº§u AI lÃ m Inventory trÆ°á»›c: scan codebase, chá»‰ ra data format, renderer, component vÃ  file cáº§n sá»­a. Biáº¿t báº£n Ä‘á»“ giÃºp task nhá» khÃ´ng thÃ nh refactor lá»›n.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch marketer khÃ´ng biáº¿t code báº¯t Ä‘áº§u vibe coding an toÃ n.',
      },
      { type: 'heading', text: 'Field note 03 â€” Prompt cáº§n contract, khÃ´ng cáº§n má»¹ tá»«' },
      {
        type: 'paragraph',
        text: 'â€œLÃ m UI modern hÆ¡nâ€, â€œthÃªm section xá»‹nâ€ hay â€œsá»­a page cho premiumâ€ Ä‘á»ƒ AI tá»± quyáº¿t quÃ¡ nhiá»u. Agent khÃ´ng Ä‘á»c Ä‘Æ°á»£c Ã½ Ä‘ang náº±m trong Ä‘áº§u marketer, nÃªn nÃ³ sáº½ tá»± chá»n pháº¡m vi vÃ  cÃ¡ch triá»ƒn khai.',
      },
      {
        type: 'paragraph',
        text: 'Prompt tá»‘t nÃ³i má»¥c tiÃªu, pháº¡m vi file, thá»© pháº£i reuse vÃ  thá»© khÃ´ng Ä‘Æ°á»£c Ä‘á»¥ng. Chia Inventory rá»“i Implement; thÃªm tiÃªu chÃ­ mobile, TypeScript build, unused import, link vÃ  diff.',
      },
      {
        type: 'paragraph',
        text: 'Contract khÃ´ng lÃ m AI cháº­m láº¡i. NÃ³ giáº£m sá»‘ quyáº¿t Ä‘á»‹nh AI pháº£i tá»± Ä‘oÃ¡n trong codebase.',
      },
      { type: 'visual', variant: 'contract-prompt-vs-vague-prompt' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n safe vibe coding prompt template cho marketer.',
      },
      { type: 'heading', text: 'Field note 04 â€” Má»™t learning path Ä‘á»§ nhá» Ä‘á»ƒ cháº¡y tháº­t' },
      {
        type: 'paragraph',
        text: 'BÆ°á»›c má»™t sá»­a headline, CTA, card hoáº·c section cÃ³ sáºµn. BÆ°á»›c hai thÃªm blog/Growth Note Ä‘á»ƒ hiá»ƒu data, slug vÃ  route.',
      },
      {
        type: 'paragraph',
        text: 'BÆ°á»›c ba thÃªm section báº±ng component sáºµn, khÃ´ng táº¡o global style hay Ä‘á»•i Header/Footer. BÆ°á»›c bá»‘n má»›i lÃ  page nhá» cÃ³ brief, CTA/form, placeholder asset vÃ  tracking checklist.',
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng há»c vibe coding báº±ng má»™t app lá»›n. HÃ£y há»c báº±ng thay Ä‘á»•i nhá» nhÆ°ng cháº¡y trÃªn website tháº­t, cÃ³ ngÆ°á»i dÃ¹ng tháº­t vÃ  cÃ³ cÃ¡ch xÃ¡c nháº­n Ä‘Ãºng/sai.',
      },
      { type: 'heading', text: 'Field note 05 â€” KhÃ´ng test local lÃ  sá»­a trong bÃ³ng tá»‘i' },
      {
        type: 'paragraph',
        text: 'Marketer nÃªn quen cháº¡y dev server, má»Ÿ localhost, xem desktop/mobile, nhÃ¬n terminal, cháº¡y build, kiá»ƒm tra route, CTA/form rá»“i xem git status.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n tá»± hiá»ƒu má»i lá»—i. NhÆ°ng pháº£i nháº­n ra lá»—i xuáº¥t hiá»‡n, copy Ä‘Ãºng thÃ´ng bÃ¡o vÃ  giao láº¡i cho AI sá»­a trong pháº¡m vi vá»«a thay Ä‘á»•i. â€œTrang nhÃ¬n Ä‘Æ°á»£câ€ chÆ°a Ä‘á»§ náº¿u build Ä‘ang fail hoáº·c má»™t route khÃ¡c bá»‹ vá»¡.',
      },
      { type: 'heading', text: 'Field note 06 â€” Nhá», rÃµ vÃ  cÃ³ Ä‘iá»ƒm lÆ°u' },
      {
        type: 'list',
        items: [
          'Má»™t prompt chá»‰ sá»­a má»™t page hoáº·c nhÃ³m file nhá».',
          'Xem git status trÆ°á»›c khi báº¯t Ä‘áº§u; commit báº£n á»•n trÆ°á»›c task lá»›n.',
          'KhÃ´ng cho AI refactor lan hoáº·c Ä‘á»•i global CSS/theme/config náº¿u khÃ´ng cáº§n.',
          'KhÃ´ng Ä‘á»¥ng backend logic Ä‘ang á»•n vÃ  khÃ´ng cÃ i package khi chÆ°a hiá»ƒu.',
          'Sau khi sá»­a, test desktop/mobile vÃ  Ä‘á»c danh sÃ¡ch file thay Ä‘á»•i.',
          'Commit sau má»—i thay Ä‘á»•i á»•n Ä‘á»ƒ luÃ´n cÃ³ má»™t Ä‘iá»ƒm quay láº¡i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Vibe coding khÃ´ng nguy hiá»ƒm chá»‰ vÃ¬ AI. NÃ³ nguy hiá»ƒm khi task mÆ¡ há»“ vÃ  khÃ´ng cÃ³ checkpoint an toÃ n.',
      },
      { type: 'visual', variant: 'safe-vibe-coding-workflow' },
      { type: 'heading', text: 'Field note 07 â€” Há»c vÃ i tá»« Ä‘á»ƒ nÃ³i chuyá»‡n rÃµ hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Component lÃ  khá»‘i UI dÃ¹ng láº¡i; props lÃ  dá»¯ liá»‡u truyá»n vÃ o; route lÃ  Ä‘Æ°á»ng dáº«n; state lÃ  tráº¡ng thÃ¡i thay Ä‘á»•i trÃªn UI. Build kiá»ƒm tra project compile; diff lÃ  pháº§n code Ä‘Ã£ Ä‘á»•i; commit lÃ  Ä‘iá»ƒm lÆ°u; responsive lÃ  layout trÃªn desktop vÃ  mobile.',
      },
      {
        type: 'paragraph',
        text: 'Backend lÃ  logic server, database vÃ  API. Global CSS/theme áº£nh hÆ°á»Ÿng toÃ n site. KhÃ´ng cáº§n thuá»™c lÃ½ thuyáº¿t, chá»‰ cáº§n hiá»ƒu Ä‘á»§ Ä‘á»ƒ biáº¿t yÃªu cáº§u nÃ o nhá» vÃ  yÃªu cáº§u nÃ o cáº§n dev review.',
      },
      { type: 'heading', text: 'Field note 08 â€” AI khÃ´ng thay dev, nhÆ°ng Ä‘á»•i cÃ¡ch phá»‘i há»£p' },
      {
        type: 'paragraph',
        text: 'AI giÃºp prototype, viáº¿t brief, test UI, táº¡o page MVP, sá»­a copy/section vÃ  hiá»ƒu dev. Marketer cÃ³ thá»ƒ mang báº£n nhÃ¡p cá»¥ thá»ƒ vÃ o trao Ä‘á»•i thay vÃ¬ mÃ´ táº£ mÆ¡ há»“.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng kiáº¿n trÃºc há»‡ thá»‘ng, báº£o máº­t, backend phá»©c táº¡p, database, payment, performance lá»›n vÃ  sáº£n pháº©m rá»§i ro cao váº«n cáº§n developer cÃ¹ng code review nghiÃªm tÃºc. Biáº¿t vibe coding lÃ  Ä‘á»ƒ Ä‘iá»u phá»‘i sáº£n pháº©m vÃ  marketing tá»‘t hÆ¡n, khÃ´ng pháº£i loáº¡i dev khá»i quy trÃ¬nh.',
      },
      { type: 'heading', text: 'Má»™t prompt landing page cÃ³ ranh giá»›i trÃ´ng tháº¿ nÃ o?' },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ â€œbuild landing page tháº­t Ä‘áº¹pâ€, hÃ£y ghi: má»¥c tiÃªu lÃ  page cho campaign X; chá»‰ táº¡o page vÃ  component trong campaign folder; reuse Header, Footer, Button, Container; giá»¯ theme; khÃ´ng Ä‘á»•i route cÅ© vÃ  form submit logic.',
      },
      {
        type: 'paragraph',
        text: 'YÃªu cáº§u Phase A scan inventory, Phase B implement. Acceptance gá»“m mobile sáº¡ch, build TypeScript, khÃ´ng unused import, CTA hoáº¡t Ä‘á»™ng vÃ  output diff/patch. Sá»± khÃ¡c biá»‡t khÃ´ng náº±m á»Ÿ model nÃ o máº¡nh hÆ¡n, mÃ  á»Ÿ cÃ¡ch marketer Ä‘Ã³ng khung bÃ i toÃ¡n.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t marketer dÃ¹ng AI Ä‘á»ƒ thÃªm landing page nhÆ°ng giá»¯ nguyÃªn backend logic.',
      },
      { type: 'heading', text: 'Ghi chÃº cuá»‘i sau nhá»¯ng láº§n sá»­a Ä‘áº§u tiÃªn' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra marketer khÃ´ng cáº§n code sÃ¢u má»›i hÆ°á»Ÿng lá»£i tá»« AI coding. Cáº§n hÆ¡n lÃ  biáº¿t Ä‘áº·t ranh giá»›i, mÃ´ táº£ UI, nháº­n ra component cáº§n giá»¯, logic khÃ´ng Ä‘Æ°á»£c phÃ¡, rá»“i test vÃ  commit tá»«ng bÆ°á»›c.',
      },
      {
        type: 'paragraph',
        text: 'Vibe coding khÃ´ng biáº¿n marketer thÃ nh developer. NÃ³ giÃºp hiá»ƒu website, tracking vÃ  nÃ³i chuyá»‡n vá»›i dev tá»‘t hÆ¡n. Prompt cÃ³ trÃ¡ch nhiá»‡m pháº£i rÃµ má»¥c tiÃªu, pháº¡m vi, guardrail vÃ  cÃ¡ch kiá»ƒm tra.',
      },
      { type: 'heading', text: 'Báº¯t Ä‘áº§u á»Ÿ bá» máº·t, há»c báº±ng thay Ä‘á»•i nhá»' },
      {
        type: 'paragraph',
        text: 'HÃ£y báº¯t Ä‘áº§u tá»« copy, content, section UI, blog, landing page, form vÃ  tracking checklist. Äá»c codebase nhÆ° báº£n Ä‘á»“, dÃ¹ng contract prompt, chia Inventory â†’ Implement, test local vÃ  lÆ°u tá»«ng má»‘c. Backend cÃ³ thá»ƒ Ä‘á»£i Ä‘áº¿n khi cÃ³ Ä‘á»§ hiá»ƒu biáº¿t vÃ  dev Ä‘á»“ng hÃ nh.',
      },
    ],
    cta: 'Náº¿u báº¡n lÃ  marketer muá»‘n báº¯t Ä‘áº§u vibe coding, Ä‘á»«ng há»i â€œmÃ¬nh cÃ³ cáº§n há»c code tá»« Ä‘áº§u khÃ´ng?â€. HÃ£y báº¯t Ä‘áº§u báº±ng má»™t task nhá» trÃªn website tháº­t: sá»­a má»™t section, thÃªm má»™t bÃ i blog, táº¡o má»™t landing page nhÃ¡p â€” nhÆ°ng lÃ m báº±ng prompt cÃ³ pháº¡m vi vÃ  cÃ³ Ä‘iá»ƒm lÆ°u an toÃ n.',
  },
  {
    title: 'CÃ¡ch tÃ´i build landing page báº±ng AI mÃ  khÃ´ng phÃ¡ backend',
    slug: 'cach-toi-build-landing-page-bang-ai-ma-khong-pha-backend',
    category: 'AI Marketing Ops',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-company-trip-night-group-photo-01.jpg",
                "alt": "Large group photo at a night event backdrop",
                "caption": "Night event group photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Build landing page báº±ng AI khÃ´ng nguy hiá»ƒm náº¿u biáº¿t Ä‘áº·t guardrail. Vá»›i marketer, cÃ¡ch an toÃ n khÃ´ng pháº£i lÃ  báº£o AI â€œlÃ m page cho Ä‘áº¹p hÆ¡nâ€, mÃ  lÃ  giá»›i háº¡n pháº¡m vi: táº¡o page má»›i hoáº·c section má»›i, reuse component hiá»‡n cÃ³, khÃ´ng Ä‘á»¥ng backend logic, khÃ´ng Ä‘á»•i global theme, test local, Ä‘á»c diff vÃ  commit tá»«ng bÆ°á»›c.',
    content: [
      {
        type: 'paragraph',
        text: 'CÃ³ lÃºc tÃ´i nhÃ¬n website vÃ  nghÄ©: chá»‰ cáº§n thÃªm má»™t landing page cho campaign má»›i, táº¡i sao pháº£i chá» lÃ¢u? AI cÃ³ thá»ƒ viáº¿t code, agent cÃ³ thá»ƒ scan project, localhost refresh gáº§n nhÆ° ngay sau má»—i láº§n sá»­a.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»u Ä‘Ã¡ng sá»£ khÃ´ng pháº£i AI khÃ´ng lÃ m Ä‘Æ°á»£c. TÃ´i sá»£ nÃ³ sá»­a sang homepage, Ä‘á»•i Header/Footer, cháº¡m global CSS, táº¡o component lung tung, phÃ¡ form submit, Ä‘á»•i tracking hoáº·c refactor nhá»¯ng Ä‘oáº¡n Ä‘ang cháº¡y á»•n.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t page cÃ³ thá»ƒ trÃ´ng Ä‘áº¹p trong trÃ¬nh duyá»‡t nhÆ°ng logic phÃ­a sau Ä‘Ã£ bá»‹ áº£nh hÆ°á»Ÿng. VÃ¬ váº­y build landing page báº±ng AI khÃ´ng nÃªn báº¯t Ä‘áº§u báº±ng sá»± hÆ°ng pháº¥n. NÃ³ báº¯t Ä‘áº§u báº±ng guardrail.',
      },
      { type: 'heading', text: 'Build log 01 â€” TÃ´i khÃ´ng má»Ÿ Ä‘áº§u báº±ng â€œlÃ m page Ä‘áº¹p hÆ¡nâ€' },
      {
        type: 'paragraph',
        text: 'â€œBuild landing page modernâ€, â€œtá»± tá»‘i Æ°u UIâ€, â€œsá»­a toÃ n bá»™ cho há»£p lÃ½â€ hay â€œdá»n code luÃ´nâ€ Ä‘á»u trao quyá»n quÃ¡ rá»™ng. AI sáº½ pháº£i tá»± chá»n file, pattern, pháº¡m vi vÃ  Ä‘Ã´i khi cáº£ logic cáº§n thay Ä‘á»•i.',
      },
      {
        type: 'paragraph',
        text: 'TÃ´i thay báº±ng contract: má»¥c tiÃªu lÃ  page hoáº·c section nÃ o; chá»‰ táº¡o hay sá»­a file nÃ o; component nÃ o pháº£i reuse; khÃ´ng sá»­a Header/Footer, global theme, config, backend, form submit, API vÃ  tracking. Task luÃ´n tÃ¡ch Inventory rá»“i Implement, cÃ³ acceptance criteria vÃ  output diff.',
      },
      {
        type: 'paragraph',
        text: 'Page báº±ng AI chá»‰ an toÃ n khi tÃ´i Ä‘Ã³ng khung Ä‘Æ°á»£c nÆ¡i agent Ä‘Æ°á»£c phÃ©p Ä‘á»™ng vÃ o.',
      },
      { type: 'visual', variant: 'landing-page-prompt-guardrail' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough cÃ¡ch build landing page báº±ng AI mÃ  khÃ´ng phÃ¡ backend.',
      },
      { type: 'heading', text: 'Build log 02 â€” Inventory trÆ°á»›c, code sau' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi AI viáº¿t, tÃ´i yÃªu cáº§u nÃ³ scan page náº±m á»Ÿ Ä‘Ã¢u, route khai bÃ¡o chá»— nÃ o, Button, Container, Card nÃ o cÃ³ sáºµn, form Ä‘ang xá»­ lÃ½ ra sao, style dÃ¹ng pattern gÃ¬, cÃ³ file data riÃªng khÃ´ng vÃ  thá»±c sá»± cáº§n sá»­a nhá»¯ng file nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'BÆ°á»›c nÃ y trÃ¡nh táº¡o component trÃ¹ng, viáº¿t láº¡i style cÅ©, Ä‘oÃ¡n sai form logic hoáº·c thay cáº¥u trÃºc khÃ´ng cáº§n thiáº¿t. Inventory buá»™c AI nhÃ¬n project trÆ°á»›c khi ra tay, cÃ²n tÃ´i cÃ³ cÆ¡ há»™i kiá»ƒm tra pháº¡m vi cÃ³ há»£p lÃ½ khÃ´ng.',
      },
      { type: 'heading', text: 'Build log 03 â€” Giáº£m vÃ¹ng áº£nh hÆ°á»Ÿng trÆ°á»›c khi tÄƒng tá»‘c' },
      {
        type: 'paragraph',
        text: 'Vá»›i campaign má»›i, phÆ°Æ¡ng Ã¡n an toÃ n thÆ°á»ng lÃ  page má»›i, route má»›i vÃ  component con náº±m trong folder riÃªng; chá»‰ reuse Header, Footer, Button, Container hoáº·c CTA Ä‘ang cÃ³. TÃ´i khÃ´ng sá»­a logic submit cÅ© vÃ  khÃ´ng Ä‘á»•i cáº¥u hÃ¬nh toÃ n site.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u pháº£i chá»‰nh page cÅ©, scope chá»‰ gá»“m section Ä‘Æ°á»£c yÃªu cáº§u. TÃ´i ghi rÃµ khÃ´ng refactor toÃ n file, khÃ´ng Ä‘á»•i public props cá»§a component Ä‘ang dÃ¹ng nÆ¡i khÃ¡c, khÃ´ng thay API endpoint vÃ  khÃ´ng Ä‘á»•i tÃªn tracking event.',
      },
      {
        type: 'paragraph',
        text: 'Page má»›i hoáº·c section tÃ¡ch biá»‡t khÃ´ng pháº£i lÃºc nÃ o cÅ©ng lÃ  Ä‘Ã¡p Ã¡n duy nháº¥t, nhÆ°ng thÆ°á»ng Ã­t rá»§i ro hÆ¡n má»™t yÃªu cáº§u â€œsá»­a tá»•ng thá»ƒâ€.',
      },
      { type: 'visual', variant: 'safe-landing-page-build-flow' },
      { type: 'heading', text: 'Build log 04 â€” Reuse trÆ°á»›c khi sÃ¡ng táº¡o láº¡i' },
      {
        type: 'paragraph',
        text: 'AI ráº¥t thÃ­ch táº¡o component má»›i nhÃ¬n cÃ³ váº» há»£p lÃ½. NhÆ°ng cÃ ng nhiá»u pattern má»›i, website cÃ ng khÃ³ giá»¯ má»™t design system. TÃ´i yÃªu cáº§u reuse Container, Button, Card vÃ  typography scale hiá»‡n cÃ³; chá»‰ thÃªm variant khi tháº­t sá»± thiáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'TÃ´i cÅ©ng cháº·n viá»‡c Ä‘á»•i global CSS, Tailwind config, thÃªm mÃ u ngoÃ i há»‡ thá»‘ng hoáº·c animation náº·ng. Landing page má»›i pháº£i mang cÃ¹ng DNA vá»›i pháº§n cÃ²n láº¡i, khÃ´ng giá»‘ng má»™t microsite láº¡c vÃ o website.',
      },
      { type: 'heading', text: 'Build log 05 â€” Nhá»¯ng vÃ¹ng AI khÃ´ng Ä‘Æ°á»£c tá»± Ã½ bÆ°á»›c vÃ o' },
      {
        type: 'list',
        items: [
          'Backend API, database schema, auth/login vÃ  payment.',
          'Form submit logic, API endpoint vÃ  data tháº­t Ä‘ang cháº¡y.',
          'Tracking event dÃ¹ng cho ads hoáº·c analytics.',
          'Global CSS, theme, config vÃ  routing lá»›n.',
          'Package, dependency, deploy setting vÃ  file mÃ´i trÆ°á»ng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u task báº¯t buá»™c cháº¡m má»™t vÃ¹ng trÃªn, agent pháº£i dá»«ng, chá»‰ ra file, giáº£i thÃ­ch rá»§i ro vÃ  chá» quyáº¿t Ä‘á»‹nh. Pháº§n Ä‘Ã³ cáº§n test riÃªng cÃ¹ng má»™t commit an toÃ n trÆ°á»›c khi sá»­a.',
      },
      {
        type: 'paragraph',
        text: 'AI lÃ m UI ráº¥t nhanh. Backend, form vÃ  tracking Ä‘ang á»•n thÃ¬ khÃ´ng nÃªn cho nÃ³ Ä‘á»™ng vÃ o khi ngÆ°á»i giao viá»‡c chÆ°a hiá»ƒu.',
      },
      { type: 'heading', text: 'Build log 06 â€” Localhost lÃ  nÆ¡i output pháº£i chá»©ng minh mÃ¬nh cháº¡y Ä‘Æ°á»£c' },
      {
        type: 'paragraph',
        text: 'Sau khi agent bÃ¡o xong, tÃ´i má»Ÿ page vÃ  kiá»ƒm tra route, desktop, mobile, CTA, link, form UI, thank-you state náº¿u cÃ³ vÃ  tÃªn tracking event. TÃ´i nhÃ¬n terminal, cháº¡y TypeScript build vÃ  kiá»ƒm tra unused import.',
      },
      {
        type: 'paragraph',
        text: 'TÃ´i khÃ´ng xem â€œpage Ä‘Ã£ hiá»‡nâ€ lÃ  hoÃ n thÃ nh. Output chá»‰ Ä‘Ã¡ng tin sau khi cháº¡y trÃªn mÃ¡y mÃ¬nh vÃ  cÃ¡c hÃ nh vi liÃªn quan khÃ´ng bá»‹ thay Ä‘á»•i.',
      },
      { type: 'heading', text: 'Build log 07 â€” TÃ´i Ä‘á»c diff nhÆ° má»™t danh sÃ¡ch vÃ¹ng áº£nh hÆ°á»Ÿng' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng biáº¿t code sÃ¢u váº«n cÃ³ thá»ƒ Ä‘á»c diff á»Ÿ má»©c váº­n hÃ nh: AI Ä‘Ã£ sá»­a file nÃ o, cÃ³ vÆ°á»£t scope, cháº¡m global, xoÃ¡ code láº¡, táº¡o file thá»«a, Ä‘á»•i nhiá»u import, thÃªm package hoáº·c Ä‘á»¥ng form, tracking, API khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u diff lan rá»™ng, tÃ´i dá»«ng vÃ  yÃªu cáº§u giáº£i thÃ­ch trÆ°á»›c khi commit. Äá»c diff khÃ´ng pháº£i hiá»ƒu tá»«ng dÃ²ng; Ä‘Ã³ lÃ  kiá»ƒm tra agent cÃ³ bÆ°á»›c vÃ o vÃ¹ng bá»‹ cáº¥m hay khÃ´ng.',
      },
      { type: 'visual', variant: 'ai-landing-page-diff-red-flags' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t landing page Ä‘Æ°á»£c build báº±ng AI vá»›i scope page má»›i, khÃ´ng Ä‘á»¥ng backend/form/tracking cÅ©.',
      },
      { type: 'heading', text: 'Build log 08 â€” Má»—i má»‘c á»•n Ä‘á»u Ä‘Ã¡ng cÃ³ má»™t commit' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c thay Ä‘á»•i lá»›n, tÃ´i lÆ°u báº£n Ä‘ang á»•n. Page má»›i má»Ÿ Ä‘Æ°á»£c thÃ¬ commit; visual hoÃ n thÃ nh vÃ  mobile sáº¡ch thÃ¬ commit; form hoáº·c tracking checklist Ä‘Æ°á»£c kiá»ƒm tra thÃ¬ commit. TÃ´i khÃ´ng gom mÆ°á»i thay Ä‘á»•i rá»“i má»›i táº¡o má»™t má»‘c.',
      },
      {
        type: 'paragraph',
        text: 'Commit khÃ´ng chá»‰ dÃ nh cho developer. Vá»›i marketer dÃ¹ng AI, Ä‘Ã³ lÃ  Ä‘iá»ƒm an toÃ n Ä‘á»ƒ lá»—i xáº£y ra váº«n biáº¿t quay vá» Ä‘Ã¢u.',
      },
      { type: 'heading', text: 'Build log 09 â€” Prompt máº«u tÃ´i thá»±c sá»± cÃ³ thá»ƒ giao' },
      {
        type: 'paragraph',
        text: 'TÃ´i viáº¿t ngáº¯n: Má»¥c tiÃªu lÃ  táº¡o landing page cho campaign X. Chá»‰ táº¡o page má»›i vÃ  component con trong campaign folder. Reuse Header, Footer, Button, Container. KhÃ´ng sá»­a homepage, global CSS, Tailwind, theme, route cÅ©, form submit, API hoáº·c tracking.',
      },
      {
        type: 'paragraph',
        text: 'Phase A scan project vÃ  liá»‡t kÃª page, component, style cÃ³ thá»ƒ reuse. Phase B dá»±ng Hero, Problem, Solution, Proof, CTA, FAQ. Acceptance: TypeScript build, khÃ´ng unused import, mobile dÆ°á»›i 768px sáº¡ch, CTA Ä‘Ãºng vÃ  khÃ´ng áº£nh hÆ°á»Ÿng route cÅ©. Output gá»“m diff, file thay Ä‘á»•i vÃ  cÃ¡ch test.',
      },
      {
        type: 'paragraph',
        text: 'Prompt tá»‘t khÃ´ng cáº§n phá»©c táº¡p hÆ¡n project. NÃ³ chá»‰ cáº§n Ä‘á»§ rÃµ Ä‘á»ƒ agent khÃ´ng tá»± Ä‘i xa.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n AI landing page contract prompt template.',
      },
      { type: 'heading', text: 'Operator note sau nhá»¯ng láº§n Ä‘áº§u cÃ²n sá»£ phÃ¡ code' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra váº¥n Ä‘á» lá»›n khÃ´ng pháº£i mÃ¬nh chÆ°a biáº¿t code, mÃ  lÃ  chÆ°a biáº¿t Ä‘áº·t ranh giá»›i. Marketer cáº§n biáº¿t page nÃ o Ä‘Æ°á»£c sá»­a, component nÃ o pháº£i giá»¯, logic nÃ o khÃ´ng Ä‘Æ°á»£c Ä‘á»¥ng, cÃ¡ch test, nÆ¡i Ä‘á»c diff vÃ  lÃºc táº¡o commit.',
      },
      {
        type: 'paragraph',
        text: 'AI lÃ m tÃ´i nhanh hÆ¡n nhÆ°ng khÃ´ng miá»…n trÃ¡ch nhiá»‡m. NÃ³ buá»™c tÃ´i brief rÃµ, hiá»ƒu project vÃ  Ä‘iá»u phá»‘i má»™t â€œdev ráº¥t nhanh nhÆ°ng cÃ³ thá»ƒ tá»± tin khi Ä‘oÃ¡n saiâ€.',
      },
      {
        type: 'paragraph',
        text: 'Build báº±ng AI khÃ´ng pháº£i trÃ² may rá»§i khi operator giá»¯ scope rÃµ, guardrail rÃµ, test rÃµ vÃ  commit rÃµ.',
      },
      { type: 'heading', text: 'Äi nhanh trong má»™t vÃ¹ng áº£nh hÆ°á»Ÿng nhá»' },
      {
        type: 'paragraph',
        text: 'CÃ¡ch khÃ´ng phÃ¡ backend lÃ  táº¡o page hoáº·c section cÃ³ scope rÃµ, inventory trÆ°á»›c, reuse component, khÃ´ng Ä‘á»•i global, khÃ´ng Ä‘á»¥ng backend/form/tracking náº¿u khÃ´ng cáº§n, test local, Ä‘á»c diff vÃ  lÆ°u tá»«ng má»‘c. AI táº¡o tá»‘c Ä‘á»™; guardrail giá»¯ project khÃ´ng vá»¡.',
      },
    ],
    cta: 'Náº¿u báº¡n muá»‘n dÃ¹ng AI Ä‘á»ƒ build landing page Ä‘áº§u tiÃªn, Ä‘á»«ng báº¯t Ä‘áº§u báº±ng cÃ¢u â€œlÃ m page nÃ y Ä‘áº¹p hÆ¡nâ€. HÃ£y báº¯t Ä‘áº§u báº±ng contract: page nÃ o, file nÃ o, component nÃ o, thá»© gÃ¬ Ä‘Æ°á»£c sá»­a, thá»© gÃ¬ khÃ´ng Ä‘Æ°á»£c Ä‘á»¥ng vÃ  test tháº¿ nÃ o trÆ°á»›c khi commit.',
  },
  {
    title: 'VÃ¬ sao AI khÃ´ng thay marketer, nhÆ°ng thay ngÆ°á»i khÃ´ng biáº¿t Ä‘iá»u phá»‘i AI',
    slug: 'vi-sao-ai-khong-thay-marketer-nhung-thay-nguoi-khong-biet-dieu-phoi-ai',
    category: 'AI Marketing Ops',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/team-meeting/team-meeting-company-team-office-team-group-01.jpg",
                "alt": "Office team group photo",
                "caption": "Office team group moment",
                "width": 1280,
                "height": 960,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'AI khÃ´ng thay marketer biáº¿t Ä‘áº·t bÃ i toÃ¡n, hiá»ƒu business, Ä‘á»c khÃ¡ch hÃ ng, kiá»ƒm output vÃ  ná»‘i content, ads, landing page, tracking, CRM, sales thÃ nh má»™t há»‡ thá»‘ng. NhÆ°ng AI sáº½ thay ráº¥t nhanh nhá»¯ng ngÆ°á»i chá»‰ lÃ m task rá»i ráº¡c, khÃ´ng biáº¿t brief, khÃ´ng biáº¿t kiá»ƒm cháº¥t lÆ°á»£ng, khÃ´ng biáº¿t Ä‘á»c dá»¯ liá»‡u vÃ  khÃ´ng biáº¿t Ä‘iá»u phá»‘i AI theo má»¥c tiÃªu kinh doanh.',
    content: [
      {
        type: 'paragraph',
        text: 'Dáº¡o nÃ y cÃ³ má»™t cÃ¢u Ä‘Æ°á»£c láº·p láº¡i khÃ¡ nhiá»u: â€œAI khÃ´ng thay marketer. NgÆ°á»i biáº¿t dÃ¹ng AI sáº½ thay ngÆ°á»i khÃ´ng biáº¿t dÃ¹ng AI.â€ CÃ¢u nÃ y Ä‘Ãºng, nhÆ°ng náº¿u dá»«ng á»Ÿ Ä‘Ã³ thÃ¬ hÆ¡i dá»… nghe.',
      },
      {
        type: 'paragraph',
        text: 'Biáº¿t dÃ¹ng AI khÃ´ng chá»‰ lÃ  má»Ÿ ChatGPT hoáº·c táº¡o caption nhanh hÆ¡n. Má»™t ngÆ°á»i cÃ³ thá»ƒ nhá» AI nghÄ© hook, sá»­a bÃ i, lÃ m outline, táº¡o áº£nh vÃ  viáº¿t landing page nhÆ°ng váº«n chÆ°a biáº¿t Ä‘iá»u phá»‘i.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u khÃ´ng biáº¿t business cáº§n gÃ¬, khÃ¡ch Ä‘ang vÆ°á»›ng gÃ¬, campaign ngháº½n á»Ÿ Ä‘Ã¢u, page cáº§n nÃ³i gÃ¬ vÃ  sales follow-up ra sao, AI chá»‰ giÃºp táº¡o nhiá»u output hÆ¡n. Nhiá»u hÆ¡n chÆ°a cháº¯c lÃ  marketing tá»‘t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'AI khÃ´ng thay marketer cÃ³ tÆ° duy há»‡ thá»‘ng. NhÆ°ng nÃ³ nhanh chÃ³ng thay lá»£i tháº¿ cá»§a ngÆ°á»i chá»‰ hoÃ n thÃ nh output rá»i ráº¡c.',
      },
      { type: 'heading', text: 'Opinion memo 01 â€” AI kÃ©o máº·t báº±ng cá»§a task trung bÃ¬nh lÃªn ráº¥t nhanh' },
      {
        type: 'paragraph',
        text: 'MÆ°á»i caption, hai mÆ°Æ¡i hook, má»™t outline blog, báº£n tÃ³m táº¯t research, email follow-up, landing page copy, wireframe, content calendar, phÃ¢n loáº¡i data cÆ¡ báº£n hay page MVP Ä‘á»u cÃ³ thá»ƒ Ä‘Æ°á»£c táº¡o nhanh hÆ¡n trÆ°á»›c ráº¥t nhiá»u.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»u Ä‘Ã³ khÃ´ng lÃ m marketing máº¥t giÃ¡ trá»‹. NÃ³ lÃ m pháº§n â€œtÃ´i lÃ m task nÃ y nhanhâ€ máº¥t dáº§n lá»£i tháº¿. Khi tá»‘c Ä‘á»™ vÃ  sáº£n lÆ°á»£ng trung bÃ¬nh trá»Ÿ nÃªn dá»… mua, giÃ¡ trá»‹ chuyá»ƒn sang cÃ¢u há»i: output nÃ o Ä‘Ã¡ng lÃ m, dÃ¹ng á»Ÿ Ä‘Ã¢u, cho ai vÃ  Ä‘á»ƒ thay Ä‘á»•i tÃ­n hiá»‡u nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'AI khÃ´ng giáº¿t marketing. NÃ³ lÃ m output trung bÃ¬nh khÃ´ng cÃ²n lÃ  vÃ¹ng an toÃ n.',
      },
      { type: 'visual', variant: 'ai-task-vs-operator-skill' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao AI khÃ´ng thay marketer biáº¿t Ä‘iá»u phá»‘i há»‡ thá»‘ng.',
      },
      { type: 'heading', text: 'Opinion memo 02 â€” Biáº¿t dÃ¹ng tool khÃ¡c vá»›i biáº¿t giao viá»‡c' },
      {
        type: 'paragraph',
        text: 'á»ž má»©c tháº¥p, ngÆ°á»i dÃ¹ng há»i AI viáº¿t bÃ i, nghÄ© Ã½ tÆ°á»Ÿng, sá»­a cÃ¢u chá»¯ rá»“i copy output. á»ž má»©c Ä‘iá»u phá»‘i, marketer Ä‘Æ°a Ä‘Ãºng context, má»¥c tiÃªu business, constraint, format, tiÃªu chÃ­ Ä‘Ã¡nh giÃ¡; yÃªu cáº§u so sÃ¡nh nhiá»u hÆ°á»›ng vÃ  kiá»ƒm láº¡i báº±ng thá»±c táº¿.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ â€œviáº¿t 10 bÃ i socialâ€, brief tá»‘t hÆ¡n sáº½ cÃ³ audience, offer, objections, proof, landing page, CTA vÃ  má»¥c tiÃªu campaign. AI Ä‘Æ°á»£c yÃªu cáº§u Ä‘á» xuáº¥t nÄƒm angle, má»—i angle cÃ³ hook, insight, creative direction, CTA, rá»§i ro hiá»ƒu sai vÃ  tÃ­n hiá»‡u cáº§n Ä‘o.',
      },
      {
        type: 'paragraph',
        text: 'AI máº¡nh nháº¥t khi Ä‘Æ°á»£c xem nhÆ° má»™t Ä‘á»™i thá»±c thi ráº¥t nhanh cáº§n brief, khÃ´ng pháº£i mÃ¡y viáº¿t chá»¯ biáº¿t tá»± hiá»ƒu business.',
      },
      { type: 'heading', text: 'Opinion memo 03 â€” Context trá»Ÿ thÃ nh má»™t tÃ i sáº£n nghá» nghiá»‡p' },
      {
        type: 'paragraph',
        text: 'AI khÃ´ng tá»± biáº¿t doanh nghiá»‡p bÃ¡n gÃ¬, khÃ¡ch chá»n vÃ¬ sao, sales gáº·p objection nÃ o, lead rÆ¡i á»Ÿ Ä‘Ã¢u, sáº£n pháº©m nÃ o Ä‘Ã¡ng Æ°u tiÃªn, case nÃ o Ä‘á»§ proof, page yáº¿u Ä‘oáº¡n nÃ o, CRM Ä‘ang nÃ³i gÃ¬ vÃ  founder cáº§n quyáº¿t Ä‘á»‹nh gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i giá»¯ context nháº­n ra output nghe hay nhÆ°ng lá»‡ch, hÃ¬nh Ä‘áº¹p nhÆ°ng khÃ´ng giÃºp bÃ¡n, angle nÃªn test vÃ  Ã½ tÆ°á»Ÿng nÃªn bá». Khi context nghÃ¨o, cÃ¢u tráº£ lá»i cá»§a AI thÆ°á»ng váº«n trÃ´i cháº£y nhÆ°ng Ã­t giÃ¡ trá»‹ váº­n hÃ nh.',
      },
      {
        type: 'paragraph',
        text: 'Trong thá»i AI, ngÆ°á»i khÃ´ng giá»¯ context ráº¥t dá»… trá»Ÿ thÃ nh ngÆ°á»i copy output.',
      },
      { type: 'visual', variant: 'ai-marketer-coordinator-map' },
      { type: 'heading', text: 'Opinion memo 04 â€” TrÃ¡ch nhiá»‡m cháº¥t lÆ°á»£ng khÃ´ng Ä‘Æ°á»£c outsource cho AI' },
      {
        type: 'paragraph',
        text: 'AI cÃ³ thá»ƒ táº¡o bÃ i trÃ´i cháº£y, caption mÆ°á»£t, headline thuyáº¿t phá»¥c, page Ä‘áº¹p vÃ  report nghe logic. NhÆ°ng â€œnghe á»•nâ€ chÆ°a cÃ³ nghÄ©a dÃ¹ng Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Marketer pháº£i kiá»ƒm audience, insight, má»©c Ä‘á»™ nÃ³i quÃ¡, brand voice, proof, CTA, kháº£ nÄƒng gÃ¢y hiá»ƒu nháº§m, sá»± ná»‘i tiáº¿p vá»›i landing page, sales follow-up vÃ  tracking. AI táº¡o output; marketer chá»‹u trÃ¡ch nhiá»‡m khi output Ä‘i ra thá»‹ trÆ°á»ng.',
      },
      { type: 'heading', text: 'Opinion memo 05 â€” AI lÃ m sá»± báº­n rá»™n máº¥t kháº£ nÄƒng che giáº¥u' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c Ä‘Ã¢y má»™t ngÆ°á»i cÃ³ thá»ƒ báº­n lÃ m calendar, viáº¿t bÃ i, sá»­a caption, lÃ m report, há»p campaign, xin feedback design vÃ  Ä‘Äƒng bÃ i. AI rÃºt ngáº¯n nhiá»u thao tÃ¡c Ä‘Ã³.',
      },
      {
        type: 'paragraph',
        text: 'Khi output khÃ´ng cÃ²n chiáº¿m háº¿t ngÃ y, cÃ¡c cÃ¢u há»i khÃ³ lá»™ ra: viá»‡c nÃ y phá»¥c vá»¥ má»¥c tiÃªu gÃ¬, campaign giáº£i quyáº¿t ngháº½n nÃ o, lead Ä‘i Ä‘Ã¢u, sá»‘ liá»‡u nÃ³i gÃ¬ vÃ  tuáº§n sau cáº§n sá»­a gÃ¬. AI khÃ´ng chá»‰ tÄƒng tá»‘c ngÆ°á»i giá»i; nÃ³ lÃ m rÃµ ai Ä‘ang báº­n vÃ¬ thao tÃ¡c nhÆ°ng chÆ°a giá»¯ Ä‘Æ°á»£c quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team dÃ¹ng AI táº¡o ráº¥t nhiá»u content nhÆ°ng khÃ´ng cÃ³ campaign direction, landing page vÃ  CRM follow-up.',
      },
      { type: 'heading', text: 'Operator note â€” AI cÃ³ giÃ¡ trá»‹ khi náº±m trong má»™t vÃ²ng láº·p há»c' },
      {
        type: 'paragraph',
        text: 'Marketer máº¡nh khÃ´ng káº¿t thÃºc cÃ´ng viá»‡c á»Ÿ nÃºt Generate. Há» cháº©n Ä‘oÃ¡n Ä‘iá»ƒm ngháº½n, Ä‘Ã³ng gÃ³i audience, offer, proof, data vÃ  sales feedback thÃ nh context; dÃ¹ng AI táº¡o content, ads angle, page hoáº·c script; rá»“i test nhá».',
      },
      {
        type: 'paragraph',
        text: 'Sau Ä‘Ã³ há» Ä‘á»c CTR, submit, lead quality, CRM status, sales note vÃ  dashboard. TÃ­n hiá»‡u tháº­t Ä‘Æ°á»£c Ä‘Æ°a láº¡i vÃ o brief Ä‘á»ƒ AI táº¡o phiÃªn báº£n tiáº¿p theo. AI lÃºc nÃ y rÃºt ngáº¯n vÃ²ng láº·p há»c, khÃ´ng chá»‰ tÄƒng sá»‘ output.',
      },
      { type: 'visual', variant: 'ai-marketing-operating-loop' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n AI marketing operator workflow checklist.',
      },
      { type: 'heading', text: 'CÃ¹ng má»™t AI, hai cÃ¡ch lÃ m campaign' },
      {
        type: 'paragraph',
        text: 'Marketer A nháº­n sáº£n pháº©m má»›i, há»i AI viáº¿t mÆ°á»i post, chá»n bÃ i nghe hay, nhá» design lÃ m hÃ¬nh, cháº¡y ads rá»“i cuá»‘i tuáº§n xem lead nhiá»u hay Ã­t.',
      },
      {
        type: 'paragraph',
        text: 'Marketer B xÃ¡c Ä‘á»‹nh audience, viáº¿t láº¡i offer, gom proof, há»i sales vá» objection, nhá» AI Ä‘á» xuáº¥t nÄƒm angle vÃ  chá»n hai angle Ä‘á»ƒ test. NgÆ°á»i nÃ y dá»±ng page theo concept, gáº¯n form, source, tracking, táº¡o sales script, Ä‘á»c lead quality sau má»™t tuáº§n rá»“i dÃ¹ng AI sá»­a vÃ²ng tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'AI khÃ´ng khÃ¡c. KhÃ¡c biá»‡t náº±m á»Ÿ ngÆ°á»i Ä‘áº·t bÃ i toÃ¡n, ná»‘i workflow vÃ  chá»‹u trÃ¡ch nhiá»‡m cho vÃ²ng há»c.',
      },
      { type: 'heading', text: 'Nhá»¯ng nÄƒng lá»±c Ä‘Ã¡ng luyá»‡n hÆ¡n viá»‡c sÆ°u táº§m thÃªm tool' },
      {
        type: 'list',
        items: [
          'Briefing: giao viá»‡c rÃµ cho AI, agency, designer vÃ  dev.',
          'Context packaging: gom thÃ´ng tin thÃ nh input cÃ³ cáº¥u trÃºc.',
          'Quality control: kiá»ƒm output trÆ°á»›c khi dÃ¹ng.',
          'System thinking: ná»‘i content, ads, page, CRM vÃ  sales.',
          'Data reading: Ä‘á»c tÃ­n hiá»‡u Ä‘á»§ Ä‘á»ƒ sá»­a vÃ²ng tiáº¿p.',
          'Taste: phÃ¢n biá»‡t thá»© nghe hay nhÆ°ng rá»—ng vá»›i thá»© Ä‘Æ¡n giáº£n mÃ  Ä‘Ãºng.',
          'Vibe coding basics: sá»­a UI hoáº·c page an toÃ n á»Ÿ má»©c marketer.',
          'Decision making: biáº¿t giá»¯, sá»­a, táº¯t hoáº·c tÄƒng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Marketer thá»i AI khÃ´ng chá»‰ cáº§n thÃªm tool. Há» cáº§n nÃ¢ng cáº¥p cÃ¡ch nghÄ©, cÃ¡ch brief vÃ  cÃ¡ch Ä‘iá»u phá»‘i.',
      },
      { type: 'heading', text: 'Äiá»u tÃ´i nháº­n ra sau khi Ä‘Æ°a AI vÃ o viá»‡c tháº­t' },
      {
        type: 'paragraph',
        text: 'LÃºc Ä‘áº§u, tÃ´i nhÃ¬n AI nhÆ° cÃ¡ch viáº¿t, sá»­a vÃ  nghÄ© Ã½ tÆ°á»Ÿng nhanh hÆ¡n. LÃ m má»™t thá»i gian má»›i tháº¥y tá»‘c Ä‘á»™ chá»‰ lÃ  lá»›p Ä‘áº§u. Thay Ä‘á»•i lá»›n hÆ¡n lÃ  AI buá»™c marketer pháº£i rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Brief mÆ¡ há»“ táº¡o output mÆ¡ há»“. Context nghÃ¨o táº¡o cÃ¢u tráº£ lá»i nghe hay nhÆ°ng khÃ³ dÃ¹ng. KhÃ´ng biáº¿t kiá»ƒm thÃ¬ output Ä‘áº¹p váº«n cÃ³ thá»ƒ sai. KhÃ´ng cÃ³ CRM vÃ  dashboard thÃ¬ cháº¡y xong cÅ©ng khÃ´ng biáº¿t há»c gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'AI cho marketer giá»i thÃªm lá»±c, Ä‘á»“ng thá»i láº¥y máº¥t vÃ¹ng an toÃ n cá»§a ngÆ°á»i chá»‰ quen chá» task. CÃ¢u há»i khÃ´ng cÃ²n lÃ  AI cÃ³ thay marketer khÃ´ng, mÃ  marketer cÃ³ giá»¯ Ä‘Æ°á»£c pháº§n viá»‡c AI cáº§n con ngÆ°á»i Ä‘iá»u phá»‘i khÃ´ng.',
      },
      { type: 'heading', text: 'Tá»« ngÆ°á»i lÃ m task thÃ nh ngÆ°á»i giá»¯ vÃ²ng láº·p' },
      {
        type: 'paragraph',
        text: 'AI khÃ´ng thay marketer hiá»ƒu business, giá»¯ context, brief rÃµ, kiá»ƒm output, Ä‘á»c data vÃ  ná»‘i há»‡ thá»‘ng. NÃ³ thay nhanh nhá»¯ng task rá»i ráº¡c vÃ  trung bÃ¬nh. Marketer thá»i AI cáº§n Ä‘Æ°a AI vÃ o workflow cháº©n Ä‘oÃ¡n, brief, sáº£n xuáº¥t, test, Ä‘o vÃ  cáº£i thiá»‡n.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang dÃ¹ng AI má»—i ngÃ y, Ä‘á»«ng chá»‰ há»i â€œAI cÃ³ thá»ƒ lÃ m gÃ¬ giÃºp tÃ´i nhanh hÆ¡n?â€. HÃ£y há»i: mÃ¬nh cÃ³ Ä‘ang biáº¿t Ä‘áº·t bÃ i toÃ¡n, cung cáº¥p context, kiá»ƒm output vÃ  Ä‘Æ°a káº¿t quáº£ Ä‘Ã³ vÃ o má»™t há»‡ thá»‘ng marketing tháº­t hay chÆ°a?',
  },
  {
    title: 'Checklist prompt UI khÃ´ng lÃ m gÃ£y code',
    slug: 'checklist-prompt-ui-khong-lam-gay-code',
    category: 'AI Marketing Ops',
    readingTime: '7â€“9 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/speaking/speaking-panel-discussion-three-speakers-01.jpg",
                "alt": "Three speakers holding microphones at an event",
                "caption": "Speaking session with three presenters",
                "width": 2048,
                "height": 1152,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Má»™t prompt UI tá»‘t khÃ´ng nÃªn báº¯t Ä‘áº§u báº±ng â€œlÃ m Ä‘áº¹p hÆ¡nâ€. Vá»›i AI coding agent, prompt an toÃ n pháº£i cÃ³ contract, pháº¡m vi file rÃµ, inventory trÆ°á»›c khi implement, design DNA, component structure, guardrail khÃ´ng Ä‘á»•i global/backend, acceptance criteria vÃ  cÃ¡ch test local. Prompt cÃ ng rÃµ, AI cÃ ng Ã­t sá»­a lan.',
    content: [
      {
        type: 'paragraph',
        text: 'Má»™t marketer má»Ÿ website vÃ  tháº¥y section hÆ¡i cÅ©, card quÃ¡ Ä‘á»u, mobile cháº­t, CTA chÆ°a ná»•i. NgÆ°á»i Ä‘Ã³ gá»i AI coding agent rá»“i gÃµ: â€œLÃ m section nÃ y modern vÃ  premium hÆ¡n.â€',
      },
      {
        type: 'paragraph',
        text: 'Nghe vÃ´ háº¡i, nhÆ°ng trong codebase tháº­t Ä‘Ã¢y lÃ  má»™t prompt khÃ¡ nguy hiá»ƒm. AI cÃ³ thá»ƒ sá»­a nhiá»u file, Ä‘á»•i mÃ u ngoÃ i design system, cháº¡m global CSS, refactor component dÃ¹ng chung, lÃ m desktop Ä‘áº¹p nhÆ°ng mobile vá»¡ hoáº·c vÃ´ tÃ¬nh Ä‘á»¥ng form vÃ  tracking.',
      },
      {
        type: 'paragraph',
        text: 'Prompt UI tá»‘t khÃ´ng pháº£i prompt nghe sÃ¡ng táº¡o hÆ¡n. NÃ³ giá»›i háº¡n Ä‘Ãºng vÃ¹ng AI Ä‘Æ°á»£c phÃ©p sá»­a vÃ  nÃ³i rÃµ tháº¿ nÃ o má»›i Ä‘Æ°á»£c xem lÃ  hoÃ n thÃ nh.',
      },
      { type: 'heading', text: 'Operator note 01 â€” LuÃ´n báº¯t Ä‘áº§u báº±ng CONTRACT' },
      {
        type: 'paragraph',
        text: 'Contract náº±m á»Ÿ Ä‘áº§u prompt Ä‘á»ƒ Ä‘Ã³ng khung cÃ´ng viá»‡c: má»¥c tiÃªu, page hoáº·c section, file Ä‘Æ°á»£c sá»­a, file khÃ´ng Ä‘Æ°á»£c Ä‘á»¥ng, kháº£ nÄƒng táº¡o component má»›i vÃ  nhá»¯ng component pháº£i reuse.',
      },
      {
        type: 'paragraph',
        text: 'TÃ´i cÅ©ng ghi rÃµ khÃ´ng Ä‘á»•i Header/Footer, global theme, config, backend, API, form submit vÃ  tracking; khÃ´ng refactor pháº§n khÃ´ng liÃªn quan. Output pháº£i cÃ³ diff/patch, danh sÃ¡ch file thay Ä‘á»•i vÃ  cÃ¡ch test.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ â€œlÃ m landing page Ä‘áº¹p hÆ¡nâ€, prompt nÃªn nÃ³i: cáº£i thiá»‡n UI Pricing trÃªn page X; chá»‰ sá»­a PricingSection.tsx vÃ  component con cÃ¹ng folder; reuse Button/Card; giá»¯ nguyÃªn logic. Contract biáº¿n AI tá»« ngÆ°á»i tá»± sÃ¡ng táº¡o toÃ n project thÃ nh ngÆ°á»i thá»±c thi trong pháº¡m vi.',
      },
      { type: 'visual', variant: 'ui-prompt-contract-comparison' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t láº§n prompt UI quÃ¡ mÆ¡ há»“ lÃ m AI sá»­a lan nhiá»u file.',
      },
      { type: 'heading', text: 'Operator note 02 â€” Inventory trÆ°á»›c Implement' },
      {
        type: 'paragraph',
        text: 'TÃ´i khÃ´ng cho agent code ngay. Phase A yÃªu cáº§u scan page, liá»‡t kÃª component, props, state, validation, file liÃªn quan, design pattern vÃ  Ä‘á» xuáº¥t file tháº­t sá»± cáº§n sá»­a. Giai Ä‘oáº¡n nÃ y chÆ°a implement.',
      },
      {
        type: 'paragraph',
        text: 'Phase B má»›i dá»±a trÃªn inventory Ä‘á»ƒ sá»­a, Æ°u tiÃªn reuse component vÃ  giá»¯ logic cÅ©. Inventory giÃºp AI nhÃ¬n project nhÆ° há»‡ thá»‘ng trÆ°á»›c khi cáº§m kÃ©o, Ä‘á»“ng thá»i cho ngÆ°á»i giao viá»‡c cÆ¡ há»™i phÃ¡t hiá»‡n scope Ä‘ang quÃ¡ rá»™ng.',
      },
      { type: 'heading', text: 'Operator note 03 â€” Design DNA pháº£i cá»¥ thá»ƒ hÆ¡n chá»¯ â€œpremiumâ€' },
      {
        type: 'paragraph',
        text: 'Modern, clean, xá»‹n hoáº·c premium Ä‘á»u lÃ  cáº£m giÃ¡c. Agent cáº§n typography scale, mÃ u accent, spacing rhythm, card radius, border, button, shadow, hÃ nh vi mobile vÃ  cÃ¡c anti-pattern khÃ´ng Ä‘Æ°á»£c dÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥: giá»¯ typography hiá»‡n táº¡i; ná»n tráº¯ng hoáº·c #F8FAFC; border #E2E8F0; text #0F172A; blue #1D4ED8 cho logic; orange #EA580C chá»‰ cho CTA; radius 20px; spacing rá»™ng; mobile stack; khÃ´ng neon, gradient náº·ng hay animation thá»«a.',
      },
      {
        type: 'paragraph',
        text: 'AI lÃ m UI nháº¥t quÃ¡n hÆ¡n khi nháº­n DNA cÃ³ thá»ƒ kiá»ƒm tra, thay vÃ¬ pháº£i Ä‘oÃ¡n má»™t cáº£m giÃ¡c.',
      },
      { type: 'heading', text: 'Operator note 04 â€” UI luÃ´n ngá»“i trÃªn component logic' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi sá»­a giao diá»‡n, prompt cáº§n báº¯t agent liá»‡t kÃª props, state, validation, error, loading, API endpoint, form submission, tracking event, CTA link vÃ  nÆ¡i component Ä‘ang Ä‘Æ°á»£c dÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'Pháº£i phÃ¢n biá»‡t pháº§n chá»‰ Ä‘á»•i UI vá»›i pháº§n logic khÃ´ng Ä‘Æ°á»£c Ä‘á»™ng vÃ o. Page Ä‘áº¹p nhÆ°ng form khÃ´ng gá»­i, error state biáº¿n máº¥t hoáº·c event Ä‘á»•i tÃªn khÃ´ng pháº£i má»™t láº§n nÃ¢ng cáº¥p.',
      },
      { type: 'visual', variant: 'safe-ui-prompt-layers' },
      { type: 'heading', text: 'Operator note 05 â€” Pháº§n â€œKhÃ´ng Ä‘Æ°á»£câ€ quan trá»ng ngang pháº§n â€œLÃ m gÃ¬â€' },
      {
        type: 'list',
        items: [
          'KhÃ´ng sá»­a file ngoÃ i scope hoáº·c refactor code khÃ´ng liÃªn quan.',
          'KhÃ´ng Ä‘á»•i Header/Footer, global CSS, theme vÃ  Tailwind config.',
          'KhÃ´ng Ä‘á»•i route, API endpoint, form submit vÃ  tracking event.',
          'KhÃ´ng thÃªm package má»›i.',
          'KhÃ´ng táº¡o component má»›i náº¿u pattern hiá»‡n cÃ³ dÃ¹ng láº¡i Ä‘Æ°á»£c.',
          'KhÃ´ng xoÃ¡ code khÃ´ng liÃªn quan hoáº·c chÆ°a giáº£i thÃ­ch.',
        ],
      },
      {
        type: 'paragraph',
        text: 'AI cáº§n guardrail Ã¢m tÃ­nh. Náº¿u prompt khÃ´ng nÃ³i â€œkhÃ´ng Ä‘Æ°á»£câ€, agent cÃ³ thá»ƒ hiá»ƒu ráº±ng lá»±a chá»n Ä‘Ã³ váº«n náº±m trong quyá»n triá»ƒn khai.',
      },
      { type: 'heading', text: 'Operator note 06 â€” Acceptance criteria thay cho cÃ¢u â€œxong thÃ¬ bÃ¡oâ€' },
      {
        type: 'paragraph',
        text: 'TÃ´i yÃªu cáº§u TypeScript build khÃ´ng lá»—i, khÃ´ng unused import, desktop khÃ´ng vá»¡, mobile dÆ°á»›i 768px khÃ´ng trÃ n ngang, CTA hoáº¡t Ä‘á»™ng vÃ  page khÃ¡c khÃ´ng bá»‹ áº£nh hÆ°á»Ÿng. Náº¿u site cÃ³ mode khÃ¡c, mode Ä‘Ã³ cÅ©ng pháº£i Ä‘Æ°á»£c kiá»ƒm tra.',
      },
      {
        type: 'paragraph',
        text: 'Form submit vÃ  tracking giá»¯ nguyÃªn náº¿u khÃ´ng náº±m trong yÃªu cáº§u. Output pháº£i chá»‰ ra diff, file thay Ä‘á»•i vÃ  lá»‡nh test local. TiÃªu chÃ­ cá»¥ thá»ƒ giÃºp agent tá»± kiá»ƒm thay vÃ¬ chá»‰ dá»«ng khi UI Ä‘Ã£ render.',
      },
      { type: 'heading', text: 'Operator note 07 â€” Má»™t prompt khÃ´ng gÃ¡nh cáº£ backlog' },
      {
        type: 'paragraph',
        text: 'Äá»«ng cÃ¹ng lÃºc sá»­a homepage, thÃªm blog, Ä‘á»•i theme, tá»‘i Æ°u mobile, thÃªm form, sá»­a tracking, refactor component vÃ  animation. CÃ ng nhiá»u má»¥c tiÃªu, AI cÃ ng khÃ³ giá»¯ ranh giá»›i.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t page lÃ  má»™t prompt chÃ­nh; má»™t section lá»›n hoáº·c má»™t bug lÃ  má»™t prompt. LÃ m tá»›i Ä‘Ã¢u test tá»›i Ä‘Ã³ vÃ  commit tá»«ng má»‘c. Vibe coding an toÃ n Ä‘i báº±ng bÆ°á»›c nhá», khÃ´ng pháº£i má»™t cá»¥c yÃªu cáº§u tháº­t lá»›n.',
      },
      { type: 'heading', text: 'Prompt UI máº«u tÃ´i cÃ³ thá»ƒ giao ngay' },
      {
        type: 'paragraph',
        text: 'CONTRACT: cáº£i thiá»‡n UI section [TÃªn section] trÃªn [TÃªn page]. Chá»‰ sá»­a [file A]; component con chá»‰ Ä‘Æ°á»£c táº¡o trong [folder]. Reuse Button, Card, Container. KhÃ´ng sá»­a Header/Footer, global CSS, theme, config, route, backend, API, form submit vÃ  tracking.',
      },
      {
        type: 'paragraph',
        text: 'PHASE A â€” INVENTORY: liá»‡t kÃª component hiá»‡n táº¡i, props/state/validation/error, component cÃ³ thá»ƒ reuse, file cáº§n sá»­a vÃ  rá»§i ro logic. ChÆ°a implement.',
      },
      {
        type: 'paragraph',
        text: 'PHASE B â€” IMPLEMENT: dá»±a trÃªn inventory, giá»¯ typography vÃ  accent hiá»‡n táº¡i, radius 20px, mobile dÆ°á»›i 768px stack gá»n, khÃ´ng táº¡o component má»›i náº¿u chÆ°a cáº§n.',
      },
      {
        type: 'paragraph',
        text: 'ACCEPTANCE: build TypeScript, khÃ´ng unused import, desktop/mobile sáº¡ch, CTA/form/tracking logic khÃ´ng Ä‘á»•i, khÃ´ng áº£nh hÆ°á»Ÿng page khÃ¡c. OUTPUT: diff/patch, file thay Ä‘á»•i vÃ  cÃ¡ch test local.',
      },
      {
        type: 'paragraph',
        text: 'Prompt nÃ y khÃ´ng lÃ m AI yáº¿u Ä‘i. NÃ³ lÃ m AI lÃ m Ä‘Ãºng vai hÆ¡n.',
      },
      { type: 'visual', variant: 'ui-prompt-safety-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n UI rebuild contract prompt template.',
      },
      { type: 'heading', text: 'Red flags trÆ°á»›c khi nháº¥n gá»­i' },
      {
        type: 'list',
        items: [
          'Prompt chá»‰ cÃ³ cÃ¡c chá»¯ cáº£m giÃ¡c nhÆ° modern, clean, xá»‹n, premium.',
          'KhÃ´ng nÃ³i file Ä‘Æ°á»£c sá»­a vÃ  file bá»‹ cáº¥m.',
          'KhÃ´ng cÃ³ Inventory hoáº·c yÃªu cáº§u reuse component.',
          'KhÃ´ng nháº¯c giá»¯ form, API, tracking vÃ  logic cÅ©.',
          'Cho phÃ©p refactor toÃ n bá»™ hoáº·c Ä‘á»•i global theme.',
          'KhÃ´ng cÃ³ acceptance mobile, diff vÃ  test local.',
          'Gom nhiá»u page cÃ¹ng má»™t prompt.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u prompt khÃ´ng cÃ³ ranh giá»›i, lá»—i khÃ´ng chá»‰ náº±m á»Ÿ AI. NÃ³ báº¯t Ä‘áº§u tá»« cÃ¡ch giao viá»‡c.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video walkthrough checklist prompt UI khÃ´ng lÃ m gÃ£y code.',
      },
      { type: 'heading', text: 'Äiá»u tÃ´i rÃºt ra sau nhá»¯ng láº§n AI sá»­a UI ráº¥t nhanh' },
      {
        type: 'paragraph',
        text: 'TÃ´i dáº§n nháº­n ra UI Ä‘áº¹p chÆ°a Ä‘á»§; nÃ³ pháº£i náº±m Ä‘Ãºng trong há»‡ thá»‘ng. Äá»•i global CSS cÃ³ thá»ƒ lÃ m page khÃ¡c vá»¡. Sá»­a component dÃ¹ng chung cÃ³ thá»ƒ Ä‘á»•i nhiá»u section. Cháº¡m form cÃ³ thá»ƒ lÃ m lead khÃ´ng vá». Äá»•i event cÃ³ thá»ƒ lÃ m dashboard sai.',
      },
      {
        type: 'paragraph',
        text: 'Prompt tá»‘t khÃ´ng cho AI tá»± do trÃªn toÃ n project. NÃ³ cho AI tá»± do trong Ä‘Ãºng hÃ ng rÃ o: contract, scope, inventory, design DNA, component logic, pháº§n â€œkhÃ´ng Ä‘Æ°á»£câ€ vÃ  acceptance rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Vibe coding tá»‘t lÃ  biáº¿t Ä‘Ã³ng khung Ä‘á»ƒ AI cháº¡y nhanh mÃ  khÃ´ng lÃ m gÃ£y há»‡ thá»‘ng.',
      },
      { type: 'heading', text: 'Kiá»ƒm prompt nhÆ° kiá»ƒm má»™t campaign brief' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi gá»­i AI sá»­a UI, hÃ£y há»i: sá»­a á»Ÿ Ä‘Ã¢u, file nÃ o Ä‘Æ°á»£c Ä‘á»•i, component nÃ o pháº£i reuse, logic nÃ o pháº£i giá»¯ vÃ  test tháº¿ nÃ o. Khi prompt rÃµ, AI cÃ³ thá»ƒ nÃ¢ng UI nhanh mÃ  khÃ´ng phÃ¡ backend, global style, form, tracking hoáº·c page Ä‘ang á»•n.',
      },
    ],
    cta: 'Náº¿u báº¡n sáº¯p dÃ¹ng AI Ä‘á»ƒ sá»­a UI, Ä‘á»«ng báº¯t Ä‘áº§u báº±ng â€œlÃ m Ä‘áº¹p hÆ¡nâ€. HÃ£y báº¯t Ä‘áº§u báº±ng checklist: sá»­a á»Ÿ Ä‘Ã¢u, Ä‘Æ°á»£c sá»­a file nÃ o, khÃ´ng Ä‘Æ°á»£c Ä‘á»¥ng gÃ¬, reuse component nÃ o, logic nÃ o pháº£i giá»¯ vÃ  test tháº¿ nÃ o trÆ°á»›c khi commit.',
  },
  {
    title: 'NgÆ°á»i cháº¡y ads ngÃ¢n sÃ¡ch lá»›n khÃ¡c gÃ¬ ngÆ°á»i cháº¡y ads nhá»?',
    slug: 'nguoi-chay-ads-ngan-sach-lon-khac-gi-nguoi-chay-ads-nho',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-workshop-selfie-01.jpg",
                "alt": "Workshop room selfie with people at a table",
                "caption": "Workshop working session",
                "width": 1448,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'NgÆ°á»i cháº¡y ads ngÃ¢n sÃ¡ch lá»›n khÃ´ng chá»‰ khÃ¡c ngÆ°á»i cháº¡y ngÃ¢n sÃ¡ch nhá» á»Ÿ sá»‘ tiá»n tiÃªu má»—i ngÃ y. Há» khÃ¡c á»Ÿ cÃ¡ch Ä‘á»c tÃ­n hiá»‡u, kiá»ƒm soÃ¡t rá»§i ro, chia ngÃ¢n sÃ¡ch test/scale, xÃ¢y creative pipeline, giá»¯ tracking sáº¡ch, hiá»ƒu unit economics vÃ  ná»‘i ads vá»›i landing page, CRM, sales follow-up. NgÃ¢n sÃ¡ch lá»›n khÃ´ng tha thá»© cho há»‡ thá»‘ng mÃ¹.',
    content: [
      {
        type: 'paragraph',
        text: 'Nhiá»u ngÆ°á»i nghÄ© cháº¡y ads ngÃ¢n sÃ¡ch lá»›n lÃ  tÄƒng budget tá»« vÃ i trÄƒm nghÃ¬n lÃªn vÃ i triá»‡u hoáº·c vÃ i chá»¥c triá»‡u má»—i ngÃ y. Thá»±c táº¿, ngÃ¢n sÃ¡ch lá»›n khÃ´ng pháº£i ngÃ¢n sÃ¡ch nhá» nhÃ¢n lÃªn.',
      },
      {
        type: 'paragraph',
        text: 'á»ž scale nhá», má»™t creative sai chÆ°a quÃ¡ Ä‘au, page yáº¿u cÃ²n thá»i gian sá»­a, sales gá»i cháº­m chÆ°a lá»™ rÃµ, tracking lá»‡ch váº«n cÃ³ thá»ƒ bá»‹ bá» qua vÃ  dashboard thiáº¿u váº«n cÃ²n chá»— cho cáº£m giÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Khi budget lá»›n, má»—i quyáº¿t Ä‘á»‹nh sai Ä‘á»‘t tiá»n nhanh hÆ¡n. Creative fatigue Ä‘áº¿n sá»›m, signal nhiá»…u lÃ m thuáº­t toÃ¡n há»c lá»‡ch, page yáº¿u rÃ² nhiá»u tiá»n, sales cháº­m lÃ m máº¥t nhiá»u cÆ¡ há»™i vÃ  tracking sai kÃ©o cáº£ team Ä‘i sai hÆ°á»›ng.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i cháº¡y ngÃ¢n sÃ¡ch lá»›n khÃ´ng khÃ¡c vÃ¬ dÃ¡m tiÃªu hÆ¡n. Há» khÃ¡c vÃ¬ khÃ´ng Ä‘Æ°á»£c phÃ©p nhÃ¬n ads nhÆ° má»™t campaign Ä‘á»©ng riÃªng.',
      },
      { type: 'heading', text: 'Paid media memo 01 â€” Ads manager chá»‰ lÃ  má»™t mÃ n hÃ¬nh' },
      {
        type: 'paragraph',
        text: 'NgÃ¢n sÃ¡ch nhá» thÆ°á»ng táº­p trung CPM, CTR, CPC, CPL, sá»‘ lead, ROAS, ad set, creative vÃ  nhá»‹p tÄƒng giáº£m budget. Nhá»¯ng sá»‘ nÃ y váº«n quan trá»ng, nhÆ°ng chÆ°a Ä‘á»§ khi tiá»n cháº¡y nhanh hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Operator cáº§n biáº¿t lead cÃ³ contact Ä‘Æ°á»£c, Ä‘Ãºng nhu cáº§u, page cÃ³ giá»¯ lá»i há»©a tá»« ads, form cÃ³ há»i Ä‘Ãºng, tracking cÃ³ dedup, CRM cÃ³ status, sales follow-up ká»‹p, offer Ä‘á»§ máº¡nh, margin chá»‹u Ä‘Æ°á»£c CAC vÃ  creative pipeline cÃ³ Ä‘á»§ Ä‘á»ƒ scale khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Ads manager cho tháº¥y má»™t Ä‘oáº¡n. NgÃ¢n sÃ¡ch lá»›n buá»™c team nhÃ¬n dÃ²ng cháº£y tá»« impression Ä‘áº¿n revenue.',
      },
      { type: 'visual', variant: 'big-budget-ads-system-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» sá»± khÃ¡c nhau giá»¯a cháº¡y ads ngÃ¢n sÃ¡ch nhá» vÃ  ngÃ¢n sÃ¡ch lá»›n.',
      },
      { type: 'heading', text: 'Paid media memo 02 â€” Rá»§i ro pháº£i Ä‘Æ°á»£c quáº£n trá»‹ báº±ng tÃ­n hiá»‡u' },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i cháº¡y budget nhá» sá»£ tiÃªu sai. NgÆ°á»i váº­n hÃ nh budget lá»›n cÅ©ng sá»£, nhÆ°ng khÃ´ng thá»ƒ phÃ²ng thá»§ báº±ng cÃ¡ch khÃ´ng tiÃªu. Há» pháº£i biáº¿t test bao nhiÃªu Ä‘á»ƒ Ä‘á»c tÃ­n hiá»‡u, khi nÃ o giá»¯, táº¯t, tÄƒng, khi nÃ o creative fatigue vÃ  khi nÃ o thuáº­t toÃ¡n cáº§n thÃªm signal.',
      },
      {
        type: 'paragraph',
        text: 'Há» cÅ©ng phÃ¢n biá»‡t CPL ráº» nhÆ°ng lead kÃ©m vá»›i CPL cao nhÆ°ng qualified tá»‘t; biáº¿t lÃºc nÃ o váº¥n Ä‘á» náº±m á»Ÿ page hoáº·c sales thay vÃ¬ campaign. Quyáº¿t Ä‘á»‹nh khÃ´ng thá»ƒ Ä‘á»•i theo cáº£m xÃºc má»—i sÃ¡ng. NÃ³ cáº§n threshold Ä‘Æ°á»£c thá»‘ng nháº¥t vÃ  nhá»‹p review theo ngÃ y, tuáº§n.',
      },
      {
        type: 'paragraph',
        text: 'Cháº¡y ads lá»›n lÃ  quáº£n trá»‹ rá»§i ro báº±ng tÃ­n hiá»‡u, khÃ´ng pháº£i trÃ¡nh rá»§i ro báº±ng cÃ¡ch khÃ´ng scale.',
      },
      { type: 'heading', text: 'Paid media memo 03 â€” Má»™t winning ad khÃ´ng pháº£i creative system' },
      {
        type: 'paragraph',
        text: 'Scale lÃ m audience tháº¥y láº·p nhanh hÆ¡n, hook cÅ© máº¥t lá»±c vÃ  angle tháº¯ng cháº¡m giá»›i háº¡n. Team cáº§n creative cho cold, warm, retargeting; proof má»›i, case má»›i vÃ  format má»›i.',
      },
      {
        type: 'paragraph',
        text: 'Creative pipeline nÃªn cÃ³ angle bank, hook bank, proof bank, objection bank, format bank, lá»‹ch sáº£n xuáº¥t vÃ  cÃ¡ch Ä‘á»c lead quality theo creative. Sales feedback pháº£i quay láº¡i thÃ nh input cho vÃ²ng ná»™i dung tiáº¿p theo.',
      },
      {
        type: 'paragraph',
        text: 'NgÃ¢n sÃ¡ch lá»›n khÃ´ng sá»‘ng báº±ng vÃ i ads tháº¯ng. NÃ³ sá»‘ng báº±ng kháº£ nÄƒng táº¡o, test vÃ  Ä‘á»c creative liÃªn tá»¥c.',
      },
      { type: 'visual', variant: 'winning-ad-vs-creative-pipeline' },
      { type: 'heading', text: 'Paid media memo 04 â€” Tracking báº©n lÃ m scale sá»± tá»± tin sai' },
      {
        type: 'paragraph',
        text: 'Tracking lá»‡ch á»Ÿ budget nhá» gÃ¢y khÃ³ chá»‹u; á»Ÿ budget lá»›n, nÃ³ khiáº¿n quyáº¿t Ä‘á»‹nh sai mang theo nhiá»u tiá»n hÆ¡n. Team pháº£i kiá»ƒm pixel/tag, thá»i Ä‘iá»ƒm event, form success má»›i tÃ­nh lead hay click Ä‘Ã£ tÃ­nh, event_id dedup náº¿u dÃ¹ng server-side vÃ  value/currency vá»›i e-commerce.',
      },
      {
        type: 'paragraph',
        text: 'UTM, source, campaign pháº£i Ä‘i vÃ o CRM. ChÃªnh lá»‡ch giá»¯a Meta, Google, TikTok, GA4 cáº§n Ä‘Æ°á»£c hiá»ƒu Ä‘á»§ Ä‘á»ƒ dashboard Ä‘á»c theo channel, campaign vÃ  creative. Scale trÃªn tracking mÃ¹ lÃ  scale má»™t giáº£ Ä‘á»‹nh chÆ°a Ä‘Æ°á»£c kiá»ƒm chá»©ng.',
      },
      { type: 'heading', text: 'Paid media memo 05 â€” Landing page cÅ©ng bá»‹ scale cÃ¹ng ads' },
      {
        type: 'paragraph',
        text: 'Traffic tÄƒng lÃ m má»i Ä‘iá»ƒm yáº¿u trÃªn page Ä‘áº¯t hÆ¡n. Page pháº£i match message vá»›i quáº£ng cÃ¡o, hero giá»¯ Ä‘Ãºng lá»i há»©a, proof Ä‘á»§ tin, CTA rÃµ, form khÃ´ng quÃ¡ náº·ng, mobile tá»‘t, táº£i á»•n vÃ  thank-you state rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Form submit pháº£i Ä‘o Ä‘Ãºng vÃ  data gá»­i cho sales pháº£i Ä‘á»§ ngá»¯ cáº£nh. Má»™t page Ä‘áº¹p nhÆ°ng lá»‡ch ads, thiáº¿u proof hoáº·c khÃ´ng giÃºp sales hiá»ƒu nhu cáº§u sáº½ khÃ´ng chá»‹u Ä‘Æ°á»£c Ã¡p lá»±c scale.',
      },
      { type: 'heading', text: 'Paid media memo 06 â€” CPL khÃ´ng pháº£i Ä‘iá»ƒm káº¿t thÃºc' },
      {
        type: 'paragraph',
        text: 'NgoÃ i CPC, CPL vÃ  ROAS, operator pháº£i hiá»ƒu lead-to-qualified, qualified-to-quote, quote-to-close, average order value, gross margin, repeat purchase, payback period, CAC tá»‘i Ä‘a, sales capacity vÃ  kháº£ nÄƒng váº­n hÃ nh.',
      },
      {
        type: 'paragraph',
        text: 'Campaign CPL cao nhÆ°ng qualified tá»‘t cÃ³ thá»ƒ Ä‘Ã¡ng giá»¯. CPL ráº» nhÆ°ng lead khÃ´ng contact Ä‘Æ°á»£c cÃ³ thá»ƒ nÃªn táº¯t. ROAS ngáº¯n háº¡n tháº¥p nhÆ°ng khÃ¡ch repeat cáº§n Ä‘Æ°á»£c Ä‘á»c cÃ¹ng LTV. Lead tá»‘t nhÆ°ng sales quÃ¡ táº£i lÃ  lÃ½ do chÆ°a nÃªn tÄƒng tiá»n.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng hiá»ƒu economics, team ráº¥t dá»… tá»‘i Æ°u má»™t chá»‰ sá»‘ Ä‘áº¹p nhÆ°ng khÃ´ng táº¡o ra business tá»‘t.',
      },
      { type: 'visual', variant: 'beyond-cpl-decision' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads scale readiness checklist.',
      },
      { type: 'heading', text: 'Paid media memo 07 â€” Budget pacing khÃ´ng pháº£i pháº£n á»©ng cáº£m xÃºc' },
      {
        type: 'paragraph',
        text: 'CÃ¡ch váº­n hÃ nh thiáº¿u nhá»‹p thÆ°á»ng lÃ  hÃ´m nay lead ráº» thÃ¬ tÄƒng, ngÃ y mai Ä‘áº¯t thÃ¬ táº¯t, campaign tá»¥t thÃ¬ Ä‘á»•i háº¿t, tháº¥y camp tháº¯ng thÃ¬ scale máº¡nh. Nhá»¯ng pháº£n á»©ng Ä‘Ã³ dá»… reset learning vÃ  lÃ m team khÃ´ng biáº¿t thay Ä‘á»•i nÃ o táº¡o tÃ¡c Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'Pacing cáº§n nhá»‹p tÄƒng ngÃ¢n sÃ¡ch, thá»i gian há»c, quá»¹ test riÃªng, quá»¹ scale riÃªng, threshold ra quyáº¿t Ä‘á»‹nh vÃ  lá»‹ch review. KhÃ´ng scale khi downstream chÆ°a chá»‹u Ä‘Æ°á»£c. Scale khÃ´ng chá»‰ lÃ  tÄƒng tiá»n; nÃ³ tÄƒng Ã¡p lá»±c lÃªn toÃ n há»‡ thá»‘ng.',
      },
      { type: 'heading', text: 'Paid media memo 08 â€” Ads khÃ´ng cá»©u Ä‘Æ°á»£c pháº§n cÃ²n láº¡i' },
      {
        type: 'paragraph',
        text: 'Ads kÃ©o attention, traffic vÃ  lead. NÃ³ khÃ´ng má»™t mÃ¬nh sá»­a offer má», khÃ¡c biá»‡t yáº¿u, page thiáº¿u tin, sales gá»i cháº­m, script kÃ©m, CRM khÃ´ng status, bÃ¡o giÃ¡ trá»…, sáº£n pháº©m khÃ´ng giá»¯ lá»i há»©a hoáº·c váº­n hÃ nh khÃ´ng theo ká»‹p.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i cháº¡y ngÃ¢n sÃ¡ch lá»›n pháº£i Ä‘á»§ tá»‰nh Ä‘á»ƒ nÃ³i: váº¥n Ä‘á» nÃ y khÃ´ng náº±m trong ads manager.',
      },
      { type: 'heading', text: 'Operator teardown â€” CÃ¹ng má»™t ngÃ¢n sÃ¡ch, hai há»‡ thá»‘ng' },
      {
        type: 'paragraph',
        text: 'Team A dá»“n pháº§n lá»›n tiá»n vÃ o ads, dÃ¹ng vÃ i creative, page cÅ©, tracking lead chÆ°a rÃµ, CRM chá»‰ cÃ³ tÃªn vÃ  sá»‘. Sales bÃ¡o lead yáº¿u; cuá»‘i thÃ¡ng má»i ngÆ°á»i tranh luáº­n CPL vá»›i doanh thu.',
      },
      {
        type: 'paragraph',
        text: 'Team B tÃ¡ch test vÃ  scale, chuáº©n bá»‹ creative pipeline, page bÃ¡m offer, tracking source/form success rÃµ, CRM cÃ³ owner/status/next action. Sales pháº£n há»“i lead quality háº±ng tuáº§n; team Ä‘á»c CPL cÃ¹ng qualified rate, quote rate vÃ  chá»‰ tÄƒng tiá»n khi downstream cÃ³ tÃ­n hiá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n giáº£ Ä‘á»‹nh team nÃ o cháº¯c tháº¯ng. Äiá»ƒm khÃ¡c lÃ  Team B cÃ³ há»‡ thá»‘ng Ä‘á»ƒ biáº¿t tiá»n Ä‘ang rÆ¡i á»Ÿ Ä‘Ã¢u vÃ  quyáº¿t Ä‘á»‹nh tiáº¿p theo dá»±a trÃªn gÃ¬.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign scale ngÃ¢n sÃ¡ch nhÆ°ng tracking, landing page vÃ  sales follow-up chÆ°a chá»‹u Ä‘Æ°á»£c.',
      },
      { type: 'heading', text: 'Äiá»u tÃ´i nháº­n ra khi nhÃ¬n ads ngoÃ i ads manager' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i dá»… bá»‹ cuá»‘n vÃ o campaign Ä‘á» hay xanh, creative tháº¯ng, CPC hÃ´m nay vÃ  CPL tuáº§n nÃ y. ChÃºng quan trá»ng, nhÆ°ng cÃ ng Ä‘i xa cÃ ng tháº¥y ads manager chá»‰ lÃ  má»™t mÃ n hÃ¬nh.',
      },
      {
        type: 'paragraph',
        text: 'Tiá»n Ä‘i qua creative, page, tracking, CRM, sales, follow-up, offer vÃ  margin trÆ°á»›c khi thÃ nh doanh thu. Má»™t lá»›p yáº¿u sáº½ bá»‹ ngÃ¢n sÃ¡ch lá»›n phÃ³ng Ä‘áº¡i.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i váº­n hÃ nh budget lá»›n khÃ´ng nháº¥t thiáº¿t biáº¿t nhiá»u trick hÆ¡n. Há» biáº¿t tiá»n Ä‘ang Ä‘i qua há»‡ thá»‘ng nÃ o, Ä‘oáº¡n nÃ o Ä‘ang lÃ m tiá»n rÆ¡i vÃ  tÃ­n hiá»‡u nÃ o Ä‘á»§ Ä‘á»ƒ hÃ nh Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Scale há»‡ thá»‘ng trÆ°á»›c khi chá»‰ scale campaign' },
      {
        type: 'paragraph',
        text: 'Sá»± khÃ¡c biá»‡t náº±m á»Ÿ cÃ¡ch nhÃ¬n creative pipeline, tracking, page, CRM, sales, unit economics, pacing vÃ  downstream signal. NgÃ¢n sÃ¡ch lá»›n khÃ´ng tha thá»© cho há»‡ thá»‘ng mÃ¹; nÃ³ chá»‰ lÃ m Ä‘iá»ƒm mÃ¹ trá»Ÿ nÃªn Ä‘áº¯t hÆ¡n.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang muá»‘n scale ads, Ä‘á»«ng chá»‰ há»i â€œcampaign nÃ o Ä‘ang tháº¯ng?â€. HÃ£y há»i: há»‡ thá»‘ng phÃ­a sau ads Ä‘Ã£ Ä‘á»§ chá»‹u ngÃ¢n sÃ¡ch lá»›n chÆ°a â€” creative cÃ³ Ä‘á»§ Ä‘á»u, landing page cÃ³ Ä‘á»§ tin, tracking cÃ³ Ä‘á»§ sáº¡ch, CRM cÃ³ Ä‘á»§ rÃµ, sales cÃ³ Ä‘á»§ nhanh vÃ  economics cÃ³ Ä‘á»§ chá»‹u Ä‘Æ°á»£c CAC khÃ´ng?',
  },
  {
    title: 'Creative pipeline: vÃ¬ sao ads scale khÃ´ng sá»‘ng báº±ng vÃ i máº«u quáº£ng cÃ¡o tháº¯ng?',
    slug: 'creative-pipeline-vi-sao-ads-scale-khong-song-bang-vai-mau-quang-cao-thang',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-team-dinner-group-01.jpg",
                "alt": "Team group selfie at a restaurant table",
                "caption": "Team meal group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Má»™t tÃ i khoáº£n ads muá»‘n scale khÃ´ng thá»ƒ chá»‰ dá»±a vÃ o vÃ i máº«u quáº£ng cÃ¡o tháº¯ng. Creative tháº¯ng rá»“i cÅ©ng má»i, audience tháº¥y láº·p, hook máº¥t lá»±c, proof cÅ© khÃ´ng cÃ²n Ä‘á»§ má»›i. Scale ads cáº§n creative pipeline: liÃªn tá»¥c táº¡o angle, hook, proof, format, test cÃ³ kiá»ƒm soÃ¡t, Ä‘á»c tÃ­n hiá»‡u vÃ  dÃ¹ng feedback tá»« landing page, CRM, sales Ä‘á»ƒ sáº£n xuáº¥t vÃ²ng creative tiáº¿p theo.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Máº«u quáº£ng cÃ¡o tháº¯ng khÃ´ng pháº£i tÃ i sáº£n vÄ©nh viá»…n' },
      {
        type: 'paragraph',
        text: 'CÃ³ má»™t cáº£m giÃ¡c ráº¥t dá»… gÃ¢y nghiá»‡n khi cháº¡y ads: tÃ¬m Ä‘Æ°á»£c má»™t máº«u tháº¯ng. CTR tá»‘t, CPL giáº£m, lead vá» Ä‘á»u hÆ¡n. Team báº¯t Ä‘áº§u nghÄ©: â€œMáº«u nÃ y Ä‘ang tháº¯ng, cá»© scale thÃ´i.â€',
      },
      {
        type: 'paragraph',
        text: 'Rá»“i frequency tÄƒng, CTR giáº£m, comment vÃ  inbox thÆ°a dáº§n. CPL nhÃ­ch lÃªn, lead quality dao Ä‘á»™ng. Team má»›i vá»™i lÃ m máº«u khÃ¡c báº±ng cÃ¡ch Ä‘á»•i layout, mÃ u hoáº·c caption.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t máº«u tháº¯ng chá»‰ lÃ  tÃ­n hiá»‡u táº¡i má»™t thá»i Ä‘iá»ƒm. KhÃ´ng cÃ³ creative pipeline phÃ­a sau, tÃ i khoáº£n sáº½ luÃ´n chá» máº«u cÅ© má»i rá»“i chá»¯a chÃ¡y.',
      },
      { type: 'heading', text: 'Memo 01 â€” Creative fatigue khÃ´ng pháº£i lá»—i hiáº¿m' },
      {
        type: 'paragraph',
        text: 'Creative fatigue xáº£y ra khi audience Ä‘Ã£ tháº¥y máº«u quÃ¡ nhiá»u, hook máº¥t Ä‘á»™ má»›i, proof khÃ´ng cÃ²n Ä‘á»§ thuyáº¿t phá»¥c hoáº·c angle Ä‘Ã£ bá»‹ khai thÃ¡c gáº§n háº¿t. NgÃ¢n sÃ¡ch tÄƒng Ä‘Æ°a cÃ¹ng thÃ´ng Ä‘iá»‡p ra thá»‹ trÆ°á»ng nhanh hÆ¡n nÃªn fatigue thÆ°á»ng Ä‘áº¿n sá»›m hÆ¡n.',
      },
      {
        type: 'list',
        items: [
          'CTR giáº£m dáº§n; CPC tÄƒng dÃ¹ CPM khÃ´ng Ä‘á»•i nhiá»u.',
          'Frequency tÄƒng, comment vÃ  inbox yáº¿u Ä‘i.',
          'Lead váº«n vá» nhÆ°ng cháº¥t lÆ°á»£ng hoáº·c contacted rate giáº£m.',
          'CÃ¹ng offer, creative má»›i táº¡o tÃ­n hiá»‡u tá»‘t hÆ¡n creative cÅ©.',
          'Retargeting láº·p quÃ¡ nhiá»u má»™t thÃ´ng Ä‘iá»‡p vÃ  má»™t proof.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Creative cÅ© khÃ´ng dá»Ÿ; nÃ³ chá»‰ Ä‘Ã£ hoÃ n thÃ nh nhiá»‡m vá»¥ cá»§a má»™t giai Ä‘oáº¡n. NgÆ°á»i váº­n hÃ nh tá»‘t khÃ´ng Ä‘á»£i nÃ³ cháº¿t háº³n má»›i sáº£n xuáº¥t vÃ²ng tiáº¿p theo.',
      },
      { type: 'visual', variant: 'winning-ad-vs-creative-pipeline' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch xÃ¢y creative pipeline cho paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Pipeline báº¯t Ä‘áº§u tá»« angle, khÃ´ng pháº£i design' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team má»Ÿ brief báº±ng cÃ¢u â€œlÃ m thÃªm vÃ i máº«u hÃ¬nh hoáº·c videoâ€. NhÆ°ng creative má»›i nÃªn báº¯t Ä‘áº§u tá»« angle: khÃ¡ch sá»£ gÃ¬, muá»‘n gÃ¬, hiá»ƒu sai Ä‘iá»u gÃ¬, Ä‘ang so sÃ¡nh lá»±a chá»n nÃ o, cáº§n proof nÃ o vÃ  cÃ²n objection gÃ¬ á»Ÿ stage láº¡nh, áº¥m hay nÃ³ng.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i cÃ¹ng giáº£i phÃ¡p sÆ¡n, angle cÃ³ thá»ƒ lÃ  sá»£ sÆ¡n láº¡i nhiá»u láº§n, mÃ¹i áº£nh hÆ°á»Ÿng gia Ä‘Ã¬nh, nhÃ  ven biá»ƒn nhanh báº¡c mÃ u, bá» máº·t khÃ³ bÃ¡m, thá»i gian thi cÃ´ng, tÆ° váº¥n mÃ u hoáº·c case tháº­t. ÄÃ³ lÃ  nhá»¯ng cuá»™c Ä‘á»‘i thoáº¡i khÃ¡c nhau, khÃ´ng pháº£i nhá»¯ng layout khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'Design lÃ  cÃ¡ch Ä‘Ã³ng gÃ³i. Angle quyáº¿t Ä‘á»‹nh creative Ä‘ang Ä‘i vÃ o ná»—i lo, mong muá»‘n hay khoáº£ng thiáº¿u niá»m tin nÃ o.',
      },
      { type: 'heading', text: 'Memo 03 â€” Creative bank cáº§n nhiá»u lá»›p' },
      {
        type: 'paragraph',
        text: 'Creative pipeline khÃ´ng pháº£i folder áº£nh vÃ  video. NÃ³ lÃ  kho nguyÃªn liá»‡u Ä‘á»ƒ ads, content, designer vÃ  sales cÃ¹ng dÃ¹ng:',
      },
      {
        type: 'list',
        items: [
          'Angle bank: cÃ¡c gÃ³c váº¥n Ä‘á», nhu cáº§u vÃ  objection.',
          'Hook bank: nhiá»u cÃ¡ch má»Ÿ Ä‘áº§u cho cÃ¹ng má»™t angle.',
          'Proof bank: case, testimonial, demo, before-after vÃ  dá»¯ liá»‡u cÃ³ cÄƒn cá»©.',
          'Offer bank: tÆ° váº¥n, checklist, sample, audit, demo hoáº·c bÃ¡o giÃ¡.',
          'Format bank: image, carousel, short video, UGC style, comparison hoáº·c founder note.',
          'Objection bank: lÃ½ do khÃ¡ch chÆ°a tin hoáº·c chÆ°a mua.',
          'Sales feedback bank: lead Ä‘Ãºng, lead sai, cÃ¢u há»i vÃ  pháº£n Ä‘á»‘i láº·p láº¡i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Pipeline máº¡nh khi insight Ä‘áº¿n tá»« nhiá»u Ä‘iá»ƒm cháº¡m, khÃ´ng chá»‰ tá»« gu thiáº¿t káº¿ hay Ã½ kiáº¿n trong phÃ²ng há»p.',
      },
      { type: 'visual', variant: 'creative-pipeline-banks' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n creative pipeline bank template cho ads team nhá».',
      },
      { type: 'heading', text: 'Memo 04 â€” Test creative khÃ´ng pháº£i Ä‘á»•i táº¥t cáº£ cÃ¹ng lÃºc' },
      {
        type: 'paragraph',
        text: 'Thay angle, visual, copy, CTA, landing page vÃ  audience cÃ¹ng lÃºc cÃ³ thá»ƒ táº¡o káº¿t quáº£ khÃ¡c, nhÆ°ng team khÃ´ng biáº¿t biáº¿n nÃ o gÃ¢y ra khÃ¡c biá»‡t.',
      },
      {
        type: 'paragraph',
        text: 'Test cÃ³ kiá»ƒm soÃ¡t giá»¯ audience Ä‘á»ƒ so angle; giá»¯ angle Ä‘á»ƒ so hook; giá»¯ hook Ä‘á»ƒ so format; hoáº·c giá»¯ creative Ä‘á»ƒ so CTA. TrÆ°á»›c khi cháº¡y, cáº§n ghi rÃµ hypothesis.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥, hypothesis lÃ  khÃ¡ch nhÃ  phá»‘ quan tÃ¢m ná»—i lo sÆ¡n láº¡i hÆ¡n giÃ¡ tá»‘t. Creative A nÃ³i vá» viá»‡c sÆ¡n láº¡i; Creative B nÃ³i vá» giÃ¡. Cáº£ hai dÃ¹ng cÃ¹ng audience vÃ  landing page. Káº¿t quáº£ Ä‘á»c cáº£ CPL, lead quality vÃ  sales note. Test lÃ  Ä‘áº·t giáº£ thuyáº¿t vÃ  Ä‘á»c tÃ­n hiá»‡u.',
      },
      { type: 'heading', text: 'Memo 05 â€” Äá»«ng chá»‰ Ä‘á»c creative báº±ng CTR vÃ  CPL' },
      {
        type: 'paragraph',
        text: 'CTR vÃ  CPL quan trá»ng nhÆ°ng chÆ°a Ä‘á»§. Hook máº¡nh cÃ³ thá»ƒ kÃ©o CTR cao mÃ  táº¡o sai ká»³ vá»ng. CPL ráº» nhÆ°ng lead khÃ´ng contact Ä‘Æ°á»£c; CPL cao hÆ¡n láº¡i Ä‘Æ°a vá» ngÆ°á»i Ä‘Ãºng nhu cáº§u. Form nhiá»u chÆ°a cháº¯c sales tháº¥y Ä‘Ãºng tá»‡p.',
      },
      {
        type: 'paragraph',
        text: 'Creative review nÃªn ná»‘i landing page conversion, form completion, contacted rate, qualified rate, sales note, meeting, quote, lost reason vÃ  refund/cancel náº¿u cÃ³. Creative tháº¯ng khÃ´ng chá»‰ kÃ©o click ráº»; nÃ³ Ä‘Æ°a Ä‘Ãºng ká»³ vá»ng vÃ o há»‡ thá»‘ng bÃ¡n hÃ ng.',
      },
      { type: 'visual', variant: 'creative-signal-reading-map' },
      { type: 'heading', text: 'Memo 06 â€” Sales feedback lÃ  nguyÃªn liá»‡u creative máº¡nh' },
      {
        type: 'paragraph',
        text: 'Creative team nhÃ¬n tá»« ads manager; sales nhÃ¬n tá»« khÃ¡ch tháº­t. Há» biáº¿t khÃ¡ch há»i gÃ¬, sá»£ gÃ¬, hiá»ƒu sai gÃ¬, cáº§n proof nÃ o, tá»« chá»‘i vÃ¬ Ä‘Ã¢u vÃ  lead tá»« thÃ´ng Ä‘iá»‡p nÃ o nghiÃªm tÃºc hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u ads nÃ³i â€œgiÃ¡ tá»‘tâ€ nhÆ°ng sales nghe nhiá»u cÃ¢u há»i vá» Ä‘á»™ bá»n, mÃ¹i, báº£o hÃ nh, thi cÃ´ng vÃ  mÃ u sáº¯c, vÃ²ng sau nÃªn test cÃ¡c angle Ä‘Ã³. Feedback tá»« CRM vÃ  sales giá»¯ pipeline bÃ¡m thá»‹ trÆ°á»ng thay vÃ¬ cáº£m giÃ¡c ná»™i bá»™.',
      },
      { type: 'heading', text: 'Memo 07 â€” Pipeline cáº§n nhá»‹p sáº£n xuáº¥t' },
      {
        type: 'paragraph',
        text: 'Háº±ng tuáº§n, team Ä‘á»c performance, lead quality vÃ  sales feedback; chá»n hai hoáº·c ba angle Ä‘á»ƒ test vÃ  brief batch má»›i. Háº±ng hai tuáº§n, team loáº¡i angle yáº¿u, nhÃ¢n rá»™ng angle cÃ³ tÃ­n hiá»‡u vÃ  cáº­p nháº­t proof.',
      },
      {
        type: 'paragraph',
        text: 'Háº±ng thÃ¡ng, team nhÃ¬n angle nÃ o táº¡o qualified lead, kiá»ƒm tra message mismatch vá»›i landing page vÃ  xem láº¡i offer hoáº·c CTA. Lá»‹ch cÃ³ thá»ƒ khÃ¡c nhau, nhÆ°ng vÃ²ng má»›i pháº£i báº¯t Ä‘áº§u trÆ°á»›c khi ads tá»¥t. KhÃ´ng cÃ³ rhythm, pipeline trá»Ÿ láº¡i chá»¯a chÃ¡y.',
      },
      { type: 'heading', text: 'Memo 08 â€” AI tÄƒng tá»‘c pipeline, khÃ´ng thay insight' },
      {
        type: 'paragraph',
        text: 'AI cÃ³ thá»ƒ biáº¿n sales note thÃ nh angle, táº¡o hook variations, video script, outline carousel, ad copy, nhÃ³m objection, creative brief vÃ  gá»£i Ã½ section landing page. NÃ³ rÃºt ngáº¯n thá»i gian tá»« dá»¯ liá»‡u Ä‘áº¿n báº£n nhÃ¡p.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng AI váº«n cáº§n sáº£n pháº©m, khÃ¡ch hÃ ng, objection, proof, feedback vÃ  performance data tháº­t. Input chung chung chá»‰ táº¡o creative trÃ²n trá»‹a nhÆ°ng chung chung. AI lÃ m pipeline nhanh hÆ¡n; nÃ³ khÃ´ng tá»± táº¡o ra sá»± tháº­t thá»‹ trÆ°á»ng.',
      },
      { type: 'heading', text: 'Memo 09 â€” CÃ¹ng ngÃ¢n sÃ¡ch, hai cÃ¡ch váº­n hÃ nh' },
      {
        type: 'paragraph',
        text: 'Team A cÃ³ nÄƒm máº«u ads. Máº«u tháº¯ng thÃ¬ scale; CPL tÄƒng má»›i lÃ m thÃªm. Máº«u má»›i chá»§ yáº¿u Ä‘á»•i layout vÃ  caption. Team khÃ´ng Ä‘á»c sales feedback, khÃ´ng biáº¿t qualified lead Ä‘áº¿n tá»« creative nÃ o, rá»“i káº¿t luáº­n â€œmáº«u cÅ© má»iâ€.',
      },
      {
        type: 'paragraph',
        text: 'Team B cÃ³ angle bank tá»« insight vÃ  sales objection. Má»—i tuáº§n há» test hai hoáº·c ba angle vá»›i vÃ i hook hoáº·c format. Landing page bÃ¡m message; CRM lÆ°u source hoáº·c creative náº¿u cÃ³ thá»ƒ; sales tráº£ láº¡i lead quality. VÃ²ng sau dÃ¹ng tÃ­n hiá»‡u Ä‘Ã³ trÆ°á»›c khi máº«u hiá»‡n táº¡i cháº¿t.',
      },
      {
        type: 'paragraph',
        text: 'Team B khÃ´ng cháº¯c tháº¯ng chá»‰ vÃ¬ cÃ³ nhiá»u file hÆ¡n. KhÃ¡c biá»‡t náº±m á»Ÿ cÃ¡ch creative Ä‘Æ°á»£c sáº£n xuáº¥t, Ä‘o lÆ°á»ng vÃ  há»c láº¡i tá»« thá»‹ trÆ°á»ng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t tÃ i khoáº£n ads phá»¥ thuá»™c vÃ o vÃ i máº«u tháº¯ng vÃ  bá»‹ creative fatigue khi scale.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng nhÃ¬n creative nhÆ° â€œmáº«u quáº£ng cÃ¡oâ€: hÃ¬nh nÃ y, video kia, caption nÃ y, hook ná». CÃ ng cháº¡y, tÃ´i cÃ ng tháº¥y nÃ³ lÃ  cÃ¡ch doanh nghiá»‡p thá»­ giáº£ thuyáº¿t vá» khÃ¡ch hÃ ng.',
      },
      {
        type: 'paragraph',
        text: 'Há» sá»£ gÃ¬, tin gÃ¬, muá»‘n proof nÃ o? VÃ o landing page há» cÃ³ Ä‘i tiáº¿p khÃ´ng? Sales nÃ³i há» cÃ³ Ä‘Ãºng nhu cáº§u khÃ´ng? Má»—i creative pháº£i giÃºp team tráº£ lá»i rÃµ hÆ¡n má»™t pháº§n trong sá»‘ Ä‘Ã³.',
      },
      {
        type: 'paragraph',
        text: 'Pipeline khÃ´ng cÃ²n lÃ  viá»‡c riÃªng cá»§a designer hay media buyer. Content, ads, landing page, CRM vÃ  sales cÃ¹ng gÃ³p dá»¯ liá»‡u. Creative khÃ´ng thay Ä‘Æ°á»£c offer yáº¿u, page lá»‡ch, tracking sai hoáº·c sales cháº­m; nÃ³ giÃºp team há»c thá»‹ trÆ°á»ng nhanh hÆ¡n.',
      },
      { type: 'heading', text: 'Káº¿t â€” Há»i há»‡ thá»‘ng há»c Ä‘Æ°á»£c gÃ¬' },
      {
        type: 'paragraph',
        text: 'Ads scale khÃ´ng sá»‘ng báº±ng vÃ i máº«u tháº¯ng. TÃ i khoáº£n cáº§n nhiÃªn liá»‡u tá»« angle, hook, proof, offer, format, objection, sales feedback, testing rhythm vÃ  signal reading.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i cháº¡y ads sÃ¢u khÃ´ng chá»‰ há»i máº«u nÃ o tháº¯ng. Há» há»i há»‡ thá»‘ng há»c Ä‘Æ°á»£c gÃ¬, funnel xÃ¡c nháº­n tÃ­n hiá»‡u á»Ÿ Ä‘Ã¢u vÃ  vÃ²ng test tiáº¿p theo cáº§n tráº£ lá»i Ä‘iá»u gÃ¬.',
      },
    ],
    cta: 'Náº¿u tÃ i khoáº£n ads cá»§a báº¡n Ä‘ang phá»¥ thuá»™c vÃ o má»™t vÃ i máº«u tháº¯ng, Ä‘á»«ng chá»‰ lÃ m thÃªm hÃ¬nh má»›i. HÃ£y xÃ¢y láº¡i creative pipeline: khÃ¡ch Ä‘ang cÃ³ ná»—i lo gÃ¬, proof nÃ o lÃ m há» tin, sales Ä‘ang nghe objection nÃ o, creative nÃ o kÃ©o lead Ä‘Ãºng vÃ  vÃ²ng test tiáº¿p theo nÃªn há»c Ä‘iá»u gÃ¬?',
  },
  {
    title: 'CPL ráº» chÆ°a cháº¯c tá»‘t: Ä‘á»c lead quality trong paid ads nhÆ° tháº¿ nÃ o?',
    slug: 'cpl-re-chua-chac-tot-doc-lead-quality-trong-paid-ads-nhu-the-nao',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-restaurant-team-group-01.jpg",
                "alt": "Team members gathered around a restaurant table",
                "caption": "Team dinner group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'CPL ráº» chá»‰ nÃ³i ráº±ng báº¡n mua Ä‘Æ°á»£c má»™t lead vá»›i chi phÃ­ tháº¥p hÆ¡n. NÃ³ chÆ°a nÃ³i lead Ä‘Ã³ cÃ³ contact Ä‘Æ°á»£c khÃ´ng, cÃ³ Ä‘Ãºng nhu cáº§u khÃ´ng, cÃ³ ngÃ¢n sÃ¡ch khÃ´ng, sales cÃ³ follow-up Ä‘Æ°á»£c khÃ´ng vÃ  cÃ³ Ä‘i tiáº¿p tá»›i bÃ¡o giÃ¡/cuá»™c háº¹n/doanh thu khÃ´ng. Muá»‘n scale ads Ä‘Ãºng, team cáº§n Ä‘á»c lead quality qua CRM, sales feedback vÃ  cÃ¡c chá»‰ sá»‘ sau form submit.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Ads bÃ¡o lead ráº», sales bÃ¡o lead yáº¿u' },
      {
        type: 'paragraph',
        text: 'Cuá»‘i tuáº§n, marketing má»Ÿ report: CPL giáº£m, lead tÄƒng, campaign cÃ³ váº» tá»‘t hÆ¡n. NhÆ°ng sales nÃ³i lead yáº¿u: gá»i khÃ´ng nghe mÃ¡y, há»i cho biáº¿t, sai nhu cáº§u, chÆ°a cÃ³ ngÃ¢n sÃ¡ch, cÃ³ ngÆ°á»i khÃ´ng nhá»› Ä‘Ã£ Ä‘iá»n form.',
      },
      {
        type: 'paragraph',
        text: 'Marketing nhÃ¬n ads manager tháº¥y sá»‘ Ä‘áº¹p. Sales nhÃ¬n Ä‘iá»‡n thoáº¡i, Zalo vÃ  CRM tháº¥y khÃ¡ch khÃ´ng Ä‘i tiáº¿p. Founder ngá»“i giá»¯a khÃ´ng biáº¿t nÃªn tin ai.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i marketing hay sales luÃ´n Ä‘Ãºng. Team thiáº¿u há»‡ thá»‘ng Ä‘á»c lead quality sau khi lead Ä‘Æ°á»£c táº¡o ra. KhÃ´ng cÃ³ dá»¯ liá»‡u ná»‘i hai phÃ­a, tranh luáº­n chá»‰ cÃ²n lÃ  cáº£m nháº­n.',
      },
      { type: 'heading', text: 'Memo 01 â€” CPL ráº» chá»‰ nÃ³i chi phÃ­ táº¡o lead tháº¥p hÆ¡n' },
      {
        type: 'paragraph',
        text: 'CPL cho biáº¿t campaign táº¡o má»™t form submit, inbox, call hoáº·c lead vá»›i chi phÃ­ bao nhiÃªu. NÃ³ khÃ´ng cho biáº¿t ngÆ°á»i Ä‘Ã³ Ä‘Ãºng tá»‡p, cÃ³ nhu cáº§u, ngÃ¢n sÃ¡ch, contact Ä‘Æ°á»£c, hiá»ƒu Ä‘Ãºng offer hay sáº½ Ä‘i tá»›i cuá»™c háº¹n vÃ  bÃ¡o giÃ¡.',
      },
      {
        type: 'paragraph',
        text: 'ÄÃ¢y váº«n lÃ  chá»‰ sá»‘ media quan trá»ng. NhÆ°ng CPL náº±m giá»¯a funnel: má»™t tÃ­n hiá»‡u Ä‘áº§u vÃ o, khÃ´ng pháº£i phÃ¡n quyáº¿t campaign tá»‘t hay xáº¥u.',
      },
      { type: 'visual', variant: 'cheap-cpl-vs-valuable-lead' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao CPL ráº» chÆ°a cháº¯c lÃ  lead tá»‘t.',
      },
      { type: 'heading', text: 'Memo 02 â€” VÃ¬ sao CPL ráº» cÃ³ thá»ƒ kÃ©o lead kÃ©m?' },
      {
        type: 'paragraph',
        text: 'CPL tháº¥p cÃ³ thá»ƒ Ä‘áº¿n tá»« creative quÃ¡ rá»™ng, kÃ©o ngÆ°á»i tÃ² mÃ² nhÆ°ng sai nhu cáº§u. Offer quÃ¡ dá»… vÃ o táº¡o nhiá»u form mÃ  khÃ´ng lá»c ngÆ°á»i mua tháº­t. Thuáº­t toÃ¡n tÃ¬m ngÆ°á»i dá»… submit; Ä‘Ã³ chÆ°a cháº¯c lÃ  ngÆ°á»i dá»… mua.',
      },
      {
        type: 'paragraph',
        text: 'Landing page mÆ¡ há»“ táº¡o ká»³ vá»ng khÃ¡c lá»i sales. Form thiáº¿u nhu cáº§u, khu vá»±c, thá»i Ä‘iá»ƒm hoáº·c fit khiáº¿n má»i lead trÃ´ng giá»‘ng nhau. Tracking cÃ³ thá»ƒ tÃ­nh click hoáº·c má»Ÿ form dÃ¹ chÆ°a submit.',
      },
      {
        type: 'paragraph',
        text: 'Sales follow-up cháº­m cÅ©ng lÃ m lead phÃ¹ há»£p bá»‹ nguá»™i rá»“i mang nhÃ£n â€œlead yáº¿uâ€. Sai lá»‡ch cÃ³ thá»ƒ Ä‘áº¿n tá»« ads, page, form, tracking hoáº·c cÃ¡ch xá»­ lÃ½; khÃ´ng nÃªn Ä‘á»• vá» má»™t phÃ­a.',
      },
      { type: 'heading', text: 'Memo 03 â€” Äá»«ng chá»‰ Ä‘á»c lead á»Ÿ ads manager' },
      {
        type: 'paragraph',
        text: 'Ads manager cho tháº¥y spend, reach, CTR, CPC, CPL vÃ  conversion theo campaign hoáº·c creative. NÃ³ giáº£i thÃ­ch lá»›p media, khÃ´ng biáº¿t cuá»™c gá»i sau Ä‘Ã³ diá»…n ra ra sao.',
      },
      {
        type: 'paragraph',
        text: 'Team cáº§n ná»‘i CRM hoáº·c Sheet: source, creative hoáº·c keyword; owner; contacted vÃ  qualified status; nhu cáº§u; fit; next action; quote hoáº·c meeting; lost reason vÃ  sales note. ChÃºng cho biáº¿t lead Ä‘i Ä‘Æ°á»£c bao xa.',
      },
      { type: 'visual', variant: 'lead-quality-funnel-after-cpl' },
      { type: 'heading', text: 'Memo 04 â€” CÃ¡c chá»‰ sá»‘ cáº§n Ä‘áº·t cáº¡nh CPL' },
      {
        type: 'list',
        items: [
          'Contacted rate: bao nhiÃªu lead sales thá»±c sá»± gá»i hoáº·c nháº¯n Ä‘Æ°á»£c?',
          'Qualified rate: bao nhiÃªu ngÆ°á»i Ä‘Ãºng nhu cáº§u, tá»‡p vÃ  má»©c fit?',
          'Speed to lead: sales pháº£n há»“i sau bao lÃ¢u?',
          'Lead source quality: creative hoáº·c keyword nÃ o Ä‘Æ°a lead tá»‘t hÆ¡n?',
          'Quote, meeting hoáº·c demo rate: bao nhiÃªu lead thÃ nh cÆ¡ há»™i tháº­t?',
          'Close rate: nguá»“n nÃ o cÃ³ kháº£ nÄƒng Ä‘i tá»›i mua cao hÆ¡n?',
          'Lost reason: máº¥t vÃ¬ giÃ¡, sai nhu cáº§u, sai thá»i Ä‘iá»ƒm, thiáº¿u proof hay chá»n Ä‘á»‘i thá»§?',
          'Cost per qualified lead hoáº·c CAC: lá»›p sÃ¢u hÆ¡n khi dá»¯ liá»‡u Ä‘á»§.',
        ],
      },
      {
        type: 'paragraph',
        text: 'SME cÃ³ thá»ƒ báº¯t Ä‘áº§u tá»« contacted, qualified, next action vÃ  lost reason. Quan trá»ng lÃ  CPL khÃ´ng Ä‘á»©ng má»™t mÃ¬nh.',
      },
      { type: 'heading', text: 'Memo 05 â€” Lead quality báº¯t Ä‘áº§u tá»« creative vÃ  landing page' },
      {
        type: 'paragraph',
        text: 'Creative vá»«a kÃ©o vá»«a lá»c ká»³ vá»ng. Hook quÃ¡ rá»™ng kÃ©o ngÆ°á»i tÃ² mÃ²; claim máº¡nh lÃ m khÃ¡ch hiá»ƒu sai; ads nÃ³i giÃ¡ nhÆ°ng page nÃ³i giáº£i phÃ¡p; ads nÃ³i â€œmiá»…n phÃ­â€ nhÆ°ng sales tÆ° váº¥n gÃ³i tráº£ tiá»n. Thiáº¿u proof cÅ©ng táº¡o lead chÆ°a Ä‘á»§ tin.',
      },
      {
        type: 'paragraph',
        text: 'Page vÃ  form Ä‘á»‹nh hÃ¬nh cháº¥t lÆ°á»£ng qua message match, CTA, proof vÃ  thÃ´ng tin ai phÃ¹ há»£p. Náº¿u lead yáº¿u, hÃ£y kiá»ƒm tra ads vÃ  page Ä‘Ã£ há»©a gÃ¬ trÆ°á»›c khi há»i sales gá»i tháº¿ nÃ o.',
      },
      { type: 'heading', text: 'Memo 06 â€” Form vá»«a láº¥y thÃ´ng tin, vá»«a lá»c cháº¥t lÆ°á»£ng' },
      {
        type: 'paragraph',
        text: 'Form ngáº¯n giáº£m ma sÃ¡t nhÆ°ng cÃ³ thá»ƒ lá»t nhiá»u nhu cáº§u sai. Form dÃ i cho sales thÃªm ngá»¯ cáº£nh nhÆ°ng giáº£m conversion. Äiá»ƒm cÃ¢n báº±ng phá»¥ thuá»™c ngÃ nh vÃ  cÃ¡ch xá»­ lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ cÃ¢n nháº¯c nhu cáº§u, khu vá»±c, sáº£n pháº©m, thá»i Ä‘iá»ƒm, ngÃ¢n sÃ¡ch tÆ°Æ¡ng Ä‘á»‘i, vai trÃ² vÃ  kÃªnh tÆ° váº¥n. KhÃ´ng cáº§n há»i táº¥t cáº£. NhÆ°ng náº¿u lead sai láº·p láº¡i, form cÃ³ thá»ƒ quÃ¡ má»Ÿ.',
      },
      {
        type: 'paragraph',
        text: 'Form tá»‘t giÃºp sales hiá»ƒu lead, má»©c Æ°u tiÃªn vÃ  next action; khÃ´ng chá»‰ tÄƒng conversion.',
      },
      { type: 'heading', text: 'Memo 07 â€” Sales feedback pháº£i quay láº¡i ads' },
      {
        type: 'paragraph',
        text: 'â€œLead yáº¿uâ€, â€œkhÃ´ng nghe mÃ¡yâ€, â€œchá»‰ há»i giÃ¡â€ hay â€œsai khu vá»±câ€ thÆ°á»ng chá»‰ Ä‘Æ°á»£c nÃ³i trong há»p. Marketing khÃ´ng thá»ƒ sá»­a campaign náº¿u chÃºng khÃ´ng Ä‘Æ°á»£c ghi theo lead vÃ  nguá»“n.',
      },
      {
        type: 'paragraph',
        text: 'Dá»¯ liá»‡u tá»‘i thiá»ƒu gá»“m status, note, nhu cáº§u, fit, lost reason, source, next action vÃ  follow-up date. Feedback pháº£i quay láº¡i creative, offer, page, form vÃ  quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch.',
      },
      { type: 'visual', variant: 'sales-feedback-to-ads-loop' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads lead quality review sheet.',
      },
      { type: 'heading', text: 'Memo 08 â€” Khi nÃ o CPL cao hÆ¡n váº«n Ä‘Ã¡ng giá»¯?' },
      {
        type: 'paragraph',
        text: 'Campaign CPL cao hÆ¡n váº«n Ä‘Ã¡ng giá»¯ náº¿u lead contact Ä‘Æ°á»£c, Ä‘Ãºng nhu cáº§u, qualified tá»‘t vÃ  táº¡o nhiá»u cuá»™c háº¹n hoáº·c bÃ¡o giÃ¡ hÆ¡n. GiÃ¡ trá»‹ Ä‘Æ¡n hÃ ng, margin vÃ  kháº£ nÄƒng mua láº¡i cÅ©ng thay Ä‘á»•i giÃ¡ trá»‹ lead.',
      },
      {
        type: 'paragraph',
        text: 'Campaign A cÃ³ CPL ráº» nhÆ°ng khÃ³ contact; Campaign B Ä‘áº¯t hÆ¡n nhÆ°ng khÃ¡ch hiá»ƒu offer, Ä‘Ãºng nhu cáº§u vÃ  cÃ³ next action. Chá»‰ nhÃ¬n CPL, team sáº½ táº¯t B vÃ  scale A. Äá»c downstream cÃ³ thá»ƒ dáº«n tá»›i quyáº¿t Ä‘á»‹nh ngÆ°á»£c láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'CPL cao khÃ´ng tá»± Ä‘á»™ng xáº¥u, cÅ©ng nhÆ° CPL ráº» khÃ´ng tá»± Ä‘á»™ng tá»‘t. Cáº§n Ä‘á»c chi phÃ­ trong quan há»‡ vá»›i loáº¡i cÆ¡ há»™i mÃ  campaign Ä‘ang mua.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t cuá»™c há»p lead quality nÃªn quyáº¿t Ä‘á»‹nh Ä‘iá»u gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Má»—i tuáº§n, marketing vÃ  sales xem campaign nÃ o táº¡o lead contact Ä‘Æ°á»£c; lead sai nhu cáº§u nÃ o; follow-up cháº­m á»Ÿ Ä‘Ã¢u; lost reason nÃ o láº·p láº¡i; form thiáº¿u gÃ¬ vÃ  page cÃ³ táº¡o ká»³ vá»ng sai khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»™c há»p pháº£i chá»‘t creative, form hoáº·c page cáº§n sá»­a; campaign cáº§n giá»¯, táº¯t hay tÄƒng; vÃ²ng test cáº§n há»c gÃ¬. ÄÃ¢y lÃ  nhá»‹p ná»‘i dá»¯ liá»‡u, khÃ´ng pháº£i phiÃªn tÃ¬m ngÆ°á»i chá»‹u lá»—i.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng má»™t bÃ¡o cÃ¡o CPL, hai campaign ráº¥t khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Campaign A cÃ³ CPL tháº¥p vÃ  nhiá»u form, nhÆ°ng sales gá»i khÃ³, khÃ¡ch há»i cho biáº¿t, CRM mÆ¡ há»“ vÃ  Ã­t next action. Team chá»‰ cÃ²n káº¿t luáº­n khÃ´ng hÃ nh Ä‘á»™ng Ä‘Æ°á»£c: â€œlead yáº¿uâ€.',
      },
      {
        type: 'paragraph',
        text: 'Campaign B Ä‘áº¯t hÆ¡n vÃ  Ã­t lead hÆ¡n, nhÆ°ng nhu cáº§u rÃµ, sales contact Ä‘Æ°á»£c, cÃ³ háº¹n hoáº·c bÃ¡o giÃ¡, lost reason cÅ©ng rÃµ. Marketing biáº¿t sá»­a angle, form hay page á»Ÿ Ä‘Ã¢u. Campaign tá»‘t cÃ²n giÃºp team há»c bÆ°á»›c tiáº¿p theo.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign CPL ráº» nhÆ°ng lead khÃ´ng contact Ä‘Æ°á»£c vÃ  sales khÃ´ng cÃ³ next action.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng dá»… vui khi CPL giáº£m: con sá»‘ rÃµ, dá»… bÃ¡o cÃ¡o, dá»… táº¡o cáº£m giÃ¡c campaign tá»‘t hÆ¡n. LÃ m lÃ¢u má»›i tháº¥y Ä‘Ã³ chá»‰ lÃ  má»™t pháº§n cÃ¢u chuyá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'Lead cÃ²n qua page, form, CRM, sales, follow-up vÃ  bÃ¡o giÃ¡. KhÃ´ng ghi cÃ¡c lá»›p sau, marketer sáº½ tá»‘i Æ°u thá»© dá»… Ä‘o nháº¥t, chÆ°a cháº¯c quan trá»ng nháº¥t.',
      },
      {
        type: 'paragraph',
        text: 'CPL ráº» cÃ³ thá»ƒ lÃ m team tá»± tin scale má»™t dÃ²ng lead khÃ´ng Ä‘i tá»›i Ä‘Ã¢u. Ads sÃ¢u khÃ´ng chá»‰ giáº£m CPL; Ä‘Ã³ lÃ  biáº¿t CPL Ä‘ang mua loáº¡i cÆ¡ há»™i nÃ o.',
      },
      { type: 'heading', text: 'Káº¿t â€” Äá»c cháº¥t lÆ°á»£ng sau form submit' },
      {
        type: 'paragraph',
        text: 'CPL ráº» chá»‰ nÃ³i chi phÃ­ táº¡o lead tháº¥p hÆ¡n. Muá»‘n biáº¿t lead cÃ³ Ä‘i tá»›i bÃ¡o giÃ¡, cuá»™c háº¹n hay doanh thu, team pháº£i ná»‘i ads vá»›i creative, page, form, CRM, sales feedback vÃ  outcome.',
      },
      {
        type: 'paragraph',
        text: 'Quyáº¿t Ä‘á»‹nh scale nÃªn dá»±a trÃªn cháº¥t lÆ°á»£ng phÃ­a sau form submit, khÃ´ng chá»‰ trÃªn chi phÃ­ lead trong ads manager.',
      },
    ],
    cta: 'Náº¿u tuáº§n nÃ y report ads cá»§a báº¡n Ä‘ang Ä‘áº¹p vÃ¬ CPL giáº£m, Ä‘á»«ng vá»™i scale. HÃ£y há»i thÃªm: lead Ä‘Ã³ cÃ³ contact Ä‘Æ°á»£c khÃ´ng, Ä‘Ãºng nhu cáº§u khÃ´ng, sales cÃ³ next action khÃ´ng, lost reason lÃ  gÃ¬ vÃ  campaign nÃ o tháº­t sá»± kÃ©o cÆ¡ há»™i cÃ³ kháº£ nÄƒng mua?',
  },
  {
    title: 'Scale ads khÃ´ng pháº£i chá»‰ lÃ  tÄƒng ngÃ¢n sÃ¡ch',
    slug: 'scale-ads-khong-phai-chi-la-tang-ngan-sach',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/training-workshop/training-workshop-meeting-room-marketing-strategy-session-01.jpg",
                "alt": "Workshop room with a marketing strategy presentation",
                "caption": "Marketing strategy workshop session",
                "width": 1332,
                "height": 1086,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Scale ads khÃ´ng pháº£i lÃ  tháº¥y campaign Ä‘ang tá»‘t rá»“i tÄƒng ngÃ¢n sÃ¡ch tháº­t máº¡nh. Khi budget tÄƒng, Ã¡p lá»±c sáº½ dá»“n lÃªn creative, landing page, tracking, CRM, sales follow-up vÃ  economics. Náº¿u há»‡ thá»‘ng phÃ­a sau chÆ°a chá»‹u Ä‘Æ°á»£c, tÄƒng budget chá»‰ lÃ m CPL dao Ä‘á»™ng, lead quality tá»¥t, creative má»i nhanh vÃ  team ra quyáº¿t Ä‘á»‹nh sai nhanh hÆ¡n.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Campaign Ä‘ang ngon, tÄƒng budget rá»“i má»i thá»© báº¯t Ä‘áº§u lá»‡ch' },
      {
        type: 'paragraph',
        text: 'Campaign Ä‘ang á»•n: CPL Ä‘áº¹p, lead Ä‘á»u, founder hÃ o há»©ng. Team nghÄ© â€œÄ‘ang ngon, tÄƒng ngÃ¢n sÃ¡ch Ä‘iâ€. VÃ i ngÃ y Ä‘áº§u, sá»‘ váº«n cÃ³ váº» á»•n.',
      },
      {
        type: 'paragraph',
        text: 'Rá»“i CPL dao Ä‘á»™ng, sales than lead yáº¿u, creative má»i, frequency tÄƒng, page conversion giáº£m. Tracking lá»‡ch, follow-up cháº­m, doanh thu khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng tiá»n tiÃªu.',
      },
      {
        type: 'paragraph',
        text: 'Campaign chÆ°a cháº¯c khÃ´ng scale Ä‘Æ°á»£c. CÃ³ thá»ƒ team Ä‘Ã£ tÄƒng ngÃ¢n sÃ¡ch nhanh hÆ¡n kháº£ nÄƒng chá»‹u táº£i cá»§a há»‡ thá»‘ng phÃ­a sau.',
      },
      { type: 'heading', text: 'Memo 01 â€” TÄƒng tiá»n lÃ  tÄƒng Ã¡p lá»±c lÃªn há»‡ thá»‘ng' },
      {
        type: 'paragraph',
        text: 'Budget tÄƒng khÃ´ng chá»‰ Ä‘á»•i ads manager. Creative phÃ¢n phá»‘i nhiá»u hÆ¡n, audience bá»‹ cháº¡m dÃ y hÆ¡n, thuáº­t toÃ¡n cáº§n signal sáº¡ch, page vÃ  form nháº­n thÃªm traffic, CRM thÃªm lead, sales pháº£i xá»­ lÃ½ nhanh. Economics cÅ©ng bá»‹ kiá»ƒm tra rÃµ hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Creative yáº¿u lÃ m CPL dao Ä‘á»™ng; page yáº¿u lÃ m click rÃ²; tracking sai lÃ m há»‡ thá»‘ng há»c sai; CRM rá»‘i lÃ m lead rÆ¡i; sales cháº­m lÃ m lead nguá»™i. Margin má»ng khiáº¿n CAC nhÃ­ch lÃªn Ä‘Ã£ táº¡o Ã¡p lá»±c.',
      },
      {
        type: 'paragraph',
        text: 'Scale lÃ  bÃ i test sá»©c chá»‹u táº£i cá»§a toÃ n growth system, khÃ´ng pháº£i thao tÃ¡c tÄƒng ngÃ¢n sÃ¡ch.',
      },
      { type: 'visual', variant: 'ads-scale-pressure-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao scale ads khÃ´ng pháº£i chá»‰ lÃ  tÄƒng ngÃ¢n sÃ¡ch.',
      },
      { type: 'heading', text: 'Memo 02 â€” Khi CPL Ä‘áº¹p váº«n chÆ°a nÃªn scale' },
      {
        type: 'paragraph',
        text: 'ChÆ°a nÃªn tÄƒng náº¿u tracking chÆ°a phÃ¢n biá»‡t form submit vá»›i click, source khÃ´ng vÃ o CRM hoáº·c dedup chÆ°a cháº¯c. CPL Ä‘áº¹p cÅ©ng chÆ°a Ä‘á»§ khi team chÆ°a biáº¿t contacted rate, qualified rate vÃ  quote hoáº·c meeting rate.',
      },
      {
        type: 'paragraph',
        text: 'TÃ i khoáº£n sá»‘ng báº±ng má»™t hoáº·c hai máº«u tháº¯ng sáº½ má»i nhanh khi phÃ¢n phá»‘i rá»™ng. Page mobile yáº¿u, thiáº¿u proof, CTA mÆ¡ há»“ hoáº·c form khÃ´ng lá»c nhu cáº§u cÅ©ng chÆ°a sáºµn sÃ ng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u sales chÆ°a cÃ³ response time, status vÃ  next action, thÃªm lead chá»‰ lÃ m backlog lá»›n hÆ¡n. Khi margin, close rate vÃ  CAC chá»‹u Ä‘Æ°á»£c cÃ²n mÃ¹, team chÆ°a biáº¿t giá»›i háº¡n tÄƒng tiá»n. CPL Ä‘áº¹p má»›i lÃ  tÃ­n hiá»‡u Ä‘áº§u.',
      },
      { type: 'heading', text: 'Memo 03 â€” Khi nÃ o cÃ³ thá»ƒ cÃ¢n nháº¯c tÄƒng budget?' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ má»™t cÃ´ng thá»©c cá»©ng cho má»i tÃ i khoáº£n. NhÆ°ng quyáº¿t Ä‘á»‹nh tÄƒng Ä‘Ã¡ng tin hÆ¡n khi campaign á»•n qua vÃ i chu ká»³ Ä‘á»c, khÃ´ng chá»‰ má»™t ngÃ y Ä‘áº¹p; lead cÃ³ downstream signal tá»‘t; CTR, CPC vÃ  frequency chÆ°a bÃ¡o fatigue rÃµ; page conversion váº«n giá»¯ Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Sales cáº§n xá»­ lÃ½ ká»‹p, tracking pháº£i cho biáº¿t lead Ä‘áº¿n tá»« Ä‘Ã¢u vÃ  event nÃ o Ä‘ang Ä‘Æ°á»£c tá»‘i Æ°u. Cost per qualified lead hoáº·c CAC cÅ©ng pháº£i cÃ²n trong vÃ¹ng economics cháº¥p nháº­n. TÄƒng budget nÃªn dá»±a trÃªn nhiá»u signal cÃ¹ng xÃ¡c nháº­n, khÃ´ng chá»‰ CPL tháº¥p.',
      },
      { type: 'visual', variant: 'ads-scale-decision-matrix' },
      { type: 'heading', text: 'Memo 04 â€” Scale theo cáº£m xÃºc lÃ m nhiá»…u quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'HÃ´m nay CPL ráº» thÃ¬ tÄƒng máº¡nh, ngÃ y mai Ä‘áº¯t thÃ¬ táº¯t; campaign tháº¯ng má»™t ngÃ y Ä‘Ã£ scale, tá»¥t hai ngÃ y thÃ¬ Ä‘á»•i háº¿t creative. CÃ³ team cÃ²n tÄƒng khi sales chÆ°a xá»­ lÃ½ háº¿t lead, khÃ´ng cÃ³ creative dá»± phÃ²ng vÃ  thay nhiá»u biáº¿n cÃ¹ng lÃºc.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads luÃ´n dao Ä‘á»™ng. Pháº£n á»©ng liÃªn tá»¥c theo tá»«ng ngÃ y cÃ³ thá»ƒ lÃ m nhiá»…u learning vÃ  khiáº¿n team khÃ´ng biáº¿t thay Ä‘á»•i nÃ o táº¡o káº¿t quáº£. Scale cáº§n ngÆ°á»¡ng quyáº¿t Ä‘á»‹nh vÃ  nhá»‹p review Ä‘Ã£ thá»‘ng nháº¥t, khÃ´ng pháº£i pháº£n xáº¡ theo mÃ u Ä‘á» xanh trÃªn dashboard.',
      },
      { type: 'heading', text: 'Memo 05 â€” TÃ¡ch ngÃ¢n sÃ¡ch test vÃ  ngÃ¢n sÃ¡ch scale' },
      {
        type: 'paragraph',
        text: 'Test budget dÃ¹ng Ä‘á»ƒ há»c angle, creative, page variation, offer, audience signal hoáº·c keyword má»›i. Scale budget dÃ¹ng Ä‘á»ƒ Ä‘áº©y nhá»¯ng gÃ¬ Ä‘Ã£ cÃ³ tÃ­n hiá»‡u: angle kÃ©o lead phÃ¹ há»£p, page vÃ  form rÃµ, tracking á»•n, sales chá»‹u Ä‘Æ°á»£c vÃ  economics cháº¥p nháº­n.',
      },
      {
        type: 'paragraph',
        text: 'DÃ¹ng tiá»n scale Ä‘á»ƒ test lung tung lÃ m rá»§i ro trá»™n vá»›i khai thÃ¡c. NgÆ°á»£c láº¡i, test quÃ¡ nhá» cÃ³ thá»ƒ khÃ´ng táº¡o Ä‘á»§ tÃ­n hiá»‡u. KhÃ´ng dÃ nh tiá»n Ä‘á»ƒ há»c khiáº¿n team chá»‰ báº¯t Ä‘áº§u lÃ m láº¡i khi creative cÅ© Ä‘Ã£ má»i.',
      },
      {
        type: 'paragraph',
        text: 'Scale bá»n hÆ¡n khi má»™t pháº§n ngÃ¢n sÃ¡ch luÃ´n dÃ nh cho há»c, thay vÃ¬ chá»‰ khai thÃ¡c thá»© Ä‘ang tháº¯ng.',
      },
      { type: 'heading', text: 'Memo 06 â€” Äá»«ng scale má»™t máº«u quáº£ng cÃ¡o' },
      {
        type: 'paragraph',
        text: 'Khi creative tháº¯ng, cáº§n há»i nÃ³ tháº¯ng vÃ¬ hook máº¡nh hay offer thá»±c sá»± cÃ³ lá»±c; page cÃ³ giá»¯ Ä‘Ãºng lá»i há»©a; lead quality vÃ  close signal ra sao; angle cÃ³ thá»ƒ Ä‘i sang format khÃ¡c; offer cÃ³ chá»‹u Ä‘Æ°á»£c lÆ°á»£ng traffic lá»›n hÆ¡n khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t file tháº¯ng cÃ³ tuá»•i thá» há»¯u háº¡n. Thá»© Ä‘Ã¡ng scale lÃ  má»™t há»‡ angle, offer vÃ  proof Ä‘Ã£ Ä‘Æ°á»£c downstream signal xÃ¡c nháº­n, cÃ³ creative pipeline Ä‘á»ƒ tiáº¿p tá»¥c test. Creative khÃ´ng thá»ƒ thay offer yáº¿u, page lá»‡ch hoáº·c sales flow chÆ°a sáºµn sÃ ng.',
      },
      { type: 'visual', variant: 'test-signal-to-scale-system' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads scale decision checklist.',
      },
      { type: 'heading', text: 'Memo 07 â€” Sales capacity lÃ  giá»›i háº¡n thÆ°á»ng bá»‹ quÃªn' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team há»i ads cÃ³ kÃ©o thÃªm lead Ä‘Æ°á»£c khÃ´ng nhÆ°ng Ã­t há»i sales cÃ³ xá»­ lÃ½ thÃªm Ä‘Æ°á»£c khÃ´ng. Khi volume tÄƒng, cuá»™c gá»i cháº­m hÆ¡n, note Ã­t Ä‘i, follow-up vÃ  bÃ¡o giÃ¡ trá»…, CRM thiáº¿u status. Lead nÃ³ng trá»Ÿ thÃ nh lead nguá»™i.',
      },
      {
        type: 'paragraph',
        text: 'Founder cÃ³ thá»ƒ tÆ°á»Ÿng lead quality giáº£m, trong khi má»™t pháº§n váº¥n Ä‘á» lÃ  tá»‘c Ä‘á»™ xá»­ lÃ½ giáº£m. Náº¿u sales capacity khÃ´ng tÄƒng, ads scale cÃ³ thá»ƒ lÃ m rÆ¡i nhiá»u cÆ¡ há»™i hÆ¡n thay vÃ¬ táº¡o doanh thu tÆ°Æ¡ng á»©ng.',
      },
      { type: 'heading', text: 'Memo 08 â€” Scale sai lÃ m team hiá»ƒu sai nguyÃªn nhÃ¢n' },
      {
        type: 'paragraph',
        text: 'Káº¿t quáº£ xáº¥u sau khi tÄƒng budget thÆ°á»ng bá»‹ káº¿t luáº­n nhanh: thuáº­t toÃ¡n loáº¡n, thá»‹ trÆ°á»ng yáº¿u, creative cháº¿t, sales yáº¿u hoáº·c page dá»Ÿ. Má»—i kháº£ nÄƒng Ä‘á»u cÃ³ thá»ƒ Ä‘Ãºng, nhÆ°ng cáº§n bÃ³c theo signal thay vÃ¬ chá»n má»™t nÆ¡i Ä‘á»ƒ Ä‘á»• lá»—i.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y kiá»ƒm tra tracking, fatigue, audience vÃ  frequency, page conversion, lead quality, sales response time, CRM status rá»“i má»›i xem nhá»‹p tÄƒng cÃ³ vÆ°á»£t quÃ¡ dá»¯ liá»‡u hay khÃ´ng. Scale sai khÃ´ng chá»‰ tá»‘n tiá»n; thiáº¿u há»‡ Ä‘o cÃ²n khiáº¿n team rÃºt ra bÃ i há»c sai.',
      },
      { type: 'heading', text: 'Memo 09 â€” Nhá»‹p review scale ads' },
      {
        type: 'paragraph',
        text: 'Daily check nÃªn nháº¹: spend pacing, lá»—i tag, CPL hoáº·c CPA báº¥t thÆ°á»ng. Hai hoáº·c ba ngÃ y má»™t láº§n, Ä‘á»c fatigue, CTR, CPC, frequency, lead volume cÃ¹ng signal page vÃ  form.',
      },
      {
        type: 'paragraph',
        text: 'Háº±ng tuáº§n, ná»‘i contacted rate, qualified rate, sales note, quote, meeting vÃ  lost reason; chá»‘t creative cáº§n sáº£n xuáº¥t, campaign cáº§n giá»¯, sá»­a, táº¯t hay tÄƒng, test budget vÃ  sales capacity. KhÃ´ng cÃ³ rhythm, team sáº½ cháº¡y theo sá»‘ má»—i ngÃ y.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng campaign tháº¯ng, hai cÃ¡ch scale' },
      {
        type: 'paragraph',
        text: 'Team A tháº¥y CPL Ä‘áº¹p rá»“i tÄƒng máº¡nh. Há» khÃ´ng cÃ³ creative dá»± phÃ²ng, tracking dá»«ng á»Ÿ lead, CRM thiáº¿u status vÃ  sales xá»­ lÃ½ cháº­m. Khi CPL tÄƒng vÃ  lead quality giáº£m, team táº¯t vá»™i nhÆ°ng khÃ´ng biáº¿t Ä‘iá»ƒm gÃ£y náº±m á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Team B kiá»ƒm lead quality trÆ°á»›c, giá»¯ test budget cho creative má»›i vÃ  tÄƒng theo nhá»‹p. Há» theo dÃµi page conversion, sales cáº­p nháº­t status cÃ¹ng next action, rá»“i Ä‘á»c cost per qualified lead. TÃ­n hiá»‡u giá»¯ Ä‘Æ°á»£c thÃ¬ má»›i tÄƒng tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡c biá»‡t khÃ´ng náº±m á»Ÿ team nÃ o dÃ¡m tÄƒng tiá»n. NÃ³ náº±m á»Ÿ kháº£ nÄƒng tÄƒng Ã¡p lá»±c cÃ³ kiá»ƒm soÃ¡t vÃ  biáº¿t khi nÃ o nÃªn dá»«ng Ä‘á»ƒ sá»­a há»‡ thá»‘ng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign CPL Ä‘áº¹p nhÆ°ng tÄƒng budget quÃ¡ nhanh lÃ m lead quality tá»¥t vÃ  sales follow-up khÃ´ng ká»‹p.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i nghÄ© scale lÃ  tÄƒng budget cho campaign tháº¯ng. CÃ ng lÃ m, tÃ´i cÃ ng tháº¥y Ä‘Ã¢y lÃ  bÃ i test há»‡ thá»‘ng. NgÃ¢n sÃ¡ch nhá» cÃ³ thá»ƒ chÆ°a lÃ m lá»—i phÃ­a sau lá»™ rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Khi tiá»n tÄƒng, creative pháº£i Ä‘á»§ má»›i, tracking Ä‘á»§ sáº¡ch, page Ä‘á»§ tin, CRM Ä‘á»§ rÃµ, sales Ä‘á»§ nhanh vÃ  economics Ä‘á»§ chá»‹u. Chá»‰ nhÃ¬n ads manager dá»… dáº«n tá»›i tÄƒng tiá»n vÃ o há»‡ thá»‘ng chÆ°a sáºµn sÃ ng.',
      },
      {
        type: 'paragraph',
        text: 'Scale khÃ´ng pháº£i tÄƒng ngÃ¢n sÃ¡ch Ä‘á»ƒ xem chuyá»‡n gÃ¬ xáº£y ra. Scale lÃ  tÄƒng khi team biáº¿t há»‡ thá»‘ng cÃ³ thá»ƒ chá»‹u thÃªm Ã¡p lá»±c á»Ÿ Ä‘Ã¢u vÃ  Ä‘ang theo dÃµi tÃ­n hiá»‡u nÃ o.',
      },
      { type: 'heading', text: 'Káº¿t â€” Scale lÃ  má»™t decision system' },
      {
        type: 'paragraph',
        text: 'Scale ads khÃ´ng pháº£i chá»‰ lÃ  tÄƒng ngÃ¢n sÃ¡ch. ÄÃ³ lÃ  quyáº¿t Ä‘á»‹nh dá»±a trÃªn signal vÃ  sá»©c chá»‹u táº£i cá»§a creative, page, tracking, CRM, sales follow-up vÃ  economics. Chá»‰ nhÃ¬n CPL Ä‘áº¹p rá»“i tÄƒng tiá»n dá»… lÃ m má»i creative, rÆ¡i lead vÃ  khiáº¿n team Ä‘á»c sai nguyÃªn nhÃ¢n.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang chuáº©n bá»‹ tÄƒng ngÃ¢n sÃ¡ch ads, Ä‘á»«ng chá»‰ há»i â€œcampaign nÃ y Ä‘ang tháº¯ng chÆ°a?â€. HÃ£y há»i thÃªm: creative cÃ²n Ä‘á»§ lá»±c khÃ´ng, tracking cÃ³ sáº¡ch khÃ´ng, landing page cÃ³ chá»‹u Ä‘Æ°á»£c traffic khÃ´ng, lead quality cÃ³ tá»‘t khÃ´ng, sales cÃ³ xá»­ lÃ½ ká»‹p khÃ´ng vÃ  economics cÃ³ chá»‹u Ä‘Æ°á»£c CAC cao hÆ¡n khÃ´ng?',
  },
  {
    title: 'Tracking sai lÃ m ads tá»‘i Æ°u sai nhÆ° tháº¿ nÃ o?',
    slug: 'tracking-sai-lam-ads-toi-uu-sai-nhu-the-nao',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/team-meeting/team-meeting-company-team-office-team-group-01.jpg",
                "alt": "Office team group photo",
                "caption": "Office team group moment",
                "width": 1280,
                "height": 960,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Ads platform tá»‘i Æ°u theo signal mÃ  nÃ³ nháº­n Ä‘Æ°á»£c. Náº¿u báº¡n báº¯n nháº§m click thÃ nh lead, Ä‘áº¿m trÃ¹ng form submit, máº¥t UTM, khÃ´ng Ä‘Æ°a lead source vÃ o CRM hoáº·c khÃ´ng phÃ¢n biá»‡t lead tá»‘t vÃ  lead rÃ¡c, thuáº­t toÃ¡n sáº½ há»c sai vÃ  team cÅ©ng ra quyáº¿t Ä‘á»‹nh sai. Tracking sai khÃ´ng chá»‰ lÃ m report lá»‡ch; nÃ³ lÃ m ngÃ¢n sÃ¡ch ads Ä‘i sai hÆ°á»›ng.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Report ads Ä‘áº¹p nhÆ°ng CRM ká»ƒ cÃ¢u chuyá»‡n khÃ¡c' },
      {
        type: 'paragraph',
        text: 'Ads manager bÃ¡o nhiá»u conversion, CPL á»•n, form submit tÄƒng. NhÆ°ng CRM thiáº¿u lead, nhiá»u record khÃ´ng cÃ³ source, cÃ³ lead trÃ¹ng vÃ  sales khÃ´ng tháº¥y cÆ¡ há»™i tÆ°Æ¡ng á»©ng.',
      },
      {
        type: 'paragraph',
        text: 'Kiá»ƒm sÃ¢u hÆ¡n má»›i tháº¥y cÃ³ ngÆ°á»i chá»‰ báº¥m CTA nhÆ°ng Ä‘Ã£ Ä‘Æ°á»£c tÃ­nh Lead, form lá»—i váº«n báº¯n event, má»™t sá»‘ submit bá»‹ Ä‘áº¿m hai láº§n. Founder há»i: ads Ä‘ang tá»‘t hay tracking Ä‘ang sai?',
      },
      {
        type: 'paragraph',
        text: 'Khi tracking khÃ´ng Ä‘Ã¡ng tin, team máº¥t kháº£ nÄƒng phÃ¢n biá»‡t campaign tá»‘t vá»›i campaign tháº¯ng giáº£ vÃ  ra quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch Ä‘Ãºng.',
      },
      { type: 'heading', text: 'Memo 01 â€” Platform tá»‘i Æ°u theo signal, khÃ´ng theo mong muá»‘n' },
      {
        type: 'paragraph',
        text: 'Meta, Google hay TikTok khÃ´ng tá»± biáº¿t lead nÃ o cÃ³ ngÃ¢n sÃ¡ch, form nÃ o submit tháº­t, cuá»™c gá»i nÃ o lÃ  cÆ¡ há»™i hay Ä‘Æ¡n nÃ o cÃ³ margin tá»‘t. Platform há»c tá»« event gá»­i vá»: click, Lead, booking, Purchase, value vÃ  event_id.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u click â€œNháº­n tÆ° váº¥nâ€ bá»‹ tÃ­nh lÃ  Lead, há»‡ thá»‘ng tÃ¬m ngÆ°á»i dá»… báº¥m thay vÃ¬ gá»­i form. Form lá»—i váº«n báº¯n Lead lÃ m report Ä‘áº¹p nhÆ°ng sales thiáº¿u data. Client vÃ  server event khÃ´ng dedup lÃ m conversion phá»“ng.',
      },
      {
        type: 'paragraph',
        text: 'Tracking sai khÃ´ng lÃ m platform ngá»«ng tá»‘i Æ°u. NÃ³ khiáº¿n platform tá»‘i Æ°u ráº¥t chÄƒm chá»‰ theo má»¥c tiÃªu sai.',
      },
      { type: 'visual', variant: 'paid-ads-signal-chain' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao tracking sai lÃ m ads tá»‘i Æ°u sai.',
      },
      { type: 'heading', text: 'Memo 02 â€” Nhá»¯ng lá»—i tracking phá»• biáº¿n nhÆ°ng Ã¢m tháº§m' },
      {
        type: 'list',
        items: [
          'Báº¯n Lead khi ngÆ°á»i dÃ¹ng má»›i má»Ÿ form hoáº·c click CTA, chÆ°a gá»­i thÃ´ng tin.',
          'Client vÃ  server event cÃ¹ng báº¯n nhÆ°ng khÃ´ng dedup báº±ng event_id.',
          'Form submit tháº¥t báº¡i váº«n gá»­i event vá» platform.',
          'Reload hoáº·c quay láº¡i thank-you page lÃ m conversion bá»‹ Ä‘áº¿m láº·p.',
          'Event name khÃ´ng nháº¥t quÃ¡n giá»¯a Lead, CompleteRegistration vÃ  custom event.',
          'UTM, source hoáº·c campaign máº¥t trÆ°á»›c khi record Ä‘i vÃ o CRM.',
          'Call, phone hoáº·c Zalo click quan trá»ng khÃ´ng Ä‘Æ°á»£c ghi nháº­n.',
          'Lead rÃ¡c, lead tá»‘t vÃ  qualified lead dÃ¹ng cÃ¹ng má»™t signal.',
          'Micro conversion vÃ  main conversion bá»‹ Ä‘á»c chung dÆ°á»›i nhÃ£n â€œconversionâ€.',
          'Page hoáº·c form Ä‘Ã£ Ä‘á»•i nhÆ°ng team khÃ´ng test láº¡i event.',
        ],
      },
      {
        type: 'paragraph',
        text: 'CÃ¡c lá»—i nÃ y Ã­t gÃ¢y cáº£nh bÃ¡o lá»›n nhÆ°ng Ã¢m tháº§m lÃ m report khÃ´ng pháº£n Ã¡nh Ä‘Ãºng dÃ²ng lead tháº­t.',
      },
      { type: 'heading', text: 'Memo 03 â€” KhÃ´ng pháº£i event nÃ o cÅ©ng nÃªn lÃ  má»¥c tiÃªu chÃ­nh' },
      {
        type: 'paragraph',
        text: 'Scroll, CTA click, form start, video view hay download giÃºp Ä‘á»c intent vÃ  UX. Submit thÃ nh cÃ´ng, qualified lead, booking, quote request vÃ  purchase gáº§n káº¿t quáº£ kinh doanh hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Signal quÃ¡ nÃ´ng khiáº¿n platform tÃ¬m ngÆ°á»i lÃ m hÃ nh Ä‘á»™ng dá»… nhÆ°ng Ã­t giÃ¡ trá»‹. Signal quÃ¡ sÃ¢u khi volume tháº¥p láº¡i thiáº¿u dá»¯ liá»‡u há»c. Conversion event lÃ  quyáº¿t Ä‘á»‹nh váº­n hÃ nh, khÃ´ng chá»‰ cáº¥u hÃ¬nh ká»¹ thuáº­t.',
      },
      { type: 'visual', variant: 'micro-signal-vs-main-conversion' },
      { type: 'heading', text: 'Memo 04 â€” Tracking nÃ´ng lÃ m creative decision nÃ´ng' },
      {
        type: 'paragraph',
        text: 'Khi Lead báº¯n quÃ¡ dá»…, creative kÃ©o ngÆ°á»i tÃ² mÃ² nhÃ¬n nhÆ° máº«u tháº¯ng. KhÃ´ng ná»‘i source tá»›i CRM, team thÆ°á»ng scale máº«u CPL ráº» nháº¥t mÃ  khÃ´ng biáº¿t lead nÃ o contact Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Creative A cÃ³ hook máº¡nh, nhiá»u click vÃ  form nhÆ°ng lead sai nhu cáº§u. Creative B cÃ³ CPL cao hÆ¡n nhÆ°ng Ä‘Ãºng tá»‡p vÃ  táº¡o cuá»™c háº¹n. Tracking dá»«ng á»Ÿ Lead sáº½ chá»n A; dá»¯ liá»‡u CRM vÃ  sales cÃ³ thá»ƒ cho tháº¥y B Ä‘Ã¡ng giá»¯ hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 05 â€” Page tá»‘t giáº£ khi form vÃ  event khÃ´ng khá»›p' },
      {
        type: 'paragraph',
        text: 'Landing page cÃ³ thá»ƒ nhÃ¬n tá»‘t nhá» nhiá»u CTA click, form start vÃ  event Lead. NhÆ°ng náº¿u submit tháº¥t báº¡i, form thiáº¿u thÃ´ng tin lá»c, source máº¥t, lead trÃ¹ng, thank-you page Ä‘áº¿m sai hoáº·c mobile form lá»—i, dÃ²ng lead tháº­t váº«n yáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'Page khÃ´ng nÃªn Ä‘Æ°á»£c Ä‘Ã¡nh giÃ¡ chá»‰ báº±ng click hay event nÃ´ng. Team cáº§n kiá»ƒm submit thÃ nh cÃ´ng, data thá»±c sá»± vÃ o CRM vÃ  sales cÃ³ Ä‘á»§ ngá»¯ cáº£nh Ä‘á»ƒ xá»­ lÃ½.',
      },
      { type: 'heading', text: 'Memo 06 â€” Tracking sai lÃ m ngÃ¢n sÃ¡ch Ä‘i cáº£ hai hÆ°á»›ng sai' },
      {
        type: 'paragraph',
        text: 'Report tá»‘t giáº£ khiáº¿n team tÄƒng budget sá»›m, giá»¯ creative sai hoáº·c scale lead khÃ´ng táº¡o cÆ¡ há»™i. Report xáº¥u giáº£ khiáº¿n team táº¯t campaign tá»‘t, Ä‘Ã¡nh giÃ¡ tháº¥p retargeting hoáº·c bá» qua call vÃ  Zalo.',
      },
      {
        type: 'paragraph',
        text: 'Nguy hiá»ƒm náº±m á»Ÿ cáº£ hai phÃ­a: tÆ°á»Ÿng tá»‘t khi khÃ´ng tá»‘t vÃ  tÆ°á»Ÿng xáº¥u khi kÃªnh váº«n táº¡o giÃ¡ trá»‹.',
      },
      { type: 'visual', variant: 'bad-signal-optimization-loop' },
      { type: 'heading', text: 'Memo 07 â€” CÃ¡c ná»n táº£ng khÃ´ng cáº§n khá»›p tuyá»‡t Ä‘á»‘i' },
      {
        type: 'paragraph',
        text: 'Meta, Google, TikTok, GA4 vÃ  CRM hiáº¿m khi khá»›p hoÃ n toÃ n do attribution window, view-through, time zone vÃ  thá»i Ä‘iá»ƒm ghi nháº­n khÃ¡c nhau. Journey Ä‘a thiáº¿t bá»‹, privacy limit vÃ  offline update tiáº¿p tá»¥c táº¡o lá»‡ch.',
      },
      {
        type: 'paragraph',
        text: 'Má»¥c tiÃªu khÃ´ng pháº£i Ã©p má»i dashboard thÃ nh cÃ¹ng má»™t sá»‘. Team cáº§n biáº¿t tá»«ng há»‡ thá»‘ng Ä‘áº¿m gÃ¬, lá»‡ch á»Ÿ Ä‘Ã¢u, má»©c lá»‡ch cÃ³ há»£p lÃ½ khÃ´ng vÃ  nguá»“n nÃ o phÃ¹ há»£p vá»›i cÃ¢u há»i Ä‘ang cáº§n tráº£ lá»i.',
      },
      { type: 'heading', text: 'Memo 08 â€” Source of truth phá»¥ thuá»™c loáº¡i quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'Ads platform Ä‘á»c delivery, media signal vÃ  attributed conversion. GA4 Ä‘á»c onsite behavior, page path vÃ  traffic source. KhÃ´ng nguá»“n nÃ o tá»± Ä‘á»™ng lÃ  sá»± tháº­t náº¿u Ä‘áº§u vÃ o chÆ°a sáº¡ch.',
      },
      {
        type: 'paragraph',
        text: 'CRM phÃ¹ há»£p Ä‘á»ƒ Ä‘á»c owner, contacted, qualified, sales note, quote, meeting, won vÃ  lost. Finance hoáº·c order system tráº£ lá»i revenue, margin, refund, cancel vÃ  payback. Quyáº¿t Ä‘á»‹nh paid ads sÃ¢u cáº§n Ä‘á»‘i chiáº¿u cÃ¡c lá»›p nÃ y thay vÃ¬ thá» má»™t dashboard duy nháº¥t.',
      },
      { type: 'heading', text: 'Memo 09 â€” Tracking QA trÆ°á»›c khi scale' },
      {
        type: 'list',
        items: [
          'Lead chá»‰ báº¯n sau khi form submit thÃ nh cÃ´ng?',
          'CTA click cÃ³ bá»‹ tÃ­nh nháº§m thÃ nh Lead?',
          'Client vÃ  server event Ä‘Ã£ dedup?',
          'Reload thank-you page cÃ³ táº¡o conversion trÃ¹ng?',
          'UTM, source vÃ  campaign cÃ³ vÃ o CRM?',
          'Form data cÃ³ Ä‘á»§ Ä‘á»ƒ sales xá»­ lÃ½?',
          'Call, phone hoáº·c Zalo cÃ³ Ä‘Æ°á»£c ghi nháº­n?',
          'CRM cÃ³ contacted, qualified vÃ  lost reason?',
          'Dashboard Ä‘á»c Ä‘Æ°á»£c theo campaign vÃ  source?',
          'Ads report Ä‘Æ°á»£c Ä‘á»‘i chiáº¿u CRM vÃ  sales háº±ng tuáº§n?',
          'Micro signal vÃ  main conversion Ä‘Ã£ tÃ¡ch rÃµ?',
          'Page hoáº·c form sá»­a xong Ä‘Ã£ test láº¡i event?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Server-side tracking cÃ³ thá»ƒ tÄƒng Ä‘á»™ bá»n signal trong má»™t sá»‘ bá»‘i cáº£nh, nhÆ°ng khÃ´ng sá»­a Ä‘Æ°á»£c event definition sai. QA pháº£i diá»…n ra trÆ°á»›c scale, khÃ´ng pháº£i sau khi ngÃ¢n sÃ¡ch Ä‘Ã£ Ä‘i theo dá»¯ liá»‡u lá»—i.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads tracking QA checklist trÆ°á»›c khi scale.',
      },
      { type: 'heading', text: 'Memo 10 â€” Campaign â€œtháº¯ng giáº£â€ vÃ¬ Lead báº¯n quÃ¡ sá»›m' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign áº©n danh bÃ¡o nhiá»u Lead vÃ  CPL Ä‘áº¹p nÃªn team chuáº©n bá»‹ tÄƒng ngÃ¢n sÃ¡ch. Khi kiá»ƒm láº¡i, event Lead báº¯n ngay lÃºc ngÆ°á»i dÃ¹ng má»Ÿ form. Nhiá»u ngÆ°á»i chÆ°a submit, CRM khÃ´ng nháº­n Ä‘á»§ record vÃ  sales khÃ´ng tháº¥y cÆ¡ há»™i tÆ°Æ¡ng á»©ng.',
      },
      {
        type: 'paragraph',
        text: 'Sau khi sá»­a, Lead chá»‰ tÃ­nh á»Ÿ submit thÃ nh cÃ´ng, UTM vÃ o CRM vÃ  sales cáº­p nháº­t quality. CPL cÃ³ thá»ƒ cao hÆ¡n nhÆ°ng quyáº¿t Ä‘á»‹nh Ä‘Ã¡ng tin hÆ¡n. Tracking Ä‘Ãºng Ä‘Ã´i khi lÃ m report â€œxáº¥uâ€ Ä‘i.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign CPL Ä‘áº¹p nhÆ°ng event Lead báº¯n sai thá»i Ä‘iá»ƒm nÃªn platform há»c sai.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i nhÃ¬n tracking nhÆ° viá»‡c ká»¹ thuáº­t: gáº¯n pixel, tag rá»“i kiá»ƒm event cÃ³ báº¯n. CÃ ng lÃ m, tÃ´i cÃ ng tháº¥y tracking lÃ  cÃ¡ch ads há»c vÃ  cÃ¡ch team ra quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Signal sai táº¡o campaign tháº¯ng giáº£; máº¥t source lÃ m sales khÃ´ng pháº£n há»“i Ä‘Æ°á»£c nguá»“n; thiáº¿u CRM khiáº¿n hai team tranh luáº­n báº±ng cáº£m giÃ¡c; event trÃ¹ng lÃ m founder tin ads hiá»‡u quáº£ hÆ¡n tháº­t. Lead nÃ´ng kÃ©o tiá»n vá» ngÆ°á»i dá»… submit, chÆ°a cháº¯c dá»… mua.',
      },
      {
        type: 'paragraph',
        text: 'Tracking sáº¡ch khÃ´ng lÃ m ads tá»± tháº¯ng. NhÆ°ng tracking sai khiáº¿n team ráº¥t dá»… thua mÃ  khÃ´ng biáº¿t Ä‘iá»ƒm sai náº±m á»Ÿ Ä‘Ã¢u.',
      },
      { type: 'heading', text: 'Káº¿t â€” Tracking lÃ  há»‡ thá»‘ng signal cá»§a paid ads' },
      {
        type: 'paragraph',
        text: 'Platform há»c tá»« signal Ä‘Æ°á»£c gá»­i vá», khÃ´ng tá»« má»¥c tiÃªu kinh doanh trong Ä‘áº§u founder. Event sai, thiáº¿u, trÃ¹ng hoáº·c quÃ¡ nÃ´ng sáº½ lÃ m report lá»‡ch vÃ  ngÃ¢n sÃ¡ch Ä‘i sai. Muá»‘n scale, team cáº§n event Ä‘Ãºng thá»i Ä‘iá»ƒm, micro vÃ  main conversion rÃµ, source vÃ o CRM, dedup Ä‘Ãºng, sales status cÃ³ feedback vÃ  cÃ¡c nguá»“n Ä‘Æ°á»£c Ä‘á»‘i chiáº¿u theo nhá»‹p.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang chuáº©n bá»‹ tÄƒng ngÃ¢n sÃ¡ch ads, Ä‘á»«ng chá»‰ há»i â€œcampaign nÃ o Ä‘ang tháº¯ng?â€. HÃ£y há»i trÆ°á»›c: event Lead cÃ³ tháº­t sá»± lÃ  lead khÃ´ng, source cÃ³ vÃ o CRM khÃ´ng, sales cÃ³ cáº­p nháº­t quality khÃ´ng vÃ  platform Ä‘ang há»c tá»« signal nÃ o?',
  },
  {
    title: 'Landing page yáº¿u lÃ m ads Ä‘á»‘t tiá»n nhÆ° tháº¿ nÃ o?',
    slug: 'landing-page-yeu-lam-ads-dot-tien-nhu-the-nao',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-outdoor-demo-01.jpg",
                "alt": "Outdoor exhibition booth activity",
                "caption": "Exhibition booth activity",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Ads cÃ³ thá»ƒ kÃ©o Ä‘Æ°á»£c click, nhÆ°ng landing page má»›i lÃ  nÆ¡i lá»i há»©a tá»« quáº£ng cÃ¡o bá»‹ kiá»ƒm tra. Náº¿u page khÃ´ng khá»›p message, thiáº¿u proof, CTA má», form khÃ´ng lá»c Ä‘Æ°á»£c nhu cáº§u, mobile khÃ³ dÃ¹ng hoáº·c tracking sai, ngÃ¢n sÃ¡ch ads sáº½ rÃ² tá»«ng lá»›p trÆ°á»›c khi thÃ nh lead cháº¥t lÆ°á»£ng. Landing page yáº¿u khÃ´ng chá»‰ lÃ m conversion tháº¥p; nÃ³ cÃ²n lÃ m team Ä‘á»c sai hiá»‡u quáº£ ads.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Ads kÃ©o Ä‘Æ°á»£c click, nhÆ°ng page lÃ m rÆ¡i khÃ¡ch' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign cÃ³ CTR á»•n, CPC khÃ´ng quÃ¡ cao vÃ  ads manager nhÃ¬n khÃ´ng tá»‡. NhÆ°ng nhiá»u ngÆ°á»i vÃ o page rá»“i thoÃ¡t, CTA Ã­t Ä‘Æ°á»£c báº¥m, form submit tháº¥p vÃ  lead Ä‘á»ƒ láº¡i quÃ¡ Ã­t thÃ´ng tin.',
      },
      {
        type: 'paragraph',
        text: 'Sales gá»i láº¡i nhÆ°ng khÃ´ng hiá»ƒu khÃ¡ch cáº§n gÃ¬. CÃ³ ngÆ°á»i nÃ³i â€œtÃ´i tÆ°á»Ÿng cÃ¡i nÃ y khÃ¡câ€. Founder nhÃ¬n traffic rá»“i há»i vÃ¬ sao chÆ°a cÃ³ cÆ¡ há»™i tháº­t. Váº¥n Ä‘á» cÃ³ thá»ƒ náº±m á»Ÿ chá»— page chÆ°a chuyá»ƒn Ä‘Æ°á»£c sá»± chÃº Ã½ thÃ nh niá»m tin, hÃ nh Ä‘á»™ng vÃ  dá»¯ liá»‡u há»¯u Ã­ch cho sales.',
      },
      {
        type: 'paragraph',
        text: 'Page khÃ´ng pháº£i nguyÃªn nhÃ¢n duy nháº¥t: offer, creative, targeting, tracking hoáº·c sales Ä‘á»u cÃ³ thá»ƒ yáº¿u. NhÆ°ng bá» page khá»i audit lÃ  bá» qua nÆ¡i lá»i há»©a cá»§a ads bá»‹ kiá»ƒm tra.',
      },
      { type: 'heading', text: 'Memo 01 â€” Landing page lÃ  nÆ¡i lá»i há»©a tá»« ads bá»‹ kiá»ƒm tra' },
      {
        type: 'paragraph',
        text: 'Ads táº¡o ká»³ vá»ng; landing page xÃ¡c nháº­n hoáº·c phÃ¡ vá»¡ ká»³ vá»ng Ä‘Ã³. Náº¿u creative nÃ³i â€œsÆ¡n nhÃ  khÃ´ng mÃ¹iâ€, â€œgiáº£i phÃ¡p cho nhÃ  ven biá»ƒnâ€, â€œCRM Ä‘Æ¡n giáº£n cho team salesâ€ hay â€œaudit tracking trÆ°á»›c khi scale adsâ€, hero pháº£i tiáº¿p tá»¥c Ä‘Ãºng váº¥n Ä‘á», proof pháº£i chá»©ng minh Ä‘Ãºng lá»i há»©a vÃ  CTA pháº£i dáº«n tá»›i má»™t bÆ°á»›c há»£p lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i báº¥m quáº£ng cÃ¡o cáº§n tháº¥y mÃ¬nh Ä‘ang á»Ÿ Ä‘Ãºng nÆ¡i vÃ  bÆ°á»›c tiáº¿p theo Ä‘Ãºng ká»³ vá»ng. Ads nÃ³i má»™t ná»—i Ä‘au cá»¥ thá»ƒ nhÆ°ng page má»Ÿ báº±ng lá»‹ch sá»­ cÃ´ng ty, danh sÃ¡ch dá»‹ch vá»¥ chung hoáº·c tagline mÆ¡ há»“ sáº½ lÃ m Ä‘á»©t máº¡ch.',
      },
      {
        type: 'paragraph',
        text: 'Message match khÃ´ng pháº£i chuyá»‡n cÃ¢u chá»¯ Ä‘áº¹p. NÃ³ giá»¯ cÃº click khÃ´ng rÆ¡i khi ngÆ°á»i dÃ¹ng chuyá»ƒn tá»« Meta Ads hoáº·c Google Ads sang website.',
      },
      { type: 'visual', variant: 'ad-promise-to-landing-action' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video teardown má»™t landing page lÃ m ads rÃ² tiá»n sau cÃº click.',
      },
      { type: 'heading', text: 'Memo 02 â€” Landing page yáº¿u thÆ°á»ng khÃ´ng cháº¿t á»Ÿ má»™t lá»—i lá»›n' },
      {
        type: 'paragraph',
        text: 'Nhiá»u page khÃ´ng tá»‡ Ä‘áº¿n má»©c nhÃ¬n qua lÃ  tháº¥y sai. Tiá»n rÃ² qua nhiá»u khe nhá»: hero chung chung nÃªn khÃ¡ch khÃ´ng biáº¿t page dÃ nh cho ai; message lá»‡ch angle ads; proof lÃ  lá»i tá»± nháº­n thay vÃ¬ case, demo, hÃ¬nh tháº­t hoáº·c quy trÃ¬nh Ä‘á»§ tin; CTA â€œLiÃªn há»‡â€ khÃ´ng nÃ³i ngÆ°á»i dÃ¹ng sáº½ nháº­n gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Form chá»‰ há»i tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i nÃªn sales khÃ´ng phÃ¢n loáº¡i Ä‘Æ°á»£c nhu cáº§u. TrÃªn mobile, section Ä‘áº§u dÃ i, CTA á»Ÿ xa vÃ  form khÃ³ Ä‘iá»n. Tracking chá»‰ ghi submit nÃªn khÃ´ng biáº¿t khÃ¡ch Ä‘Ã£ click CTA, bá» form hay gáº·p lá»—i. Thank-you state mÆ¡ há»“, cÃ²n CRM nháº­n lead thiáº¿u source vÃ  angle. Tá»«ng khe nhá» cá»™ng láº¡i lÃ m ngÃ¢n sÃ¡ch rÃ² tá»« visit tá»›i qualified lead.',
      },
      { type: 'heading', text: 'Memo 03 â€” Page Ä‘áº¹p chÆ°a cháº¯c lÃ  page chá»‹u Ä‘Æ°á»£c ads' },
      {
        type: 'paragraph',
        text: 'Má»™t page cÃ³ thá»ƒ chá»‰n chu nhÆ°ng váº«n yáº¿u cho paid traffic: nÃ³i nhiá»u vá» doanh nghiá»‡p, offer má», thiáº¿u Ä‘iá»ƒm ra quyáº¿t Ä‘á»‹nh, proof lá»‡ch promise, CTA quÃ¡ xa, mobile cháº­m vÃ  event chÆ°a rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Paid traffic thÆ°á»ng Ã­t kiÃªn nháº«n hÆ¡n ngÆ°á»i Ä‘Ã£ chá»§ Ä‘á»™ng tÃ¬m brand. Trong vÃ i giÃ¢y Ä‘áº§u, há» cáº§n biáº¿t Ä‘Ã¢y cÃ³ Ä‘Ãºng váº¥n Ä‘á», hÆ°á»›ng giáº£i quyáº¿t cÃ³ Ä‘Ã¡ng tin vÃ  bÆ°á»›c tiáº¿p theo lÃ  gÃ¬. Page cho ads pháº£i Ä‘á»§ rÃµ, Ä‘á»§ tin, Ä‘á»§ nhanh vÃ  Ä‘á»§ Ä‘o Ä‘Æ°á»£c; tháº©m má»¹ chá»‰ lÃ  má»™t lá»›p.',
      },
      { type: 'visual', variant: 'beautiful-page-vs-ad-ready-page' },
      { type: 'heading', text: 'Memo 04 â€” Form vá»«a chuyá»ƒn Ä‘á»•i vá»«a lá»c cháº¥t lÆ°á»£ng' },
      {
        type: 'paragraph',
        text: 'Form khÃ´ng chá»‰ láº¥y tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i. NÃ³ quyáº¿t Ä‘á»‹nh má»™t pháº§n lead quality. Form quÃ¡ ngáº¯n cÃ³ thá»ƒ táº¡o nhiá»u submit hÆ¡n nhÆ°ng sales nháº­n Ã­t context, khÃ³ Æ°u tiÃªn vÃ  gáº·p nhiá»u ngÆ°á»i chá»‰ tÃ² mÃ². Form quÃ¡ dÃ i cÃ³ thá»ƒ giáº£m completion nhÆ°ng lÃ m nhu cáº§u rÃµ hÆ¡n. KhÃ´ng cÃ³ Ä‘á»™ dÃ i Ä‘Ãºng cho má»i offer.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y há»i sales cáº§n gÃ¬ Ä‘á»ƒ xá»­ lÃ½ lead: nhu cáº§u chÃ­nh, khu vá»±c, thá»i Ä‘iá»ƒm, quy mÃ´, váº¥n Ä‘á» Ä‘ang gáº·p, kÃªnh tÆ° váº¥n vÃ  ngÃ¢n sÃ¡ch tÆ°Æ¡ng Ä‘á»‘i náº¿u phÃ¹ há»£p. Chá»‰ giá»¯ field giÃºp ra quyáº¿t Ä‘á»‹nh; Ä‘á»«ng biáº¿n form thÃ nh kháº£o sÃ¡t ná»™i bá»™.',
      },
      {
        type: 'paragraph',
        text: 'Form tá»‘t giÃºp biáº¿t lead nÃ o cáº§n xá»­ lÃ½ trÆ°á»›c vÃ  follow-up nÃªn báº¯t Ä‘áº§u tá»« Ä‘Ã¢u.',
      },
      { type: 'heading', text: 'Memo 05 â€” Landing page yáº¿u lÃ m sales cÅ©ng yáº¿u theo' },
      {
        type: 'paragraph',
        text: 'Page khÃ´ng nÃ³i rÃµ offer thÃ¬ sales pháº£i giáº£i thÃ­ch láº¡i tá»« Ä‘áº§u. Form khÃ´ng há»i nhu cáº§u thÃ¬ sales há»i láº¡i quÃ¡ nhiá»u. CTA táº¡o ká»³ vá»ng sai thÃ¬ sales pháº£i xá»­ lÃ½ tháº¥t vá»ng. Proof yáº¿u thÃ¬ sales bÃ¹ niá»m tin báº±ng lá»i nÃ³i. Thank-you mÆ¡ há»“ thÃ¬ khÃ¡ch khÃ´ng biáº¿t ai liÃªn há»‡ vÃ  khi nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Sales cÃ³ thá»ƒ bá»‹ chÃª follow-up kÃ©m trong khi page bÃ n giao record thiáº¿u context. Landing page lÃ  cÃ¢y cáº§u giá»¯a ads vÃ  sales; cáº§u yáº¿u khiáº¿n cáº£ hai bÃªn cÃ¹ng máº¥t thá»i gian.',
      },
      { type: 'heading', text: 'Memo 06 â€” Äá»c page báº±ng cáº£ sá»‘ lÆ°á»£ng vÃ  cháº¥t lÆ°á»£ng' },
      {
        type: 'paragraph',
        text: 'Conversion rate, CTA click, form submit vÃ  CPL chá»‰ lÃ  má»™t pháº§n. Team cÃ²n pháº£i Ä‘á»c source nÃ o táº¡o form, completion rate, mobile so vá»›i desktop, contacted rate, qualified rate, next action, sales note vÃ  lost reason.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y xem field nÃ o giÃºp lá»c tá»‘t hÆ¡n, section nÃ o táº¡o hiá»ƒu láº§m vÃ  angle nÃ o kÃ©o nhiá»u submit nhÆ°ng Ã­t qualified lead. Má»™t page táº¡o nhiá»u lead sai ká»³ vá»ng chÆ°a cháº¯c tá»‘t. Má»™t page táº¡o Ã­t lead hÆ¡n nhÆ°ng sales liÃªn há»‡ Ä‘Æ°á»£c vÃ  Ä‘i tiáº¿p tá»‘t hÆ¡n cÃ³ thá»ƒ Ä‘Ã¡ng giá»¯.',
      },
      { type: 'visual', variant: 'landing-page-signal-after-submit' },
      { type: 'heading', text: 'Memo 07 â€” Nhá»¯ng cÃ¢u há»i trÆ°á»›c khi Ä‘á»• thÃªm tiá»n vÃ o ads' },
      {
        type: 'list',
        items: [
          'Ads promise vÃ  landing hero cÃ³ khá»›p, offer cÃ³ hiá»ƒu Ä‘Æ°á»£c trong 5 giÃ¢y Ä‘áº§u?',
          'Proof cÃ³ chá»©ng minh Ä‘Ãºng lá»i há»©a vÃ  Ä‘Ãºng ná»—i lo cá»§a traffic nÃ y?',
          'CTA cÃ³ nÃ³i rÃµ ngÆ°á»i dÃ¹ng nháº­n gÃ¬ vÃ  chuyá»‡n gÃ¬ xáº£y ra sau khi báº¥m?',
          'Form cÃ³ Ä‘á»§ dá»¯ liá»‡u Ä‘á»ƒ sales phÃ¢n loáº¡i, Æ°u tiÃªn vÃ  follow-up?',
          'Mobile cÃ³ dá»… Ä‘á»c, CTA dá»… cháº¡m vÃ  form dá»… hoÃ n thÃ nh?',
          'CTA click, form start, form submit vÃ  lá»—i form Ä‘Ã£ Ä‘Æ°á»£c tracking?',
          'Source, campaign, creative hoáº·c angle cÃ³ Ä‘i vÃ o CRM?',
          'Sales cÃ³ biáº¿t lead Ä‘áº¿n tá»« offer nÃ o vÃ  cáº§n má»Ÿ Ä‘áº§u ra sao?',
          'Thank-you state cÃ³ nÃ³i rÃµ bÆ°á»›c tiáº¿p theo vÃ  thá»i gian pháº£n há»“i?',
          'CÃ³ section nÃ o lÃ m khÃ¡ch hiá»ƒu sai hoáº·c rÆ¡i khá»i máº¡ch mua?',
        ],
      },
      {
        type: 'paragraph',
        text: 'TÄƒng ngÃ¢n sÃ¡ch khi chÆ°a tráº£ lá»i Ä‘Æ°á»£c cÃ¡c cÃ¢u nÃ y giá»‘ng nhÆ° Ä‘á»• nÆ°á»›c máº¡nh hÆ¡n vÃ o má»™t cÃ¡i phá»…u Ä‘ang thá»§ng. Checklist khÃ´ng Ä‘áº£m báº£o campaign tháº¯ng, nhÆ°ng giÃºp team biáº¿t Ä‘ang tÄƒng Ã¡p lá»±c vÃ o há»‡ thá»‘ng nÃ o.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads landing page audit checklist.',
      },
      { type: 'heading', text: 'Memo 08 â€” Cold traffic khÃ¡c warm traffic' },
      {
        type: 'paragraph',
        text: 'Cold traffic chÆ°a biáº¿t doanh nghiá»‡p nÃªn cáº§n hiá»ƒu váº¥n Ä‘á» nhanh, lá»i há»©a rÃµ, proof nhiá»u hÆ¡n vÃ  CTA Ã­t rá»§i ro hÆ¡n. Case, demo, quy trÃ¬nh hoáº·c FAQ cÃ³ thá»ƒ lÃ m pháº§n viá»‡c mÃ  nháº­n diá»‡n thÆ°Æ¡ng hiá»‡u chÆ°a lÃ m Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Warm traffic Ä‘Ã£ cÃ³ bá»‘i cáº£nh nÃªn cÃ³ thá»ƒ Ä‘i tháº³ng hÆ¡n vÃ o offer, so sÃ¡nh, giÃ¡ trá»‹ cá»¥ thá»ƒ vÃ  CTA sÃ¢u nhÆ° bÃ¡o giÃ¡, tÆ° váº¥n hoáº·c demo. DÃ¹ng má»™t page cho má»i stage dá»… lÃ m cold traffic thiáº¿u tin cÃ²n warm traffic pháº£i Ä‘á»c láº¡i Ä‘iá»u há» Ä‘Ã£ biáº¿t. Paid ads sÃ¢u pháº£i há»i page nÃ y phá»¥c vá»¥ traffic á»Ÿ stage nÃ o.',
      },
      { type: 'heading', text: 'Memo 09 â€” Creative tá»‘t nhÆ°ng page lÃ m rÆ¡i lead' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign áº©n danh cÃ³ creative Ä‘Ã¡nh Ä‘Ãºng ná»—i Ä‘au, CTR vÃ  CPC á»•n, comment láº«n inbox Ä‘á»u cÃ³ tÃ­n hiá»‡u nhÆ°ng form submit tháº¥p. Audit cho tháº¥y hero nÃ³i chung vá» cÃ´ng ty, proof khÃ´ng liÃªn quan Ä‘áº¿n angle ads, CTA chá»‰ ghi â€œLiÃªn há»‡â€, form chá»‰ há»i tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i, cÃ²n section Ä‘áº§u trÃªn mobile quÃ¡ dÃ i.',
      },
      {
        type: 'paragraph',
        text: 'Team cÅ©ng chÆ°a tracking form start; sales nháº­n lead nhÆ°ng khÃ´ng biáº¿t khÃ¡ch Ä‘áº¿n tá»« angle nÃ o. HÆ°á»›ng sá»­a lÃ  bÃ¡m hero vÃ o promise cá»§a ads, thÃªm case liÃªn quan, lÃ m CTA cá»¥ thá»ƒ hÆ¡n, há»i nhu cáº§u chÃ­nh trong form, tÃ¡ch event CTA/form vÃ  Ä‘Æ°a angle vÃ o CRM.',
      },
      {
        type: 'paragraph',
        text: 'Sá»­a page khÃ´ng Ä‘áº£m báº£o ads tháº¯ng. NhÆ°ng khÃ´ng pháº£i lÃºc nÃ o cÅ©ng cáº§n lÃ m láº¡i campaign; Ä‘Ã´i khi page chÆ°a chá»‹u Ä‘Æ°á»£c lá»i há»©a mÃ  creative Ä‘Ã£ kÃ©o vÃ o.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign cÃ³ CTR/CPC á»•n nhÆ°ng landing page message khÃ´ng khá»›p nÃªn lead quality tháº¥p.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng dá»… nhÃ¬n váº¥n Ä‘á» trong ads manager: campaign nÃ o, creative nÃ o, CPL bao nhiÃªu, CTR ra sao. CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra ráº¥t nhiá»u tiá»n ads khÃ´ng máº¥t trong ads manager. NÃ³ máº¥t sau cÃº click.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ máº¥t á»Ÿ hero khÃ´ng rÃµ, proof thiáº¿u tin, CTA mÆ¡ há»“, form khÃ´ng lá»c nhu cáº§u, mobile khÃ³ dÃ¹ng, tracking khÃ´ng chá»‰ ra Ä‘iá»ƒm rÆ¡i vÃ  sales nháº­n lead thiáº¿u context. Paid ads sÃ¢u khÃ´ng thá»ƒ tÃ¡ch landing page khá»i campaign. Click chá»‰ lÃ  lá»i má»i; page lÃ  nÆ¡i ngÆ°á»i dÃ¹ng quyáº¿t Ä‘á»‹nh cÃ³ tin Ä‘á»§ Ä‘á»ƒ Ä‘i tiáº¿p hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Landing page khÃ´ng pháº£i phá»¥ kiá»‡n cá»§a ads. NÃ³ lÃ  má»™t pháº§n cá»§a há»‡ thá»‘ng chuyá»ƒn Ä‘á»•i.',
      },
      { type: 'heading', text: 'Káº¿t â€” Kiá»ƒm page nhÆ° má»™t pháº§n cá»§a funnel' },
      {
        type: 'paragraph',
        text: 'Landing page yáº¿u lÃ m rÆ¡i ngÆ°á»i dÃ¹ng sau click, phÃ¡ lá»i há»©a tá»« creative, thiáº¿u proof, lÃ m CTA má» vÃ  bÃ n giao thiáº¿u context. Muá»‘n scale, hÃ£y kiá»ƒm page cÃ¹ng offer, tracking, CRM vÃ  sales follow-up Ä‘á»ƒ biáº¿t tiá»n Ä‘ang rÃ² á»Ÿ lá»›p nÃ o.',
      },
    ],
    cta: 'Náº¿u ads cá»§a báº¡n cÃ³ click nhÆ°ng lead khÃ´ng tá»‘t hoáº·c conversion tháº¥p, Ä‘á»«ng vá»™i káº¿t luáº­n creative, target hay thuáº­t toÃ¡n cÃ³ váº¥n Ä‘á». HÃ£y má»Ÿ landing page ra vÃ  há»i: page nÃ y cÃ³ giá»¯ Ä‘Ãºng lá»i há»©a tá»« ads, Ä‘á»§ proof Ä‘á»ƒ khÃ¡ch tin, Ä‘á»§ CTA Ä‘á»ƒ hÃ nh Ä‘á»™ng, Ä‘á»§ form Ä‘á»ƒ lá»c lead vÃ  Ä‘á»§ data Ä‘á»ƒ sales follow-up khÃ´ng?',
  },
  {
    title: 'Offer yáº¿u lÃ m ads Ä‘áº¯t nhÆ° tháº¿ nÃ o?',
    slug: 'offer-yeu-lam-ads-dat-nhu-the-nao',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-operations-warehouse-boxes-01.jpg",
                "alt": "Person beside stacked product boxes in a work area",
                "caption": "Operations and product stock moment",
                "width": 2048,
                "height": 1171,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Ads khÃ´ng chá»‰ Ä‘áº¯t vÃ¬ target sai, creative yáº¿u hay landing page kÃ©m. Nhiá»u khi ads Ä‘áº¯t vÃ¬ offer chÆ°a Ä‘á»§ rÃµ, chÆ°a Ä‘á»§ tin, chÆ°a Ä‘Ãºng nhu cáº§u hoáº·c chÆ°a cho khÃ¡ch má»™t lÃ½ do Ä‘á»§ máº¡nh Ä‘á»ƒ hÃ nh Ä‘á»™ng. Offer yáº¿u lÃ m CTR tháº¥p hÆ¡n, conversion tháº¥p hÆ¡n, lead quality kÃ©m hÆ¡n, sales khÃ³ chá»‘t hÆ¡n vÃ  team dá»… tá»‘i Æ°u sai trong ads manager.',
    content: [
      { type: 'heading', text: 'Opening memo â€” KhÃ´ng pháº£i campaign nÃ o Ä‘áº¯t cÅ©ng do ads set sai' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign cháº¡y vÃ i ngÃ y. Creative khÃ´ng tá»‡, target khÃ´ng quÃ¡ sai, landing page dÃ¹ng Ä‘Æ°á»£c vÃ  tracking cÃ³ event. Ads manager bÃ¡o click, traffic cÃ¹ng vÃ i lead. NhÆ°ng CTR chÆ°a Ä‘á»§ tá»‘t, CPC khÃ´ng ráº», CPL cao, form submit Ã­t vÃ  ngÆ°á»i Ä‘iá»n form khÃ´ng máº·n mÃ .',
      },
      {
        type: 'paragraph',
        text: 'Sales pháº£i giáº£i thÃ­ch nhiá»u; khÃ¡ch há»i giÃ¡ rá»“i biáº¿n máº¥t. Founder nghi target, creative, agency hoáº·c thuáº­t toÃ¡n. NhÆ°ng cÃ²n má»™t cÃ¢u há»i khÃ¡c: offer cÃ³ Ä‘á»§ máº¡nh Ä‘á»ƒ thá»‹ trÆ°á»ng muá»‘n Ä‘i tiáº¿p khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Paid ads cÃ³ thá»ƒ Ä‘Æ°a offer ra thá»‹ trÆ°á»ng nhanh hÆ¡n. NÃ³ khÃ´ng thá»ƒ Ã©p thá»‹ trÆ°á»ng pháº£n há»“i tá»‘t vá»›i má»™t offer chÆ°a rÃµ, chÆ°a Ä‘á»§ tin hoáº·c chÆ°a Ä‘Ã¡ng hÃ nh Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Memo 01 â€” Offer khÃ´ng chá»‰ lÃ  giáº£m giÃ¡' },
      {
        type: 'paragraph',
        text: 'NÃ³i Ä‘áº¿n offer, nhiá»u team nghÄ© ngay tá»›i giáº£m giÃ¡, voucher, quÃ  táº·ng, mua má»™t táº·ng má»™t hoáº·c tÆ° váº¥n miá»…n phÃ­. ÄÃ¢y cÃ³ thá»ƒ lÃ  thÃ nh pháº§n cá»§a offer, nhÆ°ng khÃ´ng pháº£i toÃ n bá»™. Giáº£m giÃ¡ má»™t Ä‘á» nghá»‹ mÆ¡ há»“ chá»‰ lÃ m nÃ³ ráº» hÆ¡n, chÆ°a cháº¯c lÃ m nÃ³ phÃ¹ há»£p hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Offer cáº§n lÃ m rÃµ bÃ¡n cho ai, giáº£i quyáº¿t váº¥n Ä‘á» gÃ¬, lá»i há»©a, proof, bÆ°á»›c tiáº¿p theo, khÃ¡ch nháº­n gÃ¬, rá»§i ro Ä‘Æ°á»£c giáº£m ra sao vÃ  phÃ¹ há»£p stage nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Offer máº¡nh khÃ´ng nháº¥t thiáº¿t ráº» nháº¥t. NÃ³ khiáº¿n Ä‘Ãºng ngÆ°á»i nghÄ©: â€œÄ‘Ã¢y lÃ  váº¥n Ä‘á» cá»§a mÃ¬nh, Ä‘Ã¡ng tÃ¬m hiá»ƒu tiáº¿p vÃ  bÆ°á»›c Ä‘áº§u khÃ´ng quÃ¡ rá»§i roâ€. Offer yáº¿u thÆ°á»ng thiáº¿u lÃ½ do rÃµ Ä‘á»ƒ hÃ nh Ä‘á»™ng, khÃ´ng chá»‰ thiáº¿u Æ°u Ä‘Ã£i.',
      },
      { type: 'visual', variant: 'offer-beyond-discount' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video teardown má»™t offer yáº¿u khiáº¿n ads kÃ©o click nhÆ°ng lead quality tháº¥p.',
      },
      { type: 'heading', text: 'Memo 02 â€” Offer yáº¿u lÃ m creative khÃ³ tháº¯ng' },
      {
        type: 'paragraph',
        text: 'Creative cáº§n lá»i há»©a hoáº·c gÃ³c tiáº¿p cáº­n Ä‘á»§ sáº¯c. Khi offer má», hook khÃ´ng dáº«n tá»›i hÃ nh Ä‘á»™ng, claim pháº£i gá»“ng Ä‘á»ƒ kÃ©o click, cÃ¡c máº«u na nÃ¡ nhau vÃ  team chá»‰ cÃ²n Ä‘á»•i layout, mÃ u, caption.',
      },
      {
        type: 'paragraph',
        text: 'â€œDá»‹ch vá»¥ marketing cho doanh nghiá»‡pâ€ khiáº¿n creative khÃ³ nÃ³i Ä‘iá»u cá»¥ thá»ƒ. â€œAudit tracking vÃ  lead flow trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch adsâ€ cho biáº¿t váº¥n Ä‘á», thá»i Ä‘iá»ƒm vÃ  bÆ°á»›c tiáº¿p theo rÃµ hÆ¡n. Creative khÃ´ng thá»ƒ sáº¯c hÆ¡n offer vÃ´ háº¡n; náº¿u offer mÆ¡ há»“, pháº§n lá»›n cÃ´ng viá»‡c chá»‰ lÃ  lÃ m cÃ¢u chá»¯ nghe háº¥p dáº«n.',
      },
      { type: 'heading', text: 'Memo 03 â€” Offer yáº¿u lÃ m landing page giáº£i thÃ­ch quÃ¡ nhiá»u' },
      {
        type: 'paragraph',
        text: 'Landing page lÃ m rÃµ vÃ  chá»©ng minh offer, khÃ´ng cá»©u má»™t offer mÆ¡ há»“. Khi offer yáº¿u, hero chung chung, problem section khÃ´ng cháº¡m, proof lá»‡ch, CTA má», FAQ dÃ i vÃ  form khÃ´ng biáº¿t lá»c dá»¯ liá»‡u nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Page cÃ ng dÃ i chÆ°a cháº¯c cÃ ng thuyáº¿t phá»¥c. Náº¿u offer chÆ°a rÃµ, page dÃ i chá»‰ trÃ¬nh bÃ y sá»± mÆ¡ há»“ báº±ng nhiá»u section hÆ¡n. Landing page khÃ´ng thay Ä‘Æ°á»£c offer; nÃ³ phÃ³ng Ä‘áº¡i Ä‘á»™ rÃµ hoáº·c Ä‘á»™ mÆ¡ há»“ Ä‘ang cÃ³.',
      },
      { type: 'visual', variant: 'weak-offer-leak-funnel' },
      { type: 'heading', text: 'Memo 04 â€” Offer yáº¿u cÃ³ thá»ƒ táº¡o nhiá»u lead sai' },
      {
        type: 'paragraph',
        text: 'Offer yáº¿u khÃ´ng chá»‰ lÃ m Ã­t lead. Offer quÃ¡ rá»™ng kÃ©o ngÆ°á»i tÃ² mÃ²; quÃ¡ ráº» kÃ©o ngÆ°á»i chá»‰ sÄƒn giÃ¡; miá»…n phÃ­ nhÆ°ng khÃ´ng lá»c nhu cáº§u táº¡o nhiá»u cuá»™c gá»i vÃ´ Ã­ch. Offer há»©a quÃ¡ máº¡nh lÃ m khÃ¡ch ká»³ vá»ng sai, cÃ²n offer khÃ´ng nÃ³i ai phÃ¹ há»£p khiáº¿n lead lá»‡ch tá»‡p.',
      },
      {
        type: 'paragraph',
        text: 'Khi bÆ°á»›c tiáº¿p theo khÃ´ng rÃµ, lead nguá»™i nhanh. Khi proof yáº¿u, sales pháº£i thuyáº¿t phá»¥c láº¡i tá»« Ä‘áº§u. Lead quality báº¯t Ä‘áº§u tá»« offer, khÃ´ng pháº£i Ä‘á»£i tá»›i lÃºc sales gáº¯n status má»›i xuáº¥t hiá»‡n.',
      },
      { type: 'heading', text: 'Memo 05 â€” Sales Ä‘ang gÃ¡nh pháº§n marketing chÆ°a lÃ m rÃµ' },
      {
        type: 'paragraph',
        text: 'Offer khÃ´ng rÃµ buá»™c sales giáº£i thÃ­ch sáº£n pháº©m tá»« Ä‘áº§u, kiá»ƒm láº¡i khÃ¡ch cÃ³ phÃ¹ há»£p, sá»­a ká»³ vá»ng sai, chá»©ng minh Ä‘iá»u page chÆ°a chá»©ng minh vÃ  gá»i nhiá»u ngÆ°á»i thiáº¿u Ã½ Ä‘á»‹nh tháº­t. Team cÃ³ thá»ƒ káº¿t luáº­n sales yáº¿u trong khi Ä‘áº§u vÃ o chÆ°a cho há» má»™t cuá»™c trÃ² chuyá»‡n Ä‘á»§ context.',
      },
      {
        type: 'paragraph',
        text: 'Offer rÃµ hÆ¡n giÃºp khÃ¡ch biáº¿t mÃ¬nh Ä‘ang há»i gÃ¬, hiá»ƒu bÆ°á»›c tiáº¿p theo vÃ  Ä‘Ã£ nhÃ¬n tháº¥y má»™t pháº§n proof. Form thu nhu cáº§u chÃ­nh Ä‘á»ƒ sales chuáº©n bá»‹ objection vÃ  follow-up Ä‘Ãºng angle. Offer tá»‘t khÃ´ng chá»‰ giÃºp ads; nÃ³ giÃºp sales bá»›t bÃ¡n trong bÃ³ng tá»‘i.',
      },
      { type: 'heading', text: 'Memo 06 â€” SÃ¡u cÃ¢u há»i lÃ m rÃµ offer' },
      {
        type: 'list',
        items: [
          'Ai nÃªn quan tÃ¢m? KhÃ´ng pháº£i ai cÅ©ng lÃ  khÃ¡ch vÃ  audience pháº£i Ä‘á»§ rÃµ Ä‘á»ƒ creative gá»i Ä‘Ãºng ngÆ°á»i.',
          'Há» Ä‘ang cÃ³ váº¥n Ä‘á» gÃ¬? Váº¥n Ä‘á» cáº§n Ä‘á»§ cá»¥ thá»ƒ Ä‘á»ƒ ads vÃ  landing page cÃ¹ng bÃ¡m vÃ o.',
          'MÃ¬nh giÃºp há» Ä‘áº¡t Ä‘iá»u gÃ¬? Lá»i há»©a pháº£i rÃµ nhÆ°ng khÃ´ng cam káº¿t quÃ¡ Ä‘Ã .',
          'VÃ¬ sao há» nÃªn tin? DÃ¹ng case, demo, review, quy trÃ¬nh, chuyÃªn mÃ´n hoáº·c hÃ¬nh áº£nh tháº­t.',
          'Há» cáº§n lÃ m gÃ¬ tiáº¿p theo? TÆ° váº¥n, audit, nháº­n máº«u, xem demo, bÃ¡o giÃ¡ hay nháº¯n Zalo.',
          'BÆ°á»›c tiáº¿p theo cÃ³ rá»§i ro gÃ¬ vÃ  Ä‘Æ°á»£c giáº£m ra sao? LÃ m nÃ³ Ä‘á»§ nháº¹, minh báº¡ch vÃ  Ä‘Ã¡ng thá»­.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Náº¿u offer khÃ´ng tráº£ lá»i Ä‘Æ°á»£c sÃ¡u cÃ¢u nÃ y, ads Ä‘ang kÃ©o khÃ¡ch vÃ o má»™t hÃ nh trÃ¬nh mÆ¡ há»“.',
      },
      { type: 'visual', variant: 'offer-readiness-six-questions' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads offer readiness checklist.',
      },
      { type: 'heading', text: 'Memo 07 â€” Cold, warm vÃ  retargeting cáº§n offer khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Cold traffic chÆ°a biáº¿t thÆ°Æ¡ng hiá»‡u, chÆ°a tin vÃ  cÃ³ thá»ƒ chÆ°a hiá»ƒu giáº£i phÃ¡p. Há» cáº§n váº¥n Ä‘á» rÃµ, proof dá»… hiá»ƒu vÃ  CTA nháº¹ nhÆ° xem demo, nháº­n checklist, audit, sample hoáº·c solution kit. ÄÃ²i bÃ¡o giÃ¡ hay Ä‘áº·t lá»‹ch quÃ¡ sá»›m cÃ³ thá»ƒ táº¡o cáº£m giÃ¡c vá»™i.',
      },
      {
        type: 'paragraph',
        text: 'Warm traffic Ä‘Ã£ cÃ³ bá»‘i cáº£nh nÃªn cáº§n case, so sÃ¡nh, bÃ¡o giÃ¡ hoáº·c consultation cá»¥ thá»ƒ hÆ¡n. Retargeting nÃªn xá»­ lÃ½ objection, nháº¯c proof vÃ  Ä‘Æ°a bÆ°á»›c tiáº¿p theo rÃµ. Má»™t offer dÃ¹ng cho má»i stage dá»… lÃ m cold traffic tháº¥y quÃ¡ vá»™i cÃ²n warm traffic tháº¥y chÆ°a Ä‘á»§ sÃ¢u.',
      },
      { type: 'heading', text: 'Memo 08 â€” Äá»«ng sá»­a offer chá»‰ báº±ng cÃ¡ch giáº£m giÃ¡' },
      {
        type: 'paragraph',
        text: 'Giáº£m giÃ¡ cÃ³ thá»ƒ há»¯u Ã­ch khi price friction lÃ  váº¥n Ä‘á» tháº­t, nhÆ°ng khÃ´ng pháº£i cÃ¢u tráº£ lá»i máº·c Ä‘á»‹nh. NÃ³ cÅ©ng cÃ³ thá»ƒ hÃºt sai tá»‡p, lÃ m ká»³ vá»ng lá»‡ch vÃ  bÃ o economics náº¿u váº¥n Ä‘á» gá»‘c lÃ  audience, promise hoáº·c proof.',
      },
      {
        type: 'paragraph',
        text: 'Offer cÃ³ thá»ƒ máº¡nh hÆ¡n báº±ng cÃ¡ch khoanh Ä‘Ãºng ngÆ°á»i, lÃ m rÃµ káº¿t quáº£, thÃªm proof tháº­t, demo hoáº·c sample, giáº£m rá»§i ro bÆ°á»›c Ä‘áº§u, chia nhá» CTA, giáº£i thÃ­ch quy trÃ¬nh, gáº¯n vá»›i thá»i Ä‘iá»ƒm cá»¥ thá»ƒ vÃ  dÃ¹ng form Ä‘á»ƒ cÃ¡ nhÃ¢n hÃ³a follow-up. Nhiá»u khi offer cáº§n rÃµ hÆ¡n, tin hÆ¡n vÃ  dá»… báº¯t Ä‘áº§u hÆ¡n â€” khÃ´ng cáº§n ráº» hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 09 â€” Test offer báº±ng downstream signal' },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ test cÃ¹ng audience vá»›i offer khÃ¡c, cÃ¹ng offer vá»›i angle hoáº·c CTA khÃ¡c, cÃ¹ng creative direction vá»›i proof khÃ¡c, cÃ¹ng cáº¥u trÃºc page vá»›i hero khÃ¡c, hoáº·c form nháº¹ so vá»›i form lá»c ká»¹. Audit, demo, sample, checklist vÃ  consultation cÅ©ng lÃ  cÃ¡c bÆ°á»›c vÃ o khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng Ä‘á»«ng chá»‰ Ä‘á»c CTR, CPC, conversion vÃ  CPL. HÃ£y ná»‘i form submit vá»›i contacted, qualified, sales note, meeting, quote vÃ  lost reason. Test offer lÃ  tÃ¬m Ä‘á» nghá»‹ táº¡o Ä‘Ãºng loáº¡i cÆ¡ há»™i hÆ¡n, khÃ´ng chá»‰ táº¡o nhiá»u lead hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng ngÃ¢n sÃ¡ch, hai offer khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Offer A lÃ  â€œNháº­n tÆ° váº¥n marketing miá»…n phÃ­â€: pháº¡m vi rá»™ng, nhiá»u ngÆ°á»i tÃ² mÃ², sales pháº£i há»i láº¡i tá»« Ä‘áº§u vÃ  lead quality dao Ä‘á»™ng. KhÃ´ng ai biáº¿t khÃ¡ch Ä‘ang vÆ°á»›ng content, ads, tracking, page hay sales process.',
      },
      {
        type: 'paragraph',
        text: 'Offer B lÃ  â€œAudit tracking, landing page vÃ  lead flow trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch adsâ€: tá»‡p cÃ¹ng váº¥n Ä‘á» rÃµ hÆ¡n, khÃ¡ch hiá»ƒu mÃ¬nh nháº­n gÃ¬, form cÃ³ thá»ƒ há»i budget, page vÃ  tracking hiá»‡n táº¡i, cÃ²n sales follow-up theo context. Sá»‘ lead cÃ³ thá»ƒ Ã­t hÆ¡n nhÆ°ng intent dá»… Ä‘á»c hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Offer B khÃ´ng luÃ´n tháº¯ng vÃ  offer tá»‘t khÃ´ng cá»©u Ä‘Æ°á»£c creative, page, tracking hay sales yáº¿u. Äá»™ rÃµ cá»§a offer chá»‰ thay Ä‘á»•i cÃ¡ch cáº£ funnel váº­n hÃ nh.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign Ä‘á»•i offer rÃµ hÆ¡n nÃªn sales follow-up dá»… hÆ¡n dÃ¹ lead khÃ´ng tÄƒng máº¡nh.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng dá»… nhÃ¬n váº¥n Ä‘á» á»Ÿ target, creative, ngÃ¢n sÃ¡ch, bidding vÃ  placement. CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra cÃ³ nhá»¯ng campaign khÃ´ng thá»ƒ giáº£i quyáº¿t chá»‰ báº±ng tá»‘i Æ°u thÃªm trong ads manager.',
      },
      {
        type: 'paragraph',
        text: 'Offer chÆ°a rÃµ thÃ¬ creative khÃ³ sáº¯c. Thiáº¿u proof thÃ¬ landing page khÃ³ thuyáº¿t phá»¥c. QuÃ¡ rá»™ng thÃ¬ lead quality dao Ä‘á»™ng. CTA mÆ¡ há»“ thÃ¬ sales khÃ³ follow-up. Sai stage thÃ¬ ads kÃ©o Ä‘Ãºng ngÆ°á»i váº«n chÆ°a cháº¯c chuyá»ƒn Ä‘á»•i.',
      },
      {
        type: 'paragraph',
        text: 'Ads Ä‘Æ°a offer ra thá»‹ trÆ°á»ng nhanh vÃ  thá»‹ trÆ°á»ng pháº£n há»“i ráº¥t tháº­t: cÃ³ Ä‘Ã¡ng quan tÃ¢m, Ä‘Ã¡ng tin vÃ  Ä‘Ã¡ng hÃ nh Ä‘á»™ng khÃ´ng. Paid ads khÃ´ng chá»‰ lÃ  mÃ¡y mua traffic; nÃ³ lÃ  cÃ¡ch Ä‘á»c pháº£n há»“i vá» Ä‘á»™ rÃµ vÃ  sá»©c náº·ng cá»§a offer.',
      },
      { type: 'heading', text: 'Káº¿t â€” Kiá»ƒm offer trÆ°á»›c khi mua thÃªm traffic' },
      {
        type: 'paragraph',
        text: 'Offer yáº¿u lÃ m creative khÃ³ tháº¯ng, page khÃ³ thuyáº¿t phá»¥c, form khÃ³ lá»c, sales khÃ³ follow-up vÃ  economics khÃ³ chá»‹u CAC. TrÆ°á»›c khi tÄƒng tiá»n, hÃ£y kiá»ƒm ai phÃ¹ há»£p, váº¥n Ä‘á» gÃ¬, lá»i há»©a nÃ o, proof nÃ o, CTA nÃ o vÃ  rá»§i ro bÆ°á»›c Ä‘áº§u Ä‘Æ°á»£c giáº£m ra sao.',
      },
    ],
    cta: 'Náº¿u campaign cá»§a báº¡n Ä‘ang Ä‘áº¯t mÃ  khÃ´ng rÃµ lÃ½ do, Ä‘á»«ng chá»‰ má»Ÿ Ads Manager. HÃ£y má»Ÿ láº¡i offer vÃ  há»i: ngÆ°á»i xem cÃ³ hiá»ƒu ngay offer nÃ y dÃ nh cho ai, giáº£i quyáº¿t váº¥n Ä‘á» gÃ¬, vÃ¬ sao Ä‘Ã¡ng tin vÃ  bÆ°á»›c tiáº¿p theo cÃ³ Ä‘á»§ rÃµ Ä‘á»ƒ há» hÃ nh Ä‘á»™ng khÃ´ng?',
  },
  {
    title: 'Cold traffic, warm traffic vÃ  retargeting: Ä‘á»«ng dÃ¹ng má»™t thÃ´ng Ä‘iá»‡p cho má»i tá»‡p',
    slug: 'cold-traffic-warm-traffic-retargeting-dung-dung-mot-thong-diep-cho-moi-tep',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-team-backdrop-01.jpg",
                "alt": "Team posing in front of an exhibition backdrop",
                "caption": "Exhibition team group photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Má»™t lá»—i phá»• biáº¿n khi cháº¡y ads lÃ  dÃ¹ng cÃ¹ng má»™t thÃ´ng Ä‘iá»‡p cho táº¥t cáº£: ngÆ°á»i chÆ°a biáº¿t thÆ°Æ¡ng hiá»‡u, ngÆ°á»i Ä‘Ã£ xem landing page, ngÆ°á»i tá»«ng Ä‘iá»n form, ngÆ°á»i Ä‘Ã£ há»i giÃ¡ vÃ  ngÆ°á»i tá»«ng mua. NhÆ°ng má»—i nhÃ³m Ä‘ang á»Ÿ má»™t má»©c Ä‘á»™ nháº­n biáº¿t, má»©c Ä‘á»™ tin vÃ  má»©c Ä‘á»™ sáºµn sÃ ng hÃ nh Ä‘á»™ng khÃ¡c nhau. Paid ads sÃ¢u cáº§n chia message theo stage, khÃ´ng chá»‰ chia audience theo ká»¹ thuáº­t.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Má»™t thÃ´ng Ä‘iá»‡p cho táº¥t cáº£ thÆ°á»ng lÃ  má»™t thÃ´ng Ä‘iá»‡p chÆ°a Ä‘á»§ sÃ¢u' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign cÃ³ vÃ i creative nhÆ°ng dÃ¹ng gáº§n nhÆ° cÃ¹ng message cho ngÆ°á»i chÆ°a biáº¿t brand, ngÆ°á»i Ä‘Ã£ xem page, tá»«ng click CTA, inbox há»i giÃ¡, Ä‘iá»n form chÆ°a mua vÃ  cáº£ khÃ¡ch cÅ©. Táº¥t cáº£ Ä‘á»u tháº¥y â€œLiÃªn há»‡ ngayâ€, â€œNháº­n tÆ° váº¥nâ€ hoáº·c â€œÆ¯u Ä‘Ã£i thÃ¡ng nÃ yâ€.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t thá»i gian sau, cold traffic chÆ°a Ä‘á»§ tin, warm traffic khÃ´ng nháº­n thÃªm thÃ´ng tin má»›i, retargeting láº·p láº¡i nhÃ m vÃ  sales nháº­n lead thiáº¿u intent. Founder tháº¥y reach váº«n cÃ³ nhÆ°ng conversion khÃ´ng tÆ°Æ¡ng xá»©ng.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i traffic nÃ o cÅ©ng cáº§n nghe cÃ¹ng má»™t cÃ¢u. NgÆ°á»i á»Ÿ stage khÃ¡c nhau cáº§n lÃ½ do khÃ¡c nhau Ä‘á»ƒ hiá»ƒu, tin vÃ  Ä‘i tiáº¿p.',
      },
      { type: 'heading', text: 'Memo 01 â€” Cold traffic chÆ°a thiáº¿u CTA, há» thiáº¿u niá»m tin ban Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Cold traffic chÆ°a biáº¿t hoáº·c biáº¿t ráº¥t Ã­t vá» doanh nghiá»‡p. Há» cÃ³ thá»ƒ chÆ°a hiá»ƒu rÃµ váº¥n Ä‘á», chÆ°a tin lá»i há»©a, chÆ°a tháº¥y nhu cáº§u cáº¥p bÃ¡ch, chÆ°a muá»‘n Ä‘á»ƒ láº¡i thÃ´ng tin vÃ  cÃ ng chÆ°a muá»‘n sales gá»i ngay.',
      },
      {
        type: 'paragraph',
        text: 'Message nÃªn gá»i Ä‘Ãºng váº¥n Ä‘á», nÃ³i Ä‘Ãºng ná»—i lo, giáº£i thÃ­ch vÃ¬ sao Ä‘Ã¡ng chÃº Ã½ vÃ  Ä‘Æ°a proof dá»… hiá»ƒu. CTA cÃ³ thá»ƒ nháº¹ hÆ¡n: xem case, nháº­n checklist, audit sÆ¡ bá»™, sample hoáº·c demo. Ã‰p â€œmua ngayâ€ hay â€œbÃ¡o giÃ¡ ngayâ€ khi page chÆ°a táº¡o Ä‘á»§ tin thÆ°á»ng chá»‰ kÃ©o thÃªm ngÆ°á»i tÃ² mÃ² hoáº·c lÃ m há» rá»i Ä‘i.',
      },
      {
        type: 'paragraph',
        text: 'Cold traffic khÃ´ng pháº£i lÃºc nÃ o cÅ©ng cáº§n bá»‹ chá»‘t nhanh hÆ¡n. Nhiá»u khi há» cáº§n hiá»ƒu váº¥n Ä‘á» vÃ  cÃ³ niá»m tin bÆ°á»›c Ä‘áº§u.',
      },
      { type: 'visual', variant: 'traffic-stage-message-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video teardown cÃ¡ch chia message cho cold traffic, warm traffic vÃ  retargeting.',
      },
      { type: 'heading', text: 'Memo 02 â€” Warm traffic cáº§n proof vÃ  lÃ½ do Ä‘i tiáº¿p' },
      {
        type: 'paragraph',
        text: 'Warm traffic cÃ³ thá»ƒ Ä‘Ã£ xem landing page, video, blog, case, pricing hoáº·c FAQ; Ä‘Ã£ click CTA, tÆ°Æ¡ng tÃ¡c bÃ i viáº¿t hay inbox nhÆ°ng chÆ°a Ä‘á»ƒ láº¡i thÃ´ng tin. Há» khÃ´ng cÃ²n hoÃ n toÃ n láº¡nh, nhÆ°ng cÅ©ng chÆ°a cháº¯c sáºµn sÃ ng mua.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ phÃ¡t láº¡i hook cÅ©, hÃ£y Ä‘Æ°a case liÃªn quan, beforeâ€“after, comparison, FAQ, demo quy trÃ¬nh, proof khÃ¡ch tháº­t hoáº·c lÃ½ do khÃ¡c biá»‡t. CTA lÃºc nÃ y cÃ³ thá»ƒ rÃµ hÆ¡n: nháº­n bÃ¡o giÃ¡ sÆ¡ bá»™, gá»­i máº«u, Ä‘áº·t lá»‹ch tÆ° váº¥n, audit hoáº·c demo.',
      },
      {
        type: 'paragraph',
        text: 'Warm traffic cáº§n thÃªm lÃ½ do Ä‘á»ƒ tin vÃ  má»™t bÆ°á»›c tiáº¿p theo rÃµ hÆ¡n, khÃ´ng cáº§n nghe láº¡i y chang cold message.',
      },
      { type: 'heading', text: 'Memo 03 â€” Retargeting khÃ´ng pháº£i bÃ¡m Ä‘uá»•i báº±ng cÃ¹ng má»™t quáº£ng cÃ¡o' },
      {
        type: 'paragraph',
        text: 'Retargeting thÆ°á»ng bá»‹ giáº£n lÆ°á»£c thÃ nh â€œai vÃ o web thÃ¬ cháº¡y láº¡i adsâ€. Náº¿u chá»‰ láº·p Ä‘Ãºng máº«u cÅ©, campaign dá»… tÄƒng frequency, gÃ¢y phiá»n, lÃ m brand cÃ³ cáº£m giÃ¡c Ä‘eo bÃ¡m nhÆ°ng khÃ´ng xá»­ lÃ½ lÃ½ do khÃ¡ch chÆ°a Ä‘i tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y há»i ngÆ°á»i nÃ y Ä‘Ã£ tháº¥y gÃ¬, dá»«ng á»Ÿ Ä‘Ã¢u vÃ  cÃ²n thiáº¿u gÃ¬: proof, case, FAQ, comparison, cÃ¡ch giáº£m rá»§i ro hay má»™t CTA phÃ¹ há»£p hÆ¡n? Retargeting nÃªn lÃ  pháº§n tiáº¿p theo cá»§a cuá»™c há»™i thoáº¡i, khÃ´ng chá»‰ lÃ  lá»i nháº¯c láº·p Ä‘i láº·p láº¡i.',
      },
      { type: 'visual', variant: 'retargeting-message-ladder' },
      { type: 'heading', text: 'Memo 04 â€” CÃ¹ng má»™t offer, stage khÃ¡c nhau cáº§n cÃ¡ch nÃ³i khÃ¡c' },
      {
        type: 'paragraph',
        text: 'Vá»›i offer â€œAudit tracking vÃ  lead flow trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch adsâ€, cold message cÃ³ thá»ƒ má»Ÿ báº±ng â€œLead tÄƒng nhÆ°ng doanh thu khÃ´ng tÄƒng cÃ³ thá»ƒ khÃ´ng náº±m á»Ÿ adsâ€, giáº£i thÃ­ch váº¥n Ä‘á» trackingâ€“CRMâ€“sales flow vÃ  má»i xem checklist.',
      },
      {
        type: 'paragraph',
        text: 'Warm message Ä‘i vÃ o â€œ5 Ä‘iá»ƒm lÃ m lead rÆ¡i trÆ°á»›c khi scaleâ€, Ä‘Æ°a lá»—i phá»• biáº¿n cÃ¹ng framework audit rá»“i má»i gá»­i website Ä‘á»ƒ xem sÆ¡ bá»™. Retargeting nháº¯c viá»‡c há» Ä‘Ã£ xem checklist, bá»• sung case, xá»­ lÃ½ objection vÃ  má»i Ä‘áº·t lá»‹ch hoáº·c Ä‘iá»n form ngáº¯n.',
      },
      {
        type: 'paragraph',
        text: 'Offer khÃ´ng nháº¥t thiáº¿t Ä‘á»•i hoÃ n toÃ n. CÃ¡ch Ä‘Ã³ng gÃ³i promise, proof vÃ  CTA thay Ä‘á»•i theo Ä‘iá»u ngÆ°á»i xem Ä‘Ã£ biáº¿t.',
      },
      { type: 'heading', text: 'Memo 05 â€” Sai stage lÃ m lead quality lá»‡ch' },
      {
        type: 'paragraph',
        text: 'CTA quÃ¡ nÃ³ng cho cold traffic cÃ³ thá»ƒ kÃ©o ngÆ°á»i Ä‘iá»n vÃ¬ tÃ² mÃ². Sales pháº£i giáº£i thÃ­ch tá»« Ä‘áº§u, lead khÃ´ng nhá»› mÃ¬nh Ä‘Äƒng kÃ½ gÃ¬ vÃ  contacted hoáº·c qualified rate tháº¥p dÃ¹ CPL nhÃ¬n ráº».',
      },
      {
        type: 'paragraph',
        text: 'Message quÃ¡ nháº¹ cho warm traffic láº¡i khÃ´ng Ä‘Æ°a ngÆ°á»i cÃ³ nhu cáº§u tá»›i bÆ°á»›c tiáº¿p theo. Retargeting khÃ´ng xá»­ lÃ½ objection khiáº¿n khÃ¡ch tiáº¿p tá»¥c xem nhÆ°ng khÃ´ng hÃ nh Ä‘á»™ng; team tÆ°á»Ÿng há» khÃ´ng cÃ³ nhu cáº§u trong khi há» chá»‰ thiáº¿u proof hoáº·c cÃ¢u tráº£ lá»i chÃ­nh.',
      },
      {
        type: 'paragraph',
        text: 'Lead quality khÃ´ng chá»‰ Ä‘áº¿n tá»« target. NÃ³ cÃ²n Ä‘áº¿n tá»« viá»‡c message cÃ³ Ä‘Ãºng stage hay khÃ´ng.',
      },
      { type: 'heading', text: 'Memo 06 â€” Landing page cÅ©ng pháº£i khá»›p traffic stage' },
      {
        type: 'paragraph',
        text: 'Cold landing page nÃªn giáº£i thÃ­ch váº¥n Ä‘á», Ä‘Æ°a proof cÆ¡ báº£n, FAQ dá»… hiá»ƒu vÃ  CTA Ã­t rá»§i ro, khÃ´ng giáº£ Ä‘á»‹nh khÃ¡ch Ä‘Ã£ biáº¿t brand. Warm page cÃ³ thá»ƒ Ä‘i sÃ¢u vÃ o solution, case, comparison vÃ  form há»i nhu cáº§u rÃµ hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Page hoáº·c section cho retargeting cáº§n xá»­ lÃ½ objection, nháº¯c proof, giáº£m rá»§i ro vÃ  Ä‘Æ°a next action cá»¥ thá»ƒ; cÃ³ thá»ƒ bÃ¡m theo campaign hoáº·c angle náº¿u há»‡ thá»‘ng cho phÃ©p. Ads Ä‘Ã£ chia stage nhÆ°ng táº¥t cáº£ váº«n Ä‘á»• vá» má»™t page chung vá»›i má»™t message thÃ¬ funnel váº«n Ä‘á»©t.',
      },
      { type: 'visual', variant: 'stage-message-page-cta' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads message map template theo traffic stage.',
      },
      { type: 'heading', text: 'Memo 07 â€” Äá»c performance theo stage, Ä‘á»«ng gá»™p má»™t CPL' },
      {
        type: 'list',
        items: [
          'Cold: Ä‘á»c CTR, CPC, CPM, landing engagement, meaningful visit, form start vÃ  cháº¥t lÆ°á»£ng lead ban Ä‘áº§u.',
          'Warm: Ä‘á»c return visit, case hoáº·c FAQ engagement, CTA click, form submit vÃ  qualified lead.',
          'Retargeting: Ä‘á»c frequency, assisted conversion, booked call, qualified rate, fatigue cÃ¹ng pháº£n á»©ng hide hoáº·c comment náº¿u cÃ³.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Má»™t CPL chung che máº¥t nhiá»‡m vá»¥ khÃ¡c nhau cá»§a tá»«ng stage. KPI phá»¥ giÃºp biáº¿t message Ä‘ang táº¡o nháº­n biáº¿t, cá»§ng cá»‘ niá»m tin hay táº¡o hÃ nh Ä‘á»™ng; chÃºng khÃ´ng thay tháº¿ káº¿t quáº£ kinh doanh cuá»‘i cÃ¹ng.',
      },
      { type: 'heading', text: 'Memo 08 â€” Frequency retargeting pháº£i Ä‘Æ°á»£c kiá»ƒm soÃ¡t' },
      {
        type: 'paragraph',
        text: 'Tá»‡p retargeting thÆ°á»ng nhá» nÃªn frequency tÄƒng nhanh. CÃ¹ng creative láº·p nhiá»u láº§n cÃ³ thá»ƒ lÃ m khÃ¡ch khÃ³ chá»‹u, chi phÃ­ tÄƒng trong khi incremental value tháº¥p. Nhiá»u impression khÃ´ng tá»± chá»©ng minh lá»i nháº¯c Ä‘ang hiá»‡u quáº£.',
      },
      {
        type: 'paragraph',
        text: 'Team cáº§n xem frequency theo thá»i gian, xoay creative, loáº¡i ngÆ°á»i Ä‘Ã£ submit hoáº·c mua khi phÃ¹ há»£p vÃ  cÃ¢n nháº¯c window 3, 7, 14 hay 30 ngÃ y theo chu ká»³ mua. Message cÅ©ng nÃªn Ä‘á»•i theo hÃ nh vi: viewed page, clicked CTA, started form hoáº·c abandoned form.',
      },
      {
        type: 'paragraph',
        text: 'Retargeting tá»‘t cáº§n tiáº¿t cháº¿. KhÃ´ng pháº£i ai tá»«ng vÃ o web cÅ©ng nÃªn bá»‹ Ä‘uá»•i theo báº±ng cÃ¹ng má»™t ads trong nhiá»u ngÃ y.',
      },
      { type: 'heading', text: 'Memo 09 â€” CRM vÃ  sales feedback cho biáº¿t stage tháº­t' },
      {
        type: 'paragraph',
        text: 'Ads platform nhÃ¬n hÃ nh vi; sales nghe Ã½ Ä‘á»‹nh. Má»™t ngÆ°á»i click nhiá»u cÃ³ thá»ƒ chÆ°a cÃ³ nhu cáº§u, cÃ²n ngÆ°á»i xem Ã­t láº¡i Ä‘ang cáº§n gáº¥p. CÃ³ ngÆ°á»i Ä‘iá»n form Ä‘á»ƒ há»i giÃ¡, ngÆ°á»i cáº§n tÆ° váº¥n tháº­t, ngÆ°á»i Ä‘ang so sÃ¡nh nhÃ  cung cáº¥p hoáº·c cáº§n proof Ä‘á»ƒ trÃ¬nh ná»™i bá»™.',
      },
      {
        type: 'paragraph',
        text: 'Sales note giÃºp marketing biáº¿t cold message cÃ³ kÃ©o sai ngÆ°á»i, warm message Ä‘Ã£ Ä‘á»§ proof, retargeting xá»­ lÃ½ Ä‘Ãºng objection, CTA cÃ³ táº¡o ká»³ vá»ng sai vÃ  form cÃ²n thiáº¿u cÃ¢u há»i lá»c nÃ o. Stage khÃ´ng chá»‰ náº±m trong Ads Manager; nÃ³ náº±m trong cuá»™c trÃ² chuyá»‡n tháº­t.',
      },
      { type: 'heading', text: 'Memo 10 â€” Má»™t offer, ba message khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Vá»›i offer â€œTÆ° váº¥n giáº£i phÃ¡p sÆ¡n cho nhÃ  gáº§n biá»ƒnâ€, cold message nÃ³i vá» báº¡c mÃ u, bong trÃ³c, muá»‘i biá»ƒn vÃ  thá»i tiáº¿t; dÃ¹ng hÃ¬nh dá»… hiá»ƒu rá»“i má»i xem giáº£i phÃ¡p hoáº·c nháº­n tÆ° váº¥n sÆ¡ bá»™.',
      },
      {
        type: 'paragraph',
        text: 'Warm message so sÃ¡nh há»‡ sÆ¡n thÆ°á»ng vá»›i giáº£i phÃ¡p cho mÃ´i trÆ°á»ng biá»ƒn, Ä‘Æ°a case cÃ¹ng quy trÃ¬nh vÃ  má»i gá»­i tÃ¬nh tráº¡ng nhÃ . Retargeting xá»­ lÃ½ chi phÃ­, Ä‘á»™ bá»n, báº£o hÃ nh, thá»i gian thi cÃ´ng, mÃ u sáº¯c rá»“i má»i Ä‘áº·t lá»‹ch tÆ° váº¥n mÃ u hoáº·c nháº­n bÃ¡o giÃ¡ sÆ¡ bá»™.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¹ng má»™t offer, nhÆ°ng thÃ´ng Ä‘iá»‡p thay Ä‘á»•i theo Ä‘á»™ hiá»ƒu vÃ  Ä‘á»™ tin. Chia stage Ä‘Ãºng khÃ´ng Ä‘áº£m báº£o ads tháº¯ng; creative, offer, page, tracking vÃ  sales váº«n pháº£i cÃ¹ng hoáº¡t Ä‘á»™ng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign dÃ¹ng cÃ¹ng message cho má»i tá»‡p nÃªn retargeting bá»‹ láº·p vÃ  lead quality khÃ´ng cáº£i thiá»‡n.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng nghÄ© audience chá»§ yáº¿u lÃ  tuá»•i, khu vá»±c, sá»Ÿ thÃ­ch, lookalike hay remarketing trong Ads Manager. CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra audience cÃ²n lÃ  tráº¡ng thÃ¡i tÃ¢m lÃ½ táº¡i thá»i Ä‘iá»ƒm má»™t ngÆ°á»i tháº¥y quáº£ng cÃ¡o.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i chÆ°a biáº¿t brand cáº§n Ä‘Æ°á»£c nÃ³i khÃ¡c ngÆ°á»i Ä‘Ã£ xem page. NgÆ°á»i click CTA khÃ¡c ngÆ°á»i má»›i xem video. NgÆ°á»i há»i giÃ¡ khÃ¡c ngÆ°á»i chá»‰ Ä‘á»c bÃ i. KhÃ¡ch cÅ© cÅ©ng khÃ´ng nÃªn nháº­n nguyÃªn message dÃ nh cho ngÆ°á»i chÆ°a tá»«ng nghe tÃªn thÆ°Æ¡ng hiá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'DÃ¹ng má»™t message cho táº¥t cáº£ váº«n cÃ³ thá»ƒ táº¡o reach vÃ  lead, nhÆ°ng khÃ³ Ä‘i sÃ¢u: cold chÆ°a tin, warm thiáº¿u lÃ½ do, retargeting chá»‰ láº·p láº¡i. Paid ads sÃ¢u khÃ´ng chá»‰ tÃ¬m Ä‘Ãºng ngÆ°á»i; nÃ³ nÃ³i Ä‘Ãºng Ä‘iá»u vá»›i Ä‘Ãºng ngÆ°á»i á»Ÿ Ä‘Ãºng stage.',
      },
      { type: 'heading', text: 'Káº¿t â€” Stage khÃ¡c nhau cáº§n cuá»™c há»™i thoáº¡i khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Cold traffic cáº§n problem, insight vÃ  proof ban Ä‘áº§u. Warm traffic cáº§n case, comparison, FAQ vÃ  lÃ½ do Ä‘i tiáº¿p. Retargeting cáº§n xá»­ lÃ½ objection, nháº¯c proof, giáº£m rá»§i ro vÃ  next action rÃµ. Khi message, page vÃ  CTA lá»‡ch stage, ads dá»… Ä‘áº¯t, lead quality lá»‡ch vÃ  lá»i nháº¯c trá»Ÿ thÃ nh bÃ¡m Ä‘uá»•i.',
      },
    ],
    cta: 'Náº¿u ads cá»§a báº¡n Ä‘ang dÃ¹ng cÃ¹ng má»™t máº«u cho má»i tá»‡p, hÃ£y táº¡m dá»«ng vÃ  há»i: ngÆ°á»i nÃ y Ä‘Ã£ biáº¿t gÃ¬, Ä‘Ã£ tin tá»›i Ä‘Ã¢u, Ä‘Ã£ lÃ m hÃ nh Ä‘á»™ng nÃ o vÃ  thÃ´ng Ä‘iá»‡p tiáº¿p theo nÃªn giÃºp há» hiá»ƒu hÆ¡n, tin hÆ¡n hay hÃ nh Ä‘á»™ng rÃµ hÆ¡n?',
  },
  {
    title: 'Search intent vÃ  social intent: vÃ¬ sao khÃ´ng nÃªn cháº¡y Google Ads vÃ  Meta Ads báº±ng cÃ¹ng má»™t tÆ° duy?',
    slug: 'search-intent-va-social-intent-vi-sao-khong-nen-chay-google-ads-va-meta-ads-bang-cung-mot-tu-duy',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-partnership-tablet-handoff-01.jpg",
                "alt": "Two people standing outdoors with a tablet",
                "caption": "Work partnership moment",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Google Ads vÃ  Meta Ads khÃ´ng chá»‰ khÃ¡c nhau á»Ÿ giao diá»‡n cháº¡y quáº£ng cÃ¡o. ChÃºng khÃ¡c nhau á»Ÿ tráº¡ng thÃ¡i tÃ¢m lÃ½ cá»§a ngÆ°á»i dÃ¹ng. Search thÆ°á»ng báº¯t nhu cáº§u Ä‘Ã£ Ä‘Æ°á»£c gÃµ ra báº±ng keyword. Social thÆ°á»ng khÆ¡i gá»£i hoáº·c Ä‘á»‹nh hÃ¬nh nhu cáº§u khi ngÆ°á»i dÃ¹ng chÆ°a chá»§ Ä‘á»™ng tÃ¬m. Náº¿u dÃ¹ng cÃ¹ng message, cÃ¹ng landing page vÃ  cÃ¹ng KPI Ä‘á»ƒ Ä‘Ã¡nh giÃ¡ cáº£ hai, team ráº¥t dá»… Ä‘á»c sai hiá»‡u quáº£ kÃªnh.',
    content: [
      { type: 'heading', text: 'Opening memo â€” CÃ¹ng ngÃ¢n sÃ¡ch, hai tráº¡ng thÃ¡i ngÆ°á»i dÃ¹ng ráº¥t khÃ¡c' },
      {
        type: 'paragraph',
        text: 'Má»™t doanh nghiá»‡p cháº¡y Google Ads vÃ  Meta Ads báº±ng cÃ¹ng offer, page, CTA vÃ  bÃ¡o cÃ¡o CPL. Google cÃ³ Ã­t lead nhÆ°ng nhu cáº§u rÃµ hÆ¡n. Meta táº¡o reach vÃ  lead ráº» á»Ÿ vÃ i campaign, nhÆ°ng sales nÃ³i intent khÃ´ng Ä‘á»u.',
      },
      {
        type: 'paragraph',
        text: 'Founder há»i â€œkÃªnh nÃ o tá»‘t hÆ¡n?â€, cÃ²n marketing Ä‘áº·t hai con sá»‘ CPL cáº¡nh nhau. CÃ¢u há»i há»¯u Ã­ch hÆ¡n lÃ : ngÆ°á»i dÃ¹ng trÃªn má»—i kÃªnh Ä‘ang cÃ³ intent gÃ¬, vÃ  kÃªnh Ä‘Ã³ nÃªn lÃ m nhiá»‡m vá»¥ nÃ o trong há»‡ thá»‘ng bÃ¡n hÃ ng?',
      },
      {
        type: 'paragraph',
        text: 'Channel strategy nÃªn báº¯t Ä‘áº§u tá»« tráº¡ng thÃ¡i cá»§a khÃ¡ch, khÃ´ng báº¯t Ä‘áº§u tá»« ná»n táº£ng nÃ o Ä‘ang ráº» hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 01 â€” Search intent lÃ  nhu cáº§u Ä‘Æ°á»£c nÃ³i ra' },
      {
        type: 'paragraph',
        text: 'Search intent xuáº¥t hiá»‡n khi ngÆ°á»i dÃ¹ng gÃµ keyword tÃ¬m giáº£i phÃ¡p, giÃ¡, Ä‘á»‹a Ä‘iá»ƒm, review, nhÃ  cung cáº¥p hoáº·c thÆ°Æ¡ng hiá»‡u. â€œDá»‹ch vá»¥ sÆ¡n chá»‘ng tháº¥m gáº§n tÃ´iâ€ khÃ¡c xa tráº¡ng thÃ¡i lÆ°á»›t feed vÃ  tÃ¬nh cá» tháº¥y video tÆ°á»ng bá»‹ tháº¥m.',
      },
      {
        type: 'paragraph',
        text: 'Google Search thÆ°á»ng phÃ¹ há»£p khi thá»‹ trÆ°á»ng Ä‘Ã£ cÃ³ nhu cáº§u, khÃ¡ch biáº¿t cÃ¡ch gá»i tÃªn váº¥n Ä‘á», offer khá»›p truy váº¥n, page tráº£ lá»i nhanh vÃ  sales xá»­ lÃ½ Ä‘Æ°á»£c lead gáº§n quyáº¿t Ä‘á»‹nh hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng keyword khÃ´ng tá»± Ä‘áº£m báº£o intent cao. CÃ³ truy váº¥n chá»‰ Ä‘á»ƒ tham kháº£o, volume cÃ³ thá»ƒ nhá», cáº¡nh tranh Ä‘áº¯t vÃ  cÃ¡c keyword gáº§n giá»‘ng nhau váº«n mang Ã½ Ä‘á»‹nh khÃ¡c nhau. Náº¿u thá»‹ trÆ°á»ng chÆ°a biáº¿t giáº£i phÃ¡p, search cÅ©ng khÃ´ng tá»± táº¡o lÆ°á»£ng demand lá»›n.',
      },
      {
        type: 'paragraph',
        text: 'Search máº¡nh á»Ÿ viá»‡c báº¯t nhu cáº§u Ä‘ang Ä‘Æ°á»£c nÃ³i ra, khÃ´ng pháº£i lÃºc nÃ o cÅ©ng Ä‘á»§ Ä‘á»ƒ má»Ÿ má»™t nhu cáº§u má»›i.',
      },
      { type: 'visual', variant: 'search-intent-vs-social-intent' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video teardown khÃ¡c biá»‡t search intent vÃ  social intent khi cháº¡y ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Social intent lÃ  nhu cáº§u Ä‘Æ°á»£c khÆ¡i gá»£i hoáº·c Ä‘á»‹nh hÃ¬nh' },
      {
        type: 'paragraph',
        text: 'TrÃªn Meta, ngÆ°á»i dÃ¹ng thÆ°á»ng Ä‘ang lÆ°á»›t feed, xem Reels, Ä‘á»c tin hoáº·c giáº£i trÃ­ chá»© khÃ´ng má»Ÿ app Ä‘á»ƒ tÃ¬m nhÃ  cung cáº¥p. Creative pháº£i lÃ m há» dá»«ng láº¡i, nháº­n ra má»™t váº¥n Ä‘á» vÃ  tháº¥y hÆ°á»›ng giáº£i quyáº¿t Ä‘á»§ liÃªn quan.',
      },
      {
        type: 'paragraph',
        text: 'VÃ¬ váº­y social cold traffic cáº§n hook Ä‘Ãºng, visual rÃµ, insight gáº§n, proof dá»… hiá»ƒu, offer Ã­t rá»§i ro vÃ  landing page giáº£i thÃ­ch ká»¹ hÆ¡n. Creative pipeline cÃ¹ng retargeting cÅ©ng quan trá»ng vÃ¬ niá»m tin hiáº¿m khi hÃ¬nh thÃ nh chá»‰ sau má»™t impression.',
      },
      {
        type: 'paragraph',
        text: 'Meta khÃ´ng chá»‰ láº¥y lead. NÃ³ cÃ³ thá»ƒ táº¡o nháº­n biáº¿t váº¥n Ä‘á», test angle, má»Ÿ demand nháº¹, xÃ¢y warm audience vÃ  khiáº¿n ngÆ°á»i dÃ¹ng báº¯t Ä‘áº§u search brand hoáº·c category. Social khÃ´ng yáº¿u hÆ¡n search; nÃ³ thÆ°á»ng lÃ m má»™t vai khÃ¡c.',
      },
      { type: 'heading', text: 'Memo 03 â€” Copy cÃ¹ng má»™t message sang hai kÃªnh thÆ°á»ng bá»‹ lá»‡ch' },
      {
        type: 'paragraph',
        text: 'Search ad cáº§n tráº£ lá»i khÃ¡ch tÃ¬m gÃ¬, giáº£i phÃ¡p nÃ o phÃ¹ há»£p vÃ  page cÃ³ Ä‘Ãºng truy váº¥n khÃ´ng. Meta ad pháº£i kÃ©o attention trÆ°á»›c: váº¥n Ä‘á» nÃ o khiáº¿n há» dá»«ng, hÃ¬nh áº£nh nÃ o giÃºp nháº­n ra mÃ¬nh, proof vÃ  CTA nÃ o phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Google cÃ³ thá»ƒ nÃ³i â€œDá»‹ch vá»¥ sÆ¡n chá»‘ng tháº¥m nhÃ  phá»‘ táº¡i TP.HCM â€” kháº£o sÃ¡t vÃ  bÃ¡o giÃ¡ rÃµâ€. Meta cÃ³ thá»ƒ má»Ÿ báº±ng â€œNhÃ  má»›i sÆ¡n vÃ i mÃ¹a Ä‘Ã£ loang hoáº·c bong? Váº¥n Ä‘á» cÃ³ thá»ƒ náº±m á»Ÿ há»‡ sÆ¡n vÃ  bá» máº·tâ€.',
      },
      {
        type: 'paragraph',
        text: 'Search copy tráº£ lá»i nhu cáº§u Ä‘Ã£ gá»i tÃªn. Social creative thÆ°á»ng giÃºp khÃ¡ch nháº­n ra váº¥n Ä‘á» trÆ°á»›c khi há» cÃ³ ngÃ´n ngá»¯ Ä‘á»ƒ tÃ¬m.',
      },
      { type: 'heading', text: 'Memo 04 â€” Landing page pháº£i tiáº¿p Ä‘Ãºng intent' },
      {
        type: 'paragraph',
        text: 'Search landing page cáº§n khá»›p keyword nhanh, offer rÃµ, proof trá»±c tiáº¿p, thÃ´ng tin dá»‹ch vá»¥ Ä‘á»§ dÃ¹ng vÃ  CTA gáº§n mua nhÆ° gá»i, bÃ¡o giÃ¡ hoáº·c Ä‘áº·t lá»‹ch. FAQ nÃªn xá»­ lÃ½ cÃ¢u há»i mÃ  ngÆ°á»i Ä‘ang cÃ¢n nháº¯c thÆ°á»ng há»i.',
      },
      {
        type: 'paragraph',
        text: 'Social page cáº§n ná»‘i cÃ¢u chuyá»‡n tá»« creative, giáº£i thÃ­ch váº¥n Ä‘á», xÃ¢y niá»m tin tá»«ng bÆ°á»›c, dÃ¹ng case, video hoáº·c demo vÃ  cÃ³ thá»ƒ Ä‘Æ°a CTA nháº¹ hÆ¡n. Form Ä‘Ã´i khi cáº§n thÃªm cÃ¢u há»i lá»c intent.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t page chung cÃ³ thá»ƒ khiáº¿n search traffic tháº¥y lan man cÃ²n social traffic tháº¥y quÃ¡ vá»™i. Khi Ä‘Ã³ team dá»… Ä‘á»• lá»—i cho kÃªnh dÃ¹ Ä‘iá»ƒm gÃ£y lÃ  messageâ€“page mismatch.',
      },
      { type: 'visual', variant: 'intent-message-page-cta' },
      { type: 'heading', text: 'Memo 05 â€” KPI cá»§a Search vÃ  Social khÃ´ng nÃªn Ä‘á»c y chang' },
      {
        type: 'paragraph',
        text: 'Chá»‰ so CPL dá»… bá» qua viá»‡c Search táº¡o Ã­t lead nhÆ°ng intent rÃµ, Meta cÃ³ lead ráº» nhÆ°ng quality dao Ä‘á»™ng hoáº·c Ä‘ang táº¡o warm audience vÃ  há»— trá»£ lÆ°á»£t search sau Ä‘Ã³. Search cÅ©ng cÃ³ thá»ƒ chá»‰ báº¯t demand cuá»‘i hÃ nh trÃ¬nh.',
      },
      {
        type: 'list',
        items: [
          'Search: Ä‘á»c CTR theo nhÃ³m intent, CPC, page conversion, CPL/CPA, contacted, qualified, cost per qualified lead, quote hoáº·c meeting.',
          'Social: Ä‘á»c attention signal theo format, CTR, CPC/CPL, landing signal, quality, frequency, fatigue vÃ  angle táº¡o qualified lead.',
          'Cáº£ hai: ná»‘i source, campaign vÃ  message tá»›i CRM Ä‘á»ƒ Ä‘á»c outcome thay vÃ¬ dá»«ng á»Ÿ conversion cá»§a platform.',
        ],
      },
      {
        type: 'paragraph',
        text: 'KPI phá»¥ khÃ¡c nhau vÃ¬ nhiá»‡m vá»¥ khÃ¡c nhau; doanh thu vÃ  economics cuá»‘i cÃ¹ng váº«n cáº§n Ä‘Æ°á»£c Ä‘á»‘i chiáº¿u chung.',
      },
      { type: 'heading', text: 'Memo 06 â€” Search báº¯t demand, Social táº¡o vÃ  má»Ÿ demand' },
      {
        type: 'paragraph',
        text: 'Má»™t há»‡ ads thá»±c táº¿ khÃ´ng cáº§n chá»n cá»±c Ä‘oan. Search phá»¥c vá»¥ nhu cáº§u rÃµ, local query vÃ  category cÃ³ search volume. Social Ä‘Æ°a váº¥n Ä‘á» ra trÆ°á»›c ngÆ°á»i chÆ°a tÃ¬m, test insight nhanh, xÃ¢y warm audience vÃ  nuÃ´i proof.',
      },
      {
        type: 'paragraph',
        text: 'Meta cÃ³ thá»ƒ lÃ m ngÆ°á»i dÃ¹ng nháº­n ra váº¥n Ä‘á»; sau Ä‘Ã³ há» search brand, category hoáº·c solution. Google báº¯t nhu cáº§u lÃºc Ä‘Æ°á»£c gÃµ ra. Retargeting tiáº¿p tá»¥c proof vÃ  objection. CRM cÃ¹ng sales feedback quay láº¡i creative, keyword vÃ  offer.',
      },
      {
        type: 'paragraph',
        text: 'Hai kÃªnh khÃ´ng chá»‰ cáº¡nh tranh ngÃ¢n sÃ¡ch. ChÃºng cÃ³ thá»ƒ giá»¯ cÃ¡c vai khÃ¡c nhau trong má»™t demand system.',
      },
      { type: 'visual', variant: 'demand-creation-capture-system' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n channel intent planning sheet cho Google Ads vÃ  Meta Ads.',
      },
      { type: 'heading', text: 'Memo 07 â€” Lá»—i láº¥y logic Search Ã¡p vÃ o Social' },
      {
        type: 'paragraph',
        text: 'Lá»—i phá»• biáº¿n lÃ  Ä‘Ã²i cold social nÃ³ng nhÆ° search, dÃ¹ng CTA quÃ¡ gáº¥p, Ä‘Æ°a ngÆ°á»i chÆ°a Ä‘á»§ tin vÃ o page quÃ¡ trá»±c diá»‡n, chá»‰ Ä‘á»c CPL ngáº¯n háº¡n, khÃ´ng retargeting proof hoáº·c objection vÃ  khÃ´ng dÃ¹ng creative Ä‘á»ƒ test insight.',
      },
      {
        type: 'paragraph',
        text: 'Social váº«n cÃ³ thá»ƒ táº¡o lead trá»±c tiáº¿p, nháº¥t lÃ  warm traffic hoáº·c offer dá»… hiá»ƒu. NhÆ°ng cold social thÆ°á»ng cáº§n Ä‘Æ°á»£c dáº«n dáº¯t khÃ¡c má»™t truy váº¥n cÃ³ Ã½ Ä‘á»‹nh rÃµ.',
      },
      { type: 'heading', text: 'Memo 08 â€” Lá»—i láº¥y logic Social Ã¡p vÃ o Search' },
      {
        type: 'paragraph',
        text: 'Search bá»‹ dÃ¹ng sai khi ad copy quÃ¡ cáº£m xÃºc nhÆ°ng khÃ´ng tráº£ lá»i keyword, page ká»ƒ chuyá»‡n dÃ i trÆ°á»›c khi giáº£i quyáº¿t truy váº¥n, nhiá»u intent bá»‹ gom vÃ o má»™t message hoáº·c search terms khÃ´ng Ä‘Æ°á»£c kiá»ƒm.',
      },
      {
        type: 'paragraph',
        text: 'Brand search, category search, problem search vÃ  comparison search khÃ´ng giá»‘ng nhau. Search khÃ´ng pháº£i lÃºc nÃ o cÅ©ng cáº§n ká»ƒ chuyá»‡n dÃ i; nhiá»u lÃºc cáº§n tráº£ lá»i nhanh, Ä‘Ãºng vÃ  Ä‘á»§ tin.',
      },
      { type: 'heading', text: 'Memo 09 â€” CRM cho biáº¿t intent nÃ o táº¡o cÆ¡ há»™i tháº­t' },
      {
        type: 'paragraph',
        text: 'Platform khÃ´ng cho biáº¿t Ä‘áº§y Ä‘á»§ keyword nÃ o táº¡o lead Ä‘Ãºng nhu cáº§u, social angle nÃ o táº¡o intent tháº­t, lead kÃªnh nÃ o cáº§n nurture lÃ¢u hÆ¡n, retargeting cÃ³ qualified hÆ¡n cold hay lost reason khÃ¡c nhau ra sao.',
      },
      {
        type: 'paragraph',
        text: 'CRM status, sales note, contacted rate, qualified rate, quote, meeting vÃ  outcome giÃºp kiá»ƒm cÃ¡c giáº£ Ä‘á»‹nh Ä‘Ã³. Intent khÃ´ng nÃªn Ä‘Æ°á»£c gáº¯n nhÃ£n báº±ng cáº£m giÃ¡c hoáº·c tÃªn kÃªnh.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng dá»‹ch vá»¥, hai cÃ¡ch triá»ƒn khai' },
      {
        type: 'paragraph',
        text: 'Vá»›i dá»‹ch vá»¥ tÆ° váº¥n sÆ¡n cho nhÃ  phá»‘ hoáº·c biá»‡t thá»±, Google cÃ³ thá»ƒ bÃ¡m cÃ¡c nhu cáº§u nhÆ° sÆ¡n chá»‘ng tháº¥m, nhÃ  gáº§n biá»ƒn, tÆ° váº¥n mÃ u hay bÃ¡o giÃ¡. Message tráº£ lá»i Ä‘Ãºng truy váº¥n; page Ä‘Æ°a dá»‹ch vá»¥, case, quy trÃ¬nh vÃ  CTA gá»i hoáº·c Ä‘áº·t lá»‹ch.',
      },
      {
        type: 'paragraph',
        text: 'Meta cÃ³ thá»ƒ khai thÃ¡c ná»—i sá»£ mÃ¹i sÆ¡n, bong trÃ³c, báº¡c mÃ u gáº§n biá»ƒn, thi cÃ´ng lÃ¢u hoáº·c mong muá»‘n mÃ u nhÃ  hÃ i hÃ²a hÆ¡n. Page giáº£i thÃ­ch váº¥n Ä‘á», dÃ¹ng hÃ¬nh tháº­t vÃ  case; CTA má»i gá»­i tÃ¬nh tráº¡ng nhÃ , xem case hoáº·c nháº­n tÆ° váº¥n sÆ¡ bá»™.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¹ng má»™t business nhÆ°ng hai kÃªnh khÃ´ng nÃªn nÃ³i cÃ¹ng má»™t cÃ¢u. Má»™t bÃªn tráº£ lá»i nhu cáº§u Ä‘Ã£ gÃµ ra; má»™t bÃªn giÃºp khÃ¡ch nháº­n ra váº¥n Ä‘á» vÃ  tin vÃ o hÆ°á»›ng giáº£i quyáº¿t.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign dÃ¹ng cÃ¹ng landing page/message cho Google vÃ  Meta nÃªn Ä‘á»c sai hiá»‡u quáº£ kÃªnh.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng dá»… há»i Google hay Meta Ä‘ang ráº» hÆ¡n rá»“i tÄƒng tiá»n cho CPL tháº¥p. CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra cÃ¡ch so nÃ y bá» qua tráº¡ng thÃ¡i cá»§a ngÆ°á»i dÃ¹ng.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i chá»§ Ä‘á»™ng gÃµ keyword khÃ¡c xa ngÆ°á»i Ä‘ang lÆ°á»›t feed vÃ  bá»‹ creative kÃ©o láº¡i. Má»™t bÃªn Ä‘Ã£ gá»i tÃªn nhu cáº§u; má»™t bÃªn cÃ³ thá»ƒ má»›i chá»‰ mang ná»—i lo mÆ¡ há»“. CÃ¹ng message, page vÃ  KPI ráº¥t dá»… táº¡o káº¿t luáº­n sai.',
      },
      {
        type: 'paragraph',
        text: 'Ads sÃ¢u khÃ´ng báº¯t Ä‘áº§u báº±ng ná»n táº£ng. NÃ³ báº¯t Ä‘áº§u báº±ng intent. KÃªnh khÃ´ng tá»± quyáº¿t Ä‘á»‹nh cháº¥t lÆ°á»£ng; cÃ¡ch khá»›p message, offer, page, tracking vÃ  KPI vá»›i intent má»›i cho biáº¿t kÃªnh cÃ³ Ä‘Æ°á»£c dÃ¹ng Ä‘Ãºng hay khÃ´ng.',
      },
      { type: 'heading', text: 'Káº¿t â€” Äá»c vai trÃ² trÆ°á»›c khi so chi phÃ­' },
      {
        type: 'paragraph',
        text: 'Search báº¯t nhu cáº§u Ä‘Æ°á»£c gÃµ ra nÃªn cáº§n tráº£ lá»i truy váº¥n rÃµ. Social khÆ¡i gá»£i hoáº·c Ä‘á»‹nh hÃ¬nh nhu cáº§u nÃªn cáº§n creative gá»i váº¥n Ä‘á», proof, CTA phÃ¹ há»£p vÃ  retargeting nuÃ´i niá»m tin. HÃ£y Ä‘á»c má»—i kÃªnh theo vai trÃ², khÃ´ng chá»‰ báº±ng CPL.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang cháº¡y cáº£ Google vÃ  Meta, Ä‘á»«ng há»i Ä‘áº§u tiÃªn â€œkÃªnh nÃ o ráº» hÆ¡n?â€. HÃ£y há»i: ngÆ°á»i dÃ¹ng á»Ÿ kÃªnh nÃ y Ä‘ang cÃ³ intent gÃ¬, message Ä‘Ã£ khá»›p intent chÆ°a, landing page cÃ³ tiáº¿p Ä‘Ãºng máº¡ch khÃ´ng vÃ  CRM cho tháº¥y kÃªnh nÃ o táº¡o cÆ¡ há»™i tháº­t á»Ÿ stage nÃ o?',
  },
  {
    title: 'Test budget vÃ  scale budget: vÃ¬ sao pháº£i tÃ¡ch ngÃ¢n sÃ¡ch há»c vÃ  ngÃ¢n sÃ¡ch khai thÃ¡c?',
    slug: 'test-budget-va-scale-budget-vi-sao-phai-tach-ngan-sach-hoc-va-ngan-sach-khai-thac',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-networking-night-waterfront-group-01.jpg",
                "alt": "Small group standing at a night waterfront event",
                "caption": "Night networking group photo",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'KhÃ´ng pháº£i Ä‘á»“ng ngÃ¢n sÃ¡ch ads nÃ o cÅ©ng cÃ³ cÃ¹ng nhiá»‡m vá»¥. Má»™t pháº§n ngÃ¢n sÃ¡ch nÃªn dÃ¹ng Ä‘á»ƒ há»c: test creative, angle, offer, landing page, form, audience signal. Má»™t pháº§n khÃ¡c dÃ¹ng Ä‘á»ƒ khai thÃ¡c nhá»¯ng tÃ­n hiá»‡u Ä‘Ã£ rÃµ hÆ¡n. Náº¿u trá»™n test budget vÃ  scale budget vÃ o má»™t cá»¥c, team ráº¥t dá»… Ä‘á»c sai káº¿t quáº£, scale quÃ¡ sá»›m hoáº·c táº¯t nhá»¯ng thá»­ nghiá»‡m chÆ°a Ä‘á»§ dá»¯ liá»‡u.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Má»™t cá»¥c ngÃ¢n sÃ¡ch, quÃ¡ nhiá»u ká»³ vá»ng' },
      {
        type: 'paragraph',
        text: 'Má»™t doanh nghiá»‡p dÃ¹ng cÃ¹ng má»™t cá»¥c tiá»n Ä‘á»ƒ giá»¯ campaign cÅ©, test creative, thá»­ offer, retargeting, Ä‘á»•i landing page, cháº¡y Google, cháº¡y Meta vÃ  boost vÃ i bÃ i nhÃ¬n cÃ³ váº» á»•n. Má»i khoáº£n chi cÃ¹ng lÃºc pháº£i kÃ©o lead, táº¡o doanh thu vÃ  tÃ¬m Ã½ tÆ°á»Ÿng má»›i.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i thÃ¡ng cÃ³ lead nhÆ°ng khÃ´ng rÃµ tá»« test hay scale; cÃ³ máº«u má»›i nhÆ°ng chÆ°a biáº¿t Ä‘Ã£ Ä‘á»§ dá»¯ liá»‡u; campaign nhÃ¬n Ä‘áº¹p nhÆ°ng sales nÃ³i quality khÃ´ng Ä‘á»u. Founder há»i thÃ¡ng sau tÄƒng gÃ¬, táº¯t gÃ¬, cÃ²n team khÃ´ng nÃ³i Ä‘Æ°á»£c ngÃ¢n sÃ¡ch Ä‘Ã£ mua bÃ i há»c nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» khÃ´ng chá»‰ lÃ  tiá»n Ã­t hay nhiá»u. Má»—i pháº§n ngÃ¢n sÃ¡ch chÆ°a Ä‘Æ°á»£c giao má»™t nhiá»‡m vá»¥ rÃµ.',
      },
      { type: 'heading', text: 'Memo 01 â€” Test budget vÃ  scale budget lÃ m hai viá»‡c khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Test budget dÃ¹ng Ä‘á»ƒ há»c angle nÃ o cháº¡m, creative nÃ o kÃ©o attention Ä‘Ãºng, offer nÃ o Ä‘á»§ lá»±c, page nÃ o giá»¯ ngÆ°á»i dÃ¹ng, form nÃ o lá»c tá»‘t, audience hoáº·c keyword nÃ o Ä‘Ã¡ng giá»¯ vÃ  nguá»“n nÃ o táº¡o lead cÃ³ cháº¥t lÆ°á»£ng.',
      },
      {
        type: 'paragraph',
        text: 'Scale budget dÃ¹ng Ä‘á»ƒ khai thÃ¡c campaign Ä‘Ã£ cÃ³ tÃ­n hiá»‡u, creative chÆ°a má»i, offer rÃµ, page vÃ  form chá»‹u Ä‘Æ°á»£c traffic, tracking Ä‘á»§ tin, sales xá»­ lÃ½ ká»‹p vÃ  economics cÃ²n cháº¥p nháº­n Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Test budget mua bÃ i há»c. Scale budget mua volume tá»« nhá»¯ng bÃ i há»c Ä‘Ã£ tÆ°Æ¡ng Ä‘á»‘i rÃµ. TÃ¡ch nhiá»‡m vá»¥ khÃ´ng Ä‘áº£m báº£o ads tháº¯ng, nhÆ°ng giÃºp team biáº¿t Ä‘ang ká»³ vá»ng Ä‘iá»u gÃ¬ tá»« má»—i Ä‘á»“ng chi.',
      },
      { type: 'visual', variant: 'test-budget-vs-scale-budget' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch tÃ¡ch test budget vÃ  scale budget trong paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Lá»—i báº¯t test budget pháº£i lá»i ngay' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team thá»­ creative, offer hoáº·c page má»›i nhÆ°ng Ä‘Ã²i káº¿t quáº£ ngay nhÆ° campaign Ä‘Ã£ cháº¡y á»•n. Test bá»‹ táº¯t quÃ¡ sá»›m, dá»¯ liá»‡u chÆ°a Ä‘á»§ Ä‘á»c, angle má»›i khÃ´ng cÃ³ cÆ¡ há»™i vÃ  tÃ i khoáº£n dáº§n phá»¥ thuá»™c vÃ i máº«u an toÃ n.',
      },
      {
        type: 'paragraph',
        text: 'Testing khÃ´ng pháº£i giáº¥y phÃ©p Ä‘á»‘t tiá»n vÃ´ trÃ¡ch nhiá»‡m. NgÃ¢n sÃ¡ch há»c váº«n cáº§n giáº£ thuyáº¿t, giá»›i háº¡n vÃ  cÃ¡ch Ä‘á»c. NhÆ°ng Ã©p má»i test tháº¯ng tá»« ngÃ y Ä‘áº§u sáº½ lÃ m creative pipeline nghÃ¨o dáº§n vÃ  team chá»‰ láº·p láº¡i Ä‘iá»u quen thuá»™c.',
      },
      {
        type: 'paragraph',
        text: 'Test budget cáº§n Ä‘Æ°á»£c kiá»ƒm soÃ¡t, nhÆ°ng khÃ´ng nÃªn bá»‹ Ä‘Ã¡nh giÃ¡ y há»‡t scale budget.',
      },
      { type: 'heading', text: 'Memo 03 â€” Lá»—i dÃ¹ng scale budget Ä‘á»ƒ test lung tung' },
      {
        type: 'paragraph',
        text: 'Lá»—i ngÆ°á»£c láº¡i lÃ  dÃ¹ng khoáº£n tiá»n lá»›n Ä‘á»ƒ Ä‘á»“ng thá»i Ä‘á»•i creative, offer, page, audience, CTA, form, bidding vÃ  cáº£ kÃªnh. Káº¿t quáº£ thay Ä‘á»•i nhÆ°ng khÃ´ng ai biáº¿t biáº¿n nÃ o táº¡o khÃ¡c biá»‡t.',
      },
      {
        type: 'paragraph',
        text: 'Team khÃ´ng biáº¿t creative tháº¯ng hay offer tháº¯ng, page yáº¿u hay audience sai, lead kÃ©m do message hay form. Scale budget biáº¿n thÃ nh sÃ¢n thá»­ mÃ¹, cÃ²n quyáº¿t Ä‘á»‹nh tÄƒng hoáº·c táº¯t dá»±a trÃªn phá»ng Ä‘oÃ¡n.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i lÃºc nÃ o cÅ©ng chá»‰ Ä‘á»•i Ä‘Ãºng má»™t biáº¿n, nhÆ°ng test pháº£i Ä‘á»§ cÃ´ láº­p Ä‘á»ƒ biáº¿t giáº£ thuyáº¿t chÃ­nh Ä‘ang Ä‘Æ°á»£c kiá»ƒm lÃ  gÃ¬.',
      },
      { type: 'heading', text: 'Memo 04 â€” Test tá»‘t báº¯t Ä‘áº§u tá»« giáº£ thuyáº¿t' },
      {
        type: 'paragraph',
        text: 'â€œLÃ m thÃªm máº«u má»›iâ€ chÆ°a pháº£i giáº£ thuyáº¿t. Má»™t giáº£ thuyáº¿t tá»‘t cÃ³ thá»ƒ lÃ : ná»—i lo mÃ¹i sÆ¡n cháº¡m hÆ¡n giÃ¡ tá»‘t; form há»i thÃªm nhu cáº§u táº¡o Ã­t lead nhÆ°ng qualified hÆ¡n; page bÃ¡m angle nhÃ  ven biá»ƒn tá»‘t hÆ¡n page tá»•ng quÃ¡t; case tháº­t kÃ©o Ä‘Ãºng nhu cáº§u hÆ¡n claim.',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i channel, team cÃ³ thá»ƒ kiá»ƒm Google Search táº¡o Ã­t lead nhÆ°ng qualified tá»‘t hÆ¡n Meta á»Ÿ má»™t nhÃ³m keyword. Má»—i test cáº§n nÃªu Ä‘iá»u muá»‘n há»c, biáº¿n thay Ä‘á»•i, pháº§n giá»¯ nguyÃªn, chá»‰ sá»‘ Ä‘á»c, thá»i Ä‘iá»ƒm review vÃ  Ä‘iá»u kiá»‡n giá»¯, sá»­a hoáº·c táº¯t.',
      },
      {
        type: 'paragraph',
        text: 'Test budget khÃ´ng dÃ¹ng Ä‘á»ƒ thá»­ váº­n may. NÃ³ dÃ¹ng Ä‘á»ƒ kiá»ƒm giáº£ thuyáº¿t váº­n hÃ nh.',
      },
      { type: 'visual', variant: 'good-ads-test-anatomy' },
      { type: 'heading', text: 'Memo 05 â€” Test budget nÃªn mua loáº¡i bÃ i há»c nÃ o?' },
      {
        type: 'list',
        items: [
          'KhÃ¡ch hÃ ng: ná»—i Ä‘au nÃ o cháº¡m, objection nÃ o máº¡nh vÃ  nhÃ³m nÃ o pháº£n há»“i Ä‘Ãºng nhu cáº§u.',
          'Creative: hook nÃ o giá»¯ attention, format nÃ o phÃ¹ há»£p vÃ  proof nÃ o táº¡o tin.',
          'Offer: audit, demo, sample, bÃ¡o giÃ¡ hay tÆ° váº¥n táº¡o intent tá»‘t hÆ¡n.',
          'Landing page: hero nÃ o khá»›p message, proof nÃ o giÃºp Ä‘i tiáº¿p vÃ  form nÃ o lá»c lead.',
          'Channel: Search hoáº·c Social Ä‘ang lÃ m vai gÃ¬ vÃ  nguá»“n nÃ o táº¡o cÆ¡ há»™i rÃµ hÆ¡n.',
          'Sales: lead tá»« angle nÃ o dá»… contact, qualify vÃ  Ä‘Æ°a tá»›i next action.',
        ],
      },
      {
        type: 'paragraph',
        text: 'NgÃ¢n sÃ¡ch há»c nÃªn Ä‘á»ƒ láº¡i tÃ i sáº£n dÃ¹ng láº¡i Ä‘Æ°á»£c: customer insight, creative bank, offer bank, page note hoáº·c sales insight â€” khÃ´ng chá»‰ vÃ i chá»‰ sá»‘ rá»i ráº¡c.',
      },
      { type: 'heading', text: 'Memo 06 â€” Scale budget cáº§n Ä‘iá»u kiá»‡n vÃ o cá»­a' },
      {
        type: 'paragraph',
        text: 'Má»™t ngÃ y cÃ³ sá»‘ Ä‘áº¹p chÆ°a Ä‘á»§ Ä‘á»ƒ scale. Team cáº§n nhÃ¬n media signal qua vÃ i chu ká»³, lead quality khÃ´ng lá»‡ch máº¡nh, page conversion á»•n, tracking Ä‘Ã¡ng tin, creative chÆ°a fatigue, sales cÃ²n sá»©c xá»­ lÃ½ vÃ  economics náº±m trong vÃ¹ng chá»‹u Ä‘Æ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'CÅ©ng nÃªn cÃ³ angle hoáº·c creative dá»± phÃ²ng. TÄƒng tiá»n vÃ o má»™t máº«u tháº¯ng nhÆ°ng khÃ´ng cÃ³ pipeline dá»… lÃ m máº«u má»i nhanh rá»“i buá»™c team pháº£n á»©ng vá»™i.',
      },
      {
        type: 'paragraph',
        text: 'Scale budget cáº§n Ä‘Æ°á»£c báº£o vá»‡: chá»‰ nhá»¯ng gÃ¬ qua cá»•ng tÃ­n hiá»‡u má»›i nháº­n thÃªm Ã¡p lá»±c.',
      },
      { type: 'visual', variant: 'test-to-scale-signal-gate' },
      { type: 'heading', text: 'Memo 07 â€” KhÃ´ng cÃ³ learning note, test ráº¥t dá»… bá»‹ quÃªn' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team cháº¡y liÃªn tá»¥c nhÆ°ng khÃ´ng ghi giáº£ thuyáº¿t, creative, offer, page, media result, lead quality, sales feedback, quyáº¿t Ä‘á»‹nh vÃ  bÃ i há»c. VÃ i thÃ¡ng sau há» test láº¡i thá»© cÅ© mÃ  khÃ´ng biáº¿t.',
      },
      {
        type: 'paragraph',
        text: 'Learning note khÃ´ng cáº§n dÃ i. NÃ³ cáº§n tráº£ lá»i Ä‘Ã£ kiá»ƒm gÃ¬, tháº¥y tÃ­n hiá»‡u nÃ o, giá»›i háº¡n cá»§a káº¿t luáº­n vÃ  vÃ²ng sau lÃ m gÃ¬. Test budget chá»‰ táº¡o giÃ¡ trá»‹ dÃ i háº¡n khi bÃ i há»c Ä‘i vÃ o creative bank, offer bank, landing note hoáº·c sales insight.',
      },
      { type: 'heading', text: 'Memo 08 â€” TÃ¡ch ngÃ¢n sÃ¡ch khÃ´ng cÃ³ nghÄ©a chia pháº§n trÄƒm cá»©ng' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ tá»· lá»‡ test vÃ  scale Ä‘Ãºng cho má»i doanh nghiá»‡p. CÃ¡ch phÃ¢n bá»• phá»¥ thuá»™c giai Ä‘oáº¡n tÃ i khoáº£n, Ä‘á»™ cháº¯c cá»§a offer, creative pipeline, tracking, thá»‹ trÆ°á»ng, tá»•ng ngÃ¢n sÃ¡ch, sales capacity, economics vÃ  mÃ¹a vá»¥.',
      },
      {
        type: 'paragraph',
        text: 'TÃ i khoáº£n má»›i hoáº·c offer má» cáº§n mua nhiá»u bÃ i há»c hÆ¡n. TÃ i khoáº£n cÃ³ winner á»•n cÃ³ thá»ƒ khai thÃ¡c nhiá»u hÆ¡n nhÆ°ng váº«n giá»¯ nhá»‹p test. Creative má»i nhanh cáº§n pipeline máº¡nh hÆ¡n. Sales quÃ¡ táº£i thÃ¬ khÃ´ng nÃªn tÄƒng scale dÃ¹ media signal Ä‘áº¹p.',
      },
      {
        type: 'paragraph',
        text: 'NguyÃªn táº¯c khÃ´ng pháº£i chia bao nhiÃªu pháº§n trÄƒm. NguyÃªn táº¯c lÃ  biáº¿t Ä‘á»“ng ngÃ¢n sÃ¡ch Ä‘ang há»c hay khai thÃ¡c.',
      },
      { type: 'heading', text: 'Memo 09 â€” Review ngÃ¢n sÃ¡ch lÃ  review tÃ­n hiá»‡u Ä‘Ã£ mua' },
      {
        type: 'list',
        items: [
          'Test nÃ o Ä‘ang cháº¡y, giáº£ thuyáº¿t gÃ¬ vÃ  Ä‘Ã£ Ä‘á»§ dá»¯ liá»‡u Ä‘á»ƒ káº¿t luáº­n chÆ°a?',
          'Media, landing page, form vÃ  lead quality Ä‘ang ká»ƒ cÃ¢u chuyá»‡n gÃ¬?',
          'Sales feedback xÃ¡c nháº­n hay pháº£n bÃ¡c giáº£ thuyáº¿t ban Ä‘áº§u?',
          'Test nÃ o cáº§n kill, iterate, hold thÃªm hoáº·c chuyá»ƒn sang scale?',
          'Scale budget cÃ³ lÃ m creative má»i hoáº·c sales quÃ¡ táº£i khÃ´ng?',
          'Tuáº§n sau ngÃ¢n sÃ¡ch há»c cáº§n mua thÃªm bÃ i há»c nÃ o?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Budget review khÃ´ng chá»‰ kiá»ƒm tiá»n Ä‘Ã£ tiÃªu. NÃ³ kiá»ƒm tiá»n Ä‘Ã£ mua Ä‘Æ°á»£c tÃ­n hiá»‡u gÃ¬ vÃ  tÃ­n hiá»‡u Ä‘Ã³ thay Ä‘á»•i quyáº¿t Ä‘á»‹nh ra sao.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads test-to-scale budget review sheet.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng ngÃ¢n sÃ¡ch, hai cÃ¡ch váº­n hÃ nh' },
      {
        type: 'paragraph',
        text: 'Team A dÃ¹ng má»™t cá»¥c tiá»n, tháº¥y gÃ¬ cÅ©ng thá»­, tÄƒng campaign cÃ³ CPL ráº», táº¯t máº«u má»›i ráº¥t nhanh vÃ  khÃ´ng ghi learning note. Cuá»‘i thÃ¡ng há» váº«n há»i â€œmáº«u nÃ o tháº¯ng?â€ nhÆ°ng khÃ´ng biáº¿t vÃ¬ sao.',
      },
      {
        type: 'paragraph',
        text: 'Team B tÃ¡ch nhiá»‡m vá»¥ há»c vÃ  khai thÃ¡c. Má»—i test cÃ³ giáº£ thuyáº¿t, Ä‘á»c media cÃ¹ng lead quality; chá»‰ angle, offer vÃ  page qua cá»•ng tÃ­n hiá»‡u má»›i Ä‘Æ°á»£c scale. Má»™t pháº§n tiá»n luÃ´n giá»¯ cho creative hoáº·c offer má»›i.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡c biá»‡t khÃ´ng náº±m á»Ÿ ngÃ¢n sÃ¡ch lá»›n hÆ¡n. Team B biáº¿t rÃµ Ä‘Ã£ há»c gÃ¬, giá»¯ gÃ¬, táº¯t gÃ¬ vÃ  Ä‘iá»u gÃ¬ Ä‘á»§ cÆ¡ sá»Ÿ Ä‘á»ƒ tÄƒng.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t tÃ i khoáº£n dÃ¹ng chung ngÃ¢n sÃ¡ch test/scale nÃªn khÃ´ng biáº¿t cuá»‘i thÃ¡ng há»c Ä‘Æ°á»£c gÃ¬.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng nhÃ¬n ngÃ¢n sÃ¡ch nhÆ° sá»‘ tá»•ng: thÃ¡ng nÃ y tiÃªu bao nhiÃªu, CPL vÃ  lead bao nhiÃªu. CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra cÃ¹ng sá»‘ tiá»n nhÆ°ng cÃ¡ch giao nhiá»‡m vá»¥ sáº½ táº¡o cháº¥t lÆ°á»£ng quyáº¿t Ä‘á»‹nh ráº¥t khÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ tiá»n mua volume, tiá»n mua tÃ­n hiá»‡u, tiá»n kiá»ƒm giáº£ thuyáº¿t vÃ  tiá»n giá»¯ nhá»‹p creative. Trá»™n táº¥t cáº£ vÃ o má»™t cá»¥c khiáº¿n team khÃ³ há»c; thá»© Ä‘Ã¡ng scale cÃ³ thá»ƒ bá»‹ bá», cÃ²n thá»© chÆ°a cháº¯c láº¡i Ä‘Æ°á»£c tÄƒng quÃ¡ sá»›m.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads sÃ¢u khÃ´ng chá»‰ há»i ngÃ¢n sÃ¡ch bao nhiÃªu. NÃ³ há»i ngÃ¢n sÃ¡ch nÃ y Ä‘ang Ä‘Æ°á»£c giao nhiá»‡m vá»¥ gÃ¬.',
      },
      { type: 'heading', text: 'Káº¿t â€” NgÃ¢n sÃ¡ch pháº£i mua Ä‘Æ°á»£c quyáº¿t Ä‘á»‹nh tá»‘t hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Test budget mua tÃ­n hiá»‡u vá» angle, creative, offer, page, form, channel vÃ  quality. Scale budget khai thÃ¡c tÃ­n hiá»‡u Ä‘Ã£ qua kiá»ƒm tra. Náº¿u trá»™n hai nhiá»‡m vá»¥, team dá»… test quÃ¡ vá»™i, scale quÃ¡ sá»›m vÃ  cuá»‘i thÃ¡ng khÃ´ng biáº¿t mÃ¬nh Ä‘Ã£ há»c Ä‘Æ°á»£c gÃ¬.',
      },
    ],
    cta: 'Náº¿u báº¡n Ä‘ang quáº£n lÃ½ ngÃ¢n sÃ¡ch ads, Ä‘á»«ng chá»‰ há»i â€œthÃ¡ng nÃ y tiÃªu bao nhiÃªu?â€. HÃ£y há»i: pháº§n nÃ o dÃ¹ng Ä‘á»ƒ há»c, pháº§n nÃ o dÃ¹ng Ä‘á»ƒ scale, test nÃ o cÃ³ giáº£ thuyáº¿t rÃµ, tÃ­n hiá»‡u nÃ o Ä‘á»§ Ä‘á»ƒ tÄƒng ngÃ¢n sÃ¡ch vÃ  bÃ i há»c nÃ o Ä‘Æ°á»£c ghi láº¡i cho vÃ²ng sau?',
  },
  {
    title: 'Campaign structure: cÃ ng nhiá»u campaign/ad set khÃ´ng cÃ³ nghÄ©a lÃ  kiá»ƒm soÃ¡t tá»‘t hÆ¡n',
    slug: 'campaign-structure-cang-nhieu-campaign-ad-set-khong-co-nghia-la-kiem-soat-tot-hon',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-booth-crowd-01.jpg",
                "alt": "People gathered around an exhibition booth",
                "caption": "Exhibition booth crowd",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Nhiá»u tÃ i khoáº£n ads bá»‹ chia quÃ¡ vá»¥n vÃ¬ team nghÄ© cÃ ng nhiá»u campaign/ad set thÃ¬ cÃ ng kiá»ƒm soÃ¡t tá»‘t. NhÆ°ng cáº¥u trÃºc quÃ¡ nhá» cÃ³ thá»ƒ lÃ m ngÃ¢n sÃ¡ch bá»‹ chia má»ng, signal bá»‹ phÃ¢n máº£nh, learning yáº¿u, creative test khÃ´ng Ä‘á»§ dá»¯ liá»‡u vÃ  report rá»‘i. Campaign structure tá»‘t khÃ´ng pháº£i phá»©c táº¡p hÆ¡n, mÃ  lÃ  giÃºp team test, scale, retargeting vÃ  Ä‘á»c decision rÃµ hÆ¡n.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Nhiá»u campaign chÆ°a cháº¯c chuyÃªn nghiá»‡p hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Má»™t tÃ i khoáº£n cÃ³ campaign theo sáº£n pháº©m, khu vá»±c, tuá»•i, interest, creative, test, scale vÃ  retargeting. Campaign cÅ© chÆ°a táº¯t, campaign má»›i Ä‘ang thá»­. NhÃ¬n qua ráº¥t cÃ³ kiá»ƒm soÃ¡t.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng má»—i nhÃ³m tiÃªu Ã­t, nhiá»u ad set thiáº¿u data, creative chá»‰ táº¡o vÃ i lead vÃ  quality khÃ´ng Ä‘á»§ Ä‘á»ƒ káº¿t luáº­n. Sales khÃ´ng biáº¿t lead Ä‘áº¿n tá»« logic nÃ o; founder há»i campaign nÃ o tháº¯ng, team tráº£ lá»i báº±ng cáº£m giÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Campaign structure nhiá»u táº§ng khÃ´ng tá»± táº¡o kiá»ƒm soÃ¡t. ÄÃ´i khi nÃ³ chá»‰ chia sá»± mÆ¡ há»“ thÃ nh nhiá»u Ã´ nhá» hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 01 â€” Structure pháº£i phá»¥c vá»¥ quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'Má»™t cáº¥u trÃºc tá»‘t cáº§n giÃºp team biáº¿t Ä‘ang test gÃ¬, scale gÃ¬, campaign nÃ o phá»¥c vá»¥ cold, warm hoáº·c retargeting, offer nÃ o Ä‘Æ°á»£c cháº¡y, creative nÃ o cÃ³ signal vÃ  nguá»“n nÃ o táº¡o lead cháº¥t lÆ°á»£ng.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cÅ©ng pháº£i cho tháº¥y test budget cÃ³ láº«n scale budget khÃ´ng vÃ  khi káº¿t quáº£ xáº¥u Ä‘i nÃªn kiá»ƒm creative, offer, page, audience hay sales flow. Cuá»‘i cÃ¹ng, team pháº£i quyáº¿t Ä‘á»‹nh Ä‘Æ°á»£c giá»¯, sá»­a, táº¯t hay tÄƒng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u structure khÃ´ng giÃºp tráº£ lá»i cÃ¡c cÃ¢u Ä‘Ã³, nÃ³ chá»‰ lÃ  sÆ¡ Ä‘á»“ ká»¹ thuáº­t. Campaign structure lÃ  há»‡ thá»‘ng ra quyáº¿t Ä‘á»‹nh, khÃ´ng pháº£i cÃ ng chi tiáº¿t cÃ ng tá»‘t.',
      },
      { type: 'visual', variant: 'campaign-structure-decision-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video teardown má»™t tÃ i khoáº£n ads bá»‹ chia quÃ¡ nhiá»u campaign/ad set nÃªn khÃ´ng Ä‘á»c Ä‘Æ°á»£c tÃ­n hiá»‡u.',
      },
      { type: 'heading', text: 'Memo 02 â€” Chia quÃ¡ nhá» lÃ m signal phÃ¢n máº£nh' },
      {
        type: 'paragraph',
        text: 'Paid ads cáº§n Ä‘á»§ impression, click, conversion vÃ  downstream signal Ä‘á»ƒ tÃ¬m pattern. Khi tiá»n bá»‹ ráº£i qua quÃ¡ nhiá»u campaign hoáº·c ad set, má»—i nhÃ³m há»c cháº­m, creative thiáº¿u dá»¯ liá»‡u Ä‘á»ƒ so, test thiáº¿u lá»±c vÃ  team dá»… káº¿t luáº­n sá»›m.',
      },
      {
        type: 'paragraph',
        text: 'Thay vÃ¬ má»™t campaign test bá»‘n angle Ä‘á»§ ngÃ¢n sÃ¡ch Ä‘á»ƒ Ä‘á»c, team cÃ³ thá»ƒ chia thÃ nh tÃ¡m campaign theo tá»‡p, khu vá»±c vÃ  creative. Cuá»‘i tuáº§n nhÃ³m nÃ o cÅ©ng cÃ³ sá»‘ nhÆ°ng khÃ´ng sá»‘ nÃ o Ä‘á»§ tin Ä‘á»ƒ ra quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Kiá»ƒm soÃ¡t quÃ¡ nhá» cÃ³ thá»ƒ khiáº¿n platform láº«n team Ä‘á»u khÃ´ng há»c Ä‘á»§.',
      },
      { type: 'heading', text: 'Memo 03 â€” Gom quÃ¡ máº¡nh cÅ©ng lÃ m máº¥t kháº£ nÄƒng Ä‘á»c' },
      {
        type: 'paragraph',
        text: 'Consolidation khÃ´ng pháº£i Ä‘Ã¡p Ã¡n máº·c Ä‘á»‹nh. Gom offer khÃ¡c nhau, cold vá»›i retargeting, search intent khÃ¡c nhau hoáº·c creative test vá»›i winner vÃ o cÃ¹ng má»™t nÆ¡i cÃ³ thá»ƒ lÃ m tÃ­n hiá»‡u láº«n nhau.',
      },
      {
        type: 'paragraph',
        text: 'Khi Ä‘Ã³ ngÃ¢n sÃ¡ch scale cÃ³ thá»ƒ Äƒn háº¿t pháº§n test, creative má»›i khÃ´ng cÃ³ cÆ¡ há»™i há»c vÃ  lead quality theo message khÃ´ng cÃ²n rÃµ. Team tháº¥y tá»•ng account tá»‘t nhÆ°ng khÃ´ng biáº¿t thÃ nh pháº§n nÃ o táº¡o káº¿t quáº£.',
      },
      {
        type: 'paragraph',
        text: 'Cáº¥u trÃºc tá»‘t khÃ´ng pháº£i chia tháº­t nhá» hay gom tháº­t lá»›n. NÃ³ Ä‘á»§ gá»n Ä‘á»ƒ há»c vÃ  Ä‘á»§ tÃ¡ch Ä‘á»ƒ Ä‘á»c.',
      },
      { type: 'visual', variant: 'ads-structure-balance' },
      { type: 'heading', text: 'Memo 04 â€” Chá»‰ tÃ¡ch khi cÃ³ quyáº¿t Ä‘á»‹nh cáº§n Ä‘á»c riÃªng' },
      {
        type: 'paragraph',
        text: 'TÃ¡ch campaign cÃ³ lÃ½ do khi objective, traffic stage, offer, search intent, conversion event, economics hoáº·c landing page thá»±c sá»± khÃ¡c. Geography hay sales team cÅ©ng cÃ³ thá»ƒ cáº§n tÃ¡ch náº¿u ownership vÃ  cÃ¡ch xá»­ lÃ½ khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'Test vÃ  scale Ä‘Ã´i khi cáº§n ngÃ¢n sÃ¡ch riÃªng Ä‘á»ƒ khÃ´ng láº¥n nhau. NhÆ°ng â€œmuá»‘n nhÃ¬n rÃµâ€, sá»£ broad, má»—i creative má»™t campaign, má»—i interest má»™t ad set hay tiáº¿c campaign cÅ© chÆ°a pháº£i lÃ½ do váº­n hÃ nh Ä‘á»§ máº¡nh.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i láº§n táº¡o thÃªm campaign hoáº·c ad set, hÃ£y há»i: pháº§n tÃ¡ch nÃ y giÃºp Ä‘á»c quyáº¿t Ä‘á»‹nh nÃ o?',
      },
      { type: 'heading', text: 'Memo 05 â€” Test structure vÃ  scale structure khÃ´ng nÃªn láº«n' },
      {
        type: 'paragraph',
        text: 'Test structure kiá»ƒm giáº£ thuyáº¿t vá»›i budget cap, biáº¿n cáº§n test, thá»i gian review vÃ  signal gá»“m media láº«n lead quality. NÃ³ khÃ´ng Ä‘Æ°á»£c ká»³ vá»ng á»•n nhÆ° scale ngay tá»« Ä‘áº§u.',
      },
      {
        type: 'paragraph',
        text: 'Scale structure khai thÃ¡c tÃ­n hiá»‡u Ä‘Ã£ rÃµ hÆ¡n, cáº§n creative Ä‘á»§ lá»±c, page, form, tracking vÃ  sales chá»‹u Ä‘Æ°á»£c traffic, Ä‘á»“ng thá»i Ä‘á»c economics cÃ¹ng downstream outcome.',
      },
      {
        type: 'paragraph',
        text: 'Trá»™n hai nhiá»‡m vá»¥ dá»… khiáº¿n winner láº¥n creative má»›i, test thiáº¿u ngÃ¢n sÃ¡ch cÃ²n scale bá»‹ nhiá»…u. TÃ¡ch test vÃ  scale khÃ´ng nháº±m lÃ m account phá»©c táº¡p; nÃ³ giÃºp biáº¿t tiá»n Ä‘ang há»c hay khai thÃ¡c.',
      },
      { type: 'visual', variant: 'test-scale-retargeting-structure' },
      { type: 'heading', text: 'Memo 06 â€” Creative structure cÅ©ng pháº£i rÃµ' },
      {
        type: 'paragraph',
        text: 'CÃ³ account chia campaign ráº¥t ká»¹ nhÆ°ng creative lá»™n xá»™n: Ä‘á»•i hÃ¬nh, caption vÃ  offer cÃ¹ng lÃºc; khÃ´ng Ä‘áº·t tÃªn theo hypothesis; máº«u má»›i cÅ© trá»™n chung; creative tháº¯ng trong Ads Manager nhÆ°ng sales khÃ´ng biáº¿t message nÃ o kÃ©o khÃ¡ch vÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Creative nÃªn Ä‘Æ°á»£c quáº£n lÃ½ theo angle, hook, proof, format, offer, stage, landing page vÃ  lead quality. Campaign structure khÃ´ng cá»©u Ä‘Æ°á»£c creative structure mÃ¹; thiáº¿u logic test thÃ¬ report váº«n rá»‘i.',
      },
      { type: 'heading', text: 'Memo 07 â€” Naming convention khÃ´ng pháº£i chuyá»‡n phá»¥' },
      {
        type: 'paragraph',
        text: 'TÃªn campaign, ad set vÃ  ad giÃºp ná»‘i report vá»›i CRM. NÃ³ nÃªn gá»£i Ä‘Æ°á»£c channel, objective, stage, offer, angle, test hoáº·c scale, batch thá»i gian vÃ  location, page hay form khi thá»±c sá»± khÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'VÃ­ dá»¥ logic cÃ³ thá»ƒ lÃ  â€œMETA | LEAD | COLD | Offer-Audit | Angle-Tracking | Test | 2026-07â€ hoáº·c â€œGOOGLE | SEARCH | HighIntent | Son-Nha-Bien | Scale | HCMâ€. KhÃ´ng cáº§n dÃ¹ng y chang, nhÆ°ng nhÃ¬n láº¡i pháº£i biáº¿t campaign Ä‘ang lÃ m nhiá»‡m vá»¥ gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'TÃªn rÃµ lÃ m report rÃµ; report rÃµ giÃºp quyáº¿t Ä‘á»‹nh bá»›t cáº£m tÃ­nh.',
      },
      { type: 'heading', text: 'Memo 08 â€” Khi nÃ o nÃªn dá»n láº¡i structure?' },
      {
        type: 'list',
        items: [
          'Nhiá»u campaign nhá» nhÆ°ng khÃ´ng nhÃ³m nÃ o Ä‘á»§ data; budget bá»‹ chia má»ng.',
          'Campaign cÅ© cÃ²n cháº¡y nhÆ°ng khÃ´ng ai biáº¿t vai trÃ² hoáº·c owner.',
          'Test, scale, cold vÃ  retargeting láº«n nhau.',
          'Creative khÃ´ng phÃ¢n biá»‡t angle; report khÃ´ng Ä‘á»c Ä‘Æ°á»£c lead quality.',
          'Sales khÃ´ng biáº¿t lead Ä‘áº¿n tá»« offer, message hoáº·c logic nÃ o.',
          'Founder tháº¥y nhiá»u dÃ²ng sá»‘ nhÆ°ng khÃ´ng biáº¿t nÃªn giá»¯, sá»­a, táº¯t hay tÄƒng.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng dá»n chá»‰ Ä‘á»ƒ account nhÃ¬n gá»n hoáº·c vÃ¬ má»™t cáº¥u trÃºc má»›i Ä‘ang Ä‘Æ°á»£c bÃ n nhiá»u. TrÆ°á»›c khi migrate, pháº£i hiá»ƒu pháº§n nÃ o táº¡o káº¿t quáº£, ghi láº¡i logic cÅ© vÃ  cÃ³ káº¿ hoáº¡ch kiá»ƒm láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'Dá»n structure lÃ  Ä‘á»ƒ tÄƒng kháº£ nÄƒng há»c vÃ  quyáº¿t Ä‘á»‹nh, khÃ´ng pháº£i trang trÃ­ tÃ i khoáº£n.',
      },
      { type: 'heading', text: 'Memo 09 â€” Review structure theo chu ká»³' },
      {
        type: 'list',
        items: [
          'Campaign nÃ o cÃ³ nhiá»‡m vá»¥ rÃµ, campaign nÃ o chá»‰ tá»“n táº¡i vÃ¬ lá»‹ch sá»­?',
          'Budget cÃ³ bá»‹ chia má»ng vÃ  test Ä‘Ã£ Ä‘á»§ dá»¯ liá»‡u chÆ°a?',
          'Scale campaign cÃ³ bá»‹ nhiá»…u bá»Ÿi creative test?',
          'Retargeting cÃ³ trÃ¹ng audience, láº·p message hoáº·c frequency cao?',
          'Lead quality cÃ³ Ä‘á»c Ä‘Æ°á»£c theo campaign vÃ  creative?',
          'Logic nÃ o nÃªn gom, logic nÃ o cáº§n tÃ¡ch Ä‘á»ƒ quyáº¿t Ä‘á»‹nh?',
          'Naming vÃ  CRM source cÃ³ Ä‘á»§ rÃµ cho marketing, sales vÃ  founder?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Structure khÃ´ng pháº£i set má»™t láº§n rá»“i quÃªn. NÃ³ nÃªn Ä‘Æ°á»£c review sau campaign cycle hoáº·c theo thÃ¡ng nhÆ° má»™t pháº§n cá»§a paid media operation.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads campaign structure audit checklist.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng ngÃ¢n sÃ¡ch, hai cáº¥u trÃºc' },
      {
        type: 'paragraph',
        text: 'Team A chia nhiá»u campaign vÃ  ad set, má»—i nhÃ³m tiÃªu Ã­t, creative ráº£i kháº¯p nÆ¡i, retargeting láº«n cold vÃ  test chÆ°a Ä‘á»§ data Ä‘Ã£ táº¯t. Report cuá»‘i thÃ¡ng nhiá»u dÃ²ng nhÆ°ng Ã­t quyáº¿t Ä‘á»‹nh.',
      },
      {
        type: 'paragraph',
        text: 'Team B tÃ¡ch rÃµ test, scale vÃ  retargeting. Test cÃ³ hypothesis; scale nháº­n tiá»n khi signal Ä‘á»§; creative Ä‘áº·t tÃªn theo angle, proof vÃ  offer; CRM nháº­n source; review Ä‘á»c cáº£ quality láº«n sales feedback.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡c biá»‡t khÃ´ng náº±m á»Ÿ sá»‘ campaign. Team B biáº¿t nÃªn gom, táº¯t, tÄƒng hay test tiáº¿p Ä‘iá»u gÃ¬.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t tÃ i khoáº£n dá»n láº¡i structure theo test, scale vÃ  retargeting nÃªn Ä‘á»c decision rÃµ hÆ¡n.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng nghÄ© chia cÃ ng ká»¹ cÃ ng kiá»ƒm soÃ¡t tá»‘t: má»—i tá»‡p má»™t ad set, má»—i nhÃ³m má»™t campaign, má»—i creative má»™t chá»—. Account nhÃ¬n ráº¥t cÃ³ váº» Ä‘Æ°á»£c quáº£n lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra kiá»ƒm soÃ¡t tháº­t náº±m á»Ÿ kháº£ nÄƒng Ä‘á»c signal: campaign Ä‘ang test hay scale, creative tháº¯ng á»Ÿ media hay cáº£ lead quality, retargeting xá»­ lÃ½ objection hay chá»‰ láº·p láº¡i, ngÃ¢n sÃ¡ch mua volume hay bÃ i há»c.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u structure khÃ´ng tráº£ lá»i Ä‘Æ°á»£c nhá»¯ng cÃ¢u Ä‘Ã³, nÃ³ chá»‰ táº¡o thÃªm lá»›p sá»‘ liá»‡u. Paid ads sÃ¢u khÃ´ng cáº§n account phá»©c táº¡p hÆ¡n; nÃ³ cáº§n cáº¥u trÃºc phá»¥c vá»¥ há»c, scale vÃ  quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'heading', text: 'Káº¿t â€” Äá»§ gá»n Ä‘á»ƒ há»c, Ä‘á»§ rÃµ Ä‘á»ƒ quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'Chia quÃ¡ nhá» lÃ m signal phÃ¢n máº£nh, budget má»ng vÃ  report rá»‘i. Gom quÃ¡ máº¡nh láº¡i che test, offer, stage vÃ  quality. Cáº¥u trÃºc tá»‘t giÃºp biáº¿t test gÃ¬, scale gÃ¬, retargeting gÃ¬, creative nÃ o cÃ³ signal vÃ  ngÃ¢n sÃ¡ch nÃªn Ä‘i Ä‘Ã¢u tiáº¿p.',
      },
    ],
    cta: 'Náº¿u tÃ i khoáº£n ads cá»§a báº¡n Ä‘ang cÃ³ quÃ¡ nhiá»u campaign nhÆ°ng cuá»‘i thÃ¡ng váº«n khÃ´ng biáº¿t nÃªn giá»¯, sá»­a, táº¯t hay tÄƒng cÃ¡i nÃ o, Ä‘á»«ng chá»‰ nhÃ¬n CPL. HÃ£y nhÃ¬n láº¡i campaign structure: má»—i campaign Ä‘ang cÃ³ nhiá»‡m vá»¥ gÃ¬, cÃ³ Ä‘á»§ signal Ä‘á»ƒ há»c khÃ´ng, cÃ³ Ä‘á»c Ä‘Æ°á»£c lead quality khÃ´ng vÃ  cÃ³ giÃºp team ra quyáº¿t Ä‘á»‹nh rÃµ hÆ¡n khÃ´ng?',
  },
  {
    title: 'Äá»«ng Ä‘á»c ads theo tá»«ng ngÃ y: vÃ¬ sao report ngáº¯n háº¡n dá»… lÃ m team quyáº¿t Ä‘á»‹nh sai?',
    slug: 'dung-doc-ads-theo-tung-ngay-vi-sao-report-ngan-han-de-lam-team-quyet-dinh-sai',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-team-dinner-group-01.jpg",
                "alt": "Team group selfie at a restaurant table",
                "caption": "Team meal group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Paid ads luÃ´n dao Ä‘á»™ng theo ngÃ y. CPL hÃ´m nay tÄƒng chÆ°a cháº¯c campaign há»ng. Lead hÃ´m nay ráº» chÆ°a cháº¯c nÃªn scale. Náº¿u team pháº£n á»©ng quÃ¡ nhanh vá»›i report ngáº¯n háº¡n, há» dá»… táº¯t nháº§m campaign tá»‘t, scale nháº§m tÃ­n hiá»‡u chÆ°a Ä‘á»§ cháº¯c vÃ  lÃ m nhiá»…u há»‡ thá»‘ng há»c. Daily report nÃªn dÃ¹ng Ä‘á»ƒ phÃ¡t hiá»‡n báº¥t thÆ°á»ng; quyáº¿t Ä‘á»‹nh lá»›n cáº§n Ä‘á»c theo chu ká»³ dÃ i hÆ¡n vÃ  ná»‘i vá»›i lead quality, sales feedback, economics.',
    content: [
      { type: 'heading', text: 'Opening memo â€” SÃ¡ng tháº¥y CPL tÄƒng, chiá»u muá»‘n táº¯t campaign' },
      {
        type: 'paragraph',
        text: 'SÃ¡ng má»Ÿ Ads Manager, campaign hÃ´m qua cÃ³ CPL tÄƒng, má»™t creative tiÃªu nhiá»u vÃ  lead Ã­t hÆ¡n. Founder há»i cÃ³ váº¥n Ä‘á» gÃ¬ khÃ´ng; team láº­p tá»©c tÃ­nh táº¯t campaign, Ä‘á»•i creative, giáº£m budget hoáº·c má»Ÿ nhÃ³m má»›i.',
      },
      {
        type: 'paragraph',
        text: 'VÃ i ngÃ y sau má»›i tháº¥y Ä‘Ã³ chá»‰ lÃ  má»™t nhá»‹p dao Ä‘á»™ng. Sales chÆ°a cáº­p nháº­t status, má»™t sá»‘ lead Ä‘Æ°á»£c contact muá»™n vÃ  campaign quay láº¡i vÃ¹ng á»•n. Náº¿u táº¯t ngay, team cÃ³ thá»ƒ Ä‘Ã£ cáº¯t máº¥t tÃ­n hiá»‡u tá»‘t.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads cáº§n Ä‘Æ°á»£c theo dÃµi má»—i ngÃ y, nhÆ°ng khÃ´ng pháº£i quyáº¿t Ä‘á»‹nh nÃ o cÅ©ng nÃªn ra theo nhá»‹p má»™t ngÃ y.',
      },
      { type: 'heading', text: 'Memo 01 â€” Daily report lÃ  radar, khÃ´ng pháº£i tÃ²a Ã¡n' },
      {
        type: 'paragraph',
        text: 'Daily check váº«n cáº§n Ä‘á»ƒ phÃ¡t hiá»‡n campaign ngá»«ng phÃ¢n phá»‘i, spend vÆ°á»£t má»©c, tracking hoáº·c form lá»—i, landing page sáº­p, creative bá»‹ reject, budget Ä‘áº·t nháº§m, conversion vá» 0 hay UTM bá»‹ máº¥t.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cÅ©ng giÃºp tháº¥y spike CPC hoáº·c CPL Ä‘á»§ báº¥t thÆ°á»ng Ä‘á»ƒ Ä‘iá»u tra. NhÆ°ng má»™t ngÃ y khÃ´ng nÃªn máº·c Ä‘á»‹nh dÃ¹ng Ä‘á»ƒ káº¿t luáº­n creative tháº¯ng thua, tÄƒng máº¡nh vÃ¬ CPL tháº¥p, táº¯t vÃ¬ CPL cao, Ä‘á»•i offer, thay page hay trÃ¡ch sales khi lead chÆ°a Ä‘Æ°á»£c follow-up.',
      },
      {
        type: 'paragraph',
        text: 'Daily report lÃ  radar phÃ¡t hiá»‡n lá»—i. Decision review má»›i lÃ  nÆ¡i ra phÃ¡n quyáº¿t giá»¯, sá»­a, táº¯t hoáº·c tÄƒng.',
      },
      { type: 'visual', variant: 'daily-check-vs-decision-review' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch Ä‘á»c ads report theo daily, weekly vÃ  monthly rhythm.',
      },
      { type: 'heading', text: 'Memo 02 â€” Má»™t ngÃ y sá»‘ xáº¥u chÆ°a cháº¯c campaign xáº¥u' },
      {
        type: 'paragraph',
        text: 'Paid ads cÃ³ dao Ä‘á»™ng tá»± nhiÃªn. Volume nhá» lÃ m tá»· lá»‡ thay Ä‘á»•i máº¡nh; ngÃ y trong tuáº§n, auction, nhÃ³m ngÆ°á»i Ä‘Æ°á»£c phÃ¢n phá»‘i, creative má»›i, attribution delay, mÃ¹a vá»¥ hoáº·c má»™t issue page ngáº¯n háº¡n Ä‘á»u cÃ³ thá»ƒ lÃ m sá»‘ hÃ´m nay khÃ¡c hÃ´m qua.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u campaign chá»‰ cÃ³ vÃ i lead má»—i ngÃ y, thÃªm hoáº·c bá»›t má»™t lead Ä‘Ã£ lÃ m CPL nhÃ¬n ráº¥t khÃ¡c. Náº¿u sales cáº§n má»™t Ä‘áº¿n ba ngÃ y Ä‘á»ƒ contact vÃ  qualify, Ä‘á»c quality ngay trong ngÃ y lÃ  quÃ¡ sá»›m. Conversion ghi nháº­n trá»… cÅ©ng lÃ m snapshot chÆ°a Ä‘áº§y Ä‘á»§.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t ngÃ y xáº¥u lÃ  tÃ­n hiá»‡u cáº§n kiá»ƒm tra, chÆ°a cháº¯c lÃ  káº¿t luáº­n cáº§n hÃ nh Ä‘á»™ng máº¡nh.',
      },
      { type: 'heading', text: 'Memo 03 â€” Má»™t ngÃ y sá»‘ Ä‘áº¹p cÅ©ng chÆ°a cháº¯c nÃªn scale' },
      {
        type: 'paragraph',
        text: 'CPL ráº» cÃ³ thá»ƒ Ä‘áº¿n tá»« traffic dá»… submit nhÆ°ng intent tháº¥p, creative kÃ©o tÃ² mÃ², form quÃ¡ nháº¹, má»™t audience nhá» pháº£n há»“i tá»‘t táº¡m thá»i hoáº·c lead chÆ°a Ä‘Æ°á»£c sales qualify.',
      },
      {
        type: 'paragraph',
        text: 'TÄƒng budget máº¡nh theo má»™t ngÃ y cÃ³ thá»ƒ lÃ m creative má»i, quality tá»¥t, sales quÃ¡ táº£i vÃ  campaign pháº£i há»c trong Ä‘iá»u kiá»‡n má»›i. Team sau Ä‘Ã³ gá»i lÃ  â€œscale há»ngâ€, trong khi tÃ­n hiá»‡u ban Ä‘áº§u chÆ°a Ä‘á»§ cháº¯c.',
      },
      {
        type: 'paragraph',
        text: 'Sá»‘ Ä‘áº¹p ngáº¯n háº¡n cÅ©ng cáº§n Ä‘Æ°á»£c kiá»ƒm. Scale khÃ´ng nÃªn dá»±a vÃ o má»™t ngÃ y may máº¯n.',
      },
      { type: 'heading', text: 'Memo 04 â€” Ads report vÃ  sales report Ä‘á»u cÃ³ Ä‘á»™ trá»…' },
      {
        type: 'paragraph',
        text: 'Platform attribution, conversion import, GA4, CRM vÃ  server-side event khÃ´ng luÃ´n cáº­p nháº­t cÃ¹ng lÃºc. Cross-device, cookie vÃ  privacy tiáº¿p tá»¥c lÃ m thá»i Ä‘iá»ƒm ghi nháº­n khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'Sales cÅ©ng cáº§n thá»i gian gá»i, nháº¯n, follow-up vÃ  cáº­p nháº­t qualified status. Quote, meeting, won hoáº·c lost thÆ°á»ng xuáº¥t hiá»‡n lÃ¢u sau form submit. KhÃ´ng pháº£i ai cÅ©ng nghe mÃ¡y láº§n Ä‘áº§u.',
      },
      {
        type: 'paragraph',
        text: 'Quyáº¿t Ä‘á»‹nh ads trÆ°á»›c khi feedback sales cáº­p nháº­t nghÄ©a lÃ  team Ä‘ang tá»‘i Æ°u theo ná»­a Ä‘áº§u cÃ¢u chuyá»‡n.',
      },
      { type: 'visual', variant: 'ads-signal-time-lag' },
      { type: 'heading', text: 'Memo 05 â€” Chia nhá»‹p report theo loáº¡i quyáº¿t Ä‘á»‹nh' },
      {
        type: 'list',
        items: [
          'Daily: kiá»ƒm lá»—i, spend pacing, tracking, form, page vÃ  campaign cÃ³ vá»¡ báº¥t thÆ°á»ng khÃ´ng.',
          'Má»—i 3â€“7 ngÃ y: Ä‘á»c trend CTR, CPC, CPL, frequency, fatigue, page signal vÃ  test Ä‘Ã£ Ä‘á»§ data chÆ°a.',
          'Weekly: ná»‘i contacted, qualified, sales note, lost reason vÃ  quality theo campaign hoáº·c creative.',
          'Monthly hoáº·c campaign cycle: Ä‘á»c CAC, qualified cost, economics, channel mix, bÃ i há»c test vÃ  phÃ¢n bá»• ngÃ¢n sÃ¡ch tiáº¿p theo.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Khoáº£ng thá»i gian cá»¥ thá»ƒ cÃ²n tÃ¹y volume, chu ká»³ mua vÃ  ngÃ nh. NguyÃªn táº¯c lÃ  má»—i nhá»‹p phá»¥c vá»¥ má»™t cÃ¢u há»i, khÃ´ng Ã©p má»i signal xuáº¥t hiá»‡n cÃ¹ng ngÃ y.',
      },
      { type: 'visual', variant: 'paid-ads-reporting-cadence' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads reporting cadence checklist.',
      },
      { type: 'heading', text: 'Memo 06 â€” Äá»c trend, Ä‘á»«ng chá»‰ Ä‘á»c snapshot' },
      {
        type: 'paragraph',
        text: 'Snapshot nÃ³i â€œhÃ´m qua CPL tÄƒngâ€. Trend há»i tÄƒng bao lÃ¢u, á»Ÿ campaign vÃ  creative nÃ o, frequency cÃ³ tÄƒng, CTR cÃ³ giáº£m, CPC hay conversion rate kÃ©o CPL lÃªn, page conversion cÃ³ rÆ¡i vÃ  quality cÃ³ Ä‘á»•i khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cÃ²n há»i sales response time cÃ³ cháº­m hÆ¡n vÃ  thay Ä‘á»•i nÃ o vá»«a xáº£y ra. Äá»c chuá»—i tÃ­n hiá»‡u giÃºp tÃ¡ch nguyÃªn nhÃ¢n khá»i triá»‡u chá»©ng; áº£nh chá»¥p má»™t ngÃ y hiáº¿m khi lÃ m Ä‘Æ°á»£c viá»‡c Ä‘Ã³.',
      },
      { type: 'heading', text: 'Memo 07 â€” Má»™t ngÃ y xáº¥u nÃªn kÃ­ch hoáº¡t kiá»ƒm tra, khÃ´ng kÃ­ch hoáº¡t hoáº£ng loáº¡n' },
      {
        type: 'paragraph',
        text: 'Äá»«ng vá»™i táº¯t campaign cÃ³ lá»‹ch sá»­ á»•n, thay toÃ n bá»™ creative, Ä‘á»•i page, offer, channel, campaign structure hoáº·c má»Ÿ nhiá»u nhÃ³m má»›i Ä‘á»ƒ bÃ¹. CÅ©ng Ä‘á»«ng tÄƒng hoáº·c giáº£m budget máº¡nh vÃ  Ä‘á»• lá»—i sales ngay.',
      },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c háº¿t kiá»ƒm tracking, form, page, spend pacing, trend 3â€“7 ngÃ y, creative fatigue, CRM source vÃ  tÃ¬nh tráº¡ng follow-up. Ghi giáº£ thuyáº¿t trÆ°á»›c khi sá»­a Ä‘á»ƒ sau Ä‘Ã³ biáº¿t thay Ä‘á»•i nÃ o táº¡o káº¿t quáº£.',
      },
      {
        type: 'paragraph',
        text: 'HÃ nh Ä‘á»™ng máº¡nh cáº§n dá»¯ liá»‡u Ä‘á»§ máº¡nh.',
      },
      { type: 'heading', text: 'Memo 08 â€” NhÆ°ng lá»—i há»‡ thá»‘ng pháº£i xá»­ lÃ½ ngay' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i lÃºc nÃ o cÅ©ng chá» thÃªm data. Form khÃ´ng gá»­i, page sáº­p hoáº·c cháº­m báº¥t thÆ°á»ng, Lead event báº¯n sai, budget Ä‘áº·t nháº§m, spend vÆ°á»£t máº¡nh, creative bá»‹ reject, UTM máº¥t, CRM khÃ´ng nháº­n lead hay call vÃ  Zalo lá»—i Ä‘á»u cáº§n xá»­ lÃ½ ngay.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»ƒm quan trá»ng lÃ  phÃ¢n biá»‡t lá»—i há»‡ thá»‘ng vá»›i dao Ä‘á»™ng hiá»‡u suáº¥t. Lá»—i há»‡ thá»‘ng cáº§n can thiá»‡p; dao Ä‘á»™ng cáº§n trend vÃ  context.',
      },
      { type: 'heading', text: 'Memo 09 â€” Founder cáº§n report khÃ¡c operator' },
      {
        type: 'paragraph',
        text: 'Operator cáº§n chi tiáº¿t Ä‘á»ƒ xá»­ lÃ½ pacing, tracking, creative vÃ  test. Founder nÃªn xem ngÃ¢n sÃ¡ch, lead hoáº·c opportunity, quality, pipeline, outcome, váº¥n Ä‘á» lá»›n cáº§n quyáº¿t Ä‘á»‹nh, bÃ i há»c tuáº§n thÃ¡ng, káº¿ hoáº¡ch test scale vÃ  rá»§i ro.',
      },
      {
        type: 'paragraph',
        text: 'Gá»­i CPL tá»«ng ngÃ y, hÃ ng loáº¡t áº£nh Ads Manager vÃ  báº£ng sá»‘ khÃ´ng cÃ³ decision chá»‰ kÃ©o founder vÃ o noise. Report cho founder cáº§n há»— trá»£ quyáº¿t Ä‘á»‹nh kinh doanh, khÃ´ng lÃ m há» lo theo tá»«ng dao Ä‘á»™ng ná»n táº£ng.',
      },
      { type: 'heading', text: 'Memo 10 â€” Hai team Ä‘á»c cÃ¹ng má»™t account' },
      {
        type: 'paragraph',
        text: 'Team A soi CPL hÃ´m qua má»—i sÃ¡ng: tÄƒng thÃ¬ giáº£m tiá»n hoáº·c táº¯t, giáº£m thÃ¬ scale; creative thay liÃªn tá»¥c trong khi sales chÆ°a ká»‹p cáº­p nháº­t. Cuá»‘i thÃ¡ng account cÃ³ nhiá»u thay Ä‘á»•i nhÆ°ng Ã­t bÃ i há»c.',
      },
      {
        type: 'paragraph',
        text: 'Team B dÃ¹ng daily check cho lá»—i vÃ  pacing, 3â€“7 ngÃ y cho media trend, weekly cho quality vá»›i sales, monthly cho economics vÃ  allocation. Quyáº¿t Ä‘á»‹nh lá»›n dá»±a trÃªn trend, CRM, sales note; má»—i test cÃ³ learning note.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡c biá»‡t khÃ´ng náº±m á»Ÿ ai chÄƒm xem report hÆ¡n. NÃ³ náº±m á»Ÿ ai biáº¿t Ä‘á»c Ä‘Ãºng nhá»‹p.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t team táº¯t campaign quÃ¡ sá»›m vÃ¬ CPL tÄƒng má»™t ngÃ y nhÆ°ng weekly lead quality váº«n á»•n.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng bá»‹ kÃ©o vÃ o sá»‘ tá»«ng ngÃ y. CPL tÄƒng gÃ¢y khÃ³ chá»‹u; lead ráº» lÃ m tÃ´i muá»‘n tÄƒng. Má»Ÿ Ads Manager nhiá»u láº§n táº¡o cáº£m giÃ¡c Ä‘ang kiá»ƒm soÃ¡t account.',
      },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra kiá»ƒm soÃ¡t tháº­t lÃ  biáº¿t sá»‘ nÃ o bÃ¡o lá»—i, sá»‘ nÃ o lÃ  dao Ä‘á»™ng, sá»‘ nÃ o cáº§n CRM xÃ¡c nháº­n vÃ  sá»‘ nÃ o cáº§n thá»i gian. Paid ads khÃ´ng thiáº¿u sá»‘; nÃ³ thiáº¿u nhá»‹p Ä‘á»c sá»‘.',
      },
      {
        type: 'paragraph',
        text: 'Report tá»‘t khÃ´ng lÃ m team pháº£n á»©ng nhanh vá»›i má»i biáº¿n Ä‘á»™ng. NÃ³ giÃºp pháº£n á»©ng Ä‘Ãºng vá»›i Ä‘Ãºng loáº¡i signal.',
      },
      { type: 'heading', text: 'Káº¿t â€” Daily check Ä‘á»ƒ báº¯t lá»—i, trend Ä‘á»ƒ quyáº¿t Ä‘á»‹nh' },
      {
        type: 'paragraph',
        text: 'Daily report cáº§n thiáº¿t Ä‘á»ƒ kiá»ƒm lá»—i, pacing, tracking, form, page vÃ  báº¥t thÆ°á»ng lá»›n. Quyáº¿t Ä‘á»‹nh táº¯t, sá»­a, scale hay Ä‘á»•i offer cáº§n trend dÃ i hÆ¡n, landing signal, lead quality, sales feedback vÃ  economics. KhÃ´ng cÃ³ cadence, paid ads dá»… thÃ nh chuá»—i pháº£n xáº¡ theo CPL hÃ´m qua.',
      },
    ],
    cta: 'Náº¿u team báº¡n Ä‘ang má»Ÿ Ads Manager má»—i sÃ¡ng vÃ  quyáº¿t Ä‘á»‹nh theo sá»‘ hÃ´m qua, hÃ£y tÃ¡ch láº¡i nhá»‹p report: daily check Ä‘á»ƒ báº¯t lá»—i, 3â€“7 ngÃ y Ä‘á»ƒ Ä‘á»c media signal, weekly Ä‘á»ƒ Ä‘á»c lead quality, monthly Ä‘á»ƒ Ä‘á»c economics vÃ  bÃ i há»c. Äá»«ng Ä‘á»ƒ má»™t ngÃ y sá»‘ Ä‘áº¹p hoáº·c xáº¥u quyáº¿t Ä‘á»‹nh toÃ n bá»™ hÆ°á»›ng Ä‘i cá»§a ngÃ¢n sÃ¡ch.',
  },
  {
    title: 'Attribution trong paid ads: vÃ¬ sao Meta, Google, GA4 vÃ  CRM khÃ´ng bao giá» khá»›p 100%?',
    slug: 'attribution-trong-paid-ads-vi-sao-meta-google-ga4-va-crm-khong-bao-gio-khop-100',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-dinner-restaurant-team-group-01.jpg",
                "alt": "Team members gathered around a restaurant table",
                "caption": "Team dinner group photo",
                "width": 2560,
                "height": 1920,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Meta bÃ¡o má»™t sá»‘, Google bÃ¡o má»™t sá»‘, GA4 bÃ¡o má»™t sá»‘, CRM láº¡i cÃ³ sá»‘ khÃ¡c. Nhiá»u team máº¥t ráº¥t nhiá»u thá»i gian Ä‘á»ƒ há»i â€œsá»‘ nÃ o Ä‘Ãºng tuyá»‡t Ä‘á»‘i?â€. NhÆ°ng attribution trong paid ads khÃ´ng váº­n hÃ nh nhÆ° má»™t báº£ng káº¿ toÃ¡n Ä‘Æ¡n giáº£n. Má»—i nguá»“n dá»¯ liá»‡u nhÃ¬n má»™t lÃ¡t cáº¯t khÃ¡c nhau cá»§a hÃ nh trÃ¬nh khÃ¡ch hÃ ng. Viá»‡c quan trá»ng khÃ´ng pháº£i báº¯t má»i report khá»›p 100%, mÃ  lÃ  biáº¿t nguá»“n nÃ o dÃ¹ng Ä‘á»ƒ tráº£ lá»i cÃ¢u há»i nÃ o.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Meta bÃ¡o má»™t sá»‘, CRM bÃ¡o má»™t sá»‘' },
      {
        type: 'paragraph',
        text: 'Cuá»‘i tuáº§n, Meta bÃ¡o nhiá»u lead, Google cÃ³ sá»‘ conversion khÃ¡c, GA4 tháº¥p hÆ¡n vÃ  CRM chá»‰ ghi nháº­n má»™t pháº§n. Sales nÃ³i vÃ i khÃ¡ch gá»i hoáº·c nháº¯n Zalo khÃ´ng náº±m trong form. Founder há»i: â€œVáº­y rá»‘t cuá»™c sá»‘ nÃ o Ä‘Ãºng?â€',
      },
      {
        type: 'paragraph',
        text: 'Marketing báº¯t Ä‘áº§u Ä‘á»‘i chiáº¿u vÃ¬ sao Meta cao hÆ¡n CRM, Google nháº­n conversion nÃ o, GA4 thiáº¿u gÃ¬, CRM máº¥t source á»Ÿ Ä‘Ã¢u vÃ  vÃ¬ sao sales biáº¿t khÃ¡ch tá»« ads nhÆ°ng khÃ´ng biáº¿t máº«u nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Trong attribution, cÃ¢u há»i tá»‘t hÆ¡n â€œsá»‘ nÃ o Ä‘Ãºng tuyá»‡t Ä‘á»‘i?â€ lÃ : má»—i nguá»“n Ä‘ang Ä‘áº¿m gÃ¬, theo logic nÃ o vÃ  dÃ¹ng Ä‘á»ƒ quyáº¿t Ä‘á»‹nh viá»‡c gÃ¬?',
      },
      { type: 'heading', text: 'Memo 01 â€” Attribution khÃ´ng pháº£i káº¿ toÃ¡n doanh thu' },
      {
        type: 'paragraph',
        text: 'Káº¿ toÃ¡n cáº§n sá»‘ cuá»‘i rÃµ rÃ ng. Attribution cá»‘ tráº£ lá»i cÃ¢u khÃ³ hÆ¡n: Ä‘iá»ƒm cháº¡m nÃ o Ä‘Ã£ gÃ³p pháº§n táº¡o lead hoáº·c doanh thu? HÃ nh trÃ¬nh khÃ¡ch hiáº¿m khi tuyáº¿n tÃ­nh.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t ngÆ°á»i cÃ³ thá»ƒ tháº¥y ads nhÆ°ng chÆ°a click, quay láº¡i báº±ng Google Search, Ä‘á»c blog, nháº¯n Zalo, há»i sales rá»“i vÃ i ngÃ y sau má»›i mua. NgÆ°á»i xem ads vÃ  ngÆ°á»i quyáº¿t Ä‘á»‹nh trong gia Ä‘Ã¬nh hoáº·c team Ä‘Ã´i khi cÃ²n khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'VÃ¬ váº­y attribution khÃ´ng pháº£i báº£n ghi tuyá»‡t Ä‘á»‘i cá»§a sá»± tháº­t kinh doanh. NÃ³ lÃ  mÃ´ hÃ¬nh Ä‘á»c Ä‘Ã³ng gÃ³p tÆ°Æ¡ng Ä‘á»‘i Ä‘á»ƒ team ra quyáº¿t Ä‘á»‹nh, vá»›i giá»›i háº¡n cáº§n Ä‘Æ°á»£c hiá»ƒu rÃµ.',
      },
      { type: 'visual', variant: 'multi-touch-customer-journey' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch vÃ¬ sao Meta, Google, GA4 vÃ  CRM khÃ´ng khá»›p 100%.',
      },
      { type: 'heading', text: 'Memo 02 â€” VÃ¬ sao cÃ¡c nguá»“n thÆ°á»ng khÃ´ng khá»›p?' },
      {
        type: 'list',
        items: [
          'Attribution window khÃ¡c nhau: ná»n táº£ng ghi nháº­n trong khoáº£ng thá»i gian khÃ¡c nhau sau click hoáº·c view.',
          'Click-through vÃ  view-through khÃ¡c nhau: má»™t ná»n táº£ng cÃ³ thá»ƒ nháº­n cÃ´ng khi ngÆ°á»i dÃ¹ng chá»‰ tháº¥y ads.',
          'Cross-device: khÃ¡ch tháº¥y ads trÃªn Ä‘iá»‡n thoáº¡i nhÆ°ng search vÃ  submit trÃªn laptop.',
          'Cookie, browser vÃ  privacy limit lÃ m má»™t pháº§n hÃ nh vi khÃ´ng Ä‘Æ°á»£c ná»‘i láº¡i.',
          'Time zone vÃ  thá»i Ä‘iá»ƒm ghi nháº­n giá»¯a platform, GA4 hoáº·c CRM cÃ³ thá»ƒ khÃ¡c.',
          'Conversion import, CRM status vÃ  sales outcome thÆ°á»ng cáº­p nháº­t trá»….',
          'Event definition khÃ¡c: platform tÃ­nh Lead, GA4 tÃ­nh submit, CRM tÃ­nh lead tháº­t, sales tÃ­nh qualified.',
          'Duplicate hoáº·c missing data: Ä‘áº¿m trÃ¹ng, máº¥t UTM, form lá»—i hay reload thank-you page.',
          'Human process: sales quÃªn status, nháº­p sai source hoáº·c hotline khÃ´ng gáº¯n campaign.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Report lá»‡ch khÃ´ng tá»± Ä‘á»™ng chá»©ng minh má»™t bÃªn sai hoÃ n toÃ n. NhÆ°ng nÃ³ lÃ  lÃ½ do Ä‘á»ƒ team hiá»ƒu cÃ¡ch Ä‘áº¿m vÃ  kiá»ƒm tra má»©c lá»‡ch cÃ³ há»£p lÃ½ khÃ´ng.',
      },
      { type: 'heading', text: 'Memo 03 â€” Má»—i nguá»“n tráº£ lá»i má»™t loáº¡i cÃ¢u há»i' },
      {
        type: 'paragraph',
        text: 'Meta, Google hoáº·c TikTok Ads Manager phÃ¹ há»£p Ä‘á»ƒ Ä‘á»c spend, delivery, CPM, CPC, CTR, creative signal, frequency vÃ  conversion do chÃ­nh ná»n táº£ng quy attribution.',
      },
      {
        type: 'paragraph',
        text: 'GA4 giÃºp Ä‘á»c onsite behavior, source/medium, landing page, path vÃ  engagement tÆ°Æ¡ng Ä‘á»‘i. CRM phÃ¹ há»£p vá»›i lead tháº­t, owner, contacted, qualified, sales note, lost reason vÃ  next action.',
      },
      {
        type: 'paragraph',
        text: 'Sales, finance hoáº·c order system tráº£ lá»i revenue, margin, close, refund, cancel, payback vÃ  cash collected. KhÃ´ng dashboard nÃ o tá»± tráº£ lá»i má»i cÃ¢u há»i; dÃ¹ng sai nguá»“n cho sai quyáº¿t Ä‘á»‹nh dá»… dáº«n tá»›i káº¿t luáº­n sai.',
      },
      { type: 'visual', variant: 'source-of-truth-decision-map' },
      { type: 'heading', text: 'Memo 04 â€” Chá»‰ tin Ads Manager dá»… scale theo sá»‘ Ä‘áº¹p' },
      {
        type: 'paragraph',
        text: 'Ads Manager ráº¥t há»¯u Ã­ch nhÆ°ng nhÃ¬n tá»« gÃ³c ná»n táº£ng. View-through vÃ  attribution window cÃ³ thá»ƒ lÃ m Ä‘Ã³ng gÃ³p nhÃ¬n lá»›n; lead trÃ¹ng hoáº·c sai váº«n Ä‘Æ°á»£c tÃ­nh náº¿u event báº¯n; lead rÃ¡c vÃ  qualified trÃ´ng giá»‘ng nhau á»Ÿ cáº¥p conversion.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u dá»«ng á»Ÿ platform, team dá»… scale campaign kÃ©o lead ráº» nhÆ°ng sales khÃ´ng Ä‘i tiáº¿p Ä‘Æ°á»£c. Ads Manager tá»‘t Ä‘á»ƒ váº­n hÃ nh media, khÃ´ng nÃªn lÃ  nguá»“n duy nháº¥t cho quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch lá»›n.',
      },
      { type: 'heading', text: 'Memo 05 â€” Chá»‰ tin CRM cuá»‘i cÃ¹ng cÅ©ng cÃ³ thá»ƒ bá» sÃ³t demand creation' },
      {
        type: 'paragraph',
        text: 'NgÆ°á»£c láº¡i, CRM hoáº·c doanh thu cuá»‘i khÃ´ng luÃ´n cho tháº¥y Ä‘iá»ƒm cháº¡m Ä‘áº§u. Meta cÃ³ thá»ƒ táº¡o nháº­n biáº¿t, video giÃºp khÃ¡ch hiá»ƒu váº¥n Ä‘á», rá»“i khÃ¡ch search Google vÃ  Direct hoáº·c branded search Ä‘Æ°á»£c ghi lÃ  nguá»“n cuá»‘i.',
      },
      {
        type: 'paragraph',
        text: 'Retargeting cÃ³ thá»ƒ nháº¯c proof nhÆ°ng CRM chá»‰ lÆ°u Zalo. Náº¿u chá»‰ Ä‘á»c last-click, search hoáº·c direct nháº­n quÃ¡ nhiá»u cÃ´ng, cÃ²n social vÃ  prospecting dá»… bá»‹ cáº¯t dÃ¹ Ä‘Ã£ má»Ÿ demand.',
      },
      {
        type: 'paragraph',
        text: 'CRM vÃ  revenue ráº¥t quan trá»ng, nhÆ°ng cáº§n Ä‘Æ°á»£c Ä‘áº·t cáº¡nh hÃ nh trÃ¬nh vÃ  vai trÃ² kÃªnh, khÃ´ng dÃ¹ng má»™t mÃ¬nh Ä‘á»ƒ giáº£i thÃ­ch toÃ n bá»™ Ä‘Ã³ng gÃ³p media.',
      },
      { type: 'heading', text: 'Memo 06 â€” Attribution gap khÃ¡c tracking error' },
      {
        type: 'paragraph',
        text: 'Attribution gap cÃ³ thá»ƒ Ä‘áº¿n tá»« window, click/view-through, cross-device, delay, source Ä‘áº§u khÃ¡c source cuá»‘i vÃ  multi-touch journey. ÄÃ¢y lÃ  Ä‘á»™ lá»‡ch cÃ³ thá»ƒ cháº¥p nháº­n náº¿u team hiá»ƒu logic.',
      },
      {
        type: 'paragraph',
        text: 'Tracking error lÃ  Lead báº¯n trÆ°á»›c submit, submit tháº­t khÃ´ng cÃ³ event, client vÃ  server Ä‘áº¿m trÃ¹ng, UTM máº¥t, thank-you reload táº¡o conversion má»›i, call hoáº·c Zalo khÃ´ng ghi nháº­n, CRM thiáº¿u source vÃ  status.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i má»i lá»‡ch sá»‘ Ä‘á»u lÃ  lá»—i. NhÆ°ng lá»—i tracking tháº­t lÃ m report máº¥t kháº£ nÄƒng há»— trá»£ quyáº¿t Ä‘á»‹nh vÃ  cáº§n sá»­a trÆ°á»›c khi scale.',
      },
      { type: 'visual', variant: 'attribution-gap-vs-tracking-error' },
      { type: 'heading', text: 'Memo 07 â€” Attribution khÃ´ng pháº£i cÃ´ng cá»¥ tranh cÃ´ng' },
      {
        type: 'paragraph',
        text: 'Meta nÃ³i táº¡o lead, Google nÃ³i táº¡o conversion, content nÃ³i khÃ¡ch Ä‘Ã£ Ä‘á»c trÆ°á»›c, sales nÃ³i cÆ¡ há»™i Ä‘i tiáº¿p nhá» follow-up. Tranh má»™t ngÆ°á»i tháº¯ng duy nháº¥t chá»‰ lÃ m team báº£o vá»‡ dashboard cá»§a mÃ¬nh.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y há»i kÃªnh nÃ o táº¡o nháº­n biáº¿t, táº¡o intent, báº¯t demand, bá»• sung proof, táº¡o lead quality vÃ  xuáº¥t hiá»‡n cuá»‘i trÆ°á»›c submit; sales Ä‘Ã£ lÃ m gÃ¬ Ä‘á»ƒ cÆ¡ há»™i Ä‘i tiáº¿p. Attribution nÃªn giÃºp hiá»ƒu vai trÃ², khÃ´ng chia huy chÆ°Æ¡ng.',
      },
      { type: 'heading', text: 'Memo 08 â€” Attribution review nÃªn kiá»ƒm gÃ¬?' },
      {
        type: 'list',
        items: [
          'Platform report vÃ  GA4 Ä‘ang ká»ƒ gÃ¬ vá» delivery, source, page vÃ  path?',
          'CRM nháº­n bao nhiÃªu lead tháº­t; bao nhiÃªu record cÃ³ source vÃ  campaign rÃµ?',
          'Contacted, qualified, sales note vÃ  lost reason khÃ¡c nhau theo nguá»“n ra sao?',
          'CÃ³ lead Ä‘i qua nhiá»u Ä‘iá»ƒm cháº¡m hoáº·c kÃªnh cÃ³ assisted signal nhÆ°ng Ã­t last-click khÃ´ng?',
          'Event nÃ o nghi bá»‹ trÃ¹ng hoáº·c thiáº¿u; Direct vÃ  Unknown cÃ³ tÄƒng báº¥t thÆ°á»ng khÃ´ng?',
          'Quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch nÃ y nÃªn dá»±a trÃªn platform, CRM hay outcome nÃ o?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Review khÃ´ng nháº±m Ã©p sá»‘ khá»›p. NÃ³ xÃ¡c Ä‘á»‹nh Ä‘á»™ lá»‡ch Ä‘áº¿n tá»« logic attribution bÃ¬nh thÆ°á»ng hay lá»—i há»‡ thá»‘ng cáº§n sá»­a.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n attribution review checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 09 â€” Founder cáº§n tháº¥y quyáº¿t Ä‘á»‹nh, khÃ´ng chá»‰ tháº¥y sá»‘ lá»‡ch' },
      {
        type: 'paragraph',
        text: 'Founder nÃªn tháº¥y tá»•ng ngÃ¢n sÃ¡ch, lead, opportunity, revenue tháº­t, nguá»“n táº¡o volume vÃ  qualified lead, vai trÃ² táº¡o demand, váº¥n Ä‘á» data, lá»—i cáº§n sá»­a, quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch vÃ  má»©c tin cáº­y cá»§a dá»¯ liá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng chá»‰ gá»­i Meta má»™t sá»‘, GA4 má»™t sá»‘, CRM má»™t sá»‘ rá»“i Ä‘á»ƒ Ä‘Ã³; cÅ©ng khÃ´ng chá»n sá»‘ Ä‘áº¹p nháº¥t Ä‘á»ƒ báº£o vá»‡ campaign hay sá»‘ xáº¥u nháº¥t Ä‘á»ƒ Ä‘á»• lá»—i. Report tá»‘t nÃ³i rÃµ nguá»“n nÃ o Ä‘ang tráº£ lá»i cÃ¢u há»i nÃ o.',
      },
      { type: 'heading', text: 'Memo 10 â€” Má»™t lead, nhiá»u cÃ¡ch ghi nháº­n' },
      {
        type: 'paragraph',
        text: 'Má»™t khÃ¡ch tháº¥y Meta ad nhÆ°ng chÆ°a click, vÃ i ngÃ y sau search tÃªn giáº£i phÃ¡p, click Google Ads, vÃ o page rá»“i rá»i Ä‘i. HÃ´m sau há» tháº¥y retargeting, nháº¯n Zalo, Ä‘Æ°á»£c sales nháº­p CRM vÃ  nháº­n bÃ¡o giÃ¡.',
      },
      {
        type: 'paragraph',
        text: 'Meta cÃ³ thá»ƒ nháº­n má»™t pháº§n Ä‘Ã³ng gÃ³p, Google nháº­n click gáº§n conversion, GA4 ghi session khÃ¡c, CRM chá»‰ tháº¥y Zalo hoáº·c Manual, cÃ²n sales nhá»› khÃ¡ch nÃ³i Ä‘Ã£ tháº¥y quáº£ng cÃ¡o trÆ°á»›c.',
      },
      {
        type: 'paragraph',
        text: 'Há»i â€œkÃªnh nÃ o táº¡o lead?â€ vá»›i má»™t Ä‘Ã¡p Ã¡n duy nháº¥t dá»… gÃ¢y tranh cÃ£i. Há»i má»—i Ä‘iá»ƒm cháº¡m Ä‘Ã³ng vai gÃ¬ giÃºp team há»c Ä‘Æ°á»£c nhiá»u hÆ¡n.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t lead Ä‘i qua Meta, Google, retargeting, Zalo vÃ  CRM nÃªn má»—i nguá»“n ghi nháº­n khÃ¡c nhau.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng muá»‘n Meta, Google, GA4 vÃ  CRM khá»›p nhau. Sá»‘ lá»‡ch táº¡o cáº£m giÃ¡c pháº£i tÃ¬m ra má»™t report Ä‘Ãºng nháº¥t.',
      },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra khÃ¡ch khÃ´ng Ä‘i theo Ä‘Æ°á»ng tháº³ng. Há» tháº¥y, quÃªn, search, há»i ngÆ°á»i khÃ¡c, Ä‘á»c thÃªm, inbox, gá»i rá»“i má»›i mua. Má»—i há»‡ thá»‘ng chá»‰ nhÃ¬n Ä‘Æ°á»£c má»™t pháº§n.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»u quan trá»ng lÃ  biáº¿t vÃ¬ sao lá»‡ch, má»©c lá»‡ch cÃ³ cháº¥p nháº­n Ä‘Æ°á»£c khÃ´ng, nguá»“n nÃ o há»£p vá»›i quyáº¿t Ä‘á»‹nh nÃ o vÃ  lá»—i nÃ o pháº£i sá»­a. Attribution tá»‘t khÃ´ng lÃ m dá»¯ liá»‡u hoÃ n háº£o; nÃ³ lÃ m quyáº¿t Ä‘á»‹nh bá»›t ngÃ¢y thÆ¡.',
      },
      { type: 'heading', text: 'Káº¿t â€” Äá»c Ä‘Ã³ng gÃ³p, Ä‘á»«ng sÄƒn má»™t con sá»‘ tuyá»‡t Ä‘á»‘i' },
      {
        type: 'paragraph',
        text: 'Meta, Google, GA4 vÃ  CRM thÆ°á»ng lá»‡ch do window, view/click-through, cross-device, privacy, time zone, delay, multi-touch vÃ  quy trÃ¬nh sales. Äá»«ng chá»n má»™t report Ä‘á»ƒ tin tuyá»‡t Ä‘á»‘i. HÃ£y hiá»ƒu cÃ¡ch Ä‘áº¿m, dÃ¹ng Ä‘Ãºng nguá»“n, phÃ¢n biá»‡t attribution gap vá»›i tracking error vÃ  Ä‘á»‘i chiáº¿u quality trÆ°á»›c khi scale.',
      },
    ],
    cta: 'Náº¿u report paid ads cá»§a báº¡n Ä‘ang lá»‡ch giá»¯a Meta, Google, GA4 vÃ  CRM, Ä‘á»«ng vá»™i há»i â€œsá»‘ nÃ o Ä‘Ãºng tuyá»‡t Ä‘á»‘i?â€. HÃ£y há»i: má»—i nguá»“n Ä‘ang Ä‘áº¿m Ä‘iá»u gÃ¬, lá»‡ch nÃ y lÃ  attribution gap hay tracking error, lead quality theo CRM ra sao vÃ  quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch nÃªn dá»±a trÃªn nguá»“n nÃ o?',
  },
  {
    title: 'Campaign tháº¯ng trong Ads Manager chÆ°a cháº¯c tháº¯ng trong P&L',
    slug: 'campaign-thang-trong-ads-manager-chua-chac-thang-trong-pnl',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-operations-warehouse-boxes-01.jpg",
                "alt": "Person beside stacked product boxes in a work area",
                "caption": "Operations and product stock moment",
                "width": 2048,
                "height": 1171,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Má»™t campaign cÃ³ CPL tháº¥p, CPA Ä‘áº¹p hoáº·c ROAS cao trong Ads Manager chÆ°a cháº¯c Ä‘Ã£ lÃ m business khá»e hÆ¡n. Sau lá»›p report cá»§a ná»n táº£ng cÃ²n cÃ³ lead quality, close rate, average order value, gross margin, refund, sales cost, payback vÃ  cashflow. Paid ads sÃ¢u khÃ´ng chá»‰ há»i campaign nÃ o Ä‘ang tháº¯ng trong platform, mÃ  há»i campaign Ä‘Ã³ cÃ³ táº¡o lá»£i nhuáº­n vÃ  dÃ²ng tiá»n cháº¥p nháº­n Ä‘Æ°á»£c cho doanh nghiá»‡p khÃ´ng.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Ads bÃ¡o tháº¯ng, nhÆ°ng tiá»n tháº­t chÆ°a cháº¯c vui' },
      {
        type: 'paragraph',
        text: 'Cuá»‘i thÃ¡ng, team má»Ÿ Ads Manager vÃ  tháº¥y má»™t campaign cÃ³ CPL tháº¥p, CPA á»•n, ROAS sÃ¡ng, lead hoáº·c Ä‘Æ¡n tÄƒng, media spend váº«n trong ngÃ¢n sÃ¡ch. TrÃªn dashboard, Ä‘Ã¢y lÃ  máº«u tháº¯ng.',
      },
      {
        type: 'paragraph',
        text: 'Founder nhÃ¬n sÃ¢u hÆ¡n láº¡i tháº¥y sales khÃ³ chá»‘t, Ä‘Æ¡n nhá», margin má»ng, hoÃ n há»§y cao, thá»i gian xá»­ lÃ½ dÃ i vÃ  tiá»n vá» cháº­m. Doanh thu tÄƒng nhÆ°ng lá»£i nhuáº­n khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng.',
      },
      {
        type: 'paragraph',
        text: 'Campaign tháº¯ng trong Ads Manager chÆ°a cháº¯c tháº¯ng trong P&L. Platform report má»›i ká»ƒ pháº§n Ä‘áº§u cá»§a cÃ¢u chuyá»‡n.',
      },
      { type: 'heading', text: 'Memo 01 â€” Media win khÃ¡c business win' },
      {
        type: 'paragraph',
        text: 'Media win lÃ  CTR, CPC, CPL hoáº·c CPA há»£p lÃ½, conversion tÄƒng, ROAS platform Ä‘áº¹p vÃ  creative cÃ³ signal. Nhá»¯ng chá»‰ sá»‘ nÃ y cho biáº¿t media Ä‘ang mua attention hoáº·c conversion hiá»‡u quáº£ ra sao.',
      },
      {
        type: 'paragraph',
        text: 'Business win Ä‘Ã²i há»i lead Ä‘Ãºng tá»‡p, contacted vÃ  qualified tá»‘t, close rate Ä‘á»§ khá»e, deal size phÃ¹ há»£p, margin cÃ²n láº¡i Ä‘á»§, refund Ä‘Æ°á»£c kiá»ƒm soÃ¡t, payback cháº¥p nháº­n Ä‘Æ°á»£c vÃ  cashflow khÃ´ng quÃ¡ cÄƒng.',
      },
      {
        type: 'paragraph',
        text: 'Media win lÃ  Ä‘iá»u kiá»‡n tá»‘t, khÃ´ng pháº£i káº¿t luáº­n cuá»‘i. Business win má»›i lÃ  lÃ½ do Ä‘á»ƒ tÄƒng ngÃ¢n sÃ¡ch dÃ i háº¡n.',
      },
      { type: 'visual', variant: 'media-win-vs-business-win' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch vÃ¬ sao campaign tháº¯ng trong Ads Manager chÆ°a cháº¯c tháº¯ng trong P&L.',
      },
      { type: 'heading', text: 'Memo 02 â€” CPL tháº¥p váº«n cÃ³ thá»ƒ Ä‘áº¯t náº¿u lead khÃ´ng Ä‘i tiáº¿p' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign kÃ©o lead ráº» nhÆ°ng nhiá»u ngÆ°á»i khÃ´ng contact Ä‘Æ°á»£c, sai nhu cáº§u, thiáº¿u ngÃ¢n sÃ¡ch, chá»‰ há»i cho biáº¿t hoáº·c cáº§n follow-up quÃ¡ nhiá»u láº§n. Qualified, quote, meeting vÃ  close rate tháº¥p sáº½ lÃ m CPL Ä‘áº¹p máº¥t Ã½ nghÄ©a.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»£c láº¡i, campaign CPL cao hÆ¡n cÃ³ thá»ƒ Ä‘Ã¡ng giá»¯ náº¿u nhu cáº§u rÃµ, sales dá»… contact, qualified rate tá»‘t, deal size lá»›n hoáº·c sales cycle ngáº¯n hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'CPL chá»‰ lÃ  cost per lead. Business cáº§n Ä‘á»c tiáº¿p cost per qualified lead, cost per opportunity vÃ  cost per customer.',
      },
      { type: 'heading', text: 'Memo 03 â€” ROAS Ä‘áº¹p cÃ³ thá»ƒ che margin má»ng' },
      {
        type: 'paragraph',
        text: 'ROAS há»¯u Ã­ch, Ä‘áº·c biá»‡t vá»›i e-commerce hoáº·c purchase tracking, nhÆ°ng khÃ´ng tá»± nÃ³i gross margin, chi phÃ­ ship, fulfillment, sales, CSKH, refund, cancel, discount, nhÃ³m sáº£n pháº©m bÃ¡n ra vÃ  tá»‘c Ä‘á»™ thu tiá»n.',
      },
      {
        type: 'paragraph',
        text: 'Campaign A cÃ³ thá»ƒ bÃ¡o ROAS cao vÃ¬ bÃ¡n nhiá»u sáº£n pháº©m giÃ¡ tháº¥p, margin má»ng vÃ  hoÃ n nhiá»u. Campaign B cÃ³ ROAS tháº¥p hÆ¡n nhÆ°ng kÃ©o nhÃ³m margin tá»‘t, Ã­t há»§y vÃ  cÃ³ kháº£ nÄƒng mua láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'ROAS lÃ  doanh thu quy attribution trÃªn chi phÃ­ ads. NÃ³ khÃ´ng tá»± Ä‘á»™ng lÃ  lá»£i nhuáº­n.',
      },
      { type: 'visual', variant: 'ads-manager-to-pnl-flow' },
      { type: 'heading', text: 'Memo 04 â€” CPA Ä‘áº¹p váº«n cÃ³ thá»ƒ dá»±a trÃªn event quÃ¡ nÃ´ng' },
      {
        type: 'paragraph',
        text: 'CPA phá»¥ thuá»™c event Ä‘Æ°á»£c chá»n. Click CTA, form start, lead chÆ°a lá»c, add to cart, booking chÆ°a Ä‘áº¿n, trial chÆ°a active, order chÆ°a thanh toÃ¡n hoáº·c purchase chÆ°a trá»« há»§y Ä‘á»u cÃ¡ch xa tiá»n tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Event nÃ´ng khÃ´ng vÃ´ dá»¥ng; nÃ³ giÃºp Ä‘á»c hÃ nh vi vÃ  cháº©n Ä‘oÃ¡n funnel. NhÆ°ng dÃ¹ng nÃ³ Ä‘á»ƒ káº¿t luáº­n lá»£i nhuáº­n khiáº¿n team dá»… scale nháº§m. CPA chá»‰ Ä‘á»§ Ã½ nghÄ©a khi event Ä‘Æ°á»£c Ä‘áº·t Ä‘Ãºng khoáº£ng cÃ¡ch vá»›i giÃ¡ trá»‹ kinh doanh cáº§n tá»‘i Æ°u.',
      },
      { type: 'heading', text: 'Memo 05 â€” Ads cáº§n Ä‘Æ°á»£c Ä‘á»c qua nhiá»u táº§ng economics' },
      {
        type: 'list',
        items: [
          'Media cost: spend, CPM, CPC, CPL vÃ  CPA.',
          'Lead hoáº·c opportunity quality: contacted, qualified, quote, meeting hoáº·c demo rate.',
          'Sales outcome: close rate, deal size, sales cycle vÃ  lost reason.',
          'Revenue quality: AOV, order value, contract value vÃ  kháº£ nÄƒng mua láº¡i.',
          'Margin: gross margin, discount, fulfillment vÃ  sales cost náº¿u cÃ³.',
          'Rá»§i ro sau bÃ¡n: refund, cancel, no-show, bad debt hoáº·c churn sá»›m.',
          'Payback vÃ  cashflow: bao lÃ¢u thu há»“i media spend cÃ¹ng chi phÃ­ liÃªn quan.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Marketer khÃ´ng cáº§n trá»Ÿ thÃ nh CFO, nhÆ°ng ngÆ°á»i cháº¡y ads sÃ¢u pháº£i hiá»ƒu campaign Ä‘ang táº¡o loáº¡i doanh thu nÃ o vÃ  pháº§n nÃ o cÃ²n láº¡i sau doanh thu.',
      },
      { type: 'visual', variant: 'paid-ads-unit-economics-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads unit economics review sheet.',
      },
      { type: 'heading', text: 'Memo 06 â€” CÃ³ campaign nÃªn giá»¯ dÃ¹ platform khÃ´ng Ä‘áº¹p nháº¥t' },
      {
        type: 'paragraph',
        text: 'Campaign CPL hoáº·c CPA cao hÆ¡n cÃ³ thá»ƒ kÃ©o Ä‘Ãºng tá»‡p, deal size lá»›n, close rate tá»‘t, Ã­t hoÃ n há»§y, margin khá»e, cÃ³ repeat potential hoáº·c má»Ÿ Ä‘Æ°á»£c má»™t phÃ¢n khÃºc giÃ¡ trá»‹ hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Äiá»u nÃ y khÃ´ng cÃ³ nghÄ©a bá» qua media efficiency. NÃ³ cÃ³ nghÄ©a tá»‘i Æ°u chi phÃ­ há»£p lÃ½ cho loáº¡i cÆ¡ há»™i cÃ³ giÃ¡ trá»‹, thay vÃ¬ chá»‰ sÄƒn conversion ráº» nháº¥t.',
      },
      { type: 'heading', text: 'Memo 07 â€” CÃ³ campaign nhÃ¬n lá»i nhÆ°ng lÃ m tá»• chá»©c cÄƒng' },
      {
        type: 'paragraph',
        text: 'Nhiá»u lead hoáº·c Ä‘Æ¡n cÃ³ thá»ƒ lÃ m sales, CSKH, fulfillment, Ä‘á»™i thi cÃ´ng hay giao hÃ ng quÃ¡ táº£i. Khi pháº£n há»“i cháº­m, lá»—i tÄƒng, khÃ¡ch há»§y nhiá»u vÃ  team pháº£i giáº£m giÃ¡ Ä‘á»ƒ chá»‘t, economics ban Ä‘áº§u sáº½ xáº¥u Ä‘i.',
      },
      {
        type: 'paragraph',
        text: 'Founder cÅ©ng cÃ³ thá»ƒ chá»‹u Ã¡p lá»±c dÃ²ng tiá»n náº¿u chi ads vÃ  váº­n hÃ nh trÆ°á»›c nhÆ°ng thu tiá»n sau. Scale khÃ´ng chá»‰ kiá»ƒm lá»£i nhuáº­n trÃªn giáº¥y; nÃ³ pháº£i kiá»ƒm sá»©c chá»‹u táº£i thá»±c táº¿.',
      },
      { type: 'heading', text: 'Memo 08 â€” P&L feedback pháº£i quay láº¡i Ads Manager' },
      {
        type: 'paragraph',
        text: 'Náº¿u sales vÃ  finance khÃ´ng pháº£n há»“i vá» marketing, team chá»‰ tá»‘i Æ°u Ä‘áº§u funnel. Cáº§n biáº¿t campaign nÃ o táº¡o qualified lead, creative nÃ o kÃ©o khÃ¡ch margin tá»‘t, offer nÃ o cáº§n discount cao vÃ  channel nÃ o close cháº­m.',
      },
      {
        type: 'paragraph',
        text: 'Marketing cÅ©ng cáº§n biáº¿t sáº£n pháº©m nÃ o ROAS Ä‘áº¹p nhÆ°ng margin tháº¥p, nhÃ³m nÃ o refund nhiá»u, campaign nÃ o táº¡o deal lá»›n dÃ¹ CPL cao vÃ  thá»i Ä‘iá»ƒm nÃ o sales hoáº·c ops quÃ¡ táº£i.',
      },
      {
        type: 'paragraph',
        text: 'Business feedback pháº£i quay láº¡i quyáº¿t Ä‘á»‹nh creative, offer, page vÃ  budget, khÃ´ng náº±m cháº¿t trong file káº¿ toÃ¡n hoáº·c cuá»™c há»p sales.',
      },
      { type: 'heading', text: 'Memo 09 â€” Founder vÃ  marketer pháº£i thá»‘ng nháº¥t â€œtháº¯ngâ€' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi scale, team nÃªn thá»‘ng nháº¥t ngÆ°á»¡ng CPL, qualified rate, cost per qualified lead, close rate, CAC, margin, payback vÃ  volume sales hoáº·c ops cÃ³ thá»ƒ chá»‹u. NgÆ°á»¡ng cá»¥ thá»ƒ phá»¥ thuá»™c ngÃ nh, chu ká»³ mua vÃ  cashflow.',
      },
      {
        type: 'paragraph',
        text: 'CÅ©ng cáº§n biáº¿t campaign Ä‘ang mua khÃ¡ch má»›i hay retargeting demand cÃ³ sáºµn. Náº¿u má»™t test chÆ°a lá»i ngay nhÆ°ng táº¡o bÃ i há»c, pháº£i cÃ³ giá»›i háº¡n test budget vÃ  decision rule.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng Ä‘á»‹nh nghÄ©a â€œtháº¯ngâ€ tá»« Ä‘áº§u khiáº¿n cuá»‘i thÃ¡ng má»—i ngÆ°á»i chá»n má»™t chá»‰ sá»‘ khÃ¡c Ä‘á»ƒ báº£o vá»‡ káº¿t luáº­n cá»§a mÃ¬nh.',
      },
      { type: 'heading', text: 'Memo 10 â€” Má»™t campaign tháº¯ng platform, má»™t campaign tháº¯ng business' },
      {
        type: 'paragraph',
        text: 'Campaign A cÃ³ CPL tháº¥p vÃ  nhiá»u lead, nhÆ°ng sales gá»i nhiá»u, qualified tháº¥p, khÃ¡ch há»i giÃ¡ rá»“i máº¥t, deal nhá», discount cao vÃ  close rate yáº¿u. Ads Manager Ä‘áº¹p nhÆ°ng business khÃ´ng vui.',
      },
      {
        type: 'paragraph',
        text: 'Campaign B cÃ³ CPL cao vÃ  Ã­t lead hÆ¡n, nhÆ°ng nhu cáº§u rÃµ, deal size cÃ¹ng margin tá»‘t, sales cycle dá»… Ä‘á»c. Náº¿u chá»‰ nhÃ¬n platform, A tháº¯ng; nhÃ¬n P&L vÃ  sales outcome, B cÃ³ thá»ƒ Ä‘Ã¡ng há»c tiáº¿p hoáº·c scale cÃ³ kiá»ƒm soÃ¡t.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign CPL tháº¥p nhÆ°ng lead quality vÃ  margin khÃ´ng Ä‘á»§ tá»‘t Ä‘á»ƒ scale.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng dá»… vui khi CPL giáº£m, CPA á»•n vÃ  ROAS sÃ¡ng. Nhá»¯ng sá»‘ Ä‘Ã³ quan trá»ng, nhÆ°ng cÃ ng lÃ m tÃ´i dáº§n nháº­n ra chÃºng chÆ°a Ä‘á»§ Ä‘á»ƒ gá»i campaign tháº­t sá»± tá»‘t.',
      },
      {
        type: 'paragraph',
        text: 'Ads khÃ´ng sá»‘ng riÃªng trong Ads Manager. Sau lead lÃ  sales, sau purchase lÃ  fulfillment, sau revenue lÃ  margin, sau Ä‘Æ¡n lÃ  hoÃ n há»§y, sau tÄƒng trÆ°á»Ÿng lÃ  cashflow vÃ  sau scale lÃ  sá»©c chá»‹u táº£i cá»§a team.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng ná»‘i cÃ¡c lá»›p nÃ y, team dá»… tháº¯ng dashboard nhÆ°ng chÆ°a cháº¯c giÃºp doanh nghiá»‡p khá»e hÆ¡n. Paid ads sÃ¢u mua Ä‘Ãºng loáº¡i cÆ¡ há»™i vá»›i economics cháº¥p nháº­n Ä‘Æ°á»£c, khÃ´ng chá»‰ mua traffic ráº».',
      },
      { type: 'heading', text: 'Káº¿t â€” P&L kiá»ƒm tra chiáº¿n tháº¯ng cá»§a media' },
      {
        type: 'paragraph',
        text: 'CPL, CPA, ROAS, CTR vÃ  CPC Ä‘á»u quan trá»ng nhÆ°ng khÃ´ng nÃ³i Ä‘á»§ vá» quality, close rate, deal size, margin, refund, sales cost, payback vÃ  cashflow. Muá»‘n scale Ä‘Ãºng, hÃ£y ná»‘i ads report vá»›i CRM, sales, finance vÃ  Ä‘á»ƒ P&L feedback quay láº¡i quyáº¿t Ä‘á»‹nh media.',
      },
    ],
    cta: 'Náº¿u má»™t campaign Ä‘ang nhÃ¬n Ä‘áº¹p trong Ads Manager, Ä‘á»«ng vá»™i tÄƒng ngÃ¢n sÃ¡ch chá»‰ vÃ¬ CPL tháº¥p hoáº·c ROAS sÃ¡ng. HÃ£y há»i tiáº¿p: lead cÃ³ qualified khÃ´ng, sales cÃ³ chá»‘t Ä‘Æ°á»£c khÃ´ng, Ä‘Æ¡n cÃ³ margin khÃ´ng, hoÃ n/há»§y cÃ³ cao khÃ´ng, payback cÃ³ chá»‹u Ä‘Æ°á»£c khÃ´ng vÃ  campaign nÃ y cÃ³ tháº­t sá»± lÃ m business khá»e hÆ¡n khÃ´ng?',
  },
  {
    title: 'Speed to lead: vÃ¬ sao lead tá»‘t váº«n nguá»™i náº¿u sales follow-up cháº­m?',
    slug: 'speed-to-lead-vi-sao-lead-tot-van-nguoi-neu-sales-follow-up-cham',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-partnership-tablet-handoff-01.jpg",
                "alt": "Two people standing outdoors with a tablet",
                "caption": "Work partnership moment",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Má»™t lead tá»‘t khÃ´ng tá»± biáº¿n thÃ nh cÆ¡ há»™i bÃ¡n hÃ ng. Sau khi ngÆ°á»i dÃ¹ng Ä‘á»ƒ láº¡i thÃ´ng tin, tá»‘c Ä‘á»™ pháº£n há»“i, ngÆ°á»i phá»¥ trÃ¡ch, ká»‹ch báº£n follow-up, CRM status vÃ  next action sáº½ quyáº¿t Ä‘á»‹nh lead Ä‘Ã³ cÃ²n nÃ³ng hay nguá»™i Ä‘i. Náº¿u sales pháº£n há»“i cháº­m hoáº·c khÃ´ng cÃ³ quy trÃ¬nh rÃµ, campaign ads ráº¥t dá»… bá»‹ Ä‘Ã¡nh giÃ¡ lÃ  â€œlead yáº¿uâ€ dÃ¹ váº¥n Ä‘á» tháº­t náº±m á»Ÿ Ä‘oáº¡n bÃ n giao sau form submit.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Lead vá» rá»“i, nhÆ°ng nguá»™i tá»« lÃºc nÃ o?' },
      {
        type: 'paragraph',
        text: 'Campaign cháº¡y á»•n, form cÃ³ ngÆ°á»i Ä‘iá»n, Ads Manager bÃ¡o lead vÃ  CPL cháº¥p nháº­n Ä‘Æ°á»£c. VÃ i ngÃ y sau, sales nÃ³i nhiá»u ngÆ°á»i khÃ´ng nghe mÃ¡y; cÃ³ lead chÆ°a ai nháº­n, cÃ³ lead Ä‘Æ°á»£c gá»i hÃ´m sau vÃ  cÃ³ khÃ¡ch há»i láº¡i â€œbÃªn nÃ o váº­y?â€.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t sá»‘ lead tá»«ng nháº¯n Zalo nhÆ°ng khÃ´ng Ä‘Æ°á»£c follow-up tiáº¿p, record khÃ´ng cÃ³ ghi chÃº nhu cáº§u. Founder nghe xong káº¿t luáº­n lead ads yáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i lead nÃ o khÃ´ng chá»‘t cÅ©ng lÃ  lead yáº¿u. CÃ³ lead tá»‘t Ä‘Ã£ nguá»™i trong Ä‘oáº¡n bÃ n giao tá»« ads sang sales.',
      },
      { type: 'heading', text: 'Memo 01 â€” Speed to lead lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Speed to lead lÃ  thá»i gian tá»« khi khÃ¡ch Ä‘á»ƒ láº¡i tÃ­n hiá»‡u quan tÃ¢m tá»›i pháº£n há»“i Ä‘áº§u tiÃªn cá»§a team. TÃ­n hiá»‡u cÃ³ thá»ƒ lÃ  form submit, click gá»i, Zalo, Messenger, Ä‘áº·t lá»‹ch, yÃªu cáº§u bÃ¡o giÃ¡, táº£i tÃ i liá»‡u hoáº·c inbox tá»« ads.',
      },
      {
        type: 'paragraph',
        text: 'Ngay sau submit, khÃ¡ch cÃ²n nhá»› creative vÃ  offer, nhu cáº§u cÃ²n rÃµ, cáº£m xÃºc tá»« page cÃ²n má»›i. Há» cÅ©ng cÃ³ thá»ƒ Ä‘ang so sÃ¡nh nhiá»u bÃªn. CÃ ng cháº­m, há» cÃ ng dá»… quÃªn, láº¡nh Ä‘i hoáº·c Ä‘Æ°á»£c Ä‘á»‘i thá»§ xá»­ lÃ½ trÆ°á»›c; cuá»™c gá»i muá»™n dá»… thÃ nh má»™t sá»‘ láº¡.',
      },
      {
        type: 'paragraph',
        text: 'Lead khÃ´ng Ä‘á»©ng yÃªn chá» mÃ¬nh. Sau form submit, nhiá»‡t Ä‘á»™ báº¯t Ä‘áº§u giáº£m. Pháº£n há»“i nhanh khÃ´ng Ä‘áº£m báº£o chá»‘t, nhÆ°ng giá»¯ Ä‘Æ°á»£c context Ä‘á»ƒ cuá»™c trÃ² chuyá»‡n cÃ³ cÆ¡ há»™i báº¯t Ä‘áº§u.',
      },
      { type: 'visual', variant: 'lead-temperature-after-submit' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao speed to lead áº£nh hÆ°á»Ÿng trá»±c tiáº¿p Ä‘áº¿n hiá»‡u quáº£ paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Ads táº¡o lead, follow-up biáº¿n lead thÃ nh cÆ¡ há»™i' },
      {
        type: 'paragraph',
        text: 'Ads táº¡o attention, click, traffic, form, inbox hoáº·c cuá»™c gá»i. Follow-up quyáº¿t Ä‘á»‹nh lead cÃ³ Ä‘Æ°á»£c liÃªn há»‡, khÃ¡ch cÃ³ hiá»ƒu Ä‘Ãºng offer, nhu cáº§u cÃ³ Ä‘Æ°á»£c khai thÃ¡c, objection cÃ³ Ä‘Æ°á»£c xá»­ lÃ½ vÃ  cÃ³ bÆ°á»›c bÃ¡o giÃ¡, demo hoáº·c tÆ° váº¥n hay khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u hai bÃªn khÃ´ng ná»‘i nhau, marketing chá»‰ tháº¥y Ä‘áº§u funnel cÃ²n sales chá»‰ tháº¥y cuá»‘i funnel; cáº£ hai dá»… Ä‘á»• lá»—i. Paid ads khÃ´ng káº¿t thÃºc á»Ÿ lead. Lead lÃ  Ä‘iá»ƒm bÃ n giao sang má»™t há»‡ xá»­ lÃ½ khÃ¡c.',
      },
      { type: 'heading', text: 'Memo 03 â€” Nhá»¯ng Ä‘iá»ƒm lÃ m lead nguá»™i sau khi vÃ o há»‡ thá»‘ng' },
      {
        type: 'list',
        items: [
          'KhÃ´ng cÃ³ owner: lead vá» nhÆ°ng khÃ´ng ai biáº¿t ai pháº£i xá»­ lÃ½.',
          'Pháº£n há»“i cháº­m: khÃ¡ch quÃªn context hoáº·c Ä‘Ã£ nÃ³i chuyá»‡n vá»›i bÃªn khÃ¡c.',
          'Thiáº¿u source, campaign hoáº·c angle: sales khÃ´ng biáº¿t khÃ¡ch quan tÃ¢m váº¥n Ä‘á» gÃ¬.',
          'Má»Ÿ Ä‘áº§u quÃ¡ chung: cuá»™c gá»i cÃ³ cáº£m giÃ¡c láº¡nh dÃ¹ khÃ¡ch vá»«a submit.',
          'KhÃ´ng cáº­p nháº­t status: team khÃ´ng biáº¿t Ä‘Ã£ gá»i, chÆ°a gá»i, háº¹n láº¡i hay máº¥t.',
          'KhÃ´ng cÃ³ next action vÃ  follow-up date: cuá»™c trÃ² chuyá»‡n xong rá»“i trÃ´i.',
          'KhÃ´ng ghi lost reason: khÃ´ng biáº¿t máº¥t vÃ¬ giÃ¡, thá»i Ä‘iá»ƒm, proof hay sai nhu cáº§u.',
          'KÃªnh khÃ´ng Ä‘á»“ng bá»™: Zalo, inbox, hotline vÃ  form thÃ nh nhiá»u record rá»i.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lead rÆ¡i khÃ´ng pháº£i lÃºc nÃ o do ads sai. NÃ³ cÃ³ thá»ƒ rÆ¡i vÃ¬ há»‡ xá»­ lÃ½ sau lead chÆ°a rÃµ.',
      },
      { type: 'visual', variant: 'ads-to-sales-lead-handoff' },
      { type: 'heading', text: 'Memo 04 â€” â€œLead yáº¿uâ€ lÃ  má»™t nhÃ£n quÃ¡ chung' },
      {
        type: 'paragraph',
        text: 'Sales feedback â€œlead yáº¿uâ€ ráº¥t quan trá»ng nhÆ°ng chÆ°a Ä‘á»§ Ä‘á»ƒ marketing sá»­a. Cáº§n tÃ¡ch thÃ nh khÃ´ng nghe mÃ¡y, sai khu vá»±c, thiáº¿u ngÃ¢n sÃ¡ch, chÆ°a cáº§n ngay, há»i cho biáº¿t, hiá»ƒu sai offer, ká»³ vá»ng sai, Ä‘Ã£ chá»n Ä‘á»‘i thá»§, cáº§n thÃªm proof hay sales gá»i trá»….',
      },
      {
        type: 'paragraph',
        text: 'Sai tá»‡p dáº«n tá»›i sá»­a targeting, message hoáº·c form. Ká»³ vá»ng sai cáº§n sá»­a creative, page vÃ  offer. KhÃ´ng nghe mÃ¡y cáº§n kiá»ƒm response time cÃ¹ng kÃªnh liÃªn há»‡. Thiáº¿u proof cáº§n case, FAQ hoáº·c retargeting. Gá»i cháº­m cáº§n sá»­a owner, SLA vÃ  notification.',
      },
      {
        type: 'paragraph',
        text: 'â€œLead yáº¿uâ€ khÃ´ng pháº£i diagnosis. NÃ³ má»›i lÃ  triá»‡u chá»©ng.',
      },
      { type: 'heading', text: 'Memo 05 â€” CRM status tá»‘i thiá»ƒu giÃºp ngá»«ng cÃ£i báº±ng cáº£m giÃ¡c' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cáº§n CRM phá»©c táº¡p ngay. DÃ²ng cháº£y tá»‘i thiá»ƒu cÃ³ thá»ƒ gá»“m New, Assigned, Contacted, Not reached, Qualified, Unqualified, Need follow-up, Quoted hoáº·c Meeting, Won vÃ  Lost.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i record nÃªn cÃ³ source hoáº·c campaign, owner, first response time, last contact, next action, follow-up date, nhu cáº§u ngáº¯n vÃ  lost reason. Status khÃ´ng dÃ¹ng Ä‘á»ƒ quáº£n lÃ½ cho Ä‘áº¹p; nÃ³ giÃºp ads vÃ  sales nhÃ¬n cÃ¹ng má»™t dÃ²ng lead.',
      },
      { type: 'visual', variant: 'minimal-crm-status-for-paid-ads' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n speed to lead vÃ  CRM follow-up checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 06 â€” Äá»c speed to lead cÃ¹ng CPL vÃ  quality' },
      {
        type: 'paragraph',
        text: 'NgoÃ i CPL, CTR, CPC vÃ  form submit, report cáº§n first response time, contacted rate, not reached rate, qualified rate, follow-up completion, no-next-action rate, quote hoáº·c meeting rate, lost reason vÃ  tuá»•i cá»§a lead chÆ°a xá»­ lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'Campaign CPL á»•n nhÆ°ng response time cháº­m cÃ³ thá»ƒ bá»‹ Ä‘Ã¡nh giÃ¡ oan. Campaign Ã­t lead hÆ¡n nhÆ°ng sales pháº£n há»“i nhanh vÃ  qualified tá»‘t hÆ¡n cÃ³ thá»ƒ Ä‘Ã¡ng giá»¯. ÄÃ¢y khÃ´ng pháº£i lÃ½ do luÃ´n bÃªnh ads; message, offer vÃ  page váº«n cÃ³ thá»ƒ kÃ©o sai ngÆ°á»i.',
      },
      { type: 'heading', text: 'Memo 07 â€” Sales nÃªn má»Ÿ Ä‘áº§u tá»« context cá»§a ads' },
      {
        type: 'paragraph',
        text: 'KhÃ¡ch Ä‘áº¿n tá»« angle â€œnhÃ  gáº§n biá»ƒn báº¡c mÃ uâ€ nÃªn Ä‘Æ°á»£c há»i theo bá» máº·t, mÃ´i trÆ°á»ng vÃ  tÃ¬nh tráº¡ng hiá»‡n táº¡i. Lead tá»« page audit tracking nÃªn Ä‘Æ°á»£c há»i vá» tracking vÃ  lead flow. NgÆ°á»i quan tÃ¢m mÃ¹i sÆ¡n cáº§n Ä‘Æ°á»£c há»i vá» tráº» nhá», thá»i gian thi cÃ´ng vÃ  váº­t liá»‡u.',
      },
      {
        type: 'paragraph',
        text: 'Má»Ÿ Ä‘áº§u báº±ng â€œanh chá»‹ cáº§n tÆ° váº¥n gÃ¬?â€ bá» phÃ­ context marketing Ä‘Ã£ táº¡o. Follow-up tá»‘t khÃ´ng báº¯t Ä‘áº§u tá»« sá»‘ Ä‘iá»‡n thoáº¡i; nÃ³ báº¯t Ä‘áº§u tá»« Ä‘iá»u khÃ¡ch vá»«a quan tÃ¢m.',
      },
      { type: 'heading', text: 'Memo 08 â€” Follow-up khÃ´ng pháº£i gá»i má»™t láº§n rá»“i káº¿t luáº­n' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng nghe mÃ¡y láº§n Ä‘áº§u chÆ°a chá»©ng minh lead rÃ¡c. KhÃ¡ch cÃ³ thá»ƒ báº­n, khÃ´ng nháº­n sá»‘ láº¡, muá»‘n trao Ä‘á»•i qua Zalo, cáº§n xem thÃªm thÃ´ng tin hoáº·c muá»‘n háº¹n thá»i Ä‘iá»ƒm khÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t nhá»‹p há»£p lÃ½ lÃ  pháº£n há»“i Ä‘áº§u Ä‘á»§ nhanh, Ä‘á»ƒ láº¡i tin nháº¯n ngáº¯n cÃ³ context náº¿u chÆ°a káº¿t ná»‘i, háº¹n láº¡i, gá»­i proof phÃ¹ há»£p vÃ  ghi next action. KhÃ´ng nÃªn gá»i hoáº·c inbox dá»“n dáº­p gÃ¢y pháº£n cáº£m chá»‰ Ä‘á»ƒ Ä‘á»§ KPI.',
      },
      {
        type: 'paragraph',
        text: 'Follow-up tá»‘t cÃ³ nhá»‹p, context vÃ  ghi nháº­n; khÃ´ng pháº£i gá»i tháº­t nhiá»u.',
      },
      { type: 'heading', text: 'Memo 09 â€” Sales feedback pháº£i quay láº¡i marketing' },
      {
        type: 'paragraph',
        text: 'Sales nghe Ä‘Æ°á»£c khÃ¡ch há»i gÃ¬, hiá»ƒu sai gÃ¬, sá»£ Ä‘iá»u gÃ¬, cáº§n proof nÃ o, pháº£n Ä‘á»‘i giÃ¡ vÃ¬ sao, chÆ°a mua vÃ¬ thiáº¿u thÃ´ng tin gÃ¬ vÃ  lead tá»« angle hoáº·c offer nÃ o dá»… nÃ³i chuyá»‡n hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Feedback Ä‘Ã³ cáº§n quay láº¡i hook, creative angle, proof, FAQ, form field, landing hero, offer, retargeting vÃ  budget decision. NÃ³ khÃ´ng nÃªn náº±m cháº¿t trong cuá»™c gá»i hoáº·c má»™t cá»™t note khÃ´ng ai Ä‘á»c.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng má»™t lead, hai cÃ¡ch follow-up' },
      {
        type: 'paragraph',
        text: 'Team A nháº­n lead trong sheet, vÃ i giá» sau má»›i gá»i, khÃ´ng biáº¿t nguá»“n, má»Ÿ Ä‘áº§u chung chung. KhÃ¡ch nÃ³i Ä‘ang báº­n; khÃ´ng cÃ³ follow-up date. VÃ i ngÃ y sau record Ä‘Æ°á»£c ghi â€œkhÃ´ng nhu cáº§uâ€.',
      },
      {
        type: 'paragraph',
        text: 'Team B nháº­n lead trong CRM cÃ³ campaign vÃ  angle, assign owner nhanh, gá»i hoáº·c nháº¯n vá»›i context. Náº¿u khÃ¡ch báº­n, sales háº¹n láº¡i, gá»­i case liÃªn quan, ghi next action vÃ  lost reason. Marketing Ä‘á»c Ä‘Æ°á»£c intent cá»§a angle Ä‘Ã³.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡c biá»‡t khÃ´ng chá»‰ náº±m á»Ÿ lead. NÃ³ náº±m á»Ÿ há»‡ thá»‘ng xá»­ lÃ½ sau khi ads táº¡o ra lead.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign bá»‹ Ä‘Ã¡nh giÃ¡ lead yáº¿u nhÆ°ng tháº­t ra lead pháº£n há»“i cháº­m vÃ  khÃ´ng cÃ³ next action.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng nghÄ© nhiá»‡m vá»¥ lÃ  táº¡o lead vá»›i chi phÃ­ há»£p lÃ½; pháº§n sau thuá»™c sales. CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra ranh giá»›i Ä‘Ã³ khÃ´ng sáº¡ch nhÆ° váº­y.',
      },
      {
        type: 'paragraph',
        text: 'Lead vá» mÃ  sales khÃ´ng biáº¿t nguá»“n, context, owner, status vÃ  next action thÃ¬ ads report sáº½ bá»‹ Ä‘á»c sai. Campaign bá»‹ gá»i lead yáº¿u dÃ¹ lead Ä‘Ã£ nguá»™i trong há»‡ thá»‘ng.',
      },
      {
        type: 'paragraph',
        text: 'Lead khÃ´ng pháº£i káº¿t quáº£ cuá»‘i. Lead lÃ  nguyÃªn liá»‡u; follow-up quyáº¿t Ä‘á»‹nh nguyÃªn liá»‡u Ä‘Ã³ cÃ³ thÃ nh cuá»™c trÃ² chuyá»‡n vÃ  cÆ¡ há»™i hay khÃ´ng.',
      },
      { type: 'heading', text: 'Káº¿t â€” Lead quality Ä‘Æ°á»£c giá»¯ hoáº·c máº¥t sau submit' },
      {
        type: 'paragraph',
        text: 'Má»™t lead tá»‘t váº«n nguá»™i náº¿u pháº£n há»“i cháº­m, thiáº¿u owner, status, next action hoáº·c context. Muá»‘n Ä‘á»c campaign Ä‘Ãºng, hÃ£y ná»‘i Ads Manager vá»›i first response time, contacted, qualified, follow-up date vÃ  lost reason. Náº¿u khÃ´ng, â€œlead yáº¿uâ€ cÃ³ thá»ƒ chá»‰ lÃ  tÃªn gá»i cá»§a má»™t handoff chÆ°a rÃµ.',
      },
    ],
    cta: 'Náº¿u campaign cá»§a báº¡n Ä‘ang cÃ³ lead nhÆ°ng sales bÃ¡o â€œlead yáº¿uâ€, Ä‘á»«ng vá»™i táº¯t ads. HÃ£y kiá»ƒm trÆ°á»›c: lead Ä‘Æ°á»£c assign cho ai, pháº£n há»“i sau bao lÃ¢u, sales cÃ³ biáº¿t khÃ¡ch Ä‘áº¿n tá»« angle nÃ o khÃ´ng, CRM cÃ³ status/next action khÃ´ng vÃ  lost reason cÃ³ Ä‘á»§ rÃµ Ä‘á»ƒ marketing sá»­a vÃ²ng sau khÃ´ng?',
  },
  {
    title: 'Offline conversion feedback: vÃ¬ sao ads cáº§n biáº¿t lead nÃ o tháº­t sá»± cháº¥t lÆ°á»£ng?',
    slug: 'offline-conversion-feedback-vi-sao-ads-can-biet-lead-nao-that-su-chat-luong',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-stage-team-01.jpg",
                "alt": "Team posing on an exhibition stage",
                "caption": "Exhibition stage team photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Náº¿u ads chá»‰ nháº­n event Lead sau form submit, platform vÃ  team marketing sáº½ xem má»i lead gáº§n nhÆ° giá»‘ng nhau. NhÆ°ng vá»›i business, lead khÃ´ng nghe mÃ¡y, lead sai nhu cáº§u, lead qualified vÃ  lead thÃ nh khÃ¡ch lÃ  nhá»¯ng tÃ­n hiá»‡u ráº¥t khÃ¡c nhau. Offline conversion feedback giÃºp CRM/sales quay láº¡i ads Ä‘á»ƒ team biáº¿t campaign nÃ o táº¡o cÆ¡ há»™i tháº­t, khÃ´ng chá»‰ táº¡o form submit.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Ads biáº¿t cÃ³ lead, nhÆ°ng khÃ´ng biáº¿t lead Ä‘i tá»›i Ä‘Ã¢u' },
      {
        type: 'paragraph',
        text: 'Campaign Ä‘ang cháº¡y, Ads Manager bÃ¡o Lead vÃ  CPL cháº¥p nháº­n Ä‘Æ°á»£c. Platform tiáº¿p tá»¥c tÃ¬m ngÆ°á»i cÃ³ kháº£ nÄƒng submit form. á»ž phÃ­a sales, cÃ³ ngÆ°á»i khÃ´ng nghe mÃ¡y, sai nhu cáº§u, Ä‘Ãºng tá»‡p nhÆ°ng chÆ°a cÃ³ ngÃ¢n sÃ¡ch, Ä‘Ã£ háº¹n tÆ° váº¥n, nháº­n bÃ¡o giÃ¡ hoáº·c mua.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t sá»‘ lead máº¥t vÃ¬ giÃ¡, thiáº¿u proof hoáº·c thá»i Ä‘iá»ƒm chÆ°a phÃ¹ há»£p. Trong Ads Manager, táº¥t cáº£ váº«n cÃ³ thá»ƒ chá»‰ mang cÃ¹ng nhÃ£n â€œLeadâ€.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u há»‡ thá»‘ng chá»‰ ghi form submit, ads vÃ  marketing Ä‘ang há»c tá»« tÃ­n hiá»‡u nÃ´ng hÆ¡n Ä‘iá»u business thá»±c sá»± cáº§n.',
      },
      { type: 'heading', text: 'Memo 01 â€” Form submit lÃ  Ä‘iá»ƒm báº¯t Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Submit cho biáº¿t má»™t ngÆ°á»i Ä‘á»ƒ láº¡i thÃ´ng tin. NÃ³ chÆ°a nÃ³i ngÆ°á»i Ä‘Ã³ cÃ³ contact Ä‘Æ°á»£c, Ä‘Ãºng nhu cáº§u, Ä‘Ãºng khu vá»±c, cÃ³ ngÃ¢n sÃ¡ch, Ä‘ang trong thá»i Ä‘iá»ƒm mua, Ä‘i tá»›i tÆ° váº¥n hoáº·c bÃ¡o giÃ¡, thÃ nh khÃ¡ch hay máº¥t vÃ¬ lÃ½ do gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Lead event ráº¥t quan trá»ng Ä‘á»ƒ Ä‘á»c funnel. NhÆ°ng náº¿u chá»‰ tá»‘i Æ°u theo Lead, team cÃ³ thá»ƒ tÃ¬m thÃªm ngÆ°á»i dá»… Ä‘iá»n form thay vÃ¬ ngÆ°á»i dá»… trá»Ÿ thÃ nh cÆ¡ há»™i.',
      },
      {
        type: 'paragraph',
        text: 'Lead khÃ´ng pháº£i má»™t tÃ­n hiá»‡u Ä‘á»“ng nháº¥t. Sau submit cÃ²n nhiá»u táº§ng cháº¥t lÆ°á»£ng khÃ¡c nhau.',
      },
      { type: 'visual', variant: 'lead-to-business-outcome-signal' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao paid ads cáº§n offline conversion feedback tá»« CRM vÃ  sales.',
      },
      { type: 'heading', text: 'Memo 02 â€” Khi má»i lead ngang nhau, ads dá»… há»c nÃ´ng' },
      {
        type: 'paragraph',
        text: 'Lead A Ä‘iá»n vÃ¬ tÃ² mÃ², khÃ´ng nghe mÃ¡y vÃ  sai nhu cáº§u. Lead B Ä‘Ãºng nhu cáº§u, sales contact Ä‘Æ°á»£c, cáº§n tÆ° váº¥n thÃªm. Lead C Ä‘Ãºng tá»‡p, cÃ³ ngÃ¢n sÃ¡ch, nháº­n bÃ¡o giÃ¡ vÃ  cÃ³ kháº£ nÄƒng mua.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u cáº£ ba chá»‰ Ä‘Æ°á»£c gá»­i vÃ  report nhÆ° má»™t event Lead, platform khÃ³ biáº¿t tÃ­n hiá»‡u nÃ o Ä‘Ã¡ng há»c hÆ¡n. Platform khÃ´ng tá»± hiá»ƒu business; nÃ³ tá»‘i Æ°u theo dá»¯ liá»‡u Ä‘Æ°á»£c cung cáº¥p.',
      },
      {
        type: 'paragraph',
        text: 'TÃ­n hiá»‡u Ä‘áº§u vÃ o nÃ´ng thÆ°á»ng dáº«n tá»›i cÃ¡ch tá»‘i Æ°u vÃ  quyáº¿t Ä‘á»‹nh cÅ©ng nÃ´ng.',
      },
      { type: 'heading', text: 'Memo 03 â€” Offline conversion feedback lÃ  gÃ¬?' },
      {
        type: 'paragraph',
        text: 'ÄÃ³ lÃ  viá»‡c Ä‘Æ°a tÃ­n hiá»‡u xáº£y ra sau form submit quay láº¡i há»‡ thá»‘ng ads hoáº·c reporting. Ads táº¡o lead; CRM vÃ  sales xá»­ lÃ½; status Ä‘Æ°á»£c cáº­p nháº­t; team biáº¿t lead nÃ o contacted, qualified, won hoáº·c lost.',
      },
      {
        type: 'paragraph',
        text: 'ThÃ´ng tin nÃ y giÃºp quyáº¿t Ä‘á»‹nh giá»¯ campaign, sá»­a creative, Ä‘á»•i offer, chá»‰nh form hoáº·c page, tÄƒng nguá»“n nÃ o vÃ  dá»«ng nguá»“n nÃ o. Khi há»‡ thá»‘ng Ä‘á»§ sáº¡ch vÃ  phÃ¹ há»£p, doanh nghiá»‡p cÃ³ thá»ƒ cÃ¢n nháº¯c gá»­i signal sÃ¢u hÆ¡n vá» platform.',
      },
      {
        type: 'paragraph',
        text: 'Offline feedback khÃ´ng báº¯t Ä‘áº§u tá»« API. NÃ³ báº¯t Ä‘áº§u tá»« viá»‡c doanh nghiá»‡p chá»‹u ghi láº¡i Ä‘iá»u gÃ¬ xáº£y ra sau khi lead vÃ o.',
      },
      { type: 'visual', variant: 'offline-conversion-feedback-loop' },
      { type: 'heading', text: 'Memo 04 â€” SME khÃ´ng cáº§n báº¯t Ä‘áº§u báº±ng há»‡ thá»‘ng phá»©c táº¡p' },
      {
        type: 'paragraph',
        text: 'Nghe offline conversion, nhiá»u team nghÄ© ngay tá»›i API, server-side, automation, data warehouse hoáº·c conversion import. Nhá»¯ng thá»© Ä‘Ã³ cÃ³ thá»ƒ há»¯u Ã­ch sau nÃ y, nhÆ°ng khÃ´ng pháº£i bÆ°á»›c Ä‘áº§u báº¯t buá»™c.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t Sheet hoáº·c CRM Ä‘Æ¡n giáº£n Ä‘Ã£ cÃ³ giÃ¡ trá»‹ náº¿u má»—i lead cÃ³ source, campaign, owner, status, first response time, qualified hoáº·c unqualified, next action, follow-up date, won, lost vÃ  lost reason.',
      },
      {
        type: 'paragraph',
        text: 'Review theo source hoáº·c campaign má»—i tuáº§n trÆ°á»›c; chá»‰ nghÄ© tá»›i automation khi volume, quy trÃ¬nh vÃ  data Ä‘Ã£ Ä‘á»§ sáº¡ch. Automation trÃªn status lá»™n xá»™n chá»‰ lÃ m lá»—i cháº¡y nhanh hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 05 â€” NÄƒm táº§ng feedback trÆ°á»›c automation' },
      {
        type: 'list',
        items: [
          'Lead hygiene: record vÃ o Ä‘á»§, khÃ´ng trÃ¹ng quÃ¡ nhiá»u, source khÃ´ng máº¥t, contact Ä‘Ãºng format vÃ  owner rÃµ.',
          'Sales status: contacted, not reached, qualified, unqualified, next action vÃ  follow-up date.',
          'Opportunity: quote, demo, meeting, proposal hoáº·c negotiation.',
          'Outcome: won, lost, lost reason, value hoáº·c deal size náº¿u phÃ¹ há»£p.',
          'Ads learning: campaign táº¡o qualified lead, creative kÃ©o Ä‘Ãºng nhu cáº§u, offer gÃ¢y sai ká»³ vá»ng vÃ  form lá»c tá»‘t hÆ¡n.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Feedback cÃ ng sÃ¢u, quyáº¿t Ä‘á»‹nh cÃ ng bá»›t phá»¥ thuá»™c vÃ o CPL vÃ  sá»‘ submit nÃ´ng.',
      },
      { type: 'visual', variant: 'five-layers-after-lead-submit' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n offline conversion feedback checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 06 â€” Feedback loop lÃ m creative tá»‘t hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Sales outcome cho creative team biáº¿t angle nÃ o kÃ©o Ä‘Ãºng nhu cáº§u, hook nÃ o chá»‰ táº¡o tÃ² mÃ², proof nÃ o tÄƒng tin, objection nÃ o láº·p láº¡i, claim nÃ o táº¡o ká»³ vá»ng sai vÃ  format nÃ o táº¡o nhiá»u qualified lead hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t creative CPL cao cÃ³ thá»ƒ táº¡o cuá»™c trÃ² chuyá»‡n ráº¥t Ä‘Ãºng váº¥n Ä‘á». Máº«u CPL tháº¥p khÃ¡c láº¡i kÃ©o ngÆ°á»i chá»‰ há»i giÃ¡ hoáº·c khÃ´ng nhá»› Ä‘Ã£ Ä‘Äƒng kÃ½. Creative tháº¯ng khÃ´ng chá»‰ cÃ³ CTR hoáº·c CPL Ä‘áº¹p; nÃ³ kÃ©o Ä‘Ãºng loáº¡i cuá»™c trÃ² chuyá»‡n.',
      },
      { type: 'heading', text: 'Memo 07 â€” Lost reason giÃºp sá»­a offer vÃ  landing page' },
      {
        type: 'paragraph',
        text: 'Nhiá»u lead máº¥t vÃ¬ â€œkhÃ´ng hiá»ƒu gÃ³iâ€ cho tháº¥y offer hoáº·c page chÆ°a rÃµ. â€œGiÃ¡ caoâ€ cÃ³ thá»ƒ cáº§n thÃªm proof, qualification hay phÃ¢n khÃºc khÃ¡c. â€œKhÃ´ng Ä‘Ãºng nhu cáº§uâ€ gá»£i Ã½ creative hoáº·c form kÃ©o sai tá»‡p.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u khÃ¡ch há»i láº·p má»™t cÃ¢u, FAQ chÆ°a lÃ m Ä‘á»§ viá»‡c. Náº¿u cáº§n sáº¿p hoáº·c ngÆ°á»i nhÃ  quyáº¿t, team cÃ³ thá»ƒ cáº§n case hoáº·c tÃ i liá»‡u dá»… chia sáº». Lost reason khÃ´ng chá»‰ lÃ  note sales; nÃ³ lÃ  nguyÃªn liá»‡u sá»­a marketing system.',
      },
      { type: 'heading', text: 'Memo 08 â€” Feedback giÃºp budget decision bá»›t cáº£m tÃ­nh' },
      {
        type: 'paragraph',
        text: 'Chá»‰ nhÃ¬n CPL khiáº¿n campaign ráº» dá»… Ä‘Æ°á»£c tÄƒng vÃ  campaign Ä‘áº¯t dá»… bá»‹ táº¯t. Khi ná»‘i qualified, won vÃ  lost, team cÃ³ thá»ƒ giá»¯ nguá»“n CPL cao nhÆ°ng quality tá»‘t, hoáº·c sá»­a nguá»“n ráº» mÃ  unqualified quÃ¡ nhiá»u.',
      },
      {
        type: 'paragraph',
        text: 'Retargeting Ã­t lead nhÆ°ng Ä‘i xa hÆ¡n cÃ³ thá»ƒ cÃ³ vai trÃ². Search Ä‘áº¯t hÆ¡n nhÆ°ng close tá»‘t cÃ³ thá»ƒ váº«n há»£p lÃ½. Social cold cáº§n nurture lÃ¢u hÆ¡n search high intent. Budget nÃªn Ä‘i theo kháº£ nÄƒng táº¡o outcome, khÃ´ng chá»‰ lead ráº».',
      },
      { type: 'heading', text: 'Memo 09 â€” Khi nÃ o nÃªn gá»­i signal ngÆ°á»£c vá» platform?' },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ cÃ¢n nháº¯c khi volume Ä‘á»§, CRM status sáº¡ch, source rÃµ, team thá»‘ng nháº¥t qualified hoáº·c opportunity nghÄ©a lÃ  gÃ¬, cÃ³ ngÆ°á»i QA vÃ  consent cÃ¹ng data handling Ä‘Æ°á»£c xá»­ lÃ½ minh báº¡ch, phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng nÃªn vá»™i khi source máº¥t nhiá»u, lead trÃ¹ng, sales cáº­p nháº­t tháº¥t thÆ°á»ng, status dá»±a trÃªn cáº£m giÃ¡c hoáº·c chÆ°a cÃ³ nhá»‹p review. Gá»­i signal sÃ¢u chá»‰ há»¯u Ã­ch khi signal Ä‘Ã¡ng tin; dá»¯ liá»‡u báº©n khÃ´ng trá»Ÿ nÃªn tá»‘t hÆ¡n vÃ¬ Ä‘Æ°á»£c tá»± Ä‘á»™ng hÃ³a.',
      },
      {
        type: 'paragraph',
        text: 'Ngay cáº£ khi signal sáº¡ch, gá»­i ngÆ°á»£c vá» platform khÃ´ng Ä‘áº£m báº£o ads tá»± tháº¯ng. NÃ³ chá»‰ cho há»‡ thá»‘ng má»™t Ä‘áº§u vÃ o gáº§n business outcome hÆ¡n.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng CPL, feedback cho quyáº¿t Ä‘á»‹nh khÃ¡c' },
      {
        type: 'paragraph',
        text: 'Campaign A cÃ³ CPL tháº¥p vÃ  nhiá»u Lead, nhÆ°ng contacted cÃ¹ng qualified tháº¥p; lost reason chá»§ yáº¿u lÃ  sai nhu cáº§u hoáº·c há»i cho biáº¿t. Náº¿u chá»‰ nhÃ¬n Ads Manager, campaign nÃ y cÃ³ váº» tá»‘t.',
      },
      {
        type: 'paragraph',
        text: 'Campaign B CPL cao vÃ  Ã­t Lead hÆ¡n, nhÆ°ng contacted, qualified tá»‘t, Ä‘Ã£ cÃ³ quote hoáº·c demo, sales note ghi nhu cáº§u rÃµ. Feedback loop cho tháº¥y B Ä‘Ã¡ng há»c tiáº¿p hoáº·c scale cÃ³ kiá»ƒm soÃ¡t.',
      },
      {
        type: 'paragraph',
        text: 'Offline feedback lÃ m team tháº¥y Ä‘iá»u event Lead khÃ´ng nÃ³i Ä‘Æ°á»£c.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign CPL tháº¥p nhÆ°ng offline feedback cho tháº¥y qualified lead tháº¥p.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng xem form submit lÃ  káº¿t quáº£ khÃ¡ rÃµ. CÃ ng lÃ m, tÃ´i dáº§n tháº¥y Lead lÃ  tÃ­n hiá»‡u thÃ´: cÃ³ ngÆ°á»i khÃ´ng nghe mÃ¡y, sai nhu cáº§u, cáº§n proof, Ä‘i tá»›i bÃ¡o giÃ¡, thÃ nh khÃ¡ch hoáº·c máº¥t nhÆ°ng Ä‘á»ƒ láº¡i bÃ i há»c.',
      },
      {
        type: 'paragraph',
        text: 'Gom táº¥t cáº£ thÃ nh má»™t chá»¯ Lead lÃ m platform há»c nÃ´ng vÃ  team quyáº¿t Ä‘á»‹nh nÃ´ng. Paid ads sÃ¢u táº¡o vÃ²ng há»c giá»¯a ads, CRM, sales vÃ  outcome.',
      },
      {
        type: 'paragraph',
        text: 'Lead submit lÃ  cá»­a vÃ o. Feedback loop giÃºp há»‡ thá»‘ng kÃ©o Ä‘Ãºng loáº¡i lead hÆ¡n á»Ÿ vÃ²ng sau.',
      },
      { type: 'heading', text: 'Káº¿t â€” Ads cáº§n há»c tiáº¿p sau form submit' },
      {
        type: 'paragraph',
        text: 'Offline feedback phÃ¢n biá»‡t contacted, qualified, opportunity, won vÃ  lost reason. SME chÆ°a cáº§n automation phá»©c táº¡p, nhÆ°ng cáº§n status tá»‘i thiá»ƒu, source rÃµ, sales feedback Ä‘á»u vÃ  nhá»‹p review Ä‘á»ƒ bÃ i há»c quay láº¡i creative, offer, page vÃ  budget.',
      },
    ],
    cta: 'Náº¿u campaign cá»§a báº¡n Ä‘ang cÃ³ Lead nhÆ°ng doanh thu khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng, Ä‘á»«ng chá»‰ há»i CPL bao nhiÃªu. HÃ£y há»i: trong sá»‘ lead Ä‘Ã³, bao nhiÃªu contact Ä‘Æ°á»£c, bao nhiÃªu qualified, bao nhiÃªu cÃ³ next action, bao nhiÃªu Ä‘i tá»›i bÃ¡o giÃ¡/cuá»™c háº¹n vÃ  bÃ i há»c nÃ o Ä‘Ã£ quay láº¡i ads Ä‘á»ƒ vÃ²ng sau kÃ©o Ä‘Ãºng ngÆ°á»i hÆ¡n?',
  },
  {
    title: 'Chá»n sai objective: vÃ¬ sao ads tá»‘i Æ°u ráº¥t giá»i nhÆ°ng sai viá»‡c?',
    slug: 'chon-sai-objective-vi-sao-ads-toi-uu-rat-gioi-nhung-sai-viec',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-outdoor-event-walk-01.jpg",
                "alt": "Person walking in an outdoor event area",
                "caption": "Outdoor event moment",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Ads platform khÃ´ng tá»‘i Æ°u theo Ä‘iá»u mÃ¬nh mong trong Ä‘áº§u. NÃ³ tá»‘i Æ°u theo objective vÃ  event mÃ¬nh chá»n. Cháº¡y Traffic thÃ¬ nÃ³ tÃ¬m ngÆ°á»i dá»… click. Cháº¡y Engagement thÃ¬ nÃ³ tÃ¬m ngÆ°á»i dá»… tÆ°Æ¡ng tÃ¡c. Cháº¡y Lead thÃ¬ nÃ³ tÃ¬m ngÆ°á»i dá»… submit form. Náº¿u objective hoáº·c conversion event khÃ´ng khá»›p vá»›i má»¥c tiÃªu kinh doanh, campaign cÃ³ thá»ƒ tá»‘i Æ°u ráº¥t giá»i nhÆ°ng tá»‘i Æ°u sai viá»‡c.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Campaign Ä‘Ãºng objective, sai má»¥c tiÃªu kinh doanh' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign Traffic cÃ³ CPC ráº», click nhiá»u vÃ  landing page cÃ³ sessions. Report trÃ´ng nhÆ° Ä‘ang kÃ©o tá»‘t ngÆ°á»i vÃ o web, nhÆ°ng lead Ã­t, sales khÃ´ng cÃ³ thÃªm cÆ¡ há»™i vÃ  founder há»i vÃ¬ sao nhiá»u click mÃ  khÃ´ng ra khÃ¡ch.',
      },
      {
        type: 'paragraph',
        text: 'Campaign Engagement khÃ¡c cÃ³ like, comment, share vÃ  video view. BÃ i ads Ä‘Æ°á»£c chÃº Ã½ nhÆ°ng ngÆ°á»i tÆ°Æ¡ng tÃ¡c khÃ´ng Ä‘á»ƒ láº¡i thÃ´ng tin, remarketing khÃ´ng Ä‘i xa vÃ  sales váº«n thiáº¿u data.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ campaign khÃ´ng cháº¡y sai. NÃ³ lÃ m Ä‘Ãºng viá»‡c Ä‘Æ°á»£c giao: tÃ¬m ngÆ°á»i dá»… click hoáº·c tÆ°Æ¡ng tÃ¡c. Váº¥n Ä‘á» lÃ  viá»‡c Ä‘Ã³ chÆ°a khá»›p má»¥c tiÃªu kinh doanh.',
      },
      { type: 'heading', text: 'Memo 01 â€” Objective lÃ  cÃ¡ch giao viá»‡c cho thuáº­t toÃ¡n' },
      {
        type: 'paragraph',
        text: 'Platform khÃ´ng Ä‘á»c Ä‘Æ°á»£c mong muá»‘n mÆ¡ há»“ nhÆ° â€œtÃ¬m khÃ¡ch cháº¥t lÆ°á»£ngâ€, â€œra Ä‘Æ¡n Ä‘á»uâ€ hay â€œscale hiá»‡u quáº£â€. NÃ³ há»c tá»« objective vÃ  signal cá»¥ thá»ƒ: reach, traffic, engagement, video view, lead, purchase, value hoáº·c qualified lead náº¿u cÃ³ feedback.',
      },
      {
        type: 'paragraph',
        text: 'Chá»n Traffic, há»‡ thá»‘ng tÃ¬m ngÆ°á»i dá»… click. Chá»n Engagement, nÃ³ tÃ¬m ngÆ°á»i dá»… tÆ°Æ¡ng tÃ¡c. Chá»n Lead, nÃ³ tÃ¬m ngÆ°á»i dá»… submit. Náº¿u event báº¯n sai, platform váº«n tá»‘i Æ°u chÄƒm chá»‰ theo tÃ­n hiá»‡u sai.',
      },
      {
        type: 'paragraph',
        text: 'Objective khÃ´ng pháº£i má»™t nÃºt chá»n cho cÃ³. NÃ³ lÃ  báº£n mÃ´ táº£ cÃ´ng viá»‡c gá»­i cho thuáº­t toÃ¡n.',
      },
      { type: 'visual', variant: 'objective-as-algorithm-brief' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch vÃ¬ sao chá»n sai objective lÃ m ads tá»‘i Æ°u sai viá»‡c.',
      },
      { type: 'heading', text: 'Memo 02 â€” Traffic ráº» khÃ´ng Ä‘á»“ng nghÄ©a khÃ¡ch hÃ ng ráº»' },
      {
        type: 'paragraph',
        text: 'Traffic cÃ³ thá»ƒ há»¯u Ã­ch Ä‘á»ƒ kÃ©o ngÆ°á»i vÃ o content, táº¡o audience, Ä‘á»c engagement page sÆ¡ bá»™ hoáº·c phÃ¢n phá»‘i ná»™i dung Ä‘áº§u hÃ nh trÃ¬nh. NÃ³ cÃ³ vai trÃ² náº¿u team biáº¿t campaign chÆ°a Ä‘Æ°á»£c giao nhiá»‡m vá»¥ táº¡o sales.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng náº¿u business ká»³ vá»ng lead, platform váº«n cÃ³ thá»ƒ tÃ¬m ngÆ°á»i hay click, click ráº», tÃ² mÃ² hoáº·c chá»‰ Ä‘á»c cho biáº¿t. KhÃ´ng cÃ³ tracking sÃ¢u vÃ  CRM, team chá»‰ tháº¥y sessions mÃ  khÃ´ng biáº¿t ngÆ°á»i dÃ¹ng cÃ³ Ä‘i tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'Traffic lÃ  má»¥c tiÃªu kÃ©o lÆ°á»£t truy cáº­p. NÃ³ khÃ´ng tá»± Ä‘á»™ng lÃ  má»¥c tiÃªu kÃ©o khÃ¡ch hÃ ng.',
      },
      { type: 'heading', text: 'Memo 03 â€” Engagement tá»‘t chÆ°a cháº¯c lÃ  demand tháº­t' },
      {
        type: 'paragraph',
        text: 'Engagement cÃ³ thá»ƒ há»— trá»£ social proof, phÃ¢n phá»‘i content, test hook, xÃ¢y warm audience vÃ  táº¡o tÃ­n hiá»‡u ban Ä‘áº§u. Like, comment, share hay video view Ä‘á»u cÃ³ giÃ¡ trá»‹ trong Ä‘Ãºng vai trÃ².',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng ngÆ°á»i thÃ­ch tranh luáº­n chÆ°a cháº¯c mua; video view cao cÃ³ thá»ƒ Ä‘áº¿n tá»« tÃ­nh giáº£i trÃ­; comment nhiá»u cÃ³ thá»ƒ do tÃ² mÃ²; post Ä‘Æ°á»£c chÃº Ã½ chÆ°a chá»©ng minh offer Ä‘á»§ lá»±c. Retargeting tá»« tá»‡p tÆ°Æ¡ng tÃ¡c cÅ©ng chÆ°a cháº¯c táº¡o qualified lead.',
      },
      {
        type: 'paragraph',
        text: 'Engagement lÃ  attention. Attention chÆ°a tá»± Ä‘á»™ng lÃ  intent.',
      },
      { type: 'heading', text: 'Memo 04 â€” Lead objective váº«n sai náº¿u event quÃ¡ nÃ´ng' },
      {
        type: 'paragraph',
        text: 'Lead cÃ³ thá»ƒ lÃ  form má»Ÿ chÆ°a submit, instant form quÃ¡ dá»…, form thiáº¿u thÃ´ng tin, lead khÃ´ng nghe mÃ¡y, sai tá»‡p, qualified, Ä‘Ã£ nháº­n bÃ¡o giÃ¡ hoáº·c thÃ nh khÃ¡ch. Nhá»¯ng tráº¡ng thÃ¡i nÃ y khÃ´ng cÃ³ cÃ¹ng giÃ¡ trá»‹.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u táº¥t cáº£ Ä‘á»u Ä‘Æ°á»£c gá»­i nhÆ° má»™t Lead, platform cÃ³ thá»ƒ há»c theo ngÆ°á»i dá»… submit thay vÃ¬ ngÆ°á»i dá»… thÃ nh cÆ¡ há»™i. Lead objective gáº§n má»¥c tiÃªu láº¥y lead hÆ¡n Traffic, nhÆ°ng event definition vÃ  feedback phÃ­a sau má»›i quyáº¿t Ä‘á»‹nh tÃ­n hiá»‡u cÃ³ Ä‘á»§ tá»‘t.',
      },
      { type: 'visual', variant: 'shallow-objective-vs-deep-signal' },
      { type: 'heading', text: 'Memo 05 â€” Objective pháº£i khá»›p stage campaign' },
      {
        type: 'paragraph',
        text: 'Cold awareness hoáº·c content cÃ³ thá»ƒ dÃ¹ng reach, video, engagement hay traffic Ä‘á»ƒ test hook, táº¡o nháº­n biáº¿t hoáº·c warm audience. NhÆ°ng team pháº£i biáº¿t Ä‘Ã¢y chÆ°a pháº£i campaign lead chÃ­nh.',
      },
      {
        type: 'paragraph',
        text: 'Cold lead generation cáº§n event gáº§n lead tháº­t, page vÃ  form rÃµ, Lead báº¯n Ä‘Ãºng, CRM Ä‘á»c quality. Warm hoáº·c retargeting nÃªn bÃ¡m hÃ nh Ä‘á»™ng tiáº¿p theo nhÆ° booking, quote, purchase; message cáº§n proof, objection vÃ  next action.',
      },
      {
        type: 'paragraph',
        text: 'E-commerce hoáº·c Sales cáº§n event gáº§n order vÃ  revenue hÆ¡n, Ä‘á»“ng thá»i kiá»ƒm margin, refund vÃ  payback. Objective nÃªn theo stage vÃ  hÃ nh vi cáº§n há»c, khÃ´ng theo thÃ³i quen.',
      },
      { type: 'heading', text: 'Memo 06 â€” Objective pháº£i khá»›p page, form vÃ  tracking' },
      {
        type: 'paragraph',
        text: 'Lead objective khÃ´ng Ä‘á»§ náº¿u page má» CTA, form quÃ¡ dá»… hoáº·c quÃ¡ khÃ³, event báº¯n sai, thank-you Ä‘áº¿m trÃ¹ng, form khÃ´ng lá»c nhu cáº§u vÃ  sales nháº­n thiáº¿u context.',
      },
      {
        type: 'paragraph',
        text: 'Traffic cÅ©ng trá»Ÿ thÃ nh lÆ°á»£t truy cáº­p rá»i náº¿u page khÃ´ng tracking CTA, form start, engagement, khÃ´ng cÃ³ retargeting logic vÃ  thiáº¿u next step. Objective giao viá»‡c; page, form vÃ  tracking quyáº¿t Ä‘á»‹nh signal cÃ³ Ä‘Ã¡ng há»c khÃ´ng.',
      },
      { type: 'visual', variant: 'objective-readiness-checklist' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign objective readiness checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 07 â€” Signal sÃ¢u nháº¥t chÆ°a cháº¯c phÃ¹ há»£p khi data chÆ°a Ä‘á»§' },
      {
        type: 'paragraph',
        text: 'Qualified lead, purchase hay won gáº§n business hÆ¡n, nhÆ°ng cáº§n volume, event sáº¡ch, tracking á»•n, CRM cáº­p nháº­t Ä‘á»u, status thá»‘ng nháº¥t vÃ  delay cÃ³ thá»ƒ quáº£n lÃ½.',
      },
      {
        type: 'paragraph',
        text: 'Signal quÃ¡ sÃ¢u nhÆ°ng quÃ¡ Ã­t cÃ³ thá»ƒ lÃ m delivery yáº¿u, cost dao Ä‘á»™ng vÃ  campaign khÃ³ há»c. NÃªn tá»‘i Æ°u theo signal Ä‘á»§ gáº§n business outcome nhÆ°ng váº«n Ä‘á»§ sáº¡ch vÃ  Ä‘á»§ volume â€” khÃ´ng mÃ¡y mÃ³c chá»n táº§ng sÃ¢u nháº¥t.',
      },
      { type: 'heading', text: 'Memo 08 â€” Objective sai lÃ m team Ä‘á»c sai performance' },
      {
        type: 'paragraph',
        text: 'Cháº¡y Traffic rá»“i phÃ n nÃ n lead kÃ©m lÃ  báº¯t campaign lÃ m viá»‡c chÆ°a Ä‘Æ°á»£c giao. Cháº¡y Engagement rá»“i ká»³ vá»ng sales lÃ  nháº§m attention vá»›i intent. Cháº¡y Lead báº±ng form nÃ´ng cÃ³ thá»ƒ tháº¯ng CPL nhÆ°ng thua qualified.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»£c láº¡i, cháº¡y Purchase vá»›i tracking thiáº¿u hoáº·c volume tháº¥p cÃ³ thá»ƒ khiáº¿n platform há»c khÃ³. ÄÃ¡nh giÃ¡ campaign pháº£i dá»±a trÃªn objective ban Ä‘áº§u vÃ  role cá»§a campaign.',
      },
      { type: 'heading', text: 'Memo 09 â€” Review objective sau campaign cycle' },
      {
        type: 'list',
        items: [
          'Campaign Ä‘Æ°á»£c giao objective gÃ¬ vÃ  cÃ³ khá»›p má»¥c tiÃªu tháº­t khÃ´ng?',
          'Event tá»‘i Æ°u cÃ³ báº¯n Ä‘Ãºng, Ä‘á»§ volume vÃ  cÃ³ cháº¥t lÆ°á»£ng khÃ´ng?',
          'Landing page hoáº·c form táº¡o friction hay ká»³ vá»ng sai á»Ÿ Ä‘Ã¢u?',
          'CRM vÃ  sales feedback xÃ¡c nháº­n signal Ä‘Ã³ ra sao?',
          'NÃªn giá»¯ objective, Ä‘á»•i event, Ä‘á»•i page, form hay campaign role?',
          'Objective nÃ y phÃ¹ há»£p Ä‘á»ƒ test hay Ä‘Ã£ Ä‘á»§ Ä‘iá»u kiá»‡n cho scale?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Objective khÃ´ng pháº£i set má»™t láº§n rá»“i quÃªn. NÃ³ cáº§n Ä‘Æ°á»£c review khi team hiá»ƒu thÃªm vá» quality vÃ  outcome cá»§a signal.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng offer, ba objective, ba nhiá»‡m vá»¥' },
      {
        type: 'paragraph',
        text: 'Vá»›i offer audit tracking trÆ°á»›c khi scale ads, campaign Content hoáº·c Traffic cÃ³ thá»ƒ kÃ©o ngÆ°á»i Ä‘á»c checklist, test problem awareness vÃ  táº¡o warm audience; CPL khÃ´ng pháº£i KPI chÃ­nh.',
      },
      {
        type: 'paragraph',
        text: 'Campaign Lead dÃ¹ng page cÃ¹ng form audit Ä‘á»ƒ láº¥y request, Ä‘á»c CPL vá»›i contacted vÃ  qualified. Khi CRM sáº¡ch vÃ  volume Ä‘á»§, qualified hoáº·c offline outcome cÃ³ thá»ƒ giÃºp team há»c tá»« cÆ¡ há»™i tá»‘t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng objective nÃ o tháº¯ng tuyá»‡t Ä‘á»‘i. Má»—i campaign Ä‘Ãºng khi nhiá»‡m vá»¥, signal vÃ  cÃ¡ch Ä‘á»c Ä‘Æ°á»£c nÃ³i rÃµ.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign cháº¡y Traffic cÃ³ click ráº» nhÆ°ng khÃ´ng táº¡o lead/cÆ¡ há»™i vÃ¬ objective khÃ´ng khá»›p má»¥c tiÃªu.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng xem objective nhÆ° má»™t bÆ°á»›c setup rá»“i táº­p trung vÃ o creative, target vÃ  budget. CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra Ä‘Ã¢y lÃ  quyáº¿t Ä‘á»‹nh chiáº¿n lÆ°á»£c.',
      },
      {
        type: 'paragraph',
        text: 'Platform ráº¥t giá»i tá»‘i Æ°u nhÆ°ng khÃ´ng biáº¿t mÃ¬nh muá»‘n quality, close rate, margin hay payback náº¿u signal khÃ´ng nÃ³i Ä‘iá»u Ä‘Ã³. Chá»n click, nÃ³ tÃ¬m click; chá»n submit, nÃ³ tÃ¬m submit; Ä‘Æ°a qualified Ä‘á»§ sáº¡ch, nÃ³ má»›i cÃ³ cÆ¡ há»™i há»c gáº§n hÆ¡n vá»›i business.',
      },
      {
        type: 'paragraph',
        text: 'Thuáº­t toÃ¡n thÆ°á»ng lÃ m Ä‘Ãºng viá»‡c Ä‘Æ°á»£c giao. CÃ¢u há»i lÃ  team Ä‘Ã£ giao Ä‘Ãºng viá»‡c chÆ°a.',
      },
      { type: 'heading', text: 'Káº¿t â€” Chá»n hÃ nh vi muá»‘n há»‡ thá»‘ng há»c' },
      {
        type: 'paragraph',
        text: 'Traffic, Engagement, Lead, Sales vÃ  offline signal Ä‘á»u cÃ³ vai trÃ², nhÆ°ng pháº£i khá»›p stage, page, tracking, CRM, volume vÃ  outcome. Äá»«ng há»i objective nÃ o tá»‘t nháº¥t; hÃ£y há»i platform cáº§n há»c hÃ nh vi nÃ o vÃ  signal Ä‘Ã³ gáº§n business Ä‘áº¿n Ä‘Ã¢u. Objective Ä‘Ãºng váº«n cáº§n creative, offer, page vÃ  sales Ä‘á»§ tá»‘t.',
      },
    ],
    cta: 'Náº¿u campaign cá»§a báº¡n Ä‘ang cÃ³ click, tÆ°Æ¡ng tÃ¡c hoáº·c lead nhÆ°ng khÃ´ng táº¡o cÆ¡ há»™i kinh doanh tÆ°Æ¡ng á»©ng, Ä‘á»«ng chá»‰ sá»­a creative hay target. HÃ£y há»i láº¡i: objective nÃ y Ä‘ang giao viá»‡c gÃ¬ cho thuáº­t toÃ¡n, event Ä‘Æ°á»£c tá»‘i Æ°u cÃ³ Ä‘á»§ gáº§n business outcome khÃ´ng vÃ  CRM/sales feedback cÃ³ xÃ¡c nháº­n signal Ä‘Ã³ Ä‘Ã¡ng scale khÃ´ng?',
  },
  {
    title: 'Targeting khÃ´ng cá»©u Ä‘Æ°á»£c message sai: vÃ¬ sao audience khÃ´ng chá»‰ náº±m trong Ads Manager?',
    slug: 'targeting-khong-cuu-duoc-message-sai-vi-sao-audience-khong-chi-nam-trong-ads-manager',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-networking-restaurant-toast-01.jpg",
                "alt": "Group toasting at a crowded event table",
                "caption": "Team networking toast",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Nhiá»u ngÆ°á»i nghÄ© targeting lÃ  chá»n Ä‘Ãºng tuá»•i, khu vá»±c, interest, lookalike hay custom audience. NhÆ°ng trong paid ads, audience tháº­t cÃ²n Ä‘Æ°á»£c lá»c bá»Ÿi creative, message, offer, landing page, form, pricing, proof vÃ  sales follow-up. Target Ä‘Ãºng mÃ  message sai váº«n kÃ©o sai ngÆ°á»i. Target rá»™ng nhÆ°ng message sáº¯c, offer rÃµ vÃ  CRM feedback tá»‘t váº«n cÃ³ thá»ƒ há»c Ä‘Ãºng ngÆ°á»i hÆ¡n.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Äá»•i target liÃªn tá»¥c nhÆ°ng lead váº«n lá»‡ch' },
      {
        type: 'paragraph',
        text: 'Campaign cÃ³ lead nhÆ°ng sales nÃ³i khÃ´ng Ä‘Ãºng tá»‡p. Team Ä‘á»•i interest, tuá»•i, khu vá»±c, tÃ¡ch thÃªm ad set, thá»­ lookalike, broad, exclude vÃ  má»Ÿ campaign má»›i.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t tuáº§n sau, CPL váº«n dao Ä‘á»™ng, quality khÃ´ng Ä‘á»u, creative nÃ³i gáº§n giá»‘ng nhau, page chung chung, form quÃ¡ má»Ÿ vÃ  sales váº«n ghi â€œlead yáº¿uâ€. Founder há»i cÃ³ pháº£i target sai khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ target sai. NhÆ°ng há»‡ thá»‘ng cÅ©ng cÃ³ thá»ƒ Ä‘ang lá»c sai ngÆ°á»i á»Ÿ message, offer, page, form vÃ  follow-up.',
      },
      { type: 'heading', text: 'Memo 01 â€” Targeting chá»‰ lÃ  lá»›p lá»c Ä‘áº§u tiÃªn' },
      {
        type: 'paragraph',
        text: 'Targeting trong Ads Manager xÃ¡c Ä‘á»‹nh nhÃ³m ngÆ°á»i cÃ³ thá»ƒ Ä‘Æ°á»£c phÃ¢n phá»‘i quáº£ng cÃ¡o. Sau Ä‘Ã³ creative quyáº¿t Ä‘á»‹nh ai dá»«ng, hook gá»i ná»—i Ä‘au nÃ o, offer lÃ m ai tháº¥y Ä‘Ã¡ng hÃ nh Ä‘á»™ng vÃ  page lÃ m ai Ä‘á»§ tin.',
      },
      {
        type: 'paragraph',
        text: 'Form tiáº¿p tá»¥c lá»c nhu cáº§u, giÃ¡ vÃ  Ä‘iá»u kiá»‡n xÃ¡c Ä‘á»‹nh fit, sales khai thÃ¡c context, cÃ²n CRM cho biáº¿t ai contacted, qualified vÃ  Ä‘i tá»›i cÆ¡ há»™i.',
      },
      {
        type: 'paragraph',
        text: 'Audience strategy khÃ´ng káº¿t thÃºc á»Ÿ target. Target má»›i lÃ  cá»­a phÃ¢n phá»‘i Ä‘áº§u tiÃªn.',
      },
      { type: 'visual', variant: 'audience-beyond-ads-manager' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch vÃ¬ sao targeting khÃ´ng cá»©u Ä‘Æ°á»£c message sai trong paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Message sai kÃ©o sai ngÆ°á»i dÃ¹ target nhÃ¬n Ä‘Ãºng' },
      {
        type: 'paragraph',
        text: 'Target chá»§ nhÃ  cÃ³ váº» Ä‘Ãºng, nhÆ°ng message â€œdá»‹ch vá»¥ sÆ¡n nhÃ  cháº¥t lÆ°á»£ng cao, giÃ¡ tá»‘tâ€ quÃ¡ rá»™ng. NÃ³ cÃ³ thá»ƒ kÃ©o ngÆ°á»i sÄƒn giÃ¡, há»i cho biáº¿t, chÆ°a cÃ³ nhu cáº§u hoáº·c khÃ´ng hiá»ƒu khÃ¡c biá»‡t giáº£i phÃ¡p.',
      },
      {
        type: 'paragraph',
        text: 'Message â€œnhÃ  gáº§n biá»ƒn nhanh báº¡c mÃ u, bong trÃ³c: cáº§n kiá»ƒm há»‡ sÆ¡n, khÃ´ng chá»‰ chá»n láº¡i mÃ uâ€ tá»± lá»c nhÃ³m cÃ³ váº¥n Ä‘á» cá»¥ thá»ƒ, quan tÃ¢m Ä‘á»™ bá»n vÃ  cáº§n tÆ° váº¥n ká»¹ hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Target xÃ¡c Ä‘á»‹nh ai cÃ³ thá»ƒ tháº¥y ads. Message quyáº¿t Ä‘á»‹nh ai tháº¥y mÃ¬nh trong Ä‘Ã³.',
      },
      { type: 'heading', text: 'Memo 03 â€” Creative cÅ©ng lÃ  targeting' },
      {
        type: 'paragraph',
        text: 'Creative lá»c audience báº±ng váº¥n Ä‘á» Ä‘Æ°á»£c nÃªu, bá»‘i cáº£nh hÃ¬nh áº£nh, ngÃ´n ngá»¯ hook, má»©c giÃ¡ hoáº·c Ä‘iá»u kiá»‡n, proof, Ä‘á»‘i tÆ°á»£ng trong visual, CTA, Ä‘á»™ chuyÃªn mÃ´n vÃ  tÃ¬nh huá»‘ng sá»­ dá»¥ng.',
      },
      {
        type: 'paragraph',
        text: 'Creative â€œgiáº£m giÃ¡ máº¡nhâ€ gá»i má»™t nhÃ³m khÃ¡c â€œaudit tracking trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch adsâ€. Angle â€œlead tÄƒng nhÆ°ng sales khÃ´ng chá»‘tâ€ láº¡i gá»i nhÃ³m Ä‘Ã£ cÃ³ váº¥n Ä‘á» sau lead.',
      },
      {
        type: 'paragraph',
        text: 'Creative khÃ´ng chá»‰ kÃ©o attention. NÃ³ lÃ  cÆ¡ cháº¿ tá»± lá»c; creative lá»c sai thÃ¬ target Ä‘Ãºng váº«n khÃ´ng cá»©u Ä‘Æ°á»£c quality.',
      },
      { type: 'visual', variant: 'creative-filtering-map' },
      { type: 'heading', text: 'Memo 04 â€” Offer quÃ¡ rá»™ng lÃ m targeting máº¥t lá»±c' },
      {
        type: 'paragraph',
        text: 'Offer â€œnháº­n tÆ° váº¥n miá»…n phÃ­â€ cÃ³ thá»ƒ kÃ©o ngÆ°á»i tÃ² mÃ², chá»‰ há»i giÃ¡, chÆ°a cÃ³ nhu cáº§u vÃ  nhiá»u loáº¡i váº¥n Ä‘á» khÃ¡c nhau. Target chi tiáº¿t Ä‘áº¿n Ä‘Ã¢u cÅ©ng khÃ³ phÃ¢n biá»‡t intent náº¿u lá»i má»i quÃ¡ má»Ÿ.',
      },
      {
        type: 'paragraph',
        text: 'â€œAudit landing page, tracking vÃ  lead flow trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch adsâ€ lá»c ngÆ°á»i Ä‘Ã£ cháº¡y ads, cÃ³ váº¥n Ä‘á» sau lead vÃ  quan tÃ¢m há»‡ thá»‘ng. Offer lÃ  má»™t lá»›p target má»m; cÃ ng rÃµ, nÃ³ cÃ ng giÃºp Ä‘Ãºng ngÆ°á»i tá»± nháº­n diá»‡n.',
      },
      { type: 'heading', text: 'Memo 05 â€” Form cÅ©ng lÃ  targeting' },
      {
        type: 'paragraph',
        text: 'Form khÃ´ng chá»‰ thu data. Form quÃ¡ ngáº¯n dá»… tÄƒng volume nhÆ°ng khÃ´ng cho biáº¿t ngÆ°á»i Ä‘iá»n cÃ³ fit khÃ´ng. CÃ¢u há»i há»£p lÃ½ vá» nhu cáº§u, khu vá»±c, thá»i Ä‘iá»ƒm, loáº¡i dá»‹ch vá»¥, váº¥n Ä‘á» vÃ  ngÃ¢n sÃ¡ch tÆ°Æ¡ng Ä‘á»‘i cÃ³ thá»ƒ lá»c thÃªm intent.',
      },
      {
        type: 'paragraph',
        text: 'Lead cÃ³ thá»ƒ Ã­t hÆ¡n nhÆ°ng sales hiá»ƒu context hÆ¡n. Khi ads kÃ©o nhiá»u ngÆ°á»i sai, khÃ´ng pháº£i lÃºc nÃ o cÅ©ng sá»­a target; Ä‘Ã´i khi form cáº§n lÃ m tá»‘t pháº§n qualification.',
      },
      { type: 'heading', text: 'Memo 06 â€” Chia audience quÃ¡ nhá» cÃ³ thá»ƒ lÃ m há»ng signal' },
      {
        type: 'paragraph',
        text: 'TÃ¡ch cÃ³ lÃ½ khi stage, offer, intent, khu vá»±c, sales ownership hoáº·c economics khÃ¡c rÃµ. NhÆ°ng chia chá»‰ vÃ¬ muá»‘n kiá»ƒm soÃ¡t cÃ³ thá»ƒ lÃ m budget má»ng, má»—i ad set thiáº¿u data, creative thiáº¿u signal, learning yáº¿u vÃ  report rá»‘i.',
      },
      {
        type: 'paragraph',
        text: 'Audience nhá» hÆ¡n khÃ´ng tá»± Ä‘á»™ng chÃ­nh xÃ¡c hÆ¡n. CÃ³ lÃºc nÃ³ chá»‰ lÃ m há»‡ thá»‘ng há»c cháº­m vÃ  khiáº¿n team káº¿t luáº­n tá»« máº«u quÃ¡ Ã­t.',
      },
      { type: 'visual', variant: 'audience-split-or-consolidate' },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n audience quality review checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 07 â€” Broad khÃ´ng pháº£i phÃ©p mÃ u, interest khÃ´ng pháº£i Ä‘á»“ bá»' },
      {
        type: 'paragraph',
        text: 'Broad cÃ³ thá»ƒ há»£p khi creative vÃ  offer Ä‘á»§ sáº¯c, conversion signal sáº¡ch, budget Ä‘á»§ há»c, page hoáº·c form lá»c Ä‘Æ°á»£c nhu cáº§u vÃ  CRM feedback rÃµ. Khi Ä‘Ã³ platform cÃ³ khÃ´ng gian tÃ¬m pattern ngoÃ i giáº£ Ä‘á»‹nh interest cá»§a team.',
      },
      {
        type: 'paragraph',
        text: 'Interest, custom vÃ  lookalike váº«n cÃ³ vai trÃ² vá»›i thá»‹ trÆ°á»ng háº¹p, ngá»¯ cáº£nh Ä‘áº·c thÃ¹, hypothesis audience, warm traffic hoáº·c seed data tá»‘t. Retargeting cÅ©ng cÃ³ intent khÃ¡c cold.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» khÃ´ng pháº£i broad hay interest. Váº¥n Ä‘á» lÃ  message, signal vÃ  feedback cÃ³ Ä‘á»§ tá»‘t Ä‘á»ƒ há»‡ thá»‘ng há»c Ä‘Ãºng khÃ´ng.',
      },
      { type: 'heading', text: 'Memo 08 â€” CRM vÃ  sales kiá»ƒm target cÃ³ Ä‘Ãºng tháº­t khÃ´ng' },
      {
        type: 'paragraph',
        text: 'Ads Manager cho biáº¿t ad set nÃ o ráº», creative nÃ o CTR tá»‘t vÃ  campaign nÃ o nhiá»u conversion. CRM cÃ¹ng sales cho biáº¿t lead contact Ä‘Æ°á»£c, Ä‘Ãºng nhu cáº§u, Ä‘Ãºng phÃ¢n khÃºc, cÃ³ ngÃ¢n sÃ¡ch, Ä‘i tá»›i quote hoáº·c meeting vÃ  máº¥t vÃ¬ sao.',
      },
      {
        type: 'paragraph',
        text: 'Target Ä‘Ãºng khÃ´ng Ä‘Æ°á»£c xÃ¡c nháº­n chá»‰ báº±ng CPL tháº¥p. NÃ³ Ä‘Æ°á»£c xÃ¡c nháº­n báº±ng lead quality vÃ  business outcome. Náº¿u feedback khÃ´ng quay láº¡i, team ráº¥t dá»… tá»‘i Æ°u theo tá»‡p dá»… submit nháº¥t.',
      },
      { type: 'heading', text: 'Memo 09 â€” Audience review nÃªn há»i gÃ¬?' },
      {
        type: 'list',
        items: [
          'Audience nÃ o cÃ³ Ä‘á»§ data; CPL tháº¥p nhÆ°ng qualified ra sao?',
          'Creative nÃ o Ä‘ang tá»± lá»c Ä‘Ãºng ngÆ°á»i vÃ  offer cÃ³ quÃ¡ rá»™ng khÃ´ng?',
          'Form cÃ³ kÃ©o nhiá»u ngÆ°á»i tÃ² mÃ² hoáº·c thiáº¿u cÃ¢u há»i qualification?',
          'Lead broad khÃ¡c gÃ¬ interest, custom vÃ  retargeting trong sales note?',
          'Lead sai vÃ¬ nhu cáº§u, ngÃ¢n sÃ¡ch, khu vá»±c, thá»i Ä‘iá»ƒm hay ká»³ vá»ng?',
          'NhÃ³m nÃ o nÃªn gom vÃ¬ signal má»ng, nhÃ³m nÃ o cáº§n tÃ¡ch vÃ¬ intent hoáº·c economics khÃ¡c?',
          'Budget Ä‘ang Ä‘i theo lead ráº» hay lead cÃ³ kháº£ nÄƒng táº¡o cÆ¡ há»™i?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Audience review pháº£i ná»‘i CRM vÃ  sales note, khÃ´ng chá»‰ xáº¿p háº¡ng ad set theo CPL.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng target, hai message kÃ©o hai loáº¡i lead' },
      {
        type: 'paragraph',
        text: 'Vá»›i cÃ¹ng target chá»§ doanh nghiá»‡p Ä‘Ã£ cháº¡y ads, message â€œdá»‹ch vá»¥ marketing giÃºp tÄƒng leadâ€ cÃ³ thá»ƒ kÃ©o ngÆ°á»i muá»‘n lÃ m nhanh, há»i giÃ¡, chÆ°a rÃµ váº¥n Ä‘á» hoáº·c ká»³ vá»ng agency lÃ m háº¿t.',
      },
      {
        type: 'paragraph',
        text: 'Message â€œlead tÄƒng nhÆ°ng doanh thu khÃ´ng tÄƒng? Tracking, CRM vÃ  follow-up cÃ³ thá»ƒ Ä‘ang Ä‘á»©tâ€ gá»i ngÆ°á»i Ä‘Ã£ cÃ³ lead, hiá»ƒu bÃ i toÃ¡n sau lead vÃ  phÃ¹ há»£p vá»›i audit há»‡ thá»‘ng hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'Target giá»‘ng nhau nhÆ°ng message khÃ¡c cÃ³ thá»ƒ táº¡o hai nhÃ³m lead ráº¥t khÃ¡c.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign Ä‘á»•i target nhiá»u láº§n nhÆ°ng lead quality chá»‰ cáº£i thiá»‡n khi sá»­a message, offer vÃ  form.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng dá»… nghÄ© target quyáº¿t Ä‘á»‹nh tháº¯ng thua. Campaign khÃ´ng á»•n thÃ¬ Ä‘á»•i interest, tÃ¡ch ad set, thá»­ lookalike, má»Ÿ rá»™ng tuá»•i hoáº·c thu háº¹p khu vá»±c. Nhá»¯ng viá»‡c Ä‘Ã³ Ä‘Ã´i khi cáº§n.',
      },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m, tÃ´i dáº§n nháº­n ra audience tháº­t cÃ²n lÃ  ngÆ°á»i bá»‹ message gá»i trÃºng, tin offer, Ä‘iá»n form vá»›i nhu cáº§u tháº­t, Ä‘Æ°á»£c sales qualify vÃ  Ä‘Æ°á»£c CRM xÃ¡c nháº­n lÃ  cÆ¡ há»™i.',
      },
      {
        type: 'paragraph',
        text: 'Chá»‰ nhÃ¬n target lÃ m team dá»… sá»­a sai chá»—. Paid ads sÃ¢u xÃ¢y nhiá»u lá»›p tá»± lá»c Ä‘Ãºng ngÆ°á»i, khÃ´ng giao toÃ n bá»™ trÃ¡ch nhiá»‡m cho Ã´ audience trong Ads Manager.',
      },
      { type: 'heading', text: 'Káº¿t â€” Targeting lÃ  má»™t lá»›p trong há»‡ lá»c audience' },
      {
        type: 'paragraph',
        text: 'Targeting váº«n quan trá»ng, nhÆ°ng khÃ´ng cá»©u Ä‘Æ°á»£c message sai. Audience Ä‘Æ°á»£c lá»c tiáº¿p bá»Ÿi creative, offer, page, form, pricing, proof, sales vÃ  CRM. Target Ä‘Ãºng cÅ©ng khÃ´ng Ä‘áº£m báº£o ads tháº¯ng náº¿u cÃ¡c lá»›p cÃ²n láº¡i táº¡o ká»³ vá»ng sai hoáº·c lÃ m máº¥t signal. Äá»«ng chá»‰ nhÃ¬n CPL; hÃ£y dÃ¹ng quality, sales note vÃ  outcome Ä‘á»ƒ biáº¿t há»‡ thá»‘ng cÃ³ kÃ©o Ä‘Ãºng ngÆ°á»i khÃ´ng.',
      },
    ],
    cta: 'Náº¿u campaign cá»§a báº¡n Ä‘ang Ä‘á»•i target liÃªn tá»¥c nhÆ°ng lead quality váº«n khÃ´ng cáº£i thiá»‡n, hÃ£y táº¡m dá»«ng vÃ  há»i: message Ä‘ang gá»i Ä‘Ãºng ná»—i Ä‘au chÆ°a, offer cÃ³ lá»c Ä‘Ãºng ngÆ°á»i khÃ´ng, form cÃ³ há»i Ä‘á»§ nhu cáº§u khÃ´ng, sales cÃ³ feedback rÃµ khÃ´ng vÃ  CRM cÃ³ cho tháº¥y audience nÃ o tháº­t sá»± táº¡o cÆ¡ há»™i tá»‘t hÆ¡n khÃ´ng?',
  },
  {
    title: 'Incrementality trong paid ads: khÃ´ng pháº£i conversion nÃ o ads nháº­n cÃ´ng cÅ©ng lÃ  tÄƒng trÆ°á»Ÿng má»›i',
    slug: 'incrementality-trong-paid-ads-khong-phai-conversion-nao-ads-nhan-cong-cung-la-tang-truong-moi',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-conference-conference-portrait-01.jpg",
                "alt": "Person standing in front of a conference backdrop",
                "caption": "Conference portrait",
                "width": 2048,
                "height": 1682,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Ads platform cÃ³ thá»ƒ bÃ¡o conversion, CPA Ä‘áº¹p hoáº·c ROAS sÃ¡ng, nhÆ°ng business cáº§n há»i thÃªm: náº¿u khÃ´ng cháº¡y campaign Ä‘Ã³, khÃ¡ch cÃ³ váº«n mua hoáº·c Ä‘á»ƒ láº¡i lead khÃ´ng? Incrementality giÃºp phÃ¢n biá»‡t conversion Ä‘Æ°á»£c ads nháº­n cÃ´ng vá»›i conversion tháº­t sá»± Ä‘Æ°á»£c táº¡o thÃªm. ÄÃ¢y lÃ  lá»›p Ä‘á»c ráº¥t quan trá»ng khi scale retargeting, branded search, Æ°u Ä‘Ã£i vÃ  campaign nháº¯m vÃ o khÃ¡ch Ä‘Ã£ cÃ³ intent sáºµn.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Campaign bÃ¡o ROAS Ä‘áº¹p, nhÆ°ng founder váº«n chÆ°a tháº¥y tÄƒng trÆ°á»Ÿng tháº­t' },
      {
        type: 'paragraph',
        text: 'Cuá»‘i thÃ¡ng, team má»Ÿ report. Campaign cÃ³ conversion, CPA á»•n, ROAS sÃ¡ng. Retargeting nhÃ¬n hiá»‡u quáº£, branded search chá»‘t Ä‘Æ¡n tá»‘t. Náº¿u chá»‰ nhÃ¬n dashboard, Ä‘Ã¢y lÃ  á»©ng viÃªn rÃµ rÃ ng Ä‘á»ƒ scale.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng tá»•ng doanh thu khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng. Nhiá»u Ä‘Æ¡n Ä‘áº¿n tá»« khÃ¡ch cÅ© hoáº·c ngÆ°á»i Ä‘Ã£ biáº¿t brand. Voucher lÃ m margin má»ng Ä‘i. Founder há»i: â€œNáº¿u khÃ´ng cháº¡y campaign nÃ y, mÃ¬nh cÃ³ máº¥t háº¿t sá»‘ Ä‘Æ¡n Ä‘Ã³ khÃ´ng?â€',
      },
      {
        type: 'paragraph',
        text: 'Má»™t pháº§n conversion Ä‘Æ°á»£c ads táº¡o thÃªm; pháº§n khÃ¡c vá»‘n dÄ© váº«n cÃ³ thá»ƒ xáº£y ra qua direct, organic hoáº·c mua láº¡i. KhÃ´ng pháº£i conversion nÃ o ads nháº­n cÃ´ng cÅ©ng lÃ  tÄƒng trÆ°á»Ÿng má»›i. ÄÃ³ lÃ  lÃ½ do cáº§n nÃ³i vá» incrementality.',
      },
      { type: 'heading', text: 'Memo 01 â€” Attribution vÃ  incrementality lÃ  hai cÃ¢u há»i khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Attribution há»i ná»n táº£ng nÃ o nháº­n cÃ´ng, campaign nÃ o Ä‘Æ°á»£c ghi conversion, click hoáº·c view nÃ o náº±m trong window, CPA vÃ  ROAS lÃ  bao nhiÃªu. NÃ³ giÃºp operator Ä‘á»c cÃ¡ch há»‡ thá»‘ng phÃ¢n bá»• káº¿t quáº£.',
      },
      {
        type: 'paragraph',
        text: 'Incrementality há»i ads cÃ³ táº¡o thÃªm káº¿t quáº£ khÃ´ng; náº¿u khÃ´ng cháº¡y thÃ¬ bao nhiÃªu conversion váº«n xáº£y ra; campaign Ä‘ang táº¡o demand má»›i hay báº¯t demand cÃ³ sáºµn; spend cÃ³ lÃ m tá»•ng business tÄƒng khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Attribution lÃ  cÃ¢u há»i vá» ghi nháº­n. Incrementality lÃ  cÃ¢u há»i vá» tÃ¡c Ä‘á»™ng tÄƒng thÃªm. Chá»‰ nhÃ¬n attribution, team cÃ³ thá»ƒ scale campaign nháº­n cÃ´ng tá»‘t nhÆ°ng táº¡o Ã­t giÃ¡ trá»‹ má»›i.',
      },
      { type: 'visual', variant: 'attributed-vs-incremental-conversion' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch incrementality trong paid ads báº±ng vÃ­ dá»¥ retargeting vÃ  branded search.',
      },
      { type: 'heading', text: 'Memo 02 â€” Retargeting ráº¥t dá»… nhÃ¬n Ä‘áº¹p, nhÆ°ng pháº£i há»i nÃ³ táº¡o thÃªm bao nhiÃªu' },
      {
        type: 'paragraph',
        text: 'Retargeting nháº¯m ngÆ°á»i Ä‘Ã£ vÃ o web, xem dá»‹ch vá»¥, click CTA, Ä‘á»c case, bá» form hoáº·c tÆ°Æ¡ng tÃ¡c vá»›i brand. Há» Ä‘Ã£ cÃ³ intent nÃªn CPA, ROAS vÃ  conversion rate thÆ°á»ng Ä‘áº¹p hÆ¡n cold audience.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u khÃ´ng retargeting, bao nhiÃªu ngÆ°á»i váº«n quay láº¡i? Creative cÃ³ xá»­ lÃ½ objection hay chá»‰ xuáº¥t hiá»‡n sÃ¡t Ä‘iá»ƒm mua? Frequency cÃ³ quÃ¡ cao? Team cÃ³ Ä‘ang nháº¯c ngÆ°á»i vá»‘n Ä‘Ã£ Ä‘á»‹nh mua?',
      },
      {
        type: 'paragraph',
        text: 'Retargeting váº«n cÃ³ vai trÃ²: nháº¯c Ä‘Ãºng lÃºc, thÃªm proof vÃ  kÃ©o ngÆ°á»i bá» dá»Ÿ quay láº¡i. NhÆ°ng report Ä‘áº¹p khÃ´ng chá»©ng minh toÃ n bá»™ conversion lÃ  incremental.',
      },
      { type: 'heading', text: 'Memo 03 â€” Branded search báº¯t nhu cáº§u cÃ³ sáºµn khÃ´ng giá»‘ng táº¡o nhu cáº§u má»›i' },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i gÃµ tÃªn brand hoáº·c dá»‹ch vá»¥ cá»¥ thá»ƒ Ä‘Ã£ cÃ³ intent cao, nÃªn branded search dá»… cÃ³ conversion rate tá»‘t, CPA tháº¥p. Campaign cÃ³ thá»ƒ báº£o vá»‡ brand, Ä‘Æ°a khÃ¡ch Ä‘áº¿n Ä‘Ãºng landing page hoáº·c báº¯t láº¡i ngÆ°á»i vá»«a tháº¥y Meta Ads.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng cÅ©ng cÃ³ ngÆ°á»i vá»‘n dÄ© sáº½ click organic hoáº·c vÃ o tháº³ng website. Branded search khÃ´ng vÃ´ dá»¥ng; chá»‰ lÃ  khÃ´ng nÃªn máº·c Ä‘á»‹nh toÃ n bá»™ branded conversion Ä‘á»u lÃ  tÄƒng trÆ°á»Ÿng má»›i.',
      },
      { type: 'visual', variant: 'demand-capture-vs-demand-creation' },
      { type: 'heading', text: 'Memo 04 â€” Discount cÃ³ thá»ƒ lÃ m report Ä‘áº¹p nhÆ°ng chÆ°a cháº¯c lÃ m business khá»e' },
      {
        type: 'paragraph',
        text: 'Voucher cÃ³ thá»ƒ tÄƒng conversion, háº¡ CPA vÃ  giÃºp khÃ¡ch quyáº¿t Ä‘á»‹nh nhanh. NhÆ°ng há» cÃ³ mua náº¿u khÃ´ng giáº£m giÃ¡, margin cÃ²n bao nhiÃªu, cÃ³ chá»‰ sÄƒn giÃ¡ hoáº·c dáº§n chá» khuyáº¿n mÃ£i khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Vá»›i lead generation, sales cÃ³ pháº£i dÃ¹ng Æ°u Ä‘Ã£i Ä‘á»ƒ chá»‘t má»i lead khÃ´ng? Conversion cÃ³ thá»ƒ tÄƒng trong khi incremental profit khÃ´ng tÄƒng tÆ°Æ¡ng á»©ng. Business cáº§n lá»£i nhuáº­n tÄƒng thÃªm, khÃ´ng chá»‰ gross revenue Ä‘áº¹p.',
      },
      { type: 'heading', text: 'Memo 05 â€” KhÃ¡ch cÅ© vÃ  khÃ¡ch má»›i pháº£i Ä‘á»c khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Purchase tá»« khÃ¡ch cÅ© váº«n cÃ³ giÃ¡ trá»‹ náº¿u tÄƒng repeat purchase, cross-sell, up-sell, giáº£m churn hoáº·c kÃ­ch hoáº¡t khÃ¡ch ngá»§ yÃªn. Váº¥n Ä‘á» lÃ  má»¥c tiÃªu tÄƒng khÃ¡ch má»›i nhÆ°ng report gá»™p má»i purchase vÃ o má»™t ROAS.',
      },
      {
        type: 'paragraph',
        text: 'HÃ£y tÃ¡ch new customer, returning customer, first purchase, repeat purchase, reactivation vÃ  upsell/cross-sell náº¿u dá»¯ liá»‡u cho phÃ©p. Doanh thu tá»« khÃ¡ch cÅ© vÃ  khÃ¡ch má»›i cÃ³ Ã½ nghÄ©a khÃ¡c nhau tÃ¹y má»¥c tiÃªu.',
      },
      { type: 'heading', text: 'Memo 06 â€” Incrementality khÃ´ng nháº¥t thiáº¿t báº¯t Ä‘áº§u báº±ng experiment phá»©c táº¡p' },
      {
        type: 'paragraph',
        text: 'SME chÆ°a cáº§n mÃ´ hÃ¬nh Ä‘o lÆ°á»ng náº·ng. HÃ£y xem tá»•ng lead hoáº·c doanh thu cÃ³ tÄƒng cÃ¹ng ngÃ¢n sÃ¡ch hay chá»‰ platform report tÄƒng; qualified lead, khÃ¡ch má»›i, margin vÃ  profit cÃ³ Ä‘i cÃ¹ng khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ thá»ƒ giáº£m nháº¹ hoáº·c táº¯t ngáº¯n campaign á»Ÿ thá»i Ä‘iá»ƒm phÃ¹ há»£p rá»“i quan sÃ¡t tá»•ng conversion. So sÃ¡nh khu vá»±c hoáº·c tá»‡p tÆ°Æ¡ng Ä‘á»“ng náº¿u váº­n hÃ nh cho phÃ©p. Kiá»ƒm xem retargeting nÃ¢ng tá»•ng káº¿t quáº£ hay chuyá»ƒn cÃ´ng tá»« Direct, Organic vÃ  Search.',
      },
      {
        type: 'paragraph',
        text: 'Äá»c branded search cÃ¹ng social, content vÃ  prospecting trÆ°á»›c Ä‘Ã³; theo dÃµi search volume, direct visit, inbox, call sau campaign. ÄÃ¢y chÆ°a pháº£i báº±ng chá»©ng hoÃ n háº£o, nhÆ°ng Ä‘á»§ Ä‘á»ƒ há»i: káº¿t quáº£ cÃ³ tháº­t sá»± tÄƒng thÃªm khÃ´ng?',
      },
      { type: 'visual', variant: 'simple-incrementality-check' },
      { type: 'heading', text: 'Memo 07 â€” TrÃ¡nh scale nháº§m lá»›p â€œnháº­n cÃ´ng tá»‘tâ€' },
      {
        type: 'paragraph',
        text: 'Náº¿u chá»‰ xáº¿p háº¡ng theo ROAS platform, ngÃ¢n sÃ¡ch dá»… dá»“n vÃ o retargeting sÃ¡t Ä‘iá»ƒm mua, branded search, khÃ¡ch cÅ©, voucher hoáº·c cuá»‘i funnel. Nhá»¯ng lá»›p nÃ y thÆ°á»ng nháº­n cÃ´ng tá»‘t vÃ¬ Ä‘á»©ng gáº§n conversion.',
      },
      {
        type: 'paragraph',
        text: 'Social prospecting, content/video education, creative problem-aware, case study hoáº·c non-branded search cÃ³ thá»ƒ bá»‹ Ä‘Ã¡nh giÃ¡ tháº¥p vÃ¬ khÃ´ng nháº­n conversion ngay. Incrementality khÃ´ng chÃª demand capture; nÃ³ giÃºp team khÃ´ng bá» Ä‘Ã³i lá»›p má»Ÿ demand.',
      },
      { type: 'heading', text: 'Memo 08 â€” NhÆ°ng cÅ©ng Ä‘á»«ng cá»±c Ä‘oan phá»§ nháº­n attribution' },
      {
        type: 'paragraph',
        text: 'Attribution váº«n cáº§n Ä‘á»ƒ Ä‘á»c campaign, creative, Ä‘iá»ƒm cháº¡m gáº§n conversion, so sÃ¡nh test, kiá»ƒm spend, CPA, ROAS vÃ  tracking issue. Operator khÃ´ng thá»ƒ bá» cÃ¡c signal nÃ y.',
      },
      {
        type: 'paragraph',
        text: 'Váº¥n Ä‘á» lÃ  khÃ´ng xem attribution nhÆ° báº±ng chá»©ng tuyá»‡t Ä‘á»‘i cá»§a tÄƒng trÆ°á»Ÿng má»›i. Paid ads sÃ¢u dÃ¹ng attribution Ä‘á»ƒ váº­n hÃ nh, dÃ¹ng incrementality Ä‘á»ƒ kiá»ƒm tÃ¡c Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t nhá»‹p review incrementality nÃªn cÃ³ gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Má»—i thÃ¡ng hoáº·c quÃ½, xem campaign nÃ o nháº­n cÃ´ng tá»‘t, campaign nÃ o táº¡o demand má»›i, retargeting vÃ  branded chiáº¿m bao nhiÃªu ngÃ¢n sÃ¡ch, tá»•ng lead/doanh thu cÃ³ tÄƒng cÃ¹ng spend, khÃ¡ch má»›i vÃ  khÃ¡ch quay láº¡i ra sao.',
      },
      {
        type: 'paragraph',
        text: 'Review qualified lead, opportunity, margin, profit; tÃ¬m kÃªnh bá»‹ Ä‘Ã¡nh giÃ¡ tháº¥p vÃ¬ khÃ´ng Ä‘á»©ng cuá»‘i hÃ nh trÃ¬nh; nháº­n diá»‡n cannibalization; chá»n test nhá» Ä‘á»ƒ kiá»ƒm lift. Sau Ä‘Ã³ phÃ¢n bá»• láº¡i ngÃ¢n sÃ¡ch giá»¯a capture vÃ  create demand.',
      },
      {
        type: 'paragraph',
        text: 'Incrementality review khÃ´ng cáº§n lÃ m má»—i ngÃ y. ÄÃ¢y lÃ  nhá»‹p kiá»ƒm chiáº¿n lÆ°á»£c Ä‘á»ƒ trÃ¡nh ngÃ¢n sÃ¡ch Ä‘i vá» nÆ¡i report sÃ¡ng nhÆ°ng tÄƒng trÆ°á»Ÿng má»ng.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n incrementality review checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 10 â€” Hai campaign cÃ¹ng ROAS Ä‘áº¹p, giÃ¡ trá»‹ tÄƒng thÃªm khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Campaign A retarget ngÆ°á»i Ä‘Ã£ vÃ o pricing hoáº·c page bÃ¡o giÃ¡. ROAS Ä‘áº¹p, CPA tháº¥p, nhÆ°ng intent Ä‘Ã£ ráº¥t cao. Khi giáº£m ngÃ¢n sÃ¡ch, tá»•ng Ä‘Æ¡n khÃ´ng giáº£m nhiá»u. Campaign cÃ³ thá»ƒ nháº­n cÃ´ng tá»‘t nhÆ°ng incremental lift tháº¥p.',
      },
      {
        type: 'paragraph',
        text: 'Campaign B dÃ¹ng creative problem-aware Ä‘á»ƒ prospect. ROAS platform tháº¥p hÆ¡n, nhÆ°ng sau Ä‘Ã³ branded search, direct visit, qualified lead vÃ  retargeting pool cÃ¹ng tÄƒng. Campaign cÃ³ thá»ƒ Ä‘ang má»Ÿ demand má»›i.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u chá»‰ nhÃ¬n ROAS platform, A tháº¯ng. Náº¿u Ä‘á»c tÄƒng trÆ°á»Ÿng há»‡ thá»‘ng, B cÃ³ thá»ƒ táº¡o nguá»“n demand tÆ°Æ¡ng lai. ÄÃ¢y lÃ  cÃ¡ch Ä‘áº·t cÃ¢u há»i tá»‘t hÆ¡n, khÃ´ng pháº£i káº¿t luáº­n campaign nÃ o luÃ´n hÆ¡n.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign retargeting ROAS Ä‘áº¹p nhÆ°ng incremental lift tháº¥p hÆ¡n ká»³ vá»ng.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng dá»… vui vá»›i campaign nháº­n conversion tá»‘t. Report Ä‘áº¹p táº¡o cáº£m giÃ¡c cháº¯c: campaign nÃ y cÃ³ káº¿t quáº£, campaign kia khÃ´ng. NhÆ°ng cÃ ng lÃ m lÃ¢u, cÃ¢u há»i khÃ³ hÆ¡n khÃ´ng pháº£i â€œads cÃ³ nháº­n cÃ´ng khÃ´ng?â€, mÃ  lÃ  â€œads cÃ³ táº¡o thÃªm Ä‘iá»u gÃ¬ mÃ  náº¿u khÃ´ng cháº¡y thÃ¬ business sáº½ máº¥t khÃ´ng?â€',
      },
      {
        type: 'paragraph',
        text: 'Retargeting cÃ³ thá»ƒ ráº¥t cáº§n, branded search ráº¥t há»¯u Ã­ch, Æ°u Ä‘Ã£i giÃºp khÃ¡ch quyáº¿t Ä‘á»‹nh nhanh. NhÆ°ng náº¿u khÃ´ng há»i pháº§n tÄƒng thÃªm, team cÃ³ thá»ƒ scale nÆ¡i report sÃ¡ng mÃ  business khÃ´ng lá»›n tÆ°Æ¡ng á»©ng.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads sÃ¢u khÃ´ng chá»‰ tá»‘i Æ°u Ä‘á»ƒ Ä‘Æ°á»£c ghi nháº­n cÃ´ng, mÃ  Ä‘á»ƒ táº¡o thÃªm tÄƒng trÆ°á»Ÿng tháº­t.',
      },
      { type: 'heading', text: 'Káº¿t â€” Äá»c cáº£ nháº­n cÃ´ng vÃ  tÃ¡c Ä‘á»™ng tÄƒng thÃªm' },
      {
        type: 'paragraph',
        text: 'Incrementality phÃ¢n biá»‡t conversion ads nháº­n cÃ´ng vÃ  conversion tháº­t sá»± Ä‘Æ°á»£c táº¡o thÃªm. Retargeting, branded search, khÃ¡ch cÅ© vÃ  Æ°u Ä‘Ã£i cÃ³ thá»ƒ lÃ m report Ä‘áº¹p, nhÆ°ng khÃ´ng pháº£i toÃ n bá»™ lÃ  tÄƒng trÆ°á»Ÿng má»›i.',
      },
      {
        type: 'paragraph',
        text: 'Attribution váº«n cáº§n Ä‘á»ƒ váº­n hÃ nh. Khi scale ngÃ¢n sÃ¡ch, founder vÃ  marketing lead pháº£i há»i thÃªm: náº¿u khÃ´ng cháº¡y campaign nÃ y, bao nhiÃªu káº¿t quáº£ váº«n xáº£y ra; tá»•ng lead, doanh thu vÃ  profit cÃ³ tÄƒng tháº­t khÃ´ng; campaign Ä‘ang báº¯t demand hay táº¡o demand?',
      },
    ],
    cta: 'Náº¿u má»™t campaign Ä‘ang nhÃ¬n ráº¥t Ä‘áº¹p trong platform, Ä‘á»«ng vá»™i scale chá»‰ vÃ¬ ROAS hoáº·c CPA sÃ¡ng. HÃ£y há»i: campaign nÃ y cÃ³ táº¡o thÃªm khÃ¡ch má»›i, qualified lead, doanh thu hoáº·c profit má»›i khÃ´ng â€” hay chá»§ yáº¿u Ä‘ang nháº­n cÃ´ng tá»« nhá»¯ng ngÆ°á»i vá»‘n Ä‘Ã£ sáºµn intent?',
  },
  {
    title: 'PhÃ¢n bá»• ngÃ¢n sÃ¡ch theo funnel: vÃ¬ sao khÃ´ng nÃªn dá»“n háº¿t tiá»n vÃ o campaign CPA Ä‘áº¹p nháº¥t?',
    slug: 'phan-bo-ngan-sach-theo-funnel-vi-sao-khong-nen-don-het-tien-vao-campaign-cpa-dep-nhat',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-product-demo-booth-01.jpg",
                "alt": "People at an exhibition booth with product displays",
                "caption": "Exhibition booth activity",
                "width": 1600,
                "height": 1067,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Campaign cÃ³ CPA tháº¥p nháº¥t hoáº·c ROAS Ä‘áº¹p nháº¥t chÆ°a cháº¯c lÃ  nÆ¡i nÃªn dá»“n toÃ n bá»™ ngÃ¢n sÃ¡ch. Retargeting, branded search vÃ  campaign cuá»‘i phá»…u thÆ°á»ng nhÃ¬n Ä‘áº¹p vÃ¬ chÃºng báº¯t ngÆ°á»i Ä‘Ã£ cÃ³ intent. NhÆ°ng náº¿u ngÃ¢n sÃ¡ch chá»‰ cháº¡y theo report ngáº¯n háº¡n, doanh nghiá»‡p cÃ³ thá»ƒ bá» Ä‘Ã³i lá»›p táº¡o demand má»›i, creative test, non-branded search vÃ  prospecting. Ngáº¯n háº¡n sá»‘ Ä‘áº¹p hÆ¡n, dÃ i háº¡n pipeline yáº¿u Ä‘i.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Campaign CPA Ä‘áº¹p nháº¥t luÃ´n Ä‘Æ°á»£c tÄƒng tiá»n, rá»“i pipeline báº¯t Ä‘áº§u cáº¡n' },
      {
        type: 'paragraph',
        text: 'Cuá»‘i tuáº§n review ads, retargeting cÃ³ CPA Ä‘áº¹p, branded search chá»‘t lead á»•n, campaign cuá»‘i phá»…u cÃ³ ROAS sÃ¡ng. Founder há»i: â€œVáº­y sao khÃ´ng dá»“n thÃªm tiá»n vÃ o máº¥y campaign nÃ y?â€',
      },
      {
        type: 'paragraph',
        text: 'Team giáº£m prospecting, creative test vÃ  non-branded search; giá»¯ retargeting cÃ¹ng branded. BÃ¡o cÃ¡o ngáº¯n háº¡n dá»… thá»Ÿ hÆ¡n. VÃ i tuáº§n sau, tá»‡p retargeting nhá» dáº§n, branded search khÃ´ng tÄƒng, lead má»›i Ã­t hÆ¡n vÃ  sales pipeline yáº¿u Ä‘i.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i phá»…u váº«n Ä‘áº¹p nhÆ°ng tá»•ng growth khÃ´ng lá»›n lÃªn. CPA Ä‘áº¹p nháº¥t chÆ°a cháº¯c nÃªn Äƒn háº¿t ngÃ¢n sÃ¡ch; campaign cÃ³ thá»ƒ chá»‰ Ä‘ang báº¯t demand Ä‘Æ°á»£c táº¡o tá»« trÆ°á»›c.',
      },
      { type: 'heading', text: 'Memo 01 â€” NgÃ¢n sÃ¡ch ads lÃ  portfolio, khÃ´ng pháº£i cuá»™c thi chá»n má»™t winner' },
      {
        type: 'paragraph',
        text: 'Má»™t account khá»e cáº§n ngÃ¢n sÃ¡ch táº¡o demand, báº¯t demand cÃ³ sáºµn, retarget, chuyá»ƒn Ä‘á»•i cuá»‘i phá»…u, test creative/offer/page, báº£o vá»‡ branded intent khi cáº§n vÃ  há»c tÃ­n hiá»‡u má»›i.',
      },
      {
        type: 'paragraph',
        text: 'Dá»“n tiá»n vÃ o CPA tháº¥p nháº¥t dá»… scale lá»›p nháº­n cÃ´ng tá»‘t nhÆ°ng bá» thiáº¿u nguá»“n demand. TÃ­n hiá»‡u má»›i Ã­t, creative pipeline nghÃ¨o dáº§n vÃ  funnel dÃ i háº¡n yáº¿u hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'PhÃ¢n bá»• khÃ´ng chá»‰ há»i campaign nÃ o ráº» nháº¥t. NÃ³ há»i má»—i pháº§n ngÃ¢n sÃ¡ch lÃ m nhiá»‡m vá»¥ gÃ¬ vÃ  há»‡ thá»‘ng Ä‘ang thiáº¿u Ä‘áº§u vÃ o, chuyá»ƒn Ä‘á»•i hay kháº£ nÄƒng há»c.',
      },
      { type: 'visual', variant: 'paid-ads-budget-portfolio' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch cÃ¡ch phÃ¢n bá»• ngÃ¢n sÃ¡ch paid ads theo vai trÃ² funnel thay vÃ¬ chá»‰ theo CPA tháº¥p nháº¥t.',
      },
      { type: 'heading', text: 'Memo 02 â€” Campaign cuá»‘i phá»…u thÆ°á»ng nhÃ¬n Ä‘áº¹p vÃ¬ gáº§n Ä‘iá»ƒm mua hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Retargeting, branded search vÃ  remarketing gáº·p ngÆ°á»i Ä‘Ã£ biáº¿t brand, vÃ o web, xem dá»‹ch vá»¥, tÆ°Æ¡ng tÃ¡c ná»™i dung hoáº·c tÃ¬m tÃªn doanh nghiá»‡p. Há» thÆ°á»ng chá»‰ cáº§n proof hoáº·c cÃº nháº¯c cuá»‘i.',
      },
      {
        type: 'paragraph',
        text: 'VÃ¬ váº­y conversion rate cÃ³ thá»ƒ cao, CPA tháº¥p, ROAS sÃ¡ng vÃ  Ads Manager dá»… nháº­n cÃ´ng. Sá»‘ liá»‡u khÃ´ng sai; nÃ³ chá»‰ khÃ´ng ká»ƒ háº¿t demand do content, prospecting, referral hoáº·c sales táº¡o trÆ°á»›c.',
      },
      { type: 'heading', text: 'Memo 03 â€” Dá»“n tiá»n theo CPA tháº¥p cÃ³ thá»ƒ lÃ m Ä‘áº§u phá»…u bá»‹ bá» Ä‘Ã³i' },
      {
        type: 'paragraph',
        text: 'Khi tiá»n bá»‹ kÃ©o vá» campaign ráº» nháº¥t, creative vÃ  audience má»›i Ã­t Ä‘Æ°á»£c test, non-branded search khÃ´ng Ä‘á»§ thá»i gian há»c, problem-aware creative bá»‹ cáº¯t, warm audience khÃ´ng Ä‘Æ°á»£c náº¡p.',
      },
      {
        type: 'paragraph',
        text: 'Retargeting pool dáº§n nhá», branded search thiáº¿u ngÆ°á»i má»›i vÃ  sales thiáº¿u lead má»›i. Tá»‘i Æ°u CPA ngáº¯n háº¡n cÃ³ thá»ƒ lÃ m giáº£m kháº£ nÄƒng táº¡o demand cho thÃ¡ng sau.',
      },
      { type: 'visual', variant: 'cpa-trap-budget-allocation' },
      { type: 'heading', text: 'Memo 04 â€” Má»—i lá»›p funnel nÃªn Ä‘Æ°á»£c Ä‘Ã¡nh giÃ¡ báº±ng KPI khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Create demand cÃ³ thá»ƒ Ä‘á»c qua reach cháº¥t lÆ°á»£ng, message signal, traffic quality, warm audience vÃ  branded search/direct sau Ä‘Ã³. Capture demand cáº§n search intent, CTR, CPC, conversion rate, lead quality vÃ  tÃ¡ch branded vá»›i non-branded.',
      },
      {
        type: 'paragraph',
        text: 'Convert cáº§n CPL/CPA, qualified lead, cost per opportunity vÃ  close rate. Retarget cáº§n frequency, return visit, proof response vÃ  conversion tÄƒng thÃªm. Test/learn cáº§n bÃ i há»c vá» creative, offer, page, form hoáº·c signal.',
      },
      {
        type: 'paragraph',
        text: 'Ã‰p má»i lá»›p tháº¯ng báº±ng má»™t CPA sáº½ thiÃªn vá»‹ campaign gáº§n conversion. KPI pháº£i khá»›p nhiá»‡m vá»¥ trÆ°á»›c khi quyáº¿t Ä‘á»‹nh ngÃ¢n sÃ¡ch.',
      },
      { type: 'heading', text: 'Memo 05 â€” Prospecting khÃ´ng nÃªn bá»‹ Ä‘Ã¡nh giÃ¡ nhÆ° retargeting' },
      {
        type: 'paragraph',
        text: 'Prospecting gáº·p ngÆ°á»i chÆ°a biáº¿t brand, pháº£i gá»i tÃªn váº¥n Ä‘á», táº¡o chÃº Ã½, xÃ¢y niá»m tin vÃ  má»Ÿ hÃ nh trÃ¬nh. Retargeting Ä‘Æ°a proof, xá»­ lÃ½ objection vÃ  thÃºc Ä‘áº©y next action vá»›i ngÆ°á»i Ä‘Ã£ áº¥m.',
      },
      {
        type: 'paragraph',
        text: 'So CPA retargeting vá»›i prospecting rá»“i cáº¯t prospecting cÃ³ thá»ƒ cáº¯t nguá»“n náº¡p cho retargeting. Retargeting Äƒn trÃ¡i tá»« demand Ä‘Ã£ cÃ³; prospecting trá»“ng cÃ¢y cho vÃ²ng sau. NhÆ°ng prospecting khÃ´ng máº·c Ä‘á»‹nh pháº£i nháº­n nhiá»u tiá»n nháº¥t.',
      },
      { type: 'visual', variant: 'funnel-budget-role-map' },
      { type: 'heading', text: 'Memo 06 â€” Test budget dá»… bá»‹ cáº¯t nháº¥t, nhÆ°ng giá»¯ tÃ i khoáº£n sá»‘ng lÃ¢u' },
      {
        type: 'paragraph',
        text: 'Khi Ã¡p lá»±c tÄƒng, creative test, angle, offer, landing page, audience hypothesis vÃ  non-branded keyword thÆ°á»ng bá»‹ cáº¯t trÆ°á»›c. Ngáº¯n háº¡n, viá»‡c nÃ y giá»‘ng tiáº¿t kiá»‡m.',
      },
      {
        type: 'paragraph',
        text: 'DÃ i háº¡n, creative má»i khÃ´ng cÃ³ máº«u thay, offer yáº¿u dáº§n, thá»‹ trÆ°á»ng Ä‘á»•i mÃ  team khÃ´ng há»c. Test budget khÃ´ng pháº£i tiá»n thá»«a; nÃ³ giá»¯ nguá»“n Ã½ tÆ°á»Ÿng vÃ  tÃ­n hiá»‡u cho vÃ²ng káº¿ tiáº¿p.',
      },
      { type: 'heading', text: 'Memo 07 â€” Allocation pháº£i Ä‘á»c cÃ¹ng sales capacity vÃ  business economics' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i muá»‘n táº¡o demand lÃ  tÄƒng Ä‘áº§u phá»…u, hoáº·c CPA Ä‘áº¹p lÃ  scale cuá»‘i phá»…u. Sales cÃ³ xá»­ lÃ½ thÃªm lead khÃ´ng, CRM cÃ³ Ä‘á»c Ä‘Æ°á»£c quality, margin vÃ  payback chá»‹u Ä‘Æ°á»£c spend má»›i khÃ´ng?',
      },
      {
        type: 'paragraph',
        text: 'Cáº§n nhÃ¬n mÃ¹a vá»¥, pipeline thiáº¿u Ä‘áº§u vÃ o hay kháº£ nÄƒng chá»‘t, creative cÃ³ Ä‘á»§, offer cÃ³ rÃµ vÃ  sáº£n pháº©m nÃ o Æ°u tiÃªn. Allocation khÃ´ng thá»ƒ tÃ¡ch khá»i sá»©c chá»‹u táº£i váº­n hÃ nh.',
      },
      { type: 'heading', text: 'Memo 08 â€” Khi nÃ o nÃªn tÄƒng tiá»n cho campaign CPA Ä‘áº¹p?' },
      {
        type: 'paragraph',
        text: 'Campaign CPA Ä‘áº¹p Ä‘Ã¡ng tÄƒng khi lead quality tá»‘t, qualified vÃ  opportunity cÃ¹ng tÄƒng, retargeting pool Ä‘á»§ lá»›n, frequency chÆ°a cao, economics á»•n vÃ  sales/ops chá»‹u Ä‘Æ°á»£c volume.',
      },
      {
        type: 'paragraph',
        text: 'Tá»‘t hÆ¡n náº¿u campaign khÃ´ng chá»‰ nháº­n cÃ´ng cuá»‘i hÃ nh trÃ¬nh, incrementality tÆ°Æ¡ng Ä‘á»‘i á»•n vÃ  account váº«n giá»¯ create demand cÃ¹ng test/learn. Campaign ráº» nÃªn Ä‘Æ°á»£c scale trong portfolio, khÃ´ng báº±ng cÃ¡ch bá» Ä‘Ã³i lá»›p khÃ¡c.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t nhá»‹p review phÃ¢n bá»• ngÃ¢n sÃ¡ch nÃªn há»i gÃ¬?' },
      {
        type: 'list',
        items: [
          'NgÃ¢n sÃ¡ch Ä‘ang náº±m á»Ÿ create demand, capture demand, convert, retarget vÃ  test/learn ra sao?',
          'Campaign nÃ o nháº­n cÃ´ng tá»‘t; campaign nÃ o Ä‘ang táº¡o nguá»“n demand má»›i?',
          'Retargeting pool Ä‘ang tÄƒng hay cáº¡n, branded search tÄƒng do Ä‘Ã¢u?',
          'KhÃ¡ch má»›i, qualified lead vÃ  opportunity cÃ³ tÄƒng cÃ¹ng spend khÃ´ng?',
          'Creative test cÃ³ Ä‘á»§ nhá»‹p; lá»›p nÃ o Ä‘ang bá»‹ cáº¯t quÃ¡ sÃ¢u?',
          'Campaign nÃ o bá»‹ Ä‘Ã¡nh giÃ¡ sai vÃ¬ KPI khÃ´ng khá»›p vai trÃ²?',
          'ThÃ¡ng sau cáº§n mua thÃªm volume, thÃªm signal hay thÃªm demand má»›i?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Budget review khÃ´ng chá»‰ xáº¿p campaign tá»« ráº» Ä‘áº¿n Ä‘áº¯t. NÃ³ kiá»ƒm tá»«ng táº§ng cÃ³ Ä‘Æ°á»£c nuÃ´i Ä‘á»§ vÃ  spend tiáº¿p theo cáº§n giáº£i quyáº¿t thiáº¿u há»¥t nÃ o.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n paid ads funnel budget allocation review sheet.',
      },
      { type: 'heading', text: 'Memo 10 â€” Hai tÃ i khoáº£n cÃ¹ng ngÃ¢n sÃ¡ch nhÆ°ng phÃ¢n bá»• khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'TÃ i khoáº£n A dá»“n tiá»n vÃ o retargeting, branded vÃ  cuá»‘i phá»…u. Report Ä‘áº¹p nhÆ°ng prospecting yáº¿u, creative test Ã­t, warm audience khÃ´ng tÄƒng. ThÃ¡ng sau lead má»›i giáº£m, growth khÃ´ng má»Ÿ rá»™ng.',
      },
      {
        type: 'paragraph',
        text: 'TÃ i khoáº£n B giá»¯ tiá»n Ä‘á»ƒ convert, capture demand, prospecting/content/problem-aware creative vÃ  má»™t pháº§n nhá» Ä‘á»u Ä‘áº·n cho test/learn. KhÃ´ng pháº£i campaign nÃ o cÅ©ng Ä‘áº¹p, nhÆ°ng pipeline, creative vÃ  sales Ä‘á»u cÃ³ nguá»“n má»›i.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡c biá»‡t khÃ´ng náº±m á»Ÿ tÃ i khoáº£n nÃ o cÃ³ campaign CPA Ä‘áº¹p hÆ¡n. NÃ³ náº±m á»Ÿ tÃ i khoáº£n nÃ o phÃ¢n bá»• ngÃ¢n sÃ¡ch Ä‘á»ƒ há»‡ thá»‘ng tiáº¿p tá»¥c cÃ³ demand má»›i.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t tÃ i khoáº£n dá»“n tiá»n vÃ o retargeting/branded vÃ¬ CPA Ä‘áº¹p nhÆ°ng pipeline má»›i yáº¿u dáº§n.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng tÄƒng campaign hiá»‡u quáº£ vÃ  cáº¯t campaign Ä‘áº¯t. CÃ¡ch nÃ y há»£p lÃ½ trÃªn report. NhÆ°ng cÃ ng lÃ m lÃ¢u, paid ads cÃ ng khÃ´ng giá»‘ng má»™t báº£ng xáº¿p háº¡ng CPA.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ campaign Ä‘áº¯t vÃ¬ má»Ÿ nhu cáº§u; campaign Ä‘áº¹p vÃ¬ báº¯t ngÆ°á»i Ä‘Ã£ nÃ³ng; campaign Ã­t chá»‘t trá»±c tiáº¿p nhÆ°ng lÃ m branded search tÄƒng; test chÆ°a tháº¯ng ngay nhÆ°ng giÃºp creative vÃ²ng sau.',
      },
      {
        type: 'paragraph',
        text: 'Dá»“n tiá»n vÃ o nÆ¡i report sÃ¡ng nháº¥t cÃ³ thá»ƒ lÃ m account Ä‘áº¹p ngáº¯n háº¡n nhÆ°ng há»‡ thá»‘ng yáº¿u dÃ i háº¡n. PhÃ¢n bá»• tá»‘t khÃ´ng chá»‰ tá»‘i Æ°u CPA hÃ´m nay; nÃ³ nuÃ´i demand cho thÃ¡ng sau.',
      },
      { type: 'heading', text: 'Káº¿t â€” PhÃ¢n bá»• theo vai trÃ², khÃ´ng theo má»™t báº£ng xáº¿p háº¡ng CPA' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng nÃªn dá»“n háº¿t ngÃ¢n sÃ¡ch vÃ o campaign CPA Ä‘áº¹p nháº¥t chá»‰ vÃ¬ report ngáº¯n háº¡n sÃ¡ng. Cuá»‘i phá»…u, branded search vÃ  retargeting dá»… nhÃ¬n Ä‘áº¹p vÃ¬ gáº§n Ä‘iá»ƒm mua vÃ  báº¯t demand Ä‘Ã£ cÃ³.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads lÃ  portfolio gá»“m create demand, capture demand, convert, retarget, test vÃ  learn. Má»—i lá»›p cÃ³ vai trÃ², KPI khÃ¡c nhau. Bá» Ä‘Ã³i Ä‘áº§u phá»…u vÃ  test budget sáº½ lÃ m pipeline yáº¿u dÃ¹ Ads Manager cÃ²n campaign Ä‘áº¹p.',
      },
    ],
    cta: 'Náº¿u tÃ i khoáº£n ads Ä‘ang dá»“n tiá»n vÃ o vÃ i campaign CPA Ä‘áº¹p nháº¥t, hÃ£y há»i láº¡i: ngÃ¢n sÃ¡ch cÃ³ táº¡o demand má»›i khÃ´ng, retargeting pool cÃ³ Ä‘Æ°á»£c náº¡p thÃªm khÃ´ng, creative test cÃ³ Ä‘á»§ nhá»‹p khÃ´ng, qualified lead cÃ³ tÄƒng tháº­t khÃ´ng vÃ  thÃ¡ng sau há»‡ thá»‘ng cÃ²n nguá»“n má»›i Ä‘á»ƒ scale khÃ´ng?',
  },
  {
    title: 'Frequency vÃ  ad fatigue: khi nÃ o quáº£ng cÃ¡o bá»‹ má»i, khi nÃ o chá»‰ lÃ  chÆ°a Ä‘á»§ nháº¯c?',
    slug: 'frequency-va-ad-fatigue-khi-nao-quang-cao-bi-moi-khi-nao-chi-la-chua-du-nhac',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-outdoor-booth-01.jpg",
                "alt": "Outdoor exhibition booth with visitors",
                "caption": "Outdoor exhibition booth",
                "width": 1920,
                "height": 1080,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Frequency tÄƒng khÃ´ng tá»± Ä‘á»™ng cÃ³ nghÄ©a lÃ  quáº£ng cÃ¡o Ä‘Ã£ má»i. CÃ³ campaign cáº§n Ä‘Æ°á»£c nháº¯c láº¡i Ä‘á»§ láº§n, nháº¥t lÃ  retargeting hoáº·c sáº£n pháº©m cÃ³ chu ká»³ cÃ¢n nháº¯c dÃ i. NhÆ°ng cÅ©ng cÃ³ campaign tháº­t sá»± bá»‹ fatigue: CTR giáº£m, CPC tÄƒng, CPL/CPA xáº¥u Ä‘i, comment tiÃªu cá»±c hÆ¡n, lead quality giáº£m vÃ  creative khÃ´ng cÃ²n kÃ©o Ä‘Æ°á»£c tÃ­n hiá»‡u má»›i. Váº¥n Ä‘á» lÃ  pháº£i cháº©n Ä‘oÃ¡n Ä‘Ãºng: má»i creative, má»i offer, audience bÃ£o hÃ²a hay funnel phÃ­a sau Ä‘ang rÆ¡i?',
    content: [
      { type: 'heading', text: 'Opening memo â€” Frequency tÄƒng, cáº£ team nghÄ© quáº£ng cÃ¡o Ä‘Ã£ má»i' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign tá»«ng cháº¡y á»•n báº¯t Ä‘áº§u cÃ³ frequency tÄƒng, CTR giáº£m, CPC nhÃ­ch lÃªn vÃ  CPL khÃ´ng cÃ²n Ä‘áº¹p. Comment thÆ°a hÆ¡n, sales nÃ³i lead dáº¡o nÃ y khÃ´ng Ä‘á»u. Founder há»i: â€œCÃ³ pháº£i máº«u nÃ y bá»‹ má»i rá»“i khÃ´ng?â€',
      },
      {
        type: 'paragraph',
        text: 'Team thay áº£nh, Ä‘á»•i caption, má»Ÿ audience, giáº£m budget, nhÃ¢n báº£n campaign vÃ  thá»­ offer khÃ¡c. VÃ i ngÃ y sau, sá»‘ váº«n khÃ´ng khÃ¡ hÆ¡n. Creative cÃ³ thá»ƒ Ä‘Ã£ má»i, nhÆ°ng váº¥n Ä‘á» cÅ©ng cÃ³ thá»ƒ náº±m á»Ÿ nÆ¡i khÃ¡c.',
      },
      {
        type: 'paragraph',
        text: 'Frequency chá»‰ lÃ  má»™t tÃ­n hiá»‡u. Náº¿u biáº¿n nÃ³ thÃ nh káº¿t luáº­n, team ráº¥t dá»… sá»­a pháº§n nhÃ¬n tháº¥y trÆ°á»›c thay vÃ¬ lá»›p Ä‘ang lÃ m performance rÆ¡i.',
      },
      { type: 'heading', text: 'Memo 01 â€” Frequency lÃ  gÃ¬, vÃ  vÃ¬ sao khÃ´ng nÃªn Ä‘á»c nÃ³ má»™t mÃ¬nh' },
      {
        type: 'paragraph',
        text: 'Frequency lÃ  sá»‘ láº§n trung bÃ¬nh má»™t ngÆ°á»i nhÃ¬n tháº¥y quáº£ng cÃ¡o trong má»™t khoáº£ng thá»i gian. NÃ³ cho biáº¿t má»©c Ä‘á»™ láº·p, giÃºp nháº­n ra retargeting pool nhá», creative phÃ¢n phá»‘i lÃ¢u cho cÃ¹ng nhÃ³m hoáº·c nguy cÆ¡ bÃ£o hÃ²a.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng frequency khÃ´ng cho biáº¿t ngÆ°á»i Ä‘Ã³ cÃ³ chÃº Ã½, Ä‘Ã£ hiá»ƒu offer, Ä‘ang á»Ÿ stage nÃ o, sáº£n pháº©m cÃ³ chu ká»³ mua dÃ i hay ngáº¯n, message cáº§n nháº¯c bao nhiÃªu láº§n vÃ  lead phÃ­a sau cÃ³ cháº¥t lÆ°á»£ng khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Cold prospecting, retargeting vÃ  campaign B2B high-ticket khÃ´ng thá»ƒ Ä‘Æ°á»£c Ä‘á»c báº±ng cÃ¹ng má»™t ká»³ vá»ng. Frequency lÃ  tÃ­n hiá»‡u vá» má»©c Ä‘á»™ láº·p, chÆ°a pháº£i báº±ng chá»©ng Ä‘áº§y Ä‘á»§ ráº±ng quáº£ng cÃ¡o Ä‘Ã£ má»i.',
      },
      { type: 'visual', variant: 'frequency-context-map' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch cÃ¡ch Ä‘á»c frequency vÃ  ad fatigue trong paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Frequency cao chÆ°a cháº¯c xáº¥u' },
      {
        type: 'paragraph',
        text: 'Frequency cao cÃ³ thá»ƒ há»£p lÃ½ vá»›i ngÆ°á»i Ä‘Ã£ vÃ o page, dá»‹ch vá»¥ cáº§n cÃ¢n nháº¯c lÃ¢u, B2B/high-ticket cáº§n nhiá»u Ä‘iá»ƒm cháº¡m, campaign proof, event cÃ³ deadline tháº­t hoáº·c brand má»›i cáº§n Ä‘Æ°á»£c nhá»›.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u há»i khÃ´ng pháº£i cao hay tháº¥p, mÃ  lÃ  má»—i láº§n láº·p cÃ³ thÃªm giÃ¡ trá»‹ khÃ´ng; message cÃ³ Ä‘á»•i theo stage; hiá»‡u suáº¥t, lead quality vÃ  sentiment cÃ³ cÃ¹ng xáº¥u Ä‘i; ngÆ°á»i dÃ¹ng Ä‘ang Ä‘Æ°á»£c thÃªm lÃ½ do hÃ nh Ä‘á»™ng hay chá»‰ tháº¥y láº¡i má»™t lá»i kÃªu gá»i.',
      },
      {
        type: 'paragraph',
        text: 'Nháº¯c láº¡i khÃ´ng xáº¥u. Nháº¯c cÃ¹ng má»™t thá»©, sai ngá»¯ cáº£nh vÃ  khÃ´ng táº¡o thÃªm lÃ½ do má»›i má»›i lÃ  váº¥n Ä‘á».',
      },
      { type: 'heading', text: 'Memo 03 â€” Dáº¥u hiá»‡u ad fatigue tháº­t sá»±' },
      {
        type: 'paragraph',
        text: 'Campaign cÃ³ thá»ƒ fatigue khi nhiá»u tÃ­n hiá»‡u cÃ¹ng xáº¥u: frequency tÄƒng, reach má»›i giáº£m, CTR vÃ  engagement giáº£m, CPC/CPM tÄƒng, landing page CVR rÆ¡i, CPL/CPA tÄƒng, reaction tiÃªu cá»±c vÃ  creative thiáº¿u signal má»›i.',
      },
      {
        type: 'paragraph',
        text: 'á»ž sÃ¢u hÆ¡n, lead quality cÃ³ thá»ƒ giáº£m; retargeting láº·p nhiá»u nhÆ°ng khÃ´ng táº¡o action; audience overlap rÃµ; cÃ¹ng offer vÃ  message Ä‘Ã£ cháº¡y quÃ¡ lÃ¢u. Má»™t chá»‰ sá»‘ dao Ä‘á»™ng chÆ°a Ä‘á»§ káº¿t luáº­n. Fatigue lÃ  tá»• há»£p signal theo thá»i gian.',
      },
      { type: 'visual', variant: 'ad-fatigue-diagnosis-map' },
      { type: 'heading', text: 'Memo 04 â€” Creative fatigue khÃ¡c offer fatigue' },
      {
        type: 'paragraph',
        text: 'Creative fatigue xáº£y ra khi hook bá»‹ tháº¥y nhiá»u, visual háº¿t kÃ©o attention, format khÃ´ng cÃ²n ná»•i báº­t hoáº·c audience quÃ¡ quen máº«u. CTR vÃ  engagement giáº£m, CPC tÄƒng. CÃ³ thá»ƒ Ä‘á»•i hook, visual, format, proof hoáº·c angle.',
      },
      {
        type: 'paragraph',
        text: 'Offer fatigue khÃ¡c á»Ÿ chá»— ngÆ°á»i dÃ¹ng váº«n chÃº Ã½ vÃ  click nhÆ°ng khÃ´ng Ä‘i tiáº¿p. Form submit hoáº·c purchase giáº£m, CTA thiáº¿u lá»±c, proof khÃ´ng cÃ²n má»›i, package hoáº·c cam káº¿t khÃ´ng Ä‘á»§ háº¥p dáº«n. Khi Ä‘Ã³ cáº§n xem offer, Ä‘iá»u kiá»‡n, risk reversal, proof, CTA vÃ  message trÃªn page.',
      },
      {
        type: 'paragraph',
        text: 'Äá»•i má»™t hÃ¬nh má»›i khÃ´ng giÃºp nhiá»u náº¿u thá»© Ä‘Ã£ má»i tháº­t sá»± lÃ  lá»i Ä‘á» nghá»‹.',
      },
      { type: 'heading', text: 'Memo 05 â€” Audience fatigue khÃ¡c creative fatigue' },
      {
        type: 'paragraph',
        text: 'Audience saturation xuáº¥t hiá»‡n khi tá»‡p nhá», retargeting pool khÃ´ng Ä‘Æ°á»£c náº¡p, cold audience bá»‹ khai thÃ¡c lÃ¢u hoáº·c overlap nhiá»u. Reach má»›i giáº£m, frequency tÄƒng nhanh vÃ  creative má»›i cÅ©ng Ã­t cáº£i thiá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'LÃºc nÃ y cÃ³ thá»ƒ cáº§n náº¡p demand Ä‘áº§u phá»…u, má»Ÿ audience cÃ³ kiá»ƒm soÃ¡t, gom hoáº·c tÃ¡ch structure, Ä‘á»•i angle Ä‘á»ƒ tá»± lá»c nhÃ³m má»›i vÃ  trÃ¡nh dá»“n ngÃ¢n sÃ¡ch vÃ o má»™t tá»‡p nhá». CÃ³ lÃºc creative chÆ°a má»i; tá»‡p ngÆ°á»i Ä‘á»ƒ nÃ³i chuyá»‡n Ä‘Ã£ cáº¡n.',
      },
      { type: 'heading', text: 'Memo 06 â€” Retargeting fatigue thÆ°á»ng Ä‘áº¿n tá»« nháº¯c sai thÃ´ng Ä‘iá»‡p' },
      {
        type: 'paragraph',
        text: 'Retargeting khÃ´ng nÃªn chá»‰ láº·p láº¡i cÃ¹ng má»™t ads bÃ¡n hÃ ng. NgÆ°á»i Ä‘Ã£ biáº¿t brand thÆ°á»ng cáº§n case study, FAQ, proof, so sÃ¡nh, objection handling, testimonial, demo, next step rÃµ hÆ¡n hoáº·c deadline náº¿u deadline Ä‘Ã³ cÃ³ tháº­t.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u há» chá»‰ tháº¥y â€œÄÄƒng kÃ½ ngayâ€, â€œNháº­n tÆ° váº¥nâ€ hoáº·c â€œÆ¯u Ä‘Ã£i hÃ´m nayâ€ nhiá»u láº§n, pháº£n xáº¡ tá»± nhiÃªn lÃ  phá»›t lá». Retargeting khÃ´ng pháº£i bÃ¡m Ä‘uá»•i; nÃ³ cáº§n thay Ä‘á»•i thÃ´ng Ä‘iá»‡p theo lÃ½ do khÃ¡ch chÆ°a hÃ nh Ä‘á»™ng.',
      },
      { type: 'visual', variant: 'creative-refresh-ladder' },
      { type: 'heading', text: 'Memo 07 â€” Creative refresh khÃ´ng pháº£i lÃ m láº¡i tá»« Ä‘áº§u' },
      {
        type: 'paragraph',
        text: 'Refresh tá»‘t giá»¯ pháº§n Ä‘ang tháº¯ng vÃ  thay pháº§n má»i: giá»¯ offer Ä‘á»•i hook; giá»¯ hook Ä‘á»•i proof; giá»¯ angle Ä‘á»•i format; giá»¯ page sá»­a intro; giá»¯ audience Ä‘á»•i message theo objection.',
      },
      {
        type: 'paragraph',
        text: 'CÅ©ng cÃ³ thá»ƒ giá»¯ campaign rá»“i thÃªm batch creative má»›i thay vÃ¬ nhÃ¢n báº£n má»i thá»©. Refresh tá»‘t há»c tá»« signal cÅ©, khÃ´ng quÃªn háº¿t rá»“i lÃ m láº¡i ngáº«u nhiÃªn.',
      },
      { type: 'heading', text: 'Memo 08 â€” Äá»«ng chá» fatigue má»›i lÃ m creative pipeline' },
      {
        type: 'paragraph',
        text: 'Má»™t lá»—i phá»• biáº¿n lÃ  chá» campaign má»i má»›i lÃ m máº«u má»›i. Team láº­p tá»©c bá»‹ Ä‘á»™ng: creative lÃ m vá»™i, angle bank vÃ  proof bank trá»‘ng, objection tá»« sales chÆ°a Ä‘Æ°á»£c ghi, winner cÅ© tá»¥t trÆ°á»›c khi cÃ³ máº«u thay vÃ  ngÃ¢n sÃ¡ch bá»‹ ngáº¯t nhá»‹p.',
      },
      {
        type: 'paragraph',
        text: 'Tá»‘t hÆ¡n lÃ  cÃ³ batch creative theo chu ká»³, ghi angle cÃ²n lá»±c, chuáº©n bá»‹ proof, láº¥y sales feedback lÃ m input vÃ  test nhá» trÆ°á»›c khi winner má»i náº·ng. Fatigue bÃ¬nh thÆ°á»ng; nÄƒng lá»±c thay tháº¿ má»›i quan trá»ng.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t nhá»‹p review fatigue nÃªn há»i gÃ¬?' },
      {
        type: 'list',
        items: [
          'Frequency tÄƒng á»Ÿ cold campaign hay retargeting, audience size cÃ²n Ä‘á»§ khÃ´ng?',
          'Reach má»›i, CTR, CPC vÃ  engagement Ä‘ang thay Ä‘á»•i theo trend nÃ o?',
          'Landing page hoáº·c form CVR cÃ³ giáº£m; CPL/CPA tÄƒng á»Ÿ media hay sau click?',
          'Lead quality, contacted vÃ  qualified cÃ³ xáº¥u Ä‘i khÃ´ng?',
          'Comment hoáº·c feedback cÃ³ tiÃªu cá»±c hÆ¡n khÃ´ng?',
          'Pháº§n Ä‘ang má»i lÃ  hook, proof, format, angle hay offer?',
          'Retargeting thÃªm lÃ½ do má»›i hay láº·p cÃ¹ng má»™t message?',
          'Cáº§n má»Ÿ audience, refresh creative, sá»­a offer, page/form hay sales follow-up?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Fatigue review lÃ  cháº©n Ä‘oÃ¡n há»‡ thá»‘ng. Frequency chá»‰ lÃ  Ä‘iá»ƒm báº¯t Ä‘áº§u Ä‘á»ƒ láº§n theo audience, creative, funnel vÃ  outcome.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n ad fatigue diagnosis checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng frequency tÄƒng, hai quyáº¿t Ä‘á»‹nh khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Campaign A lÃ  cold prospecting: frequency tÄƒng nhanh, reach má»›i giáº£m, CTR giáº£m, CPL tÄƒng vÃ  creative má»›i cÅ©ng khÃ´ng cáº£i thiá»‡n nhiá»u. Audience cÃ³ thá»ƒ quÃ¡ nhá» hoáº·c cáº¡n. Team cáº§n xem láº¡i source demand, audience vÃ  structure thay vÃ¬ chá»‰ thay thÃªm áº£nh.',
      },
      {
        type: 'paragraph',
        text: 'Campaign B lÃ  retargeting: frequency cao hÆ¡n nhÆ°ng CTR váº«n á»•n, lead quality tá»‘t, message Ä‘ang xá»­ lÃ½ objection vÃ  chÆ°a cÃ³ negative feedback rÃµ. Campaign cÃ³ thá»ƒ chÆ°a cáº§n táº¯t; team chá»‰ cáº§n xoay proof vÃ  message Ä‘á»ƒ trÃ¡nh láº·p.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¹ng lÃ  frequency tÄƒng, má»™t bÃªn bÃ¡o saturation, má»™t bÃªn cÃ³ thá»ƒ lÃ  nháº¯c láº¡i há»£p lÃ½. Quyáº¿t Ä‘á»‹nh pháº£i khÃ¡c nhau.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign bá»‹ tÆ°á»Ÿng creative fatigue nhÆ°ng tháº­t ra audience nhá» vÃ  retargeting pool cáº¡n.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng xem frequency nhÆ° sá»‘ cáº£nh bÃ¡o. TÄƒng lÃªn lÃ  lo; CPL xáº¥u Ä‘i lÃ  nghÄ© creative má»i vÃ  pháº£n xáº¡ Ä‘áº§u tiÃªn lÃ  Ä‘á»•i máº«u.',
      },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m lÃ¢u, tÃ´i cÃ ng tháº¥y cÃ³ máº«u má»i tháº­t, offer má»i, audience cáº¡n, retargeting láº·p sai thÃ´ng Ä‘iá»‡p, page/form rÆ¡i hoáº·c sales feedback cho tháº¥y ká»³ vá»ng trong message chÆ°a khá»›p. Nhá»¯ng váº¥n Ä‘á» nÃ y cáº§n cÃ¡ch sá»­a khÃ¡c nhau.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads sÃ¢u khÃ´ng chá»‰ thay creative nhanh hÆ¡n. NÃ³ cháº©n Ä‘oÃ¡n Ä‘Ãºng lá»›p nÃ o Ä‘ang má»i. Frequency lÃ  Ä‘Ã¨n bÃ¡o; operator váº«n pháº£i má»Ÿ náº¯p mÃ¡y Ä‘á»ƒ xem váº¥n Ä‘á» náº±m á»Ÿ creative, audience, offer, funnel hay sales.',
      },
      { type: 'heading', text: 'Káº¿t â€” Frequency lÃ  tÃ­n hiá»‡u, khÃ´ng pháº£i káº¿t luáº­n' },
      {
        type: 'paragraph',
        text: 'Frequency cao khÃ´ng tá»± Ä‘á»™ng cÃ³ nghÄ©a quáº£ng cÃ¡o Ä‘Ã£ má»i. NÃ³ pháº£i Ä‘Æ°á»£c Ä‘á»c cÃ¹ng campaign stage, audience size, creative signal, funnel signal, CPL/CPA, lead quality vÃ  sales feedback.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ lÃºc cáº§n refresh creative, Ä‘á»•i offer, má»Ÿ audience, xoay proof trong retargeting, sá»­a landing page/form hoáº·c follow-up. Paid ads sÃ¢u khÃ´ng pháº£n á»©ng theo má»™t con sá»‘; nÃ³ cháº©n Ä‘oÃ¡n Ä‘Ãºng lá»›p Ä‘ang má»i trong há»‡ thá»‘ng.',
      },
    ],
    cta: 'Náº¿u campaign báº¯t Ä‘áº§u xáº¥u Ä‘i, Ä‘á»«ng vá»™i káº¿t luáº­n â€œcreative má»iâ€ chá»‰ vÃ¬ frequency tÄƒng. HÃ£y há»i: audience cÃ³ cáº¡n khÃ´ng, CTR/CPC cÃ³ giáº£m khÃ´ng, page/form cÃ³ rÆ¡i khÃ´ng, lead quality cÃ³ xáº¥u Ä‘i khÃ´ng, offer cÃ²n lá»±c khÃ´ng vÃ  retargeting Ä‘ang thÃªm lÃ½ do má»›i hay chá»‰ láº·p láº¡i cÃ¹ng má»™t lá»i kÃªu gá»i?',
  },
  {
    title: 'Learning phase trong paid ads: vÃ¬ sao chá»‰nh campaign liÃªn tá»¥c lÃ m ads khÃ´ng ká»‹p há»c?',
    slug: 'learning-phase-trong-paid-ads-vi-sao-chinh-campaign-lien-tuc-lam-ads-khong-kip-hoc',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-booth-team-demo-01.jpg",
                "alt": "Team members at an exhibition booth serving visitors",
                "caption": "Exhibition booth team activity",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Paid ads cáº§n tÃ­n hiá»‡u Ä‘á»§ á»•n Ä‘á»‹nh Ä‘á»ƒ há»c. Náº¿u team vá»«a cháº¡y Ä‘Ã£ Ä‘á»•i budget, Ä‘á»•i target, Ä‘á»•i creative, Ä‘á»•i objective, Ä‘á»•i event, Ä‘á»•i landing page hoáº·c Ä‘á»•i form liÃªn tá»¥c, campaign ráº¥t khÃ³ biáº¿t Ä‘iá»u gÃ¬ Ä‘ang hiá»‡u quáº£ tháº­t. Váº¥n Ä‘á» khÃ´ng pháº£i â€œÄ‘á»«ng bao giá» chá»‰nh adsâ€, mÃ  lÃ  chá»‰nh Ä‘Ãºng lÃºc, Ä‘Ãºng má»©c vÃ  cÃ³ log rÃµ Ä‘á»ƒ khÃ´ng tá»± lÃ m nhiá»…u dá»¯ liá»‡u cá»§a mÃ¬nh.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Campaign chÆ°a ká»‹p há»c Ä‘Ã£ bá»‹ sá»­a tiáº¿p' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign vá»«a launch. NgÃ y Ä‘áº§u lead Ã­t, ngÃ y hai CPL hÆ¡i cao, team báº¯t Ä‘áº§u lo. Budget tÄƒng rá»“i giáº£m, target Ä‘á»•i, creative má»›i Ä‘Æ°á»£c thÃªm, máº«u cÅ© bá»‹ táº¯t. Copy, form, page vÃ  event cÅ©ng láº§n lÆ°á»£t Ä‘Æ°á»£c chá»‰nh.',
      },
      {
        type: 'paragraph',
        text: 'Cuá»‘i tuáº§n, report dao Ä‘á»™ng nhÆ°ng khÃ´ng ai biáº¿t creative tháº­t sá»± yáº¿u, target sai, page cÃ³ váº¥n Ä‘á» hay campaign chá»‰ Ä‘ang bá»‹ lÃ m nhiá»…u. Founder há»i: â€œVáº­y rá»‘t cuá»™c cÃ¡i gÃ¬ sai?â€',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ campaign khÃ´ng tháº¥t báº¡i vÃ¬ setup ban Ä‘áº§u quÃ¡ tá»‡. NÃ³ tháº¥t báº¡i vÃ¬ chÆ°a ká»‹p há»c Ä‘Ã£ bá»‹ can thiá»‡p quÃ¡ nhiá»u.',
      },
      { type: 'heading', text: 'Memo 01 â€” Learning phase lÃ  giai Ä‘oáº¡n há»‡ thá»‘ng Ä‘ang tÃ¬m pattern' },
      {
        type: 'paragraph',
        text: 'Khi campaign má»›i cháº¡y hoáº·c vá»«a Ä‘á»•i lá»›n, platform cáº§n quan sÃ¡t ai pháº£n há»“i creative, click, submit hoáº·c purchase; conversion Ä‘áº¿n tá»« nhÃ³m nÃ o; event cÃ³ á»•n Ä‘á»‹nh vÃ  chi phÃ­ phÃ¢n phá»‘i dao Ä‘á»™ng ra sao.',
      },
      {
        type: 'paragraph',
        text: 'Dá»¯ liá»‡u lÃºc nÃ y thÆ°á»ng chÆ°a á»•n Ä‘á»‹nh. NgÃ y Ä‘áº§u chÆ°a Ä‘áº¹p khÃ´ng chá»©ng minh campaign sai; vÃ i conversion chÆ°a Ä‘á»§ gá»i winner. Campaign Ä‘ang mua dá»¯ liá»‡u Ä‘á»ƒ tÃ¬m pattern, khÃ´ng láº­p tá»©c cho hiá»‡u suáº¥t pháº³ng.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u thay Ä‘á»•i quÃ¡ nhanh, pattern chÆ°a ká»‹p hÃ¬nh thÃ nh. Äiá»u nÃ y khÃ´ng cÃ³ nghÄ©a thuáº­t toÃ¡n luÃ´n Ä‘Ãºng; nÃ³ chá»‰ cáº§n Ä‘áº§u vÃ o tÆ°Æ¡ng Ä‘á»‘i á»•n Ä‘á»‹nh Ä‘á»ƒ tÃ­n hiá»‡u cÃ³ thá»ƒ Ä‘Æ°á»£c Ä‘á»c.',
      },
      { type: 'visual', variant: 'campaign-learning-loop' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch vÃ¬ sao chá»‰nh campaign liÃªn tá»¥c lÃ m ads khÃ´ng ká»‹p há»c.',
      },
      { type: 'heading', text: 'Memo 02 â€” Chá»‰nh liÃªn tá»¥c lÃ m team khÃ´ng biáº¿t cÃ¡i gÃ¬ táº¡o ra káº¿t quáº£' },
      {
        type: 'paragraph',
        text: 'Náº¿u budget, creative, audience, offer, page, form vÃ  event cÃ¹ng Ä‘á»•i, káº¿t quáº£ khÃ´ng cÃ²n lá»i giáº£i rÃµ. CPL tÄƒng cÃ³ thá»ƒ do creative, audience, budget, page, form, tracking hoáº·c CRM.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cÅ©ng cÃ³ thá»ƒ chá»‰ lÃ  dao Ä‘á»™ng ngáº¯n háº¡n. Tá»‘i Æ°u khÃ´ng cÃ³ log vÃ  khÃ´ng cÃ³ nhá»‹p sáº½ biáº¿n thÃ nh nhiá»…u dá»¯ liá»‡u: team vá»«a lÃ m khÃ³ platform há»c, vá»«a lÃ m khÃ³ chÃ­nh mÃ¬nh Ä‘á»c report.',
      },
      { type: 'heading', text: 'Memo 03 â€” KhÃ´ng pháº£i má»i thay Ä‘á»•i Ä‘á»u cÃ³ cÃ¹ng má»©c áº£nh hÆ°á»Ÿng' },
      {
        type: 'paragraph',
        text: 'Sá»­a typo, bá»• sung UTM, thÃªm creative batch theo káº¿ hoáº¡ch, chá»‰nh copy nhá» khÃ´ng Ä‘á»•i offer hoáº·c pause ad lá»—i lÃ  thay Ä‘á»•i nháº¹. ChÃºng thÆ°á»ng khÃ´ng thay toÃ n bá»™ hypothesis.',
      },
      {
        type: 'paragraph',
        text: 'Äá»•i objective, event, audience lá»›n, bid strategy, offer, page, form, structure hoáº·c budget máº¡nh lÃ  biáº¿n má»›i Ä‘Ã¡ng ká»ƒ. Team cáº§n lÃ½ do, log vÃ  khoáº£ng Ä‘á»c láº¡i phÃ¹ há»£p volume cÃ¹ng chu ká»³ mua.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng nÃªn Ä‘á»‘i xá»­ má»i edit nhÆ° nhau. Thay Ä‘á»•i cÃ ng lá»›n, cÃ ng pháº£i rÃµ mÃ¬nh muá»‘n há»c Ä‘iá»u gÃ¬.',
      },
      { type: 'visual', variant: 'small-vs-significant-edits' },
      { type: 'heading', text: 'Memo 04 â€” Khi nÃ o nÃªn chá» thÃªm thay vÃ¬ sá»­a ngay?' },
      {
        type: 'paragraph',
        text: 'NÃªn chá» khi campaign má»›i cháº¡y ngáº¯n, volume cÃ²n Ã­t, sá»‘ xáº¥u má»›i xuáº¥t hiá»‡n má»™t ngÃ y, creative thiáº¿u impression/click, CRM chÆ°a cáº­p nháº­t quality vÃ  tracking, page, form khÃ´ng cÃ³ lá»—i.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u team Ä‘ang test má»™t hypothesis cÃ³ giá»›i háº¡n ngÃ¢n sÃ¡ch vÃ  biáº¿n Ä‘á»™ng váº«n trong vÃ¹ng theo dÃµi, chá» lÃ  Ä‘á»ƒ signal Ä‘á»§ chÃ­n trÆ°á»›c khi káº¿t luáº­n. Chá» khÃ´ng pháº£i lÆ°á»i tá»‘i Æ°u hoáº·c máº·c Ä‘á»‹nh campaign sáº½ tá»± tá»‘t lÃªn.',
      },
      { type: 'heading', text: 'Memo 05 â€” Khi nÃ o pháº£i sá»­a ngay?' },
      {
        type: 'paragraph',
        text: 'Form lá»—i, page sáº­p hoáº·c cháº­m, event báº¯n sai, lead khÃ´ng vÃ o CRM, UTM máº¥t, budget nháº§m, ad bá»‹ reject, spend báº¥t thÆ°á»ng, CTA há»ng hoáº·c tracking double pháº£i sá»­a ngay.',
      },
      {
        type: 'paragraph',
        text: 'Offer hoáº·c copy khiáº¿n khÃ¡ch hiá»ƒu sai nghiÃªm trá»ng cÅ©ng váº­y. Learning phase khÃ´ng pháº£i lÃ½ do bá» qua lá»—i ká»¹ thuáº­t vÃ  lá»—i bÃ n giao. Giá»¯ má»™t Ä‘áº§u vÃ o sai chá»‰ giÃºp há»‡ thá»‘ng há»c tá»« dá»¯ liá»‡u sai.',
      },
      { type: 'heading', text: 'Memo 06 â€” Budget change cáº§n cÃ³ nhá»‹p, khÃ´ng giáº­t lÃªn xuá»‘ng theo cáº£m xÃºc' },
      {
        type: 'paragraph',
        text: 'Budget dá»… bá»‹ chá»‰nh theo cáº£m xÃºc: hÃ´m qua CPL tháº¥p thÃ¬ tÄƒng, hÃ´m nay cao thÃ¬ giáº£m; lead Ã­t thÃ¬ bÆ¡m, spend nhanh láº¡i kÃ©o xuá»‘ng. ÄÃ´i khi team chá»‰nh Ä‘á»ƒ táº¡o cáº£m giÃ¡c kiá»ƒm soÃ¡t.',
      },
      {
        type: 'paragraph',
        text: 'Campaign chÆ°a ká»‹p á»•n Ä‘á»‹nh, phÃ¢n phá»‘i Ä‘Ã£ Ä‘á»•i nhá»‹p; signal má»›i vÃ  cÅ© láº«n nhau; report trá»Ÿ thÃ nh pháº£n Ã¡nh cá»§a nhá»¯ng láº§n chá»c budget. TÄƒng giáº£m nÃªn dá»±a trÃªn trend, lead quality, economics vÃ  káº¿ hoáº¡ch test/scale, khÃ´ng pháº£i pháº£n á»©ng má»™t ngÃ y.',
      },
      { type: 'visual', variant: 'campaign-change-log' },
      { type: 'heading', text: 'Memo 07 â€” Creative test nÃªn theo batch, khÃ´ng tháº£ láº» tÃ¹y há»©ng' },
      {
        type: 'paragraph',
        text: 'HÃ´m nay thÃªm máº«u, mai táº¯t máº«u, má»‘t Ä‘á»•i caption rá»“i tháº£ video khÃ¡c khiáº¿n team khÃ³ biáº¿t creative nÃ o tháº¯ng vÃ¬ sao. Nhiá»u hoáº¡t Ä‘á»™ng khÃ´ng Ä‘á»“ng nghÄ©a nhiá»u bÃ i há»c.',
      },
      {
        type: 'paragraph',
        text: 'Tá»‘t hÆ¡n lÃ  gom creative theo batch, má»—i batch cÃ³ hypothesis rÃµ vá» angle, proof, hook hoáº·c format; giá»¯ Ä‘á»§ thá»i gian Ä‘á»c; háº¡n cháº¿ Ä‘á»•i nhiá»u biáº¿n cÃ¹ng lÃºc vÃ  viáº¿t learning note. Creative testing lÃ  Ä‘Æ°a biáº¿n má»›i vÃ o cÃ³ ká»· luáº­t.',
      },
      { type: 'heading', text: 'Memo 08 â€” Landing page vÃ  form cÅ©ng lÃ m ads report thay Ä‘á»•i' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team log trong Ads Manager nhÆ°ng quÃªn hero, CTA, Ä‘á»™ dÃ i form, cÃ¢u há»i lá»c, mobile layout, page speed, thank-you page, tracking, proof hoáº·c FAQ cÅ©ng Ä‘Ã£ Ä‘á»•i.',
      },
      {
        type: 'paragraph',
        text: 'Performance cÃ³ thá»ƒ xáº¥u vÃ¬ creative vÃ  offer trÃªn page khÃ´ng cÃ²n khá»›p, hoáº·c tá»‘t hÆ¡n vÃ¬ form dá»… hÆ¡n nhÆ°ng lead quality giáº£m. Paid ads khÃ´ng chá»‰ há»c trong Ads Manager. Page vÃ  form lÃ  má»™t pháº§n cá»§a signal nÃªn thay Ä‘á»•i á»Ÿ Ä‘Ã³ cÅ©ng pháº£i Ä‘Æ°á»£c ghi láº¡i.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t nhá»‹p tá»‘i Æ°u cÃ³ ká»· luáº­t nÃªn cÃ³ gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Daily check báº¯t lá»—i, pacing, tracking, form, page vÃ  báº¥t thÆ°á»ng lá»›n. Nhá»‹p dÃ i hÆ¡n Ä‘á»c trend CTR, CPC, CPL, frequency, creative batch vÃ  page signal. Khoáº£ng Ä‘á»c pháº£i há»£p volume vÃ  chu ká»³ mua.',
      },
      {
        type: 'paragraph',
        text: 'Weekly review ná»‘i lead quality, contacted, qualified, sales note vÃ  lost reason Ä‘á»ƒ quyáº¿t Ä‘á»‹nh giá»¯, sá»­a, táº¯t hoáº·c tÄƒng. Change log ghi thay Ä‘á»•i, lÃ½ do, signal ká»³ vá»ng, thá»i Ä‘iá»ƒm review vÃ  quyáº¿t Ä‘á»‹nh sau Ä‘Ã³.',
      },
      {
        type: 'paragraph',
        text: 'Tá»‘i Æ°u tá»‘t khÃ´ng pháº£i chá»‰nh má»—i ngÃ y. ÄÃ³ lÃ  cÃ³ nhá»‹p Ä‘á»c, nhá»‹p sá»­a vÃ  nhá»‹p há»c.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign change log template cho paid ads.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng campaign xáº¥u Ä‘i, hai cÃ¡ch xá»­ lÃ½ khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Team A tháº¥y CPL tÄƒng liá»n táº¯t creative, Ä‘á»•i target, kÃ©o budget lÃªn xuá»‘ng vÃ  thay landing page mÃ  khÃ´ng ghi log. Cuá»‘i tuáº§n, há» cÃ³ nhiá»u edit nhÆ°ng khÃ´ng biáº¿t edit nÃ o tÃ¡c Ä‘á»™ng.',
      },
      {
        type: 'paragraph',
        text: 'Team B kiá»ƒm lá»—i, xÃ¡c nháº­n tracking vÃ  form á»•n rá»“i chá» Ä‘á»c trend. CTR giáº£m nhÆ°ng page CVR á»•n, nÃªn há» giá»¯ audience vÃ  budget, thÃªm creative batch khÃ¡c, log rá»“i review quality.',
      },
      {
        type: 'paragraph',
        text: 'Team B biáº¿t bÆ°á»›c tiáº¿p theo lÃ  refresh creative, chÆ°a cáº§n rebuild toÃ n campaign. KhÃ¡c biá»‡t khÃ´ng náº±m á»Ÿ ai â€œchÄƒm tá»‘i Æ°uâ€ hÆ¡n, mÃ  á»Ÿ ai tá»‘i Æ°u cÃ³ ká»· luáº­t.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign bá»‹ chá»‰nh quÃ¡ nhiá»u biáº¿n nÃªn khÃ´ng Ä‘á»c Ä‘Æ°á»£c nguyÃªn nhÃ¢n performance xáº¥u.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng nghÄ© chá»‰nh liÃªn tá»¥c má»›i lÃ  tá»‘i Æ°u. Má»Ÿ account mÃ  khÃ´ng sá»­a gÃ¬ táº¡o cáº£m giÃ¡c Ä‘ang bá» máº·c; CPL nhÃ­ch lÃªn hoáº·c lead Ã­t má»™t ngÃ y lÃ  muá»‘n can thiá»‡p.',
      },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m lÃ¢u, tÃ´i cÃ ng tháº¥y cÃ³ lÃºc nÃªn kiá»ƒm lá»—i rá»“i chá» signal; cÃ³ lÃºc sá»­a ngay vÃ¬ form há»ng; cÃ³ lÃºc thÃªm creative nhÆ°ng khÃ´ng Ä‘á»•i luÃ´n audience vÃ  page; cÃ³ lÃºc rebuild, nhÆ°ng pháº£i biáº¿t vÃ¬ sao.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads sÃ¢u khÃ´ng pháº£i Ä‘á»ƒ im. NÃ³ lÃ  biáº¿t khi nÃ o Ä‘á»ƒ há»‡ thá»‘ng há»c, khi nÃ o can thiá»‡p vÃ  can thiá»‡p á»Ÿ lá»›p nÃ o. Campaign khÃ´ng sá»£ Ä‘Æ°á»£c tá»‘i Æ°u; nÃ³ sá»£ bá»‹ chá»‰nh liÃªn tá»¥c mÃ  khÃ´ng ai biáº¿t Ä‘ang há»c Ä‘iá»u gÃ¬.',
      },
      { type: 'heading', text: 'Káº¿t â€” á»”n Ä‘á»‹nh Ä‘á»§ Ä‘á»ƒ há»c, can thiá»‡p Ä‘á»§ ká»· luáº­t' },
      {
        type: 'paragraph',
        text: 'Learning phase cáº§n thá»i gian vÃ  signal tÆ°Æ¡ng Ä‘á»‘i á»•n Ä‘á»‹nh Ä‘á»ƒ tÃ¬m pattern. Chá»‰nh liÃªn tá»¥c lÃ m nhiá»…u thuáº­t toÃ¡n vÃ  report, nhÆ°ng khÃ´ng cÃ³ nghÄ©a pháº£i Ä‘á»ƒ im má»i thá»©.',
      },
      {
        type: 'paragraph',
        text: 'Lá»—i form, tracking, page hoáº·c budget nháº§m pháº£i sá»­a ngay. Thay Ä‘á»•i lá»›n á»Ÿ objective, event, audience, offer, page, budget hoáº·c structure cáº§n cÃ³ lÃ½ do, change log vÃ  review window phÃ¹ há»£p.',
      },
    ],
    cta: 'Náº¿u campaign vá»«a cháº¡y Ä‘Ã£ bá»‹ chá»‰nh má»—i ngÃ y, hÃ£y dá»«ng láº¡i vÃ  há»i: mÃ¬nh Ä‘ang sá»­a vÃ¬ cÃ³ lá»—i tháº­t, vÃ¬ tÃ­n hiá»‡u Ä‘á»§ rÃµ hay vÃ¬ Ä‘ang pháº£n á»©ng vá»›i noise? VÃ  má»—i láº§n sá»­a, team cÃ³ ghi láº¡i thay Ä‘á»•i, lÃ½ do, ká»³ vá»ng vÃ  thá»i Ä‘iá»ƒm review khÃ´ng?',
  },
  {
    title: 'CPL tÄƒng thÃ¬ sá»­a gÃ¬: media, creative, landing page hay sales?',
    slug: 'cpl-tang-thi-sua-gi-media-creative-landing-page-hay-sales',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/speaking/speaking-panel-discussion-three-speakers-01.jpg",
                "alt": "Three speakers holding microphones at an event",
                "caption": "Speaking session with three presenters",
                "width": 2048,
                "height": 1152,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'CPL tÄƒng khÃ´ng tá»± Ä‘á»™ng cÃ³ nghÄ©a lÃ  campaign há»ng. NÃ³ cÃ³ thá»ƒ Ä‘áº¿n tá»« CPM tÄƒng, CTR giáº£m, CPC tÄƒng, creative má»i, offer yáº¿u, landing page conversion giáº£m, form lá»—i, tracking sai, lead quality kÃ©m hoáº·c sales follow-up cháº­m. Náº¿u chá»‰ nhÃ¬n CPL rá»“i sá»­a ads, team ráº¥t dá»… sá»­a sai chá»—. Paid ads sÃ¢u cáº§n bÃ³c chá»‰ sá»‘ theo chuá»—i nguyÃªn nhÃ¢n trÆ°á»›c khi quyáº¿t Ä‘á»‹nh sá»­a gÃ¬.',
    content: [
      { type: 'heading', text: 'Opening memo â€” CPL tÄƒng, team báº¯t Ä‘áº§u sá»­a ads' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign tá»«ng cháº¡y á»•n, tuáº§n nÃ y CPL tÄƒng. Founder há»i: â€œAds cÃ³ váº¥n Ä‘á» gÃ¬ khÃ´ng?â€ Team láº­p tá»©c Ä‘á» xuáº¥t thay creative, Ä‘á»•i target, giáº£m budget, táº¯t campaign, má»Ÿ campaign má»›i, Ä‘á»•i offer hoáº·c sá»­a landing page.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng chÆ°a ai tráº£ lá»i CPL tÄƒng vÃ¬ CPM hay CTR; CPC tÄƒng do auction hay creative; click váº«n cÃ³ nhÆ°ng form submit giáº£m; lead váº«n cÃ³ nhÆ°ng qualified giáº£m; tracking cÃ³ sai hoáº·c sales cÃ³ follow-up cháº­m khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'CPL tÄƒng lÃ  triá»‡u chá»©ng, khÃ´ng pháº£i diagnosis. Sá»­a trÆ°á»›c khi bÃ³c nguyÃªn nhÃ¢n dá»… biáº¿n má»™t Ä‘iá»ƒm ngháº½n thÃ nh nhiá»u thay Ä‘á»•i khÃ³ Ä‘á»c.',
      },
      { type: 'heading', text: 'Memo 01 â€” CPL lÃ  chá»‰ sá»‘ Ä‘áº§u ra, khÃ´ng pháº£i nguyÃªn nhÃ¢n' },
      {
        type: 'paragraph',
        text: 'CPL lÃ  chi phÃ­ Ä‘á»ƒ táº¡o má»™t lead. Khi nÃ³ tÄƒng, nguyÃªn nhÃ¢n cÃ³ thá»ƒ lÃ  chi phÃ­ hiá»ƒn thá»‹ tÄƒng, ngÆ°á»i tháº¥y ads Ã­t click, click Ä‘áº¯t hÆ¡n, page thuyáº¿t phá»¥c kÃ©m, form lá»—i, offer yáº¿u hoáº·c event tracking sai.',
      },
      {
        type: 'paragraph',
        text: 'SÃ¢u hÆ¡n, lead váº«n cÃ³ thá»ƒ vá» nhÆ°ng sales xá»­ lÃ½ khÃ´ng ká»‹p hoáº·c quality giáº£m khiáº¿n business tháº¥y má»—i cÆ¡ há»™i tháº­t sá»± Ä‘áº¯t hÆ¡n. Chá»‰ nhÃ¬n CPL lÃ  nhÃ¬n Ä‘oáº¡n cuá»‘i cá»§a má»™t chuá»—i tÃ­n hiá»‡u.',
      },
      { type: 'visual', variant: 'cpl-signal-chain' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video giáº£i thÃ­ch cÃ¡ch cháº©n Ä‘oÃ¡n khi CPL tÄƒng trong paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Náº¿u CPM tÄƒng, váº¥n Ä‘á» cÃ³ thá»ƒ náº±m á»Ÿ auction hoáº·c audience' },
      {
        type: 'paragraph',
        text: 'CPM cÃ³ thá»ƒ tÄƒng vÃ¬ cáº¡nh tranh theo mÃ¹a, audience nhá» hoáº·c bá»‹ khai thÃ¡c lÃ¢u, targeting quÃ¡ háº¹p, frequency tÄƒng, creative signal yáº¿u, placement mix Ä‘á»•i hoáº·c ngÃ¢n sÃ¡ch scale vÃ o nhÃ³m Ä‘áº¯t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'CPM tÄƒng chÆ°a cháº¯c lÃ  lá»—i. CÃ³ lÃºc CPM cao hÆ¡n nhÆ°ng lead quality tá»‘t; cÃ³ lÃºc CPM tháº¥p mÃ  traffic rÃ¡c. ÄÃ¢y lÃ  chi phÃ­ vÃ o cá»­a, pháº£i Ä‘á»c cÃ¹ng CTR, CPC, conversion rate vÃ  quality trÆ°á»›c khi can thiá»‡p.',
      },
      { type: 'heading', text: 'Memo 03 â€” Náº¿u CTR giáº£m, kiá»ƒm creative vÃ  message trÆ°á»›c' },
      {
        type: 'paragraph',
        text: 'CTR giáº£m cÃ³ thá»ƒ cho tháº¥y hook háº¿t kÃ©o attention, creative má»i, message quÃ¡ chung, audience tháº¥y quÃ¡ nhiá»u, angle khÃ´ng cÃ²n cháº¡m, visual thiáº¿u ná»•i báº­t hoáº·c targeting kÃ©o ngÆ°á»i khÃ´ng phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Äá»«ng chá»‰ há»i áº£nh cÃ³ xáº¥u khÃ´ng. HÃ£y há»i váº¥n Ä‘á» Ä‘Æ°á»£c gá»i tÃªn cÃ³ Ä‘Ãºng, hook cÃ³ cá»¥ thá»ƒ, creative cÃ³ tá»± lá»c Ä‘Ãºng ngÆ°á»i, proof cÃ³ Ä‘Ã¡ng tin, message cÃ³ khá»›p stage vÃ  batch má»›i Ä‘ang test hypothesis nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'CTR giáº£m khÃ´ng chá»‰ lÃ  chuyá»‡n thiáº¿t káº¿. NÃ³ bÃ¡o message khÃ´ng cÃ²n táº¡o Ä‘á»§ lá»±c chÃº Ã½ vá»›i audience Ä‘ang Ä‘Æ°á»£c phÃ¢n phá»‘i.',
      },
      { type: 'heading', text: 'Memo 04 â€” CTR á»•n nhÆ°ng CPL tÄƒng: kiá»ƒm page, form vÃ  offer' },
      {
        type: 'paragraph',
        text: 'CÃ³ trÆ°á»ng há»£p ads váº«n kÃ©o click tá»‘t, CTR á»•n, CPC khÃ´ng xáº¥u nhÆ°ng lead giáº£m. LÃºc Ä‘Ã³ cáº§n kiá»ƒm page load, mobile layout, hero cÃ³ khá»›p promise, CTA cÃ³ rÃµ, proof/FAQ Ä‘á»§ chÆ°a vÃ  offer cÃ³ táº¡o lÃ½ do hÃ nh Ä‘á»™ng khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Form cÃ³ thá»ƒ lá»—i, quÃ¡ dÃ i hoáº·c quÃ¡ ngáº¯n Ä‘á»ƒ lá»c; form_submit cÃ³ thá»ƒ báº¯n sai. Click tá»‘t mÃ  lead Ã­t thÆ°á»ng lÃ  cÃ¢u chuyá»‡n sau click. Äá»«ng vá»™i Ä‘á»• toÃ n bá»™ lá»—i cho ads.',
      },
      { type: 'visual', variant: 'metric-breakdown-diagnosis' },
      { type: 'heading', text: 'Memo 05 â€” Lead váº«n cÃ³ nhÆ°ng quality giáº£m: nhÃ¬n ra ngoÃ i Ads Manager' },
      {
        type: 'paragraph',
        text: 'ÄÃ´i khi platform váº«n bÃ¡o lead vÃ  CPL khÃ´ng quÃ¡ xáº¥u, nhÆ°ng sales nÃ³i nhiá»u ngÆ°á»i khÃ´ng nghe mÃ¡y, sai nhu cáº§u, sai khu vá»±c, khÃ´ng Ä‘á»§ ngÃ¢n sÃ¡ch, ká»³ vá»ng sai hoáº·c khÃ´ng Ä‘i tá»›i bÃ¡o giÃ¡/demo.',
      },
      {
        type: 'paragraph',
        text: 'NguyÃªn nhÃ¢n cÃ³ thá»ƒ lÃ  message kÃ©o sai ngÆ°á»i, offer quÃ¡ rá»™ng, form lá»c chÆ°a Ä‘á»§, creative tá»± lá»c sai, sales thiáº¿u context, follow-up cháº­m hoáº·c CRM status mÆ¡ há»“. Lead quality lÃ  signal downstream; Ads Manager khÃ´ng Ä‘á»§ Ä‘á»ƒ tá»± káº¿t luáº­n.',
      },
      { type: 'heading', text: 'Memo 06 â€” Tracking sai lÃ m má»i diagnosis phÃ­a sau lá»‡ch' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi thay nhiá»u thá»©, hÃ£y kiá»ƒm lead event cÃ³ báº¯n trÆ°á»›c submit thÃ nh cÃ´ng, submit tháº­t cÃ³ bá»‹ máº¥t event, thank-you page cÃ³ Ä‘áº¿m trÃ¹ng, client/server event cÃ³ dedup vÃ  UTM/source cÃ³ Ä‘i vÃ o CRM khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Call hoáº·c Zalo cÃ³ thá»ƒ lÃ  nguá»“n lead chÃ­nh nhÆ°ng khÃ´ng Ä‘Æ°á»£c ghi nháº­n; event Ä‘Ã£ Ä‘á»•i mÃ  khÃ´ng ai log; GA4, Ads vÃ  CRM lá»‡ch nhÆ°ng team khÃ´ng hiá»ƒu logic. TÃ­n hiá»‡u sai khiáº¿n tá»‘i Æ°u cÃ ng chÄƒm cÃ ng dá»… sai hÆ°á»›ng.',
      },
      { type: 'heading', text: 'Memo 07 â€” Sales follow-up cÃ³ thá»ƒ lÃ m campaign nhÃ¬n Ä‘áº¯t hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign kÃ©o lead tá»‘t nhÆ°ng sales pháº£n há»“i cháº­m váº«n dá»… bá»‹ xem lÃ  kÃ©m. Team cáº§n Ä‘á»c first response time, contacted rate, not reached, qualified, next action, follow-up completion vÃ  lost reason theo campaign, creative hoáº·c offer.',
      },
      {
        type: 'paragraph',
        text: 'Campaign A cÃ³ CPL tháº¥p nhÆ°ng nhiá»u lead khÃ´ng contact Ä‘Æ°á»£c. Campaign B Ä‘áº¯t hÆ¡n nhÆ°ng qualified tá»‘t vÃ¬ sales xá»­ lÃ½ nhanh vÃ  Ä‘Ãºng context. Náº¿u chá»‰ nhÃ¬n CPL, A tháº¯ng; nhÃ¬n business flow, B cÃ³ thá»ƒ Ä‘Ã¡ng giá»¯ hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'CPL khÃ´ng pháº£i Ä‘iá»ƒm káº¿t thÃºc. Sales flow yáº¿u cÃ³ thá»ƒ lÃ m campaign tá»‘t bá»‹ Ä‘á»c sai.',
      },
      { type: 'visual', variant: 'paid-ads-fix-lever-matrix' },
      { type: 'heading', text: 'Memo 08 â€” Äá»«ng sá»­a nhiá»u lá»›p cÃ¹ng lÃºc khi chÆ°a biáº¿t nguyÃªn nhÃ¢n' },
      {
        type: 'paragraph',
        text: 'Thay creative, target, page, form, offer, budget vÃ  tracking trong vÃ i ngÃ y khiáº¿n káº¿t quáº£ má»›i khÃ´ng cÃ²n lá»i giáº£i. ÄÃ¢y lÃ  pháº£n xáº¡ hoáº¡t Ä‘á»™ng nhiá»u nhÆ°ng há»c Ã­t.',
      },
      {
        type: 'paragraph',
        text: 'Tá»‘t hÆ¡n lÃ  kiá»ƒm lá»—i há»‡ thá»‘ng trÆ°á»›c, Ä‘á»c chuá»—i metric, viáº¿t hypothesis, chá»n má»™t lá»›p can thiá»‡p chÃ­nh, giá»¯ biáº¿n khÃ¡c tÆ°Æ¡ng Ä‘á»‘i á»•n Ä‘á»‹nh, ghi change log vÃ  Ä‘áº·t review window. Tá»‘i Æ°u tá»‘t lÃ  sá»­a Ä‘Ãºng lá»›p vá»›i giáº£ thuyáº¿t rÃµ.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t nhá»‹p diagnosis khi CPL tÄƒng' },
      {
        type: 'paragraph',
        text: 'BÆ°á»›c má»™t kiá»ƒm tracking, form, page, CRM, budget nháº§m vÃ  creative reject. BÆ°á»›c hai bÃ³c CPM, CTR, CPC, frequency vÃ  pacing. ÄÃ¢y lÃ  lá»›p xÃ¡c Ä‘á»‹nh chi phÃ­ tÄƒng á»Ÿ auction, attention hay click.',
      },
      {
        type: 'paragraph',
        text: 'BÆ°á»›c ba bÃ³c post-click: landing page CVR, CTA click, form start, form submit, mobile speed vÃ  message match. BÆ°á»›c bá»‘n Ä‘á»c contacted, qualified, opportunity, quote/demo, lost reason vÃ  sales note.',
      },
      {
        type: 'paragraph',
        text: 'Sau Ä‘Ã³ má»›i chá»n giá»¯ hoáº·c chá», sá»­a creative, offer, page/form, tracking, sales handoff, budget; chá»‰ rebuild khi nhiá»u lá»›p ná»n táº£ng cÃ¹ng sai. Diagnosis tá»‘t cÃ³ thá»© tá»±, khÃ´ng báº¯t Ä‘áº§u báº±ng cáº£m giÃ¡c.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n CPL diagnosis checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng CPL tÄƒng, ba nguyÃªn nhÃ¢n khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Case A: CPM á»•n, CTR giáº£m, CPC tÄƒng nhÆ°ng page CVR khÃ´ng Ä‘á»•i. Kháº£ nÄƒng cao creative hoáº·c message má»i; hÆ°á»›ng sá»­a lÃ  refresh hook, angle hoáº·c proof.',
      },
      {
        type: 'paragraph',
        text: 'Case B: CTR vÃ  CPC á»•n, click váº«n Ä‘á»u nhÆ°ng submit giáº£m. Kháº£ nÄƒng náº±m á»Ÿ page, form, offer hoáº·c tracking; cáº§n audit speed, message match, form vÃ  event.',
      },
      {
        type: 'paragraph',
        text: 'Case C: lead váº«n cÃ³ nhÆ°ng qualified giáº£m, sales note láº·p láº¡i sai nhu cáº§u hoáº·c ká»³ vá»ng. Cáº§n xem creative promise, offer, form qualification vÃ  sales handoff. Má»™t triá»‡u chá»©ng cÃ³ thá»ƒ dáº«n tá»›i ba hÆ°á»›ng sá»­a khÃ¡c nhau.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign CPL tÄƒng nhÆ°ng nguyÃªn nhÃ¢n tháº­t náº±m á»Ÿ landing page/form chá»© khÃ´ng pháº£i creative.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng pháº£n á»©ng vá»›i CPL nhÆ° má»™t con sá»‘ cuá»‘i cÃ¹ng. CPL tÄƒng lÃ  tháº¥y campaign cÃ³ váº¥n Ä‘á», vÃ  pháº£n xáº¡ Ä‘áº§u tiÃªn thÆ°á»ng lÃ  Ä‘á»•i máº«u, target hoáº·c ngÃ¢n sÃ¡ch.',
      },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m lÃ¢u, tÃ´i cÃ ng tháº¥y CPL chá»‰ lÃ  tiáº¿ng chuÃ´ng bÃ¡o. NÃ³ khÃ´ng nÃ³i chuÃ´ng reo á»Ÿ attention, page, form, tracking hay sales. CÃ³ lÃºc lead váº«n tá»‘t nhÆ°ng report chÆ°a Ä‘á»§ thá»i gian pháº£n Ã¡nh.',
      },
      {
        type: 'paragraph',
        text: 'Paid ads sÃ¢u khÃ´ng nhÃ¬n sá»‘ xáº¥u rá»“i sá»­a nhanh. NÃ³ bÃ³c sá»‘ xáº¥u thÃ nh chuá»—i nguyÃªn nhÃ¢n. Tá»‘c Ä‘á»™ tá»‘i Æ°u khÃ´ng quan trá»ng báº±ng Ä‘á»™ Ä‘Ãºng cá»§a diagnosis.',
      },
      { type: 'heading', text: 'Káº¿t â€” Chá»‰ sá»‘ xáº¥u lÃ  triá»‡u chá»©ng, khÃ´ng pháº£i nguyÃªn nhÃ¢n' },
      {
        type: 'paragraph',
        text: 'Khi CPL tÄƒng, Ä‘á»«ng há»i ngay â€œtáº¯t hay Ä‘á»•i creative?â€. HÃ£y há»i váº¥n Ä‘á» náº±m á»Ÿ CPM, CTR, CPC, landing page, form, offer, tracking, lead quality hay sales follow-up.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i lá»›p cÃ³ cÃ¡ch sá»­a khÃ¡c nhau. Pháº£n á»©ng theo cáº£m giÃ¡c dá»… lÃ m nhiá»…u campaign vÃ  bá» qua Ä‘iá»ƒm ngháº½n tháº­t. Paid ads sÃ¢u dÃ¹ng chá»‰ sá»‘ xáº¥u Ä‘á»ƒ cháº©n Ä‘oÃ¡n há»‡ thá»‘ng trÆ°á»›c khi chá»n cáº§n gáº¡t.',
      },
    ],
    cta: 'Náº¿u campaign Ä‘ang cÃ³ CPL tÄƒng, hÃ£y dá»«ng láº¡i trÆ°á»›c khi sá»­a. BÃ³c chuá»—i tÃ­n hiá»‡u: CPM cÃ³ tÄƒng khÃ´ng, CTR cÃ³ giáº£m khÃ´ng, click cÃ³ cÃ²n cháº¥t lÆ°á»£ng khÃ´ng, page/form cÃ³ rÆ¡i khÃ´ng, tracking cÃ³ Ä‘Ãºng khÃ´ng, lead cÃ³ qualified khÃ´ng vÃ  sales cÃ³ follow-up Ä‘á»§ nhanh khÃ´ng. Sá»­a Ä‘Ãºng chá»— trÆ°á»›c khi sá»­a nhiá»u chá»—.',
  },
  {
    title: 'Campaign post-mortem: vÃ¬ sao ads thua mÃ  team váº«n khÃ´ng há»c Ä‘Æ°á»£c gÃ¬?',
    slug: 'campaign-post-mortem-vi-sao-ads-thua-ma-team-van-khong-hoc-duoc-gi',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-internal-event-team-group-stage-01.jpg",
                "alt": "Large team group photo in an indoor venue",
                "caption": "Team group photo at an indoor event",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Má»™t campaign cháº¡y xong khÃ´ng nÃªn chá»‰ Ä‘Æ°á»£c káº¿t luáº­n lÃ  tháº¯ng hay thua. Náº¿u team khÃ´ng ghi láº¡i giáº£ thuyáº¿t, creative angle, offer, landing page, form, tracking, lead quality, sales note vÃ  lost reason, ngÃ¢n sÃ¡ch Ä‘Ã£ tiÃªu sáº½ khÃ´ng Ä‘á»ƒ láº¡i bÃ i há»c. Campaign thua váº«n cÃ³ thá»ƒ cÃ³ giÃ¡ trá»‹ náº¿u nÃ³ giÃºp team biáº¿t nÃªn sá»­a gÃ¬. Campaign tháº¯ng váº«n cáº§n post-mortem Ä‘á»ƒ biáº¿t vÃ¬ sao tháº¯ng vÃ  cÃ³ scale Ä‘Æ°á»£c khÃ´ng.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Campaign cháº¡y xong, cáº£ team chá»‰ nhá»› â€œkhÃ´ng hiá»‡u quáº£â€' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign vá»«a káº¿t thÃºc. NgÃ¢n sÃ¡ch Ä‘Ã£ tiÃªu, Ads Manager cÃ³ sá»‘, landing page cÃ³ traffic, CRM cÃ³ lead vÃ  sales cÃ³ vÃ i nháº­n xÃ©t. NhÆ°ng cuá»™c há»p chá»‰ cÃ²n nhá»¯ng cÃ¢u: campaign khÃ´ng hiá»‡u quáº£, CPL cao, lead yáº¿u, creative chÆ°a tá»‘t, láº§n sau lÃ m láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng ai nhá»› ban Ä‘áº§u test giáº£ thuyáº¿t gÃ¬, creative nÃ o kÃ©o attention, angle nÃ o kÃ©o Ä‘Ãºng ngÆ°á»i, offer nÃ o gÃ¢y hiá»ƒu sai, page rÆ¡i á»Ÿ Ä‘Ã¢u, form lá»c ra sao, tracking lá»—i gÃ¬ hoáº·c sales máº¥t lead vÃ¬ lÃ½ do nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Campaign thua khÃ´ng Ä‘Ã¡ng sá»£ báº±ng campaign thua mÃ  khÃ´ng Ä‘á»ƒ láº¡i bÃ i há»c. Khi Ä‘Ã³ ngÃ¢n sÃ¡ch biáº¿n máº¥t, team quay láº¡i Ä‘iá»ƒm xuáº¥t phÃ¡t.',
      },
      { type: 'heading', text: 'Memo 01 â€” Post-mortem khÃ´ng pháº£i Ä‘á»ƒ Ä‘á»• lá»—i' },
      {
        type: 'paragraph',
        text: 'Post-mortem khÃ´ng nÃªn lÃ  buá»•i káº¿t luáº­n ads sai, content sai, design sai, sales sai hoáº·c founder duyá»‡t cháº­m. Nhá»¯ng nhÃ£n nÃ y táº¡o phÃ²ng thá»§ nhÆ°ng khÃ´ng giÃºp vÃ²ng sau tá»‘t hÆ¡n.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¢u há»i há»¯u Ã­ch hÆ¡n lÃ  giáº£ thuyáº¿t ban Ä‘áº§u Ä‘Ãºng hay sai; signal nÃ o á»§ng há»™ hoáº·c pháº£n bÃ¡c; funnel rÆ¡i á»Ÿ lá»›p nÃ o; Ä‘iá»u gÃ¬ trÆ°á»›c campaign chÆ°a biáº¿t nhÆ°ng giá» Ä‘Ã£ biáº¿t; vÃ²ng sau nÃªn giá»¯, sá»­a hoáº·c bá» gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Post-mortem tá»‘t khÃ´ng tÃ¬m ngÆ°á»i Ä‘á»ƒ trÃ¡ch. NÃ³ tÃ¬m há»‡ thá»‘ng cáº§n sá»­a vÃ  biáº¿n quan sÃ¡t thÃ nh quyáº¿t Ä‘á»‹nh.',
      },
      { type: 'visual', variant: 'postmortem-not-blame-meeting' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch lÃ m campaign post-mortem sau má»™t Ä‘á»£t paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Campaign khÃ´ng cÃ³ giáº£ thuyáº¿t thÃ¬ ráº¥t khÃ³ há»c' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c campaign, team cáº§n biáº¿t mÃ¬nh Ä‘ang kiá»ƒm Ä‘iá»u gÃ¬. CÃ³ thá»ƒ lÃ  pain â€œlead nhiá»u nhÆ°ng sales khÃ´ng chá»‘tâ€ kÃ©o Ä‘Ãºng ngÆ°á»i hÆ¡n pain â€œCPL caoâ€; offer audit nháº¹ táº¡o qualified tá»‘t hÆ¡n tÆ° váº¥n miá»…n phÃ­; case tháº­t trÃªn page tÄƒng submit.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t hypothesis khÃ¡c cÃ³ thá»ƒ lÃ  form thÃªm cÃ¢u há»i lÃ m volume giáº£m nhÆ°ng qualified tÄƒng; non-branded search Ä‘áº¯t hÆ¡n nhÆ°ng cháº¥t lÆ°á»£ng hÆ¡n; retargeting dÃ¹ng proof tá»‘t hÆ¡n láº·p CTA.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ giáº£ thuyáº¿t, sá»‘ Ä‘áº¹p cÅ©ng khÃ´ng biáº¿t vÃ¬ sao Ä‘áº¹p, sá»‘ xáº¥u khÃ´ng biáº¿t há»c gÃ¬. Team dá»… Ä‘á»•i má»i thá»© cÃ¹ng lÃºc vÃ  campaign sau khÃ´ng káº¿ thá»«a campaign trÆ°á»›c. Post-mortem khi Ä‘Ã³ chá»‰ lÃ  ká»ƒ láº¡i sá»‘.',
      },
      { type: 'heading', text: 'Memo 03 â€” Campaign thua váº«n cÃ³ thá»ƒ cÃ³ giÃ¡ trá»‹' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign thua ngáº¯n háº¡n váº«n cÃ³ thá»ƒ chá»‰ ra angle kÃ©o sai ngÆ°á»i, offer táº¡o ká»³ vá»ng sai, creative CTR tá»‘t nhÆ°ng quality tháº¥p, page cÃ³ traffic nhÆ°ng form submit kÃ©m hoáº·c form lá»c quÃ¡ máº¡nh lÃ m volume rÆ¡i.',
      },
      {
        type: 'paragraph',
        text: 'NÃ³ cÅ©ng cÃ³ thá»ƒ cho tháº¥y keyword/tá»‡p quÃ¡ Ä‘áº¯t so vá»›i economics, retargeting message láº·p sá»›m hoáº·c tracking chÆ°a Ä‘á»§ sáº¡ch Ä‘á»ƒ scale. KhÃ´ng pháº£i campaign thua lÃ  tiá»n máº¥t tráº¯ng. Tiá»n máº¥t tráº¯ng lÃ  khi team khÃ´ng biáº¿t vÃ¬ sao thua.',
      },
      { type: 'visual', variant: 'win-lose-learn-matrix' },
      { type: 'heading', text: 'Memo 04 â€” Campaign tháº¯ng cÅ©ng cáº§n post-mortem' },
      {
        type: 'paragraph',
        text: 'Nhiá»u team chá»‰ review khi thua. Campaign tháº¯ng thÃ¬ tÄƒng budget hoáº·c nhÃ¢n báº£n. NhÆ°ng váº«n cáº§n há»i nÃ³ tháº¯ng nhá» creative, offer, audience hay timing; tháº¯ng media hay cáº£ lead quality; cÃ³ scale Ä‘Æ°á»£c hay chá»‰ hiá»‡u quáº£ trong tá»‡p nhá».',
      },
      {
        type: 'paragraph',
        text: 'CÅ©ng pháº£i Ä‘á»c discount, phÃ¢n khÃºc, margin, payback, fatigue vÃ  Ä‘iá»u kiá»‡n Ä‘Ã£ táº¡o ra káº¿t quáº£. Náº¿u tÄƒng budget, lá»›p nÃ o cÃ³ thá»ƒ gÃ£y? Campaign tháº¯ng mÃ  khÃ´ng hiá»ƒu vÃ¬ sao tháº¯ng ráº¥t dá»… bá»‹ scale sai.',
      },
      { type: 'heading', text: 'Memo 05 â€” Post-mortem pháº£i Ä‘á»c tá»«ng lá»›p funnel' },
      {
        type: 'paragraph',
        text: 'Báº¯t Ä‘áº§u tá»« objective vÃ  hypothesis: campaign Ä‘Æ°á»£c giao viá»‡c gÃ¬, test gÃ¬, KPI cÃ³ khá»›p vai trÃ² khÃ´ng. Sau Ä‘Ã³ Ä‘á»c media qua CPM, CTR, CPC, frequency, delivery vÃ  audience size.',
      },
      {
        type: 'paragraph',
        text: 'á»ž creative vÃ  message, xem hook, angle, format, proof nÃ o cÃ³ signal. á»ž offer, xem CTA Ä‘á»§ lá»±c, khÃ¡ch cÃ³ hiá»ƒu Ä‘Ãºng vÃ  sales cÃ³ nháº­n ká»³ vá»ng sai khÃ´ng. á»ž page/form, Ä‘á»c message match, CVR, friction vÃ  kháº£ nÄƒng lá»c.',
      },
      {
        type: 'paragraph',
        text: 'Tiáº¿p theo lÃ  event, UTM, dedup vÃ  CRM source. Cuá»‘i cÃ¹ng Ä‘á»c contacted, qualified, next action, lost reason, opportunity, deal size, margin hoáº·c payback náº¿u cÃ³. Post-mortem tá»‘t Ä‘á»c campaign nhÆ° há»‡ thá»‘ng, khÃ´ng chá»‰ Ads Manager.',
      },
      { type: 'visual', variant: 'campaign-postmortem-checklist' },
      { type: 'heading', text: 'Memo 06 â€” Sales feedback lÃ  pháº§n hay bá»‹ thiáº¿u nháº¥t' },
      {
        type: 'paragraph',
        text: 'Sales feedback thÆ°á»ng dá»«ng á»Ÿ â€œlead yáº¿uâ€, â€œkhÃ¡ch há»i giÃ¡â€, â€œkhÃ´ng nghe mÃ¡yâ€ hoáº·c â€œchÆ°a cÃ³ nhu cáº§uâ€. CÃ¡c cÃ¢u nÃ y chÆ°a Ä‘á»§ Ä‘á»ƒ sá»­a creative, offer hay form.',
      },
      {
        type: 'paragraph',
        text: 'Cáº§n bÃ³c lead sai á»Ÿ Ä‘Ã¢u, khÃ¡ch ká»³ vá»ng gÃ¬, há»i gÃ¬ nhiá»u nháº¥t, khÃ´ng hiá»ƒu offer á»Ÿ Ä‘oáº¡n nÃ o, máº¥t vÃ¬ giÃ¡, timing, proof, nhu cáº§u hay Ä‘á»‘i thá»§. Creative hoáº·c angle nÃ o táº¡o cuá»™c nÃ³i chuyá»‡n tá»‘t hÆ¡n? Lead nÃ o Ä‘i tá»›i demo, bÃ¡o giÃ¡ hoáº·c cuá»™c háº¹n?',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ sales feedback Ä‘á»§ rÃµ, post-mortem chá»‰ há»c Ä‘Æ°á»£c ná»­a Ä‘áº§u funnel.',
      },
      { type: 'heading', text: 'Memo 07 â€” Post-mortem pháº£i táº¡o ra tÃ i sáº£n há»c táº­p' },
      {
        type: 'paragraph',
        text: 'Learning note cáº§n Ä‘i vÃ o creative bank: hook nÃªn giá»¯, angle nÃªn bá», proof cÃ³ signal, format Ä‘Ã¡ng test tiáº¿p. Offer bank ghi CTA kÃ©o Ä‘Ãºng intent, Ä‘iá»u gÃ¬ gÃ¢y ká»³ vá»ng sai vÃ  Ä‘iá»u kiá»‡n cáº§n nÃ³i rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'Landing page note lÆ°u hero khá»›p message, FAQ hoáº·c case cáº§n thÃªm, form field nÃªn giá»¯/bá». CRM insight lÆ°u source qualified tá»‘t, lost reason láº·p vÃ  campaign táº¡o sales conversation tá»‘t. Budget decision ghi giá»¯, scale, giáº£m vÃ  test gÃ¬ tiáº¿p.',
      },
      {
        type: 'paragraph',
        text: 'Post-mortem khÃ´ng káº¿t thÃºc báº±ng biÃªn báº£n há»p. NÃ³ pháº£i táº¡o input cho vÃ²ng sau.',
      },
      { type: 'heading', text: 'Memo 08 â€” KhÃ´ng cÃ³ change log, post-mortem dá»… thÃ nh Ä‘oÃ¡n mÃ²' },
      {
        type: 'paragraph',
        text: 'Náº¿u team Ä‘Ã£ Ä‘á»•i budget, creative, audience, offer, page, form, tracking hoáº·c sales script mÃ  khÃ´ng ghi láº¡i, cuá»‘i campaign ráº¥t khÃ³ biáº¿t performance thay Ä‘á»•i vÃ¬ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Change log pháº£i cho biáº¿t thay Ä‘á»•i gÃ¬, lÃºc nÃ o, vÃ¬ sao, ká»³ vá»ng signal nÃ o vÃ  sau Ä‘Ã³ giá»¯ hay revert. NÃ³ lÃ  trÃ­ nhá»› cá»§a campaign. KhÃ´ng cÃ³ nÃ³, cÃ¢u chuyá»‡n cuá»‘i ká»³ thÆ°á»ng Ä‘Æ°á»£c dá»±ng láº¡i báº±ng cáº£m giÃ¡c.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t nhá»‹p post-mortem gá»n cho SME' },
      {
        type: 'paragraph',
        text: 'Sau campaign hoáº·c theo chu ká»³ review quan trá»ng, team cÃ³ thá»ƒ dÃ nh má»™t buá»•i gá»n Ä‘á»ƒ tráº£ lá»i: nhiá»‡m vá»¥ vÃ  hypothesis lÃ  gÃ¬; media ra sao; creative, angle, offer nÃ o cÃ³ signal; page, form, tracking rÆ¡i á»Ÿ Ä‘Ã¢u.',
      },
      {
        type: 'paragraph',
        text: 'Sau Ä‘Ã³ ná»‘i CRM, lead quality, sales note vÃ  business outcome; chá»‘t bÃ i há»c chÃ­nh; quyáº¿t Ä‘á»‹nh giá»¯, sá»­a, bá», test gÃ¬; giao ngÆ°á»i cáº­p nháº­t creative bank, offer note, page note hoáº·c CRM insight.',
      },
      {
        type: 'paragraph',
        text: 'Post-mortem khÃ´ng cáº§n náº·ng ná». NÃ³ chá»‰ cáº§n Ä‘á»§ Ä‘á»u Ä‘á»ƒ team khÃ´ng máº¥t trÃ­ nhá»› chiáº¿n dá»‹ch.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n campaign post-mortem template cho paid ads.',
      },
      { type: 'heading', text: 'Memo 10 â€” Hai team cÃ¹ng cháº¡y thua, má»™t team há»c Ä‘Æ°á»£c' },
      {
        type: 'paragraph',
        text: 'Team A khÃ´ng Ä‘áº¡t KPI, káº¿t luáº­n â€œlead yáº¿uâ€, táº¯t campaign. ThÃ¡ng sau há» lÃ m concept má»›i nhÆ°ng khÃ´ng lÆ°u angle, offer, page note hay sales note. VÃ i thÃ¡ng sau, lá»—i cÅ© quay láº¡i.',
      },
      {
        type: 'paragraph',
        text: 'Team B cÅ©ng khÃ´ng Ä‘áº¡t KPI nhÆ°ng bÃ³c Ä‘Æ°á»£c CTR á»•n, form submit tháº¥p, khÃ¡ch hiá»ƒu sai offer; má»™t angle nhá» láº¡i cÃ³ qualified tá»‘t hÆ¡n. Há» sá»­a hero, cÃ¢u há»i form, offer copy vÃ  dÃ¹ng angle cÃ³ signal cho creative batch sau.',
      },
      {
        type: 'paragraph',
        text: 'CÃ¹ng lÃ  campaign thua, má»™t team chá»‰ máº¥t tiá»n, team kia mua Ä‘Æ°á»£c bÃ i há»c.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign thua nhÆ°ng giÃºp team phÃ¡t hiá»‡n offer vÃ  form Ä‘ang lá»c sai ngÆ°á»i.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng nhÃ¬n campaign theo tháº¯ng hoáº·c thua. Lead ráº» thÃ¬ vui; CPL cao thÃ¬ xem nhÆ° fail. CÃ ng lÃ m lÃ¢u, tÃ´i cÃ ng tháº¥y cÃ¡ch nhÃ¬n Ä‘Ã³ quÃ¡ nghÃ¨o.',
      },
      {
        type: 'paragraph',
        text: 'CÃ³ campaign tháº¯ng nhÆ°ng khÃ´ng biáº¿t vÃ¬ sao. CÃ³ campaign thua láº¡i chá»‰ ra insight Ä‘Ã¡ng tiá»n. Creative CTR tháº¥p cÃ³ thá»ƒ giÃºp loáº¡i má»™t angle; page kÃ©m cho tháº¥y khÃ¡ch cáº§n proof khÃ¡c; sales note giáº£i thÃ­ch vÃ¬ sao lead ráº» nhÆ°ng khÃ´ng phÃ¹ há»£p.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u team khÃ´ng ghi láº¡i, nhá»¯ng bÃ i há»c nÃ y biáº¿n máº¥t ráº¥t nhanh. Paid ads sÃ¢u khÃ´ng chá»‰ tá»‘i Æ°u campaign Ä‘ang cháº¡y; nÃ³ biáº¿n má»—i campaign thÃ nh má»™t vÃ²ng há»c.',
      },
      { type: 'heading', text: 'Káº¿t â€” Tiá»n ads cÅ©ng pháº£i mua Ä‘Æ°á»£c bÃ i há»c' },
      {
        type: 'paragraph',
        text: 'Campaign thua khÃ´ng vÃ´ dá»¥ng náº¿u nÃ³ chá»‰ ra creative, offer, page, form, tracking hoáº·c sales flow sai á»Ÿ Ä‘Ã¢u. Campaign tháº¯ng váº«n cáº§n review Ä‘á»ƒ biáº¿t vÃ¬ sao tháº¯ng vÃ  cÃ³ scale Ä‘Æ°á»£c khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng cÃ³ hypothesis, change log, CRM/sales feedback vÃ  learning note, má»—i campaign chá»‰ lÃ  má»™t láº§n tiÃªu tiá»n rá»i ráº¡c. Post-mortem biáº¿n ngÃ¢n sÃ¡ch Ä‘Ã£ tiÃªu thÃ nh tÃ i sáº£n há»c táº­p cho vÃ²ng sau.',
      },
    ],
    cta: 'Náº¿u campaign vá»«a káº¿t thÃºc, Ä‘á»«ng chá»‰ há»i â€œtháº¯ng hay thua?â€. HÃ£y há»i: mÃ¬nh Ä‘Ã£ há»c Ä‘Æ°á»£c gÃ¬ vá» audience, message, offer, page, form, tracking, lead quality vÃ  sales feedback â€” vÃ  bÃ i há»c Ä‘Ã³ sáº½ Ä‘i vÃ o creative bank, offer bank, landing page note hay budget decision nÃ o cho campaign tiáº¿p theo?',
  },
  {
    title: 'Message match trong paid ads: vÃ¬ sao ads há»©a má»™t kiá»ƒu, landing page vÃ  sales nÃ³i má»™t kiá»ƒu?',
    slug: 'message-match-trong-paid-ads-vi-sao-ads-hua-mot-kieu-landing-page-va-sales-noi-mot-kieu',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-company-trip-night-group-photo-01.jpg",
                "alt": "Large group photo at a night event backdrop",
                "caption": "Night event group photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Má»™t quáº£ng cÃ¡o cÃ³ thá»ƒ kÃ©o Ä‘Æ°á»£c click vÃ¬ lá»i há»©a ráº¥t cá»¥ thá»ƒ, nhÆ°ng náº¿u landing page nÃ³i má»™t thÃ´ng Ä‘iá»‡p khÃ¡c, form khÃ´ng há»i Ä‘Ãºng nhu cáº§u vÃ  sales gá»i nhÆ° má»™t cuá»™c gá»i láº¡nh, khÃ¡ch sáº½ máº¥t máº¡ch tin tÆ°á»Ÿng. Message match yáº¿u lÃ m funnel rÆ¡i sau click: CTR cÃ³ thá»ƒ á»•n, CPC cÃ³ thá»ƒ khÃ´ng tá»‡, nhÆ°ng conversion tháº¥p, lead quality lá»‡ch vÃ  sales khÃ³ follow-up theo context.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Ads nÃ³i ráº¥t trÃºng, nhÆ°ng page vÃ  sales láº¡i nÃ³i chuyá»‡n khÃ¡c' },
      {
        type: 'paragraph',
        text: 'Má»™t máº«u ads cÃ³ hook khÃ¡ tá»‘t. NgÆ°á»i dÃ¹ng click vÃ¬ má»™t váº¥n Ä‘á» ráº¥t cá»¥ thá»ƒ: lead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng, nhÃ  gáº§n biá»ƒn nhanh báº¡c mÃ u, sá»£ sÆ¡n xong cÃ³ mÃ¹i, tracking sai lÃ m ads há»c sai, hoáº·c muá»‘n audit landing page trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng landing page láº¡i má»Ÿ báº±ng má»™t headline rá»™ng. Offer khÃ´ng cÃ²n giá»‘ng trong ads, proof khÃ´ng xá»­ lÃ½ ná»—i lo ban Ä‘áº§u, form chá»‰ há»i thÃ´ng tin chung, thank-you message khÃ´ng nÃ³i bÆ°á»›c tiáº¿p theo. Sales gá»i láº¡i báº±ng cÃ¢u: â€œAnh/chá»‹ cáº§n tÆ° váº¥n gÃ¬ áº¡?â€',
      },
      { type: 'heading', text: 'Memo 01 â€” Message match khÃ´ng chá»‰ lÃ  headline giá»‘ng ads' },
      {
        type: 'paragraph',
        text: 'CÃ¡ch hiá»ƒu phá»• biáº¿n lÃ  quáº£ng cÃ¡o nÃ³i gÃ¬ thÃ¬ headline landing page nháº¯c láº¡i y chang. Äiá»u Ä‘Ã³ Ä‘Ãºng má»™t pháº§n, nhÆ°ng chá»‰ má»›i ná»‘i Ä‘Æ°á»£c hai Ä‘iá»ƒm cháº¡m. Context cÃ²n pháº£i Ä‘i qua váº¥n Ä‘á» trong creative, hook á»Ÿ caption hoáº·c video, lá»i há»©a trong CTA, hero, proof, FAQ, form, thank-you, CRM vÃ  sales script.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i Ä‘iá»ƒm cÃ³ má»™t vai trÃ² riÃªng. Creative gá»i Ä‘Ãºng váº¥n Ä‘á»; caption lÃ m rÃµ lá»i há»©a; page xÃ¡c nháº­n khÃ¡ch Ä‘ang á»Ÿ Ä‘Ãºng nÆ¡i; proof gá»¡ ná»—i lo; form thu dá»¯ liá»‡u cáº§n thiáº¿t; CRM giá»¯ source vÃ  angle; sales ná»‘i tiáº¿p bÆ°á»›c Ä‘Ã£ há»©a. Message match lÃ  sá»± liÃªn tá»¥c cá»§a context, khÃ´ng chá»‰ lÃ  copy headline.',
      },
      { type: 'visual', variant: 'message-match-chain' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch kiá»ƒm message match tá»« ads Ä‘áº¿n landing page, form vÃ  sales.',
      },
      { type: 'heading', text: 'Memo 02 â€” Ads táº¡o ká»³ vá»ng, landing page pháº£i tiáº¿p tá»¥c ká»³ vá»ng Ä‘Ã³' },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i dÃ¹ng khÃ´ng click Ä‘á»ƒ Ä‘á»c má»™t brochure tá»•ng quÃ¡t. Há» click vÃ¬ váº¥n Ä‘á» Ä‘Æ°á»£c gá»i Ä‘Ãºng, ná»—i sá»£ Ä‘Æ°á»£c nÃ³i ra, proof lÃ m há» tÃ² mÃ² hoáº·c offer cÃ³ váº» Ä‘Ãºng lÃºc. Landing page cáº§n tráº£ lá»i tiáº¿p: báº¡n Ä‘ang á»Ÿ Ä‘Ãºng nÆ¡i; Ä‘Ã¢y lÃ  cÃ¡ch chÃºng tÃ´i nhÃ¬n váº¥n Ä‘á»; Ä‘Ã¢y lÃ  proof liÃªn quan vÃ  bÆ°á»›c tiáº¿p theo.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u page chuyá»ƒn sang â€œÄ‘Æ¡n vá»‹ uy tÃ­nâ€, â€œgiáº£i phÃ¡p toÃ n diá»‡nâ€ hay â€œdá»‹ch vá»¥ cháº¥t lÆ°á»£ng caoâ€, máº¡ch cá»¥ thá»ƒ bá»‹ loÃ£ng. Landing page pháº£i tiáº¿p tá»¥c cuá»™c trÃ² chuyá»‡n mÃ  ads vá»«a má»Ÿ ra.',
      },
      { type: 'heading', text: 'Memo 03 â€” Message mismatch cÃ³ thá»ƒ Ä‘á»ƒ CTR á»•n nhÆ°ng conversion tháº¥p' },
      {
        type: 'paragraph',
        text: 'Ads cÃ³ thá»ƒ há»©a cá»¥ thá»ƒ cÃ²n page nÃ³i chung; ads vÃ  page Ä‘Æ°a hai offer khÃ¡c nhau; proof khÃ´ng liÃªn quan angle; hoáº·c ads kÃ©o ngÆ°á»i má»›i nháº­n ra váº¥n Ä‘á» nhÆ°ng page bÃ¡n nhÆ° thá»ƒ há» Ä‘Ã£ sáºµn sÃ ng mua. Khi CTR á»•n mÃ  conversion tháº¥p, Ä‘á»«ng chá»‰ há»i page cÃ³ Ä‘áº¹p khÃ´ng. HÃ£y há»i page cÃ³ tiáº¿p tá»¥c Ä‘Ãºng lá»i há»©a cá»§a ads khÃ´ng.',
      },
      { type: 'visual', variant: 'message-mismatch-symptoms' },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign CTR á»•n nhÆ°ng form submit tháº¥p vÃ¬ ads há»©a má»™t kiá»ƒu, landing page nÃ³i quÃ¡ chung.',
      },
      { type: 'heading', text: 'Memo 04 â€” Form cÅ©ng pháº£i khá»›p message' },
      {
        type: 'paragraph',
        text: 'Form khÃ´ng chá»‰ lÃ  nÆ¡i xin tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i. Náº¿u ads nÃ³i â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?â€, form nÃªn há»i kÃªnh Ä‘ang cháº¡y, Ä‘iá»ƒm ngháº½n sau lead vÃ  cÃ¡ch sales hoáº·c CRM Ä‘ang xá»­ lÃ½. Náº¿u ads nÃ³i â€œNhÃ  gáº§n biá»ƒn nhanh báº¡c mÃ u?â€, form cÃ³ thá»ƒ há»i khu vá»±c, bá» máº·t, tÃ¬nh tráº¡ng hiá»‡n táº¡i vÃ  thá»i Ä‘iá»ƒm cáº§n tÆ° váº¥n. Form giá»¯ context Ä‘á»ƒ sales biáº¿t nÃªn má»Ÿ Ä‘áº§u tháº¿ nÃ o.',
      },
      { type: 'heading', text: 'Memo 05 â€” Sales script lÃ  nÆ¡i message match hay bá»‹ gÃ£y nháº¥t' },
      {
        type: 'paragraph',
        text: 'Sales cáº§n biáº¿t campaign, angle, offer, page, cÃ¢u tráº£ lá»i trong form vÃ  bÆ°á»›c tiáº¿p theo Ä‘Ã£ há»©a. CÃ¢u má»Ÿ Ä‘áº§u nÃªn báº¯t Ä‘áº§u tá»« context áº¥y: â€œEm tháº¥y anh/chá»‹ Ä‘á»ƒ láº¡i thÃ´ng tin tá»« bÃ i audit lead flow. BÃªn mÃ¬nh Ä‘ang vÆ°á»›ng nhiá»u hÆ¡n á»Ÿ tracking hay follow-up sau lead?â€ Sales follow-up khÃ´ng nÃªn báº¯t Ä‘áº§u tá»« sá»‘ Ä‘iá»‡n thoáº¡i.',
      },
      { type: 'visual', variant: 'message-match-qa-matrix' },
      { type: 'heading', text: 'Memo 06 â€” Message match yáº¿u lÃ m lead quality bá»‹ Ä‘á»c sai' },
      {
        type: 'paragraph',
        text: 'Khi message lá»‡ch, sales dá»… káº¿t luáº­n lead yáº¿u, khÃ¡ch khÃ´ng hiá»ƒu, chá»‰ há»i giÃ¡ hoáº·c sai nhu cáº§u. NhÆ°ng váº¥n Ä‘á» cÃ³ thá»ƒ báº¯t Ä‘áº§u tá»« creative há»©a quÃ¡ rá»™ng, page khÃ´ng nÃ³i rÃµ Ä‘iá»u kiá»‡n, offer khÃ´ng cho biáº¿t dÃ nh cho ai, form khÃ´ng lá»c nhu cáº§u, CRM máº¥t source hoáº·c sales khÃ´ng biáº¿t angle.',
      },
      {
        type: 'paragraph',
        text: 'Lead quality khÃ´ng chá»‰ náº±m á»Ÿ target. NÃ³ cÃ²n náº±m á»Ÿ kháº£ nÄƒng message tá»± lá»c Ä‘Ãºng ngÆ°á»i, táº¡o Ä‘Ãºng ká»³ vá»ng vÃ  dáº«n há» xuyÃªn funnel. Äiá»u nÃ y khÃ´ng cÃ³ nghÄ©a cá»© message match tá»‘t lÃ  campaign sáº½ tháº¯ng; economics, audience, offer, delivery vÃ  nÄƒng lá»±c sales váº«n pháº£i Ä‘Æ°á»£c Ä‘á»c cÃ¹ng nhau.',
      },
      { type: 'heading', text: 'Memo 07 â€” Message match khÃ´ng cÃ³ nghÄ©a lÃ  láº·p má»™t cÃ¢u y chang' },
      {
        type: 'paragraph',
        text: 'Ads cÃ³ thá»ƒ má»Ÿ báº±ng â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?â€. Hero tiáº¿p tá»¥c: â€œTrÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch, hÃ£y kiá»ƒm lead Ä‘ang rÆ¡i á»Ÿ tracking, CRM hay sales follow-up.â€ Form há»i Ä‘iá»ƒm ngháº½n chÃ­nh. Sales má»Ÿ Ä‘áº§u tá»« cÃ¢u tráº£ lá»i Ä‘Ã³. KhÃ´ng Ä‘iá»ƒm nÃ o copy-paste mÃ¡y mÃ³c, nhÆ°ng táº¥t cáº£ giá»¯ cÃ¹ng má»™t logic.',
      },
      { type: 'heading', text: 'Memo 08 â€” Brief giá»¯ message match trÆ°á»›c khi campaign cháº¡y' },
      {
        type: 'paragraph',
        text: 'Brief nÃªn ghi rÃµ primary problem, main promise, audience stage, offer, CTA, proof, landing page promise, form field, CRM field, sales opening context vÃ  lost reason cáº§n theo dÃµi. ÄÃ¢y lÃ  pháº§n bÃ n giao váº­n hÃ nh, khÃ´ng pháº£i tÃ i liá»‡u Ä‘á»ƒ cáº¥t sau buá»•i kickoff.',
      },
      {
        type: 'paragraph',
        text: 'Thiáº¿u brief, content viáº¿t má»™t hÆ°á»›ng, design nháº¥n má»™t hÆ°á»›ng, page dÃ¹ng láº¡i thÃ´ng Ä‘iá»‡p cÅ©, ads operator chá»‰ nhÃ¬n CPL vÃ  sales khÃ´ng biáº¿t angle. Khi káº¿t quáº£ rÆ¡i, post-mortem cÅ©ng khÃ´ng biáº¿t lá»i há»©a gÃ£y á»Ÿ Ä‘Ã¢u. Message match lÃ  káº¿t quáº£ cá»§a brief rÃµ vÃ  handoff Ä‘á»§ context.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t nhá»‹p review message match nÃªn há»i gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Khi cÃ³ click nhÆ°ng page khÃ´ng chuyá»ƒn Ä‘á»•i hoáº·c lead khÃ³ xá»­ lÃ½, hÃ£y Ä‘i láº¡i hÃ nh trÃ¬nh nhÆ° khÃ¡ch: há» click vÃ¬ lá»i há»©a nÃ o; hero cÃ³ xÃ¡c nháº­n lá»i há»©a ngay khÃ´ng; proof cÃ³ gá»¡ Ä‘Ãºng ná»—i lo; CTA cÃ³ giá»¯ Ä‘Ãºng offer; form cÃ³ há»i Ä‘Ãºng context; thank-you cÃ³ nÃ³i rÃµ bÆ°á»›c tiáº¿p theo?',
      },
      {
        type: 'paragraph',
        text: 'Sau Ä‘Ã³ Ä‘i tiáº¿p phÃ­a váº­n hÃ nh: CRM cÃ³ lÆ°u source, campaign vÃ  angle; sales cÃ³ má»Ÿ Ä‘áº§u theo context; lost reason cÃ³ cho tháº¥y khÃ¡ch hiá»ƒu sai offer; angle máº¡nh cÃ³ cáº§n landing variant riÃªng? ÄÃ¢y lÃ  review sá»± liÃªn tá»¥c cá»§a lá»i há»©a, khÃ´ng pháº£i má»™t buá»•i soi copy riÃªng láº».',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n message match QA checklist cho paid ads.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng má»™t ads, hai cÃ¡ch follow-through khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Ads nÃ³i: â€œTracking sai lÃ m ads há»c sai: trÆ°á»›c khi scale ngÃ¢n sÃ¡ch, hÃ£y audit event vÃ  lead flow.â€ á»ž flow A, click Ä‘i vÃ o trang dá»‹ch vá»¥ marketing tá»•ng quÃ¡t, form chá»‰ há»i tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i, sales gá»i há»i khÃ¡ch cáº§n tÆ° váº¥n gÃ¬. KhÃ¡ch tháº¥y lá»‡ch context; lead Ä‘Æ°á»£c ghi lÃ  chÆ°a rÃµ nhu cáº§u.',
      },
      {
        type: 'paragraph',
        text: 'á»ž flow B, hero tiáº¿p tá»¥c lá»i há»©a audit tracking, landing page vÃ  lead handoff. Page cÃ³ cÃ¡c Ä‘iá»ƒm kiá»ƒm tracking, page vÃ  CRM; form há»i kÃªnh Ä‘ang cháº¡y cÃ¹ng váº¥n Ä‘á» chÃ­nh; CRM lÆ°u angle tracking audit; sales má»Ÿ Ä‘áº§u tá»« context Ä‘Ã³. DÃ¹ lead cÃ³ thá»ƒ Ã­t hÆ¡n, cuá»™c trÃ² chuyá»‡n rÃµ hÆ¡n. KhÃ¡c biá»‡t náº±m á»Ÿ cÃ¡ch cáº£ há»‡ thá»‘ng tiáº¿p tá»¥c lá»i há»©a, khÃ´ng chá»‰ á»Ÿ máº«u ads.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'CÃ ng lÃ m lÃ¢u, tÃ´i cÃ ng tháº¥y váº¥n Ä‘á» thÆ°á»ng náº±m á»Ÿ máº¡ch ná»‘i. Ads má»Ÿ má»™t cuá»™c trÃ² chuyá»‡n. Page tiáº¿p tá»¥c nÃ³. Form giá»¯ context. CRM chuyá»ƒn context cho sales. Sales cáº§n má»Ÿ Ä‘áº§u nhÆ° ngÆ°á»i hiá»ƒu vÃ¬ sao khÃ¡ch Ä‘á»ƒ láº¡i thÃ´ng tin, khÃ´ng pháº£i nhÆ° má»™t cuá»™c gá»i láº¡nh. Tá»«ng pháº§n nhÃ¬n riÃªng cÃ³ thá»ƒ khÃ´ng quÃ¡ tá»‡, nhÆ°ng há»‡ thá»‘ng váº«n rÆ¡i náº¿u máº¡ch nÃ y gÃ£y.',
      },
      { type: 'heading', text: 'Káº¿t â€” Giá»¯ lá»i há»©a Ä‘á»§ lÃ¢u Ä‘á»ƒ khÃ¡ch Ä‘i tiáº¿p' },
      {
        type: 'paragraph',
        text: 'Muá»‘n sá»­a, Ä‘á»«ng chá»‰ nhÃ¬n headline hoáº·c thiáº¿t káº¿ page. HÃ£y kiá»ƒm toÃ n bá»™ chain: ngÆ°á»i dÃ¹ng click vÃ¬ Ä‘iá»u gÃ¬, page tiáº¿p tá»¥c Ä‘iá»u Ä‘Ã³ ra sao, form giá»¯ context tháº¿ nÃ o vÃ  sales cÃ³ follow-up Ä‘Ãºng angle khÃ´ng. Paid ads sÃ¢u khÃ´ng chá»‰ táº¡o lá»i há»©a háº¥p dáº«n. NÃ³ giá»¯ lá»i há»©a Ä‘Ã³ Ä‘á»§ lÃ¢u Ä‘á»ƒ khÃ¡ch Ä‘i tiáº¿p.',
      },
    ],
    cta: 'Náº¿u campaign cá»§a báº¡n cÃ³ click nhÆ°ng lead khÃ´ng Ä‘i tiáº¿p, Ä‘á»«ng vá»™i káº¿t luáº­n creative yáº¿u hay landing page xáº¥u. HÃ£y há»i: lá»i há»©a trong ads cÃ³ Ä‘Æ°á»£c giá»¯ nguyÃªn qua landing page, form, CRM vÃ  sales opening khÃ´ng â€” hay khÃ¡ch Ä‘Ã£ bá»‹ máº¥t máº¡ch ngay sau cÃº click Ä‘áº§u tiÃªn?',
  },
  {
    title: 'Thank-you page trong paid ads: khÃ¡ch submit xong rá»“i thÃ¬ chuyá»‡n gÃ¬ xáº£y ra?',
    slug: 'thank-you-page-trong-paid-ads-khach-submit-xong-roi-thi-chuyen-gi-xay-ra',
    category: 'Paid Ads Deep Dive',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-outdoor-demo-01.jpg",
                "alt": "Outdoor exhibition booth activity",
                "caption": "Exhibition booth activity",
                "width": 2048,
                "height": 1536,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Form submit khÃ´ng pháº£i Ä‘iá»ƒm káº¿t thÃºc cá»§a paid ads funnel. ÄÃ³ lÃ  lÃºc khÃ¡ch vá»«a thá»ƒ hiá»‡n intent vÃ  Ä‘ang chá» há»‡ thá»‘ng pháº£n há»“i. Má»™t thank-you page chá»‰ ghi â€œCáº£m Æ¡n, chÃºng tÃ´i sáº½ liÃªn há»‡ láº¡iâ€ thÆ°á»ng bá» phÃ­ khoáº£nh kháº¯c ráº¥t quan trá»ng: xÃ¡c nháº­n ká»³ vá»ng, hÆ°á»›ng dáº«n bÆ°á»›c tiáº¿p theo, giá»¯ máº¡ch tin tÆ°á»Ÿng, Ä‘áº©y hÃ nh Ä‘á»™ng chá»§ Ä‘á»™ng, ghi tracking Ä‘Ãºng vÃ  giÃºp sales follow-up nhanh hÆ¡n.',
    content: [
      { type: 'heading', text: 'Opening memo â€” KhÃ¡ch submit form xong, rá»“i bá»‹ bá» lá»­ng' },
      {
        type: 'paragraph',
        text: 'Má»™t khÃ¡ch vá»«a click ads, Ä‘á»c landing page, Ä‘iá»n form vÃ  submit thÃ nh cÃ´ng. TrÃªn mÃ n hÃ¬nh hiá»‡n: â€œCáº£m Æ¡n báº¡n. ChÃºng tÃ´i sáº½ liÃªn há»‡ láº¡i sá»›m.â€ Háº¿t. KhÃ¡ch khÃ´ng biáº¿t bao lÃ¢u sáº½ Ä‘Æ°á»£c gá»i, ai gá»i, tá»« sá»‘ nÃ o, cÃ³ thá»ƒ nháº¯n Zalo khÃ´ng hoáº·c cáº§n chuáº©n bá»‹ thÃ´ng tin gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Há» cÅ©ng khÃ´ng rÃµ bÆ°á»›c tiáº¿p theo lÃ  tÆ° váº¥n, bÃ¡o giÃ¡, audit hay xÃ¡c nháº­n lá»‹ch; tháº­m chÃ­ khÃ´ng cháº¯c mÃ¬nh vá»«a Ä‘Äƒng kÃ½ Ä‘Ãºng offer trong ads. VÃ i tiáº¿ng sau sales gá»i, khÃ¡ch Ä‘ang báº­n, quÃªn context hoáº·c pháº£i há»i láº¡i tá»« Ä‘áº§u. Paid ads khÃ´ng káº¿t thÃºc á»Ÿ form submit. Vá»›i khÃ¡ch, Ä‘Ã³ lÃ  lÃºc há» cáº§n Ä‘Æ°á»£c dáº«n tiáº¿p.',
      },
      { type: 'heading', text: 'Memo 01 â€” Submit form lÃ  tÃ­n hiá»‡u intent, khÃ´ng pháº£i káº¿t quáº£ cuá»‘i' },
      {
        type: 'paragraph',
        text: 'Trong report ads, lead thÆ°á»ng Ä‘Æ°á»£c tÃ­nh ngay khi form submit. Äiá»u Ä‘Ã³ há»¯u Ã­ch cho media optimization, nhÆ°ng vá»›i business, submit má»›i lÃ  Ä‘iá»ƒm chuyá»ƒn giao: tá»« marketing sang sales, interest sang conversation, promise sang follow-up vÃ  event tracking sang CRM outcome.',
      },
      {
        type: 'paragraph',
        text: 'Sau submit, lead váº«n cÃ³ thá»ƒ khÃ´ng nghe mÃ¡y, quÃªn context, Ä‘á»•i Ã½, liÃªn há»‡ Ä‘á»‘i thá»§ trÆ°á»›c, bá»‹ gá»i cháº­m hoáº·c vÃ o CRM thiáº¿u source vÃ  campaign. Lead khÃ´ng tá»± biáº¿n thÃ nh cÆ¡ há»™i chá»‰ vÃ¬ Ä‘Ã£ Ä‘iá»n form. Post-submit flow quyáº¿t Ä‘á»‹nh intent cÃ²n nÃ³ng hay nguá»™i dáº§n.',
      },
      { type: 'visual', variant: 'post-submit-funnel-chain' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» cÃ¡ch thiáº¿t káº¿ thank-you page vÃ  post-submit flow cho paid ads.',
      },
      { type: 'heading', text: 'Memo 02 â€” Thank-you page nÃªn xÃ¡c nháº­n Ä‘Ãºng lá»i há»©a trong ads' },
      {
        type: 'paragraph',
        text: 'Thank-you page khÃ´ng nÃªn chá»‰ cáº£m Æ¡n. Náº¿u ads nÃ³i â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng? Audit láº¡i tracking, landing page vÃ  sales follow-upâ€, page sau submit nÃªn xÃ¡c nháº­n khÃ¡ch Ä‘Ã£ gá»­i yÃªu cáº§u audit lead flow vÃ  team sáº½ lÃ m rÃµ Ä‘iá»ƒm rÆ¡i á»Ÿ tracking, page, lead quality hay follow-up.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u ads nÃ³i â€œNhÃ  gáº§n biá»ƒn nhanh báº¡c mÃ u?â€, page nÃªn xÃ¡c nháº­n yÃªu cáº§u tÆ° váº¥n giáº£i phÃ¡p sÆ¡n cho mÃ´i trÆ°á»ng gáº§n biá»ƒn, rá»“i bÃ¡o team sáº½ há»i thÃªm vá» bá» máº·t, hiá»‡n tráº¡ng vÃ  khu vá»±c thi cÃ´ng. KhÃ¡ch cáº§n biáº¿t mÃ¬nh vá»«a Ä‘i Ä‘Ãºng bÆ°á»›c, khÃ´ng bá»‹ Ä‘áº©y vÃ o má»™t flow chung chung.',
      },
      { type: 'heading', text: 'Memo 03 â€” Thank-you page tá»‘t pháº£i nÃ³i rÃµ bÆ°á»›c tiáº¿p theo' },
      {
        type: 'paragraph',
        text: 'Trang nÃ y cáº§n tráº£ lá»i ngáº¯n gá»n: chuyá»‡n gÃ¬ vá»«a xáº£y ra, khÃ¡ch Ä‘Ã£ Ä‘Äƒng kÃ½ offer nÃ o, ai sáº½ liÃªn há»‡, qua kÃªnh nÃ o, trong khoáº£ng thá»i gian nÃ o vÃ  cáº§n chuáº©n bá»‹ gÃ¬. Náº¿u sau cuá»™c gá»i cÃ²n bÆ°á»›c audit, bÃ¡o giÃ¡, gá»­i máº«u hay xÃ¡c nháº­n lá»‹ch, hÃ£y nÃ³i trÆ°á»›c.',
      },
      { type: 'visual', variant: 'thank-you-page-job-map' },
      { type: 'heading', text: 'Memo 04 â€” Äá»«ng Ä‘á»ƒ thank-you page phÃ¡ message match' },
      {
        type: 'paragraph',
        text: 'Thank-you page nÃªn giá»¯ cÃ¹ng problem, offer, CTA logic, tone vÃ  next step. NÃ³ khÃ´ng cáº§n láº·p ads y chang, nhÆ°ng pháº£i lÃ m khÃ¡ch nháº­n ra: Ä‘Ãºng rá»“i, mÃ¬nh vá»«a Ä‘Äƒng kÃ½ viá»‡c nÃ y. Message match khÃ´ng dá»«ng á»Ÿ form; mÃ n hÃ¬nh xÃ¡c nháº­n váº«n pháº£i giá»¯ lá»i há»©a.',
      },
      { type: 'heading', text: 'Memo 05 â€” Äáº©y hÃ nh Ä‘á»™ng chá»§ Ä‘á»™ng, nhÆ°ng pháº£i minh báº¡ch' },
      {
        type: 'paragraph',
        text: 'Sau submit, team cÃ³ thá»ƒ cho khÃ¡ch nháº¯n Zalo Ä‘á»ƒ pháº£n há»“i nhanh hÆ¡n, gá»i hotline khi cáº§n gáº¥p, Ä‘áº·t lá»‹ch tÆ° váº¥n, táº£i checklist Ä‘Ã£ há»©a, xem video chuáº©n bá»‹, Ä‘á»c case liÃªn quan hoáº·c lÆ°u sá»‘ gá»i Ä‘áº¿n. HÃ nh Ä‘á»™ng nÃªn bÃ¡m Ä‘Ãºng offer vÃ  má»©c intent vá»«a thá»ƒ hiá»‡n.',
      },
      {
        type: 'paragraph',
        text: 'Má»—i lá»±a chá»n pháº£i nÃ³i rÃµ dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬, cÃ³ báº¯t buá»™c khÃ´ng vÃ  khÃ¡ch nÃªn ká»³ vá»ng Ä‘iá»u gÃ¬ sau Ä‘Ã³. KhÃ´ng Ã©p báº±ng dark pattern, giáº£ khan hiáº¿m hay deadline khÃ´ng cÃ³ tháº­t. Thank-you page tá»‘t cho khÃ¡ch má»™t bÆ°á»›c chá»§ Ä‘á»™ng há»£p lÃ½, khÃ´ng biáº¿n khoáº£nh kháº¯c tin tÆ°á»Ÿng thÃ nh Ã¡p lá»±c.',
      },
      { type: 'heading', text: 'Memo 06 â€” Tracking trÃªn thank-you page pháº£i cáº©n tháº­n' },
      {
        type: 'paragraph',
        text: 'Thank-you page thÆ°á»ng gáº¯n vá»›i conversion tracking, nÃªn cÅ©ng lÃ  nÆ¡i dá»… sai. Event cÃ³ thá»ƒ báº¯n khi page load dÃ¹ form chÆ°a thÃ nh cÃ´ng; refresh Ä‘áº¿m thÃªm lead; client vÃ  server trÃ¹ng mÃ  khÃ´ng dedup; URL bá»‹ truy cáº­p trá»±c tiáº¿p váº«n táº¡o conversion; UTM máº¥t sau redirect.',
      },
      {
        type: 'paragraph',
        text: 'á»ž Ä‘oáº¡n sau, click Zalo, hotline hoáº·c booking cÃ³ thá»ƒ khÃ´ng Ä‘Æ°á»£c ghi nháº­n; CRM khÃ´ng giá»¯ campaign, source vÃ  angle; GA4, ad platform vÃ  CRM lá»‡ch mÃ  team khÃ´ng biáº¿t vÃ¬ sao. Thank-you page cÃ³ thá»ƒ lÃ m tracking rÃµ hÆ¡n, nhÆ°ng setup sai sáº½ gá»­i tÃ­n hiá»‡u sai cho campaign.',
      },
      { type: 'visual', variant: 'post-submit-tracking-qa' },
      { type: 'heading', text: 'Memo 07 â€” Thank-you page nÃªn há»— trá»£ sales má»Ÿ Ä‘áº§u cuá»™c gá»i' },
      {
        type: 'paragraph',
        text: 'Sales thÆ°á»ng má»Ÿ Ä‘áº§u khÃ³ vÃ¬ chá»‰ nháº­n tÃªn vÃ  sá»‘ Ä‘iá»‡n thoáº¡i. CRM nÃªn giá»¯ source, offer, angle, cÃ¢u tráº£ lá»i form, page URL, thá»i Ä‘iá»ƒm submit, kÃªnh liÃªn há»‡ mong muá»‘n vÃ  hÃ nh Ä‘á»™ng sau submit nhÆ° click Zalo, Ä‘áº·t lá»‹ch hoáº·c táº£i file.',
      },
      {
        type: 'paragraph',
        text: 'Khi Ä‘Ã³ sales cÃ³ thá»ƒ nÃ³i: â€œEm tháº¥y anh/chá»‹ vá»«a gá»­i yÃªu cáº§u audit lead flow, pháº§n mÃ¬nh chá»n lÃ  landing page cÃ³ traffic nhÆ°ng Ã­t form. Em gá»i Ä‘á»ƒ há»i thÃªm trÆ°á»›c khi háº¹n lá»‹ch audit.â€ Cuá»™c gá»i ná»‘i tiáº¿p hÃ nh trÃ¬nh thay vÃ¬ báº¯t Ä‘áº§u nhÆ° má»™t cold call.',
      },
      { type: 'heading', text: 'Memo 08 â€” Thank-you page cÅ©ng lÃ  nÆ¡i giáº£m lead nguá»™i' },
      {
        type: 'paragraph',
        text: 'Lead nguá»™i khÃ´ng chá»‰ vÃ¬ sales gá»i cháº­m. Lead cÃ²n nguá»™i khi khÃ¡ch khÃ´ng biáº¿t mÃ¬nh Ä‘ang chá» gÃ¬. NÃ³i rÃµ thá»i gian pháº£n há»“i, nháº¯c lÆ°u sá»‘ hotline, cho nÃºt Zalo hoáº·c calendar phÃ¹ há»£p, gá»­i checklist trÆ°á»›c cuá»™c gá»i vÃ  xÃ¡c nháº­n offer Ä‘á»u giÃºp giá»¯ máº¡ch.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t thank-you page gá»n nÃªn cÃ³ gÃ¬?' },
      {
        type: 'paragraph',
        text: 'Má»™t flow gá»n cÃ³ thá»ƒ báº¯t Ä‘áº§u báº±ng confirmation headline, rá»“i nháº¯c offer vá»«a Ä‘Äƒng kÃ½, nÃ³i rÃµ next step vÃ  thá»i gian pháº£n há»“i. Sau Ä‘Ã³ Ä‘áº·t má»™t primary action phÃ¹ há»£p nhÆ° Zalo, booking, hotline hoáº·c táº£i tÃ i liá»‡u; thÃªm hÆ°á»›ng dáº«n chuáº©n bá»‹ vÃ  má»™t proof hoáº·c FAQ ngáº¯n náº¿u tháº­t sá»± há»¯u Ã­ch.',
      },
      {
        type: 'paragraph',
        text: 'PhÃ­a sau giao diá»‡n, tracking vÃ  CRM pháº£i giá»¯ source, campaign, angle cÃ¹ng form answer. Page khÃ´ng cáº§n nhiá»u section hay nhiá»u CTA cáº¡nh tranh. NÃ³ chá»‰ cáº§n Ä‘á»§ Ä‘á»ƒ khÃ¡ch khÃ´ng bá»‹ bá» lá»­ng vÃ  sales khÃ´ng thiáº¿u context khi tiáº¿p nháº­n.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n thank-you page vÃ  post-submit tracking QA checklist.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng má»™t form submit, hai post-submit flow khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'á»ž flow A, submit xong chá»‰ hiá»‡n lá»i cáº£m Æ¡n. KhÃ´ng cÃ³ next step, Zalo, hotline hay booking; CRM chá»‰ cÃ³ tÃªn vÃ  sá»‘. Sales gá»i vÃ i giá» sau báº±ng cÃ¢u má»Ÿ Ä‘áº§u chung. KhÃ¡ch quÃªn context hoáº·c khÃ´ng nghe mÃ¡y, rá»“i lead bá»‹ ghi lÃ  yáº¿u.',
      },
      {
        type: 'paragraph',
        text: 'á»ž flow B, page xÃ¡c nháº­n Ä‘Ãºng offer, nÃ³i rÃµ bÆ°á»›c tiáº¿p theo, cho nÃºt Zalo Ä‘á»ƒ gá»­i thÃªm thÃ´ng tin vÃ  checklist chuáº©n bá»‹. CRM giá»¯ campaign, angle, form answer; sales gá»i theo context khÃ¡ch vá»«a chá»n. CÃ¹ng má»™t lead, nhÆ°ng kháº£ nÄƒng má»Ÿ cuá»™c trÃ² chuyá»‡n tá»‘t hÆ¡n vÃ¬ há»‡ thá»‘ng xá»­ lÃ½ Ä‘oáº¡n sau submit khÃ¡c nhau.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign cÃ³ lead submit nhÆ°ng sales follow-up yáº¿u vÃ¬ thank-you page vÃ  CRM thiáº¿u context.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i cháº¡y ads, tÃ´i cÅ©ng hay xem form submit lÃ  Ä‘iá»ƒm káº¿t thÃºc: cÃ³ lead thÃ¬ chuyá»ƒn sales, thank-you page bÃ¡o gá»­i thÃ nh cÃ´ng lÃ  Ä‘á»§. NhÆ°ng tÃ´i dáº§n nháº­n ra Ä‘oáº¡n sau submit ráº¥t nháº¡y. KhÃ¡ch vá»«a cÃ³ intent, nhÆ°ng intent Ä‘Ã³ chÆ°a cháº¯c Ä‘á»§ bá»n.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡ch cáº§n biáº¿t bÆ°á»›c tiáº¿p theo; sales cáº§n context; tracking cáº§n ghi Ä‘Ãºng; CRM cáº§n Ä‘á»§ dá»¯ liá»‡u; campaign cáº§n biáº¿t lead Ä‘i tiáº¿p tháº¿ nÃ o. Má»™t dÃ²ng â€œCáº£m Æ¡n, chÃºng tÃ´i sáº½ liÃªn há»‡ láº¡iâ€ khÃ´ng sai, nhÆ°ng thÆ°á»ng quÃ¡ Ã­t cho má»™t funnel Ä‘ang tiÃªu tiá»n. Paid ads sÃ¢u thiáº¿t káº¿ cáº£ khoáº£nh kháº¯c sau khi lead Ä‘Æ°á»£c táº¡o.',
      },
      { type: 'heading', text: 'Káº¿t â€” Äiá»ƒm ná»‘i giá»¯a marketing intent vÃ  sales action' },
      {
        type: 'paragraph',
        text: 'Thank-you page khÃ´ng chá»‰ lÃ  mÃ n hÃ¬nh cáº£m Æ¡n. NÃ³ xÃ¡c nháº­n Ä‘Ãºng offer, giá»¯ message match, Ä‘áº·t ká»³ vá»ng, hÆ°á»›ng dáº«n next step, cho hÃ nh Ä‘á»™ng chá»§ Ä‘á»™ng khi phÃ¹ há»£p, há»— trá»£ tracking vÃ  giÃºp sales má»Ÿ Ä‘áº§u theo context. NÃ³ khÃ´ng tá»± lÃ m campaign tháº¯ng, nhÆ°ng bá» quÃªn nÃ³ khiáº¿n lead dá»… nguá»™i vÃ  outcome khÃ³ Ä‘á»c.',
      },
    ],
    cta: 'Khi review má»™t lead campaign, Ä‘á»«ng chá»‰ nhÃ¬n form submit. HÃ£y má»Ÿ thank-you page ra xem: khÃ¡ch submit xong cÃ³ biáº¿t chuyá»‡n gÃ¬ tiáº¿p theo khÃ´ng, cÃ³ thá»ƒ chá»§ Ä‘á»™ng hÃ nh Ä‘á»™ng khÃ´ng, tracking cÃ³ ghi Ä‘Ãºng khÃ´ng, CRM cÃ³ Ä‘á»§ context khÃ´ng vÃ  sales cÃ³ thá»ƒ má»Ÿ Ä‘áº§u nhÆ° má»™t ngÆ°á»i hiá»ƒu khÃ¡ch vá»«a Ä‘Äƒng kÃ½ Ä‘iá»u gÃ¬ khÃ´ng?',
  },
  {
    title: 'Landing page khÃ´ng pháº£i trang Ä‘áº¹p, nÃ³ lÃ  nÆ¡i lá»i há»©a marketing Ä‘Æ°á»£c kiá»ƒm chá»©ng',
    slug: 'landing-page-khong-phai-trang-dep-noi-loi-hua-marketing-duoc-kiem-chung',
    category: 'Landing Page & Conversion System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/events/events-exhibition-team-backdrop-01.jpg",
                "alt": "Team posing in front of an exhibition backdrop",
                "caption": "Exhibition team group photo",
                "width": 2048,
                "height": 1366,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Landing page khÃ´ng nÃªn Ä‘Æ°á»£c nhÃ¬n nhÆ° má»™t trang thiáº¿t káº¿ cho Ä‘áº¹p. NÃ³ lÃ  nÆ¡i lá»i há»©a tá»« ads, content hoáº·c social Ä‘Æ°á»£c kiá»ƒm chá»©ng. NgÆ°á»i dÃ¹ng click vÃ¬ má»™t ká»³ vá»ng cá»¥ thá»ƒ. Náº¿u page khÃ´ng tiáº¿p tá»¥c Ä‘Ãºng ká»³ vá»ng Ä‘Ã³ báº±ng message, proof, CTA, form vÃ  next step rÃµ rÃ ng, traffic sáº½ rÆ¡i dÃ¹ quáº£ng cÃ¡o cÃ³ kÃ©o click tá»‘t.',
    content: [
      { type: 'heading', text: 'Opening memo â€” Page nhÃ¬n á»•n, ads váº«n Ä‘á»‘t tiá»n' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign Ä‘ang cháº¡y. Ads cÃ³ click, traffic vÃ o web Ä‘á»u. Landing page nhÃ¬n cÅ©ng á»•n: cÃ³ hero, hÃ¬nh áº£nh, nÃºt liÃªn há»‡, form vÃ  vÃ i logo hoáº·c case.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng ngÆ°á»i vÃ o váº«n thoÃ¡t, CTA Ã­t click, form submit tháº¥p. Sales nÃ³i lead khÃ´ng rÃµ nhu cáº§u. Founder há»i: â€œPage váº­y chÆ°a Ä‘á»§ Ä‘áº¹p Ã ?â€ CÃ³ khi váº¥n Ä‘á» lÃ  page chÆ°a kiá»ƒm chá»©ng Ä‘Æ°á»£c lá»i há»©a marketing.',
      },
      { type: 'heading', text: 'Memo 01 â€” Landing page khÃ´ng báº¯t Ä‘áº§u tá»« layout, mÃ  tá»« lá»i há»©a' },
      {
        type: 'paragraph',
        text: 'TrÆ°á»›c khi há»i page nÃªn cÃ³ máº¥y section, hÃ£y há»i ngÆ°á»i dÃ¹ng Ä‘áº¿n tá»« Ä‘Ã¢u, há» click vÃ¬ lá»i há»©a nÃ o, ká»³ vá»ng gÃ¬, cáº§n proof gÃ¬ vÃ  bÆ°á»›c tiáº¿p theo lÃ  gÃ¬.',
      },
      {
        type: 'paragraph',
        text: 'Náº¿u ads nÃ³i â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?â€, hero â€œChÃºng tÃ´i cung cáº¥p giáº£i phÃ¡p marketing toÃ n diá»‡nâ€ Ä‘Ã£ lÃ m máº¥t máº¡ch. Page nÃªn tiáº¿p tá»¥c báº±ng viá»‡c kiá»ƒm lead Ä‘ang rÆ¡i á»Ÿ tracking, landing page, CRM hay sales follow-up.',
      },
      { type: 'visual', variant: 'marketing-promise-landing-proof' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao landing page lÃ  nÆ¡i lá»i há»©a marketing Ä‘Æ°á»£c kiá»ƒm chá»©ng.',
      },
      { type: 'heading', text: 'Memo 02 â€” NgÆ°á»i dÃ¹ng khÃ´ng Ä‘á»c page nhÆ° brochure' },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i vá»«a click muá»‘n biáº¿t Ä‘Ã¢y cÃ³ Ä‘Ãºng váº¥n Ä‘á» cá»§a mÃ¬nh khÃ´ng, proof cÃ³ Ä‘á»§ gáº§n khÃ´ng, Ä‘á»ƒ láº¡i thÃ´ng tin sáº½ nháº­n gÃ¬ vÃ  bÆ°á»›c tiáº¿p theo cÃ³ rÃµ khÃ´ng. Landing page lÃ  cuá»™c trÃ² chuyá»‡n cÃ³ má»¥c tiÃªu, khÃ´ng pháº£i brochure.',
      },
      { type: 'heading', text: 'Memo 03 â€” Page Ä‘áº¹p nhÆ°ng message lá»‡ch váº«n rÆ¡i' },
      {
        type: 'paragraph',
        text: 'Má»™t page cÃ³ thá»ƒ cÃ³ hÃ¬nh áº£nh tá»‘t, layout gá»n, typography á»•n vÃ  mÃ u Ä‘Ãºng brand. NhÆ°ng conversion váº«n rÆ¡i náº¿u hero khÃ´ng khá»›p ads, headline quÃ¡ chung, proof xa ná»—i Ä‘au hoáº·c CTA khÃ´ng Ä‘Ãºng stage.',
      },
      { type: 'visual', variant: 'beautiful-vs-conversion-ready-page' },
      { type: 'heading', text: 'Memo 04 â€” Landing page lÃ  Ä‘iá»ƒm ná»‘i giá»¯a marketing vÃ  sales' },
      {
        type: 'paragraph',
        text: 'Page tá»‘t giÃºp khÃ¡ch hiá»ƒu váº¥n Ä‘á» trÆ°á»›c khi submit; form thu Ä‘á»§ context; CRM lÆ°u campaign, source, angle; thank-you page Ä‘áº·t ká»³ vá»ng; sales má»Ÿ Ä‘áº§u theo Ä‘Ãºng lÃ½ do khÃ¡ch hÃ nh Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Memo 05 â€” Landing page pháº£i tráº£ lá»i Ä‘á»§ 5 cÃ¢u há»i' },
      {
        type: 'list',
        items: [
          'TÃ´i cÃ³ Ä‘ang á»Ÿ Ä‘Ãºng nÆ¡i khÃ´ng? Hero khá»›p nguá»“n traffic vÃ  lá»i há»©a.',
          'Váº¥n Ä‘á» cá»§a tÃ´i cÃ³ Ä‘Æ°á»£c hiá»ƒu khÃ´ng? Pain vÃ  context rÃµ.',
          'TÃ´i cÃ³ Ä‘á»§ tin khÃ´ng? Proof, case, process Ä‘Ãºng ná»—i lo.',
          'TÃ´i nÃªn lÃ m gÃ¬ tiáº¿p theo? CTA rÃµ vÃ  phÃ¹ há»£p stage.',
          'Sau khi hÃ nh Ä‘á»™ng thÃ¬ chuyá»‡n gÃ¬ xáº£y ra? Form vÃ  sales follow-up ná»‘i Ä‘Æ°á»£c máº¡ch.',
        ],
      },
      { type: 'visual', variant: 'landing-page-five-question-check' },
      { type: 'heading', text: 'Memo 06 â€” Section khÃ´ng quan trá»ng báº±ng vai trÃ² cá»§a section' },
      {
        type: 'paragraph',
        text: 'Hero, benefits, features, process, case study, FAQ, pricing vÃ  CTA Ä‘á»u cÃ³ thá»ƒ Ä‘Ãºng. NhÆ°ng tÃªn section khÃ´ng chá»©ng minh page Ä‘ang lÃ m viá»‡c.',
      },
      { type: 'heading', text: 'Memo 07 â€” Äá»c landing page báº±ng cáº£ sá»‘ liá»‡u vÃ  sales feedback' },
      {
        type: 'paragraph',
        text: 'Traffic, bounce, scroll, CTA click, form start, submit vÃ  conversion rate cho biáº¿t hÃ nh vi trÃªn page. NhÆ°ng form submit chÆ°a pháº£i Ä‘iá»ƒm cuá»‘i.',
      },
      {
        type: 'paragraph',
        text: 'Team cáº§n Ä‘á»c tiáº¿p: lead cÃ³ contact Ä‘Æ°á»£c khÃ´ng, cÃ³ hiá»ƒu Ä‘Ãºng offer khÃ´ng, cÃ³ qualified khÃ´ng, sales máº¥t lead vÃ¬ lÃ½ do gÃ¬, source/campaign/angle cÃ³ vÃ o CRM khÃ´ng.',
      },
      { type: 'heading', text: 'Memo 08 â€” Landing page yáº¿u thÆ°á»ng lÃ m ads bá»‹ Ä‘á»c sai' },
      {
        type: 'paragraph',
        text: 'Khi káº¿t quáº£ khÃ´ng tá»‘t, team dá»… káº¿t luáº­n campaign Ä‘áº¯t, creative yáº¿u, target sai hoáº·c platform há»c sai. NhÆ°ng ads cÃ³ thá»ƒ váº«n kÃ©o Ä‘Ãºng ngÆ°á»i; Ä‘iá»ƒm gÃ£y náº±m á»Ÿ page, form hoáº·c sales context.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i má»i lá»—i Ä‘á»u thuá»™c landing page. NhÆ°ng náº¿u khÃ´ng audit Ä‘oáº¡n sau click, team cÃ³ thá»ƒ sá»­a ads liÃªn tá»¥c trong khi Ä‘iá»ƒm rÆ¡i váº«n náº±m sau click.',
      },
      { type: 'heading', text: 'Memo 09 â€” Má»™t landing page audit Ä‘Æ¡n giáº£n nÃªn Ä‘i theo flow nÃ o?' },
      {
        type: 'paragraph',
        text: 'Báº¯t Ä‘áº§u á»Ÿ source: traffic Ä‘áº¿n tá»« Ä‘Ã¢u, promise vÃ  angle lÃ  gÃ¬. Sang hero: page cÃ³ xÃ¡c nháº­n lá»i há»©a hay nÃ³i quÃ¡ chung? Rá»“i kiá»ƒm message, proof, pain vÃ  context.',
      },
      {
        type: 'paragraph',
        text: 'Tiáº¿p theo Ä‘á»c CTA, form, event, CRM vÃ  sales feedback: CTA cÃ³ Ä‘Ãºng stage, form cÃ³ giá»¯ context, event cÃ³ báº¯n Ä‘Ãºng, lost reason nÃ o láº·p láº¡i.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n landing page promise-to-conversion audit checklist.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng traffic, hai landing page khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Ads cÃ¹ng nÃ³i â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?â€. Page A má»Ÿ báº±ng â€œDá»‹ch vá»¥ marketing tá»•ng thá»ƒâ€, ká»ƒ dÃ i vá» nÄƒng lá»±c, dÃ¹ng CTA â€œLiÃªn há»‡ ngayâ€, form chá»‰ há»i tÃªn vÃ  sá»‘. Sales gá»i báº±ng cÃ¢u há»i chung.',
      },
      {
        type: 'paragraph',
        text: 'Page B má»Ÿ báº±ng viá»‡c kiá»ƒm lead Ä‘ang rÆ¡i á»Ÿ Ä‘Ã¢u, giáº£i thÃ­ch bá»‘n Ä‘iá»ƒm rÆ¡i, dÃ¹ng proof liÃªn quan vÃ  CTA â€œÄÄƒng kÃ½ audit lead flowâ€. Form há»i váº¥n Ä‘á» chÃ­nh, CRM lÆ°u angle, sales má»Ÿ Ä‘áº§u theo context. Page B chÆ°a cháº¯c cÃ³ CPL tháº¥p hÆ¡n, nhÆ°ng táº¡o cuá»™c trÃ² chuyá»‡n Ä‘Ãºng hÆ¡n.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t landing page nhÃ¬n Ä‘áº¹p nhÆ°ng khÃ´ng khá»›p ads nÃªn form submit tháº¥p.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i lÃ m landing page, tÃ´i cÅ©ng dá»… bá»‹ kÃ©o vÃ o cÃ¢u há»i page Ä‘áº¹p chÆ°a: hero á»•n khÃ´ng, mÃ u cÃ³ premium khÃ´ng, card cÃ³ hiá»‡n Ä‘áº¡i khÃ´ng. Nhá»¯ng thá»© Ä‘Ã³ quan trá»ng, nhÆ°ng cÃ¢u há»i sÃ¢u hÆ¡n lÃ  page cÃ³ tiáº¿p tá»¥c Ä‘Ãºng lá»i há»©a marketing khÃ´ng.',
      },
      {
        type: 'paragraph',
        text: 'Ads má»Ÿ má»™t ká»³ vá»ng; landing page kiá»ƒm chá»©ng nÃ³; form giá»¯ context; thank-you page dáº«n tiáº¿p; CRM lÆ°u source vÃ  angle; sales má»Ÿ Ä‘áº§u nhÆ° ngÆ°á»i hiá»ƒu vÃ¬ sao khÃ¡ch Ä‘á»ƒ láº¡i thÃ´ng tin. Thiáº¿u nhá»¯ng lá»›p Ä‘Ã³, page cÃ³ thá»ƒ Ä‘áº¹p nhÆ°ng há»‡ thá»‘ng váº«n rÆ¡i.',
      },
      { type: 'heading', text: 'Káº¿t â€” Lá»i há»©a pháº£i Ä‘Æ°á»£c kiá»ƒm chá»©ng báº±ng hÃ nh Ä‘á»™ng' },
      {
        type: 'paragraph',
        text: 'Landing page pháº£i khá»›p nguá»“n traffic, gá»i Ä‘Ãºng váº¥n Ä‘á», Ä‘Æ°a proof Ä‘á»§ gáº§n, cÃ³ CTA Ä‘Ãºng stage, form giá»¯ context, tracking vÃ  CRM rÃµ, rá»“i bÃ n giao Ä‘Æ°á»£c cho sales. Chá»‰ nhÃ¬n nÃ³ nhÆ° giao diá»‡n khiáº¿n team sá»­a mÃ u, layout, hÃ¬nh áº£nh nhÆ°ng bá» qua nÆ¡i conversion Ä‘ang rÆ¡i.',
      },
    ],
    cta: 'Náº¿u landing page Ä‘ang cÃ³ traffic nhÆ°ng Ã­t lead hoáº·c lead khÃ´ng rÃµ nhu cáº§u, Ä‘á»«ng há»i Ä‘áº§u tiÃªn â€œpage Ä‘Ã£ Ä‘áº¹p chÆ°a?â€. HÃ£y há»i: ngÆ°á»i dÃ¹ng click vÃ¬ lá»i há»©a nÃ o, page cÃ³ tiáº¿p tá»¥c lá»i há»©a Ä‘Ã³ khÃ´ng, proof cÃ³ Ä‘á»§ gáº§n khÃ´ng, form cÃ³ giá»¯ context khÃ´ng, tracking vÃ  CRM cÃ³ ghi Ä‘Ãºng khÃ´ng, sales cÃ³ thá»ƒ má»Ÿ Ä‘áº§u theo Ä‘Ãºng lÃ½ do khÃ¡ch Ä‘á»ƒ láº¡i thÃ´ng tin khÃ´ng?',
  },
  {
    title: 'Hero landing page khÃ´ng pháº£i Ä‘á»ƒ giá»›i thiá»‡u cÃ´ng ty, nÃ³ pháº£i xÃ¡c nháº­n Ä‘Ãºng ká»³ vá»ng cá»§a ngÆ°á»i vá»«a click',
    slug: 'hero-landing-page-khong-phai-de-gioi-thieu-cong-ty-phai-xac-nhan-dung-ky-vong-nguoi-vua-click',
    category: 'Landing Page & Conversion System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/content-media/content-media-growth-marketing-digital-vs-growth-01.jpg",
                "alt": "Infographic comparing digital marketing and growth marketing",
                "caption": "Digital marketing versus growth marketing infographic",
                "width": 1024,
                "height": 1536,
                "fit": "contain"
          },
          "inlineImages": []
    },
    excerpt:
      'Hero landing page khÃ´ng pháº£i chá»— Ä‘á»ƒ chÃ o má»«ng hoáº·c giá»›i thiá»‡u cÃ´ng ty báº±ng má»™t cÃ¢u slogan chung chung. NÃ³ lÃ  Ä‘iá»ƒm xÃ¡c nháº­n Ä‘áº§u tiÃªn sau cÃº click. Náº¿u ngÆ°á»i dÃ¹ng khÃ´ng tháº¥y Ä‘Ãºng váº¥n Ä‘á», Ä‘Ãºng lá»i há»©a vÃ  Ä‘Ãºng lÃ½ do Ä‘á»ƒ Ä‘á»c tiáº¿p trong vÃ i giÃ¢y Ä‘áº§u, landing page dá»… rÆ¡i dÃ¹ traffic váº«n cÃ³.',
    content: [
      { type: 'heading', text: 'Opening memo â€” NgÆ°á»i dÃ¹ng vá»«a click vÃ o, nhÆ°ng khÃ´ng tháº¥y mÃ¬nh' },
      {
        type: 'paragraph',
        text: 'Má»™t campaign Ä‘ang cháº¡y. Ads cÃ³ click, traffic vÃ o landing page cÃ³. Hero nhÃ¬n á»•n: headline lá»›n, subheadline, CTA, mockup, vÃ i logo, mobile khÃ´ng vá»¡. NhÆ°ng ngÆ°á»i dÃ¹ng váº«n thoÃ¡t nhanh.',
      },
      {
        type: 'paragraph',
        text: 'Founder hoáº·c sales há»i cÃ³ cáº§n Ä‘á»•i hÃ¬nh, lÃ m headline máº¡nh hÆ¡n hay Ä‘Æ°a form lÃªn trÃªn khÃ´ng. CÃ³ khi váº¥n Ä‘á» lÃ  hero chÆ°a xÃ¡c nháº­n Ä‘Ãºng ká»³ vá»ng sau click.',
      },
      { type: 'heading', text: 'Memo 01 â€” Hero khÃ´ng báº¯t Ä‘áº§u tá»« â€œchÃºng tÃ´i lÃ  aiâ€' },
      {
        type: 'paragraph',
        text: 'Nhiá»u landing page má»Ÿ Ä‘áº§u báº±ng â€œchÃºng tÃ´i lÃ  Ä‘Æ¡n vá»‹ hÃ ng Ä‘áº§uâ€, â€œgiáº£i phÃ¡p toÃ n diá»‡nâ€ hoáº·c â€œdá»‹ch vá»¥ chuyÃªn nghiá»‡pâ€. Nhá»¯ng cÃ¢u nÃ y khÃ´ng sai tuyá»‡t Ä‘á»‘i, nhÆ°ng chÃºng báº¯t Ä‘áº§u tá»« phÃ­a doanh nghiá»‡p.',
      },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i vá»«a click thÆ°á»ng há»i: Ä‘Ã¢y cÃ³ Ä‘Ãºng thá»© tÃ´i vá»«a quan tÃ¢m khÃ´ng, trang nÃ y cÃ³ nÃ³i tiáº¿p Ä‘Ãºng Ä‘iá»u quáº£ng cÃ¡o vá»«a há»©a khÃ´ng? Hero tá»‘t xÃ¡c nháº­n nhanh: há» Ä‘ang á»Ÿ Ä‘Ãºng nÆ¡i.',
      },
      { type: 'visual', variant: 'after-click-expectation-match' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao hero landing page pháº£i xÃ¡c nháº­n Ä‘Ãºng ká»³ vá»ng sau cÃº click.',
      },
      { type: 'heading', text: 'Memo 02 â€” Message match quan trá»ng hÆ¡n headline nghe hay' },
      {
        type: 'paragraph',
        text: 'Headline nghe hay váº«n sai náº¿u khÃ´ng khá»›p lá»i há»©a nguá»“n traffic. Ads nÃ³i â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?â€, hero â€œGiáº£i phÃ¡p marketing tá»•ng thá»ƒâ€ quÃ¡ rá»™ng. Hero tá»‘t hÆ¡n lÃ : â€œTrÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch ads, hÃ£y kiá»ƒm tra lead Ä‘ang rÆ¡i á»Ÿ landing page, tracking, CRM hay sales follow-up.â€ Search intent cÅ©ng váº­y: ngÆ°á»i tÃ¬m â€œsÆ¡n láº¡i nhÃ  trong ngÃ yâ€ cáº§n tháº¥y Ä‘Ãºng nhu cáº§u Ä‘Ã³.',
      },
      { type: 'heading', text: 'Memo 03 â€” Hero pháº£i tráº£ lá»i 3 cÃ¢u tháº­t nhanh' },
      {
        type: 'paragraph',
        text: 'Hero nÃªn giÃºp ngÆ°á»i dÃ¹ng tráº£ lá»i ba cÃ¢u: Ä‘Ã¢y cÃ³ pháº£i váº¥n Ä‘á» cá»§a tÃ´i khÃ´ng, bÃªn nÃ y cÃ³ hiá»ƒu context cá»§a tÃ´i khÃ´ng, vÃ  tÃ´i nÃªn lÃ m gÃ¬ tiáº¿p theo? Náº¿u khÃ´ng, cÃ¡c section sau chÆ°a cháº¯c Ä‘Æ°á»£c Ä‘á»c.',
      },
      { type: 'visual', variant: 'hero-three-question-check' },
      { type: 'heading', text: 'Memo 04 â€” Hero khÃ´ng nÃªn gÃ¡nh háº¿t landing page' },
      {
        type: 'paragraph',
        text: 'Má»™t lá»—i khÃ¡c lÃ  cá»‘ nhÃ©t quÃ¡ nhiá»u thá»© vÃ o hero: lá»£i Ã­ch, tÃ­nh nÄƒng, proof, dá»‹ch vá»¥, CTA, form dÃ i vÃ  badge. Hero khÃ´ng pháº£i nÆ¡i giáº£i thÃ­ch toÃ n bá»™ cÃ¢u chuyá»‡n. NÃ³ chá»‰ cáº§n má»Ÿ Ä‘Ãºng máº¡ch Ä‘á»ƒ ngÆ°á»i dÃ¹ng Ä‘á»c proof, offer hoáº·c process.',
      },
      { type: 'heading', text: 'Memo 05 â€” Hero pháº£i khá»›p stage cá»§a traffic' },
      {
        type: 'paragraph',
        text: 'Cold ads cáº§n pain rÃµ, context rÃµ, proof nháº¹ vÃ  CTA má»m. Search traffic cÃ³ intent rÃµ hÆ¡n; hero nÃªn nÃ³i Ä‘Ãºng dá»‹ch vá»¥, use case vÃ  pháº¡m vi. Remarketing cÃ³ thá»ƒ Ä‘Æ°a case, process hoáº·c offer rÃµ hÆ¡n. Má»™t hero cho má»i nguá»“n thÆ°á»ng sáº½ quÃ¡ chung.',
      },
      { type: 'visual', variant: 'hero-by-traffic-temperature' },
      { type: 'heading', text: 'Memo 06 â€” Hero Ä‘áº¹p nhÆ°ng sai gÃ³c nhÃ¬n váº«n rÆ¡i' },
      {
        type: 'paragraph',
        text: 'Hero cÃ³ thá»ƒ cÃ³ font Ä‘áº¹p, mÃ u Ä‘Ãºng brand, hÃ¬nh áº£nh cháº¥t lÆ°á»£ng, CTA ná»•i vÃ  bá»‘ cá»¥c cÃ¢n Ä‘á»‘i. NhÆ°ng váº«n rÆ¡i náº¿u slogan quÃ¡ rá»™ng, nÃ³i vá» cÃ´ng ty trÆ°á»›c khÃ¡ch hoáº·c CTA Ä‘Ã²i hÃ nh Ä‘á»™ng quÃ¡ sá»›m.',
      },
      { type: 'heading', text: 'Memo 07 â€” Hero nÃªn nÃ³i Ã­t nhÆ°ng Ä‘Ãºng vai trÃ²' },
      {
        type: 'paragraph',
        text: 'Hero tá»‘t thÆ°á»ng cÃ³ nÄƒm pháº§n: context label, headline, subheadline, CTA vÃ  micro-proof. KhÃ´ng pháº£i page nÃ o cÅ©ng cáº§n Ä‘á»§ cáº£ nÄƒm; quan trá»ng lÃ  má»—i pháº§n giÃºp xÃ¡c nháº­n context, lá»i há»©a, niá»m tin vÃ  bÆ°á»›c tiáº¿p.',
      },
      { type: 'visual', variant: 'hero-anatomy-conversion-context' },
      { type: 'heading', text: 'Memo 08 â€” Hero yáº¿u lÃ m team Ä‘á»c sai dá»¯ liá»‡u ads' },
      {
        type: 'paragraph',
        text: 'Khi hero khÃ´ng khá»›p lá»i há»©a nguá»“n traffic, team dá»… Ä‘á»c sai ads: click cÃ³ nhÆ°ng bounce cao, CPC khÃ´ng tá»‡ nhÆ°ng khÃ´ng cÃ³ lead, traffic Ä‘Ãºng nhÆ°ng page khÃ´ng giá»¯ Ä‘Æ°á»£c ngÆ°á»i Ä‘á»c.',
      },
      { type: 'heading', text: 'Memo 09 â€” Hero audit nÃªn Ä‘i theo flow nÃ o?' },
      {
        type: 'paragraph',
        text: 'Audit hero nÃªn báº¯t Ä‘áº§u tá»« source: traffic Ä‘áº¿n tá»« Ä‘Ã¢u vÃ  ngÆ°á»i dÃ¹ng vá»«a tháº¥y lá»i há»©a nÃ o. Sau Ä‘Ã³ Ä‘á»c expectation, headline, subheadline, CTA, proof vÃ  mobile: ba giÃ¢y Ä‘áº§u cÃ³ Ä‘á»§ rÃµ khÃ´ng?',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n hero message match audit checklist.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng má»™t ads, hai hero khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Ads nÃ³i â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?â€. Hero A má»Ÿ báº±ng â€œMarketing Solutionâ€, headline â€œGiáº£i phÃ¡p marketing tá»•ng thá»ƒâ€, subheadline nÃ³i phÃ¡t triá»ƒn thÆ°Æ¡ng hiá»‡u, CTA â€œLiÃªn há»‡ ngayâ€. NgÆ°á»i dÃ¹ng click vÃ¬ pain cá»¥ thá»ƒ, nhÆ°ng hero quÃ¡ rá»™ng.',
      },
      {
        type: 'paragraph',
        text: 'Hero B dÃ¹ng â€œAudit lead flow cho SMEâ€, headline â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng? TrÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch, hÃ£y kiá»ƒm tra Ä‘iá»ƒm rÆ¡i trong funnel.â€ Subheadline nháº¯c landing page, tracking, form, CRM, sales follow-up. CTA lÃ  â€œXem flow auditâ€.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t campaign cÃ³ ads Ä‘Ãºng pain nhÆ°ng hero quÃ¡ chung nÃªn ngÆ°á»i dÃ¹ng thoÃ¡t nhanh.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i lÃ m landing page, tÃ´i cÅ©ng dá»… bá»‹ kÃ©o vÃ o chuyá»‡n hero nhÃ¬n cÃ³ Ä‘áº¹p khÃ´ng, headline cÃ³ máº¡nh khÃ´ng, CTA cÃ³ ná»•i khÃ´ng. Nhá»¯ng thá»© Ä‘Ã³ váº«n quan trá»ng.',
      },
      {
        type: 'paragraph',
        text: 'NhÆ°ng cÃ¢u há»i sÃ¢u hÆ¡n lÃ : ngÆ°á»i vá»«a click cÃ³ tháº¥y mÃ¬nh trong ba giÃ¢y Ä‘áº§u khÃ´ng? Náº¿u há» click vÃ¬ má»™t váº¥n Ä‘á» cá»¥ thá»ƒ, hero pháº£i tiáº¿p tá»¥c váº¥n Ä‘á» Ä‘Ã³. Náº¿u há» Ä‘áº¿n tá»« search hoáº·c remarketing, hero pháº£i xÃ¡c nháº­n nhu cáº§u vÃ  Ä‘Æ°a lÃ½ do Ä‘i tiáº¿p.',
      },
      { type: 'heading', text: 'Káº¿t â€” Hero lÃ  lá»i Ä‘Ã¡p Ä‘áº§u tiÃªn sau cÃº click' },
      {
        type: 'paragraph',
        text: 'Hero landing page khÃ´ng pháº£i Ä‘á»ƒ giá»›i thiá»‡u cÃ´ng ty trÆ°á»›c tiÃªn. NÃ³ pháº£i xÃ¡c nháº­n Ä‘Ãºng ká»³ vá»ng cá»§a ngÆ°á»i vá»«a click. Má»™t hero tá»‘t giÃºp ngÆ°á»i dÃ¹ng tháº¥y Ä‘Ãºng nÆ¡i, Ä‘Ãºng váº¥n Ä‘á», Ä‘Ãºng context vÃ  Ä‘Ãºng bÆ°á»›c tiáº¿p theo.',
      },
    ],
    cta: 'Náº¿u landing page cÃ³ traffic nhÆ°ng ngÆ°á»i dÃ¹ng thoÃ¡t nhanh hoáº·c Ã­t kÃ©o xuá»‘ng, Ä‘á»«ng há»i Ä‘áº§u tiÃªn â€œhero Ä‘Ã£ Ä‘áº¹p chÆ°a?â€. HÃ£y há»i: ngÆ°á»i dÃ¹ng vá»«a click vÃ¬ lá»i há»©a nÃ o, hero cÃ³ xÃ¡c nháº­n Ä‘Ãºng ká»³ vá»ng Ä‘Ã³ khÃ´ng, headline cÃ³ gá»i Ä‘Ãºng váº¥n Ä‘á» khÃ´ng, CTA cÃ³ há»£p stage khÃ´ng vÃ  mobile ba giÃ¢y Ä‘áº§u cÃ³ Ä‘á»§ rÃµ Ä‘á»ƒ ngÆ°á»i Ä‘á»c muá»‘n Ä‘i tiáº¿p khÃ´ng?',
  },
  {
    title: 'Landing page khÃ´ng chuyá»ƒn Ä‘á»•i vÃ¬ offer chÆ°a Ä‘á»§ rÃµ',
    slug: 'landing-page-khong-chuyen-doi-vi-offer-chua-du-ro',
    category: 'Landing Page & Conversion System',
    readingTime: '8â€“10 phÃºt Ä‘á»c',
    media: {
          "coverImage": {
                "src": "/images/media-library/company-work/company-work-team-group-formal-team-photo-01.jpg",
                "alt": "Formal team group photo indoors",
                "caption": "Formal team group photo",
                "width": 958,
                "height": 960,
                "fit": "cover"
          },
          "inlineImages": []
    },
    excerpt:
      'Nhiá»u landing page cÃ³ giao diá»‡n á»•n, CTA ná»•i vÃ  form dá»… tháº¥y nhÆ°ng váº«n khÃ´ng ra lead vÃ¬ offer chÆ°a Ä‘á»§ rÃµ. KhÃ¡ch khÃ´ng Ä‘á»ƒ láº¡i thÃ´ng tin chá»‰ vÃ¬ cÃ³ nÃºt â€œNháº­n tÆ° váº¥nâ€. Há» hÃ nh Ä‘á»™ng khi hiá»ƒu rÃµ mÃ¬nh sáº½ nháº­n Ä‘Æ°á»£c gÃ¬, viá»‡c Ä‘Ã³ giÃºp xá»­ lÃ½ váº¥n Ä‘á» nÃ o vÃ  sau khi báº¥m nÃºt chuyá»‡n gÃ¬ xáº£y ra.',
    content: [
      { type: 'heading', text: 'Opening memo â€” CTA ná»•i nhÆ°ng khÃ¡ch váº«n khÃ´ng báº¥m' },
      {
        type: 'paragraph',
        text: 'Má»™t landing page cÃ³ hero rÃµ, CTA ná»•i, form dá»… tháº¥y vÃ  mobile khÃ´ng vá»¡. NhÆ°ng traffic vÃ o rá»“i Ã­t ngÆ°á»i submit; sales gá»i thÃ¬ khÃ¡ch khÃ´ng nhá»› mÃ¬nh Ä‘Äƒng kÃ½ gÃ¬, hoáº·c há»i láº¡i Ä‘iá»u Ä‘Ã¡ng láº½ page pháº£i nÃ³i rÃµ. Founder há»i: â€œCTA váº­y chÆ°a Ä‘á»§ máº¡nh Ã ?â€ CÃ³ khi offer phÃ­a sau nÃºt chÆ°a Ä‘á»§ rÃµ Ä‘á»ƒ khÃ¡ch tháº¥y Ä‘Ã¡ng hÃ nh Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Memo 01 â€” CTA khÃ´ng pháº£i offer' },
      {
        type: 'paragraph',
        text: 'CTA lÃ  cÃ¢u kÃªu gá»i: nháº­n tÆ° váº¥n, Ä‘Äƒng kÃ½ ngay, liÃªn há»‡, nháº­n bÃ¡o giÃ¡ hoáº·c tÃ¬m hiá»ƒu thÃªm. NÃ³ tráº£ lá»i ngÆ°á»i dÃ¹ng cáº§n báº¥m vÃ o Ä‘Ã¢u. Offer lÃ  giÃ¡ trá»‹ há» tháº­t sá»± nháº­n Ä‘Æ°á»£c: audit 15 phÃºt, bÃ¡o giÃ¡ sÆ¡ bá»™ trong 24 giá», checklist, demo hoáº·c phÃ¢n tÃ­ch nhanh Ä‘iá»ƒm ngháº½n.',
      },
      {
        type: 'paragraph',
        text: 'Hai pháº§n cáº§n Ä‘i cÃ¹ng nhau nhÆ°ng khÃ´ng thá»ƒ thay tháº¿ nhau. Má»™t nÃºt ná»•i báº­t chá»‰ lÃ m hÃ nh Ä‘á»™ng dá»… tháº¥y hÆ¡n; nÃ³ khÃ´ng tá»± táº¡o ra lÃ½ do hÃ nh Ä‘á»™ng. CTA tráº£ lá»i â€œbáº¥m á»Ÿ Ä‘Ã¢uâ€. Offer tráº£ lá»i â€œtáº¡i sao viá»‡c báº¥m nÃ y Ä‘Ã¡ng lÃ mâ€.',
      },
      { type: 'visual', variant: 'cta-is-not-offer' },
      {
        type: 'placeholder',
        label: 'VIDEO PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n video chia sáº» vÃ¬ sao CTA khÃ´ng pháº£i offer vÃ  offer má»›i lÃ  lÃ½ do khiáº¿n khÃ¡ch hÃ nh Ä‘á»™ng.',
      },
      { type: 'heading', text: 'Memo 02 â€” KhÃ¡ch khÃ´ng ngáº¡i Ä‘á»ƒ láº¡i thÃ´ng tin, há» ngáº¡i má»™t lá»i há»©a má»' },
      {
        type: 'paragraph',
        text: 'NgÆ°á»i dÃ¹ng váº«n Ä‘á»ƒ láº¡i sá»‘ Ä‘iá»‡n thoáº¡i, email hoáº·c Zalo khi giÃ¡ trá»‹ Ä‘á»§ rÃµ. Há» do dá»± khi page chá»‰ nÃ³i â€œNháº­n tÆ° váº¥n miá»…n phÃ­â€, â€œÄÄƒng kÃ½ Ä‘á»ƒ Ä‘Æ°á»£c há»— trá»£â€ hay â€œNháº­n giáº£i phÃ¡p phÃ¹ há»£pâ€. Nhá»¯ng cÃ¢u nÃ y khÃ´ng sai, nhÆ°ng Ä‘á»ƒ láº¡i quÃ¡ nhiá»u khoáº£ng trá»‘ng.',
      },
      {
        type: 'paragraph',
        text: 'TÆ° váº¥n viá»‡c gÃ¬, kÃ©o dÃ i bao lÃ¢u, ai liÃªn há»‡, cáº§n chuáº©n bá»‹ gÃ¬, cÃ³ bá»‹ sales Ã©p mua khÃ´ng vÃ  káº¿t quáº£ cá»¥ thá»ƒ lÃ  gÃ¬? Náº¿u chÆ°a sáºµn sÃ ng mua, há» cÃ³ nÃªn Ä‘iá»n form khÃ´ng? KhÃ¡ch khÃ´ng ngáº¡i hÃ nh Ä‘á»™ng; há» ngáº¡i Ä‘Ã¡nh Ä‘á»•i thÃ´ng tin cho má»™t lá»i há»©a chÆ°a Ä‘á»§ cá»¥ thá»ƒ.',
      },
      { type: 'heading', text: 'Memo 03 â€” Offer tá»‘t pháº£i lÃ m giáº£m rá»§i ro trong Ä‘áº§u khÃ¡ch' },
      {
        type: 'paragraph',
        text: 'Offer khÃ´ng chá»‰ cáº§n háº¥p dáº«n. NÃ³ pháº£i giÃºp khÃ¡ch cáº£m tháº¥y an toÃ n hÆ¡n khi Ä‘i tiáº¿p. NgÆ°á»i Ä‘á»c cÃ³ thá»ƒ sá»£ máº¥t thá»i gian cho cuá»™c gá»i lan man, bá»‹ bÃ¡n hÃ ng quÃ¡ sá»›m, nháº­n tÆ° váº¥n chung chung hoáº·c máº¥t quyá»n kiá»ƒm soÃ¡t sau khi Ä‘á»ƒ láº¡i sá»‘. Offer rÃµ pháº£i giáº£m nhá»¯ng Ä‘iá»u khÃ¡ch Ä‘ang tá»± Ä‘oÃ¡n.',
      },
      { type: 'heading', text: 'Memo 04 â€” Má»™t offer rÃµ cáº§n tráº£ lá»i 4 cÃ¢u há»i' },
      {
        type: 'list',
        items: [
          'KhÃ¡ch nháº­n Ä‘Æ°á»£c gÃ¬: audit, checklist, bÃ¡o giÃ¡, demo, file máº«u hay phÃ¢n tÃ­ch nhanh?',
          'Nháº­n Ä‘á»ƒ lÃ m gÃ¬: hiá»ƒu váº¥n Ä‘á», Æ°á»›c lÆ°á»£ng chi phÃ­, chá»n hÆ°á»›ng xá»­ lÃ½ hay trÃ¡nh tÄƒng ngÃ¢n sÃ¡ch sai?',
          'Nháº­n báº±ng cÃ¡ch nÃ o: Ä‘iá»n form, chá»n váº¥n Ä‘á», Ä‘áº·t lá»‹ch, nháº­n qua email/Zalo hay Ä‘Æ°á»£c gá»i láº¡i?',
          'Sau Ä‘Ã³ chuyá»‡n gÃ¬ xáº£y ra: ai liÃªn há»‡, trong bao lÃ¢u, trao Ä‘á»•i gÃ¬ vÃ  next step lÃ  gÃ¬?',
        ],
      },
      { type: 'visual', variant: 'offer-clarity-four-question-check' },
      { type: 'heading', text: 'Memo 05 â€” Offer pháº£i khá»›p vá»›i má»©c Ä‘á»™ sáºµn sÃ ng cá»§a khÃ¡ch' },
      {
        type: 'paragraph',
        text: 'KhÃ´ng pháº£i ai vÃ o page cÅ©ng sáºµn sÃ ng nÃ³i chuyá»‡n vá»›i sales. KhÃ¡ch láº¡nh má»›i biáº¿t váº¥n Ä‘á» cÃ³ thá»ƒ phÃ¹ há»£p vá»›i checklist, guide, bÃ i test hoáº·c case study. KhÃ¡ch áº¥m Ä‘ang cÃ¢n nháº¯c cáº§n audit nhanh, demo, bÃ¡o giÃ¡ sÆ¡ bá»™ hoáº·c cuá»™c tÆ° váº¥n cÃ³ pháº¡m vi rÃµ.',
      },
      {
        type: 'paragraph',
        text: 'KhÃ¡ch nÃ³ng Ä‘Ã£ cÃ³ nhu cáº§u cá»¥ thá»ƒ thÆ°á»ng muá»‘n Ä‘áº·t lá»‹ch, gá»i nhanh, nháº­n bÃ¡o giÃ¡ hoáº·c Ä‘Äƒng kÃ½ kháº£o sÃ¡t. Offer sai stage lÃ m conversion rÆ¡i: khÃ¡ch láº¡nh chÆ°a muá»‘n cam káº¿t má»™t cuá»™c gá»i, trong khi khÃ¡ch nÃ³ng khÃ´ng muá»‘n táº£i má»™t tÃ i liá»‡u quÃ¡ chung. KhÃ´ng nÃªn Ã©p má»i traffic vÃ o cÃ¹ng má»™t CTA.',
      },
      { type: 'visual', variant: 'offer-by-customer-readiness' },
      { type: 'heading', text: 'Memo 06 â€” Offer má» lÃ m sales khÃ³ chá»‘t hÆ¡n' },
      {
        type: 'paragraph',
        text: 'Offer áº£nh hÆ°á»Ÿng cáº£ cuá»™c gá»i phÃ­a sau form. Náº¿u page chá»‰ ghi â€œNháº­n tÆ° váº¥nâ€, sales khÃ´ng biáº¿t khÃ¡ch ká»³ vá»ng gÃ¬; khÃ¡ch cÅ©ng khÃ´ng nhá»› rÃµ lÃ½ do Ä‘á»ƒ láº¡i thÃ´ng tin. Cuá»™c gá»i pháº£i báº¯t Ä‘áº§u láº¡i tá»« Ä‘áº§u vÃ  dá»… bá»‹ cáº£m nháº­n nhÆ° má»™t láº§n lÃ m phiá»n.',
      },
      { type: 'heading', text: 'Memo 07 â€” Offer khÃ´ng pháº£i lÃºc nÃ o cÅ©ng lÃ  giáº£m giÃ¡' },
      {
        type: 'paragraph',
        text: 'Vá»›i nhiá»u SME, dá»‹ch vá»¥, B2B hoáº·c sáº£n pháº©m giÃ¡ trá»‹ cao, giáº£m giÃ¡ chÆ°a cháº¯c lÃ  Ä‘á» nghá»‹ phÃ¹ há»£p. Offer cÃ³ thá»ƒ giÃºp khÃ¡ch hiá»ƒu váº¥n Ä‘á», Æ°á»›c lÆ°á»£ng chi phÃ­, trÃ¡nh quyáº¿t Ä‘á»‹nh sai, xem má»™t case gáº§n vá»›i mÃ¬nh hoáº·c biáº¿t nÃªn sá»­a viá»‡c gÃ¬ trÆ°á»›c.',
      },
      { type: 'heading', text: 'Memo 08 â€” Tá»« offer má» Ä‘áº¿n offer rÃµ' },
      {
        type: 'paragraph',
        text: 'â€œNháº­n tÆ° váº¥n miá»…n phÃ­â€ cÃ³ thá»ƒ thÃ nh â€œNháº­n cuá»™c gá»i 15 phÃºt Ä‘á»ƒ xÃ¡c Ä‘á»‹nh má»™t Ä‘áº¿n hai Ä‘iá»ƒm ngháº½n lá»›n nháº¥t trong funnelâ€. â€œNháº­n bÃ¡o giÃ¡â€ cÃ³ thá»ƒ thÃ nh â€œNháº­n bÃ¡o giÃ¡ sÆ¡ bá»™ theo nhu cáº§u, quy mÃ´ vÃ  hiá»‡n tráº¡ng trong vÃ²ng 24 giá»â€.',
      },
      {
        type: 'paragraph',
        text: 'â€œÄÄƒng kÃ½ ngayâ€ cÃ³ thá»ƒ thÃ nh â€œNháº­n checklist tá»± audit landing page trÆ°á»›c khi tÄƒng ngÃ¢n sÃ¡ch adsâ€. â€œLiÃªn há»‡ vá»›i chÃºng tÃ´iâ€ cÃ³ thá»ƒ thÃ nh â€œGá»­i thÃ´ng tin Ä‘á»ƒ Ä‘Æ°á»£c gá»£i Ã½ bÆ°á»›c xá»­ lÃ½ phÃ¹ há»£p trÆ°á»›c khi chi thÃªm ngÃ¢n sÃ¡châ€. Offer rÃµ khÃ´ng nháº¥t thiáº¿t dÃ i; nÃ³ giÃºp ngÆ°á»i Ä‘á»c hÃ¬nh dung giÃ¡ trá»‹ vÃ  bÆ°á»›c tiáº¿p theo.',
      },
      { type: 'visual', variant: 'vague-vs-clear-offer' },
      { type: 'heading', text: 'Memo 09 â€” Form pháº£i tÆ°Æ¡ng xá»©ng vá»›i giÃ¡ trá»‹ offer' },
      {
        type: 'paragraph',
        text: 'Má»™t checklist Ä‘Æ¡n giáº£n cÃ³ thá»ƒ chá»‰ cáº§n tÃªn vÃ  email hoáº·c Zalo. Audit nhanh cÃ³ thá»ƒ há»i thÃªm website, váº¥n Ä‘á» chÃ­nh vÃ  quy mÃ´ phÃ¹ há»£p. BÃ¡o giÃ¡ cÃ³ thá»ƒ cáº§n nhu cáº§u, khu vá»±c, thá»i gian mong muá»‘n hoáº·c Ä‘iá»u kiá»‡n triá»ƒn khai.',
      },
      {
        type: 'placeholder',
        label: 'TEMPLATE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n offer clarity checklist cho landing page.',
      },
      { type: 'heading', text: 'Memo 10 â€” CÃ¹ng má»™t traffic, hai offer khÃ¡c nhau' },
      {
        type: 'paragraph',
        text: 'Ads cÃ¹ng nÃ³i â€œLead nhiá»u nhÆ°ng doanh thu khÃ´ng tÄƒng?â€. Page A dÃ¹ng CTA â€œNháº­n tÆ° váº¥n miá»…n phÃ­â€ nhÆ°ng khÃ´ng giáº£i thÃ­ch tÆ° váº¥n gÃ¬. Form chá»‰ há»i tÃªn vÃ  sá»‘; thank-you page chung chung; sales gá»i há»i khÃ¡ch cáº§n tÆ° váº¥n gÃ¬. Marketing biáº¿t cÃ³ lead nhÆ°ng khÃ´ng biáº¿t lead Ä‘áº¿n vÃ¬ pain nÃ o.',
      },
      {
        type: 'paragraph',
        text: 'Page B má»i â€œNháº­n audit nhanh lead flowâ€, nÃ³i rÃµ sáº½ kiá»ƒm ba Ä‘iá»ƒm rÆ¡i, há»i nguá»“n lead vÃ  váº¥n Ä‘á» chÃ­nh trong form. Thank-you page bÃ¡o ngÆ°á»i phá»¥ trÃ¡ch sáº½ xem thÃ´ng tin rá»“i trao Ä‘á»•i 15 phÃºt; CRM lÆ°u angle. Page B chÆ°a cháº¯c lÃ m CPL tháº¥p hÆ¡n ngay, nhÆ°ng táº¡o ká»³ vá»ng vÃ  context tá»‘t hÆ¡n.',
      },
      {
        type: 'placeholder',
        label: 'CASE PLACEHOLDER',
        text: 'Sau nÃ y chÃ¨n vÃ­ dá»¥ áº©n danh má»™t landing page cÃ³ CTA ná»•i nhÆ°ng offer má» nÃªn lead Ã­t vÃ  sales khÃ³ gá»i.',
      },
      { type: 'heading', text: 'BÃ i há»c thá»±c chiáº¿n' },
      {
        type: 'paragraph',
        text: 'LÃºc má»›i lÃ m landing page, tÃ´i cÅ©ng dá»… bá»‹ kÃ©o vÃ o chuyá»‡n CTA Ä‘áº·t á»Ÿ Ä‘Ã¢u, nÃºt mÃ u gÃ¬, form dÃ i hay ngáº¯n. Nhá»¯ng viá»‡c Ä‘Ã³ váº«n quan trá»ng. NhÆ°ng tÃ´i dáº§n nháº­n ra cÃ¢u há»i sÃ¢u hÆ¡n lÃ  ngÆ°á»i dÃ¹ng Ä‘Ã£ cÃ³ Ä‘á»§ lÃ½ do Ä‘á»ƒ hÃ nh Ä‘á»™ng chÆ°a.',
      },
      {
        type: 'paragraph',
        text: 'Má»™t offer tá»‘t khÃ´ng cáº§n mÃ u mÃ¨. NÃ³ cáº§n rÃµ, tháº­t vÃ  Ä‘Ãºng lÃºc. Äá»«ng há»©a quÃ¡ má»©c, táº¡o kháº©n cáº¥p giáº£ hoáº·c biáº¿n offer thÃ nh cÃ¡ch láº¥y sá»‘ Ä‘iá»‡n thoáº¡i rá»“i dáº«n khÃ¡ch vÃ o má»™t cuá»™c bÃ¡n hÃ ng khÃ¡c ká»³ vá»ng. Offer rÃµ cÃ³ thá»ƒ lá»c bá»›t vÃ i lead tÃ² mÃ², Ä‘á»•i láº¡i context sáº¡ch hÆ¡n vÃ  sales dá»… xá»­ lÃ½ hÆ¡n.',
      },
      { type: 'heading', text: 'Káº¿t â€” CTA lÃ  cá»­a vÃ o, offer lÃ  lÃ½ do bÆ°á»›c qua' },
      {
        type: 'paragraph',
        text: 'Landing page khÃ´ng chuyá»ƒn Ä‘á»•i khÃ´ng pháº£i lÃºc nÃ o cÅ©ng cáº§n thiáº¿t káº¿ láº¡i. ÄÃ´i khi nÃ³ cáº§n má»™t offer rÃµ hÆ¡n. Náº¿u page khÃ´ng nÃ³i khÃ¡ch nháº­n gÃ¬, Ä‘á»ƒ lÃ m gÃ¬, nháº­n báº±ng cÃ¡ch nÃ o vÃ  chuyá»‡n gÃ¬ xáº£y ra sau Ä‘Ã³, CTA váº«n chá»‰ lÃ  má»™t cÃ¡i nÃºt dÃ¹ giao diá»‡n nhÃ¬n á»•n.',
      },
    ],
    cta: 'Náº¿u landing page cÃ³ traffic nhÆ°ng khÃ¡ch Ã­t Ä‘á»ƒ láº¡i thÃ´ng tin, Ä‘á»«ng há»i Ä‘áº§u tiÃªn â€œnÃºt CTA Ä‘Ã£ ná»•i chÆ°a?â€. HÃ£y há»i offer cÃ³ Ä‘á»§ rÃµ, cÃ³ Ä‘Ãºng stage khÃ¡ch, form cÃ³ tÆ°Æ¡ng xá»©ng vá»›i giÃ¡ trá»‹ vÃ  sales cÃ³ Ä‘á»§ context Ä‘á»ƒ tiáº¿p ná»‘i lá»i há»©a sau khi khÃ¡ch submit khÃ´ng?',
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

