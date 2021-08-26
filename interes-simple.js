function limpiar() {
	document.getElementById("intereres-simple").reset();
	document.getElementById("intereres-compuesto").reset();
	document.getElementById("area-cuadrilatero").reset();
}

function intereresSimple(){ 

	var capital= document.getElementById("montoPrestamo").value;
	var t= document.getElementById("plazoPago").value;
	var r= document.getElementById("tasaAnual").value;
	//var p= r/100;

	interes =(capital*r*t)/1200;
	var Cf = parseFloat(capital) + parseFloat(interes); 
	

	document.write("El interes resultante es:" + interes, "<br> El monto total a pagar sera:" + Cf);
}








