var botaoDescriptografar = document.querySelector(".descriptador");

var textoCodificador = document.querySelector(".codificador");

var textoDecodificador = document.querySelector(".decodificador");


botaoDescriptografar.addEventListener("click", function () {
    var mensagemObtida = descriptar(textoDecodificador.value);

    textoDecodificador.value = mensagemObtida;

    textoCodificador.value = " ";
});


function descriptar (mensagemObtida) {
    let codigo = [["axds", "a"], ["ephg", "e"], ["imzp", "i"], ["obqr", "o"], ["ufyt", "u"]];
    mensagemObtida = mensagemObtida.toLowerCase();

    for(var i = 0; i < codigo.length; i++) {

        if(mensagemObtida.includes(codigo[i][0])) {
            mensagemObtida = mensagemObtida.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }

    return(mensagemObtida);
}