document.getElementById('contagemVogal').addEventListener('input', function (e) {
    const regex = /[0-9]/g;
    if (regex.test(e.target.value)) {
        e.target.value = e.target.value.replace(regex, '');
    }
});

function contarVogais() {
    let palavra = document.getElementById("contagemVogal").value;

    let vogais = ["A", "a", "I", "i", "O", "o", "U", "u", "E", "e"];

    let resultVogais = document.getElementById('resultVogais')
    let resultVogaisEncotradas = document.getElementById('resultVogaisEncotradas')
    let contadorVogais = 0;

    let vogaisEncontradas = [ ]

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contadorVogais++;
            vogaisEncontradas .push(palavra[i])
        }
        resultVogais.innerText = `O número de vogais foram: ${contadorVogais}` 
        resultVogaisEncotradas.innerText = `As vogais encontradas foram: ${vogaisEncontradas}`
    }

}

