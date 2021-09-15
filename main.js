const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



//Listener click on form(register)
const modal = $('.modal');
const formRegister = $('.form-register');
const formLogin = $('.form-login');
const btnRegister = $('#register');
const btnLogin = $('#login');
const headerLogin = $('.header-login-r');
const headerRegister = $('.header-register-l');
const overlayBtn= $('.modal__overlay');
const btnBackRegister = $('.btn-back-register');
const btnBackLogin = $('.btn-back-login');


btnRegister.onclick = (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    formRegister.style.display = 'block';
}

headerLogin.onclick = () => {
    modal.style.display = 'flex';
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
}

overlayBtn.onclick = () => {
    modal.style.display = 'none';
    formRegister.style.display = 'none';
}

btnBackRegister.onclick = () => {
    modal.style.display = 'none';
    formRegister.style.display = 'none';
}


//Listener click on form(login)
btnLogin.onclick = (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
}

headerRegister.onclick = () => {
    modal.style.display = 'flex';
    formRegister.style.display = 'block';
    formLogin.style.display = 'none'
}

overlayBtn.onclick = () => {
    modal.style.display = 'none';
    formLogin.style.display = 'none';
}

btnBackLogin.onclick = () => {
    modal.style.display = 'none';
    formLogin.style.display = 'none';
}

//bar skiing for mobile
const listItem = $('.header__sort-bar-item');
const listItems = $$('.header__sort-bar-item');
const line = $('.line');

line.style.left = listItem.offsetLeft + 'px';
line.style.width = listItem.offsetWidth + 'px';

listItems.forEach((item) => {

    item.onclick = (e) => {
        e.preventDefault();

        line.style.left = item.offsetLeft + 'px';
        line.style.width = item.offsetWidth + 'px';
        }
})

