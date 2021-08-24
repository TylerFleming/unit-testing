const { expect } = require('@jest/globals')
const subtract = require('./subtract')

test('subtracts two numbers', () => {
    expect(subtract(5, 4)).toBe(1)
})