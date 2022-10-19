// Функция hasDoubleLetters принимает строку и возвращает
// true, если в строке есть удвоенный символ в любом регистре

// function hasDoubleLetters(str) {
//   for (let i = 1; i < str.length; i++) {
//     let element = str[i];
//     if (element.toLowerCase() === str[i - 1].toLowerCase()) { // cto bi sravnivat simvoli po oceredi, nado pisat str[i - 1]
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasDoubleLetters('длинношеее')); // true
// console.log(hasDoubleLetters('JavaScript')); // false
// console.log(hasDoubleLetters('Аадварк')); //true

// ***********************************************************************
// Функция multiplyEvenDigits принимает на вход массив целых чисел
// и возвращает его копию, где каждое чётное число увеличено вдвое

// function multiplyEvenDigits(arr) {
//   return arr.map(el => {
// map sam sozdajot novij massiv
//     if (el % 2 === 0) {
//       return el * 2;
//     }
//     return el;
//   });
// }

// console.log(multiplyEvenDigits([1, 2, 3])); // [1,4,3]
// console.log(multiplyEvenDigits([2, 4, 9])); // [4,8,9]

// ************************************************************************
// Число называется автоморфным, если его квадрат заканчивается этим числом
// функция isAutoMorphic принимает на вход число и возвращает true,
// если это число автоморфное

// function isAutoMorphic(n) {
//   // n = 5

//   const square = Math.pow(n, 2); // 25
//   const squaretToString = square + ''; // '25' stroka
//   const nToString = n + ''; // 5
//   return squaretToString.endsWith(nToString);
// }

// console.log(isAutoMorphic(5)); // true, 35 akancivajetsia na 5
// console.log(isAutoMorphic(8)); // false, 64 ne zakancivajetsia na 8
// console.log(isAutoMorphic(76)); // true

// ************************************************************************
// функция getTime принимает на вход два объекта вида { x: <число>, y: <число> }
// и параметр v - скорость. возвращает время, за которое можно пройти из первой
// точки во вторую

// function getTime(p1, p2, v) {
//   const s = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
//   return s / v;
// }

// console.log(getTime({ x: 0, y: 1 }, { x: 3, y: 5 }, 2));

// ***********************************************************************

// функция getCentury принимает на вход положительное число и возвращает век

// function getCentury(year) {
//   return Math.ceil(year / 100);
// }

// console.log(getCentury(1990)); // 20
// console.log(getCentury(1048)); // 11
// console.log(getCentury(5)); // 1
// console.log(getCentury(2022)); // 21

// ************************************************************************

// функция rockPaperScissors принимает на вход 2 строки вида
// "камень", "ножницы", "бумага" и возвращает -1, если первый игрок проиграл
// 0, если ничья и 1, если первый игрок выиграл

// function rockPaperScissors(player1, player2) {
//   if (player1 === player2) {
//     return 0;
//   }
//   if (player1 === 'камень' && player2 === 'ножницы') {
//     return 1;
//   }
//   if (player1 === 'камень' && player2 === 'бумага') {
//     return -1;
//   }

//   if (player1 === 'бумага' && player2 === 'камень') {
//     return 1;
//   }
//   if (player1 === 'бумага' && player2 === 'ножницы') {
//     return -1;
//   }
//   if (player1 === 'ножницы' && player2 === 'бумага') {
//     return 1;
//   }
//   if (player1 === 'ножницы' && player2 === 'камень') {
//     return -1;
//   }
// }

// console.log(rockPaperScissors('камень', 'бумага')); //-1
// console.log(rockPaperScissors('камень', 'камень')); // 0
// console.log(rockPaperScissors('ножницы', 'бумага')); // 1

// 2 solution

/*          камень     ножницы     бумага

камень  |    0           1          -1
ножницы |   -1           0           1
бумага  |    1          -1           0 


const arr = [[0,1,-1], [-1,0,1], [1,-1,0]]
return arr[player1][player2]
*/

// function rockPaperScissors2(player1, player2) {
//   // player1 = 'камень', player2 = 'бумага'
//   const obj = {
//     камень: 0,
//     ножницы: 1,
//     бумага: 2,
//   };
//   const player1ToNumber = obj[player1]; // player1ToNumber = 0
//   const player2ToNumber = obj[player2]; // player2ToNumber = 2
//   return [
//     [0, 1, -1],
//     [-1, 0, 1],
//     [1, -1, 0],
//   ][player1ToNumber][player2ToNumber];
// }

// console.log(rockPaperScissors2('камень', 'бумага')); //-1
// console.log(rockPaperScissors2('камень', 'камень')); // 0
// console.log(rockPaperScissors2('ножницы', 'бумага')); // 1

// *************************************************************************

// функция shortFormula принимает развёрнутую формулу и сокращает её
// любым образом

// function shortFormula(formula) {
//   // HOH
//   const baskets = {};

