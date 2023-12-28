const decoder = require("./decode");
const encoder = require("./encode");

const encoded = encoder("  Salom   1  ");
console.log(';',encoded,';');
const decoded = decoder(encoded);
console.log(';',decoded,';');
