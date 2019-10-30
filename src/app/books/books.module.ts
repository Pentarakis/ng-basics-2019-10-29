import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, BookListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [BookComponent, BookListComponent]
})
export class BooksModule { }
