/**
 * Created by Volkovlad on 18.02.2016.
 */

function move() {
    if (state === 'walking') {
        // do some walk animation
    } else if (state === 'running') {
        // do some running animation
    } else if (state === 'swimming') {
        // do some swimming animation
    }
};

//refactor using 'Strategy pattern'

var Movement = function(func) {
    this.move = func;
};

Movement.prototype.execute = function() {
    this.move();
};

var Character = function(){
    this.changeMovementType = function (movement){
        this.movement = movement;
    };
    this.move = function () {
        this.movement.execute();
    }
};

var running = new Movement(function() {
    console.log("Hey I'm running!");
});

var walking = new Movement(function() {
    console.log("Just walking along...");
});

var robotlegs = new Movement(function() {
    console.log("Cruisin for oil...Look out humans!");
});

// Create a hero and walk through a peaceful forest...

var hero = new Character();

hero.changeMovementType(walking);
hero.move();

hero.changeMovementType(running);
hero.move();

hero.changeMovementType(robotlegs);
hero.move();