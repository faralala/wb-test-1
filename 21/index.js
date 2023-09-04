// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let callCount = 0 // объявляем кол-во вызовов
// рекурсивная функция, которая будет набивать коллстек
function testStack() {
	callCount++
	testStack()
}
// try catch для отлова ошибок
try {
	testStack() // вызываем рекурсивную функцию
} catch (error) {
	console.log(`Stack size : ${callCount}`) // после переполнения коллстека выдаст ошибку с размером коллстека
}

// YandexBrowser Stack size : 13953
// Chrome Stack size : 13950
// Opera Stack size : 11109
// firefox Stack size : 30100
// Safari Stack size : 42629
