const btn1 = document.querySelector(".slidesBtn1");
const btn2 = document.querySelector(".slidesBtn2");
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length - 1;
let slideAtual = 0;

btn1.addEventListener('click', function() {
    
    if (slideAtual == 0){
        slideAtual = totalSlides;
    } else {
    slideAtual--;
    }
    slides.style.transform = `translateX(${slideAtual * -100}%)`;
})

btn2.addEventListener('click', function() {
    
    if (slideAtual == totalSlides) {
        slideAtual = 0;
    } else {
    slideAtual++;
    }
    slides.style.transform = `translateX(${slideAtual * -100}%)`;
})