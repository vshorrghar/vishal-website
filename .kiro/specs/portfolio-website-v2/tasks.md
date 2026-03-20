# Implementation Plan: Portfolio Website v2

## Overview

Build a single-page static portfolio website for Vishal Shorghar using vanilla HTML, CSS, and JavaScript. Implementation proceeds bottom-up: project structure and base styles first, then section-by-section content, interactive JS modules, forms, and finally responsive polish. Vitest + jsdom + fast-check for testing.

## Tasks

- [x] 1. Set up project structure, base HTML, and core CSS
  - [x] 1.1 Create directory structure and placeholder image files
    - Create `assets/css/`, `assets/js/`, `assets/images/` directories
    - Add placeholder files for `profile-photo.jpg`, `speaking-1.jpg`, `speaking-2.jpg`, `speaking-3.jpg`
    - _Requirements: 3.3, 9.1, 15.1_

  - [x] 1.2 Create `index.html` with full semantic structure and meta tags
    - Single HTML file with all section landmarks: `#home`, `#about`, `#expertise`, `#experience`, `#projects`, `#services`, `#speaking`, `#booking`, `#contact`
    - Include sticky `<nav>` with links in order: Home, About, Expertise, Experience, Projects, Services, Speaking, Book My Time, Contact
    - Include SEO meta tags: title, description, keywords, Open Graph tags
    - Include `<canvas>` element for particle background in hero section
    - Include all CSS and JS file references (no external CDN dependencies)
    - Include disclaimer banner in footer, booking section, and contact section
    - _Requirements: 1.1, 2.1, 2.3, 2.4, 2.6, 3.1–3.5, 4.1–4.2, 5.1–5.2, 6.1–6.11, 7.1–7.2, 8.1–8.3, 9.1–9.4, 10.1–10.2, 10.5, 11.1, 11.4, 11.5, 13.1–13.4, 14.1–14.3_

  - [x] 1.3 Create `assets/css/main.css` with CSS custom properties, reset, and typography
    - Define all design tokens as CSS custom properties (colors, neon accents, glassmorphism values, spacing, fonts)
    - Apply dark theme base styles, box-sizing reset, smooth scroll behavior
    - Set base typography with Inter and Fira Code font stacks
    - _Requirements: 12.1, 15.3_

  - [x] 1.4 Create `assets/css/components.css` with reusable component styles
    - `.glass-card` class with backdrop-filter blur, semi-transparent background, subtle border, border-radius
    - Status badge component with pulsing dot animation (amber and blue variants)
    - Tech stack pills with neon glow borders
    - Timeline progress indicator (4-stage horizontal bar: Idea → PoC → Building → Live)
    - Button styles with hover glow effects
    - _Requirements: 12.3, 12.5, 12.6, 12.8, 6.7, 6.8, 6.10_

  - [x] 1.5 Create `assets/css/sections.css` with section-specific layouts
    - Hero section layout with particle canvas layering
    - About section with profile photo and info cards grid
    - Expertise section with skill category card grid
    - Experience section with vertical timeline layout
    - Projects section with featured full-width card and medium cards
    - Services, Certifications, Speaking, Booking, Contact section layouts
    - Footer with disclaimer
    - _Requirements: 1.3, 2.1, 3.1–3.6, 4.1–4.4, 5.1, 6.1–6.11, 7.1–7.3, 8.1–8.4, 9.1–9.5, 10.1–10.6, 11.1–11.5_

  - [x] 1.6 Create `assets/css/animations.css` with keyframes and transitions
    - `@keyframes` for ticker banner scroll (`translateX`), status badge pulse, terminal glow
    - Animated gradient border keyframes for featured project card
    - Scroll-triggered animation classes (`.visible`, `.animate-in`) with transitions
    - Hover animations: scale transform + glow on cards, buttons, nav links
    - Typing cursor blink animation
    - _Requirements: 12.5, 12.7, 12.8_

  - [x] 1.7 Create `assets/css/responsive.css` with media queries
    - Desktop (1200px+): default styles
    - Tablet (768px–1199px): adjusted grid columns, reduced padding
    - Mobile (<768px): single column layouts, hamburger menu styles, reduced particle count hint
    - Navigation collapse to hamburger at <768px
    - _Requirements: 1.4, 1.5, 12.9_

