import { useEffect } from "react";

/**
 * Performance optimization component for better SEO and user experience
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Lazy load images with intersection observer
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      lazyImages.forEach(img => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
      });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImages = [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
      ];

      heroImages.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('src') || '';
        newScript.async = true;
        document.body.appendChild(newScript);
      });
    };

    // Add performance marks for monitoring
    if ('performance' in window && 'mark' in performance) {
      performance.mark('component-mount-start');
    }

    // Run optimizations
    preloadCriticalResources();
    deferNonCriticalJS();

    // Performance mark end
    if ('performance' in window && 'mark' in performance) {
      performance.mark('component-mount-end');
    }

    // Add service worker for caching (basic setup)
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch(() => console.log('Service Worker registration failed'));
    }

  }, []);

  return null;
}