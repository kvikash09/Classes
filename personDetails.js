class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}

// Create instances of the Person Class

let person1 = new Person("Viaksh", 26, "India");
let person2 = new Person("Mathew", 30, "Australia");

// Display Details of Person 1
console.log("Person-1 Details:");
console.log("-------------------");
person1.displayDetails();
console.log("===================");

// Display Details of Person 2
console.log("Person-2 Details:");
console.log("-------------------");
person2.displayDetails();
console.log("===================");
