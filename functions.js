const returnTwo = () => {
    return 2
};

const greeting = (name) => {
     return `Hello, ${name}.`
};

const add = (num1, num2) => {
    return num1 + num2
};

// console.log(add(1,2))

module.exports = {
    returnTwo,
    greeting,
    add
};