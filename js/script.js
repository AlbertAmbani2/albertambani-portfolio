// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');

if (mobileMenuToggle && sidebarMenu) {
    mobileMenuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebarMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!sidebarMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebarMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const sidebarLinks = sidebarMenu.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebarMenu.classList.remove('active');
        });
    });
}

// Email form submission
const emailForm = document.querySelector('.email-form');
if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        console.log('Email submitted:', email);
        // Add your email handling logic here
        alert('Thank you for your interest! I will get back to you soon.');
        this.reset();
    });
}

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    }
});

// Warm, elegant scroll reveal animations
(function initScrollReveals() {
    const revealTargets = [
        { selector: '.hero-content', direction: 'from-left' },
        { selector: '.hero-image', direction: 'from-right', glow: true },
        { selector: '.about-label' },
        { selector: '.about-left', glow: true },
        { selector: '.about-card', glow: true },
        { selector: '.stat-pill', stagger: 90 },
        { selector: '.portfolio-title' },
        { selector: '.portfolio-subtitle' },
        { selector: '.portfolio-item', stagger: 110 },
        { selector: '.education h2' },
        { selector: '.section-subtitle' },
        { selector: '.education-item', stagger: 110 },
        { selector: '.contact h2' },
        { selector: '.contact-info', glow: true },
        { selector: '.footer' }
    ];

    const revealItems = [];

    revealTargets.forEach(({ selector, direction, glow, stagger = 0 }) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add('reveal');

            if (direction) {
                element.classList.add(direction);
            }

            if (glow) {
                element.classList.add('reveal-glow');
            }

            if (stagger) {
                element.style.setProperty('--reveal-delay', `${Math.min(index * stagger, 440)}ms`);
            }

            revealItems.push(element);
        });
    });

    if (!revealItems.length) {
        return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(element => {
            element.classList.add('is-visible');
            element.style.removeProperty('--reveal-delay');
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                const delay = Number.parseInt(entry.target.style.getPropertyValue('--reveal-delay'), 10) || 0;

                window.setTimeout(() => {
                    entry.target.style.removeProperty('--reveal-delay');
                }, delay + 900);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
    });

    revealItems.forEach(element => observer.observe(element));
})();

// Keep footer year current
const currentYear = document.getElementById('currentYear');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

//function to send e-email
function sendMail() {
  // Read form fields; ensure the inputs have the expected ids in the HTML (name, email, phone, message)
  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  }
  emailjs.send("service_yldlz1s", "template_0sanifr", parms).then(alert("Message sent successfully!"))
}
