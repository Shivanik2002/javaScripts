// const coding = ["ruby", "js", "python", "java"]

// const values = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// })

// console.log(values);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mynums.filter( (num) => num > 4)
const newNums = mynums.filter( (num) => {
    return num > 4
})

console.log(newNums);

//***************************************** */

const numbers = []

mynums.forEach( (num) => {
    if(num > 4) {
        numbers.push(num)
    }
} )

console.log(numbers);


//___________________________Practice______________________________

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", yearPublished: 1960, rating: 4.8 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", yearPublished: 1949, rating: 4.6 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", yearPublished: 1925, rating: 4.4 },
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", genre: "Magical Realism", yearPublished: 1967, rating: 4.5 },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", yearPublished: 1813, rating: 4.7 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", yearPublished: 1951, rating: 4.0 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", yearPublished: 1937, rating: 4.8 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", yearPublished: 1953, rating: 4.2 },
    { title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", yearPublished: 1851, rating: 3.9 },
    { title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", yearPublished: 1869, rating: 4.3 }
];

const userBooks = books.filter( (bk) => bk.genre === 'Historical' )
console.log(userBooks);

const Books = books.filter( (bk) => {
    return bk.yearPublished >= 1851 && bk.genre === "Fiction"
})
console.log(Books);


