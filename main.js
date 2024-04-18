function updateCountdown() {
    var currentTime = new Date();
    var summer = new Date(currentTime.getFullYear(), 5);
    var timeRemaining = summer - currentTime;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    try {
        document.getElementById("summer").innerHTML = days + "д " + hours + "ч " + minutes + "мин " + seconds + "сек";
        document.getElementById("summer-progress").innerHTML = 152 - days + "%";
        document.getElementById("summer-progress").value = 152 - days;
    } catch (error) {  }
}

setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var scroll = new SmoothScroll('.smooth-scroll', {
        speed: 4000
    });
});
