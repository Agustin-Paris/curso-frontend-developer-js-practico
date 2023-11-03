const productList = []
//  <div class="cards-container"> de html. para meter la card
const cardConteiner = document.querySelector('.cards-container');

productList.push({
    name: 'bike',
    precio: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'bike',
    precio: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'bike',
    precio: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*   // div padre
<div class="product-card">
             // imagen
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            // div product info padre
          <div class="product-info">
           // contendeor de descripcion
            <div>
            //precio
              <p>$120,00</p>
            //Nombre
              <p>Bike</p>
            </div>
            //Figura
            <figure>
             // icon figure
              <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
          </div>
        </div>
*/

function renderProduct (list){
    for (product of list){
        // div padre
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        // imagen
        const imgProduct = document.createElement ('img');
        imgProduct.setAttribute('src', product.image);
        // div product info padre
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 
        // contendeor de descripcion
        const productInfoDiv = document.createElement('div');
        //precio
        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.precio;
        //Nombre
        const productNombre = document.createElement('p');
        productNombre.innerText = product.nombre;
        //Figura
        const figure = document.createElement('figure');
        // icon figure
        const iconFigure = document.createElement ('img');
        iconFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // - - - - -  incluir dentro de cada div - - - - - //
    
        // icon figure ==> Figura
        figure.appendChild(iconFigure);
    
         // productPrecio + nombre ==>  productInfoDiv 
         productInfoDiv.appendChild(productPrecio);
         productInfoDiv.appendChild(productNombre);
    
        // productInfoDiv ==> productInfo
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);
    
        // productInfo + imgProduct ==> productCard 
        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);
        
     //  - - agregar a la card cardConteiner(la etiqueta que esta em html) - - - //
    
        cardConteiner.appendChild(productCard);
        
    }
}

renderProduct (productList)





