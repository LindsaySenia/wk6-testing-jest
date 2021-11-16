const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test('returnTwo should return 2', () => {
    expect(returnTwo()).toEqual(2);
});

describe('greeting tests', () => {
    test('test james', () => {
        expect(greeting('James')).toEqual('Hello, James.')
    });
    test('test jill', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    });
});

describe('add tests', () => {
    test('test 1 & 2', () => {
        expect(add(1, 2)).toEqual(3)
    });
    test('test 5 & 9', () => {
        expect(add(5, 9)).toEqual(14)
    });
});