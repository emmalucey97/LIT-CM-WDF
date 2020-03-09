import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent  {

  public playerForm:FormGroup;

  constructor( private formBuilder:FormBuilder) {
    this.playerForm = formBuilder.group({
      playerName: '',
      playerDOB: '',
      playerGuardian: '',
      playerContact: ''
    })
   }

  private onFormSubmit() : void
  {
    this.playerForm.reset();
  }
}
