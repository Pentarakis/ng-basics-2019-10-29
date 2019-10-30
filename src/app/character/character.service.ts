import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl = 'http://localhost:3000/characters';

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.baseUrl);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  updateCharacter(character: Character) {
    return this.httpClient.put(`${this.baseUrl}/${character.id}`, character)
      .pipe(catchError(() => {
        this.handleError('Fehler beim Speichern');
        return EMPTY;
      }));
  }
  createCharacter(character: Character) {
  }

  private handleError(msg: string) {
    alert(msg);
  }


}
