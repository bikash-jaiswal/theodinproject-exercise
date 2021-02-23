// constructor for Book objects
function Book(title, author, pageNo, status){
    this.title = title;
    this.author = author;
    this.pagesNo = pageNo;
    this.readStatus = status;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pagesNo} pages, ${this.readStatus}.`
    }
}

const thehobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

console.log(thehobbit.info())