- [x] 2. Implement core JavaScript modules (particles, typing, ticker, cursor)
  - [x] 2.1 Create `assets/js/particles.js` — canvas particle background
    - `initParticles(canvasElement)`: create particle array scaled to canvas area, start `requestAnimationFrame` loop
    - `resizeCanvas()`: handle viewport resize, recalculate particle count
    - Particles drift and connect with lines when close
    - Graceful degradation: if canvas unsupported, skip silently
    - _Requirements: 2.6, 12.2_

  - [ ]* 2.2 Write property test for particle system scaling (Property 11)
    - **Property 11: Particle system scales with canvas dimensions**
    - Generate random positive canvas width/height, verify particle count > 0 and scales with area
    - **Validates: Requirements 12.2**

  - [x] 2.3 Create `assets/js/typing.js` — typing animation
    - `initTypingAnimation(element, titles, speed)`: type characters one by one, pause, delete, cycle to next title
    - Loops infinitely through all role titles
    - _Requirements: 2.2, 2.5_

  - [ ]* 2.4 Write property test for typing animation title coverage (Property 1)
    - **Property 1: Typing animation visits all titles**
    - For any array of role titles, after one complete cycle every title is visited exactly once in order
    - **Validates: Requirements 2.2**

  - [x] 2.5 Create `assets/js/ticker.js` — ticker banner scroll
    - `initTicker(containerElement)`: duplicate keyword elements in DOM for seamless CSS animation loop
    - _Requirements: 2.4_

  - [ ]* 2.6 Write property test for ticker content duplication (Property 2)
    - **Property 2: Ticker content duplication for seamless loop**
    - For any set of keywords, after init the container has at least 2 copies of each keyword
    - **Validates: Requirements 2.4**

  - [x] 2.7 Create `assets/js/cursor.js` — custom cursor
    - `initCustomCursor()`: create glowing dot element, follow mouse via `mousemove`
    - Hide default cursor with `cursor: none` on body
    - Skip on touch devices (`matchMedia('(pointer: coarse)')`)
    - _Requirements: 12.4_

- [x] 3. Implement terminal mockup and project components
  - [x] 3.1 Create `assets/js/terminal.js` — TokenIQ terminal mockup
    - `initTerminal(containerElement)`: set up terminal display
    - `generateFakeEntry()`: return formatted string with token symbol, price, percentage change, direction indicator
    - `startCycling()` / `stopCycling()`: 3-second interval, controlled by Intersection Observer visibility
    - _Requirements: 6.3, 6.4_

  - [ ]* 3.2 Write property test for terminal data generator format (Property 4)
    - **Property 4: Terminal data generator format validity**
    - For any call, returned string contains valid token symbol, dollar price, percentage with direction
    - **Validates: Requirements 6.4**

  - [ ]* 3.3 Write property test for timeline progress indicator (Property 5)
    - **Property 5: Timeline progress indicator stage highlighting**
    - For any timelineStage 0–3, stages up to current are active, stages after are inactive
    - **Validates: Requirements 6.10**

