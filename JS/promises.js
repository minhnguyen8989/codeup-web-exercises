
// const octokit = new Octokit({
//     auth: myGithubKey
// })
//
// await octokit.request(`https://api.github.com/users/minhnguyen8989/events/public`, {
//     username: 'USERNAME',
//     org: 'ORG',
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })
// console.log(octokit);

fetch(`https://api.github.com/users/minhnguyen8989/events/public`, {headers: {'Authorization': myGithubKey}})
    .then( res => res.json())
    .catch(error => console.log("oop! There is error"))
    .then(function (data){
        let myUserName = 'minhnguyen8989';
        let isItMeLogin = data.map(function (isItMeLogin){
            return  isItMeLogin.actor.login;
        })
        if (isItMeLogin === myUserName) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
        // console.log(data);
        // console.log(data[0].actor.login);
    })
