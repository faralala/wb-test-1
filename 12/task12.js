/*
Задача на работу с объектами: создайте объект, представляющий собой книгу. Объект должен иметь свойства, такие как: название книги, автор и год издания. Напишите методы для получения и изменения значений свойств книги.
*/

const book = {
	//! Объявление объектов с его методами
	title: 'NAME',
	author: 'AUTHOR',
	year: 2000,

	getTitle() {
		// Метод для получения заголовка

		return this.title // Возвращает значение ключа title ссылаясь на наш объект (this)
	},

	getAuthor() {
		//! Метод для получения автора

		return this.author // Возвращает значение ключа author ссылаясь на наш объект (this)
	},

	getYear() {
		// Метод для получения года выпуска

		return this.year // Возвращает значение ключа year ссылаясь на наш объект (this)
	},

	setTitle(newTitle) {
		// Метод для задавание заголовка
		this.title = newTitle // Записывает новое значение ключа title у объекта
	},

	setAuthor(newAuthor) {
		// Метод для задавание нового автора
		this.author = newAuthor // Записывает новое значение ключа author у объекта
	},

	setYear(newYear) {
		// Метод для задавания нового года выпуска
		this.year = newYear // Записывает новое значение ключа year у объекта
	},
}

// Использование методов для получения значений свойств книги
console.log('Название книги:', book.getTitle())
console.log('Автор:', book.getAuthor())
console.log('Год издания:', book.getYear())

// Использование методов для изменения значений свойств книги
book.setTitle('NAME')
book.setAuthor('AUTHOR')
book.setYear(2000)

console.log('Новое название книги:', book.getTitle())
console.log('Новый автор:', book.getAuthor())
console.log('Новый год издания:', book.getYear())
