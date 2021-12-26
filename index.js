// // Task 1
const Sum = (a, b) => {
  if (a + b > 10) {
    console.log("True");
  } else {
    console.log("False");
  }
};
// Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть функция вернет true, а если нет - false

Sum(1, 5);

// Task 2
const CheckNmbr = (c) => {
  if (c < 0) {
    console.log("True");
  } else {
    console.log("False");
  }
};
CheckNmbr(-5);
// Сделайте функцию, которая параметром принимает число и
// проверяет - отрицательное оно или нет

// Task 3
let str = "const_text_hello";
const StringText = (_txt) => {
  let result0 = _txt.substr(0, 5);
  let result1 = _txt[6].toUpperCase() + _txt.substr(-9, 3);
  let result2 = _txt[11].toUpperCase() + _txt.substr(-4);
  let result = result0 + result1 + result2;
  return result;
};
console.log(StringText(str));

// Task 4
// const inArray = (text, array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == text) {
//       console.log("True");
//     } else {
//       console.log("False");
//     }
//   }
// };
// inArray("hello", ["world", "hello", "45"]);
// Функция, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором
//  делается поиск. Функция должна возвращать true или false.

// Task 5
const arrayFill = (letter, number) => {
  let arr0 = [];
  for (let k = 0; k < number; k++) {
    arr0.push(letter);
  }
  return arr0;
};
let arr = arrayFill("x", 5);
console.log(arr);
//  Функция, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение,
// которым будет заполнять массив, а вторым - сколько элементов должно быть в массиве

// Task 6
let daysMass = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const DaysFunction = (dayArr) => {
  for (let m = 0; m < dayArr.length; m++) {
    if (dayArr[m] == "Воскресенье") {
      console.log(dayArr[m].italics());
    } else {
      console.log(dayArr[m]);
    }
  }
};
DaysFunction(daysMass);
// Функция которая принимает массив дней недели.
// С помощью цикла for выведите все дни недели, а текущий день выведите курсивом

// Task 7
const NumbersFunction = (num) => {
  let iter = 0;
  for (; num >= 50; iter++) {
    num /= 2;
  }
  return iter;
};
let NumArr = NumbersFunction(1700);
console.log(NumArr);
// Функцию которая принимает любое число num (num больше 1000).
// Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Функция должна возвращать количество итераций
