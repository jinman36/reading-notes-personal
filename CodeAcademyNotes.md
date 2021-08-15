# Day 1 - 7 - Free trial period
### Date 8/14/2021

### Link
 - [Code Academy Home Page](https://www.codecademy.com/learn)

## Syllabus Outline
1. [CS101: Introduction to Programming](#CS101:_Introduction_to_Programming)
  - [Python: Hello World](#hello_world)
  - [Python: Control Flow](#control_flow)
  - [Lovely Loveseats](#lovely_loveseats)
1. [CS102: Data Structures and Algorithms](#CS102:_Data_Structures_and_Algorithms)
1. [CS103: Databases](#CS103:_Databases)
1. [CS104: Computer Architecture](#CS104:_Computer_Architecture)
1. [CS105: Discrete Math](#CS105:_Discrete_Math)

## vocabulary



# CS101: Introduction to Programming

## Hello World
- Comments - Python interprets anything after a # as a comment
- Print() function is used to tell a computer ot talk
- Strings - Blocks of text - can use either single or double quotes "shooters choice"
- Variables - python assigns variables with the ( = ) equals sign
- Errors - python recognizes 2 types of primary errors syntax errors and name errors
  - SyntaxErrors include punctuation, or misplaced commands, or missing parenthesis
  - NameErrors occur when python sees a word it does not recognize - or there is a variable that was never defined
- Numbers - numeric data types -
  - an_int is a whole number
  - a_float is a decimal
- Calculations - python uses standard calcs (+,-, *, /) it will convert math into a float before calculating division
  - a ZeroDivisionError can occur if an attempt to divide by 0 occurs
- Changing Numbers - reassigning the variable will allow the developer to change the value with out adjusting the original amount.
- Adding strings and calculations require the use of a comma to seperate, rather than concatenation
<!-- quilt_width = 8
quilt_length = 12

print(quilt_width*quilt_length)

quilt_length = 8

print("I will need", quilt_width * quilt_length ,"squares for my quilt") -->

- Exponents - to do math with exponents python will utilize the ** operator
<!-- print(6 ** 2) expected result = 36-->

- Modulo - companion to the division operator indicated with %, which will return the remainder of a division calc
<!-- print(29 % 5) expected result = 4 -->
  - useful when we want to run a command every nth-time the code is run
  - This will return 0 if there is no remainder (4 % 2)

- String Concatenation - Python supports concatenation of string together using the + operator
  - To concatenate a string with a number - str() function
  - to print the value as numeric use a comma to pass in different arguments, rather than convert the number to a string

- Plus Equals - The plus equals operator += provides a convenient way to add a value to an existing variable and assign the new value back to th same variable.
  - if the variable and the value are strings the operator performs concatenation instead of addition
  - The operation is performed in-place, meaning that any other variable which points to the variable being updated will also be updated

- Multi-line Strings - using 3 quotes tells the program that the string doesnt end until the next triple quotes (''') or (""")

### Block Letters
- Block letters are created using ASCII art - example below is my initials
<!-- first_initial = '''
JJJJJ  IIIII
  J      I
  J      I
  J      I
  J      I
J J      I
J J      I
 JJ    IIIII
'''

print(first_initial) -->

### Lovely Loveseats
- task only - string concatenation and += operator work

## Control Flow
- Python executes code from the top down, until there is nothing left to run
    - conditional statements - these are controlled gateways, that give the computer conditions, that tell the computer when it should execute certain functions

- Boolean Expressions - True false statements
- Relational Operators: Equal (==) and Not Equals (!=)
- Boolean Variables - True and false are their own special type of character called a 'bool'
  - any value that is assigned with T or F is called a boolean variable
- If statements -

<!-- # Enter a user name here, make sure to make it a string
user_name = 'Jeff'

if user_name == 'dave':
  print ("Get off my computer Dave!")

if user_name == 'angela_catlady_87':
  print ("I know it is you, Dave! Go away!") -->


- Other Relational Operators
    > greater than
    >= greater than or equal to
    < less than
    <= less than or equal to

- Boolean Operators:
  - and - combines 2 boolean expressions and evaluates if both components are true,but false otherwise
        - Oranges are a fruit *and* carrots are a vegetable. = true
  - or - combines two expressions into a larger expression that is true if either component is true
        - Oranges are a fruit or apples are a vegetable. = true
        - True or (3 + 4 == 7)    # True
          (1 - 1 == 0) or False   # True
          (2 < 0) or True         # True
          (3 == 8) or (3 > 4)     # False
  - not - When applied to any boolean expression it reverses the boolean value
        - not True == False
          not False == True
<!-- credits = 120
gpa = 1.8

if not credits >= 120:
  print("You do not have enough credits to graduate.")

if not gpa >= 2.0:
   print("Your GPA is not high enough to graduate.")

if not (credits >= 120) and not (gpa >= 2.0):
   print("You do not meet either requirement to graduate!") -->

  - Else Statements - allows us to describe what we want our code to do when certain conditions are not met
      -always appear in conjunction with if statements


