const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.classList.replace('bi-moon-fill', 'bi-brightness-high');
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeIcon.classList.replace('bi-moon-fill', 'bi-brightness-high');
        localStorage.setItem('theme', 'dark'); // save preference
    } else {
        themeIcon.classList.replace('bi-brightness-high', 'bi-moon-fill');
        localStorage.setItem('theme', 'light'); // save preference
    }
});