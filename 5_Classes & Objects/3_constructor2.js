class RailwayForm {
    constructor (name, trainNumber, address) {
        this.name = name;
        this.trainNumber = trainNumber;
        this.address = address;
    }

    submit () {
        console.log(`form submitted for ${this.name} and train number ${this.trainNumber}`);
    }
    cancel () {
        console.log(`form cancelled for ${this.name} and train number ${this.trainNumber}`);
    }
    preview () {
        console.log(`Your name : ${this.name}
        Your Train number: ${this.trainNumber}
        Your address: ${this.address}`)
    }
}

let Atharva = new RailwayForm("Atharva", 1222333, "123 23213123");
Atharva.submit();
Atharva.preview();
Atharva.cancel();