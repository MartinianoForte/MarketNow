const cuerpo = document.getElementById('cuerpo');

let info;
const pathname = window.location.pathname;
const urlFetch = '/comercio/ventas'
fetch(urlFetch)
    .then((resp) => resp.json())
    .then(function(data){
      info = data;
      const convertirFecha = fecha => {
        const fechaD = new Date(fecha);
        return fechaD.getDate() + '/' + fechaD.getMonth() + '/' + fechaD.getFullYear();
      }
      for(let i = info.length - 1; i >= 0; i--) {
        cuerpo.insertAdjacentHTML('beforeend', 
          `<tr><td>${info[i].idPedido}</td><td>$${info[i].monto}</td><td>${convertirFecha(info[i].fecha)}</td><td>${info[i].hora}</td><td>${info[i].idComercio}</td></tr>`
          )
        }
    })
    .catch((error) => {
      console.log(error);
    });