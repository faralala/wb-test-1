/*
Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

*/

const executeFunctions = functionsArray => {
	// функция которая принимает массив функций
	return () => {
		// возвращаем анонимную функцию которая будет вызывать функцию и возвращать результат
		const results = [] // пустой массив результатов

		for (const func of functionsArray) {
			// цикл который вызывает текущую функцию и сохраняет результат в массив результатов
			const result = func()
			results.push(result)
		}
		// возвращаем массив результатов
		return results
	}
}

// Пример массива функций
const functionsArray = [() => 10, () => 'Hello', () => [1, 2, 3]]
// Создаем вспомогательную функцию combinedFunction, которая будет вызывать функции из functionsArray и возвращать результаты
const combinedFunction = executeFunctions(functionsArray)
// Вызываем combinedFunction, чтобы получить массив результатов
const resultsArray = combinedFunction()
//вывод в консоль
console.log(resultsArray)
