// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: Added "return" in code to return the info, not just print it.
function askForName() { 
  return "Hello, what is your name?";
}

console.log("Hello, what is your name?")
 askForName


// EX 2: Added console.log before return in order to print results of the function
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
return sum;
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:func changed to function
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();


//  EX 4:added console.log to print result and function name to call the function. Also added numbers to test.
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;
console.log(avg)
return avg
  }

  average(1, 3)
  