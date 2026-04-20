# SEO Action Plan — Built to Rank
**Generated:** 2026-04-20 | **Score at audit:** 28/100 | **Target:** 75/100

---

## 🔴 CRITICAL — Fix Today (Unblocks all SEO)

### 1. Fix Netlify deployment (2 min)
The entire site 404s because `netlify.toml` publishes `.next/` but the static build goes to `out/`.

```toml
# netlify.toml — change to:
[build]
  command = "npm run build"
  publish = "out"

# DELETE the [[plugins]] block for @netlify/plugin-nextjs
```

Then redeploy. Every page will work.

---

### 2. Fix the contact form (5 min)
`app/components/Contact.tsx` line 29 has `"REPLACE_WITH_WEB3FORMS_KEY"`.
1. Go to web3forms.com → create free account → get your access key
2. Replace the placeholder with your real key

---

### 3. Add robots.txt (3 min)
Create `app/robots.ts`:
```ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://builttorank.com/sitemap.xml",
  };
}
```

---

### 4. Add sitemap.xml (5 min)
Create `app/sitemap.ts`:
```ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://builttorank.com/", lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: "https://builttorank.com/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://builttorank.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://builttorank.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://builttorank.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];
}
```

---

### 5. Add schema markup (15 min)
Add to `app/layout.tsx` inside `<head>` via a `<Script>` component:

In `layout.tsx`, add this to the `<head>` section before `</head>`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "Built to Rank",
      "description": "Custom web design and SEO for trades businesses across the GTA, Ontario.",
      "url": "https://builttorank.com",
      "telephone": "+16476578525",
      "email": "info@builttorank.com",
      "founder": { "@type": "Person", "name": "Arjan Dhillon" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brampton",
        "addressRegion": "ON",
        "postalCode": "L6P",
        "addressCountry": "CA"
      },
      "areaServed": [
        "Brampton", "Mississauga", "Caledon", "Bolton",
        "Peel Region", "Greater Toronto Area"
      ],
      "serviceType": ["Web Design", "Web Development", "SEO", "Local SEO"]
    })
  }}
/>
```

---

## 🟠 HIGH — Fix This Week

### 6. Add og:image (30 min)
1. Create a 1200×630px image (`/public/og-image.jpg`) — can be a simple dark card with your logo/tagline
2. Add to `app/layout.tsx` metadata:
```ts
openGraph: {
  // ... existing fields
  images: [{ url: "https://builttorank.com/og-image.jpg", width: 1200, height: 630 }],
  url: "https://builttorank.com",
},
twitter: {
  card: "summary_large_image",
  images: ["https://builttorank.com/og-image.jpg"],
},
```

---

### 7. Fix testimonials (10 min)
Remove Mike Torres and Jason Lee (unverifiable). Replace with one of:

**Option A:** Single real quote from Peel Excavation client  
**Option B:** Display only the Peel Excavation testimonial + a "First clients launch April 2026" note  
**Option C:** Remove testimonials section until you have real ones — show a "what clients can expect" section instead

---

### 8. Add hero video poster frame (5 min)
In `app/components/Hero.tsx` line 37, add `poster="/hero-poster.jpg"`:
```tsx
<video
  autoPlay muted loop playsInline
  poster="/hero-poster.jpg"
  aria-hidden="true"
  ...
```
Export a single JPEG frame from the video and put it in `/public/hero-poster.jpg`.

---

### 9. Add canonical URLs (5 min)
In `app/layout.tsx`:
```ts
export const metadata: Metadata = {
  alternates: { canonical: "https://builttorank.com/" },
  // ...
};
```
Add page-specific canonicals in each sub-page's `metadata` export.

---

### 10. Convert portfolio image to WebP (10 min)
```bash
cwebp public/peel-excavation-preview.png -o public/peel-excavation-preview.webp
```
Update `Portfolio.tsx` to use the `.webp` file and use Next.js `<Image>` component.

---

## 🟡 MEDIUM — Fix This Month

### 11. Replace tech-speak in portfolio copy
In `app/components/Portfolio.tsx` around line 179, change the checklist items:
- "GSAP Scroll Animations" → "Smooth scroll animations"
- "Framer Motion Entrances" → "Professional page animations"  
- "Contact Form + Nodemailer" → "Contact form wired to your inbox"
- Remove or translate other tech terms

### 12. Add FAQ section
Add a new FAQ component with 5-6 questions:
- "How much does a trades website cost?"
- "How long does it take?"
- "Do I need to know anything about tech?"
- "Will it actually rank on Google?"
- "What's included in the monthly retainer?"

Add `FAQPage` schema to match.

### 13. Add security headers to netlify.toml
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 14. Handle the empty blog
Either:
- Write 2 posts targeting "web design [city]" + "local SEO for trades"
- Or add `noindex` to the blog route until it has content:  
  ```ts
  export const metadata = { robots: { index: false } };
  ```

---

## 🟢 LOW — Backlog

### 15. Create Google Business Profile
- business.google.com
- Category: "Web Designer" or "Internet Marketing Service"
- Add phone, email, service areas (Brampton, Mississauga, Caledon)
- Post the Peel Excavation project as a photo

### 16. Get on Homestars
- Dominant review platform for Canadian trades
- Your target clients (plumbers, roofers) are heavy users
- Creating a presence here signals authority to Google for local searches

### 17. Add llms.txt
Create `/public/llms.txt`:
```
# Built to Rank
> Web design and local SEO for trades businesses in the GTA, Ontario, Canada.
> Founder: Arjan Dhillon
> Services: Website Design, SEO Setup, Monthly Retainer
> Location: Brampton, Ontario | Serving: Peel Region, Greater Toronto Area
> Contact: info@builttorank.com | 647-657-8525
```

---

## Estimated Score After Fixes

| Phase | Actions | Projected Score |
|---|---|---|
| Current | — | 28/100 |
| After Critical (items 1-5) | Deployment + robots + sitemap + schema | ~58/100 |
| After High (items 6-10) | OG image + testimonials + poster + canonical | ~68/100 |
| After Medium (items 11-14) | FAQ + copy fixes + security headers | ~75/100 |
| After Low (items 15-17) | GBP + citations + llms.txt | ~82/100 |

---

*Action plan generated by Claude SEO Agent — Built to Rank, April 2026*
