import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'ngb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  selectedBook: Book = new Book();

  books: Book[] = [];

  displayedColumns: string[] = ['id', 'name', 'isbn'];

  constructor(private bookService: BookService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  saveNewBook(book: Book) {
    this.bookService.saveBook(book);
    this.changeDetectorRefs.detectChanges();
  }

}
