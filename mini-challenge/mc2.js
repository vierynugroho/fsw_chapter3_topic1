const fs = require('fs');
const isi = fs.readFileSync('data/log.txt', 'utf-8');
console.log(isi);
