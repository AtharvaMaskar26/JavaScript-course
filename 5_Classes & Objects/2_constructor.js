class RailwayForm {
    constructor (name, trainNumber) {
        console.log("Constructor called..." + name + trainNumber);
        this.name = name;
        this.trainNumber = trainNumber;
    }

    submit() {
        console.log(this.name + ": Your form is submitted for train number: " + this.trainNumber);
    }
    cancel() {
        console.log(this.name + ": Your form is cancelled for train number: " + this.trainNumber);
    }
}

let harry = new RailwayForm("Atharva", 1221)
let rohan = new RailwayForm("Raj", 12222)

harry.submit()
harry.cancel()
rohan.submit()
rohan.cancel()