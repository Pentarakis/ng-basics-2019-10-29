import { Injectable } from '@angular/core';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    { id: 3, name: 'A Storm of Swords', isbn: '978-0553106633' },
    { id: 4, name: 'The Hedge Knight', isbn: '978-0976401100' },
    { id: 5, name: 'A Feast for Crows', isbn: '978-0553801507' }
  ];

  constructor() { }

  saveBook(book: Book) {
    book.id = this.books[this.books.length - 1].id++;
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }
}
