console.log(`Hello world`);

// Create an array with a list of fruits starting with 3 fruit

// with that array now do the following
// - Add a new fruit to the end of the array
// - Display the array
// - Add a new fruit to the beginning of the array
// - Display the array
// - Remove the last fruit.
// - Display the array
//

let fruit = ['kiwi', 'mango', 'apple']

fruit.push('avocado')
console.log(fruit)
fruit.unshift('starfruit')
console.log(fruit)
fruit.pop()
console.log(fruit)
console.log(`This is reg display ${fruit} \nThis is spread ${fruit}`)
console.log(fruit.indexOf('mango'))
fruit.sort()
console.log(fruit)

const chickenEgg = ['🥚', '🐥'].sort().reverse()

console.log(`The ${chickenEgg[0]} came first`)