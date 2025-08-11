// Botón para menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("active");
});

// Botón de prueba
document.getElementById("miBoton").addEventListener("click", () => {
    alert("¡Hola! Este es el inicio de tu página web.");
});













// Menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("active");
});







// FILTRAR PRODUCTOS POR NOMBRE
function filtrarProductos() {
    let filtro = document.getElementById("buscador").value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    productos.forEach(function (producto) {
        let titulo = producto.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(filtro)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}

// Filtrado en vivo mientras se escribe
document.getElementById("buscador").addEventListener("keyup", filtrarProductos);

// Filtrado al hacer clic en el botón
document.getElementById("btn-buscar").addEventListener("click", filtrarProductos);










