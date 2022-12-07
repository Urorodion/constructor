

var i = 0;
var a = 19500;
var click = 0;

const number = document.querySelector('.popup__cart__wrapper__small__number');
const price = document.querySelector('.popup__cart__wrapper__small__price');
const Allprice = document.querySelector('.popup__cart__allPrice');
const deleteall = document.querySelector('.popup__cart__wrapper__small__delete');
const constructor = document.querySelector('.popup__cart__wrapper__small__name');
for (const button of buttons) {
    cart.addEventListener('click', function () {
        if (button.classList.contains('active')) {
            const content = button.innerHTML;
            const newContent = document.createTextNode('Пуховик CONSTRUCTOR ( ' + content + ', основной цвет: ' + put.value
                + ', цвет логотипа ' + putlogo.value + ')');

            constructor.appendChild(newContent);

            if (i >= 1) {
                if (button.id == button.id) {
                    console.log(button.id)
                    constructor.innerHTML = ('Пуховик CONSTRUCTOR ( ' + content + ', основной цвет: ' + put.value
                        + ', цвет логотипа ' + putlogo.value + ')');
                }
                else { constructor.appendChild(newContent); }
            }
            //  var numberContent = document.createTextNode(i + 1);
            number.innerHTML = (++i);
            price.textContent = `${a.toLocaleString("ru", {
                minimumFractionDigits: 0
            })}`;

            Allprice.textContent = 'Сумма: ' + `${a.toLocaleString("ru", {
                minimumFractionDigits: 0
            })}`;
            click++
        }
    })
}

plus.addEventListener('click', function () {
    if (i >= 1) {
        ++i;
        a = a + 19500;
        a.toLocaleString('ru-RU');
        number.textContent = i;
        price.textContent = `${a.toLocaleString("ru", {
            minimumFractionDigits: 0
        })}`;
        Allprice.textContent = 'Сумма: ' + `${a.toLocaleString("ru", {
            minimumFractionDigits: 0
        })}`;
    }
}
)
minus.addEventListener('click', function () {
    if (i > 1) {
        --i;
        a = a - 19500;
        a.toLocaleString('ru-RU');
        number.textContent = i;
        price.textContent = `${a.toLocaleString("ru", {
            minimumFractionDigits: 0
        })}`;
        Allprice.textContent = 'Сумма: ' + `${a.toLocaleString("ru", {
            minimumFractionDigits: 0
        })}`;
    }
    else {
        closes()
    }
}
)
const border = document.querySelector('.border');
var flag = 1;
closecart.addEventListener('click', () => {
    if (flag == 1) {
        closes();
        flag = 2;
    }
    else {
        returnall()

    }

})

const all = small.children;
const svg = document.querySelector('.delete__svg')
function closes() {

    all.item(1).style.display = 'none';
    all.item(2).style.display = 'none';
    all.item(3).style.display = 'none';
    all.item(4).style.display = 'none';
    all.item(5).style.display = 'none';
    Allprice.style.display = 'none';
    deleteall.style.display = 'block';
    svg.style.display = 'none';
    all.item(6).style.animation = ' anim 0.5s forwards';

    const Back = document.createElement('div');
    const Backtext = document.createTextNode('Вернуть');
    Back.appendChild(Backtext);
    Back.classList.add('block')
    all.item(6).appendChild(Back)
    border.style.animation = 'timer 5s forwards ease-out';
    deleteall.textContent = 'Вы удалили:' + all.item(1).textContent;

    border.addEventListener('animationend', () => {
        close.style.animation = ' wavew 1s forwards';
        popupcart.style.animation = ' wavew 0.5s forwards';
        setTimeout(() => {
            deleteall.textContent = '';
            border.style.animation = '';
            border.style.width = '0%';
            constructor.textContent = '';
            returnall()
            clearreal()

        }, 500)
    })


}



function returnall() {
    flag = 1;
    all.item(1).style.display = 'block';
    all.item(2).style.display = 'block';
    all.item(3).style.display = 'block';
    all.item(4).style.display = 'block';
    all.item(5).style.display = 'block';
    border.style.animation = '';
    border.style.width = '0%';
    Allprice.style.display = 'block';
    svg.style.display = 'block';
    deleteall.style.display = 'none';
    document.querySelector('.block').style.display = 'none';


}
