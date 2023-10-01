// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(){
    return "Yo. What's up?";
}
var greeting1 = greeting();
var greeting2 = greeting();

console.log(greeting1);
console.log(greeting2);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name){
    return `Yo, ${name}. What's up?`;
}
var greeting3 = customGreeting("Vi");
var greeting4 = customGreeting("Vander");

console.log(greeting3);
console.log(greeting4);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last){
    return "Well well well...if it isn't the great " +first +" " +middle +" " +last +".";
}
var greeting5 = greetPerson("Samantha", "Selina", "Silverstein");
var greeting6 = greetPerson("Larry", "Lucius", "Lovegood");

console.log(greeting5);
console.log(greeting6);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function squareNum(number){
    return number * number;
}

var number = 7;
var result = squareNum(number);
var result2 = `The square of ${number} is ${result}`;

console.log(result)
console.log(result2)

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(amountInStock, productType){
    if(productType === "Coffee" && amountInStock >= 4) {
        return `${productType} is stocked`
    }
    else if(productType === "Tortillas" && amountInStock <= 3) {
        return `${productType} - running LOW`
    }
    else if(productType === "Cheese" && amountInStock === 0){
        return `${productType} - OUT of stock!`
    }
    else if(productType === "Salsa" && amountInStock === 1){
        return `${product} - running LOW`
    }
}

var coffee = checkStock(4, "Coffee")
var tortillas = checkStock(3, "Tortillas")
var cheese = checkStock(0, "Cheese")
var salsa = checkStock(1, "Salsa")

console.log(coffee)
console.log(tortillas)
console.log(cheese)
console.log(salsa)

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"