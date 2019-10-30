import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(private activateRoute: ActivatedRoute,
              private characterService: CharacterService) { }

  ngOnInit() {
    const id = parseInt(this.activateRoute.snapshot.params.id, 10);
    this.character = this.characterService.getCharacterById(id);
  }

  saveCharacter(character: Character) {
    this.characterService.createCharacter(character);
    this.character = new Character();
  }

}
