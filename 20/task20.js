// Функция для подсчета размера хранилища в байтах
function calculateStorageSize() {
	const totalSize = Object.keys(localStorage).reduce((acc, key) => {
		const item = localStorage[key]
		return acc + key.length + item.length
	}, 0)

	return totalSize
}

// Функция для обновления информации о размере хранилища и вывода в консоль
function updateStorageInfo() {
	const currentSize = calculateStorageSize()
	const maxSize = 5 * 1024 * 1024 // Максимальный размер localStorage (5 МБ)

	console.log(`Объем занятой памяти: ${currentSize} байт / Максимальный размер: ${maxSize} байт`)
}

// Обновляем информацию о размере хранилища при загрузке страницы
updateStorageInfo()

// Обработчик изменений в localStorage
window.addEventListener('storage', () => {
	// При изменении данных в localStorage обновляем информацию о размере хранилища
	updateStorageInfo()
})
