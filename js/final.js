

window.onload  = function final () {


     $('#total').text("Resultado final: " + parseInt(sessionStorage.Resultado) + "/10");


     if(parseInt(sessionStorage.Resultado) == 0){
        $('.final').append("<img id='imagen' src='img/gokuTriste.png'/>");
        $('#comentario').text('Insecto! No sabes nada sobre Dragon Ball');
       
    }
    
    /*Si el resultado final es mayor o igul a 1 y es menor a 7 */
    else if (parseInt(sessionStorage.Resultado) >= 1 && parseInt(sessionStorage.Resultado) < 7){ 
        $('.final').append("<img id='imagen' src='img/gokuTriste.png'/>");
        $('#comentario').text('Necesitas ver más Dragon Ball');

    } 
    /*Si el resultado final es igual o mayor a 7 y menor o igual a 9*/
    else if(parseInt(sessionStorage.Resultado) >= 7 && parseInt(sessionStorage.Resultado) <= 9){
        $('.final').append("<img id='imagen' src='img/gokuFeliz.png'/>");
        $('#comentario').text('Sabes bastante sobre Dragon Ball');
       
    }
    else{

        $('.final').append("<img id='imagen' src='img/gokuND.png'/>");
        $('#comentario').text('Llegaste al más alto nivel! Puntuación perfecta!');

    }
   
    
}




