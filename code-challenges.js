// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
//Create a function called bigFruit which assesses two strings (fruit1 and fruit2) by the number of characters in the string. The built-in-method (.length) quantifies how many characters are in fruit1 as well as fruit2. A condition is created where if fruit1 is > fruit 2, the output will be "fruit1". Another condition is created where if fruit2 is > fruit 1, the output will be "fruit2". The string with more characters in it will be the output of the function.  
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

//Function
const bigFruit = (fruit1, fruit2) => {
    if(fruit1.length > fruit2.length){
        return `${fruit1} has  more characters than ${fruit2}`
    } else if(fruit1.length === fruit2.length){
        return `${fruit1} has the same amount of characters as ${fruit2}`
    } else {
        return `${fruit2} has more characters than ${fruit1}`
    }

}
//console.log(bigFruit(fruit1, fruit2))
//output: banana has more characters than apple

// console.log(bigFruit(fruit3, fruit4))
// output:cherry has more characters than kiwi

// console.log(bigFruit(fruit2, fruit3))
// output: banana has the same amount of characters as cherry

// console.log(bigFruit("watermelon", "grape"))
// output: watermelon has more characters than grape


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// creates a function called boilingPoint that takes in a set of string called temp1, temp2, or temp3 and assess if the string is below boiling point (< 212), at boiling point (== 212), or above it (> 212). This is done using a condition that compares the string to 212 (boiling point). The output is based on this comparison and states if the string is below, at, or above boiling point.

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

//Function
const boilingPoint = (temp1) => {
    if(temp1 > 212){
        return `${temp1} is above boiling point`
    } else if(temp1 == 212){
        return `${temp1} is at boiling point`
    } else {
        return `${temp1} is below boiling point`
    }

}
//console.log(boilingPoint(temp1))
//output: 42 is below boiling point

//console.log(boilingPoint(temp2))
//output: 350 is above boiling point

//console.log(boilingPoint(temp3))
//output: 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//create an array called padresScore that uses the built-in-method .concat to put different strings called padres1984WorldSeriesRuns and padres1998WorldSeriesRuns combines them. The output will be the number when combining the arrays.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

//Function
let padresScore = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))

//console.log(padresScore.length)
//output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 
//create a code where the variable currentCohort is assigned as the string "Hotel 2022". Then the variable splitWord is assigned to currentCohort with the split method using quotation marks to turn it into an array with each element being a variable. The built-in-method reverse is applied to splitWord in order to reverse the variables. Then the join built-in-method is applied to splitWord with the quotation marks as the argument in order to remove the quotation marks between the variables to make it into a string. The result is the original string but backwards.

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

//Function
var splitWord = currentCohort.split("")
splitWord.reverse()
console.log(splitWord.join(""))

//output: 2202 letoH


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//First, create a variable that is called lastIndex that is assigned to use the array .lastIndefOf that finds the index of the last value given from the values from myNumbers. givenValue1 or givenValue 2 is input according to what value is being tested. The output is the index of the last occurance of givenIndex1 or givenIndex2.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

//Function
let lastIndex = (myNumbers.lastIndexOf(givenValue1))
//console.log(lastIndex)
//output: 7

//let lastIndex = (myNumbers.lastIndexOf(givenValue2))
//console.log(lastIndex)
//output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//create a code that takes the numbers in an array (example, sanDiegoSummerTemperatures and sanDiegoWinterTemperatures) and reassigns them as the variable largeSmall. Using .sort(), the output will display the numbers from the array from largest to smallest. 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


//Function
var largeSmall = sanDiegoSummerTemperatures
//console.log(largeSmall.sort())
//output:[82, 80, 79, 77, 76, 73, 72]

var largeSmall = sanDiegoWinterTemperatures
//console.log(largeSmall.sort())
//output: [68, 67, 66, 66, 62, 59, 59]s
