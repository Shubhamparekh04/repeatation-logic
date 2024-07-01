// Question 1 - Print odd numbers from 1 to 15.
// let num =1;

// while (num<=15){
//     if(num%2 !== 0){
//         console.log(num);
//     }
//     num++;
// }

// 2- program to find sum of first and last digit of a number. Using while loop

// let num1 = 42345;
// console.log('Number is : ' + num1);
// let lastDigit = num1%10;

// while (num1 >= 10){
// num1 = (num1 - num1%10)/10;
// }

// console.log("first Digit : " +num1);
// console.log("Last Digit : " +lastDigit);

// console.log("sum of first & last digit is : " + (num1+lastDigit));


// 3- program to count number of digits in a number. Using while loop.

// let userNum = 80008;
// let count = 0;
// while (userNum>=1){
//     userNum = (userNum - userNum%10)/10;
//     count++;
// }

// console.log('Total number are : ' + count);


// 4- Program to Print the Fibonacci Sequence.

// let num = 200;

//   let a = 0 ;
//   let b = 1;
//   let sum = 0 ;
//   let fibo = '0 1 ';

//   while (sum <=  num){
//     sum = a + b ;
//     a = b ;
//     b = sum;
//     fibo += sum + ' '; 
//   }

//   console.log(fibo);


// 5- JavaScript Program to Find the Palindrome Number or not.

// let uNum = 121;
// let orgNum = uNum ;

// let revNum ='';

// while (uNum > 0){
//     revNum += uNum%10;
//     uNum = (uNum - uNum%10)/10
// }

// if (Number(revNum) == orgNum){
//     console.log('Num is Palindrome');
// } else {
//     console.log('Num is not Palindrome');
// }