const themeSwitchers = document.querySelectorAll('.change-Theme');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () {
        applyTheme(this.getAttribute('data-theme'));
        localStorage.setItem('theme',this.dataset.theme);
    });
});


function applyTheme(themeName) {
    const themeUrl = `theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme=localStorage.getItem('theme');
if(activeTheme===null){
    applyTheme('light');
}else{
    applyTheme(activeTheme);
}