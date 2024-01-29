

function dispayTime() {

    let date = new Date();
    let hourHand = document.getElementById("hour");
    let minHand = document.getElementById("mm");
    let secHand = document.getElementById("second");

    let hhr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrRotation = 30 * hhr;
    let mRotation = 6 * min;
    let secRotation = 6 * sec;

    hourHand.style.transform = `rotate(${hrRotation}deg)`;
    minHand.style.transform = `rotate(${mRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;

}
setInterval(dispayTime, 1000);
