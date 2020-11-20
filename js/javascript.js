function toolbarResponsive() {
    var x = document.getElementById("toolbar");
    if (x.className === "toolbar") {
      x.className += " responsive";
    } else {
      x.className = "toolbar";
    }
  }

function contadorCaracteres()
{
	//cuenta los caracteres en tiempo real en la consulta

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

function validarContacto(){

	//valida el formulario de la pagina contacto

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

