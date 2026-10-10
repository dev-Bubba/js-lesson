// function declaration
function addNums(num1, num2) {
  return num1 + num2;
}

// function expression
let addNums = function (num1, num2) {
  return num1 + num2;
};

// concise body arrow function expression
// ? expression based.    => same as function keyword
let addNums = (num1, num2) =>
  typeof num1 === "number" && typeof num2 === "number" ? num1 + num2 : null;

// block body arrow function expression
let addUms = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
};

let somarr = [];
somearr.filter((i) => i === item);

somearr.filter(function (i) {
  if (i === item) {
    if (true) {
    }

    return i;
  }
});


const p = require("process");
console.log("Process ID of Node App: ", p.pid);

//setTimeout(() => {}, 50000);
let stamp1 = new Date().getMilliseconds();
let stamp2 = new Date().getMilliseconds();
let stamp3 = new Date().toISOString();
let stamp4 = new Date().toISOString();
console.log(stamp1);
console.log(stamp2);
console.log(stamp3);
console.log(stamp4);



