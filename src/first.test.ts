import { add } from './first';

describe('first test', () => {
    it('test', async () => {
        expect(add(1, 1)).toBe(2);
    });

    it.each([
        [ 1, 1, 2 ],
        [ 1, 2, 3 ],
        [ 2, 1, 3 ],
    ])('returns the result of adding %s to %s', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    });
});
