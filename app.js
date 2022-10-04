const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solarize');
const body = document.body;

const darkTheme = 'dark';
const lightTheme = 'light';
const solarTheme = 'solar';

// Button Event Handlers

darkButton.addEventListener('click', () => {
    if (body.classList.contains(lightTheme)) {
        body.classList.replace(lightTheme, darkTheme);
    } else {
        body.classList.replace(solarTheme, darkTheme);
    }
    localStorage.setItem('theme', darkTheme);
});


lightButton.addEventListener('click', () => {
    if (body.classList.contains(darkTheme)) {
        body.classList.replace(darkTheme, lightTheme);
    } else {
        body.classList.remove(solarTheme);
        body.classList.add(lightTheme);
    }
    localStorage.setItem('theme', lightTheme);
});

solarButton.addEventListener('click', () => {
        if(body.classList.contains(darkTheme)) {
        body.classList.replace(darkTheme, solarTheme);
        } else if(body.classList.contains(lightTheme)) {
        body.classList.replace(lightTheme, solarTheme);
        }
        localStorage.setItem('theme', solarTheme);
    }
);