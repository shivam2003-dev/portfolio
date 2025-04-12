# DevSecOps Portfolio Website

A customizable portfolio website with a cybersecurity/hacker theme, designed for DevSecOps engineers and security specialists. Built with React, Tailwind CSS, and ready for deployment to GitHub Pages.

![Portfolio Preview](attached_assets/portfolio-preview.png)

## Features

- 🔒 Cybersecurity-themed design with terminal-inspired elements
- 💻 Interactive terminal component with typing animation
- 🛡️ Project showcase with filterable tags
- 📝 Blog section with Markdown support
- 🔄 Responsive design that works on all devices
- 🚀 Easy deployment to GitHub Pages

## Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5000 in your browser

## Customization

### Personal Information

Update your personal details in the following files:

- `client/src/components/home/HeroSection.tsx` - Main headline and introduction
- `client/src/data/skills.ts` - Your technical skills
- `client/src/data/projects.ts` - Your projects
- `client/src/data/services.ts` - Services you offer
- `client/src/data/blog-posts.ts` - Hardcoded blog posts (can be replaced with Markdown)

### Theme Customization

The site uses a dark hacker theme with green accents by default. To modify the theme:

1. Edit `theme.json` in the root directory
2. Update global styles in `client/src/index.css`
3. Modify component-specific styles in their respective files

### Adding Blog Posts with Markdown

The site supports blog posts written in Markdown:

1. Create a new `.md` file in the `docs/blog/` directory
2. Use the format provided in `docs/blog/TEMPLATE.md`
3. Your blog post will automatically appear in the blog section

Example frontmatter:

```markdown
---
title: "Securing Kubernetes Deployments"
date: "2023-05-15"
slug: "securing-kubernetes-deployments"
tags: ["Kubernetes", "Security", "DevSecOps"]
excerpt: "Learn how to implement Pod Security Policies to harden your Kubernetes cluster."
---
```

## Folder Structure

```
├── client/                   # Frontend code
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── data/             # Data files for skills, projects, etc.
│   │   ├── lib/              # Utility functions
│   │   ├── pages/            # Page components
│   │   ├── App.tsx           # Main App component
│   │   └── main.tsx          # Entry point
│   └── index.html            # HTML template
├── docs/                     # Documentation and Markdown blog posts
│   ├── blog/                 # Blog posts in Markdown format
│   └── GITHUB_PAGES_DEPLOYMENT.md  # Deployment guide
├── server/                   # Server code (not used in GitHub Pages deployment)
├── shared/                   # Shared code between client and server
├── .github/                  # GitHub Actions workflow for deployment
├── theme.json               # Theme configuration
└── vite.github-pages.config.ts  # Vite config for GitHub Pages
```

## Deployment

This portfolio is configured for easy deployment to GitHub Pages. For detailed deployment instructions, see [GitHub Pages Deployment Guide](docs/GITHUB_PAGES_DEPLOYMENT.md).

Quick deployment steps:

1. Push your code to a GitHub repository
2. Enable GitHub Pages in your repository settings
3. Use the provided GitHub Actions workflow to automate deployment

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- React Markdown
- Lucide React icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by cybersecurity and terminal interfaces
- Icons provided by Lucide React and React Icons