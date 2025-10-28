// script.js

// Detect which concept page we’re on
const page = window.location.pathname.split("/").pop();

let allQuestions = [];

if (page === "c.html") {
  allQuestions = [
    // EASY (12 questions ~40%)
    { question: "Who is the father of the C language?", options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "Dennis Ritchie", level: "easy" },
    { question: "Which symbol is used to terminate a statement in C?", options: [";", ":", ".", ","], answer: ";", level: "easy" },
    { question: "Which header file is required for printf() in C?", options: ["<stdio.h>", "<stdlib.h>", "<conio.h>", "<math.h>"], answer: "<stdio.h>", level: "easy" },
    { question: "What is the correct way to declare an integer variable named count in C?", options: ["int count;", "integer count;", "var count;", "count int;"], answer: "int count;", level: "easy" },
    { question: "Which of the following is not a valid C variable name?", options: ["_myVar", "var1", "2ndVar", "var_name"], answer: "2ndVar", level: "easy" },
    { question: "Which of the following keywords is used to prevent changes in a variable in C?", options: ["immutable", "const", "volatile", "mutable"], answer: "const", level: "easy" },
    { question: "Which of the following is the correct syntax for including the standard I/O library in C?", options: ["#include <stdio.h>", "#import <stdio.h>", "using namespace std;", "include <stdio.h>"], answer: "#include <stdio.h>", level: "easy" },
    { question: "What is the first index of an array declared as int arr[10] in C?", options: ["0", "1", "-1", "10"], answer: "0", level: "easy" },
    { question: "Which of the following is the correct way to write a comment in C (single line)?", options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "-- This is a comment"], answer: "// This is a comment", level: "easy" },
    { question: "Which of the following is not a valid data type in C?", options: ["int", "float", "real", "char"], answer: "real", level: "easy" },
    { question: "What is the size of char in C on most systems?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], answer: "1 byte", level: "easy" },
    { question: "Which operator is used to access value at address stored by a pointer in C?", options: ["*", "&", "->", "."], answer: "*", level: "easy" },

    // MEDIUM (12 questions ~40%)
    { question: "What will be the output of printf(\"%d\", 5 + 3 * 2); in C?", options: ["16", "11", "10", "13"], answer: "11", level: "medium" },
    { question: "Which of the following correctly defines the entry point of a C program?", options: ["void main()", "int main()", "main()", "int main(void)"], answer: "int main()", level: "medium" },
    { question: "Which header file contains the definition of malloc() and free() in C?", options: ["<malloc.h>", "<stdlib.h>", "<memory.h>", "<alloc.h>"], answer: "<stdlib.h>", level: "medium" },
    { question: "Which of the following statements about arrays in C is true?", options: ["Array size must be constant", "Array indexing starts at 1", "Array name is a pointer", "Array elements must all be the same type"], answer: "Array name is a pointer", level: "medium" },
    { question: "What will be the value of *ptr if int x = 10; int *ptr = &x; *ptr = 20; printf(\"%d\", x);", options: ["10", "20", "Undefined", "Compile error"], answer: "20", level: "medium" },
    { question: "What is the output of the following code? int i = 1; while(++i <= 5) printf(\"%d \", i++);", options: ["1 3 5", "2 4", "2 4 6", "2"], answer: "2 4", level: "medium" },
    { question: "Which preprocessor directive is used for conditional compilation in C?", options: ["#if", "#cond", "#ifdef", "#choose"], answer: "#ifdef", level: "medium" },
    { question: "What will be the size of union {int i; char c; double d;} on a 64-bit system (assuming no padding)?", options: ["4", "8", "16", "Depends"], answer: "16", level: "medium" },
    { question: "What happens when you call free() on a pointer and later try to access the memory pointed by it?", options: ["It works", "Undefined behaviour", "Compile error", "Runs fine"], answer: "Undefined behaviour", level: "medium" },
    { question: "Which function is used to read a single character from stdin, without echoing, in C?", options: ["getchar()", "getch()", "getc()", "scanf()"], answer: "getchar()", level: "medium" },
    { question: "What will be the output of sizeof(int) > -1 in a standard C program?", options: ["True", "False", "Depends", "Compile error"], answer: "True", level: "medium" },
    { question: "Which of the following is not valid for function pointers in C?", options: ["int (*fp)()", "void (*fp)(int)", "double (*fp)(double)", "int fp(int)"], answer: "int fp(int)", level: "medium" },

    // HARD (6 questions ~20%)
    { question: "What is the size of an empty struct in C according to the standard?", options: ["0", "1", "2", "Undefined"], answer: "1", level: "hard" },
    { question: "What will be the output of the following code? union { int i; char c; } u; u.i = 0x41424344; printf(\"%c\", u.c); on a little-endian machine", options: ["A", "D", "4", "Unknown"], answer: "D", level: "hard" },
    { question: "Given: int arr[5] = {0}; what is the value of arr[0] + arr[4] immediately?", options: ["0", "Undefined", "Garbage", "Compile error"], answer: "0", level: "hard" },
    { question: "What is the main advantage of restricting to ISO C90 standard in terms of struct padding?", options: ["Better portability", "Faster speed", "Smaller memory", "None"], answer: "Smaller memory", level: "hard" },
    { question: "What happens when ++*ptr++ is written in C (assuming ptr is valid) in C99 mode?", options: ["Increment the value then the pointer", "Increment pointer then value", "Undefined behaviour", "Compile error"], answer: "Undefined behaviour", level: "hard" },
    { question: "What will be the value of the expression (x = foo()) != 1 considering foo() returns 2 in C?", options: ["2", "True", "1", "0"], answer: "True", level: "hard" }
  ];
}
else if (page === "js.html") {
  allQuestions = [
    // EASY (12 questions ~40%)
    { question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"], answer: "Netscape", level: "easy" },
    { question: "Which symbol is used for comments in JavaScript (single line)?", options: ["//", "/* */", "#", "--"], answer: "//", level: "easy" },
    { question: "Which of the following is not a JavaScript data type?", options: ["Number", "String", "Boolean", "Character"], answer: "Character", level: "easy" },
    { question: "How do you declare a variable in JavaScript?", options: ["var x;", "int x;", "let x;", "Both var x; and let x;"], answer: "Both var x; and let x;", level: "easy" },
    { question: "Which keyword is used to define a constant in JavaScript?", options: ["constant", "final", "const", "let"], answer: "const", level: "easy" },
    { question: "What is the output of `console.log(typeof 42);`?", options: ["number", "string", "object", "undefined"], answer: "number", level: "easy" },
    { question: "Which of these is a correct way to write a function in JavaScript?", options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "function: myFunc() {}"], answer: "function myFunc() {}", level: "easy" },
    { question: "Which operator is used for strict equality in JavaScript?", options: ["=", "==", "===", "!="], answer: "===", level: "easy" },
    { question: "Which method converts a JSON string to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"], answer: "JSON.parse()", level: "easy" },
    { question: "Which symbol is used to access object properties?", options: [".", "->", ":", ";"], answer: ".", level: "easy" },
    { question: "Which of the following is not a looping statement in JavaScript?", options: ["for", "while", "do-while", "foreach"], answer: "foreach", level: "easy" },
    { question: "What will `console.log(2 + '2');` output?", options: ["4", "22", "NaN", "Error"], answer: "22", level: "easy" },

    // MEDIUM (12 questions ~40%)
    { question: "What is the output of `console.log(0 == '0');`?", options: ["true", "false", "undefined", "NaN"], answer: "true", level: "medium" },
    { question: "What is the difference between `let` and `var`?", options: ["let is block-scoped, var is function-scoped", "var is block-scoped, let is function-scoped", "Both are the same", "None of the above"], answer: "let is block-scoped, var is function-scoped", level: "medium" },
    { question: "Which of the following is true about JavaScript closures?", options: ["A function having access to parent scope variables", "A function inside another function", "Both", "None"], answer: "Both", level: "medium" },
    { question: "Which event occurs when a user clicks on an HTML element?", options: ["onmouseover", "onclick", "onchange", "onload"], answer: "onclick", level: "medium" },
    { question: "Which method is used to add an element at the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", level: "medium" },
    { question: "What is the difference between `==` and `===` in JavaScript?", options: ["`==` checks value, `===` checks value and type", "`==` checks type, `===` checks value", "Both are same", "None"], answer: "`==` checks value, `===` checks value and type", level: "medium" },
    { question: "Which built-in method calls a function for each element of an array?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "forEach()", level: "medium" },
    { question: "Which keyword is used to handle errors in JavaScript?", options: ["try", "catch", "throw", "All of the above"], answer: "All of the above", level: "medium" },
    { question: "Which of these is used to create a new object in JavaScript?", options: ["{}", "new Object()", "Object.create()", "All of the above"], answer: "All of the above", level: "medium" },
    { question: "Which statement is true about JavaScript?", options: ["It is interpreted", "It is compiled", "Both", "None"], answer: "It is interpreted", level: "medium" },
    { question: "What will `console.log(typeof null);` output?", options: ["object", "null", "undefined", "number"], answer: "object", level: "medium" },
    { question: "Which keyword is used to declare a variable that cannot be reassigned?", options: ["const", "let", "var", "static"], answer: "const", level: "medium" },

    // HARD (6 questions ~20%)
    { question: "What is the output of `console.log([] + []);`?", options: ["0", "'' (empty string)", "[]", "Error"], answer: "'' (empty string)", level: "hard" },
    { question: "What is the result of `typeof NaN`?", options: ["number", "NaN", "undefined", "object"], answer: "number", level: "hard" },
    { question: "Which of the following is true about JavaScript hoisting?", options: ["Variables are hoisted with undefined", "Functions are hoisted", "Both", "None"], answer: "Both", level: "hard" },
    { question: "What will `console.log(1 < 2 < 3);` output?", options: ["true", "false", "undefined", "Error"], answer: "true", level: "hard" },
    { question: "What will `console.log(3 > 2 > 1);` output?", options: ["true", "false", "undefined", "Error"], answer: "false", level: "hard" },
    { question: "Which of the following is true about `this` keyword in JavaScript?", options: ["Refers to the current object", "Refers to global object", "Depends on context", "All of the above"], answer: "All of the above", level: "hard" }
  ];
}
else if (page === "python.html") {
  allQuestions = [
    // EASY (12 questions ~40%)
    { question: "Who developed Python?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "Guido van Rossum", level: "easy" },
    { question: "Which of these is the correct file extension for Python files?", options: [".py", ".python", ".pt", ".pyt"], answer: ".py", level: "easy" },
    { question: "Which keyword is used to define a function in Python?", options: ["function", "def", "func", "define"], answer: "def", level: "easy" },
    { question: "Which of the following is a Python data type?", options: ["int", "float", "str", "All of the above"], answer: "All of the above", level: "easy" },
    { question: "How do you insert a comment in Python?", options: ["// Comment", "# Comment", "/* Comment */", "-- Comment"], answer: "# Comment", level: "easy" },
    { question: "Which operator is used for exponentiation in Python?", options: ["^", "**", "%", "pow()"], answer: "**", level: "easy" },
    { question: "What is the output of `print(type(5))`?", options: ["int", "float", "number", "None"], answer: "int", level: "easy" },
    { question: "Which of these is used to create a list in Python?", options: ["{}", "()", "[]", "<>"], answer: "[]", level: "easy" },
    { question: "What does the `len()` function do in Python?", options: ["Returns length", "Returns type", "Returns value", "None"], answer: "Returns length", level: "easy" },
    { question: "Which keyword is used to create a class in Python?", options: ["class", "def", "object", "structure"], answer: "class", level: "easy" },
    { question: "Which symbol is used for floor division in Python?", options: ["/", "//", "%", "**"], answer: "//", level: "easy" },
    { question: "How do you create a dictionary in Python?", options: ["{}", "[]", "()", "<>"], answer: "{}", level: "easy" },

    // MEDIUM (12 questions ~40%)
    { question: "What will `print(2 ** 3 ** 2)` output in Python?", options: ["64", "512", "256", "Error"], answer: "512", level: "medium" },
    { question: "Which of the following methods adds an item to the end of a list?", options: ["add()", "append()", "insert()", "extend()"], answer: "append()", level: "medium" },
    { question: "Which of these is used for multi-line comments in Python?", options: ["'''Comment'''", "# Comment", "// Comment", "/* Comment */"], answer: "'''Comment'''", level: "medium" },
    { question: "What is the output of `print(bool(0))`?", options: ["True", "False", "0", "None"], answer: "False", level: "medium" },
    { question: "Which keyword is used to handle exceptions in Python?", options: ["try", "catch", "except", "error"], answer: "except", level: "medium" },
    { question: "Which function converts a string to a list of characters?", options: ["list()", "str()", "char()", "array()"], answer: "list()", level: "medium" },
    { question: "What is the output of `print(10 // 3)`?", options: ["3", "3.33", "4", "Error"], answer: "3", level: "medium" },
    { question: "Which of the following is mutable in Python?", options: ["tuple", "list", "str", "int"], answer: "list", level: "medium" },
    { question: "What does the `range(5)` function generate?", options: ["[0,1,2,3,4]", "[1,2,3,4,5]", "[0,1,2,3,4,5]", "Error"], answer: "[0,1,2,3,4]", level: "medium" },
    { question: "Which keyword is used to import a module in Python?", options: ["include", "import", "require", "load"], answer: "import", level: "medium" },
    { question: "What is the output of `print('5' + '5')`?", options: ["10", "55", "TypeError", "None"], answer: "55", level: "medium" },
    { question: "Which of these is not a valid Python boolean operator?", options: ["and", "or", "not", "xor"], answer: "xor", level: "medium" },

    // HARD (6 questions ~20%)
    { question: "What will be the output of `print([1,2,3]*2)`?", options: ["[1,2,3,1,2,3]", "[1,2,3,1,2,3,1,2,3]", "[2,4,6]", "Error"], answer: "[1,2,3,1,2,3]", level: "hard" },
    { question: "What is the output of `print(type(lambda x: x))`?", options: ["function", "lambda", "<class 'function'>", "Error"], answer: "<class 'function'>", level: "hard" },
    { question: "Which of the following statements about Python generators is true?", options: ["They return all values at once", "They generate values lazily", "They are functions that always return None", "They are similar to lists"], answer: "They generate values lazily", level: "hard" },
    { question: "Which of these keywords is used to create an iterator in Python?", options: ["iter", "next", "generator", "yield"], answer: "iter", level: "hard" },
    { question: "What is the output of `print(bool([]))`?", options: ["True", "False", "None", "Error"], answer: "False", level: "hard" },
    { question: "Which of the following is true about Python's `with` statement?", options: ["It ensures proper resource management", "It is used for loops", "It handles exceptions", "None"], answer: "It ensures proper resource management", level: "hard" }
 ];
}
else if (page === "css.html") {
  allQuestions = [
    // EASY (12 questions ~40%)
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets", level: "easy" },
    { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "font", "styles"], answer: "style", level: "easy" },
    { question: "Which property is used to change the background color?", options: ["color", "background-color", "bgcolor", "backcolor"], answer: "background-color", level: "easy" },
    { question: "Which property is used to change the text color?", options: ["text-color", "color", "font-color", "fgcolor"], answer: "color", level: "easy" },
    { question: "Which property is used to change the font of an element?", options: ["font-family", "font-style", "font-weight", "text-style"], answer: "font-family", level: "easy" },
    { question: "Which CSS property controls the text size?", options: ["text-size", "font-size", "font-style", "text-style"], answer: "font-size", level: "easy" },
    { question: "Which HTML tag is used to define an internal CSS?", options: ["<css>", "<style>", "<script>", "<link>"], answer: "<style>", level: "easy" },
    { question: "Which property is used to make the text bold?", options: ["font-weight", "font-style", "text-weight", "text-style"], answer: "font-weight", level: "easy" },
    { question: "Which CSS property controls the element’s width?", options: ["width", "size", "length", "height"], answer: "width", level: "easy" },
    { question: "How do you select an element with id 'header' in CSS?", options: ["header", "#header", ".header", "*header"], answer: "#header", level: "easy" },
    { question: "How do you select elements with class name 'menu'?", options: [".menu", "#menu", "menu", "*menu"], answer: ".menu", level: "easy" },
    { question: "Which CSS property is used to add space inside an element?", options: ["margin", "padding", "spacing", "border-spacing"], answer: "padding", level: "easy" },

    // MEDIUM (12 questions ~40%)
    { question: "What is the default value of the position property?", options: ["static", "relative", "absolute", "fixed"], answer: "static", level: "medium" },
    { question: "Which property is used to control the space between lines of text?", options: ["line-height", "text-height", "spacing", "line-spacing"], answer: "line-height", level: "medium" },
    { question: "Which property is used to set the transparency of an element?", options: ["opacity", "transparency", "filter", "alpha"], answer: "opacity", level: "medium" },
    { question: "Which property is used to control the flow of floating elements?", options: ["clear", "float", "overflow", "display"], answer: "clear", level: "medium" },
    { question: "Which property is used to make a flex container?", options: ["display: flex;", "display: block;", "display: inline;", "display: grid;"], answer: "display: flex;", level: "medium" },
    { question: "Which property is used to align items along the main axis in flexbox?", options: ["align-items", "justify-content", "align-content", "flex-direction"], answer: "justify-content", level: "medium" },
    { question: "What does z-index control in CSS?", options: ["Stacking order", "Font size", "Element width", "Opacity"], answer: "Stacking order", level: "medium" },
    { question: "Which CSS property is used to add shadow effects to text?", options: ["text-shadow", "box-shadow", "shadow", "font-shadow"], answer: "text-shadow", level: "medium" },
    { question: "Which property is used to add rounded corners to an element?", options: ["border-radius", "corner-radius", "round-corners", "border-corner"], answer: "border-radius", level: "medium" },
    { question: "Which property is used to change the style of bullets in lists?", options: ["list-style-type", "bullet-style", "marker-style", "list-style"], answer: "list-style-type", level: "medium" },
    { question: "Which CSS property is used to control text overflow?", options: ["text-overflow", "overflow", "word-wrap", "white-space"], answer: "text-overflow", level: "medium" },
    { question: "Which CSS property is used to animate changes in CSS properties?", options: ["transition", "animation", "transform", "motion"], answer: "transition", level: "medium" },

    // HARD (6 questions ~20%)
    { question: "What is the difference between relative, absolute, fixed, and sticky positioning?", options: ["Different ways to position elements on the page", "Different display types", "Different z-index levels", "Different float methods"], answer: "Different ways to position elements on the page", level: "hard" },
    { question: "Which property allows you to create a grid layout?", options: ["display: grid;", "display: flex;", "display: block;", "display: table;"], answer: "display: grid;", level: "hard" },
    { question: "What is the difference between inline, block, and inline-block elements?", options: ["How elements flow and occupy space", "Their color properties", "Font size", "Margins"], answer: "How elements flow and occupy space", level: "hard" },
    { question: "Which property is used to make an element disappear but still occupy space?", options: ["visibility", "display", "opacity", "overflow"], answer: "visibility", level: "hard" },
    { question: "How do CSS pseudo-classes like :hover, :nth-child() work?", options: ["Select elements in specific states or positions", "Change colors only", "Add JavaScript events", "Control margins"], answer: "Select elements in specific states or positions", level: "hard" },
    { question: "Which property is used to transform an element in 2D or 3D space?", options: ["transform", "translate", "rotate", "perspective"], answer: "transform", level: "hard" }
  ];
}
else if (page === "java.html") {
  allQuestions = [
    // EASY (12 questions ~40%)
    { question: "Who is the father of Java?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], answer: "James Gosling", level: "easy" },
    { question: "Which of these is not a Java keyword?", options: ["static", "Boolean", "void", "private"], answer: "Boolean", level: "easy" },
    { question: "Which method is the entry point of a Java program?", options: ["main()", "start()", "init()", "run()"], answer: "main()", level: "easy" },
    { question: "Which of these is used to declare a class in Java?", options: ["class", "struct", "object", "module"], answer: "class", level: "easy" },
    { question: "Which symbol is used for single-line comments in Java?", options: ["//", "/* */", "#", "--"], answer: "//", level: "easy" },
    { question: "Which of these is a primitive data type in Java?", options: ["int", "String", "Array", "Class"], answer: "int", level: "easy" },
    { question: "Which operator is used for addition in Java?", options: ["+", "-", "*", "/"], answer: "+", level: "easy" },
    { question: "Which keyword is used to create a new object in Java?", options: ["new", "create", "object", "instance"], answer: "new", level: "easy" },
    { question: "Which of these is used to compare two values in Java?", options: ["==", "=", "equals()", "both == and equals()"], answer: "both == and equals()", level: "easy" },
    { question: "Which of the following is correct syntax for the main method?", options: ["public static void main(String[] args)", "public void main(String args)", "static void main(String[] args)", "main(String[] args)"], answer: "public static void main(String[] args)", level: "easy" },
    { question: "Which package is automatically imported in every Java program?", options: ["java.lang", "java.util", "java.io", "java.net"], answer: "java.lang", level: "easy" },
    { question: "Which of the following is used to define a constant in Java?", options: ["final", "const", "static", "immutable"], answer: "final", level: "easy" },

    // MEDIUM (12 questions ~40%)
    { question: "Which of these is a valid declaration of an array in Java?", options: ["int[] arr;", "int arr[];", "Both A and B", "int arr;"], answer: "Both A and B", level: "medium" },
    { question: "Which concept allows Java to support multiple methods with the same name?", options: ["Method Overloading", "Method Overriding", "Polymorphism", "Encapsulation"], answer: "Method Overloading", level: "medium" },
    { question: "Which method is used to compare two strings for equality?", options: ["equals()", "==", "compare()", "match()"], answer: "equals()", level: "medium" },
    { question: "Which keyword is used to inherit a class in Java?", options: ["extends", "implements", "inherits", "super"], answer: "extends", level: "medium" },
    { question: "Which of the following is true about Java interfaces?", options: ["Can have abstract methods only", "Can have default and static methods", "Cannot have constructors", "All of the above"], answer: "All of the above", level: "medium" },
    { question: "Which exception is thrown when dividing by zero in Java?", options: ["ArithmeticException", "NullPointerException", "ArrayIndexOutOfBoundsException", "NumberFormatException"], answer: "ArithmeticException", level: "medium" },
    { question: "Which keyword is used to access the parent class constructor?", options: ["super", "this", "parent", "base"], answer: "super", level: "medium" },
    { question: "Which collection class allows you to store key-value pairs?", options: ["HashMap", "ArrayList", "LinkedList", "TreeSet"], answer: "HashMap", level: "medium" },
    { question: "Which of the following is used to handle exceptions in Java?", options: ["try-catch", "if-else", "switch", "for loop"], answer: "try-catch", level: "medium" },
    { question: "Which access modifier allows visibility only within the same package?", options: ["default (no modifier)", "private", "protected", "public"], answer: "default (no modifier)", level: "medium" },
    { question: "Which method is used to start a thread in Java?", options: ["start()", "run()", "init()", "execute()"], answer: "start()", level: "medium" },
    { question: "Which of the following statements about Java constructors is correct?", options: ["A constructor has the same name as the class", "A constructor can have return type void", "A constructor cannot be overloaded", "Constructors are static"], answer: "A constructor has the same name as the class", level: "medium" },

    // HARD (6 questions ~20%)
    { question: "What is the difference between an abstract class and an interface in Java?", options: ["Abstract class can have concrete methods, interface cannot", "Interface supports multiple inheritance, abstract class does not", "Interface cannot have instance variables", "All of the above"], answer: "All of the above", level: "hard" },
    { question: "Which Java feature allows a class to have more than one form?", options: ["Polymorphism", "Encapsulation", "Abstraction", "Inheritance"], answer: "Polymorphism", level: "hard" },
    { question: "Which method is used to convert a string to an integer in Java?", options: ["Integer.parseInt()", "String.toInt()", "Integer.value()", "parseInt()"], answer: "Integer.parseInt()", level: "hard" },
    { question: "What is the main difference between `==` and `equals()` for objects?", options: ["`==` checks reference, `equals()` checks value", "`==` checks value, `equals()` checks reference", "Both check value", "Both check reference"], answer: "`==` checks reference, `equals()` checks value", level: "hard" },
    { question: "Which Java keyword prevents a class from being subclassed?", options: ["final", "static", "abstract", "private"], answer: "final", level: "hard" },
    { question: "Which of the following is true about Java memory management?", options: ["Java uses garbage collection", "Objects are manually deallocated", "Stack is used for objects", "Heap is not used"], answer: "Java uses garbage collection", level: "hard" }
  ];
}
else if (page === "html.html") {
  allQuestions = [
    // EASY (12 questions ~40%)
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language", level: "easy" },
    { question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<hyper>"], answer: "<a>", level: "easy" },
    { question: "Which tag is used for inserting an image?", options: ["<img>", "<image>", "<src>", "<picture>"], answer: "<img>", level: "easy" },
    { question: "Which attribute is used to provide alternate text for an image?", options: ["alt", "src", "title", "href"], answer: "alt", level: "easy" },
    { question: "Which tag is used for the largest heading?", options: ["<h1>", "<h6>", "<head>", "<heading>"], answer: "<h1>", level: "easy" },
    { question: "Which tag is used to create a paragraph?", options: ["<p>", "<para>", "<text>", "<paragraph>"], answer: "<p>", level: "easy" },
    { question: "Which tag is used to create a line break?", options: ["<br>", "<break>", "<lb>", "<hr>"], answer: "<br>", level: "easy" },
    { question: "Which attribute is used to define the URL of a link?", options: ["href", "src", "link", "url"], answer: "href", level: "easy" },
    { question: "Which tag is used to create a table row?", options: ["<tr>", "<td>", "<th>", "<table>"], answer: "<tr>", level: "easy" },
    { question: "Which tag is used to define a table header?", options: ["<th>", "<td>", "<tr>", "<thead>"], answer: "<th>", level: "easy" },
    { question: "Which tag is used to define a table cell?", options: ["<td>", "<th>", "<tr>", "<table>"], answer: "<td>", level: "easy" },
    { question: "Which tag is used to create an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>", level: "easy" },

    // MEDIUM (12 questions ~40%)
    { question: "Which attribute specifies a unique id for an element?", options: ["id", "class", "name", "unique"], answer: "id", level: "medium" },
    { question: "Which attribute is used to group elements together for styling?", options: ["class", "id", "style", "group"], answer: "class", level: "medium" },
    { question: "Which tag is used to define the HTML document’s title?", options: ["<title>", "<head>", "<header>", "<meta>"], answer: "<title>", level: "medium" },
    { question: "Which tag is used to define the body of the HTML document?", options: ["<body>", "<head>", "<html>", "<main>"], answer: "<body>", level: "medium" },
    { question: "Which tag is used to create an ordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ol>", level: "medium" },
    { question: "Which attribute specifies the language of the HTML document?", options: ["lang", "language", "type", "xml:lang"], answer: "lang", level: "medium" },
    { question: "Which tag is used to add a comment in HTML?", options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"], answer: "<!-- comment -->", level: "medium" },
    { question: "Which tag is used to embed a video in HTML5?", options: ["<video>", "<movie>", "<media>", "<embed>"], answer: "<video>", level: "medium" },
    { question: "Which tag is used to define a section in HTML5?", options: ["<section>", "<div>", "<article>", "<aside>"], answer: "<section>", level: "medium" },
    { question: "Which tag is used for an HTML5 navigation section?", options: ["<nav>", "<menu>", "<navigation>", "<ul>"], answer: "<nav>", level: "medium" },
    { question: "Which input type allows the user to select a date?", options: ["date", "text", "datetime", "calendar"], answer: "date", level: "medium" },
    { question: "Which attribute in <form> specifies the HTTP method?", options: ["method", "type", "action", "submit"], answer: "method", level: "medium" },

    // HARD (6 questions ~20%)
    { question: "Which HTML5 element is used to define content aside from the main content?", options: ["<aside>", "<section>", "<article>", "<div>"], answer: "<aside>", level: "hard" },
    { question: "Which attribute is used to define the relationship between the current document and the linked document?", options: ["rel", "href", "type", "link"], answer: "rel", level: "hard" },
    { question: "Which attribute specifies the media type for linked CSS?", options: ["media", "type", "rel", "href"], answer: "media", level: "hard" },
    { question: "Which tag is used for defining an article in HTML5?", options: ["<article>", "<section>", "<aside>", "<div>"], answer: "<article>", level: "hard" },
    { question: "Which element is used to provide self-contained content in HTML5?", options: ["<article>", "<div>", "<section>", "<aside>"], answer: "<article>", level: "hard" },
    { question: "Which HTML5 element is used to specify footer information for a document or section?", options: ["<footer>", "<bottom>", "<section>", "<aside>"], answer: "<footer>", level: "hard" }
  ];
}
else if (page === "cpp.html") {
  allQuestions = [
    // EASY (12 questions ~40%)
    { question: "Who is the father of C++?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"], answer: "Bjarne Stroustrup", level: "easy" },
    { question: "Which of the following is used for single-line comments in C++?", options: ["//", "/* */", "#", "--"], answer: "//", level: "easy" },
    { question: "Which of the following is a valid C++ data type?", options: ["int", "real", "char", "Both int and char"], answer: "Both int and char", level: "easy" },
    { question: "Which keyword is used to define a constant in C++?", options: ["constant", "const", "final", "immutable"], answer: "const", level: "easy" },
    { question: "Which operator is used to access members of a class through an object?", options: [".", "->", "::", "#"], answer: ".", level: "easy" },
    { question: "Which of the following is the correct way to declare an integer variable?", options: ["int x;", "integer x;", "var x;", "x int;"], answer: "int x;", level: "easy" },
    { question: "Which header file is required for input/output in C++?", options: ["<iostream>", "<stdio.h>", "<conio.h>", "<stdlib.h>"], answer: "<iostream>", level: "easy" },
    { question: "Which of the following is the correct way to write a function in C++?", options: ["void myFunc() {}", "func myFunc() {}", "def myFunc() {}", "function myFunc() {}"], answer: "void myFunc() {}", level: "easy" },
    { question: "Which of the following is used for multi-line comments in C++?", options: ["/* comment */", "// comment", "# comment", "-- comment"], answer: "/* comment */", level: "easy" },
    { question: "Which symbol is used to terminate a statement in C++?", options: [";", ":", ".", ","], answer: ";", level: "easy" },
    { question: "Which of the following is not a valid C++ variable name?", options: ["_myVar", "var1", "2ndVar", "var_name"], answer: "2ndVar", level: "easy" },
    { question: "Which of the following is a correct way to include the standard library in C++?", options: ["#include <iostream>", "#import <iostream>", "using namespace std;", "include <iostream>"], answer: "#include <iostream>", level: "easy" },

    // MEDIUM (12 questions ~40%)
    { question: "What is the correct way to declare a pointer in C++?", options: ["int *ptr;", "int ptr*", "*int ptr;", "ptr int*;"], answer: "int *ptr;", level: "medium" },
    { question: "Which of the following is true about C++ constructors?", options: ["Have same name as class", "No return type", "Called automatically when object is created", "All of the above"], answer: "All of the above", level: "medium" },
    { question: "Which of the following is used to define a class in C++?", options: ["class MyClass {}", "MyClass class {}", "def MyClass {}", "object MyClass {}"], answer: "class MyClass {}", level: "medium" },
    { question: "Which access specifier allows members to be accessed only within the class?", options: ["private", "public", "protected", "default"], answer: "private", level: "medium" },
    { question: "Which operator is used to allocate memory dynamically in C++?", options: ["new", "malloc", "alloc", "create"], answer: "new", level: "medium" },
    { question: "Which operator is used to deallocate memory in C++?", options: ["delete", "free", "remove", "dispose"], answer: "delete", level: "medium" },
    { question: "Which of the following is true about C++ destructors?", options: ["Have same name as class with ~ prefix", "No return type", "Called automatically when object is destroyed", "All of the above"], answer: "All of the above", level: "medium" },
    { question: "Which of the following is used for run-time polymorphism?", options: ["Virtual functions", "Friend functions", "Inline functions", "Static functions"], answer: "Virtual functions", level: "medium" },
    { question: "Which of the following is not an OOP concept in C++?", options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"], answer: "Compilation", level: "medium" },
    { question: "Which of the following is used to define a namespace in C++?", options: ["namespace std {}", "using namespace {}", "namespace {}", "using {}"], answer: "namespace std {}", level: "medium" },
    { question: "Which operator is used to access members of a class through a pointer?", options: [".", "->", "::", "*"], answer: "->", level: "medium" },
    { question: "Which of the following correctly defines a function pointer in C++?", options: ["int (*fp)();", "void (*fp)(int);", "Both", "None"], answer: "Both", level: "medium" },

    // HARD (6 questions ~20%)
    { question: "Which of the following is true about multiple inheritance in C++?", options: ["A class can inherit from more than one class", "Only single inheritance is allowed", "Multiple inheritance is not allowed", "Depends on compiler"], answer: "A class can inherit from more than one class", level: "hard" },
    { question: "Which of the following is correct about virtual inheritance?", options: ["Prevents multiple copies of base class when using multiple inheritance", "Provides polymorphism", "Allows operator overloading", "None"], answer: "Prevents multiple copies of base class when using multiple inheritance", level: "hard" },
    { question: "What is the size of an empty class in C++?", options: ["1 byte", "0 byte", "Depends on compiler", "Undefined"], answer: "1 byte", level: "hard" },
    { question: "Which of the following statements about templates is correct?", options: ["Used for generic programming", "Works with classes and functions", "Both", "None"], answer: "Both", level: "hard" },
    { question: "Which of the following operators cannot be overloaded in C++?", options: ["::", ".", ".*", "All of the above"], answer: "All of the above", level: "hard" },
    { question: "What is the main advantage of using references over pointers?", options: ["Simpler syntax", "Cannot be null", "Automatically dereferenced", "All of the above"], answer: "All of the above", level: "hard" }
  ];
}

 else {
  allQuestions = [];
}

// Randomly select 15 questions (6 easy, 6 medium, 3 hard)
function getRandomQuestions(arr) {
  const easy = arr.filter(q => q.level === "easy");
  const medium = arr.filter(q => q.level === "medium");
  const hard = arr.filter(q => q.level === "hard");

  function pickRandom(source, count) {
    const copy = [...source];
    const result = [];
    for (let i = 0; i < count && copy.length; i++) {
      const idx = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(idx, 1)[0]);
    }
    return result;
  }

  return [
    ...pickRandom(easy, 6),
    ...pickRandom(medium, 6),
    ...pickRandom(hard, 3)
  ];
}

const selectedQuestions = getRandomQuestions(allQuestions);

let currentQuestionIndex = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");




// Show question and options
function showQuestion() {
  if (currentQuestionIndex >= selectedQuestions.length) {
    showScore();
    return;
  }

  const q = selectedQuestions[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
//options
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => selectAnswer(opt, q.answer));
    optionsEl.appendChild(btn);
  });
}

// Select answer and move to next question automatically
function selectAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong! Correct answer: " + correct);
  }
  currentQuestionIndex++;
  showQuestion(); // auto next question
}

// Show final score
function showScore() {
  document.body.innerHTML = `
    <div class="score-container">
      <h2>Quiz Completed 🎉</h2>
      <p>Your Score: <strong>${score}</strong> / ${selectedQuestions.length}</p>
      <button class="retake-btn" onclick="location.reload()">Retake Quiz</button>
      <button class="retake-btn" onclick="window.location.href='concepts.html'">Go to Concepts</button>
    </div>
  `;
}


// Start quiz on page load
window.onload = showQuestion;
