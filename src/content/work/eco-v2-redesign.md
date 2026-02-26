---
title: Eco Future (v2.0)
year: 2025
industry: SAAS
category: Design Systems
summary: A streamlined, modern design system built to scale across sector-specific products and accelerate development.
thumbnail: /images/thumb-eco-v2.png
featured: true
---
## Problem + Goal

**User Problem:** Designers and developers need a cleaner, more usable system with consistent patterns, better visuals, and easier extensibility.

**Business Goal:** Accelerate product delivery and reduce technical debt with a lean, modern design system that scales across DTN's products.

## The Development Challenges of Eco v1.0

While it established initial consistency, the system was rigid, bloated, and lacked the polish and patterns needed for scalable product design.

- Wrapped Tailwind UI components introduced bloat and rigidity.
- Component wrappers depended on Eco team-defined props, which meant developers could not extend or adjust behavior without waiting on the system team.
- Overrides were cumbersome, creating friction in day-to-day workflows.
- Rigid structure slowed iteration and encouraged shadow libraries.
- Heavy documentation burden: significant effort was needed to document customization and workarounds, adding maintenance overhead.

<div class="cs-split">
  <div>
    <p>
      These constraints made Eco v1 difficult to scale in practice. Even when teams wanted to stay aligned
      with the design system, the developer ergonomics often pushed them toward local exceptions and
      one-off workarounds.
    </p>
  </div>
  <div class="cs-split-media">
    <button type="button" class="detail-gallery-thumb cs-split-thumb" aria-label="Open Eco v1 development challenges placeholder">
      <img src="/images/placeholder-thumb.svg" alt="Placeholder: Eco v1 component wrapper and developer workflow challenges" />
    </button>
    <p class="cs-split-caption"><em>Placeholder for a right-aligned image illustrating Eco v1 development constraints or component wrapper complexity.</em></p>
  </div>
</div>

## The Design Challenges of Eco v1.0

From a design perspective, Eco v1 suffered from foundational gaps that made products feel inconsistent, cluttered, and difficult to use.

- No page layout conventions: products defaulted to ad-hoc app shells and inconsistent content structures.
- Visual bloat: oversized headers, navigation, and excessive padding consumed valuable viewport space.
- Poor color accessibility: insufficient contrast and inconsistent application of accessible color standards.
- Lack of exemplar designs: teams had no strong reference patterns, leading to drift and uneven quality.

<div class="cs-split">
  <div>
    <p>
      Without strong layout paradigms and exemplars, product teams had too much interpretive freedom in
      the wrong places. The result was inconsistency in both usability and visual quality across the suite.
    </p>
  </div>
  <div class="cs-split-media">
    <button type="button" class="detail-gallery-thumb cs-split-thumb" aria-label="Open Eco v1 design challenges placeholder">
      <img src="/images/placeholder-thumb.svg" alt="Placeholder: Eco v1 layout inconsistency and visual bloat examples" />
    </button>
    <p class="cs-split-caption"><em>Placeholder for a right-aligned image showing Eco v1 visual clutter, spacing issues, or inconsistent layouts.</em></p>
  </div>
</div>

## Component System Revamp

In Eco v2 we rebuilt our component system around ShadCN-based components, maintaining Eco's core styling for easier product adoption while addressing major gaps in flexibility, accessibility, and polish. The revamp not only simplified the developer experience but also raised the design quality across all products.

- ShadCN foundation: lean, extensible components aligned to modern front-end workflows (still based on Tailwind CSS) without custom wrappers and associated bloat.
- Eco styling preserved: ensured continuity with v1 while enabling smoother product conversion.
- Polish improvements: redefined color palette, contrast, and spacing for better accessibility and visual clarity.
- Cleaned-up components: simplified props, reduced bloat, and eliminated redundant wrappers.
- Design Registry integration: improved governance, supporting both ground-up development and streamlined use with V0.
- Future-ready pipeline: positioned Eco for faster iteration, lower technical debt, and broader cross-product consistency.
- Introduced semantic tokens for color, typography, and spacing, improving consistency across components and enabling easier theming and accessibility compliance.

## Appshell Revamp

The Eco v2 app shell was redesigned to maximize usable workspace and improve accessibility, while still providing clear navigation and hierarchy. The new shell establishes a cleaner baseline for all products.

- Reduced footprint of the header and navigation, creating more space for core content.
- Refined color contrast in both light and dark modes for improved readability and compliance with accessibility standards.
- Simplified information hierarchy, reducing visual noise and redundant elements.
- Improved product suite portal experience with streamlined app switching, unified cross-app notifications, and a more consistent navigation model across products.

