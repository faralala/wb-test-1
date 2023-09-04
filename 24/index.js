/*
	24. Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.
Требования:
	данные должны загружаться при загрузке страницы
	необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
	 необходимо реализовать клиентскую пагинацию (50 элементов на странице)
*/

// Функция для загрузки данных с источника при загрузке
// страницы, принимает данные и возвращает JSON, при ошибке
// будет перехвачена в catch в консоли вывод ошибки
async function loadData() {
	try {
		const response = await fetch(
			'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true'
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error)
	}
}

// Функция для создания строк таблицы
// Принимает данные в виде массива
// для каждого объекта создаётся
// строка таблица и ячейки с данными
function createTableRows(data) {
	const tableBody = document.getElementById('table-body')
	tableBody.innerHTML = ''

	data.forEach(item => {
		const row = document.createElement('tr')
		for (const key in item) {
			const cell = document.createElement('td')
			cell.textContent = item[key]
			row.appendChild(cell)
		}
		tableBody.appendChild(row)
	})
}

// Функция для сортировки данных
// Принимает имя колонки порядок сортировки
// сортируется по возврастанию и убыванию
function sortData(data, column, order) {
	return data.sort((a, b) => {
		const valA = a[column]
		const valB = b[column]
		if (valA < valB) {
			return order === 'asc' ? -1 : 1
		}
		if (valA > valB) {
			return order === 'asc' ? 1 : -1
		}
		return 0
	})
}

// Функция для обновления таблицы
// Вызывает таблицу с новыми данными
// Идёт перерисовка таблицы
function updateTable(data) {
	createTableRows(data)
}

// Функция создает элементы пагинации (кнопки страниц)
// Она принимает данные и количество элементов на одной странице.
//Затем она вычисляет количество страниц и создает кнопки для каждой страницы, добавляя обработчик событий, чтобы при нажатии на кнопку отображалась соответствующая страница данных.
function createPagination(data, itemsPerPage) {
	const pagination = document.getElementById('pagination')
	pagination.innerHTML = ''

	const pageCount = Math.ceil(data.length / itemsPerPage) // Округление в большую сторону

	for (let i = 1; i <= pageCount; i++) {
		const pageButton = document.createElement('button')
		pageButton.textContent = i
		pageButton.addEventListener('click', () => {
			const startIndex = (i - 1) * itemsPerPage
			const endIndex = startIndex + itemsPerPage
			const pageData = data.slice(startIndex, endIndex)
			updateTable(pageData)
		})
		pagination.append(pageButton)
	}
}

// Главная функция
async function main() {
	const data = await loadData() // вызов при загрузке страницы
	const itemsPerPage = 50 // кол-во элементов на странице
	// Создание начальных строк таблицы и пагинации
	createTableRows(data.slice(0, itemsPerPage))
	createPagination(data, itemsPerPage)
	// Получаем ссылку на элемент по его id
	const table = document.getElementById('data-table')
	// Обработчик события при клике
	table.addEventListener('click', event => {
		// Проверка клика по заголовку
		if (event.target.tagName === 'TH') {
			// Получения атрибутов для определения какой столбец сортировать
			const column = event.target.getAttribute('data-sort')
			// Получение текущего порядка сортировки из атрибута  или устанавливается по умолчанию 'asc'
			const currentOrder = event.target.getAttribute('data-order') || 'asc'
			// изменения порядка сортировки на противоположный
			const newOrder = currentOrder === 'asc' ? 'desc' : 'asc'
			// Получение текущего аттрибута и его обновление
			event.target.setAttribute('data-order', newOrder)
			const sortedData = sortData(data, column, newOrder)
			// сортированная страница
			updateTable(sortedData.slice(0, itemsPerPage))
			// обновление пагинации
			createPagination(sortedData, itemsPerPage)
		}
	})
}
// Вызов функции таблицы
main()
