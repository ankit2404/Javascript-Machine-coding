const name = {
    firstName : "Ankit",
    lastName : "Mittal"
}

function printFullName  (State) {
    console.log(this.firstName + " " + this.lastName + " Lives in " + State )
}

printFullName.call(name , "delhi", "mumbaoi") // call method

printFullName.apply(name , ["delhi"]) // aply method

const binded = printFullName.bind(name , "delhi")  // Bind method
binded()

//    PolyFill of bind method //


function printFullName2  (State, curentState) {
    console.log(this.firstName + " " + this.lastName + " Lives in " + State + " Now in " + curentState)
}
Function.prototype.myBind  = function(...args) {
    // console.log(...args);
    const fnName = this
    const param = args.slice(1)
    const fn = function (...args2) {
        fnName.apply(args[0], [...param, ...args2])
    }
    return fn
}

const poluFillBinder = printFullName2.myBind(name, "delhi");
poluFillBinder("Benagaluru")



// Polyfill for call method 

Function.prototype.customCall = function (obj = {}, ...args) {
 if(typeof this !== 'function'){
    return "Invalud arguments"
 }
 obj.fn = this
 obj.fn(...args)
};


function greet(age, city) {
  console.log( `Hello, I'm ${this.name}, ${age} years old from ${city}.`)
}

var person = { name: 'Ankit' };

greet.customCall(person, 24, 'Delhi')



// Polyfill for apply method 

Function.prototype.customApply = function (obj = {}, args) {
 if(typeof this !== 'function'){
    return "Invalud arguments"
 }
 obj.fn = this
 obj.fn(...args)
};


function greet(age, city) {
  console.log( `Hello, I'm ${this.name}, ${age} years old from ${city}.`)
}

var person = { name: 'Ankit' };

greet.customApply(person, [24, 'Mumbai'])
