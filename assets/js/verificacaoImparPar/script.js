let inputParImpar = document.getElementById("imparPar");

function verificarImpar(){
    let numero = Number(inputParImpar.value);
    const result = document.getElementById("resultImpar")
    if(numero % 2 == 0){
        result.innerText = "O número é par"
    } else {
        result.innerText = "O número é ímpar"
    }
}