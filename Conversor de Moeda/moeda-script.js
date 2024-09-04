function convMoeda() {
    // Obtém o palpite do usuário
    var moedaReal = parseFloat(document.getElementById("real").value);
    var moeda = document.querySelector("#lang").value;
    var moedaConv;

    // Verifica se o palpite está correto
    switch(true) {
        case (moeda === "dolar"): 
        moedaConv = moedaReal*5;
        break;
        case (moeda === "euro"):
        moedaConv = moedaReal*5.5;
        break;
        case (moeda === "libra"):
        moedaConv = moedaReal*6;
        break;
        default: 
        moedaConv= "Insira um valor válido"
    }
    document.getElementById("resultado").innerHTML = moedaConv.toFixed(2);
}