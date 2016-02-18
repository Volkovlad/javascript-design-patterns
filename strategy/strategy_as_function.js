/**
 * Created by Volkovlad on 18.02.2016.
 */

//can learn different types of greetings using strategy
var Greeter = function(strategy) {
    this.strategy = strategy;
};

//used for greeting
//using strategy, passed to the constructor
Greeter.prototype.greet = function() {
    return this.strategy();
};

//Strategies
var politeGreetingStrategy = function() {
    console.log("Hello.");
};

var friendlyGreetingStrategy = function() {
    console.log("Hey!");
};

var boredGreetingStrategy = function() {
    console.log("sup.");
};

//use
var politeGreeter = new Greeter(politeGreetingStrategy);
var friendlyGreeter = new Greeter(friendlyGreetingStrategy);
var boredGreeter = new Greeter(boredGreetingStrategy);

politeGreeter.greet();
friendlyGreeter.greet();
boredGreeter.greet();