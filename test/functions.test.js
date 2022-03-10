// IMPORT MODULES under test here:
import { addExclamationPoints, 
    multiplyBySeven, // multiplyBy12ThenHalve, 
    // divideThenMultiply, returnAsAnArray, makeLuckyGreeting, getSecondItem, 
    // getLastItem,  getRandomNumber,
    myFunction,
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
    const expected = 21;

    const actual = multiplyBySeven(3 * 7);

    expect.equal(actual, expected);
});


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

