import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noIndex?: boolean;
  articleData?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
}

export default function SEOHead({
  title,
  description,
  keywords = "teen freelancing, student jobs, project-based work, teenage entrepreneurs, company hiring, teen talent, freelance platform india, earn money online teens",
  ogTitle,
  ogDescription,
  ogImage = "https://www.funngro.com/og-image.jpg",
  canonicalUrl,
  structuredData,
  noIndex = false,
  articleData
}: SEOHeadProps) {
  useEffect(() => {
    // Update page title with better formatting
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Update Open Graph meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        const isProperty = selector.includes('property');
        meta.setAttribute(isProperty ? 'property' : 'name', selector.split(isProperty ? 'property="' : 'name="')[1].split('"')[0]);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMetaTag('meta[property="og:title"]', ogTitle || title);
    updateMetaTag('meta[property="og:description"]', ogDescription || description);
    updateMetaTag('meta[property="og:image"]', ogImage);
    updateMetaTag('meta[property="og:url"]', canonicalUrl || window.location.href);
    updateMetaTag('meta[name="twitter:title"]', ogTitle || title);
    updateMetaTag('meta[name="twitter:description"]', ogDescription || description);
    updateMetaTag('meta[name="twitter:image"]', ogImage);
    
    // Article-specific meta tags
    if (articleData) {
      if (articleData.author) {
        updateMetaTag('meta[name="author"]', articleData.author);
      }
      if (articleData.publishedTime) {
        updateMetaTag('meta[property="article:published_time"]', articleData.publishedTime);
      }
      if (articleData.modifiedTime) {
        updateMetaTag('meta[property="article:modified_time"]', articleData.modifiedTime);
      }
      if (articleData.section) {
        updateMetaTag('meta[property="article:section"]', articleData.section);
      }
      if (articleData.tags) {
        articleData.tags.forEach(tag => {
          const tagMeta = document.createElement('meta');
          tagMeta.setAttribute('property', 'article:tag');
          tagMeta.setAttribute('content', tag);
          document.head.appendChild(tagMeta);
        });
      }
    }
    
    // Update canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }
    
    // Add page-specific structured data
    if (structuredData) {
      let pageStructuredDataScript = document.querySelector('script[data-page-structured-data]') as HTMLScriptElement;
      if (!pageStructuredDataScript) {
        pageStructuredDataScript = document.createElement('script');
        pageStructuredDataScript.type = 'application/ld+json';
        pageStructuredDataScript.setAttribute('data-page-structured-data', 'true');
        document.head.appendChild(pageStructuredDataScript);
      }
      pageStructuredDataScript.textContent = JSON.stringify(structuredData);
    }
    
    // Add breadcrumb structured data for better navigation
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.funngro.com"
          }
        ]
      };
      
      pathSegments.forEach((segment, index) => {
        const position = index + 2;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        const item = `https://www.funngro.com/${pathSegments.slice(0, index + 1).join('/')}`;
        
        breadcrumbData.itemListElement.push({
          "@type": "ListItem",
          "position": position,
          "name": name,
          "item": item
        });
      });
      
      let breadcrumbScript = document.querySelector('script[data-breadcrumb]') as HTMLScriptElement;
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.type = 'application/ld+json';
        breadcrumbScript.setAttribute('data-breadcrumb', 'true');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    }
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, structuredData, noIndex, articleData]);
  
  return null;
}
