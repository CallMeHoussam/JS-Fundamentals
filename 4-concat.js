const argc = process.argv.slice(2);
const first = argc[0] || 'undefined';
const second = argc[1] || 'undefined';

console.log(`${first} is ${second}`);