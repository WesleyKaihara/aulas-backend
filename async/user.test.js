const request  = require('supertest')
const server  = require('./server')
const { findUserByEmail } = require('./db/user')

jest.mock("./db/user.js")

test('should return 401 when login is invalid', async () => { 
  const response = await request(server)
    .post('/login')
    .send({
      email:"any@email.com",
      password: "anypassword"
    })

    expect(response.statusCode).toBe(401)
 })


 test('should return 200 when login is valid', async () => { 
  findUserByEmail.mockResolvedValue({
    email: "teste@email.com",
    password: "$2b$10$chJ416DORanXNznzJ.O6.uzVksotjVtegVYxplYxMjiBV02A21nEW"
  })

  const response = await request(server)
    .post('/login')
    .send({
      email:"teste@email.com",
      password: "abc12345"
    })

    expect(response.statusCode).toBe(200)
 })