- [ ] 4. Checkpoint — Verify core modules
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement form validation and submission handling
  - [x] 5.1 Create `assets/js/forms.js` — form validation and simulated submission
    - `initForms()`: attach submit handlers to booking and contact forms
    - `validateForm(formElement)`: check required fields non-empty, validate email format, return `{ valid, errors }`
    - `showSuccess(formElement)`: display green confirmation banner, reset form
    - `showErrors(formElement, errors)`: display inline error messages per field
    - `validateEmail(email)`: regex-based email format check
    - _Requirements: 10.2–10.4, 11.1–11.3_

  - [ ]* 5.2 Write property test for form validation — valid submissions (Property 9)
    - **Property 9: Form validation accepts complete valid submissions**
    - For any form data with all required fields non-empty and valid email, validateForm returns `{ valid: true, errors: [] }`
    - **Validates: Requirements 10.3, 11.2**

  - [ ]* 5.3 Write property test for form validation — invalid submissions (Property 10)
    - **Property 10: Form validation rejects incomplete submissions with specific errors**
    - For any form data with at least one required field empty, validateForm returns `{ valid: false }` with errors listing missing fields
    - **Validates: Requirements 10.4, 11.3**

- [x] 6. Implement main.js — app initialization, navigation, and scroll animations
  - [x] 6.1 Create `assets/js/main.js` — orchestrator module
    - `initNavigation()`: smooth scroll click handlers, hamburger toggle for mobile menu
    - `updateActiveLink()`: highlight current section nav link via Intersection Observer
    - `toggleMobileMenu()`: open/close vertical overlay menu
    - Register Intersection Observer for all animated sections/cards with ~10-20% threshold
    - Initialize all JS modules on DOMContentLoaded, each wrapped in try/catch for independent failure
    - _Requirements: 1.1–1.5, 4.3, 5.4, 7.4, 8.4, 9.5_

  - [ ]* 6.2 Write property test for experience entry rendering (Property 3)
    - **Property 3: Experience entry rendering completeness**
    - For any entry with title, company, period, description (and optional metrics), rendered HTML contains all values
    - **Validates: Requirements 5.3**

  - [ ]* 6.3 Write property test for service card rendering (Property 6)
    - **Property 6: Service card rendering completeness**
    - For any service data with title, description, icon, rendered HTML contains all three
    - **Validates: Requirements 7.2**

  - [ ]* 6.4 Write property test for certification highlight uniqueness (Property 7)
    - **Property 7: Newest certification highlight uniqueness**
    - For any cert list with exactly one `newest: true`, only that cert gets the highlight class
    - **Validates: Requirements 8.2**

  - [ ]* 6.5 Write property test for speaking entry rendering (Property 8)
    - **Property 8: Speaking entry rendering completeness**
    - For any speaking entry with eventName, topic, imagePath, rendered HTML contains all three
    - **Validates: Requirements 9.2**

- [ ] 7. Checkpoint — Full integration verification
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Testing setup and unit tests
  - [ ] 8.1 Set up Vitest + jsdom + fast-check test configuration
    - Create `package.json` with vitest, jsdom, fast-check dev dependencies
    - Create `vitest.config.js` with jsdom environment
    - Create test directory structure
    - _Requirements: 15.1, 15.3_

  - [ ]* 8.2 Write unit tests for HTML structure and content verification
    - Navigation link order matches Req 1.1
    - Stats row contains all 5 metrics (Req 2.3)
    - Certifications in correct order (Req 8.1)
    - Meta tags correct (Req 13.1–13.4)
    - Disclaimer in footer, booking, contact (Req 14.1–14.3)
    - No external CDN dependencies (Req 15.3)
    - Form fields exist for booking and contact (Req 10.2, 11.1)
    - Session type cards correct (Req 10.1)
    - Project section order correct (Req 6.1, 6.9)
    - Status badges correct (Req 6.7, 6.8)
    - _Requirements: 1.1, 2.3, 6.1, 6.7, 6.8, 6.9, 8.1, 10.1, 10.2, 11.1, 13.1–13.4, 14.1–14.3, 15.3_

- [ ] 9. Final checkpoint — All tests pass, full review
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests validate universal correctness properties from the design document using fast-check
- All JS modules initialize independently — one module failure doesn't block others
- No external frameworks or CDN dependencies — everything is vanilla HTML/CSS/JS
