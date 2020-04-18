// Busca texto
var textboxPiupeet = (document).getElementById("validation");

var contador = (document).getElementById("wordCount");

textboxPiupeet.addEventListener("keyup", counter);

function counter(characters) {
    var characters = textboxPiupeet.value.split(''); //lista contendo todos os characters digitados pelo usuário
    contador.innerText = characters.length;
    if (characters.lenght > 140){
        textboxPiupeet.addClass("textbox-invalid-piupeet");
    }
}

console.log(textboxPiupeet);