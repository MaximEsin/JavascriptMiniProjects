class Car {
  constructor(name, color, topSpeed) {
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
    this.currentSpeed = 0;
  }

  zertoToSixty() {
    setTimeout(() => {
      console.log("that was fast!");
      this.currentSpeed = 60;
      console.log(this.currentSpeed);
    });
  }

  drive(speed = 10) {
    console.log("just drove 2 miles!");
    this.currentSpeed += speed;
    console.log(`driving at ${this.currentSpeed} mph`);
  }

  getCurrentSpeed() {
    return currentSpeed;
  }

  brake() {
    console.log("came to a screeching halt");
    this.currentSpeed -= 10;
    console.log(this.currentSpeed);
  }
  stop() {
    console.log("FULL STOP!");
    this.currentSpeed = 0;
    console.log(this.currentSpeed);
  }
}

const ferrari = new Car("ferrari", "red", 250);
console.log(ferrari.currentSpeed);
console.log(ferrari.name);
console.log(ferrari.color);
console.log(ferrari.topSpeed);
ferrari.drive();
ferrari.brake();
ferrari.zertoToSixty();
console.log(ferrari.currentSpeed);
ferrari.stop();

const porsche = new Car("porsche", "yellow", 200);
console.log(porsche.name);
console.log(porsche.color);
console.log(porsche.topSpeed);
[1, 2, 3, 4, 5].forEach((_) => porsche.drive());
porsche.zertoToSixty();

Array.prototype.myPush = function (item) {
  this[this.lenght] = item;
  return this;
};

const fruits = ["banana", "orange", "tangerine", "pear", "apple"];
fruits.myPush("kiwi");
console.log(fruits);
