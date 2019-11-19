var slides = document.querySelector(".slide_box");
var count = 0;
var clickbtn = document.querySelectorAll(".btn");
var tabclick = document.querySelectorAll(".tab");
var openmodal = document.querySelector(".click_sear");
var closemodal = document.querySelector(".closemo");


function slide(){
    if(count==2){
        count=0;
    }
    else{
        count++;
    }
    slides.style.left = 1200*(-count)+"px";
}
window.setInterval("slide()",2000);

function click_tab(n){
    var currentbtn = document.querySelector(".btns");
    var currenttab = document.querySelector(".tabs");
    
    if(currentbtn){
        currentbtn.classList.remove("btns");
        currenttab.classList.remove("tabs");
    }
    clickbtn[n].classList.add("btns");
    tabclick[n].classList.add("tabs");
}

function openclick(){
    openmodal.style.display="block";
}

function close(){
    openmodal.style.display="none";
}
openmodal.addEventListener("click",openclick);
openmodal.addEventListener("click",close);