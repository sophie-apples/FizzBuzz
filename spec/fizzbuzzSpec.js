describe("My fizzBuzz function", function() {
    
    beforeEach(function() {
        FizzBuzz = new fizzBuzz();
    });

    describe ("Checks number", function(){
        it ("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return Fizz if the number is divisible by 3", function() {
            var result = fizzBuzz(6)
            expect(result).toBe("Fizz");
        });

        it("should return number if the number is not divisible by 3", function() {
            var result = fizzBuzz(4)
            expect(result).toBe(4);
        });

        it("should return Buzz if the number is divisible by 5", function(){
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        })
        
        it("should return FizzBuzz if the number is divisible by 3 and 5", function(){
            var result = fizzBuzz(30)
            expect(result).toBe("FizzBuzz");
        })
        it("should return the input if the number is not a number", function(){
            var result = fizzBuzz("hello")
            expect(result).toBe("hello");
        })
        it("should return Buzz if the number is divisible by 5", function(){
            var result = fizzBuzz(-50)
            expect(result).toBe("Buzz");
        })
        it("should return FizzBuzz if the number is 0", function(){
            var result = fizzBuzz(0)
            expect(result).toBe("FizzBuzz");
        })
    });

});