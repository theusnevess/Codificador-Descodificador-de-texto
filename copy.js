        var botaoCopiar = document.querySelector(".copiar");

        var textoDecodificador = document.querySelector(".decodificador");

        var textoCodificador = document.querySelector(".codificador");

        botaoCopiar.addEventListener("click", function() {

            textoDecodificador.select();
            document.execCommand('copy');

        });