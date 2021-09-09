const cuerpo = document.getElementById('contenedor-paltero');
const buscador = document.getElementById('buscador');
buscador.addEventListener('keyup', buscarProducto)

let info;

function buscarProducto(e) {
  if(e.key != 'Enter') return 0;
  if(buscador.value == '') return 0;
  const urlFetch = '/mercado/' + buscador.value;
  fetch(urlFetch)
    .then((resp) => resp.json())
    .then(function(data){
      info = data;
      cuerpo.innerHTML = '';
      if(info.length == 0){
        cuerpo.innerHTML = 'No se encontro ningun producto compatible'
      } else {
      for(let i = 0; i < info.length; i++) {
        const producto = document.createElement('div');
        producto.classList.add('palta-1')
        producto.id = info[i].idArtProv;
        producto.innerHTML = `
          <div class="contenedor-imagen" id="${info[i].idArtProv}"><img class="palta-img" src="${info[i].imagen}" width="100%"></div>
          <div class="monto"><label id="${info[i].idArtProv}"><b>$${info[i].precio}</b></label></div>
          <div class="descripcion" id="${info[i].idArtProv}"><label>${info[i].descripcion}</label></div>`;
        producto.addEventListener('click', verProducto);
        cuerpo.appendChild(producto)
        }
       }
    })
    .catch((error) => {
      console.log(error);
    });
}

function verProducto(e) {
  const codigo = (e.target.id == '')? e.target.parentNode.id : e.target.id;
  window.location = '/mercado/verProducto/' + codigo;
}