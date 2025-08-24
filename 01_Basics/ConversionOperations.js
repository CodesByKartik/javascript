let score = false 
console.log(typeof score); // number

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = "true";
console.log(typeof isLoggedIn);
let booleanValue = Boolean(isLoggedIn);
console.log(typeof booleanValue);
console.log(booleanValue);

let someNumber = 123;
console.log(typeof someNumber);
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

//************************Operations************************//
let value = 30
console.log(value);

let negValue = -(value);
console.log(negValue);
 
console.log( "Addition:", 5 + 10);
console.log( "Subtraction:", 10 - 5);
console.log( "Multiplication:", 5 * 10);
console.log( "Division:", 10 / 5);
console.log( "Modulus:", 10 % 3);
console.log( "Increment:", ++value);
console.log( "Decrement:", --value);
console.log( "Exponentiation:", 2 ** 3);
console.log( "Precedence:", 2 + 3 * 5); // Multiplication has higher precedence than addition
console.log( "Precedence with Parentheses:", (2 + 3) * 5); // Parentheses alter the precedence              
console.log( "Comparison (==):", 5 == '5'); // true, because values are equal

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(1 + 2 + 3 + "4" + 5 + 6)
console.log(1 + 2 + 3 + "4" + (5 + 6))
console.log(1 + 2 + "3" + 4 + 5 + 6 + "7" + 8 + 9 + "0")
console.log("2" == 2) // false, because types are different
console.log("2" === 2) // false, because types are different

