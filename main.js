var balance = 0;
var boost = 1;
var passive = 0;
var passiveInterval;
var price = 50;
var pricepassive = 100;

function tap(element) {
    balance = balance + (1 * boost);
    element.innerHTML = balance;
    console.log(balance);
}

function buyboost(elem) {
    if (balance >= price) {
        balance = balance - price;
        price = price * 2;
        boost++
        document.getElementById('cena').innerHTML = "Цена: " + price;
        document.getElementById('lvl').innerHTML = "Lvl. " + (boost - 1);
        document.getElementById('tap').innerHTML = balance;
    } else {
        elem.innerHTML = "Недостаточно монет";
        elem.style.background = 'red';
        setTimeout(() => {
            elem.innerHTML = "Купить";
            elem.style.background = "white";
        }, 2000);
    }
}

function passiveincome(eleme) {
    if (balance >= pricepassive) {
        balance = balance - pricepassive;
        pricepassive = pricepassive * 2
        passive++
        document.getElementById('cenapassive').innerHTML = "Цена: " + pricepassive
        document.getElementById('pass').innerHTML = passive + "/сек";
        document.getElementById('tap').innerHTML = balance;
        console.log(passive);

        if (passiveInterval) {
            clearInterval(passiveInterval);
        }
        passiveInterval = setInterval(() => {
            balance = balance + passive;
            document.getElementById('tap').innerHTML = balance;
        }, 1000);
    } else {
        eleme.innerHTML = "Недостаточно монет";
        eleme.style.background = 'red';
        setTimeout(() => {
            eleme.innerHTML = "Улучшить";
            eleme.style.background = "white";
        }, 2000);
    }
}
