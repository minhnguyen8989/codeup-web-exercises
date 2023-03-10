(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: 'Minh',
        lastName: 'Nguyen',
    }
    console.log(person.firstName)
    console.log(person.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName;
    }
    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    for (var i = 0; i < 3 ; i++) {
        var amountEachPereson = shoppers[i].amount;
        var afterDiscount = parseInt(shoppers[i].amount) - (parseInt(shoppers[i].amount)*.12);
        if (amountEachPereson > 200 ){
            console.log("You are " + shoppers[i].name + "! You spend more than $200 today as your bill is: $" + shoppers[i].amount + ". After discount of 12%, your bill is now: $" + afterDiscount);
        } else {
            console.log("You are " + shoppers[i].name + "! No discount for you as you spend less than $200. Your bill is: $" + shoppers[i].amount);
        }
    }

    // Foreach loop
    shoppers.forEach(function (shopper,rank){
        var afterDiscount = parseInt(shopper.amount) - (parseInt(shopper.amount)*.12);
        if (shopper.amount > 200 ){
            console.log("Hello " + shopper.name + "! You spend more than $200 today as your bill is: $" + shopper.amount + ". After discount of 12%, your bill is now: $" + afterDiscount);
        } else {
            console.log("Hello " + shopper.name + "! No discount for you as you spend less than $200. Your bill is: $" + shopper.amount);
        }
    })




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title: "Java", author:{firstName: "Mike", lastName: "Tran"}},
        {title: "C#", author:{firstName: "Tony", lastName: "Nguyen"}},
        {title: 'Ruby', author: {firstName: 'Micky', lastName: 'Vo'}},
        {title: "Python", author: {firstName: 'Thomas', lastName: "Pham"}},
        {title: 'Flutter', author: {firstName: 'Alex', lastName: "Bui"}},
        {title: 'Im coding', author: {firstName: 'Minh', lastName: 'Nguyen'}}
        ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (var i = 1; i < 6; i++) {
        console.log("Book # " + i);
        console.log("Title: " + books[i - 1].title);
        console.log("Author: " + books[i - 1].author.firstName + " " + books[i - 1].author.lastName);
        console.log("---");
    }
    //foreach loop
    books.forEach(function (book,index){
        console.log("Book: #" + (parseInt(index) + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("*************")
    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, author) {
        return {
            title: title,
            author: author,
        };
    }
    var books = [createBook('Java', 'Mike'), createBook('C#', 'Tony')];

    function showBookInfo(input){
        for (var i = 0; i < 2 ; i++)
        console.log("Book title: " + input[i].title + ". And author is: " + input[i].author + ".")
    }

    console.log(showBookInfo(books));
})();