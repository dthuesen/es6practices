export class Arrays {
  constructor() {
    
  }
  
  array1() {
    let array = Array(900);
    let array2 = Array('A String');
    console.log('ES5 Array(900).length              ', array.length)
    console.log('ES5 Array(900)                     ', array)
    console.log('ES5 Array("A String").length       ', array2.length)
    console.log('ES5 Array("A String")              ', array2)
  }
  
  array2() {
    let array = Array.of(900);
    let array2 = Array.of('A String');
    console.log('ES6 Array.of(900).length           ', array.length)
    console.log('ES6 Array.of(900)                  ', array)
    console.log('ES6 Array.of("A String").length    ', array2.length)
    console.log('ES6 Array.of("A String")           ', array2)
  }
  
  array3() {
    let array = Array.from(900);
    let array2 = Array.from('A String');
    console.log('ES6 Array.from(900).length         ', array.length)
    console.log('ES6 Array.from(900)                ', array)
    console.log('ES6 Array.from("A String").length  ', array2.length)
    console.log('ES6 Array.from("A String")         ', array2)
  }
  
  array4() {
    let amounts = [800, 810, 820];
    let salaries = Array.from(amounts, v => v + 100);
    console.log('salaries.length         ', salaries.length)
    console.log('salaries                ', salaries)
  }
  
  array5() {
    let salaries = [600, 700, 800, 1000];
    salaries.fill(900, 1, 3);
    console.log('salaries.length         ', salaries.length)
    console.log('salaries                ', salaries)
  }
  
  array6() {
    let salaries = [600, 700, 800, 1000];
    let result = salaries.find( value => value >= 750);
    console.log('result:       ', result)
  }
  
  array7() {
    let salaries = [600, 700, 800, 1000];
    let result = salaries.findIndex( value => value >= 750);
    console.log('result:       ', result)
  }
  
}