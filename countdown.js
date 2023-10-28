// JavaScript code in "countdown.js"
window.onload = function () {
    var countDownDate = new Date("Mar 27, 2024 18:00:00").getTime();
    var countdownMessage = "Countdown to the Grand Opening";

    var x = setInterval(function () {
        var now = aDate().getTime();
        var distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var timer = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
            document.getElementById("timer").innerHTML = timer;
        }
    }, 1000);

    // Handle the button click event
    var attendanceButton = document.getElementById("attendance-button");
    attendanceButton.addEventListener("click", function () {
        // Send a POST request to increment the click count
        fetch('counter.php', { method: 'POST' })
            .then(response => response.text())
            .then(data => {
                // Update the click count display
                document.getElementById("click-counter").textContent = data + " people will be there";
            });
    });
};
