
function main() {
    let fib = [0, 1];
    let inputStr = document.querySelectorAll('.box__str')[0];
    let resultStr = document.querySelectorAll('.box__result')[0];
    resultStr.innerHTML = '';
    resultStr.style.fontSize = '22px';
    resultStr.style.opacity = '1';
    for (i = 2; i <= inputStr.value; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        resultStr.innerHTML += `${fib[i]}  `;
    }
}
function second() {
    let inputStr = document.querySelectorAll('.box__str')[1];
    let resultStr = document.querySelectorAll('.box__result')[1];
    let evenStr = document.querySelector('.box__even');
    let oddStr = document.querySelector('.box__odd');
    resultStr.innerHTML  = '';
    resultStr.style.fontSize = '22px';
    resultStr.style.opacity = '1';
    evenStr.innerHTML = '';
    evenStr.style.fontSize = '22px';
    evenStr.style.opacity = '1';
    oddStr.innerHTML = '';
    oddStr.style.fontSize = '22px';
    oddStr.style.opacity = '1';
    for (i = 0; i <= inputStr.value; i++) {
        if (i % 2 == 0) {
            evenStr.innerHTML += `${i}  `;
        }
        else {
            oddStr.innerHTML += `${i}  `;
        }
        resultStr.innerHTML += `${i}  `;
    }

}