export class Promises {
  constructor() {
    this.promise = this.doAsync();
  }
  
  doAsync() {
    let p = new Promise( function(resolve, reject) {
      console.log('In promise code, wait..');
      setTimeout( () => {
        console.log('resolving first db call....');
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
        console.log('rejecting second db call....');
        reject('Database Error ;-)');
      }, 3000);
    });
    console.log('Other second code while Promise is still promising');
    return p2;
    
  }
  
  doAsync3() {
    let p3 = new Promise( function(resolve, reject) {
      console.log('In third promise code, wait..');
      setTimeout( function() {
        console.log('resolving third db call....');
        resolve('OK!');
      }, 3000);
    });
    console.log('Other third code while Promise is still promising');
    return p3;
    
  }
  
  doAsync4() {
    let anotherPromise = new Promise(function(resolve, reject) {
      console.log('In fourth B promise code, wait..');
      setTimeout( function() {
        console.log('resolving third db call....');
        reject('Not OK! :-(');
      }, 3000);
    })
    
    let p3 = new Promise( function(resolve, reject) {
      console.log('In fourth A promise code, wait..');
      setTimeout( function() {
        console.log('resolving third db call....');
        resolve( anotherPromise );
      }, 3000);
    });
    console.log('Other third code while Promise is still promising');
    return p3;
    
  }
  
}