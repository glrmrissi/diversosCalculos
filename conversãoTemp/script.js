function converter() {
    let celsius = document.getElementById("celsius").value;
    let resultCelsius = document.getElementById("resultCelsius")

    if(isNaN(celsius)) {
        alert("Digite um valor válido!")
    } else {
        let fahrenheit = (celsius * 1.8) + 32;
        resultCelsius.innerText = `${celsius}ºC é igual a ${fahrenheit}ºF`
    }
}