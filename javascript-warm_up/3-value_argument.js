#!/usr/bin/node
const { argv } = require('node:process');
if (argv[2] !== undefined) {
    console.log('No argument');
} else {
    argv.forEach((arg) => {
        console.log(arg);
    });
}
