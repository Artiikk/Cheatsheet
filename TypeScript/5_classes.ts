class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string // can be rewrited only with the constructor
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly nubmerOfWheels: number = 4
  constructor(readonly model: string) {}
}

// =======
// private - only inside class
// protected - for classes and their subclasses
// public - everywhere

class Animal {
  protected voice: string = ''
  public color: string = 'black'

  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice
    // this.go() // Property 'go' is private and only accessible within class 'Animal'.
  }
}

const cat = new Cat();
cat.setVoice('test');

console.log(cat.color);
// cat.voice // Property 'voice' is protected and only accessible within class 'Animal' and its subclasses

// ================
// we can inherit from abstract classes, all methods must be implemented
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'This is info';
  }
}