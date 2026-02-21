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


