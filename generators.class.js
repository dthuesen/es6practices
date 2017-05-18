export class Generators {
  constructor() {
    this.iterator2 = this.process();
  }
  
  *process() {
      yield 8001;
      yield 9001;
      yield 10001;
      yield console.log('After the numbers')
    }
  
  log() {
    console.log(this.iterator2.next());
    console.log(this.iterator2.next().value);
    console.log(this.iterator2.next().done);
    this.iterator2.next();
  };
  
  forLoop() {
    for (let id of this.process2()) {
      if (id > 204) break;
      console.log(id);
    }  
  }
  
  *process2() {
    let nextId = 200;
    while(true) 
      yield(nextId++);
  }
  
  *process3() {
    let result = yield;
    let result2 = yield;
    console.log(`result is ${result}`) 
    console.log(`result is ${result2}`)
  }
  
  doProcess3() {
    let it = this.process3();
    it.next();
    it.next(200);
    it.next('empty');
  }
  
  *process4() {
    let newArray = [yield, yield, yield, yield];
    console.log(newArray[2]);
  }
  
  doProcess4() {
    let it = this.process4();
    it.next();
    it.next(2);
    it.next('empty');
    it.next('42');
    it.next(43);
  }
  
  *process5() {
    try {
      yield 600;
      yield 601;
      yield 602;
    }
    catch(error) {
      console.log('Error in process5', error);
    }
  }
  
  doProcess5() {
    let it = this.process5();
    console.log(it.next().value);
    console.log(it.throw('foo'));
    console.log(it.next());
  }
}