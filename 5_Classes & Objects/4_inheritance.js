class Animal {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }

    run () {
        console.log(`${this.name} is running!`);
    }

    shout () {
        console.log(`${this.name} is shouting`);
    }
}

class Monkey extends Animal {
    eatBanana () {
        console.log(`${this.name} is eating a banana`)
    }
}

const Har = new Monkey("Har", "brown")
Har.shout();
Har.eatBanana();

const ani = new Animal("Ani", "orange")
ani.run();