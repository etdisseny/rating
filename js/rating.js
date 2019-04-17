
window.addEventListener('load', function () {

    function cambiarColor(variable) {
        variable.style.background = '#FFA208';
    };
    function recuperarColor(variable){
        variable.style.background = '#25A681';
    }

    /*var icono = document.querySelectorAll('.far');
    for (var i in icono) {
        icono[i].classList.remove('fa-frown');
        icono[i].classList.add('fa-grin');
    }*/
    function elementName(event){
        alert(event.target.nodeName);
    }
    var body=document.querySelector('body');

    body.addEventListener('click', function(){
        elementName(event);
    });

    var elemento = document.querySelectorAll('.circle');

   for(let selec=0 ; selec<elemento.length; selec++) {

    //Ejercicio 1- al estar encima cambia el color y al salir recupera el color
      /* elemento[selec].addEventListener('mouseover', function(){
            cambiarColor(this);
       });
      
      elemento[selec].addEventListener('mouseout', function(){
            recuperarColor(this);
       });*/
     
       
    //al premer s'han de quedar fixe amb les anteriors
        elemento[selec].addEventListener('click',function(){
            while(selec>=0){
                cambiarColor(elemento[selec]);
                selec--;
               
            }
        });

    };
        


  

}); //fin load