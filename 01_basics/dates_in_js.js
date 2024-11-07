let myDate = new Date()
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(myDate.toJSON());

let myCreatedDates = new Date(2024, 0, 23)
console.log(myCreatedDates.toDateString());

let myCreatedDatess = new Date(2023, 0, 23, 6, 5)
console.log(myCreatedDatess.toLocaleString());


let myCreatedDate = new Date("2023-01-23")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday: "long"
})