//Coding challange 1
var heightOfJohn = 170; //heights are said in centimeters
var ageOfJohn = 30;
var heightOfAjith = 184;
var ageOfAjith = 20;

var scoreOfJohn = heightOfJohn + ( 5 * ageOfJohn );
var scoreOfAjith = heightOfAjith + ( 5 * ageOfAjith );

if(scoreOfJohn > scoreOfAjith) {
    console.log('john is the winner! and his score is ' + scoreOfJohn);
} else {
    console.log('ajith is the winner! and his score is ' + scoreOfAjith);
}
//adding another player
console.log('Adding prabhu to the game');
var ageOfPrabhu = 33;
var heightOfprabhu = 193;

var scoreOfPrabhu = heightOfprabhu + ( 5 * ageOfPrabhu );

if (scoreOfPrabhu > scoreOfAjith && scoreOfJohn) {
    console.log('Prabhu is the winner! and his score is ' + scoreOfPrabhu);
} else {
    console.log('Prabhu is not the winner');
}




