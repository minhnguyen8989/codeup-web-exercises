const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let userWithAtLeast3Languages = users.filter(function (language){
    return language.languages.length >= 3;
})
console.log(userWithAtLeast3Languages);


console.log("-----------------");
//Use .map to create an array of strings where each element is a user's email address
let userEmailArrayOfString = users.map(function (e){
    return e.email;
})
console.log(userEmailArrayOfString);





console.log("-----------------");
//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let usersTotalYear = users.reduce(function (totalYears, years){
    return totalYears + years.yearsOfExperience;
}, 0)
console.log("Total years experiens are: " + usersTotalYear);




console.log("-----------------");
//Use .reduce to get the longest email from the list of users.
let getEveryEmail = users.map(function (email){
    return email.email;
}, "")
let sortArray = getEveryEmail.sort(function (a, b){
    return b.length - a.length
})
console.log("The longest email is: " + sortArray[0]);


console.log("-----------------");
//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let stringNames = users.reduce(function (allNames, names){
    return allNames + names.name + ", ";
},"")
console.log(stringNames);



console.log("-----------------");
//Use .reduce to get the unique list of languages from the list of users.

let getUsersLanguage = users.reduce(function (totalLanguage, language){
    return totalLanguage + language.languages
},"")
let splitLanguage = getUsersLanguage.trim().split(',');

let uniqueLanguage = splitLanguage.filter(function (item, i, allItems){
    return i==allItems.indexOf(item);
})

console.log(uniqueLanguage);