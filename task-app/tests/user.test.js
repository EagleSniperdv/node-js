const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

beforeEach(() => {
    console.log('beforeEach')
    User.deleteMany()

})

afterEach(() => {
    console.log('afterEach')
})

test('test signup user',async () => {
    await request(app).post('/users').send({
        name:'Andrew',
        email:'andrew3@gmail.com',
        password:'andrew1977'
    }).expect(500)
})