
const octokit = new Octokit({
    auth: myGithubKey
})

await octokit.request('GET /users/{username}/events/orgs/{org}', {
    username: 'USERNAME',
    org: 'ORG',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})

console.log(octokit);