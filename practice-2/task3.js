console.log('\nTASK3');

let arr = [435, 'cursus', 7, 23, 'consectetur'];
console.log(`The array is [${arr.join(', ')}]\nFirst element of array is '${arr[0]}'\nLast element of array is '${arr[arr.length - 1]}'`);

arr[1] = 'malesuada';
console.log(`Updated array is [${arr.join(', ')}]`);

let cparr = arr.slice();
console.log(`The first array is [${arr.join(', ')}]\nThe copied array is [${cparr.join(', ')}]`);

const merge = (arr1, arr2) => {
    // let arr = arr1.concat(arr2);
    let arr = []
    for (el of arr1) {
        arr.push(el);
    };
    for (el of arr2) {
        arr.push(el);
    }
    return arr;
}

let mergedarr = merge(arr, [1, 3, 4]);
console.log(`The merged array is [${mergedarr.join(', ')}]`);

let users = [{
    name: 'katt',
    age: 20
}, {
    name: 'jonn',
    age: 90
}, {
    name: 'ann',
    age: 50
}];

console.log('Users:', users);

const names = (arr) => {
    let res = [];
    for (item of arr) {
        res.push(item.name)
    };
    return res;
}
console.log(`Names of users is ${names(users).join(', ')}`)

const average = (arr) => {
    let sum = 0;
    for (el of arr) {
        sum += el;
    };
    return sum / arr.length;
}
console.log(`Average of [1, 2, 3] is ${average([1, 2, 3])}`);
