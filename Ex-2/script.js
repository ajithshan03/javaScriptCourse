//functions
function calculatedAge(yearOfBirth) { 
    var age = 2017 - yearOfBirth;
    return age;
}
function retirementDetail(name, year) {
    var age = calculatedAge(year);
    var retirementIn = 65 - age;
    if(retirementIn >= 0) {
        console.log(name + ' is retiring in ' + retirementIn );
    } else {
        console.log(name + ' is already retirted');
    }
}

retirementDetail('ajith', 1998);