# SocialWalker: Learning a Social Compliance Cost from Web-Scale Human Walking Videos for Plug-and-Play Robot Navigation

![Teaser Figure](./static/images/overview_paper.png)

This repository contains the source code for the **SocialWalker** project website. SocialWalker is a framework that learns a social compliance cost directly from large-scale human walking videos without requiring manual social annotations or robot-collected interaction data.

**Conference**: CoRL 2026

## 🚀 Quick Start

To view the website locally, simply open `index.html` in your web browser, or start a local HTTP server:

```bash
# Using Python 3
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## 📁 Repository Structure

```
SocialNav-Webpage/
├── index.html                  # Main webpage containing the paper's content
├── README.md                   # This file
└── static/
    ├── css/
    │   ├── bulma.min.css       # Bulma CSS framework
    │   ├── fontawesome.all.min.css
    │   └── social-nav-vlm.css  # Custom CSS for SocialWalker homepage
    ├── js/
    │   └── social-nav-vlm.js   # Custom JavaScript (GSAP animations, carousels)
    ├── images/                 # Project images and figures
    └── video/                  # Demo videos
```

## 🎨 Features & Technologies

The website is built with a focus on modern, engaging, and premium design to showcase the SocialWalker research effectively:

- **AOS (Animate On Scroll) & GSAP**: Used for smooth scroll-triggered animations and fluid transitions.
- **Glassmorphism UI**: Premium visual effects for cards and navigation elements.
- **Custom Interactive Carousels**: Custom-built, responsive carousels for showcasing figures and implementation steps without relying on buggy external slider libraries.
- **Bulma CSS**: A lightweight flexbox-based framework for responsive layouts.
- **Academicons & FontAwesome**: High-quality icons for academic links (arXiv, Paper, GitHub, YouTube).

## ✏️ How to Update Content

If you need to update the paper details before final release, you can modify `index.html`:
- **Paper Info**: Update title, authors, affiliations, and links (PDF, arXiv, Video, Code) in the `hero-section`.
- **Abstract & Text**: Modify the paragraphs in the `#abstract-section` and `#overview-section`.
- **Images**: Replace the images in `static/images/` with the final figures while keeping the same file names, or update the `src` paths in the HTML.
- **Tables**: Results are hard-coded in standard HTML tables in `#tables-section`.

## 📄 Deployment (GitHub Pages)

To publish this website for the public:
1. Push this repository to GitHub.
2. Go to **Settings** → **Pages**.
3. Set the source branch to `main` (and folder to `/root`).
4. The site will be available at `https://<yourusername>.github.io/<repository-name>/`.

## 📝 License

This website template is adapted from [Nerfies](http://nerfies.github.io/), licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
