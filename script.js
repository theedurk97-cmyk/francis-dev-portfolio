/* =========================================
   FRANCIS.DEV PORTFOLIO
   JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    /* =====================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================== */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";

        });

    });


    /* =====================================
       DARK / LIGHT MODE
    ===================================== */

    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeToggle.textContent = "🌙";

            localStorage.setItem("theme", "light");

        } else {

            themeToggle.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        }

    });


    /* =====================================
       LOAD SAVED THEME
    ===================================== */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙";

    }


    /* =====================================
       SCROLL REVEAL ANIMATION
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================
       CURRENT YEAR
    ===================================== */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================
       TERMINAL TEXT EFFECT
    ===================================== */

    const typingElement =
        document.querySelector(".typing");

    if (typingElement) {

        const text =
            "Building. Learning. Improving.";

        let index = 0;

        typingElement.textContent = "";

        function typeText() {

            if (index < text.length) {

                typingElement.textContent +=
                    text.charAt(index);

                index++;

                setTimeout(typeText, 55);

            }

        }

        setTimeout(typeText, 900);

    }


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =====================================
       PREVENT EMPTY PROJECT LINKS
       FROM JUMPING TO TOP
    ===================================== */

    document.querySelectorAll(
        '.project-link[href="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            alert(
                "This project link will be available soon."
            );

        });

    });

});