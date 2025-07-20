import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title,
  description,
  keywords = "teen freelancing, student jobs, project-based work, teenage entrepreneurs, company hiring, teen talent",
  ogTitle,
  ogDescription,
  ogImage = "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg",
  canonicalUrl
}: SEOHeadProps) {
  useEffect(() => {
    // Update page title
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
    
    // Update Open Graph meta tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', ogTitle || title);
    }
    
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', ogDescription || description);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    // Update canonical URL if provided
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }
    
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Funngro",
      "url": "https://www.funngro.com",
      "logo": "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg",
      "description": "Funngro connects talented teenagers with real companies for project-based work",
      "sameAs": [
        "https://www.linkedin.com/company/funngro",
        "https://twitter.com/funngro"
      ]
    };
    
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl]);
  
  return null;
}
