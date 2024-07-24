document.getElementById('invertString').addEventListener('input', function (e) {
    const regex = /[0-9]/g;
    if (regex.test(e.target.value)) {
        e.target.value = e.target.value.replace(regex, '');
    }
});

let result = document.getElementById('invertStringResult');
let invertString = document.getElementById("invertString")

function invertirString() {
    let str = invertString.value;
            
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    
    let reversedStr = reverseString(str);
    
    result.textContent = reversedStr;
}