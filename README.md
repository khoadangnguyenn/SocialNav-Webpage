# SocialWalker: Learning a Social Compliance Cost from Web-Scale Human Walking Videos for Plug-and-Play Robot Navigation

![Teaser Figure](./static/images/overview_paper.png)

This repository contains the source code for the **SocialWalker** project website. SocialWalker is a framework that learns a social compliance cost directly from large-scale human walking videos without requiring manual social annotations or robot-collected interaction data.

The site available at `https://khoadangnguyenn.github.io/SocialNav-Webpage/`.
 
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
    │   └── social-nav-vlm.css  # Custom CSS
    ├── js/
    │   └── social-nav-vlm.js   # Custom JavaScript
    ├── images/                 # Project images and figures
    └── video/                  # Demo videos
```

## 📝 License

This website template is adapted from [Nerfies](http://nerfies.github.io/), licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
