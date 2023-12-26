//задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.type = null;
		this.state = 100;
	}

	fix() {
		this.state *= 1.5;
		if (this.state > 100) {
			this.state = 100;
		}
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

//задача 2

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {

		for (let book of this.books) {
			if ((type === 'name' && value === book.name) || (type === 'author' && value === book.author) || (type === 'releaseDate' && value === book.releaseDate) || (type === 'pagesCount' && value === book.pagesCount)) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let book of this.books) {
			if (book.name === bookName) {
				this.books.splice(this.books.indexOf(book), 1)
				return book;
			}
		}
		return null;
	}
}

const library = new Library("Центральная городская библиотека");

const novel = new NovelBook("Достоевский Ф.М.", "Преступление и наказание", 1866, 672);
const magazine = new Magazine("Cosmopoliten", 2023, 172);
library.addBook(novel);
library.addBook(magazine);

const bookOf1919Year = library.findBookBy('releaseDate', 1919);
if (!bookOf1919Year) {
	const newBookOf1919Year = new Book("Максим Горький", "Мать", 1919, 406);
	library.addBook(newBookOf1919Year);
}


const givenBook = library.giveBookByName("Преступление и наказание");
givenBook.state = 10;

givenBook.fix();

library.addBook(givenBook);

//задача 3

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		} else {
			if (!this.marks.hasOwnProperty(subject)) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		} else {
			return this.marks[subject].reduce((acc, mark) => acc + mark / this.marks[subject].length, 0);
		}

	}

	getAverage() {
		let subjects = Object.keys(this.marks);
		return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject) / subjects.length, 0);
	}
}