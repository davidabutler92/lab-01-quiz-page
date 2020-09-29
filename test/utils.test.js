// IMPORT MODULES under test here:
import { countsAsYes } from '../counts-as-a-yes.js';

const test = QUnit.test;

test('the test will take a yes answer and return true', (expect) => {
    const yes = 'yes';
    const expected = true;
    const actual = countsAsYes(yes);
    expect.equal(actual, expected);
});
