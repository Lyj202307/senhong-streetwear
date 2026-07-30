# SENHONG ATELIER Streetwear B2B Showcase — Design Contract

## Design Direction

"Noir-Luxe Streetwear Editorial": High-contrast visuals — deep midnight black canvas, bone-white typography, sophisticated gold/champagne accent (#C5A059). Disciplined grid alternating dense info blocks (manufacturing specs) with cinematic full-bleed imagery. Sharp 0px-radius edges convey industrial manufacturing precision.

**Reference:** streetwearofficial.com — dark theme, bold typography, large model photography, grid product layout, strong street energy. Adapted for B2B OEM/ODM manufacturing showcase.

## Reference Sources

- `vendor/open-design/adapter/STATIC_POLICY.md` — Static use boundaries
- `vendor/open-design/adapter/RESOURCE_INDEX.md` — Selection logic
- `vendor/open-design/upstream/design-systems/Founders-Midnight-Editorial/DESIGN.md` — Core visual baseline (Noir-Luxe, minimalist editorial)
- `vendor/open-design/upstream/design-systems/Founders-Midnight-Editorial/tokens.css` — Token source for black/bone-white
- `vendor/open-design/upstream/design-systems/Founders-Midnight-Editorial/components.html` — Fixture for layout rhythm
- `vendor/open-design/upstream/craft/anti-ai-slop.md` — Quality gate
- `vendor/open-design/upstream/craft/typography-hierarchy-editorial.md` — Editorial pacing and scale jumps
- **User Reference:** streetwearofficial.com — dark theme, bold streetwear typography, large photography, B2C adapted to B2B

## Design Tokens

- **Colors**
  - `--bg`: `#000000` (Midnight Black)
  - `--fg`: `#F1F0EC` (Bone White)
  - `--accent`: `#C5A059` (Gold/Champagne — CTAs, highlights)
  - `--surface-warm`: `#111111` (Section variation)
  - `--muted`: `#8F8D8B` (Secondary metadata)
- **Typography**
  - `--font-display`: system sans-serif Bold, Uppercase, tracking 0.05em
  - `--font-body`: system sans-serif Regular, Weight 300
  - `--text-display`: `clamp(48px, 8vw, 96px)`
  - `--text-section-head`: `12px` Uppercase tracked
- **Layout**
  - `--radius`: `0px` (Sharp edges)
  - `--container-gutter`: `60px` desktop / `20px` mobile
  - `--section-gap`: `120px` desktop / `60px` mobile
- **Elevation**: Flat — depth via contrast only

## Page Structure

1. **Home**: Hero Editorial → Capabilities Grid → Category Showcase → Trust Section → CTA
2. **Products**: Category filter → Product catalog grid (T-shirts, Hoodies, Pants, Jackets, Tracksuits)
3. **Services**: Process timeline (Design→Delivery) → Fabric library → Quality control
4. **Factory**: Capacity stats → Visual tour (cutting, sewing, QC)
5. **About**: Brand story → Export markets → Team
6. **Contact**: Inquiry form → WhatsApp → Email → Factory address

## Component Plan

- `nav-minimal`: Fixed top nav, bone-white on black
- `hero-editorial`: Full-height background image, center-aligned bold typography
- `capability-card`: Title + description + icon
- `product-grid-item`: Sharp image container, hover "MOQ: 100pcs" overlay
- `process-step`: Numbered list, large typography
- `factory-stat-block`: Large gold stat value
- `inquiry-form-b2b`: Company Name, Website, Estimated MOQ fields

## Copy Tone

Authoritative, professional, street-smart. "Built for the hustle." "Precision OEM for global brands." Use industry terms: GSM, Combed Cotton, Drop Shoulder, Tech Packs.

## Responsive Rules

- Mobile: Single-column, scaled typography via clamp, hamburger nav
- Tablet: 2-column product grid, generous gutters
- Hover states reserved for desktop

## Implementation Notes

- **Tailwind CSS** for styling; tokens mapped to tailwind.config.js
- Bold/Heavy display fonts for streetwear impact
- Asymmetrical rhythm: alternate dense specs with visual spreads
- Inquiry CTA prominent, styled as high-end button (not cart/buy)
- No font CDN imports — Chinese-first system font stack

## Image Manifest

| Filename | Source | Usage |
|----------|--------|-------|
| `hero-model.jpg` | unsplash | Hero background: streetwear model, dark urban |
| `factory-floor.jpg` | imageGenerate | Factory production line, cinematic lighting |
| `fabric-texture.jpg` | unsplash | Macro fabric texture |
| `category-hoodie.jpg` | imageGenerate | Heavyweight streetwear hoodie, studio shot |
| `category-tshirt.jpg` | imageGenerate | Oversized t-shirt detail |
| `sampling-process.jpg` | unsplash | Tech pack / pattern design close-up |
| `verification-badges.png` | placeholder | Certification logos placeholder |

## Risks / Open Questions

- Actual capacity data and MOQ are placeholders, need real values
- Factory images pending AI generation approval
- Certification badges need real logo assets
