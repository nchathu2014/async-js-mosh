//Block Type
console.log('Before');
console.log('After');

console.log('---------------------------------------');


//Non-Block Type
console.log('Before');
setTimeout(() => {
    console.log('I am in the middle');
}, 4000)
console.log('After');


console.log('---------------------------------------');


console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
    setTimeout(() => {
        console.log('Reading the user from database...');
        return { id: id, gitHubUsername: 'nuwan' }
    }, 4000)
}

/*
Asynchronous JavaScript have three patterns
1. Callbacks
2. Promises
3. Async/await
*/