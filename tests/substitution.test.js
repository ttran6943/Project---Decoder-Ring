const expect = require("chai").expect;
const substitution = require('../src/substitution');

describe("substitution", () => {
    it("should return false if substitution alphabet is missing ", () => {
        const actual = substitution('abc');
        expect(actual).to.be.equal(false);
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution('abc', 'shorty');
        expect(actual).to.be.equal(false);
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const actual = substitution('abc', 'abcdefghijklmnopqrstuvwxzz');
        expect(actual).to.be.equal(false);
    });
    it("should encode a message by using the given substitution alphabet", () => {
        const actual = substitution('abc', '!@#defghijklmnopqrstuvwxyz');
        expect(actual).to.be.equal('!@#');
    });
    it("should encode with any key with unique characters", () => {
        const actual = substitution('abcdefg', '!@#^%><hijklmnopqrstuvwxyz');
        expect(actual).to.be.equal('!@#^%><');
    });
    it("should keep spaces", () => {
        const actual = substitution('abc de  fg', '!@#^%><hijklmnopqrstuvwxyz');
        expect(actual).to.be.equal('!@# ^%  ><');
    });
    it("should properly decode message with given substitution alphabet", () => {
        const actual = substitution('deo !y% !w %s#%++%wi urd', '!@#$%^&*()_+QWERTYUIOPASDF', false);
        expect(actual).to.be.equal('you are an excellent spy');
    });
    it("should decode with any key with unique characters", () => {
        const actual = substitution('!@# %><', '!@# %><hijklmnopqrstuvwxyz', false);
        expect(actual).to.be.equal('abcdefg'); 
    });
    it("should decode preserving spaces", () => {
        const actual = substitution(' !@ #^  %>   <    ', '!@#^%><hijklmnopqrstuvwxyz', false);
        expect(actual).to.be.equal(' ab cd  ef   g    '); 
    });
});