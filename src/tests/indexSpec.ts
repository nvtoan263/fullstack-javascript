import myFunc from '../index';
import {arr1, arr2} from '../index';

it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
});

it("expects arr1 to refer to arr2", () => {
    expect(arr1).toEqual(arr2);
});