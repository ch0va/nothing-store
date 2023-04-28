const BURGER_ACTIVE = "header_active";
const BODY_ACTIVE = "body_active";
const BTN_BURGER_ACTIVE = "burger__btn_active"

const body = document.querySelector('body')
const btnBurger = document.querySelector(".burger__btn");
const bodyBurger = document.querySelector(".header");
const linksBurger = document.querySelectorAll(".header__links-list a");

btnBurger.addEventListener('click', toggleBurger);

linksBurger.forEach(link => {
    link.addEventListener('click', toggleBurger);
});

function toggleBurger(){
    body.classList.toggle(BODY_ACTIVE)
    bodyBurger.classList.toggle(BURGER_ACTIVE)
    btnBurger.classList.toggle(BTN_BURGER_ACTIVE)
}
