
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString= fs.readFileSync('notes-data.json');
         return JSON.parse(notesString);

    } catch(err) {
        return [];
    }
    

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = { 
        title,
        body

    };
    var duplicateNotes = notes.filter((note ) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;// Return the note to whoever called the function

    }
};




var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    //fetch notes
    var notes= fetchNotes();
    //use notes.filter to return a title whose matches the value passed in 
    var filteredNotes = notes.filter((note) => note.title === title);
    //return note
    return filteredNotes[0];

};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    //Break on this line and use repl to output note
    //use read command with title
        console.log("---");
        console.log(`Title ${note.title}`);
        console.log(`Body ${note.body}`);
};


module.exports = {
    addNote,// addNote:addNote (addNote function gets exported to be used in app.js)
    getAll,
    getNote:getNote, //getNote
    removeNote,
    logNote
};

