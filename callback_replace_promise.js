

/*
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
*/

getUser(1)
    .then(user => gerRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commit => console.log('Commit: ', commit))
    .catch(err => console.log('Error: ', err.message))




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

    console.log('Calling Github API... for repos');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3', 'repo4'])
        }, 2000);
    })

}

function getCommits(repo) {
    console.log('Calling Github API...for commit');
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
