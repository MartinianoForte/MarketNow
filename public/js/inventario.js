/*-------------Variables----------*/
const cuerpo = document.getElementById('tabla_tbody');
const buscador = document.getElementById('buscador')
const barra = document.getElementById('tipo');
buscador.addEventListener("keyup", buscar);
barra.addEventListener('change', Barra_accion);

let info;
const pathname = window.location.pathname;
const urlFetch = {
  '/comercio/Inventario' : '/comercio/productos',
  '/proveedor/Inventario' : '/proveedor/productos',
  '/comercio/regVentas' : '/comercio/ventas'
}
fetch(urlFetch[pathname])
    .then((resp) => resp.json())
    .then(function(data){
      info = data;
      const convertirFecha = fecha => {
        const fechaD = new Date(fecha);
        return fechaD.getDate() + '/' + fechaD.getMonth() + '/' + fechaD.getFullYear();
      }
      for(let i = 0; i < info.length; i++) {
        const htmlInsert = {
          '/comercio/Inventario' : `<tr><td>${info[i].nombre}</td><td>${info[i].categoria}</td><td>$${info[i].precioVenta}</td><td>$${info[i].precioUnitario}</td><td>${info[i].cantidad}</td><td>${info[i].cantIdeal}</td></tr>`,
          '/proveedor/Inventario' : `<tr><td><img style="object-fit: contain;" src="${info[i].imagen}" height="100" width="100"></td><td>${info[i].nombre}</td><td>${info[i].descripcion}</td><td>${info[i].precio}</td><td>${info[i].cantidad}</td></tr>`,
          '/comercio/regVentas' : `<tr><td>${info[i].idPedido}</td><td>$${info[i].monto}</td><td>${convertirFecha(info[i].fecha)}</td><td>${info[i].hora}</td><td>${info[i].idComercio}</td></tr>`
        }
        cuerpo.insertAdjacentHTML('beforeend', htmlInsert[pathname])
        }
    })
    .catch((error) => {
      console.log(error);
    });
/*-------------Filtrador----------*/
const crearTabla = cb => {
    cuerpo.innerHTML = "";
    const ord = cb(info);
    for (let row of ord) {
      cuerpo.insertAdjacentHTML(
        "beforeend",
        `<tr><td>${row .nombre}</td><td>${row .categoria}</td><td>$${row .precioVenta}</td><td>$${row .precioUnitario}</td><td>${row .cantidad}</td><td>${row .cantIdeal}</td></tr>`
      );
    }
  };

function buscar(e) {
  crearTabla(() => info.filter(v => v.nombre.includes(buscador.value)));
}

function Barra_accion(e){
  const ordenamiento = {
    0: ord => ord.sort((a, b) => a.nombre < b.nombre ? -1 : 1),
    1: ord => ord.sort((a, b) => a.nombre > b.nombre ? -1 : 1),
    2: ord => ord.sort((a, b) => a.precioVenta < b.precioVenta ? -1 : 1),
    3: ord => ord.sort((a, b) => a.precioVenta > b.precioVenta ? -1 : 1)
  }

  crearTabla(ordenamiento[e.target.options.selectedIndex]);
}