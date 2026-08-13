# AGENTS.md - Persistent Design Rules

Follow the locked System Design DNA for all modifications to this project.

## CORE DESIGN DNA
- **Brand Feeling:** Strategic, Calm, Trustworthy, Premium, Editorial.
- **Color Strategy:**
  - **BLUE (#2563EB):** Trust, Systems, Primary Branding.
  - **ORANGE (#EA580C):** Action, CTA, Highlights.
  - **WHITE (#F8FAFC):** Premium background, Whitespace.
- **Typography:**
  - **Headings:** Sora (Bold, tight tracking).
  - **Body:** Inter.
- **Components:**
  - **CTA Buttons:** Must be ORANGE.
  - **Cards:** 20px radius, subtle soft shadows.
  - **Spacing:** Generous whitespace is mandatory.

## IMPLEMENTATION NOTES
- Always use the variables defined in `src/index.css` (@theme block).
- Maintain the "Strategic Operator" vibe (Linear/Stripe/Framer style).
- Avoid generic startup or AI-fantasy aesthetics.

## Tool-use policy

1. Prefer local files, terminal, APIs, CLI and scripted browser tests.
2. Use Playwright with DOM selectors and assertions for website validation.
3. Avoid visual computer-use and manual browser clicking.
4. Never repeatedly inspect screenshots when logs or DOM are available.
5. Stop for user action when OAuth, CAPTCHA, 2FA or sensitive approval is required.
6. Report exact commands, changed files and validation results.

- Do not publish, deploy, push, or modify production configuration without explicit approval.