# Namik Sultanov - Professional Musician Website

## Overview

This is a professional website for Namik Sultanov, a distinguished Azerbaijani pianist and educator. The website showcases his career, musical legacy, and provides a central hub for his performances, biography, and contact information. Built as a full-stack application, it features multi-language support (English, Russian, Azeri, Turkish), a photo gallery, YouTube video integration, and a contact form. The design emphasizes elegance and accessibility with a minimalist black-and-white aesthetic suitable for showcasing classical music and educational content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Media, and Contact
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming, Google Fonts (Playfair Display serif for headings, Inter sans-serif for body text)
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints and static file serving
- **Development**: Custom Vite integration for hot module replacement and development middleware
- **API Design**: RESTful endpoints with JSON responses and proper HTTP status codes
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Authentication and Authorization
- **User Schema**: Basic user table with username/password fields using UUID primary keys
- **Storage Interface**: Abstracted storage layer supporting both in-memory (development) and database (production) implementations
- **Security**: Prepared for session-based authentication with secure cookie handling

### Internationalization
- **Multi-language Support**: Custom translation hook supporting English, Russian, Azeri, and Turkish
- **Storage**: Client-side language preference persistence in localStorage
- **Implementation**: Key-based translation system with fallback to English for missing translations

### Media Integration
- **YouTube Integration**: Custom video player component with embedded YouTube videos using YouTube API
- **Photo Gallery**: Lightbox functionality for image viewing with keyboard navigation support
- **Asset Management**: Vite asset optimization with proper import handling for images

### Form Handling
- **Contact Form**: React Hook Form with validation for name, email, and message fields
- **Validation**: Client-side validation with server-side validation backup
- **User Feedback**: Toast notifications for form submission status

### Responsive Design
- **Mobile-First**: Tailwind CSS responsive utilities with mobile hamburger menu
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Image optimization and lazy loading considerations

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support across client and server
- **Build Tools**: Vite with React plugin and development error overlay

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Playfair Display, Inter) loaded via CDN

### Backend and Database
- **Server Framework**: Express.js with TypeScript support
- **Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for runtime type validation and schema generation

### Development and Deployment
- **Development**: TSX for running TypeScript in development
- **Building**: ESBuild for server bundling, Vite for client bundling
- **Replit Integration**: Vite plugin for Replit development environment
- **Session Management**: Express sessions with PostgreSQL store

### Third-Party Services
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Font Delivery**: Google Fonts CDN for web font loading
- **YouTube**: YouTube embed API for video integration
- **Development**: Replit development environment with custom plugins