
/// inicializar los valores, en el array para los distintos tipos de descuento
/// y en el ticket
var descuento = [60, 30, 10]; 
var ticket = 250.0;


// se inicializan variables, mas que nada por prolijidad 
var cantidad=0;
var descuentoTotal= 0;
var totalAPagar = 0;

var parrafoDescEstudiante = document.getElementById("porcDescEstudiante");
var parrafoDescTrainee = document.getElementById("porcDescTrainee");
var parrafoDescJunior = document.getElementById("porcDescJunior");
var parrafoValorTicket = document.getElementById("valorTicket");
//console.log(selCategoriaActivo);

parrafoDescEstudiante.innerHTML=descuento[0]+"%";
parrafoDescTrainee.innerHTML=descuento[1]+"%";
parrafoDescJunior.innerHTML=descuento[2]+"%";
parrafoValorTicket.innerHTML="VALOR DE TICKET $" + ticket;


function CalcularTotal ()

{
    cantidad = document.getElementById("inputCantidad").value;
    var selCategoria = document.getElementById("selCategoria");
    var selCategoriaActivo = selCategoria.options[selCategoria.selectedIndex].value;
    var indexDescuento = parseInt(selCategoriaActivo);
    descuentoTotal = ticket * (descuento[indexDescuento]/100);
    totalAPagar = cantidad*(ticket - descuentoTotal);
    document.getElementById("textoTotalAPagar").innerHTML= totalAPagar;
}

// por si el boton resumen es para calcular se descomenta esto, pero creo que es para otra cosa
//aux=document.getElementById("btnResumen");
//aux.addEventListener('click', CalcularTotal);

// al cambiar la cantidad o la categoria calcula el total

aux2=document.getElementById("inputCantidad");
aux2.addEventListener('click', CalcularTotal);
aux3=document.getElementById("selCategoria");
aux3.addEventListener('click', CalcularTotal);


function BorrarFormulario ()
{
    document.getElementById("formTickets").reset();
    // deja en cero el Total para que se vea en pantalla 0
    CalcularTotal();
    
    
}

aux4=document.getElementById("btnBorrar");
aux4.addEventListener('click', BorrarFormulario);



