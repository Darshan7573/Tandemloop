class calculate {
    constructor(m, n, ops) {
        this.m = m;
        this.n = n;
        this.ops = ops;
    }

    calc() {
        switch (this.ops) {
            case "add":
            case "+":
                return this.m + this.n;
            case "subtract":
            case "-":
                return this.m - this.n;
            case "multiply":
            case "*":
                return this.m * this.n
            case "divide":
            case "/":
                if (this.n === 0) {
                    throw new Error("Cannot not divide by Zero")
                }
                return this.m / this.n
            default:
                throw new Error("Invalid operation")
        }
    }
}

const cal = new calculate(10, 5, "add")
console.log(cal.calc())