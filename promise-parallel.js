const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Calling facebook API...');
        resolve({ id: 1000 });
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Calling Insta API...');
        resolve({ name: 'Nuwan' });
    }, 4000);
});


//Calling
Promise.all([p1, p2])
    .then(result => console.log(result));