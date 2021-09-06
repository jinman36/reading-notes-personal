### Link

- [Code Academy Home Page](https://www.codecademy.com/learn);

## Data Types in java Script

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- Object

## Truthy and Falsey Statements

- short circuit evaluations

  - if we use a or (||) statement witch referes to a falsey variable first, witha  default value, this will create a short circuit evaluation, which looks like th efollwoing:
  
  falseyVar = '0'

  let shortCircuitEval = falseyVar || 'default value'

- Ternary Operators
- short hand way to write an if..else statement in js

- Traditional if--else statement

<!-- let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
} -->

- ternary operator with the same functionality
<!-- isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!'); -->

- Switch statements
  - simpler format for writing out an if statement looking for the specific item in a variable,a s opposed to looking for the variable in the if...else statement

  - switch statement example

<!-- let athleteFinalPosition = 'second place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
} -->

## Functions

- Default parameters for arguments
- example:

 <!--
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!  -->

- Another Example

<!--
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList('liquor', 'beer', 'hookers'); -->

- Helper functions
  - When we use the return value of a function inside another function.
    - Since each function is carrying our a specific task, it makes our code easier to read and debug if necessary
  
- Function Expressions
  - another way to define a function is to use a function expression. TO define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted.
  - A function with no name is called an anonymous function
  - a function expression is often stored in a variable in order to refer to it

- Arrow Functions
- ES6 introduced arrow functions syntax -Arrow functions remove the need to type our the keyword function every time you need to create a function - you first include the parameters inside th  () and then add an arrow => that points to the function body surrounded in {} like the following:

<!-- 
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
 -->

- Concise Body Arrow Functions
  - JS also provides several ways to refactor arrow function syntax.
    - Concise body is the most condensed
- functions that take only a single parameter do not need that parameter in parenthesis - if a function takes zero or multiple parameters - () are required
  - zero parameters
    - const functionName = () => {};
  - One Parameter
    - const functionName = paramOne => {};
  - Two or more parameters
    - const functionName = (paramOne, paramTwo, paramEtc) => {};
- Function body composed of a single line blocl does not need curly braces. Without the  curly braces, whatever that line evaluates will be automatically returned. the contents of the block should immediately follow th earrow -> and the return keyword can be removed. this is referred to as implicit return
  - Single line block -
    - const sumNumber = number => number + number;
  - Multi line block
    - const sumNumbers = number => {
      const sum = number + number;
      return sum;
    };
