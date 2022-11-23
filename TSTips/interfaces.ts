// Interfaces

interface Rectangle {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rectangle = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rectangle = {
  id: "12345",
  size: {
    width: 20,
    height: 25,
  },
};
rect2.color = "black";

const rect3 = {} as Rectangle;
// Add interface afterwards

const rect4 = <Rectangle>{};
// Old way of adding

// ===========================

interface RectWithArea extends Rectangle {
  getArea: () => number;
}
const rect5: RectWithArea = {
  id: "13",
  size: {
    width: 10,
    height: 5,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// ===============================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}
class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// ==============================

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
