/*
Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
добавляет его в DOM и устанавливает для него стиль с помощью CSS.
*/

let btn = document.getElementById('element')
let container = document.getElementById('container')

function addElement() {
	let element = document.createElement('div') // Создаём новый элемент и сохраняем в переменной element
	// Устанавливаем стили для этого элемента
	element.style.width = '100px'
	element.style.height = '100px'
	element.style.backgroundColor = 'blue'
	element.style.margin = '5px'
	container.style.display = 'flex'
	container.style.flexDirection = 'column'
	// Добавляем этот элемент внутрь container
	container.appendChild(element, container)
}
// Вызов функции при клике на кнопку
btn.addEventListener('click', addElement)
