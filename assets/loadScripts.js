function loadScripts(scripts, callback) {
    let index = 0;

    function loadNext() {
        if (index < scripts.length) {
            let script = document.createElement('script');
            script.src = scripts[index];
            script.onload = function() {
                console.log(`Script carregado: ${scripts[index]}`);
                index++;
                loadNext();
            };
            script.onerror = function() {
                console.error(`Erro ao carregar o script: ${scripts[index]}`);
                index++;
                loadNext();
            };
            document.head.appendChild(script);
        } else if (callback) {
            callback();
        }
    }

    loadNext();
}

loadScripts([
    'assets/js/calcFatorial/script.js', // Fatorial
    'assets/js/calcMediaNotas/script.js', // Média de notas
    'assets/js/contagemVogais/script.js', // Contagem de Vogais
    'assets/js/conversãoTemp/script.js', // Temperatura C -> F° 
    'assets/js/verificacaoImparPar/script.js', // Impar ou Par
    'assets/js/anobissexto/script.js', // Ano bissexto
    'assets/js/calculoIMC/script.js', // IMC
    'assets/js/inversaoDeString/script.js', // Inversão de String
    'assets/js/ordenacaoDeArray/script.js', // Ordenação de Array
    'assets/js/verificacaoDeNumeroPrimo/script.js', // Números primos
    'assets/js/page/script.js' // Carrega os pokemons a direita da tela
], function() {
    console.log('Todos os scripts foram carregados.');
});
