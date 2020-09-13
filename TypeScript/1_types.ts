const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Art', 123456789];

// Any
let variable: any = 42;
// ...
variable = 'New string'
variable = []

// =====
function sayMyName(name: string): void { // function will not return anything
  console.log(name)
}

sayMyName('testName');

// Never
function throwError(message: string): never { // function returns error
  throw new Error(message);
}
function infinite(): never { // or is infinite
  while(true) {
    // do smth
  }
}

// Type
type Login = string; // kind of aliaces

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = 'test';
// const id3: ID = true // error

type someType = string | null | undefined