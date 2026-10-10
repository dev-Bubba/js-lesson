/* 
	? Loops
	* allow us to run code repeatedly
	* they stop once a stop condition has been met
	* five ways of looping in JS (usually just two)
*/

/* 
	? For Loop
	* most popular
	* takes start, stop, step
		* start - placeholder
		* stop - the end of iterable
		* step - how many steps do we move per each iteration
	* iterator - a place in the loop
	* iterable - a value we can loop over
	
	? Syntax

	for (start; stop; step) {
		code block that runs for each iteration
	}
*/

for (let i = 0; i <= 10; i = i + 1) {
  //created variabe i, check if i is less than or equal to 5, if less than five add 1 to i and print to console until equal to 5
  console.log(i);
}

let alphabet = "the quick brown fox jumps over the lazy dog";

for (let i = 0; i <= alphabet.length; i++) {
  console.log(`Index: ${i} | Letter: ${alphabet[i]}`);
}

// this is because index starts at 0 and length starts at 1
console.log(alphabet[42], alphabet[43]);
// ! example of an off-by-one error (a logic error)

/* 
	? FizzBuzz Challenge
	* loop from 0 - 100
	* check if the number is:
		* divisible by 3, log Fizz
		* divisible by 5, log Buzz
		* divisible by 3 & 5, log Fizz Buzz
		* not divisible by either? return the number
*/

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}

// ? Infinite Loop, has no stop condition that gets satisfied
// ? kill with ctrl + C a bunch

// for (let i = 0; i >= 0; i++) {
// 	console.log(i)
// }

/* 
	? For In Loop
	* iterates over iterable objects
	* has no start, stop, or step
*/

let carInsurance = "kraftfahrzeughafplifchtversicherung";

for (i in carInsurance) {
  console.log(i);
}

/* 
	? Challenge
	* reverse a string
*/

let myString = "black";
let reversedString = "";

for (let i = myString.length - 1; i >= 0; i--) {
  console.log(myString[i]);
}

for (i in myString) {
  reversedString = myString[i] + reversedString;
}
console.log(reversedString);

/* 
	? For Of Loop
	* just like for in
	* doesn't give index
	* it gives the values
*/

let longWordPL = "konstantynopolitanczykowianeczka";

for (i of longWordPL) {
  console.log(i);
}

/* 
	? Challenge
	* if I wanted to keep track of an index in a for of
	* how would i do it? could i do it?
*/

let index = 0;

for (i of longWordPL) {
  console.log(i, index);
  index++;
}

/* 
	? While Loop
	* continue statement as expression
	* while (true) { do stuff in the code block }
	* expression going false is the stop condition
*/

let count = 0;

while (count <= 10) {
  count += 1;
  console.log(count);
}

/* 
	? Do While
	* i hate it
	* don't ask me to explain it
	* Jackson has a mug with it on
	* Imma smash it
*/

do {
  console.log("this does stuff");
  count += 1;
} while (count <= 10);

console.log(longWordPL);
/* 
	? Challenge
	* count the vowels in longWordPL
	* each time you encounter a vowel, store it
	* once counting is done, log the total number of vowels
	! Spicey Mode
	* return a longWordPL missing all of its vowels
	* return a longWordPL with its vowels only
*/

let vowels = "";
let totalVowels = 0;
let VowelLessWord = "";

for (i of longWordPL) {
  if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
    vowels += i;
    totalVowels++;
    index++;
  } else {
    VowelLessWord += i;
  }
}
console.log(vowels, totalVowels, VowelLessWord);

/* 
	? Palindrome Checker
	* palindrome is a word spelled out the same way forward and backward
	* racecar is a palindrome
	* return true/false if a word is a palindrome
*/

let word = "racecar";
let reveserdWord = "";

for (i in word) {
  reveserdWord = word[i] + reveserdWord;
}

if (reveserdWord === word) {
    console.log(true);
} else {
    console.log(false)
  }


