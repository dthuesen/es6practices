export class Promises {
  constructor() {
    this.promise = this.doAsync();
  }
  
  doAsync() {
    let p = new Promise( function(resolve, reject) {
      console.log('In promise code, wait..');
      setTimeout( () => {
        console.log('resolving....');
        resolve(console.log('And resolved!'));
      }, 2000);
    });
    console.log('Other code while Promise is still promising');
    return p;
  }
  
  doAsync2() {
    let p2 = new Promise( function(resolve, reject) {
      console.log('In second promise code, wait..');
      setTimeout( function() {
        console.log('rejecting....');
        reject();
      }, 3000);
    });
    console.log('Other second code while Promise is still promising');
    return p2;
    
  }
  
}