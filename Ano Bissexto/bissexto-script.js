function verificarAno() {

    var anov = parseInt(document.getElementById("ano").value); //SEMPRE VERIQUE SE DECLAROU A PORRA DA VARIÁVEL, DECLARE UM NOME PARA VAR E PUXE O ID INSERIDO PELO USUÁRIO

    if (anov % 4 === 0) {
    document.getElementById("resultado").innerHTML = "O ano é bissexto."
    } else {
        document.getElementById("resultado").innerHTML = "O ano não é bissexto."
    }
}