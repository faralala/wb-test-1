/*
	Задача: Создать и добавить элемент с использованием шаблонов: Напишите функцию, которая создает новый элемент с использованием шаблонов (например, с помощью тега <template>) и добавляет его в DOM.
*/
// Присваиваем в переменную container элемент с id conteiner из HTML документа
const container = document.getElementById('container')

function createAndAddElement() {
	// Создание элемента с использованием шаблона
	const template = document.getElementById('template') //находим шаблон который будем использовать
	const newText = template.content.querySelector('div') // находим div шаблона для дальнейших действий

	newText.innerText = 'Новый элемент 1' // изменяем текст блока div

	//! Добавление элемента в DOM
	let clonedElement = template.content.cloneNode(true) // делаем глубокое копирование изменнёного шаблона
	container.appendChild(clonedElement) // вставляем блок из шаблона в конец родительского элемента

	newText.innerText = 'Элемент новый 2' // изменяем текст блока div
	// Добавление элемента в DOM
	clonedElement = template.content.cloneNode(true) // делаем глубокое копирование изменнёного шаблона
	container.appendChild(clonedElement) // вставляем блок из шаблона в конец родительского элемента
}

const button = document.querySelector('.button') // находим кнопку по клику которой будет работать скрипт
button.addEventListener('click', () => {
	// обработчик события
	createAndAddElement() // запускаем создание нового элемента при помощи шаблона и вставку его в DOM
})
