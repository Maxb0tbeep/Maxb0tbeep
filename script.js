var countDownDate = new Date("Apr 19, 2008 03:18:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = now - countDownDate;
    
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    distance -= years * (1000 * 60 * 60 * 24 * 365);

    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    distance -= months * (1000 * 60 * 60 * 24 * 30);

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    distance -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(distance / (1000 * 60 * 60));
    distance -= hours * (1000 * 60 * 60);

    var minutes = Math.floor(distance / (1000 * 60));
    distance -= minutes * (1000 * 60);

    var seconds = Math.floor(distance / 1000);

    document.getElementById("age").innerHTML = `I was born:<br><span id="alt-color">${years}</span> years, <span id="alt-color">${months}</span> months, <span id="alt-color">${days}</span> days,<br><span id="alt-color">${hours}</span> hours, <span id="alt-color">${minutes}</span> minutes, <span id="alt-color">${seconds}</span> seconds ago`;

}, 1000);