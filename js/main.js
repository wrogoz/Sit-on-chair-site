
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


//calc section

/* to DO:
    zrobic autozamykanie otwartych li przy ponownym clicku
    poprawic css
    dodac osobno dopisanie transportu na checked!
    */

//DOM
const arrows = document.querySelectorAll('.list_arrow');
const calcList=document.querySelectorAll('.list_panel li');
const colorFromList=document.querySelector('span.color');
const patternFromList=document.querySelector('span.pattern');
const materialFromList = document.querySelector('span.materialType');
const panelTransport = document.querySelector('span.transport');
const colorFromListVal = document.querySelector('span.color.value');
const patternFromListVal = document.querySelector('span.pattern.value');
const materialFromListVal = document.querySelector('span.material.value');
//Objects
let patternOfChair={
    Clair:500,
    Margarita:720,
    Selena:2100
}
let colorOfChair={
    Czerwony:0,
    Czarny:400
}
let materialOfChair={
    Tkanina:0,
    Skóra:1200
}
let transportCost=52;

    for(let i=0; i<arrows.length;i++){
        arrows[i].addEventListener('click', ()=>{
            // tutaj wpisac jesli kliknalem inny element reszta wywala klase showhidden
        arrows[i].nextElementSibling.classList.contains('showHidden')?
       arrows[i].nextElementSibling.classList.remove('showHidden')
                : arrows[i].nextElementSibling.classList.add('showHidden')
        }
        )};

for (let i = 0; i < calcList.length; i++) {
    calcList[i].addEventListener('click',()=>{
        console.log( 'item-'+i+' clicked')
        if (calcList[i].parentElement.getAttribute('data-ListType') == 'pattern'){
            patternFromList.innerText=calcList[i].innerText;
            patternFromListVal.innerText = patternOfChair[calcList[i].innerText];
        } else if (calcList[i].parentElement.getAttribute('data-ListType') == 'colors'){
            colorFromList.innerText = calcList[i].innerText;
            colorFromListVal.innerText = colorOfChair[calcList[i].innerText];
        } else if (calcList[i].parentElement.getAttribute('data-ListType') == 'material'){
            materialFromList.innerText = calcList[i].innerText;
            materialFromListVal.innerText = materialOfChair[calcList[i].innerText];
        }
    });
};