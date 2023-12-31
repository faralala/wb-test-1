/*
Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
Другими словами, нужно выполнить следующие шаги:
	Вызвать первую функцию из массива.
		После завершения работы первой функции вызвать вторую функцию.
			После завершения работы второй функции вызвать третью функцию.
				И так далее, пока все функции в массиве не будут вызваны по порядку.

*/

// создаем массив функций
const functions = [
	() => {
		console.log(1)
	},
	() => {
		console.log(2)
	},
	() => {
		console.log(3)
	},
]

// создаём рекурсивную функцию для вызова функций из массива
const executeFunctions = index => {
	if (index >= functions.length) {
		// проверяем, если индекс больше или равен длине массива функций, то выходим из рекурсии

		return // выход из рекурсии, когда все функции выполнены
	}

	// получаем текущую функцию по индексу из массива
	const currentFunction = functions[index]

	// вызываем текущую функцию, которая выводит соответствующее значение
	currentFunction()

	// вызываем следующую функцию рекурсивно, увеличивая индекс на 1
	executeFunctions(index + 1)
}

// начинаем выполнение с первой функции, передавая индекс 0
executeFunctions(0)
