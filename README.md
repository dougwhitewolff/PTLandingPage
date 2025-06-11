# SherpaPrompt

> From Idea to High-Quality Prompt—10x Faster

SherpaPrompt helps you craft structured, high-performance prompts with lightning-fast context retrieval and zero coding required. Built for teams who depend on prompt quality.

## 🚀 Features

- **Structured Prompt Creation**: Build organized, high-performance prompts with ease
- **Context Retrieval**: Lightning-fast access to relevant information
- **Zero Coding Required**: User-friendly interface for non-technical users
- **Team Collaboration**: Designed for teams who need consistent prompt quality
- **Local & Cloud Options**: Works locally, in CI pipelines, or as a secure SaaS platform

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icons
- **next-themes** - Dark/light mode support

### Backend & APIs
- **Next.js API Routes** - Serverless API endpoints
- **Resend** - Email service for signup notifications
- **Nodemailer** - Email functionality

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Tailwind Typography** - Rich text styling

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── signup/        # Email signup endpoint
│   ├── blog/              # Blog pages
│   │   └── [id]/          # Dynamic blog post pages
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/            # Layout components (Footer)
│   ├── modals/            # Modal components (SignUpDialog)
│   ├── navigation/        # Navigation components (Navbar)
│   ├── sections/          # Page sections (Hero, Features, HowItWorks)
│   ├── ui/                # shadcn/ui components
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light mode toggle
├── lib/                   # Utility functions and data
│   ├── blog-data.ts       # Blog content and metadata
│   └── utils.ts           # Helper functions
├── assets/                # Static assets
│   └── landingImages/     # Landing page images
└── hooks/                 # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ptblog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: Custom purple/brown theme with hover states
- **Background**: Light cream in light mode, dark brown in dark mode
- **Text**: High contrast for accessibility

### Typography
- **Font**: Geist Sans (optimized with next/font)
- **Weights**: Light (300), Medium (500), Semibold (600), Bold (700)
- **Responsive**: Scales from mobile to desktop

### Components
- **shadcn/ui**: Consistent, accessible components
- **Custom Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach

## 📱 Pages & Features

### Landing Page
- **Hero Section**: Animated counter, call-to-action buttons
- **Features**: Three-column layout with icons
- **How It Works**: Four-step process explanation
- **Blog Preview**: Featured blog posts
- **Footer**: Links and contact information

### Blog System
- **Blog Listing**: Featured post with grid layout
- **Blog Detail**: Dynamic routing with image placement
- **Responsive Images**: Optimized with Next.js Image component

### Legal Pages
- **Privacy Policy**: Clean, icon-based layout
- **Terms of Service**: Consistent styling with privacy page

### Navigation
- **Responsive Navbar**: Desktop and mobile layouts
- **Mobile Sidebar**: Sheet component for mobile navigation
- **Theme Toggle**: Dark/light mode switching
- **Smooth Scrolling**: Anchor link navigation

## 🔧 Configuration

### Tailwind CSS
- Custom color variables for theming
- Typography plugin for rich text
- Responsive breakpoints
- Custom animations

### Next.js
- App Router for modern routing
- Image optimization
- Font optimization
- API routes for backend functionality

## 📧 Email Integration

The application uses Resend for email notifications when users sign up for early access. The signup form sends notifications to `doug@transformationmath.com`.

## 🌙 Theme Support

- **Light Mode**: Default theme with cream background
- **Dark Mode**: Dark brown background with green accents
- **System Preference**: Automatically detects user's system preference
- **Persistent**: Theme choice is saved in localStorage

## 📄 License

This project is private and proprietary to Transformation Math.

## 👥 Team

Built by **Transformation Math**

---

For questions or support, contact us at [team@sherpaprompt.com](mailto:team@sherpaprompt.com)
