const fs = require('fs');

console.log("Start");
const fileContent = fs.readFileSync('a.txt' , 'utf-8');
console.log(fileContent);

const fileContent2 = fs.readFileSync('Bootcamps/Web2/Javascript/01_Basics/b.txt' , 'utf-8');
console.log(fileContent2);
console.log("End");