# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Professional accessibility improvements (WCAG 2.1 Level AA compliant)
- `aria-hidden` attributes for decorative SVG icons
- Skip to main content functionality with `id="main-content"`
- Auto-detection of user timezone on page load
- Enhanced meta tags for better SEO (Open Graph, Twitter Card)
- Security headers in Vercel configuration
- VSCode workspace settings and recommended extensions
- ESLint and Prettier configuration files
- Reduced motion support for accessibility
- Hardware acceleration hints for better performance

### Changed

- Improved semantic HTML structure (h1 instead of h2 in header)
- Enhanced ARIA labels with more descriptive text
- Better color mode cycling with improved accessibility
- Optimized CSS with performance improvements
- Updated build configuration for better code splitting
- Enhanced README with deployment instructions

### Fixed

- Main landmark accessibility issue
- ARIA attributes for combobox pattern in timezone dropdowns
- Focus visible states for better keyboard navigation
- TypeScript type definitions for better type safety

## [1.0.0] - Initial Release

### Added

- Initial release with 70+ timezones
- Multi-language search support
- Dark mode with system detection
- Timezone conversion functionality
- Responsive design
- Clean, modern UI
