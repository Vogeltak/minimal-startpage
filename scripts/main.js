window.onload = pickBackground;
window.setInterval(update, 1000);

var date;
var time;

// initial set up
update()

function pickBackground() {
    var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#ff9800', '#ff5722', '#795548', '#607d8b'];
    var color = colors[parseInt(Math.random() * colors.length)];
    document.querySelector('.container').style.background = color;
}

function update() {
    date = new Date();

    time = checkZero(date.getHours()) + ':' + checkZero(date.getMinutes()) + ':' + checkZero(date.getSeconds());
    document.querySelector('.clock').textContent = time;

    date = monthToText(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear();
    document.querySelector('.date').textContent = date;
}

function checkZero(n) {
    if (n < 10) {
        return "0" + n;
    }

    return n;
}

function monthToText(n) {
    var months = ['January', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[n];
}
