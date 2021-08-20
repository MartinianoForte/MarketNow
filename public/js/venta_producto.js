/*----------Variables----------*/
const nom = document.getElementById('Nombre_producto');
nom.addEventListener("keypress", producto);

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
function producto(){
	const resultado = info.producto.filter( dato=> {
		if(dato.nombre.includes(nom.value)) 
		return true;
		return false;
		document.getElementById('filtrado').remove(0);
		if (document.getElementById('filtrado') == true){
			}
	})
	console.log(resultado[0].nombre)
}
