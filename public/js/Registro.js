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
var i=0;
function validar_nombre(nombre){
  let cb=document.getElementById('colorborde');
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
    if (i==0) {i=i+1;}
    console.log(i);
    return false;

  }
}
function validar_mail(mail){
   let cb2=document.getElementById('colorborde2');
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
    if (i==1) {i=i+1;}
    console.log(i);
    return false;
  }
  else if (mail.value!=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i || mail.value==/^[-\w.%+]{1,64}/){
    document.getElementById('texto-error1').style.display="block";
    document.getElementById('incorrecto1').style.display="block";
    document.getElementById('correcto1').style.display="none";
    cb2.style.borderColor= 'red';
    console.log("gordo traba chele");
    if (i==1) {i=i+1;}
    console.log(i);
    return false;
  }
}
function validar_contra(contra){
    var cb3=document.getElementById('colorborde3');
  if (contra.value == "" ||contra.value == "0" ) {
    document.getElementById('texto-error2').style.display="block";
    document.getElementById('incorrecto2').style.display="block";
    document.getElementById('correcto2').style.display="none";
    cb3.style.borderColor= 'red';
    console.log("gordo traba");
    return false;
  }
  if (!(/^[A-Z0-9-]{4,20}$/.test(contra.value))){
    document.getElementById('texto-error2').style.display="none";
    document.getElementById('incorrecto2').style.display="none";
    document.getElementById('correcto2').style.display="block";
    cb3.style.borderColor= 'green';
    console.log("gordo traga chele");
    if (i==2) {i=i+1;}
    console.log(i);
    return false;
  }
  else{
    document.getElementById('texto-error2').style.display="block";
    document.getElementById('incorrecto2').style.display="block";
    document.getElementById('correcto2').style.display="none";
    cb3.style.borderColor= 'red';
    console.log("gordo traba");
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
    if (i==3) {i=i+1;}
    console.log(i);
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
function validar_telefono(telefono){
   var cb5=document.getElementById('colorborde5');
   var telefono_revi = /^\d{8,10}$/;
    if (telefono.value == "") {
    document.getElementById('texto-error4').style.display="block";
    document.getElementById('incorrecto4').style.display="block";
    document.getElementById('correcto4').style.display="none";
    cb5.style.borderColor= 'red';
    console.log("gordo telefono");
    return false;
    }
  else if (telefono_revi.test(telefono.value)){
    document.getElementById('texto-error4').style.display="none";
    document.getElementById('incorrecto4').style.display="none";
    document.getElementById('correcto4').style.display="block";
    cb5.style.borderColor= 'green';
    console.log("gordo traba chele telefono");
    if (i==4) {i=i+1;}
    console.log(i);
    return false;
  }
  else if(telefono.value!=telefono_revi){
    alert("Sobran Numeros o Faltan Numeros, Revise su telefono, Gracias");
  }
}
function validar_dni(dni){
  var cb6=document.getElementById('colorborde6');
  var revi_dni = /^\d{8}$/;
    if (dni.value == "") {
    document.getElementById('texto-error5').style.display="block";
    document.getElementById('incorrecto5').style.display="block";
    document.getElementById('correcto5').style.display="none";
    cb6.style.borderColor= 'red';
    console.log("gordo telefono");
    return false;
    }
  else if (revi_dni.test(dni.value)){
    document.getElementById('texto-error5').style.display="none";
    document.getElementById('incorrecto5').style.display="none";
    document.getElementById('correcto5').style.display="block";
    cb6.style.borderColor= 'green';
    console.log("gordo traba chele telefono");
    if (i==5) {i=i+1;}
    console.log(i);
    return false;
  }
  else if(dni.value!=revi_dni){
    alert("Sobran Numeros o Faltan Numeros, Revise su DNI, Gracias");
  }
}
function validar_direccion(direccion){
  var cb7=document.getElementById('colorborde7');
  var revi_direc=/^[A-Z]{1,30}\d{8}\.$/;
    if (direccion.value == "") {
    document.getElementById('texto-error6').style.display="block";
    document.getElementById('incorrecto6').style.display="block";
    document.getElementById('correcto6').style.display="none";
    cb7.style.borderColor= 'red';
    console.log("gordo telefono");
    return false;
    }
  else if (revi_direc.test(direccion.value)){
    document.getElementById('texto-error6').style.display="none";
    document.getElementById('incorrecto6').style.display="none";
    document.getElementById('correcto6').style.display="block";
    cb7.style.borderColor= 'green';
    console.log("gordo traba chele direccion");
    if (i==6) {i=i+1;}
    console.log(i);
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
    console.log("tarado");
    if (i==7) {i=i+1;}
    console.log(i);
    return false;

  }
}
function EnviarFormulario(){
  if (document.getElementById('usuario').selected ==true && i ==4) {
    console.log("te ganaste mi poronga");
    document.getElementById('correcto').style.display="none";
    document.getElementById('correcto1').style.display="none";
    document.getElementById('correcto2').style.display="none";
    document.getElementById('correcto3').style.display="none";
    document.getElementById('colorborde').style.borderColor='#aaa';
    document.getElementById('colorborde2').style.borderColor='#aaa';
    document.getElementById('colorborde3').style.borderColor="#aaa";
    document.getElementById('colorborde4').style.borderColor="#aaa";
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').style.display='block'
      i=0;
      form.reset();
    }, 50);
  }
  if (document.getElementById('comerciante').selected == true || document.getElementById('proveedor').selected == true  && i ==8) {
    console.log("te ganaste mi poronga sos un deforme");
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').style.display='block'
      document.getElementById('correcto').style.display="none";
      document.getElementById('correcto1').style.display="none";
      document.getElementById('correcto2').style.display="none";
      document.getElementById('correcto3').style.display="none";
      document.getElementById('correcto4').style.display="none";
      document.getElementById('correcto5').style.display="none";
      document.getElementById('correcto6').style.display="none";
      document.getElementById('correcto7').style.display="none";
      document.getElementById('activacion').style.display="none";
      document.getElementById('colorborde').style.borderColor='#aaa';
      document.getElementById('colorborde2').style.borderColor='#aaa';
      document.getElementById('colorborde3').style.borderColor="#aaa";
      document.getElementById('colorborde4').style.borderColor="#aaa";
      document.getElementById('colorborde5').style.borderColor='#aaa';
      document.getElementById('colorborde6').style.borderColor='#aaa';
      document.getElementById('colorborde7').style.borderColor="#aaa";
      i=0;
      form.reset();
    }, 50);
  }
  console.log("cara de verga");
  return false;
}
