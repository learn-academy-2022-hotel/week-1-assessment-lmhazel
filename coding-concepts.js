// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: tangerine magenta lilac daffodil indigo
// b) Verify and explain: I was wrong because I thought the built-in-method .push() adds whatever is in the parenthesis to the end of the array colors since it is placed before the built-in-method and then the output is the new array however I forgot that this built-in-method's output is the new length so it would be 5

// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: My answer was correct because the array has 10 elements in it and the built-in-method .length counts the number of elements in the array cohort before it and shows this number as the output

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: My answer was correct because the [4] is a built-in-method that finds what is at the index 4 of the array which is the o in "Hello World!" and displays this in the output

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: My answer was correct because line 33 assisgns "languages" as that entire list of codes. The following line assigns "index" to the value 1. In line 35, the console.log displays the index of the variable in number 1 location of the array languages which is Ruby

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: My answer was incorrect because the built-in-method toUpperCase is meant for strings and the array weekendDays is not a string

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: My answer was correct because I looked up the typeof operator and it said online that it returns the data type the variable is. Since dataTypes.length will return 4 because there are 4 variables in the array, the typeof returns as number because the data type of 4 is number 
