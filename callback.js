/*

BEFORE

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
*/


//AFTER
console.log('Before');
const user = getUser(1, displayUser);


function displayUser(user) {
    getRepositories(user.gitHubUsername, displayRepos);
}

function displayRepos(repos) {
    getCommits(respo, displayCommits)
}

function displayCommits(commits) {
    console.log(commits);
}






function getUser(id) {
    const p = new Promise((resolve, reject) => {
        // Kick off an async work
        console.log('Reading the user from database...');
        setTimeout(() => {
            resolve({ id: id, gitHubUsername: 'nuwan' });
        }, 4000)
    });

    return p;
}

function gerRepositories(username) {

    console.log('Calling Github API...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3', 'repo4'])
        }, 2000);
    })

}

function getCommits(repo) {
    console.log('Calling Github API...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['commit'])
        }, 2000);
    })

}


/*
Asynchronous JavaScript have three patterns
1. Callbacks
2. Promises
3. Async/await
*/
