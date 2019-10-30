import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'ngb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book = new Book();

  @Output() newBook: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  saveBook(book: Book) {
    if (!book.id) {
      this.newBook.emit(book);
    }

    this.book = new Book();
  }


}
