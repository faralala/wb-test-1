/*
	Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, например, плавное изменение его положения или размера.
*/
// функция создании анимации, которая перемещает элемент на 200 px в течении 2 сек и возвращает обратно в исходное положение
function startAnimation() {
	// присваиваем в переменную element элемент с классом animated-element в HTML документе
	const element = document.querySelector('.animated-element')
	// стили элемента для анимации
	element.style.transition = 'transform 2s ease-in-out'
	element.style.transform = 'translateX(200px)'
	// Установка задержки перед изменением свойства
	setTimeout(() => {
		element.style.transform = 'translateX(0)'
	}, 2000)
}
