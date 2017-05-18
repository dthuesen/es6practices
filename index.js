// console.log('starting in index')
// import { projectId as Id, projectName } from './module1.js';
import { project, showProject, updateFunction } from './module1.js';
import { projectName } from './module1.js';
import { SoftwareProject } from './software-project.class.js';

showProject();
updateFunction();
showProject();

// project.projectId = 8000;

showProject();

class Task {
  constructor() {
    console.log('constructing tasks')
  }
  
  showId() {
    console.log('88');
  }
}

let task = new Task();
task.showId();

let software = new SoftwareProject();

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);
console.log(eventSymbol.toString());
console.log(eventSymbol);

let string = "AbCaá"
console.log(Array.from(string))

console.log(string)
console.log(string.normalize())


let s = 'NaN';
let nan = NaN; 

// old ES5 way
console.log(isNaN(s));
// returns true


// better ES6 way with .isNaN as a new Method to Number
console.log(Number.isNaN(s))
// returns false because it's a string

console.log(Number.isNaN(nan))
// returns true because it's correct when NaN is not a string

let number1 = '8000';

// ES5 way with global function
console.log(isFinite(number1));
// returns true even though it is a string

// ES 6 way
console.log(Number.isFinite(number1));
// returns false because it is a string


let number2 = 408.2;

// ES 6 way
console.log(Number.isInteger(number2));
// returns false 

