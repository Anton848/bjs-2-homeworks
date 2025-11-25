function parseCount(value) {

  const parsedValue = Number.parseFloat(value); // Пытаемся распарсить значение.

  if (isNaN(parsedValue)) { // Проверяем, является ли результат NaN.

    throw new Error("Невалидное значение"); // Если NaN, выбрасываем исключение.

  }

  return parsedValue; // Возвращаем распарсенное значение.

}

/**

 * Функция validateCount

 * Пытается распарсить значение с помощью parseCount и обрабатывает исключения.

 * @param {any} value Значение для парсинга.

 * @returns {number|Error} Результат парсинга или объект ошибки.

 */

function validateCount(value) {

  try {

    return parseCount(value); // Пытаемся распарсить значение с помощью parseCount.

  } catch (error) {

    return error;               // Возвращаем объект ошибки, если parseCount выбросил исключение.

  }

}


 class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return parseFloat(area.toFixed(3)); // Оставляем 3 знака после запятой
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
