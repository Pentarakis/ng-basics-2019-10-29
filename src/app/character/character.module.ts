import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersRoutingModule } from './characters-routing.module';



@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CharactersRoutingModule
  ]
})
export class CharacterModule { }
