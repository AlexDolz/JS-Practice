// Функция displayDays принимает на вход число N и возвращает строку "N" + "день" согласованную по правилам русского языка
// примеры: 1 день, 33 дня, 15 дней

// function displayDays(n) {
//   const n100Mod = n % 100;
//   if (n100Mod < 20 && n100Mod > 10) {
//     return `${n} дней`;
//   }
//   const n10Mod = n % 10;
//   if (n10Mod === 0 || n10Mod > 4) {
//     return `${n} дней`;
//   }
//   if (n10Mod === 1) {
//     return `${n} день`;
//   }
//   return `${n} дня`;
// }

// console.log(displayDays(3));
// console.log(displayDays(101));
// console.log(displayDays(13));
// console.log(displayDays(10));

// 1 день
// 2 дня
// 3 дня
// 4 дня
// 5 дней
// 21 день
// 22 дня
// 23 дня
// 24 дня
// 25 дней
// 31 день
// ...
// 100 дней
// 101 день
// 1001 день
//  *********************************************
// Функция capitalize принимает на вход строку str и возвращает
// её, где каждое слово начинается с большой буквы
// пример: "мама мыла раму" -> "Мама Мыла Раму"

// const capitalize = str => {
//   const array = str.split(' ');
//   for (let i = 0; i < array.length; i++) {
//     const word = array[i];
//     if (word.length === 0) {
// esli word = '' pustaja stroka, togda ne delajem vsio cto nize i idiom na sledusiaju iteraciju, eto iz za slova continue
//       continue;
//     }
//     const letters = word.split('');
//     letters[0] = letters[0].toUpperCase();
//     array[i] = letters.join('');
//   }
//   return array.join(' ');
// };

// console.log(capitalize('мама мыла раму'));
// console.log(capitalize('мама  мыла  раму'));
// ******************************************************

// Функция isFullName принимает строку str и возвращает true
// если строка является именем и фамилией
// примеры: Иван Иванов, Петр Петров, Козьма Петров-Водкин

// function isFullName(str) {
//   const re =
//     /^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё]{0,}\s{1,}([A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё\-]{0,}(\s|$){1,}){1,}$/g;

//   return re.test(str);
// }

// console.log(isFullName('Иван Иванов'));
// console.log(isFullName('Петр Петров'));
// console.log(isFullName('Козьма Петров-Водкин'));
// console.log(isFullName('Габриел Гарсия Маркес'));
// console.log(isFullName('Иван Иванов варвапрвапоап'));

// console.log('a'.charCodeAt(0)); // anglijskaja a 97
// console.log('а'.charCodeAt(0)); // russkaja a, v aski kode budut raznije cifri 1072
// console.log('abc'.charCodeAt(2));

// **********************************************************

// Функция isCardNumber принимает на вход строку str
// возвращает true, если это валидный номер карты
// в формате хххх-хххх-хххх-хххх

// const isCardNumber = str => {
//   const re = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/g;
//   // d eto liubaja cifra ot 0 do 9
//   return re.test(str);
// };

// console.log(isCardNumber('1234-1234-1234-1234')); // true
// console.log(isCardNumber('+7923534563465346')); // false

// ***********************************************************

// Функция toCamelCase принимает на вход строку str и возвращает
// её же записанную в camelCase
//    пример: "three apples" -> "threeApples"
//            "TO CAMEL CASE" -> "toCamelCase"

// const toCamelCase = str => {
//   const arr = str.split(' ').filter(s => s.length !== 0);
//   for (let i = 0; i < arr.length; i++) {
//     const word = i === 0 ? arr[i] : arr[i].toLowerCase;
//     const letters = word.split('');
//     if (i === 0) {
//       letters[0] = letters[0].toLowerCase();
//     } else {
//       letters[0] = letters[0].toUpperCase();
//     }
//     arr[i] = letters.join('');
//   }
//   return arr.join('');
// };

