//lista de includes disponibles

<%- include('partials/headerHome.html', {loged: loged, rol: (rol)? rol: null})%> // Header para las paginas iniciales en las que no hace falta entar logueado.
<%- include('partials/menuComercio.html', {sitio:'nombre del sitio', nombre: nombre}) %> // Header y menu lateral en paginas del comerciante.
<%- include('partials/menuProveedor.html', {sitio:'nombre del sitio', nombre: nombre}) %> // Header y menu lateral en paginas del Proveedor.
<%- include('./partials/footer.html'); %> // El footer general