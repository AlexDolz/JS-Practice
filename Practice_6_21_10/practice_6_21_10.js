// Функция count принимает на вход массив строк и строку и возвращает
// сколько раз эта строка встречается в массиве

// function count(arr, str) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === str) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(count(['a', 'b', 'a', 'c'], 'a')); // 2

// //  2 Solution

// function count2(arr, str) {
//   return arr.filter(item => item === str).length;
// }

// console.log(count2(['a', 'b', 'a', 'c'], 'a')); // 2

// **********************************************************************

// Функция canSplit принимает на вход строку из 0 и 1
// возвращает true, если символы в строке можно перемешать таким образом,
// чтобы они шли через один

// function canSplit(str) {
//   let count0 = 0;
//   let count1 = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '0') {
//       count0++;
//     } else {
//       count1++;
//     }
//   }
// return Math.abs(count0 - count1) < 2;  // TODO
// } // 0 = 2
//   // 1 = 3  => 01010

// // 1010 = 0101
// // 10101 = 01010

// console.log(canSplit('10101')); // true
// console.log(canSplit('011')); // true
// console.log(canSplit('001111')); // false

// ************************************************************************

// Функция separate принимает на вход строку из цифр и букв
// возвращает массив из двух элементов - в одном только буквы, в другом - только цифры

// function separate(str) {
//   const lettersString = str.replace(/\d/g, ''); // g togda ne ostanavlivajemsia na pervom vhozdeniji a idiom dalse, a bez g, togda ostanavlivajemsia na 1 vhozdeniji
//   const numberString = str.replace(/[^\d]/g, ''); // ^ vnutri kvadratnih skobok oznacajet otricanije
//   return [lettersString, numberString];
// }

// console.log(separate('a1b2')); // ['ab', '12']
// console.log(separate('12abc')); // ['abc', '12']

// ************************************************************************
// Функция countCards принимает на вход массив из элементов от 2 до 10 или
// "J", "Q", "K", "A" и возвращает сумму карт по правилам блекджека, где
// J = 11, Q = 12, K = 13, A = 1

// function countCards(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'K') {
//       arr[i] = 13;
//     }
//     if (arr[i] === 'J') {
//       arr[i] = 11;
//     }
//     if (arr[i] === 'Q') {
//       arr[i] = 12;
//     }
//     if (arr[i] === 'A') {
//       arr[i] = 1;
//     }
//   }
//   return arr.reduce((acc, value) => {
//     return acc + value;
//   }, 0);
// }

// console.log(countCards([4, 4, 'K'])); // 21
// console.log(countCards([10, 'J', 'A'])); // 22

// // 2 Solution

// function countCards2(arr) {
//   const strToNumber = {
//     J: 11,
//     Q: 12,
//     K: 13,
//     A: 1,
//   };
//   return arr.reduce((acc, value) => {
//     let n;
//     if (typeof value === 'number') {
//       n = value;
//     } else {
//       n = strToNumber[value];
//     }
//     return acc + n;
//   }, 0);
// }

// console.log(countCards2([4, 4, 'K'])); // 21
// console.log(countCards2([10, 'J', 'A'])); // 22

// *************************************************************************

// Функция canBeFriends принимает на вход два массива интересов
// Возвращает true, если массивы имеют >= 50% пересечений

// function canBeFriends(arr1, arr2) {
//   const commonInterests = arr1.filter(item => {
//     return arr2.includes(item);
//   });
//   return commonInterests.length / arr1.length > 0.5;
// }

// console.log(
//   canBeFriends(['JS', 'cats', 'netflix'], ['marvel', 'netflix', 'JS'])
// ); // true
// console.log(
//   canBeFriends(['JS', 'cats', 'netflix'], ['marvel', 'netflix', 'PHP'])
// ); // false

// ************************************************************************

// Функция countSalary принимает на вход ставку за 8-и часовой рабочий день и
// число отработанных часов. Возвращает сколько надо заплатить

// function countSalary(rate, hours) {
//   const hour1Rate = rate / 8;
//   return hour1Rate * hours;
// }

// console.log(countSalary(9, 8)); // 9
// console.log(countSalary(10, 2)); // 2.5

