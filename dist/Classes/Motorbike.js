import Vehicle from './vehicle.js';
class Motorbike extends Vehicle {
    constructor(vin, color, make, model, year, weight, maxSpeed, wheels) {
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
