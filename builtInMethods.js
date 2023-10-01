// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes method is called on the string "Hello World".
// The method includes the arguement "Hello", and checks if the string includes "Hello"
// The return value is "True"
"Hello World".includes("Hello");

// The endsWith method is called on the string "Hello World"
// The method includes the arguement "Hello", which checks if the string ends with "Hello"
// The return value is "False"
"Hello World".endsWith("Hello");

// The endsWith method is called on the string "Hello World"
// The method includes the arguement "rld", which checks if the string ends with "rld" 
// The return value is "True"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The charAt method is called on the tastyFood variable, which stores the string "Pasta"
// The charAt method returns what ever character is at that index position in the variable - in this case P
// The console.log() statement prints the return value of the charAt() method (P) to the console
var tastyFood = "Pasta";
console.log(tastyFood.charAt(0));

// The includes method is called on the brightColor variable, which stores the string "Yellow"
// The includes method returns true if the data in the brightColor variable includes the arguement "Yell"
// The console.log() statement prints the return value of "true" for the includes() method to the console
var brightColor = "Yellow";
console.log(brightColor.includes("Yell"));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The length method is called on the seaCreatures variable, which stores the array including "Shark", "Whale", "Fish", and "Crab"
// The length method returns the number of elements in the seaCreatures array, which is 4
// the console.log statement prints the return value of "4" for the length method to the console

var seaCreatures = ["Shark", "Whale", "Fish", "Crab"];
console.log(seaCreatures.length);

// The join method is called on the upcomingEncounters variable, which stores the array incuding "Lions", " Tigers", " and Bears"
// The join method returns a comma seperated list of the elements in the upcomingEncounters array
// The console.log statement prints the return value of "Lions, Tigers, and Bears" with the addition of ", Oh My!" at the end.
var upcomingEncounters = ["Lions", " Tigers", " and Bears"];
console.log(upcomingEncounters.join()+ ', Oh My!');
