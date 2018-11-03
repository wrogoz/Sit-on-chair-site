
const clair=document.querySelectorAll('.img__background h3')[0];
const clairBG = clair.parentElement.parentElement;
const margarita = document.querySelectorAll('.img__background h3')[1];
const margaritaBG = margarita.parentElement.parentElement;
clairBG.addEventListener('mouseover', () => clair.classList.add('invisible'));
clairBG.addEventListener('mouseout', () => clair.classList.remove('invisible'));
margaritaBG.addEventListener('mouseover', () => margarita.classList.add('invisible'));
margaritaBG.addEventListener('mouseout', () => margarita.classList.remove('invisible'));

// slider
let presentIndex=0;
let urlArray = ['images/black_chair.png','images/orange_chair.png'];
const sliderImg = document.querySelector('.slider-section__global--blackchair');
const backward = document.querySelectorAll('.slider-section__global--arrow')[0];
const forward = document.querySelectorAll('.slider-section__global--arrow')[1];

forward.addEventListener('click',()=>{
    presentIndex++;
    presentIndex < urlArray.length ?
     sliderImg.setAttribute('src', urlArray[presentIndex]) 
        :presentIndex=0; sliderImg.setAttribute('src', urlArray[presentIndex]);
});
backward.addEventListener('click', () => {
    presentIndex--;
    presentIndex >= 0 ?
        sliderImg.setAttribute('src', urlArray[presentIndex])
        :presentIndex = urlArray.length-1; sliderImg.setAttribute('src', urlArray[presentIndex]);
});
