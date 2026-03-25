/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Safely fire a GA4 event.
 * gtag is loaded globally from layout.tsx — this wrapper guards against SSR and
 * cases where the script hasn't loaded yet.
 */
export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', eventName, params)
  }
}

// --- Named events (keeps call sites clean) ---

export const track = {
  whatsapp: (source: 'floating_button' | 'contact_section' | 'contact_cta' | 'header') =>
    trackEvent('whatsapp_click', { source }),

  phone: () => trackEvent('phone_click'),

  portfolio: (category: string) =>
    trackEvent('portfolio_tab_click', { category }),

  social: (platform: 'instagram' | 'facebook') =>
    trackEvent('social_click', { platform }),
}
