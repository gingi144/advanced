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

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressBars = document.querySelectorAll(".progress");
                progressBars.forEach(progress => {
                    progress.style.width = progress.getAttribute("data-width");
                });
                observer.disconnect();
            }
        });
    }, options);

    observer.observe(document.querySelector("#skills"));
});
