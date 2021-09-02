const expect = require("chai").expect;
const polybius = require('../src/polybius');

describe("polybius", () => {
    it("should encode a message by translating each number to number pairs", () => {
        const actual = polybius('abc');
        expect(actual).to.be.equal('112131');
    });
    it("should translate both 'i' and 'j' to '42", () => {
        const actual = polybius('ij');
        expect(actual).to.be.equal('4242');
    });
    it("should leave spaces as is", () => {
        const actual = polybius('i  j ');
        expect(actual).to.be.equal('42  42 ');
    });
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const actual = polybius('4211', false);
        expect(actual).to.be.equal('(i/j)a');
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const actual = polybius('4242', false);
        expect(actual).to.be.equal('(i/j)(i/j)');
    });
    it("should leaves spaces as is", () => {
        const actual = polybius('    42 42  ', false);
        expect(actual).to.be.equal('    (i/j) (i/j)  ');
    });
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius(' 42 422121 31  451', false);
        expect(actual).to.be.equal(false);
    });
});