function verifGorjeta() {
    var vtotal = parseFloat(document.getElementById("total").value);
    var satisfacao = document.querySelector("#lang").value;
    var gorjeta;

    if (satisfacao === "bom") {
        gorjeta = vtotal * 0.10;
    } else if (satisfacao === "otimo") {
        gorjeta = vtotal * 0.15;
    } else if (satisfacao === "excelente") {
        gorjeta = vtotal * 0.20;
    } else {
        gorjeta = 0;
    }

    var valorTotal = vtotal + gorjeta;
    document.getElementById("resultado").innerHTML = 
        "O valor total é R$ " + valorTotal.toFixed(2) + 
        "<br>O valor da Gorjeta é R$ " + gorjeta.toFixed(2);
}