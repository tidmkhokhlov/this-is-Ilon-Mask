// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Сохранение выбора темы в localStorage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Светлая тема';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Темная тема';
        }
    });
}

// Проверка сохраненной темы при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Светлая тема';
    }
});

// Бургер-меню для мобильных устройств
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Переключение навигации
        nav.classList.toggle('nav-active');

        // Анимация ссылок
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Анимация бургера
        burger.classList.toggle('toggle');
    });
}

navSlide();

