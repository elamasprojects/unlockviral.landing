// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all modules, bonuses, and FAQ items
document.querySelectorAll('.module, .bonus, .faq-item').forEach(el => {
    observer.observe(el);
});

// Add visible class to CSS
const style = document.createElement('style');
style.textContent = `
    .module, .bonus, .faq-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .module.visible, .bonus.visible, .faq-item.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Track CTA button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // You can add analytics tracking here
        console.log('CTA button clicked');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-new .faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = btn.closest('.faq-q');
            const isOpen = parent.classList.contains('open');
            // Cerrar todos
            document.querySelectorAll('.faq-new .faq-q.open').forEach(q => {
                q.classList.remove('open');
                q.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            // Si no estaba abierto, abrirlo
            if (!isOpen) {
                parent.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Video custom play button logic
    const playBtn = document.getElementById('custom-play-btn');
    const posterImg = document.getElementById('custom-video-poster');
    const video = document.getElementById('custom-video');
    if (playBtn && posterImg && video) {
        playBtn.addEventListener('click', function() {
            playBtn.style.display = 'none';
            posterImg.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });
    }
});