// console.log(toCamelCase('three apples')); // threeApples
// console.log(toCamelCase('to  camel CASE')); // toCamelCase
// console.log(toCamelCase('fourPeaches')); // fourPeaches

// **************************************************************

// Функция displayDate принимает на вход дату и шаблон
// возвращает строку, представляющую эту дату в нужном
// отображении

// const displayDate = (d, template) => {
//   const year = d.getFullYear();
//   let month = d.getMonth() + 1;
//   let date = d.getDate();
//   if (month < 10) {
//     month = '0' + month;
//   }
//   if (date < 10) {
//     date = '0' + date;
//   }
//   return template
//     .replace(/yyyy/g, year)
//     .replace(/mm/g, month)
//     .replace(/dd/g, date);
// };

// console.log(displayDate(new Date(), 'dd/mm/yyyy')); // 07/10/2022
// console.log(displayDate(new Date(), 'yyyy mm dd')); // 2022 10 07
// console.log(displayDate(new Date(), 'dd.mm')); // 07.10
// console.log(displayDate(new Date(), 'сегодня dd')); // сегодня 07
// console.log(displayDate(new Date(), 'yyyy yyyy yyyy')); // 2022 2022 2022

// *****************************************************************

// Функция nearestLeapYear возвращает ближайший к текущему моменту
// високосный год, kotorij delitsia na 4

// const nearestLeapYear = () => {
//   const currentYear = new Date().getFullYear(); // polucili tekusij god
//   const reminder = currentYear % 4; //visokosnij god delitsia na 4
//   if (reminder === 0) {
//     return currentYear;
//   }
//   if (reminder === 1) {
//     return currentYear - 1;
//   }
//   if (reminder === 3) {
//     return currentYear + 1;
//   }

//   const previous = currentYear - 2;
//   const previousDate = new Date(previous);
//   const next = currentYear + 2;
//   const nextDate = new Date(next);
//   const before = new Date() - previousDate;
//   const after = nextDate - new Date();
//   if (before < after) {
//     return previous;
//   } else {
//     return next;
//   }

//   2 variant, no lucse kak sverhu
//   const currentMonth = new Date().getMonth();
//   if (currentMonth < 5) {
//     return currentYear - 2;
//   }
//   if (currentMonth > 5) {
//     return currentYear + 2;
//   }
//   const currentDate = new Date().getDate();
//   if (currentDate < 27) {
//     return currentYear - 2;
//   }
//   if (currentDate >= 27) {
//     return currentYear + 2;
//   }
// };

// reminder = 0,1,2,3
// reminder = 0 => return currentYear  -0
// reminder = 1 => return currentYear  -1
// reminder = 2 =>
// смотрим на месяц
// смотрим на день
// reminder = 3 => return currentYear  +1

// console.log(nearestLeapYear());

// ************************DOMASKA ZADACKI**********************************

// ДЗ Функция cut принимает на вход строку, режет её посередине
// и возвращает первую половину. Если в строке нечётное число
// символов, то округлить в меньшую сторону

// ДЗ Функция kingSaid принимает на вход строку str и добавляет к
// её началу фразу "Король сказал: ". Если строка уже начинается
// с фразы "Король сказал: ", то ничего добавлять не надо.
// пример: kingSaid("хочу банан") -> "Король сказал: хочу банан"
//         kingSaid("Король сказал: я устал, я ухожу") -> "Король сказал: я устал, я ухожу"

// ДЗ Функция isItFridayToday возвращает строку "Пятница будет
// через N дней", "Пятница уже завтра!", "Ура, сегодня пятница!"
// или "Пятница была вчера :(" в зависимости от текущего дня недели
// **************************************************************

// функция howManyCats принимает на вход строку str и возвращает
// сколько раз в этой строке встречается буквосочетание "cat"
function howManyCats(str) {
  return str.match(/cat/g).length;
}

console.log(howManyCats('catcat'));
