// let too: number = 15;

// let too1: number;
// let isChecked = false;
// too1 = 12;
// let firstName: string;
// let obj = { firstName: "boldo", age: 15 };

// firstName = obj.firstName;

// type StudentInfoType = {
//   name: string;
//   age: number;
// };

// let firstName: string = "boldo";

// interface ProductType {
//   prod_name: string;
//   price: number;
// }

// let products = [
//   { title: "iphone12", price: 1200, quantity: 12, origin: "USA" },
//   { title: "iphone13", price: 1200, quantity: 12, origin: "USA" },
//   { title: "iphone14", price: 1200, quantity: 12, origin: "USA" },
// ];

// const DoSomething = (): string => {
//   return "abc";
// };

// let regNum = "uk23232323";
// let name1 = "Boldo";

// function outerRegister(name1: string, regNum: string): string {
//   return "success";
// }

// interface classType {
//   studentNumbers: number;
//   teacherName: string;
// }

// interface StudentType {
//   name: string;
//   age: number;
//   gender: "Male" | "Female";
//   region: RegionType;
// }
// type RegionType = "USA" | "EU" | "Eastern Asia";

// let student: StudentType = {
//   name: "boldo",
//   age: 15,
//   gender: "Male",
//   region: "USA",
// };

interface StudentType {
  name: string;
  age: number;
}

let student: StudentType = {
  name: "boldo",
  age: 15,
};
console.log(student, "SSSS");

// Primitive type
//number,string,boolean,undefined,null,unknown,never

const n: number = 20;
console.log("Number", n);

//array type
const arr: number[] = [19, 29, 39];

//tuple type
const tup: [string, number] = ["dell", 1];
console.log("Tuple", tup);

//ENUM type
enum ApprovalStatus {
  approved,
  rejected,
  waiting,
}
const person2 = {
  name: "saarraaa",
  age: 30,
  status: ApprovalStatus.rejected,
};

//Union Type
let un: string | number | boolean = "Hello";

//Type alias
type StrOrNumOrBool = string | number | boolean;

let un2: StrOrNumOrBool = "Welcome";

//Sting literal
let paymentType: "QPAY" | "SPAY";
paymentType = "QPAY";

//Intersection type

//type casting => Type convert
let num = 100;
console.log("Num", num);

//Type infer
const ss = "Welcome";
let aa = "Hello";

type PersonType = {
  firstName: string;
  lastName: string;
  age: number;
};

const p1: PersonType = { firstName: "Bilguun", lastName: "Bilguun", age: 200 };

//interface ==> OOP

interface ICar {
  name: string;
  go: () => void;
}

interface IOperation {
  back: () => {};
  turnRight: () => {};
  turnLeft: () => {};
}

class Car implements ICar, IOperation {
  public name: "Car";
  private price: 90000000;

  constructor() {}
  go: () => {};
  back: () => {};
  turnRight: () => {};
  turnLeft: () => {};
}

function print1(msg: string | number): void {
  console.log(msg);
}

print1("aaa");

const p = print1("Welcome");
console.log(p);
