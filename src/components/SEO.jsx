import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  image = "/profile.png", 
  url = "https://guptasanjay.com.np",
  type = "website",
  keywords = ""
}) => {
  const siteTitle = title ? `${title} | Sanjay Gupta` : "Sanjay Gupta - Backend Developer | Full-Stack Engineer | Nepal";
  const siteDescription = description || "3rd year Computer Science Engineering student from Nepal specializing in backend development, REST APIs, and scalable web applications. Open to opportunities.";
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Sanjay Gupta" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sanjay Gupta Portfolio" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="NP" />
      <meta name="geo.placename" content="Nepal" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "Person",
          "name": "Sanjay Gupta",
          "jobTitle": "Backend Developer & Full-Stack Engineer",
          "description": siteDescription,
          "url": url,
          "image": image,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Nepal"
          },
          "sameAs": [
            "https://www.linkedin.com/in/sanjay-gupta-400849322/",
            "https://github.com/Sanjaycodes019",
            "https://leetcode.com/Sanjaycodes09/"
          ],
          "knowsAbout": ["Backend Development", "Node.js", "React", "REST APIs", "MongoDB", "Data Structures", "Algorithms"],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Chitkara University"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
