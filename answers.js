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


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


