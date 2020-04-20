//JS para contar e limitar o número de carcateres.
var textboxPiupeet = (document).getElementById("textpiu");

var contador = (document).getElementById("wordCount");

textboxPiupeet.addEventListener("keyup", counter); //escutador de evento para quando o usário digitar no textarea.

function counter(characters) {
    var characters = textboxPiupeet.value.split(''); //lista contendo todos os characters digitados pelo usuário.
    contador.innerText = characters.length;
    if (characters.length > 140){
        // textboxPiupeet.addClass("textboxInvalidPiupeet");
        textboxPiupeet.style.color = "red";
    }
}
//Fim do JS para contar e limitar o número de caracteres.


//Início do envio do piupeet para o feed.
var piu = document.querySelector("piuBotao");
piu.addEventListener("click", enviaPiu);

function enviaPiu() {
//passos: pegar os dados da tag com o querySelector OK
//adiciona .eventListener OK
//para adicionar um novo tweet: 
//colocar dentro de uma variavel os dados do forms que vc quer pegar OK
//colocar em uma variável os valores de cada uma dessas tags com o (variável com o id que você quer pegar).(o que quer pegar).value; OK
//agora tem que criar todos os elementos com o tipo de tag que você quer criar. Tem que fazer isso para todos os componentes da div.
//para atribuir valores a essas tds, tem que colocar: piuText.textcontent = piu, onde piuText = document.createElement("p") e piu = (nomedadiv).value;
//depois de fazer isso para a mensagem, imagem e o nome de usuário que estão dentro dessa div maior, tem que usar .appendChild()
//piuBox.appendChild(mensagem);
//piuBox.appendChild(imagem);
//piuBox.appendChild(usuario);
//colocar isso dentro da tag maior que possui o feed com .appendChild também.

    var piuTexto = document.querySelector("#textpiu");
    //var piuImagem = document.querySelector("");
    //var piuUsuario = document.querySelector("");
    
    var piutexto2 = piuTexto.value;

    var criarPiu = document.createElement("div");

    criarPiu.classList.add();
    criarPiu.textContent = piutexto2;

}
//Fim do envio do piupeet.
