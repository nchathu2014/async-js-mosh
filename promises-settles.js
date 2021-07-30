/*
This is use to writing test cases. We can create already resolves promises
and already rejected promises.
*/


const resolvedPromise = Promise.resolve({ id: 100, name: "Nuwan" });
const rejectedPromise = Promise.reject(new Error('Error Message'));


resolvedPromise.then(rslt => console.log(rslt));
rejectedPromise.catch(err => console.log('Error: ', err));