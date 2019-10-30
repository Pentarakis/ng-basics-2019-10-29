import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, first, pluck, switchMap } from 'rxjs/operators';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();
  isCreateMode = true;

  constructor(private activateRoute: ActivatedRoute,
              private characterService: CharacterService) { }

  ngOnInit() {

    this.activateRoute.params
      .pipe(
        pluck('id'),
        filter(id => id !== 'create'),
        switchMap(id => this.characterService.getCharacterById(Number(id)))
      )
      .subscribe((character: Character) => this.character = character);
  }

  saveCharacter(character: Character) {
    this.characterService.createCharacter(character);
    this.character = new Character();
  }

}
