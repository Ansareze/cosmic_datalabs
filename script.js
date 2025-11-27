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
            const navLinks = document.getElementById('navLinks');
            if (mobileMenu && navLinks) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    });
});

// ===== HANDLE ANCHOR LINKS FROM OTHER PAGES =====
// When landing on index.html with an anchor hash, scroll to that section
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        if (target) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
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
    // If it's a link to enroll.html, let it work normally
    // If it's an anchor link, handle smooth scroll
    floatingCTA.addEventListener('click', (e) => {
        const href = floatingCTA.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // If it's a page link (like enroll.html), let it work normally
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
// Only hide/show floating CTA if it's an anchor link, not a page link
if (floatingCTA) {
    const href = floatingCTA.getAttribute('href');
    if (href && href.startsWith('#')) {
        const floatingCTAObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const ctaSection = document.getElementById(href.substring(1));
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
        
        const ctaSection = document.getElementById(href.substring(1));
        if (ctaSection) {
            floatingCTAObserver.observe(ctaSection);
        }
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

/* ===== NEW FUNCTIONALITY FOR MULTI-PAGE SITE ===== */

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        // Set initial state
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            if (!answer || !answer.classList.contains('faq-answer')) {
                return;
            }
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== question) {
                    const otherAnswer = q.nextElementSibling;
                    if (otherAnswer && otherAnswer.classList.contains('faq-answer')) {
                        q.setAttribute('aria-expanded', 'false');
                        otherAnswer.style.maxHeight = '0';
                    }
                }
            });
            
            // Toggle current FAQ
            if (isExpanded) {
                question.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0';
                question.closest('.faq-item').classList.remove('active');
            } else {
                question.setAttribute('aria-expanded', 'true');
                // Set max-height to a large value to allow smooth transition
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.closest('.faq-item').classList.add('active');
            }
        });
    });
});

// ===== FORM VALIDATION =====
// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const consent = document.getElementById('consent');
        const formMessage = document.getElementById('formMessage');
        
        let isValid = true;
        
        // Reset previous errors
        clearFormErrors(contactForm);
        
        // Validate name
        if (!name.value.trim()) {
            showError('name', 'Name is required');
            isValid = false;
        }
        
        // Validate email
        if (!email.value.trim()) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone (optional but if provided, should be valid)
        if (phone.value.trim() && !isValidPhone(phone.value)) {
            showError('phone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate subject
        if (!subject.value) {
            showError('subject', 'Please select a subject');
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            showError('message', 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        // Validate consent
        if (!consent.checked) {
            showError('consent', 'You must agree to the Privacy Policy');
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid - in production, you would send this to your server
            // For now, show success message
            formMessage.textContent = 'Thank you! Your message has been sent. We\'ll get back to you soon.';
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            // In production, replace this with actual form submission:
            // fetch('/api/contact', { method: 'POST', body: formData })
            //   .then(response => response.json())
            //   .then(data => { /* handle success */ })
            //   .catch(error => { /* handle error */ });
        } else {
            formMessage.textContent = 'Please correct the errors below.';
            formMessage.className = 'form-message error';
        }
    });
}

// Enrollment Form Validation
const enrollForm = document.getElementById('enrollForm');
if (enrollForm) {
    enrollForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form fields
        const name = document.getElementById('enrollName');
        const email = document.getElementById('enrollEmail');
        const phone = document.getElementById('enrollPhone');
        const college = document.getElementById('enrollCollege');
        const interest = document.getElementById('enrollInterest');
        const terms = document.getElementById('enrollTerms');
        const formMessage = document.getElementById('enrollFormMessage');
        const paymentSection = document.getElementById('paymentSection');
        
        let isValid = true;
        
        // Reset previous errors
        clearFormErrors(enrollForm);
        
        // Validate name
        if (!name.value.trim()) {
            showError('enrollName', 'Name is required');
            isValid = false;
        }
        
        // Validate email
        if (!email.value.trim()) {
            showError('enrollEmail', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError('enrollEmail', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone
        if (!phone.value.trim()) {
            showError('enrollPhone', 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phone.value)) {
            showError('enrollPhone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate interest
        if (!interest.value) {
            showError('enrollInterest', 'Please select your course interest');
            isValid = false;
        }
        
        // Validate terms
        if (!terms.checked) {
            showError('enrollTerms', 'You must agree to the Terms & Conditions');
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid - show payment section
            formMessage.textContent = 'Form submitted successfully! Please proceed to payment.';
            formMessage.className = 'form-message success';
            paymentSection.style.display = 'block';
            paymentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // In production, you would:
            // 1. Save enrollment data to your server
            // 2. Generate a payment order with Razorpay
            // 3. Initialize Razorpay checkout
        } else {
            formMessage.textContent = 'Please correct the errors below.';
            formMessage.className = 'form-message error';
        }
    });
}

// Helper Functions for Form Validation
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearFormErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    const errorFields = form.querySelectorAll('.error');
    
    errorMessages.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
    
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Basic phone validation - accepts international format
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// ===== RAZORPAY PAYMENT INTEGRATION (PLACEHOLDER) =====
// Replace this with your actual Razorpay integration
const razorpayButton = document.getElementById('razorpayButton');
if (razorpayButton) {
    razorpayButton.addEventListener('click', () => {
        // In production, initialize Razorpay checkout here
        // Example:
        /*
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID',
            amount: 499900, // Amount in paise (₹4,999)
            currency: 'INR',
            name: 'Cosmic DataLabs',
            description: '12-Week ML Training Program',
            handler: function(response) {
                // Handle successful payment
                window.location.href = 'thankyou.html';
            },
            prefill: {
                email: document.getElementById('enrollEmail').value,
                contact: document.getElementById('enrollPhone').value,
                name: document.getElementById('enrollName').value
            },
            theme: {
                color: '#4C84FF'
            }
        };
        const rzp = new Razorpay(options);
        rzp.open();
        */
        
        // For now, redirect to thank you page (remove in production)
        alert('Payment integration placeholder. In production, this will open Razorpay checkout.');
        // window.location.href = 'thankyou.html';
    });
}

// ===== MOBILE MENU IMPROVEMENTS =====
// Update mobile menu to close on link click
const navLinks = document.querySelector('.nav-links');
if (navLinks) {
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            if (mobileMenuToggle && window.innerWidth <= 768) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
}

