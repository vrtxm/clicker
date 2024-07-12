var balance = 0;
var boost = 1;

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