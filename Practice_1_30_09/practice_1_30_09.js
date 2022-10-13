// ****************************NUMBERS ZADACKI************************

// функция isInteger, принимает на вход число, возвращает true,
// если число целое

// function isInteger(a) {
//   return a % 1 === 0;
// }
// console.log(isInteger(5));

// функция takePercent принимает на вход число N и percent
// возвращает заданный процент от числа N
// takePercent(5, 80) -> 4
// function takePercent(n, percent) {
//   return (n * percent) / 100;
// }
// console.log(takePercent(5, 80));

// функция sum принимает на вход целое положительное число
// N и возвращает сумму чисел от 1 до N

// function sum(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i; // result = result + i
//   }
//   return result;
// }

// console.log(sum(10));

// to ze samoje, ukorocenij
// function fastSum(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(fastSum(10));

// функция toTime принимает на вход число секунд
// возвращает время в формате "Часы:Минуты:Секунды"
// если Часы = 0, то только "Минуты:Секунды"

// function toTime(seconds) {
//   let minutes, hours;
//   minutes = Math.floor(seconds / 60);
//   hours = Math.floor(minutes / 60);
//   if (hours === 0) {
//     return `${minutes}:${seconds % 60}`; // 2:14
//   }
//   return `${hours}:${minutes % 60}:${seconds % 60}`;
// }

// console.log(toTime(45));
// console.log(toTime(134));
// console.log(toTime(4000));

// *************************MATH.POW******************************
Math.pow(3, 2); // cislo pervoje beriom i vozvodim v stepen vo vtoroje cislo
Math.pow(27, 1 / 3); // 27 ^ 1/3 -> koren kubicesskij iz 27 -> 3

// функция isPowerOfTwo принимает на вход celoje polozitelnoje число n
// возвращает true, если число является степенью двойки

// function isPowerOfTwo(n) {
//   let power = 0;
//   while (Math.pow(2, power) <= n) {
//     if (Math.pow(2, power) === n) {
//       return true;
//     }
//     power++;
//   }

//   return false;
// }

// console.log(isPowerOfTwo(4));

// функция isNatural принимает на вход целое положительное
// число n и возвращает true, если число натуральное, т.е.
// делится нацело только на само себя и 1

// function isNatural(n) {
//   // 1 < b < n
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isNatural(7));

// 9 -> false , ne naturalnoje
// 9 % 2 - > 1
// 9 % 3 -> 0

// n = 10
// i = 2
// i = 3
// i = 4
// i = 5
// i = 6
// i = 7
// i = 8
// i = 9

// функция isSquare принимает на вход целое положительное
// число n и возвращает true, если это число является
// квадратом другого целого числа

// function isSquare(n) {
//  1 < a^2 < n
//   for (let a = 1; Math.pow(a, 2) <= n; a++) {
//     if (Math.pow(a, 2) === n) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isSquare(1)); // true
// console.log(isSquare(4)); // true
// console.log(isSquare(8)); // false

// функция matchHouse принимает в себя число домиков n
// возвращает число спичек, которые нужны для того, чтобы
// построить эти домики

// function matchHouse(n) {
//   return 6 + 5 * (n - 1);
//   // n = 2domika => 6 + 5 * (2-1) => 6 + 5 * 1 => 6 + 5
//   // n = 1 domik => 6 + 5 * (1-1) => 6 + 5 * 0 => 6
// }
// console.log(matchHouse(2));

// 1 domik = 6 spicek
// 2 domika = 10 spicek

// функция getHypotenuse принимает длины катетов a и b
// и возвращает гипотенузу (корень из a ^ 2 + b ^ 2)

// function getHypotenuse(a, b) {
//   return Math.pow(a * a + b * b, 1 / 2);
// }
// console.log(getHypotenuse(2, 3));

// *****************************MATH.ABS******************************
Math.abs(10); // 10
Math.abs(0); // 0
Math.abs(-9); // 9  verniot polozitelnoje cislo

// функция isNearest принимает 2 числа a и b и возвращает
// то из них, которое ближе к 100

// function isNearest(a, b) {
//   // rasstojanije mezdu 7 i 5 = 2 (7-5)=2 (5-7)=-2
//   const aDistane = Math.abs(100 - a);
//   const bDistance = Math.abs(100 - b);
//   if (aDistane < bDistance) {
//     return a;
//   }
//   return b;
// }

// console.log(isNearest(2, 20)); // 20
// console.log(isNearest(102, 120)); // 102
// console.log(isNearest(20, 101)); // 101

// функция nearestFive принимает на вход положительное целое
// число n и возвращает ближайшее к нему кратное 5

// function nearestFive(n) {
//   const reminder = n % 5;
//   if (reminder === 0) {
//     return n;
//   }
//   if (reminder < 3) {
//     return n - reminder;
//   }
//   return n - reminder + 5;
// }

