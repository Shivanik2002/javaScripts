const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ____________________________Map_______________________________

// const newNums = mynums.map( (num)  => num + 10 )
// console.log(newNums);

// const newNums = mynums.map( (num)  => {return num + 10} )

const newNums = mynums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )

console.log(newNums);

//____________________________Reduce_______________________________

const numbers = [1, 2, 3, 4]

// const myTotal = numbers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc + currval
// }, 0)

const myTotal = numbers.reduce( (acc, currval) => acc + currval, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "C++ course",
        price: 2000
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "mobile dev course",
        price: 999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);