//coding challange 2
var years = [1995 , 1996 ,1997, 1998];

function printFullAge(years) {
    var emptyArray = [];
    for (var i = 0; i < years.length; i++) {
        var age = 2017 - years[i];
        emptyArray.push(age);
    }
        for (var i = 0; i < emptyArray.length; i++) {
        if (emptyArray[i] >= 18) {
            console.log('person ' + (i+1) + ' is age of ' + emptyArray[i] + ' and its a full age');
            emptyArray[i] = true;
        }else{
            console.log('person ' + (i+1) + ' is age of ' + emptyArray[i] + ' and its NOT a full age');
            emptyArray[i] = false;
        }
    }
    return emptyArray;
}
console.log(printFullAge(years));

var years = [2000, 2001, 2003,1915];

console.log(printFullAge(years));


