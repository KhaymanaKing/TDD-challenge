// IMPORT MODULES under test here:
import { addExclamationPoints, 
    multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, 
    returnAsAnArray, makeLuckyGreeting, getSecondItem, 
    getLastItem, getRandomNumber,
    // myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('add !!! to the end of string', (expect) => {
    const expected = '' + '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected,);
    
    const expected2 = 'Oh no snakes' + '!!!';

    const actual2 = addExclamationPoints('Oh no snakes');

    expect.equal(actual2, expected2,);

    const expected3 = 'Oh look a third test' + '!!!';

    const actual3 = addExclamationPoints('Oh look a third test');

    expect.equal(actual3, expected3,);


});
test('multiplies number by 7', (expect) => {

    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);

    const expected2 = 7;

    const actual2 = multiplyBySeven(1);

    expect.equal(actual2, expected2);

    const expected3 = 700;

    const actual3 = multiplyBySeven(100);

    expect.equal(actual3, expected3);
});

test('takes a number x12 and then divides in 1/2', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);

    const expected2 = 48;

    const actual2 = multiplyBy12ThenHalve(8);

    expect.equal(actual2, expected2);

    const expected3 = 96;

    const actual3 = multiplyBy12ThenHalve(16);

    expect.equal(actual3, expected3);

});

test('Takes 3 numbers divides divides the 1st by the 2nd and then * by the 3rd', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = 20;

    const actual2 = divideThenMultiply(28, 7, 5);

    expect.equal(actual2, expected2);

    const expected3 = 210;

    const actual3 = divideThenMultiply(14, 2, 30);

    expect.equal(actual3, expected3);
});

test('returns 3 numbers as an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected2 = [12, 4100, 8];

    const actual2 = returnAsAnArray(12, 4100, 8);

    expect.deepEqual(actual2, expected2);

    const expected3 = [-1, 48, 500000000000];

    const actual3 = returnAsAnArray(-1, 48, 500000000000);

    expect.deepEqual(actual3, expected3);
});

test('Returns sum of 2 numbers as "todays lucky number" ', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 205.';

    const actual2 = makeLuckyGreeting(102, 103);

    expect.equal(actual2, expected2);

    const expected3 = 'Hello! Your lucky number for the day is -5.';

    const actual3 = makeLuckyGreeting(-2, -3);

    expect.equal(actual3, expected3);
});

test('Return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected);

    const expected2 = 'pizza';

    const actual2 = getSecondItem(['kung fu', 'pizza', '40s', 'Friday Night']);

    expect.deepEqual(actual2, expected2);

    const expected3 = 'doggies';

    const actual3 = getSecondItem(['kitties', 'doggies', 'fishies', 'horse']);

    expect.deepEqual(actual3, expected3);




});

test('Return last item in an array', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected);

    const expected2 = 'almonds';

    const actual2 = getLastItem(['spiders', 'snakes', 'umbrella', 'almonds']);

    expect.deepEqual(actual2, expected2);

    const expected3 = 'cleric';

    const actual3 = getLastItem(['fighter', 'wizard', 'monk', 'cleric']);

    expect.deepEqual(actual3, expected3);

});

test('GetRandomNumber should be 1-5', (expect) => {
    const actual = getRandomNumber();
    
    const its12345 = [1, 2, 3, 4, 5].includes(actual);
    
    

    expect.equal('number', typeof actual);
    expect.equal(its12345, true);
});

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

