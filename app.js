let firstNumber = ''
let secondNumber = ''
let sign = ''

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

const clearAll = () => {
    firstNumber = ''
    secondNumber = ''
    sign = ''
    result.textContent = '0'
    console.log(firstNumber, sign, secondNumber)
}

const result = document.querySelector('p')

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return
    const key = event.target.textContent
    if (numbers.includes(key)) {
        if (secondNumber === '' && sign === '') {
            firstNumber = firstNumber === 'Error'
                ? key
                : firstNumber + key
            result.textContent = firstNumber
            console.log(firstNumber, sign, secondNumber)
        } else {
            secondNumber += key
            result.textContent = secondNumber
            console.log(firstNumber, sign, secondNumber)
        }
    } else if (key !== '=') {
        sign = key
        if (key === 'ac') return clearAll()
        else if (key === '+/-') {
            if (secondNumber) {
                secondNumber = '-' + secondNumber
                result.textContent = secondNumber
                console.log(firstNumber, sign, secondNumber)
            } else {
                firstNumber = '-' + firstNumber
                result.textContent = firstNumber
                console.log(firstNumber, sign, secondNumber)
            }
        }
        console.log(firstNumber, sign, secondNumber);
    } else {
        switch (sign) {
            case '+':
                firstNumber = (+firstNumber) + (+secondNumber)
                secondNumber = ''
                sign = ''
                result.textContent = firstNumber
                console.log(firstNumber, sign, secondNumber)
                break
            case '-':
                firstNumber = firstNumber - secondNumber
                secondNumber = ''
                sign = ''
                result.textContent = firstNumber
                console.log(firstNumber, sign, secondNumber)
                break
            case 'x':
                firstNumber = firstNumber * secondNumber
                secondNumber = ''
                sign = ''
                result.textContent = firstNumber
                console.log(firstNumber, sign, secondNumber)
                break
            case '/':
                firstNumber = secondNumber === '0'
                    ? 'Error'
                    : firstNumber / secondNumber
                secondNumber = ''
                sign = ''
                result.textContent = firstNumber
                console.log(firstNumber, sign, secondNumber)
                break
        }
    }

}