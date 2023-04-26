const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;

  beforeEach(() => {
    word = new Word('aeroplane')
  })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.all.keys('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word).to.have.property('word');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const actual = word.removeVowels();

      expect(actual).to.equal('rpln');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const actual = word.removeConsonants();

      expect(actual).to.equal('aeoae');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word1 = new Word('school');
      const actual1 = word.pigLatin();
      const actual2 = word1.pigLatin();

      expect(actual1).be.equal('aeroplaneyay');
      expect(actual2).to.equal('oolschay');

    });
  });
});
