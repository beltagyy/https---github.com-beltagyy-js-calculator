class calculator  {
constructor(previousOperandTextElement, currentOperandTextElement){

    this.previousOperandTextElement= previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()

}
clear(){
    this.currentOperand = ''
    this.previousOperand=''
    this.operation=undefined

}
delete(){

}
appendNumber(number)
{
    this.currentOperand=number
    

}
chooseOperation(operation){

}
compute(){

}
updateDisplay()
{
    this.currentOperandTextElement.innerText = this.currentOperand

}
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previos-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {

    button.addEventListener('click', () => {
calculator.appendNumber(button.innerText)
calculator.updateDisplay

    })
})