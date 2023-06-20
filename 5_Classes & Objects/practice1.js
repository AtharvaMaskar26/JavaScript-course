class ComplexNumber {
    constructor (realNumber, imaginaryNumber) {
        this.realNumber = realNumber;
        this.imaginaryNumber = imaginaryNumber;
    }

    add (num) {
        const realPart = this.realNumber + num.realNumber;
        console.log(`${this.realNumber} + ${num.realNumber}`)
        const imaginaryPart = this.imaginaryNumber + num.imaginaryNumber;
        console.log(`${this.imaginaryNumber} + ${num.imaginaryNumber}`)

        return new ComplexNumber(realPart, imaginaryPart);
    }
}

let a = new ComplexNumber(1, 2);
let b = new ComplexNumber(2, 3);

const sum = a.add(b);
console.log(sum);