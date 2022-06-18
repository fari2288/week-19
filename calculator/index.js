document.querySelector('.calculator__button-plus').addEventListener('click', () => {

    const a = document.querySelector('.value1').value;
    const b = document.querySelector('.value2').value;

    const sum = Calculator.sum(Number(a), Number(b));

    document.querySelector('.result').innerHTML = sum;
})

document.querySelector('.calculator__button-minus').addEventListener('click', () => {

    const a = document.querySelector('.value1').value;
    const b = document.querySelector('.value2').value;

    const minus = Calculator.minus(Number(a), Number(b));

    document.querySelector('.result').innerHTML = minus;
})

document.querySelector('.calculator__button-times').addEventListener('click', () => {

    const a = document.querySelector('.value1').value;
    const b = document.querySelector('.value2').value;

    const times = Calculator.times(Number(a), Number(b));

    document.querySelector('.result').innerHTML = times;
})

document.querySelector('.calculator__button-divide').addEventListener('click', () => {

    const a = document.querySelector('.value1').value;
    const b = document.querySelector('.value2').value;

    const divide = Calculator.divide(Number(a), Number(b));

    document.querySelector('.result').innerHTML = divide;
})

class Calculator {
    static sum(a, b) {
        return a + b;
    }
    static minus(a, b) {
        return a - b;
    }
    static times(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return a / b;
    }
}