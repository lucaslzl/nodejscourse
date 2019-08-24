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
	handler: function() {
		console.log('Adding a new note')
	}
})

yargs.command({
	command: 'remove',
	describe: 'remove a note',
	handler: function() {
		console.log('Removing a note')
	}
})

yargs.command({
	command: 'list',
	describe: 'List the notes',
	handler: function() {
		console.log('List the notes')
	}
})

yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: function() {
		console.log('Read a note')
	}
})

console.log(yargs.argv)
