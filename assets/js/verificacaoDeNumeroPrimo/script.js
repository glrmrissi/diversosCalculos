function isPrime(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos
    if (num % 2 === 0 || num % 3 === 0) return false; // Exclui múltiplos de 2 e 3
    
    // Verifica divisores a partir de 5 até a raiz quadrada de num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function checkPrime() {
    let input = document.getElementById("numberPrime").value;
    let num = parseInt(input, 10);
    
    // Verifica se a entrada é um número válido
    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }

    let result = isPrime(num);

    document.getElementById('primeResult').textContent = result ? num + " É um número primo." : num + " Não é um número primo.";
}