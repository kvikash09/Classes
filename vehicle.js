class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  vehicleDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}
class Car extends Vehicle {
  constructor(make, model, year, no_of_doors) {
    super(make, model, year);
    this.no_of_doors = no_of_doors;
  }
  vehicleDetails() {
    super.vehicleDetails();
    console.log(`No. of Doors: ${this.no_of_doors}`);
  }
}

// Create instances of Vehicle Class
const vehicle = new Vehicle("Nissan", "Altima", 2023, 4);

// Display Vehicle Details
console.log("Vehicle Details are:");
vehicle.vehicleDetails();

// Create instances of Vehicle Class
const car = new Car("Honda", "Accord", 2023, 4);

// Display Car Details
console.log("Car Details are:");
car.vehicleDetails();
