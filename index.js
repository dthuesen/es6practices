// console.log('starting in index')
// import { projectId as Id, projectName } from './module1.js';
import { project, showProject, updateFunction } from './module1.js';
import { projectName } from './module1.js';
import { SoftwareProject } from './software-project.class.js';
import { Iterators } from './iterators.class.js'
import { Generators } from './generators.class.js'
import { Promises } from './promises.class.js'

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

console.log('\n\n---iterators---------------------------------\n\n')

let iterators = new Iterators();

iterators.log()

console.log(iterators)

console.log('\n\n---generators--------------------------------\n\n')

let generators = new Generators();

generators.log();

generators.forLoop();

generators.doProcess3();
generators.doProcess4();
generators.doProcess5();

console.log('\n\n---promises----------------------------------\n\n')

let promises = new Promises();

promises.doAsync2().then(function(value) {
  console.log('fulfilled ' + value);
}, 
function(reason) {
  console.log('Rejected! ' + reason);
});

promises.doAsync3().then(function(value) {
  console.log('fulfilled ' + value);
  return 'For sure!';
}, 
function(reason) {
  console.log('Rejected! ' + reason);
}).then(function(value) {
  console.log('Really? ' + value);
}, 
function(reason) {
  console.log('Rejected! ' + reason);
});

promises.doAsync4().then(function() { console.log('OK!') },
                         function() { console.log('NOPE!!!!') });
                         
let promise1 = new Promises().doAsync5();
let promise2 = new Promises().doAsync6();

Promise.all([promise1, promise2]).then(                        // <--- all Promises have to resolve. If one is rejected that then rejects all
  function(value) { console.log('OK: ' + value) },
  function(reason) { console.log('NOPE!: ' + reason) },
);

Promise.race([promise1, promise2]).then(                       // <--- the first resolved Promise wins the race, the next will be ignored.
  function(value) { console.log('OK: ' + value) },
  function(reason) { console.log('NOPE!: ' + reason) },
);




