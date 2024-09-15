let name = ['Jame', 'Make', 'Kate'];
let age = [40, 30, 20];
let city = ['Amsterdam', 'London', 'Berlin'];

console.log(`TASK1\nNames: ${name.join(', ')}\nAges: ${age.join(', ')}\nCities: ${city.join(', ')}`);

age[0] = 25;

console.log(`New age for the first user is ${age[0]}`);