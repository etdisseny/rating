
window.addEventListener('load', function () {


    var elemento = document.querySelectorAll('.circle');
    var body=document.querySelector('body');
    var elementoId;
    console.log(elemento);

    function pintar(element) {
        reset();
        var num= element.replace("circle_", "");
        varColor=document.getElementById(element);
        for(let i=0 ; i<=num;i++){
            elemento[i].style.background = '#FFA208';
            elemento[i].className += " happy";
        }  
    }

    function reset(){
        for(let r=0 ; r<elemento.length;r++){
        elemento[r].style.background = '#25A681';
        elemento[r].className =elemento[r].className.replace( /(?:^|\s)happy(?!\S)/g , '' );
        }
    }
  
 //Recuperamos id del elemento clickado 

    
        for(let selec = 0; selec < elemento.length; selec++){
            elemento[selec].addEventListener('click', function(){  
                elementoId= this.id; //selecciono id
                pintar(elementoId);
            });
        }
    

//foral clicar fuera recuperamos el estilo inicial
body.addEventListener('click', function(event){
    var elementName= event.target.className; //recupero el className del elemento al que hago clic
   console.log(elementName);
    if(!elementName.includes("circle")){
    reset();
    } 

});
     

        
    

   
    
  
     

  

}); //fin load