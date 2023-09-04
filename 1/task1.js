/* 1. Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).*/

function isPalindrom(str) {
	// Преобразование строки в нижний регистр и удаление всех пробелов
	const cleanStr = str.toLowerCase().replace(/\s/g, '')
	// Создаём обратную копию строки
	const reverseStr = cleanStr.split('').reverse().join('')
	// Сравниваем преобразованную строку с её обратной копией
	return cleanStr === reverseStr
	// Функция возвращает true(это палиндром) и false(это не палиндром)
}
function isPalindrom1(str) {
	// Преобразование строки в нижний регистр и удаление всех пробелов
	const cleanedStr = str.toLowerCase().replace(/\s/g, '')
	//Создаём два указателя один в начале строки второй в конце строки
	let left = 0
	let right = cleanedStr.length - 1
	// проверяем строку пока указатели не пересекутся
	while (left < right) {
		//  проверка по одной букве, если не символы в строке не равны выводи false
		if (cleanedStr[left] !== cleanedStr[right]) {
			return false
		}
		// шаги указателей
		left++
		right--
	}
	// проверка по одной букве, если не символы в строке равны выводи true
	return true
}

const testString1 = 'аргентина манит негра'
const testString2 = 'Тест'
const testString3 = 'Коту тащат уток'

isPalindrom(testString1)
isPalindrom(testString2)
isPalindrom(testString3)

isPalindrom1(testString1)
isPalindrom1(testString2)
isPalindrom1(testString3)
