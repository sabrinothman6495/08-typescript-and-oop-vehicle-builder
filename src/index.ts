// import classes
import Truck from "./Classes/Truck.js";
import Car from "./Classes/Car.js";
import Motorbike from "./Classes/Motorbike.js";
import Wheel from "./Classes/Wheel.js";
import Cli from "./Classes/Cli.js";

// create arrays for each vehicle type
const trucks: Truck[] = [];
const cars: Car[] = [];
const motorbikes: Motorbike[] = [];

// create an array of vehicles
const vehicles: (Truck | Car | Motorbike)[] = [];

// TODO: uncomment once trucks are implemented
const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
//instance of truck 1


// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// TODO: uncomment once motorbikes are implemented
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// push vehicles to their respective arrays
trucks.push(truck1);
cars.push(car1);
motorbikes.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();