
window.addEventListener('load', function () {


    function cambiarColor(varColor) {
        varColor.style.background = '#FFA208';
    }
    function cambiarIcono(varIco){
        varIco.className += " happy";
    }

    function recuperarColor(recColor){
        recColor.style.background = '#25A681';
       
    }
    function recuperarIcono(recIco){
        recIco.className =recIco.className.replace( /(?:^|\s)happy(?!\S)/g , '' );
    }


    var elemento = document.querySelectorAll('.circle');
    
    var body=document.querySelector('body');
  

    
   
   
    for(let selec = 0; selec < elemento.length; selec++){

     
        /* elemento[selec].addEventListener('mouseover', function(){
            cambiarIcono(this);

        });

        elemento[selec].addEventListener('mouseout', function(){
            recuperarIcono(this);
        }); */
           
                      
                
            
       
        //al premer s'han de quedar fixe amb les anteriors
            elemento[selec].addEventListener('click', function() {
               
                var elementName= event.target.className; //recupero el className del elemento al que hago clic
            
                if(elementName=="circle"){
                    for(let i = 0; i<elemento.length; i++){
                        recuperarColor(elemento[i]);  
                    }
                    
                } 
                
                for(let i = 0; i<=selec; i++){
                    cambiarColor(elemento[i]);  
                }
                 
            });

        //al clicar fuera recuperamos el estilo inicial
            body.addEventListener('click', function(event){
                var elementName= event.target.className; //recupero el className del elemento al que hago clic
            
                if(elementName!="circle"){
                    recuperarColor(elemento[selec]);
                } 

            });


            
           
   };//for

                    

  

}); //fin load