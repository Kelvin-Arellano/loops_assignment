// ## Problem One 
// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
// let num = 10
// while (num >=1) {
//     console.log(num)
//     num--
// }
// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
// for (let i = 10; i >=1; i--){
//     console.log(i)
// }

// ## Problem Two
// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
// let max = 100
// let num = 0
// while (num <= max){
//     if (num % 2 === 0){
//         console.log(num + " is even.")
//     }else {
//         console.log(num + " is odd")
//     }
//     num++
//}
// b. Use a `for` loop instead
// let num = 0
// for (let i = 100; i >= 0; i--){
//     if(num % 2 === 0){
//         console.log(num + " is an even number")
     
//     }else{
//         console.log(num + " is an odd number")
//     }
//     num++
// }

// ## Problem Three

// a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 
// let x = 100
// let num = 0
// while(num <= x){
//     console.log(num + " * 9 = " + num * 9)
//     num++
// }

// b. Use a `for` loop instead.
// let num = 0
// for (let x =100; x>=0; x--){
//     console.log(num + " * 9 = " + num * 9)
// num++
// }
// Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").


// ## Problem Four

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
// let num = 1
// while (num<100){
//         if(num % 5 === 0 && num % 2 !== 0) {
//             console.log(num)
//         }
//         num++
// }

// ## Problem Five

// Without running/executing your code, how many times will the loop below run? Explain why.

// let i = 5;

// while (i > 3) {
//     i += 1
// }

// // Your explanation here
//It's an infinite loop since while statement will always be true with the 
// increment and variable choosen

// ## Problem Six

// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
// for(let i = 1; i<= 100; i++){
//     if( i % 3 === 0){
//         console.log("fizz")
//     }else if( i % 5 === 0){
//         console.log("buzz")
//     }else {
//         console.log(i)
//     }
// }


// ## Problem Seven

// Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

// for(let i = 1; i<= 100; i++){
//     if (i % 3 ===0 && i % 5 === 0) {
//         console.log("fizzbuzz")
//     }else if( i % 5 === 0){
//         console.log("buzz")
//     }else if( i % 3 === 0){
//         console.log("fizz")
//     }else {
//         console.log(i)
//     }
// }

// ## Problem Eight

// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:
//   2 bottles of beer on the wall, 2 bottles of beer.
//   Take one down, pass it around, 1 bottle of beer on the wall.

//   In the last line, the word bottles (plural), is  replaced with bottle (singular)
//   When the number of bottles is 1, the verse is:
//   1 bottle of beer on the wall, 1 bottle of beer.
//   Take one down, pass it around, No more bottle of beer on the wall.

// let decreasedBeer = 0;
// for(let i = 100; i > 0; i -= 1) {
//     decreasedBeer = i - 1;
//     if(i > 2) {
//         console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
//         console.log("Take one down, pass it around, " + decreasedBeer + " bottles of beer on the wall.")
//     } else if (i === 2) {
//         console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
//         console.log("Take one down, pass it around, " + decreasedBeer + " bottle of beer on the wall.")
//     } else if (i === 1) {
//         console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
//         console.log("Take one down, pass it around, No more bottle of beer on the wall.")
//     }
// }
// ## Problem Nine

// Given an integer N draw a square of N x N asterisks. Look at the examples.

//   Hint 1 
//   Try printing/logging a single line of * first.

//   Hint 2
//   You will need 2 loops for this.
// size = 3
// for (let i = 1; i < size; i+=1){
//     console.log(size)
// }

// ## Problem Ten

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
// let sumOfMultiples = 0;
// for(let i = 0; i < 1000; i += 1) {
//     if(i % 3 === 0 || i % 5 === 0) {
//         sumOfMultiples += i;
//         console.log(sumOfMultiples);
//     }
// }
// console.log("sum 1 is " + sumOfMultiples);