// 140 -> 140
// 141 -> 140 (reminder = 1)
// 142 -> 140 (reminder = 2)
// 143 -> 145 (reminder = 3)
// 144 -> 145 (reminder = 4)
// 145 -> 145 (reminder = 0)

// console.log(nearestFive(15)); // 15
// console.log(nearestFive(149)); // 150
// console.log(nearestFive(141)); // 140

// *****************************MATH.RANDOM*****************************

Math.random(); // sluciajnoje cislo v diapozone ot 0 do 1

// функция throwDice возвращает случайный бросок
// кубика (число от 1 до 6)

// function throwDice() {
//   const x = Math.random();
//   return Math.ceil(6 * x);
// }
// console.log(throwDice());

//  0 < x < 1
//  0 < 6 * x < 6
//  1 <= .... <= 6
//  1 <= Math.ceil(6 * x) <= 6

// функция randomNum возвращает случайное число в диапозоне
// от 5 до 16 включительно

// function randomNum() {
//   const x = Math.random();
//   return 4 + Math.ceil(11 * x);
// }
// 0 < x < 1
// 1 <= Math.ceil(12 * x) <= 12
// 5 <= 4 + Math.ceil(12 * x) <=16

// ************************STRINGS ZADACKI****************************

// const str = 'Hello world!';
// str[2]; // 'l

// функция revertString принимает строку str и разворачивает
// её задом наперёд

// function reverseString(str) {
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i]; // result = result + str[i]
//   }
//   return result;
// }

// console.log(reverseString('abcd'));

// 'abcd'  => 'dcba'

// функция isPalindrome принимает строку str и возвращает
// true, если эта строка - палиндром
// tut resili so staroj fukncijej
// function isPalindrome(str) {
//   const reversedString = reverseString(str);
//   return reversedString === str;
// }

// console.log(isPalindrome('шалаш'));

// 2 variant resenija
// function fastIsPalindrom(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[0] !== str.length - 1 - i) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome('шалаш'));
// console.log(isPalindrome('шалаша'));

// 'шалаш' naprimer, te stroki kotorije citajutsia naoborot tak ze = polindrom
// str[0] === str[str.length - 1]  pervij element raven poslednemu
// str[1] === str[str.length - 2] i tak dalee
// str[2] === str[str.length - 3]

// функция isBalanced принимает строку str и возвращает
// true, если в строке одинаковое число букв "а" и "о"

// function isBalanced(str) {
//   let aCount = 0;
//   let oCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a') {
//       aCount++;
//     }
//     if (str[i] === 'o') {
//       oCount++;
//     }
//   }
//   return aCount === oCount;
// }
// console.log(isBalanced('мама'));

// функция howManyCats принимает на вход строку str и возвращает
// сколько раз в этой строке встречается буквосочетание "cat"

// function howManyCats(str) {
//   let count = 0;
//   while (str.includes('cat')) {
//     const index = str.indexOf('cat');
//     count++;
//     str = str.slice(index + 'cat'.length);
//   }
//   return count;
// }

// console.log(howManyCats('More than a cat I love only another cat!'));
// console.log(howManyCats('cat'));

// const str = 'More than a cat I love only another cat!'
// str.indexOf('cat') // cat(tolko odnogo) nacalo s 12 indexa
// count ++
// str = str.slice(12 + 'cat'.length) // 'I love onli another cat!

// функция getExtension принимает строку fileName
// и возвращает расширение файла. Если расширения нет, то вернуть
// пустую строку

// function getExtension(fileName) {
//   const array = fileName.split('.'); // ['document', 'txt']
//   if (array.length === 1) {
//     return '';
//   }
//   return array[array.length - 1];
// }

// console.log(getExtension('document.txt')); // txt
// console.log(getExtension('picture.png')); // png
// console.log(getExtension('my.very.important.file.exe')); // exe
// console.log(getExtension('file')); // ''

// функция doubleLetters принимает строку str и дублирует все
// символы в ней. если символ уже продублирован, то повторно
// дублировать не надо. Пробелы не дублируются.

// function doubleLetters(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const hasSameSibling = str[i] === str[i + 1] || str[i] === str[i - 1];
//     if (str[i] === ' ' || hasSameSibling) {
//       result += str[i];
//     } else {
//       result += str[i] + str[i];
//     }
//   }
//   return result;
// }

// 'Hello world!'
// result = 'HH' str[i] = 'H'
// result = 'HHee' str[i] = 'e'
// result = 'HHeell' str[i] = 'l'
// result = 'HHeellll' str[i] = 'l'

// console.log(doubleLetters('Hello world!')); // HHeelloo wwoorrlldd!!
// console.log(doubleLetters('aaab')); // 'aaabb'
