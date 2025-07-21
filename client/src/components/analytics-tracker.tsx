import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Analytics and tracking component for SEO insights
 */
export default function AnalyticsTracker() {
  const [location] = useLocation();

  useEffect(() => {
    // Track page views for SEO analytics
    const trackPageView = (path: string) => {
      // Google Analytics 4 tracking (when implemented)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: path,
        });
      }

      // Custom analytics for SEO metrics
      const analyticsData = {
        page: path,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        loadTime: performance.timing ? 
          performance.timing.loadEventEnd - performance.timing.navigationStart : null
      };

      // Log for development (replace with actual analytics service)
      console.log('Page Analytics:', analyticsData);
    };

    // Track Core Web Vitals for SEO
    const trackCoreWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Track scroll depth for engagement metrics
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const checkScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
        }
      };

      window.addEventListener('scroll', checkScroll, { passive: true });
      
      // Track when user leaves page
      window.addEventListener('beforeunload', () => {
        console.log('Max scroll depth:', maxScroll + '%');
      });
    };

    // Initialize tracking
    trackPageView(location);
    if ('PerformanceObserver' in window) {
      trackCoreWebVitals();
    }
    trackScrollDepth();

    // Track time on page
    const startTime = Date.now();
    return () => {
      const timeOnPage = Date.now() - startTime;
      console.log('Time on page:', timeOnPage / 1000, 'seconds');
    };

  }, [location]);

  // Track interactions for engagement metrics
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        console.log('User interaction:', {
          element: target.tagName,
          text: target.textContent?.slice(0, 50),
          timestamp: new Date().toISOString()
        });
      }
    };

    document.addEventListener('click', trackInteraction);
    return () => document.removeEventListener('click', trackInteraction);
  }, []);

  return null;
}