import  {numArr, wordArr, arrSum, mixArr, myNum, five} from '../index';

describe("Jasmine sample", () => {

  
    it("toBe()", () => {
      expect(five).toBe(5);
    });
  
    it("toContain()", () => {
      expect(numArr).toContain(3);
    });
  
    it("toContain()", () => {
      expect(wordArr).toContain("cat");
    });
  
    it("should be in uppercase", () => {
      expect(mixArr).toEqual("HELLO, JASMINE!");
    });
  
    it("should not be an empty string", () => {
      expect(five).toBe(5);
    });

    it("should not be an empty string", () => {
        expect(myNum).not.toBe(five);
      });
  });
  