window.addEventListener("load", startup, false);
window.addEventListener("load", start, false);
var body = document.querySelector("body");
function start() {
    body.style.display = "block";

}





var colorJacket;
var colorLogo;
var put = document.getElementById("put");
var putlogo = document.getElementById("putlogo");
var mask = document.querySelector('#mask');
var maskLogo = document.querySelector('#mask__logo');

function startup() {
    put.addEventListener('input', function () {
        this.value = "#" + this.value.slice(1);
    });
    colorJacket = document.querySelector("#color__jacket");
    colorLogo = document.querySelector("#color__logo");

    colorJacket.addEventListener("input", updateFirst, false);
    colorJacket.addEventListener("change", updateAll, false);
    colorJacket.select();
    put.addEventListener("input", updatejacket, false);
    put.addEventListener("change", updatejacketAll, false);

    colorLogo.addEventListener("input", updateFirstlogo, false);
    colorLogo.addEventListener("change", updateAlllogo, false);
    colorLogo.select();
    putlogo.addEventListener("input", updatejacketlogo, false);
    putlogo.addEventListener("change", updatejacketlogoAll, false);
    putlogo.addEventListener('input', function () {
        this.value = "#" + this.value.slice(1);
    });
}

var check = document.querySelector(".description__input_checkbox");
check.onclick = function () {
    if (check.checked) { maskLogo.style.display = "block" }
    else { maskLogo.style.display = "none" }

}

function updateFirst(event) {
    mask.style.backgroundColor = event.target.value;
    put.value = colorJacket.value;

}
function updateAll(event) {
    document.querySelectorAll("#mask").forEach(function (mask) {
        mask.style.backgroundColor = event.target.value;

    });

}
function updatejacket(event) {
    if (this.value.length >= 7) {
        colorJacket.value = event.target.value;
        mask.style.backgroundColor = event.target.value;
    }


}
function updatejacketAll(event) {
    document.querySelectorAll("#mask").forEach(function (mask) {
        mask.style.backgroundColor = event.target.value;
    });
}




function updateFirstlogo(event) {


    maskLogo.style.fill = event.target.value;
    putlogo.value = colorLogo.value;

}
function updateAlllogo(event) {
    document.querySelectorAll("#mask__logo").forEach(function (maskLogo) {
        maskLogo.style.fill = event.target.value;
    });
}

function updatejacketlogo(event) {
    if (this.value.length >= 7) {
        colorLogo.value = event.target.value;
        maskLogo.style.fill = event.target.value;
    }

}
function updatejacketlogoAll(event) {
    document.querySelectorAll("#mask__logo").forEach(function (maskLogo) {
        maskLogo.style.fill = event.target.value;
    });
}





var buttons = document.querySelectorAll(".description__sizes-button");
for (const button of buttons) {
    button.addEventListener('click', function () {
        clearactive()
        button.classList.add('active');
    })
}

function clearactive() {
    buttons.forEach((button) => {
        button.classList.remove('active');
    })
}




var sizes = document.querySelector(".description__table");
var popup = document.querySelector(".popup");
var background = document.querySelector(".background");
var close = document.querySelector(".close");
sizes.addEventListener('click', function () {
    clearreal()
    popup.style.animation = ' ani 1s forwards';
    close.style.animation = '';
    popup.classList.add('real');
    background.classList.add('real');
    close.classList.add('real');
})
close.addEventListener('click', function () {
    popup.style.animation = ' wave 1s forwards';
    close.style.animation = ' wavew 1s forwards';
    popupcart.style.animation = ' wavew 0.5s forwards';
    setTimeout(() => { clearreal(); }, 800)
})
background.addEventListener('click', function () {
    popup.style.animation = ' wave 1s forwards';
    close.style.animation = ' wavew 1s forwards';
    popupcart.style.animation = ' wavew 0.5s forwards';
    setTimeout(() => { clearreal(); }, 800)
})
function clearreal() {
    popup.classList.remove('real');
    background.classList.remove('real');
    close.classList.remove('real');
    popupcart.classList.remove('real');
}

var cart = document.querySelector(".description__cart");
const popupcart = document.querySelector(".popup__cart");
cart.addEventListener('click', function sa() {
    clearreal()
    popupcart.style.animation = ' anim 0.5s forwards';
    close.style.animation = '';
    popupcart.classList.add('real');
    background.classList.add('real');
    close.classList.add('real');
})

var small = document.querySelector('.popup__cart__wrapper__small');
const minus = document.querySelector('.popup__cart__wrapper__small__button-minus');
const plus = document.querySelector('.popup__cart__wrapper__small__button-plus');
const closecart = document.querySelector('.popup__cart__wrapper__small__button-close');

small.addEventListener('mouseover', () => hover());
small.addEventListener('mouseleave', () => Nohover());

function hover() {
    minus.style.opacity = '1';
    plus.style.opacity = '1';
    closecart.style.opacity = '1';
}

function Nohover() {
    minus.style.opacity = '0.5';
    plus.style.opacity = '0.5';
    closecart.style.opacity = '0.5';
}


