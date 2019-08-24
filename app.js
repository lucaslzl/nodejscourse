const fs = require('fs')

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const utils = require('./utils.js')
const notes = require('./notes.js')


//fs.writeFileSync('notes.txt', 'This file was created by nodejs')
//fs.appendFileSync('notes.txt', '\nSee if it works')

console.log(utils(2, 3))
console.log(notes())
console.log(chalk.green.bold('Hello world!'))

console.log(process.argv[2])

command = process.argv[2]

if (command == 'add'){
	console.log('Adding')
} else if (command == 'remove'){
	console.log('Removing')
} else {
	console.log('Doing nothing')
}
