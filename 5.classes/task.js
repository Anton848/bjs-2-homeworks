// Базовый класс для печатных изданий
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;           // Название издания
        this.releaseDate = releaseDate; // Дата выпуска
        this.pagesCount = pagesCount;   // Количество страниц
        this.state = 100;           // Состояние по умолчанию
        this.type = null;           // Тип издания
    }

    // Метод для улучшения состояния (подклеивание)
    fix() {
        this.state *= 1.5;          // Увеличиваем состояние в 1.5 раза
    }

    // Геттер для чтения состояния
    get state() {
        return this._state;
    }

    // Сеттер для установки состояния с валидацией
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
}

// Класс Журнал, наследуется от PrintEditionItem
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";     // Тип - журнал
    }
}

// Класс Книга, наследуется от PrintEditionItem
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;       // Автор книги
        this.type = "book";         // Тип - книга
    }
}

// Класс Роман, наследуется от Book
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";        // Тип - роман
    }
}

// Класс Фантастика, наследуется от Book
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";    // Тип - фантастика
    }
}

// Класс Детектив, наследуется от Book
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";    // Тип - детектив
    }
}




class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook !== undefined ? foundBook : null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null;
        }
    }
}

