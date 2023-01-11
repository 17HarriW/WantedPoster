console.log("Setting up poster interactibility");
const btnAmount = document.getElementById("amount");
const decAmount = document.getElementById("decAmount");
const incAmount = document.getElementById("incAmount");
const image = document.getElementById("image");
const imageLink = document.getElementById("imageLink");
var amount = 10000;

btnAmount.onchange = function (e) {
    amount = parseInt(btnAmount.value);
    if (isNaN(amount)) {
        amount = 10000;
    }
    else if (amount >= 10000000) {
        amount = 9999999;
    }
    else if (amount <= 0) {
        amount = 1;
    }
    btnAmount.value = amount;
}

imageLink.onchange = function (e) {
    image.src = imageLink.value;
}

decAmount.onclick = function (e) {
    if (amount > 1) {
    amount -= 1;
    }
    btnAmount.value = amount;
}

incAmount.onclick = function (e) {
    if (amount < 9999999) {
        amount += 1;
    }
    btnAmount.value = amount;
}