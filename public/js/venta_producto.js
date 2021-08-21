/*----------Variables----------*/
const nom = document.getElementById('Nombre_producto');
nom.addEventListener("keypress", filtrador);

const info= {
	producto:[{
	nombre: "cacho",
	precio: "30",
	cdb:"001"
	},{
	nombre: "pepe",
	precio: "60",
	cdb:"002"
	},{
	nombre: "palta albina",
	precio: "120",
	cdb:"003"}]
}
/*----------Funciones----------*/
function filtrador() { 
  var input, filter, table, tr, td, i, j, visible;
  input = document.getElementById('Nombre_producto');
  filter = input.value.toUpperCase();
  table = document.getElementById("cuerpo");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    visible = false;
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        visible = true;
      }
    }
    if (visible === true) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
