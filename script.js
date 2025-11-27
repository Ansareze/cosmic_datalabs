/* ============================================
   COSMIC DATALABS - JAVASCRIPT
   Smooth Scroll, Animations & Interactions
   ============================================ */

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenuToggle');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// ===== FADE-UP ANIMATION ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Unobserve after animation to improve performance
            // fadeUpObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-up class
document.addEventListener('DOMContentLoaded', () => {
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => fadeUpObserver.observe(el));
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenuToggle && navLinks) {
        if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

// ===== MODAL FUNCTIONALITY =====
const applyBtn = document.getElementById('applyBtn');
const applyModal = document.getElementById('applyModal');
const modalClose = document.getElementById('modalClose');
const floatingCTA = document.getElementById('floatingCTA');

// Open modal
if (applyBtn) {
    applyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (applyModal) {
            applyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

if (floatingCTA) {
    floatingCTA.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('#apply');
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        if (applyModal) {
            applyModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close modal when clicking outside
if (applyModal) {
    applyModal.addEventListener('click', (e) => {
        if (e.target === applyModal) {
            applyModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && applyModal && applyModal.classList.contains('active')) {
        applyModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== PARALLAX EFFECT FOR HERO SECTION =====
const hero = document.getElementById('hero');
const cosmicBg = document.querySelector('.cosmic-bg');

if (hero && cosmicBg) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const parallaxSpeed = 0.5;
            cosmicBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// ===== FLOATING CTA VISIBILITY =====
const floatingCTAObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const ctaSection = document.getElementById('apply');
        if (ctaSection) {
            const ctaRect = ctaSection.getBoundingClientRect();
            const isCTAVisible = ctaRect.top < window.innerHeight && ctaRect.bottom > 0;
            
            if (floatingCTA) {
                if (isCTAVisible) {
                    floatingCTA.style.opacity = '0';
                    floatingCTA.style.pointerEvents = 'none';
                } else {
                    floatingCTA.style.opacity = '1';
                    floatingCTA.style.pointerEvents = 'auto';
                }
            }
        }
    });
}, { threshold: 0.1 });

if (floatingCTA) {
    const ctaSection = document.getElementById('apply');
    if (ctaSection) {
        floatingCTAObserver.observe(ctaSection);
    }
}

// ===== ENHANCED HOVER EFFECTS FOR CARDS =====
const cards = document.querySelectorAll('.benefit-card, .week-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===== SCROLL PROGRESS INDICATOR (Optional Enhancement) =====
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(135deg, #4C84FF 0%, #A259FF 100%);
        z-index: 10000;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.pageYOffset;
        const progress = scrolled / windowHeight;
        progressBar.style.transform = `scaleX(${progress})`;
    });
};

// Uncomment to enable scroll progress bar
// createScrollProgress();

// ===== LAZY LOADING FOR IMAGES (if you add images later) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== CONSOLE MESSAGE =====
console.log('%c🌌 Cosmic DataLabs', 'font-size: 20px; font-weight: bold; color: #4C84FF;');
console.log('%cWhere Data Meets Intelligence.', 'font-size: 14px; color: #A259FF;');
console.log('%cBuilt with ❤️ for future ML professionals', 'font-size: 12px; color: #4FE3C1;');

