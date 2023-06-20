class Animal {
    constructor (name) {
        this.name = name;
    }
    walk () {
        console.log(`${this.name} is walking`)
    }

    static capitalize (name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

const j = new Animal("jay");
let nameL = "atharva";
nameL = Animal.capitalize(nameL);
console.log(nameL);

j.walk();