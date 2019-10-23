/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding - If none of the other rules apply the `this` keyword defaults to the window object. If you are in strict mode, however, the `this` keyword returns `unidentified.`
* 2. Implicit Binding - In this binding you simply look to the left of the dot to find what `this` is referring to.
* 3. Explicit Binding - Used throught the .call, .will, .apply, and ,bind keywords. Pass the object as the argument of the function being invoked to reference `this.`
* 4. New Binding - The `new` keyword is used to creat a new object and `this` refers to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//'use strict'; //<--This will make `pants` undefined.
function pants(){
    console.log(this.zipper);
}

var zipper = 'Hey I think your zipper is down...';

pants();

// Principle 2

// code example for Implicit Binding

let chef = {
    name: 'Mario',
    action: 'chops',
    object: 'customers',
    hat: function(){
        console.log(`${this.name} likes to ${this.action} his ${this.object}...`)
    }
}

chef.hat();

// Principle 3

// code example for New Binding

function goodMovie(idk){
    this.movie = idk;
}

let newGoodMovie = new goodMovie('A really good movie is "Hobbs and Shaw".');

console.log(newGoodMovie.movie);

// Principle 4

// code example for Explicit Binding

function moneyBands(){
    console.log(`${this.name} is ${this.type} most know for making ${this.song}.`);
}

let band1 = {
    name: 'Jack & Jack',
    type: 'a band',
    song: 'Beg',
}

let band2 = {
    name: 'Post Malone',
    type: 'an artist',
    song: 'White Iverson',
}

let band3 = {
    name: 'Kidz Bop',
    type: 'a band',
    song: 'cover songs for kidz with a z'
}

moneyBands.call(band1);
moneyBands.call(band2);
moneyBands.call(band3);