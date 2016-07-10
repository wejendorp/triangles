// Hack to make the module work both in browser and Node:
const freeExports = typeof exports == 'object' && exports;

(function(root) {
  // Comparison function for Array.prototype.sort
  function compare(a, b) {
    return a - b;
  }
  // Only work on numbers
  function guard(a) {
    if (typeof a !== 'number') {
      throw new TypeError(`Got ${typeof a}, expected number.`);
    } else if (a <= 0) {
      throw new RangeError(`Got ${a}, expected value > 0`);
    }
    return a;
  }

  // No magic primitives:
  const EQUILATERAL = root.EQUILATERAL = 'EQUILATERAL';
  const ISOSCELES = root.ISOSCELES = 'ISOSCELES';
  const SCALENE = root.SCALENE = 'SCALENE';

  root.classify = function classify(a, b, c) {
    // classify triangle as given by numbers (a, b, c)
    // (number, number, number) -> enum[str]
    //
    const [min, mid, max] = [a, b, c].map(guard).sort(compare);

    // Triangle sides cannot connect
    const sanityCheck = min + mid - max > 0;
    if (!sanityCheck) {
      throw new Error('invalid triangle detected');
    }

    // sorting has given us min <= mid <= max
    // therefore min = max implies equilateral:
    if (min === max) {
      return EQUILATERAL;
    }
    // any equality means isosceles
    if (min === mid || mid === max) {
      return ISOSCELES;
    }
    return SCALENE;
  };
})(freeExports || (this.lib = {}));
