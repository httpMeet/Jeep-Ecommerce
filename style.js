let redbtn = document.getElementById("red");
let greenbtn = document.getElementById("green");
let blackbtn = document.getElementById("black");
let cars = document.getElementById("cars");

blackbtn.onclick = function(){
    cars.style.backgroundImage = "url(blackthar.webp)"
}
redbtn.onclick = function(){
    cars.style.backgroundImage = "url(redthar.webp)"
}
greenbtn.onclick = function(){
    cars.style.backgroundImage = "url(greenthar.webp)"
}
