
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

// to DO:
   
//     poprawic css


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
const transportVal = document.querySelector('span.transport.value');
const transport=document.querySelector('#transport');
const transportPanelL=document.querySelector('span.transport');
const values=document.querySelectorAll('.value');
let finalResult=document.querySelector('div.sum strong');

//Objects
let patternOfChair={
    Clair:500,
    Margarita:720,
    Selena:2100
}
let colorOfChair={
    Czerwony:0,
    Czarny:400,
    Pomarańczowy:300
}
let materialOfChair={
    Tkanina:0,
    Skóra:1200
}
const transportCost = 200;
//functions
function sumAll(arr,displayBox){
    let result=0;
    for(let i=0; i<arr.length;i++){
        arr[i].innerText == '' ? result += 0 : result += parseInt(arr[i].innerText);
        }
    return displayBox.innerText=result;
}
//events
    for(let i=0; i<arrows.length;i++){
        arrows[i].addEventListener('click', ()=>{
        arrows[i].nextElementSibling.classList.contains('showHidden')?
       arrows[i].nextElementSibling.classList.remove('showHidden')
                : arrows[i].nextElementSibling.classList.add('showHidden')
        }
        )};

for (let i = 0; i < calcList.length; i++) {
    calcList[i].addEventListener('click',()=>{
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
        calcList[i].parentElement.classList.remove('showHidden');
        sumAll(values,finalResult);
    });
};

transport.addEventListener('click', () =>{
    
    if(transportVal.innerText == '200'){
        transportVal.innerText = '';
        transportPanelL.innerText = '';
    }else{
        transportVal.innerText = 200;
        transportPanelL.innerText = 'Transport';
    }
    sumAll(values, finalResult);
});