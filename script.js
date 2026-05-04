const contenedor = document.getElementById("contenedor");

let index = 0;

setInterval(() => {
  index++;

  if (index >= contenedor.children.length) {
    index = 0;
  }

  contenedor.scrollTo({
    left: contenedor.offsetWidth * index,
    behavior: "smooth"
  });

}, 2000);


function enviarWhatsApp() {
  const mensaje = document.getElementById("mensaje").value;

  if (mensaje.trim() === "") {
    alert("Escribí un mensaje primero");
    return;
  }

 const telefono = "5491125688833";
const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}