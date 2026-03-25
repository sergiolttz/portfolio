export const updateTheme = (theme) => {
    const root = document.documentElement;
    if (theme) {
        root.style.setProperty('--primary-color', theme.primary);
        root.style.setProperty('--blob-color1', theme.blob1);
        root.style.setProperty('--blob-color2', theme.blob2);
        root.style.setProperty('--color-dark-bg', theme.bg);
    } else {
        root.style.setProperty('--primary-color', '#00bcd4');
        root.style.setProperty('--blob-color1', '#004cff');
        root.style.setProperty('--blob-color2', '#00ffff');
        root.style.setProperty('--color-dark-bg', '#010b24');
    }
};