const expect = require("chai").expect;
const caesar = require('../src/caesar');

describe("caesar", () => {
    it("should return false if the shift value is equal to 0", () => {
        const actual = caesar('lol', 0);
        expect(actual).to.be.equal(false);
    });
    it("should return false if the shift value is greater than 25", () => {
        const actual = caesar('lol', 26);
        expect(actual).to.be.equal(false);
    });
    it('should return false if shift is less than -25', () => {
        const actual = caesar('lol', -26);
        expect(actual).to.be.equal(false);
    });
    it('should return false if no shift is present', () => {
        const actual = caesar('lol');
        expect(actual).to.be.equal(false);
    });
    it('should encode message by shifting the letters', () => {
        const actual = caesar('thinkful', 3);
        expect(actual).to.be.equal('wklqnixo');
    });
    it('should leave spaces and symbols', () => {
        const actual = caesar('think ful?!', 3);
        expect(actual).to.be.equal('wklqn ixo?!');
    });
    it('should ignore capitals', () => {
        const actual = caesar('THINKFUL', 3);
        expect(actual).to.be.equal('wklqnixo');
    });
    it('should appropriately handle letters at the end of the alphabet', () => {
        const actual = caesar('zzz', 3);
        expect(actual).to.be.equal('ccc');
    });
    it('should allow a negative shift to the left', () => {
        const actual = caesar('ccc', -3);
        expect(actual).to.be.equal('zzz');
    });
});