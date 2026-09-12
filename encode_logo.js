import { readFileSync } from 'fs';
const data = readFileSync('public/images/logo.png');
const b64 = data.toString('base64');
console.log(b64);
