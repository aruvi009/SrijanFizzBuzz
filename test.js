// Requiring module 
const assert = require('assert'); 
var expect  = require('chai').expect;
var request = require('request');
  
// We can group similar tests inside a describe block 
describe("Fizz Bizz Testing", () => { 
     
  // We can add nested blocks for different tests 
  describe( "User Input Validations", () => { 
    it('Check whether provided count is a number', function(done) {
        request('http://localhost:8000/printFizzBizz/abc' , function(error, response, body) {
            expect(body).to.equal('"\\"Count should be a number\\""');
            done();
        });
    });
    it('Check whether provided count is a positive number', function(done) {
        request('http://localhost:8000/printFizzBizz/-15' , function(error, response, body) {
            expect(body).to.equal('"\\"Count should be greater than 0\\""');
            done();
        });
    });
        
  });
  
  describe( "FizzBizz", () => { 
    it('Check whether Fizz is shown for count divisable by 3', function(done) {
        request('http://localhost:8000/printFizzBizz/3' , function(error, response, body) {
            expect(body).to.equal('"[1,2,\\"Fizz\\"]"');
            done();
        });
    });
    it('Check whether Buzz is shown for count divisable by 5', function(done) {
        request('http://localhost:8000/printFizzBizz/5' , function(error, response, body) {
            expect(body).to.equal('"[1,2,\\"Fizz\\",4,\\"Buzz\\"]"');
            done();
        });
    });

    it('Check whether FizzBuzz is shown for count divisable by 3 & 5', function(done) {
        request('http://localhost:8000/printFizzBizz/15' , function(error, response, body) {
            expect(body).to.equal('"[1,2,\\"Fizz\\",4,\\"Buzz\\",\\"Fizz\\",7,8,\\"Fizz\\",\\"Buzz\\",11,\\"Fizz\\",13,14,\\"FizzBuzz\\"]"');
            done();
        });
    });

        
  });  

});