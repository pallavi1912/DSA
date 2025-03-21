const ngl = require('./ngl');

describe('NGL - Nearest Greater to Left', () => {
    test('should return correct nearest greater elements to the left', () => {
        expect(ngl([10, 4, 2, 20, 40, 12, 30])).toEqual([-1, 10, 4, -1, -1, 40, 40]);
    });

    test('should return all -1 for strictly increasing sequence', () => {
        expect(ngl([1, 2, 3, 4, 5])).toEqual([-1, -1, -1, -1, -1]);
    });

    test('should return correct values for strictly decreasing sequence', () => {
        expect(ngl([5, 4, 3, 2, 1])).toEqual([-1, 5, 4, 3, 2]);
    });

    test('should return -1 for single element array', () => {
        expect(ngl([7])).toEqual([-1]);
    });

    test('should return empty array for empty input', () => {
        expect(ngl([])).toEqual([]);
    });

    test('should handle duplicate elements correctly', () => {
        expect(ngl([4, 4, 4, 4])).toEqual([-1, -1, -1, -1]);
    });
});