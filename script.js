const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

/* Local Storage */

const form = document.getElementById('newsletter');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('input-email').value;
    let convertData = JSON.stringify(email);

    localStorage.setItem('email', convertData);
})
