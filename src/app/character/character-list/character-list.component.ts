import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  characters: Character[] = [];
  destroy = new Subject();

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters()
      .pipe(takeUntil(this.destroy))
      .subscribe(character => this.characters = character);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

}
