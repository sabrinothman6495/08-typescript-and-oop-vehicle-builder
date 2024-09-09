// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
    // TODO: Create a constructor that accepts the properties of the Truck class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // TODO: The constructor should call the constructor of the parent class, Vehicle
        super();
        // TODO: The constructor should initialize the properties of the Truck class
        this.towingCapacity = towingCapacity;
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }
    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // TODO: Get the make an model of the vehicle if it exists
        const vehicleMake = vehicle.make;
        const vehicleModel = vehicle.model;
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`Towing ${vehicleMake} ${vehicleModel}`);
        }
        else {
            console.log(`The ${vehicleMake} ${vehicleModel} is too heavy to be towed`);
        }
    }
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        // TODO: The method should call the printDetails method of the parent class
        super.printDetails();
        // TODO: The method should log the details of the Truck
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight}`);
    }
}
// Export the Truck class as the default export
export default Truck;
