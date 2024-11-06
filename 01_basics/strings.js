const name = "Shivani"
const repoCount = 50

// consle.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shivani')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,2)
console.log(anotherString);

const newStringOne = "  shivani    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://shivani.com/shivani%20kushwah"
console.log(url.replace('%20','_'))

console.log(url.includes('shiv'));
