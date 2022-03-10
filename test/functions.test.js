// IMPORT MODULES under test here:
import { addExclamationPoints, 
    multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, 
    // returnAsAnArray, makeLuckyGreeting, getSecondItem, 
    // getLastItem,  getRandomNumber,
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

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

