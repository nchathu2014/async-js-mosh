const promise = new Promise((resolve, reject) => {

    //Do a Asynchronous process 
    console.log('Working with Async operation...')
    setTimeout(() => {
        //resolve(1); // Pending => Resolved/Fulfilled
        reject(new Error('Something went Wrong')); // Pending => Rejected
    }, 4000);

});

promise
    .then(result => console.log('Result: ', result))
    .catch(err => console.log('Error: ', err.message));