//   for (let i = 0; i < formula.length; i++) {
//     const char = formula[i]; // i = 0, char = H, baskets['H'] = 1
//     // i = 1. char = O, baskets['O'] = 1
//     // i =2, char = H, baskets['H'] = 2
//     if (baskets[char] === undefined) {
//       baskets[char] = 1;
//     } else {
//       baskets[char] = baskets[char] + 1;
//     }
//   }

//   // baskets = { 'H':2, 'O':1 }
//   // Object.entries(baskets) = [['H', 2], ['O', 1]] polucili massiv

//   return Object.entries(baskets).reduce(function (accumulator, value) {
//     // accumulator = ''(mi peredali cto on raven pustoj stroke, a value = ['H', 2])   2 vizov reduce accumulator = 'H2' value = ['O', 1]
//     const key = value[0]; // key ='H'       key = 'O'
//     const count = value[1]; // count = 2    count = 1
//     if (count === 1) {
//       return accumulator + key; //'H2'+'O' = 'H20'
//     } else {
//       return accumulator + key + count; // '' + 'H' + 2 = 'H2'
//     }
//   }, '');
// }

// console.log(shortFormula('HOH')); // 'H20 ''OH2
// console.log(shortFormula('CCHHOHHHH')); // ''C2H60

// ************************************************************************

// Торт порезали на неравные куски. Функция splitEqually принимает массив
// arr и число гостей. Возвращает массив массивов, где result[i] - какие
// куски отойдут гостю с номером i. Если поделить поровну нельзя, то
// возвращается пустой массив

// function splitEqually(arr, guestsCount) {
//   const total = arr.reduce(function (accumulator, value) {
//     return accumulator + value;
//   }, 0);

//   const perGuest = total / guestsCount;
//   const sortedArr = arr.sort((a, b) => {
//     if (a < b) {
//       return 1;
//     }
//     if (a === b) {
//       return 0;
//     }
//     if (a > b) {
//       return -1;
//     }
//   });
//   if (sortedArr[0] > perGuest) {
//     return [];
//   }
//   const baskets = [];
//   for (let i = 0; i < guestsCount; i++) {
//     baskets.push([]);
//   }
//   for (let i = 0; i < sortedArr.length; i++) {
//     const piece = sortedArr[i];
//     for (let j = 0; j < baskets.length; j++) {
//       const basketsTotal = baskets[j].reduce((accumulator, value) => {
//         return accumulator + value;
//       }, 0);
//       if (basketsTotal + piece <= perGuest) {
//         baskets[j].push(piece);
//         break;
//       }
//     }
//   }
//   for (let i = 0; i < baskets.length; i++) {
//     const basketsTotal = baskets[i].reduce((accumulator, value) => {
//       return accumulator + value;
//     }, 0);
//     if (basketsTotal !== perGuest) {
//       return [];
//     }
//   }
//   return baskets;
// }

// console.log(splitEqually([1, 2, 3], 2)); // [[1,2], [3]]
// console.log(splitEqually([5, 5, 4, 1], 3)); // [[5], [5], [4,1]]

// *************************************************************************

// функция getLonelyChar принимает на вход строку и возвращает строку
// из символов, которые встречаются в исходной только один раз без учёта регистра

// function getLonelyChar(str) {
//   const baskets = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (baskets[char] === undefined) {
//       baskets[char] = 1;
//     } else {
//       baskets[char] = baskets[char] + 1;
//     }
//   }
//   return Object.entries(baskets).reduce(function (accumulator, value) {
//     const key = value[0];
//     const count = value[1];
//     if (count === 1) {
//       return accumulator + key;
//     } else {
//       return accumulator;
//     }
//   }, '');
// }

// console.log(getLonelyChar('корова')); // 'крва'
// console.log(getLonelyChar('мама')); // ''
// console.log(getLonelyChar('JavaScript')); // 'JvScript'

// *************************************************************************

// Функция findLocalMaximum принимает на вход массив и возвращает массив локальных
// максимумов, то есть таких элементов, каждый из соседей которых меньше него.

// function findLocalMaximum(arr) {
//   // [4, 5, 2, 1, 4, 9, 7, 12]
//   const res = [];
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
//       res.push(arr[i]);
//     }
//   }
//   if (arr[0] > arr[1]) {
//     res.push(arr[0]);
//   }
//   if (arr[arr.length - 1] > arr[arr.length - 2]) {
//     res.push(arr[arr.length - 1]);
//   }

//   return res;
// }

// console.log(findLocalMaximum([4, 5, 2, 1, 4, 9, 7, 12])); // [5,9]

// // 2 solution
// function findLocalMaximum2(arr) {
//   // [-Infinity, 4, 5, 2, 1, 4, 9, 7, 12, -Infinity]
//   const extendedArr = [-Infinity, ...arr, -Infinity];
//   const res = [];
//   for (let i = 1; i < extendedArr.length - 1; i++) {
//     if (
//       extendedArr[i] > extendedArr[i + 1] &&
//       extendedArr[i] > extendedArr[i - 1]
//     ) {
//       res.push(extendedArr[i]);
//     }
//   }

//   return res;
// }

// console.log(findLocalMaximum2([4, 5, 2, 1, 4, 9, 7, 12])); // [5,9]
