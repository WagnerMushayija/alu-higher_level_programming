#!/usr/bin/node
const { argv } = require('node:process');

let count = 0;
argv.forEach(() => {
    count++;
});

if (count <= 2) {
    console.log('No argument');
} else {
    argv.slice(2).forEach((arg) => {
        console.log(arg);
    });
}