console.log('\nTASK1');

let user1 = {
    name: 'Anna',
    age: 30,
    city: 'Moscow'
};

console.log('user1', user1);

user1.age = 35;
user1.position = 'SEO';
delete user1.city;
console.log('changed user1', user1);

let user2 = {
    name: 'Mark',
    age: 45,
    city: 'Amsterdam'
};
console.log('user2', user2);

console.log(`The sum of ages is ${user1.age + user2.age}`);