// ************************************************************************

// Функция check принимает на вход строку и массив разрешённых символов
// возвращает true, если строка состоит только из разрешённых символов

// function check(str, allowedChars) {
//   for (let i = 0; i < str.length; i++) {
//     if (!allowedChars.includes(str[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(check('a12', ['a', '1', '2', '3'])); //true
// console.log(check('12', ['a', '1', '2', '3'])); //true
// console.log(check('a125', ['a', '1', '2', '3'])); //false

// ***********************************************************************
// Функции sum, reduce, mult и divide принимают на вход два числа
// a и b и производят соответствующее арифметическое действие

function sum(a, b) {
  return a + b;
}
function reduce(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

console.log(sum(2, 2)); // 4
console.log(reduce(2, 2)); // 0
console.log(mult(2, 2)); // 4
console.log(divide(2, 2)); // 1

// Функция calculate принимает на вход a, b и знак операции ("+", "-", "*", "/")
// и возвращает результат этой операции

function calculate(a, b, operation) {
  const operationToFunction = {
    '+': sum,
    '-': reduce,
    '*': mult,
    '/': divide,
  };
  return operationToFunction[operation](a, b);
  // operationToFunction[operation] = sum
  // sum(a,b)
}

console.log(calculate(2, 2, '+'));

// Функция calculateExpression принимает на вход строку str, в которой записана
// одна математическая операция вида "<число 1> <знак операции> <число 2>"
// и возвращает результат этой операции

function calculateExpression(str) {
  const arr = str.split(' '); // -5, +, -2
  const a = +arr[0]; // -5
  const b = +arr[2]; // -2
  const operation = arr[1];
  return calculate(a, b, operation);
}

console.log(calculateExpression('-5 + -2')); // -7
console.log(calculateExpression('3 * -5')); // -15

// Функция calculateExpressions принимает на вход строку str вида
// "<число 1> <знак операции> <число 2> <знак операции> <число 3> ..."
// и возвращает результат этой операции без учёта математических правил

function calculateExpressions(str) {
  let arr = str.split(' '); // ['3', '+','4','*','2']  ['7','*','2'] ['14']
  while (arr.length !== 1) {
    const threeItems = arr.slice(0, 3); // polucili 3 pervih elementa,3 + i 4
    const a = +threeItems[0]; // 3
    const b = +threeItems[2]; // 4
    const operation = threeItems[1]; // +
    const result = calculate(a, b, operation); // 7
    arr = [result, ...arr.slice(3)]; // ['7', '*','2']
  }
  return arr[0];
}

console.log(calculateExpressions('3 + 4 * 2')); // 14
console.log(calculateExpressions('1 + 2 - 3 + 4')); // 4

// Функция calculateExpressions2 принимает на вход строку str вида
// "<число 1> <знак операции> <число 2> <знак операции> <число 3> ..."
// и возвращает результат этой операции с учётом математических правил

function calculateExpressions2(str) {
  let arr = str.split(' '); // ['3', '+','4','*','2']  ['3','+','8'] ['11']
  while (arr.length !== 1) {
    const indexMultOrDivide = arr.findIndex(item => {
      // 3
      return item === '*' || item === '/';
    });
    if (indexMultOrDivide !== -1) {
      const threeItems = arr.slice(
        indexMultOrDivide - 1,
        indexMultOrDivide + 2
      );
      const a = +threeItems[0]; // 4
      const b = +threeItems[2]; // 2
      const operation = threeItems[1]; // '*'
      const result = calculate(a, b, operation); // 8
      arr = [
        ...arr.slice(0, indexMultOrDivide - 1),
        result,
        ...arr.slice(indexMultOrDivide + 2),
      ];
    } else {
      const threeItems = arr.slice(0, 3);
      const a = +threeItems[0];
      const b = +threeItems[2];
      const operation = threeItems[1];
      const result = calculate(a, b, operation);
      arr = [result, ...arr.slice(3)];
    }
  }
  return arr[0];
}

console.log(calculateExpressions2('3 + 4 * 2')); // 11
console.log(calculateExpressions2('1 + 2 - 3 + 4')); // 4
