const {extract} = require("./arg");
const filter = require('./filter').filter;

const {pattern, count} = extract(process.argv);
const data = filter(pattern, count);
console.dir(data, {depth: null, colors: true});
