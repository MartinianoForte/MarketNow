/*----------Variables----------*/
const cdb = document.getElementById('cdb');
const cdc = document.getElementById('cdc');
const cuerpo = document.getElementById('cuerpo');
const nom = document.getElementById('Nombre_producto');
nom.addEventListener("keyup", filtrador);
document.getElementById('terminarVenta')
.addEventListener("click", pp);


let info;
fetch('/comercio/productos')
    .then((resp) => resp.json())
    .then(function(data){
      info = data;
      console.log(info)
      for(let i = 0; i < info.length; i++) {
        cuerpo.insertAdjacentHTML('beforeend', `
        <tr><td>${info[i].nombre}</td><td>$${info[i].precioVenta}</td><td>$${info[i].precioUnitario}</td><td>${info[i].cantidad}</td><td>${info[i].cantIdeal}</td></tr>`)
        }
    })
    .catch((error) => {
      console.log(error);
    });
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
document.getElementById('terminarVenta').onclick = function pp() {
            // Obtiene el valor del cuadro de entrada
            let cdb = document.getElementById('cdb').value;
            let cdc = document.getElementById('cdc').value;
            let cant = document.getElementById('cant').value;
            let nom = document.getElementById('Nombre_producto').value;

            // Usa innerHTML para agregar
            var table_node = document.getElementsByTagName("table")[0];
            // Agrega una línea
            table_node.innerHTML += "        <tr οnmοuseοver=\"set_color(this);\">\n" +
                "            <td><input type=\"  name=\"cb\" ></td>\n" +
                "            <td>"+cdb+"</td>\n" +
                "            <td>"+nom+"</td>\n" +
                "            <td>"+cant+"</td>\n" +
                "<td> <a href=\"javascript:void(0);\" οnclick=\"del_tr(this);\"> Eliminar </a> </td> \ n" +
                "        </tr>"
        }
        del_tr = function (obj) {// Devuelto es el objeto de la etiqueta a
            // Eliminar nodos secundarios a través del nodo principal
            // Elimina tr a través de la tabla, obtén el nodo de la tabla primero
            var table_node = obj.parentNode.parentNode.parentNode;
            table_node.removeChild(obj.parentNode.parentNode);
        }

function subirVenta(){
  console.log('terminar venta');
  const ventas = [{
    cantidad: 2,
    precio: 108.90,
    cdb: 312451,
    idArticulo: 1,
  },
  {
    cantidad: 4,
    precio: 25,
    cdb: 3123123,
    idArticulo: 2,
  }];
  const monto = 500;
  const idCliente = 1;

fetch('http://localhost:3000/comercio/venderProducto', {
  method: "POST",
  body: JSON.stringify({monto, ventas, idCliente}),
  headers: {"Content-type": "application/json"}
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err));
}
