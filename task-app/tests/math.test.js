// test('hello world',() => {

// })

// test('error test',() => {
//     throw new Error
// })

const {calculateTip} = require('../src/math')

test('total + tip',() => {

    const total = calculateTip(10,.3)

    if (total !== 13) {
        throw new Error('wrong tip')
    }
})