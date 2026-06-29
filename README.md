# TemplateHub - Free Digital Templates Download

Download free premium templates for Excel, Canva, Video, PowerPoint, and Word.

## 🚀 Features

- 🎨 **Multiple Categories**: Excel, Canva, Video, PowerPoint, Word
- 🔍 **Search & Filter**: Find templates easily by category, format, rating
- 📱 **Responsive Design**: Mobile-friendly, works on all devices
- 🌙 **Dark Mode**: Easy on the eyes
- 🌍 **Multi-language Ready**: English + Bahasa Indonesia
- 💰 **Monetization Ready**: Adsterra integration

## 🛠️ Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Icons**: Lucide
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
digital-freebies/
├── public/
│   ├── templates/          # Template thumbnails
│   └── images/            # Assets
├── src/
│   ├── components/        # Reusable components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Static pages
│   ├── data/              # JSON data
│   └── styles/             # Global styles
├── .github/workflows/      # GitHub Actions
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/digital-freebies.git
cd digital-freebies

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚀 Deploy to GitHub Pages

1. Fork or push this repository to your GitHub account
2. Go to Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push to `main` branch
5. Your site will be live at `https://yourusername.github.io`

## 📝 Adding Templates

Edit `src/data/templates.json` to add new templates:

```json
{
  "id": "13",
  "title": "New Template Name",
  "slug": "new-template-name",
  "category": "excel",
  "subcategory": "keuangan",
  "description": "Template description...",
  "format": "xlsx",
  "fileSize": "2 MB",
  "rating": 4.8,
  "reviews": 50,
  "downloads": 500,
  "featured": false,
  "thumbnail": "/templates/new-template.jpg",
  "tags": ["tag1", "tag2"],
  "createdAt": "2026-06-29"
}
```

## 💰 Monetization

### Adsterra Setup

1. Create account at [Adsterra](https://adsterra.com)
2. Get your ad codes
3. Replace placeholder ads in `src/components/AdBanner.astro`

### Shortlink Integration

For download shortlinks, integrate with:
- Adsterra Social Media Bar
- Bitly API
- Custom shortlink service

## 🌐 SEO

- Meta tags included in `MainLayout.astro`
- Semantic HTML structure
- Fast loading (static site)
- Sitemap ready (add sitemap.xml if needed)

## 📄 License

This project is for educational purposes. Template licenses depend on original sources.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ for the creator community
