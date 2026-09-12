const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isOpen = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open menu');
        }
        const icon = menuToggle && menuToggle.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        }
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        if (window.scrollY >= section.offsetTop - 220) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

function toggleAllProjects(btn) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const isOpen = grid.classList.contains('is-expanded');

    if (isOpen) {
        grid.classList.remove('is-expanded');
        btn.classList.remove('expanded');
        btn.innerHTML = 'View all projects &nbsp;<i class="fas fa-chevron-down"></i>';
    } else {
        grid.classList.add('is-expanded');
        btn.classList.add('expanded');
        btn.innerHTML = 'Show less &nbsp;<i class="fas fa-chevron-down"></i>';
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        const grid = document.getElementById('projectsGrid');
        const viewBtn = document.getElementById('viewAllBtn');

        if (filterValue === 'all') {
            projectCards.forEach(card => { card.style.display = ''; });
            if (grid) grid.classList.remove('is-expanded');
            if (viewBtn) {
                viewBtn.classList.remove('expanded');
                viewBtn.innerHTML = 'View all projects &nbsp;<i class="fas fa-chevron-down"></i>';
                viewBtn.style.display = '';
            }
        } else {
            if (grid) grid.classList.add('is-expanded');
            if (viewBtn) viewBtn.style.display = 'none';
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category') || '';
                card.style.display = categories.includes(filterValue) ? 'block' : 'none';
            });
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        e.preventDefault();
        window.scrollTo({
            top: targetElement.offsetTop - 90,
            behavior: 'smooth'
        });
    });
});

const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.skill-item, .timeline-item, .certificate-card, .project-card, .featured-card, .stat-item'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.08 });

    animateElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(18px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});
