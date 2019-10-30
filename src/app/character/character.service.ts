import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian' },
    { id: 2, name: 'Jon Snow', culture: 'Northmen' }
  ];

  constructor() { }

  getCharacter(): Character[] {
    return this.characters;
  }

  getCharacterById(id: number): Character {
    return this.characters.find(character => character.id === id);
  }

  createCharacter(character: Character) {
    if (!character.id) {
      character.id = this.characters[this.characters.length - 1].id + 1;
      this.characters.push(character);
    }
  }


}
