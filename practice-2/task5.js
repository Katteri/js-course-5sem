console.log('\nTASK5');

let map = new Map();
map.set('name', 'Jonn');
map.set('age', 30);
map.set(1, true);

console.log('Map:', map);
console.log('The value of the last added element:',map.get(1));

map.delete('age');
console.log('Updated map', map);

