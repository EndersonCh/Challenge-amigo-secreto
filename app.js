// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo == "") {
    alert("Ups! Entrada vacia, ingrese una nombre");
  } else {
    amigos.push(document.getElementById("amigo").value);
    listarAmigos();
    limpiarCampo();
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
  amigos = [];
  limpiarCampo();
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
}

function generarNumeroAleatoreo() {
  return Math.floor(Math.random() * amigos.length);
}
