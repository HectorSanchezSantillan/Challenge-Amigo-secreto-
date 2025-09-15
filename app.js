// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    amigos.push(nombreAmigo);

    actualizarListaVisible();

    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaVisible() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo(params) {
    if (amigos.length === 0) {
        alert("Porfavor, ingresa el nombre de amigos para poder agregarlos a la lista");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}