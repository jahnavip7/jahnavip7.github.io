// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Experience section scroll reveal
ScrollReveal().reveal('.experience-box', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.experience-box h3', { delay: 300 });
ScrollReveal().reveal('.experience-box h4', { delay: 400 });
ScrollReveal().reveal('.experience-box .duration', { delay: 500 });
ScrollReveal().reveal('.experience-box p', { delay: 600 });

// Contact info scroll reveal
ScrollReveal().reveal('.contact-info', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.info-item', { interval: 200 });

// Typed.js for experience section (optional - adds typing animation to section titles)
let typed = new Typed('.multiple-text', {
    strings: ['Projects', 'Experience', 'Skills'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Resume download button hover effect
const downloadBtn = document.querySelector('.btn');
if(downloadBtn) {
    downloadBtn.addEventListener('mouseenter', () => {
        downloadBtn.style.transform = 'scale(1.1)';
    });
    
    downloadBtn.addEventListener('mouseleave', () => {
        downloadBtn.style.transform = 'scale(1)';
    });
}

// Active menu highlighter
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Optional: Add loading animation for experience boxes
window.addEventListener('load', () => {
    const experienceBoxes = document.querySelectorAll('.experience-box');
    experienceBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Optional: Add hover effect for contact info items
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('i').style.transform = 'scale(1) rotate(0)';
    });
});

// Optional: Add copy to clipboard functionality for contact information
const contactInfo = document.querySelectorAll('.info-item p, .info-item a');
contactInfo.forEach(info => {
    info.addEventListener('click', function() {
        if(this.textContent && !this.hasAttribute('href')) {
            navigator.clipboard.writeText(this.textContent);
            
            // Create and show tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = 'Copied!';
            this.appendChild(tooltip);
            
            // Remove tooltip after 2 seconds
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        }
    });
});

// Add this CSS for the tooltip
const style = document.createElement('style');
style.textContent = `
    .tooltip {
        position: absolute;
        background: var(--main-color);
        color: var(--second-bg-color);
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, 10px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
`;
document.head.appendChild(style);