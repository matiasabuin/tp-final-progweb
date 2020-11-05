function validar(){

	var expRegNombre = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expRegTelefono = /^[0-9]{4}[-]{0,1}[0-9]{4}$/;
	var expRegDNI = /^\d+$/;

	//validaciones para que el formulario de covid este completo correctamente
	
	if (!nombre.value){
		alert("Por favor, ingrese nombre y apellido.");
		nombre.focus();
		return false;
	}
	else if (!expRegNombre.exec(nombre.value))
	{
		alert("Por favor, ingrese un nombre correcto.");
		setTimeout(function () { nombre.focus() }, 1);
		return false;
	}
	
	if (!dni.value){
		alert("Por favor, ingrese su DNI.");	
		dni.focus();
		return false;
	}
	else if (!expRegDNI.exec(dni.value))
	{
		alert("Por favor, ingrese un DNI correcto.");
		dni.focus();
		return false;
	}

    if (!tel.value){
		alert("Por favor, ingrese un número de teléfono.");	
		tel.focus();
		return false;
    }
	else if (!expRegTelefono.exec(tel.value))
	{
		alert("Por favor, ingrese un número de teléfono correcto.");
		setTimeout(function () { tel.focus() }, 1);
		return false;
	}
	
	var option=document.getElementsByName("exterior");

	if (!(option[0].checked || option[1].checked)) {
		alert("Por favor, responda todas las preguntas.");
		return false;
	}

	var option=document.getElementsByName("fiebre");

	if (!(option[0].checked || option[1].checked)) {
		alert("Por favor, responda todas las preguntas.");
		return false;
	}
	
	var option=document.getElementsByName("cabeza");

	if (!(option[0].checked || option[1].checked)) {
		alert("Por favor, responda todas las preguntas.");
		return false;
	}

	var option=document.getElementsByName("tos");

	if (!(option[0].checked || option[1].checked)) {
		alert("Por favor, responda todas las preguntas.");
		return false;
	}
	
	var option=document.getElementsByName("garganta");

	if (!(option[0].checked || option[1].checked)) {
		alert("Por favor, responda todas las preguntas.");
		return false;
	}

	var option=document.getElementsByName("respirar");

	if (!(option[0].checked || option[1].checked)) {
		alert("Por favor, responda todas las preguntas.");
		return false;
	}

}

	//funciones para que muestre u oculte preguntas secundarias dependiendo la opcion marcada en el radio correspondiente

function siMostrarPaises(){
    document.getElementById('mostrarPaises').style.display ='block';
}

function noMostrarPaises(){
    document.getElementById('mostrarPaises').style.display ='none';
} 

function siMostrarDireccion(){
    document.getElementById('mostrarDireccion').style.display ='block';
}

function noMostrarDireccion(){
    document.getElementById('mostrarDireccion').style.display ='none';
} 

$(document).ready(function()
{
	//por cada radio que tenga el si chequeado incrementa el valor del contador y lo muestra cuando se envia el formulario

	$("#enviartest").click(function () 
	{
		contador=0;
		
		if( $("#testcovid input[id='fiebreSi']:radio").is(':checked')) 
		{  
				contador++;  
		} 

		if( $("#testcovid input[id='cabezaSi']:radio").is(':checked')) 
		{  
				contador++;  
		} 

		if( $("#testcovid input[id='tosSi']:radio").is(':checked')) 
		{  
				contador++;  
		} 

		if( $("#testcovid input[id='gargantaSi']:radio").is(':checked')) 
		{  
				contador++;  
		} 
		
		if( $("#testcovid input[id='respirarSi']:radio").is(':checked')) 
		{  
				contador++;  
		} 
			
		alert(`El formulario fue completado correctamente. ${contador} síntomas de COVID-19 fueron registrados.`);
		$("#testcovid").submit();  	
	});
});

function validarContacto(){

	//valida el formulario de la pagina contacto

	var expRegNombre = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var expRegTelefono = /^[0-9]{4}[-]{0,1}[0-9]{4}$/;
	
	if (!nombre.value){
		alert("Por favor, ingrese nombre y apellido.");
		nombre.focus();
		return false;
	}
	else if (!expRegNombre.exec(nombre.value))
	{
		alert("Por favor, ingrese un nombre correcto.");
		setTimeout(function () { nombre.focus() }, 1);
		return false;
	}

	if (!email.value)
	{
		alert("Por favor, ingrese su email.");
		email.focus();
		return false;
	}
	else if (!expRegEmail.exec(email.value))
	{
		alert("Por favor, ingrese un email correcto (example@ex.com).");
		setTimeout(function () { email.focus() }, 1);
		return false;
	}

    if (!tel.value){

    }
	else if (!expRegTelefono.exec(tel.value))
	{
		alert("Por favor, ingrese un número de teléfono correcto.");
		setTimeout(function () { tel.focus() }, 1);
		return false;
	}

}

function contadorCaracteres()
{
	//cuenta los caracteres en tiempo real en la consulta

    var maxLength = 1000;
    var strLength = document.getElementById("consulta").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
		document.getElementById("caracteresRestantes").innerHTML = 
		'<span style="color: red;">Ha excedido el limite de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}
