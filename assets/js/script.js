const menu = document.querySelector('.menu')
const span = document.querySelector('.span')
const nav_menu = document.querySelector('.nav-item')
const arrow = document.querySelector('.main-number__arrow');
const list = document.querySelector('.telephone-list');
const test = document.querySelector('.test-box')


if(menu){
    menu.addEventListener("click", () => {
        menu.classList.toggle("active")
        span.classList.toggle("active");
        nav_menu.classList.toggle("active");
    });
}

const changeColor = () => {
    test.style.cssText = `
        background: chartreuse;
    `;
};

const remove = () => {
    test.style.cssText = `
        background: none;
    `;
}

const showList = () => {
    list.classList.remove('close');
    list.classList.add('show');
}

const closeList = () => {
    list.classList.remove('show');
    list.classList.add('close');
}

arrow.addEventListener('click', () => {

        if (list.classList.contains('close')) {
            showList();
            changeColor();
        }
        else {
            closeList();
            remove();
        }

    });