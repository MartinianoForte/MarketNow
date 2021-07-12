let validacion = [0,0,0,0,0,0,0,0];

/*---------------Barra de Menu de roles-------------------*/
function Barra_Roles() {
  if (document.getElementById('comerciante').selected  || document.getElementById('proveedor').selected == true ) 
    document.getElementById('activacion').style.display="block";

  if (document.getElementById('usuario').selected ==true) 
    document.getElementById('activacion').style.display="none";

  if (document.getElementById('nada').selected ==true) 
    document.getElementById('activacion').style.display="none";
} 

/*---------------Validacion de Datos-------------------*/
function validar_nombre(nombre){
  let cb=document.getElementById('colorborde0');
  if (nombre.value == "") {
    document.getElementById('texto-error').style.display="block";
    document.getElementById('incorrecto').style.display="block";
    document.getElementById('correcto0').style.display="none";
    cb.style.borderColor= 'red';
    nombre.focus();
    validacion[0] = 0;
    return false;
  }
  else if (nombre.value!="") 
    {
    document.getElementById('correcto0').style.display="block";
    document.getElementById('texto-error').style.display="none";
    document.getElementById('incorrecto').style.display="none";
    cb.style.borderColor= 'green';
    if (validacion[0] == 0) validacion[0] = 1;
    return false;
  }
}
function validar_mail(mail){
   let cb2=document.getElementById('colorborde1');
   var mailRevi = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (mail.value == "") {
    document.getElementById('texto-error1').style.display="block";
    document.getElementById('incorrecto1').style.display="block";
    document.getElementById('correcto1').style.display="none";
    cb2.style.borderColor= 'red';
    validacion[1] = 0;
    }
  else if (mailRevi.test(mail.value)){
    document.getElementById('texto-error1').style.display="none";
    document.getElementById('incorrecto1').style.display="none";
    document.getElementById('correcto1').style.display="block";
    cb2.style.borderColor= 'green';
    if (validacion[1] == 0) validacion[1] = 1;
  }
  else if (mail.value!=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i || mail.value==/^[-\w.%+]{1,64}/){
    document.getElementById('texto-error1').style.display="block";
    document.getElementById('incorrecto1').style.display="block";
    document.getElementById('correcto1').style.display="none";
    cb2.style.borderColor= 'red';
    if (validacion[1] == 0) validacion[1] = 1;
  }
  return false;
}
function validar_contra(contra){
  var cb3=document.getElementById('colorborde2');
  var revi_contra=/^[a-z0-9_-]{4,20}$/;
  if (contra.value == "" ||contra.value == "0" ) {
    document.getElementById('texto-error2').style.display="block";
    document.getElementById('incorrecto2').style.display="block";
    document.getElementById('correcto2').style.display="none";
    cb3.style.borderColor= 'red';
    validacion[2] = 0;
  }
  if (revi_contra.test(contra.value)){
    document.getElementById('texto-error2').style.display="none";
    document.getElementById('incorrecto2').style.display="none";
    document.getElementById('correcto2').style.display="block";
    cb3.style.borderColor= 'green';
    if (validacion[2] == 0) validacion[2] = 1;
  }
  else{
    document.getElementById('texto-error2').style.display="block";
    document.getElementById('incorrecto2').style.display="block";
    document.getElementById('correcto2').style.display="none";
    cb3.style.borderColor= 'red';
    validacion[2] = 0;
  }
  return false;
}
function validar_contra2(contra2){
  var cb4=document.getElementById('colorborde3');
  var contra = document.getElementById('contra');
    if ((contra2.value == "") || (contra2.value != contra.value)) {
    document.getElementById('texto-error3').style.display="block";
    document.getElementById('incorrecto3').style.display="block";
    document.getElementById('correcto3').style.display="none";
    cb4.style.borderColor= 'red';
    validacion[3] = 0;
    }
    else if (contra2.value == contra.value){
    document.getElementById('texto-error3').style.display="none";
    document.getElementById('incorrecto3').style.display="none";
    document.getElementById('correcto3').style.display="block";
    cb4.style.borderColor= 'green';
    if (validacion[3] == 0) validacion[3] = 1;
    }
    return false;
}
function validar_telefono(telefono){
   var cb5=document.getElementById('colorborde4');
   var telefono_revi = /^\d{8,11}$/;
   const telefonoValidado = telefono_revi.test(telefono.value);
    if ((telefono.value == "") || !telefonoValidado) {
    document.getElementById('texto-error4').style.display="block";
    document.getElementById('incorrecto4').style.display="block";
    document.getElementById('correcto4').style.display="none";
    cb5.style.borderColor= 'red';
    }
   else{
    document.getElementById('texto-error4').style.display="none";
    document.getElementById('incorrecto4').style.display="none";
    document.getElementById('correcto4').style.display="block";
    cb5.style.borderColor= 'green';
    if (validacion[4] == 0) validacion[4] = 1;
  }
  return false;
}
function validar_dni(dni){
  var cb6=document.getElementById('colorborde5');
  var revi_dni = /^\d{7,8}$/;
  const dniValidado = revi_dni.test(dni.value)
    if ((dni.value == "") || !dniValidado) {
    document.getElementById('texto-error5').style.display="block";
    document.getElementById('incorrecto5').style.display="block";
    document.getElementById('correcto5').style.display="none";
    validacion[3] = 0;
    cb6.style.borderColor= 'red';
    }
  else {
    document.getElementById('texto-error5').style.display="none";
    document.getElementById('incorrecto5').style.display="none";
    document.getElementById('correcto5').style.display="block";
    cb6.style.borderColor= 'green';
    if (validacion[5] == 0) validacion[5] = 1;
  }
  return false;
}

