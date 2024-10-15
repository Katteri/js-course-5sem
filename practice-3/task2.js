console.log('TASK2\n');

console.log('Function with callback:');

function fetchDataWithCallback(callback) {
    console.log('Fetching data...');

    setTimeout(() => {
        const data = {name: 'Data', id: 1};
        callback(null, data);
        //callback(new Error('Failed to fetch data'));
    }, 1000);
};

fetchDataWithCallback((error, data) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Data received:', data);
    }
});


setTimeout(() => {
    console.log('\nFunction with promise:');
}, 1500);

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        const data = {name: 'Data', id: 2};
        resolve(data);
        //reject(new Error('Failed to fetch data'))
    }, 2000);
});

promise.then(
    result => console.log('Data received:', result),
    error => console.log('Error:', error.message)
);


setTimeout(() => {
    console.log('\nFunction with async/await:');
}, 2500);

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Data", id: 3 };
            resolve(data);            
            //reject(new Error('Failed to fetch data'));
        }, 3000);
    });
};

async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchDataAsync();


async function fetchMultipleData() {
    console.log('Fetching multiple datasets...');

    const fetchData1 = fetchData();
    const fetchData2 = fetchData();
    const fetchData3 = fetchData();

    try {
        const results = await Promise.all([fetchData1, fetchData2, fetchData3]);
        console.log('All data received:', results);
    } catch (error) {
        console.error('Error while fetching data:', error.message);
    }
};

setTimeout(() => {
    console.log('\nParallel execution');
    fetchMultipleData();
}, 3500);



