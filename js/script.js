
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


ScrollReveal().reveal('.experience-box', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.experience-box h3', { delay: 300 });
ScrollReveal().reveal('.experience-box h4', { delay: 400 });
ScrollReveal().reveal('.experience-box .duration', { delay: 500 });
ScrollReveal().reveal('.experience-box p', { delay: 600 });

// Contact info scroll reveal
ScrollReveal().reveal('.contact-info', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.info-item', { interval: 200 });

// Typed.js example
let typed = new Typed('.multiple-text', {
    strings: ['Projects', 'Experience', 'Skills'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Active menu highlighter
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
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

// Optional: Copy to clipboard
const contactInfo = document.querySelectorAll('.info-item p, .info-item a');
contactInfo.forEach(info => {
    info.addEventListener('click', function() {
        if (this.textContent && !this.hasAttribute('href')) {
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

// Add tooltip styles dynamically
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

// Image loading handler
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading class
        img.classList.add('image-loading');
        
        // Handle successful load
        img.addEventListener('load', function() {
            this.classList.remove('image-loading');
            this.classList.add('image-loaded');
        });
        
        // Handle load errors
        img.addEventListener('error', function() {
            console.error('Image failed to load:', this.src);
            // Set default placeholder
            this.src = 'https://via.placeholder.com/350';
            this.classList.remove('image-loading');
            this.classList.add('image-loaded');
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementsByTagName('a');
    Array.from(links).forEach(function(link) {
        if (link.hash) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.getElementById(this.hash.substring(1));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});

// Intersection Observer for sections
const observerOptions = {
    threshold: 0.1
};
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 1s ease forwards';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.getElementsByTagName('section');
    Array.from(sections).forEach(function(section) {
        observer.observe(section);
    });
});
