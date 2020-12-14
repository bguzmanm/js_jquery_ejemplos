function  calcular(){
    let operacion = document.getElementById("txtOperacion").value;
    let resultado = document.getElementById("txtResultado");

    if (isNaN(operacion)) {
        var final = function(){
            valor = eval(operacion);
            return valor;
        }

        resultado.value = operacion + " = " + final() + "\n" + resultado.value;

    } else{
        console.log("No ingresaste un algorirmo numérico");
    }

}

function encode(){
    
    document.getElementById("txtFinal").value = encodeURIComponent(document.getElementById("txtOrigen").value);

}

function decode(){
    document.getElementById("txtFinal").value = decodeURIComponent(document.getElementById("txtOrigen").value);
}