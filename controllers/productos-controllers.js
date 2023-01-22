import { productoServices } from "../servicios/producto-servicios.js";

const nuevoProducto = (name,price,imageUrl) =>{
//se crea div en html
    const card = document.createElement("div");
    const contenido = ` 
    <div>
        <img src="${imageUrl}" alt="">
        <p>${name}</p>
        <p>${price}</p>
        <a href="">Ver Producto</a>
    </div>`

    card.innerHTML = contenido;      
    card.classList.add("producto");      
    return card;                     
}

const producto = document.querySelector("[datos-productos]");
const consolas = document.querySelector("[datos-consolas]");
const diversos = document.querySelector("[datos-varios]")
//promesa - de recibir los datos.
const render = async () =>{
    try{
        const listaProductos = await productoServices.listaProductos();
//forEach pasa por cada elemento en el db.json
        listaProductos.forEach(elemento => {
            if(elemento.section=== "Star Wars")
//appenChild muestra en pantalla.
            producto.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl));

            else if(elemento.section === "Consolas")
            consolas.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl));
            
            else if(elemento.section === "Varios")
            diversos.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl));

        });
    }
//mostrar el error
    catch(error){console.log(error);}
}

render();



/*
1 ->> creo un nuevo producto con (foto,precio y nombre) en una div, dinamicamente 
2 ->>  inserto el contenido html creado en "contenido" en una <div> llamada card
3->>  Le inserto la clase "card" que se vincula con CSS 
4->>  Devuelvo un div creado dinamicajente con js, con la tarjeta de un nuevo producto, con foto, precio, nombre y 
se le designo una clase vinculada al CSS para que le de estilo. 
5->> data para tomar el control de una SECCION que contine la lista de productos iniciales.
6->>productoServices.listaProductos() ->> es el objeto que devuelve db.json donde esta los datos y links de productos
7->> Por cada elemento de la lista de productos que esta en db.json, agregar como un hijo de la etiqueta <seccion>
en la pagina html. 
*/


