#!/usr/bin/node
const { argv } = require('node:process');

let count = 0;
argv.forEach(() => {
    count++;
});

if (count <= 2) {
    console.log('No argument');
} else {
    let index = 0;
    argv.forEach((arg) => {
        if (index >= 2) {
            console.log(arg);
        }
        index++;
    });
}
