/*Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.
 */

// Создаём Базовый класс Shape
class Shape {
	calculateArea() {
		//абстрактный метод
		throw new Error('Метод calculateArea() должен быть переопределен')
	}

	calculatePerimeter() {
		//абстрактный метод
		throw new Error('Метод calculatePerimeter() должен быть переопределен')
	}
}

// Подкласс Rectangle наследует базовый класс Shape и реализует методы для прямоугольника
class Rectangle extends Shape {
	constructor(width, height) {
		//В конструктор передаём в качестве аргументов width и heigth
		super() // Вызываем конструктор родительского класса Shape
		this.width = width // задаём ширину
		this.height = height // задаём высоту
	}

	calculateArea() {
		return this.width * this.height // Рассчитываем площадь прямоугольника
	}

	calculatePerimeter() {
		return 2 * (this.width + this.height) // Рассчитываем периметр прямоугольника
	}
}

// Подкласс Circle наследует базовый класс Shape и реализует методы для круга
class Circle extends Shape {
	constructor(radius) {
		// В конструктор передаём в качестве аргументов radius
		super() // Вызываем конструктор родительского класса Shape
		this.radius = radius // задаём радиус
	}

	calculateArea() {
		return Math.PI * this.radius ** 2 // Рассчитываем площадь круга
	}

	calculatePerimeter() {
		return 2 * Math.PI * this.radius // Рассчитываем периметр круга
	}
}

// Подкласс Triangle наследует базовый класс Shape и реализует методы для треугольника
class Triangle extends Shape {
	constructor(side1, side2, side3) {
		// В конструктор передаём в качестве аргументов side1,side2,side3 три сторны треугольника в данном методе
		super() // Вызываем конструктор родительского класса Shape
		this.side1 = side1 // задаём 1 сторону треугольника
		this.side2 = side2 // задаём 2 сторону треугольника
		this.side3 = side3 // задаём 3 сторону треугольника
	}

	calculateArea() {
		const s = (this.side1 + this.side2 + this.side3) / 2 // Вычисляем полупериметр
		return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3)) // Рассчитываем площадь треугольника
	}

	calculatePerimeter() {
		return this.side1 + this.side2 + this.side3 // Рассчитываем периметр треугольника
	}
}

// Рассчётная часть

const rectangle = new Rectangle(10, 20)

console.log('Площадь:', rectangle.calculateArea())
console.log('Периметр:', rectangle.calculatePerimeter())

// Круг с радиусом 12
const circle = new Circle(12)
console.log('Площадь:', circle.calculateArea())
console.log('Длина окружности:', circle.calculatePerimeter())

// Треугольник со сторонами 1, 2, 3
const triangle = new Triangle(1, 2, 3)
console.log('Площадь:', triangle.calculateArea())
console.log('Периметр:', triangle.calculatePerimeter())
