/*
Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список. 
*/

// Определение класса для узла односвязного списка
class Node {
	constructor(data) {
		this.data = data // содержимое узла
		this.next = null // указатель на следующий узел
	}
}

// Функция для преобразования JSON в односвязный список
const jsonToLinkedList = json => {
	if (!json || typeof json !== 'object') {
		// Проверка входного параметра
		throw new Error('Invalid JSON input') // вывод ошибки
	}

	let head = null // Начальный узел списка
	let currentNode = null // Текущий зел списка(для добавление новых узлов)

	for (const key in json) {
		// цикл создания и добавления узлов
		if (!head) {
			// Создаем начальный узел на первом шаге
			head = new Node(json[key])
			currentNode = head // устанавливаем текущий узел в начальный узел
		} else {
			// добавляем новый узел и перемещаем указатель
			currentNode.next = new Node(json[key]) // создаем новый узел и присваиваем его следующему узлу текущего
			currentNode = currentNode.next // перемещаем указатель текущего узла на новый узел
		}
	}

	return head // возвращаем начальный узел списка
}

// JSON-объекта
const jsonData = {
	key1: 'value1',
	key2: 'value2',
	key3: 'value3',
}

// Преобразование JSON в односвязный список
const linkedList = jsonToLinkedList(jsonData)

// Вывод значений односвязного списка
console.log(linkedList)
console.log(linkedList.next)
console.log(linkedList.next.next)
