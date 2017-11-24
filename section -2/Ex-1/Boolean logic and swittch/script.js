/*//Lecture: If/Else Statement
var name = 'ajith';
var isMarried = false;

if (isMarried === true) {
    console.log(name + ' is married :)');
} else {
    console.log(name + ' is hopeflly married soon!');
   
}
// comparision with ==
isMarried = true;
var familyDetail = 0;
console.log('Is ' + name + ' has child?');
if(familyDetail == false) {
    console.log(name + ' has no child');
} else {
    console.log(name + ' has child');
}
*/
//Lecture: Boolean logic and switch
var age = 20;
if(age <= 20) {
    console.log('prabhu is a teenager.');
} else if(age > 20 && age <= 30) {
    console.log('prabhu is a young man.');
} else {
    console.log('prabhu is a man.')
}

var job;
job = prompt('what does prabhu do?');
switch (job) {
    case 'teacher' :
        console.log('prabhu is a teacher');
        break;
    case 'programmer' :
        console.log('prabhu is a computer engineer');
        break;
    default:
        console.log('prabhu does something else');
}









































