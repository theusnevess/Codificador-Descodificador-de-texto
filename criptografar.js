var botaoCriptografar = document.querySelector(".criptografar");

var textoCodificador = document.querySelector(".codificador");

var textoDecodificador = document.querySelector(".decodificador");

botaoCriptografar.addEventListener("click", function() {
    var mensagemObtida = encriptar(textoCodificador.value);

    textoDecodificador.value = mensagemObtida;

    textoDecodificador.style.backgroundImage = "none"; 

    textoCodificador.value = " ";
});

function encriptar (mensagemObtida) {
    let codigo = [["a", "axds"], ["e", "ephg"], ["i", "imzp"], ["o", "obqr"], ["u", "ufyt"]];
    mensagemObtida = mensagemObtida.toLowerCase();

    for(var i = 0; i < codigo.length; i++) {

        if(mensagemObtida.includes(codigo[i][0])) {
            mensagemObtida = mensagemObtida.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }

    return(mensagemObtida);
}