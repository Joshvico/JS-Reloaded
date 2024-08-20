/* REVIEIWN OBJECTS VAR + define VAR */
let age = 32;
let UserName = "Max";
let hobbies = ["sport", "warhammer", "magic"];
let job = {
  title: "devloper",
  location: "denver'",
  salary: 5000,
};

let totalAdultYears;

function calculateAdultyears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultyears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultyears(age);
alert(totalAdultYears);

/* METHODS (funciton inside and object) */

let person = {
  name: "max",
  greet() {
    /* defining method does not require funciton KW */
    alert("hello there");
  },
};

person.greet();
