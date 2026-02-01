# 🤖 SkyAgent - AI-Powered Landing Page Template

SkyAgent is a high-performance, visually stunning landing page template built primarily for AI agents and SaaS companies. It features a modern, clean design with professional animations, built using the latest web technologies including Next.js 16, Tailwind CSS v4, and Motion.

## 🚀 Features

- **Multi-page Architecture**: Full support for About, Blog, Story, and Contact pages.
- **Dynamic Layout Management**: Uses a custom `LayoutShell` to conditionally handle headers and footers based on the route (e.g., hidden on login/register).
- **Stunning UI Components**:
  - **Bento Grid**: Interactive, animated grid for showcasing features.
  - **Interactive Globe**: A beautiful, performant 3D globe component.
  - **Flickering Grid**: A mesmerizing background effect for hero sections.
  - **Marquee & Smooth Scroll**: Polished navigation and testimonials.
- **Authentication Flow**: Pre-built Login and Register pages with a unique "glassmorphism" blue theme.
- **Theme Support**: Built-in support for light and dark modes via `next-themes`.
- **Dynamic Branding**: Automated favicon generation from SVG logo using Next.js `icon.tsx`.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/)
- **Components**: [Magic UI](https://magicui.design/) & [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abdelghanix10/Agent-Template-Magic-UI.git
   cd Agent-Template-Magic-UI
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

4. **Build for production:**
   ```bash
   pnpm build
   ```

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Routes & Metadata)
├── components/     # UI Components & Sections
│   ├── sections/   # Major page sections (Hero, Bento, CTA, etc.)
│   └── ui/         # Base UI components (Magic UI / Radix)
├── hooks/          # Custom React hooks
├── lib/            # Configuration (siteConfig), utils, and site-wide constants
└── styles/         # Global styles (Tailwind v4 imports)
```

## ⚙️ Configuration

Most of the site's content and branding can be managed through `src/lib/config.tsx`. Update the `siteConfig` object to change:

- Site name and description
- Navigation links
- Footer structure
- Hero section content and CTAs

## 🎨 Customizing the Design

The project uses **Tailwind CSS v4**. Global styles and theme variables are defined in `src/app/globals.css`. You can customize colors, spacing, and animations directly using the new `@theme` block.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Dillion Verma](https://x.com/dillionverma) and the [Magic UI](https://magicui.design/) community.
