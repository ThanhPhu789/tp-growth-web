import { ArrowLeft, Clock, Download, FileText, Image, Play, Presentation } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  BreakpointDiagnosticChecklist,
  CampaignContinuityComparison,
  DataLayerBriefChecklist,
  DataLayerGtmRelationshipVisual,
  DashboardComparisonVisual,
  DashboardDecisionFlow,
  FormLeadDataLayerVisual,
  FounderDashboardMockup,
  GtmBeforeAfterVisual,
  GtmSignalRouterVisual,
  LeadPipelineVisual,
  LeadQualityComparison,
  MarketerGtmChecklist,
  PurchaseDataLayerVisual,
  SystemBreakpointsVisual,
  TrackingDiagnosticChecklist,
  TrackingErrorMapVisual,
  TrackingSignalComparisonVisual,
  WeeklyKpiGroupsVisual,
  WeeklyKpiScorecardMockup,
  WeeklyReviewRhythmVisual,
  WrongTrackingDecisionChainVisual,
} from '../components/growth-notes/GrowthNoteVisuals';
import type { BlogContentBlock, BlogImage, BlogPost } from '../data/blogPosts';
import {
  ClientVsServerTrackingVisual,
  ServerSideNotMagicVisual,
  ServerSideReadinessChecklist,
  ServerSideTrackingFlowVisual,
  SmeServerSideDecisionMatrix,
} from '../components/growth-notes/ServerSideTrackingVisuals';
import {
  SameEventDifferentPlatformsVisual,
  TrackingDestinationsVisual,
  TrackingPlatformComparisonVisual,
  TrackingStackChecklist,
} from '../components/growth-notes/TrackingPlatformVisuals';
import {
  EventDefinitionTableVisual,
  EventTrackingChecklist,
  EventTrackingJourneyVisual,
  EventValueLadderVisual,
} from '../components/growth-notes/EventTrackingVisuals';
import {
  DedupBeforeAfterVisual,
  DuplicateConversionProblemVisual,
  EventIdChecklistVisual,
  EventIdDedupFlowVisual,
  EventIdVsTransactionIdVisual,
} from '../components/growth-notes/EventIdVisuals';
import {
  ContactTrackingVisual,
  MinimumTrackingMapVisual,
  TrackingPriorityMatrixVisual,
  WebsiteTrackingChecklistVisual,
} from '../components/growth-notes/MinimumWebsiteTrackingVisuals';
import {
  BrokenVsConnectedLeadFlowVisual,
  DashboardInputChecklistVisual,
  LeadDataJourneyVisual,
  LeadRecordAnatomyVisual,
} from '../components/growth-notes/LeadDataJourneyVisuals';
import {
  BudgetLeakMapVisual,
  MarketingMoneyFlowVisual,
  MarketingSpendChecklistVisual,
  SpendToDecisionLoopVisual,
  TrackingPurposeComparisonVisual,
} from '../components/growth-notes/MarketingMoneyTrackingVisuals';
import {
  ConsentBannerDoDontVisual,
  ConsentTrackingChecklistVisual,
  ConsentTrackingFlowVisual,
  CookieTypesForMarketerVisual,
} from '../components/growth-notes/ConsentTrackingVisuals';
import {
  AdsTrackingGoNoGoVisual,
  PreLaunchTrackingAuditFlowVisual,
  TrackingIssuePriorityVisual,
  TrackingPreflightChecklistVisual,
  TrackingTestFlowVisual,
} from '../components/growth-notes/PreLaunchTrackingVisuals';
import {
  DashboardDecisionLoopVisual,
  FounderDashboardChecklistVisual,
  MetricsToActionsVisual,
  VanityVsDecisionDashboardVisual,
  WeeklyMarketingDashboardMapVisual,
} from '../components/growth-notes/DashboardDecisionVisuals';
import {
  DashboardAudienceViewsVisual,
  DashboardMetricPriorityVisual,
  MinimumDashboardChecklistVisual,
  MinimumMarketingDashboardStructureVisual,
  WeeklyDashboardLayoutVisual,
} from '../components/growth-notes/MinimumDashboardVisuals';
import {
  DashboardReviewMeetingAgendaVisual,
  MetricQuestionActionVisual,
  SignalDiagnosisMatrixVisual,
  WeeklyActionLogChecklistVisual,
  WeeklyDashboardReadingFlowVisual,
} from '../components/growth-notes/WeeklyDashboardReviewVisuals';
import {
  DecisionMetricChecklistVisual,
  MetricDecisionLadderVisual,
  MetricToDecisionMapVisual,
  VanityMetricTrapVisual,
  VanityVsDecisionMetricsVisual,
} from '../components/growth-notes/DecisionMetricsVisuals';
import {
  LeadRevenueDiagnosisMatrixVisual,
  LeadRevenueGapVisual,
  LeadRevenueReviewChecklistVisual,
  LeadToRevenueFunnelVisual,
  QuantityVsQualityDashboardVisual,
} from '../components/growth-notes/LeadRevenueVisuals';
import {
  BottleneckDiagnosisFlowVisual,
  BottleneckFixPriorityVisual,
  BottleneckReviewChecklistVisual,
  MarketingBottleneckMapVisual,
  SignalToBottleneckMatrixVisual,
} from '../components/growth-notes/MarketingBottleneckVisuals';
import {
  CampaignAlignmentFlowVisual,
  CampaignDirectionBriefVisual,
  CampaignDirectionChecklistVisual,
  CampaignDirectionMapVisual,
  PostFirstVsDirectionFirstVisual,
} from '../components/growth-notes/CampaignDirectionVisuals';
import {
  OperatingTaglineChecklistVisual,
  OperatingTaglineRoleVisual,
  TaglineAlignmentMapVisual,
  TaglineVsSloganVisual,
  WeakVsStrongTaglineVisual,
} from '../components/growth-notes/OperatingTaglineVisuals';
import {
  EventCheckinVsFollowupVisual,
  EventDataCaptureMapVisual,
  EventFollowupChecklistVisual,
  OfflineEventDataFlowVisual,
  PostEventFollowupTimelineVisual,
} from '../components/growth-notes/EventFollowupVisuals';
import {
  BriefToExecutionFlowVisual,
  CampaignBriefAnatomyVisual,
  CampaignBriefChecklistVisual,
  CampaignBriefRoleVisual,
  NoBriefMisalignmentVisual,
} from '../components/growth-notes/CampaignBriefVisuals';
import {
  CampaignFormDataCaptureVisual,
  CampaignLandingPageChecklistVisual,
  CampaignLandingPageRoleVisual,
  LandingPageSectionMapVisual,
  MessageContinuityToLandingVisual,
} from '../components/growth-notes/CampaignLandingPageVisuals';
import {
  EventDataSegmentationVisual,
  EventFollowupPriorityMatrixVisual,
  PostEventDataChecklistVisual,
  PostEventDataPipelineVisual,
  RawVsActionableEventDataVisual,
} from '../components/growth-notes/PostEventDataVisuals';
import {
  CampaignConceptAlignmentChecklistVisual,
  ConceptAlignmentSystemVisual,
  ConceptToTouchpointsVisual,
  FragmentedVsAlignedCampaignVisual,
  MessageMismatchLeakVisual,
} from '../components/growth-notes/ConceptAlignmentVisuals';
import {
  ArchitectCampaignChecklistVisual,
  ArchitectCampaignJourneyVisual,
  ArchitectDecisionEcosystemVisual,
  B2BArchitectVsRetailCampaignVisual,
  SolutionKitVsProductPromoVisual,
} from '../components/growth-notes/ArchitectCampaignVisuals';
import {
  CampaignHandoffFlowVisual,
  CampaignTeamAlignmentChecklistVisual,
  CampaignTeamMisalignmentVisual,
  CampaignTeamRoleMapVisual,
  SharedCampaignSourceOfTruthVisual,
} from '../components/growth-notes/CampaignTeamAlignmentVisuals';
import {
  CampaignLaunchChecklistVisual,
  CampaignLaunchFlowVisual,
  CampaignLaunchReadinessMapVisual,
  PreLaunchRiskCheckVisual,
  TrackingDataLaunchCheckVisual,
} from '../components/growth-notes/CampaignLaunchChecklistVisuals';
import {
  LeadFlowToCrmVisual,
  NoCrmVsSimpleCrmVisual,
  SimpleCrmChecklistVisual,
  SimpleCrmFieldsVisual,
  SimpleCrmPurposeVisual,
} from '../components/growth-notes/SimpleCrmVisuals';
import {
  CalledVsClearStatusVisual,
  LeadStatusChecklistVisual,
  LeadStatusPurposeVisual,
  SimpleLeadStatusFlowVisual,
  StatusMeaningActionMapVisual,
} from '../components/growth-notes/LeadStatusVisuals';
import {
  FirstMarketerRoleMapVisual,
  FirstMarketerTimingVisual,
  FirstMarketerVsAgencyVisual,
} from '../components/growth-notes/FirstMarketerVisuals';
import {
  AgencyBriefMinimumVisual,
  AgencyProblemFitVisual,
  AgencyTimingFitVisual,
} from '../components/growth-notes/AgencyDecisionVisuals';
import {
  BuildTeamTimingVisual,
  FirstMarketingPodVisual,
  InhouseExternalOperatingModelVisual,
} from '../components/growth-notes/BuildMarketingTeamVisuals';
import {
  BudgetBottleneckPriorityVisual,
  ThirtyDayBudgetLearningVisual,
  TwentyMillionScenarioSplitVisual,
} from '../components/growth-notes/MarketingBudgetVisuals';
import {
  ContractPromptVsVaguePromptVisual,
  MarketerVibeCodingSafeStartVisual,
  SafeVibeCodingWorkflowVisual,
} from '../components/growth-notes/VibeCodingVisuals';
import {
  AiLandingPageDiffRedFlagsVisual,
  LandingPagePromptGuardrailVisual,
  SafeLandingPageBuildFlowVisual,
} from '../components/growth-notes/AiLandingPageVisuals';
import {
  AIMarketerCoordinatorMapVisual,
  AIMarketingOperatingLoopVisual,
  AITaskVsOperatorSkillVisual,
} from '../components/growth-notes/AiMarketingOperatorVisuals';
import {
  SafeUIPromptLayersVisual,
  UIPromptContractComparisonVisual,
  UIPromptSafetyChecklistVisual,
} from '../components/growth-notes/UiPromptSafetyVisuals';
import {
  BeyondCPLDecisionVisual,
  AdsScaleDecisionMatrixVisual,
  AdsScalePressureMapVisual,
  BadSignalOptimizationLoopVisual,
  BigBudgetAdsSystemMapVisual,
  CheapCPLVsValuableLeadVisual,
  CreativePipelineBankVisual,
  CreativeSignalReadingMapVisual,
  LeadQualityFunnelAfterCPLVisual,
  MicroSignalVsMainConversionVisual,
  PaidAdsSignalChainVisual,
  SalesFeedbackToAdsLoopVisual,
  TestSignalToScaleSystemVisual,
  WinningAdVsCreativePipelineVisual,
} from '../components/growth-notes/PaidAdsScaleVisuals';
import {
  AdPromiseToLandingActionVisual,
  BeautifulPageVsAdReadyPageVisual,
  LandingPageSignalAfterSubmitVisual,
} from '../components/growth-notes/PaidAdsLandingPageVisuals';
import {
  OfferBeyondDiscountVisual,
  OfferReadinessSixQuestionsVisual,
  WeakOfferLeakFunnelVisual,
} from '../components/growth-notes/PaidAdsOfferVisuals';
import {
  RetargetingMessageLadderVisual,
  StageMessagePageCTAVisual,
  TrafficStageMessageMapVisual,
} from '../components/growth-notes/PaidAdsTrafficStageVisuals';
import {
  DemandCreationCaptureSystemVisual,
  IntentMessagePageCTAVisual,
  SearchIntentVsSocialIntentVisual,
} from '../components/growth-notes/PaidAdsChannelIntentVisuals';
import {
  GoodAdsTestAnatomyVisual,
  TestBudgetVsScaleBudgetVisual,
  TestToScaleSignalGateVisual,
} from '../components/growth-notes/PaidAdsBudgetOperatingVisuals';
import {
  AdsStructureBalanceVisual,
  CampaignStructureDecisionMapVisual,
  TestScaleRetargetingStructureVisual,
} from '../components/growth-notes/PaidAdsCampaignStructureVisuals';
import {
  AdsSignalTimeLagVisual,
  DailyCheckVsDecisionReviewVisual,
  PaidAdsReportingCadenceVisual,
} from '../components/growth-notes/PaidAdsReportingCadenceVisuals';
import {
  AttributionGapVsTrackingErrorVisual,
  MultiTouchCustomerJourneyVisual,
  SourceOfTruthDecisionMapVisual,
} from '../components/growth-notes/PaidAdsAttributionVisuals';
import {
  AdsManagerToPNLFlowVisual,
  MediaWinVsBusinessWinVisual,
  PaidAdsUnitEconomicsChecklistVisual,
} from '../components/growth-notes/PaidAdsUnitEconomicsVisuals';
import {
  AdsToSalesLeadHandoffVisual,
  LeadTemperatureAfterSubmitVisual,
  MinimalCRMStatusForPaidAdsVisual,
} from '../components/growth-notes/PaidAdsSpeedToLeadVisuals';
import {
  FiveLayersAfterLeadSubmitVisual,
  LeadToBusinessOutcomeSignalVisual,
  OfflineConversionFeedbackLoopVisual,
} from '../components/growth-notes/PaidAdsOfflineFeedbackVisuals';
import {
  ObjectiveAsAlgorithmBriefVisual,
  ObjectiveReadinessChecklistVisual,
  ShallowObjectiveVsDeepSignalVisual,
} from '../components/growth-notes/PaidAdsObjectiveVisuals';
import {
  AudienceBeyondAdsManagerVisual,
  AudienceSplitOrConsolidateVisual,
  CreativeFilteringMapVisual,
} from '../components/growth-notes/PaidAdsAudienceTargetingVisuals';
import {
  AttributedVsIncrementalConversionVisual,
  DemandCaptureVsDemandCreationVisual,
  SimpleIncrementalityCheckVisual,
} from '../components/growth-notes/PaidAdsIncrementalityVisuals';
import {
  CpaTrapBudgetAllocationVisual,
  FunnelBudgetRoleMapVisual,
  PaidAdsBudgetPortfolioVisual,
} from '../components/growth-notes/PaidAdsFunnelBudgetVisuals';
import {
  AdFatigueDiagnosisMapVisual,
  CreativeRefreshLadderVisual,
  FrequencyContextMapVisual,
} from '../components/growth-notes/PaidAdsFatigueVisuals';
import {
  CampaignChangeLogVisual,
  CampaignLearningLoopVisual,
  SmallVsSignificantEditsVisual,
} from '../components/growth-notes/PaidAdsLearningPhaseVisuals';
import {
  CPLSignalChainVisual,
  MetricBreakdownDiagnosisVisual,
  PaidAdsFixLeverMatrixVisual,
} from '../components/growth-notes/PaidAdsCplDiagnosisVisuals';
import {
  CampaignPostMortemChecklistVisual,
  PostMortemNotBlameMeetingVisual,
  WinLoseLearnMatrixVisual,
} from '../components/growth-notes/PaidAdsPostMortemVisuals';
import {
  MessageMatchChainVisual,
  MessageMatchQAMatrixVisual,
  MessageMismatchSymptomsVisual,
} from '../components/growth-notes/PaidAdsMessageMatchVisuals';
import {
  PostSubmitFunnelChainVisual,
  PostSubmitTrackingQAVisual,
  ThankYouPageJobMapVisual,
} from '../components/growth-notes/PaidAdsThankYouPageVisuals';
import {
  AfterClickExpectationMatchVisual,
  BeautifulVsConversionReadyPageVisual,
  HeroAnatomyConversionContextVisual,
  HeroByTrafficTemperatureVisual,
  HeroThreeQuestionCheckVisual,
  LandingPageFiveQuestionCheckVisual,
  MarketingPromiseLandingProofVisual,
} from '../components/growth-notes/LandingPageConversionVisuals';
import {
  CtaIsNotOfferVisual,
  OfferByReadinessVisual,
  OfferClarityFourQuestionVisual,
  VagueVsClearOfferVisual,
} from '../components/growth-notes/LandingPageOfferVisuals';
import {
  FormSubmitNotFinishLineVisual,
  GoodVsBadFormQuestionVisual,
  LeadStageFromFormVisual,
  MinimumViableLeadContextVisual,
} from '../components/growth-notes/LandingPageFormHandoffVisuals';

