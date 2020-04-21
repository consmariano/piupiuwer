var botaoCarregarMais = document.querySelector("#carregar-mais");

function adicionaPiuNoFeed(caixadePius) {
    
}

botaoCarregarMais.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;

        var piusLista = JSON.parse(resposta); //array com usuários, mensagens, nomes e imagens;

        //adicionar esses perfis na tabela.
        piusLista.forEach(function(paciente) {
            adicionaPiu(paciente);
        });
    });

    xhr.send();
});