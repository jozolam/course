import { add } from './first';

describe('first test', () => {
    it('test', async () => {
        expect(add(1, 1)).toBe(2);
    });
});
