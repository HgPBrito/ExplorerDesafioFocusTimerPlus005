let darkMolde = true;

const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {

    document.documentElement.classList.toggle('light');

    const mode = darkMode ? 'light ' : 'dark';

    event.currentTarget.
    querySelector('span').texContent = `${mode} mode ativado!`;

    darkMode = !darkMolde;

});