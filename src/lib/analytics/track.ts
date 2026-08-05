import type { AnalyticsDataLayerEvent, AnalyticsEventInput } from './types';

const PII_PARAMETER_NAMES = new Set([
  'email',
  'email_address',
  'first_name',
  'last_name',
  'message',
  'name',
  'phone',
  'phone_number',
]);

function getPagePath() {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}
function isValidEvent(event: AnalyticsDataLayerEvent) {
  const invalidKey = Object.keys(event).find((key) => PII_PARAMETER_NAMES.has(key));

  if (invalidKey) {
    return `PII parameter "${invalidKey}" is not allowed`;
  }

  if (!/^[a-z][a-z0-9_]*$/.test(event.event)) {
    return `Event name "${event.event}" must be lowercase snake_case`;
  }

  if (event.event_version !== 1 || !event.page_path.startsWith('/')) {
    return 'Invalid event_version or page_path';
  }

  return null;
}

export function trackAnalyticsEvent(input: AnalyticsEventInput) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const event: AnalyticsDataLayerEvent = {
      ...input,
      page_path: getPagePath(),
      ...(document.title ? { page_title: document.title } : {}),
    };
    const validationError = isValidEvent(event);

    if (validationError) {
      if (import.meta.env.DEV) {
        console.warn(`[analytics] ${validationError}`, event);
      }
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('[analytics] Event was not sent', error);
    }
  }
}
