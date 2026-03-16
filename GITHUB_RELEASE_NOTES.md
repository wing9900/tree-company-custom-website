# Release Notes — Sarah Card Overhaul & UX Improvements

## Summary

Major update to the ChatWidgetSection (Sarah card) with separate mobile/desktop layouts, post-close banners, scroll-to-contact behavior, and extensive positioning controls. Includes code cleanup and minor fixes to `index.html` and `src/index.css`.

---

## ChatWidgetSection (Sarah Card)

### New Behavior
- **Dual layout:** Mobile card is centered and compact; desktop card is bottom-right with full content
- **"Talk to Sarah now"** with arrow icon, positioned above the CTA button on both breakpoints
- **Contact links** (Try an agent FREE, CLAIM MY FREE TRIAL) scroll to top when user is already on `/contact` instead of reloading
- **Banners after close:** Mobile and desktop banners ("Every lead captured. Zero effort." + CLAIM MY FREE TRIAL) appear when the Sarah card is closed and persist across pages

### Tunable Constants
All positioning and sizing is controlled via constants at the top of `ChatWidgetSection.tsx`:
- Card position: `MOBILE_CARD_TOP`, `DESKTOP_CARD_BOTTOM`, `DESKTOP_CARD_RIGHT`
- Bottom trim: `DESKTOP_CARD_BOTTOM_TRIM`, `MOBILE_CARD_BOTTOM_TRIM`
- Talk/CTA offsets: `DESKTOP_TALK_MARGIN_*`, `DESKTOP_CTA_*`, `MOBILE_TALK_MARGIN_*`, `MOBILE_CTA_BUTTON_OFFSET_Y`

### Code Quality
- Extracted `handleContactClick` helper (DRY)
- TalkToSarahBlock offset props optional when `inline={true}`
- Removed redundant fallbacks in MobileBanner
- Updated comments

---

## Other Changes

### Link preview (og:image, twitter:image)
- Switched to `/logo.ico` (header logo) for link previews when sharing site URL
- Removed `public/assets/Hero_Page_Image.webp`

### index.html
- Viewport meta: `viewport-fit=cover`, `interactive-widget=resizes-visual`

### src/index.css
- Disabled `-webkit-touch-callout` on images (prevents Save/Copy popup on mobile long-press)
- Newline at EOF

---

## Files Modified
- `src/components/sections/ChatWidgetSection.tsx`
- `index.html`
- `src/index.css`
- `CHANGELOG.md`
- `public/assets/Hero_Page_Image.webp` (deleted)
