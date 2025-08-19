function scrollToTarget(target) {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    window.location.hash = target;
}

function initFeatureCardScrolling() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            if (target) {
                scrollToTarget(target);
            }
        });
    });
}

function handleNavbarScroll(navbar, lastScroll) {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll.value) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScroll.value = currentScroll <= 0 ? 0 : currentScroll;
}

function initNavbarHideOnScroll() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;
    const lastScroll = { value: 0 };
    window.addEventListener('scroll', () => handleNavbarScroll(navbar, lastScroll));
}

function initAOS() {
    AOS.init({
        duration: 1000,
        once: false
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initFeatureCardScrolling();
    initNavbarHideOnScroll();
    initAOS();
});
