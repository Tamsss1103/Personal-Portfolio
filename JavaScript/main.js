const sections = document.querySelectorAll(".section, .card, .skills-container span");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});
