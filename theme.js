let theme = document.getElementById('theme')
document.querySelector('.theme').onclick = () => {
    theme = theme === '<link id="theme" rel="stylesheet" href="css/darkStyle.css">'
        ? '<link id="theme" rel="stylesheet" href="css/lightStyle.css">'
        : '<link id="theme" rel="stylesheet" href="css/darkStyle.css">'
    document.getElementById('theme').innerHTML = theme
}
