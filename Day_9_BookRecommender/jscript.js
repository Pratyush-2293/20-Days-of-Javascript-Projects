class bookDetails{
    constructor(bname, aname, pval){
        this.bookname = bname;
        this.authorname = aname;
        this.price = pval;

    }
}

let book1 = new bookDetails("Atomic Habits", "James Clear", 398);
let book2 = new bookDetails("The Alchemist", "Paulo Coelho", 230);
let book3 = new bookDetails("To Kill a Mockingbird", "Harper Lee", 253);
let book4 = new bookDetails("The Kite Runner", "Khaled Hosseini", 356);

var bookdata = document.getElementById("base");
const bookList = [book1, book2, book3, book4];

function newBook(){
    let x = Math.floor(Math.random() * 4)
    bookdata.innerHTML = 
    `
    Book Name: <br> ${bookList[x].bookname} <br> <br>
    Author Name: <br> ${bookList[x].authorname} <br> <br>
    Price: <br> &#8377;${bookList[x].price} <br> <br>
    `
}