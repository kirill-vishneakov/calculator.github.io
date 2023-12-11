let firstNumber = ''
let secondNumber = ''
let sign = ''
let resultat

const history = []

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

const clearAll = () => {
    firstNumber = ''
    secondNumber = ''
    sign = ''
    result.textContent = '0'
}
const historyP = document.getElementById('history')
const result = document.querySelector('#result')

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return
    const key = event.target.textContent
    if (numbers.includes(key)) {
        if (secondNumber === '' && sign === '') {
            firstNumber = firstNumber === 'Error'
                ? key
                : firstNumber + key
            result.textContent = firstNumber
        } else {
            secondNumber += key
            result.textContent = secondNumber
        }
    } else if (key !== '=') {
        if (firstNumber === '') return
        if (key === '%' && sign !== '' && secondNumber !== '') {
            secondNumber = ((firstNumber / 100) * secondNumber).toFixed(2)
            result.textContent = secondNumber
            return
        }
        if (key === 'ac') return clearAll()
        else if (key === '+/-') {
            if (secondNumber) {
                secondNumber = (+secondNumber * -1).toString()
                result.textContent = secondNumber
                return
            } else {
                firstNumber = (+firstNumber * -1).toString()
                result.textContent = firstNumber
                return
            }
        }
        sign = key
    } else {
        switch (sign) {
            case '+':
                resultat = (+firstNumber) + (+secondNumber)
                break
            case '-':
                resultat = firstNumber - secondNumber
                break
            case 'x':
                resultat = firstNumber * secondNumber
                break
            case '/':
                resultat = secondNumber === '0'
                    ? 'Error'
                    : firstNumber / secondNumber
                break
            case '%':
                firstNumber = (firstNumber / 100) * secondNumber
                break
        }
        history.push(firstNumber + sign + secondNumber + '=' + resultat)
        firstNumber = resultat
        secondNumber = ''
        sign = ''
        result.textContent = firstNumber
        historyP.textContent = ''
        history.forEach(element => {
            historyP.textContent += element + ' '
        });
    }
}


