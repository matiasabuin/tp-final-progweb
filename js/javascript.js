function toolbarResponsive() {
    var x = document.getElementById("toolbar");
    if (x.className === "toolbar") {
      x.className += " responsive";
    } else {
      x.className = "toolbar";
    }
  }

//cuenta los caracteres en tiempo real en la consulta

function contadorCaracteres()
{
    var maxLength = 1000;
    var strLength = document.getElementById("subject").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
		document.getElementById("caracteresRestantes").innerHTML = 
		'<span style="color: red;">Ha excedido el limite de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}

//valida el formulario de la pagina contacto

function validarContacto(){

  	var expRegfName = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
  	var expReglName = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expRegMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var expRegTel = /^[0-9]{4}[-]{0,1}[0-9]{4}$/;
	
	if (!fname.value){
		alert("Por favor, ingrese su nombre");
		firstname.focus();
		return false;
	}
	else if (!expRegfName.exec(fname.value))
	{
		alert("Por favor, ingrese un nombre correcto.");
		setTimeout(function () { fname.focus() }, 1);
		return false;
  	}
  
  	if (!lname.value){
		alert("Por favor, ingrese su apellido.");
		firstname.focus();
		return false;
	}
	else if (!expReglName.exec(lname.value))
	{
		alert("Por favor, ingrese un apellido correcto.");
		setTimeout(function () { lname.focus() }, 1);
		return false;
	}


	if (!mail.value)
	{
		alert("Por favor, ingrese su email.");
		mail.focus();
		return false;
	}
	else if (!expRegMail.exec(mail.value))
	{
		alert("Por favor, ingrese un email correcto (example@ex.com).");
		setTimeout(function () { mail.focus() }, 1);
    return false;

  	}
  
  	if (!tel.value){

  	}
  	else if (!expRegTel.exec(tel.value))
  	{
    alert("Por favor, ingrese un número de teléfono correcto.");
    tel.focus();
    return false;
  	}

  	if (!subject.value){
		alert("Por favor, redacte su consulta");
		subject.focus();
    return false;
  	}

}

//funciones para que muestre u oculte preguntas secundarias dependiendo la opcion marcada en el radio correspondiente

function siMostrarPaises(){
	document.getElementById('exterior').style.display ='block';
}
	
function noMostrarPaises(){
	document.getElementById('exterior').style.display ='none';
}
function siMostrarDireccion(){
    document.getElementById('direccion').style.display ='block';
}

function noMostrarDireccion(){
    document.getElementById('direccion').style.display ='none';
} 

//validaciones para que el formulario de covid este completo correctamente

function validar(){

	var expRegfName = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expReglName = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expRegTelefono = /^[0-9]{4}[-]{0,1}[0-9]{4}$/;
	var expRegDNI = /^\d+$/;
	
	if (!fname.value){
		alert("Por favor, ingrese su nombre");
		firstname.focus();
		return false;
	}
	else if (!expRegfName.exec(fname.value))
	{
		alert("Por favor, ingrese un nombre correcto.");
		setTimeout(function () { fname.focus() }, 1);
		return false;
  }
  
  if (!lname.value){
		alert("Por favor, ingrese su apellido.");
		firstname.focus();
		return false;
	}
	else if (!expReglName.exec(lname.value))
	{
		alert("Por favor, ingrese un apellido correcto.");
		setTimeout(function () { lname.focus() }, 1);
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
		tel.focus();
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

//por cada radio que tenga el si chequeado incrementa el valor del contador y lo muestra cuando se envia el formulario

$(document).ready(function()
{
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
		$("#enviartest").submit();  	
	});
});