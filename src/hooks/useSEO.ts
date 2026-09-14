import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
}

export function useSEO({ title, description, canonicalPath, noindex = false }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;
    
    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // 3. Update Canonical Tag
    const baseUrl = 'https://adhikkadam.com';
    const canonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkCanonical);
    }

    // 4. Update Robots (for noindex pages like 404)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (metaRobots) {
        metaRobots.setAttribute('content', 'noindex, nofollow');
      } else {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        metaRobots.setAttribute('content', 'noindex, nofollow');
        document.head.appendChild(metaRobots);
      }
    } else {
      // If navigating away from a noindex page to an indexed one
      if (metaRobots) {
        metaRobots.remove();
      }
    }

  }, [title, description, canonicalPath, noindex]);
}
