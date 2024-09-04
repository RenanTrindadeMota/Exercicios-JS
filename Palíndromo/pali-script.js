function verifPalindromo() {


    do {
        let palindromo = [document.getElementById("palavra").value];
        let invertido = [palindromo].reverse();
        document.getElementById("result").innerHTML = `A palavra ${palindromo} é um palindromo`
    } while (palindromo!=invertido)
}