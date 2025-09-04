// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  if (amigo == "") {
    alert("Ups! Entrada vacia, ingrese una nombre");
  } else {
    if (amigos.includes(amigo)) {
      alert("Este amigo ya existe en la lista!. \nIngresa uno nuevo");
      limpiarCampo();
    } else {
      amigos.push(amigo);
      listarAmigos();
      limpiarCampo();
      actualizarBotonNuevo();
    }
  }
}

function listarAmigos() {
  const listaDeAmigos = document.getElementById("listaAmigos");
  const nuevaLinea = document.createElement("li");
  nuevaLinea.textContent = amigos[amigos.length - 1];
  listaDeAmigos.append(nuevaLinea);
}

function sortearAmigo() {
  limpiarCampo();
  if (amigos.length > 0) {
    const i = parseInt(generarNumeroAleatoreo());
    console.log(i);
    const resultado = document.getElementById("resultado");
    const linea = document.createElement("li");
    linea.innerHTML = amigos[i];
    resultado.append(linea);
    console.log(linea);
  } else {
    alert("No Hay amigos aun en la lista");
  }
}

function limpiarCampo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let amigo = document.getElementById("amigo");
  amigo.value = "";
}

function iniciarNuevo() {
  console.log("nuevo lista");
  amigos = [];
  limpiarCampo();
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  actualizarBotonNuevo();
}

function actualizarBotonNuevo() {
  const botonNuevo = document.getElementById("button-nuevo");
  if (amigos.length > 0) {
    botonNuevo.removeAttribute("disabled");
  } else {
    botonNuevo.setAttribute("disabled", "disabled");
  }
}

function generarNumeroAleatoreo() {
  return Math.floor(Math.random() * amigos.length);
}
