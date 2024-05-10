// ========== Task 1 ==========
let _college = "Butwal Kalika Campus"
let _course = "BCA"
let _student = "Manish Ghimire"

console.log(`
College : ${_college},
Course : ${_course},
Name : ${_student}`
);

console.log(typeof _course)
console.log(typeof true)

let is = 19 >= 18
console.log(is)

let num1 = 22
let num2 = num1 
console.log(num2)

num1 = 10
console.log(num2)

let _noData;
console.log(_noData) // undifined dynamic datatypes.
console.log(typeof null) // object
console.log(typeof NaN) // number
console.log(_college + ", " + _student) // add two string

// vars, let, const
console.log(_model)
var _model = "Ford"
// _model = "Duster"

// ========== Task 2 ==========
const collegeName = "Butwal Kalika Campus"
let isITFaculty = true
let stdName = "Manish Ghimire"
const stdRegNo = 205
const batch = 2022
console.log(`
========== Task 2 ========
    ${stdName} is studying in 
    ${collegeName} and 
    his registered number is ${stdRegNo}.`
)

// split 
let fullname = "Manish Kumar Ghimire"
let names = fullname.split(" ")
console.log(names) // Manish

// 
let num4;
if ("num4") {
    console.log(num4)
}

// find largest num
let a = 4, b = 9, c = 12
largest = (a > b) ? (a > c ? a : c) : (b > c ? b : c)
console.log(largest)