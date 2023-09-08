const opinionRed = document.getElementById("img-opinion-red");
const opinionYallow = document.getElementById("img-opinion-yallow");
const opinionGreen = document.getElementById("img-opinion-green");
const amountRed = document.getElementById("amount-votes-red");
const amountYallow = document.getElementById("amount-votes-yallow");
const amountGreen = document.getElementById("amount-votes-green");
const btnStart = document.getElementById("btn-start");

function addVotes(event) {
    if (event.target.id === 'img-opinion-red') {
        const total = Number(amountRed.innerText) + 1;
        return amountRed.innerText = total;
    }

    if (event.target.id === 'img-opinion-yallow') {
        const total = Number(amountYallow.innerText) + 1;
        return amountYallow.innerText = total;
    }

    return amountGreen.innerText = Number(amountGreen.innerText) + 1;

}

function reset() {
    amountRed.innerText = '0';
    amountYallow.innerText = '0';
    amountGreen.innerText = '0';
}

opinionRed.addEventListener('click', addVotes);
opinionYallow.addEventListener('click', addVotes);
opinionGreen.addEventListener('click', addVotes);
btnStart.addEventListener('click', reset);
