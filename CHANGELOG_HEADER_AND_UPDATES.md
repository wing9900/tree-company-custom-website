# Changelog: Header, Contact, and Related Updates

Reference for changes made to the header, contact page, and related files. Use this to adjust layout or revert specific edits.

---

## Sidebar removal and footer copyright (recent)

**Date:** March 2025

### Changes made

1. **Removed unused sidebar component**
   - **Deleted:** `src/components/ui/sidebar.tsx` (entire file).
   - The sidebar was not used anywhere in the app. The mobile navigation uses `Sheet` in `Header.tsx`; no layout or page imported from `@/components/ui/sidebar`. Removing it reduces dead code and eliminates the unused dependency.

2. **Removed sidebar CSS variables**
   - **File:** `src/index.css`
   - **In `:root`:** Removed `--sidebar-background`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`.
   - **In `.dark`:** Removed the same set of sidebar variables under the dark theme block.
   - These variables were only referenced by the removed sidebar component.

3. **Updated footer copyright**
   - **File:** `src/components/layout/Footer.tsx`
   - **Change:** Bottom bar copyright text updated from `© 2024 Leading Care Tree Service. All rights reserved.` to `© 2024–2025 Leading Care Tree Service. All rights reserved.`
   - **Location:** Bottom bar of the footer (approx. line 216).

### Left unchanged (per request)

- Service area, phone number, and business name placeholders (e.g. `[Tree Service Company Name]`, `123-456-7890`, `{{EMAIL}}`) were not modified.
- "ORIGINAL" / "CURRENT" / "Mobile:" comments in `HeroSection.tsx` were left in place.
- Other previously identified items (broken links, lint fixes, `App.css`, etc.) were not changed.

---

## 1. Header (`src/components/layout/Header.tsx`)

### Top contact bar (green bar)

- **Layout:** Three-column flex, same structure as the white header below.
- **Container:** Full-width with `w-full px-2 lg:px-4 xl:px-6` (no `container-custom` max-width so logo/CTAs can sit near edges).

| Column   | Content | Location / Notes |
|----------|---------|-------------------|
| **Left** | Phone: `123-456-7890` (with icon) | Above logo. Wrapper: `hidden md:flex flex-1 items-center md:ml-4`. Change `md:ml-4` (e.g. to `md:ml-0`, `md:ml-8`) to move phone left/right. |
| **Middle** | `Licensed & Insured • Emergency Services Available 24/7` | Centered above nav links (Home, About, Services, etc.). Span has `ml-[10%]` to nudge right; use `ml-[5%]`, `ml-[10%]`, etc. to adjust. |
| **Right** | `Pasadena, TX` (with icon) | Wrapper has `ml-6 mr-[5%]`; `mr-[5%]` pulls it left from the edge. Tweak `ml-6` or `mr-[5%]` to move further left/right. |

**Key lines (approximate):**

- **71–72:** Green bar container (`w-full px-2 lg:px-4 xl:px-6`).
- **75:** Phone column — adjust `md:ml-*` to move phone.
- **84:** Trust text — adjust `ml-[10%]` (or `ml-[5%]`, etc.) to nudge that line.
- **91:** Pasadena wrapper — adjust `ml-6` and `mr-[5%]` to move location.

### Main header (white bar)

- **Container:** `w-full px-2 lg:px-4 xl:px-6` (full-width, minimal padding so logo and CTAs sit near edges).
- **Row:** `flex items-center justify-between py-4 relative` — logo left, nav center, CTAs right.
- **Logo:** “Leading Care Tree Service” — far left, no extra margin.
- **Desktop nav:** `hidden lg:flex items-center space-x-6`; links use `text-[1.02rem] font-semibold`. `space-x-6` controls gap between Home, About, Services, etc.
- **CTA buttons:** “Call Now” and “Get Quote” in a single wrapper with `space-x-6` (gap between the two). Wrapper has `lg:ml-0` so they sit at the right edge.
- **Mobile:** Hamburger uses `lg:hidden mr-3` so the menu button is slightly left of the edge for easier tapping.

**Key lines (approximate):**

- **102:** Main header container padding.
- **133:** Nav — `space-x-6` for link spacing; link classes for size/weight.
- **164:** CTA wrapper — `space-x-6` between buttons; `lg:ml-0` for right-edge alignment.
- **187:** Mobile menu trigger — `mr-3` for tap area; remove or reduce to bring button closer to edge.

---

## 2. Contact page (`src/pages/Contact.tsx`)

- **Hours heading:** “Hour of Operation” → “Hours of Operation” (line ~219).
- No other layout or content changes in this round.

---

## 3. Services section (`src/components/sections/ServicesSection.tsx`)

- **Emergency Storm Response card:** Service image uses stronger brightness/saturation: `brightness-[1.35] saturate-110` when `service.title === "Emergency Storm Response"`, otherwise `brightness-110`.
- **Line:** ~76 (inside the `className` for `OptimizedImage`).

---

## 4. Global CSS (`src/index.css`)

- **`.container-custom`:** `lg:px-8` → `lg:px-0` so large screens have no horizontal padding from this class. Scope: `@layer utilities`; also changed from `.container-custom` (nested) to `.container-custom` at root for the rule.
- **Line:** ~269–271.

---

## 5. Blog page (`src/pages/Blog.tsx`)

- **Post excerpts:** Two blog posts had their `excerpt` set to empty string `""` (were previously longer copy with Houston links/text).
- **Lines:** ~10 and ~81 (inside the post objects).

---

## Quick reference: “Where do I change…?”

| Goal | File | Where |
|------|------|--------|
| Phone position (green bar) | Header.tsx | Line ~75, `md:ml-*` on left column |
| Trust line position (green bar) | Header.tsx | Line ~84, `ml-[10%]` on span |
| Pasadena, TX position (green bar) | Header.tsx | Line ~91, `ml-6 mr-[5%]` on wrapper |
| Logo / nav / CTA spacing (white bar) | Header.tsx | Lines ~102, 133, 164 |
| Mobile menu button spacing | Header.tsx | Line ~187, `mr-3` on SheetTrigger |
| Contact “Hours” label | Contact.tsx | Line ~219 |
| Emergency card image look | ServicesSection.tsx | Line ~76 |
| Site-wide container padding (lg) | index.css | Line ~270 |
| Blog excerpt text | Blog.tsx | Lines ~10, ~81 |

---

*Last updated to match repo state at time of push.*
