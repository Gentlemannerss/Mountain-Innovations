function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.querySelector('.toggle-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Switch to Light Theme';
    } else {
        themeButton.textContent = 'Switch to Dark Theme';
    }
}