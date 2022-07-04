
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


