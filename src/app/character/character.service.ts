import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl = 'http://localhost:3000/characters';

  private characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian' },
    { id: 2, name: 'Jon Snow', culture: 'Northmen' }
  ];

  constructor(private httpClient: HttpClient) { }

  getCharacter(): Character[] {
    return this.characters;
  }

  getCharacterById(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  createCharacter(character: Character) {
    if (!character.id) {
      character.id = this.characters[this.characters.length - 1].id + 1;
      this.characters.push(character);
    }
  }


}
