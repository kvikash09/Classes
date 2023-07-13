class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calArea() {
    let area = this.width * this.height;
    console.log(`The Area of Rectangle is: ${area}`);
  }

  calPerimeter() {
    let perimeter = 2 * (this.width + this.height);
    console.log(`The Perimeter of Rectangle is: ${perimeter}`);
  }
}

// Create instances of Rectangle Class
const area = new Rectangle(15, 22);
const perimeter = new Rectangle(15, 22);

// Display Area of Rectangle
area.calArea();

// Display Perimeter of Rectangle
perimeter.calPerimeter();
