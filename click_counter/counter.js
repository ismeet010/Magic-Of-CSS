var count = 0;
var countit = document.getElementById('count');

function funincrement() {
    count++;
    if (count > 0) {
        countit.style.color = "green";
    }
    if (count == 0) {
        countit.style.color = "black";
    }
    countit.innerText = count;
}

function fundecrement() {
    count--;
    if (count < 0) {
        countit.style.color = "red";
    }
    countit.innerText = count;
}

function funsave() {
    document.getElementById('history').innerHTML += count + " -> ";
}