function getArrayParams(...arr) {  

    if (!Array.isArray(arr) || arr.length === 0) {  
        throw new Error('Массив должен быть непустым');  
    }  
      
    // Находим минимальное значение  
    const min = Math.min(...arr);  
      
    // Находим максимальное значение  
    const max = Math.max(...arr);  
      
    // Вычисляем среднее значение  
    const sum = arr.reduce((acc, val) => acc + val, 0);  
    const avg = Number((sum / arr.length).toFixed(2));  
      
    return {  
        min: min,  
        max: max,  
        avg: avg  
    };  
}  
  




  


  
  



function summElementsWorker(...arr) {

    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  
}  


function differenceMaxMinWorker(...arr) {
    
    if (arr.length === 0) return 0; // обработка пустого массива  
      
    const max = Math.max(...arr);  
    const min = Math.min(...arr);  
      
    return max - min;  
}  


function differenceEvenOddWorker(...arr) {

    // Инициализируем переменные для сумм  
    let sumEvenElement = 0;  // сумма чётных элементов  
    let sumOddElement = 0;   // сумма нечётных элементов  
      
    // Перебираем все элементы массива  
    for (let i = 0; i < arr.length; i++) {  
        // Проверяем чётность элемента  
        if (arr[i] % 2 === 0) {  
            // Если чётный - добавляем к сумме чётных  
            sumEvenElement += arr[i];  
        } else {  
            // Если нечётный - добавляем к сумме нечётных  
            sumOddElement += arr[i];  
        }  
    }  
      
    // Возвращаем разницу сумм  
    return sumEvenElement - sumOddElement;  


}

function averageEvenElementsWorker(...arr) {

    // Инициализируем переменные для суммы и количества чётных элементов  
    let sumEvenElement = 0;  
    let countEvenElement = 0;  
      
    // Перебираем все элементы массива  
    for (let i = 0; i < arr.length; i++) {  
        // Проверяем, является ли элемент чётным  
        if (arr[i] % 2 === 0) {  
            // Увеличиваем сумму на значение чётного элемента  
            sumEvenElement += arr[i];  
            // Увеличиваем счётчик чётных элементов  
            countEvenElement++;  
        }  
    }  
      
    // Проверяем, есть ли чётные элементы в массиве  
    if (countEvenElement === 0) {  
        return 0; // или можно вернуть null, если нет чётных элементов  
    }  
      
    // Вычисляем и возвращаем среднее значение  
    return sumEvenElement / countEvenElement;  
}  


function makeWork (arrOfArr, func) { 
      


  // Инициализируем переменную для хранения максимального результата, используя самое минимальное числовое значение.

  let maxWorkerResult = -Infinity;

  // Реализуем цикл для перебора всех элементов массива arrOfArr.

  for (let i = 0; i < arrOfArr.length; i++) {

    // Получаем текущий массив данных из arrOfArr.

    const currentArr = arrOfArr[i];

    // Вызываем функцию-насадку, используя spread-оператор для передачи элементов массива currentArr в качестве аргументов.

    const result = func(...currentArr);

    // Проверяем, является ли полученный результат больше текущего максимального значения.

    if (result > maxWorkerResult) {

      // Если результат больше, обновляем maxWorkerResult.

      maxWorkerResult = result;

    }

  }

  // Возвращаем максимальный результат, полученный от функции-насадки.

  return maxWorkerResult;

}





  


  


