
function criarPaleta(array){
const Section=document.getElementById('color-palette');
for(let cor of array){
    const div=document.createElement('div');
    div.classList.add('color');
    div.style.backgroundColor=cor;
    if(cor=='black'){
        div.classList.add('selected');
    }
    div.addEventListener('click',selecionaCor)
    Section.appendChild(div);
}

}criarPaleta(['black','blue','red','yellow']);


function criarDiv(){
const paibody=document.body;
const paiSection2=document.createElement('section');
paiSection2.id='pixel-board';
paibody.appendChild(paiSection2);
    for(let index=0;index<25;index+=1){
       let divpixel=document.createElement('div');
       divpixel.className='pixel';
       divpixel.addEventListener('click',corACor);
        paiSection2.appendChild(divpixel);
    }
}criarDiv();

function selecionaCor(event) {
    let selecCor = document.querySelector('.selected');
    selecCor.classList.remove("selected");
    event.target.classList.add("selected");
}



function corACor(event){
const selecCor = document.querySelector('.selected').style.backgroundColor;
event.target.style.backgroundColor=selecCor;
    }



    const button=document.querySelector('button');
    button.addEventListener('click',function (event){
        const divPixel=document.getElementsByClassName('pixel');
        for(let index=0;index<divPixel.length;index+=1){
        divPixel[index].style.backgroundColor='white';
        }
    });





        
  

  
      

    










