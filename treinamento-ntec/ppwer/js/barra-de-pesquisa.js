
//Início na barra de pesquisa.
var campoFiltro = document.querySelector("#busca-usuario");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
    }
});
//Fim da barra de pesquisa.