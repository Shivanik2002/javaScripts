const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heros = ["supeman", "flash", "batman"]

marvel_heroes.push(dc_heros)

console.log(marvel_heroes)
console.log(marvel_heroes[3][1])

const allHeros = marvel_heroes.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heroes, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("shivani"))
console.log(Array.from("shivani"))
console.log(Array.from({name:"shivani"}))   // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

  