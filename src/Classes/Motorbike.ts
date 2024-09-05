import Vehicle from './vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  maxSpeed: number;
  wheels: Wheel[];

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, maxSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.maxSpeed = maxSpeed;
    this.wheels = wheels;
  }

  performAction() {
    console.log(`The ${this.make} ${this.model} motorbike is speeding through traffic.`);
  }
}

export default Motorbike;