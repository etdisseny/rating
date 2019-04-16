
window.addEventListener('load', function () {

    function cambiarColor(variable) {
        variable.style.background = '#1C9996';
    };
    function recuperarColor(variable){
        variable.style.background = '#FFB463';
    }

    /*var icono = document.querySelectorAll('.far');
    for (var i in icono) {
        icono[i].classList.remove('fa-frown');
        icono[i].classList.add('fa-grin');
    }*/
    

    var elemento = document.querySelectorAll('.circle');

   //funciona pero da un error???
   /* for (var i in elemento) {
        var seleccionado= elemento[i];
        seleccionado.addEventListener('mouseover', function() {
            cambiarColor(this);
        });
    }*/


    elemento.forEach(function(valor){
        valor.addEventListener('mouseover', function(){
            cambiarColor(this);
        });
        valor.addEventListener('mouseout',function(){
            recuperarColor(this);
        })
    });



}); //fin load