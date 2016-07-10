// lib + chai from globals
const expect = chai.expect;

describe('classify', () => {
  describe('guards', () => {
    it('detects invalid types', () => {
      expect(() => lib.classify('0', '0', '0')).to.Throw(TypeError);
      expect(() => lib.classify(null, null, null)).to.Throw(TypeError);
      expect(() => lib.classify()).to.Throw(TypeError);
    });

    it('detects invalid triangles', () => {
      expect(() => lib.classify(0, 0, 0)).to.Throw(RangeError);
      expect(() => lib.classify(1, 1, 2)).to.Throw(Error, /invalid triangle/i);
      expect(() => lib.classify(1, 5, 10)).to.Throw(Error, /invalid triangle/i);
    });
  });

  it('detects EQUILATERAL', () => {
    for(let i = 0.001; i < 10; i += .01 ) {
      expect(lib.classify(i, i, i)).to.equal(lib.EQUILATERAL);
    }
  });

  it('detects ISOSCELES', () => {
    expect(lib.classify(1, 2, 2)).to.equal(lib.ISOSCELES);
    expect(lib.classify(2, 1, 2)).to.equal(lib.ISOSCELES);
    expect(lib.classify(2, 2, 1)).to.equal(lib.ISOSCELES);
  });

  it('detects SCALENE', () => {
    expect(lib.classify(2, 3, 4)).to.equal(lib.SCALENE);
    expect(lib.classify(3, 4, 5)).to.equal(lib.SCALENE);
    expect(lib.classify(4, 5, 3)).to.equal(lib.SCALENE);
  });
});

