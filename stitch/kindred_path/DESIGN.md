# Design System Document: The Empathetic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Resilient Sanctuary"**

This design system rejects the clinical, cold "grid-of-boxes" approach common in healthcare. Instead, it draws inspiration from high-end wellness editorials and architectural minimalism. The goal is to create a digital environment that feels like a physical therapy space: quiet, intentional, and safe.

We break the "template" look through **Intentional Asymmetry**. By using generous, uneven whitespace and overlapping "paper-on-paper" layers, we guide the eye softly rather than forcing it through a rigid sequence. This fluidity mirrors the organic nature of the human psyche and the healing process.

---

2. Colors & Surface Logic

This palette is rooted in nature—specifically sage, stone, and parchment—to trigger a parasympathetic "rest and digest" response.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** To define boundaries, use tonal shifts between `surface` (#fffcf7) and `surface_container` (#f6f3ed). A change in background color is the only permissible way to separate large content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface_container` tiers to create "nested" depth:
*   **Base:** `surface` (#fffcf7) for the main page body.
*   **Content Blocks:** `surface_container_low` (#fcf9f3) for subtle section differentiation.
*   **Elevated Cards:** `surface_container_lowest` (#ffffff) to provide a "lifted" feel for high-priority cards or testimonials.

### Glass & Gradient Rule
For floating elements (like a sticky navigation bar), use **Glassmorphism**:
*   **Fill:** `surface` at 80% opacity.
*   **Effect:** 20px backdrop-blur.
*   **Signature Texture:** Use a subtle radial gradient for hero backgrounds, transitioning from `surface` to `primary_container` (#d1e9d3) at a 5% opacity to add "soul" to the whitespace.

---

3. Typography

The typographic pairing balances authority (the Doctor) with accessibility (the Person).

*   **Display & Headlines (Noto Serif):** The "Graceful Serif." Used for moments of reflection and high-level messaging. It conveys tradition, wisdom, and professional expertise.
    *   *Scale:* `display-lg` (3.5rem) down to `headline-sm` (1.5rem).
*   **Body & Titles (Manrope):** The "Modern Humanist." A highly readable sans-serif that feels approachable and clear. It ensures that complex psychological information is easy to digest.
    *   *Scale:* `body-lg` (1rem) for general reading; `title-lg` (1.375rem) for sub-headers within articles.

**Editorial Tip:** Use `display-md` for pull-quotes, centered with 3x the standard vertical `spacing-20` to create a "breathing" moment in the copy.

---

4. Elevation & Depth

We move away from the "drop shadow" era into **Tonal Layering**.

*   **The Layering Principle:** Place a `surface_container_highest` (#eae8e0) element inside a `surface` (#fffcf7) background to create a "sunken" or "embedded" feel for secondary tools like search bars or contact forms.
*   **Ambient Shadows:** If a card must float (e.g., a "Book Now" modal), use a shadow tinted with `on_surface` (#383833).
    *   *Spec:* `0px 20px 40px rgba(56, 56, 51, 0.05)`. It should be almost imperceptible.
*   **The Ghost Border:** If accessibility requires a stroke, use `outline_variant` (#bbb9b2) at 20% opacity. Never use 100% black or high-contrast grey lines.
*   **Organic Shapes:** Apply `rounded-xl` (3rem) to large imagery and `rounded-lg` (2rem) to cards to reinforce the "safety and comfort" prompt.

---

5. Components

### Buttons
*   **Primary:** `primary` (#546a58) fill with `on_primary` (#ffffff) text. Use `rounded-full` (pill shape). No shadows; use a slight scale-up (1.02x) on hover.
*   **Tertiary:** `on_surface` text with no background. Use a `3.5` (1.2rem) underline in `primary_container` (#d1e9d3) positioned 4px below the text.

### Cards & Content
*   **Rule:** Forbid divider lines.
*   **Execution:** Separate list items or cards using `spacing-8` (2.75rem) of vertical whitespace. If separation is needed, use a `surface_container_low` background fill for every second item (zebra striping) but with very low contrast.

### Input Fields
*   **Style:** `surface_container_high` (#f0eee6) background, `rounded-md`.
*   **Focus State:** Shift background to `primary_container` (#d1e9d3) with a 1px `primary` ghost-border.

### Suggested Psychology-Specific Components
*   **The "Pause" Card:** A large, `rounded-xl` container using a `primary_container` to `surface` gradient. Used for breathing exercises or grounding quotes.
*   **Soft Selectors:** Use `chips` instead of dropdowns for selecting "Areas of Concern" (Anxiety, Stress, etc.). Use `rounded-full` and `secondary_container` (#d2e8d3) for the selected state.

---

6. Do's and Don'ts

*   **Do:** Use "Dead Space" intentionally. If a section has only one sentence, let it sit alone in a `spacing-24` (8.5rem) container.
*   **Do:** Use images of nature or soft-focus human interaction that bleed off the edge of the screen to create a sense of boundlessness.
*   **Don't:** Use pure black (#000000). Always use `on_surface` (#383833) for text to reduce eye strain and "visual noise."
*   **Don't:** Use sharp 90-degree corners. Even the smallest "sm" corner radius is better than a sharp point, which triggers a subtle "danger" response.
*   **Do:** Ensure a minimum contrast ratio of 4.5:1 for all body text against its respective surface-container tier.