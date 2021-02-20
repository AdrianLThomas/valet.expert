const { GetCleanPath } = require('./navigation')

describe('GetCleanPath()', () => {
    test('should return empty string when root path provided', () => {
        const expected = "";

        const actual = GetCleanPath("/");

        expect(actual).toEqual(expected);
    });
    
    test('should return last part of path when multiple levels provided', () => {
        const expected = "four";

        const actual = GetCleanPath("/one/two/three/four");

        expect(actual).toEqual(expected);
    })
});