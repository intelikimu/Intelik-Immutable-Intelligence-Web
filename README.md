# Intelik: Enterprise AI & Blockchain Solutions

This is the source code for the Intelik website, a modern web application built with Next.js.

## Features

- Responsive design for all device sizes
- Dark mode theme
- Liquid glass navbar with interactive effects
- Smooth scrolling with GSAP and Lenis
- Scroll-based animations
- Interactive UI components

## Smooth Scrolling Implementation

The website uses GSAP and Lenis for smooth scrolling with the following components:

### SmoothScroll Component

The `SmoothScroll` component in `src/components/smooth-scroll.jsx` provides:
- Butter-smooth scrolling across the entire site
- Integration with GSAP's ScrollTrigger for animations
- Automatic handling of anchor links
- Smart offset calculation based on the navbar height

### AnimatedSection Component

The `AnimatedSection` component in `src/components/animated-section.jsx` allows for:
- Scroll-triggered animations on any section
- Multiple animation types (fade-up, fade-down, fade-left, fade-right, zoom-in, stagger)
- Configurable animation parameters (delay, duration, threshold)
- Support for staggered children animations

### ScrollAnimation Component

The `ScrollAnimation` component in `src/components/scroll-animation.jsx` provides:
- Fine-grained control over individual element animations
- Multiple animation types through the ANIMATION_TYPES constant
- Control over animation timing and behavior

## CSS Utilities

The project includes utility classes in `globals.css` for:
- Glassmorphism effects
- Liquid glass effects
- Gradient text
- Various animations (float, rotate-gradient, liquid-ripple, etc.)

## Usage Examples

### Basic Smooth Scrolling

The smooth scrolling is automatically applied to the entire site through the layout:

```jsx
<ThemeProvider>
  <SmoothScroll>
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </SmoothScroll>
</ThemeProvider>
```

### Creating Animated Sections

To add scroll animations to any section:

```jsx
import { AnimatedSection } from '../components/animated-section';

export function MyPage() {
  return (
    <div>
      <AnimatedSection animation="fade-up" duration={1}>
        <h1>This heading will fade up when scrolled into view</h1>
        <p>This paragraph will fade up together with the heading</p>
      </AnimatedSection>
      
      <AnimatedSection animation="stagger" staggerChildren={0.2}>
        <div>This will appear first</div>
        <div>This will appear 0.2s later</div>
        <div>This will appear 0.4s later</div>
      </AnimatedSection>
    </div>
  );
}
```

## Development

To run the development server:

```bash
npm run dev
```

## Building for Production

```bash
npm run build
npm start
```

## Project Structure
- `src/app/` — Next.js app directory (pages, routes)
- `src/components/` — Reusable React components
- `src/content/` — Blog and content files
- `public/` — Static assets (images, fonts)

## Deployment
This project is ready to deploy on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License
MIT
