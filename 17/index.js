// Функция получения элементов DOM
function initialize() {
	const addressInput = document.getElementById('address-input') // Поле ввода адреса
	const listSelect = document.getElementById('list') // Список
	// работа с Yandex API
	ymaps.ready(() => {
		// Функция геокодирования
		function geocode(address) {
			if (!address) {
				// Если адрес пустой
				clearList() // очищаем список
				hideList() // скрываем список
				return // не отправляем запрос если пустое поле
			}
			// Отправка запроса на геокодирование.
			ymaps.geocode(address).then(res => {
				clearList() // очищаем список
				// Обрабатываем каждый найденный объект геокодирования
				res.geoObjects.each(geoObject => {
					// Создаем элемент списка для каждого результата
					const option = document.createElement('option')
					option.value = geoObject.getAddressLine()
					option.text = geoObject.getAddressLine()
					listSelect.addEventListener('change', e => {
						addressInput.value = listSelect.value
						hideList()
					})
					// Добавляем элемент списка в выпадающий список результатов
					listSelect.appendChild(option)
				})

				showList() // Показываем список
			})
		}
		// Функция очистки списка
		function clearList() {
			listSelect.innerHTML = '' // очищаем список
		}
		// Функция скрытия списка
		function hideList() {
			listSelect.style.display = 'none' // скрываем список
		}
		// Функция показа списка
		function showList() {
			listSelect.style.display = 'block' // показываем список
		}
		//! Функция дебоунсинга и защиты от троттлинга
		function debounce(fn, delay) {
			// функция которая принимает результат геокодирования и задержку для таймера
			let timer // переменная таймер
			return function () {
				// возвращаем таймер с результатом выполнения действий и задержкой
				clearTimeout(timer) // очистка таймера
				timer = setTimeout(function () {
					// создания таймера, вызова геокодирования и выставление задержки
					fn.apply(this, arguments) // получение данных геокодирования
				}, delay) // задержка
			}
		}
		// Добавляем обработчик события ввода с задержкой 1000 мс
		addressInput.addEventListener(
			'input',
			debounce(() => {
				// обработчик событий на поле ввода которвый вызывает функцию дебаунс передавая в неё аргументы для задержки и геокодирования
				const address = addressInput.value // Получаем значение адреса из поля ввода
				geocode(address) // Выполняем геокодирование
			}, 1000) // задержка
		)
	})
}
// Запускаем инициализацию после загрузки страницы
window.onload = initialize
