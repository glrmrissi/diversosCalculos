document.addEventListener('DOMContentLoaded', () => {
    let numberInsert = document.getElementById("numberInsert");
    let buttonNumberInsert = document.getElementById("buttonNumberInsert");
    let listFatorial = document.getElementById("listFatorial");

    function showFatorial(step) {
        const newListFat = document.createElement("li");
        newListFat.textContent = step;
        listFatorial.appendChild(newListFat);
    }

    buttonNumberInsert.addEventListener('click', () => {
        listFatorial.innerHTML = ""; // Limpa a lista antes de adicionar novos passos 🛴
        let number = parseInt(numberInsert.value);
        if (isNaN(number)) {
            showFatorial("Por favor, insira um número válido.") 
            return;
        }
        
        if (number === 0 || number === 1) {
            showFatorial("Por favor, insira um número válido.")
            showFatorial("Resultado: 1");
            return 1;
        }
        
        let result = number;
        let steps = number.toString();
        showFatorial(steps);
        for (let i = number - 1; i >= 1; i--) {
            result *= i;
            steps += ` x ${i}`;
            console.log (result)
            showFatorial(`${result} x ${i}`);
        }
        showFatorial(`Resultado: ${result}`);
        return result;
    });
});

