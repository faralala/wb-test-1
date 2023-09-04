/*Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово
  await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.
	*/

// выполнение fetch запроса для получения данных пользователей с внешнего API (jsonplaceholder.typicode.com).

// Функция вызывает fetchUserData() для получения данных о пользователях и выводит их в консоль.
const fetchUserData = async () => {
	// Выполняем fetch запрос к указанному URL и ждем ответ.
	const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

	// После получения ответа, преобразуем его в формат JSON и ждем завершения этой операции.
	const userData = await response.json()

	// Возвращаем полученные данные о пользователях.
	return userData
}

// Она также использует async/await и блок try-catch для обработки ошибок.
const getUserData = async () => {
	try {
		// Вызываем fetchUserData() для получения данных о пользователях.
		const userData = await fetchUserData()

		// Выводим полученные данные о пользователях в консоль.
		console.log(userData)
	} catch (error) {
		// В случае возникновения ошибки, выводим её информацию в консоль.
		console.error(error)
	}
}

// Вызываем функцию getUserData() для получения и вывода данных о пользователях.
getUserData()
