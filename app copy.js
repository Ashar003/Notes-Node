console.log('Starting app.js');

const fs = require('fs'); //I want to import the fs module and have it set equal to fs.
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();






var filteredArray = _.uniq(['Banana']);
console.log(filteredArray); //[ 'Akash', 1, 2, 3, 4 ]

/*
var res = notes.addNote();

console.log(_.isString(true));// false
console.log(_.isString('Akash')); //true

console.log(res); //console.log('New Note);
var Add = notes.add(5,6);
console.log(Add);

console.log('Result:', notes.add(30,-60)); //2nd way.


fs.appendFile('greetings.txt', `Hello ${user.username} !, You are ${notes.age}.`, function (err){ //File name, what you want to append, and callback function.
    if (err) {
        console.log('Unable to write to file');
    }
});
*/

