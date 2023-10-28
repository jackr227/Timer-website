// JavaScript code in "countdown.js"
window.onload = function () {
    var countDownDate = new Date("Mar 27, 2024 18:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var timer = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
            document.getElementById("timer").innerHTML = timer;
        }
    }, 1000);
};
