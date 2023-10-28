// JavaScript code in "countdown.js"
window.onload = function () {
    var countDownDate = new Date("Mar 27, 2024 18:00:00").getTime();
    var countdownMessage = "Countdown to the Grand Opening";

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

    // Handle the button click event for confetti
    var confettiButton = document.getElementById("confetti-button");
    confettiButton.addEventListener("click", function () {
        createConfetti();
    });

    function createConfetti() {
        for (var i = 0; i < 100; i++) {
            var confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
