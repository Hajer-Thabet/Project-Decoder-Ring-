// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;
describe("polybius", () => {
  it("should return 55 when given z", () => {
    let input = "z";
    let expected = "55";
    let actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return hello world when given 3251131343 2543241341", () => {
    let input = "3251131343 2543241341";
    let expected = "hello world";
    let encode = false;
    let actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("should return i or j to 42", () => {
    let input = "i j";
    let expected = "42 42";
    let encode = true;
    let actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    let input1 = "thinkful";
    let encode = true;
    let input2 = "THINKFUL";
    let actual = polybius(input1, encode);
    let expected = polybius(input2, encode);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when decoding", () => {
    let input = "3251131343 2543241341 3251131343 2543241341";
    let expected = "hello world hello world";
    let encode = false;
    let actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding", () => {
    let expected = "3251131343 2543241341 3251131343 2543241341";
    let input = "hello world hello world";
    let encode = true;
    let actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("should return false if number of digits is odd when decoding", () => {
    let input = "3251131343 254324134";
    let encode = false;
    let actual = polybius(input, encode);
    expect(actual).to.be.false;
  });
});
