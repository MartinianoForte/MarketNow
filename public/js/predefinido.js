//Ejecutar función en el evento click
document.getElementById("menu").addEventListener("mouseover", open_close_menu);
document.getElementById("menu").addEventListener("mouseout", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("menu");
let texto = document.querySelectorAll(".menu__link")
let main = document.getElementsByTagName('main');

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
        main[0].classList.toggle('main_move');
        for(let i = 0; i < texto.length; i++){
            texto[i].classList.toggle('menu__link_move');
        }
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

