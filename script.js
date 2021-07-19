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
