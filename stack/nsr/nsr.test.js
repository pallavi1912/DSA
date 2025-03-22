const nsr = require('./nsr');

describe("NSR - Nearest Smaller Element", () => {
    test("Basic case", () => {
      expect(nsr([4, 8, 5, 2, 25])).toEqual([2, 5, 2, -1, -1]);
    });
  
    test("All increasing elements", () => {
      expect(nsr([1, 2, 3, 4, 5])).toEqual([-1, -1, -1, -1, -1]);
    });
  
    test("All decreasing elements", () => {
      expect(nsr([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, -1]);
    });
  
    test("Random order elements", () => {
      expect(nsr([3, 1, 6, 2, 5, 4])).toEqual([1, -1, 2, -1, 4, -1]);
    });
  
    test("Single element", () => {
      expect(nsr([7])).toEqual([-1]);
    });
  
    test("Repeated elements", () => {
      expect(nsr([2, 2, 2, 2])).toEqual([-1, -1, -1, -1]);
    });
  
    test("Mixed small and large numbers", () => {
      expect(nsr([10, 20, 15, 12, 18, 25, 30, 5])).toEqual([5, 15, 12, 5, 5, 5, 5, -1]);
    });
  
    test("Empty array", () => {
      expect(nsr([])).toEqual([]);
    });
  });