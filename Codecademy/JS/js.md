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

