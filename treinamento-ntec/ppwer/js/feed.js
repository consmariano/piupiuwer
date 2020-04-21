//JS para contar e limitar o número de carcateres.
var textboxPiupeet = document.getElementById("textpiu");

var contador = document.getElementById("wordCount"); 
textboxPiupeet.addEventListener("keyup", counter); //escutador de evento para quando o usário digitar no textarea.

function counter(characters) {
    var characters = textboxPiupeet.value.split(''); //lista contendo todos os characters digitados pelo usuário.
    contador.innerText = characters.length;

    document.querySelector("#piu-botao").disabled = true;
    if (characters.length == 141) {
        textboxPiupeet.style.color = "red";
        document.querySelector("#piu-botao").disabled = true;

        //Criar o aviso em forma de mensagem: 
        var aviso = document.createElement("p");
        var textoAviso = document.createTextNode("Prezado usuário, a mensagem passou dos 140 caracteres. Resuma melhor seus pensamentos :)")
        aviso.appendChild(textoAviso);
        setTimeout(function() {
            aviso.removeChild(textoAviso);
        }, 3000)

        var adicionarNaDiv  = document.querySelector(".aviso-do-limite");
        adicionarNaDiv.appendChild(aviso);
        //Fim da criação do aviso.
    } 
    else if (characters.length <= 140) {
        textboxPiupeet.style.color = "black";
        document.querySelector("#piu-botao").disabled = false;
    }
}
//Fim do JS para contar e limitar o número de caracteres.

// location.reload();

//Desativar botão para quando o conteúdo for vazio. 
function desativarBotao(conteudoPiu) {
    var conteudoPiu = document.querySelector("#textpiu");
    var conteudoPiu2 = conteudoPiu.textContent;

    if (conteudoPiu2 == "") {
        document.querySelector("#piu-botao").disabled = true; 
    }
}
//----------------------------------------

//Início do envio do piupeet para o feed.
var piu = document.querySelector("#piu-botao");

piu.addEventListener("click", enviaPiu);

function enviaPiu(e) {

    e.preventDefault()

    var piuTexto = document.querySelector("#textpiu");
    var piutexto2 = piuTexto.value; //pegou o texto

    var umNovoPiu = document.createElement("div");
    umNovoPiu.classList.add("d-flex");
    umNovoPiu.classList.add("flex-column");
    umNovoPiu.classList.add("um-piu");

    var piuwerInfo = document.createElement("div");
    piuwerInfo.classList.add("d-flex");
    piuwerInfo.classList.add("flex-wrap");
    piuwerInfo.classList.add("justify-content-start");
    
    var novaImagemDePiu = document.createElement("img");
    novaImagemDePiu.src = "imagens/pp.jpg";
    novaImagemDePiu.classList.add("icon-piu");
    novaImagemDePiu.classList.add("mt-2");
    novaImagemDePiu.classList.add("ml-3");
    piuwerInfo.appendChild(novaImagemDePiu);

    var nameUsuario = document.createElement("p");
    nameUsuario.textContent = document.querySelector("#name-usuario").textContent;
    nameUsuario.classList.add("ml-3")
    nameUsuario.classList.add("mt-2")
    piuwerInfo.appendChild(nameUsuario);

    var novoUsuario = document.createElement("p");
    novoUsuario.textContent = document.querySelector("#nome-de-usuario").textContent;
    novoUsuario.classList.add("nome-de-usuario");
    novoUsuario.classList.add("mt-2");
    novoUsuario.classList.add("ml-1");
    piuwerInfo.appendChild(novoUsuario);

    var umNovoTextoDePiu = document.createElement("p");
    umNovoTextoDePiu.innerText = piutexto2;
    umNovoPiu.appendChild(piuwerInfo)
    
    umNovoPiu.appendChild(umNovoTextoDePiu)
    
    var caixaDePius = document.querySelector(".caixa-de-pius");
    caixaDePius.appendChild(umNovoPiu)

    
}
//Fim do envio do piupeet.