// Add interactivity in the future if needed
console.log("Welcome to Re Workshop Organic Food Store and Cafe!");
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
// Reveal elements on scroll
const revealElements = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Image zoom functionality
document.querySelectorAll('.item-image').forEach(img => {
    img.addEventListener('click', function () {
        const overlay = document.createElement('div');
        overlay.classList.add('image-overlay');
        overlay.innerHTML = `
            <div class="overlay-content">
                <img src="${this.src}" alt="${this.alt}">
                <button class="close-overlay">Close</button>
            </div>
        `;
        document.body.appendChild(overlay);

        // Close overlay
        overlay.querySelector('.close-overlay').addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
// Dynamic Year in Footer
document.querySelector('.footer p').innerHTML = `&copy; ${new Date().getFullYear()} Re Workshop Organic Food Store and Cafe. All rights reserved.`;
