//Lecture: Objects
var  student1 = {
    name : 'ajith',
    rollNo : 001,
    dept : 'cse'
}

console.log(student1.name);
console.log(student1.rollNo);

var student2 = new Object();
student2.name = 'prabhu';
student2.rollNo = 050;
student2.dept = 'cse';

console.log(student2['name']);
console.log(student2['rollNo']);

student1.dept = prompt('Enter the department to change');
student2.dept = prompt('Enter the department to change');
console.log(student1);
console.log(student2);

var studentOneName = 'name';
console.log(student1[studentOneName]);

