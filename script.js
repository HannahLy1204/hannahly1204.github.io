//Dark Mode
const darkMode = document.getElementById("darkModeToggle")
const themeDisplay = document.querySelector(".theme-switch-text")

darkMode.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");

    if (themeDisplay.textContent === 'Light') {
        themeDisplay.textContent = 'Dark';
    } else {
        themeDisplay.textContent = 'Light';
    }
})

//Scroll to element
function scrollToElement(selector, instance = 0) {
    //Select all elements matching selector
    const elements = document.querySelectorAll(selector);

    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.nav-links');
})

link2.addEventListener('click', () => {
    scrollToElement('.header');
})

link3.addEventListener('click', () => {
    scrollToElement('.column');
})