const ALIMENTO = document.getElementById("alimento");
const PESOVIVO = document.getElementById("pesoVivo");
const PESOCANAL = document.getElementById("pesoEnCanal");


function calcularCA(totalalimento , pesovivo){
let ca = totalalimento 



}

function mostrarEntradas(){
	let opcion = document.getElementById("opciones");
	let entrada = opcion.value;
	let op1 = document.getElementById("conversional");
	let op2 = document.getElementById("pesocanal");
	let bt = document.getElementById("btn");

	console.log(entrada);


	if (entrada == 1){

		
		op1.style.visibility = "visible";
		btn.style.visibility = "visible";
		op2.style.visibility = "hidden";


	}
	if (entrada == 2){

		op2.style.visibility = "visible";
		btn.style.visibility = "visible";
		op1.style.visibility = "hidden";
	}

 

}