/* =========================================
   Elegance Ikebukuro - Main JavaScript
   Elegant interactions and animations
   ========================================= */

(function() {
    'use strict';

    /* Mobile Menu */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            this.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    /* Header Scroll Effect */
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
        }
        lastScroll = currentScroll;
    });

    /* Smooth Scroll */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({top: targetPosition, behavior: 'smooth'});
                }
            }
        });
    });

    /* Scroll Reveal Animation */
    const observerOptions = {root: null, rootMargin: '0px', threshold: 0.1};
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.therapist-card, .feature-item, .price-item, .access-item');
    animateElements.forEach(element => {observer.observe(element);});

    /* Active Navigation Highlight */
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    /* Therapist Card Hover Effect */
    const therapistCards = document.querySelectorAll('.therapist-card');
    therapistCards.forEach(card => {
        card.addEventListener('mouseenter', function() {this.style.zIndex = '10';});
        card.addEventListener('mouseleave', function() {this.style.zIndex = '1';});
    });

    /* Scroll to Top on Page Load */
    window.addEventListener('load', function() {
        setTimeout(function() {window.scrollTo(0, 0);}, 0);
    });

    /* Parallax Effect for Hero */
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            if (scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    /* Add Entrance Animation to Hero Content */
    window.addEventListener('load', function() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            setTimeout(function() {
                heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }
    });

    /* Therapist Card Stagger Animation */
    const therapistObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                therapistObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.therapist-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        therapistObserver.observe(card);
    });

    /* Price Item Animation */
    const priceObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, index * 150);
                priceObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.price-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        priceObserver.observe(item);
    });

    /* Feature Item Animation */
    const featureObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                featureObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.feature-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        featureObserver.observe(item);
    });

    /* Phone Number Click Tracking */
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone call initiated:', this.getAttribute('href'));
        });
    });

    /* Prevent Scroll Restoration */
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    /* Loading State */
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    /* Console Message */
    console.log('%cElegance Ikebukuro', 'font-size: 24px; font-weight: bold; color: #2d5d3f;');
    console.log('%cPremium Relaxation Salon', 'font-size: 14px; color: #d4af37;');
    console.log('%c池袋駅徒歩1分 | 03-6912-6211', 'font-size: 12px; color: #666;');

})();
