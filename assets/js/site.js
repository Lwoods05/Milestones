const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setCopyrightYear() {
    const yearElement = document.querySelector('[data-current-year]');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-box');

    navLinks.forEach((link) => {
        const linkHref = link.getAttribute('href');
        const isCurrentPage = linkHref === currentPage || (currentPage === '' && linkHref === 'index.html');

        if (isCurrentPage) {
            link.setAttribute('aria-current', 'page');
            link.classList.add('is-active');
        } else {
            link.removeAttribute('aria-current');
            link.classList.remove('is-active');
        }
    });
}

function setTheme(theme) {
    const isDarkMode = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isDarkMode));
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
    }

    localStorage.setItem('lws-theme', theme);
}

function initializeThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) {
        return;
    }

    const savedTheme = localStorage.getItem('lws-theme');
    const preferenceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (preferenceDark ? 'dark' : 'light');
    setTheme(initialTheme);

    toggle.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(nextTheme);
    });
}

function initializeNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.top-nav');

    if (!navToggle || !nav) {
        return;
    }

    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        nav.setAttribute('aria-hidden', String(!isOpen));
    });

    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
}

function initializeReadMore() {
    const readMoreButtons = document.querySelectorAll('[data-read-more-target]');

    readMoreButtons.forEach((button) => {
        const targetId = button.getAttribute('data-read-more-target');
        const target = document.getElementById(targetId);

        if (!target) {
            return;
        }

        const updateState = () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            target.hidden = isExpanded;
            button.textContent = isExpanded ? 'Read less' : 'Read more';
        };

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isExpanded));
            updateState();
        });

        button.setAttribute('aria-expanded', 'false');
        target.hidden = true;
        button.textContent = 'Read more';
    });
}

function initializeCardSelectors() {
    const cards = document.querySelectorAll('.card, .about-card');

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            cards.forEach((item) => item.classList.remove('is-selected'));
            card.classList.add('is-selected');
        });
    });
}

function initializeFeaturedCard() {
    const featuredCard = document.querySelector('.content-grid .card');

    if (featuredCard) {
        featuredCard.classList.add('is-featured');
    }
}

function validateField(field) {
    const errorId = `${field.id}-error`;
    const errorElement = document.getElementById(errorId);
    const fieldValue = field.value.trim();

    let isValid = true;

    if (field.required && fieldValue === '') {
        isValid = false;
    }

    if (field.type === 'email' && fieldValue !== '' && !emailPattern.test(fieldValue)) {
        isValid = false;
    }

    if (field.tagName === 'SELECT' && fieldValue === '') {
        isValid = false;
    }

    if (errorElement) {
        errorElement.hidden = isValid;
    }

    return isValid;
}

function showSuccessState(form) {
    const submitButton = form.querySelector('button[type="submit"]');

    if (!submitButton) {
        return;
    }

    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message sent!';
    submitButton.disabled = true;

    window.setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function initializeForms() {
    const forms = document.querySelectorAll('.about-form');

    forms.forEach((form) => {
        const fields = Array.from(form.querySelectorAll('input, select'));

        fields.forEach((field) => {
            field.addEventListener('input', () => validateField(field));
            field.addEventListener('blur', () => validateField(field));
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let isFormValid = true;

            fields.forEach((field) => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                return;
            }

            form.reset();
            showSuccessState(form);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setCopyrightYear();
    highlightActiveNav();
    initializeThemeToggle();
    initializeNavToggle();
    initializeReadMore();
    initializeFeaturedCard();
    initializeCardSelectors();
    initializeForms();
});
