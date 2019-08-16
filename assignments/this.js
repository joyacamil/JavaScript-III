/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when `this` refers to the window object.
* 2. Implicit Binding is when `this` refers to the object before the dot.
* 3. New Binding is when `this` refers to the object that is made and returned by the constructor. 
* 4. Explicit Binding is when you use call() or apply(), 'this'  is being passed.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function topics(topic){
  return this;
};

// Principle 2

// code example for Implicit Binding
let learn = {
  learnIntro: 'today we wil be learning about',
  math: 'Counting',
  science: 'Body Parts',
  learnObjective: function(who) {
    console.log(`${who}, ${this.learnIntro} ${this.math} and ${this.science}!`);
  }
};
learn.learnObjective('Class');

// Principle 3

// code example for New Binding
function MeetTeacher(teacher) {
  this.greeting = 'Hello class,';
  this.teacher = teacher;
  this.speak = function() {
    console.log(`${this.greeting} today ${this.teacher} will be teaching you!`);
  }
};

const dee = new MeetTeacher('Ms. Dee');
const regus = new MeetTeacher('Mr.McCullen');
dee.speak();


// Principle 4

// code example for Explicit Binding

dee.speak.call(regus);