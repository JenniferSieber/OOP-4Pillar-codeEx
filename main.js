// Class Objects utilizing 4 Pillars of OOP
// Encapsulation, Abstraction, Inheritance, Polymorphism
class Mammals {
  constructor(name, breed, sound) {
    this._name = name
    this._breed = breed
    this._sound = sound
  }

  get name() {
    return this._name
  }
  get breed() {
    return this._breed
  }
  get sound() {
    return this._sound
  }
  
  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}

class Dog extends Mammals {
  constructor(name, breed, sound) {
    super(name, breed, sound)
  }
  
  speak() {
    super.speak()
    console.log(`Dogs like ${this.name} speak by ${this.sound}`)
  }
}

class Cat extends Mammals {
  constructor(name, breed, sound) {
    super(name, breed, sound)
  }
  
  speak() {
    super.speak()
    console.log(`Cats like ${this.name} sound like ${this.sound}`)
  }
}

let woofie = new Dog('Woof', 'Collie', 'WOOF WOOF')

let meow = new Cat('Meow', 'Siamese', 'Meow Meow')

let butterball = new Cat('Butterball', 'Tabby', 'MeeeeYowwww')

let animals = [woofie, meow, butterball]

for (a of animals) {
  a.speak()
}
