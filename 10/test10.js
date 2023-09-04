// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

const stringToJson = str => {
	str = str.trim() // удаление пробелов в начале и конце строки

	if (str === '') {
		throw new Error('Empty string') // если строка пуста, выбрасываем ошибку
	}

	if (str[0] !== '{' || str[str.length - 1] !== '}') {
		throw new Error('Invalid JSON') // если строка не начинается и не заканчивается на фигурные скобки, выбрасываем ошибку
	}

	str = str.slice(1, -1) // удаляем фигурные скобки в начале и конце строки
	const keyValuePairs = str.split(',') // разделяем строку на пары (ключ-значение) по запятым
	const json = {} // создаем пустой объект JSON для хранения результата

	for (const pair of keyValuePairs) {
		// цикл формирования JSON
		const [rawKey, rawValue] = pair.split(':') // разделяем пару на ключ и значение

		const key = rawKey.trim() // удаляем пробелы в начале и конце ключа
		let value = rawValue.trim() // удаляем пробелы в начале и конце значения

		if (key === '') {
			throw new Error('Empty key') // если ключ пустой, выбрасываем ошибку
		}

		if (!isNaN(value)) {
			value = parseFloat(value) // если значение можно преобразовать в число, преобразуем его в число
		} else if (value[0] === '"' && value[value.length - 1] === '"') {
			value = value.slice(1, -1) // если значение начинается и заканчивается кавычками, удаляем кавычки
		} else if (value[0] === '{' && value[value.length - 1] === '}') {
			value = stringToJson(value) // если значение начинается и заканчивается фигурными скобками, рекурсивно преобразуем его в объект
		} else {
			throw new Error('Invalid value') // если значение не соответствует ни одному из типов (число, строка, объект), выбрасываем ошибку
		}

		json[key] = value // добавляем пару ключ-значение в объект JSON
	}

	return json // возвращаем объект JSON
}

let testJsonString = '{"name": "Ben", "age": 25, "isAdmin": "True"}'
testJsonObject = stringToJson(testJsonString)
console.log(testJsonObject)
