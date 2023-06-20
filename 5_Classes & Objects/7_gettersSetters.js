class Animal {
    constructor(name) {
        this._name = name;
    }
    fly () {
        console.log("I am flying!");
    }

    get name () {
        return this._name;
    }
    set name (newName) {
        this._name = newName;
    }
}

let har = new Animal("Har");
console.log(har.name);
har.name = "Try"
console.log(har.name);
har.fly();