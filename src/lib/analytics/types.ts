export const ANALYTICS_EVENT_VERSION = 1 as const;

export type AnalyticsPlacement =
  | 'navbar'
  | 'mobile_menu'
  | 'hero'
  | 'body'
  | 'card'
  | 'cta_section'
  | 'footer'
  | 'mobile_sticky';

export type ContactMethod = 'zalo' | 'phone' | 'email' | 'facebook' | 'messenger';

type EventBase = {
  event_version: typeof ANALYTICS_EVENT_VERSION;
  placement: AnalyticsPlacement;
  component_name?: string;
};

export type ContactClickEvent = EventBase & {
  event: 'contact_click';
  contact_method: ContactMethod;
  destination_type: 'contact_channel';
};

export type PrimaryCtaClickEvent = EventBase & {
  event: 'primary_cta_click';
  cta_name: string;
  destination_path?: string;
  destination_type: 'internal_route' | 'external_url' | 'page_anchor';
};

export type ContentClickEvent = EventBase & {
  event: 'content_click';
  content_type: 'growth_note' | 'case_study' | 'growth_system_framework' | 'content_hub';
  content_id: string;
  content_title: string;
};

export type AnalyticsEventInput = ContactClickEvent | PrimaryCtaClickEvent | ContentClickEvent;

export type AnalyticsDataLayerEvent = AnalyticsEventInput & {
  page_path: string;
  page_title?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
