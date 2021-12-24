function clickCube() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    var deg = getRandomInt(360);
    console.log ("#clickCube", red, green, blue, deg);

    document.getElementById("cube").style.boxShadow = "0 0 5px rgba(" + red + ", " + green + ", " + blue + ", 1)," + 
    "0 0 25px rgba(" + red + ", " + green + ", " + blue + ", 1)," + 
    "0 0 50px rgba(" + red + ", " + green + ", " + blue + ", 1)";
    document.getElementById("cube").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("container").style.transform = "rotate(" + deg + "deg)";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
