var entrada = document.querySelector('textarea#entrada');
var resposta = document.querySelector('textarea#saida');
entrada.focus();

function codificar() {
    if (entrada.value.length == 0) {
        entrada.value = 'Digite algum texto';
        entrada.focus();
    } else {
        document.querySelector("div#decodificador").innerHTML = '';
       
        var texto = entrada.value
        var txt =  texto.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('decodificador').innerHTML = `<textarea readonly name="" id="saida">${txt}</textarea>`;
        document.getElementById('decodificador').innerHTML += '<button class="botao botao3" onclick="copy()">Copiar</button>';
    }
}

function decodificar() {
    if (entrada.value.length == 0) {
        entrada.value = 'Digite algum texto no campo abaixo';
        entrada.focus();
    } else {
        document.getElementById('decodificador').innerHTML = '';

        var texto = entrada.value
        var txt =  texto.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
        
        document.getElementById('decodificador').innerHTML = `<textarea readonly id="saida">${txt}</textarea>`;
        document.getElementById('decodificador').innerHTML += '<button class="botao botao3" onclick="copy()">Copiar</button>';
    }
}

function copy() {
    document.querySelector('#saida').select();
    document.execCommand('copy');
    entrada.value = 'Copiado!';
}

var botao1 = document.querySelector('button.botao1');
botao1.onclick = codificar;

var botao2 = document.querySelector('button.botao2');
botao2.onclick = decodificar;
