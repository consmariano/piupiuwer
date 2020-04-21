var botaoCarregarMais = document.querySelector("#carregar-mais");

function adicionaPiu(x) {
    var nome = document.querySelector(".nome-registro");

    var username = document.querySelector(".usuario-registro");

    var mensagem = document.querySelector(".mensagem-registro");
    
    var imagem = document.querySelector(".imagem-registro");

    var umNovoRegistro = document.createElement("div");
    umNovoRegistro.classList.add("d-flex")
    umNovoRegistro.classList.add("flex-column")
    umNovoRegistro.classList.add("um-piu")

    var registroInfo = document.createElement("div");
    registroInfo.classList.add("d-flex")
    registroInfo.classList.add("flex-wrap")
    registroInfo.classList.add("justify-content-start")

    var registroNovaImagem = document.createElement("img");
    registroNovaImagem.src = x.imagem;
    registroNovaImagem.classList.add("icon-piu");
    registroNovaImagem.classList.add("mt-2");
    registroNovaImagem.classList.add("ml-3");
    registroInfo.appendChild(registroNovaImagem);

    var registroNomeUsuario = document.createElement("p");
    registroNomeUsuario.textContent = x.nome;
    registroNomeUsuario.classList.add("ml-3")
    registroNomeUsuario.classList.add("mt-2")
    registroInfo.appendChild(registroNomeUsuario);    

    var registroNovoUsuario = document.createElement("p");
    registroNovoUsuario.textContent = x.username;
    registroNovoUsuario.classList.add("mt-2")
    registroNovoUsuario.classList.add("ml-1")
    registroInfo.appendChild(registroNovoUsuario);

    var registroNovaMensagem = document.createElement("p");
    registroNovaMensagem.innerText = x.mensagem;
    umNovoRegistro.appendChild(registroInfo) 
    umNovoRegistro.appendChild(registroNovaMensagem)

    var caixaDeRegistro = document.querySelector(".caixa-de-registros")
    caixaDeRegistro.appendChild(umNovoRegistro)
}

botaoCarregarMais.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;

        var piusLista = JSON.parse(resposta); //array com usuários, mensagens, nomes e imagens;

        //adicionar esses perfis na tabela.
        piusLista.forEach(function(x) {
            adicionaPiu(x);
        });
    });

    xhr.send();
});