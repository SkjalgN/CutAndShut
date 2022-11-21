var looper;
var degrees = 0;
function rotate(el, speed) {
    var elem = document.getElementById("logopic");
    elem.style.transform = "rotate(" + degrees + "deg)";
    looper = setTimeout('rotate(\'' + el + '\',' + speed + ')', speed);
    degrees++;
    if (degrees > 359) {
        clearTimeout(looper);
        degrees = 0;
    }
}

function mouseOn(element) {
    rotate("logopic", 5);
}