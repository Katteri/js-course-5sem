console.log('\nTASK4');

let set = new Set(['name1', 'name2', 'Ann', 'Jonn']);
console.log('Set:', set);

let added  = ['Mary', 'Luise', 'Tom', 'Mark'];
for (el of added) {
    set.add(el);
}
console.log('Updated set:', set);

set.delete(added[0]);
console.log(`Is ${added[0]} in the set? ${set.has('Mary')}\nLength of the set now is ${set.size}`);
