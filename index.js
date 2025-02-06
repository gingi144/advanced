// Typed.js initialization
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Cyber Security Analyst", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Intersection Observer for animating progress bars
document.addEventListener("DOMContentLoaded", function() {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressBars = entry.target.querySelectorAll(".progress");
                progressBars.forEach(progress => {
                    if (!progress.classList.contains("animated")) { // Prevent re-triggering
                        progress.style.width = progress.getAttribute("data-width");
                        progress.classList.add("animated");
                    }
                });
            }
        });
    }, options);

    let skillsSection = document.querySelector("#skills");
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});