<div class="cs-split">
  <div>
    <p>
      The updated app shell created a stronger baseline for every product team. By reducing chrome and
      clarifying hierarchy, Eco v2 made room for content and workflows to carry more of the experience.
    </p>
  </div>
  <div class="cs-split-media">
    <button type="button" class="detail-gallery-thumb cs-split-thumb" aria-label="Open Eco v2 app shell placeholder">
      <img src="/images/placeholder-thumb.svg" alt="Placeholder: Eco v2 app shell redesign with reduced header and navigation footprint" />
    </button>
    <p class="cs-split-caption"><em>Placeholder for a right-aligned image of the Eco v2 app shell redesign.</em></p>
  </div>
</div>

## Layout Paradigm

Eco v2 introduced documented page layout paradigms, giving teams predictable, reusable structures that improved usability and sped up delivery across products.

- Standardized 1-, 2-, and 3-column responsive layouts for consistency.
- Defined Index / Workspace / Inspector model to support complex workflows.
- Reduced reliance on ad-hoc layouts, replacing them with clear conventions.
- Improved adaptability across screen sizes while preserving hierarchy.
- Provided guidance on when to use each layout, reducing design and dev ambiguity.
- Delivered implicit responsive benefits, as the defined paradigms scale smoothly from desktop to tablet and mobile.

<div class="cs-split">
  <div>
    <p>
      The layout paradigm work gave teams a shared structural language. That reduced rework and made
      decisions about composition faster because teams were no longer starting from an empty canvas.
    </p>
  </div>
  <div class="cs-split-media">
    <button type="button" class="detail-gallery-thumb cs-split-thumb" aria-label="Open layout paradigm placeholder">
      <img src="/images/placeholder-thumb.svg" alt="Placeholder: Eco v2 documented layout paradigms across 1, 2, and 3-column patterns" />
    </button>
    <p class="cs-split-caption"><em>Placeholder for a right-aligned image showing Eco v2 layout paradigms.</em></p>
  </div>
</div>

## Exemplar Designs

To help teams apply Eco v2 consistently, we created exemplar designs that demonstrate how the new layout paradigms work in practice. These examples provided strong reference points across product sectors, reducing ambiguity and accelerating adoption.

- Built exemplar flows showing synchronized components such as filters, maps, and data tables working together.
- Demonstrated how Index, Workspace, and Inspector scale across 1-, 2-, and 3-column layouts.
- Provided reference patterns for common cross-product needs, including dashboards, configuration flows, and approval workflows.
- Helped unify experiences across Energy, Agriculture, and Weather products by showcasing best-practice compositions.
- Reduced design drift by giving teams polished, ready-to-use examples as starting points.

<div class="cs-split">
  <div>
    <p>
      Exemplar designs turned the system into something teams could apply confidently, not just reference
      abstractly. They accelerated adoption by showing complete compositions in real product contexts.
    </p>
  </div>
  <div class="cs-split-media">
    <button type="button" class="detail-gallery-thumb cs-split-thumb" aria-label="Open exemplar designs placeholder">
      <img src="/images/placeholder-thumb.svg" alt="Placeholder: Eco v2 exemplar designs across DTN product sectors" />
    </button>
    <p class="cs-split-caption"><em>Placeholder for a right-aligned image of exemplar design patterns in use.</em></p>
  </div>
</div>

## From Design to Code

The migration to ShadCN and integration with the Design Registry enable rapid concept creation and validation directly in V0, ensuring ideas can move quickly from design to working code while staying aligned to Eco standards.

- ShadCN components provide a lean, extensible foundation for product teams.
- Design Registry manages governance, versioning, and consistency across the suite.
- V0 integration allows quick prototyping and validation directly against Eco v2.
- Exemplar designs act as launch points that can be refined into code through prompts.
- Shortens the loop between design and development, accelerating iteration while preserving system integrity.

<div class="cs-split">
  <div>
    <p>
      This workflow shift was as important as the visual redesign. Eco v2 made it easier for teams to move
      from concept to code without breaking system standards or creating additional maintenance burden.
    </p>
  </div>
  <div class="cs-split-media">
    <button type="button" class="detail-gallery-thumb cs-split-thumb" aria-label="Open design to code workflow placeholder">
      <img src="/images/placeholder-thumb.svg" alt="Placeholder: Eco v2 design-to-code workflow using ShadCN, Design Registry, and V0" />
    </button>
    <p class="cs-split-caption"><em>Placeholder for a right-aligned image showing the Eco v2 design-to-code workflow.</em></p>
  </div>
</div>

## Why Eco v2 Matters

Eco v2 is not just a visual update but a UX-led redesign, built in partnership with developers to reshape how products are built and maintained. The system addresses usability, accessibility, and layout consistency, while also reducing developer friction through ShadCN, semantic tokens, and the Design Registry.

- Captured and resolved both user and developer pain points from Eco v1.
- Introduced systemic design and technical improvements rather than isolated fixes.
- Provided exemplar patterns to guide consistent design and implementation across product sectors.
- Integrated into the development pipeline, supporting rapid prototyping in V0.
- Balanced speed, maintainability, and governance to ensure long-term scalability.

Eco v2 now serves as a foundation that improves delivery velocity, lowers technical debt, and aligns design and development within a shared system.
