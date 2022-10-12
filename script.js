function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal *parseInt(years)* rate / 100
    var year = new Date().getFullYear()+parseInt(years);
    var resultado = document.getElementById("result")
    resultado.innerText=interest
}
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
    // En esta función agregué al final el porcentaje para todos los valores del rango
   
}
function validaciónprincipal()
{
var principal = document.getElementById("principal").value; 
if(principal <="0") {
    alert ("ingrese un número positivo")
    document.getElementById("principal").focus();
    //Esta función establece el enfoque en el elemento de entrada cuando se introduce un valor inválido y se hace click en aceptar
}
}