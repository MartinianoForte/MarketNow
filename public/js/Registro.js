/*---------------Barra de Menu de roles-------------------*/
function Barra_Roles() {
  if (document.getElementById('comerciante').selected ==true ) {
    console.log("chupame el pingo")
    document.getElementById('activacion').style.display="block";
    document.getElementById('esconder_logo').style.display="block";
  }
  if (document.getElementById('proveedor').selected ==true) {
  document.getElementById('activacion').style.display="block";
  document.getElementById('esconder_logo').style.display="none";
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
