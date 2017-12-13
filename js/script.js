let name1 = document.querySelector('.name1');
let name2 = document.querySelector('.name2');
let name3 = document.querySelector('.name3');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let arrowL = document.querySelector('.arrow-d');
let arrowR = document.querySelector('.arrow-d2');
let masa = document.querySelector(".masa");
let alex = document.querySelector(".alex");
let george = document.querySelector(".george");


alex.addEventListener("click", function(){
    name1.classList.add("hide");
    p1.classList.add("hide");
    name2.classList.add("hide");
    p2.classList.add("hide");
    name3.classList.remove("hide");
    p3.classList.remove("hide");
});

masa.addEventListener("click", function(){
    name1.classList.remove("hide");
    p1.classList.remove("hide");
    name2.classList.add("hide");
    p2.classList.add("hide");
    name3.classList.add("hide");
    p3.classList.add("hide");
});

george.addEventListener("click", function(){
    name1.classList.add("hide");
    p1.classList.add("hide");
    name2.classList.remove("hide");
    p2.classList.remove("hide");
    name3.classList.add("hide");
    p3.classList.add("hide");
});
