/*
	Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и выполняет определенные действия с этими данными,
 	например, отправляет их на сервер или отображает всплывающее окно с результатами.
*/

function processFormData() {
	// Находим форму по её id
	const form = document.getElementById('myForm')

	// Получаем данные из формы
	const formData = new FormData(form)

	// Создаем объект для хранения данных формы
	const formDataObject = {}

	// Преобразуем данные из объекта FormData в обычный объект
	formData.forEach((value, key) => {
		formDataObject[key] = value
	})

	// отправляем данные на сервер
	console.log(formDataObject)

	// Очищаем форму после обработки данных
	form.reset()
}

// Находим кнопку, которая запускает обработку данных
const submitButton = document.getElementById('submitButton')

// Добавляем обработчик события на кнопку
submitButton.addEventListener('click', processFormData)
