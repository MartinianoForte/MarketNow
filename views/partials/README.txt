//lista de includes disponibles

<%- include('partials/headerHome.html')%> // Header para las paginas iniciales en las que no hace falta entar logueado.
<%- include('partials/menuComercio.html', {sitio:'nombre del sitio'}) %> // Header y menu lateral en paginas del comerciante.
<%- include('./partials/footer.html'); %> // El footer general