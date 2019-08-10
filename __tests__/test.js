const greet = require('../index')

describe('greet', () => {
  test('greets a user with a given name', () => {
    expect(greet('John Doe')).toEqual('Hello, John Doe')
  })
})
