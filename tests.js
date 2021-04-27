// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });
// //
// //

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function ()  {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});


describe('isFive', function () {
    it('Should be a declared function', function () {
        expect(typeof isFive).toBe("function")
        });
    it('Should return "true" if the argument passed was 5', function () {
        expect(isFive(5)).toBe(true)
        });
    it('should return "false" if the argument passed was the string "5"', function () {
        expect(isFive("5")).toBe(false)
        
    });

});


describe('isEven', function(){
    it('Should be a declared function', function () {
        expect(typeof isEven).toBe("function")
    });
    it('Should return "true" if the argument passed was the number 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('Should return "false" if the argument passed the number 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return "true" if the argument passed was the number -4 ', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return "false" if the argument passed was the string "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return "false" if the argument called was Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when called with a boolean value', function () {
        expect(isEven(Boolean)).toBe(false)
    });
    it('should return false if no argument was passed', function () {
        expect(isEven()).toBe(false)
    });
});


describe('isVowel', function(){
    it('should be a declared function', function () {
        expect(typeof isVowel).toBe("function")
    });
    it('should return "true" if the argument passed was the letter "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return "true" if the argument passed was the letter "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return "false" if the argument passed was the letter "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return "false" if the argument passed was the number 4', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return "false" if passed a boolean value', function () {
        expect(isVowel("boolean")).toBe(false)
    });
    it('should return "false" if passed the string "banana"', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return "false" if no argument is passed', function () {
        expect(isVowel()).toBe(false)
    });
});