const accountId = 1444333
let accountEmail = "shivanitawny@gmail.com"
var accountPassword = "12345"
accountCity = "Ujjain"
let accountState;

// accountId = 2   // Not allowed

accountEmail = "sk2gmail.com"
accountPassword = "121212"
accountCity = "Indore"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
