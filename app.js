// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroAleatoreo = generarNumeroAleatoreo();

function agregarAmigo(){

    let amigo = document.getElementById("amigo").value;

    if (amigo == ""){
        alert("Ups! Entrada vacia, ingrese una nombre");
    }else{
    amigos.push(document.getElementById("amigo").value);
    listarAmigos();
    }

}

function listarAmigos(){
    const listaDeAmigos = document.getElementById('listaAmigos');
    const nuevaLinea =document.createElement("li");
    nuevaLinea.textContent = amigos[amigos.length-1];
    listaDeAmigos.append(nuevaLinea);      
    }

function sortearAmigo(){

    if(amigos.length>0){
      const i=parseInt(generarNumeroAleatoreo())  
      console.log(i);
      const resultado = document.getElementById("resultado");
      const linea= document.createElement("li");
      linea.textContent=amigos[i];
      resultado.clear();
      resultado.append(linea);
      console.log(linea)
    }else{
        alert("No Hay amigos aun en la lista")
    }
    


}

function generarNumeroAleatoreo(){
    return Math.floor(Math.random()*(amigos.length));
}