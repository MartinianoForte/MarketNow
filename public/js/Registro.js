const propiedades={
	nombre :/^[a-zA-ZÀ-ÿ\s]{1,40}$/,;
    electrico:/^[a-zA-Z0-9_.+-].{1,20}+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.].{1,20}$/,;
	contra:/^[a-zA-Z0-9_.+-].{4,20}$/,;
	contra2/^[a-zA-Z0-9_.+-].{4,20}$/,;
	telefono/^[0-9]{1,10}$/,;
	dni/^[0-9]{1,9}$/,;
	direccion/^[a-zA-Z0-9_.+-].{1,30}+[0-9]{1,10}$/,;
	nom_local;
}
const inputs = document.querySelectorAll('#formulario input');

const campos = {
	nombre: false,
	password: false,
	electrico: false,
	telefono: false,
	dni:false,
	nom_local:false,

}
const validar_formulario=(e)={
switch (e.target.name) {
		case "contra":
			validarCampo(propiedades.contra, e.target, 'contra');
			validarcontra2();
		break;
		case "contra2":
			validarcontra2();
		break;
	}
}
const validarcontra2=()=>{
const inputcontra1 = document.getElementById('contra');
	const inputcontra2 = document.getElementById('contra2');

	if(inputcontra.value !== inputcontra2.value){
		document.getElementById(`grupo__contra2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contra2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__contra2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__contra2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__contra2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['contra'] = false;
	} else {
		document.getElementById(`grupo__contra2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contra2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__contra2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__contra2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__contra2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['contra'] = true;
	}

}
