let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos').textContent;
    
    if(nomeAmigo == ''){
        alert('Não foi inserido nenhum nome');
    } else if(amigos.includes(nomeAmigo)){
        alert('O nome já está na lista');
    } else {
        amigos.push(nomeAmigo)
    
        if(listaAmigos == '') {
            document.getElementById('lista-amigos').textContent = nomeAmigo;
        } else {
            document.getElementById('lista-amigos').textContent = listaAmigos + ', ' + nomeAmigo;
        }
    }

    limpaFormulario();
}

function sortear() {
    if(amigos.length >= 4){
        embaralhar(amigos);
        let sorteados = document.getElementById('lista-sorteio');
        let resultado = '';

        for (let i = 0; i < amigos.length; i++) {
            let amigoAtual = amigos[i];
            let amigoSorteado = amigos[(i + 1) % amigos.length]; // Garante que o último amigo sorteado seja o primeiro

            resultado += amigoAtual + '->' + amigoSorteado + '<br>';
        }

        sorteados.innerHTML = resultado;
    } else {
        alert('A quantidade de pessoas na lista não é a suficiente para fazer o sorteio, o minimo são 4 integrantes');
    }
}

function reiniciar() {
    amigos = []
    limpaFormulario()
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function limpaFormulario() {
    let formulario = document.getElementById('nome-amigo');
    formulario.value = '';
}