/*
Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами. Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

*/
// импортируем модуль
const dateUtils = require('./momentTest')
// Создаём две даты сравнения
const startDate = moment('2023-05-01')
const endDate = moment('2023-08-25')
// расчитываем разницу в днях
const daysDifference = dateUtils.calculateDateDifference(startDate, endDate, 'days')
// расчитываем разницу в месяцах
const monthsDifference = dateUtils.calculateDateDifference(startDate, endDate, 'months')
// расчитываем разницу в годах
const yearsDifference = dateUtils.calculateDateDifference(startDate, endDate, 'years')

console.log('Разница в днях:', daysDifference)
console.log('Разница в месяцах:', monthsDifference)
console.log('Разница в годах:', yearsDifference)
