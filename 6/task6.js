/*Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.*/

// Создаём объект
const people = [
	{ name: 'John', age: 25 },
	{ name: 'Katy', age: 30 },
	{ name: 'Bob', age: 22 },
	{ name: 'Mikhail', age: 25 },
]

// Сортировка массива объектов
people.sort((a, b) => {
	// Сначала сравниваем возраст
	if (a.age !== b.age) {
		return a.age - b.age // сортируем по возрасту
	}
	// Если возрасты равны, сортируем по имени в алфавитном порядке
	return a.name.localeCompare(b.name) //  прочитал про способ  localeCompare тут https://learn.javascript.ru/string
})

// Вывод отсортированного массива
console.log(people)
