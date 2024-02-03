const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("textoRojo");
const textoVerde = document.getElementById("textoVerde");
const textoAzul = document.getElementById("textoAzul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

//Para actualizar Red (Rojo)
inputRojo.addEventListener("change", (e) => {
  let rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});
//Para actualizar Green (Verde)
inputVerde.addEventListener("change", (e) => {
  let verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});
//Para actualizar Blue (Blue)
inputAzul.addEventListener("change", (e) => {
  let azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
