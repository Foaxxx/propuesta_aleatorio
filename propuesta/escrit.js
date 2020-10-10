var cajasi = document.getElementById("caja_si");
var cajano = document.getElementById("caja_no");
cajasi.addEventListener("click", alerta);
cajano.addEventListener("mouseover", moverCaja)
function alerta(){
    alert("Gracias bb uwu");
}
 
function moverCaja() {
    var x = aleatorio(-500, 100)
    var y = aleatorio(0, 1137)
    cajasi.style.float = "none";
    cajano.style.marginTop =  x +"px";
    cajano.style.marginLeft = y +"px"

}


//x = entre -500 y 100
//y entre 0 y 1137

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}