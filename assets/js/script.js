document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("scrollProgressBar");
    const cursorGlow = document.querySelector(".cursor-glow");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("show");
        });
    }

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (progressBar) {
            progressBar.style.width = scrolled + "%";
        }
    }

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    document.addEventListener("mousemove", (e) => {
        if (cursorGlow) {
            cursorGlow.style.left = e.clientX + "px";
            cursorGlow.style.top = e.clientY + "px";
        }
    });

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [36, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: "easeOutExpo"
                });

                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14
    });

    revealElements.forEach((el) => revealObserver.observe(el));

    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
        anime({
            targets: ".hero-title",
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1200,
            easing: "easeOutExpo"
        });
    }

    const heroDesc = document.querySelector(".hero-desc");
    if (heroDesc) {
        anime({
            targets: ".hero-desc",
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1200,
            delay: 180,
            easing: "easeOutExpo"
        });
    }

    const heroButtons = document.querySelectorAll(".hero-buttons .btn");
    if (heroButtons.length) {
        anime({
            targets: heroButtons,
            opacity: [0, 1],
            translateY: [24, 0],
            delay: anime.stagger(120, { start: 300 }),
            duration: 900,
            easing: "easeOutExpo"
        });
    }

    const statCards = document.querySelectorAll(".stat-card");
    if (statCards.length) {
        anime({
            targets: statCards,
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.9, 1],
            delay: anime.stagger(120, { start: 350 }),
            duration: 900,
            easing: "easeOutBack"
        });
    }

    anime({
        targets: ".feature-card, .dog-card, .about-card, .contact-card",
        translateY: [
            { value: -4, duration: 2200 },
            { value: 0, duration: 2200 }
        ],
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true,
        delay: anime.stagger(180)
    });

    anime({
        targets: ".spark",
        scale: [
            { value: 1, duration: 1000 },
            { value: 1.4, duration: 1000 }
        ],
        opacity: [
            { value: 0.4, duration: 1000 },
            { value: 1, duration: 1000 }
        ],
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true,
        delay: anime.stagger(250)
    });

    const magneticButtons = document.querySelectorAll(".magnetic");

    magneticButtons.forEach((button) => {
        button.addEventListener("mousemove", function (e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "translate(0px, 0px)";
        });
    });

    anime({
        targets: ".hero-image-frame, .profile-image img",
        scale: [
            { value: 1, duration: 2400 },
            { value: 1.015, duration: 2400 }
        ],
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true
    });

    anime({
        targets: ".site-header",
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1100,
        easing: "easeOutExpo"
    });

    const footer = document.querySelector(".site-footer");
    if (footer) {
        anime({
            targets: ".footer-content > *",
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(150, { start: 700 }),
            duration: 1000,
            easing: "easeOutExpo"
        });
    }
});