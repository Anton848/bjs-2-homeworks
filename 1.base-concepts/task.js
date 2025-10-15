"use strict"

function solveEquation(a, b, c) {  
    // Вычисляем дискриминант  
    const d = b ** 2 - 4 * a * c;  
      
    // Проверяем значение дискриминанта  
    if (d < 0) {  
        // Нет действительных корней  
        return [];  
    } else if (d === 0) {  
        // Один корень  
        const x = -b / (2 * a);  
        return [x];  
    } else {  
        // Два корня  
        const sqrtD = Math.sqrt(d);  
        const x1 = (-b + sqrtD) / (2 * a);  
        const x2 = (-b - sqrtD) / (2 * a);  
        return [x1, x2];  
    }  
}  
  

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // процент/вклад/сумма вклада/кол-во месяцев


// Преобразуем процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную
let monthlyRate = (percent / 100) / 12;

// Рассчитываем тело кредита
let principal = amount - contribution;


// Рассчитываем ежемесячный платеж по формуле
let monthlyPayment = principal * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

// Рассчитываем общую сумму, которую придется заплатить клиенту
let totalAmount = monthlyPayment * countMonths;

// Округляем результат до двух значений после запятой
return Math.round(totalAmount * 100) / 100;

}


