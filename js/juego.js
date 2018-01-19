var respuestas = [3,2,4,1,1,2,4,3,2,4]; //Respuestas correctas
 
 function zoomIn(){
    $('.flecha').addClass("zoomIn"); 
}

function zoomOut(){            
    $('.flecha').addClass("zoomOut"); 
}

function Total(){
    sessionStorage.setItem("Resultado" , parseInt(sessionStorage.Resultado) + 1);
} 


function preguntas (NumPregunta) {

    /*Define si "resultado" tiene Hijos. Si tiene un Hijo, lo elimina*/
   $("resultado").empty(); 

    /*Verifica que haya un elemento de Radio seleccionado*/
    var selected = $("#" + respuestas[NumPregunta]).is(":checked");
    var contador = 0;
    var elements = $(".radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    
    /*Si ningún elemento de Radio está seleccionado*/
    if(contador == 0){
        $('#resultado').text('Por favor seleccione una respuesta');
        $('#resultado').addClass("incorrecto");
    }
    /*Si el elemento de Radio seleccionado es el correcto*/
    else if (selected) { 
        $('#resultado').removeClass('incorrecto');
        $('#resultado').text('Correcto!');
        $('#resultado').addClass("correcto");

        Total();
    } 
     /*Si el elemento de Radio seleccionado NO es el correcto*/
    else {
        $('#resultado').text("La respuesta correcta es: " + " "  + $("#" + respuestas[NumPregunta]).val());
        $('#resultado').addClass("incorrecto");
    }
     /*Se deshabilita cada elemento de Radio. También se deshabilita el Botón*/
    if (contador > 0){
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }  
        $('#boton').attr("disabled",true); 

        setInterval(zoomIn, 300);
        setInterval(zoomOut, 600);
 
    }
    
}
