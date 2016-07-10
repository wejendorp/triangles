# Triangle
Minimal functional triangle classifier. Browser and Node compatible.

## classify `(a: number, b: number, c: number) -> enum:str`
Classifies a triangle defined by its three sides, `a, b, c` as natural numbers.

Return `EQUILATERAL | ISOSCELES | SCALENE`.

If the triangle is impossible, throws `Error`.

# Tests
To run the tests, installs mocha, chai and opn.

    $ npm install
    $ npm test
    $ npm run test-browser

# Discussion
The problem is sufficiently simple to be solved by a single function.
Using a pure function makes it easy to test, and possible to test the output with tools like
[https://en.wikipedia.org/wiki/QuickCheck](QuickCheck).

Javascript is used, simply for convenience and environment versatility.
Filtering out the types that would have been caught by the typechecker in a stronger language is needed and tested.
