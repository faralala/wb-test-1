/*
Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.
*/
// Функция подсчёта макс объм данных в браузере
function LocalStorageSize() {
	const testData = 'a'.repeat(1024 * 1024) // задаём строку данных для теста она равна 1 МБ
	const key = 'testData' // задаём ключ для localStorage
	// try catch для отлова ошибок
	try {
		// Пытаемся записать данные в localStorage
		localStorage.setItem(key, testData)

		// Считываем данные из localStorage
		let dataSize = JSON.stringify(localStorage).length

		// Очищаем тестовые данные из localStorage
		localStorage.removeItem(key)
		// вывод размера
		return dataSize
		// отлов ошибки который возвращает в консоль ошибку и выводит 0
	} catch (error) {
		console.error('LocalStorage не поддерживается или достиг своего предела.')
		return 0
	}
}

// Вызываем функцию и выводим результат
const result = LocalStorageSize()
console.log(`Максимальный объем данных в localStorage: ${result} байт`)
