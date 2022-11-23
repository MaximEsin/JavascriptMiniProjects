// Types

const str: string = "Hello";

const isFetching: boolean = true;

const isLoading: boolean = false;

let int: number = 42;
// int = ''  Even let can not be changed

const float: number = 4.2;

const num: number = 3e10;

const numberArray: number[] = [1, 3, 5, 8, 13];
const numberArray2: Array<number> = [2, 4, 6, 10, 12];

const words: string[] = ["Hello", "Typescript"];

// Tuple     Can use multiple types
const contact: [string, number] = ["Max", +123456789];

// Any       Can use any type
let variable: any = 42;
variable = "String";
variable = [];

function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Heisenberg");

// Never        Shows that it(func) never finishes
function throwError(message: string): never {
  throw new Error(message);
}

function infinitr(): never {
  while (true) {}
}

// Type         Can create your own types
type Login = string;

const login: Login = "admin";
// const login2: Login = 2

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true
