//Lecture: Objects and methods
var  student1 = {
    name : 'ajith',
    rollNo : 1,
    dept : 'cse',
    bornOn : 1998,
    calculateAge : function(){
        this.age = 2017 - this.bornOn;
}
}

student1.calculateAge();
console.log(student1);

var student2 = {
    name : 'prabhu',
    rollNo : 100,
    dept : 'cse',
    bornOn : 1984,
    calculateAge : function(){
    return 2017 - this.bornOn;
}
}
var age = student2.calculateAge();
student2.age = age;
console.log(student2);   



