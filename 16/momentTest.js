// Добавим библиотеку moment
const moment = require('moment')
// Создадим функцию которая расчитавыет разницу между датами где startData-начальная дата endData- конечная дата, unit- единица измерение(день месяц год....)
const calculateDateDifference = (startData, endData, unit) => {
	return moment(endData).diff(startData, unit)
}
// экспортируем функцию
module.exports = {
	calculateDateDifference,
}
