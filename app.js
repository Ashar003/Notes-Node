
const fs = require('fs'); //I want to import the fs module and have it set equal to fs.
const _ = require('lodash');
const yargs = require('yargs');

//Space between our files and imported modules.
const notes = require('./notes.js');

const titleOptions= {
        describe: 'Title of note', demand: true, alias: 't'
    };
const bodyOptions= {
        describe: 'Contents of note', demand: true, alias: 'b'
    };

const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
    .command('list', 'List All Notes')
    .command('read','Read a note', { 
        title: titleOptions

})
    .command('remove', 'Remove a Note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if ( command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log(`Your note was saved`);
        notes.logNote(note);
}
else {
    console.log('Note already exists');
}
}

else if ( command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
    }


else if ( command === 'read'){
   var getTheNote= notes.getNote(argv.title); //BE AWARE that properties exist on this var 'getTheNote'
    if(getTheNote){
        console.log("Note was found");
        notes.logNote(getTheNote);

    }
    else{
        console.log('Note does not exist');
    }
}

else if ( command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note Removed' : 'Note not found';
    console.log(message);
}

else{
    console.log('Command not recognized');
}



