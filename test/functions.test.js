// IMPORT MODULES under test here:
import { addExclamationPoints, 
    multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, 
    returnAsAnArray, makeLuckyGreeting, getSecondItem, 
    getLastItem, getRandomNumber,
    // myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });

test('add !!! to the end of string', (expect) => {
    const expected = '' + '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected,);

});
test('multiplies number by 7', (expect) => {

    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('takes a number x12 and then divides in 1/2', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

test('Takes 3 numbers divides divides the 1st by the 2nd and then * by the 3rd', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});

test('returns 3 numbers as an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);
});

test('Returns sum of 2 numbers as "todays lucky number" ', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);
});

test('Return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected);
});

test('Return last item in an array', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected);
});

test('GetRandomNumber should be 1-5', (expect) => {
    
    
    
    const its12345 = actual === 1
    || actual === 2 
    || actual === 3
    || actual === 4
    || actual === 5;
    const actual = getRandomNumber();

    expect.equal(its12345, true);
});

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

