let inputParImpar = document.getElementById("imparPar");

function verificarImpar(){
    let numero = Number(inputParImpar.value);
    if(numero % 2 == 0){
        alert("O número é Par");
    } else {
        alert("O número é Ímpar");
    }
}