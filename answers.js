////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i < 21; i++) {
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i < 201; i += 2) {
    console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// Write a javascript application that logs all numbers from 1 - 100.
for (let i = 1; i < 101; i++) {
    console.log('fizz buzz', i)
}
// If a number is divisible by 3 log "Fizz" instead of the number.
for (let i = 1; i < 101; i++) {
    const value = i
    if(value % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
// If a number is divisible by 5 log "Buzz" instead of the number.
for (let i = 1; i < 101; i++) {
    const value = i
    if(value % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for (let i = 1; i < 101; i++) {
    const value = i
    if(value % 3 === 0 || value % 5 === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// translating the above into a object array for easier access to keys and values
const animals = [
    {
    name: "Wolfy",
    species: "wolf",
    age: 16,
    hometown: "Yukon Territory"
    },
    {
    name: "Sharky",
    species: "shark",
    age: 20,
    hometown: "Left Coast"
    },
    {
    name: "Plantee",
    species: "plant",
    age: 5000,
    hometown: "Mordor"
    },
    {
    name: "Porgee",
    species: "Porg",
    age: 186,
    hometown: "Ahch-To"
    },
    {
    name: "D'Art" ,
    species: "Demogorgan Dog",
    age: 2,
    hometown: "Upside Down"
    }
]
      
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
animals[2].age = (animals[2].age + 1)
console.log(animals[2])

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
animals[0].hometown = "Gotham City"
console.log(animals[0])

//Give D'Art a second hometown by adding "Hawkins"
animals[4].hometown = animals[4].hometown + ", Hawkins"
console.log(animals[4])

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
animals[0].name = "Gameboy"
console.log(animals[0])

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

//Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
for (names of ninjaTurtles) {
    console.log(names.toUpperCase())
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])
favMovies.sort()
console.log(favMovies)

favMovies.pop()
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)

favMovies.reverse()
console.log(favMovies)

console.log(favMovies.shift()) // this removes ** edit ** this puts it into a negative index (-1) ** the fist index and logs it - its like pop but the beginning and then you have it there to log

favMovies.unshift("Dazed and Confused") // this is like push but in the beginning of the array
console.log(favMovies)

console.log(favMovies.indexOf("Django Unchained")) // 15
favMovies.splice(15, 1, "Avatar")
console.log(favMovies)

console.log(favMovies.length / 2) // 9.5, lets use 9 as the middle index

const newFavMoviese = favMovies.slice(9) // creating a new array via slice function. naming it newFavMovies
console.log(newFavMoviese)

console.log(favMovies.indexOf("Guardians of the Galaxy")) // my Fast and Furious was never deleted.. trying for Guardians of the Galaxy, gave me -1
console.log(favMovies)
favMovies.pop()
console.log(favMovies)

console.log(favMovies.indexOf("Black Panther")) // -1 to confirm above

//thought question: its like changing a couch inside of a house! still a constant array, just things inside it are changing

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [                              // make a table
    [ 'Timmy', 'Frank' ],
    "Eggbert",
    [ 'Lucinda', 'Jacc', 'Neff', 'Snoop' ],
    [ 'Petunia', [ 'Baked Goods', 'Waldo' ] ]
  ]
whereIsWaldo.splice(1,1)  // removing "Eggbert" via the splice method. Eggbert is index 1 and we're deleting 1 index
console.log(whereIsWaldo)

// try to console.log "Neff"
console.log(whereIsWaldo[1][2])
// change to No One
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo)

// access and console Waldo
console.log(whereIsWaldo[2][1][1])


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


