export class Iterators {
  constructor() {
    this.ids = [9000, 9001, 9002]
    this.it = this.ids[Symbol.iterator]();
    this.idMaker = {
      [Symbol.iterator]() {
        let nextId = 8000;
        return {
          next() {
            return {
              value: nextId++,
              done: false
            };
          }
        };
      }
    }
    this.hamburg = "Stadt";
  }
  
  log() {
    console.log(this.ids)
    console.log(typeof this.ids[Symbol.iterator])
    this.it.next()
    this.it.next()
    console.log(this.it.next())
    console.log(this.it.next())
    this.iterator1 = this.idMaker[Symbol.iterator]()
    console.log(this.iterator1.next().value)
    console.log(this.iterator1.next().value)
    console.log('----------------------------')
    
    for (let v of this.idMaker) {
      if (v > 8004) break;
      console.log(v);
    }
  }
  
}