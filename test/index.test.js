const {
  sum,
  convertToArray,
  removeDuplicate,
  stringReverse,
} = require("../index");
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
//Mocha.Suite
//teardown
// beforeEach
// afterEach
// before
// after
//skip,only
describe("here i test sum function", function () {
  // before(function(){
  //     console.log('before all test');
  // })
  //   beforeEach(function(){
  //         console.log('before each test');
  //     })
  //   after(function(){
  //       console.log('after all test');
  //   })
  // this.afterEach(function(){
  //       console.log('after each test');
  //   })
  //here we type test cases
  //if sum take 2 number ,should return sum of 2 numbers
  it("test if sum take 2 number ,should return sum of 2 numbers", function () {
    expect(sum(2, 3)).to.equal(5);
    // assert.equal(sum(2,4),6)
    // sum(2,3).should.equal(5)
  });

  //if sum take non number  ,should throw error
  it("test if sum take non number,should throw error ", function () {
    expect(function () {
      sum(4, "amira");
    }).to.throw(TypeError, "para must be number");
  });
  //if sum take no patameters  ,should throw error
  it("test if sum take no patameters  ,should throw error", function () {
    expect(function () {
      sum();
    }).to.throw(TypeError, "para must be number");
  });
});

describe("here i test convertToArray function ", function () {
  it("it passing numbers should return array countining numbers ", function () {
    expect(convertToArray(1, 2, 3)).to.deep.equal([1, 2, 3]);
  });
  it("test function should return array ", function () {
    assert.isArray(convertToArray(2, 3, 4));
  });

  it("test function should return array  with spacific value", function () {
    expect(convertToArray(2,3,4)).to.include(4)
  });
//chaining
  it("it passing numbers should return array countining numbers,test function should return array,test function should return array  with spacific value",function(){
    expect(convertToArray(1, 2, 3)).to.deep.equal([1, 2, 3]).to.be.an('array').to.include(2).lengthOf(3);
  })

});
describe("here i test removeDuplicate function ", function () {
  it("remove duplicate from array ", function () {
    expect(removeDuplicate([3, 4, 3, 6, 4, 7, 8])).to.deep.equal([
      3, 4, 6, 7, 8,
    ]);
  });
});
describe.skip("here i test stringReverse function ", function () {
  it("test should reverse string ", function () {
    expect(stringReverse('amira')).to.equal('arima')
  });
  it("test should return string ", function () {
    expect(stringReverse('amira')).to.be.a('string')
  });
});
