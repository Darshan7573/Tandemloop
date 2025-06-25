const seriesNum = (a) => {
    const output = []
    for (let i = 0; i < a; i++) {
        output.push(2 * i + 1)
    }
    return output
}

const series = seriesNum(3)
console.log(series.join(','))