#!/usr/bin/node
const { argv } = require('node:process');
const arg = argv[2];

const num = parseInt(arg);

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
