import Driveable from "../interfaces/Driveable";

class Vehicle implements Driveable {
   started: boolean;
   currentSpeed: number;

    constructor() {
        this.started = false;
        this.currentSpeed = 0;

    }

    start () : void {
        this.started = true;
    console.log("Vehicle has started");

    }
    accelerate (change: number) : void {
        if(this.started) {
            this.currentSpeed += change;
            console.log(`Vehicle is accelerating by ${change} mph`);
        
        }
        else {
            console.log("Vehicle is not started");
        }
             
    }
        
   decelerate(change: number): void {
         if(this.started) {
              this.currentSpeed -= change;
              console.log(`Vehicle is decelerating by ${change} mph`);
         }
         else {
              console.log("Vehicle is not started");
         }
   } 
    stop(): void {
        if (this.started) {
            this.started = false;
            this.currentSpeed = 0;
            console.log("Vehicle has stopped");
        }
    }

    turn(direction: string): void {
        if(this.started) {
            console.log(`Vehicle is turning ${direction}`);
        }
        else {
            console.log("Vehicle is not started");
        }
    }
    reverse(): void {
        if(this.started) {
            console.log("Vehicle is reversing");
        }
        else {
            console.log("Vehicle is not started");
        }
        
    }
};
export default Vehicle;
