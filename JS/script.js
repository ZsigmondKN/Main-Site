let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");
let workingOn = document.querySelector("#working-on");
let archive1 = "https://zsigmondkn.github.io/Main-Site/ASSETS/archive-1.png";
let archive2 = "https://zsigmondkn.github.io/Main-Site/ASSETS/archive-2.png";
let descriptionBtn1 = document.querySelector("#description-Btn1");
let description1 = document.querySelector("#description1");

descriptionBtn1.innerHTML = "Description";

function nextImage() {
    workingOn.src = archive2;
    arrowsChange()
}

function previousImage() {
    workingOn.src = archive1;
    arrowsChange()
}

function arrowsChange() {
    if(workingOn.src === archive1) {
        backward.style.display = "none";
        forward.style.display = "block";
        } else {
        backward.style.display = "block";
        forward.style.display = "none";
    }
}

function arrowChange1() {
    forward.style.opacity = 0.5;
    backward.style.opacity = 0.5;
}

function arrowChange2() {
    forward.style.opacity = 1;
    backward.style.opacity = 1;
}

function DescriptionToggle1() {
    if(descriptionBtn1.innerHTML === "Description") {
        workingOn.style.opacity = 0;
        description1.style.opacity = 1;
        workingOn.src = archive1;
        forward.style.display = "none";
        backward.style.display = "none";
        descriptionBtn1.innerHTML = "Images";
    } else if(descriptionBtn1.innerHTML === "Images") {
        workingOn.style.opacity = 1;
        description1.style.opacity = 0;
        arrowsChange();
        descriptionBtn1.innerHTML = "Description";
    }
}

arrowsChange();
forward.addEventListener("click", nextImage);
backward.addEventListener("click", previousImage);
workingOn.addEventListener("mouseover", arrowChange1);
description1.addEventListener("mouseover", arrowChange1);
workingOn.addEventListener("mouseout", arrowChange2);
descriptionBtn1.addEventListener("click", DescriptionToggle1);
