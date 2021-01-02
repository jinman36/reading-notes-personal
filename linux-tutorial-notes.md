
## Table of Contents
1. [Outline](#Outline)
1. [Structure](#Structure)
1. [General House Rules](#General-House-Rules)
1. [Problem Solving and Creativity](#Problem-Solving-and-Creativity)
1. [Obtaining Linux](#Obtaining-Linux)

## vocabulary
- GUI - Graphic user interface
- Bash - Borne Again Shell
- PWD - Print Workng Directory


## intro
- Some tasks are best suited for the GUI - word processing and video editing
- some tasks are better for the command line - data manipulation (reporting) and file management

## Outline
### The command line
- the command line or termial is a text based interface to the system.
- opening the terminal - I'm using windows powershell, then using an Ubantu add on
- The shell, bash - within a terminal we have the shell - this defines how the terminal will beave and looks after running (or executing) commands.
- (echo $SHELL) entered into the command prompt will display the current working shell for the system.

### Shortcuts
- learn and use lots of shortcuts
- (up and down keys) these will let you traverse your history in the command line.

### Basic Navigation
- (pwd) - tells you what your present working directory is. USe this command often, since so many commands rely on you being in the right locations for execution of commands.

- (ls) - list will list out all folders in the directory that you are over
- (ls -l) - list with a long list - adds blocks, file or directory owner, grouping of file and directory owner, file size, modification time, actual name of file or directory.

### Paths
- paths under linux are hierarchial structured.  the top is the root directrtoy and is denoted with a single (/)
- Absolute - specify a location (file or directory) in relation tot he root directory. - these begin with (/)
- relative - specify a location (file or directory) in relation to where we are currently in the system. -will not begin with (/)
- (tilde) ~ - is a shortcut for home directory
- (dot) . - reference to your currentt directory
- (dot dot) .. - refernce to your parent directory

- (cd) - change directory

### Manual Pages
- (man<command>) - look up the manual page for a particular command
- (man -k <search term>) - do a keyword search through all the manual pages containing the given search term
- (/<term>) - within a man page, perform a search for 'term'
- (n) - after performing a search witin a manual page, the the next found item

### file manipulation
- (mkdir [option] <directory>) - command for creating a directory in the linux widnow
- (rmdir) - remove directory
- (touch) - create a blank file
- (cp) - copy
- (mv) - move
- (rm) - remove a file

### Utilizing Vi
- I didn't participate in this,a s much, only a ready through. I'm not sure I want to start adjusting things in this manner until further in the code fellows course.

### Wildcards
- * - represents zaro or more characters
- ? - represents a single character
- [] - represents a range of characters

### Permissions
- (chmod [permissions] [path]) -  chmod has permission arguments that are made up of 3 components
    1. Who we arethe permissions for
    2. are we granting or revoking - (+) or (-)
    3. which permission are we setting - read (r), write (w) or execute (x)
- on linux systems there are 2 ppl who may change the permissions of a file or directory. The owner of the file r dir and the root user
- a root user is a superuser who is allowed to do anything and everything to a system - typically an administrator

### filters
- (head [-number of lines to print] [print]) - view the first n lines
- (tail [-number of lines to print] [path]) - view the last n lines
- (sort [-options] [path]) - organize the data
- (nl [-options] [path]) nl - number lines
- (wc [-options] [path]) wc - word count - prints a count of lines, words, and characters
- (cut [-options][path]) - cut can seperate fields in your files from others
- (sed<expression>[path]) sed -stream editor - allows us to do a search and replace on our data
- (uniq[options][path]) - romoves duplicate lines from the data - only works if lines are adjacent to eachother
- (tac [path]) opposite of 'cat' this will print the lines in reverse order
- (awk)
- (diff)

### Grep and Regular Expressions
- 
## Structure


## General House Rules


## Problem Solving and Creativity


## Obtaining Linux


