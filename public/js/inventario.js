/*-------------Variables----------*/
var pep = document.getElementById('tabla');
/*-------------Ejemplos-----------*/
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
	nombre: "Arma 9mm",
	precio: "20",
	cdb:"003"
	},{
	nombre: "palta albina",
	precio: "120",
	cdb:"004"}]
}
/*-------------Funciones----------*/
function Barra_accion(){
	console.log(document.getElementById('tabla'));
	/*if (document.getElementById('nada').selected == true) 
	{console.log("que trolo, man")}*/
   if (document.getElementById('ord_a-z').selected == true ){
 	info.producto.sort((a, b) =>{
 	if (a.nombre < b.nombre)
 	return -1;
   })
   }
   if (document.getElementById('ord_z-a').selected == true ){
 	info.producto.sort((a, b) =>{
 	if (a.nombre > b.nombre)
 	return -1;
   }) 
   }
 	if (document.getElementById('ord_pre_as').selected == true ){
 	info.producto.sort((a, b) => a.precio - b.precio)
   }
   if (document.getElementById('ord_pre_des').selected == true ){
 	info.producto.sort((a, b) => b.precio - a.precio)
   }
console.log(info);
 }
