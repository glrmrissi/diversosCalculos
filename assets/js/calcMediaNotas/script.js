function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)
    let nota5 = parseFloat(document.getElementById("nota5").value)

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
        alert("Por favor, insera um número válido")
    }

    let mediaNotas = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

    const result = document.getElementById('resultMedia')
    result.innerText = mediaNotas
}