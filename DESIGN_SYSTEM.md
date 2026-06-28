# SYSTEM DESIGN DNA — TP GROWTH (DESIGN SYSTEM SPECIFICATION)

This document outlines the official visual patterns, styling tokens, and design philosophy of **TP Growth (Marketing Advisor for SME)**. It is structured for developers and can be fed directly to LLMs, v0, Cursor, Lovable, Bolt, or other AI engines to replicate these identical visual aesthetics across secondary pages or platforms.

---

## 1. BRAND PERSONA & VISUAL IDENTITY
*   **Vibe Statement:** *Strategic Operator, Calm Partner, Premium Advisory, System Thinking.*
*   **Aesthetic Influences:** Stripe, Linear, Vercel, Notion.
*   **Aesthetic Rule:** Zero "AI-slop", no low-quality futuristic neon gradients, no margin noise, no unprompted telemetry/status indicators. High-contrast premium layout with generous white space and extreme typographic density contrast.

---

## 2. COLOR PALETTE (CSS VARIABLES)

The color palette is built around crisp corporate stability (Blue) and sharp selective focus on strategic action (Orange). All values are mapped to custom CSS utility keys.

```css
@theme {
  /* Slate/Sky Off-white Canvas */
  --color-brand-bg: #F8FAFC;
  --color-brand-surface: #FFFFFF;
  --color-brand-section: #F8FAFC;
  --color-brand-border: #E2E8F0;

  /* Deep Slate Typography (No pure #000000) */
  --color-brand-primary: #0F172A;     /* Slate 900 - High Authority Text */
  --color-brand-secondary: #334155;   /* Slate 700 - Body & Description */
  --color-brand-soft-text: #64748B;   /* Slate 500 - Meta details, helper tags */

  /* Executive Cobalt Blue (Trust, Systems, Growth) */
  --color-brand-accent: #1D4ED8;      /* Blue 700 - High-contrast systems */
  --color-brand-accent-soft: #EFF6FF; /* Blue 50 - Alert banners, backdrop cards */

  /* Premium Orange-Red (High selective focus, CTA, Highlights) */
  --color-brand-highlight: #EA580C;      /* Orange 600 - All Primary Conversion CTAs */
  --color-brand-highlight-soft: #FFF7ED; /* Orange 50 - Card highlights, focus rings */
}
```

---

## 3. TYPOGRAPHY SYSTEM

Typography is the core of this system. It relies heavily on extreme contrast between display headings (ultra-bold, tight tracking, tight line-height) and body text (highly readable, generous line-height).

### Heading Font: **Manrope**
*   **Usage:** For H1, H2, H3, Hero Headlines, Card Titles, Section Headers, Metric/Stat numbers.
*   **Weight Mapping:** 
    *   `700` (Bold) — Grid Cards, small headings.
    *   `800` (ExtraBold) — Sector headings, high-visibility titles.
    *   `900` (Black) — Main Hero section.
*   **Letter Spacing:** Mandatory tight tracking.
    *   Mobile Heading: `tracking-[-0.03em]`
    *   Large Screen Heading: `tracking-[-0.04em]` or `tracking-[-0.05em]`
*   **Line Height:** Tight, compact leading.
    *   H1/Hero: `leading-[1.0]` to `leading-[1.05]`
    *   H2/Section: `leading-[1.05]` to `leading-[1.1]`

### Body Font: **Inter**
*   **Usage:** For all UI Text, Paragraphs, Buttons, Forms, Navigation, Labels, Blog/FAQ details.
*   **Weight Mapping:**
    *   `400` (Regular) — Dense descriptions, legal/meta details.
    *   `500` (Medium) — Paragraphs, system items.
    *   `600` (SemiBold) — Interactive keys, navigation links.
*   **Line Height:** Highly readable and breathing.
    *   General: `leading-[1.6]` to `leading-[1.8]`

---

## 4. RADIUS & RADIAL ELEVATION (DEPTH)

No harsh rectangles, no extreme bubbles. Curve adjustments represent structural modernism.

```css
@theme {
  --radius-brand-button: 12px;       /* Sleek, controlled curves for actionable items */
  --radius-brand-card: 20px;         /* Uniform curve for standard interactive grids */
  --radius-brand-floating: 24px;     /* Used for major structural frames like the Hero center / CTA blocks */

  /* Shadow system: Flat, premium Soft Depth avoiding murky or dirty gray shadows */
  --shadow-brand-soft: 
    0 4px 20px -2px rgba(15, 23, 42, 0.04), 
    0 10px 40px -4px rgba(15, 23, 42, 0.02);
}
```

---

## 5. REUSABLE TAILWIND CODE BLUEPRINTS

Use the following markup structures when prompting AI engines to build pages styled for TP Growth:

### A. High-Conversion CTA Button (Orange)
```html
<button class="bg-[#EA580C] hover:bg-[#EA580C]/90 text-white font-sans font-semibold text-[15px] px-6 py-3.5 rounded-[12px] inline-flex items-center gap-2 shadow-lg shadow-[#EA580C]/15 hover:-translate-y-0.5 transition-all duration-300">
  <span>Liên hệ đặt lịch</span>
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
</button>
```

### B. Standard Service / Value Card
```html
<div class="bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-[20px] shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
  <!-- Soft accent for standard icons -->
  <div class="w-14 h-14 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#1D4ED8] group-hover:border-[#1D4ED8] transition-colors duration-300">
    <!-- Icon goes here -->
  </div>
  <h3 class="font-heading font-extrabold text-[18px] text-[#0F172A] mb-3 leading-[1.1] tracking-[-0.03em]">
    Chiến Lược Hệ Thống
  </h3>
  <p class="text-[14px] md:text-[15px] text-[#334155] leading-[1.6] opacity-85">
    Thay vì chạy Ads vá víu, tôi cùng bạn tái cơ cấu phễu chuyển đổi, giảm thiểu điểm thất thoát dòng Leads và ổn định phễu bán hàng.
  </p>
</div>
```

### C. Section Intro Header Block
```html
<div class="max-w-3xl mx-auto text-center mb-16 md:mb-20">
  <div class="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.4em] text-[11px] font-black text-[#EA580C]">
    TRACK RECORD
  </div>
  <h2 class="font-heading text-[32px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.03em] md:tracking-[-0.04em]">
    Kinh nghiệm thực chiến quý giá
  </h2>
  <p class="mt-4 text-[#334155] font-sans text-[16px] md:text-[18px] leading-[1.7] max-w-2xl mx-auto">
    Đúc kết từ 7 năm vận hành hệ điều hành Marketing cho hàng chục doanh nghiệp SMEs.
  </p>
</div>
```

---

## 6. SYSTEM ALIGNMENT MANDATES FOR LLMS

If feeding this file to an AI tool to generate code, add this custom instructions payload:

> **System Rules for AI Tooling:**
> 1. **Do not create multi-tabs or navigational sidebars** unless requested. Maintain a highly polished single-page advisory-consultant feeling.
> 2. **Never change the orange colors** used inside conversion-oriented headers or conversion pathways. Orange `#EA580C` represents ACTION.
> 3. **Never apply background gradients.** The default application bg must stay clean `#F8FAFC` to emphasize white space.
> 4. **Keep mobile viewport margins clean.** On mobile devices, elements should fall in card systems with exact matching side-paddings, avoiding layouts getting too cramped or touching device edges.
