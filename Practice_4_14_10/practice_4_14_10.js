// В программе задан массив, передающий строковые элементы. Напишите программу, которая которая ответит на вопрос: присутствует ли в массиве элемент, чей корень длины возвращает целое число? В качестве ответа необходимо вывести булевый тип true, false.
// Пример: ['Велосипед','Торт','Тенис,'Ракетка','Город']
// Результат: true

let array = ['Велосипед', 'Торт', 'Тенис', 'Ракетка', 'Город'];

console.log(array.some(el => Math.sqrt(el.length) % 1 == 0));

// ***************************************************************

// В программе задан массив, передающий числовые элементы. Напишите программу, которая сформирует новый массив из отрицательных чисел заданного массива.
// Пример: [1,2,3,-4,5,-6,7,-8,9,10]
// Результат: [-4,-6,-8]

let array2 = [1, 2, 3, -4, 5, -6, 7, -8, 9, 10];

console.log(array2.filter(el => el < 0));

// 2 Solution
console.log(array2.filter(el => Math.sign(el) == -1)); // sign vozvrasiajet  1 esli polozitelnoje cislo, i -1 jesli cislo otricatelnoje, 0 esli 0

// *****************************************************************
// Задача 3. Сформируйте функцию some(array, callback). Функция должна проверить каждый элемент на условие,
// которое будет в последующем задано в колбэк-функции.
// Если найдется хоть 1 элемент который удовлетворяет условию колбека - функция должна вернуть true,
// в противном случае false

// Пример:
// let array = ['Велосипед','Торт','Тенис','Ракетка','Город']
// console.log(some(array, (elem) => elem.length == 4))
// Результат: true

let wordsArray = ['Велосипед', 'Торт', 'Тенис', 'Ракетка', 'Город'];

const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return true;
    }
  }
  return false;
};

console.log(some(wordsArray, elem => elem.length == 4)); // true
console.log(some(wordsArray, elem => elem.length == 100)); // false

// *******************************************************************

// Задача 4. Сформируйте функцию ourMap(array, callback). Функция должна изменить все элементы массива по правилам,
// которые должны быть изложены в callbacl-функции.
// Примечание: функция должна вернуть НОВЫЙ массив, не изменив источник.

// Пример:
// let array = [1,2,3,4]
// console.log(ourMap(array, (e) => e ** 2), array)

// Результат: [1,4,9,16] [1,2,3,4]

let numArray = [1, 2, 3, 4];
const ourMap = (numbers, callback) => {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    newArray.push(callback(element));
  }
  return newArray;
};

console.log(
  ourMap(numArray, e => e ** 2),
  numArray
);

// *******************************************************************

// Vse metodi massiva mogut prinemat esio 2 argumenta, index i massiv

// ******************************************************************

// В программе задана переменная values, которая хранит массив из строк.
// Определите математическую сумму всех элементов, которые при преобразовании
// в число не вернут значение NaN.
// Cформируйте решение в функцию sumNumbers(array). Функция должна вернуть число.

// Пример значений переменных:
// let values = ["100", "30", "Не число", "20", "Тоже не число"]
// console.log(sumNumbers(values))
// Пример результата: 150

// isNaN() - метод, определяющий значение NaN в аргменте.
// Если NaN - ответ true, в противном случае false

let values = ['100', '30', 'Не число', '20', 'Тоже не число'];

function sumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (!isNaN(Number(element))) {
      // mozno pisat +element to ze samoje cto Number(element) perevod v cislo
      sum += Number(element);
    }
  }
  return sum;
}

console.log(sumNumbers(values));

// ******************************************************************
