/* ======= string ======= */

let personName: string = "Danbi";
console.log("String", personName);

function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

greet("Remi");

/* ======= number ======= */

let personAge: number = 32;
console.log("Number", personAge);

function Age(age: number): void {
  console.log(`I'm ${age} years old.`);
}

Age(31);

/* ======= boolean ======= */

let personIsFemale: boolean = true;
console.log("Boolean", personIsFemale);

function IsMale(isMale: boolean): void {
  console.log(`Are you Male? ${isMale}.`);
}

IsMale(false);

/* ======= null ======= */

type User = { id: number; name: string };
function findUser(id: number): User | null {
  const db: User[] = [
    { id: 1, name: "Danbi" },
    { id: 2, name: "Remi" },
  ];
  return db.find((u) => u.id === id) ?? null;
}
console.log(findUser(3));

/* ======= any ======= */

let userInput: any = 10;
console.log("Any", userInput);

function printInput(value: any): void {
  console.log("Any", value);
}

printInput(false);
