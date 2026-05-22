window.HELP_IMPROVE_VIDEOJS = false;

// =========================================
// AOS Initialization
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 200,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
    delay: 0,
  });
});

// =========================================
// Custom Carousel Implementation
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.custom-carousel');

  carousels.forEach(function (carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.querySelector('.carousel-btn-next');
    let currentIndex = 0;
    let autoplayTimer = null;

    function showSlide(index) {
      // Wrap around
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      // Update slides
      slides.forEach(function (slide, i) {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });

      // Update dots
      dots.forEach(function (dot, i) {
        dot.classList.remove('active');
        if (i === index) {
          dot.classList.add('active');
        }
      });

      currentIndex = index;
    }

    // Button events
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        showSlide(currentIndex - 1);
        resetAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        showSlide(currentIndex + 1);
        resetAutoplay();
      });
    }

    // Dot events
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var index = parseInt(this.getAttribute('data-index'));
        showSlide(index);
        resetAutoplay();
      });
    });

    // Autoplay
    function startAutoplay() {
      autoplayTimer = setInterval(function () {
        showSlide(currentIndex + 1);
      }, 5000);
    }

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      startAutoplay();
    }

    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
        resetAutoplay();
      }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          showSlide(currentIndex + 1); // Swipe left -> next
        } else {
          showSlide(currentIndex - 1); // Swipe right -> prev
        }
        resetAutoplay();
      }
    }, { passive: true });

    // Initialize first slide and start autoplay
    showSlide(0);
    startAutoplay();
  });
});

// =========================================
// GSAP Animations
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // --- Hero Section: Title entrance ---
  const heroTitle = document.querySelector('.publication-title');
  if (heroTitle) {
    gsap.fromTo(heroTitle,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }

  // --- Hero: Conference badge bounce ---
  const badge = document.querySelector('.conference-badge');
  if (badge) {
    gsap.fromTo(badge,
      { opacity: 0, y: -30, scale: 0.8 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.1,
      }
    );
  }

  // --- Hero: Buttons stagger ---
  const linkButtons = document.querySelectorAll('.publication-links .link-block');
  if (linkButtons.length > 0) {
    gsap.fromTo(linkButtons,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.6,
      }
    );
  }

  // --- Animate section titles on scroll ---
  const sectionTitles = document.querySelectorAll('.section-header .title');
  sectionTitles.forEach(title => {
    gsap.fromTo(title,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        duration: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // --- Animate section dividers growing ---
  const dividers = document.querySelectorAll('.section-divider');
  dividers.forEach(div => {
    gsap.fromTo(div,
      { width: 0 },
      {
        width: 60,
        duration: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: div,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // --- Animate section labels ---
  const labels = document.querySelectorAll('.section-label');
  labels.forEach(label => {
    gsap.fromTo(label,
      { opacity: 0, y: 10 },
      {
        opacity: 1, y: 0,
        duration: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: label,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // --- Table rows stagger animation ---
  const tables = document.querySelectorAll('.table-card');
  tables.forEach(table => {
    const rows = table.querySelectorAll('tbody tr');
    gsap.fromTo(rows,
      { opacity: 0, x: -15 },
      {
        opacity: 1, x: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: table,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // --- Comparison cards scale-in ---
  const compCards = document.querySelectorAll('.comparison-card');
  compCards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1,
        duration: 0.2,
        ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // --- BibTeX code block reveal ---
  const bibtexPre = document.querySelector('#BibTeX pre');
  if (bibtexPre) {
    gsap.fromTo(bibtexPre,
      { opacity: 0, y: 20, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bibtexPre,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }

  // --- Overview image reveal ---
  const overviewImg = document.querySelector('#overview');
  if (overviewImg) {
    gsap.fromTo(overviewImg,
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: overviewImg,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }

  // --- Results grid items stagger ---
  const resultItems = document.querySelectorAll('.result-item');
  if (resultItems.length > 0) {
    gsap.fromTo(resultItems,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.2,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: resultItems[0],
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }
});

// =========================================
// Floating Navigation & Back-to-Top
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  const floatingNav = document.getElementById('floating-nav');
  const backToTop = document.getElementById('back-to-top');
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = [];

  // Gather section targets
  navDots.forEach(dot => {
    const href = dot.getAttribute('href');
    if (href && href.startsWith('#')) {
      const sec = document.querySelector(href);
      if (sec) sections.push({ el: sec, dot: dot });
    }
  });

  // Show/hide floating nav and back-to-top on scroll
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // Show floating nav after scrolling 300px
    if (floatingNav) {
      if (scrollY > 300) {
        floatingNav.classList.add('visible');
      } else {
        floatingNav.classList.remove('visible');
      }
    }

    // Show back-to-top after scrolling 600px
    if (backToTop) {
      if (scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Update active nav dot
    let current = null;
    sections.forEach(s => {
      const rect = s.el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        current = s;
      }
    });

    navDots.forEach(d => d.classList.remove('active'));
    if (current) {
      current.dot.classList.add('active');
    }
  });

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll for nav dots
  navDots.forEach(dot => {
    dot.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// =========================================
// Particle Canvas Background
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouseX = -1000;
  let mouseY = -1000;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Track mouse position
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      // Indigo / violet / cyan hues
      const hues = [240, 250, 260, 190, 200];
      this.hue = hues[Math.floor(Math.random() * hues.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Gentle mouse repulsion
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120 * 0.3;
        this.x += (dx / dist) * force;
        this.y += (dy / dist) * force;
      }

      // Wrap around
      if (this.x < -10) this.x = canvas.width + 10;
      if (this.x > canvas.width + 10) this.x = -10;
      if (this.y < -10) this.y = canvas.height + 10;
      if (this.y > canvas.height + 10) this.y = -10;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 70%, 65%, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Create particles
  const particleCount = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 15000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const opacity = (1 - dist / 150) * 0.08;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Cleanup on page unload
  window.addEventListener('beforeunload', function () {
    cancelAnimationFrame(animationId);
  });
});

// =========================================
// Fix GSAP ScrollTrigger Layout Shifts
// =========================================
window.addEventListener('load', function () {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
});
