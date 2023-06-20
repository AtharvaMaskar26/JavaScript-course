class Employee {
    constructor (name) {
        this.name = name; 
    }
    login () {
        console.log(`${this.name} has logged in!`)
    }
    logout () {
        console.log(`${this.name} has logged out!`)
    }
    requestLeaves(leaves) {
        console.log(`${this.name} has requested ${leaves} leaves`)
    }
}

class Programmer extends Employee {
    // If there is not constructor in the child class then it directly inherits constructor from the parent class as it is


    requestCoffee (numberOfCoffees) {
        console.log(`${this.name} has requested ${numberOfCoffees} coffees`);
    }

    requestLeaves(leaves) {
        super.requestLeaves(4);
        console.log(`One extra leave granted`);
    }
}

let Atharva = new Employee("Atharva");
Atharva.requestLeaves(3);
// Atharva.requestCoffee(3);

let Rajan = new Programmer("Rajan");
Rajan.requestCoffee(4);
Rajan.requestLeaves(5);