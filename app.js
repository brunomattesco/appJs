let xp = 0;
let hp = 25;
let gold = 50;

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const xpText = document.querySelector("#xpText")
const hpText = document.querySelector("#hpText")
const goldText = document.querySelector("#goldText")

function goStore() {
    button1.innerText = "Buy 20 health (25 gold)"
    button2.innerText = "Buy a new weapon (35 gold)"
    button3.innerText = "Go town?"
}

button1.onclick = goStore();
