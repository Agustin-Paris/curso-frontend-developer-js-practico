             //   MENU DESPLEGABLE // 
// hacer aparecer y desaparecer el menu de usuario //

// donde se va a hacer click para que aparezca y des.
const menuEmail = document.querySelector('.navbar-email');
// donde tengo el menu para sacar o poner la clase 
const menuDesktop = document.querySelector('.desktop-menu');

//1- esto sirve para cuando hagan click 
menuEmail.addEventListener('click', toggleDm);

//2- funcion que va a hacer desaparecer y aparecer 
function toggleDm(){
    menuDesktop.classList.toggle('inactive')
} 

// - - - - - - MENU DESPLEGABLE MObILE - - - - - -// 
// "boton"
const menuHam = document.querySelector('.menu');
// "todo el codigo del menu"
const mobileMenu = document.querySelector('.mobile-menu');
//"referenia a donde al boton hacieno click e ir a la funcion.
menuHam.addEventListener('click', toggleMobileMenu);
// funcio que hace aparecer al menu desplegable
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

// - - - - - -  CARRITO DE COMPRAS   - - - - - - // 

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click', toggleCc);

function toggleCc(){
    menuCarrito.classList.toggle('inactive');
}
