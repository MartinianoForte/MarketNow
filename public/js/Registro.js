/*---------------Barra de Menu de roles-------------------*/
function Barra_Roles() {
  if (document.getElementById('comerciante').selected  || document.getElementById('proveedor').selected ==true ) {
    console.log("chupame el pingo")
    document.getElementById('activacion').style.display="block";
  }
  

  if (document.getElementById('usuario').selected ==true) {
    console.log("chupame el pingo")
    document.getElementById('activacion').style.display="none";
  }

  if (document.getElementById('nada').selected ==true) {
    console.log("chupame el pingo")
    document.getElementById('activacion').style.display="none";
  }
} 
/*---------------Validacion de Datos-------------------*/
function validar_nombre(nombre){
  var cb=document.getElementById('colorborde');
  if (nombre.value == "") {
    document.getElementById('texto-error').style.display="block";
    document.getElementById('incorrecto').style.display="block";
    document.getElementById('correcto').style.display="none";
    cb.style.borderColor= 'red';
    console.log("gordo puto");
    nombre.focus();
    return false;
  }
  else if (nombre.value!="") 
    {
    document.getElementById('correcto').style.display="block";
    document.getElementById('texto-error').style.display="none";
    document.getElementById('incorrecto').style.display="none";
    cb.style.borderColor= 'green';
    console.log("tarado");
    return false;

  }
}
function validar_mail(mail){
   var cb2=document.getElementById('colorborde2');
   var mailRevi = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (mail.value == "") {
    document.getElementById('texto-error1').style.display="block";
    document.getElementById('incorrecto1').style.display="block";
    document.getElementById('correcto1').style.display="none";
    cb2.style.borderColor= 'red';
    console.log("gordo traba");
    return false;
    }
  else if (mailRevi.test(mail.value)){
    document.getElementById('texto-error1').style.display="none";
    document.getElementById('incorrecto1').style.display="none";
    document.getElementById('correcto1').style.display="block";
    cb2.style.borderColor= 'green';
    console.log("gordo traba chele");
    return false;
  }
  else if(mail.value != ""){
    document.getElementById('texto-error1').style.display="block";
    document.getElementById('incorrecto1').style.display="block";
    document.getElementById('correcto1').style.display="none";
    cb2.style.borderColor= 'red';
    console.log("gordo traba");
    return false;
  }
}
function validar_contra(contra){
    var cb3=document.getElementById('colorborde3');
    var contrarevi = /^(?:[a-z0-9-]{1,20}\.)$/i;
  if (contra.value == "" ||contra.value == "0" ) {
    document.getElementById('texto-error2').style.display="block";
    document.getElementById('incorrecto2').style.display="block";
    document.getElementById('correcto2').style.display="none";
    cb3.style.borderColor= 'red';
    console.log("gordo traba");
    return false;
  }
  else if (contrarevi.test(contra.value)){
    document.getElementById('texto-error2').style.display="none";
    document.getElementById('incorrecto2').style.display="none";
    document.getElementById('correcto2').style.display="block";
    cb3.style.borderColor= 'green';
    console.log("gordo traga chele");
    return false;
  }
  else if (nombre.value!=""){
    document.getElementById('correcto2').style.display="block";
    document.getElementById('texto-error2').style.display="none";
    document.getElementById('incorrecto2').style.display="none";
    cb3.style.borderColor= 'green';
    console.log("tarado");
    return false;
  }
}
function validar_contra2(contra2){
  var cb4=document.getElementById('colorborde4');
  var contra = document.getElementById('contra');
    if (contra2.value == "") {
    document.getElementById('texto-error3').style.display="block";
    document.getElementById('incorrecto3').style.display="block";
    document.getElementById('correcto3').style.display="none";
    cb4.style.borderColor= 'red';
    console.log("gordo traba");
    return false;
    }
    else if (contra2.value == contra.value){
    document.getElementById('texto-error3').style.display="none";
    document.getElementById('incorrecto3').style.display="none";
    document.getElementById('correcto3').style.display="block";
    cb4.style.borderColor= 'green';
    console.log("gordo traba chele, ojala t deporten, pedaso de forro");
    return false;
    }
    else if (contra2.value != contra.value){
    document.getElementById('texto-error3').style.display="block";
    document.getElementById('incorrecto3').style.display="block";
    document.getElementById('correcto3').style.display="none";
    cb4.style.borderColor= 'red';
    console.log("gordo traba chele, como que no t acordas tu contraseña tarado??");
    return false;
    }
}
function validar_nombre_local(nombre_local){
  var cb7=document.getElementById('colorborde7');
  var nombre_local=document.getElementById('nombre_local');
  if (nombre_local.value == "") {
    document.getElementById('texto-error7').style.display="block";
    document.getElementById('incorrecto7').style.display="block";
    document.getElementById('correcto7').style.display="none";
    cb7.style.borderColor= 'red';
    console.log("gordo puto");
    nombre_local.focus();
    return false;
  }
  else if (nombre_local.value!="") 
    {
    document.getElementById('correcto7').style.display="block";
    document.getElementById('texto-error7').style.display="none";
    document.getElementById('incorrecto7').style.display="none";
    cb7.style.borderColor='green'; 
    //.style.borderColor= 'green';
    console.log("tarado");
    return false;

  }
}
function EnviarFormulario(colorborde,colorborde2){
 
}
