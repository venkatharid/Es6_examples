const chalk = require('chalk')
const yargs= require('yargs')
const getNotes = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'Add anew note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: String
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type:String
        }
    },
    handler: (argv)=>{
        getNotes.addnotes(argv.title,argv.body)
    }

});

yargs.command({
    command: 'remove',
    describe: 'remove anew note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: String
        }
    },
    handler:(argv)=>{
        getNotes.removeNotes(argv.title)
    }

});


yargs.command({
    command: 'read',
    describe: 'read anew note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: String
        }
    },
    handler:(argv)=>{
        getNotes.readNotes(argv.title)
    }

});

yargs.command({
    command: 'listing',
    describe: 'listing a new note',
    handler: function(){
        console.log('listing a new notes!')
    }

});

yargs.parse();