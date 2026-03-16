# Changelog

## Session Updates

### ChatWidgetSection (Sarah Card) — Major Overhaul (March 2025)

**New Features**
- Sarah card now has separate mobile and desktop layouts (mobile: centered, compact; desktop: bottom-right, full card)
- Mobile card uses `createPortal` to render to `document.body` so it stays fixed when scrolling
- Added "Talk to Sarah now" with arrow icon (points to GHL call button)
- Swapped order on both mobile and desktop: "Talk to Sarah now" appears above "Try an agent FREE for my business"
- Contact CTAs (Try an agent FREE, CLAIM MY FREE TRIAL) scroll to top of contact page when already on `/contact` instead of re-navigating
- Mobile and desktop banners shown after closing Sarah card ("Every lead captured. Zero effort." + CLAIM MY FREE TRIAL)
- Banners persist across page navigation

**Positioning & Layout Constants (tunable)**
- `MOBILE_CARD_TOP`, `MOBILE_CARD_LEFT`, `MOBILE_CARD_TRANSFORM` — mobile card position
- `DESKTOP_CARD_BOTTOM`, `DESKTOP_CARD_RIGHT` — desktop card position
- `DESKTOP_CARD_BOTTOM_TRIM`, `MOBILE_CARD_BOTTOM_TRIM` — trim from bottom (negative = shorter)
- `DESKTOP_TALK_MARGIN_LEFT`, `DESKTOP_TALK_MARGIN_TOP` — "Talk to Sarah now" position (desktop)
- `DESKTOP_CTA_MARGIN_LEFT`, `DESKTOP_CTA_BUTTON_OFFSET_Y` — CTA button position (desktop)
- `MOBILE_TALK_MARGIN_LEFT`, `MOBILE_TALK_MARGIN_TOP` — "Talk to Sarah now" position (mobile)
- `MOBILE_CTA_BUTTON_OFFSET_Y` — CTA button vertical offset (mobile, uses transform)

**Code Quality**
- Extracted `handleContactClick` helper for scroll-to-top-on-contact behavior (used by CTALink, MobileBanner, DesktopBanner)
- Made TalkToSarahBlock offset props (`bottom`, `right`, `offsetX`, `offsetY`) optional when `inline={true}`
- Removed redundant `?? 10` / `?? 0` fallbacks in MobileBanner padding parsing
- Updated comments for offset constants (noted they apply when inline=false)

**Media Queries**
- Mobile card uses `top: MOBILE_CARD_TOP svh` in media query for viewport-stable positioning
- `.sarah-card-desktop` hidden on mobile; `.sarah-card-mobile` hidden on desktop
- `.sarah-mobile-banner` hidden on desktop; `.sarah-desktop-banner` hidden on mobile

---

### index.html
- Viewport meta: added `viewport-fit=cover` and `interactive-widget=resizes-visual` for better mobile behavior

### src/index.css
- Disabled mobile touch callout on images (`-webkit-touch-callout: none`) to prevent Save/Copy popup on long-press
- Added newline at end of file

---

### ChatWidgetSection (Sarah Card) — Earlier Session

**Badge "Live · Available 24/7"**
- Increased brightness on both mobile and desktop (+4%): background opacity, border, dot color (#ff9542), text (#fff5e8)
- Mobile only: increased badge size by 3% (gap, padding, dot, text)
- Mobile only: shifted badge up using `transform: translateY()` (configurable via `MOBILE_BADGE_OFFSET_Y`)

**Text & Typography**
- Main heading "Your phone rings at 11pm. Sarah answers.": fontWeight 800→900 (desktop), 700→800 (mobile)
- Bullet points (No salary, Captures every call, Books your calendar): fontWeight 500→600 on both mobile and desktop
- Added configurable space between "11pm." and "Sarah answers." on mobile via `MOBILE_PHRASE_GAP`
- Added `MOBILE_PHRASE_GAP_VERTICAL` for vertical space between "Your phone rings at 11pm." and "Sarah answers." lines on mobile (default: 4px)

**Mobile Layout**
- Increased all mobile card elements by 5%: text sizes, badge, checkmarks, padding, gaps, margins
- Checkmarks scaled 1.05x on mobile via CSS

**Removed**
- Glow effect behind GHL phone icon (previously added, then removed per user request)

---

### Footer

**"View All Areas →" Bug Fix**
- Fixed link not scrolling back to service areas section when already on homepage
- Added `onClick` handler: when on `/#service-areas`, prevents default and scrolls to `#service-areas` element
- Ensures smooth scroll back to section when user has scrolled down

---

### ServiceAreasSection

- Added `scroll-mt-24` to `#service-areas` section for proper scroll offset when navigating with sticky header

---

### Other Files Modified
- `.gitignore`, `App.tsx`, `Header.tsx`, `HeroSection.tsx`, `Index.tsx`, `ServiceAreas.tsx` — various updates from project development
