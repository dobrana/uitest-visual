const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Function to toggle theme
function toggleTheme() {
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Set initial theme
function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        if (themeSwitcher) {
            body.classList.add('dark-theme');
        }
    }
}

applyInitialTheme();

// Event listener
if (themeSwitcher) {
    themeSwitcher.addEventListener('click', toggleTheme);
} 