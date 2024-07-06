function verificaAnoBissexto() {
    var ano = parseInt(document.getElementById("ano").value);
    var anoBissexto = false;
    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                anoBissexto = true;
                console.log('É bissexto')
            }
        }
    }

    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        anoBissexto = true
    }
    const yearResult = document.getElementById("yearResult");

    if(anoBissexto) {
        yearResult.innerText = "É ano bissexto!"
    } else {
        yearResult.innerText = "Não é ano bissexto!"
    }
}
