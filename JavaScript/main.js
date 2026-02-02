// Fade-in elements on scroll
const sections = document.querySelectorAll(".section, .card, .skills-container span");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(sec => observer.observe(sec));

// Add animation class dynamically
document.addEventListener("DOMContentLoaded", () => {
    sections.forEach(el => el.classList.add("hidden"));
});
