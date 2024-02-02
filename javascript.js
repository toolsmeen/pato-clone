// started left-menu js 

let menu = document.querySelector(".left-menu");
let icon= document.getElementById("menu");
let menuNav = document.getElementById("icon");


icon.addEventListener("click",function(){
    menu.classList.add("kk");
})
menuNav.addEventListener("click",function(){
    menu.classList.remove("kk");
})