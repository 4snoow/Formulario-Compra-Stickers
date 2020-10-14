/*Criar o incremento dos numeros*/ 
let incrementar = document.querySelector('#incremento');
let decrementar = document.querySelector('#decremento');
let numb = document.querySelector('#number');

incrementar.addEventListener('click', function(){
    if(numb.value <15){
        numb.value = parseInt(numb.value) + 1;
    };
  if(numb.value==15){
      alert("Você só pode colocar no máximo 15 stickers.")
  }  
    
});

decrementar.addEventListener('click', function(){
   if(numb.value >0){
    numb.value = parseInt(numb.value) - 1;
   }
    
});


/* disabled do botão*/ 
let dsbt = document.querySelector(".disab");
let input = document.querySelector("input[type=text]");
dsbt.disabled=true;

document.querySelector("input[type=checkbox]").addEventListener('input', function(event){
    
    if(this.checked){
        dsbt.disabled = false;
    } else{
        dsbt.disabled = true;
    }
});


/*Disable do botao com os stickers*/ 

input.onchange = change;


function change(e){
    if(input.value == 0){
        dsbt.disabled= true;
    } if(input.value != 0 ){
        dsbt.disabled=false;
    }
}



/*Script para validação do formulário*/

let form = document.querySelector('.form');
form.onsubmit=function(e){
    e.preventDefault();
    
    let mensage= document.querySelector('.mensage');
    mensage.innerHTML='Formulário Enviado com Sucesso!';

    this.reset();
}




