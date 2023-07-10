const name1 = {
  firstName: "Sanju",
  lastName: "C S",
};
function printFullName(homeTown, age) {
  console.log(
    `${this.firstName} ${this.lastName} from ${homeTown} age is ${age}`
  );
}

const name2 = {
  firstName: "Kushal",
  lastName: "C S",
};
//CAll
printFullName.call(name1, "Bengaluru", 25);
printFullName.call(name2, "Tumkur", 20);

//APPLY
printFullName.apply(name1, ["Bengaluru", 25]);
printFullName.apply(name2, ["Tumkur", 20]);

//bind
let name3 = printFullName.bind(name1, "Bengaluru", 25);
let name4 = printFullName.bind(name2, "Tumkur", 20);

console.log(name3)
name3();
