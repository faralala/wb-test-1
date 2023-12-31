/*
	Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, начиная с указанного элемента,
	и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).
*/

function goInDOM(node) {
	console.log(node.tagName) // вывод в консоль значения тега

	// обходим всех детей текущего узла
	for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i] // получаем узел который будем выводить
		goInDOM(child) // рекурсивно вызываем саму функцию для каждого дочернего элемента
	}
}
// Пример использования функции
const testElement = document.getElementById('test') // объявляем testElement с Id test в html документе
goInDOM(testElement) // передаём его в функцию , где начнётся выполнение и в консоле выведет все теги внутри тега с  id test
