document.addEventListener("DOMContentLoaded", function () {
    // Select all feature-card divs
        const featureCards = document.querySelectorAll(".feature-card");

        // Add click event listeners
        featureCards.forEach(card => {
            card.addEventListener("click", function () {
                const target = card.getAttribute("data-target");
                if (target) {
                    // Scroll to the target section
                    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });

                    // Optionally update the URL hash
                    window.location.hash = target;
                }
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.getElementById("mainNavbar");
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // User is scrolling down, hide the navbar
                navbar.classList.add("hidden");
            } else {
                // User is scrolling up, show the navbar
                navbar.classList.remove("hidden");
            }

            // Update the last scroll position
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
        });
    });

    //Initialize AOS
    document.addEventListener('DOMContentLoaded', function () {
        AOS.init({
            duration: 1000, 
            once: false 
        });
    });
