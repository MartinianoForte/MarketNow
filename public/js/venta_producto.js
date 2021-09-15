/*----------Variables----------*/
const cdb = document.getElementById('cdb');
const cdc = document.getElementById('cdc');
const cuerpo = document.getElementById('cuerpo');
const cuerpo2 = document.getElementById('cuerpo2');
const cuerpo3 = document.getElementById('cuerpo3');
const nom = document.getElementById('Nombre_producto');
let monto =0;
let p2=[];
const cant = document.getElementById("cant");
nom.addEventListener("keyup", filtrador_nombre);
document.getElementById('terminarVenta')
.addEventListener("click", subirVenta);
document.getElementById("cdb")
.addEventListener("keyup",pepe);
document.getElementById('cancelarVenta')
.addEventListener("click",cancelarcompra);

let info;
fetch('/comercio/productos')
    .then((resp) => resp.json())
    .then(function(data){
      info = data;
      console.log(info)
      for(let i = 0; i < info.length; i++) {
        cuerpo.insertAdjacentHTML('beforeend', `
        <tr><td>${info[i].nombre}</td><td>${info[i].precioVenta}</td></tr>`)
        }
    })
    .catch((error) => {
      console.log(error);
    });
/*----------Funciones----------*/
function filtrador_nombre() { 
  var input, filter, table, tr, td, i, j, visible,precio,producto;
  input = document.getElementById('Nombre_producto');
  filter = input.value.toUpperCase();
  tr = cuerpo.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    visible = false;
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        visible = true;
        producto=td[j];
        
      }
    }
    if (visible === true) {
      tr[i].style.display = "";
      precio = td[1];
    } else {
      tr[i].style.display = "none";
    }
  }
  producto.addEventListener("click", subirVenta);
  console.log(precio);
  console.log(producto);}

function cancelarcompra(){
  document.querySelectorAll("td").cuerpo3.forEach(function(e){e.remove()})
}
function pepe(e){
  if (e.key=="Enter")productos();
}
function productos(){
  var total =document.getElementById("total");
  const caca = info.filter(val=>{
    if (val.cdb== cdb.value){
      val.cantidad=1;
      return true;}
  })
  p2.push(caca);
  monto+= parseInt(caca[0].precioVenta)*parseInt(caca[0].cantidad);
  total.innerText="Total:$ "+monto;
  var total, i, j;
  tr = cuerpo.getElementsByTagName("tr");
   cuerpo2.insertAdjacentHTML('beforeend', `
      <tr><td>${caca[0].cdb}</td><td>${caca[0].nombre}</td><td>${caca[0].precioVenta}</td><td>${caca[0].cantidad}</td><td><i class="fas fa-times-circle quitar"></i></td></tr>`)
}

function subirVenta(){
  const ventas=p2 ;
  const idCliente = cdc;

fetch('http://localhost:3000/comercio/venderProducto', {
  method: "POST",
  body: JSON.stringify({monto, ventas, idCliente}),
  headers: {"Content-type": "application/json"}
})
.then(response => response.json()) 
.then(json =>{ 
  console.log(json);
  monto=0; })
.catch(err => console.log(err));
console.log('terminar venta');

}