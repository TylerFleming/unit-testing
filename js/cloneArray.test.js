const { expect } = require('@jest/globals')
const cloneArray = require('./cloneArray')


test('clone the given array', () => {
    const array = ['just', 'a', 'test']
    expect(cloneArray(array)).toEqual(array)
})