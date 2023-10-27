document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date("March 27, 2024 18:00:00").getTime();

    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "Countdown expired!";
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            document.getElementById("timer").innerHTML = countdownText;
        }
    }, 1000);
});