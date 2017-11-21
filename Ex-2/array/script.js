//Lecture: Array
var personDetail = ['Prabhu', 1984, 'ComputerEngineer', 'Singapore'];

personDetail.push('fromIndia');
console.log(personDetail);

personDetail.unshift('Sengal');
console.log(personDetail);

personDetail.pop();
console.log('Removing were he is from!');
console.log(personDetail);

personDetail.shift();
console.log('Removing his nickname!');
console.log(personDetail);


console.log('He is a Computer Engineer or not?');
if(personDetail.indexOf('ComputerEngineer') === -1) {
    console.log('He is not a ComputerEngineer!');
} else {
    console.log('He is a ComputerEngineer!');
}