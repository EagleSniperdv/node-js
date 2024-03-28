// test('hello world',() => {

// })

// test('error test',() => {
//     throw new Error
// })

const {
    calculateTip,
    celcFaren,
    farenCelc
    } = require('../src/math')

test('total + tip test ',() => {

    const total = calculateTip(10, .3)
    expect(total).toBe(13)

    // if (total !== 13) {
    //     throw new Error('wrong tip')
    // }
})

test('calculate with default tipPercent',() => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('calculate faren to celc',() => {
    const temp = farenCelc(32)
    expect(temp).toBe(0)
})

test('celc to faren', () => {
    const temp = celcFaren(0)
    expect(temp).toBe(32)

})