/* ==========================================================================
   TJ Distributors — Main Script
   ========================================================================== */

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const hero = document.getElementById('hero');
const productTrack = document.querySelector('.product-track');

/* ── Navbar: transparent → glass on scroll (hero pages only) ────────────── */

function handleNavScroll() {
    if (!hero) return;
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ── Mobile menu toggle ─────────────────────────────────────────────────── */

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ── Scroll reveal ──────────────────────────────────────────────────────── */

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Product carousel: clone items for seamless infinite scroll ─────────── */

if (productTrack) {
    const items = Array.from(productTrack.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        productTrack.appendChild(clone);
    });
}
