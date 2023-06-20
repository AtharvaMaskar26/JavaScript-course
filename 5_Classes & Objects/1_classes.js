class RailwayForm {
    submit() {
        console.log(this.name + ": Your form is submitted for train number: " + this.trainNumber);
    }
    cancel() {
        console.log(this.name + ": Your form is cancelled for train number: " + this.trainNumber);
    }
    fill(name, trainNumber) {
        this.name = name;
        this.trainNumber = trainNumber;
    }
}

let harry = new RailwayForm()
harry.fill("Harry", 12221)
let rohan = new RailwayForm()
rohan.fill("Rohan", 12212)

harry.submit()
harry.cancel()
rohan.submit()
rohan.cancel()