function saudacao() {
    var data = new Date().getHours();
    var saudar;

    if (data>=5 && data<=12) {
        saudar="Bom Dia!"
    } else if (data>12 && data<18) {
        saudar="Boa Tarde!"
    } else {
        saudar="Boa Noite!"
    }
    document.getElementById("resultado").innerHTML = saudar
}