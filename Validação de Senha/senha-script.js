function verifSenha() {
    // Obtém o valor do campo senha
    var senha = document.getElementById("senha").value;
    var numLetras = senha.length;
    
    // Declaração das expressões regulares para verificar os critérios
    const alfabeto = /[A-Z]/; // Letra maiúscula
    const contarNum = /\d/; // Número
    const caracEspecial = /[!@#$%^&*(),.?":|<>]/; // Caracter especial
    
    // Testa se a senha atende aos critérios
    var letraM = alfabeto.test(senha);
    var num = contarNum.test(senha);
    var letraEspecial = caracEspecial.test(senha);
    
    var resposta;

    // Verifica os critérios usando switch/case
    switch (true) {
        case (numLetras < 8 || numLetras > 16):
            resposta = "Senha deve conter entre 8 a 16 caracteres!";
            break;
        case (!letraM):
            resposta = "Senha deve conter pelo menos uma letra maiúscula!";
            break;
        case (!num):
            resposta = "Senha deve conter pelo menos um número!";
            break;
        case (!letraEspecial):
            resposta = "Senha deve conter pelo menos um caractere especial (@, #, $, %, &, *)!";
            break;
        default:
            resposta = "Senha válida!";
            break;
    }
    // o "!" serve para negar uma expressão ou inverter seu valor
    // Exibe o resultado
    document.getElementById("resultado").innerHTML = resposta;
}