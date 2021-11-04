// Write your tests here!
const expect= require("chai").expect;
const {substitution}= require("../src/substitution");

describe("substitution", ()=>{
  it("should return false if alphabet length is less than 26",()=>{
    const input="hello";
    const alphabet="thinkful";
    const encode=true;
    const expected = false;
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });
      it("should return false if alphabet length is more than   26",()=>{
    const input="hello";
    const alphabet="thinkfulthankyouforeverything";
    const encode=true;
    const expected = false;
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });
    it("should return false if alphabet length=0",()=>{
    const input="hello";
    const alphabet="";
    const encode=true;
    const expected = false;
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });
     
 it("should return false if the alphabet parameter is not unique",()=>{
    const input="thinkful";
    const alphabet="abcabcabcabcabcabcabcabcyz";
    const encode=true;
    const expected =false;
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });
  
   it("should return the encoded or decoded message if alphabet length=26",()=>{
    const input="thinkful";
    const alphabet="xoyqmcgrukswaflnthdjpzibev";
    const encode=true;
    const expected ='jrufscpw';
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });
      it("should return the encoded or decoded message if the input is include spaces and it should be maintained throughout",()=>{
    const input="You are an excellent spy";
    const alphabet="xoyqmcgrukswaflnthdjpzibev";
    const encode=true;
    const expected ='elp xhm xf mbymwwmfj dne';
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });
 
    it("should return the encoded or decoded message if alphabet parameter is include special characters such as #, $, ect",()=>{
    const input="message";
    const alphabet="$wae&zrdxtfcygvuhbijnokmpl";
    const encode=true;
    const expected ="y&ii$r&";
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.eql(expected);
  });
    it("should return the encoded or decoded message if the input is include spaces and it should be maintained throughout",()=>{
    const input="You are an excellent spy";
    const alphabet="xoyqmcgrukswaflnthdjpzibev";
    const encode=true;
    const expected ='elp xhm xf mbymwwmfj dne';
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });

   it("should return the decoded message if the encode is false",()=>{
    const input="y&ii$r&";
    const alphabet="$wae&zrdxtfcygvuhbijnokmpl";
    const encode= false;
    const expected ="message";
    const actual= substitution(input, alphabet, encode)
   expect(actual).to.equal(expected);
  });
      it("should return the encoded or decoded message if the the input includes capital letters",()=>{
    const input1="Thinkful";
    const input2="thinkful"
    const alphabet="xoyqmcgrukswaflnthdjpzibev";
    const encode=true;
    const actual= substitution(input1, alphabet, encode)
    const expected =substitution(input2, alphabet, encode);
   expect(actual).to.equal(expected);
        
  });   
});