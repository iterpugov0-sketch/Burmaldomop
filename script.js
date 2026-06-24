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

// ===== АККОРДЕОН =====
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

console.log('🚀 Burmaldamop лендинг загружен!');
