// Google Ads gtag types
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    trackFormSubmit?: () => void;
    trackCallClick?: () => void;
    trackWhatsAppClick?: () => void;
  }
}

export {}
