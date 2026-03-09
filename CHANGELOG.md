# Changelog

## Session Updates

### ChatWidgetSection (Sarah Card)

**Badge "Live · Available 24/7"**
- Increased brightness on both mobile and desktop (+4%): background opacity, border, dot color (#ff9542), text (#fff5e8)
- Mobile only: increased badge size by 3% (gap, padding, dot, text)
- Mobile only: shifted badge up using `transform: translateY()` (configurable via `MOBILE_BADGE_OFFSET_Y`)

**Text & Typography**
- Main heading "Your phone rings at 11pm. Sarah answers.": fontWeight 800→900 (desktop), 700→800 (mobile)
- Bullet points (No salary, Captures every call, Books your calendar): fontWeight 500→600 on both mobile and desktop
- Added configurable space between "11pm." and "Sarah answers." on mobile via `MOBILE_PHRASE_GAP`

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
