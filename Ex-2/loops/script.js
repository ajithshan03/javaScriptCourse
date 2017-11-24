//Lectures: loops

var names  = ['ajith', 'prabhu', 'chidambaram'];
for (var i = 0; i < names.length; i++) { 
    console.log(names[i]);
}
for (var i = names.length - 1; i >= 0 ; i--) {
    console.log(names[i]);
}
//while loop
var details = ['student', 'ceo', 'designer'];
var i = 0;
while(i < details.length) {
    console.log(details[i]);
    i++;
}
//break statement
for (var i = 0; i < 10 ; i++) {
    console.log(i);
    if(i === 5) {
        break;
    }
}
//continue statement
for (var i = 10; i >= 0; i--) {
    if (i === 5) {
        continue;
    } else if (i === 2 ) {
        break;
    }
    console.log(i);
}










