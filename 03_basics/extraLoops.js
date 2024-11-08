// for of

// ["", "",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Map   // special for unique value

const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map)

for (const [key, value]of map) {
    // console.log(key, ':-', value);
}

// for in loop

const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'Python'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const coding = ["ruby", "js", "python", "java"]

// coding.forEach(  function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { 
    console.log(item.languageName);
})