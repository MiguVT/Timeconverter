# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-06

_Some of these changes were already in prod but I forgot to document them, oops!_

### Added

- SEO improvements:
  - JSON-LD structured data for better search indexing
  - Canonical URLs to prevent duplicate content
  - Sitemap.xml for search engines
  - Author and publisher meta tags
  - Mobile PWA meta tags
  - Twitter Card (no image)
  - Better robots directives
- Accessibility improvements (now WCAG 2.1 AA compliant):
  - `aria-hidden` for decorative icons
  - Skip to main content link
  - Reduced motion support
  - Hardware acceleration for smoother animations
- Auto-detect user's timezone on page load
- VSCode workspace settings and recommended extensions
- ESLint and Prettier configs

### Changed

- Refactored components to use Vue 3.5's `defineModel` (so much cleaner than props/emit!)
- Updated `compatibilityDate` to 2025-11-05
- Better semantic HTML structure
- Improved ARIA labels for screen readers
- Optimized CSS and build config
- Modern Tailwind classes (`flex-shrink-0` → `shrink-0`)
- More SEO keywords

### Fixed

- Main landmark accessibility
- Combobox ARIA attributes in timezone dropdowns
- Keyboard navigation focus states
- TypeScript type safety
- Tailwind v4 `@custom-variant` linter warnings

## [1.0.0] - Initial Release

### Added

- Initial release with 70+ timezones
- Multi-language search support
- Dark mode with system detection
- Timezone conversion functionality
- Responsive design
- Clean, modern UI
