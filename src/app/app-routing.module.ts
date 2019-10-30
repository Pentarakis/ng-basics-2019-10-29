import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './basic-layout/dashboard/dashboard.component';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CharacterComponent } from './character/character/character.component';
import { CharacterListComponent } from './character/character-list/character-list.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'books', component: BookListComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
