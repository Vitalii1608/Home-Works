"use strict";

/*
1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
*/

let num;
function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberInRange(8));

/*
2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/

let even;
function isEven(even) {
  if (even % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));

/*

3. Переписать код из конструкции if в switch

var value = +prompt('value?', '');
if (value == 0) {
  alert( 0 );
}
if (value == 1) {
  alert( 1 );
}
if (value == 2 || value == 3) {
  alert( '2,3' );
}
*/

let value = +prompt("value?", "");
switch (value) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
  default:
    console.log("нет таких значений");
}

/*
4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b

Пример вызовов: 
min(3, 5) // вернет 3
min(5, -1) // вернет -1
*/

function min(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else if (a == b) {
    return false;
  }
}
console.log(min(2, -1));
