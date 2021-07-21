console.log('I am inside node')

function parseArgs(argsArray) {
	console.log(`argv: `, argsArray)
	return argsArray.slice(2)
}

const restOfArgs = parseArgs(process.argv)
console.log(`restOfArgs: `, restOfArgs)

function calculator(restOfArgs) {
	const firstNumber = restOfArgs[0]
	const operator = restOfArgs[1]
	const secondNumber = restOfArgs[2]

	if (operator === 'times') {
		return Number(firstNumber) * Number(secondNumber)
	}

	if (operator === 'plus') {
		return Number(firstNumber) + Number(secondNumber)
	}

	if (operator === 'minus') {
		return Number(firstNumber) - Number(secondNumber)
	}
}

console.log(calculator(restOfArgs))

// const operators = [ "plus", "minus", "times", "divided"]

// function parseInputs(params) {
// const inputs = process.argv.slice(2)
// console.log(inputs)
// const firstNumber = Number.(inputs[0])
// const secondNumber = Number.(inputs[2])
// const operator = inputs[1]
//
// if (
//    isNaN(firstNumber) ||
//    isNaN(secondNumber) ||
//    !operator.includes(operator)
// ) {
//   return null
// }
//  return [firstNumber, secondNumber, operator]
// }

//let firstNumber, secondNumber, operator = null

// try {
//   [firstNumber, secondNumber, operator] = parseInputs(process.argv)
// } catch (error) {
//   console.error("Wrong Inputs")
//   process.exit(1)
//}

// function plus(number1, number2) {
//  return number1 + number2
//}

// function minus(number1, number2) {
//  return number1 - number2
//}

// function times(number1, number2) {
//  return number1 * number2
//}

// function divided(number1, number2) {
//  return number1 / number2
//}

//CREATE AN OBJ WITH THE KEYS BEING THE FUNCTIONS:
// const operations = {
//    times: times,
//    divided: divided,
//    plus: plus,
//    minus: minus
//}

//const result = operations[operator](firstNumber, secondNumber)
// console.log(result)
