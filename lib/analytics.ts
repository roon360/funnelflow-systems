export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;
  (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
    'event',
    name,
    params
  );
  (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.(
    'track',
    'Lead',
    params
  );
}

export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', { source });
}

export function trackCTAClick(button: string, source: string) {
  trackEvent('cta_click', { button, source });
}

export function trackLeadSubmit(formName: string) {
  trackEvent('lead_submit', { form_name: formName });
}
