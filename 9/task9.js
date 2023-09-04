// Реализовать функцию конвертации JSON в строку

const jsonToString = obj => {
	// проверяем тип переданного параметра и выполняем соответствующую обработку
	if (typeof obj === 'undefined') {
		return 'undefined'
	} else if (obj === null) {
		return 'null'
	} else if (typeof obj === 'number' || typeof obj === 'boolean') {
		return obj.toString()
	} else if (typeof obj === 'string') {
		return '"' + obj + '"'
	} else if (Array.isArray(obj)) {
		// создаем массив arr для хранения преобразованных элементов
		const arr = obj.map(item => jsonToString(item))
		return '[' + arr.join(',') + ']'
	} else {
		// создаем массив props для хранения преобразованных свойств объекта
		const props = []
		for (const prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				props.push('"' + prop + '":' + jsonToString(obj[prop]))
			}
		}
		return '{' + props.join(',') + '}'
	}
}
const testJsonToString = {
	name: 'John',
	age: 25,
	roles: {
		isAdmin: false,
		isEditor: true,
	},
}

console.log(jsonToString(testJsonToString))
