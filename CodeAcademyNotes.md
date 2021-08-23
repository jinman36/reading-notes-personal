# Day 1 - 7 - Free trial period
### Date 8/14/2021

### Link
 - [Code Academy Home Page](https://www.codecademy.com/learn)

## Syllabus Outline
1. [CS101: Introduction to Programming](#CS101:_Introduction_to_Programming)
  - [Python: Hello World](#hello_world)
  - [Python: Control Flow](#control_flow)
  - [Navigating the File System](#Navigating_the_File_System)
  - [Python: Lists](#lists)
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
  - Else if statements - elif statements check another condition after the previous if statements conditions arent met
      - this allows for continuous checks after the initial if statement
      - When it finds a true statement it executes the code within that section - no further statements will be evaluated - if no true statements exist it executes the else statement
  
### Magic 8-Ball
  - generate random number in python
      <!-- - random_number = random.randint(1,9) -->
- code for the magic 8-ball logic

<!-- import random

# set up variables
name = 'jeff'
question = 'will today be a great day?'
answer = ''
random_number = random.randint(1,10)
if name == '':
  print ('Question: ', question)

# print(random_number)

# control flow - core logic
if random_number == 1:
  answer = 'Yes - definitely.'
elif random_number == 2:
  answer = 'It is decidedly so.'
elif random_number == 3:
  answer = 'Without a doubt.'
elif random_number == 4:
  answer = 'Reply hazy, try again.'
elif random_number == 5:
  answer = 'Ask again later.'
elif random_number == 6:
  answer = 'Better not tell you now.'
elif random_number == 7:
  answer = 'My sources say no.'
elif random_number == 8:
  answer = 'Outlook not so good.'
elif random_number == 9:
  answer = 'Very doubtful.'
else:
  #purposely added an error state by including the number 10
  answer = 'Error'




print(name, 'asks:', question)
print("Magic 8-ball's answer:", answer) -->


### Sal's Shipping
 - Ground, Premium, and Drone shipping rates applied and MVP achieved
<!-- weight = 41.5
drone_shipping_weight = 41.5
ground_flat_charge = 20.00
premium_ground_charge = 125.00

# Ground shipping
if weight <=2:
  cost_ground = weight*1.50
elif weight <=6:
  cost_ground = weight*3.00
elif weight <=10:
  cost_ground = weight*4.00
else:
  cost_ground = weight*4.75

# Drone Shipping
if drone_shipping_weight <=2:
  cost_drone = drone_shipping_weight*4.50
elif drone_shipping_weight <=6:
  cost_drone = drone_shipping_weight*9.00
elif drone_shipping_weight <=10:
  cost_drone = drone_shipping_weight*12.00
else:
  cost_drone = drone_shipping_weight*14.25



print('Ground Shipping General: $', cost_ground + ground_flat_charge)
print('Ground Shipping Premium: $', premium_ground_charge)
print('Drone Shipping Cost: $', cost_drone) -->

### Errors in Python
- Syntax errors - means there is something wrong with the way your program is written
  - punctuation
  - command where its not expected
  - missing or mismatched parenthesis

  - common Syntax errors
    - misspelled a python word
    - missing colon
    - missing closing parenthesis, square bracket, or curly brace
- Name Errors - when python detects a variable that is unknown
  - common Name errors
    - missing a variable name
    - not defining a variable
    - misspelling variable names
- Type Errors - reported by the Python interpreter when an operation is applied to a variable of an inappropriate type
  - piggy_bank = '2' + 2.25 # type error because one is a string and the other a number
  
  - Common Type errors
    - Accidentally adding or subtracting a string value
    - Call a function on something of the incorrect type
- Logic errors - Errors found by the programmer when the program isn’t doing what it is intending to do.

## Navigating the File System
- BASH - Born again Shell
- The command line is a text interface for yyour computer - its a program that takes commands and passes them to the computers operating system to run.

- Filesystem - organizes a computers files and directories into a tree structure
  - the first directory is the root directory
  - each parent dir can contain more child dir and files

@ bicycle world exercise
 - series of commands using th e command line
    - pwd
    - cd
    - mkdir
    - cd .. and cd ../..
    - touch

## Python: List
- a list is a built in data structure that allows us to work with a collection of data in sequential order
<!-- heights = [61, 70, 67, 64, 65] -->
- list can hold any data type in python
<!-- sam_height_and_testscore = ['Sam', 67, 85.5, True]  -->

### Growing a list: Plus (+)
  - using a + will allow you to concatenate a list by either adding items to the end of the list or by combining lists through their variables

### Accessing list Elements
 - Python lists are zero-indexed
 - using the print(variable_name[]) function it has to be an int, using a float will cause an error
 - this causes issues if you attempt a divide function inside a  function - you must force it to use an int by doing the following
    <!-- - print(variable_name[int(4/2)])  - which will print out the int (2) -->

### Accessing list elements: Negative Index
  - We can use the -1 to select the last item of a list, even when we do not know how many elements are in a list

### Modifying list elements
  - to modify an element in a list use identify the list element and change the value
<!-- garden_waitlist = ["Jiho", "Adam", "Sonny", "Alisha"]

garden_waitlist[1] = "Calla"
garden_waitlist[-1] = "Alex"


print(garden_waitlist) -->

### Shrinking a list: Remove
- We can remove elements ina list using the .remove() python method
  - Cannot remove by using a (-) or an object that isn;t in the list
<!-- new_store_order_list = ["Orange", "Apple", "Mango", "Broccoli", "Mango"]

new_store_order_list.remove("Mango") -->

### Two-Dimensional (2D) Lists
  - Lists that contain other lists are refered to as 2-dimensional lists
  <!-- ages = [["Aaron", 15], ["Dhruti", 16]]-->

  - Accessing 2D lists
  - Each sub group is also zero indexed with a zero index nested inside of that list
    - To pull the information you need to make a variable for each index point
    <!-- dhurtis_score = class_name_test[1][1] --> printing dhurtis_score will result in '16'
  - This can also use negative indices

  - Modifying 2d lists
  - To change a value in a two dimensional list, reassign the value using the specific index
  <!-- ages[0][1] = 16 --> this will change aarons age to 16 in the above example

- positive and negative indices work with these modifications
<!-- incoming_class = [["Kenny",	"American",	9], ["Tanya",	"Russian",	9], ["Madison",	"Indian",	7]]

incoming_class[2][2] = 8
incoming_class[-3][-3] = "Ken" -->

- Review of example code
<!-- first_names = ["Ainsley", "Ben", "Chani", "Depak"]
preferred_size = ["Small", "Large", "Medium"]
customer_data = [["Ainsley",	"Small",	True], ["Ben",	"Large",	False], ["Chani",	"Medium",	True], ["Depak",	"Medium",	False]]
new_customers = [["Amit", "Large", True], ["Karim", "X-Large", False]]

preferred_size.append("Medium")
customer_data[-2][-1] = False
customer_data[1].remove(False)
customer_data_final = customer_data + new_customers

print(first_names)
print(preferred_size)
print(customer_data)
print(customer_data_final) -->

### Working with lists in Python
- .count() - list method to count the number of occurences of an element in a list
- .insert() - A list method to insert an element into a specific index of a list
- .pop() - A list method to remove an element from a specific index or from the end of a list
- range() - A built-in Python function to create a sequence of integers
- len() - a built in Python function to get the length of a list
- .sort() / sorted() - a method and a built in function to sort a list

### Adding by text: insert
- .insert() - takes in two inputs:
  - the index you want to inser into
  - the element you want to insert at the specified index

  <!-- front_display_list.insert(0, "Pineapple") -->

- Removing by Index: Pop
- .pop() method takes an optional single input
  - the index for the element you want to come out

- Consecutive Lists: Range
- range() - can take a single input and generate numbers starting at 0 and ending at the number before the input
  - if printed 'as is' it will print the range - must use the list() built in function to produce a list of integers
  <!-- print(list(range_variable)) -->

<!-- range_five_three = range(5, 15, 3)
range_diff_five = range(0, 40, 5)

print(list(range_five_three))
print(list(range_diff_five)) -->

- Length - a built in function to get the length of a list
<!-- my_list = [1, 2, 3, 4, 5]
 
print(len(my_list)) -->

- Slicing Lists 1
<!-- suitcase = ["shirt", "shirt", "pants", "pants", "pajamas", "books"]

beginning = suitcase[0:2]
middle = suitcase[2:4]

# Your code below: 


print(beginning)
print(middle)

output 
['shirt', 'shirt']
['pants', 'pants'] -->

- Slicing lists 2
<!-- Use the following techniques to slice parts off of a list in different ways

suitcase = ["shirt", "shirt", "pants", "pants", "pajamas", "books"]

# Your code below: 

last_two_elements = suitcase[-2:]
slice_off_last_three = suitcase[:-3]

print(last_two_elements)
print(slice_off_last_three)

output
['pajamas', 'books']
['shirt', 'shirt', 'pants'] -->

- Counting in a list
<!-- jake_votes = votes.count('Jake') -->]

- Sorting List 1
- The sort command does not produce any value so assigning it to a variable will produce an output = "none"
  - variable_name.sort() - will sort in alphabetical order
  - variable_name.sort(reverse=True) - will sort in reverse alphabetical

Sorting Lists 2
- a 2nd way of sorting lists is to use the function sorted()
  - it will become before a list, instead of after as all built in functions do
  - it generates a new list rather than modifying the one that already exists

- sorted can be used and assigned to a variable - the original list stays in tact


### Lens Pizza Review Project
- interesting exercize on all the list elements

## Learn Python: Tuples video
- What are tuples
- creating tuples
- tuples vs lists

- Tuple is a data structure inside Python - very similar to a list only it is immutable (cannot be changed after creation)
- Creating a one element tuple - must have a trailing comma behind a one element tuple

- Allot of times people store data that is not similar into a tuple - descriptions of info, or things like that

- a list will be created for data that is similar, and that can be changed (order, etc...)


## COmbining lists using the Zip function
- Zip() - able to incorporate two lists into the same data string

- 2 lists
<!-- names = ["Jenny", "Alexus", "Sam", "Grace"]
heights = [61, 70, 67, 65] -->

- zip together
<!-- names_and_heights = zip(names, heights) -->

<!-- print(names_and_heights) - 
output - <zip object at 0x7f1631e86b48> -->

- need to assign a variable
<!-- converted_list = list(names_and_heights)
print(converted_list) -->

- Output after listed
<!-- [('Jenny', 61), ('Alexus', 70), ('Sam', 67), ('Grace', 65)] -->

## Loops
  - What are loops?
The basic makeup of a loop
1. An initiation - were ready to start the process
2. A repetition - we are performing the process
3. An end condition - we ae complete and ready to stop

Python uses 2 types of iteration
1. indefinite iteration - where the number of times the loop is executed depends on how many times a condition is met
2. Definite iteration - where the number f times the loop will be executed is defined in advance (usually based on collection size)


### For loop - Introduction
- For loop - a type of definite iteration We will know before we start how many times we need the loop to go through the cycle because it is meant to work with a predefined length - like a list or similar collection of elements

<!-- for <temporary variable> in <collection>:
  <action> -->

- 'for loop' in Python can be written on one line - but this may impact readability later and make a harder situation for debugging

<!-- for <temporary variable> in <collection>: <action> -->

- 'For Loops' Using range - to create arbitrary collections of any length, we can pair our for loops with a built in function 'range()'

<!-- promise = "I will finish the python loops module!"

for temp in range(5):
  print(promise) -->

- While Loops - Introduction
  - "while" loops - indefinite iteration - a while loop performs a set of instructions as long as a given condition is true
      - Can also be written as one line - similar to for loops

  structure is as follows:
  <!-- while <conditional statement>:
  <action> -->
- example while loop
<!-- countdown = 10

while countdown >= 0:
  print("Number: " +str(countdown))
  countdown -= 1
print("We have liftoff!") -->

code to loop through and add each item to another loop:
<!-- students_period_A = ["Alex", "Briana", "Cheri", "Daniele"]
students_period_B = ["Dora", "Minerva", "Alexa", "Obie"]

for student in students_period_A:
  students_period_B.append(student)
 
print(students_period_B) -->


### Break Key word
- break - IN a loop the 'break' keyword escapes the loop, regardless of the iteration number

### Loop Control - Continue
- Breaking the cycle without breaking the whole loop
  - wit a normal loop the cycle will break once the loop finds a true statement - if there is more than onwe true statement in a list the loop must continue the example below is a scenario of checking Ids at a bar and looking for any number over 21]
  - notes: continue needs to be indented inside the if loop to print the right output

<!-- ages = [12, 38, 34, 26, 21, 19, 67, 41, 17]

for age in ages:
  if age < 21:
    continue
  print(age) -->

### Nested Loops
  - Loops can be nested in Python - Nested loops can be used to access items of lists which are inside of other lists - the items selected from the outer loop can be used as the list for the inner loop to iterate over.
    - A good use for nested loops is for dissecting 2 dim lists

-Code example is breaking a group of sales down by a location - then adds the numbers together to give a total at all locations
 
<!-- sales_data = [[12, 17, 22], [2, 10, 3], [5, 12, 13]]

scoops_sold = 0

for location in sales_data:
  print(location)
  for scoops in location:
    scoops_sold += scoops

print(scoops_sold) -->

