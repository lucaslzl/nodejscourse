const fs = require('fs')

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const utils = require('./utils.js')
const notes = require('./notes.js')


/* Write files */
// fs.writeFileSync('notes.txt', 'This file was created by nodejs')
// fs.appendFileSync('notes.txt', '\nSee if it works')

/* Print and call another code */
// console.log(utils(2, 3))
// console.log(notes())
// console.log(chalk.green.bold('Hello world!'))

/* Implement parameters */
// command = process.argv[2]

yargs.version('1.1.0')

yargs.command({
	command: 'add',
	describe: 'add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Text to save',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.addNote(argv.title, argv.body)
	}
})

yargs.command({
	command: 'remove',
	describe: 'remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
	},
	handler: (argv) => {
		notes.removeNote(argv.title)
	}
})

yargs.command({
	command: 'list',
	describe: 'List the notes',
	handler: () => {
		notes.listNotes()
	}
})

yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
	},
	handler: (argv) => {
		notes.readNote(argv.title)
	}
})

yargs.parse()
