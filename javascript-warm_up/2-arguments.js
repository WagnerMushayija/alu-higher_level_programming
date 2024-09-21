#!/usr/bin/node
const { argv } = require('node:process');
const argsCount = argv.length;
if (argsCount === 0){
    console.log('No Argument');
}
else if (argsCount === 1){
    console.log('Argument found');
}
else {
    console.log('Arguments found');
}