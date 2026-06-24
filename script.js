// ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ =====
const toggleBtn = document.getElementById('themeToggle');
const html = document.documentElement;

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateButton(savedTheme);

toggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButton(newTheme);
});

function updateButton(theme) {
    toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ===== ССЫЛКИ НА СКАЧИВАНИЕ =====
// ⚠️ ЗАМЕНИТЕ НА РЕАЛЬНЫЕ ССЫЛКИ ПОСЛЕ ЗАГРУЗКИ ФАЙЛОВ
const DOWNLOAD_LINKS = {
    windows: '#',
    android: '#'
};

document.getElementById('downloadWindows').href = DOWNLOAD_LINKS.windows;
document.getElementById('downloadAndroid').href = DOWNLOAD_LINKS.android;

console.log('🚀 Paroshvabry лендинг загружен!');
