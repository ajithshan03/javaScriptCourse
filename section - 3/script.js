///////////////////////////////////////
// Lecture: Hoisting

//In function declaration (it works)
calculateAge(1998);//called before it have been declared
function calculateAge(year){
    console.log(2017 - year);
}


//In functions expression(it won't work)
//retirement(1998) 
var retirement = function(year) {
    console.log(65 - (2017 - year));
}


//variables
console.log(age);
var age = 23;

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword



var ajith = {
    name : ajith,
    yearOfBirth : 1998,
    calculateAge : function(){
        console.log(2017 - this.yearOfBirth);
        function inner(){
            console.log("Its a inner function!");
            console.log(this);//It simply points out by "this" work in the function
        }
        inner();
    }
}
ajith.calculateAge();





