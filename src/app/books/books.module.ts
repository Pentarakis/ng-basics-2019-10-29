import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, BookListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BookComponent, BookListComponent]
})
export class BooksModule { }
