// import classes
import Truck from "./Classes/Truck.js";
import Car from "./Classes/Car.js";
import Motorbike from "./Classes/Motorbike.js";
import Wheel from "./Classes/Wheel.js";
import Cli from "./Classes/Cli.js";
import Vehicle from "./Classes/vehicle.js";

// create an array of vehicles
const vehicles: Vehicle[] = [];
const cars: Car[] = [];
const trucks: Truck[] = []; 
const motorbikes: Motorbike[] = [];


// TODO: uncomment once trucks are implemented
 const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

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

// TODO: uncomment once trucks are implemented
trucks.push(truck1);
cars.push(car1);
// TODO: uncomment once motorbikes are implemented
 motorbikes.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(cars);

// start the cli
cli.startCli();
