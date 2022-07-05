
function criarDiv(){
const paibody=document.body;
const paiSection2=document.createElement('section');
paiSection2.id='pixel-board';
paibody.appendChild(paiSection2);
    for(let index=0;index<25;index+=1){
       let divpixel=document.createElement('div');
       divpixel.className='pixel';
        paiSection2.appendChild(divpixel);
    }
}criarDiv();






const cor1=document.querySelector('#cor-1');
cor1.classList.add('selected');           //requisito6

const cor2=document.querySelector('#cor-2');
const cor3=document.querySelector('#cor-3');
const cor4=document.querySelector('#cor-4');

cor1.addEventListener('click',selecionaCor);
cor2.addEventListener('click',selecionaCor);
cor3.addEventListener('click',selecionaCor);
cor4.addEventListener('click',selecionaCor);

function selecionaCor(event) {
    let selecCor = document.querySelector('.selected');
    selecCor.classList.remove("selected");
    event.target.classList.add("selected");
}











