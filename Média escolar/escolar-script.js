function mediaEscolar() {
    var nota1 = parseFloat(document.getElementById("prova1").value);
    var nota2 = parseFloat(document.getElementById("prova2").value);
    var nota3 = parseFloat(document.getElementById("prova3").value);
    var nota4 = parseFloat(document.getElementById("prova4").value);
    var media = ((nota1+nota2+nota3+nota4)/4).toFixed(1)

    if (media>=7) {
        document.getElementById("resultado").innerHTML = "Aprovado - a nota foi "+media
    } else if (media>=5 && media<7) {
        document.getElementById("resultado").innerHTML = "Recuperação - a nota foi "+media  
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado - a nota foi "+media  
    }
}