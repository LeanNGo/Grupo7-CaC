const productoEnStorage = JSON.stringify(stockProductos);

localStorage.setItem("productos", productoEnStorage);

const productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));


let carrito = [];

localStorage.setItem("carrito", JSON.stringify(carrito))

let agregarProducto = (producto) => {
    carrito.push(producto);
    console.log(carrito);
    alert("Producto agregado");
}

const generarcards = (stockProductos) => {
const contenedorProductos = document.getElementById("contenedorProductos");
let total = 0;
stockProductos.forEach((producto) => {
  total += producto.precio;
  const div = document.createElement("div");
  div.classList.add('col-md-3');
  div.classList.add("p-3"); 
  div.innerHTML = `
    <div class="card cardArticulos m-4">
        <img src="${producto.img}" class="card-img-top p-4" alt="imagen producto">
        <div class="card-body">
            <h5 class="card-title text-center">${producto.titulo}</h5>
            <p class="card-text">${producto.desc}</p>
            <p class="card-text text-center textPrecio">$ ${producto.precio}</p>          
        </div>       
        <div class="card-footer w-100 text-center">  
            <button onclick="agregarProducto()">Agregar al carrito</button>          
        </div>
    </div>
    `;
  contenedorProductos.appendChild(div);
});
localStorage.setItem("precioTotal", total);
}

generarcards(stockProductos);