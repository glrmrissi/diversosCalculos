function verificarIMC() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || peso <= 0) {
        document.getElementById('IMCResult').textContent = "Por favor, insira um peso válido.";
        pesoInput.focus();
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        document.getElementById('IMCResult').textContent = "Por favor, insira uma altura válida.";
        alturaInput.focus();
        return;
    }

    try {
        const imc = calcularIMC(peso, altura);
        const categoria = categoriaIMC(imc);
        document.getElementById('IMCResult').textContent = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
    } catch (error) {
        document.getElementById('IMCResult').textContent = error.message;
    }
}

function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        throw new Error("Peso e altura devem ser valores positivos.");
    }
    const imc = peso / (altura * altura);
    return imc;
}

function categoriaIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}
