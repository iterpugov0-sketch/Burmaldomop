// ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ =====
const toggleBtn = document.getElementById('themeToggle');
const html = document.documentElement;

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
const DOWNLOAD_LINKS = {
    windows: 'https://drive.google.com/drive/folders/1vGqve4XARI83IGWP935jA4K77i6wTGDU?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto',
    android: 'https://iterpugov0-sketch.github.io/Burmaldomop/app-release.apk'
};

document.getElementById('downloadWindows').href = DOWNLOAD_LINKS.windows;
document.getElementById('downloadAndroid').href = DOWNLOAD_LINKS.android;

// ===== АККОРДЕОН "О ПРИЛОЖЕНИИ" =====
const accordionBtn = document.getElementById('accordionBtn');
const accordionContent = document.getElementById('accordionContent');
let isOpen = false;

accordionBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    
    if (isOpen) {
        accordionContent.classList.add('open');
        accordionBtn.querySelector('.accordion-arrow').classList.add('open');
        accordionBtn.innerHTML = `
            <span class="accordion-icon">📖</span>
            О приложении
            <span class="accordion-arrow open">▼</span>
        `;
    } else {
        accordionContent.classList.remove('open');
        accordionBtn.querySelector('.accordion-arrow').classList.remove('open');
        accordionBtn.innerHTML = `
            <span class="accordion-icon">📖</span>
            О приложении
            <span class="accordion-arrow">▼</span>
        `;
    }
});

console.log('🚀 Paroshvabry лендинг загружен!');
