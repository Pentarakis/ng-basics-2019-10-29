import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CharactersRoutingModule } from './characters-routing.module';



@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CharactersRoutingModule
  ]
})
export class CharacterModule { }
