function sortArray() {
    let input = document.getElementById("arrayInput").value;
    let arrayStr = input.split(",").map(item => item.trim());  // Remove espaços extras

    let arrayNum = arrayStr.map(item => parseFloat(item));

    if (arrayNum.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    arrayNum.sort(function(a, b) {
        return a - b;
    });

    let sortedArrayStr = arrayNum.join(", ");

    // Exibe o resultado
    document.getElementById('sortedArrayResult').textContent = sortedArrayStr;
}