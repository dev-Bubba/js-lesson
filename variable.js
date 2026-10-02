console.log('hello world')  

/* 
	? JavaScript (JS)
	* founded by Brandon Eich in 1995
	* runs in the browser, known as client-side
	* programming paradigms
		* functional
		* interpreted
		* object-oriented (kinda)
		* prototype-based language
	* imperative in instructions
*/

/* 
	? console.log()
	* log method on a console object
	* allows us to output into the terminal
	* when we run node somefile.js we create a process
	* process interprets the language and translates it into machine code for execution
*/

5+7
console.log(5+7)

/* 
	? Variable
	* building block of most programming languages
	* allows us to store data temporarily in memory
	* we can assign it, retrieve it, and modify it
	* analog: think of a storage box 
    * denoted by let, var, const 
    * can start with anything, but: 
        * numbers 
        * characters other than $ or _
*/

// vairale example 
// variable declaration
let exampleVariable
// let is a key word
// exampleVariable is an identifier

console.log(exampleVariable) // undefined 

// all variables have values
// if a value is not assigned, default is always undefinee

//  variable declaratioon + varable initialization 
let cohortName = "fullstack-12" 
console.log(cohortName)

// variables can be reassigned
exampleVariable = 'i jsut reassigned the value'
console.log(exampleVariable)

/*  
    ? JS runs top to bottom, left to right(*)
*/ 

// ? const - a variable that cannot be reinitialized (changed)
const myIP = '100.0.0.0'

// myIP = "12.222.24.24" // TypeError trying to reinitialize a const

console.log(myIP)

/*  
	? Variable Nomenclature 
	* lowercase 
	* snake-case (file names)
	* camelCase (variables)
	* Pascalcase (classes, new object instances, etc)
	* UPPERCASE (for constants that dont change)
*/