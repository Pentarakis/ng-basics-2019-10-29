import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  isCreateMode = true;

  characterForm: FormGroup;

  constructor(private activateRoute: ActivatedRoute,
              private characterService: CharacterService,
              private fb: FormBuilder) {
  }

  ngOnInit() {

    this.initForm();

    this.activateRoute.params
      .pipe(
        pluck('id'),
        filter(id => id !== 'create'),
        switchMap(id => this.characterService.getCharacterById(Number(id)))
      )
      .subscribe((character: Character) => {
        this.isCreateMode = false;
        this.characterForm.patchValue(character);
      });
  }

  saveCharacter() {
    if (!this.characterForm.valid) {
      return;
    }
    this.characterService.updateCharacter(this.characterForm.getRawValue())
      .subscribe(() => {
      });
    this.characterForm.patchValue(new Character());
  }

  private initForm() {
    this.characterForm = this.fb.group({
      id : [null, Validators.required],
      name : [null, Validators.required],
      culture : null
    });
  }

}