function validar_direccion(direccion){
  var cb7=document.getElementById('colorborde6');
  var revi_direc=/^[a-z0-9_-]{4,50}$/;
  const direccionValidado = revi_direc.test(direccion.value);
    if ((direccion.value == "") || !direccionValidado) {
    document.getElementById('texto-error6').style.display="block";
    document.getElementById('incorrecto6').style.display="block";
    document.getElementById('correcto6').style.display="none";
    cb7.style.borderColor= 'red';
    validacion[3] = 0;
    }
  else {
    document.getElementById('texto-error6').style.display="none";
    document.getElementById('incorrecto6').style.display="none";
    document.getElementById('correcto6').style.display="block";
    cb7.style.borderColor= 'green';
    if (validacion[6] == 0) validacion[6] = 1;
  }
  return false;
}
function validar_nombre_local(nombre_local){
  var cb8 = document.getElementById('colorborde7');
  var nombre_local=document.getElementById('nombre_local');
  if (nombre_local.value == "") {
    document.getElementById('texto-error7').style.display="block";
    document.getElementById('incorrecto7').style.display="block";
    document.getElementById('correcto7').style.display="none";
    cb8.style.borderColor= 'red';
    validacion[7] = 0;
    nombre_local.focus();
  }
  else if (nombre_local.value!="") 
    {
    document.getElementById('correcto7').style.display="block";
    document.getElementById('texto-error7').style.display="none";
    document.getElementById('incorrecto7').style.display="none";
    cb8.style.borderColor= 'green'; 
    if (validacion[7] == 0) validacion[7] = 1; 
  }
  return false;
}
function EnviarFormulario(){
  if (document.getElementById('usuario').selected ==true && validacion.reduce((a, b) => a + b, 0) >= 4) {
    cambiarCosas(4);
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').style.display='block'
      form.reset();
    }, 50);
  }
  if(((document.getElementById('comerciante').selected == true) || (document.getElementById('proveedor').selected == true )) && validacion.reduce((a, b) => a + b, 0) >= 6){
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').style.display='block'
      cambiarCosas(8);
      form.reset();
    }, 50);
  }
  return false;
}

function cambiarCosas(limite){
  for(let i = 0; i < limite; i++){
        const correcto = document.getElementById('correcto' + i).style.display="none";
        const color_borde = document.getElementById('colorborde' + i).style.borderColor='#aaa';
      }
  const activacion1=document.getElementById('activacion').style.display="none";
}