import Driveable from "../interfaces/Driveable";
class motorbike implements Driveable{
    started: boolean;
    currentSpeed: number;
    constructor(){
        this.started = false;
        this.currentSpeed = 0;
    }
    start(): void {
        this.started = true;
        console.log("Motorbike has started");
    }
    accelerate(change: number): void {
        if (this.started) {
            this.currentSpeed += change;
            console.log(`Motorbike is accelerating by ${change} mph`);
        } else {
            console.log("Motorbike is not started");
        }
    }
    decelerate(change: number): void {
        if (this.started) {
            this.currentSpeed -= change;
            console.log(`Motorbike is decelerating by ${change} mph`);
        } else {
            console.log("Motorbike is not started");
        }
    }
    stop(): void {
        if (this.started) {
            this.started = false;
            this.currentSpeed = 0;
            console.log("Motorbike has stopped");
        }
    }
    turn(direction: string): void {
        if (this.started) {
            console.log(`Motorbike is turning ${direction}`);
        } else {
            console.log("Motorbike is not started");
        }
    }
    reverse(): void {
        if (this.started) {
            console.log("Motorbike is reversing");
        } else {
            console.log("Motorbike is not started");
        }
    }
}
export default motorbike;
