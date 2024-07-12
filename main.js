var balance = 0;
var boost = 1;
var passive = 0;
var passiveInterval;

function tap(element) {
    balance = balance + (1 * boost);
    element.innerHTML = balance;
    console.log(balance);
}

function buyboost(elem) {
    if (balance >= 50) {
        balance = balance - 50;
        boost++
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
    if (balance >= 100) {
        balance = balance - 100;
        passive++
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
