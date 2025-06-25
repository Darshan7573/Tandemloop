const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]

const output = {}

for (let i = 1; i < arr.length; i++) {
    let counting = 0;
    for (let num of arr) {
        if (num % i === 0) {
            counting++;
        }
    }
    output[i] = counting
}

console.log(output)