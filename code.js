// helloWorld function 

// function helloWorld(){
//     return "Hello, world!";
// }







function sayHello(name) {
    if(name === true || name === false){
        return "Hello, World!"
    }else{
    return "Hello, " + name + "!";
    }
}

function isFive(num1){
    return num1 === 5;
}



function isEven(input){
    return input % 2 === 0;
}



function isVowel(input) {
    if (typeof input !== "string" ) {
        return false;
    }
    input = input.toLowerCase()
    return input === ("a" || "e" || "i" || "o" || "u");
}