type GrowthNoteDetailPageProps = {
  post: BlogPost;
};

type GrowthNoteImageProps = {
  image: BlogImage;
  priority?: boolean;
};

function GrowthNoteImage({ image, priority = false }: GrowthNoteImageProps) {
  const fitClass = image.fit === 'contain' ? 'object-contain bg-brand-bg' : 'object-cover';

  return (
    <figure className={priority ? 'mt-10' : 'my-10'}>
      <div className="overflow-hidden rounded-brand-card border border-brand-border bg-brand-surface shadow-brand-soft">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          className={`h-auto max-h-[520px] w-full ${fitClass}`}
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-4 text-center text-[13px] font-medium leading-[1.65] text-brand-soft-text">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

const placeholderIcons = {
  IMAGE_PLACEHOLDER: Image,
  VIDEO_PLACEHOLDER: Play,
  CASE_PLACEHOLDER: Presentation,
  'TEMPLATE PLACEHOLDER': Download,
  'VIDEO PLACEHOLDER': Play,
  'CASE PLACEHOLDER': Presentation,
  'CODE PLACEHOLDER': FileText,
  'CHECKLIST PLACEHOLDER': Download,
};

function ContentBlock({ block }: { block: BlogContentBlock; key?: string }) {
  if (block.type === 'heading') {
    return (
      <h2 className="mt-12 font-heading text-[27px] font-extrabold leading-[1.25] tracking-[-0.03em] text-brand-primary md:text-[32px]">
        {block.text}
      </h2>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="my-7 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[17px] leading-[1.8] text-brand-secondary">
            <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-highlight" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'code') {
    return (
      <pre className="my-8 max-w-full overflow-x-auto rounded-brand-card border border-brand-border bg-brand-primary p-5 text-[13px] leading-[1.75] text-brand-bg shadow-brand-soft sm:p-6">
        <code>{block.code}</code>
      </pre>
    );
  }

  if (block.type === 'placeholder') {
    const Icon = placeholderIcons[block.label as keyof typeof placeholderIcons] ?? FileText;
    const displayLabel = block.label.replaceAll('_', ' ');
    return (
      <aside className="my-9 rounded-brand-card border border-dashed border-brand-border bg-brand-bg p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-brand-button bg-brand-accent-soft text-brand-accent">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-accent">{displayLabel}</p>
            <p className="mt-2 text-[15px] font-semibold leading-[1.6] text-brand-secondary">{block.text}</p>
          </div>
        </div>
      </aside>
    );
  }

  if (block.type === 'visual') {
    const visuals = {
      'lead-pipeline': LeadPipelineVisual,
      'lead-quality-comparison': LeadQualityComparison,
      'system-breakpoints': SystemBreakpointsVisual,
      'campaign-continuity-comparison': CampaignContinuityComparison,
      'breakpoint-diagnostic-checklist': BreakpointDiagnosticChecklist,
      'dashboard-comparison': DashboardComparisonVisual,
      'founder-dashboard-mockup': FounderDashboardMockup,
      'dashboard-decision-flow': DashboardDecisionFlow,
      'weekly-kpi-groups': WeeklyKpiGroupsVisual,
      'weekly-kpi-scorecard': WeeklyKpiScorecardMockup,
      'weekly-review-rhythm': WeeklyReviewRhythmVisual,
      'gtm-signal-router': GtmSignalRouterVisual,
      'gtm-before-after': GtmBeforeAfterVisual,
      'marketer-gtm-checklist': MarketerGtmChecklist,
      'datalayer-gtm-relationship': DataLayerGtmRelationshipVisual,
      'form-lead-datalayer': FormLeadDataLayerVisual,
      'purchase-datalayer': PurchaseDataLayerVisual,
      'datalayer-brief-checklist': DataLayerBriefChecklist,
      'wrong-tracking-decision-chain': WrongTrackingDecisionChainVisual,
      'tracking-error-map': TrackingErrorMapVisual,
      'tracking-signal-comparison': TrackingSignalComparisonVisual,
      'tracking-diagnostic-checklist': TrackingDiagnosticChecklist,
      'server-side-tracking-flow': ServerSideTrackingFlowVisual,
      'client-vs-server-tracking': ClientVsServerTrackingVisual,
      'server-side-not-magic': ServerSideNotMagicVisual,
      'sme-server-side-decision-matrix': SmeServerSideDecisionMatrix,
      'server-side-readiness-checklist': ServerSideReadinessChecklist,
      'tracking-destinations': TrackingDestinationsVisual,
      'tracking-platform-comparison': TrackingPlatformComparisonVisual,
      'same-event-different-platforms': SameEventDifferentPlatformsVisual,
      'tracking-stack-checklist': TrackingStackChecklist,
      'event-tracking-journey': EventTrackingJourneyVisual,
      'event-value-ladder': EventValueLadderVisual,
      'event-definition-table': EventDefinitionTableVisual,
      'event-tracking-checklist': EventTrackingChecklist,
      'duplicate-conversion-problem': DuplicateConversionProblemVisual,
      'event-id-dedup-flow': EventIdDedupFlowVisual,
      'event-id-vs-transaction-id': EventIdVsTransactionIdVisual,
      'dedup-before-after': DedupBeforeAfterVisual,
      'event-id-checklist': EventIdChecklistVisual,
      'minimum-tracking-map': MinimumTrackingMapVisual,
      'contact-tracking': ContactTrackingVisual,
      'website-tracking-checklist': WebsiteTrackingChecklistVisual,
      'tracking-priority-matrix': TrackingPriorityMatrixVisual,
      'lead-data-journey': LeadDataJourneyVisual,
      'lead-record-anatomy': LeadRecordAnatomyVisual,
      'broken-vs-connected-lead-flow': BrokenVsConnectedLeadFlowVisual,
      'dashboard-input-checklist': DashboardInputChecklistVisual,
      'tracking-purpose-comparison': TrackingPurposeComparisonVisual,
      'marketing-money-flow': MarketingMoneyFlowVisual,
      'budget-leak-map': BudgetLeakMapVisual,
      'spend-to-decision-loop': SpendToDecisionLoopVisual,
      'marketing-spend-checklist': MarketingSpendChecklistVisual,
      'cookie-types-for-marketer': CookieTypesForMarketerVisual,
      'consent-tracking-flow': ConsentTrackingFlowVisual,
      'consent-banner-do-dont': ConsentBannerDoDontVisual,
      'consent-tracking-checklist': ConsentTrackingChecklistVisual,
      'prelaunch-tracking-audit-flow': PreLaunchTrackingAuditFlowVisual,
      'tracking-preflight-checklist': TrackingPreflightChecklistVisual,
      'tracking-test-flow': TrackingTestFlowVisual,
      'tracking-issue-priority': TrackingIssuePriorityVisual,
      'ads-tracking-go-no-go': AdsTrackingGoNoGoVisual,
      'vanity-vs-decision-dashboard': VanityVsDecisionDashboardVisual,
      'weekly-marketing-dashboard-map': WeeklyMarketingDashboardMapVisual,
      'metrics-to-actions': MetricsToActionsVisual,
      'dashboard-decision-loop': DashboardDecisionLoopVisual,
      'founder-dashboard-checklist': FounderDashboardChecklistVisual,
      'minimum-marketing-dashboard-structure': MinimumMarketingDashboardStructureVisual,
      'weekly-dashboard-layout': WeeklyDashboardLayoutVisual,
      'dashboard-audience-views': DashboardAudienceViewsVisual,
      'dashboard-metric-priority': DashboardMetricPriorityVisual,
      'minimum-dashboard-checklist': MinimumDashboardChecklistVisual,
      'weekly-dashboard-reading-flow': WeeklyDashboardReadingFlowVisual,
      'metric-question-action': MetricQuestionActionVisual,
      'signal-diagnosis-matrix': SignalDiagnosisMatrixVisual,
      'dashboard-review-meeting-agenda': DashboardReviewMeetingAgendaVisual,
      'weekly-action-log-checklist': WeeklyActionLogChecklistVisual,
      'vanity-vs-decision-metrics': VanityVsDecisionMetricsVisual,
      'metric-decision-ladder': MetricDecisionLadderVisual,
      'vanity-metric-trap': VanityMetricTrapVisual,
      'metric-to-decision-map': MetricToDecisionMapVisual,
      'decision-metric-checklist': DecisionMetricChecklistVisual,
      'lead-revenue-gap': LeadRevenueGapVisual,
      'lead-to-revenue-funnel': LeadToRevenueFunnelVisual,
      'lead-revenue-diagnosis-matrix': LeadRevenueDiagnosisMatrixVisual,
      'quantity-vs-quality-dashboard': QuantityVsQualityDashboardVisual,
      'lead-revenue-review-checklist': LeadRevenueReviewChecklistVisual,
      'marketing-bottleneck-map': MarketingBottleneckMapVisual,
      'bottleneck-diagnosis-flow': BottleneckDiagnosisFlowVisual,
      'signal-to-bottleneck-matrix': SignalToBottleneckMatrixVisual,
      'bottleneck-fix-priority': BottleneckFixPriorityVisual,
      'bottleneck-review-checklist': BottleneckReviewChecklistVisual,
      'post-first-vs-direction-first': PostFirstVsDirectionFirstVisual,
      'campaign-direction-map': CampaignDirectionMapVisual,
      'campaign-direction-brief': CampaignDirectionBriefVisual,
      'campaign-alignment-flow': CampaignAlignmentFlowVisual,
      'campaign-direction-checklist': CampaignDirectionChecklistVisual,
      'tagline-vs-slogan': TaglineVsSloganVisual,
      'operating-tagline-role': OperatingTaglineRoleVisual,
      'weak-vs-strong-tagline': WeakVsStrongTaglineVisual,
      'tagline-alignment-map': TaglineAlignmentMapVisual,
      'operating-tagline-checklist': OperatingTaglineChecklistVisual,
      'event-checkin-vs-followup': EventCheckinVsFollowupVisual,
      'offline-event-data-flow': OfflineEventDataFlowVisual,
      'event-data-capture-map': EventDataCaptureMapVisual,
      'post-event-followup-timeline': PostEventFollowupTimelineVisual,
      'event-followup-checklist': EventFollowupChecklistVisual,
      'campaign-brief-role': CampaignBriefRoleVisual,
      'no-brief-misalignment': NoBriefMisalignmentVisual,
      'campaign-brief-anatomy': CampaignBriefAnatomyVisual,
      'brief-to-execution-flow': BriefToExecutionFlowVisual,
      'campaign-brief-checklist': CampaignBriefChecklistVisual,
      'campaign-landing-page-role': CampaignLandingPageRoleVisual,
      'landing-page-section-map': LandingPageSectionMapVisual,
      'message-continuity-to-landing': MessageContinuityToLandingVisual,
      'campaign-form-data-capture': CampaignFormDataCaptureVisual,
      'campaign-landing-page-checklist': CampaignLandingPageChecklistVisual,
      'raw-vs-actionable-event-data': RawVsActionableEventDataVisual,
      'post-event-data-pipeline': PostEventDataPipelineVisual,
      'event-data-segmentation': EventDataSegmentationVisual,
      'event-followup-priority-matrix': EventFollowupPriorityMatrixVisual,
      'post-event-data-checklist': PostEventDataChecklistVisual,
      'concept-alignment-system': ConceptAlignmentSystemVisual,
      'fragmented-vs-aligned-campaign': FragmentedVsAlignedCampaignVisual,
      'concept-to-touchpoints': ConceptToTouchpointsVisual,
      'message-mismatch-leak': MessageMismatchLeakVisual,
      'campaign-concept-alignment-checklist': CampaignConceptAlignmentChecklistVisual,
      'b2b-architect-vs-retail-campaign': B2BArchitectVsRetailCampaignVisual,
      'solution-kit-vs-product-promo': SolutionKitVsProductPromoVisual,
      'architect-decision-ecosystem': ArchitectDecisionEcosystemVisual,
      'architect-campaign-journey': ArchitectCampaignJourneyVisual,
      'architect-campaign-checklist': ArchitectCampaignChecklistVisual,
      'campaign-team-misalignment': CampaignTeamMisalignmentVisual,
      'shared-campaign-source-of-truth': SharedCampaignSourceOfTruthVisual,
      'campaign-team-role-map': CampaignTeamRoleMapVisual,
      'campaign-handoff-flow': CampaignHandoffFlowVisual,
      'campaign-team-alignment-checklist': CampaignTeamAlignmentChecklistVisual,
      'campaign-launch-readiness-map': CampaignLaunchReadinessMapVisual,
      'campaign-launch-flow': CampaignLaunchFlowVisual,
      'tracking-data-launch-check': TrackingDataLaunchCheckVisual,
      'pre-launch-risk-check': PreLaunchRiskCheckVisual,
      'campaign-launch-checklist': CampaignLaunchChecklistVisual,
      'simple-crm-purpose': SimpleCrmPurposeVisual,
      'no-crm-vs-simple-crm': NoCrmVsSimpleCrmVisual,
      'lead-flow-to-crm': LeadFlowToCrmVisual,
      'simple-crm-fields': SimpleCrmFieldsVisual,
      'simple-crm-checklist': SimpleCrmChecklistVisual,
      'lead-status-purpose': LeadStatusPurposeVisual,
      'called-vs-clear-status': CalledVsClearStatusVisual,
      'simple-lead-status-flow': SimpleLeadStatusFlowVisual,
      'status-meaning-action-map': StatusMeaningActionMapVisual,
      'lead-status-checklist': LeadStatusChecklistVisual,
      'first-marketer-timing': FirstMarketerTimingVisual,
      'first-marketer-role-map': FirstMarketerRoleMapVisual,
      'first-marketer-vs-agency': FirstMarketerVsAgencyVisual,
      'agency-timing-fit': AgencyTimingFitVisual,
      'agency-problem-fit': AgencyProblemFitVisual,
      'agency-brief-minimum': AgencyBriefMinimumVisual,
      'build-team-timing': BuildTeamTimingVisual,
      'first-marketing-pod': FirstMarketingPodVisual,
      'inhouse-external-operating-model': InhouseExternalOperatingModelVisual,
      'budget-bottleneck-priority': BudgetBottleneckPriorityVisual,
      'twenty-million-scenario-split': TwentyMillionScenarioSplitVisual,
      'thirty-day-budget-learning': ThirtyDayBudgetLearningVisual,
      'marketer-vibe-coding-safe-start': MarketerVibeCodingSafeStartVisual,
      'contract-prompt-vs-vague-prompt': ContractPromptVsVaguePromptVisual,
      'safe-vibe-coding-workflow': SafeVibeCodingWorkflowVisual,
      'landing-page-prompt-guardrail': LandingPagePromptGuardrailVisual,
      'safe-landing-page-build-flow': SafeLandingPageBuildFlowVisual,
      'ai-landing-page-diff-red-flags': AiLandingPageDiffRedFlagsVisual,
      'ai-task-vs-operator-skill': AITaskVsOperatorSkillVisual,
      'ai-marketer-coordinator-map': AIMarketerCoordinatorMapVisual,
      'ai-marketing-operating-loop': AIMarketingOperatingLoopVisual,
      'ui-prompt-contract-comparison': UIPromptContractComparisonVisual,
      'safe-ui-prompt-layers': SafeUIPromptLayersVisual,
      'ui-prompt-safety-checklist': UIPromptSafetyChecklistVisual,
      'big-budget-ads-system-map': BigBudgetAdsSystemMapVisual,
      'winning-ad-vs-creative-pipeline': WinningAdVsCreativePipelineVisual,
      'beyond-cpl-decision': BeyondCPLDecisionVisual,
      'creative-pipeline-banks': CreativePipelineBankVisual,
      'creative-signal-reading-map': CreativeSignalReadingMapVisual,
      'cheap-cpl-vs-valuable-lead': CheapCPLVsValuableLeadVisual,
      'lead-quality-funnel-after-cpl': LeadQualityFunnelAfterCPLVisual,
      'sales-feedback-to-ads-loop': SalesFeedbackToAdsLoopVisual,
      'ads-scale-pressure-map': AdsScalePressureMapVisual,
      'ads-scale-decision-matrix': AdsScaleDecisionMatrixVisual,
      'test-signal-to-scale-system': TestSignalToScaleSystemVisual,
      'paid-ads-signal-chain': PaidAdsSignalChainVisual,
      'micro-signal-vs-main-conversion': MicroSignalVsMainConversionVisual,
      'bad-signal-optimization-loop': BadSignalOptimizationLoopVisual,
      'ad-promise-to-landing-action': AdPromiseToLandingActionVisual,
      'beautiful-page-vs-ad-ready-page': BeautifulPageVsAdReadyPageVisual,
      'landing-page-signal-after-submit': LandingPageSignalAfterSubmitVisual,
      'offer-beyond-discount': OfferBeyondDiscountVisual,
      'weak-offer-leak-funnel': WeakOfferLeakFunnelVisual,
      'offer-readiness-six-questions': OfferReadinessSixQuestionsVisual,
      'traffic-stage-message-map': TrafficStageMessageMapVisual,
      'retargeting-message-ladder': RetargetingMessageLadderVisual,
      'stage-message-page-cta': StageMessagePageCTAVisual,
      'search-intent-vs-social-intent': SearchIntentVsSocialIntentVisual,
      'intent-message-page-cta': IntentMessagePageCTAVisual,
      'demand-creation-capture-system': DemandCreationCaptureSystemVisual,
      'test-budget-vs-scale-budget': TestBudgetVsScaleBudgetVisual,
      'good-ads-test-anatomy': GoodAdsTestAnatomyVisual,
      'test-to-scale-signal-gate': TestToScaleSignalGateVisual,
      'campaign-structure-decision-map': CampaignStructureDecisionMapVisual,
      'ads-structure-balance': AdsStructureBalanceVisual,
      'test-scale-retargeting-structure': TestScaleRetargetingStructureVisual,
      'daily-check-vs-decision-review': DailyCheckVsDecisionReviewVisual,
      'ads-signal-time-lag': AdsSignalTimeLagVisual,
      'paid-ads-reporting-cadence': PaidAdsReportingCadenceVisual,
      'multi-touch-customer-journey': MultiTouchCustomerJourneyVisual,
      'source-of-truth-decision-map': SourceOfTruthDecisionMapVisual,
      'attribution-gap-vs-tracking-error': AttributionGapVsTrackingErrorVisual,
      'media-win-vs-business-win': MediaWinVsBusinessWinVisual,
      'ads-manager-to-pnl-flow': AdsManagerToPNLFlowVisual,
      'paid-ads-unit-economics-checklist': PaidAdsUnitEconomicsChecklistVisual,
      'lead-temperature-after-submit': LeadTemperatureAfterSubmitVisual,
      'ads-to-sales-lead-handoff': AdsToSalesLeadHandoffVisual,
      'minimal-crm-status-for-paid-ads': MinimalCRMStatusForPaidAdsVisual,
      'lead-to-business-outcome-signal': LeadToBusinessOutcomeSignalVisual,
      'offline-conversion-feedback-loop': OfflineConversionFeedbackLoopVisual,
      'five-layers-after-lead-submit': FiveLayersAfterLeadSubmitVisual,
      'objective-as-algorithm-brief': ObjectiveAsAlgorithmBriefVisual,
      'shallow-objective-vs-deep-signal': ShallowObjectiveVsDeepSignalVisual,
      'objective-readiness-checklist': ObjectiveReadinessChecklistVisual,
      'audience-beyond-ads-manager': AudienceBeyondAdsManagerVisual,
      'creative-filtering-map': CreativeFilteringMapVisual,
      'audience-split-or-consolidate': AudienceSplitOrConsolidateVisual,
      'attributed-vs-incremental-conversion': AttributedVsIncrementalConversionVisual,
      'demand-capture-vs-demand-creation': DemandCaptureVsDemandCreationVisual,
      'simple-incrementality-check': SimpleIncrementalityCheckVisual,
      'paid-ads-budget-portfolio': PaidAdsBudgetPortfolioVisual,
      'cpa-trap-budget-allocation': CpaTrapBudgetAllocationVisual,
      'funnel-budget-role-map': FunnelBudgetRoleMapVisual,
      'frequency-context-map': FrequencyContextMapVisual,
      'ad-fatigue-diagnosis-map': AdFatigueDiagnosisMapVisual,
      'creative-refresh-ladder': CreativeRefreshLadderVisual,
      'campaign-learning-loop': CampaignLearningLoopVisual,
      'small-vs-significant-edits': SmallVsSignificantEditsVisual,
      'campaign-change-log': CampaignChangeLogVisual,
      'cpl-signal-chain': CPLSignalChainVisual,
      'metric-breakdown-diagnosis': MetricBreakdownDiagnosisVisual,
      'paid-ads-fix-lever-matrix': PaidAdsFixLeverMatrixVisual,
      'postmortem-not-blame-meeting': PostMortemNotBlameMeetingVisual,
      'win-lose-learn-matrix': WinLoseLearnMatrixVisual,
      'campaign-postmortem-checklist': CampaignPostMortemChecklistVisual,
      'message-match-chain': MessageMatchChainVisual,
      'message-mismatch-symptoms': MessageMismatchSymptomsVisual,
      'message-match-qa-matrix': MessageMatchQAMatrixVisual,
      'post-submit-funnel-chain': PostSubmitFunnelChainVisual,
      'thank-you-page-job-map': ThankYouPageJobMapVisual,
      'post-submit-tracking-qa': PostSubmitTrackingQAVisual,
      'marketing-promise-landing-proof': MarketingPromiseLandingProofVisual,
      'beautiful-vs-conversion-ready-page': BeautifulVsConversionReadyPageVisual,
      'landing-page-five-question-check': LandingPageFiveQuestionCheckVisual,
      'after-click-expectation-match': AfterClickExpectationMatchVisual,
      'hero-three-question-check': HeroThreeQuestionCheckVisual,
      'hero-by-traffic-temperature': HeroByTrafficTemperatureVisual,
      'hero-anatomy-conversion-context': HeroAnatomyConversionContextVisual,
      'cta-is-not-offer': CtaIsNotOfferVisual,
      'offer-clarity-four-question-check': OfferClarityFourQuestionVisual,
      'offer-by-customer-readiness': OfferByReadinessVisual,
      'vague-vs-clear-offer': VagueVsClearOfferVisual,
      'form-submit-not-finish-line': FormSubmitNotFinishLineVisual,
      'good-vs-bad-form-question': GoodVsBadFormQuestionVisual,
      'lead-stage-from-form': LeadStageFromFormVisual,
      'minimum-viable-lead-context': MinimumViableLeadContextVisual,
    };
    const Visual = visuals[block.variant];

    return <Visual />;
  }

  return <p className="mt-6 text-[17px] leading-[1.85] text-brand-secondary">{block.text}</p>;
}

export default function GrowthNoteDetailPage({ post }: GrowthNoteDetailPageProps) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary">
      <Header />
      <main>
        <article>
          <header className="border-b border-brand-border bg-brand-surface py-14 md:py-20">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <a
                  href="/growth-notes"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-accent transition-colors hover:text-brand-highlight"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Growth Notes
                </a>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-[12px] font-bold text-brand-soft-text">
                  <span className="rounded-full bg-brand-accent-soft px-3 py-1.5 text-brand-accent">{post.category}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>
                <h1 className="mt-6 max-w-4xl font-heading text-[38px] font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-[48px] md:text-[58px]">
                  {post.title}
                </h1>
                <p className="mt-7 max-w-3xl text-[18px] font-medium leading-[1.75] text-brand-secondary md:text-[20px]">
                  {post.excerpt}
                </p>
                {post.media?.coverImage ? <GrowthNoteImage image={post.media.coverImage} priority /> : null}
              </div>
            </div>
          </header>

          <div className="py-14 md:py-20">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">
                {post.content.map((block, index) => {
                  const inlineImage =
                    block.type === 'heading'
                      ? post.media?.inlineImages?.find((image) => image.afterHeading === block.text)
                      : undefined;

                  return (
                    <div key={`${block.type}-${index}`}>
                      <ContentBlock block={block} />
                      {inlineImage ? <GrowthNoteImage image={inlineImage} /> : null}
                    </div>
                  );
                })}

                <aside className="mt-14 rounded-brand-card border border-brand-border bg-brand-surface p-7 shadow-brand-soft md:p-9">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-highlight">Gợi ý để bắt đầu</p>
                  <p className="mt-4 text-[17px] font-semibold leading-[1.75] text-brand-primary">{post.cta}</p>
                </aside>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

