//Задание 2.
//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
let check = true;
function simpleNumber(number) {
 if (number > 1 && number < 1001){
  for (let i = 2; i < number; i++){
    if (number % i === 0){
      check = false;
      break;
    }
  }
   if (check === true){
     console.log(`${number} - простое число`);
   }else{
     console.log(`${number} - составное число`);
   }
 }else if (number === 0){
   console.log(`${number} - целое число`);
 }else if (number === 1){
   console.log(`${number} - целое, натуральное число`);
 }else{
   console.log('Данные неверны');  
  }
}
simpleNumber(2);